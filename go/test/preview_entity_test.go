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

func TestPreviewEntity(t *testing.T) {
	t.Run("instance", func(t *testing.T) {
		testsdk := sdk.TestSDK(nil, nil)
		ent := testsdk.Preview(nil)
		if ent == nil {
			t.Fatal("expected non-nil PreviewEntity")
		}
	})

	// Feature #4: the entity Stream(action, ...) method runs the op pipeline and
	// returns a channel over result items. With the streaming feature active it
	// yields the feature's incremental output; otherwise it falls back to the
	// materialised list so Stream always yields.
	t.Run("stream", func(t *testing.T) {
		seed := map[string]any{
			"entity": map[string]any{
				"preview": map[string]any{
					"s1": map[string]any{"id": "s1"},
					"s2": map[string]any{"id": "s2"},
					"s3": map[string]any{"id": "s3"},
				},
			},
		}

		// Fallback: streaming inactive -> yields the materialised list items.
		base := sdk.TestSDK(seed, nil)
		var seen []any
		for item := range base.Preview(nil).Stream("list", nil, nil) {
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
			for item := range streamSdk.Preview(nil).Stream("list", nil, nil) {
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
		setup := previewBasicSetup(nil)
		// Per-op sdk-test-control.json skip — basic test exercises a flow
		// with multiple ops; skipping any op skips the whole flow.
		_mode := "unit"
		if setup.live {
			_mode = "live"
		}
		for _, _op := range []string{"create", "list", "update", "load", "remove"} {
			if _shouldSkip, _reason := isControlSkipped("entityOp", "preview." + _op, _mode); _shouldSkip {
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
			t.Skip("live entity test uses synthetic IDs from fixture — set CLOUDFLARE_WORKERS_TEST_PREVIEW_ENTID JSON to run live")
			return
		}
		client := setup.client

		// CREATE
		previewRef01Ent := client.Preview(nil)
		previewRef01Data := core.ToMapAny(vs.GetProp(
			vs.GetPath(setup.data, []any{"new", "preview"}), "preview_ref01"))
		previewRef01Data["account_id"] = setup.idmap["account01"]
		previewRef01Data["worker_id"] = setup.idmap["worker01"]

		previewRef01DataResult, err := previewRef01Ent.Create(previewRef01Data, nil)
		if err != nil {
			t.Fatalf("create failed: %v", err)
		}
		previewRef01Data = core.ToMapAny(entityData(previewRef01DataResult))
		if previewRef01Data == nil {
			t.Fatal("expected create result to be a map")
		}
		if previewRef01Data["id"] == nil {
			t.Fatal("expected created entity to have an id")
		}

		// LIST
		previewRef01Match := map[string]any{
			"account_id": setup.idmap["account01"],
			"worker_id": setup.idmap["worker01"],
		}

		previewRef01ListResult, err := previewRef01Ent.List(previewRef01Match, nil)
		if err != nil {
			t.Fatalf("list failed: %v", err)
		}
		previewRef01List, previewRef01ListOk := previewRef01ListResult.([]any)
		if !previewRef01ListOk {
			t.Fatalf("expected list result to be an array, got %T", previewRef01ListResult)
		}

		foundItem := vs.Select(entityListToData(previewRef01List), map[string]any{"id": previewRef01Data["id"]})
		if vs.IsEmpty(foundItem) {
			t.Fatal("expected to find created entity in list")
		}

		// UPDATE
		previewRef01DataUp0Up := map[string]any{
			"id": previewRef01Data["id"],
			"account_id": setup.idmap["account_id"],
			"worker_id": setup.idmap["worker_id"],
		}

		previewRef01ResdataUp0Result, err := previewRef01Ent.Update(previewRef01DataUp0Up, nil)
		if err != nil {
			t.Fatalf("update failed: %v", err)
		}
		previewRef01ResdataUp0 := core.ToMapAny(entityData(previewRef01ResdataUp0Result))
		if previewRef01ResdataUp0 == nil {
			t.Fatal("expected update result to be a map")
		}
		if previewRef01ResdataUp0["id"] != previewRef01DataUp0Up["id"] {
			t.Fatal("expected update result id to match")
		}

		// LOAD
		previewRef01MatchDt0 := map[string]any{
			"id": previewRef01Data["id"],
		}
		previewRef01DataDt0Loaded, err := previewRef01Ent.Load(previewRef01MatchDt0, nil)
		if err != nil {
			t.Fatalf("load failed: %v", err)
		}
		previewRef01DataDt0LoadResult := core.ToMapAny(entityData(previewRef01DataDt0Loaded))
		if previewRef01DataDt0LoadResult == nil {
			t.Fatal("expected load result to be a map")
		}
		if previewRef01DataDt0LoadResult["id"] != previewRef01Data["id"] {
			t.Fatal("expected load result id to match")
		}

		// REMOVE
		previewRef01MatchRm0 := map[string]any{
			"id": previewRef01Data["id"],
		}
		_, err = previewRef01Ent.Remove(previewRef01MatchRm0, nil)
		if err != nil {
			t.Fatalf("remove failed: %v", err)
		}

		// LIST
		previewRef01MatchRt0 := map[string]any{
			"account_id": setup.idmap["account01"],
			"worker_id": setup.idmap["worker01"],
		}

		previewRef01ListRt0Result, err := previewRef01Ent.List(previewRef01MatchRt0, nil)
		if err != nil {
			t.Fatalf("list failed: %v", err)
		}
		previewRef01ListRt0, previewRef01ListRt0Ok := previewRef01ListRt0Result.([]any)
		if !previewRef01ListRt0Ok {
			t.Fatalf("expected list result to be an array, got %T", previewRef01ListRt0Result)
		}

		notFoundItem := vs.Select(entityListToData(previewRef01ListRt0), map[string]any{"id": previewRef01Data["id"]})
		if !vs.IsEmpty(notFoundItem) {
			t.Fatal("expected removed entity to not be in list")
		}

	})
}

func previewBasicSetup(extra map[string]any) *entityTestSetup {
	loadEnvLocal()

	_, filename, _, _ := runtime.Caller(0)
	dir := filepath.Dir(filename)

	entityDataFile := filepath.Join(dir, "..", "..", ".sdk", "test", "entity", "preview", "PreviewTestData.json")

	entityDataSource, err := os.ReadFile(entityDataFile)
	if err != nil {
		panic("failed to read preview test data: " + err.Error())
	}

	var entityData map[string]any
	if err := json.Unmarshal(entityDataSource, &entityData); err != nil {
		panic("failed to parse preview test data: " + err.Error())
	}

	options := map[string]any{}
	options["entity"] = entityData["existing"]

	client := sdk.TestSDK(options, extra)

	// Generate idmap via transform, matching TS pattern.
	idmap, _ := vs.Transform(
		[]any{"preview01", "preview02", "preview03", "account01", "account02", "account03", "worker01", "worker02", "worker03"},
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
	entidEnvRaw := os.Getenv("CLOUDFLARE_WORKERS_TEST_PREVIEW_ENTID")
	idmapOverridden := entidEnvRaw != "" && strings.HasPrefix(strings.TrimSpace(entidEnvRaw), "{")

	env := envOverride(map[string]any{
		"CLOUDFLARE_WORKERS_TEST_PREVIEW_ENTID": idmap,
		"CLOUDFLARE_WORKERS_TEST_LIVE":      "FALSE",
		"CLOUDFLARE_WORKERS_TEST_EXPLAIN":   "FALSE",
		"CLOUDFLARE_WORKERS_APIKEY":         "",
	})

	idmapResolved := core.ToMapAny(env["CLOUDFLARE_WORKERS_TEST_PREVIEW_ENTID"])
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
