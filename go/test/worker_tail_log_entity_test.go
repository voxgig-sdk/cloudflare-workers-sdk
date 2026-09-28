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

func TestWorkerTailLogEntity(t *testing.T) {
	t.Run("instance", func(t *testing.T) {
		testsdk := sdk.TestSDK(nil, nil)
		ent := testsdk.WorkerTailLog(nil)
		if ent == nil {
			t.Fatal("expected non-nil WorkerTailLogEntity")
		}
	})

	// Feature #4: the entity Stream(action, ...) method runs the op pipeline and
	// returns a channel over result items. With the streaming feature active it
	// yields the feature's incremental output; otherwise it falls back to the
	// materialised list so Stream always yields.
	t.Run("stream", func(t *testing.T) {
		seed := map[string]any{
			"entity": map[string]any{
				"worker_tail_log": map[string]any{
					"s1": map[string]any{"id": "s1"},
					"s2": map[string]any{"id": "s2"},
					"s3": map[string]any{"id": "s3"},
				},
			},
		}

		// Fallback: streaming inactive -> yields the materialised list items.
		base := sdk.TestSDK(seed, nil)
		var seen []any
		for item := range base.WorkerTailLog(nil).Stream("list", nil, nil) {
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
			for item := range streamSdk.WorkerTailLog(nil).Stream("list", nil, nil) {
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
		setup := worker_tail_logBasicSetup(nil)
		// Per-op sdk-test-control.json skip — basic test exercises a flow
		// with multiple ops; skipping any op skips the whole flow.
		_mode := "unit"
		if setup.live {
			_mode = "live"
		}
		for _, _op := range []string{"create", "list"} {
			if _shouldSkip, _reason := isControlSkipped("entityOp", "worker_tail_log." + _op, _mode); _shouldSkip {
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
			t.Skip("live entity test uses synthetic IDs from fixture — set CLOUDFLARE_WORKERS_TEST_WORKER_TAIL_LOG_ENTID JSON to run live")
			return
		}
		client := setup.client

		// CREATE
		workerTailLogRef01Ent := client.WorkerTailLog(nil)
		workerTailLogRef01Data := core.ToMapAny(vs.GetProp(
			vs.GetPath(setup.data, []any{"new", "worker_tail_log"}), "worker_tail_log_ref01"))
		workerTailLogRef01Data["account_id"] = setup.idmap["account01"]
		workerTailLogRef01Data["script_name"] = setup.idmap["script_name01"]

		workerTailLogRef01DataResult, err := workerTailLogRef01Ent.Create(workerTailLogRef01Data, nil)
		if err != nil {
			t.Fatalf("create failed: %v", err)
		}
		workerTailLogRef01Data = core.ToMapAny(entityData(workerTailLogRef01DataResult))
		if workerTailLogRef01Data == nil {
			t.Fatal("expected create result to be a map")
		}

		// LIST
		workerTailLogRef01Match := map[string]any{
			"account_id": setup.idmap["account01"],
			"script_name": setup.idmap["script_name01"],
		}

		workerTailLogRef01ListResult, err := workerTailLogRef01Ent.List(workerTailLogRef01Match, nil)
		if err != nil {
			t.Fatalf("list failed: %v", err)
		}
		_, workerTailLogRef01ListOk := workerTailLogRef01ListResult.([]any)
		if !workerTailLogRef01ListOk {
			t.Fatalf("expected list result to be an array, got %T", workerTailLogRef01ListResult)
		}

	})
}

func worker_tail_logBasicSetup(extra map[string]any) *entityTestSetup {
	loadEnvLocal()

	_, filename, _, _ := runtime.Caller(0)
	dir := filepath.Dir(filename)

	entityDataFile := filepath.Join(dir, "..", "..", ".sdk", "test", "entity", "worker_tail_log", "WorkerTailLogTestData.json")

	entityDataSource, err := os.ReadFile(entityDataFile)
	if err != nil {
		panic("failed to read worker_tail_log test data: " + err.Error())
	}

	var entityData map[string]any
	if err := json.Unmarshal(entityDataSource, &entityData); err != nil {
		panic("failed to parse worker_tail_log test data: " + err.Error())
	}

	options := map[string]any{}
	options["entity"] = entityData["existing"]

	client := sdk.TestSDK(options, extra)

	// Generate idmap via transform, matching TS pattern.
	idmap, _ := vs.Transform(
		[]any{"worker_tail_log01", "worker_tail_log02", "worker_tail_log03", "account01", "account02", "account03", "script01", "script02", "script03", "script_name01"},
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
	entidEnvRaw := os.Getenv("CLOUDFLARE_WORKERS_TEST_WORKER_TAIL_LOG_ENTID")
	idmapOverridden := entidEnvRaw != "" && strings.HasPrefix(strings.TrimSpace(entidEnvRaw), "{")

	env := envOverride(map[string]any{
		"CLOUDFLARE_WORKERS_TEST_WORKER_TAIL_LOG_ENTID": idmap,
		"CLOUDFLARE_WORKERS_TEST_LIVE":      "FALSE",
		"CLOUDFLARE_WORKERS_TEST_EXPLAIN":   "FALSE",
		"CLOUDFLARE_WORKERS_APIKEY":         "",
	})

	idmapResolved := core.ToMapAny(env["CLOUDFLARE_WORKERS_TEST_WORKER_TAIL_LOG_ENTID"])
	if idmapResolved == nil {
		idmapResolved = core.ToMapAny(idmap)
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
