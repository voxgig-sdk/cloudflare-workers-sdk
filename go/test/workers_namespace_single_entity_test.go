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

func TestWorkersNamespaceSingleEntity(t *testing.T) {
	t.Run("instance", func(t *testing.T) {
		testsdk := sdk.TestSDK(nil, nil)
		ent := testsdk.WorkersNamespaceSingle(nil)
		if ent == nil {
			t.Fatal("expected non-nil WorkersNamespaceSingleEntity")
		}
	})

	t.Run("basic", func(t *testing.T) {
		setup := workers_namespace_singleBasicSetup(nil)
		// Per-op sdk-test-control.json skip — basic test exercises a flow
		// with multiple ops; skipping any op skips the whole flow.
		_mode := "unit"
		if setup.live {
			_mode = "live"
		}
		for _, _op := range []string{"create", "update", "load"} {
			if _shouldSkip, _reason := isControlSkipped("entityOp", "workers_namespace_single." + _op, _mode); _shouldSkip {
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
			t.Skip("live entity test uses synthetic IDs from fixture — set CLOUDFLARE_WORKERS_TEST_WORKERS_NAMESPACE_SINGLE_ENTID JSON to run live")
			return
		}
		client := setup.client

		// CREATE
		workersNamespaceSingleRef01Ent := client.WorkersNamespaceSingle(nil)
		workersNamespaceSingleRef01Data := core.ToMapAny(vs.GetProp(
			vs.GetPath(setup.data, []any{"new", "workers_namespace_single"}), "workers_namespace_single_ref01"))
		workersNamespaceSingleRef01Data["account_id"] = setup.idmap["account01"]

		workersNamespaceSingleRef01DataResult, err := workersNamespaceSingleRef01Ent.Create(workersNamespaceSingleRef01Data, nil)
		if err != nil {
			t.Fatalf("create failed: %v", err)
		}
		workersNamespaceSingleRef01Data = core.ToMapAny(entityData(workersNamespaceSingleRef01DataResult))
		if workersNamespaceSingleRef01Data == nil {
			t.Fatal("expected create result to be a map")
		}

		// UPDATE
		workersNamespaceSingleRef01DataUp0Up := map[string]any{
			"account_id": setup.idmap["account_id"],
		}

		workersNamespaceSingleRef01MarkdefUp0Name := "name"
		workersNamespaceSingleRef01MarkdefUp0Value := fmt.Sprintf("Mark01-workers_namespace_single_ref01_%d", setup.now)
		workersNamespaceSingleRef01DataUp0Up[workersNamespaceSingleRef01MarkdefUp0Name] = workersNamespaceSingleRef01MarkdefUp0Value

		workersNamespaceSingleRef01ResdataUp0Result, err := workersNamespaceSingleRef01Ent.Update(workersNamespaceSingleRef01DataUp0Up, nil)
		if err != nil {
			t.Fatalf("update failed: %v", err)
		}
		workersNamespaceSingleRef01ResdataUp0 := core.ToMapAny(entityData(workersNamespaceSingleRef01ResdataUp0Result))
		if workersNamespaceSingleRef01ResdataUp0 == nil {
			t.Fatal("expected update result to be a map")
		}
		if workersNamespaceSingleRef01ResdataUp0[workersNamespaceSingleRef01MarkdefUp0Name] != workersNamespaceSingleRef01MarkdefUp0Value {
			t.Fatalf("expected %s to be updated, got %v", workersNamespaceSingleRef01MarkdefUp0Name, workersNamespaceSingleRef01ResdataUp0[workersNamespaceSingleRef01MarkdefUp0Name])
		}

		// LOAD
		workersNamespaceSingleRef01MatchDt0 := map[string]any{}
		workersNamespaceSingleRef01DataDt0Loaded, err := workersNamespaceSingleRef01Ent.Load(workersNamespaceSingleRef01MatchDt0, nil)
		if err != nil {
			t.Fatalf("load failed: %v", err)
		}
		if workersNamespaceSingleRef01DataDt0Loaded == nil {
			t.Fatal("expected load result to be non-nil")
		}

	})
}

func workers_namespace_singleBasicSetup(extra map[string]any) *entityTestSetup {
	loadEnvLocal()

	_, filename, _, _ := runtime.Caller(0)
	dir := filepath.Dir(filename)

	entityDataFile := filepath.Join(dir, "..", "..", ".sdk", "test", "entity", "workers_namespace_single", "WorkersNamespaceSingleTestData.json")

	entityDataSource, err := os.ReadFile(entityDataFile)
	if err != nil {
		panic("failed to read workers_namespace_single test data: " + err.Error())
	}

	var entityData map[string]any
	if err := json.Unmarshal(entityDataSource, &entityData); err != nil {
		panic("failed to parse workers_namespace_single test data: " + err.Error())
	}

	options := map[string]any{}
	options["entity"] = entityData["existing"]

	client := sdk.TestSDK(options, extra)

	// Generate idmap via transform, matching TS pattern.
	idmap, _ := vs.Transform(
		[]any{"workers_namespace_single01", "workers_namespace_single02", "workers_namespace_single03", "account01", "account02", "account03", "namespace01", "namespace02", "namespace03"},
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
	entidEnvRaw := os.Getenv("CLOUDFLARE_WORKERS_TEST_WORKERS_NAMESPACE_SINGLE_ENTID")
	idmapOverridden := entidEnvRaw != "" && strings.HasPrefix(strings.TrimSpace(entidEnvRaw), "{")

	env := envOverride(map[string]any{
		"CLOUDFLARE_WORKERS_TEST_WORKERS_NAMESPACE_SINGLE_ENTID": idmap,
		"CLOUDFLARE_WORKERS_TEST_LIVE":      "FALSE",
		"CLOUDFLARE_WORKERS_TEST_EXPLAIN":   "FALSE",
		"CLOUDFLARE_WORKERS_APIKEY":         "",
	})

	idmapResolved := core.ToMapAny(env["CLOUDFLARE_WORKERS_TEST_WORKERS_NAMESPACE_SINGLE_ENTID"])
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
