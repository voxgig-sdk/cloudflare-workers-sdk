# CloudflareWorkers Ruby SDK



The Ruby SDK for the CloudflareWorkers API — an entity-oriented client using idiomatic Ruby conventions.

The SDK exposes the API as capitalised, semantic **Entities** — for example `client.Account` — with named operations (`list`/`load`/`create`/`update`/`remove`/`patch`) instead of raw URL paths and query strings. Working with resources and verbs keeps call sites self-describing and reduces cognitive load.

> Other languages, the CLI, and MCP server live alongside this one — see
> the [top-level README](../README.md).


## Install
This package is not yet published to RubyGems. Install it from the
GitHub release tag (`rb/vX.Y.Z`):

- Releases: [https://github.com/voxgig-sdk/cloudflare-workers-sdk/releases](https://github.com/voxgig-sdk/cloudflare-workers-sdk/releases)


## Tutorial: your first API call

This tutorial walks through creating a client, listing entities, and
loading a specific record.

### 1. Create a client

```ruby
require_relative "CloudflareWorkers_sdk"

client = CloudflareWorkersSDK.new({
  "apikey" => ENV["CLOUDFLARE_WORKERS_APIKEY"],
})
```

### 2. List account records

```ruby
begin
  # list returns an Array of Account records — iterate directly.
  accounts = client.Account.list
  accounts.each do |item|
    puts "#{item["id"]}"
  end
rescue => err
  warn "list failed: #{err}"
end
```

### 3. Load an application

Application is nested under account, so provide the `account_id`.

```ruby
begin
  # load returns the ENTITY — call data_get for the Application record (raises on error).
  application = client.Application.load({ "account_id" => "example_account_id", "id" => "example_id" })
  puts application
rescue => err
  warn "load failed: #{err}"
end
```


## Error handling

Entity operations raise on failure, so rescue them:

```ruby
begin
  workersubdomains = client.WorkerSubdomain.list()
rescue => err
  warn "list failed: #{err}"
end
```

`direct` does **not** raise — it returns the result hash. Branch on
`ok`; on failure `status` holds the HTTP status (for error responses) and
`err` holds a transport error, so read both defensively:

```ruby
result = client.direct({
  "path" => "/api/resource/{id}",
  "method" => "GET",
  "params" => { "id" => "example_id" },
})

warn "request failed: #{result["err"] || "HTTP #{result["status"]}"}" unless result["ok"]
```


## How-to guides

### Make a direct HTTP request

For endpoints not covered by entity methods:

```ruby
result = client.direct({
  "path" => "/api/resource/{id}",
  "method" => "GET",
  "params" => { "id" => "example" },
})

if result["ok"]
  puts result["status"]  # 200
  puts result["data"]    # response body
else
  # On an HTTP error status there is no err (only a transport failure sets
  # it), so fall back to the status code.
  warn(result["err"] || "HTTP #{result["status"]}")
end
```

### Prepare a request without sending it

```ruby
begin
  fetchdef = client.prepare({
    "path" => "/api/resource/{id}",
    "method" => "DELETE",
    "params" => { "id" => "example" },
  })
  puts fetchdef["url"]
  puts fetchdef["method"]
  puts fetchdef["headers"]
rescue => err
  warn "prepare failed: #{err}"
end
```

### Use test mode

Create a mock client for unit testing — no server required:

```ruby
client = CloudflareWorkersSDK.test

# Entity ops return the ENTITY (raises on error);
# call data_get for the mock record.
workersubdomain = client.WorkerSubdomain.list()
puts workersubdomain
```

### Use a custom fetch function

Replace the HTTP transport with your own function:

```ruby
mock_fetch = ->(url, init) {
  return {
    "status" => 200,
    "statusText" => "OK",
    "headers" => {},
    "json" => ->() { { "id" => "mock01" } },
  }, nil
}

client = CloudflareWorkersSDK.new({
  "base" => "http://localhost:8080",
  "system" => {
    "fetch" => mock_fetch,
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
cd rb && ruby -Itest -e "Dir['test/*_test.rb'].each { |f| require_relative f }"
```


## Reference

### CloudflareWorkersSDK

```ruby
require_relative "CloudflareWorkers_sdk"
client = CloudflareWorkersSDK.new(options)
```

Creates a new SDK client.

| Option | Type | Description |
| --- | --- | --- |
| `apikey` | `String` | API key for authentication. |
| `base` | `String` | Base URL of the API server. |
| `prefix` | `String` | URL path prefix prepended to all requests. |
| `suffix` | `String` | URL path suffix appended to all requests. |
| `feature` | `Hash` | Feature activation flags. |
| `extend` | `Hash` | Additional Feature instances to load. |
| `system` | `Hash` | System overrides (e.g. custom `fetch` lambda). |

### test

```ruby
client = CloudflareWorkersSDK.test(testopts, sdkopts)
```

Creates a test-mode client with mock transport. Both arguments may be `nil`.

### CloudflareWorkersSDK methods

| Method | Signature | Description |
| --- | --- | --- |
| `options_map` | `() -> Hash` | Deep copy of current SDK options. |
| `get_utility` | `() -> Utility` | Copy of the SDK utility object. |
| `prepare` | `(fetchargs) -> Hash` | Build an HTTP request definition without sending. Raises on error. |
| `direct` | `(fetchargs) -> Hash` | Build and send an HTTP request. Returns a result hash (`result["ok"]`); does not raise. |
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
| `load` | `(reqmatch, ctrl) -> any` | Load a single entity by match criteria. Raises on error. |
| `list` | `(reqmatch = nil, ctrl) -> Array` | List entities matching the criteria (call with no argument to list all). Raises on error. |
| `create` | `(reqdata, ctrl) -> any` | Create a new entity. Raises on error. |
| `update` | `(reqdata, ctrl) -> any` | Update an existing entity. Raises on error. |
| `remove` | `(reqmatch, ctrl) -> any` | Remove an entity. Raises on error. |
| `data_get` | `() -> Hash` | Get entity data. |
| `data_set` | `(data)` | Set entity data. |
| `match_get` | `() -> Hash` | Get entity match criteria. |
| `match_set` | `(match)` | Set entity match criteria. |
| `make` | `() -> Entity` | Create a new instance with the same options. |
| `get_name` | `() -> String` | Return the entity name. |

### Result shape

Entity operations return the result data directly. On failure they
raise a `CloudflareWorkersError` (a `StandardError` subclass), so wrap
calls in `begin`/`rescue` where you need to handle errors.

The `direct` escape hatch is the exception: it never raises and instead
returns a result `Hash` with these keys:

| Key | Type | Description |
| --- | --- | --- |
| `ok` | `Boolean` | `true` if the HTTP status is 2xx. |
| `status` | `Integer` | HTTP status code. |
| `headers` | `Hash` | Response headers. |
| `data` | `any` | Parsed JSON response body. |
| `err` | `Error` | Present when `ok` is `false`. |

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

Create an instance: `account = client.Account`

#### Operations

| Method | Description |
| --- | --- |
| `list(match)` | List entities matching the criteria. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `id` | `String` |  |

#### Example: List

```ruby
# list returns an Array of Account records (raises on error).
accounts = client.Account.list
```


### Application

Create an instance: `application = client.Application`

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
| `configuration` | `Hash` | Application configuration fields you can change without creating a rollout. |
| `constraints` | `Hash` |  |
| `errors` | `Array` |  |
| `id` | `String` |  |
| `max_instances` | `Integer` | Maximum number of instances that an autoscaling application can run. |
| `messages` | `Array` |  |
| `observability` | `Object` | Top-level application observability settings. |
| `result` | `Object` | The public Containers API returns an application. |
| `result_info` | `Hash` | Cursor pagination details for a v4 API list response. |
| `rollout_active_grace_period` | `Integer` | Grace period for active instances to stay alive before becoming eligible for shutdown signal due to a rollout, in seconds. |
| `success` | `Boolean` | Whether the API call was successful. |

#### Example: Load

```ruby
# load returns the ENTITY — call data_get for the Application record (raises on error).
application = client.Application.load({ "id" => "application_id", "account_id" => "account_id" })
```

#### Example: List

```ruby
# list returns an Array of Application records (raises on error).
applications = client.Application.list
```

#### Example: Create

```ruby
application = client.Application.create({
  "account_id" => "example_account_id", # String
  "errors" => [], # Array
  "messages" => [], # Array
  "result" => "example_result", # Object
  "result_info" => {}, # Hash
  "success" => true, # Boolean
})
```


### Brapi

Create an instance: `brapi = client.Brapi`

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
| `Browser` | `String` | Browser name and version. |
| `ProtocolVersion` | `String` | Chrome DevTools Protocol version. |
| `UserAgent` | `String` | User agent string. |
| `V8Version` | `String` | V8 JavaScript engine version. |
| `WebKitVersion` | `String` | WebKit version. |
| `actionTimeout` | `Float` | The maximum duration allowed for the browser action to complete after the page has loaded (such as taking screenshots, extracting content, or generating PDFs). |
| `addScriptTag` | `Array` | Adds a script element into the page with the desired URL or content. |
| `addStyleTag` | `Array` | Adds a `<link rel="stylesheet">` tag into the page with the desired URL or a `<style type="text/css">` tag with the content. |
| `allowRequestPattern` | `Array` | Only allow requests that match the provided regex patterns, eg. |
| `allowResourceTypes` | `Array` | Only allow requests that match the provided resource types, eg. |
| `authenticate` | `Hash` | Provide credentials for HTTP authentication. |
| `bestAttempt` | `Boolean` | Attempt to proceed when 'awaited' events fail or timeout. |
| `closeReason` | `Float` | Reason code for session closure. |
| `closeReasonText` | `String` | Human-readable close reason. |
| `commands` | `Array` | Available commands. |
| `connectionEndTime` | `Float` | Connection end time. |
| `connectionId` | `String` | Connection ID. |
| `connectionStartTime` | `Float` | Connection start time. |
| `cookies` | `Array` | Check [options](https://pptr.dev/api/puppeteer.page.setcookie). |
| `custom_ai` | `Array` | Optional list of custom AI models to use for the request. |
| `dependencies` | `Array` | Domain dependencies. |
| `description` | `String` | Target description. |
| `devtoolsFrontendUrl` | `String` | DevTools frontend URL. |
| `domain` | `String` | Domain name. |
| `elements` | `Array` |  |
| `emulateMediaType` | `String` |  |
| `endTime` | `Float` | Session end time. |
| `errors` | `Array` |  |
| `events` | `Array` | Available events. |
| `excludeExternalLinks` | `Boolean` |  |
| `experimental` | `Boolean` | Whether this domain is experimental. |
| `formats` | `Array` |  |
| `gotoOptions` | `Hash` | Check [options](https://pptr.dev/api/puppeteer.gotooptions). |
| `guardrails` | `Hash` |  |
| `html` | `String` | Set the content of the page, eg: `<h1>Hello World!!</h1>`. |
| `id` | `String` | Target ID. |
| `interestingOnly` | `Boolean` |  |
| `lastUpdated` | `Float` | Last updated timestamp. |
| `message` | `String` | Target activated. |
| `meta` | `Hash` |  |
| `pdfOptions` | `Hash` | Check [options](https://pptr.dev/api/puppeteer.pdfoptions). |
| `prompt` | `String` |  |
| `rejectRequestPattern` | `Array` | Block undesired requests that match the provided regex patterns, eg. |
| `rejectResourceTypes` | `Array` | Block undesired requests that match the provided resource types, eg. |
| `response_format` | `Hash` |  |
| `result` | `Hash` | HTML content. |
| `root` | `String` |  |
| `screenshotOptions` | `Hash` | Check [options](https://pptr.dev/api/puppeteer.screenshotoptions). |
| `scrollPage` | `Boolean` |  |
| `selector` | `String` |  |
| `sessionId` | `String` | Session ID. |
| `setExtraHTTPHeaders` | `Hash` |  |
| `setJavaScriptEnabled` | `Boolean` |  |
| `startTime` | `Float` | Session start time. |
| `success` | `Boolean` | Response status. |
| `title` | `String` | Title of the target. |
| `type` | `String` | Target type (page, background_page, worker, etc.). |
| `types` | `Array` | Type definitions. |
| `url` | `String` | URL of the target. |
| `userAgent` | `String` |  |
| `viewport` | `Hash` | Check [options](https://pptr.dev/api/puppeteer.page.setviewport). |
| `visibleLinksOnly` | `Boolean` |  |
| `waitForSelector` | `Hash` | Wait for the selector to appear in page. |
| `waitForTimeout` | `Float` | Waits for a specified timeout before continuing. |
| `webSocketDebuggerUrl` | `String` | WebSocket URL for debugging this target. |

#### Example: Load

```ruby
# load returns the ENTITY — call data_get for the Brapi record (raises on error).
brapi = client.Brapi.load({ "account_id" => "account_id" })
```

#### Example: List

```ruby
# list returns an Array of Brapi records (raises on error).
brapis = client.Brapi.list
```

#### Example: Create

```ruby
brapi = client.Brapi.create({
  "account_id" => "example_account_id", # String
  "Browser" => "example_Browser", # String
  "ProtocolVersion" => "example_ProtocolVersion", # String
  "UserAgent" => "example_UserAgent", # String
  "V8Version" => "example_V8Version", # String
  "WebKitVersion" => "example_WebKitVersion", # String
  "authenticate" => {}, # Hash
  "domain" => "example_domain", # String
  "elements" => [], # Array
  "id" => "example_id", # String
  "message" => "example_message", # String
  "meta" => {}, # Hash
  "response_format" => {}, # Hash
  "result" => {}, # Hash
  "sessionId" => "example_sessionId", # String
  "success" => true, # Boolean
  "type" => "example_type", # String
  "url" => "example_url", # String
  "viewport" => {}, # Hash
  "waitForSelector" => {}, # Hash
})
```


### Build

Create an instance: `build = client.Build`

#### Operations

| Method | Description |
| --- | --- |
| `list(match)` | List entities matching the criteria. |
| `load(match)` | Load a single entity by match criteria. |
| `update(data)` | Update an existing entity. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `errors` | `Array` |  |
| `id` | `String` |  |
| `messages` | `Array` |  |
| `result` | `Hash` |  |
| `result_info` | `Hash` |  |
| `success` | `Boolean` |  |

#### Example: Load

```ruby
# load returns the ENTITY — call data_get for the Build record (raises on error).
build = client.Build.load({ "id" => "build_id", "account_id" => "account_id" })
```

#### Example: List

```ruby
# list returns an Array of Build records (raises on error).
builds = client.Build.list
```


### BuildToken

Create an instance: `build_token = client.BuildToken`

#### Operations

| Method | Description |
| --- | --- |
| `create(data)` | Create a new entity with the given data. |
| `list(match)` | List entities matching the criteria. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `build_token_name` | `String` |  |
| `build_token_secret` | `String` |  |
| `cloudflare_token_id` | `String` |  |
| `errors` | `Array` |  |
| `messages` | `Array` |  |
| `result` | `Hash` |  |
| `result_info` | `Hash` |  |
| `success` | `Boolean` |  |

#### Example: List

```ruby
# list returns an Array of BuildToken records (raises on error).
build_tokens = client.BuildToken.list
```

#### Example: Create

```ruby
build_token = client.BuildToken.create({
  "account_id" => "example_account_id", # String
  "build_token_name" => "example_build_token_name", # String
  "build_token_secret" => "example_build_token_secret", # String
  "cloudflare_token_id" => "example_cloudflare_token_id", # String
  "errors" => [], # Array
  "messages" => [], # Array
  "result" => {}, # Hash
  "success" => true, # Boolean
})
```


### BuildsApi

Create an instance: `builds_api = client.BuildsApi`

#### Operations

| Method | Description |
| --- | --- |
| `create(data)` | Create a new entity with the given data. |
| `remove(match)` | Remove the matching entity. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `errors` | `Array` |  |
| `messages` | `Array` |  |
| `result` | `Hash` |  |
| `result_info` | `Hash` |  |
| `success` | `Boolean` |  |

#### Example: Create

```ruby
builds_api = client.BuildsApi.create({
  "account_id" => "example_account_id", # String
  "trigger_id" => "example_trigger_id", # String
  "errors" => [], # Array
  "messages" => [], # Array
  "result" => {}, # Hash
  "success" => true, # Boolean
})
```


### Connection

Create an instance: `connection = client.Connection`

#### Operations

| Method | Description |
| --- | --- |
| `remove(match)` | Remove the matching entity. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `id` | `String` |  |


### ContainerImage

Create an instance: `container_image = client.ContainerImage`

#### Operations

| Method | Description |
| --- | --- |
| `create(data)` | Create a new entity with the given data. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `image` | `String` | Image url. |

#### Example: Create

```ruby
container_image = client.ContainerImage.create({
  "account_id" => "example_account_id", # String
  "image" => "example_image", # String
})
```


### ContainerInstance

Create an instance: `container_instance = client.ContainerInstance`

#### Operations

| Method | Description |
| --- | --- |
| `list(match)` | List entities matching the criteria. |
| `load(match)` | Load a single entity by match criteria. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `errors` | `Array` |  |
| `id` | `String` |  |
| `messages` | `Array` |  |
| `result` | `Object` | A container instance belonging to an application. |
| `result_info` | `Hash` | Cursor pagination details for a v4 API list response. |
| `success` | `Boolean` | Whether the API call was successful. |

#### Example: Load

```ruby
# load returns the ENTITY — call data_get for the ContainerInstance record (raises on error).
container_instance = client.ContainerInstance.load({ "id" => "container_instance_id", "account_id" => "account_id", "application_id" => "application_id" })
```

#### Example: List

```ruby
# list returns an Array of ContainerInstance records (raises on error).
container_instances = client.ContainerInstance.list
```


### DeployHook

Create an instance: `deploy_hook = client.DeployHook`

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
| `branch` | `String` | Git branch name. |
| `deploy_hook_name` | `String` | Deploy hook name (1-58 characters). |
| `errors` | `Array` |  |
| `id` | `String` |  |
| `messages` | `Array` |  |
| `result` | `Hash` |  |
| `result_info` | `Hash` |  |
| `success` | `Boolean` |  |

#### Example: Load

```ruby
# load returns the ENTITY — call data_get for the DeployHook record (raises on error).
deploy_hook = client.DeployHook.load({ "id" => "deploy_hook_id", "account_id" => "account_id", "worker_id" => "worker_id" })
```

#### Example: List

```ruby
# list returns an Array of DeployHook records (raises on error).
deploy_hooks = client.DeployHook.list
```

#### Example: Create

```ruby
deploy_hook = client.DeployHook.create({
  "id" => "example_id", # String
  "branch" => "example_branch", # String
  "deploy_hook_name" => "example_deploy_hook_name", # String
  "errors" => [], # Array
  "messages" => [], # Array
  "result" => {}, # Hash
  "success" => true, # Boolean
})
```


### Deployment

Create an instance: `deployment = client.Deployment`

#### Operations

| Method | Description |
| --- | --- |
| `remove(match)` | Remove the matching entity. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `id` | `String` |  |


### Destination

Create an instance: `destination = client.Destination`

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
| `configuration` | `Hash` |  |
| `enabled` | `Boolean` |  |
| `errors` | `Array` |  |
| `id` | `String` |  |
| `messages` | `Array` |  |
| `name` | `String` |  |
| `result` | `Hash` |  |
| `skipPreflightCheck` | `Boolean` |  |
| `success` | `Boolean` |  |

#### Example: List

```ruby
# list returns an Array of Destination records (raises on error).
destinations = client.Destination.list
```

#### Example: Create

```ruby
destination = client.Destination.create({
  "account_id" => "example_account_id", # String
  "configuration" => {}, # Hash
  "enabled" => true, # Boolean
  "errors" => [], # Array
  "messages" => [], # Array
  "name" => "example_name", # String
  "result" => {}, # Hash
  "success" => true, # Boolean
})
```


### Domain

Create an instance: `domain = client.Domain`

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
| `errors` | `Array` |  |
| `id` | `String` |  |
| `messages` | `Array` |  |
| `result` | `Hash` |  |
| `success` | `Boolean` | Whether the API call was successful. |

#### Example: Load

```ruby
# load returns the ENTITY — call data_get for the Domain record (raises on error).
domain = client.Domain.load({ "id" => "domain_id", "account_id" => "account_id" })
```

#### Example: List

```ruby
# list returns an Array of Domain records (raises on error).
domains = client.Domain.list
```


### DurableObjectsNamespace

Create an instance: `durable_objects_namespace = client.DurableObjectsNamespace`

#### Operations

| Method | Description |
| --- | --- |
| `create(data)` | Create a new entity with the given data. |
| `list(match)` | List entities matching the criteria. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `result` | `Array` |  |
| `result_info` | `Hash` |  |

#### Example: List

```ruby
# list returns an Array of DurableObjectsNamespace records (raises on error).
durable_objects_namespaces = client.DurableObjectsNamespace.list
```

#### Example: Create

```ruby
durable_objects_namespace = client.DurableObjectsNamespace.create({
  "account_id" => "example_account_id", # String
  "namespace_id" => "example_namespace_id", # String
})
```


### EnvironmentVariable

Create an instance: `environment_variable = client.EnvironmentVariable`

#### Operations

| Method | Description |
| --- | --- |
| `list(match)` | List entities matching the criteria. |
| `update(data)` | Update an existing entity. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `errors` | `Array` |  |
| `messages` | `Array` |  |
| `result` | `Hash` |  |
| `result_info` | `Hash` |  |
| `success` | `Boolean` |  |

#### Example: List

```ruby
# list returns an Array of EnvironmentVariable records (raises on error).
environment_variables = client.EnvironmentVariable.list
```


### GitHubIntegration

Create an instance: `git_hub_integration = client.GitHubIntegration`

#### Operations

| Method | Description |
| --- | --- |
| `list(match)` | List entities matching the criteria. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `errors` | `Array` |  |
| `messages` | `Array` |  |
| `result` | `Hash` |  |
| `result_info` | `Hash` |  |
| `success` | `Boolean` |  |

#### Example: List

```ruby
# list returns an Array of GitHubIntegration records (raises on error).
git_hub_integrations = client.GitHubIntegration.list
```


### Hyperdrive

Create an instance: `hyperdrive = client.Hyperdrive`

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
| `caching` | `Hash` |  |
| `created_on` | `String` | Defines the creation time of the Hyperdrive configuration. |
| `id` | `String` | Define configurations using a unique string identifier. |
| `modified_on` | `String` | Defines the last modified time of the Hyperdrive configuration. |
| `mtls` | `Hash` | mTLS configuration for the origin connection. |
| `name` | `String` | The name of the Hyperdrive configuration. |
| `origin` | `Hash` | Combines database connection fields with exactly one supported network location. |
| `origin_connection_limit` | `Integer` | The (soft) maximum number of connections the Hyperdrive is allowed to make to the origin database. |
| `restarted_on` | `String` | Defines the last time the Hyperdrive connection pool was explicitly restarted via the restart endpoint. |
| `result` | `Hash` |  |

#### Example: Load

```ruby
# load returns the ENTITY — call data_get for the Hyperdrive record (raises on error).
hyperdrive = client.Hyperdrive.load({ "account_id" => "account_id", "hyperdrive_id" => "hyperdrive_id" })
```

#### Example: List

```ruby
# list returns an Array of Hyperdrive records (raises on error).
hyperdrives = client.Hyperdrive.list
```

#### Example: Create

```ruby
hyperdrive = client.Hyperdrive.create({
  "account_id" => "example_account_id", # String
  "integration" => "example_integration", # String
  "id" => "example_id", # String
  "name" => "example_name", # String
  "origin" => {}, # Hash
  "result" => {}, # Hash
})
```


### ImageRegistry

Create an instance: `image_registry = client.ImageRegistry`

#### Operations

| Method | Description |
| --- | --- |
| `create(data)` | Create a new entity with the given data. |
| `list(match)` | List entities matching the criteria. |
| `remove(match)` | Remove the matching entity. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `auth` | `Hash` | Credentials for authenticating to a private external image registry. |
| `domain` | `String` | Hostname of the private registry, without a scheme or image path. |
| `errors` | `Array` |  |
| `expiration_minutes` | `Integer` | The number of minutes Cloudflare managed registry credentials stay valid. |
| `id` | `String` |  |
| `is_public` | `Boolean` | Omit this field or set it to `false`. |
| `kind` | `Object` | Registry provider. |
| `messages` | `Array` |  |
| `permissions` | `Array` | The permissions for Cloudflare managed registry credentials. |
| `result` | `Array` |  |
| `success` | `Boolean` | Whether the API call was successful. |

#### Example: List

```ruby
# list returns an Array of ImageRegistry records (raises on error).
image_registrys = client.ImageRegistry.list
```

#### Example: Create

```ruby
image_registry = client.ImageRegistry.create({
  "account_id" => "example_account_id", # String
  "auth" => {}, # Hash
  "errors" => [], # Array
  "kind" => "example_kind", # Object
  "messages" => [], # Array
  "result" => [], # Array
  "success" => true, # Boolean
})
```


### Issue

Create an instance: `issue = client.Issue`

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
| `afterInactivitySeconds` | `Integer` |  |
| `afterOccurrences` | `Integer` |  |
| `enabled` | `Boolean` |  |
| `errors` | `Array` |  |
| `id` | `String` |  |
| `issueIds` | `Array` |  |
| `messages` | `Array` |  |
| `name` | `String` |  |
| `policyId` | `String` |  |
| `result` | `Hash` |  |
| `result_info` | `Hash` |  |
| `service` | `String` |  |
| `status` | `String` |  |
| `success` | `Boolean` |  |
| `title` | `String` |  |

#### Example: Load

```ruby
# load returns the ENTITY — call data_get for the Issue record (raises on error).
issue = client.Issue.load({ "id" => "issue_id", "account_id" => "account_id" })
```

#### Example: List

```ruby
# list returns an Array of Issue records (raises on error).
issues = client.Issue.list
```

#### Example: Create

```ruby
issue = client.Issue.create({
  "account_id" => "example_account_id", # String
  "group_id" => "example_group_id", # String
  "errors" => [], # Array
  "issueIds" => [], # Array
  "messages" => [], # Array
  "policyId" => "example_policyId", # String
  "result" => {}, # Hash
  "result_info" => {}, # Hash
  "success" => true, # Boolean
})
```


### Key

Create an instance: `key = client.Key`

#### Operations

| Method | Description |
| --- | --- |
| `create(data)` | Create a new entity with the given data. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `datasets` | `Array` | Leave this empty to use the default datasets |
| `errors` | `Array` |  |
| `filters` | `Array` | Apply filters to narrow key discovery. |
| `from` | `Float` |  |
| `keyNeedle` | `Hash` | If the user suggests a key, use this to narrow down the list of keys returned. |
| `limit` | `Float` | Advanced usage: set limit=1000+ to retrieve comprehensive key options without needing additional filtering. |
| `messages` | `Array` |  |
| `needle` | `Hash` | Search for a specific substring in any of the events |
| `result` | `Array` |  |
| `success` | `Boolean` |  |
| `to` | `Float` |  |

#### Example: Create

```ruby
key = client.Key.create({
  "account_id" => "example_account_id", # String
  "errors" => [], # Array
  "keyNeedle" => {}, # Hash
  "messages" => [], # Array
  "needle" => {}, # Hash
  "result" => [], # Array
  "success" => true, # Boolean
})
```


### LiveTail

Create an instance: `live_tail = client.LiveTail`

#### Operations

| Method | Description |
| --- | --- |
| `create(data)` | Create a new entity with the given data. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `errors` | `Array` |  |
| `filterCombination` | `String` | Set a flag to describe how to combine the filters on the query. |
| `filters` | `Array` | Apply filters to the query. |
| `messages` | `Array` |  |
| `result` | `Hash` |  |
| `scriptId` | `String` |  |
| `success` | `Boolean` |  |

#### Example: Create

```ruby
live_tail = client.LiveTail.create({
  "account_id" => "example_account_id", # String
  "errors" => [], # Array
  "messages" => [], # Array
  "result" => {}, # Hash
  "success" => true, # Boolean
})
```


### MetricsExport

Create an instance: `metrics_export = client.MetricsExport`

#### Operations

| Method | Description |
| --- | --- |
| `create(data)` | Create a new entity with the given data. |
| `list(match)` | List entities matching the criteria. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `errors` | `Array` |  |
| `messages` | `Array` |  |
| `requester` | `Hash` |  |
| `resources` | `Array` |  |
| `result` | `Array` |  |
| `success` | `Boolean` |  |

#### Example: List

```ruby
# list returns an Array of MetricsExport records (raises on error).
metrics_exports = client.MetricsExport.list
```

#### Example: Create

```ruby
metrics_export = client.MetricsExport.create({
  "account_id" => "example_account_id", # String
  "errors" => [], # Array
  "messages" => [], # Array
  "requester" => {}, # Hash
  "resources" => [], # Array
  "result" => [], # Array
  "success" => true, # Boolean
})
```


### Namespace

Create an instance: `namespace = client.Namespace`

#### Operations

| Method | Description |
| --- | --- |
| `remove(match)` | Remove the matching entity. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `id` | `String` |  |


### Preview

Create an instance: `preview = client.Preview`

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
| `errors` | `Array` |  |
| `id` | `String` |  |
| `messages` | `Array` |  |
| `result` | `Hash` |  |
| `success` | `Boolean` | Whether the API call was successful. |

#### Example: Load

```ruby
# load returns the ENTITY — call data_get for the Preview record (raises on error).
preview = client.Preview.load({ "id" => "preview_id", "account_id" => "account_id", "worker_id" => "worker_id" })
```

#### Example: List

```ruby
# list returns an Array of Preview records (raises on error).
previews = client.Preview.list
```

#### Example: Create

```ruby
preview = client.Preview.create({
  "account_id" => "example_account_id", # String
  "worker_id" => "example_worker_id", # String
  "errors" => [], # Array
  "messages" => [], # Array
  "result" => {}, # Hash
  "success" => true, # Boolean
})
```


### PreviewDeployment

Create an instance: `preview_deployment = client.PreviewDeployment`

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
| `errors` | `Array` |  |
| `id` | `String` |  |
| `messages` | `Array` |  |
| `result` | `Object` |  |
| `success` | `Boolean` | Whether the API call was successful. |

#### Example: Load

```ruby
# load returns the ENTITY — call data_get for the PreviewDeployment record (raises on error).
preview_deployment = client.PreviewDeployment.load({ "id" => "preview_deployment_id", "account_id" => "account_id", "preview_id" => "preview_id", "worker_id" => "worker_id" })
```

#### Example: List

```ruby
# list returns an Array of PreviewDeployment records (raises on error).
preview_deployments = client.PreviewDeployment.list
```

#### Example: Create

```ruby
preview_deployment = client.PreviewDeployment.create({
  "account_id" => "example_account_id", # String
  "id" => "example_id", # String
  "worker_id" => "example_worker_id", # String
  "errors" => [], # Array
  "messages" => [], # Array
  "result" => "example_result", # Object
  "success" => true, # Boolean
})
```


### Query

Create an instance: `query = client.Query`

#### Operations

| Method | Description |
| --- | --- |
| `create(data)` | Create a new entity with the given data. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `chart` | `Boolean` | When true, includes time-series data in the response. |
| `chartType` | `String` | Controls the SQL shape and response payload for the 'calculations' view. |
| `compare` | `Boolean` | When true, includes a comparison dataset from the previous time period of equal length. |
| `distributionScale` | `String` | Value-axis bucketing for chartType 'distribution'. |
| `dry` | `Boolean` | When true, executes the query without persisting the results. |
| `errors` | `Array` |  |
| `granularity` | `Float` | Number of time-series buckets. |
| `ignoreSeries` | `Boolean` | When true, omits time-series data from the response and returns only aggregated values. |
| `limit` | `Float` | Maximum number of events to return when view is 'events'. |
| `messages` | `Array` |  |
| `offset` | `String` | Cursor for pagination in event, trace, invocation, and agent views. |
| `offsetBy` | `Float` | Numeric offset for paginating grouped/pattern results (top-N lists). |
| `offsetDirection` | `String` | Pagination direction: 'next' for forward, 'prev' for backward. |
| `parameters` | `Hash` | Query parameters defining what data to retrieve — filters, calculations, group-bys, and ordering. |
| `queryId` | `String` | Identifier for the query. |
| `result` | `Hash` | Complete results of a query run. |
| `success` | `Boolean` |  |
| `timeframe` | `Hash` | Timeframe for the query using Unix timestamps in milliseconds. |
| `view` | `String` | Controls the shape of the response. |

#### Example: Create

```ruby
query = client.Query.create({
  "account_id" => "example_account_id", # String
  "errors" => [], # Array
  "messages" => [], # Array
  "queryId" => "example_queryId", # String
  "result" => {}, # Hash
  "success" => true, # Boolean
  "timeframe" => {}, # Hash
})
```


### RepositoryConnection

Create an instance: `repository_connection = client.RepositoryConnection`

#### Operations

| Method | Description |
| --- | --- |
| `update(data)` | Update an existing entity. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `provider_account_id` | `String` | Provider-specific identifier of the account or namespace that owns the repository. |
| `provider_account_name` | `String` | Human-readable name of the account or namespace that owns the repository. |
| `provider_type` | `String` | Source control provider. |
| `repo_id` | `String` | Provider-specific repository identifier. |
| `repo_name` | `String` | Human-readable repository name. |


### Rollout

Create an instance: `rollout = client.Rollout`

#### Operations

| Method | Description |
| --- | --- |
| `create(data)` | Create a new entity with the given data. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `description` | `String` | Description of the rollout process. |
| `kind` | `String` | Kind of the rollout process. |
| `percentage` | `Integer` | Initial target version percentage (0-100). |
| `step_percentage` | `Integer` | Percentage of rollout to increase in each step when "steps" is absent. |
| `steps` | `Array` | Steps defining the rollout process, used when "step_percentage" is absent. |
| `strategy` | `String` | Strategy used for the rollout. |
| `target_configuration` | `Hash` | User-specified container configuration changes. |

#### Example: Create

```ruby
rollout = client.Rollout.create({
  "account_id" => "example_account_id", # String
  "application_id" => "example_application_id", # String
  "description" => "example_description", # String
  "strategy" => "example_strategy", # String
  "target_configuration" => {}, # Hash
})
```


### SavedQuery

Create an instance: `saved_query = client.SavedQuery`

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
| `description` | `String` |  |
| `errors` | `Array` |  |
| `id` | `String` |  |
| `messages` | `Array` |  |
| `name` | `String` | Query name |
| `parameters` | `Hash` |  |
| `result` | `Hash` |  |
| `success` | `Boolean` |  |

#### Example: Load

```ruby
# load returns the ENTITY — call data_get for the SavedQuery record (raises on error).
saved_query = client.SavedQuery.load({ "id" => "saved_query_id", "account_id" => "account_id" })
```

#### Example: List

```ruby
# list returns an Array of SavedQuery records (raises on error).
saved_querys = client.SavedQuery.list
```

#### Example: Create

```ruby
saved_query = client.SavedQuery.create({
  "account_id" => "example_account_id", # String
  "description" => "example_description", # String
  "errors" => [], # Array
  "messages" => [], # Array
  "name" => "example_name", # String
  "parameters" => {}, # Hash
  "result" => {}, # Hash
  "success" => true, # Boolean
})
```


### Script

Create an instance: `script = client.Script`

#### Operations

| Method | Description |
| --- | --- |
| `remove(match)` | Remove the matching entity. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `id` | `String` |  |


### ScriptSetting

Create an instance: `script_setting = client.ScriptSetting`

#### Operations

| Method | Description |
| --- | --- |
| `list(match)` | List entities matching the criteria. |
| `update(data)` | Update an existing entity. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `errors` | `Array` |  |
| `logpush` | `Boolean` | Whether Logpush is turned on for the Worker. |
| `messages` | `Array` |  |
| `observability` | `Object` |  |
| `result` | `Hash` |  |
| `success` | `Boolean` | Whether the API call was successful. |
| `tags` | `Object` |  |
| `tail_consumers` | `Array` | List of Workers that will consume logs from the attached Worker. |

#### Example: List

```ruby
# list returns an Array of ScriptSetting records (raises on error).
script_settings = client.ScriptSetting.list
```


### Secret

Create an instance: `secret = client.Secret`

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
| `comment` | `String` | Freeform text describing the secret. |
| `id` | `String` |  |
| `result` | `Object` |  |
| `scopes` | `Array` | The list of services that can use this secret. |
| `value` | `String` | The value of the secret. |

#### Example: Load

```ruby
# load returns the ENTITY — call data_get for the Secret record (raises on error).
secret = client.Secret.load({ "id" => "secret_id", "account_id" => "account_id", "store_id" => "store_id" })
```

#### Example: List

```ruby
# list returns an Array of Secret records (raises on error).
secrets = client.Secret.list
```

#### Example: Create

```ruby
secret = client.Secret.create({
  "account_id" => "example_account_id", # String
  "store_id" => "example_store_id", # String
  "result" => "example_result", # Object
})
```


### SecretsStoreDelete

Create an instance: `secrets_store_delete = client.SecretsStoreDelete`

#### Operations

| Method | Description |
| --- | --- |
| `remove(match)` | Remove the matching entity. |


### SecretsStoreQuota

Create an instance: `secrets_store_quota = client.SecretsStoreQuota`

#### Operations

| Method | Description |
| --- | --- |
| `load(match)` | Load a single entity by match criteria. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `result` | `Object` |  |

#### Example: Load

```ruby
# load returns the ENTITY — call data_get for the SecretsStoreQuota record (raises on error).
secrets_store_quota = client.SecretsStoreQuota.load({ "account_id" => "account_id" })
```


### SecretsStoreSecret

Create an instance: `secrets_store_secret = client.SecretsStoreSecret`

#### Operations

| Method | Description |
| --- | --- |
| `create(data)` | Create a new entity with the given data. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `comment` | `String` | Freeform text describing the secret. |
| `name` | `String` | The name of the secret. |
| `scopes` | `Array` | The list of services that can use this secret. |

#### Example: Create

```ruby
secrets_store_secret = client.SecretsStoreSecret.create({
  "account_id" => "example_account_id", # String
  "secret_id" => "example_secret_id", # String
  "store_id" => "example_store_id", # String
  "name" => "example_name", # String
  "scopes" => [], # Array
})
```


### SecretsStoreStore

Create an instance: `secrets_store_store = client.SecretsStoreStore`

#### Operations

| Method | Description |
| --- | --- |
| `create(data)` | Create a new entity with the given data. |
| `load(match)` | Load a single entity by match criteria. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `id` | `String` |  |
| `name` | `String` | The name of the store. |
| `result` | `Object` |  |

#### Example: Load

```ruby
# load returns the ENTITY — call data_get for the SecretsStoreStore record (raises on error).
secrets_store_store = client.SecretsStoreStore.load({ "id" => "secrets_store_store_id", "account_id" => "account_id" })
```

#### Example: Create

```ruby
secrets_store_store = client.SecretsStoreStore.create({
  "account_id" => "example_account_id", # String
  "name" => "example_name", # String
  "result" => "example_result", # Object
})
```


### SecretsStoreStoresResponseCollection

Create an instance: `secrets_store_stores_response_collection = client.SecretsStoreStoresResponseCollection`

#### Operations

| Method | Description |
| --- | --- |
| `list(match)` | List entities matching the criteria. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `result` | `Array` |  |

#### Example: List

```ruby
# list returns an Array of SecretsStoreStoresResponseCollection records (raises on error).
secrets_store_stores_response_collections = client.SecretsStoreStoresResponseCollection.list
```


### Setting

Create an instance: `setting = client.Setting`

#### Operations

| Method | Description |
| --- | --- |
| `list(match)` | List entities matching the criteria. |
| `update(data)` | Update an existing entity. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `errors` | `Array` |  |
| `messages` | `Array` |  |
| `result` | `Hash` |  |
| `success` | `Boolean` | Whether the API call was successful. |

#### Example: List

```ruby
# list returns an Array of Setting records (raises on error).
settings = client.Setting.list
```


### Shared

Create an instance: `shared = client.Shared`

#### Operations

| Method | Description |
| --- | --- |
| `create(data)` | Create a new entity with the given data. |
| `load(match)` | Load a single entity by match criteria. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `errors` | `Array` |  |
| `id` | `String` |  |
| `messages` | `Array` |  |
| `result` | `Hash` | Complete results of a query run. |
| `success` | `Boolean` |  |

#### Example: Load

```ruby
# load returns the ENTITY — call data_get for the Shared record (raises on error).
shared = client.Shared.load({ "id" => "shared_id", "account_id" => "account_id" })
```

#### Example: Create

```ruby
shared = client.Shared.create({
  "account_id" => "example_account_id", # String
  "errors" => [], # Array
  "messages" => [], # Array
  "result" => {}, # Hash
  "success" => true, # Boolean
})
```


### Tail

Create an instance: `tail = client.Tail`

#### Operations

| Method | Description |
| --- | --- |
| `remove(match)` | Remove the matching entity. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `id` | `String` |  |


### Token

Create an instance: `token = client.Token`

#### Operations

| Method | Description |
| --- | --- |
| `remove(match)` | Remove the matching entity. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `id` | `String` |  |


### Trigger

Create an instance: `trigger = client.Trigger`

#### Operations

| Method | Description |
| --- | --- |
| `create(data)` | Create a new entity with the given data. |
| `remove(match)` | Remove the matching entity. |
| `update(data)` | Update an existing entity. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `branch_excludes` | `Array` | Branch patterns that must not start builds. |
| `branch_includes` | `Array` | Branch patterns that can start builds. |
| `build_caching_enabled` | `Boolean` | Whether builds reuse cached dependencies and build artifacts. |
| `build_command` | `String` | Command to build the Worker. |
| `build_token_uuid` | `String` | UUID of the build token used when deploying the Worker. |
| `deploy_command` | `String` | Command to deploy the Worker. |
| `external_script_id` | `String` | System-generated tag of the Worker. |
| `id` | `String` |  |
| `path_excludes` | `Array` | Path patterns that must not start builds. |
| `path_includes` | `Array` | Path patterns that can start builds. |
| `repo_connection_uuid` | `String` | Repository connection UUID. |
| `root_directory` | `String` | Repository directory in which build and deploy commands run. |
| `trigger_name` | `String` | Human-readable name of the build trigger. |

#### Example: Create

```ruby
trigger = client.Trigger.create({
  "account_id" => "example_account_id", # String
  "branch_excludes" => [], # Array
  "branch_includes" => [], # Array
  "build_command" => "example_build_command", # String
  "build_token_uuid" => "example_build_token_uuid", # String
  "deploy_command" => "example_deploy_command", # String
  "external_script_id" => "example_external_script_id", # String
  "path_excludes" => [], # Array
  "path_includes" => [], # Array
  "repo_connection_uuid" => "example_repo_connection_uuid", # String
  "root_directory" => "example_root_directory", # String
  "trigger_name" => "example_trigger_name", # String
})
```


### Usage

Create an instance: `usage = client.Usage`

#### Operations

| Method | Description |
| --- | --- |
| `list(match)` | List entities matching the criteria. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `errors` | `Array` |  |
| `messages` | `Array` |  |
| `result` | `Hash` |  |
| `success` | `Boolean` |  |

#### Example: List

```ruby
# list returns an Array of Usage records (raises on error).
usages = client.Usage.list
```


### Value

Create an instance: `value = client.Value`

#### Operations

| Method | Description |
| --- | --- |
| `create(data)` | Create a new entity with the given data. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `datasets` | `Array` | Leave this empty to use the default datasets |
| `errors` | `Array` |  |
| `filters` | `Array` | Apply filters before listing values. |
| `key` | `String` |  |
| `limit` | `Float` |  |
| `messages` | `Array` |  |
| `needle` | `Hash` | Full-text search expression to match events containing the specified text or pattern. |
| `result` | `Array` |  |
| `success` | `Boolean` |  |
| `timeframe` | `Hash` |  |
| `type` | `String` |  |

#### Example: Create

```ruby
value = client.Value.create({
  "account_id" => "example_account_id", # String
  "datasets" => [], # Array
  "errors" => [], # Array
  "key" => "example_key", # String
  "messages" => [], # Array
  "needle" => {}, # Hash
  "result" => [], # Array
  "success" => true, # Boolean
  "timeframe" => {}, # Hash
  "type" => "example_type", # String
})
```


### Version

Create an instance: `version = client.Version`

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
| `annotations` | `Hash` | Metadata about the version. |
| `assets` | `Hash` | Configuration for assets within a Worker. |
| `author_email` | `String` | Email of the user who created the version. |
| `author_id` | `String` | Identifier of the user who created the version. |
| `bindings` | `Array` | List of bindings attached to a Worker. |
| `cache_options` | `Hash` | Global CacheW configuration for the Worker. |
| `compatibility_date` | `String` | Date indicating targeted support in the Workers runtime. |
| `compatibility_flags` | `Array` | Flags that enable or disable certain features in the Workers runtime. |
| `containers` | `Array` | List of containers attached to a Worker. |
| `created_on` | `String` | When the version was created. |
| `errors` | `Array` |  |
| `exports` | `Object` | Declarative exports for the version, including Durable Object classes (with their `storage` backend) and named Worker entrypoints. |
| `exports_reconciliation` | `Object` | Summary of the declarative exports reconciliation that ran on this upload. |
| `id` | `String` | Version identifier. |
| `limits` | `Hash` | Resource limits enforced at runtime. |
| `main_module` | `String` | The name of the main module in the `modules` array (e.g. |
| `messages` | `Array` |  |
| `migration_tag` | `String` | Durable Object migration tag. |
| `migrations` | `Object` | Migrations for Durable Objects associated with the version. |
| `modules` | `Array` | Code, sourcemaps, and other content used at runtime. |
| `number` | `Integer` | The integer version number, starting from one. |
| `package_dependencies` | `Array` | The list of npm packages that were installed and used when this Worker version was built. |
| `placement` | `Hash` | Configuration for [Smart Placement](https://developers.cloudflare.com/workers/configuration/smart-placement). |
| `result` | `Hash` |  |
| `source` | `String` | The client used to create the version. |
| `startup_time_ms` | `Integer` | Time in milliseconds spent on [Worker startup](https://developers.cloudflare.com/workers/platform/limits/#worker-startup-time). |
| `success` | `Boolean` | Whether the API call was successful. |
| `urls` | `Array` | All routable URLs that always point to this version. |
| `usage_model` | `String` | Usage model for the version. |

#### Example: Load

```ruby
# load returns the ENTITY — call data_get for the Version record (raises on error).
version = client.Version.load({ "id" => "version_id", "account_id" => "account_id", "worker_id" => "worker_id" })
```

#### Example: List

```ruby
# list returns an Array of Version records (raises on error).
versions = client.Version.list
```

#### Example: Create

```ruby
version = client.Version.create({
  "account_id" => "example_account_id", # String
  "worker_id" => "example_worker_id", # String
  "cache_options" => {}, # Hash
  "created_on" => "example_created_on", # String
  "errors" => [], # Array
  "id" => "example_id", # String
  "messages" => [], # Array
  "number" => 1, # Integer
  "result" => {}, # Hash
  "success" => true, # Boolean
  "urls" => [], # Array
})
```


### Worker

Create an instance: `worker = client.Worker`

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
| `auto_build` | `Boolean` | Whether pushes to the git branch build this Preview. |
| `auto_delete` | `Boolean` | Whether deleting the git branch also deletes this Preview. |
| `branch` | `Object` | Git branch name (required if commit_hash not provided) |
| `commit_hash` | `Object` | Git commit hash (required if branch not provided) |
| `errors` | `Array` |  |
| `git_repository` | `Object` | Git repository settings to update |
| `id` | `String` |  |
| `messages` | `Array` |  |
| `previews_base_config` | `Hash` | Build and deploy settings when creating a Worker build configuration |
| `previews_enabled` | `Boolean` | Whether Previews are enabled for this Worker |
| `production_settings` | `Hash` | Build and deploy settings when creating a Worker build configuration |
| `result` | `Hash` | A single Preview of a Worker, with the build settings it currently uses. |
| `result_info` | `Hash` |  |
| `script_tag` | `String` | System-generated tag of the Worker. |
| `seed_repo` | `Object` | Optional repository and file overrides used to seed this build. |
| `settings` | `Hash` | Partial build settings for updating a Worker build configuration |
| `success` | `Boolean` | Whether the API call was successful. |

#### Example: Load

```ruby
# load returns the ENTITY — call data_get for the Worker record (raises on error).
worker = client.Worker.load({ "id" => "worker_id", "account_id" => "account_id" })
```

#### Example: List

```ruby
# list returns an Array of Worker records (raises on error).
workers = client.Worker.list
```

#### Example: Create

```ruby
worker = client.Worker.create({
  "account_id" => "example_account_id", # String
  "errors" => [], # Array
  "git_repository" => "example_git_repository", # Object
  "messages" => [], # Array
  "previews_base_config" => {}, # Hash
  "previews_enabled" => true, # Boolean
  "production_settings" => {}, # Hash
  "result" => {}, # Hash
  "script_tag" => "example_script_tag", # String
  "success" => true, # Boolean
})
```


### WorkerCronTrigger

Create an instance: `worker_cron_trigger = client.WorkerCronTrigger`

#### Operations

| Method | Description |
| --- | --- |
| `list(match)` | List entities matching the criteria. |
| `update(data)` | Update an existing entity. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `errors` | `Array` |  |
| `messages` | `Array` |  |
| `result` | `Hash` |  |
| `success` | `Boolean` | Whether the API call was successful. |

#### Example: List

```ruby
# list returns an Array of WorkerCronTrigger records (raises on error).
worker_cron_triggers = client.WorkerCronTrigger.list
```


### WorkerDeployment

Create an instance: `worker_deployment = client.WorkerDeployment`

#### Operations

| Method | Description |
| --- | --- |
| `create(data)` | Create a new entity with the given data. |
| `load(match)` | Load a single entity by match criteria. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `annotations` | `Hash` |  |
| `author_email` | `String` |  |
| `created_on` | `String` |  |
| `errors` | `Array` |  |
| `id` | `String` |  |
| `messages` | `Array` |  |
| `result` | `Hash` |  |
| `source` | `String` |  |
| `strategy` | `String` |  |
| `success` | `Boolean` | Whether the API call was successful. |
| `versions` | `Array` | Worker versions included in this deployment. |

#### Example: Load

```ruby
# load returns the ENTITY — call data_get for the WorkerDeployment record (raises on error).
worker_deployment = client.WorkerDeployment.load({ "id" => "worker_deployment_id", "account_id" => "account_id" })
```

#### Example: Create

```ruby
worker_deployment = client.WorkerDeployment.create({
  "account_id" => "example_account_id", # String
  "script_name" => "example_script_name", # String
  "created_on" => "example_created_on", # String
  "errors" => [], # Array
  "id" => "example_id", # String
  "messages" => [], # Array
  "result" => {}, # Hash
  "source" => "example_source", # String
  "strategy" => "example_strategy", # String
  "success" => true, # Boolean
  "versions" => [], # Array
})
```


### WorkerEnvironment

Create an instance: `worker_environment = client.WorkerEnvironment`

#### Operations

| Method | Description |
| --- | --- |
| `load(match)` | Load a single entity by match criteria. |

#### Example: Load

```ruby
# load returns the ENTITY — call data_get for the WorkerEnvironment record (raises on error).
worker_environment = client.WorkerEnvironment.load({ "account_id" => "account_id", "environment_name" => "environment_name", "service_id" => "service_id" })
```


### WorkerRoute

Create an instance: `worker_route = client.WorkerRoute`

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
| `errors` | `Array` |  |
| `id` | `String` |  |
| `messages` | `Array` |  |
| `pattern` | `String` | Pattern to match incoming requests against. |
| `result` | `Hash` |  |
| `script` | `String` | Name of the script to run if the route matches. |
| `success` | `Boolean` | Whether the API call was successful. |

#### Example: Load

```ruby
# load returns the ENTITY — call data_get for the WorkerRoute record (raises on error).
worker_route = client.WorkerRoute.load({ "id" => "worker_route_id", "zone_id" => "zone_id" })
```

#### Example: List

```ruby
# list returns an Array of WorkerRoute records (raises on error).
worker_routes = client.WorkerRoute.list
```

#### Example: Create

```ruby
worker_route = client.WorkerRoute.create({
  "zone_id" => "example_zone_id", # String
  "errors" => [], # Array
  "id" => "example_id", # String
  "messages" => [], # Array
  "pattern" => "example_pattern", # String
  "result" => {}, # Hash
  "success" => true, # Boolean
})
```


### WorkerScript

Create an instance: `worker_script = client.WorkerScript`

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
| `errors` | `Array` |  |
| `id` | `String` |  |
| `messages` | `Array` |  |
| `result` | `Hash` | A secret value accessible through a binding. |
| `success` | `Boolean` | Whether the API call was successful. |

#### Example: Load

```ruby
# load returns the ENTITY — call data_get for the WorkerScript record (raises on error).
worker_script = client.WorkerScript.load({ "id" => "worker_script_id", "account_id" => "account_id" })
```

#### Example: List

```ruby
# list returns an Array of WorkerScript records (raises on error).
worker_scripts = client.WorkerScript.list
```

#### Example: Create

```ruby
worker_script = client.WorkerScript.create({
  "account_id" => "example_account_id", # String
  "script_name" => "example_script_name", # String
  "errors" => [], # Array
  "messages" => [], # Array
  "success" => true, # Boolean
})
```


### WorkerSubdomain

Create an instance: `worker_subdomain = client.WorkerSubdomain`

#### Operations

| Method | Description |
| --- | --- |
| `list(match)` | List entities matching the criteria. |
| `remove(match)` | Remove the matching entity. |
| `update(data)` | Update an existing entity. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `errors` | `Array` |  |
| `messages` | `Array` |  |
| `result` | `Hash` |  |
| `subdomain` | `String` |  |
| `success` | `Boolean` | Whether the API call was successful. |

#### Example: List

```ruby
# list returns an Array of WorkerSubdomain records (raises on error).
worker_subdomains = client.WorkerSubdomain.list
```


### WorkerTailLog

Create an instance: `worker_tail_log = client.WorkerTailLog`

#### Operations

| Method | Description |
| --- | --- |
| `create(data)` | Create a new entity with the given data. |
| `list(match)` | List entities matching the criteria. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `errors` | `Array` |  |
| `messages` | `Array` |  |
| `result` | `Hash` |  |
| `success` | `Boolean` | Whether the API call was successful. |

#### Example: List

```ruby
# list returns an Array of WorkerTailLog records (raises on error).
worker_tail_logs = client.WorkerTailLog.list
```

#### Example: Create

```ruby
worker_tail_log = client.WorkerTailLog.create({
  "account_id" => "example_account_id", # String
  "script_name" => "example_script_name", # String
  "errors" => [], # Array
  "messages" => [], # Array
  "result" => {}, # Hash
  "success" => true, # Boolean
})
```


### WorkersAccountSetting

Create an instance: `workers_account_setting = client.WorkersAccountSetting`

#### Operations

| Method | Description |
| --- | --- |
| `list(match)` | List entities matching the criteria. |
| `update(data)` | Update an existing entity. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `default_usage_model` | `String` |  |
| `errors` | `Array` |  |
| `green_compute` | `Boolean` |  |
| `messages` | `Array` |  |
| `result` | `Hash` |  |
| `success` | `Boolean` | Whether the API call was successful. |

#### Example: List

```ruby
# list returns an Array of WorkersAccountSetting records (raises on error).
workers_account_settings = client.WorkersAccountSetting.list
```


### WorkersApiResponseNullResult

Create an instance: `workers_api_response_null_result = client.WorkersApiResponseNullResult`

#### Operations

| Method | Description |
| --- | --- |
| `remove(match)` | Remove the matching entity. |
| `update(data)` | Update an existing entity. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `errors` | `Array` |  |
| `messages` | `Array` |  |
| `result` | `Hash` |  |
| `success` | `Boolean` | Whether the API call was successful. |


### WorkersCompletedUploadAsset

Create an instance: `workers_completed_upload_asset = client.WorkersCompletedUploadAsset`

#### Operations

| Method | Description |
| --- | --- |
| `create(data)` | Create a new entity with the given data. |

#### Example: Create

```ruby
workers_completed_upload_asset = client.WorkersCompletedUploadAsset.create({
  "account_id" => "example_account_id", # String
  "base64" => true, # Boolean
})
```


### WorkersCreateAssetsUploadSession

Create an instance: `workers_create_assets_upload_session = client.WorkersCreateAssetsUploadSession`

#### Operations

| Method | Description |
| --- | --- |
| `create(data)` | Create a new entity with the given data. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `manifest` | `Hash` | A manifest ([path]: {hash, size}) map of files to upload. |

#### Example: Create

```ruby
workers_create_assets_upload_session = client.WorkersCreateAssetsUploadSession.create({
  "account_id" => "example_account_id", # String
  "script_name" => "example_script_name", # String
  "manifest" => {}, # Hash
})
```


### WorkersForPlatform

Create an instance: `workers_for_platform = client.WorkersForPlatform`

#### Operations

| Method | Description |
| --- | --- |
| `list(match)` | List entities matching the criteria. |
| `load(match)` | Load a single entity by match criteria. |
| `update(data)` | Update an existing entity. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `errors` | `Array` |  |
| `messages` | `Array` |  |
| `result` | `Hash` | A secret value accessible through a binding. |
| `success` | `Boolean` | Whether the API call was successful. |

#### Example: Load

```ruby
# load returns the ENTITY — call data_get for the WorkersForPlatform record (raises on error).
workers_for_platform = client.WorkersForPlatform.load({ "account_id" => "account_id", "namespace_id" => "namespace_id" })
```

#### Example: List

```ruby
# list returns an Array of WorkersForPlatform records (raises on error).
workers_for_platforms = client.WorkersForPlatform.list
```


### WorkersKvApiResponseCommonNoResult

Create an instance: `workers_kv_api_response_common_no_result = client.WorkersKvApiResponseCommonNoResult`

#### Operations

| Method | Description |
| --- | --- |
| `remove(match)` | Remove the matching entity. |
| `update(data)` | Update an existing entity. |


### WorkersKvNamespace

Create an instance: `workers_kv_namespace = client.WorkersKvNamespace`

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
| `errors` | `Array` |  |
| `id` | `String` |  |
| `jurisdiction` | `String` | Specify the jurisdiction to restrict the KV namespace to durably store data within. |
| `keys` | `Array` | Array of keys to retrieve (maximum of 100). |
| `messages` | `Array` |  |
| `result` | `Object` |  |
| `result_info` | `Hash` |  |
| `success` | `Boolean` | Whether the API call was successful. |
| `title` | `String` | Human-readable string name for a Workers KV namespace. |
| `type` | `String` | Return values as strings with `text`, or parse stored JSON values with `json`. |
| `withMetadata` | `Boolean` | Whether to include metadata in the response. |

#### Example: Load

```ruby
# load returns the ENTITY — call data_get for the WorkersKvNamespace record (raises on error).
workers_kv_namespace = client.WorkersKvNamespace.load({ "id" => "workers_kv_namespace_id", "account_id" => "account_id" })
```

#### Example: List

```ruby
# list returns an Array of WorkersKvNamespace records (raises on error).
workers_kv_namespaces = client.WorkersKvNamespace.list
```

#### Example: Create

```ruby
workers_kv_namespace = client.WorkersKvNamespace.create({
  "account_id" => "example_account_id", # String
  "errors" => [], # Array
  "keys" => [], # Array
  "messages" => [], # Array
  "success" => true, # Boolean
  "title" => "example_title", # String
})
```


### WorkersNamespaceList

Create an instance: `workers_namespace_list = client.WorkersNamespaceList`

#### Operations

| Method | Description |
| --- | --- |
| `list(match)` | List entities matching the criteria. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `errors` | `Array` |  |
| `messages` | `Array` |  |
| `result` | `Array` |  |
| `success` | `Boolean` | Whether the API call was successful. |

#### Example: List

```ruby
# list returns an Array of WorkersNamespaceList records (raises on error).
workers_namespace_lists = client.WorkersNamespaceList.list
```


### WorkersNamespaceScriptDeleteBulk

Create an instance: `workers_namespace_script_delete_bulk = client.WorkersNamespaceScriptDeleteBulk`

#### Operations

| Method | Description |
| --- | --- |
| `remove(match)` | Remove the matching entity. |


### WorkersNamespaceScriptResponseSingle

Create an instance: `workers_namespace_script_response_single = client.WorkersNamespaceScriptResponseSingle`

#### Operations

| Method | Description |
| --- | --- |
| `load(match)` | Load a single entity by match criteria. |
| `update(data)` | Update an existing entity. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `errors` | `Array` |  |
| `messages` | `Array` |  |
| `result` | `Hash` | Details about a worker uploaded to a Workers for Platforms namespace. |
| `success` | `Boolean` | Whether the API call was successful. |

#### Example: Load

```ruby
# load returns the ENTITY — call data_get for the WorkersNamespaceScriptResponseSingle record (raises on error).
workers_namespace_script_response_single = client.WorkersNamespaceScriptResponseSingle.load({ "account_id" => "account_id", "namespace_id" => "namespace_id", "script_name" => "script_name" })
```


### WorkersNamespaceSingle

Create an instance: `workers_namespace_single = client.WorkersNamespaceSingle`

#### Operations

| Method | Description |
| --- | --- |
| `create(data)` | Create a new entity with the given data. |
| `load(match)` | Load a single entity by match criteria. |
| `update(data)` | Update an existing entity. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `errors` | `Array` |  |
| `messages` | `Array` |  |
| `name` | `String` | The name of the dispatch namespace. |
| `result` | `Hash` |  |
| `success` | `Boolean` | Whether the API call was successful. |
| `trusted_workers` | `Boolean` | Whether the Workers in the namespace are executed in a "trusted" manner. |

#### Example: Load

```ruby
# load returns the ENTITY — call data_get for the WorkersNamespaceSingle record (raises on error).
workers_namespace_single = client.WorkersNamespaceSingle.load({ "account_id" => "account_id", "dispatch_namespace" => "dispatch_namespace" })
```

#### Example: Create

```ruby
workers_namespace_single = client.WorkersNamespaceSingle.create({
  "account_id" => "example_account_id", # String
  "errors" => [], # Array
  "messages" => [], # Array
  "success" => true, # Boolean
})
```


### WorkersPipelinesOther

Create an instance: `workers_pipelines_other = client.WorkersPipelinesOther`

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
| `config` | `Object` | Defines the configuration of the R2 Sink. |
| `created_at` | `String` |  |
| `destination` | `Hash` |  |
| `endpoint` | `String` | Indicates the endpoint URL to send traffic. |
| `failure_reason` | `String` | Indicates the reason for the failure of the Pipeline. |
| `format` | `Object` | Defines the output data format of a sink. |
| `graph` | `Hash` | Indicates the processing flow to implement the SQL. |
| `http` | `Hash` |  |
| `id` | `String` | Indicates a unique identifier for this pipeline. |
| `modified_at` | `String` |  |
| `name` | `String` | Indicates the name of the Pipeline. |
| `schema` | `Hash` | Defines the schema of the events in the data stream. |
| `source` | `Array` |  |
| `sql` | `String` | Specifies SQL for the Pipeline processing flow. |
| `status` | `String` | Indicates the current status of the Pipeline. |
| `tables` | `Array` | List of streams and sinks used by this pipeline. |
| `type` | `String` | Specifies the type of sink. |
| `version` | `Float` | Indicates the version number of last saved configuration. |
| `worker_binding` | `Hash` |  |

#### Example: Load

```ruby
# load returns the ENTITY — call data_get for the WorkersPipelinesOther record (raises on error).
workers_pipelines_other = client.WorkersPipelinesOther.load({ "account_id" => "account_id" })
```

#### Example: List

```ruby
# list returns an Array of WorkersPipelinesOther records (raises on error).
workers_pipelines_others = client.WorkersPipelinesOther.list
```

#### Example: Create

```ruby
workers_pipelines_other = client.WorkersPipelinesOther.create({
  "account_id" => "example_account_id", # String
  "created_at" => "example_created_at", # String
  "destination" => {}, # Hash
  "endpoint" => "example_endpoint", # String
  "graph" => {}, # Hash
  "http" => {}, # Hash
  "id" => "example_id", # String
  "modified_at" => "example_modified_at", # String
  "name" => "example_name", # String
  "source" => [], # Array
  "sql" => "example_sql", # String
  "status" => "example_status", # String
  "tables" => [], # Array
  "type" => "example_type", # String
  "version" => 1, # Float
  "worker_binding" => {}, # Hash
})
```


### WorkersScriptAndVersionSetting

Create an instance: `workers_script_and_version_setting = client.WorkersScriptAndVersionSetting`

#### Operations

| Method | Description |
| --- | --- |
| `list(match)` | List entities matching the criteria. |
| `update(data)` | Update an existing entity. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `errors` | `Array` |  |
| `messages` | `Array` |  |
| `result` | `Hash` |  |
| `success` | `Boolean` | Whether the API call was successful. |

#### Example: List

```ruby
# list returns an Array of WorkersScriptAndVersionSetting records (raises on error).
workers_script_and_version_settings = client.WorkersScriptAndVersionSetting.list
```


### WorkersScriptResponseCollection

Create an instance: `workers_script_response_collection = client.WorkersScriptResponseCollection`

#### Operations

| Method | Description |
| --- | --- |
| `list(match)` | List entities matching the criteria. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `errors` | `Array` |  |
| `messages` | `Array` |  |
| `result` | `Array` |  |
| `success` | `Boolean` | Whether the API call was successful. |

#### Example: List

```ruby
# list returns an Array of WorkersScriptResponseCollection records (raises on error).
workers_script_response_collections = client.WorkersScriptResponseCollection.list
```


### WorkersScriptResponseSingle

Create an instance: `workers_script_response_single = client.WorkersScriptResponseSingle`

#### Operations

| Method | Description |
| --- | --- |
| `update(data)` | Update an existing entity. |


### WorkersSmartPlacement

Create an instance: `workers_smart_placement = client.WorkersSmartPlacement`

#### Operations

| Method | Description |
| --- | --- |
| `list(match)` | List entities matching the criteria. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `errors` | `Array` |  |
| `messages` | `Array` |  |
| `result` | `Hash` |  |
| `success` | `Boolean` | Whether the API call was successful. |

#### Example: List

```ruby
# list returns an Array of WorkersSmartPlacement records (raises on error).
workers_smart_placements = client.WorkersSmartPlacement.list
```


### WorkersUsageModel

Create an instance: `workers_usage_model = client.WorkersUsageModel`

#### Operations

| Method | Description |
| --- | --- |
| `list(match)` | List entities matching the criteria. |
| `update(data)` | Update an existing entity. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `errors` | `Array` |  |
| `messages` | `Array` |  |
| `result` | `Hash` |  |
| `success` | `Boolean` | Whether the API call was successful. |
| `usage_model` | `String` | Usage model for the Worker invocations. |
| `user_limits` | `Hash` | User-defined resource limits for Workers with standard usage model. |

#### Example: List

```ruby
# list returns an Array of WorkersUsageModel records (raises on error).
workers_usage_models = client.WorkersUsageModel.list
```


### WorkersVersionsList

Create an instance: `workers_versions_list = client.WorkersVersionsList`

#### Operations

| Method | Description |
| --- | --- |
| `list(match)` | List entities matching the criteria. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `errors` | `Array` |  |
| `messages` | `Array` |  |
| `result` | `Hash` |  |
| `success` | `Boolean` | Whether the API call was successful. |

#### Example: List

```ruby
# list returns an Array of WorkersVersionsList records (raises on error).
workers_versions_lists = client.WorkersVersionsList.list
```


### WorkersVersionsSingle

Create an instance: `workers_versions_single = client.WorkersVersionsSingle`

#### Operations

| Method | Description |
| --- | --- |
| `load(match)` | Load a single entity by match criteria. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `errors` | `Array` |  |
| `messages` | `Array` |  |
| `result` | `Object` |  |
| `success` | `Boolean` | Whether the API call was successful. |

#### Example: Load

```ruby
# load returns the ENTITY — call data_get for the WorkersVersionsSingle record (raises on error).
workers_versions_single = client.WorkersVersionsSingle.load({ "account_id" => "account_id", "script_id" => "script_id", "version_id" => "version_id" })
```


### WorkersVersionsUpload

Create an instance: `workers_versions_upload = client.WorkersVersionsUpload`

#### Operations

| Method | Description |
| --- | --- |
| `create(data)` | Create a new entity with the given data. |

#### Example: Create

```ruby
workers_versions_upload = client.WorkersVersionsUpload.create({
  "account_id" => "example_account_id", # String
  "script_name" => "example_script_name", # String
})
```


### Workflow

Create an instance: `workflow = client.Workflow`

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
| `class_name` | `String` |  |
| `concurrency` | `Hash` |  |
| `default_retention` | `Hash` | Default retention applied to instances of this version when they do not set their own retention. |
| `errors` | `Array` |  |
| `id` | `String` |  |
| `instances` | `Array` |  |
| `limits` | `Hash` |  |
| `messages` | `Array` |  |
| `result` | `Hash` |  |
| `result_info` | `Hash` |  |
| `schedules` | `Array` |  |
| `script_name` | `String` |  |
| `success` | `Boolean` |  |

#### Example: Load

```ruby
# load returns the ENTITY — call data_get for the Workflow record (raises on error).
workflow = client.Workflow.load({ "id" => "workflow_id", "account_id" => "account_id" })
```

#### Example: List

```ruby
# list returns an Array of Workflow records (raises on error).
workflows = client.Workflow.list
```

#### Example: Create

```ruby
workflow = client.Workflow.create({
  "account_id" => "example_account_id", # String
  "workflow_id" => "example_workflow_id", # String
  "class_name" => "example_class_name", # String
  "errors" => [], # Array
  "instances" => [], # Array
  "messages" => [], # Array
  "result" => {}, # Hash
  "result_info" => {}, # Hash
  "script_name" => "example_script_name", # String
  "success" => true, # Boolean
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

Features are the extension mechanism. A feature is a Ruby class
with hook methods named after pipeline stages (e.g. `PrePoint`,
`PreSpec`). Each method receives the context.

The SDK ships with built-in features:

- **TestFeature**: Test transport

Features are initialized in order. Hooks fire in the order features
were added, so later features can override earlier ones.

### Data as hashes

The Ruby SDK uses plain Ruby hashes throughout rather than typed
objects. This mirrors the dynamic nature of the API and keeps the
SDK flexible — no code generation is needed when the API schema
changes.

Use `Helpers.to_map()` to safely validate that a value is a hash.

### Module structure

```
rb/
├── CloudflareWorkers_sdk.rb       -- Main SDK module
├── config.rb                  -- Configuration
├── schema.rb                  -- Generated option + entity specs
├── features.rb                -- Feature factory
├── core/                      -- Core types and context
├── entity/                    -- Entity implementations
├── feature/                   -- Built-in features (Base, Test, Log)
├── utility/                   -- Utility functions and struct library
└── test/                      -- Test suites
```

The main module (`CloudflareWorkers_sdk`) exports the SDK class
and test helper. Import entity or utility modules directly only
when needed.

### Entity state

Entity instances are stateful. After a successful `list`, the entity
stores the returned data and match criteria internally.

```ruby
workersubdomain = client.WorkerSubdomain
workersubdomain.list()

# workersubdomain.data_get now returns the workersubdomain data from the last list
# workersubdomain.match_get returns the last match criteria
```

Call `make` to create a fresh instance with the same configuration
but no stored state.

### Direct vs entity access

The entity interface handles URL construction, parameter placement,
and response parsing automatically. Use it for standard CRUD operations.

`direct` gives full control over the HTTP request. Use it for
non-standard endpoints, bulk operations, or any path not modelled as
an entity. `prepare` builds the request without sending it — useful
for debugging or custom transport.


## Full Reference

See [REFERENCE.md](REFERENCE.md) for complete API reference
documentation including all method signatures, entity field schemas,
and detailed usage examples.
