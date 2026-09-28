package sdktest

import (
	"encoding/json"
	"fmt"
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

func TestWorkersPipelinesOtherEntity(t *testing.T) {
	t.Run("instance", func(t *testing.T) {
		testsdk := sdk.TestSDK(nil, nil)
		ent := testsdk.WorkersPipelinesOther(nil)
		if ent == nil {
			t.Fatal("expected non-nil WorkersPipelinesOtherEntity")
		}
	})

	// Feature #4: the entity Stream(action, ...) method runs the op pipeline and
	// returns a channel over result items. With the streaming feature active it
	// yields the feature's incremental output; otherwise it falls back to the
	// materialised list so Stream always yields.
	t.Run("stream", func(t *testing.T) {
		seed := map[string]any{
			"entity": map[string]any{
				"workers_pipelines_other": map[string]any{
					"s1": map[string]any{"id": "s1"},
					"s2": map[string]any{"id": "s2"},
					"s3": map[string]any{"id": "s3"},
				},
			},
		}

		// Fallback: streaming inactive -> yields the materialised list items.
		base := sdk.TestSDK(seed, nil)
		var seen []any
		for item := range base.WorkersPipelinesOther(nil).Stream("list", nil, nil) {
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
			for item := range streamSdk.WorkersPipelinesOther(nil).Stream("list", nil, nil) {
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
		setup := workers_pipelines_otherBasicSetup(nil)
		// Per-op sdk-test-control.json skip — basic test exercises a flow
		// with multiple ops; skipping any op skips the whole flow.
		_mode := "unit"
		if setup.live {
			_mode = "live"
		}
		for _, _op := range []string{"create", "list", "update", "load", "remove"} {
			if _shouldSkip, _reason := isControlSkipped("entityOp", "workers_pipelines_other." + _op, _mode); _shouldSkip {
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
			t.Skip("live entity test uses synthetic IDs from fixture — set CLOUDFLARE_WORKERS_TEST_WORKERS_PIPELINES_OTHER_ENTID JSON to run live")
			return
		}
		client := setup.client

		// CREATE
		workersPipelinesOtherRef01Ent := client.WorkersPipelinesOther(nil)
		workersPipelinesOtherRef01Data := core.ToMapAny(vs.GetProp(
			vs.GetPath(setup.data, []any{"new", "workers_pipelines_other"}), "workers_pipelines_other_ref01"))
		workersPipelinesOtherRef01Data["account_id"] = setup.idmap["account01"]

		workersPipelinesOtherRef01DataResult, err := workersPipelinesOtherRef01Ent.Create(workersPipelinesOtherRef01Data, nil)
		if err != nil {
			t.Fatalf("create failed: %v", err)
		}
		workersPipelinesOtherRef01Data = core.ToMapAny(entityData(workersPipelinesOtherRef01DataResult))
		if workersPipelinesOtherRef01Data == nil {
			t.Fatal("expected create result to be a map")
		}
		if workersPipelinesOtherRef01Data["id"] == nil {
			t.Fatal("expected created entity to have an id")
		}

		// LIST
		workersPipelinesOtherRef01Match := map[string]any{
			"account_id": setup.idmap["account01"],
		}

		workersPipelinesOtherRef01ListResult, err := workersPipelinesOtherRef01Ent.List(workersPipelinesOtherRef01Match, nil)
		if err != nil {
			t.Fatalf("list failed: %v", err)
		}
		workersPipelinesOtherRef01List, workersPipelinesOtherRef01ListOk := workersPipelinesOtherRef01ListResult.([]any)
		if !workersPipelinesOtherRef01ListOk {
			t.Fatalf("expected list result to be an array, got %T", workersPipelinesOtherRef01ListResult)
		}

		foundItem := vs.Select(entityListToData(workersPipelinesOtherRef01List), map[string]any{"id": workersPipelinesOtherRef01Data["id"]})
		if vs.IsEmpty(foundItem) {
			t.Fatal("expected to find created entity in list")
		}

		// UPDATE
		workersPipelinesOtherRef01DataUp0Up := map[string]any{
			"id": workersPipelinesOtherRef01Data["id"],
			"account_id": setup.idmap["account_id"],
		}

		workersPipelinesOtherRef01MarkdefUp0Name := "created_at"
		workersPipelinesOtherRef01MarkdefUp0Value := fmt.Sprintf("Mark01-workers_pipelines_other_ref01_%d", setup.now)
		workersPipelinesOtherRef01DataUp0Up[workersPipelinesOtherRef01MarkdefUp0Name] = workersPipelinesOtherRef01MarkdefUp0Value

		workersPipelinesOtherRef01ResdataUp0Result, err := workersPipelinesOtherRef01Ent.Update(workersPipelinesOtherRef01DataUp0Up, nil)
		if err != nil {
			t.Fatalf("update failed: %v", err)
		}
		workersPipelinesOtherRef01ResdataUp0 := core.ToMapAny(entityData(workersPipelinesOtherRef01ResdataUp0Result))
		if workersPipelinesOtherRef01ResdataUp0 == nil {
			t.Fatal("expected update result to be a map")
		}
		if workersPipelinesOtherRef01ResdataUp0["id"] != workersPipelinesOtherRef01DataUp0Up["id"] {
			t.Fatal("expected update result id to match")
		}
		if workersPipelinesOtherRef01ResdataUp0[workersPipelinesOtherRef01MarkdefUp0Name] != workersPipelinesOtherRef01MarkdefUp0Value {
			t.Fatalf("expected %s to be updated, got %v", workersPipelinesOtherRef01MarkdefUp0Name, workersPipelinesOtherRef01ResdataUp0[workersPipelinesOtherRef01MarkdefUp0Name])
		}

		// LOAD
		workersPipelinesOtherRef01MatchDt0 := map[string]any{
			"id": workersPipelinesOtherRef01Data["id"],
		}
		workersPipelinesOtherRef01DataDt0Loaded, err := workersPipelinesOtherRef01Ent.Load(workersPipelinesOtherRef01MatchDt0, nil)
		if err != nil {
			t.Fatalf("load failed: %v", err)
		}
		workersPipelinesOtherRef01DataDt0LoadResult := core.ToMapAny(entityData(workersPipelinesOtherRef01DataDt0Loaded))
		if workersPipelinesOtherRef01DataDt0LoadResult == nil {
			t.Fatal("expected load result to be a map")
		}
		if workersPipelinesOtherRef01DataDt0LoadResult["id"] != workersPipelinesOtherRef01Data["id"] {
			t.Fatal("expected load result id to match")
		}

		// REMOVE
		workersPipelinesOtherRef01MatchRm0 := map[string]any{
			"id": workersPipelinesOtherRef01Data["id"],
		}
		_, err = workersPipelinesOtherRef01Ent.Remove(workersPipelinesOtherRef01MatchRm0, nil)
		if err != nil {
			t.Fatalf("remove failed: %v", err)
		}

		// LIST
		workersPipelinesOtherRef01MatchRt0 := map[string]any{
			"account_id": setup.idmap["account01"],
		}

		workersPipelinesOtherRef01ListRt0Result, err := workersPipelinesOtherRef01Ent.List(workersPipelinesOtherRef01MatchRt0, nil)
		if err != nil {
			t.Fatalf("list failed: %v", err)
		}
		workersPipelinesOtherRef01ListRt0, workersPipelinesOtherRef01ListRt0Ok := workersPipelinesOtherRef01ListRt0Result.([]any)
		if !workersPipelinesOtherRef01ListRt0Ok {
			t.Fatalf("expected list result to be an array, got %T", workersPipelinesOtherRef01ListRt0Result)
		}

		notFoundItem := vs.Select(entityListToData(workersPipelinesOtherRef01ListRt0), map[string]any{"id": workersPipelinesOtherRef01Data["id"]})
		if !vs.IsEmpty(notFoundItem) {
			t.Fatal("expected removed entity to not be in list")
		}

	})
}

func workers_pipelines_otherBasicSetup(extra map[string]any) *entityTestSetup {
	loadEnvLocal()

	_, filename, _, _ := runtime.Caller(0)
	dir := filepath.Dir(filename)

	entityDataFile := filepath.Join(dir, "..", "..", ".sdk", "test", "entity", "workers_pipelines_other", "WorkersPipelinesOtherTestData.json")

	entityDataSource, err := os.ReadFile(entityDataFile)
	if err != nil {
		panic("failed to read workers_pipelines_other test data: " + err.Error())
	}

	var entityData map[string]any
	if err := json.Unmarshal(entityDataSource, &entityData); err != nil {
		panic("failed to parse workers_pipelines_other test data: " + err.Error())
	}

	options := map[string]any{}
	options["entity"] = entityData["existing"]

	client := sdk.TestSDK(options, extra)

	// Generate idmap via transform, matching TS pattern.
	idmap, _ := vs.Transform(
		[]any{"workers_pipelines_other01", "workers_pipelines_other02", "workers_pipelines_other03", "account01", "account02", "account03"},
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
	entidEnvRaw := os.Getenv("CLOUDFLARE_WORKERS_TEST_WORKERS_PIPELINES_OTHER_ENTID")
	idmapOverridden := entidEnvRaw != "" && strings.HasPrefix(strings.TrimSpace(entidEnvRaw), "{")

	env := envOverride(map[string]any{
		"CLOUDFLARE_WORKERS_TEST_WORKERS_PIPELINES_OTHER_ENTID": idmap,
		"CLOUDFLARE_WORKERS_TEST_LIVE":      "FALSE",
		"CLOUDFLARE_WORKERS_TEST_EXPLAIN":   "FALSE",
		"CLOUDFLARE_WORKERS_APIKEY":         "",
	})

	idmapResolved := core.ToMapAny(env["CLOUDFLARE_WORKERS_TEST_WORKERS_PIPELINES_OTHER_ENTID"])
	if idmapResolved == nil {
		idmapResolved = core.ToMapAny(idmap)
	}
	// Add account_id alias for update test.
	if idmapResolved["account_id"] == nil {
		idmapResolved["account_id"] = idmapResolved["account01"]
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
