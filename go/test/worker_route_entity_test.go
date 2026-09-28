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

func TestWorkerRouteEntity(t *testing.T) {
	t.Run("instance", func(t *testing.T) {
		testsdk := sdk.TestSDK(nil, nil)
		ent := testsdk.WorkerRoute(nil)
		if ent == nil {
			t.Fatal("expected non-nil WorkerRouteEntity")
		}
	})

	// Feature #4: the entity Stream(action, ...) method runs the op pipeline and
	// returns a channel over result items. With the streaming feature active it
	// yields the feature's incremental output; otherwise it falls back to the
	// materialised list so Stream always yields.
	t.Run("stream", func(t *testing.T) {
		seed := map[string]any{
			"entity": map[string]any{
				"worker_route": map[string]any{
					"s1": map[string]any{"id": "s1"},
					"s2": map[string]any{"id": "s2"},
					"s3": map[string]any{"id": "s3"},
				},
			},
		}

		// Fallback: streaming inactive -> yields the materialised list items.
		base := sdk.TestSDK(seed, nil)
		var seen []any
		for item := range base.WorkerRoute(nil).Stream("list", nil, nil) {
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
			for item := range streamSdk.WorkerRoute(nil).Stream("list", nil, nil) {
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
		setup := worker_routeBasicSetup(nil)
		// Per-op sdk-test-control.json skip — basic test exercises a flow
		// with multiple ops; skipping any op skips the whole flow.
		_mode := "unit"
		if setup.live {
			_mode = "live"
		}
		for _, _op := range []string{"create", "list", "update", "load", "remove"} {
			if _shouldSkip, _reason := isControlSkipped("entityOp", "worker_route." + _op, _mode); _shouldSkip {
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
			t.Skip("live entity test uses synthetic IDs from fixture — set CLOUDFLARE_WORKERS_TEST_WORKER_ROUTE_ENTID JSON to run live")
			return
		}
		client := setup.client

		// CREATE
		workerRouteRef01Ent := client.WorkerRoute(nil)
		workerRouteRef01Data := core.ToMapAny(vs.GetProp(
			vs.GetPath(setup.data, []any{"new", "worker_route"}), "worker_route_ref01"))
		workerRouteRef01Data["zone_id"] = setup.idmap["zone01"]

		workerRouteRef01DataResult, err := workerRouteRef01Ent.Create(workerRouteRef01Data, nil)
		if err != nil {
			t.Fatalf("create failed: %v", err)
		}
		workerRouteRef01Data = core.ToMapAny(entityData(workerRouteRef01DataResult))
		if workerRouteRef01Data == nil {
			t.Fatal("expected create result to be a map")
		}
		if workerRouteRef01Data["id"] == nil {
			t.Fatal("expected created entity to have an id")
		}

		// LIST
		workerRouteRef01Match := map[string]any{
			"zone_id": setup.idmap["zone01"],
		}

		workerRouteRef01ListResult, err := workerRouteRef01Ent.List(workerRouteRef01Match, nil)
		if err != nil {
			t.Fatalf("list failed: %v", err)
		}
		workerRouteRef01List, workerRouteRef01ListOk := workerRouteRef01ListResult.([]any)
		if !workerRouteRef01ListOk {
			t.Fatalf("expected list result to be an array, got %T", workerRouteRef01ListResult)
		}

		foundItem := vs.Select(entityListToData(workerRouteRef01List), map[string]any{"id": workerRouteRef01Data["id"]})
		if vs.IsEmpty(foundItem) {
			t.Fatal("expected to find created entity in list")
		}

		// UPDATE
		workerRouteRef01DataUp0Up := map[string]any{
			"id": workerRouteRef01Data["id"],
			"zone_id": setup.idmap["zone_id"],
		}

		workerRouteRef01MarkdefUp0Name := "pattern"
		workerRouteRef01MarkdefUp0Value := fmt.Sprintf("Mark01-worker_route_ref01_%d", setup.now)
		workerRouteRef01DataUp0Up[workerRouteRef01MarkdefUp0Name] = workerRouteRef01MarkdefUp0Value

		workerRouteRef01ResdataUp0Result, err := workerRouteRef01Ent.Update(workerRouteRef01DataUp0Up, nil)
		if err != nil {
			t.Fatalf("update failed: %v", err)
		}
		workerRouteRef01ResdataUp0 := core.ToMapAny(entityData(workerRouteRef01ResdataUp0Result))
		if workerRouteRef01ResdataUp0 == nil {
			t.Fatal("expected update result to be a map")
		}
		if workerRouteRef01ResdataUp0["id"] != workerRouteRef01DataUp0Up["id"] {
			t.Fatal("expected update result id to match")
		}
		if workerRouteRef01ResdataUp0[workerRouteRef01MarkdefUp0Name] != workerRouteRef01MarkdefUp0Value {
			t.Fatalf("expected %s to be updated, got %v", workerRouteRef01MarkdefUp0Name, workerRouteRef01ResdataUp0[workerRouteRef01MarkdefUp0Name])
		}

		// LOAD
		workerRouteRef01MatchDt0 := map[string]any{
			"id": workerRouteRef01Data["id"],
		}
		workerRouteRef01DataDt0Loaded, err := workerRouteRef01Ent.Load(workerRouteRef01MatchDt0, nil)
		if err != nil {
			t.Fatalf("load failed: %v", err)
		}
		workerRouteRef01DataDt0LoadResult := core.ToMapAny(entityData(workerRouteRef01DataDt0Loaded))
		if workerRouteRef01DataDt0LoadResult == nil {
			t.Fatal("expected load result to be a map")
		}
		if workerRouteRef01DataDt0LoadResult["id"] != workerRouteRef01Data["id"] {
			t.Fatal("expected load result id to match")
		}

		// REMOVE
		workerRouteRef01MatchRm0 := map[string]any{
			"id": workerRouteRef01Data["id"],
		}
		_, err = workerRouteRef01Ent.Remove(workerRouteRef01MatchRm0, nil)
		if err != nil {
			t.Fatalf("remove failed: %v", err)
		}

		// LIST
		workerRouteRef01MatchRt0 := map[string]any{
			"zone_id": setup.idmap["zone01"],
		}

		workerRouteRef01ListRt0Result, err := workerRouteRef01Ent.List(workerRouteRef01MatchRt0, nil)
		if err != nil {
			t.Fatalf("list failed: %v", err)
		}
		workerRouteRef01ListRt0, workerRouteRef01ListRt0Ok := workerRouteRef01ListRt0Result.([]any)
		if !workerRouteRef01ListRt0Ok {
			t.Fatalf("expected list result to be an array, got %T", workerRouteRef01ListRt0Result)
		}

		notFoundItem := vs.Select(entityListToData(workerRouteRef01ListRt0), map[string]any{"id": workerRouteRef01Data["id"]})
		if !vs.IsEmpty(notFoundItem) {
			t.Fatal("expected removed entity to not be in list")
		}

	})
}

func worker_routeBasicSetup(extra map[string]any) *entityTestSetup {
	loadEnvLocal()

	_, filename, _, _ := runtime.Caller(0)
	dir := filepath.Dir(filename)

	entityDataFile := filepath.Join(dir, "..", "..", ".sdk", "test", "entity", "worker_route", "WorkerRouteTestData.json")

	entityDataSource, err := os.ReadFile(entityDataFile)
	if err != nil {
		panic("failed to read worker_route test data: " + err.Error())
	}

	var entityData map[string]any
	if err := json.Unmarshal(entityDataSource, &entityData); err != nil {
		panic("failed to parse worker_route test data: " + err.Error())
	}

	options := map[string]any{}
	options["entity"] = entityData["existing"]

	client := sdk.TestSDK(options, extra)

	// Generate idmap via transform, matching TS pattern.
	idmap, _ := vs.Transform(
		[]any{"worker_route01", "worker_route02", "worker_route03", "zone01"},
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
	entidEnvRaw := os.Getenv("CLOUDFLARE_WORKERS_TEST_WORKER_ROUTE_ENTID")
	idmapOverridden := entidEnvRaw != "" && strings.HasPrefix(strings.TrimSpace(entidEnvRaw), "{")

	env := envOverride(map[string]any{
		"CLOUDFLARE_WORKERS_TEST_WORKER_ROUTE_ENTID": idmap,
		"CLOUDFLARE_WORKERS_TEST_LIVE":      "FALSE",
		"CLOUDFLARE_WORKERS_TEST_EXPLAIN":   "FALSE",
		"CLOUDFLARE_WORKERS_APIKEY":         "",
	})

	idmapResolved := core.ToMapAny(env["CLOUDFLARE_WORKERS_TEST_WORKER_ROUTE_ENTID"])
	if idmapResolved == nil {
		idmapResolved = core.ToMapAny(idmap)
	}
	// Add zone_id alias for update test.
	if idmapResolved["zone_id"] == nil {
		idmapResolved["zone_id"] = idmapResolved["zone01"]
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
