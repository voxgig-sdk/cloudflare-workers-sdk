# CloudflareWorkers Lua SDK



The Lua SDK for the CloudflareWorkers API — an entity-oriented client using Lua conventions.

It exposes the API as capitalised, semantic **Entities** — e.g. `client:Account()` — each with the same small set of operations (`list`, `load`, `create`, `update`, `remove`, `patch`) instead of raw URL paths and query strings. You call meaning, not endpoints, which keeps the cognitive load low.

> Other languages, the CLI, and MCP server live alongside this one — see
> the [top-level README](../README.md).


## Install
This package is not yet published to LuaRocks. Install it from the
GitHub release tag (`lua/vX.Y.Z`, see [Releases](https://github.com/voxgig-sdk/cloudflare-workers-sdk/releases)),
or add the source directory to your `LUA_PATH`:

```bash
export LUA_PATH="path/to/lua/?.lua;path/to/lua/?/init.lua;;"
```


## Tutorial: your first API call

This tutorial walks through creating a client, listing entities, and
loading a specific record.

### 1. Create a client

```lua
local sdk = require("cloudflare-workers_sdk")

local client = sdk.new({
  apikey = os.getenv("CLOUDFLARE_WORKERS_APIKEY"),
})
```

### 2. List account records

Entity operations return `(value, err)`. For `list`, `value` is the
array of records itself — iterate it directly (there is no wrapper).

```lua
local accounts, err = client:Account():list()
if err then error(err) end

for _, item in ipairs(accounts) do
  print(item["id"])
end
```

### 3. Load an application

Application is nested under account, so provide the `account_id`.

```lua
local application, err = client:Application():load({ account_id = "example_account_id", id = "example_id" })
if err then error(err) end
print(application)
```


## Error handling

Entity operations return `(value, err)`. Check `err` before using
the value:

```lua
local workersubdomains, err = client:WorkerSubdomain():list()
if err then error(err) end
```

`direct` follows the same `(value, err)` convention:

```lua
local result, err = client:direct({
  path = "/api/resource/{id}",
  method = "GET",
  params = { id = "example_id" },
})
if err then error(err) end
```


## How-to guides

### Make a direct HTTP request

For endpoints not covered by entity methods:

```lua
local result, err = client:direct({
  path = "/api/resource/{id}",
  method = "GET",
  params = { id = "example" },
})
if err then error(err) end

if result["ok"] then
  print(result["status"])  -- 200
  print(result["data"])    -- response body
end
```

### Prepare a request without sending it

```lua
local fetchdef, err = client:prepare({
  path = "/api/resource/{id}",
  method = "DELETE",
  params = { id = "example" },
})
if err then error(err) end

print(fetchdef["url"])
print(fetchdef["method"])
print(fetchdef["headers"])
```

### Use test mode

Create a mock client for unit testing — no server required:

```lua
local client = sdk.test()

local result, err = client:WorkerSubdomain():list()
-- result is the returned data; err is set on failure
```

### Use a custom fetch function

Replace the HTTP transport with your own function:

```lua
local function mock_fetch(url, init)
  return {
    status = 200,
    statusText = "OK",
    headers = {},
    json = function()
      return { id = "mock01" }
    end,
  }, nil
end

local client = sdk.new({
  base = "http://localhost:8080",
  system = {
    fetch = mock_fetch,
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
cd lua && busted test/
```


## Reference

### CloudflareWorkersSDK

```lua
local sdk = require("cloudflare-workers_sdk")
local client = sdk.new(options)
```

Creates a new SDK client.

| Option | Type | Description |
| --- | --- | --- |
| `apikey` | `string` | API key for authentication. |
| `base` | `string` | Base URL of the API server. |
| `prefix` | `string` | URL path prefix prepended to all requests. |
| `suffix` | `string` | URL path suffix appended to all requests. |
| `feature` | `table` | Feature activation flags. |
| `extend` | `table` | Additional Feature instances to load. |
| `system` | `table` | System overrides (e.g. custom `fetch` function). |

### test

```lua
local client = sdk.test(testopts, sdkopts)
```

Creates a test-mode client with mock transport. Both arguments may be `nil`.

### CloudflareWorkersSDK methods

| Method | Signature | Description |
| --- | --- | --- |
| `options_map` | `() -> table` | Deep copy of current SDK options. |
| `get_utility` | `() -> Utility` | Copy of the SDK utility object. |
| `prepare` | `(fetchargs) -> table, err` | Build an HTTP request definition without sending. |
| `direct` | `(fetchargs) -> table, err` | Build and send an HTTP request. |
| `Account` | `(data) -> AccountEntity` | Create an Account entity instance. |
| `Application` | `(data) -> ApplicationEntity` | Create an Application entity instance. |
| `Brapi` | `(data) -> BrapiEntity` | Create a Brapi entity instance. |
| `Build` | `(data) -> BuildEntity` | Create a Build entity instance. |
| `BuildToken` | `(data) -> BuildTokenEntity` | Create a BuildToken entity instance. |
| `BuildsApi` | `(data) -> BuildsApiEntity` | Create a BuildsApi entity instance. |
| `Connection` | `(data) -> ConnectionEntity` | Create a Connection entity instance. |
| `ContainerImage` | `(data) -> ContainerImageEntity` | Create a ContainerImage entity instance. |
| `ContainerInstance` | `(data) -> ContainerInstanceEntity` | Create a ContainerInstance entity instance. |
| `DeployHook` | `(data) -> DeployHookEntity` | Create a DeployHook entity instance. |
| `Deployment` | `(data) -> DeploymentEntity` | Create a Deployment entity instance. |
| `Destination` | `(data) -> DestinationEntity` | Create a Destination entity instance. |
| `Domain` | `(data) -> DomainEntity` | Create a Domain entity instance. |
| `DurableObjectsNamespace` | `(data) -> DurableObjectsNamespaceEntity` | Create a DurableObjectsNamespace entity instance. |
| `EnvironmentVariable` | `(data) -> EnvironmentVariableEntity` | Create an EnvironmentVariable entity instance. |
| `GitHubIntegration` | `(data) -> GitHubIntegrationEntity` | Create a GitHubIntegration entity instance. |
| `Hyperdrive` | `(data) -> HyperdriveEntity` | Create a Hyperdrive entity instance. |
| `ImageRegistry` | `(data) -> ImageRegistryEntity` | Create an ImageRegistry entity instance. |
| `Issue` | `(data) -> IssueEntity` | Create an Issue entity instance. |
| `Key` | `(data) -> KeyEntity` | Create a Key entity instance. |
| `LiveTail` | `(data) -> LiveTailEntity` | Create a LiveTail entity instance. |
| `MetricsExport` | `(data) -> MetricsExportEntity` | Create a MetricsExport entity instance. |
| `Namespace` | `(data) -> NamespaceEntity` | Create a Namespace entity instance. |
| `Preview` | `(data) -> PreviewEntity` | Create a Preview entity instance. |
| `PreviewDeployment` | `(data) -> PreviewDeploymentEntity` | Create a PreviewDeployment entity instance. |
| `Query` | `(data) -> QueryEntity` | Create a Query entity instance. |
| `RepositoryConnection` | `(data) -> RepositoryConnectionEntity` | Create a RepositoryConnection entity instance. |
| `Rollout` | `(data) -> RolloutEntity` | Create a Rollout entity instance. |
| `SavedQuery` | `(data) -> SavedQueryEntity` | Create a SavedQuery entity instance. |
| `Script` | `(data) -> ScriptEntity` | Create a Script entity instance. |
| `ScriptSetting` | `(data) -> ScriptSettingEntity` | Create a ScriptSetting entity instance. |
| `Secret` | `(data) -> SecretEntity` | Create a Secret entity instance. |
| `SecretsStoreDelete` | `(data) -> SecretsStoreDeleteEntity` | Create a SecretsStoreDelete entity instance. |
| `SecretsStoreQuota` | `(data) -> SecretsStoreQuotaEntity` | Create a SecretsStoreQuota entity instance. |
| `SecretsStoreSecret` | `(data) -> SecretsStoreSecretEntity` | Create a SecretsStoreSecret entity instance. |
| `SecretsStoreStore` | `(data) -> SecretsStoreStoreEntity` | Create a SecretsStoreStore entity instance. |
| `SecretsStoreStoresResponseCollection` | `(data) -> SecretsStoreStoresResponseCollectionEntity` | Create a SecretsStoreStoresResponseCollection entity instance. |
| `Setting` | `(data) -> SettingEntity` | Create a Setting entity instance. |
| `Shared` | `(data) -> SharedEntity` | Create a Shared entity instance. |
| `Tail` | `(data) -> TailEntity` | Create a Tail entity instance. |
| `Token` | `(data) -> TokenEntity` | Create a Token entity instance. |
| `Trigger` | `(data) -> TriggerEntity` | Create a Trigger entity instance. |
| `Usage` | `(data) -> UsageEntity` | Create an Usage entity instance. |
| `Value` | `(data) -> ValueEntity` | Create a Value entity instance. |
| `Version` | `(data) -> VersionEntity` | Create a Version entity instance. |
| `Worker` | `(data) -> WorkerEntity` | Create a Worker entity instance. |
| `WorkerCronTrigger` | `(data) -> WorkerCronTriggerEntity` | Create a WorkerCronTrigger entity instance. |
| `WorkerDeployment` | `(data) -> WorkerDeploymentEntity` | Create a WorkerDeployment entity instance. |
| `WorkerEnvironment` | `(data) -> WorkerEnvironmentEntity` | Create a WorkerEnvironment entity instance. |
| `WorkerRoute` | `(data) -> WorkerRouteEntity` | Create a WorkerRoute entity instance. |
| `WorkerScript` | `(data) -> WorkerScriptEntity` | Create a WorkerScript entity instance. |
| `WorkerSubdomain` | `(data) -> WorkerSubdomainEntity` | Create a WorkerSubdomain entity instance. |
| `WorkerTailLog` | `(data) -> WorkerTailLogEntity` | Create a WorkerTailLog entity instance. |
| `WorkersAccountSetting` | `(data) -> WorkersAccountSettingEntity` | Create a WorkersAccountSetting entity instance. |
| `WorkersApiResponseNullResult` | `(data) -> WorkersApiResponseNullResultEntity` | Create a WorkersApiResponseNullResult entity instance. |
| `WorkersCompletedUploadAsset` | `(data) -> WorkersCompletedUploadAssetEntity` | Create a WorkersCompletedUploadAsset entity instance. |
| `WorkersCreateAssetsUploadSession` | `(data) -> WorkersCreateAssetsUploadSessionEntity` | Create a WorkersCreateAssetsUploadSession entity instance. |
| `WorkersForPlatform` | `(data) -> WorkersForPlatformEntity` | Create a WorkersForPlatform entity instance. |
| `WorkersKvApiResponseCommonNoResult` | `(data) -> WorkersKvApiResponseCommonNoResultEntity` | Create a WorkersKvApiResponseCommonNoResult entity instance. |
| `WorkersKvNamespace` | `(data) -> WorkersKvNamespaceEntity` | Create a WorkersKvNamespace entity instance. |
| `WorkersNamespaceList` | `(data) -> WorkersNamespaceListEntity` | Create a WorkersNamespaceList entity instance. |
| `WorkersNamespaceScriptDeleteBulk` | `(data) -> WorkersNamespaceScriptDeleteBulkEntity` | Create a WorkersNamespaceScriptDeleteBulk entity instance. |
| `WorkersNamespaceScriptResponseSingle` | `(data) -> WorkersNamespaceScriptResponseSingleEntity` | Create a WorkersNamespaceScriptResponseSingle entity instance. |
| `WorkersNamespaceSingle` | `(data) -> WorkersNamespaceSingleEntity` | Create a WorkersNamespaceSingle entity instance. |
| `WorkersPipelinesOther` | `(data) -> WorkersPipelinesOtherEntity` | Create a WorkersPipelinesOther entity instance. |
| `WorkersScriptAndVersionSetting` | `(data) -> WorkersScriptAndVersionSettingEntity` | Create a WorkersScriptAndVersionSetting entity instance. |
| `WorkersScriptResponseCollection` | `(data) -> WorkersScriptResponseCollectionEntity` | Create a WorkersScriptResponseCollection entity instance. |
| `WorkersScriptResponseSingle` | `(data) -> WorkersScriptResponseSingleEntity` | Create a WorkersScriptResponseSingle entity instance. |
| `WorkersSmartPlacement` | `(data) -> WorkersSmartPlacementEntity` | Create a WorkersSmartPlacement entity instance. |
| `WorkersUsageModel` | `(data) -> WorkersUsageModelEntity` | Create a WorkersUsageModel entity instance. |
| `WorkersVersionsList` | `(data) -> WorkersVersionsListEntity` | Create a WorkersVersionsList entity instance. |
| `WorkersVersionsSingle` | `(data) -> WorkersVersionsSingleEntity` | Create a WorkersVersionsSingle entity instance. |
| `WorkersVersionsUpload` | `(data) -> WorkersVersionsUploadEntity` | Create a WorkersVersionsUpload entity instance. |
| `Workflow` | `(data) -> WorkflowEntity` | Create a Workflow entity instance. |

### Entity interface

All entities share the same interface.

| Method | Signature | Description |
| --- | --- | --- |
| `load` | `(reqmatch, ctrl) -> any, err` | Load a single entity by match criteria. |
| `list` | `(reqmatch, ctrl) -> any, err` | List entities matching the criteria. |
| `create` | `(reqdata, ctrl) -> any, err` | Create a new entity. |
| `update` | `(reqdata, ctrl) -> any, err` | Update an existing entity. |
| `remove` | `(reqmatch, ctrl) -> any, err` | Remove an entity. |
| `data_get` | `() -> table` | Get entity data. |
| `data_set` | `(data)` | Set entity data. |
| `match_get` | `() -> table` | Get entity match criteria. |
| `match_set` | `(match)` | Set entity match criteria. |
| `make` | `() -> Entity` | Create a new instance with the same options. |
| `get_name` | `() -> string` | Return the entity name. |

### Result shape

Entity operations return `(value, err)`. The `value` is the operation's
data **directly** — there is no wrapper:

| Operation | `value` |
| --- | --- |
| `load` / `create` / `update` / `remove` | the entity record (a `table`) |
| `list` | an array (`table`) of entity records |

Check `err` first (it is non-`nil` on failure), then use `value`:

    local application, err = client:Application():load({ id = "example_id" })
    if err then error(err) end
    -- application is the loaded record

Only `direct()` returns a response envelope — a `table` with `ok`,
`status`, `headers`, and `data` keys.

### Entities

#### Account

| Field | Description |
| --- | --- |
| `id` |  |

Operations: List.

API path: `/accounts/{account_id}/builds/account/limits`

#### Application

| Field | Description |
| --- | --- |
| `configuration` | Application configuration fields you can change without creating a rollout. |
| `constraints` |  |
| `errors` |  |
| `id` |  |
| `max_instances` | Maximum number of instances that an autoscaling application can run. |
| `messages` |  |
| `observability` | Top-level application observability settings. |
| `result` | The public Containers API returns an application. |
| `result_info` | Cursor pagination details for a v4 API list response. |
| `rollout_active_grace_period` | Grace period for active instances to stay alive before becoming eligible for shutdown signal due to a rollout, in seconds. |
| `success` | Whether the API call was successful. |

Operations: Create, List, Load, Remove, Update.

API path: `/accounts/{account_id}/containers/applications`

#### Brapi

| Field | Description |
| --- | --- |
| `Browser` | Browser name and version. |
| `ProtocolVersion` | Chrome DevTools Protocol version. |
| `UserAgent` | User agent string. |
| `V8Version` | V8 JavaScript engine version. |
| `WebKitVersion` | WebKit version. |
| `actionTimeout` | The maximum duration allowed for the browser action to complete after the page has loaded (such as taking screenshots, extracting content, or generating PDFs). |
| `addScriptTag` | Adds a script element into the page with the desired URL or content. |
| `addStyleTag` | Adds a `<link rel="stylesheet">` tag into the page with the desired URL or a `<style type="text/css">` tag with the content. |
| `allowRequestPattern` | Only allow requests that match the provided regex patterns, eg. |
| `allowResourceTypes` | Only allow requests that match the provided resource types, eg. |
| `authenticate` | Provide credentials for HTTP authentication. |
| `bestAttempt` | Attempt to proceed when 'awaited' events fail or timeout. |
| `closeReason` | Reason code for session closure. |
| `closeReasonText` | Human-readable close reason. |
| `commands` | Available commands. |
| `connectionEndTime` | Connection end time. |
| `connectionId` | Connection ID. |
| `connectionStartTime` | Connection start time. |
| `cookies` | Check [options](https://pptr.dev/api/puppeteer.page.setcookie). |
| `custom_ai` | Optional list of custom AI models to use for the request. |
| `dependencies` | Domain dependencies. |
| `description` | Target description. |
| `devtoolsFrontendUrl` | DevTools frontend URL. |
| `domain` | Domain name. |
| `elements` |  |
| `emulateMediaType` |  |
| `endTime` | Session end time. |
| `errors` |  |
| `events` | Available events. |
| `excludeExternalLinks` |  |
| `experimental` | Whether this domain is experimental. |
| `formats` |  |
| `gotoOptions` | Check [options](https://pptr.dev/api/puppeteer.gotooptions). |
| `guardrails` |  |
| `html` | Set the content of the page, eg: `<h1>Hello World!!</h1>`. |
| `id` | Target ID. |
| `interestingOnly` |  |
| `lastUpdated` | Last updated timestamp. |
| `message` | Target activated. |
| `meta` |  |
| `pdfOptions` | Check [options](https://pptr.dev/api/puppeteer.pdfoptions). |
| `prompt` |  |
| `rejectRequestPattern` | Block undesired requests that match the provided regex patterns, eg. |
| `rejectResourceTypes` | Block undesired requests that match the provided resource types, eg. |
| `response_format` |  |
| `result` | HTML content. |
| `root` |  |
| `screenshotOptions` | Check [options](https://pptr.dev/api/puppeteer.screenshotoptions). |
| `scrollPage` |  |
| `selector` |  |
| `sessionId` | Session ID. |
| `setExtraHTTPHeaders` |  |
| `setJavaScriptEnabled` |  |
| `startTime` | Session start time. |
| `success` | Response status. |
| `title` | Title of the target. |
| `type` | Target type (page, background_page, worker, etc.). |
| `types` | Type definitions. |
| `url` | URL of the target. |
| `userAgent` |  |
| `viewport` | Check [options](https://pptr.dev/api/puppeteer.page.setviewport). |
| `visibleLinksOnly` |  |
| `waitForSelector` | Wait for the selector to appear in page. |
| `waitForTimeout` | Waits for a specified timeout before continuing. |
| `webSocketDebuggerUrl` | WebSocket URL for debugging this target. |

Operations: Create, List, Load, Remove, Update.

API path: `/accounts/{account_id}/browser-rendering/devtools/browser`

#### Build

| Field | Description |
| --- | --- |
| `errors` |  |
| `id` |  |
| `messages` |  |
| `result` |  |
| `result_info` |  |
| `success` |  |

Operations: List, Load, Update.

API path: `/accounts/{account_id}/builds/builds/{build_uuid}/logs`

#### BuildToken

| Field | Description |
| --- | --- |
| `build_token_name` |  |
| `build_token_secret` |  |
| `cloudflare_token_id` |  |
| `errors` |  |
| `messages` |  |
| `result` |  |
| `result_info` |  |
| `success` |  |

Operations: Create, List.

API path: `/accounts/{account_id}/builds/tokens`

#### BuildsApi

| Field | Description |
| --- | --- |
| `errors` |  |
| `messages` |  |
| `result` |  |
| `result_info` |  |
| `success` |  |

Operations: Create, Remove.

API path: `/accounts/{account_id}/builds/triggers/{trigger_uuid}/purge_build_cache`

#### Connection

| Field | Description |
| --- | --- |
| `id` |  |

Operations: Remove.

API path: `/accounts/{account_id}/builds/repos/connections/{repo_connection_uuid}`

#### ContainerImage

| Field | Description |
| --- | --- |
| `image` | Image url. |

Operations: Create.

API path: `/accounts/{account_id}/containers/image-preparations`

#### ContainerInstance

| Field | Description |
| --- | --- |
| `errors` |  |
| `id` |  |
| `messages` |  |
| `result` | A container instance belonging to an application. |
| `result_info` | Cursor pagination details for a v4 API list response. |
| `success` | Whether the API call was successful. |

Operations: List, Load.

API path: `/accounts/{account_id}/containers/applications/{application_id}/instances`

#### DeployHook

| Field | Description |
| --- | --- |
| `branch` | Git branch name. |
| `deploy_hook_name` | Deploy hook name (1-58 characters). |
| `errors` |  |
| `id` |  |
| `messages` |  |
| `result` |  |
| `result_info` |  |
| `success` |  |

Operations: Create, List, Load, Remove, Update.

API path: `/accounts/{account_id}/builds/workers/{script_name}/deploy_hooks`

#### Deployment

| Field | Description |
| --- | --- |
| `id` |  |

Operations: Remove.

API path: `/accounts/{account_id}/workers/workers/{worker_id}/previews/{preview_id}/deployments/{deployment_id}`

#### Destination

| Field | Description |
| --- | --- |
| `configuration` |  |
| `enabled` |  |
| `errors` |  |
| `id` |  |
| `messages` |  |
| `name` |  |
| `result` |  |
| `skipPreflightCheck` |  |
| `success` |  |

Operations: Create, List, Remove, Update.

API path: `/accounts/{account_id}/workers/observability/destinations`

#### Domain

| Field | Description |
| --- | --- |
| `errors` |  |
| `id` |  |
| `messages` |  |
| `result` |  |
| `success` | Whether the API call was successful. |

Operations: List, Load, Remove, Update.

API path: `/accounts/{account_id}/workers/domains`

#### DurableObjectsNamespace

| Field | Description |
| --- | --- |
| `result` |  |
| `result_info` |  |

Operations: Create, List.

API path: `/accounts/{account_id}/workers/durable_objects/namespaces/{id}/query/v2`

#### EnvironmentVariable

| Field | Description |
| --- | --- |
| `errors` |  |
| `messages` |  |
| `result` |  |
| `result_info` |  |
| `success` |  |

Operations: List, Update.

API path: `/accounts/{account_id}/builds/triggers/{trigger_uuid}/environment_variables`

#### GitHubIntegration

| Field | Description |
| --- | --- |
| `errors` |  |
| `messages` |  |
| `result` |  |
| `result_info` |  |
| `success` |  |

Operations: List.

API path: `/accounts/{account_id}/builds/repos/{provider_type}/{provider_account_id}/{repo_id}/config_autofill`

#### Hyperdrive

| Field | Description |
| --- | --- |
| `caching` |  |
| `created_on` | Defines the creation time of the Hyperdrive configuration. |
| `id` | Define configurations using a unique string identifier. |
| `modified_on` | Defines the last modified time of the Hyperdrive configuration. |
| `mtls` | mTLS configuration for the origin connection. |
| `name` | The name of the Hyperdrive configuration. |
| `origin` | Combines database connection fields with exactly one supported network location. |
| `origin_connection_limit` | The (soft) maximum number of connections the Hyperdrive is allowed to make to the origin database. |
| `restarted_on` | Defines the last time the Hyperdrive connection pool was explicitly restarted via the restart endpoint. |
| `result` |  |

Operations: Create, List, Load, Patch, Remove, Update.

API path: `/accounts/{account_id}/hyperdrive/configs/{hyperdrive_id}/restart`

#### ImageRegistry

| Field | Description |
| --- | --- |
| `auth` | Credentials for authenticating to a private external image registry. |
| `domain` | Hostname of the private registry, without a scheme or image path. |
| `errors` |  |
| `expiration_minutes` | The number of minutes Cloudflare managed registry credentials stay valid. |
| `id` |  |
| `is_public` | Omit this field or set it to `false`. |
| `kind` | Registry provider. |
| `messages` |  |
| `permissions` | The permissions for Cloudflare managed registry credentials. |
| `result` |  |
| `success` | Whether the API call was successful. |

Operations: Create, List, Remove.

API path: `/accounts/{account_id}/containers/registries/{domain}/credentials`

#### Issue

| Field | Description |
| --- | --- |
| `afterInactivitySeconds` |  |
| `afterOccurrences` |  |
| `enabled` |  |
| `errors` |  |
| `id` |  |
| `issueIds` |  |
| `messages` |  |
| `name` |  |
| `policyId` |  |
| `result` |  |
| `result_info` |  |
| `service` |  |
| `status` |  |
| `success` |  |
| `title` |  |

Operations: Create, List, Load, Patch, Remove, Update.

API path: `/accounts/{account_id}/workers/observability/issues/groups/{groupId}/members`

#### Key

| Field | Description |
| --- | --- |
| `datasets` | Leave this empty to use the default datasets |
| `errors` |  |
| `filters` | Apply filters to narrow key discovery. |
| `from` |  |
| `keyNeedle` | If the user suggests a key, use this to narrow down the list of keys returned. |
| `limit` | Advanced usage: set limit=1000+ to retrieve comprehensive key options without needing additional filtering. |
| `messages` |  |
| `needle` | Search for a specific substring in any of the events |
| `result` |  |
| `success` |  |
| `to` |  |

Operations: Create.

API path: `/accounts/{account_id}/workers/observability/telemetry/keys`

#### LiveTail

| Field | Description |
| --- | --- |
| `errors` |  |
| `filterCombination` | Set a flag to describe how to combine the filters on the query. |
| `filters` | Apply filters to the query. |
| `messages` |  |
| `result` |  |
| `scriptId` |  |
| `success` |  |

Operations: Create.

API path: `/accounts/{account_id}/workers/observability/telemetry/live-tail`

#### MetricsExport

| Field | Description |
| --- | --- |
| `errors` |  |
| `messages` |  |
| `requester` |  |
| `resources` |  |
| `result` |  |
| `success` |  |

Operations: Create, List.

API path: `/accounts/{account_id}/workers/observability/metricsexport`

#### Namespace

| Field | Description |
| --- | --- |
| `id` |  |

Operations: Remove.

API path: `/accounts/{account_id}/workers/dispatch/namespaces/{dispatch_namespace}`

#### Preview

| Field | Description |
| --- | --- |
| `errors` |  |
| `id` |  |
| `messages` |  |
| `result` |  |
| `success` | Whether the API call was successful. |

Operations: Create, List, Load, Patch, Remove, Update.

API path: `/accounts/{account_id}/workers/workers/{worker_id}/previews`

#### PreviewDeployment

| Field | Description |
| --- | --- |
| `errors` |  |
| `id` |  |
| `messages` |  |
| `result` |  |
| `success` | Whether the API call was successful. |

Operations: Create, List, Load, Update.

API path: `/accounts/{account_id}/workers/workers/{worker_id}/previews/{preview_id}/deployments`

#### Query

| Field | Description |
| --- | --- |
| `chart` | When true, includes time-series data in the response. |
| `chartType` | Controls the SQL shape and response payload for the 'calculations' view. |
| `compare` | When true, includes a comparison dataset from the previous time period of equal length. |
| `distributionScale` | Value-axis bucketing for chartType 'distribution'. |
| `dry` | When true, executes the query without persisting the results. |
| `errors` |  |
| `granularity` | Number of time-series buckets. |
| `ignoreSeries` | When true, omits time-series data from the response and returns only aggregated values. |
| `limit` | Maximum number of events to return when view is 'events'. |
| `messages` |  |
| `offset` | Cursor for pagination in event, trace, invocation, and agent views. |
| `offsetBy` | Numeric offset for paginating grouped/pattern results (top-N lists). |
| `offsetDirection` | Pagination direction: 'next' for forward, 'prev' for backward. |
| `parameters` | Query parameters defining what data to retrieve — filters, calculations, group-bys, and ordering. |
| `queryId` | Identifier for the query. |
| `result` | Complete results of a query run. |
| `success` |  |
| `timeframe` | Timeframe for the query using Unix timestamps in milliseconds. |
| `view` | Controls the shape of the response. |

Operations: Create.

API path: `/accounts/{account_id}/workers/observability/telemetry/query`

#### RepositoryConnection

| Field | Description |
| --- | --- |
| `provider_account_id` | Provider-specific identifier of the account or namespace that owns the repository. |
| `provider_account_name` | Human-readable name of the account or namespace that owns the repository. |
| `provider_type` | Source control provider. |
| `repo_id` | Provider-specific repository identifier. |
| `repo_name` | Human-readable repository name. |

Operations: Update.

API path: `/accounts/{account_id}/builds/repos/connections`

#### Rollout

| Field | Description |
| --- | --- |
| `description` | Description of the rollout process. |
| `kind` | Kind of the rollout process. |
| `percentage` | Initial target version percentage (0-100). |
| `step_percentage` | Percentage of rollout to increase in each step when "steps" is absent. |
| `steps` | Steps defining the rollout process, used when "step_percentage" is absent. |
| `strategy` | Strategy used for the rollout. |
| `target_configuration` | User-specified container configuration changes. |

Operations: Create.

API path: `/accounts/{account_id}/containers/applications/{application_id}/rollouts`

#### SavedQuery

| Field | Description |
| --- | --- |
| `description` |  |
| `errors` |  |
| `id` |  |
| `messages` |  |
| `name` | Query name |
| `parameters` |  |
| `result` |  |
| `success` |  |

Operations: Create, List, Load, Remove, Update.

API path: `/accounts/{account_id}/workers/observability/queries`

#### Script

| Field | Description |
| --- | --- |
| `id` |  |

Operations: Remove.

API path: `/accounts/{account_id}/workers/scripts/{script_name}`

#### ScriptSetting

| Field | Description |
| --- | --- |
| `errors` |  |
| `logpush` | Whether Logpush is turned on for the Worker. |
| `messages` |  |
| `observability` |  |
| `result` |  |
| `success` | Whether the API call was successful. |
| `tags` |  |
| `tail_consumers` | List of Workers that will consume logs from the attached Worker. |

Operations: List, Update.

API path: `/accounts/{account_id}/workers/scripts/{script_name}/script-settings`

#### Secret

| Field | Description |
| --- | --- |
| `comment` | Freeform text describing the secret. |
| `id` |  |
| `result` |  |
| `scopes` | The list of services that can use this secret. |
| `value` | The value of the secret. |

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
| `result` |  |

Operations: Load.

API path: `/accounts/{account_id}/secrets_store/quota`

#### SecretsStoreSecret

| Field | Description |
| --- | --- |
| `comment` | Freeform text describing the secret. |
| `name` | The name of the secret. |
| `scopes` | The list of services that can use this secret. |

Operations: Create.

API path: `/accounts/{account_id}/secrets_store/stores/{store_id}/secrets/{secret_id}/duplicate`

#### SecretsStoreStore

| Field | Description |
| --- | --- |
| `id` |  |
| `name` | The name of the store. |
| `result` |  |

Operations: Create, Load.

API path: `/accounts/{account_id}/secrets_store/stores`

#### SecretsStoreStoresResponseCollection

| Field | Description |
| --- | --- |
| `result` |  |

Operations: List.

API path: `/accounts/{account_id}/secrets_store/stores`

#### Setting

| Field | Description |
| --- | --- |
| `errors` |  |
| `messages` |  |
| `result` |  |
| `success` | Whether the API call was successful. |

Operations: List, Update.

API path: `/accounts/{account_id}/workers/services/{service_name}/environments/{environment_name}/settings`

#### Shared

| Field | Description |
| --- | --- |
| `errors` |  |
| `id` |  |
| `messages` |  |
| `result` | Complete results of a query run. |
| `success` |  |

Operations: Create, Load.

API path: `/accounts/{account_id}/workers/observability/shared/query`

#### Tail

| Field | Description |
| --- | --- |
| `id` |  |

Operations: Remove.

API path: `/accounts/{account_id}/workers/scripts/{script_name}/tails/{id}`

#### Token

| Field | Description |
| --- | --- |
| `id` |  |

Operations: Remove.

API path: `/accounts/{account_id}/builds/tokens/{build_token_uuid}`

#### Trigger

| Field | Description |
| --- | --- |
| `branch_excludes` | Branch patterns that must not start builds. |
| `branch_includes` | Branch patterns that can start builds. |
| `build_caching_enabled` | Whether builds reuse cached dependencies and build artifacts. |
| `build_command` | Command to build the Worker. |
| `build_token_uuid` | UUID of the build token used when deploying the Worker. |
| `deploy_command` | Command to deploy the Worker. |
| `external_script_id` | System-generated tag of the Worker. |
| `id` |  |
| `path_excludes` | Path patterns that must not start builds. |
| `path_includes` | Path patterns that can start builds. |
| `repo_connection_uuid` | Repository connection UUID. |
| `root_directory` | Repository directory in which build and deploy commands run. |
| `trigger_name` | Human-readable name of the build trigger. |

Operations: Create, Remove, Update.

API path: `/accounts/{account_id}/builds/triggers/{trigger_uuid}/builds`

#### Usage

| Field | Description |
| --- | --- |
| `errors` |  |
| `messages` |  |
| `result` |  |
| `success` |  |

Operations: List.

API path: `/accounts/{account_id}/workers/observability/usage`

#### Value

| Field | Description |
| --- | --- |
| `datasets` | Leave this empty to use the default datasets |
| `errors` |  |
| `filters` | Apply filters before listing values. |
| `key` |  |
| `limit` |  |
| `messages` |  |
| `needle` | Full-text search expression to match events containing the specified text or pattern. |
| `result` |  |
| `success` |  |
| `timeframe` |  |
| `type` |  |

Operations: Create.

API path: `/accounts/{account_id}/workers/observability/telemetry/values`

#### Version

| Field | Description |
| --- | --- |
| `annotations` | Metadata about the version. |
| `assets` | Configuration for assets within a Worker. |
| `author_email` | Email of the user who created the version. |
| `author_id` | Identifier of the user who created the version. |
| `bindings` | List of bindings attached to a Worker. |
| `cache_options` | Global CacheW configuration for the Worker. |
| `compatibility_date` | Date indicating targeted support in the Workers runtime. |
| `compatibility_flags` | Flags that enable or disable certain features in the Workers runtime. |
| `containers` | List of containers attached to a Worker. |
| `created_on` | When the version was created. |
| `errors` |  |
| `exports` | Declarative exports for the version, including Durable Object classes (with their `storage` backend) and named Worker entrypoints. |
| `exports_reconciliation` | Summary of the declarative exports reconciliation that ran on this upload. |
| `id` | Version identifier. |
| `limits` | Resource limits enforced at runtime. |
| `main_module` | The name of the main module in the `modules` array (e.g. |
| `messages` |  |
| `migration_tag` | Durable Object migration tag. |
| `migrations` | Migrations for Durable Objects associated with the version. |
| `modules` | Code, sourcemaps, and other content used at runtime. |
| `number` | The integer version number, starting from one. |
| `package_dependencies` | The list of npm packages that were installed and used when this Worker version was built. |
| `placement` | Configuration for [Smart Placement](https://developers.cloudflare.com/workers/configuration/smart-placement). |
| `result` |  |
| `source` | The client used to create the version. |
| `startup_time_ms` | Time in milliseconds spent on [Worker startup](https://developers.cloudflare.com/workers/platform/limits/#worker-startup-time). |
| `success` | Whether the API call was successful. |
| `urls` | All routable URLs that always point to this version. |
| `usage_model` | Usage model for the version. |

Operations: Create, List, Load, Remove, Update.

API path: `/accounts/{account_id}/workers/workers/{worker_id}/versions`

#### Worker

| Field | Description |
| --- | --- |
| `auto_build` | Whether pushes to the git branch build this Preview. |
| `auto_delete` | Whether deleting the git branch also deletes this Preview. |
| `branch` | Git branch name (required if commit_hash not provided) |
| `commit_hash` | Git commit hash (required if branch not provided) |
| `errors` |  |
| `git_repository` | Git repository settings to update |
| `id` |  |
| `messages` |  |
| `previews_base_config` | Build and deploy settings when creating a Worker build configuration |
| `previews_enabled` | Whether Previews are enabled for this Worker |
| `production_settings` | Build and deploy settings when creating a Worker build configuration |
| `result` | A single Preview of a Worker, with the build settings it currently uses. |
| `result_info` |  |
| `script_tag` | System-generated tag of the Worker. |
| `seed_repo` | Optional repository and file overrides used to seed this build. |
| `settings` | Partial build settings for updating a Worker build configuration |
| `success` | Whether the API call was successful. |

Operations: Create, List, Load, Patch, Remove, Update.

API path: `/accounts/{account_id}/builds/workers/{script_tag}/previews/{preview_id}/builds`

#### WorkerCronTrigger

| Field | Description |
| --- | --- |
| `errors` |  |
| `messages` |  |
| `result` |  |
| `success` | Whether the API call was successful. |

Operations: List, Update.

API path: `/accounts/{account_id}/workers/scripts/{script_name}/schedules`

#### WorkerDeployment

| Field | Description |
| --- | --- |
| `annotations` |  |
| `author_email` |  |
| `created_on` |  |
| `errors` |  |
| `id` |  |
| `messages` |  |
| `result` |  |
| `source` |  |
| `strategy` |  |
| `success` | Whether the API call was successful. |
| `versions` | Worker versions included in this deployment. |

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
| `errors` |  |
| `id` |  |
| `messages` |  |
| `pattern` | Pattern to match incoming requests against. |
| `result` |  |
| `script` | Name of the script to run if the route matches. |
| `success` | Whether the API call was successful. |

Operations: Create, List, Load, Remove, Update.

API path: `/zones/{zone_id}/workers/routes`

#### WorkerScript

| Field | Description |
| --- | --- |
| `errors` |  |
| `id` |  |
| `messages` |  |
| `result` | A secret value accessible through a binding. |
| `success` | Whether the API call was successful. |

Operations: Create, List, Load, Patch, Remove, Update.

API path: `/accounts/{account_id}/workers/scripts/{script_name}/subdomain`

#### WorkerSubdomain

| Field | Description |
| --- | --- |
| `errors` |  |
| `messages` |  |
| `result` |  |
| `subdomain` |  |
| `success` | Whether the API call was successful. |

Operations: List, Remove, Update.

API path: `/accounts/{account_id}/workers/subdomain`

#### WorkerTailLog

| Field | Description |
| --- | --- |
| `errors` |  |
| `messages` |  |
| `result` |  |
| `success` | Whether the API call was successful. |

Operations: Create, List.

API path: `/accounts/{account_id}/workers/scripts/{script_name}/tails`

#### WorkersAccountSetting

| Field | Description |
| --- | --- |
| `default_usage_model` |  |
| `errors` |  |
| `green_compute` |  |
| `messages` |  |
| `result` |  |
| `success` | Whether the API call was successful. |

Operations: List, Update.

API path: `/accounts/{account_id}/workers/account-settings`

#### WorkersApiResponseNullResult

| Field | Description |
| --- | --- |
| `errors` |  |
| `messages` |  |
| `result` |  |
| `success` | Whether the API call was successful. |

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
| `manifest` | A manifest ([path]: {hash, size}) map of files to upload. |

Operations: Create.

API path: `/accounts/{account_id}/workers/dispatch/namespaces/{dispatch_namespace}/scripts/{script_name}/assets-upload-session`

#### WorkersForPlatform

| Field | Description |
| --- | --- |
| `errors` |  |
| `messages` |  |
| `result` | A secret value accessible through a binding. |
| `success` | Whether the API call was successful. |

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
| `errors` |  |
| `id` |  |
| `jurisdiction` | Specify the jurisdiction to restrict the KV namespace to durably store data within. |
| `keys` | Array of keys to retrieve (maximum of 100). |
| `messages` |  |
| `result` |  |
| `result_info` |  |
| `success` | Whether the API call was successful. |
| `title` | Human-readable string name for a Workers KV namespace. |
| `type` | Return values as strings with `text`, or parse stored JSON values with `json`. |
| `withMetadata` | Whether to include metadata in the response. |

Operations: Create, List, Load, Remove, Update.

API path: `/accounts/{account_id}/storage/kv/namespaces/{namespace_id}/bulk/delete`

#### WorkersNamespaceList

| Field | Description |
| --- | --- |
| `errors` |  |
| `messages` |  |
| `result` |  |
| `success` | Whether the API call was successful. |

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
| `errors` |  |
| `messages` |  |
| `result` | Details about a worker uploaded to a Workers for Platforms namespace. |
| `success` | Whether the API call was successful. |

Operations: Load, Update.

API path: `/accounts/{account_id}/workers/dispatch/namespaces/{dispatch_namespace}/scripts/{script_name}`

#### WorkersNamespaceSingle

| Field | Description |
| --- | --- |
| `errors` |  |
| `messages` |  |
| `name` | The name of the dispatch namespace. |
| `result` |  |
| `success` | Whether the API call was successful. |
| `trusted_workers` | Whether the Workers in the namespace are executed in a "trusted" manner. |

Operations: Create, Load, Patch, Update.

API path: `/accounts/{account_id}/workers/dispatch/namespaces`

#### WorkersPipelinesOther

| Field | Description |
| --- | --- |
| `config` | Defines the configuration of the R2 Sink. |
| `created_at` |  |
| `destination` |  |
| `endpoint` | Indicates the endpoint URL to send traffic. |
| `failure_reason` | Indicates the reason for the failure of the Pipeline. |
| `format` | Defines the output data format of a sink. |
| `graph` | Indicates the processing flow to implement the SQL. |
| `http` |  |
| `id` | Indicates a unique identifier for this pipeline. |
| `modified_at` |  |
| `name` | Indicates the name of the Pipeline. |
| `schema` | Defines the schema of the events in the data stream. |
| `source` |  |
| `sql` | Specifies SQL for the Pipeline processing flow. |
| `status` | Indicates the current status of the Pipeline. |
| `tables` | List of streams and sinks used by this pipeline. |
| `type` | Specifies the type of sink. |
| `version` | Indicates the version number of last saved configuration. |
| `worker_binding` |  |

Operations: Create, List, Load, Patch, Remove, Update.

API path: `/accounts/{account_id}/pipelines`

#### WorkersScriptAndVersionSetting

| Field | Description |
| --- | --- |
| `errors` |  |
| `messages` |  |
| `result` |  |
| `success` | Whether the API call was successful. |

Operations: List, Update.

API path: `/accounts/{account_id}/workers/scripts/{script_name}/settings`

#### WorkersScriptResponseCollection

| Field | Description |
| --- | --- |
| `errors` |  |
| `messages` |  |
| `result` |  |
| `success` | Whether the API call was successful. |

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
| `errors` |  |
| `messages` |  |
| `result` |  |
| `success` | Whether the API call was successful. |

Operations: List.

API path: `/accounts/{account_id}/workers/placement/regions`

#### WorkersUsageModel

| Field | Description |
| --- | --- |
| `errors` |  |
| `messages` |  |
| `result` |  |
| `success` | Whether the API call was successful. |
| `usage_model` | Usage model for the Worker invocations. |
| `user_limits` | User-defined resource limits for Workers with standard usage model. |

Operations: List, Update.

API path: `/accounts/{account_id}/workers/scripts/{script_name}/usage-model`

#### WorkersVersionsList

| Field | Description |
| --- | --- |
| `errors` |  |
| `messages` |  |
| `result` |  |
| `success` | Whether the API call was successful. |

Operations: List.

API path: `/accounts/{account_id}/workers/scripts/{script_name}/versions`

#### WorkersVersionsSingle

| Field | Description |
| --- | --- |
| `errors` |  |
| `messages` |  |
| `result` |  |
| `success` | Whether the API call was successful. |

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
| `class_name` |  |
| `concurrency` |  |
| `default_retention` | Default retention applied to instances of this version when they do not set their own retention. |
| `errors` |  |
| `id` |  |
| `instances` |  |
| `limits` |  |
| `messages` |  |
| `result` |  |
| `result_info` |  |
| `schedules` |  |
| `script_name` |  |
| `success` |  |

Operations: Create, List, Load, Patch, Remove, Update.

API path: `/accounts/{account_id}/workflows/{workflow_name}/instances/{instance_id}/events/{event_type}`



## Entities


### Account

Create an instance: `local account = client:Account(nil)`

#### Operations

| Method | Description |
| --- | --- |
| `list(match)` | List entities matching the criteria. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `id` | `string` |  |

#### Example: List

```lua
local accounts, err = client:Account():list()
```


### Application

Create an instance: `local application = client:Application(nil)`

#### Operations

| Method | Description |
| --- | --- |
| `create(data)` | Create a new entity with the given data. |
| `list(match)` | List entities matching the criteria. |
| `load(match)` | Load a single entity by match criteria. |
| `remove(match)` | Remove the matching entity. |
| `update(data)` | Update an existing entity. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `configuration` | `table` | Application configuration fields you can change without creating a rollout. |
| `constraints` | `table` |  |
| `errors` | `table` |  |
| `id` | `string` |  |
| `max_instances` | `number` | Maximum number of instances that an autoscaling application can run. |
| `messages` | `table` |  |
| `observability` | `any` | Top-level application observability settings. |
| `result` | `any` | The public Containers API returns an application. |
| `result_info` | `table` | Cursor pagination details for a v4 API list response. |
| `rollout_active_grace_period` | `number` | Grace period for active instances to stay alive before becoming eligible for shutdown signal due to a rollout, in seconds. |
| `success` | `boolean` | Whether the API call was successful. |

#### Example: Load

```lua
local application, err = client:Application():load({ id = "application_id", account_id = "account_id" })
```

#### Example: List

```lua
local applications, err = client:Application():list()
```

#### Example: Create

```lua
local application, err = client:Application():create({
  account_id = "example_account_id", -- string
  errors = {}, -- table
  messages = {}, -- table
  result = "example_result", -- any
  result_info = {}, -- table
  success = true, -- boolean
})
```


### Brapi

Create an instance: `local brapi = client:Brapi(nil)`

#### Operations

| Method | Description |
| --- | --- |
| `create(data)` | Create a new entity with the given data. |
| `list(match)` | List entities matching the criteria. |
| `load(match)` | Load a single entity by match criteria. |
| `remove(match)` | Remove the matching entity. |
| `update(data)` | Update an existing entity. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `Browser` | `string` | Browser name and version. |
| `ProtocolVersion` | `string` | Chrome DevTools Protocol version. |
| `UserAgent` | `string` | User agent string. |
| `V8Version` | `string` | V8 JavaScript engine version. |
| `WebKitVersion` | `string` | WebKit version. |
| `actionTimeout` | `number` | The maximum duration allowed for the browser action to complete after the page has loaded (such as taking screenshots, extracting content, or generating PDFs). |
| `addScriptTag` | `table` | Adds a script element into the page with the desired URL or content. |
| `addStyleTag` | `table` | Adds a `<link rel="stylesheet">` tag into the page with the desired URL or a `<style type="text/css">` tag with the content. |
| `allowRequestPattern` | `table` | Only allow requests that match the provided regex patterns, eg. |
| `allowResourceTypes` | `table` | Only allow requests that match the provided resource types, eg. |
| `authenticate` | `table` | Provide credentials for HTTP authentication. |
| `bestAttempt` | `boolean` | Attempt to proceed when 'awaited' events fail or timeout. |
| `closeReason` | `number` | Reason code for session closure. |
| `closeReasonText` | `string` | Human-readable close reason. |
| `commands` | `table` | Available commands. |
| `connectionEndTime` | `number` | Connection end time. |
| `connectionId` | `string` | Connection ID. |
| `connectionStartTime` | `number` | Connection start time. |
| `cookies` | `table` | Check [options](https://pptr.dev/api/puppeteer.page.setcookie). |
| `custom_ai` | `table` | Optional list of custom AI models to use for the request. |
| `dependencies` | `table` | Domain dependencies. |
| `description` | `string` | Target description. |
| `devtoolsFrontendUrl` | `string` | DevTools frontend URL. |
| `domain` | `string` | Domain name. |
| `elements` | `table` |  |
| `emulateMediaType` | `string` |  |
| `endTime` | `number` | Session end time. |
| `errors` | `table` |  |
| `events` | `table` | Available events. |
| `excludeExternalLinks` | `boolean` |  |
| `experimental` | `boolean` | Whether this domain is experimental. |
| `formats` | `table` |  |
| `gotoOptions` | `table` | Check [options](https://pptr.dev/api/puppeteer.gotooptions). |
| `guardrails` | `table` |  |
| `html` | `string` | Set the content of the page, eg: `<h1>Hello World!!</h1>`. |
| `id` | `string` | Target ID. |
| `interestingOnly` | `boolean` |  |
| `lastUpdated` | `number` | Last updated timestamp. |
| `message` | `string` | Target activated. |
| `meta` | `table` |  |
| `pdfOptions` | `table` | Check [options](https://pptr.dev/api/puppeteer.pdfoptions). |
| `prompt` | `string` |  |
| `rejectRequestPattern` | `table` | Block undesired requests that match the provided regex patterns, eg. |
| `rejectResourceTypes` | `table` | Block undesired requests that match the provided resource types, eg. |
| `response_format` | `table` |  |
| `result` | `table` | HTML content. |
| `root` | `string` |  |
| `screenshotOptions` | `table` | Check [options](https://pptr.dev/api/puppeteer.screenshotoptions). |
| `scrollPage` | `boolean` |  |
| `selector` | `string` |  |
| `sessionId` | `string` | Session ID. |
| `setExtraHTTPHeaders` | `table` |  |
| `setJavaScriptEnabled` | `boolean` |  |
| `startTime` | `number` | Session start time. |
| `success` | `boolean` | Response status. |
| `title` | `string` | Title of the target. |
| `type` | `string` | Target type (page, background_page, worker, etc.). |
| `types` | `table` | Type definitions. |
| `url` | `string` | URL of the target. |
| `userAgent` | `string` |  |
| `viewport` | `table` | Check [options](https://pptr.dev/api/puppeteer.page.setviewport). |
| `visibleLinksOnly` | `boolean` |  |
| `waitForSelector` | `table` | Wait for the selector to appear in page. |
| `waitForTimeout` | `number` | Waits for a specified timeout before continuing. |
| `webSocketDebuggerUrl` | `string` | WebSocket URL for debugging this target. |

#### Example: Load

```lua
local brapi, err = client:Brapi():load({ account_id = "account_id" })
```

#### Example: List

```lua
local brapis, err = client:Brapi():list()
```

#### Example: Create

```lua
local brapi, err = client:Brapi():create({
  account_id = "example_account_id", -- string
  Browser = "example_Browser", -- string
  ProtocolVersion = "example_ProtocolVersion", -- string
  UserAgent = "example_UserAgent", -- string
  V8Version = "example_V8Version", -- string
  WebKitVersion = "example_WebKitVersion", -- string
  authenticate = {}, -- table
  domain = "example_domain", -- string
  elements = {}, -- table
  id = "example_id", -- string
  message = "example_message", -- string
  meta = {}, -- table
  response_format = {}, -- table
  result = {}, -- table
  sessionId = "example_sessionId", -- string
  success = true, -- boolean
  type = "example_type", -- string
  url = "example_url", -- string
  viewport = {}, -- table
  waitForSelector = {}, -- table
})
```


### Build

Create an instance: `local build = client:Build(nil)`

#### Operations

| Method | Description |
| --- | --- |
| `list(match)` | List entities matching the criteria. |
| `load(match)` | Load a single entity by match criteria. |
| `update(data)` | Update an existing entity. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `errors` | `table` |  |
| `id` | `string` |  |
| `messages` | `table` |  |
| `result` | `table` |  |
| `result_info` | `table` |  |
| `success` | `boolean` |  |

#### Example: Load

```lua
local build, err = client:Build():load({ id = "build_id", account_id = "account_id" })
```

#### Example: List

```lua
local builds, err = client:Build():list()
```


### BuildToken

Create an instance: `local build_token = client:BuildToken(nil)`

#### Operations

| Method | Description |
| --- | --- |
| `create(data)` | Create a new entity with the given data. |
| `list(match)` | List entities matching the criteria. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `build_token_name` | `string` |  |
| `build_token_secret` | `string` |  |
| `cloudflare_token_id` | `string` |  |
| `errors` | `table` |  |
| `messages` | `table` |  |
| `result` | `table` |  |
| `result_info` | `table` |  |
| `success` | `boolean` |  |

#### Example: List

```lua
local build_tokens, err = client:BuildToken():list()
```

#### Example: Create

```lua
local build_token, err = client:BuildToken():create({
  account_id = "example_account_id", -- string
  build_token_name = "example_build_token_name", -- string
  build_token_secret = "example_build_token_secret", -- string
  cloudflare_token_id = "example_cloudflare_token_id", -- string
  errors = {}, -- table
  messages = {}, -- table
  result = {}, -- table
  success = true, -- boolean
})
```


### BuildsApi

Create an instance: `local builds_api = client:BuildsApi(nil)`

#### Operations

| Method | Description |
| --- | --- |
| `create(data)` | Create a new entity with the given data. |
| `remove(match)` | Remove the matching entity. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `errors` | `table` |  |
| `messages` | `table` |  |
| `result` | `table` |  |
| `result_info` | `table` |  |
| `success` | `boolean` |  |

#### Example: Create

```lua
local builds_api, err = client:BuildsApi():create({
  account_id = "example_account_id", -- string
  trigger_id = "example_trigger_id", -- string
  errors = {}, -- table
  messages = {}, -- table
  result = {}, -- table
  success = true, -- boolean
})
```


### Connection

Create an instance: `local connection = client:Connection(nil)`

#### Operations

| Method | Description |
| --- | --- |
| `remove(match)` | Remove the matching entity. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `id` | `string` |  |


### ContainerImage

Create an instance: `local container_image = client:ContainerImage(nil)`

#### Operations

| Method | Description |
| --- | --- |
| `create(data)` | Create a new entity with the given data. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `image` | `string` | Image url. |

#### Example: Create

```lua
local container_image, err = client:ContainerImage():create({
  account_id = "example_account_id", -- string
  image = "example_image", -- string
})
```


### ContainerInstance

Create an instance: `local container_instance = client:ContainerInstance(nil)`

#### Operations

| Method | Description |
| --- | --- |
| `list(match)` | List entities matching the criteria. |
| `load(match)` | Load a single entity by match criteria. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `errors` | `table` |  |
| `id` | `string` |  |
| `messages` | `table` |  |
| `result` | `any` | A container instance belonging to an application. |
| `result_info` | `table` | Cursor pagination details for a v4 API list response. |
| `success` | `boolean` | Whether the API call was successful. |

#### Example: Load

```lua
local container_instance, err = client:ContainerInstance():load({ id = "container_instance_id", account_id = "account_id", application_id = "application_id" })
```

#### Example: List

```lua
local container_instances, err = client:ContainerInstance():list()
```


### DeployHook

Create an instance: `local deploy_hook = client:DeployHook(nil)`

#### Operations

| Method | Description |
| --- | --- |
| `create(data)` | Create a new entity with the given data. |
| `list(match)` | List entities matching the criteria. |
| `load(match)` | Load a single entity by match criteria. |
| `remove(match)` | Remove the matching entity. |
| `update(data)` | Update an existing entity. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `branch` | `string` | Git branch name. |
| `deploy_hook_name` | `string` | Deploy hook name (1-58 characters). |
| `errors` | `table` |  |
| `id` | `string` |  |
| `messages` | `table` |  |
| `result` | `table` |  |
| `result_info` | `table` |  |
| `success` | `boolean` |  |

#### Example: Load

```lua
local deploy_hook, err = client:DeployHook():load({ id = "deploy_hook_id", account_id = "account_id", worker_id = "worker_id" })
```

#### Example: List

```lua
local deploy_hooks, err = client:DeployHook():list()
```

#### Example: Create

```lua
local deploy_hook, err = client:DeployHook():create({
  id = "example_id", -- string
  branch = "example_branch", -- string
  deploy_hook_name = "example_deploy_hook_name", -- string
  errors = {}, -- table
  messages = {}, -- table
  result = {}, -- table
  success = true, -- boolean
})
```


### Deployment

Create an instance: `local deployment = client:Deployment(nil)`

#### Operations

| Method | Description |
| --- | --- |
| `remove(match)` | Remove the matching entity. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `id` | `string` |  |


### Destination

Create an instance: `local destination = client:Destination(nil)`

#### Operations

| Method | Description |
| --- | --- |
| `create(data)` | Create a new entity with the given data. |
| `list(match)` | List entities matching the criteria. |
| `remove(match)` | Remove the matching entity. |
| `update(data)` | Update an existing entity. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `configuration` | `table` |  |
| `enabled` | `boolean` |  |
| `errors` | `table` |  |
| `id` | `string` |  |
| `messages` | `table` |  |
| `name` | `string` |  |
| `result` | `table` |  |
| `skipPreflightCheck` | `boolean` |  |
| `success` | `boolean` |  |

#### Example: List

```lua
local destinations, err = client:Destination():list()
```

#### Example: Create

```lua
local destination, err = client:Destination():create({
  account_id = "example_account_id", -- string
  configuration = {}, -- table
  enabled = true, -- boolean
  errors = {}, -- table
  messages = {}, -- table
  name = "example_name", -- string
  result = {}, -- table
  success = true, -- boolean
})
```


### Domain

Create an instance: `local domain = client:Domain(nil)`

#### Operations

| Method | Description |
| --- | --- |
| `list(match)` | List entities matching the criteria. |
| `load(match)` | Load a single entity by match criteria. |
| `remove(match)` | Remove the matching entity. |
| `update(data)` | Update an existing entity. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `errors` | `table` |  |
| `id` | `string` |  |
| `messages` | `table` |  |
| `result` | `table` |  |
| `success` | `boolean` | Whether the API call was successful. |

#### Example: Load

```lua
local domain, err = client:Domain():load({ id = "domain_id", account_id = "account_id" })
```

#### Example: List

```lua
local domains, err = client:Domain():list()
```


### DurableObjectsNamespace

Create an instance: `local durable_objects_namespace = client:DurableObjectsNamespace(nil)`

#### Operations

| Method | Description |
| --- | --- |
| `create(data)` | Create a new entity with the given data. |
| `list(match)` | List entities matching the criteria. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `result` | `table` |  |
| `result_info` | `table` |  |

#### Example: List

```lua
local durable_objects_namespaces, err = client:DurableObjectsNamespace():list()
```

#### Example: Create

```lua
local durable_objects_namespace, err = client:DurableObjectsNamespace():create({
  account_id = "example_account_id", -- string
  namespace_id = "example_namespace_id", -- string
})
```


### EnvironmentVariable

Create an instance: `local environment_variable = client:EnvironmentVariable(nil)`

#### Operations

| Method | Description |
| --- | --- |
| `list(match)` | List entities matching the criteria. |
| `update(data)` | Update an existing entity. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `errors` | `table` |  |
| `messages` | `table` |  |
| `result` | `table` |  |
| `result_info` | `table` |  |
| `success` | `boolean` |  |

#### Example: List

```lua
local environment_variables, err = client:EnvironmentVariable():list()
```


### GitHubIntegration

Create an instance: `local git_hub_integration = client:GitHubIntegration(nil)`

#### Operations

| Method | Description |
| --- | --- |
| `list(match)` | List entities matching the criteria. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `errors` | `table` |  |
| `messages` | `table` |  |
| `result` | `table` |  |
| `result_info` | `table` |  |
| `success` | `boolean` |  |

#### Example: List

```lua
local git_hub_integrations, err = client:GitHubIntegration():list()
```


### Hyperdrive

Create an instance: `local hyperdrive = client:Hyperdrive(nil)`

#### Operations

| Method | Description |
| --- | --- |
| `create(data)` | Create a new entity with the given data. |
| `list(match)` | List entities matching the criteria. |
| `load(match)` | Load a single entity by match criteria. |
| `remove(match)` | Remove the matching entity. |
| `update(data)` | Update an existing entity. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `caching` | `table` |  |
| `created_on` | `string` | Defines the creation time of the Hyperdrive configuration. |
| `id` | `string` | Define configurations using a unique string identifier. |
| `modified_on` | `string` | Defines the last modified time of the Hyperdrive configuration. |
| `mtls` | `table` | mTLS configuration for the origin connection. |
| `name` | `string` | The name of the Hyperdrive configuration. |
| `origin` | `table` | Combines database connection fields with exactly one supported network location. |
| `origin_connection_limit` | `number` | The (soft) maximum number of connections the Hyperdrive is allowed to make to the origin database. |
| `restarted_on` | `string` | Defines the last time the Hyperdrive connection pool was explicitly restarted via the restart endpoint. |
| `result` | `table` |  |

#### Example: Load

```lua
local hyperdrive, err = client:Hyperdrive():load({ account_id = "account_id", hyperdrive_id = "hyperdrive_id" })
```

#### Example: List

```lua
local hyperdrives, err = client:Hyperdrive():list()
```

#### Example: Create

```lua
local hyperdrive, err = client:Hyperdrive():create({
  account_id = "example_account_id", -- string
  integration = "example_integration", -- string
  id = "example_id", -- string
  name = "example_name", -- string
  origin = {}, -- table
  result = {}, -- table
})
```


### ImageRegistry

Create an instance: `local image_registry = client:ImageRegistry(nil)`

#### Operations

| Method | Description |
| --- | --- |
| `create(data)` | Create a new entity with the given data. |
| `list(match)` | List entities matching the criteria. |
| `remove(match)` | Remove the matching entity. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `auth` | `table` | Credentials for authenticating to a private external image registry. |
| `domain` | `string` | Hostname of the private registry, without a scheme or image path. |
| `errors` | `table` |  |
| `expiration_minutes` | `number` | The number of minutes Cloudflare managed registry credentials stay valid. |
| `id` | `string` |  |
| `is_public` | `boolean` | Omit this field or set it to `false`. |
| `kind` | `any` | Registry provider. |
| `messages` | `table` |  |
| `permissions` | `table` | The permissions for Cloudflare managed registry credentials. |
| `result` | `table` |  |
| `success` | `boolean` | Whether the API call was successful. |

#### Example: List

```lua
local image_registrys, err = client:ImageRegistry():list()
```

#### Example: Create

```lua
local image_registry, err = client:ImageRegistry():create({
  account_id = "example_account_id", -- string
  auth = {}, -- table
  errors = {}, -- table
  kind = "example_kind", -- any
  messages = {}, -- table
  result = {}, -- table
  success = true, -- boolean
})
```


### Issue

Create an instance: `local issue = client:Issue(nil)`

#### Operations

| Method | Description |
| --- | --- |
| `create(data)` | Create a new entity with the given data. |
| `list(match)` | List entities matching the criteria. |
| `load(match)` | Load a single entity by match criteria. |
| `remove(match)` | Remove the matching entity. |
| `update(data)` | Update an existing entity. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `afterInactivitySeconds` | `number` |  |
| `afterOccurrences` | `number` |  |
| `enabled` | `boolean` |  |
| `errors` | `table` |  |
| `id` | `string` |  |
| `issueIds` | `table` |  |
| `messages` | `table` |  |
| `name` | `string` |  |
| `policyId` | `string` |  |
| `result` | `table` |  |
| `result_info` | `table` |  |
| `service` | `string` |  |
| `status` | `string` |  |
| `success` | `boolean` |  |
| `title` | `string` |  |

#### Example: Load

```lua
local issue, err = client:Issue():load({ id = "issue_id", account_id = "account_id" })
```

#### Example: List

```lua
local issues, err = client:Issue():list()
```

#### Example: Create

```lua
local issue, err = client:Issue():create({
  account_id = "example_account_id", -- string
  group_id = "example_group_id", -- string
  errors = {}, -- table
  issueIds = {}, -- table
  messages = {}, -- table
  policyId = "example_policyId", -- string
  result = {}, -- table
  result_info = {}, -- table
  success = true, -- boolean
})
```


### Key

Create an instance: `local key = client:Key(nil)`

#### Operations

| Method | Description |
| --- | --- |
| `create(data)` | Create a new entity with the given data. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `datasets` | `table` | Leave this empty to use the default datasets |
| `errors` | `table` |  |
| `filters` | `table` | Apply filters to narrow key discovery. |
| `from` | `number` |  |
| `keyNeedle` | `table` | If the user suggests a key, use this to narrow down the list of keys returned. |
| `limit` | `number` | Advanced usage: set limit=1000+ to retrieve comprehensive key options without needing additional filtering. |
| `messages` | `table` |  |
| `needle` | `table` | Search for a specific substring in any of the events |
| `result` | `table` |  |
| `success` | `boolean` |  |
| `to` | `number` |  |

#### Example: Create

```lua
local key, err = client:Key():create({
  account_id = "example_account_id", -- string
  errors = {}, -- table
  keyNeedle = {}, -- table
  messages = {}, -- table
  needle = {}, -- table
  result = {}, -- table
  success = true, -- boolean
})
```


### LiveTail

Create an instance: `local live_tail = client:LiveTail(nil)`

#### Operations

| Method | Description |
| --- | --- |
| `create(data)` | Create a new entity with the given data. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `errors` | `table` |  |
| `filterCombination` | `string` | Set a flag to describe how to combine the filters on the query. |
| `filters` | `table` | Apply filters to the query. |
| `messages` | `table` |  |
| `result` | `table` |  |
| `scriptId` | `string` |  |
| `success` | `boolean` |  |

#### Example: Create

```lua
local live_tail, err = client:LiveTail():create({
  account_id = "example_account_id", -- string
  errors = {}, -- table
  messages = {}, -- table
  result = {}, -- table
  success = true, -- boolean
})
```


### MetricsExport

Create an instance: `local metrics_export = client:MetricsExport(nil)`

#### Operations

| Method | Description |
| --- | --- |
| `create(data)` | Create a new entity with the given data. |
| `list(match)` | List entities matching the criteria. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `errors` | `table` |  |
| `messages` | `table` |  |
| `requester` | `table` |  |
| `resources` | `table` |  |
| `result` | `table` |  |
| `success` | `boolean` |  |

#### Example: List

```lua
local metrics_exports, err = client:MetricsExport():list()
```

#### Example: Create

```lua
local metrics_export, err = client:MetricsExport():create({
  account_id = "example_account_id", -- string
  errors = {}, -- table
  messages = {}, -- table
  requester = {}, -- table
  resources = {}, -- table
  result = {}, -- table
  success = true, -- boolean
})
```


### Namespace

Create an instance: `local namespace = client:Namespace(nil)`

#### Operations

| Method | Description |
| --- | --- |
| `remove(match)` | Remove the matching entity. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `id` | `string` |  |


### Preview

Create an instance: `local preview = client:Preview(nil)`

#### Operations

| Method | Description |
| --- | --- |
| `create(data)` | Create a new entity with the given data. |
| `list(match)` | List entities matching the criteria. |
| `load(match)` | Load a single entity by match criteria. |
| `remove(match)` | Remove the matching entity. |
| `update(data)` | Update an existing entity. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `errors` | `table` |  |
| `id` | `string` |  |
| `messages` | `table` |  |
| `result` | `table` |  |
| `success` | `boolean` | Whether the API call was successful. |

#### Example: Load

```lua
local preview, err = client:Preview():load({ id = "preview_id", account_id = "account_id", worker_id = "worker_id" })
```

#### Example: List

```lua
local previews, err = client:Preview():list()
```

#### Example: Create

```lua
local preview, err = client:Preview():create({
  account_id = "example_account_id", -- string
  worker_id = "example_worker_id", -- string
  errors = {}, -- table
  messages = {}, -- table
  result = {}, -- table
  success = true, -- boolean
})
```


### PreviewDeployment

Create an instance: `local preview_deployment = client:PreviewDeployment(nil)`

#### Operations

| Method | Description |
| --- | --- |
| `create(data)` | Create a new entity with the given data. |
| `list(match)` | List entities matching the criteria. |
| `load(match)` | Load a single entity by match criteria. |
| `update(data)` | Update an existing entity. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `errors` | `table` |  |
| `id` | `string` |  |
| `messages` | `table` |  |
| `result` | `any` |  |
| `success` | `boolean` | Whether the API call was successful. |

#### Example: Load

```lua
local preview_deployment, err = client:PreviewDeployment():load({ id = "preview_deployment_id", account_id = "account_id", preview_id = "preview_id", worker_id = "worker_id" })
```

#### Example: List

```lua
local preview_deployments, err = client:PreviewDeployment():list()
```

#### Example: Create

```lua
local preview_deployment, err = client:PreviewDeployment():create({
  account_id = "example_account_id", -- string
  id = "example_id", -- string
  worker_id = "example_worker_id", -- string
  errors = {}, -- table
  messages = {}, -- table
  result = "example_result", -- any
  success = true, -- boolean
})
```


### Query

Create an instance: `local query = client:Query(nil)`

#### Operations

| Method | Description |
| --- | --- |
| `create(data)` | Create a new entity with the given data. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `chart` | `boolean` | When true, includes time-series data in the response. |
| `chartType` | `string` | Controls the SQL shape and response payload for the 'calculations' view. |
| `compare` | `boolean` | When true, includes a comparison dataset from the previous time period of equal length. |
| `distributionScale` | `string` | Value-axis bucketing for chartType 'distribution'. |
| `dry` | `boolean` | When true, executes the query without persisting the results. |
| `errors` | `table` |  |
| `granularity` | `number` | Number of time-series buckets. |
| `ignoreSeries` | `boolean` | When true, omits time-series data from the response and returns only aggregated values. |
| `limit` | `number` | Maximum number of events to return when view is 'events'. |
| `messages` | `table` |  |
| `offset` | `string` | Cursor for pagination in event, trace, invocation, and agent views. |
| `offsetBy` | `number` | Numeric offset for paginating grouped/pattern results (top-N lists). |
| `offsetDirection` | `string` | Pagination direction: 'next' for forward, 'prev' for backward. |
| `parameters` | `table` | Query parameters defining what data to retrieve — filters, calculations, group-bys, and ordering. |
| `queryId` | `string` | Identifier for the query. |
| `result` | `table` | Complete results of a query run. |
| `success` | `boolean` |  |
| `timeframe` | `table` | Timeframe for the query using Unix timestamps in milliseconds. |
| `view` | `string` | Controls the shape of the response. |

#### Example: Create

```lua
local query, err = client:Query():create({
  account_id = "example_account_id", -- string
  errors = {}, -- table
  messages = {}, -- table
  queryId = "example_queryId", -- string
  result = {}, -- table
  success = true, -- boolean
  timeframe = {}, -- table
})
```


### RepositoryConnection

Create an instance: `local repository_connection = client:RepositoryConnection(nil)`

#### Operations

| Method | Description |
| --- | --- |
| `update(data)` | Update an existing entity. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `provider_account_id` | `string` | Provider-specific identifier of the account or namespace that owns the repository. |
| `provider_account_name` | `string` | Human-readable name of the account or namespace that owns the repository. |
| `provider_type` | `string` | Source control provider. |
| `repo_id` | `string` | Provider-specific repository identifier. |
| `repo_name` | `string` | Human-readable repository name. |


### Rollout

Create an instance: `local rollout = client:Rollout(nil)`

#### Operations

| Method | Description |
| --- | --- |
| `create(data)` | Create a new entity with the given data. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `description` | `string` | Description of the rollout process. |
| `kind` | `string` | Kind of the rollout process. |
| `percentage` | `number` | Initial target version percentage (0-100). |
| `step_percentage` | `number` | Percentage of rollout to increase in each step when "steps" is absent. |
| `steps` | `table` | Steps defining the rollout process, used when "step_percentage" is absent. |
| `strategy` | `string` | Strategy used for the rollout. |
| `target_configuration` | `table` | User-specified container configuration changes. |

#### Example: Create

```lua
local rollout, err = client:Rollout():create({
  account_id = "example_account_id", -- string
  application_id = "example_application_id", -- string
  description = "example_description", -- string
  strategy = "example_strategy", -- string
  target_configuration = {}, -- table
})
```


### SavedQuery

Create an instance: `local saved_query = client:SavedQuery(nil)`

#### Operations

| Method | Description |
| --- | --- |
| `create(data)` | Create a new entity with the given data. |
| `list(match)` | List entities matching the criteria. |
| `load(match)` | Load a single entity by match criteria. |
| `remove(match)` | Remove the matching entity. |
| `update(data)` | Update an existing entity. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `description` | `string` |  |
| `errors` | `table` |  |
| `id` | `string` |  |
| `messages` | `table` |  |
| `name` | `string` | Query name |
| `parameters` | `table` |  |
| `result` | `table` |  |
| `success` | `boolean` |  |

#### Example: Load

```lua
local saved_query, err = client:SavedQuery():load({ id = "saved_query_id", account_id = "account_id" })
```

#### Example: List

```lua
local saved_querys, err = client:SavedQuery():list()
```

#### Example: Create

```lua
local saved_query, err = client:SavedQuery():create({
  account_id = "example_account_id", -- string
  description = "example_description", -- string
  errors = {}, -- table
  messages = {}, -- table
  name = "example_name", -- string
  parameters = {}, -- table
  result = {}, -- table
  success = true, -- boolean
})
```


### Script

Create an instance: `local script = client:Script(nil)`

#### Operations

| Method | Description |
| --- | --- |
| `remove(match)` | Remove the matching entity. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `id` | `string` |  |


### ScriptSetting

Create an instance: `local script_setting = client:ScriptSetting(nil)`

#### Operations

| Method | Description |
| --- | --- |
| `list(match)` | List entities matching the criteria. |
| `update(data)` | Update an existing entity. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `errors` | `table` |  |
| `logpush` | `boolean` | Whether Logpush is turned on for the Worker. |
| `messages` | `table` |  |
| `observability` | `any` |  |
| `result` | `table` |  |
| `success` | `boolean` | Whether the API call was successful. |
| `tags` | `any` |  |
| `tail_consumers` | `table` | List of Workers that will consume logs from the attached Worker. |

#### Example: List

```lua
local script_settings, err = client:ScriptSetting():list()
```


### Secret

Create an instance: `local secret = client:Secret(nil)`

#### Operations

| Method | Description |
| --- | --- |
| `create(data)` | Create a new entity with the given data. |
| `list(match)` | List entities matching the criteria. |
| `load(match)` | Load a single entity by match criteria. |
| `remove(match)` | Remove the matching entity. |
| `update(data)` | Update an existing entity. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `comment` | `string` | Freeform text describing the secret. |
| `id` | `string` |  |
| `result` | `any` |  |
| `scopes` | `table` | The list of services that can use this secret. |
| `value` | `string` | The value of the secret. |

#### Example: Load

```lua
local secret, err = client:Secret():load({ id = "secret_id", account_id = "account_id", store_id = "store_id" })
```

#### Example: List

```lua
local secrets, err = client:Secret():list()
```

#### Example: Create

```lua
local secret, err = client:Secret():create({
  account_id = "example_account_id", -- string
  store_id = "example_store_id", -- string
  result = "example_result", -- any
})
```


### SecretsStoreDelete

Create an instance: `local secrets_store_delete = client:SecretsStoreDelete(nil)`

#### Operations

| Method | Description |
| --- | --- |
| `remove(match)` | Remove the matching entity. |


### SecretsStoreQuota

Create an instance: `local secrets_store_quota = client:SecretsStoreQuota(nil)`

#### Operations

| Method | Description |
| --- | --- |
| `load(match)` | Load a single entity by match criteria. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `result` | `any` |  |

#### Example: Load

```lua
local secrets_store_quota, err = client:SecretsStoreQuota():load({ account_id = "account_id" })
```


### SecretsStoreSecret

Create an instance: `local secrets_store_secret = client:SecretsStoreSecret(nil)`

#### Operations

| Method | Description |
| --- | --- |
| `create(data)` | Create a new entity with the given data. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `comment` | `string` | Freeform text describing the secret. |
| `name` | `string` | The name of the secret. |
| `scopes` | `table` | The list of services that can use this secret. |

#### Example: Create

```lua
local secrets_store_secret, err = client:SecretsStoreSecret():create({
  account_id = "example_account_id", -- string
  secret_id = "example_secret_id", -- string
  store_id = "example_store_id", -- string
  name = "example_name", -- string
  scopes = {}, -- table
})
```


### SecretsStoreStore

Create an instance: `local secrets_store_store = client:SecretsStoreStore(nil)`

#### Operations

| Method | Description |
| --- | --- |
| `create(data)` | Create a new entity with the given data. |
| `load(match)` | Load a single entity by match criteria. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `id` | `string` |  |
| `name` | `string` | The name of the store. |
| `result` | `any` |  |

#### Example: Load

```lua
local secrets_store_store, err = client:SecretsStoreStore():load({ id = "secrets_store_store_id", account_id = "account_id" })
```

#### Example: Create

```lua
local secrets_store_store, err = client:SecretsStoreStore():create({
  account_id = "example_account_id", -- string
  name = "example_name", -- string
  result = "example_result", -- any
})
```


### SecretsStoreStoresResponseCollection

Create an instance: `local secrets_store_stores_response_collection = client:SecretsStoreStoresResponseCollection(nil)`

#### Operations

| Method | Description |
| --- | --- |
| `list(match)` | List entities matching the criteria. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `result` | `table` |  |

#### Example: List

```lua
local secrets_store_stores_response_collections, err = client:SecretsStoreStoresResponseCollection():list()
```


### Setting

Create an instance: `local setting = client:Setting(nil)`

#### Operations

| Method | Description |
| --- | --- |
| `list(match)` | List entities matching the criteria. |
| `update(data)` | Update an existing entity. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `errors` | `table` |  |
| `messages` | `table` |  |
| `result` | `table` |  |
| `success` | `boolean` | Whether the API call was successful. |

#### Example: List

```lua
local settings, err = client:Setting():list()
```


### Shared

Create an instance: `local shared = client:Shared(nil)`

#### Operations

| Method | Description |
| --- | --- |
| `create(data)` | Create a new entity with the given data. |
| `load(match)` | Load a single entity by match criteria. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `errors` | `table` |  |
| `id` | `string` |  |
| `messages` | `table` |  |
| `result` | `table` | Complete results of a query run. |
| `success` | `boolean` |  |

#### Example: Load

```lua
local shared, err = client:Shared():load({ id = "shared_id", account_id = "account_id" })
```

#### Example: Create

```lua
local shared, err = client:Shared():create({
  account_id = "example_account_id", -- string
  errors = {}, -- table
  messages = {}, -- table
  result = {}, -- table
  success = true, -- boolean
})
```


### Tail

Create an instance: `local tail = client:Tail(nil)`

#### Operations

| Method | Description |
| --- | --- |
| `remove(match)` | Remove the matching entity. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `id` | `string` |  |


### Token

Create an instance: `local token = client:Token(nil)`

#### Operations

| Method | Description |
| --- | --- |
| `remove(match)` | Remove the matching entity. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `id` | `string` |  |


### Trigger

Create an instance: `local trigger = client:Trigger(nil)`

#### Operations

| Method | Description |
| --- | --- |
| `create(data)` | Create a new entity with the given data. |
| `remove(match)` | Remove the matching entity. |
| `update(data)` | Update an existing entity. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `branch_excludes` | `table` | Branch patterns that must not start builds. |
| `branch_includes` | `table` | Branch patterns that can start builds. |
| `build_caching_enabled` | `boolean` | Whether builds reuse cached dependencies and build artifacts. |
| `build_command` | `string` | Command to build the Worker. |
| `build_token_uuid` | `string` | UUID of the build token used when deploying the Worker. |
| `deploy_command` | `string` | Command to deploy the Worker. |
| `external_script_id` | `string` | System-generated tag of the Worker. |
| `id` | `string` |  |
| `path_excludes` | `table` | Path patterns that must not start builds. |
| `path_includes` | `table` | Path patterns that can start builds. |
| `repo_connection_uuid` | `string` | Repository connection UUID. |
| `root_directory` | `string` | Repository directory in which build and deploy commands run. |
| `trigger_name` | `string` | Human-readable name of the build trigger. |

#### Example: Create

```lua
local trigger, err = client:Trigger():create({
  account_id = "example_account_id", -- string
  branch_excludes = {}, -- table
  branch_includes = {}, -- table
  build_command = "example_build_command", -- string
  build_token_uuid = "example_build_token_uuid", -- string
  deploy_command = "example_deploy_command", -- string
  external_script_id = "example_external_script_id", -- string
  path_excludes = {}, -- table
  path_includes = {}, -- table
  repo_connection_uuid = "example_repo_connection_uuid", -- string
  root_directory = "example_root_directory", -- string
  trigger_name = "example_trigger_name", -- string
})
```


### Usage

Create an instance: `local usage = client:Usage(nil)`

#### Operations

| Method | Description |
| --- | --- |
| `list(match)` | List entities matching the criteria. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `errors` | `table` |  |
| `messages` | `table` |  |
| `result` | `table` |  |
| `success` | `boolean` |  |

#### Example: List

```lua
local usages, err = client:Usage():list()
```


### Value

Create an instance: `local value = client:Value(nil)`

#### Operations

| Method | Description |
| --- | --- |
| `create(data)` | Create a new entity with the given data. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `datasets` | `table` | Leave this empty to use the default datasets |
| `errors` | `table` |  |
| `filters` | `table` | Apply filters before listing values. |
| `key` | `string` |  |
| `limit` | `number` |  |
| `messages` | `table` |  |
| `needle` | `table` | Full-text search expression to match events containing the specified text or pattern. |
| `result` | `table` |  |
| `success` | `boolean` |  |
| `timeframe` | `table` |  |
| `type` | `string` |  |

#### Example: Create

```lua
local value, err = client:Value():create({
  account_id = "example_account_id", -- string
  datasets = {}, -- table
  errors = {}, -- table
  key = "example_key", -- string
  messages = {}, -- table
  needle = {}, -- table
  result = {}, -- table
  success = true, -- boolean
  timeframe = {}, -- table
  type = "example_type", -- string
})
```


### Version

Create an instance: `local version = client:Version(nil)`

#### Operations

| Method | Description |
| --- | --- |
| `create(data)` | Create a new entity with the given data. |
| `list(match)` | List entities matching the criteria. |
| `load(match)` | Load a single entity by match criteria. |
| `remove(match)` | Remove the matching entity. |
| `update(data)` | Update an existing entity. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `annotations` | `table` | Metadata about the version. |
| `assets` | `table` | Configuration for assets within a Worker. |
| `author_email` | `string` | Email of the user who created the version. |
| `author_id` | `string` | Identifier of the user who created the version. |
| `bindings` | `table` | List of bindings attached to a Worker. |
| `cache_options` | `table` | Global CacheW configuration for the Worker. |
| `compatibility_date` | `string` | Date indicating targeted support in the Workers runtime. |
| `compatibility_flags` | `table` | Flags that enable or disable certain features in the Workers runtime. |
| `containers` | `table` | List of containers attached to a Worker. |
| `created_on` | `string` | When the version was created. |
| `errors` | `table` |  |
| `exports` | `any` | Declarative exports for the version, including Durable Object classes (with their `storage` backend) and named Worker entrypoints. |
| `exports_reconciliation` | `any` | Summary of the declarative exports reconciliation that ran on this upload. |
| `id` | `string` | Version identifier. |
| `limits` | `table` | Resource limits enforced at runtime. |
| `main_module` | `string` | The name of the main module in the `modules` array (e.g. |
| `messages` | `table` |  |
| `migration_tag` | `string` | Durable Object migration tag. |
| `migrations` | `any` | Migrations for Durable Objects associated with the version. |
| `modules` | `table` | Code, sourcemaps, and other content used at runtime. |
| `number` | `number` | The integer version number, starting from one. |
| `package_dependencies` | `table` | The list of npm packages that were installed and used when this Worker version was built. |
| `placement` | `table` | Configuration for [Smart Placement](https://developers.cloudflare.com/workers/configuration/smart-placement). |
| `result` | `table` |  |
| `source` | `string` | The client used to create the version. |
| `startup_time_ms` | `number` | Time in milliseconds spent on [Worker startup](https://developers.cloudflare.com/workers/platform/limits/#worker-startup-time). |
| `success` | `boolean` | Whether the API call was successful. |
| `urls` | `table` | All routable URLs that always point to this version. |
| `usage_model` | `string` | Usage model for the version. |

#### Example: Load

```lua
local version, err = client:Version():load({ id = "version_id", account_id = "account_id", worker_id = "worker_id" })
```

#### Example: List

```lua
local versions, err = client:Version():list()
```

#### Example: Create

```lua
local version, err = client:Version():create({
  account_id = "example_account_id", -- string
  worker_id = "example_worker_id", -- string
  cache_options = {}, -- table
  created_on = "example_created_on", -- string
  errors = {}, -- table
  id = "example_id", -- string
  messages = {}, -- table
  number = 1, -- number
  result = {}, -- table
  success = true, -- boolean
  urls = {}, -- table
})
```


### Worker

Create an instance: `local worker = client:Worker(nil)`

#### Operations

| Method | Description |
| --- | --- |
| `create(data)` | Create a new entity with the given data. |
| `list(match)` | List entities matching the criteria. |
| `load(match)` | Load a single entity by match criteria. |
| `remove(match)` | Remove the matching entity. |
| `update(data)` | Update an existing entity. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `auto_build` | `boolean` | Whether pushes to the git branch build this Preview. |
| `auto_delete` | `boolean` | Whether deleting the git branch also deletes this Preview. |
| `branch` | `any` | Git branch name (required if commit_hash not provided) |
| `commit_hash` | `any` | Git commit hash (required if branch not provided) |
| `errors` | `table` |  |
| `git_repository` | `any` | Git repository settings to update |
| `id` | `string` |  |
| `messages` | `table` |  |
| `previews_base_config` | `table` | Build and deploy settings when creating a Worker build configuration |
| `previews_enabled` | `boolean` | Whether Previews are enabled for this Worker |
| `production_settings` | `table` | Build and deploy settings when creating a Worker build configuration |
| `result` | `table` | A single Preview of a Worker, with the build settings it currently uses. |
| `result_info` | `table` |  |
| `script_tag` | `string` | System-generated tag of the Worker. |
| `seed_repo` | `any` | Optional repository and file overrides used to seed this build. |
| `settings` | `table` | Partial build settings for updating a Worker build configuration |
| `success` | `boolean` | Whether the API call was successful. |

#### Example: Load

```lua
local worker, err = client:Worker():load({ id = "worker_id", account_id = "account_id" })
```

#### Example: List

```lua
local workers, err = client:Worker():list()
```

#### Example: Create

```lua
local worker, err = client:Worker():create({
  account_id = "example_account_id", -- string
  errors = {}, -- table
  git_repository = "example_git_repository", -- any
  messages = {}, -- table
  previews_base_config = {}, -- table
  previews_enabled = true, -- boolean
  production_settings = {}, -- table
  result = {}, -- table
  script_tag = "example_script_tag", -- string
  success = true, -- boolean
})
```


### WorkerCronTrigger

Create an instance: `local worker_cron_trigger = client:WorkerCronTrigger(nil)`

#### Operations

| Method | Description |
| --- | --- |
| `list(match)` | List entities matching the criteria. |
| `update(data)` | Update an existing entity. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `errors` | `table` |  |
| `messages` | `table` |  |
| `result` | `table` |  |
| `success` | `boolean` | Whether the API call was successful. |

#### Example: List

```lua
local worker_cron_triggers, err = client:WorkerCronTrigger():list()
```


### WorkerDeployment

Create an instance: `local worker_deployment = client:WorkerDeployment(nil)`

#### Operations

| Method | Description |
| --- | --- |
| `create(data)` | Create a new entity with the given data. |
| `load(match)` | Load a single entity by match criteria. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `annotations` | `table` |  |
| `author_email` | `string` |  |
| `created_on` | `string` |  |
| `errors` | `table` |  |
| `id` | `string` |  |
| `messages` | `table` |  |
| `result` | `table` |  |
| `source` | `string` |  |
| `strategy` | `string` |  |
| `success` | `boolean` | Whether the API call was successful. |
| `versions` | `table` | Worker versions included in this deployment. |

#### Example: Load

```lua
local worker_deployment, err = client:WorkerDeployment():load({ id = "worker_deployment_id", account_id = "account_id" })
```

#### Example: Create

```lua
local worker_deployment, err = client:WorkerDeployment():create({
  account_id = "example_account_id", -- string
  script_name = "example_script_name", -- string
  created_on = "example_created_on", -- string
  errors = {}, -- table
  id = "example_id", -- string
  messages = {}, -- table
  result = {}, -- table
  source = "example_source", -- string
  strategy = "example_strategy", -- string
  success = true, -- boolean
  versions = {}, -- table
})
```


### WorkerEnvironment

Create an instance: `local worker_environment = client:WorkerEnvironment(nil)`

#### Operations

| Method | Description |
| --- | --- |
| `load(match)` | Load a single entity by match criteria. |

#### Example: Load

```lua
local worker_environment, err = client:WorkerEnvironment():load({ account_id = "account_id", environment_name = "environment_name", service_id = "service_id" })
```


### WorkerRoute

Create an instance: `local worker_route = client:WorkerRoute(nil)`

#### Operations

| Method | Description |
| --- | --- |
| `create(data)` | Create a new entity with the given data. |
| `list(match)` | List entities matching the criteria. |
| `load(match)` | Load a single entity by match criteria. |
| `remove(match)` | Remove the matching entity. |
| `update(data)` | Update an existing entity. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `errors` | `table` |  |
| `id` | `string` |  |
| `messages` | `table` |  |
| `pattern` | `string` | Pattern to match incoming requests against. |
| `result` | `table` |  |
| `script` | `string` | Name of the script to run if the route matches. |
| `success` | `boolean` | Whether the API call was successful. |

#### Example: Load

```lua
local worker_route, err = client:WorkerRoute():load({ id = "worker_route_id", zone_id = "zone_id" })
```

#### Example: List

```lua
local worker_routes, err = client:WorkerRoute():list()
```

#### Example: Create

```lua
local worker_route, err = client:WorkerRoute():create({
  zone_id = "example_zone_id", -- string
  errors = {}, -- table
  id = "example_id", -- string
  messages = {}, -- table
  pattern = "example_pattern", -- string
  result = {}, -- table
  success = true, -- boolean
})
```


### WorkerScript

Create an instance: `local worker_script = client:WorkerScript(nil)`

#### Operations

| Method | Description |
| --- | --- |
| `create(data)` | Create a new entity with the given data. |
| `list(match)` | List entities matching the criteria. |
| `load(match)` | Load a single entity by match criteria. |
| `remove(match)` | Remove the matching entity. |
| `update(data)` | Update an existing entity. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `errors` | `table` |  |
| `id` | `string` |  |
| `messages` | `table` |  |
| `result` | `table` | A secret value accessible through a binding. |
| `success` | `boolean` | Whether the API call was successful. |

#### Example: Load

```lua
local worker_script, err = client:WorkerScript():load({ id = "worker_script_id", account_id = "account_id" })
```

#### Example: List

```lua
local worker_scripts, err = client:WorkerScript():list()
```

#### Example: Create

```lua
local worker_script, err = client:WorkerScript():create({
  account_id = "example_account_id", -- string
  script_name = "example_script_name", -- string
  errors = {}, -- table
  messages = {}, -- table
  success = true, -- boolean
})
```


### WorkerSubdomain

Create an instance: `local worker_subdomain = client:WorkerSubdomain(nil)`

#### Operations

| Method | Description |
| --- | --- |
| `list(match)` | List entities matching the criteria. |
| `remove(match)` | Remove the matching entity. |
| `update(data)` | Update an existing entity. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `errors` | `table` |  |
| `messages` | `table` |  |
| `result` | `table` |  |
| `subdomain` | `string` |  |
| `success` | `boolean` | Whether the API call was successful. |

#### Example: List

```lua
local worker_subdomains, err = client:WorkerSubdomain():list()
```


### WorkerTailLog

Create an instance: `local worker_tail_log = client:WorkerTailLog(nil)`

#### Operations

| Method | Description |
| --- | --- |
| `create(data)` | Create a new entity with the given data. |
| `list(match)` | List entities matching the criteria. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `errors` | `table` |  |
| `messages` | `table` |  |
| `result` | `table` |  |
| `success` | `boolean` | Whether the API call was successful. |

#### Example: List

```lua
local worker_tail_logs, err = client:WorkerTailLog():list()
```

#### Example: Create

```lua
local worker_tail_log, err = client:WorkerTailLog():create({
  account_id = "example_account_id", -- string
  script_name = "example_script_name", -- string
  errors = {}, -- table
  messages = {}, -- table
  result = {}, -- table
  success = true, -- boolean
})
```


### WorkersAccountSetting

Create an instance: `local workers_account_setting = client:WorkersAccountSetting(nil)`

#### Operations

| Method | Description |
| --- | --- |
| `list(match)` | List entities matching the criteria. |
| `update(data)` | Update an existing entity. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `default_usage_model` | `string` |  |
| `errors` | `table` |  |
| `green_compute` | `boolean` |  |
| `messages` | `table` |  |
| `result` | `table` |  |
| `success` | `boolean` | Whether the API call was successful. |

#### Example: List

```lua
local workers_account_settings, err = client:WorkersAccountSetting():list()
```


### WorkersApiResponseNullResult

Create an instance: `local workers_api_response_null_result = client:WorkersApiResponseNullResult(nil)`

#### Operations

| Method | Description |
| --- | --- |
| `remove(match)` | Remove the matching entity. |
| `update(data)` | Update an existing entity. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `errors` | `table` |  |
| `messages` | `table` |  |
| `result` | `table` |  |
| `success` | `boolean` | Whether the API call was successful. |


### WorkersCompletedUploadAsset

Create an instance: `local workers_completed_upload_asset = client:WorkersCompletedUploadAsset(nil)`

#### Operations

| Method | Description |
| --- | --- |
| `create(data)` | Create a new entity with the given data. |

#### Example: Create

```lua
local workers_completed_upload_asset, err = client:WorkersCompletedUploadAsset():create({
  account_id = "example_account_id", -- string
  base64 = true, -- boolean
})
```


### WorkersCreateAssetsUploadSession

Create an instance: `local workers_create_assets_upload_session = client:WorkersCreateAssetsUploadSession(nil)`

#### Operations

| Method | Description |
| --- | --- |
| `create(data)` | Create a new entity with the given data. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `manifest` | `table` | A manifest ([path]: {hash, size}) map of files to upload. |

#### Example: Create

```lua
local workers_create_assets_upload_session, err = client:WorkersCreateAssetsUploadSession():create({
  account_id = "example_account_id", -- string
  script_name = "example_script_name", -- string
  manifest = {}, -- table
})
```


### WorkersForPlatform

Create an instance: `local workers_for_platform = client:WorkersForPlatform(nil)`

#### Operations

| Method | Description |
| --- | --- |
| `list(match)` | List entities matching the criteria. |
| `load(match)` | Load a single entity by match criteria. |
| `update(data)` | Update an existing entity. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `errors` | `table` |  |
| `messages` | `table` |  |
| `result` | `table` | A secret value accessible through a binding. |
| `success` | `boolean` | Whether the API call was successful. |

#### Example: Load

```lua
local workers_for_platform, err = client:WorkersForPlatform():load({ account_id = "account_id", namespace_id = "namespace_id" })
```

#### Example: List

```lua
local workers_for_platforms, err = client:WorkersForPlatform():list()
```


### WorkersKvApiResponseCommonNoResult

Create an instance: `local workers_kv_api_response_common_no_result = client:WorkersKvApiResponseCommonNoResult(nil)`

#### Operations

| Method | Description |
| --- | --- |
| `remove(match)` | Remove the matching entity. |
| `update(data)` | Update an existing entity. |


### WorkersKvNamespace

Create an instance: `local workers_kv_namespace = client:WorkersKvNamespace(nil)`

#### Operations

| Method | Description |
| --- | --- |
| `create(data)` | Create a new entity with the given data. |
| `list(match)` | List entities matching the criteria. |
| `load(match)` | Load a single entity by match criteria. |
| `remove(match)` | Remove the matching entity. |
| `update(data)` | Update an existing entity. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `errors` | `table` |  |
| `id` | `string` |  |
| `jurisdiction` | `string` | Specify the jurisdiction to restrict the KV namespace to durably store data within. |
| `keys` | `table` | Array of keys to retrieve (maximum of 100). |
| `messages` | `table` |  |
| `result` | `any` |  |
| `result_info` | `table` |  |
| `success` | `boolean` | Whether the API call was successful. |
| `title` | `string` | Human-readable string name for a Workers KV namespace. |
| `type` | `string` | Return values as strings with `text`, or parse stored JSON values with `json`. |
| `withMetadata` | `boolean` | Whether to include metadata in the response. |

#### Example: Load

```lua
local workers_kv_namespace, err = client:WorkersKvNamespace():load({ id = "workers_kv_namespace_id", account_id = "account_id" })
```

#### Example: List

```lua
local workers_kv_namespaces, err = client:WorkersKvNamespace():list()
```

#### Example: Create

```lua
local workers_kv_namespace, err = client:WorkersKvNamespace():create({
  account_id = "example_account_id", -- string
  errors = {}, -- table
  keys = {}, -- table
  messages = {}, -- table
  success = true, -- boolean
  title = "example_title", -- string
})
```


### WorkersNamespaceList

Create an instance: `local workers_namespace_list = client:WorkersNamespaceList(nil)`

#### Operations

| Method | Description |
| --- | --- |
| `list(match)` | List entities matching the criteria. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `errors` | `table` |  |
| `messages` | `table` |  |
| `result` | `table` |  |
| `success` | `boolean` | Whether the API call was successful. |

#### Example: List

```lua
local workers_namespace_lists, err = client:WorkersNamespaceList():list()
```


### WorkersNamespaceScriptDeleteBulk

Create an instance: `local workers_namespace_script_delete_bulk = client:WorkersNamespaceScriptDeleteBulk(nil)`

#### Operations

| Method | Description |
| --- | --- |
| `remove(match)` | Remove the matching entity. |


### WorkersNamespaceScriptResponseSingle

Create an instance: `local workers_namespace_script_response_single = client:WorkersNamespaceScriptResponseSingle(nil)`

#### Operations

| Method | Description |
| --- | --- |
| `load(match)` | Load a single entity by match criteria. |
| `update(data)` | Update an existing entity. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `errors` | `table` |  |
| `messages` | `table` |  |
| `result` | `table` | Details about a worker uploaded to a Workers for Platforms namespace. |
| `success` | `boolean` | Whether the API call was successful. |

#### Example: Load

```lua
local workers_namespace_script_response_single, err = client:WorkersNamespaceScriptResponseSingle():load({ account_id = "account_id", namespace_id = "namespace_id", script_name = "script_name" })
```


### WorkersNamespaceSingle

Create an instance: `local workers_namespace_single = client:WorkersNamespaceSingle(nil)`

#### Operations

| Method | Description |
| --- | --- |
| `create(data)` | Create a new entity with the given data. |
| `load(match)` | Load a single entity by match criteria. |
| `update(data)` | Update an existing entity. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `errors` | `table` |  |
| `messages` | `table` |  |
| `name` | `string` | The name of the dispatch namespace. |
| `result` | `table` |  |
| `success` | `boolean` | Whether the API call was successful. |
| `trusted_workers` | `boolean` | Whether the Workers in the namespace are executed in a "trusted" manner. |

#### Example: Load

```lua
local workers_namespace_single, err = client:WorkersNamespaceSingle():load({ account_id = "account_id", dispatch_namespace = "dispatch_namespace" })
```

#### Example: Create

```lua
local workers_namespace_single, err = client:WorkersNamespaceSingle():create({
  account_id = "example_account_id", -- string
  errors = {}, -- table
  messages = {}, -- table
  success = true, -- boolean
})
```


### WorkersPipelinesOther

Create an instance: `local workers_pipelines_other = client:WorkersPipelinesOther(nil)`

#### Operations

| Method | Description |
| --- | --- |
| `create(data)` | Create a new entity with the given data. |
| `list(match)` | List entities matching the criteria. |
| `load(match)` | Load a single entity by match criteria. |
| `remove(match)` | Remove the matching entity. |
| `update(data)` | Update an existing entity. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `config` | `any` | Defines the configuration of the R2 Sink. |
| `created_at` | `string` |  |
| `destination` | `table` |  |
| `endpoint` | `string` | Indicates the endpoint URL to send traffic. |
| `failure_reason` | `string` | Indicates the reason for the failure of the Pipeline. |
| `format` | `any` | Defines the output data format of a sink. |
| `graph` | `table` | Indicates the processing flow to implement the SQL. |
| `http` | `table` |  |
| `id` | `string` | Indicates a unique identifier for this pipeline. |
| `modified_at` | `string` |  |
| `name` | `string` | Indicates the name of the Pipeline. |
| `schema` | `table` | Defines the schema of the events in the data stream. |
| `source` | `table` |  |
| `sql` | `string` | Specifies SQL for the Pipeline processing flow. |
| `status` | `string` | Indicates the current status of the Pipeline. |
| `tables` | `table` | List of streams and sinks used by this pipeline. |
| `type` | `string` | Specifies the type of sink. |
| `version` | `number` | Indicates the version number of last saved configuration. |
| `worker_binding` | `table` |  |

#### Example: Load

```lua
local workers_pipelines_other, err = client:WorkersPipelinesOther():load({ account_id = "account_id" })
```

#### Example: List

```lua
local workers_pipelines_others, err = client:WorkersPipelinesOther():list()
```

#### Example: Create

```lua
local workers_pipelines_other, err = client:WorkersPipelinesOther():create({
  account_id = "example_account_id", -- string
  created_at = "example_created_at", -- string
  destination = {}, -- table
  endpoint = "example_endpoint", -- string
  graph = {}, -- table
  http = {}, -- table
  id = "example_id", -- string
  modified_at = "example_modified_at", -- string
  name = "example_name", -- string
  source = {}, -- table
  sql = "example_sql", -- string
  status = "example_status", -- string
  tables = {}, -- table
  type = "example_type", -- string
  version = 1, -- number
  worker_binding = {}, -- table
})
```


### WorkersScriptAndVersionSetting

Create an instance: `local workers_script_and_version_setting = client:WorkersScriptAndVersionSetting(nil)`

#### Operations

| Method | Description |
| --- | --- |
| `list(match)` | List entities matching the criteria. |
| `update(data)` | Update an existing entity. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `errors` | `table` |  |
| `messages` | `table` |  |
| `result` | `table` |  |
| `success` | `boolean` | Whether the API call was successful. |

#### Example: List

```lua
local workers_script_and_version_settings, err = client:WorkersScriptAndVersionSetting():list()
```


### WorkersScriptResponseCollection

Create an instance: `local workers_script_response_collection = client:WorkersScriptResponseCollection(nil)`

#### Operations

| Method | Description |
| --- | --- |
| `list(match)` | List entities matching the criteria. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `errors` | `table` |  |
| `messages` | `table` |  |
| `result` | `table` |  |
| `success` | `boolean` | Whether the API call was successful. |

#### Example: List

```lua
local workers_script_response_collections, err = client:WorkersScriptResponseCollection():list()
```


### WorkersScriptResponseSingle

Create an instance: `local workers_script_response_single = client:WorkersScriptResponseSingle(nil)`

#### Operations

| Method | Description |
| --- | --- |
| `update(data)` | Update an existing entity. |


### WorkersSmartPlacement

Create an instance: `local workers_smart_placement = client:WorkersSmartPlacement(nil)`

#### Operations

| Method | Description |
| --- | --- |
| `list(match)` | List entities matching the criteria. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `errors` | `table` |  |
| `messages` | `table` |  |
| `result` | `table` |  |
| `success` | `boolean` | Whether the API call was successful. |

#### Example: List

```lua
local workers_smart_placements, err = client:WorkersSmartPlacement():list()
```


### WorkersUsageModel

Create an instance: `local workers_usage_model = client:WorkersUsageModel(nil)`

#### Operations

| Method | Description |
| --- | --- |
| `list(match)` | List entities matching the criteria. |
| `update(data)` | Update an existing entity. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `errors` | `table` |  |
| `messages` | `table` |  |
| `result` | `table` |  |
| `success` | `boolean` | Whether the API call was successful. |
| `usage_model` | `string` | Usage model for the Worker invocations. |
| `user_limits` | `table` | User-defined resource limits for Workers with standard usage model. |

#### Example: List

```lua
local workers_usage_models, err = client:WorkersUsageModel():list()
```


### WorkersVersionsList

Create an instance: `local workers_versions_list = client:WorkersVersionsList(nil)`

#### Operations

| Method | Description |
| --- | --- |
| `list(match)` | List entities matching the criteria. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `errors` | `table` |  |
| `messages` | `table` |  |
| `result` | `table` |  |
| `success` | `boolean` | Whether the API call was successful. |

#### Example: List

```lua
local workers_versions_lists, err = client:WorkersVersionsList():list()
```


### WorkersVersionsSingle

Create an instance: `local workers_versions_single = client:WorkersVersionsSingle(nil)`

#### Operations

| Method | Description |
| --- | --- |
| `load(match)` | Load a single entity by match criteria. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `errors` | `table` |  |
| `messages` | `table` |  |
| `result` | `any` |  |
| `success` | `boolean` | Whether the API call was successful. |

#### Example: Load

```lua
local workers_versions_single, err = client:WorkersVersionsSingle():load({ account_id = "account_id", script_id = "script_id", version_id = "version_id" })
```


### WorkersVersionsUpload

Create an instance: `local workers_versions_upload = client:WorkersVersionsUpload(nil)`

#### Operations

| Method | Description |
| --- | --- |
| `create(data)` | Create a new entity with the given data. |

#### Example: Create

```lua
local workers_versions_upload, err = client:WorkersVersionsUpload():create({
  account_id = "example_account_id", -- string
  script_name = "example_script_name", -- string
})
```


### Workflow

Create an instance: `local workflow = client:Workflow(nil)`

#### Operations

| Method | Description |
| --- | --- |
| `create(data)` | Create a new entity with the given data. |
| `list(match)` | List entities matching the criteria. |
| `load(match)` | Load a single entity by match criteria. |
| `remove(match)` | Remove the matching entity. |
| `update(data)` | Update an existing entity. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `class_name` | `string` |  |
| `concurrency` | `table` |  |
| `default_retention` | `table` | Default retention applied to instances of this version when they do not set their own retention. |
| `errors` | `table` |  |
| `id` | `string` |  |
| `instances` | `table` |  |
| `limits` | `table` |  |
| `messages` | `table` |  |
| `result` | `table` |  |
| `result_info` | `table` |  |
| `schedules` | `table` |  |
| `script_name` | `string` |  |
| `success` | `boolean` |  |

#### Example: Load

```lua
local workflow, err = client:Workflow():load({ id = "workflow_id", account_id = "account_id" })
```

#### Example: List

```lua
local workflows, err = client:Workflow():list()
```

#### Example: Create

```lua
local workflow, err = client:Workflow():create({
  account_id = "example_account_id", -- string
  workflow_id = "example_workflow_id", -- string
  class_name = "example_class_name", -- string
  errors = {}, -- table
  instances = {}, -- table
  messages = {}, -- table
  result = {}, -- table
  result_info = {}, -- table
  script_name = "example_script_name", -- string
  success = true, -- boolean
})
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

Features are the extension mechanism. A feature is a Lua table
with hook methods named after pipeline stages (e.g. `PrePoint`,
`PreSpec`). Each method receives the context.

The SDK ships with built-in features:

- **TestFeature**: Test transport

Features are initialized in order. Hooks fire in the order features
were added, so later features can override earlier ones.

### Data as tables

The Lua SDK uses plain Lua tables throughout rather than typed
objects. This mirrors the dynamic nature of the API and keeps the
SDK flexible — no code generation is needed when the API schema
changes.

Use `helpers.to_map()` to safely validate that a value is a table.

### Module structure

```
lua/
├── cloudflare-workers_sdk.lua    -- Main SDK module
├── config.lua               -- Configuration
├── schema.lua               -- Generated option + entity specs
├── features.lua             -- Feature factory
├── core/                    -- Core types and context
├── entity/                  -- Entity implementations
├── feature/                 -- Built-in features (Base, Test, Log)
├── utility/                 -- Utility functions and struct library
└── test/                    -- Test suites
```

The main module (`cloudflare-workers_sdk`) exports the SDK constructor
and test helper. Import entity or utility modules directly only
when needed.

### Entity state

Entity instances are stateful. After a successful `list`, the entity
stores the returned data and match criteria internally.

```lua
local workersubdomain = client:WorkerSubdomain()
workersubdomain:list()

-- workersubdomain:data_get() now returns the workersubdomain data from the last list
-- workersubdomain:match_get() returns the last match criteria
```

Call `make()` to create a fresh instance with the same configuration
but no stored state.

### Direct vs entity access

The entity interface handles URL construction, parameter placement,
and response parsing automatically. Use it for standard CRUD operations.

`direct()` gives full control over the HTTP request. Use it for
non-standard endpoints, bulk operations, or any path not modelled as
an entity. `prepare()` builds the request without sending it — useful
for debugging or custom transport.


## Full Reference

See [REFERENCE.md](REFERENCE.md) for complete API reference
documentation including all method signatures, entity field schemas,
and detailed usage examples.
