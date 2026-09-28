# CloudflareWorkers Golang SDK



The Golang SDK for the CloudflareWorkers API — an entity-oriented client using standard Go conventions. No generics required; data flows as `map[string]any`.

It exposes the API as capitalised, semantic **Entities** — e.g. `client.Account(nil)` — each with the same small set of operations (`List`, `Load`, `Create`, `Update`, `Remove`, `Patch`) instead of raw URL paths and query strings. You call meaning, not endpoints, which keeps the cognitive load low.

> Also generated from this model: `go-cli`, `go-mcp`, `lua`, `php`, `py`, `rb`, `ts` — see
> the [top-level README](../README.md).


## Install
```bash
go get github.com/voxgig-sdk/cloudflare-workers-sdk/go@latest
```

The Go module proxy resolves the version from the `go/vX.Y.Z` GitHub
release tag — see [Releases](https://github.com/voxgig-sdk/cloudflare-workers-sdk/releases) for the available versions.

To vendor from a local checkout instead, clone this repo alongside your
project and add a `replace` directive pointing at the checked-out
`go/` directory:

```bash
go mod edit -replace github.com/voxgig-sdk/cloudflare-workers-sdk/go=../cloudflare-workers-sdk/go
```


## Tutorial: your first API call

This tutorial walks through creating a client, listing entities, and
loading a specific record.

### Quickstart

A complete program: create a client, then call the entity operations.
Each operation returns `(value, error)` — the value is the data itself
(there is no `{ok, data}` wrapper), so check `err` and use the value
directly.

```go
package main

import (
    "fmt"
    "os"
    sdk "github.com/voxgig-sdk/cloudflare-workers-sdk/go"
)

func main() {
    client := sdk.NewCloudflareWorkersSDK(map[string]any{
        "apikey": os.Getenv("CLOUDFLARE_WORKERS_APIKEY"),
    })

    // List account records — the value is the array of records itself.
    accounts, err := client.Account(nil).List(nil, nil)
    if err != nil {
        panic(err)
    }
    for _, item := range accounts.([]any) {
        fmt.Println(item)
    }
}
```


## Error handling

Every entity operation returns `(value, error)`. Check `err` before
using the value — there is no exception to catch:

```go
workersubdomains, err := client.WorkerSubdomain(nil).List(nil, nil)
if err != nil {
    // handle err
    return
}
_ = workersubdomains
```

`Direct` follows the same `(value, error)` convention:

```go
result, err := client.Direct(map[string]any{
    "path":   "/api/resource/{id}",
    "method": "GET",
    "params": map[string]any{"id": "example_id"},
})
if err != nil {
    // handle err
}
_ = result
```


## How-to guides

### Make a direct HTTP request

For endpoints not covered by entity methods:

```go
result, err := client.Direct(map[string]any{
    "path":   "/api/resource/{id}",
    "method": "GET",
    "params": map[string]any{"id": "example"},
})
if err != nil {
    panic(err)
}

if result["ok"] == true {
    fmt.Println(result["status"]) // 200
    fmt.Println(result["data"])   // response body
}
```

### Prepare a request without sending it

```go
fetchdef, err := client.Prepare(map[string]any{
    "path":   "/api/resource/{id}",
    "method": "DELETE",
    "params": map[string]any{"id": "example"},
})
if err != nil {
    panic(err)
}

fmt.Println(fetchdef["url"])
fmt.Println(fetchdef["method"])
fmt.Println(fetchdef["headers"])
```

### Use test mode

Create a mock client for unit testing — no server required:

```go
client := sdk.Test()

workerSubdomain, err := client.WorkerSubdomain(nil).List(
    nil, nil,
)
if err != nil {
    panic(err)
}
fmt.Println(workerSubdomain) // the returned mock data
```

### Use a custom fetch function

Replace the HTTP transport with your own function:

```go
mockFetch := func(url string, init map[string]any) (map[string]any, error) {
    return map[string]any{
        "status":     200,
        "statusText": "OK",
        "headers":    map[string]any{},
        "json": (func() any)(func() any {
            return map[string]any{"id": "mock01"}
        }),
    }, nil
}

client := sdk.NewCloudflareWorkersSDK(map[string]any{
    "base": "http://localhost:8080",
    "system": map[string]any{
        "fetch": (func(string, map[string]any) (map[string]any, error))(mockFetch),
    },
})
```

### Run live tests

Create a `.env.local` file at the project root:

```
CLOUDFLARE_WORKERS_TEST_LIVE=TRUE
CLOUDFLARE_WORKERS_APIKEY=<your-key>
```

Then run:

```bash
cd go && go test ./test/...
```


## Reference

### NewCloudflareWorkersSDK

```go
func NewCloudflareWorkersSDK(options map[string]any) *CloudflareWorkersSDK
```

Creates a new SDK client.

| Option | Type | Description |
| --- | --- | --- |
| `"apikey"` | `string` | API key for authentication. |
| `"base"` | `string` | Base URL of the API server. |
| `"prefix"` | `string` | URL path prefix prepended to all requests. |
| `"suffix"` | `string` | URL path suffix appended to all requests. |
| `"feature"` | `map[string]any` | Feature activation flags. |
| `"extend"` | `[]any` | Additional Feature instances to load. |
| `"system"` | `map[string]any` | System overrides (e.g. custom `"fetch"` function). |

### TestSDK

```go
func TestSDK(testopts map[string]any, sdkopts map[string]any) *CloudflareWorkersSDK
```

Creates a test-mode client with mock transport. Both arguments may be `nil`.

### CloudflareWorkersSDK methods

| Method | Signature | Description |
| --- | --- | --- |
| `OptionsMap` | `() map[string]any` | Deep copy of current SDK options. |
| `GetUtility` | `() *Utility` | Copy of the SDK utility object. |
| `Prepare` | `(fetchargs map[string]any) (map[string]any, error)` | Build an HTTP request definition without sending. |
| `Direct` | `(fetchargs map[string]any) (map[string]any, error)` | Build and send an HTTP request. |
| `Account` | `(data map[string]any) CloudflareWorkersEntity` | Create an Account entity instance. |
| `Application` | `(data map[string]any) CloudflareWorkersEntity` | Create an Application entity instance. |
| `Brapi` | `(data map[string]any) CloudflareWorkersEntity` | Create a Brapi entity instance. |
| `Build` | `(data map[string]any) CloudflareWorkersEntity` | Create a Build entity instance. |
| `BuildToken` | `(data map[string]any) CloudflareWorkersEntity` | Create a BuildToken entity instance. |
| `BuildsApi` | `(data map[string]any) CloudflareWorkersEntity` | Create a BuildsApi entity instance. |
| `Connection` | `(data map[string]any) CloudflareWorkersEntity` | Create a Connection entity instance. |
| `ContainerImage` | `(data map[string]any) CloudflareWorkersEntity` | Create a ContainerImage entity instance. |
| `ContainerInstance` | `(data map[string]any) CloudflareWorkersEntity` | Create a ContainerInstance entity instance. |
| `DeployHook` | `(data map[string]any) CloudflareWorkersEntity` | Create a DeployHook entity instance. |
| `Deployment` | `(data map[string]any) CloudflareWorkersEntity` | Create a Deployment entity instance. |
| `Destination` | `(data map[string]any) CloudflareWorkersEntity` | Create a Destination entity instance. |
| `Domain` | `(data map[string]any) CloudflareWorkersEntity` | Create a Domain entity instance. |
| `DurableObjectsNamespace` | `(data map[string]any) CloudflareWorkersEntity` | Create a DurableObjectsNamespace entity instance. |
| `EnvironmentVariable` | `(data map[string]any) CloudflareWorkersEntity` | Create an EnvironmentVariable entity instance. |
| `GitHubIntegration` | `(data map[string]any) CloudflareWorkersEntity` | Create a GitHubIntegration entity instance. |
| `Hyperdrive` | `(data map[string]any) CloudflareWorkersEntity` | Create a Hyperdrive entity instance. |
| `ImageRegistry` | `(data map[string]any) CloudflareWorkersEntity` | Create an ImageRegistry entity instance. |
| `Issue` | `(data map[string]any) CloudflareWorkersEntity` | Create an Issue entity instance. |
| `Key` | `(data map[string]any) CloudflareWorkersEntity` | Create a Key entity instance. |
| `LiveTail` | `(data map[string]any) CloudflareWorkersEntity` | Create a LiveTail entity instance. |
| `MetricsExport` | `(data map[string]any) CloudflareWorkersEntity` | Create a MetricsExport entity instance. |
| `Namespace` | `(data map[string]any) CloudflareWorkersEntity` | Create a Namespace entity instance. |
| `Preview` | `(data map[string]any) CloudflareWorkersEntity` | Create a Preview entity instance. |
| `PreviewDeployment` | `(data map[string]any) CloudflareWorkersEntity` | Create a PreviewDeployment entity instance. |
| `Query` | `(data map[string]any) CloudflareWorkersEntity` | Create a Query entity instance. |
| `RepositoryConnection` | `(data map[string]any) CloudflareWorkersEntity` | Create a RepositoryConnection entity instance. |
| `Rollout` | `(data map[string]any) CloudflareWorkersEntity` | Create a Rollout entity instance. |
| `SavedQuery` | `(data map[string]any) CloudflareWorkersEntity` | Create a SavedQuery entity instance. |
| `Script` | `(data map[string]any) CloudflareWorkersEntity` | Create a Script entity instance. |
| `ScriptSetting` | `(data map[string]any) CloudflareWorkersEntity` | Create a ScriptSetting entity instance. |
| `Secret` | `(data map[string]any) CloudflareWorkersEntity` | Create a Secret entity instance. |
| `SecretsStoreDelete` | `(data map[string]any) CloudflareWorkersEntity` | Create a SecretsStoreDelete entity instance. |
| `SecretsStoreQuota` | `(data map[string]any) CloudflareWorkersEntity` | Create a SecretsStoreQuota entity instance. |
| `SecretsStoreSecret` | `(data map[string]any) CloudflareWorkersEntity` | Create a SecretsStoreSecret entity instance. |
| `SecretsStoreStore` | `(data map[string]any) CloudflareWorkersEntity` | Create a SecretsStoreStore entity instance. |
| `SecretsStoreStoresResponseCollection` | `(data map[string]any) CloudflareWorkersEntity` | Create a SecretsStoreStoresResponseCollection entity instance. |
| `Setting` | `(data map[string]any) CloudflareWorkersEntity` | Create a Setting entity instance. |
| `Shared` | `(data map[string]any) CloudflareWorkersEntity` | Create a Shared entity instance. |
| `Tail` | `(data map[string]any) CloudflareWorkersEntity` | Create a Tail entity instance. |
| `Token` | `(data map[string]any) CloudflareWorkersEntity` | Create a Token entity instance. |
| `Trigger` | `(data map[string]any) CloudflareWorkersEntity` | Create a Trigger entity instance. |
| `Usage` | `(data map[string]any) CloudflareWorkersEntity` | Create an Usage entity instance. |
| `Value` | `(data map[string]any) CloudflareWorkersEntity` | Create a Value entity instance. |
| `Version` | `(data map[string]any) CloudflareWorkersEntity` | Create a Version entity instance. |
| `Worker` | `(data map[string]any) CloudflareWorkersEntity` | Create a Worker entity instance. |
| `WorkerCronTrigger` | `(data map[string]any) CloudflareWorkersEntity` | Create a WorkerCronTrigger entity instance. |
| `WorkerDeployment` | `(data map[string]any) CloudflareWorkersEntity` | Create a WorkerDeployment entity instance. |
| `WorkerEnvironment` | `(data map[string]any) CloudflareWorkersEntity` | Create a WorkerEnvironment entity instance. |
| `WorkerRoute` | `(data map[string]any) CloudflareWorkersEntity` | Create a WorkerRoute entity instance. |
| `WorkerScript` | `(data map[string]any) CloudflareWorkersEntity` | Create a WorkerScript entity instance. |
| `WorkerSubdomain` | `(data map[string]any) CloudflareWorkersEntity` | Create a WorkerSubdomain entity instance. |
| `WorkerTailLog` | `(data map[string]any) CloudflareWorkersEntity` | Create a WorkerTailLog entity instance. |
| `WorkersAccountSetting` | `(data map[string]any) CloudflareWorkersEntity` | Create a WorkersAccountSetting entity instance. |
| `WorkersApiResponseNullResult` | `(data map[string]any) CloudflareWorkersEntity` | Create a WorkersApiResponseNullResult entity instance. |
| `WorkersCompletedUploadAsset` | `(data map[string]any) CloudflareWorkersEntity` | Create a WorkersCompletedUploadAsset entity instance. |
| `WorkersCreateAssetsUploadSession` | `(data map[string]any) CloudflareWorkersEntity` | Create a WorkersCreateAssetsUploadSession entity instance. |
| `WorkersForPlatform` | `(data map[string]any) CloudflareWorkersEntity` | Create a WorkersForPlatform entity instance. |
| `WorkersKvApiResponseCommonNoResult` | `(data map[string]any) CloudflareWorkersEntity` | Create a WorkersKvApiResponseCommonNoResult entity instance. |
| `WorkersKvNamespace` | `(data map[string]any) CloudflareWorkersEntity` | Create a WorkersKvNamespace entity instance. |
| `WorkersNamespaceList` | `(data map[string]any) CloudflareWorkersEntity` | Create a WorkersNamespaceList entity instance. |
| `WorkersNamespaceScriptDeleteBulk` | `(data map[string]any) CloudflareWorkersEntity` | Create a WorkersNamespaceScriptDeleteBulk entity instance. |
| `WorkersNamespaceScriptResponseSingle` | `(data map[string]any) CloudflareWorkersEntity` | Create a WorkersNamespaceScriptResponseSingle entity instance. |
| `WorkersNamespaceSingle` | `(data map[string]any) CloudflareWorkersEntity` | Create a WorkersNamespaceSingle entity instance. |
| `WorkersPipelinesOther` | `(data map[string]any) CloudflareWorkersEntity` | Create a WorkersPipelinesOther entity instance. |
| `WorkersScriptAndVersionSetting` | `(data map[string]any) CloudflareWorkersEntity` | Create a WorkersScriptAndVersionSetting entity instance. |
| `WorkersScriptResponseCollection` | `(data map[string]any) CloudflareWorkersEntity` | Create a WorkersScriptResponseCollection entity instance. |
| `WorkersScriptResponseSingle` | `(data map[string]any) CloudflareWorkersEntity` | Create a WorkersScriptResponseSingle entity instance. |
| `WorkersSmartPlacement` | `(data map[string]any) CloudflareWorkersEntity` | Create a WorkersSmartPlacement entity instance. |
| `WorkersUsageModel` | `(data map[string]any) CloudflareWorkersEntity` | Create a WorkersUsageModel entity instance. |
| `WorkersVersionsList` | `(data map[string]any) CloudflareWorkersEntity` | Create a WorkersVersionsList entity instance. |
| `WorkersVersionsSingle` | `(data map[string]any) CloudflareWorkersEntity` | Create a WorkersVersionsSingle entity instance. |
| `WorkersVersionsUpload` | `(data map[string]any) CloudflareWorkersEntity` | Create a WorkersVersionsUpload entity instance. |
| `Workflow` | `(data map[string]any) CloudflareWorkersEntity` | Create a Workflow entity instance. |

### Entity interface (CloudflareWorkersEntity)

All entities implement the `CloudflareWorkersEntity` interface.

| Method | Signature | Description |
| --- | --- | --- |
| `Load` | `(reqmatch, ctrl map[string]any) (any, error)` | Load a single entity by match criteria. |
| `List` | `(reqmatch, ctrl map[string]any) (any, error)` | List entities matching the criteria. |
| `Create` | `(reqdata, ctrl map[string]any) (any, error)` | Create a new entity. |
| `Update` | `(reqdata, ctrl map[string]any) (any, error)` | Update an existing entity. |
| `Remove` | `(reqmatch, ctrl map[string]any) (any, error)` | Remove an entity. |
| `Data` | `(args ...any) any` | Get or set entity data. |
| `Match` | `(args ...any) any` | Get or set entity match criteria. |
| `Make` | `() Entity` | Create a new instance with the same options. |
| `GetName` | `() string` | Return the entity name. |

### Result shape

Entity operations return `(value, error)`. The `value` is the
operation's data **directly** — there is no wrapper:

| Operation | `value` |
| --- | --- |
| `Load` / `Create` / `Update` / `Remove` | the entity record (`map[string]any`) |
| `List` | a `[]any` of entity records |

Check `err` first, then use the value directly (or the typed
`...Typed` variants, which return the entity's model struct and a typed
slice):

    account, err := client.Account(nil).List(map[string]any{/* fields */}, nil)
    if err != nil { /* handle */ }
    // account is the returned record

Only `Direct()` returns a response envelope — a `map[string]any` with
`"ok"`, `"status"`, `"headers"`, and `"data"` keys.

### Entities

#### Account

| Field | Description |
| --- | --- |
| `"id"` |  |

Operations: List.

API path: `/accounts/{account_id}/builds/account/limits`

#### Application

| Field | Description |
| --- | --- |
| `"configuration"` | Application configuration fields you can change without creating a rollout. |
| `"constraints"` |  |
| `"errors"` |  |
| `"id"` |  |
| `"max_instances"` | Maximum number of instances that an autoscaling application can run. |
| `"messages"` |  |
| `"observability"` | Top-level application observability settings. |
| `"result"` | The public Containers API returns an application. |
| `"result_info"` | Cursor pagination details for a v4 API list response. |
| `"rollout_active_grace_period"` | Grace period for active instances to stay alive before becoming eligible for shutdown signal due to a rollout, in seconds. |
| `"success"` | Whether the API call was successful. |

Operations: Create, List, Load, Remove, Update.

API path: `/accounts/{account_id}/containers/applications`

#### Brapi

| Field | Description |
| --- | --- |
| `"Browser"` | Browser name and version. |
| `"ProtocolVersion"` | Chrome DevTools Protocol version. |
| `"UserAgent"` | User agent string. |
| `"V8Version"` | V8 JavaScript engine version. |
| `"WebKitVersion"` | WebKit version. |
| `"actionTimeout"` | The maximum duration allowed for the browser action to complete after the page has loaded (such as taking screenshots, extracting content, or generating PDFs). |
| `"addScriptTag"` | Adds a script element into the page with the desired URL or content. |
| `"addStyleTag"` | Adds a `<link rel="stylesheet">` tag into the page with the desired URL or a `<style type="text/css">` tag with the content. |
| `"allowRequestPattern"` | Only allow requests that match the provided regex patterns, eg. |
| `"allowResourceTypes"` | Only allow requests that match the provided resource types, eg. |
| `"authenticate"` | Provide credentials for HTTP authentication. |
| `"bestAttempt"` | Attempt to proceed when 'awaited' events fail or timeout. |
| `"closeReason"` | Reason code for session closure. |
| `"closeReasonText"` | Human-readable close reason. |
| `"commands"` | Available commands. |
| `"connectionEndTime"` | Connection end time. |
| `"connectionId"` | Connection ID. |
| `"connectionStartTime"` | Connection start time. |
| `"cookies"` | Check [options](https://pptr.dev/api/puppeteer.page.setcookie). |
| `"custom_ai"` | Optional list of custom AI models to use for the request. |
| `"dependencies"` | Domain dependencies. |
| `"description"` | Target description. |
| `"devtoolsFrontendUrl"` | DevTools frontend URL. |
| `"domain"` | Domain name. |
| `"elements"` |  |
| `"emulateMediaType"` |  |
| `"endTime"` | Session end time. |
| `"errors"` |  |
| `"events"` | Available events. |
| `"excludeExternalLinks"` |  |
| `"experimental"` | Whether this domain is experimental. |
| `"formats"` |  |
| `"gotoOptions"` | Check [options](https://pptr.dev/api/puppeteer.gotooptions). |
| `"guardrails"` |  |
| `"html"` | Set the content of the page, eg: `<h1>Hello World!!</h1>`. |
| `"id"` | Target ID. |
| `"interestingOnly"` |  |
| `"lastUpdated"` | Last updated timestamp. |
| `"message"` | Target activated. |
| `"meta"` |  |
| `"pdfOptions"` | Check [options](https://pptr.dev/api/puppeteer.pdfoptions). |
| `"prompt"` |  |
| `"rejectRequestPattern"` | Block undesired requests that match the provided regex patterns, eg. |
| `"rejectResourceTypes"` | Block undesired requests that match the provided resource types, eg. |
| `"response_format"` |  |
| `"result"` | HTML content. |
| `"root"` |  |
| `"screenshotOptions"` | Check [options](https://pptr.dev/api/puppeteer.screenshotoptions). |
| `"scrollPage"` |  |
| `"selector"` |  |
| `"sessionId"` | Session ID. |
| `"setExtraHTTPHeaders"` |  |
| `"setJavaScriptEnabled"` |  |
| `"startTime"` | Session start time. |
| `"success"` | Response status. |
| `"title"` | Title of the target. |
| `"type"` | Target type (page, background_page, worker, etc.). |
| `"types"` | Type definitions. |
| `"url"` | URL of the target. |
| `"userAgent"` |  |
| `"viewport"` | Check [options](https://pptr.dev/api/puppeteer.page.setviewport). |
| `"visibleLinksOnly"` |  |
| `"waitForSelector"` | Wait for the selector to appear in page. |
| `"waitForTimeout"` | Waits for a specified timeout before continuing. |
| `"webSocketDebuggerUrl"` | WebSocket URL for debugging this target. |

Operations: Create, List, Load, Remove, Update.

API path: `/accounts/{account_id}/browser-rendering/devtools/browser`

#### Build

| Field | Description |
| --- | --- |
| `"errors"` |  |
| `"id"` |  |
| `"messages"` |  |
| `"result"` |  |
| `"result_info"` |  |
| `"success"` |  |

Operations: List, Load, Update.

API path: `/accounts/{account_id}/builds/builds/{build_uuid}/logs`

#### BuildToken

| Field | Description |
| --- | --- |
| `"build_token_name"` |  |
| `"build_token_secret"` |  |
| `"cloudflare_token_id"` |  |
| `"errors"` |  |
| `"messages"` |  |
| `"result"` |  |
| `"result_info"` |  |
| `"success"` |  |

Operations: Create, List.

API path: `/accounts/{account_id}/builds/tokens`

#### BuildsApi

| Field | Description |
| --- | --- |
| `"errors"` |  |
| `"messages"` |  |
| `"result"` |  |
| `"result_info"` |  |
| `"success"` |  |

Operations: Create, Remove.

API path: `/accounts/{account_id}/builds/triggers/{trigger_uuid}/purge_build_cache`

#### Connection

| Field | Description |
| --- | --- |
| `"id"` |  |

Operations: Remove.

API path: `/accounts/{account_id}/builds/repos/connections/{repo_connection_uuid}`

#### ContainerImage

| Field | Description |
| --- | --- |
| `"image"` | Image url. |

Operations: Create.

API path: `/accounts/{account_id}/containers/image-preparations`

#### ContainerInstance

| Field | Description |
| --- | --- |
| `"errors"` |  |
| `"id"` |  |
| `"messages"` |  |
| `"result"` | A container instance belonging to an application. |
| `"result_info"` | Cursor pagination details for a v4 API list response. |
| `"success"` | Whether the API call was successful. |

Operations: List, Load.

API path: `/accounts/{account_id}/containers/applications/{application_id}/instances`

#### DeployHook

| Field | Description |
| --- | --- |
| `"branch"` | Git branch name. |
| `"deploy_hook_name"` | Deploy hook name (1-58 characters). |
| `"errors"` |  |
| `"id"` |  |
| `"messages"` |  |
| `"result"` |  |
| `"result_info"` |  |
| `"success"` |  |

Operations: Create, List, Load, Remove, Update.

API path: `/accounts/{account_id}/builds/workers/{script_name}/deploy_hooks`

#### Deployment

| Field | Description |
| --- | --- |
| `"id"` |  |

Operations: Remove.

API path: `/accounts/{account_id}/workers/workers/{worker_id}/previews/{preview_id}/deployments/{deployment_id}`

#### Destination

| Field | Description |
| --- | --- |
| `"configuration"` |  |
| `"enabled"` |  |
| `"errors"` |  |
| `"id"` |  |
| `"messages"` |  |
| `"name"` |  |
| `"result"` |  |
| `"skipPreflightCheck"` |  |
| `"success"` |  |

Operations: Create, List, Remove, Update.

API path: `/accounts/{account_id}/workers/observability/destinations`

#### Domain

| Field | Description |
| --- | --- |
| `"errors"` |  |
| `"id"` |  |
| `"messages"` |  |
| `"result"` |  |
| `"success"` | Whether the API call was successful. |

Operations: List, Load, Remove, Update.

API path: `/accounts/{account_id}/workers/domains`

#### DurableObjectsNamespace

| Field | Description |
| --- | --- |
| `"result"` |  |
| `"result_info"` |  |

Operations: Create, List.

API path: `/accounts/{account_id}/workers/durable_objects/namespaces/{id}/query/v2`

#### EnvironmentVariable

| Field | Description |
| --- | --- |
| `"errors"` |  |
| `"messages"` |  |
| `"result"` |  |
| `"result_info"` |  |
| `"success"` |  |

Operations: List, Update.

API path: `/accounts/{account_id}/builds/triggers/{trigger_uuid}/environment_variables`

#### GitHubIntegration

| Field | Description |
| --- | --- |
| `"errors"` |  |
| `"messages"` |  |
| `"result"` |  |
| `"result_info"` |  |
| `"success"` |  |

Operations: List.

API path: `/accounts/{account_id}/builds/repos/{provider_type}/{provider_account_id}/{repo_id}/config_autofill`

#### Hyperdrive

| Field | Description |
| --- | --- |
| `"caching"` |  |
| `"created_on"` | Defines the creation time of the Hyperdrive configuration. |
| `"id"` | Define configurations using a unique string identifier. |
| `"modified_on"` | Defines the last modified time of the Hyperdrive configuration. |
| `"mtls"` | mTLS configuration for the origin connection. |
| `"name"` | The name of the Hyperdrive configuration. |
| `"origin"` | Combines database connection fields with exactly one supported network location. |
| `"origin_connection_limit"` | The (soft) maximum number of connections the Hyperdrive is allowed to make to the origin database. |
| `"restarted_on"` | Defines the last time the Hyperdrive connection pool was explicitly restarted via the restart endpoint. |
| `"result"` |  |

Operations: Create, List, Load, Patch, Remove, Update.

API path: `/accounts/{account_id}/hyperdrive/configs/{hyperdrive_id}/restart`

#### ImageRegistry

| Field | Description |
| --- | --- |
| `"auth"` | Credentials for authenticating to a private external image registry. |
| `"domain"` | Hostname of the private registry, without a scheme or image path. |
| `"errors"` |  |
| `"expiration_minutes"` | The number of minutes Cloudflare managed registry credentials stay valid. |
| `"id"` |  |
| `"is_public"` | Omit this field or set it to `false`. |
| `"kind"` | Registry provider. |
| `"messages"` |  |
| `"permissions"` | The permissions for Cloudflare managed registry credentials. |
| `"result"` |  |
| `"success"` | Whether the API call was successful. |

Operations: Create, List, Remove.

API path: `/accounts/{account_id}/containers/registries/{domain}/credentials`

#### Issue

| Field | Description |
| --- | --- |
| `"afterInactivitySeconds"` |  |
| `"afterOccurrences"` |  |
| `"enabled"` |  |
| `"errors"` |  |
| `"id"` |  |
| `"issueIds"` |  |
| `"messages"` |  |
| `"name"` |  |
| `"policyId"` |  |
| `"result"` |  |
| `"result_info"` |  |
| `"service"` |  |
| `"status"` |  |
| `"success"` |  |
| `"title"` |  |

Operations: Create, List, Load, Patch, Remove, Update.

API path: `/accounts/{account_id}/workers/observability/issues/groups/{groupId}/members`

#### Key

| Field | Description |
| --- | --- |
| `"datasets"` | Leave this empty to use the default datasets |
| `"errors"` |  |
| `"filters"` | Apply filters to narrow key discovery. |
| `"from"` |  |
| `"keyNeedle"` | If the user suggests a key, use this to narrow down the list of keys returned. |
| `"limit"` | Advanced usage: set limit=1000+ to retrieve comprehensive key options without needing additional filtering. |
| `"messages"` |  |
| `"needle"` | Search for a specific substring in any of the events |
| `"result"` |  |
| `"success"` |  |
| `"to"` |  |

Operations: Create.

API path: `/accounts/{account_id}/workers/observability/telemetry/keys`

#### LiveTail

| Field | Description |
| --- | --- |
| `"errors"` |  |
| `"filterCombination"` | Set a flag to describe how to combine the filters on the query. |
| `"filters"` | Apply filters to the query. |
| `"messages"` |  |
| `"result"` |  |
| `"scriptId"` |  |
| `"success"` |  |

Operations: Create.

API path: `/accounts/{account_id}/workers/observability/telemetry/live-tail`

#### MetricsExport

| Field | Description |
| --- | --- |
| `"errors"` |  |
| `"messages"` |  |
| `"requester"` |  |
| `"resources"` |  |
| `"result"` |  |
| `"success"` |  |

Operations: Create, List.

API path: `/accounts/{account_id}/workers/observability/metricsexport`

#### Namespace

| Field | Description |
| --- | --- |
| `"id"` |  |

Operations: Remove.

API path: `/accounts/{account_id}/workers/dispatch/namespaces/{dispatch_namespace}`

#### Preview

| Field | Description |
| --- | --- |
| `"errors"` |  |
| `"id"` |  |
| `"messages"` |  |
| `"result"` |  |
| `"success"` | Whether the API call was successful. |

Operations: Create, List, Load, Patch, Remove, Update.

API path: `/accounts/{account_id}/workers/workers/{worker_id}/previews`

#### PreviewDeployment

| Field | Description |
| --- | --- |
| `"errors"` |  |
| `"id"` |  |
| `"messages"` |  |
| `"result"` |  |
| `"success"` | Whether the API call was successful. |

Operations: Create, List, Load, Update.

API path: `/accounts/{account_id}/workers/workers/{worker_id}/previews/{preview_id}/deployments`

#### Query

| Field | Description |
| --- | --- |
| `"chart"` | When true, includes time-series data in the response. |
| `"chartType"` | Controls the SQL shape and response payload for the 'calculations' view. |
| `"compare"` | When true, includes a comparison dataset from the previous time period of equal length. |
| `"distributionScale"` | Value-axis bucketing for chartType 'distribution'. |
| `"dry"` | When true, executes the query without persisting the results. |
| `"errors"` |  |
| `"granularity"` | Number of time-series buckets. |
| `"ignoreSeries"` | When true, omits time-series data from the response and returns only aggregated values. |
| `"limit"` | Maximum number of events to return when view is 'events'. |
| `"messages"` |  |
| `"offset"` | Cursor for pagination in event, trace, invocation, and agent views. |
| `"offsetBy"` | Numeric offset for paginating grouped/pattern results (top-N lists). |
| `"offsetDirection"` | Pagination direction: 'next' for forward, 'prev' for backward. |
| `"parameters"` | Query parameters defining what data to retrieve — filters, calculations, group-bys, and ordering. |
| `"queryId"` | Identifier for the query. |
| `"result"` | Complete results of a query run. |
| `"success"` |  |
| `"timeframe"` | Timeframe for the query using Unix timestamps in milliseconds. |
| `"view"` | Controls the shape of the response. |

Operations: Create.

API path: `/accounts/{account_id}/workers/observability/telemetry/query`

#### RepositoryConnection

| Field | Description |
| --- | --- |
| `"provider_account_id"` | Provider-specific identifier of the account or namespace that owns the repository. |
| `"provider_account_name"` | Human-readable name of the account or namespace that owns the repository. |
| `"provider_type"` | Source control provider. |
| `"repo_id"` | Provider-specific repository identifier. |
| `"repo_name"` | Human-readable repository name. |

Operations: Update.

API path: `/accounts/{account_id}/builds/repos/connections`

#### Rollout

| Field | Description |
| --- | --- |
| `"description"` | Description of the rollout process. |
| `"kind"` | Kind of the rollout process. |
| `"percentage"` | Initial target version percentage (0-100). |
| `"step_percentage"` | Percentage of rollout to increase in each step when "steps" is absent. |
| `"steps"` | Steps defining the rollout process, used when "step_percentage" is absent. |
| `"strategy"` | Strategy used for the rollout. |
| `"target_configuration"` | User-specified container configuration changes. |

Operations: Create.

API path: `/accounts/{account_id}/containers/applications/{application_id}/rollouts`

#### SavedQuery

| Field | Description |
| --- | --- |
| `"description"` |  |
| `"errors"` |  |
| `"id"` |  |
| `"messages"` |  |
| `"name"` | Query name |
| `"parameters"` |  |
| `"result"` |  |
| `"success"` |  |

Operations: Create, List, Load, Remove, Update.

API path: `/accounts/{account_id}/workers/observability/queries`

#### Script

| Field | Description |
| --- | --- |
| `"id"` |  |

Operations: Remove.

API path: `/accounts/{account_id}/workers/scripts/{script_name}`

#### ScriptSetting

| Field | Description |
| --- | --- |
| `"errors"` |  |
| `"logpush"` | Whether Logpush is turned on for the Worker. |
| `"messages"` |  |
| `"observability"` |  |
| `"result"` |  |
| `"success"` | Whether the API call was successful. |
| `"tags"` |  |
| `"tail_consumers"` | List of Workers that will consume logs from the attached Worker. |

Operations: List, Update.

API path: `/accounts/{account_id}/workers/scripts/{script_name}/script-settings`

#### Secret

| Field | Description |
| --- | --- |
| `"comment"` | Freeform text describing the secret. |
| `"id"` |  |
| `"result"` |  |
| `"scopes"` | The list of services that can use this secret. |
| `"value"` | The value of the secret. |

Operations: Create, List, Load, Remove, Update.

API path: `/accounts/{account_id}/secrets_store/stores/{store_id}/secrets`

#### SecretsStoreDelete

| Field | Description |
| --- | --- |

Operations: Remove.

API path: `/accounts/{account_id}/secrets_store/stores/{store_id}`

#### SecretsStoreQuota

| Field | Description |
| --- | --- |
| `"result"` |  |

Operations: Load.

API path: `/accounts/{account_id}/secrets_store/quota`

#### SecretsStoreSecret

| Field | Description |
| --- | --- |
| `"comment"` | Freeform text describing the secret. |
| `"name"` | The name of the secret. |
| `"scopes"` | The list of services that can use this secret. |

Operations: Create.

API path: `/accounts/{account_id}/secrets_store/stores/{store_id}/secrets/{secret_id}/duplicate`

#### SecretsStoreStore

| Field | Description |
| --- | --- |
| `"id"` |  |
| `"name"` | The name of the store. |
| `"result"` |  |

Operations: Create, Load.

API path: `/accounts/{account_id}/secrets_store/stores`

#### SecretsStoreStoresResponseCollection

| Field | Description |
| --- | --- |
| `"result"` |  |

Operations: List.

API path: `/accounts/{account_id}/secrets_store/stores`

#### Setting

| Field | Description |
| --- | --- |
| `"errors"` |  |
| `"messages"` |  |
| `"result"` |  |
| `"success"` | Whether the API call was successful. |

Operations: List, Update.

API path: `/accounts/{account_id}/workers/services/{service_name}/environments/{environment_name}/settings`

#### Shared

| Field | Description |
| --- | --- |
| `"errors"` |  |
| `"id"` |  |
| `"messages"` |  |
| `"result"` | Complete results of a query run. |
| `"success"` |  |

Operations: Create, Load.

API path: `/accounts/{account_id}/workers/observability/shared/query`

#### Tail

| Field | Description |
| --- | --- |
| `"id"` |  |

Operations: Remove.

API path: `/accounts/{account_id}/workers/scripts/{script_name}/tails/{id}`

#### Token

| Field | Description |
| --- | --- |
| `"id"` |  |

Operations: Remove.

API path: `/accounts/{account_id}/builds/tokens/{build_token_uuid}`

#### Trigger

| Field | Description |
| --- | --- |
| `"branch_excludes"` | Branch patterns that must not start builds. |
| `"branch_includes"` | Branch patterns that can start builds. |
| `"build_caching_enabled"` | Whether builds reuse cached dependencies and build artifacts. |
| `"build_command"` | Command to build the Worker. |
| `"build_token_uuid"` | UUID of the build token used when deploying the Worker. |
| `"deploy_command"` | Command to deploy the Worker. |
| `"external_script_id"` | System-generated tag of the Worker. |
| `"id"` |  |
| `"path_excludes"` | Path patterns that must not start builds. |
| `"path_includes"` | Path patterns that can start builds. |
| `"repo_connection_uuid"` | Repository connection UUID. |
| `"root_directory"` | Repository directory in which build and deploy commands run. |
| `"trigger_name"` | Human-readable name of the build trigger. |

Operations: Create, Remove, Update.

API path: `/accounts/{account_id}/builds/triggers/{trigger_uuid}/builds`

#### Usage

| Field | Description |
| --- | --- |
| `"errors"` |  |
| `"messages"` |  |
| `"result"` |  |
| `"success"` |  |

Operations: List.

API path: `/accounts/{account_id}/workers/observability/usage`

#### Value

| Field | Description |
| --- | --- |
| `"datasets"` | Leave this empty to use the default datasets |
| `"errors"` |  |
| `"filters"` | Apply filters before listing values. |
| `"key"` |  |
| `"limit"` |  |
| `"messages"` |  |
| `"needle"` | Full-text search expression to match events containing the specified text or pattern. |
| `"result"` |  |
| `"success"` |  |
| `"timeframe"` |  |
| `"type"` |  |

Operations: Create.

API path: `/accounts/{account_id}/workers/observability/telemetry/values`

#### Version

| Field | Description |
| --- | --- |
| `"annotations"` | Metadata about the version. |
| `"assets"` | Configuration for assets within a Worker. |
| `"author_email"` | Email of the user who created the version. |
| `"author_id"` | Identifier of the user who created the version. |
| `"bindings"` | List of bindings attached to a Worker. |
| `"cache_options"` | Global CacheW configuration for the Worker. |
| `"compatibility_date"` | Date indicating targeted support in the Workers runtime. |
| `"compatibility_flags"` | Flags that enable or disable certain features in the Workers runtime. |
| `"containers"` | List of containers attached to a Worker. |
| `"created_on"` | When the version was created. |
| `"errors"` |  |
| `"exports"` | Declarative exports for the version, including Durable Object classes (with their `storage` backend) and named Worker entrypoints. |
| `"exports_reconciliation"` | Summary of the declarative exports reconciliation that ran on this upload. |
| `"id"` | Version identifier. |
| `"limits"` | Resource limits enforced at runtime. |
| `"main_module"` | The name of the main module in the `modules` array (e.g. |
| `"messages"` |  |
| `"migration_tag"` | Durable Object migration tag. |
| `"migrations"` | Migrations for Durable Objects associated with the version. |
| `"modules"` | Code, sourcemaps, and other content used at runtime. |
| `"number"` | The integer version number, starting from one. |
| `"package_dependencies"` | The list of npm packages that were installed and used when this Worker version was built. |
| `"placement"` | Configuration for [Smart Placement](https://developers.cloudflare.com/workers/configuration/smart-placement). |
| `"result"` |  |
| `"source"` | The client used to create the version. |
| `"startup_time_ms"` | Time in milliseconds spent on [Worker startup](https://developers.cloudflare.com/workers/platform/limits/#worker-startup-time). |
| `"success"` | Whether the API call was successful. |
| `"urls"` | All routable URLs that always point to this version. |
| `"usage_model"` | Usage model for the version. |

Operations: Create, List, Load, Remove, Update.

API path: `/accounts/{account_id}/workers/workers/{worker_id}/versions`

#### Worker

| Field | Description |
| --- | --- |
| `"auto_build"` | Whether pushes to the git branch build this Preview. |
| `"auto_delete"` | Whether deleting the git branch also deletes this Preview. |
| `"branch"` | Git branch name (required if commit_hash not provided) |
| `"commit_hash"` | Git commit hash (required if branch not provided) |
| `"errors"` |  |
| `"git_repository"` | Git repository settings to update |
| `"id"` |  |
| `"messages"` |  |
| `"previews_base_config"` | Build and deploy settings when creating a Worker build configuration |
| `"previews_enabled"` | Whether Previews are enabled for this Worker |
| `"production_settings"` | Build and deploy settings when creating a Worker build configuration |
| `"result"` | A single Preview of a Worker, with the build settings it currently uses. |
| `"result_info"` |  |
| `"script_tag"` | System-generated tag of the Worker. |
| `"seed_repo"` | Optional repository and file overrides used to seed this build. |
| `"settings"` | Partial build settings for updating a Worker build configuration |
| `"success"` | Whether the API call was successful. |

Operations: Create, List, Load, Patch, Remove, Update.

API path: `/accounts/{account_id}/builds/workers/{script_tag}/previews/{preview_id}/builds`

#### WorkerCronTrigger

| Field | Description |
| --- | --- |
| `"errors"` |  |
| `"messages"` |  |
| `"result"` |  |
| `"success"` | Whether the API call was successful. |

Operations: List, Update.

API path: `/accounts/{account_id}/workers/scripts/{script_name}/schedules`

#### WorkerDeployment

| Field | Description |
| --- | --- |
| `"annotations"` |  |
| `"author_email"` |  |
| `"created_on"` |  |
| `"errors"` |  |
| `"id"` |  |
| `"messages"` |  |
| `"result"` |  |
| `"source"` |  |
| `"strategy"` |  |
| `"success"` | Whether the API call was successful. |
| `"versions"` | Worker versions included in this deployment. |

Operations: Create, Load.

API path: `/accounts/{account_id}/workers/scripts/{script_name}/deployments`

#### WorkerEnvironment

| Field | Description |
| --- | --- |

Operations: Load.

API path: `/accounts/{account_id}/workers/services/{service_name}/environments/{environment_name}/content`

#### WorkerRoute

| Field | Description |
| --- | --- |
| `"errors"` |  |
| `"id"` |  |
| `"messages"` |  |
| `"pattern"` | Pattern to match incoming requests against. |
| `"result"` |  |
| `"script"` | Name of the script to run if the route matches. |
| `"success"` | Whether the API call was successful. |

Operations: Create, List, Load, Remove, Update.

API path: `/zones/{zone_id}/workers/routes`

#### WorkerScript

| Field | Description |
| --- | --- |
| `"errors"` |  |
| `"id"` |  |
| `"messages"` |  |
| `"result"` | A secret value accessible through a binding. |
| `"success"` | Whether the API call was successful. |

Operations: Create, List, Load, Patch, Remove, Update.

API path: `/accounts/{account_id}/workers/scripts/{script_name}/subdomain`

#### WorkerSubdomain

| Field | Description |
| --- | --- |
| `"errors"` |  |
| `"messages"` |  |
| `"result"` |  |
| `"subdomain"` |  |
| `"success"` | Whether the API call was successful. |

Operations: List, Remove, Update.

API path: `/accounts/{account_id}/workers/subdomain`

#### WorkerTailLog

| Field | Description |
| --- | --- |
| `"errors"` |  |
| `"messages"` |  |
| `"result"` |  |
| `"success"` | Whether the API call was successful. |

Operations: Create, List.

API path: `/accounts/{account_id}/workers/scripts/{script_name}/tails`

#### WorkersAccountSetting

| Field | Description |
| --- | --- |
| `"default_usage_model"` |  |
| `"errors"` |  |
| `"green_compute"` |  |
| `"messages"` |  |
| `"result"` |  |
| `"success"` | Whether the API call was successful. |

Operations: List, Update.

API path: `/accounts/{account_id}/workers/account-settings`

#### WorkersApiResponseNullResult

| Field | Description |
| --- | --- |
| `"errors"` |  |
| `"messages"` |  |
| `"result"` |  |
| `"success"` | Whether the API call was successful. |

Operations: Remove, Update.

API path: `/accounts/{account_id}/workers/dispatch/namespaces/{dispatch_namespace}/scripts/{script_name}/secrets/{secret_name}`

#### WorkersCompletedUploadAsset

| Field | Description |
| --- | --- |

Operations: Create.

API path: `/accounts/{account_id}/workers/assets/upload`

#### WorkersCreateAssetsUploadSession

| Field | Description |
| --- | --- |
| `"manifest"` | A manifest ([path]: {hash, size}) map of files to upload. |

Operations: Create.

API path: `/accounts/{account_id}/workers/dispatch/namespaces/{dispatch_namespace}/scripts/{script_name}/assets-upload-session`

#### WorkersForPlatform

| Field | Description |
| --- | --- |
| `"errors"` |  |
| `"messages"` |  |
| `"result"` | A secret value accessible through a binding. |
| `"success"` | Whether the API call was successful. |

Operations: List, Load, Patch, Update.

API path: `/accounts/{account_id}/workers/dispatch/namespaces/{dispatch_namespace}/scripts`

#### WorkersKvApiResponseCommonNoResult

| Field | Description |
| --- | --- |

Operations: Remove, Update.

API path: `/accounts/{account_id}/storage/kv/namespaces/{namespace_id}/values/{key_name}`

#### WorkersKvNamespace

| Field | Description |
| --- | --- |
| `"errors"` |  |
| `"id"` |  |
| `"jurisdiction"` | Specify the jurisdiction to restrict the KV namespace to durably store data within. |
| `"keys"` | Array of keys to retrieve (maximum of 100). |
| `"messages"` |  |
| `"result"` |  |
| `"result_info"` |  |
| `"success"` | Whether the API call was successful. |
| `"title"` | Human-readable string name for a Workers KV namespace. |
| `"type"` | Return values as strings with `text`, or parse stored JSON values with `json`. |
| `"withMetadata"` | Whether to include metadata in the response. |

Operations: Create, List, Load, Remove, Update.

API path: `/accounts/{account_id}/storage/kv/namespaces/{namespace_id}/bulk/delete`

#### WorkersNamespaceList

| Field | Description |
| --- | --- |
| `"errors"` |  |
| `"messages"` |  |
| `"result"` |  |
| `"success"` | Whether the API call was successful. |

Operations: List.

API path: `/accounts/{account_id}/workers/dispatch/namespaces`

#### WorkersNamespaceScriptDeleteBulk

| Field | Description |
| --- | --- |

Operations: Remove.

API path: `/accounts/{account_id}/workers/dispatch/namespaces/{dispatch_namespace}/scripts`

#### WorkersNamespaceScriptResponseSingle

| Field | Description |
| --- | --- |
| `"errors"` |  |
| `"messages"` |  |
| `"result"` | Details about a worker uploaded to a Workers for Platforms namespace. |
| `"success"` | Whether the API call was successful. |

Operations: Load, Update.

API path: `/accounts/{account_id}/workers/dispatch/namespaces/{dispatch_namespace}/scripts/{script_name}`

#### WorkersNamespaceSingle

| Field | Description |
| --- | --- |
| `"errors"` |  |
| `"messages"` |  |
| `"name"` | The name of the dispatch namespace. |
| `"result"` |  |
| `"success"` | Whether the API call was successful. |
| `"trusted_workers"` | Whether the Workers in the namespace are executed in a "trusted" manner. |

Operations: Create, Load, Patch, Update.

API path: `/accounts/{account_id}/workers/dispatch/namespaces`

#### WorkersPipelinesOther

| Field | Description |
| --- | --- |
| `"config"` | Defines the configuration of the R2 Sink. |
| `"created_at"` |  |
| `"destination"` |  |
| `"endpoint"` | Indicates the endpoint URL to send traffic. |
| `"failure_reason"` | Indicates the reason for the failure of the Pipeline. |
| `"format"` | Defines the output data format of a sink. |
| `"graph"` | Indicates the processing flow to implement the SQL. |
| `"http"` |  |
| `"id"` | Indicates a unique identifier for this pipeline. |
| `"modified_at"` |  |
| `"name"` | Indicates the name of the Pipeline. |
| `"schema"` | Defines the schema of the events in the data stream. |
| `"source"` |  |
| `"sql"` | Specifies SQL for the Pipeline processing flow. |
| `"status"` | Indicates the current status of the Pipeline. |
| `"tables"` | List of streams and sinks used by this pipeline. |
| `"type"` | Specifies the type of sink. |
| `"version"` | Indicates the version number of last saved configuration. |
| `"worker_binding"` |  |

Operations: Create, List, Load, Patch, Remove, Update.

API path: `/accounts/{account_id}/pipelines`

#### WorkersScriptAndVersionSetting

| Field | Description |
| --- | --- |
| `"errors"` |  |
| `"messages"` |  |
| `"result"` |  |
| `"success"` | Whether the API call was successful. |

Operations: List, Update.

API path: `/accounts/{account_id}/workers/scripts/{script_name}/settings`

#### WorkersScriptResponseCollection

| Field | Description |
| --- | --- |
| `"errors"` |  |
| `"messages"` |  |
| `"result"` |  |
| `"success"` | Whether the API call was successful. |

Operations: List.

API path: `/accounts/{account_id}/workers/scripts`

#### WorkersScriptResponseSingle

| Field | Description |
| --- | --- |

Operations: Update.

API path: `/accounts/{account_id}/workers/services/{service_name}/environments/{environment_name}/content`

#### WorkersSmartPlacement

| Field | Description |
| --- | --- |
| `"errors"` |  |
| `"messages"` |  |
| `"result"` |  |
| `"success"` | Whether the API call was successful. |

Operations: List.

API path: `/accounts/{account_id}/workers/placement/regions`

#### WorkersUsageModel

| Field | Description |
| --- | --- |
| `"errors"` |  |
| `"messages"` |  |
| `"result"` |  |
| `"success"` | Whether the API call was successful. |
| `"usage_model"` | Usage model for the Worker invocations. |
| `"user_limits"` | User-defined resource limits for Workers with standard usage model. |

Operations: List, Update.

API path: `/accounts/{account_id}/workers/scripts/{script_name}/usage-model`

#### WorkersVersionsList

| Field | Description |
| --- | --- |
| `"errors"` |  |
| `"messages"` |  |
| `"result"` |  |
| `"success"` | Whether the API call was successful. |

Operations: List.

API path: `/accounts/{account_id}/workers/scripts/{script_name}/versions`

#### WorkersVersionsSingle

| Field | Description |
| --- | --- |
| `"errors"` |  |
| `"messages"` |  |
| `"result"` |  |
| `"success"` | Whether the API call was successful. |

Operations: Load.

API path: `/accounts/{account_id}/workers/scripts/{script_name}/versions/{version_id}`

#### WorkersVersionsUpload

| Field | Description |
| --- | --- |

Operations: Create.

API path: `/accounts/{account_id}/workers/scripts/{script_name}/versions`

#### Workflow

| Field | Description |
| --- | --- |
| `"class_name"` |  |
| `"concurrency"` |  |
| `"default_retention"` | Default retention applied to instances of this version when they do not set their own retention. |
| `"errors"` |  |
| `"id"` |  |
| `"instances"` |  |
| `"limits"` |  |
| `"messages"` |  |
| `"result"` |  |
| `"result_info"` |  |
| `"schedules"` |  |
| `"script_name"` |  |
| `"success"` |  |

Operations: Create, List, Load, Patch, Remove, Update.

API path: `/accounts/{account_id}/workflows/{workflow_name}/instances/{instance_id}/events/{event_type}`



## Entities


### Account

Create an instance: `account := client.Account(nil)`

#### Operations

| Method | Description |
| --- | --- |
| `List(match, ctrl)` | List entities matching the criteria. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `id` | `string` |  |

#### Example: List

```go
accounts, err := client.Account(nil).List(nil, nil)
if err != nil {
    panic(err)
}
fmt.Println(accounts) // the array of records
```


### Application

Create an instance: `application := client.Application(nil)`

#### Operations

| Method | Description |
| --- | --- |
| `List(match, ctrl)` | List entities matching the criteria. |
| `Load(match, ctrl)` | Load a single entity by match criteria. |
| `Create(data, ctrl)` | Create a new entity with the given data. |
| `Update(data, ctrl)` | Update an existing entity. |
| `Remove(match, ctrl)` | Remove the matching entity. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `configuration` | `map[string]any` | Application configuration fields you can change without creating a rollout. |
| `constraints` | `map[string]any` |  |
| `errors` | `[]any` |  |
| `id` | `string` |  |
| `max_instances` | `int` | Maximum number of instances that an autoscaling application can run. |
| `messages` | `[]any` |  |
| `observability` | `any` | Top-level application observability settings. |
| `result` | `any` | The public Containers API returns an application. |
| `result_info` | `map[string]any` | Cursor pagination details for a v4 API list response. |
| `rollout_active_grace_period` | `int` | Grace period for active instances to stay alive before becoming eligible for shutdown signal due to a rollout, in seconds. |
| `success` | `bool` | Whether the API call was successful. |

#### Example: Load

```go
application, err := client.Application(nil).Load(map[string]any{"id": "application_id", "account_id": "account_id"}, nil)
if err != nil {
    panic(err)
}
fmt.Println(application) // the loaded record
```

#### Example: List

```go
applications, err := client.Application(nil).List(nil, nil)
if err != nil {
    panic(err)
}
fmt.Println(applications) // the array of records
```

#### Example: Create

```go
result, err := client.Application(nil).Create(map[string]any{
    "account_id": "example_account_id",
    "errors": []any{},
    "messages": []any{},
    "result": "example_result",
    "result_info": map[string]any{},
    "success": true,
}, nil)
if err != nil {
    panic(err)
}
fmt.Println(result)
```


### Brapi

Create an instance: `brapi := client.Brapi(nil)`

#### Operations

| Method | Description |
| --- | --- |
| `List(match, ctrl)` | List entities matching the criteria. |
| `Load(match, ctrl)` | Load a single entity by match criteria. |
| `Create(data, ctrl)` | Create a new entity with the given data. |
| `Update(data, ctrl)` | Update an existing entity. |
| `Remove(match, ctrl)` | Remove the matching entity. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `Browser` | `string` | Browser name and version. |
| `ProtocolVersion` | `string` | Chrome DevTools Protocol version. |
| `UserAgent` | `string` | User agent string. |
| `V8Version` | `string` | V8 JavaScript engine version. |
| `WebKitVersion` | `string` | WebKit version. |
| `actionTimeout` | `float64` | The maximum duration allowed for the browser action to complete after the page has loaded (such as taking screenshots, extracting content, or generating PDFs). |
| `addScriptTag` | `[]any` | Adds a script element into the page with the desired URL or content. |
| `addStyleTag` | `[]any` | Adds a `<link rel="stylesheet">` tag into the page with the desired URL or a `<style type="text/css">` tag with the content. |
| `allowRequestPattern` | `[]any` | Only allow requests that match the provided regex patterns, eg. |
| `allowResourceTypes` | `[]any` | Only allow requests that match the provided resource types, eg. |
| `authenticate` | `map[string]any` | Provide credentials for HTTP authentication. |
| `bestAttempt` | `bool` | Attempt to proceed when 'awaited' events fail or timeout. |
| `closeReason` | `float64` | Reason code for session closure. |
| `closeReasonText` | `string` | Human-readable close reason. |
| `commands` | `[]any` | Available commands. |
| `connectionEndTime` | `float64` | Connection end time. |
| `connectionId` | `string` | Connection ID. |
| `connectionStartTime` | `float64` | Connection start time. |
| `cookies` | `[]any` | Check [options](https://pptr.dev/api/puppeteer.page.setcookie). |
| `custom_ai` | `[]any` | Optional list of custom AI models to use for the request. |
| `dependencies` | `[]any` | Domain dependencies. |
| `description` | `string` | Target description. |
| `devtoolsFrontendUrl` | `string` | DevTools frontend URL. |
| `domain` | `string` | Domain name. |
| `elements` | `[]any` |  |
| `emulateMediaType` | `string` |  |
| `endTime` | `float64` | Session end time. |
| `errors` | `[]any` |  |
| `events` | `[]any` | Available events. |
| `excludeExternalLinks` | `bool` |  |
| `experimental` | `bool` | Whether this domain is experimental. |
| `formats` | `[]any` |  |
| `gotoOptions` | `map[string]any` | Check [options](https://pptr.dev/api/puppeteer.gotooptions). |
| `guardrails` | `map[string]any` |  |
| `html` | `string` | Set the content of the page, eg: `<h1>Hello World!!</h1>`. |
| `id` | `string` | Target ID. |
| `interestingOnly` | `bool` |  |
| `lastUpdated` | `float64` | Last updated timestamp. |
| `message` | `string` | Target activated. |
| `meta` | `map[string]any` |  |
| `pdfOptions` | `map[string]any` | Check [options](https://pptr.dev/api/puppeteer.pdfoptions). |
| `prompt` | `string` |  |
| `rejectRequestPattern` | `[]any` | Block undesired requests that match the provided regex patterns, eg. |
| `rejectResourceTypes` | `[]any` | Block undesired requests that match the provided resource types, eg. |
| `response_format` | `map[string]any` |  |
| `result` | `map[string]any` | HTML content. |
| `root` | `string` |  |
| `screenshotOptions` | `map[string]any` | Check [options](https://pptr.dev/api/puppeteer.screenshotoptions). |
| `scrollPage` | `bool` |  |
| `selector` | `string` |  |
| `sessionId` | `string` | Session ID. |
| `setExtraHTTPHeaders` | `map[string]any` |  |
| `setJavaScriptEnabled` | `bool` |  |
| `startTime` | `float64` | Session start time. |
| `success` | `bool` | Response status. |
| `title` | `string` | Title of the target. |
| `type` | `string` | Target type (page, background_page, worker, etc.). |
| `types` | `[]any` | Type definitions. |
| `url` | `string` | URL of the target. |
| `userAgent` | `string` |  |
| `viewport` | `map[string]any` | Check [options](https://pptr.dev/api/puppeteer.page.setviewport). |
| `visibleLinksOnly` | `bool` |  |
| `waitForSelector` | `map[string]any` | Wait for the selector to appear in page. |
| `waitForTimeout` | `float64` | Waits for a specified timeout before continuing. |
| `webSocketDebuggerUrl` | `string` | WebSocket URL for debugging this target. |

#### Example: Load

```go
brapi, err := client.Brapi(nil).Load(map[string]any{"account_id": "account_id"}, nil)
if err != nil {
    panic(err)
}
fmt.Println(brapi) // the loaded record
```

#### Example: List

```go
brapis, err := client.Brapi(nil).List(nil, nil)
if err != nil {
    panic(err)
}
fmt.Println(brapis) // the array of records
```

#### Example: Create

```go
result, err := client.Brapi(nil).Create(map[string]any{
    "account_id": "example_account_id",
    "Browser": "example_Browser",
    "ProtocolVersion": "example_ProtocolVersion",
    "UserAgent": "example_UserAgent",
    "V8Version": "example_V8Version",
    "WebKitVersion": "example_WebKitVersion",
    "authenticate": map[string]any{},
    "domain": "example_domain",
    "elements": []any{},
    "id": "example_id",
    "message": "example_message",
    "meta": map[string]any{},
    "response_format": map[string]any{},
    "result": map[string]any{},
    "sessionId": "example_sessionId",
    "success": true,
    "type": "example_type",
    "url": "example_url",
    "viewport": map[string]any{},
    "waitForSelector": map[string]any{},
}, nil)
if err != nil {
    panic(err)
}
fmt.Println(result)
```


### Build

Create an instance: `build := client.Build(nil)`

#### Operations

| Method | Description |
| --- | --- |
| `List(match, ctrl)` | List entities matching the criteria. |
| `Load(match, ctrl)` | Load a single entity by match criteria. |
| `Update(data, ctrl)` | Update an existing entity. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `errors` | `[]any` |  |
| `id` | `string` |  |
| `messages` | `[]any` |  |
| `result` | `map[string]any` |  |
| `result_info` | `map[string]any` |  |
| `success` | `bool` |  |

#### Example: Load

```go
build, err := client.Build(nil).Load(map[string]any{"id": "build_id", "account_id": "account_id"}, nil)
if err != nil {
    panic(err)
}
fmt.Println(build) // the loaded record
```

#### Example: List

```go
builds, err := client.Build(nil).List(nil, nil)
if err != nil {
    panic(err)
}
fmt.Println(builds) // the array of records
```


### BuildToken

Create an instance: `buildToken := client.BuildToken(nil)`

#### Operations

| Method | Description |
| --- | --- |
| `List(match, ctrl)` | List entities matching the criteria. |
| `Create(data, ctrl)` | Create a new entity with the given data. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `build_token_name` | `string` |  |
| `build_token_secret` | `string` |  |
| `cloudflare_token_id` | `string` |  |
| `errors` | `[]any` |  |
| `messages` | `[]any` |  |
| `result` | `map[string]any` |  |
| `result_info` | `map[string]any` |  |
| `success` | `bool` |  |

#### Example: List

```go
buildTokens, err := client.BuildToken(nil).List(nil, nil)
if err != nil {
    panic(err)
}
fmt.Println(buildTokens) // the array of records
```

#### Example: Create

```go
result, err := client.BuildToken(nil).Create(map[string]any{
    "account_id": "example_account_id",
    "build_token_name": "example_build_token_name",
    "build_token_secret": "example_build_token_secret",
    "cloudflare_token_id": "example_cloudflare_token_id",
    "errors": []any{},
    "messages": []any{},
    "result": map[string]any{},
    "success": true,
}, nil)
if err != nil {
    panic(err)
}
fmt.Println(result)
```


### BuildsApi

Create an instance: `buildsApi := client.BuildsApi(nil)`

#### Operations

| Method | Description |
| --- | --- |
| `Create(data, ctrl)` | Create a new entity with the given data. |
| `Remove(match, ctrl)` | Remove the matching entity. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `errors` | `[]any` |  |
| `messages` | `[]any` |  |
| `result` | `map[string]any` |  |
| `result_info` | `map[string]any` |  |
| `success` | `bool` |  |

#### Example: Create

```go
result, err := client.BuildsApi(nil).Create(map[string]any{
    "account_id": "example_account_id",
    "trigger_id": "example_trigger_id",
    "errors": []any{},
    "messages": []any{},
    "result": map[string]any{},
    "success": true,
}, nil)
if err != nil {
    panic(err)
}
fmt.Println(result)
```


### Connection

Create an instance: `connection := client.Connection(nil)`

#### Operations

| Method | Description |
| --- | --- |
| `Remove(match, ctrl)` | Remove the matching entity. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `id` | `string` |  |


### ContainerImage

Create an instance: `containerImage := client.ContainerImage(nil)`

#### Operations

| Method | Description |
| --- | --- |
| `Create(data, ctrl)` | Create a new entity with the given data. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `image` | `string` | Image url. |

#### Example: Create

```go
result, err := client.ContainerImage(nil).Create(map[string]any{
    "account_id": "example_account_id",
    "image": "example_image",
}, nil)
if err != nil {
    panic(err)
}
fmt.Println(result)
```


### ContainerInstance

Create an instance: `containerInstance := client.ContainerInstance(nil)`

#### Operations

| Method | Description |
| --- | --- |
| `List(match, ctrl)` | List entities matching the criteria. |
| `Load(match, ctrl)` | Load a single entity by match criteria. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `errors` | `[]any` |  |
| `id` | `string` |  |
| `messages` | `[]any` |  |
| `result` | `any` | A container instance belonging to an application. |
| `result_info` | `map[string]any` | Cursor pagination details for a v4 API list response. |
| `success` | `bool` | Whether the API call was successful. |

#### Example: Load

```go
containerInstance, err := client.ContainerInstance(nil).Load(map[string]any{"id": "container_instance_id", "account_id": "account_id", "application_id": "application_id"}, nil)
if err != nil {
    panic(err)
}
fmt.Println(containerInstance) // the loaded record
```

#### Example: List

```go
containerInstances, err := client.ContainerInstance(nil).List(nil, nil)
if err != nil {
    panic(err)
}
fmt.Println(containerInstances) // the array of records
```


### DeployHook

Create an instance: `deployHook := client.DeployHook(nil)`

#### Operations

| Method | Description |
| --- | --- |
| `List(match, ctrl)` | List entities matching the criteria. |
| `Load(match, ctrl)` | Load a single entity by match criteria. |
| `Create(data, ctrl)` | Create a new entity with the given data. |
| `Update(data, ctrl)` | Update an existing entity. |
| `Remove(match, ctrl)` | Remove the matching entity. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `branch` | `string` | Git branch name. |
| `deploy_hook_name` | `string` | Deploy hook name (1-58 characters). |
| `errors` | `[]any` |  |
| `id` | `string` |  |
| `messages` | `[]any` |  |
| `result` | `map[string]any` |  |
| `result_info` | `map[string]any` |  |
| `success` | `bool` |  |

#### Example: Load

```go
deployHook, err := client.DeployHook(nil).Load(map[string]any{"id": "deploy_hook_id", "account_id": "account_id", "worker_id": "worker_id"}, nil)
if err != nil {
    panic(err)
}
fmt.Println(deployHook) // the loaded record
```

#### Example: List

```go
deployHooks, err := client.DeployHook(nil).List(nil, nil)
if err != nil {
    panic(err)
}
fmt.Println(deployHooks) // the array of records
```

#### Example: Create

```go
result, err := client.DeployHook(nil).Create(map[string]any{
    "id": "example_id",
    "branch": "example_branch",
    "deploy_hook_name": "example_deploy_hook_name",
    "errors": []any{},
    "messages": []any{},
    "result": map[string]any{},
    "success": true,
}, nil)
if err != nil {
    panic(err)
}
fmt.Println(result)
```


### Deployment

Create an instance: `deployment := client.Deployment(nil)`

#### Operations

| Method | Description |
| --- | --- |
| `Remove(match, ctrl)` | Remove the matching entity. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `id` | `string` |  |


### Destination

Create an instance: `destination := client.Destination(nil)`

#### Operations

| Method | Description |
| --- | --- |
| `List(match, ctrl)` | List entities matching the criteria. |
| `Create(data, ctrl)` | Create a new entity with the given data. |
| `Update(data, ctrl)` | Update an existing entity. |
| `Remove(match, ctrl)` | Remove the matching entity. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `configuration` | `map[string]any` |  |
| `enabled` | `bool` |  |
| `errors` | `[]any` |  |
| `id` | `string` |  |
| `messages` | `[]any` |  |
| `name` | `string` |  |
| `result` | `map[string]any` |  |
| `skipPreflightCheck` | `bool` |  |
| `success` | `bool` |  |

#### Example: List

```go
destinations, err := client.Destination(nil).List(nil, nil)
if err != nil {
    panic(err)
}
fmt.Println(destinations) // the array of records
```

#### Example: Create

```go
result, err := client.Destination(nil).Create(map[string]any{
    "account_id": "example_account_id",
    "configuration": map[string]any{},
    "enabled": true,
    "errors": []any{},
    "messages": []any{},
    "name": "example_name",
    "result": map[string]any{},
    "success": true,
}, nil)
if err != nil {
    panic(err)
}
fmt.Println(result)
```


### Domain

Create an instance: `domain := client.Domain(nil)`

#### Operations

| Method | Description |
| --- | --- |
| `List(match, ctrl)` | List entities matching the criteria. |
| `Load(match, ctrl)` | Load a single entity by match criteria. |
| `Update(data, ctrl)` | Update an existing entity. |
| `Remove(match, ctrl)` | Remove the matching entity. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `errors` | `[]any` |  |
| `id` | `string` |  |
| `messages` | `[]any` |  |
| `result` | `map[string]any` |  |
| `success` | `bool` | Whether the API call was successful. |

#### Example: Load

```go
domain, err := client.Domain(nil).Load(map[string]any{"id": "domain_id", "account_id": "account_id"}, nil)
if err != nil {
    panic(err)
}
fmt.Println(domain) // the loaded record
```

#### Example: List

```go
domains, err := client.Domain(nil).List(nil, nil)
if err != nil {
    panic(err)
}
fmt.Println(domains) // the array of records
```


### DurableObjectsNamespace

Create an instance: `durableObjectsNamespace := client.DurableObjectsNamespace(nil)`

#### Operations

| Method | Description |
| --- | --- |
| `List(match, ctrl)` | List entities matching the criteria. |
| `Create(data, ctrl)` | Create a new entity with the given data. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `result` | `[]any` |  |
| `result_info` | `map[string]any` |  |

#### Example: List

```go
durableObjectsNamespaces, err := client.DurableObjectsNamespace(nil).List(nil, nil)
if err != nil {
    panic(err)
}
fmt.Println(durableObjectsNamespaces) // the array of records
```

#### Example: Create

```go
result, err := client.DurableObjectsNamespace(nil).Create(map[string]any{
    "account_id": "example_account_id",
    "namespace_id": "example_namespace_id",
}, nil)
if err != nil {
    panic(err)
}
fmt.Println(result)
```


### EnvironmentVariable

Create an instance: `environmentVariable := client.EnvironmentVariable(nil)`

#### Operations

| Method | Description |
| --- | --- |
| `List(match, ctrl)` | List entities matching the criteria. |
| `Update(data, ctrl)` | Update an existing entity. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `errors` | `[]any` |  |
| `messages` | `[]any` |  |
| `result` | `map[string]any` |  |
| `result_info` | `map[string]any` |  |
| `success` | `bool` |  |

#### Example: List

```go
environmentVariables, err := client.EnvironmentVariable(nil).List(nil, nil)
if err != nil {
    panic(err)
}
fmt.Println(environmentVariables) // the array of records
```


### GitHubIntegration

Create an instance: `gitHubIntegration := client.GitHubIntegration(nil)`

#### Operations

| Method | Description |
| --- | --- |
| `List(match, ctrl)` | List entities matching the criteria. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `errors` | `[]any` |  |
| `messages` | `[]any` |  |
| `result` | `map[string]any` |  |
| `result_info` | `map[string]any` |  |
| `success` | `bool` |  |

#### Example: List

```go
gitHubIntegrations, err := client.GitHubIntegration(nil).List(nil, nil)
if err != nil {
    panic(err)
}
fmt.Println(gitHubIntegrations) // the array of records
```


### Hyperdrive

Create an instance: `hyperdrive := client.Hyperdrive(nil)`

#### Operations

| Method | Description |
| --- | --- |
| `List(match, ctrl)` | List entities matching the criteria. |
| `Load(match, ctrl)` | Load a single entity by match criteria. |
| `Create(data, ctrl)` | Create a new entity with the given data. |
| `Update(data, ctrl)` | Update an existing entity. |
| `Remove(match, ctrl)` | Remove the matching entity. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `caching` | `map[string]any` |  |
| `created_on` | `string` | Defines the creation time of the Hyperdrive configuration. |
| `id` | `string` | Define configurations using a unique string identifier. |
| `modified_on` | `string` | Defines the last modified time of the Hyperdrive configuration. |
| `mtls` | `map[string]any` | mTLS configuration for the origin connection. |
| `name` | `string` | The name of the Hyperdrive configuration. |
| `origin` | `map[string]any` | Combines database connection fields with exactly one supported network location. |
| `origin_connection_limit` | `int` | The (soft) maximum number of connections the Hyperdrive is allowed to make to the origin database. |
| `restarted_on` | `string` | Defines the last time the Hyperdrive connection pool was explicitly restarted via the restart endpoint. |
| `result` | `map[string]any` |  |

#### Example: Load

```go
hyperdrive, err := client.Hyperdrive(nil).Load(map[string]any{"account_id": "account_id", "hyperdrive_id": "hyperdrive_id"}, nil)
if err != nil {
    panic(err)
}
fmt.Println(hyperdrive) // the loaded record
```

#### Example: List

```go
hyperdrives, err := client.Hyperdrive(nil).List(nil, nil)
if err != nil {
    panic(err)
}
fmt.Println(hyperdrives) // the array of records
```

#### Example: Create

```go
result, err := client.Hyperdrive(nil).Create(map[string]any{
    "account_id": "example_account_id",
    "integration": "example_integration",
    "id": "example_id",
    "name": "example_name",
    "origin": map[string]any{},
    "result": map[string]any{},
}, nil)
if err != nil {
    panic(err)
}
fmt.Println(result)
```


### ImageRegistry

Create an instance: `imageRegistry := client.ImageRegistry(nil)`

#### Operations

| Method | Description |
| --- | --- |
| `List(match, ctrl)` | List entities matching the criteria. |
| `Create(data, ctrl)` | Create a new entity with the given data. |
| `Remove(match, ctrl)` | Remove the matching entity. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `auth` | `map[string]any` | Credentials for authenticating to a private external image registry. |
| `domain` | `string` | Hostname of the private registry, without a scheme or image path. |
| `errors` | `[]any` |  |
| `expiration_minutes` | `int` | The number of minutes Cloudflare managed registry credentials stay valid. |
| `id` | `string` |  |
| `is_public` | `bool` | Omit this field or set it to `false`. |
| `kind` | `any` | Registry provider. |
| `messages` | `[]any` |  |
| `permissions` | `[]any` | The permissions for Cloudflare managed registry credentials. |
| `result` | `[]any` |  |
| `success` | `bool` | Whether the API call was successful. |

#### Example: List

```go
imageRegistrys, err := client.ImageRegistry(nil).List(nil, nil)
if err != nil {
    panic(err)
}
fmt.Println(imageRegistrys) // the array of records
```

#### Example: Create

```go
result, err := client.ImageRegistry(nil).Create(map[string]any{
    "account_id": "example_account_id",
    "auth": map[string]any{},
    "errors": []any{},
    "kind": "example_kind",
    "messages": []any{},
    "result": []any{},
    "success": true,
}, nil)
if err != nil {
    panic(err)
}
fmt.Println(result)
```


### Issue

Create an instance: `issue := client.Issue(nil)`

#### Operations

| Method | Description |
| --- | --- |
| `List(match, ctrl)` | List entities matching the criteria. |
| `Load(match, ctrl)` | Load a single entity by match criteria. |
| `Create(data, ctrl)` | Create a new entity with the given data. |
| `Update(data, ctrl)` | Update an existing entity. |
| `Remove(match, ctrl)` | Remove the matching entity. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `afterInactivitySeconds` | `int` |  |
| `afterOccurrences` | `int` |  |
| `enabled` | `bool` |  |
| `errors` | `[]any` |  |
| `id` | `string` |  |
| `issueIds` | `[]any` |  |
| `messages` | `[]any` |  |
| `name` | `string` |  |
| `policyId` | `string` |  |
| `result` | `map[string]any` |  |
| `result_info` | `map[string]any` |  |
| `service` | `string` |  |
| `status` | `string` |  |
| `success` | `bool` |  |
| `title` | `string` |  |

#### Example: Load

```go
issue, err := client.Issue(nil).Load(map[string]any{"id": "issue_id", "account_id": "account_id"}, nil)
if err != nil {
    panic(err)
}
fmt.Println(issue) // the loaded record
```

#### Example: List

```go
issues, err := client.Issue(nil).List(nil, nil)
if err != nil {
    panic(err)
}
fmt.Println(issues) // the array of records
```

#### Example: Create

```go
result, err := client.Issue(nil).Create(map[string]any{
    "account_id": "example_account_id",
    "group_id": "example_group_id",
    "errors": []any{},
    "issueIds": []any{},
    "messages": []any{},
    "policyId": "example_policyId",
    "result": map[string]any{},
    "result_info": map[string]any{},
    "success": true,
}, nil)
if err != nil {
    panic(err)
}
fmt.Println(result)
```


### Key

Create an instance: `key := client.Key(nil)`

#### Operations

| Method | Description |
| --- | --- |
| `Create(data, ctrl)` | Create a new entity with the given data. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `datasets` | `[]any` | Leave this empty to use the default datasets |
| `errors` | `[]any` |  |
| `filters` | `[]any` | Apply filters to narrow key discovery. |
| `from` | `float64` |  |
| `keyNeedle` | `map[string]any` | If the user suggests a key, use this to narrow down the list of keys returned. |
| `limit` | `float64` | Advanced usage: set limit=1000+ to retrieve comprehensive key options without needing additional filtering. |
| `messages` | `[]any` |  |
| `needle` | `map[string]any` | Search for a specific substring in any of the events |
| `result` | `[]any` |  |
| `success` | `bool` |  |
| `to` | `float64` |  |

#### Example: Create

```go
result, err := client.Key(nil).Create(map[string]any{
    "account_id": "example_account_id",
    "errors": []any{},
    "keyNeedle": map[string]any{},
    "messages": []any{},
    "needle": map[string]any{},
    "result": []any{},
    "success": true,
}, nil)
if err != nil {
    panic(err)
}
fmt.Println(result)
```


### LiveTail

Create an instance: `liveTail := client.LiveTail(nil)`

#### Operations

| Method | Description |
| --- | --- |
| `Create(data, ctrl)` | Create a new entity with the given data. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `errors` | `[]any` |  |
| `filterCombination` | `string` | Set a flag to describe how to combine the filters on the query. |
| `filters` | `[]any` | Apply filters to the query. |
| `messages` | `[]any` |  |
| `result` | `map[string]any` |  |
| `scriptId` | `string` |  |
| `success` | `bool` |  |

#### Example: Create

```go
result, err := client.LiveTail(nil).Create(map[string]any{
    "account_id": "example_account_id",
    "errors": []any{},
    "messages": []any{},
    "result": map[string]any{},
    "success": true,
}, nil)
if err != nil {
    panic(err)
}
fmt.Println(result)
```


### MetricsExport

Create an instance: `metricsExport := client.MetricsExport(nil)`

#### Operations

| Method | Description |
| --- | --- |
| `List(match, ctrl)` | List entities matching the criteria. |
| `Create(data, ctrl)` | Create a new entity with the given data. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `errors` | `[]any` |  |
| `messages` | `[]any` |  |
| `requester` | `map[string]any` |  |
| `resources` | `[]any` |  |
| `result` | `[]any` |  |
| `success` | `bool` |  |

#### Example: List

```go
metricsExports, err := client.MetricsExport(nil).List(nil, nil)
if err != nil {
    panic(err)
}
fmt.Println(metricsExports) // the array of records
```

#### Example: Create

```go
result, err := client.MetricsExport(nil).Create(map[string]any{
    "account_id": "example_account_id",
    "errors": []any{},
    "messages": []any{},
    "requester": map[string]any{},
    "resources": []any{},
    "result": []any{},
    "success": true,
}, nil)
if err != nil {
    panic(err)
}
fmt.Println(result)
```


### Namespace

Create an instance: `namespace := client.Namespace(nil)`

#### Operations

| Method | Description |
| --- | --- |
| `Remove(match, ctrl)` | Remove the matching entity. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `id` | `string` |  |


### Preview

Create an instance: `preview := client.Preview(nil)`

#### Operations

| Method | Description |
| --- | --- |
| `List(match, ctrl)` | List entities matching the criteria. |
| `Load(match, ctrl)` | Load a single entity by match criteria. |
| `Create(data, ctrl)` | Create a new entity with the given data. |
| `Update(data, ctrl)` | Update an existing entity. |
| `Remove(match, ctrl)` | Remove the matching entity. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `errors` | `[]any` |  |
| `id` | `string` |  |
| `messages` | `[]any` |  |
| `result` | `map[string]any` |  |
| `success` | `bool` | Whether the API call was successful. |

#### Example: Load

```go
preview, err := client.Preview(nil).Load(map[string]any{"id": "preview_id", "account_id": "account_id", "worker_id": "worker_id"}, nil)
if err != nil {
    panic(err)
}
fmt.Println(preview) // the loaded record
```

#### Example: List

```go
previews, err := client.Preview(nil).List(nil, nil)
if err != nil {
    panic(err)
}
fmt.Println(previews) // the array of records
```

#### Example: Create

```go
result, err := client.Preview(nil).Create(map[string]any{
    "account_id": "example_account_id",
    "worker_id": "example_worker_id",
    "errors": []any{},
    "messages": []any{},
    "result": map[string]any{},
    "success": true,
}, nil)
if err != nil {
    panic(err)
}
fmt.Println(result)
```


### PreviewDeployment

Create an instance: `previewDeployment := client.PreviewDeployment(nil)`

#### Operations

| Method | Description |
| --- | --- |
| `List(match, ctrl)` | List entities matching the criteria. |
| `Load(match, ctrl)` | Load a single entity by match criteria. |
| `Create(data, ctrl)` | Create a new entity with the given data. |
| `Update(data, ctrl)` | Update an existing entity. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `errors` | `[]any` |  |
| `id` | `string` |  |
| `messages` | `[]any` |  |
| `result` | `any` |  |
| `success` | `bool` | Whether the API call was successful. |

#### Example: Load

```go
previewDeployment, err := client.PreviewDeployment(nil).Load(map[string]any{"id": "preview_deployment_id", "account_id": "account_id", "preview_id": "preview_id", "worker_id": "worker_id"}, nil)
if err != nil {
    panic(err)
}
fmt.Println(previewDeployment) // the loaded record
```

#### Example: List

```go
previewDeployments, err := client.PreviewDeployment(nil).List(nil, nil)
if err != nil {
    panic(err)
}
fmt.Println(previewDeployments) // the array of records
```

#### Example: Create

```go
result, err := client.PreviewDeployment(nil).Create(map[string]any{
    "account_id": "example_account_id",
    "id": "example_id",
    "worker_id": "example_worker_id",
    "errors": []any{},
    "messages": []any{},
    "result": "example_result",
    "success": true,
}, nil)
if err != nil {
    panic(err)
}
fmt.Println(result)
```


### Query

Create an instance: `query := client.Query(nil)`

#### Operations

| Method | Description |
| --- | --- |
| `Create(data, ctrl)` | Create a new entity with the given data. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `chart` | `bool` | When true, includes time-series data in the response. |
| `chartType` | `string` | Controls the SQL shape and response payload for the 'calculations' view. |
| `compare` | `bool` | When true, includes a comparison dataset from the previous time period of equal length. |
| `distributionScale` | `string` | Value-axis bucketing for chartType 'distribution'. |
| `dry` | `bool` | When true, executes the query without persisting the results. |
| `errors` | `[]any` |  |
| `granularity` | `float64` | Number of time-series buckets. |
| `ignoreSeries` | `bool` | When true, omits time-series data from the response and returns only aggregated values. |
| `limit` | `float64` | Maximum number of events to return when view is 'events'. |
| `messages` | `[]any` |  |
| `offset` | `string` | Cursor for pagination in event, trace, invocation, and agent views. |
| `offsetBy` | `float64` | Numeric offset for paginating grouped/pattern results (top-N lists). |
| `offsetDirection` | `string` | Pagination direction: 'next' for forward, 'prev' for backward. |
| `parameters` | `map[string]any` | Query parameters defining what data to retrieve — filters, calculations, group-bys, and ordering. |
| `queryId` | `string` | Identifier for the query. |
| `result` | `map[string]any` | Complete results of a query run. |
| `success` | `bool` |  |
| `timeframe` | `map[string]any` | Timeframe for the query using Unix timestamps in milliseconds. |
| `view` | `string` | Controls the shape of the response. |

#### Example: Create

```go
result, err := client.Query(nil).Create(map[string]any{
    "account_id": "example_account_id",
    "errors": []any{},
    "messages": []any{},
    "queryId": "example_queryId",
    "result": map[string]any{},
    "success": true,
    "timeframe": map[string]any{},
}, nil)
if err != nil {
    panic(err)
}
fmt.Println(result)
```


### RepositoryConnection

Create an instance: `repositoryConnection := client.RepositoryConnection(nil)`

#### Operations

| Method | Description |
| --- | --- |
| `Update(data, ctrl)` | Update an existing entity. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `provider_account_id` | `string` | Provider-specific identifier of the account or namespace that owns the repository. |
| `provider_account_name` | `string` | Human-readable name of the account or namespace that owns the repository. |
| `provider_type` | `string` | Source control provider. |
| `repo_id` | `string` | Provider-specific repository identifier. |
| `repo_name` | `string` | Human-readable repository name. |


### Rollout

Create an instance: `rollout := client.Rollout(nil)`

#### Operations

| Method | Description |
| --- | --- |
| `Create(data, ctrl)` | Create a new entity with the given data. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `description` | `string` | Description of the rollout process. |
| `kind` | `string` | Kind of the rollout process. |
| `percentage` | `int` | Initial target version percentage (0-100). |
| `step_percentage` | `int` | Percentage of rollout to increase in each step when "steps" is absent. |
| `steps` | `[]any` | Steps defining the rollout process, used when "step_percentage" is absent. |
| `strategy` | `string` | Strategy used for the rollout. |
| `target_configuration` | `map[string]any` | User-specified container configuration changes. |

#### Example: Create

```go
result, err := client.Rollout(nil).Create(map[string]any{
    "account_id": "example_account_id",
    "application_id": "example_application_id",
    "description": "example_description",
    "strategy": "example_strategy",
    "target_configuration": map[string]any{},
}, nil)
if err != nil {
    panic(err)
}
fmt.Println(result)
```


### SavedQuery

Create an instance: `savedQuery := client.SavedQuery(nil)`

#### Operations

| Method | Description |
| --- | --- |
| `List(match, ctrl)` | List entities matching the criteria. |
| `Load(match, ctrl)` | Load a single entity by match criteria. |
| `Create(data, ctrl)` | Create a new entity with the given data. |
| `Update(data, ctrl)` | Update an existing entity. |
| `Remove(match, ctrl)` | Remove the matching entity. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `description` | `string` |  |
| `errors` | `[]any` |  |
| `id` | `string` |  |
| `messages` | `[]any` |  |
| `name` | `string` | Query name |
| `parameters` | `map[string]any` |  |
| `result` | `map[string]any` |  |
| `success` | `bool` |  |

#### Example: Load

```go
savedQuery, err := client.SavedQuery(nil).Load(map[string]any{"id": "saved_query_id", "account_id": "account_id"}, nil)
if err != nil {
    panic(err)
}
fmt.Println(savedQuery) // the loaded record
```

#### Example: List

```go
savedQuerys, err := client.SavedQuery(nil).List(nil, nil)
if err != nil {
    panic(err)
}
fmt.Println(savedQuerys) // the array of records
```

#### Example: Create

```go
result, err := client.SavedQuery(nil).Create(map[string]any{
    "account_id": "example_account_id",
    "description": "example_description",
    "errors": []any{},
    "messages": []any{},
    "name": "example_name",
    "parameters": map[string]any{},
    "result": map[string]any{},
    "success": true,
}, nil)
if err != nil {
    panic(err)
}
fmt.Println(result)
```


### Script

Create an instance: `script := client.Script(nil)`

#### Operations

| Method | Description |
| --- | --- |
| `Remove(match, ctrl)` | Remove the matching entity. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `id` | `string` |  |


### ScriptSetting

Create an instance: `scriptSetting := client.ScriptSetting(nil)`

#### Operations

| Method | Description |
| --- | --- |
| `List(match, ctrl)` | List entities matching the criteria. |
| `Update(data, ctrl)` | Update an existing entity. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `errors` | `[]any` |  |
| `logpush` | `bool` | Whether Logpush is turned on for the Worker. |
| `messages` | `[]any` |  |
| `observability` | `any` |  |
| `result` | `map[string]any` |  |
| `success` | `bool` | Whether the API call was successful. |
| `tags` | `any` |  |
| `tail_consumers` | `[]any` | List of Workers that will consume logs from the attached Worker. |

#### Example: List

```go
scriptSettings, err := client.ScriptSetting(nil).List(nil, nil)
if err != nil {
    panic(err)
}
fmt.Println(scriptSettings) // the array of records
```


### Secret

Create an instance: `secret := client.Secret(nil)`

#### Operations

| Method | Description |
| --- | --- |
| `List(match, ctrl)` | List entities matching the criteria. |
| `Load(match, ctrl)` | Load a single entity by match criteria. |
| `Create(data, ctrl)` | Create a new entity with the given data. |
| `Update(data, ctrl)` | Update an existing entity. |
| `Remove(match, ctrl)` | Remove the matching entity. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `comment` | `string` | Freeform text describing the secret. |
| `id` | `string` |  |
| `result` | `any` |  |
| `scopes` | `[]any` | The list of services that can use this secret. |
| `value` | `string` | The value of the secret. |

#### Example: Load

```go
secret, err := client.Secret(nil).Load(map[string]any{"id": "secret_id", "account_id": "account_id", "store_id": "store_id"}, nil)
if err != nil {
    panic(err)
}
fmt.Println(secret) // the loaded record
```

#### Example: List

```go
secrets, err := client.Secret(nil).List(nil, nil)
if err != nil {
    panic(err)
}
fmt.Println(secrets) // the array of records
```

#### Example: Create

```go
result, err := client.Secret(nil).Create(map[string]any{
    "account_id": "example_account_id",
    "store_id": "example_store_id",
    "result": "example_result",
}, nil)
if err != nil {
    panic(err)
}
fmt.Println(result)
```


### SecretsStoreDelete

Create an instance: `secretsStoreDelete := client.SecretsStoreDelete(nil)`

#### Operations

| Method | Description |
| --- | --- |
| `Remove(match, ctrl)` | Remove the matching entity. |


### SecretsStoreQuota

Create an instance: `secretsStoreQuota := client.SecretsStoreQuota(nil)`

#### Operations

| Method | Description |
| --- | --- |
| `Load(match, ctrl)` | Load a single entity by match criteria. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `result` | `any` |  |

#### Example: Load

```go
secretsStoreQuota, err := client.SecretsStoreQuota(nil).Load(map[string]any{"account_id": "account_id"}, nil)
if err != nil {
    panic(err)
}
fmt.Println(secretsStoreQuota) // the loaded record
```


### SecretsStoreSecret

Create an instance: `secretsStoreSecret := client.SecretsStoreSecret(nil)`

#### Operations

| Method | Description |
| --- | --- |
| `Create(data, ctrl)` | Create a new entity with the given data. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `comment` | `string` | Freeform text describing the secret. |
| `name` | `string` | The name of the secret. |
| `scopes` | `[]any` | The list of services that can use this secret. |

#### Example: Create

```go
result, err := client.SecretsStoreSecret(nil).Create(map[string]any{
    "account_id": "example_account_id",
    "secret_id": "example_secret_id",
    "store_id": "example_store_id",
    "name": "example_name",
    "scopes": []any{},
}, nil)
if err != nil {
    panic(err)
}
fmt.Println(result)
```


### SecretsStoreStore

Create an instance: `secretsStoreStore := client.SecretsStoreStore(nil)`

#### Operations

| Method | Description |
| --- | --- |
| `Load(match, ctrl)` | Load a single entity by match criteria. |
| `Create(data, ctrl)` | Create a new entity with the given data. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `id` | `string` |  |
| `name` | `string` | The name of the store. |
| `result` | `any` |  |

#### Example: Load

```go
secretsStoreStore, err := client.SecretsStoreStore(nil).Load(map[string]any{"id": "secrets_store_store_id", "account_id": "account_id"}, nil)
if err != nil {
    panic(err)
}
fmt.Println(secretsStoreStore) // the loaded record
```

#### Example: Create

```go
result, err := client.SecretsStoreStore(nil).Create(map[string]any{
    "account_id": "example_account_id",
    "name": "example_name",
    "result": "example_result",
}, nil)
if err != nil {
    panic(err)
}
fmt.Println(result)
```


### SecretsStoreStoresResponseCollection

Create an instance: `secretsStoreStoresResponseCollection := client.SecretsStoreStoresResponseCollection(nil)`

#### Operations

| Method | Description |
| --- | --- |
| `List(match, ctrl)` | List entities matching the criteria. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `result` | `[]any` |  |

#### Example: List

```go
secretsStoreStoresResponseCollections, err := client.SecretsStoreStoresResponseCollection(nil).List(nil, nil)
if err != nil {
    panic(err)
}
fmt.Println(secretsStoreStoresResponseCollections) // the array of records
```


### Setting

Create an instance: `setting := client.Setting(nil)`

#### Operations

| Method | Description |
| --- | --- |
| `List(match, ctrl)` | List entities matching the criteria. |
| `Update(data, ctrl)` | Update an existing entity. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `errors` | `[]any` |  |
| `messages` | `[]any` |  |
| `result` | `map[string]any` |  |
| `success` | `bool` | Whether the API call was successful. |

#### Example: List

```go
settings, err := client.Setting(nil).List(nil, nil)
if err != nil {
    panic(err)
}
fmt.Println(settings) // the array of records
```


### Shared

Create an instance: `shared := client.Shared(nil)`

#### Operations

| Method | Description |
| --- | --- |
| `Load(match, ctrl)` | Load a single entity by match criteria. |
| `Create(data, ctrl)` | Create a new entity with the given data. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `errors` | `[]any` |  |
| `id` | `string` |  |
| `messages` | `[]any` |  |
| `result` | `map[string]any` | Complete results of a query run. |
| `success` | `bool` |  |

#### Example: Load

```go
shared, err := client.Shared(nil).Load(map[string]any{"id": "shared_id", "account_id": "account_id"}, nil)
if err != nil {
    panic(err)
}
fmt.Println(shared) // the loaded record
```

#### Example: Create

```go
result, err := client.Shared(nil).Create(map[string]any{
    "account_id": "example_account_id",
    "errors": []any{},
    "messages": []any{},
    "result": map[string]any{},
    "success": true,
}, nil)
if err != nil {
    panic(err)
}
fmt.Println(result)
```


### Tail

Create an instance: `tail := client.Tail(nil)`

#### Operations

| Method | Description |
| --- | --- |
| `Remove(match, ctrl)` | Remove the matching entity. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `id` | `string` |  |


### Token

Create an instance: `token := client.Token(nil)`

#### Operations

| Method | Description |
| --- | --- |
| `Remove(match, ctrl)` | Remove the matching entity. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `id` | `string` |  |


### Trigger

Create an instance: `trigger := client.Trigger(nil)`

#### Operations

| Method | Description |
| --- | --- |
| `Create(data, ctrl)` | Create a new entity with the given data. |
| `Update(data, ctrl)` | Update an existing entity. |
| `Remove(match, ctrl)` | Remove the matching entity. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `branch_excludes` | `[]any` | Branch patterns that must not start builds. |
| `branch_includes` | `[]any` | Branch patterns that can start builds. |
| `build_caching_enabled` | `bool` | Whether builds reuse cached dependencies and build artifacts. |
| `build_command` | `string` | Command to build the Worker. |
| `build_token_uuid` | `string` | UUID of the build token used when deploying the Worker. |
| `deploy_command` | `string` | Command to deploy the Worker. |
| `external_script_id` | `string` | System-generated tag of the Worker. |
| `id` | `string` |  |
| `path_excludes` | `[]any` | Path patterns that must not start builds. |
| `path_includes` | `[]any` | Path patterns that can start builds. |
| `repo_connection_uuid` | `string` | Repository connection UUID. |
| `root_directory` | `string` | Repository directory in which build and deploy commands run. |
| `trigger_name` | `string` | Human-readable name of the build trigger. |

#### Example: Create

```go
result, err := client.Trigger(nil).Create(map[string]any{
    "account_id": "example_account_id",
    "branch_excludes": []any{},
    "branch_includes": []any{},
    "build_command": "example_build_command",
    "build_token_uuid": "example_build_token_uuid",
    "deploy_command": "example_deploy_command",
    "external_script_id": "example_external_script_id",
    "path_excludes": []any{},
    "path_includes": []any{},
    "repo_connection_uuid": "example_repo_connection_uuid",
    "root_directory": "example_root_directory",
    "trigger_name": "example_trigger_name",
}, nil)
if err != nil {
    panic(err)
}
fmt.Println(result)
```


### Usage

Create an instance: `usage := client.Usage(nil)`

#### Operations

| Method | Description |
| --- | --- |
| `List(match, ctrl)` | List entities matching the criteria. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `errors` | `[]any` |  |
| `messages` | `[]any` |  |
| `result` | `map[string]any` |  |
| `success` | `bool` |  |

#### Example: List

```go
usages, err := client.Usage(nil).List(nil, nil)
if err != nil {
    panic(err)
}
fmt.Println(usages) // the array of records
```


### Value

Create an instance: `value := client.Value(nil)`

#### Operations

| Method | Description |
| --- | --- |
| `Create(data, ctrl)` | Create a new entity with the given data. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `datasets` | `[]any` | Leave this empty to use the default datasets |
| `errors` | `[]any` |  |
| `filters` | `[]any` | Apply filters before listing values. |
| `key` | `string` |  |
| `limit` | `float64` |  |
| `messages` | `[]any` |  |
| `needle` | `map[string]any` | Full-text search expression to match events containing the specified text or pattern. |
| `result` | `[]any` |  |
| `success` | `bool` |  |
| `timeframe` | `map[string]any` |  |
| `type` | `string` |  |

#### Example: Create

```go
result, err := client.Value(nil).Create(map[string]any{
    "account_id": "example_account_id",
    "datasets": []any{},
    "errors": []any{},
    "key": "example_key",
    "messages": []any{},
    "needle": map[string]any{},
    "result": []any{},
    "success": true,
    "timeframe": map[string]any{},
    "type": "example_type",
}, nil)
if err != nil {
    panic(err)
}
fmt.Println(result)
```


### Version

Create an instance: `version := client.Version(nil)`

#### Operations

| Method | Description |
| --- | --- |
| `List(match, ctrl)` | List entities matching the criteria. |
| `Load(match, ctrl)` | Load a single entity by match criteria. |
| `Create(data, ctrl)` | Create a new entity with the given data. |
| `Update(data, ctrl)` | Update an existing entity. |
| `Remove(match, ctrl)` | Remove the matching entity. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `annotations` | `map[string]any` | Metadata about the version. |
| `assets` | `map[string]any` | Configuration for assets within a Worker. |
| `author_email` | `string` | Email of the user who created the version. |
| `author_id` | `string` | Identifier of the user who created the version. |
| `bindings` | `[]any` | List of bindings attached to a Worker. |
| `cache_options` | `map[string]any` | Global CacheW configuration for the Worker. |
| `compatibility_date` | `string` | Date indicating targeted support in the Workers runtime. |
| `compatibility_flags` | `[]any` | Flags that enable or disable certain features in the Workers runtime. |
| `containers` | `[]any` | List of containers attached to a Worker. |
| `created_on` | `string` | When the version was created. |
| `errors` | `[]any` |  |
| `exports` | `any` | Declarative exports for the version, including Durable Object classes (with their `storage` backend) and named Worker entrypoints. |
| `exports_reconciliation` | `any` | Summary of the declarative exports reconciliation that ran on this upload. |
| `id` | `string` | Version identifier. |
| `limits` | `map[string]any` | Resource limits enforced at runtime. |
| `main_module` | `string` | The name of the main module in the `modules` array (e.g. |
| `messages` | `[]any` |  |
| `migration_tag` | `string` | Durable Object migration tag. |
| `migrations` | `any` | Migrations for Durable Objects associated with the version. |
| `modules` | `[]any` | Code, sourcemaps, and other content used at runtime. |
| `number` | `int` | The integer version number, starting from one. |
| `package_dependencies` | `[]any` | The list of npm packages that were installed and used when this Worker version was built. |
| `placement` | `map[string]any` | Configuration for [Smart Placement](https://developers.cloudflare.com/workers/configuration/smart-placement). |
| `result` | `map[string]any` |  |
| `source` | `string` | The client used to create the version. |
| `startup_time_ms` | `int` | Time in milliseconds spent on [Worker startup](https://developers.cloudflare.com/workers/platform/limits/#worker-startup-time). |
| `success` | `bool` | Whether the API call was successful. |
| `urls` | `[]any` | All routable URLs that always point to this version. |
| `usage_model` | `string` | Usage model for the version. |

#### Example: Load

```go
version, err := client.Version(nil).Load(map[string]any{"id": "version_id", "account_id": "account_id", "worker_id": "worker_id"}, nil)
if err != nil {
    panic(err)
}
fmt.Println(version) // the loaded record
```

#### Example: List

```go
versions, err := client.Version(nil).List(nil, nil)
if err != nil {
    panic(err)
}
fmt.Println(versions) // the array of records
```

#### Example: Create

```go
result, err := client.Version(nil).Create(map[string]any{
    "account_id": "example_account_id",
    "worker_id": "example_worker_id",
    "cache_options": map[string]any{},
    "created_on": "example_created_on",
    "errors": []any{},
    "id": "example_id",
    "messages": []any{},
    "number": 1,
    "result": map[string]any{},
    "success": true,
    "urls": []any{},
}, nil)
if err != nil {
    panic(err)
}
fmt.Println(result)
```


### Worker

Create an instance: `worker := client.Worker(nil)`

#### Operations

| Method | Description |
| --- | --- |
| `List(match, ctrl)` | List entities matching the criteria. |
| `Load(match, ctrl)` | Load a single entity by match criteria. |
| `Create(data, ctrl)` | Create a new entity with the given data. |
| `Update(data, ctrl)` | Update an existing entity. |
| `Remove(match, ctrl)` | Remove the matching entity. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `auto_build` | `bool` | Whether pushes to the git branch build this Preview. |
| `auto_delete` | `bool` | Whether deleting the git branch also deletes this Preview. |
| `branch` | `any` | Git branch name (required if commit_hash not provided) |
| `commit_hash` | `any` | Git commit hash (required if branch not provided) |
| `errors` | `[]any` |  |
| `git_repository` | `any` | Git repository settings to update |
| `id` | `string` |  |
| `messages` | `[]any` |  |
| `previews_base_config` | `map[string]any` | Build and deploy settings when creating a Worker build configuration |
| `previews_enabled` | `bool` | Whether Previews are enabled for this Worker |
| `production_settings` | `map[string]any` | Build and deploy settings when creating a Worker build configuration |
| `result` | `map[string]any` | A single Preview of a Worker, with the build settings it currently uses. |
| `result_info` | `map[string]any` |  |
| `script_tag` | `string` | System-generated tag of the Worker. |
| `seed_repo` | `any` | Optional repository and file overrides used to seed this build. |
| `settings` | `map[string]any` | Partial build settings for updating a Worker build configuration |
| `success` | `bool` | Whether the API call was successful. |

#### Example: Load

```go
worker, err := client.Worker(nil).Load(map[string]any{"id": "worker_id", "account_id": "account_id"}, nil)
if err != nil {
    panic(err)
}
fmt.Println(worker) // the loaded record
```

#### Example: List

```go
workers, err := client.Worker(nil).List(nil, nil)
if err != nil {
    panic(err)
}
fmt.Println(workers) // the array of records
```

#### Example: Create

```go
result, err := client.Worker(nil).Create(map[string]any{
    "account_id": "example_account_id",
    "errors": []any{},
    "git_repository": "example_git_repository",
    "messages": []any{},
    "previews_base_config": map[string]any{},
    "previews_enabled": true,
    "production_settings": map[string]any{},
    "result": map[string]any{},
    "script_tag": "example_script_tag",
    "success": true,
}, nil)
if err != nil {
    panic(err)
}
fmt.Println(result)
```


### WorkerCronTrigger

Create an instance: `workerCronTrigger := client.WorkerCronTrigger(nil)`

#### Operations

| Method | Description |
| --- | --- |
| `List(match, ctrl)` | List entities matching the criteria. |
| `Update(data, ctrl)` | Update an existing entity. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `errors` | `[]any` |  |
| `messages` | `[]any` |  |
| `result` | `map[string]any` |  |
| `success` | `bool` | Whether the API call was successful. |

#### Example: List

```go
workerCronTriggers, err := client.WorkerCronTrigger(nil).List(nil, nil)
if err != nil {
    panic(err)
}
fmt.Println(workerCronTriggers) // the array of records
```


### WorkerDeployment

Create an instance: `workerDeployment := client.WorkerDeployment(nil)`

#### Operations

| Method | Description |
| --- | --- |
| `Load(match, ctrl)` | Load a single entity by match criteria. |
| `Create(data, ctrl)` | Create a new entity with the given data. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `annotations` | `map[string]any` |  |
| `author_email` | `string` |  |
| `created_on` | `string` |  |
| `errors` | `[]any` |  |
| `id` | `string` |  |
| `messages` | `[]any` |  |
| `result` | `map[string]any` |  |
| `source` | `string` |  |
| `strategy` | `string` |  |
| `success` | `bool` | Whether the API call was successful. |
| `versions` | `[]any` | Worker versions included in this deployment. |

#### Example: Load

```go
workerDeployment, err := client.WorkerDeployment(nil).Load(map[string]any{"id": "worker_deployment_id", "account_id": "account_id"}, nil)
if err != nil {
    panic(err)
}
fmt.Println(workerDeployment) // the loaded record
```

#### Example: Create

```go
result, err := client.WorkerDeployment(nil).Create(map[string]any{
    "account_id": "example_account_id",
    "script_name": "example_script_name",
    "created_on": "example_created_on",
    "errors": []any{},
    "id": "example_id",
    "messages": []any{},
    "result": map[string]any{},
    "source": "example_source",
    "strategy": "example_strategy",
    "success": true,
    "versions": []any{},
}, nil)
if err != nil {
    panic(err)
}
fmt.Println(result)
```


### WorkerEnvironment

Create an instance: `workerEnvironment := client.WorkerEnvironment(nil)`

#### Operations

| Method | Description |
| --- | --- |
| `Load(match, ctrl)` | Load a single entity by match criteria. |

#### Example: Load

```go
workerEnvironment, err := client.WorkerEnvironment(nil).Load(map[string]any{"account_id": "account_id", "environment_name": "environment_name", "service_id": "service_id"}, nil)
if err != nil {
    panic(err)
}
fmt.Println(workerEnvironment) // the loaded record
```


### WorkerRoute

Create an instance: `workerRoute := client.WorkerRoute(nil)`

#### Operations

| Method | Description |
| --- | --- |
| `List(match, ctrl)` | List entities matching the criteria. |
| `Load(match, ctrl)` | Load a single entity by match criteria. |
| `Create(data, ctrl)` | Create a new entity with the given data. |
| `Update(data, ctrl)` | Update an existing entity. |
| `Remove(match, ctrl)` | Remove the matching entity. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `errors` | `[]any` |  |
| `id` | `string` |  |
| `messages` | `[]any` |  |
| `pattern` | `string` | Pattern to match incoming requests against. |
| `result` | `map[string]any` |  |
| `script` | `string` | Name of the script to run if the route matches. |
| `success` | `bool` | Whether the API call was successful. |

#### Example: Load

```go
workerRoute, err := client.WorkerRoute(nil).Load(map[string]any{"id": "worker_route_id", "zone_id": "zone_id"}, nil)
if err != nil {
    panic(err)
}
fmt.Println(workerRoute) // the loaded record
```

#### Example: List

```go
workerRoutes, err := client.WorkerRoute(nil).List(nil, nil)
if err != nil {
    panic(err)
}
fmt.Println(workerRoutes) // the array of records
```

#### Example: Create

```go
result, err := client.WorkerRoute(nil).Create(map[string]any{
    "zone_id": "example_zone_id",
    "errors": []any{},
    "id": "example_id",
    "messages": []any{},
    "pattern": "example_pattern",
    "result": map[string]any{},
    "success": true,
}, nil)
if err != nil {
    panic(err)
}
fmt.Println(result)
```


### WorkerScript

Create an instance: `workerScript := client.WorkerScript(nil)`

#### Operations

| Method | Description |
| --- | --- |
| `List(match, ctrl)` | List entities matching the criteria. |
| `Load(match, ctrl)` | Load a single entity by match criteria. |
| `Create(data, ctrl)` | Create a new entity with the given data. |
| `Update(data, ctrl)` | Update an existing entity. |
| `Remove(match, ctrl)` | Remove the matching entity. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `errors` | `[]any` |  |
| `id` | `string` |  |
| `messages` | `[]any` |  |
| `result` | `map[string]any` | A secret value accessible through a binding. |
| `success` | `bool` | Whether the API call was successful. |

#### Example: Load

```go
workerScript, err := client.WorkerScript(nil).Load(map[string]any{"id": "worker_script_id", "account_id": "account_id"}, nil)
if err != nil {
    panic(err)
}
fmt.Println(workerScript) // the loaded record
```

#### Example: List

```go
workerScripts, err := client.WorkerScript(nil).List(nil, nil)
if err != nil {
    panic(err)
}
fmt.Println(workerScripts) // the array of records
```

#### Example: Create

```go
result, err := client.WorkerScript(nil).Create(map[string]any{
    "account_id": "example_account_id",
    "script_name": "example_script_name",
    "errors": []any{},
    "messages": []any{},
    "success": true,
}, nil)
if err != nil {
    panic(err)
}
fmt.Println(result)
```


### WorkerSubdomain

Create an instance: `workerSubdomain := client.WorkerSubdomain(nil)`

#### Operations

| Method | Description |
| --- | --- |
| `List(match, ctrl)` | List entities matching the criteria. |
| `Update(data, ctrl)` | Update an existing entity. |
| `Remove(match, ctrl)` | Remove the matching entity. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `errors` | `[]any` |  |
| `messages` | `[]any` |  |
| `result` | `map[string]any` |  |
| `subdomain` | `string` |  |
| `success` | `bool` | Whether the API call was successful. |

#### Example: List

```go
workerSubdomains, err := client.WorkerSubdomain(nil).List(nil, nil)
if err != nil {
    panic(err)
}
fmt.Println(workerSubdomains) // the array of records
```


### WorkerTailLog

Create an instance: `workerTailLog := client.WorkerTailLog(nil)`

#### Operations

| Method | Description |
| --- | --- |
| `List(match, ctrl)` | List entities matching the criteria. |
| `Create(data, ctrl)` | Create a new entity with the given data. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `errors` | `[]any` |  |
| `messages` | `[]any` |  |
| `result` | `map[string]any` |  |
| `success` | `bool` | Whether the API call was successful. |

#### Example: List

```go
workerTailLogs, err := client.WorkerTailLog(nil).List(nil, nil)
if err != nil {
    panic(err)
}
fmt.Println(workerTailLogs) // the array of records
```

#### Example: Create

```go
result, err := client.WorkerTailLog(nil).Create(map[string]any{
    "account_id": "example_account_id",
    "script_name": "example_script_name",
    "errors": []any{},
    "messages": []any{},
    "result": map[string]any{},
    "success": true,
}, nil)
if err != nil {
    panic(err)
}
fmt.Println(result)
```


### WorkersAccountSetting

Create an instance: `workersAccountSetting := client.WorkersAccountSetting(nil)`

#### Operations

| Method | Description |
| --- | --- |
| `List(match, ctrl)` | List entities matching the criteria. |
| `Update(data, ctrl)` | Update an existing entity. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `default_usage_model` | `string` |  |
| `errors` | `[]any` |  |
| `green_compute` | `bool` |  |
| `messages` | `[]any` |  |
| `result` | `map[string]any` |  |
| `success` | `bool` | Whether the API call was successful. |

#### Example: List

```go
workersAccountSettings, err := client.WorkersAccountSetting(nil).List(nil, nil)
if err != nil {
    panic(err)
}
fmt.Println(workersAccountSettings) // the array of records
```


### WorkersApiResponseNullResult

Create an instance: `workersApiResponseNullResult := client.WorkersApiResponseNullResult(nil)`

#### Operations

| Method | Description |
| --- | --- |
| `Update(data, ctrl)` | Update an existing entity. |
| `Remove(match, ctrl)` | Remove the matching entity. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `errors` | `[]any` |  |
| `messages` | `[]any` |  |
| `result` | `map[string]any` |  |
| `success` | `bool` | Whether the API call was successful. |


### WorkersCompletedUploadAsset

Create an instance: `workersCompletedUploadAsset := client.WorkersCompletedUploadAsset(nil)`

#### Operations

| Method | Description |
| --- | --- |
| `Create(data, ctrl)` | Create a new entity with the given data. |

#### Example: Create

```go
result, err := client.WorkersCompletedUploadAsset(nil).Create(map[string]any{
    "account_id": "example_account_id",
    "base64": true,
}, nil)
if err != nil {
    panic(err)
}
fmt.Println(result)
```


### WorkersCreateAssetsUploadSession

Create an instance: `workersCreateAssetsUploadSession := client.WorkersCreateAssetsUploadSession(nil)`

#### Operations

| Method | Description |
| --- | --- |
| `Create(data, ctrl)` | Create a new entity with the given data. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `manifest` | `map[string]any` | A manifest ([path]: {hash, size}) map of files to upload. |

#### Example: Create

```go
result, err := client.WorkersCreateAssetsUploadSession(nil).Create(map[string]any{
    "account_id": "example_account_id",
    "script_name": "example_script_name",
    "manifest": map[string]any{},
}, nil)
if err != nil {
    panic(err)
}
fmt.Println(result)
```


### WorkersForPlatform

Create an instance: `workersForPlatform := client.WorkersForPlatform(nil)`

#### Operations

| Method | Description |
| --- | --- |
| `List(match, ctrl)` | List entities matching the criteria. |
| `Load(match, ctrl)` | Load a single entity by match criteria. |
| `Update(data, ctrl)` | Update an existing entity. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `errors` | `[]any` |  |
| `messages` | `[]any` |  |
| `result` | `map[string]any` | A secret value accessible through a binding. |
| `success` | `bool` | Whether the API call was successful. |

#### Example: Load

```go
workersForPlatform, err := client.WorkersForPlatform(nil).Load(map[string]any{"account_id": "account_id", "namespace_id": "namespace_id"}, nil)
if err != nil {
    panic(err)
}
fmt.Println(workersForPlatform) // the loaded record
```

#### Example: List

```go
workersForPlatforms, err := client.WorkersForPlatform(nil).List(nil, nil)
if err != nil {
    panic(err)
}
fmt.Println(workersForPlatforms) // the array of records
```


### WorkersKvApiResponseCommonNoResult

Create an instance: `workersKvApiResponseCommonNoResult := client.WorkersKvApiResponseCommonNoResult(nil)`

#### Operations

| Method | Description |
| --- | --- |
| `Update(data, ctrl)` | Update an existing entity. |
| `Remove(match, ctrl)` | Remove the matching entity. |


### WorkersKvNamespace

Create an instance: `workersKvNamespace := client.WorkersKvNamespace(nil)`

#### Operations

| Method | Description |
| --- | --- |
| `List(match, ctrl)` | List entities matching the criteria. |
| `Load(match, ctrl)` | Load a single entity by match criteria. |
| `Create(data, ctrl)` | Create a new entity with the given data. |
| `Update(data, ctrl)` | Update an existing entity. |
| `Remove(match, ctrl)` | Remove the matching entity. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `errors` | `[]any` |  |
| `id` | `string` |  |
| `jurisdiction` | `string` | Specify the jurisdiction to restrict the KV namespace to durably store data within. |
| `keys` | `[]any` | Array of keys to retrieve (maximum of 100). |
| `messages` | `[]any` |  |
| `result` | `any` |  |
| `result_info` | `map[string]any` |  |
| `success` | `bool` | Whether the API call was successful. |
| `title` | `string` | Human-readable string name for a Workers KV namespace. |
| `type` | `string` | Return values as strings with `text`, or parse stored JSON values with `json`. |
| `withMetadata` | `bool` | Whether to include metadata in the response. |

#### Example: Load

```go
workersKvNamespace, err := client.WorkersKvNamespace(nil).Load(map[string]any{"id": "workers_kv_namespace_id", "account_id": "account_id"}, nil)
if err != nil {
    panic(err)
}
fmt.Println(workersKvNamespace) // the loaded record
```

#### Example: List

```go
workersKvNamespaces, err := client.WorkersKvNamespace(nil).List(nil, nil)
if err != nil {
    panic(err)
}
fmt.Println(workersKvNamespaces) // the array of records
```

#### Example: Create

```go
result, err := client.WorkersKvNamespace(nil).Create(map[string]any{
    "account_id": "example_account_id",
    "errors": []any{},
    "keys": []any{},
    "messages": []any{},
    "success": true,
    "title": "example_title",
}, nil)
if err != nil {
    panic(err)
}
fmt.Println(result)
```


### WorkersNamespaceList

Create an instance: `workersNamespaceList := client.WorkersNamespaceList(nil)`

#### Operations

| Method | Description |
| --- | --- |
| `List(match, ctrl)` | List entities matching the criteria. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `errors` | `[]any` |  |
| `messages` | `[]any` |  |
| `result` | `[]any` |  |
| `success` | `bool` | Whether the API call was successful. |

#### Example: List

```go
workersNamespaceLists, err := client.WorkersNamespaceList(nil).List(nil, nil)
if err != nil {
    panic(err)
}
fmt.Println(workersNamespaceLists) // the array of records
```


### WorkersNamespaceScriptDeleteBulk

Create an instance: `workersNamespaceScriptDeleteBulk := client.WorkersNamespaceScriptDeleteBulk(nil)`

#### Operations

| Method | Description |
| --- | --- |
| `Remove(match, ctrl)` | Remove the matching entity. |


### WorkersNamespaceScriptResponseSingle

Create an instance: `workersNamespaceScriptResponseSingle := client.WorkersNamespaceScriptResponseSingle(nil)`

#### Operations

| Method | Description |
| --- | --- |
| `Load(match, ctrl)` | Load a single entity by match criteria. |
| `Update(data, ctrl)` | Update an existing entity. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `errors` | `[]any` |  |
| `messages` | `[]any` |  |
| `result` | `map[string]any` | Details about a worker uploaded to a Workers for Platforms namespace. |
| `success` | `bool` | Whether the API call was successful. |

#### Example: Load

```go
workersNamespaceScriptResponseSingle, err := client.WorkersNamespaceScriptResponseSingle(nil).Load(map[string]any{"account_id": "account_id", "namespace_id": "namespace_id", "script_name": "script_name"}, nil)
if err != nil {
    panic(err)
}
fmt.Println(workersNamespaceScriptResponseSingle) // the loaded record
```


### WorkersNamespaceSingle

Create an instance: `workersNamespaceSingle := client.WorkersNamespaceSingle(nil)`

#### Operations

| Method | Description |
| --- | --- |
| `Load(match, ctrl)` | Load a single entity by match criteria. |
| `Create(data, ctrl)` | Create a new entity with the given data. |
| `Update(data, ctrl)` | Update an existing entity. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `errors` | `[]any` |  |
| `messages` | `[]any` |  |
| `name` | `string` | The name of the dispatch namespace. |
| `result` | `map[string]any` |  |
| `success` | `bool` | Whether the API call was successful. |
| `trusted_workers` | `bool` | Whether the Workers in the namespace are executed in a "trusted" manner. |

#### Example: Load

```go
workersNamespaceSingle, err := client.WorkersNamespaceSingle(nil).Load(map[string]any{"account_id": "account_id", "dispatch_namespace": "dispatch_namespace"}, nil)
if err != nil {
    panic(err)
}
fmt.Println(workersNamespaceSingle) // the loaded record
```

#### Example: Create

```go
result, err := client.WorkersNamespaceSingle(nil).Create(map[string]any{
    "account_id": "example_account_id",
    "errors": []any{},
    "messages": []any{},
    "success": true,
}, nil)
if err != nil {
    panic(err)
}
fmt.Println(result)
```


### WorkersPipelinesOther

Create an instance: `workersPipelinesOther := client.WorkersPipelinesOther(nil)`

#### Operations

| Method | Description |
| --- | --- |
| `List(match, ctrl)` | List entities matching the criteria. |
| `Load(match, ctrl)` | Load a single entity by match criteria. |
| `Create(data, ctrl)` | Create a new entity with the given data. |
| `Update(data, ctrl)` | Update an existing entity. |
| `Remove(match, ctrl)` | Remove the matching entity. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `config` | `any` | Defines the configuration of the R2 Sink. |
| `created_at` | `string` |  |
| `destination` | `map[string]any` |  |
| `endpoint` | `string` | Indicates the endpoint URL to send traffic. |
| `failure_reason` | `string` | Indicates the reason for the failure of the Pipeline. |
| `format` | `any` | Defines the output data format of a sink. |
| `graph` | `map[string]any` | Indicates the processing flow to implement the SQL. |
| `http` | `map[string]any` |  |
| `id` | `string` | Indicates a unique identifier for this pipeline. |
| `modified_at` | `string` |  |
| `name` | `string` | Indicates the name of the Pipeline. |
| `schema` | `map[string]any` | Defines the schema of the events in the data stream. |
| `source` | `[]any` |  |
| `sql` | `string` | Specifies SQL for the Pipeline processing flow. |
| `status` | `string` | Indicates the current status of the Pipeline. |
| `tables` | `[]any` | List of streams and sinks used by this pipeline. |
| `type` | `string` | Specifies the type of sink. |
| `version` | `float64` | Indicates the version number of last saved configuration. |
| `worker_binding` | `map[string]any` |  |

#### Example: Load

```go
workersPipelinesOther, err := client.WorkersPipelinesOther(nil).Load(map[string]any{"account_id": "account_id"}, nil)
if err != nil {
    panic(err)
}
fmt.Println(workersPipelinesOther) // the loaded record
```

#### Example: List

```go
workersPipelinesOthers, err := client.WorkersPipelinesOther(nil).List(nil, nil)
if err != nil {
    panic(err)
}
fmt.Println(workersPipelinesOthers) // the array of records
```

#### Example: Create

```go
result, err := client.WorkersPipelinesOther(nil).Create(map[string]any{
    "account_id": "example_account_id",
    "created_at": "example_created_at",
    "destination": map[string]any{},
    "endpoint": "example_endpoint",
    "graph": map[string]any{},
    "http": map[string]any{},
    "id": "example_id",
    "modified_at": "example_modified_at",
    "name": "example_name",
    "source": []any{},
    "sql": "example_sql",
    "status": "example_status",
    "tables": []any{},
    "type": "example_type",
    "version": 1,
    "worker_binding": map[string]any{},
}, nil)
if err != nil {
    panic(err)
}
fmt.Println(result)
```


### WorkersScriptAndVersionSetting

Create an instance: `workersScriptAndVersionSetting := client.WorkersScriptAndVersionSetting(nil)`

#### Operations

| Method | Description |
| --- | --- |
| `List(match, ctrl)` | List entities matching the criteria. |
| `Update(data, ctrl)` | Update an existing entity. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `errors` | `[]any` |  |
| `messages` | `[]any` |  |
| `result` | `map[string]any` |  |
| `success` | `bool` | Whether the API call was successful. |

#### Example: List

```go
workersScriptAndVersionSettings, err := client.WorkersScriptAndVersionSetting(nil).List(nil, nil)
if err != nil {
    panic(err)
}
fmt.Println(workersScriptAndVersionSettings) // the array of records
```


### WorkersScriptResponseCollection

Create an instance: `workersScriptResponseCollection := client.WorkersScriptResponseCollection(nil)`

#### Operations

| Method | Description |
| --- | --- |
| `List(match, ctrl)` | List entities matching the criteria. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `errors` | `[]any` |  |
| `messages` | `[]any` |  |
| `result` | `[]any` |  |
| `success` | `bool` | Whether the API call was successful. |

#### Example: List

```go
workersScriptResponseCollections, err := client.WorkersScriptResponseCollection(nil).List(nil, nil)
if err != nil {
    panic(err)
}
fmt.Println(workersScriptResponseCollections) // the array of records
```


### WorkersScriptResponseSingle

Create an instance: `workersScriptResponseSingle := client.WorkersScriptResponseSingle(nil)`

#### Operations

| Method | Description |
| --- | --- |
| `Update(data, ctrl)` | Update an existing entity. |


### WorkersSmartPlacement

Create an instance: `workersSmartPlacement := client.WorkersSmartPlacement(nil)`

#### Operations

| Method | Description |
| --- | --- |
| `List(match, ctrl)` | List entities matching the criteria. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `errors` | `[]any` |  |
| `messages` | `[]any` |  |
| `result` | `map[string]any` |  |
| `success` | `bool` | Whether the API call was successful. |

#### Example: List

```go
workersSmartPlacements, err := client.WorkersSmartPlacement(nil).List(nil, nil)
if err != nil {
    panic(err)
}
fmt.Println(workersSmartPlacements) // the array of records
```


### WorkersUsageModel

Create an instance: `workersUsageModel := client.WorkersUsageModel(nil)`

#### Operations

| Method | Description |
| --- | --- |
| `List(match, ctrl)` | List entities matching the criteria. |
| `Update(data, ctrl)` | Update an existing entity. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `errors` | `[]any` |  |
| `messages` | `[]any` |  |
| `result` | `map[string]any` |  |
| `success` | `bool` | Whether the API call was successful. |
| `usage_model` | `string` | Usage model for the Worker invocations. |
| `user_limits` | `map[string]any` | User-defined resource limits for Workers with standard usage model. |

#### Example: List

```go
workersUsageModels, err := client.WorkersUsageModel(nil).List(nil, nil)
if err != nil {
    panic(err)
}
fmt.Println(workersUsageModels) // the array of records
```


### WorkersVersionsList

Create an instance: `workersVersionsList := client.WorkersVersionsList(nil)`

#### Operations

| Method | Description |
| --- | --- |
| `List(match, ctrl)` | List entities matching the criteria. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `errors` | `[]any` |  |
| `messages` | `[]any` |  |
| `result` | `map[string]any` |  |
| `success` | `bool` | Whether the API call was successful. |

#### Example: List

```go
workersVersionsLists, err := client.WorkersVersionsList(nil).List(nil, nil)
if err != nil {
    panic(err)
}
fmt.Println(workersVersionsLists) // the array of records
```


### WorkersVersionsSingle

Create an instance: `workersVersionsSingle := client.WorkersVersionsSingle(nil)`

#### Operations

| Method | Description |
| --- | --- |
| `Load(match, ctrl)` | Load a single entity by match criteria. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `errors` | `[]any` |  |
| `messages` | `[]any` |  |
| `result` | `any` |  |
| `success` | `bool` | Whether the API call was successful. |

#### Example: Load

```go
workersVersionsSingle, err := client.WorkersVersionsSingle(nil).Load(map[string]any{"account_id": "account_id", "script_id": "script_id", "version_id": "version_id"}, nil)
if err != nil {
    panic(err)
}
fmt.Println(workersVersionsSingle) // the loaded record
```


### WorkersVersionsUpload

Create an instance: `workersVersionsUpload := client.WorkersVersionsUpload(nil)`

#### Operations

| Method | Description |
| --- | --- |
| `Create(data, ctrl)` | Create a new entity with the given data. |

#### Example: Create

```go
result, err := client.WorkersVersionsUpload(nil).Create(map[string]any{
    "account_id": "example_account_id",
    "script_name": "example_script_name",
}, nil)
if err != nil {
    panic(err)
}
fmt.Println(result)
```


### Workflow

Create an instance: `workflow := client.Workflow(nil)`

#### Operations

| Method | Description |
| --- | --- |
| `List(match, ctrl)` | List entities matching the criteria. |
| `Load(match, ctrl)` | Load a single entity by match criteria. |
| `Create(data, ctrl)` | Create a new entity with the given data. |
| `Update(data, ctrl)` | Update an existing entity. |
| `Remove(match, ctrl)` | Remove the matching entity. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `class_name` | `string` |  |
| `concurrency` | `map[string]any` |  |
| `default_retention` | `map[string]any` | Default retention applied to instances of this version when they do not set their own retention. |
| `errors` | `[]any` |  |
| `id` | `string` |  |
| `instances` | `[]any` |  |
| `limits` | `map[string]any` |  |
| `messages` | `[]any` |  |
| `result` | `map[string]any` |  |
| `result_info` | `map[string]any` |  |
| `schedules` | `[]any` |  |
| `script_name` | `string` |  |
| `success` | `bool` |  |

#### Example: Load

```go
workflow, err := client.Workflow(nil).Load(map[string]any{"id": "workflow_id", "account_id": "account_id"}, nil)
if err != nil {
    panic(err)
}
fmt.Println(workflow) // the loaded record
```

#### Example: List

```go
workflows, err := client.Workflow(nil).List(nil, nil)
if err != nil {
    panic(err)
}
fmt.Println(workflows) // the array of records
```

#### Example: Create

```go
result, err := client.Workflow(nil).Create(map[string]any{
    "account_id": "example_account_id",
    "workflow_id": "example_workflow_id",
    "class_name": "example_class_name",
    "errors": []any{},
    "instances": []any{},
    "messages": []any{},
    "result": map[string]any{},
    "result_info": map[string]any{},
    "script_name": "example_script_name",
    "success": true,
}, nil)
if err != nil {
    panic(err)
}
fmt.Println(result)
```

## Features

This SDK ships 1 optional features. Each is **inactive until you
switch it on**, so an SDK you have not configured behaves exactly as if none of
them existed — no retries, no cache, no logging, no measurable overhead.

Activate a feature by name in the client options, alongside the options shown
above:

| Feature | What it does |
|---|---|
| [`test`](#test) | Test transport |

### test

Test transport.

| Option | Default |
|---|---|
| `active` | `false` |

Set `feature.test.active` to enable it, then override any of the options above.


## Open types

31 fields are carried as open values rather than typed structures.
This follows from the API definition, not from a gap in this SDK: the
definition describes them with untagged unions —
`oneOf`/`anyOf` branches with no `discriminator` — so it never states which
variant a given value is. Nothing can select a branch reliably, so the SDK
passes the value through unchanged rather than assert a shape the API does not
guarantee.

| Entity | Field | Variants | Nesting |
| --- | --- | --- | --- |
| `brapi` | `allowResourceTypes` | 18 | 1 level |
| `brapi` | `rejectResourceTypes` | 18 | 1 level |
| `preview_deployment` | `result` | 8 | 11 levels |
| `version` | `placement` | 8 | 5 levels |
| `version` | `result` | 8 | 7 levels |
| `workers_namespace_script_response_single` | `result` | 8 | 11 levels |
| `workers_script_and_version_setting` | `result` | 8 | 9 levels |
| `workers_script_response_collection` | `result` | 8 | 12 levels |
| `workers_kv_namespace` | `result` | 6 | 2 levels |
| `brapi` | `gotoOptions` | 5 | 5 levels |
| `version` | `exports` | 5 | 5 levels |
| `workers_versions_single` | `result` | 5 | 13 levels |
| `workflow` | `result` | 4 | 11 levels |
| `brapi` | `cookies` | 3 | 3 levels |
| `brapi` | `screenshotOptions` | 3 | 2 levels |
| `destination` | `configuration` | 3 | 2 levels |
| `destination` | `result` | 3 | 4 levels |
| `hyperdrive` | `origin` | 3 | 0 levels |
| `hyperdrive` | `result` | 3 | 2 levels |
| `key` | `filters` | 3 | 8 levels |
| `key` | `keyNeedle` | 3 | 4 levels |
| `key` | `needle` | 3 | 4 levels |
| `live_tail` | `filters` | 3 | 8 levels |
| `query` | `parameters` | 3 | 10 levels |
| `query` | `result` | 3 | 15 levels |
| `saved_query` | `parameters` | 3 | 7 levels |
| `saved_query` | `result` | 3 | 9 levels |
| `shared` | `result` | 3 | 15 levels |
| `value` | `filters` | 3 | 8 levels |
| `value` | `needle` | 3 | 4 levels |
| `value` | `result` | 3 | 3 levels |

These values round-trip unchanged — read them, modify them, send them back. If
the API adds a `discriminator` to the definition, regenerating will type them.
Every other field is typed normally.

## Advanced

> The sections above cover everyday use. The material below explains the
> SDK's internals — useful when extending it with custom features, but not
> needed for normal use.

### The operation pipeline

Every entity operation follows a six-stage pipeline. Each stage fires a
feature hook before executing:

```
PrePoint → PreSpec → PreRequest → PreResponse → PreResult → PreDone
```

- **PrePoint**: Resolves which API endpoint to call based on the
  operation name and entity configuration.
- **PreSpec**: Builds the HTTP spec — URL, method, headers, body —
  from the resolved point and the caller's parameters.
- **PreRequest**: Sends the HTTP request. Features can intercept here
  to replace the transport (as TestFeature does with mocks).
- **PreResponse**: Parses the raw HTTP response.
- **PreResult**: Extracts the business data from the parsed response.
- **PreDone**: Final stage before returning to the caller. Entity
  state (match, data) is updated here.

If any stage errors, the pipeline short-circuits and the error surfaces
to the caller — see [Error handling](#error-handling) for how that looks
in this language.

### Features and hooks

Features are the extension mechanism. A feature implements the
`Feature` interface and provides hooks — functions keyed by pipeline
stage names.

The SDK ships with built-in features:

- **TestFeature**: Test transport

Features are initialized in order. Hooks fire in the order features
were added, so later features can override earlier ones.

### Data as maps

The Go SDK uses `map[string]any` throughout rather than typed structs.
This mirrors the dynamic nature of the API and keeps the SDK
flexible — no code generation is needed when the API schema changes.

Use `core.ToMapAny()` to safely cast results and nested data.

### Package structure

```
github.com/voxgig-sdk/cloudflare-workers-sdk/go/
├── cloudflare-workers.go        # Root package — type aliases and constructors
├── core/               # SDK core — client, types, pipeline
├── entity/             # Entity implementations
├── feature/            # Built-in features (Base, Test, Log)
├── utility/            # Utility functions and struct library
└── test/               # Test suites
```

The root package (`github.com/voxgig-sdk/cloudflare-workers-sdk/go`) re-exports everything needed
for normal use. Import sub-packages only when you need specific types
like `core.ToMapAny`.

### Entity state

Entity instances are stateful. After a successful `List`, the entity
stores the returned data and match criteria internally.

```go
workersubdomain := client.WorkerSubdomain(nil)
workersubdomain.List(nil, nil)

// workersubdomain.Data() now returns the workersubdomain data from the last list
// workersubdomain.Match() returns the last match criteria
```

Call `Make()` to create a fresh instance with the same configuration
but no stored state.

### Direct vs entity access

The entity interface handles URL construction, parameter placement,
and response parsing automatically. Use it for standard CRUD operations.

`Direct()` gives full control over the HTTP request. Use it for
non-standard endpoints, bulk operations, or any path not modelled as
an entity. `Prepare()` builds the request without sending it — useful
for debugging or custom transport.


## Full Reference

See [REFERENCE.md](REFERENCE.md) for complete API reference
documentation including all method signatures, entity field schemas,
and detailed usage examples.
