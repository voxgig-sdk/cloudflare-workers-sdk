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

func TestRepositoryConnectionEntity(t *testing.T) {
	t.Run("instance", func(t *testing.T) {
		testsdk := sdk.TestSDK(nil, nil)
		ent := testsdk.RepositoryConnection(nil)
		if ent == nil {
			t.Fatal("expected non-nil RepositoryConnectionEntity")
		}
	})

	t.Run("basic", func(t *testing.T) {
		setup := repository_connectionBasicSetup(nil)
		// Per-op sdk-test-control.json skip — basic test exercises a flow
		// with multiple ops; skipping any op skips the whole flow.
		_mode := "unit"
		if setup.live {
			_mode = "live"
		}
		for _, _op := range []string{"update"} {
			if _shouldSkip, _reason := isControlSkipped("entityOp", "repository_connection." + _op, _mode); _shouldSkip {
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
			t.Skip("live entity test uses synthetic IDs from fixture — set CLOUDFLARE_WORKERS_TEST_REPOSITORY_CONNECTION_ENTID JSON to run live")
			return
		}
		client := setup.client

		// Bootstrap entity data from existing test data (no create step in flow).
		repositoryConnectionRef01DataRaw := vs.Items(core.ToMapAny(vs.GetPath(setup.data, "existing.repository_connection")))
		var repositoryConnectionRef01Data map[string]any
		if len(repositoryConnectionRef01DataRaw) > 0 {
			repositoryConnectionRef01Data = core.ToMapAny(repositoryConnectionRef01DataRaw[0][1])
		}
		// Discard guards against Go's unused-var check when the flow's steps
		// happen not to consume the bootstrap data (e.g. list-only flows).
		_ = repositoryConnectionRef01Data

		// UPDATE
		repositoryConnectionRef01Ent := client.RepositoryConnection(nil)
		repositoryConnectionRef01DataUp0Up := map[string]any{
		}

		repositoryConnectionRef01MarkdefUp0Name := "provider_account_id"
		repositoryConnectionRef01MarkdefUp0Value := fmt.Sprintf("Mark01-repository_connection_ref01_%d", setup.now)
		repositoryConnectionRef01DataUp0Up[repositoryConnectionRef01MarkdefUp0Name] = repositoryConnectionRef01MarkdefUp0Value

		repositoryConnectionRef01ResdataUp0Result, err := repositoryConnectionRef01Ent.Update(repositoryConnectionRef01DataUp0Up, nil)
		if err != nil {
			t.Fatalf("update failed: %v", err)
		}
		repositoryConnectionRef01ResdataUp0 := core.ToMapAny(entityData(repositoryConnectionRef01ResdataUp0Result))
		if repositoryConnectionRef01ResdataUp0 == nil {
			t.Fatal("expected update result to be a map")
		}
		if repositoryConnectionRef01ResdataUp0[repositoryConnectionRef01MarkdefUp0Name] != repositoryConnectionRef01MarkdefUp0Value {
			t.Fatalf("expected %s to be updated, got %v", repositoryConnectionRef01MarkdefUp0Name, repositoryConnectionRef01ResdataUp0[repositoryConnectionRef01MarkdefUp0Name])
		}

	})
}

func repository_connectionBasicSetup(extra map[string]any) *entityTestSetup {
	loadEnvLocal()

	_, filename, _, _ := runtime.Caller(0)
	dir := filepath.Dir(filename)

	entityDataFile := filepath.Join(dir, "..", "..", ".sdk", "test", "entity", "repository_connection", "RepositoryConnectionTestData.json")

	entityDataSource, err := os.ReadFile(entityDataFile)
	if err != nil {
		panic("failed to read repository_connection test data: " + err.Error())
	}

	var entityData map[string]any
	if err := json.Unmarshal(entityDataSource, &entityData); err != nil {
		panic("failed to parse repository_connection test data: " + err.Error())
	}

	options := map[string]any{}
	options["entity"] = entityData["existing"]

	client := sdk.TestSDK(options, extra)

	// Generate idmap via transform, matching TS pattern.
	idmap, _ := vs.Transform(
		[]any{"repository_connection01", "repository_connection02", "repository_connection03", "account01", "account02", "account03"},
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
	entidEnvRaw := os.Getenv("CLOUDFLARE_WORKERS_TEST_REPOSITORY_CONNECTION_ENTID")
	idmapOverridden := entidEnvRaw != "" && strings.HasPrefix(strings.TrimSpace(entidEnvRaw), "{")

	env := envOverride(map[string]any{
		"CLOUDFLARE_WORKERS_TEST_REPOSITORY_CONNECTION_ENTID": idmap,
		"CLOUDFLARE_WORKERS_TEST_LIVE":      "FALSE",
		"CLOUDFLARE_WORKERS_TEST_EXPLAIN":   "FALSE",
		"CLOUDFLARE_WORKERS_APIKEY":         "",
	})

	idmapResolved := core.ToMapAny(env["CLOUDFLARE_WORKERS_TEST_REPOSITORY_CONNECTION_ENTID"])
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
