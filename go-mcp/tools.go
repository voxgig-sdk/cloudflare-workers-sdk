package main

import (
	"context"
	"encoding/json"
	"fmt"
	"strings"

	"github.com/modelcontextprotocol/go-sdk/mcp"
	sdk "github.com/voxgig-sdk/cloudflare-workers-sdk/go"
)

// Args is the common argument shape for both tools. `entity` selects
// the SDK entity to operate on; `query` is the optional reqmatch /
// reqdata map passed through to the SDK. For load, `query` should be
// `{"id": <value>}`. For list, omit `query` or pass an empty map.
type Args struct {
	Entity string         `json:"entity" jsonschema:"account | application | brapi | build | build_token | builds_api | connection | container_image | container_instance | deploy_hook | deployment | destination | domain | durable_objects_namespace | environment_variable | git_hub_integration | hyperdrive | image_registry | issue | key | live_tail | metrics_export | namespace | preview | preview_deployment | query | repository_connection | rollout | saved_query | script | script_setting | secret | secrets_store_delete | secrets_store_quota | secrets_store_secret | secrets_store_store | secrets_store_stores_response_collection | setting | shared | tail | token | trigger | usage | value | version | worker | worker_cron_trigger | worker_deployment | worker_environment | worker_route | worker_script | worker_subdomain | worker_tail_log | workers_account_setting | workers_api_response_null_result | workers_completed_upload_asset | workers_create_assets_upload_session | workers_for_platform | workers_kv_api_response_common_no_result | workers_kv_namespace | workers_namespace_list | workers_namespace_script_delete_bulk | workers_namespace_script_response_single | workers_namespace_single | workers_pipelines_other | workers_script_and_version_setting | workers_script_response_collection | workers_script_response_single | workers_smart_placement | workers_usage_model | workers_versions_list | workers_versions_single | workers_versions_upload | workflow"`
	Query  map[string]any `json:"query,omitempty" jsonschema:"optional match map e.g. {\"id\":1} for load, omit for list"`
}

func registerTools(server *mcp.Server, client *sdk.CloudflareWorkersSDK) {
	mcp.AddTool(server, &mcp.Tool{
		Name: "cloudflare-workers_list",
		Description: "List records from CloudflareWorkers. " +
			"Args: entity (one of the supported SDK entities), query (optional filter map). " +
			"Returns the first page of records as JSON.",
	}, func(ctx context.Context, req *mcp.CallToolRequest, args Args) (*mcp.CallToolResult, any, error) {
		return runOp(client, "list", args)
	})

	mcp.AddTool(server, &mcp.Tool{
		Name: "cloudflare-workers_load",
		Description: "Load a single record from CloudflareWorkers. " +
			"Args: entity, query ({\"id\":N} required). Returns the record as JSON.",
	}, func(ctx context.Context, req *mcp.CallToolRequest, args Args) (*mcp.CallToolResult, any, error) {
		return runOp(client, "load", args)
	})
}

func runOp(client *sdk.CloudflareWorkersSDK, op string, args Args) (*mcp.CallToolResult, any, error) {
	ent, err := entityFor(client, args.Entity)
	if err != nil {
		return toolError(err.Error())
	}

	var result any
	switch op {
	case "list":
		result, err = ent.List(args.Query, nil)
	case "load":
		result, err = ent.Load(args.Query, nil)
	default:
		return toolError(fmt.Sprintf("unknown op %q", op))
	}
	if err != nil {
		return toolError(err.Error())
	}

	// SDK returns *Entity wrappers; unwrap each via .Data() to get a
	// plain map[string]any (or []any of maps for list) suitable for
	// JSON marshalling.
	data := extractData(result)
	body, err := json.MarshalIndent(data, "", "  ")
	if err != nil {
		return toolError(fmt.Sprintf("marshal: %v", err))
	}
	return &mcp.CallToolResult{
		Content: []mcp.Content{
			&mcp.TextContent{Text: string(body)},
		},
	}, data, nil
}

// entityFor dispatches on the lowercase entity name. The generator
// emits one `case "<name>":` per entity defined in the SDK model.
func entityFor(client *sdk.CloudflareWorkersSDK, name string) (sdk.CloudflareWorkersEntity, error) {
	switch strings.ToLower(name) {
	case "account":
		return client.Account(nil), nil
	case "application":
		return client.Application(nil), nil
	case "brapi":
		return client.Brapi(nil), nil
	case "build":
		return client.Build(nil), nil
	case "build_token":
		return client.BuildToken(nil), nil
	case "builds_api":
		return client.BuildsApi(nil), nil
	case "connection":
		return client.Connection(nil), nil
	case "container_image":
		return client.ContainerImage(nil), nil
	case "container_instance":
		return client.ContainerInstance(nil), nil
	case "deploy_hook":
		return client.DeployHook(nil), nil
	case "deployment":
		return client.Deployment(nil), nil
	case "destination":
		return client.Destination(nil), nil
	case "domain":
		return client.Domain(nil), nil
	case "durable_objects_namespace":
		return client.DurableObjectsNamespace(nil), nil
	case "environment_variable":
		return client.EnvironmentVariable(nil), nil
	case "git_hub_integration":
		return client.GitHubIntegration(nil), nil
	case "hyperdrive":
		return client.Hyperdrive(nil), nil
	case "image_registry":
		return client.ImageRegistry(nil), nil
	case "issue":
		return client.Issue(nil), nil
	case "key":
		return client.Key(nil), nil
	case "live_tail":
		return client.LiveTail(nil), nil
	case "metrics_export":
		return client.MetricsExport(nil), nil
	case "namespace":
		return client.Namespace(nil), nil
	case "preview":
		return client.Preview(nil), nil
	case "preview_deployment":
		return client.PreviewDeployment(nil), nil
	case "query":
		return client.Query(nil), nil
	case "repository_connection":
		return client.RepositoryConnection(nil), nil
	case "rollout":
		return client.Rollout(nil), nil
	case "saved_query":
		return client.SavedQuery(nil), nil
	case "script":
		return client.Script(nil), nil
	case "script_setting":
		return client.ScriptSetting(nil), nil
	case "secret":
		return client.Secret(nil), nil
	case "secrets_store_delete":
		return client.SecretsStoreDelete(nil), nil
	case "secrets_store_quota":
		return client.SecretsStoreQuota(nil), nil
	case "secrets_store_secret":
		return client.SecretsStoreSecret(nil), nil
	case "secrets_store_store":
		return client.SecretsStoreStore(nil), nil
	case "secrets_store_stores_response_collection":
		return client.SecretsStoreStoresResponseCollection(nil), nil
	case "setting":
		return client.Setting(nil), nil
	case "shared":
		return client.Shared(nil), nil
	case "tail":
		return client.Tail(nil), nil
	case "token":
		return client.Token(nil), nil
	case "trigger":
		return client.Trigger(nil), nil
	case "usage":
		return client.Usage(nil), nil
	case "value":
		return client.Value(nil), nil
	case "version":
		return client.Version(nil), nil
	case "worker":
		return client.Worker(nil), nil
	case "worker_cron_trigger":
		return client.WorkerCronTrigger(nil), nil
	case "worker_deployment":
		return client.WorkerDeployment(nil), nil
	case "worker_environment":
		return client.WorkerEnvironment(nil), nil
	case "worker_route":
		return client.WorkerRoute(nil), nil
	case "worker_script":
		return client.WorkerScript(nil), nil
	case "worker_subdomain":
		return client.WorkerSubdomain(nil), nil
	case "worker_tail_log":
		return client.WorkerTailLog(nil), nil
	case "workers_account_setting":
		return client.WorkersAccountSetting(nil), nil
	case "workers_api_response_null_result":
		return client.WorkersApiResponseNullResult(nil), nil
	case "workers_completed_upload_asset":
		return client.WorkersCompletedUploadAsset(nil), nil
	case "workers_create_assets_upload_session":
		return client.WorkersCreateAssetsUploadSession(nil), nil
	case "workers_for_platform":
		return client.WorkersForPlatform(nil), nil
	case "workers_kv_api_response_common_no_result":
		return client.WorkersKvApiResponseCommonNoResult(nil), nil
	case "workers_kv_namespace":
		return client.WorkersKvNamespace(nil), nil
	case "workers_namespace_list":
		return client.WorkersNamespaceList(nil), nil
	case "workers_namespace_script_delete_bulk":
		return client.WorkersNamespaceScriptDeleteBulk(nil), nil
	case "workers_namespace_script_response_single":
		return client.WorkersNamespaceScriptResponseSingle(nil), nil
	case "workers_namespace_single":
		return client.WorkersNamespaceSingle(nil), nil
	case "workers_pipelines_other":
		return client.WorkersPipelinesOther(nil), nil
	case "workers_script_and_version_setting":
		return client.WorkersScriptAndVersionSetting(nil), nil
	case "workers_script_response_collection":
		return client.WorkersScriptResponseCollection(nil), nil
	case "workers_script_response_single":
		return client.WorkersScriptResponseSingle(nil), nil
	case "workers_smart_placement":
		return client.WorkersSmartPlacement(nil), nil
	case "workers_usage_model":
		return client.WorkersUsageModel(nil), nil
	case "workers_versions_list":
		return client.WorkersVersionsList(nil), nil
	case "workers_versions_single":
		return client.WorkersVersionsSingle(nil), nil
	case "workers_versions_upload":
		return client.WorkersVersionsUpload(nil), nil
	case "workflow":
		return client.Workflow(nil), nil

	}
	return nil, fmt.Errorf("unknown entity %q", name)
}

func extractData(x any) any {
	switch v := x.(type) {
	case sdk.Entity:
		return extractData(v.Data())
	case []any:
		out := make([]any, len(v))
		for i, e := range v {
			out[i] = extractData(e)
		}
		return out
	case map[string]any:
		out := make(map[string]any, len(v))
		for k, vv := range v {
			out[k] = extractData(vv)
		}
		return out
	}
	return x
}

func toolError(msg string) (*mcp.CallToolResult, any, error) {
	return &mcp.CallToolResult{
		IsError: true,
		Content: []mcp.Content{
			&mcp.TextContent{Text: msg},
		},
	}, nil, nil
}
