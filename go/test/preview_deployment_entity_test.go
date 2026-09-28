package sdktest

import (
	"encoding/json"
	"os"
	"path/filepath"
	"runtime"
	"strings"
	"testing"
	"time"

	sdk "github.com/voxgig-sdk/cloudflare-workers-sdk/go"
	"github.com/voxgig-sdk/cloudflare-workers-sdk/go/core"

	vs "github.com/voxgig-sdk/cloudflare-workers-sdk/go/utility/struct"
)

func TestPreviewDeploymentEntity(t *testing.T) {
	t.Run("instance", func(t *testing.T) {
		testsdk := sdk.TestSDK(nil, nil)
		ent := testsdk.PreviewDeployment(nil)
		if ent == nil {
			t.Fatal("expected non-nil PreviewDeploymentEntity")
		}
	})

	// Feature #4: the entity Stream(action, ...) method runs the op pipeline and
	// returns a channel over result items. With the streaming feature active it
	// yields the feature's incremental output; otherwise it falls back to the
	// materialised list so Stream always yields.
	t.Run("stream", func(t *testing.T) {
		seed := map[string]any{
			"entity": map[string]any{
				"preview_deployment": map[string]any{
					"s1": map[string]any{"id": "s1"},
					"s2": map[string]any{"id": "s2"},
					"s3": map[string]any{"id": "s3"},
				},
			},
		}

		// Fallback: streaming inactive -> yields the materialised list items.
		base := sdk.TestSDK(seed, nil)
		var seen []any
		for item := range base.PreviewDeployment(nil).Stream("list", nil, nil) {
			seen = append(seen, item)
		}
		if len(seen) != 3 {
			t.Fatalf("expected 3 streamed items, got %d", len(seen))
		}

		// Inbound: streaming active -> yields each item from the feature iterator.
		hasStreaming := false
		if fm, ok := core.SharedConfig()["feature"].(map[string]any); ok {
			_, hasStreaming = fm["streaming"]
		}
		if hasStreaming {
			streamSdk := sdk.TestSDK(seed, map[string]any{
				"feature": map[string]any{"streaming": map[string]any{"active": true}},
			})
			var got []any
			for item := range streamSdk.PreviewDeployment(nil).Stream("list", nil, nil) {
				if sub, ok := item.([]any); ok {
					got = append(got, sub...)
				} else {
					got = append(got, item)
				}
			}
			if len(got) != 3 {
				t.Fatalf("expected 3 items via streaming feature, got %d", len(got))
			}
		}
	})

	t.Run("basic", func(t *testing.T) {
		setup := preview_deploymentBasicSetup(nil)
		// Per-op sdk-test-control.json skip — basic test exercises a flow
		// with multiple ops; skipping any op skips the whole flow.
		_mode := "unit"
		if setup.live {
			_mode = "live"
		}
		for _, _op := range []string{"create", "list", "update", "load"} {
			if _shouldSkip, _reason := isControlSkipped("entityOp", "preview_deployment." + _op, _mode); _shouldSkip {
				if _reason == "" {
					_reason = "skipped via sdk-test-control.json"
				}
				t.Skip(_reason)
				return
			}
		}
		// The basic flow consumes synthetic IDs from the fixture. In live mode
		// without an *_ENTID env override, those IDs hit the live API and 4xx.
		if setup.syntheticOnly {
			t.Skip("live entity test uses synthetic IDs from fixture — set CLOUDFLARE_WORKERS_TEST_PREVIEW_DEPLOYMENT_ENTID JSON to run live")
			return
		}
		client := setup.client

		// CREATE
		previewDeploymentRef01Ent := client.PreviewDeployment(nil)
		previewDeploymentRef01Data := core.ToMapAny(vs.GetProp(
			vs.GetPath(setup.data, []any{"new", "preview_deployment"}), "preview_deployment_ref01"))
		previewDeploymentRef01Data["account_id"] = setup.idmap["account01"]
		previewDeploymentRef01Data["preview_id"] = setup.idmap["preview01"]
		previewDeploymentRef01Data["worker_id"] = setup.idmap["worker01"]

		previewDeploymentRef01DataResult, err := previewDeploymentRef01Ent.Create(previewDeploymentRef01Data, nil)
		if err != nil {
			t.Fatalf("create failed: %v", err)
		}
		previewDeploymentRef01Data = core.ToMapAny(entityData(previewDeploymentRef01DataResult))
		if previewDeploymentRef01Data == nil {
			t.Fatal("expected create result to be a map")
		}
		if previewDeploymentRef01Data["id"] == nil {
			t.Fatal("expected created entity to have an id")
		}

		// LIST
		previewDeploymentRef01Match := map[string]any{
			"account_id": setup.idmap["account01"],
			"preview_id": setup.idmap["preview01"],
			"worker_id": setup.idmap["worker01"],
		}

		previewDeploymentRef01ListResult, err := previewDeploymentRef01Ent.List(previewDeploymentRef01Match, nil)
		if err != nil {
			t.Fatalf("list failed: %v", err)
		}
		previewDeploymentRef01List, previewDeploymentRef01ListOk := previewDeploymentRef01ListResult.([]any)
		if !previewDeploymentRef01ListOk {
			t.Fatalf("expected list result to be an array, got %T", previewDeploymentRef01ListResult)
		}

		foundItem := vs.Select(entityListToData(previewDeploymentRef01List), map[string]any{"id": previewDeploymentRef01Data["id"]})
		if vs.IsEmpty(foundItem) {
			t.Fatal("expected to find created entity in list")
		}

		// UPDATE
		previewDeploymentRef01DataUp0Up := map[string]any{
			"id": previewDeploymentRef01Data["id"],
			"account_id": setup.idmap["account_id"],
			"worker_id": setup.idmap["worker_id"],
		}

		previewDeploymentRef01ResdataUp0Result, err := previewDeploymentRef01Ent.Update(previewDeploymentRef01DataUp0Up, nil)
		if err != nil {
			t.Fatalf("update failed: %v", err)
		}
		previewDeploymentRef01ResdataUp0 := core.ToMapAny(entityData(previewDeploymentRef01ResdataUp0Result))
		if previewDeploymentRef01ResdataUp0 == nil {
			t.Fatal("expected update result to be a map")
		}
		if previewDeploymentRef01ResdataUp0["id"] != previewDeploymentRef01DataUp0Up["id"] {
			t.Fatal("expected update result id to match")
		}

		// LOAD
		previewDeploymentRef01MatchDt0 := map[string]any{
			"id": previewDeploymentRef01Data["id"],
		}
		previewDeploymentRef01DataDt0Loaded, err := previewDeploymentRef01Ent.Load(previewDeploymentRef01MatchDt0, nil)
		if err != nil {
			t.Fatalf("load failed: %v", err)
		}
		previewDeploymentRef01DataDt0LoadResult := core.ToMapAny(entityData(previewDeploymentRef01DataDt0Loaded))
		if previewDeploymentRef01DataDt0LoadResult == nil {
			t.Fatal("expected load result to be a map")
		}
		if previewDeploymentRef01DataDt0LoadResult["id"] != previewDeploymentRef01Data["id"] {
			t.Fatal("expected load result id to match")
		}

	})
}

func preview_deploymentBasicSetup(extra map[string]any) *entityTestSetup {
	loadEnvLocal()

	_, filename, _, _ := runtime.Caller(0)
	dir := filepath.Dir(filename)

	entityDataFile := filepath.Join(dir, "..", "..", ".sdk", "test", "entity", "preview_deployment", "PreviewDeploymentTestData.json")

	entityDataSource, err := os.ReadFile(entityDataFile)
	if err != nil {
		panic("failed to read preview_deployment test data: " + err.Error())
	}

	var entityData map[string]any
	if err := json.Unmarshal(entityDataSource, &entityData); err != nil {
		panic("failed to parse preview_deployment test data: " + err.Error())
	}

	options := map[string]any{}
	options["entity"] = entityData["existing"]

	client := sdk.TestSDK(options, extra)

	// Generate idmap via transform, matching TS pattern.
	idmap, _ := vs.Transform(
		[]any{"preview_deployment01", "preview_deployment02", "preview_deployment03", "account01", "account02", "account03", "worker01", "worker02", "worker03", "preview01", "preview02", "preview03"},
		map[string]any{
			"`$PACK`": []any{"", map[string]any{
				"`$KEY`": "`$COPY`",
				"`$VAL`": []any{"`$FORMAT`", "upper", "`$COPY`"},
			}},
		},
	)

	// Detect ENTID env override before envOverride consumes it. When live
	// mode is on without a real override, the basic test runs against synthetic
	// IDs from the fixture and 4xx's. Surface this so the test can skip.
	entidEnvRaw := os.Getenv("CLOUDFLARE_WORKERS_TEST_PREVIEW_DEPLOYMENT_ENTID")
	idmapOverridden := entidEnvRaw != "" && strings.HasPrefix(strings.TrimSpace(entidEnvRaw), "{")

	env := envOverride(map[string]any{
		"CLOUDFLARE_WORKERS_TEST_PREVIEW_DEPLOYMENT_ENTID": idmap,
		"CLOUDFLARE_WORKERS_TEST_LIVE":      "FALSE",
		"CLOUDFLARE_WORKERS_TEST_EXPLAIN":   "FALSE",
		"CLOUDFLARE_WORKERS_APIKEY":         "",
	})

	idmapResolved := core.ToMapAny(env["CLOUDFLARE_WORKERS_TEST_PREVIEW_DEPLOYMENT_ENTID"])
	if idmapResolved == nil {
		idmapResolved = core.ToMapAny(idmap)
	}
	// Add account_id alias for update test.
	if idmapResolved["account_id"] == nil {
		idmapResolved["account_id"] = idmapResolved["account01"]
	}
	// Add worker_id alias for update test.
	if idmapResolved["worker_id"] == nil {
		idmapResolved["worker_id"] = idmapResolved["worker01"]
	}

	if env["CLOUDFLARE_WORKERS_TEST_LIVE"] == "TRUE" {
		// An empty map, not a nil one: Merge returns nil when its last entry
		// is nil, and BasicSetup is normally called with no extras - so a
		// bare nil silently discarded the apikey and server values below.
		extraOpts := extra
		if extraOpts == nil {
			extraOpts = map[string]any{}
		}

		mergedOpts := vs.Merge([]any{
			// liveClientOptions() FIRST, so the generated fields below win:
			// sdk-test-control.json's test.client.options adds to the live
			// client, it does not redirect it.
			liveClientOptions(),
			map[string]any{
				"apikey": env["CLOUDFLARE_WORKERS_APIKEY"],
			},
			extraOpts,
		})
		client = sdk.NewCloudflareWorkersSDK(core.ToMapAny(mergedOpts))
	}

	live := env["CLOUDFLARE_WORKERS_TEST_LIVE"] == "TRUE"
	return &entityTestSetup{
		client:        client,
		data:          entityData,
		idmap:         idmapResolved,
		env:           env,
		explain:       env["CLOUDFLARE_WORKERS_TEST_EXPLAIN"] == "TRUE",
		live:          live,
		syntheticOnly: live && !idmapOverridden,
		now:           time.Now().UnixMilli(),
	}
}
