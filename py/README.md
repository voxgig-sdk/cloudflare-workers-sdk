# CloudflareWorkers Python SDK



The Python SDK for the CloudflareWorkers API — an entity-oriented client following Pythonic conventions.

The SDK exposes the API as capitalised, semantic **Entities** — for example `client.Account()` — each
carrying a small, uniform set of operations (`list`, `load`, `create`, `update`, `remove`, `patch`) instead of raw URL
paths and query strings. You work with named resources and verbs, which
keeps the cognitive load low.

> Other languages, the CLI, and MCP server live alongside this one — see
> the [top-level README](../README.md).


## Install
This package is not yet published to PyPI. Install it from the GitHub
release tag (`py/vX.Y.Z`, see [Releases](https://github.com/voxgig-sdk/cloudflare-workers-sdk/releases)) or
from a source checkout:

```bash
pip install -e .
```


## Tutorial: your first API call

This tutorial walks through creating a client, listing entities, and
loading a specific record.

### 1. Create a client

```python
import os
from cloudflareworkers_sdk import CloudflareWorkersSDK

client = CloudflareWorkersSDK({
    "apikey": os.environ.get("CLOUDFLARE_WORKERS_APIKEY"),
})
```

### 2. List account records

`list()` returns a `list` of records (each a `dict`) and raises on
error — iterate it directly.

```python
try:
    accounts = client.Account().list({"id": "example"})
    for account in accounts:
        print(account)
except Exception as err:
    print(f"list failed: {err}")
```

### 3. Load an application

Application is nested under account, so provide the `account_id`.
`load()` returns the ENTITY — call data_get() for the record — and raises on error.

```python
try:
    application = client.Application().load({"account_id": "example_account_id", "id": "example_id"})
    print(application)
except Exception as err:
    print(f"load failed: {err}")
```


## Error handling

Entity operations raise on failure, so wrap them in `try` / `except`:

```python
try:
    workersubdomains = client.WorkerSubdomain().list()
    print(workersubdomains)
except Exception as err:
    print(f"list failed: {err}")
```

`direct()` does **not** raise — it returns the result envelope. Branch
on `ok`; on failure `status` holds the HTTP status (for error responses)
and `err` holds a transport error, so read both defensively:

```python
result = client.direct({
    "path": "/api/resource/{id}",
    "method": "GET",
    "params": {"id": "example_id"},
})

if not result["ok"]:
    print("request failed:", result.get("status"), result.get("err"))
```


## How-to guides

### Make a direct HTTP request

For endpoints not covered by entity methods:

```python
result = client.direct({
    "path": "/api/resource/{id}",
    "method": "GET",
    "params": {"id": "example"},
})

if result["ok"]:
    print(result["status"])  # 200
    print(result["data"])    # response body
else:
    # A non-2xx response carries status + data (the error body); a
    # transport-level failure carries err instead. Only one is present, so
    # read both with .get() rather than indexing a key that may be absent.
    print(result.get("status"), result.get("err"))
```

### Prepare a request without sending it

```python
# prepare() returns the fetch definition and raises on error.
fetchdef = client.prepare({
    "path": "/api/resource/{id}",
    "method": "DELETE",
    "params": {"id": "example"},
})

print(fetchdef["url"])
print(fetchdef["method"])
print(fetchdef["headers"])
```

### Use test mode

Create a mock client for unit testing — no server required:

```python
client = CloudflareWorkersSDK.test()

# Entity ops return the ENTITY and raises on error;
# call data_get() for the record.
workersubdomain = client.WorkerSubdomain().list()
# workersubdomain contains the mock response record
```

### Use a custom fetch function

Replace the HTTP transport with your own function:

```python
def mock_fetch(url, init):
    return {
        "status": 200,
        "statusText": "OK",
        "headers": {},
        "json": lambda: {"id": "mock01"},
    }, None

client = CloudflareWorkersSDK({
    "base": "http://localhost:8080",
    "system": {
        "fetch": mock_fetch,
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
cd py && pytest test/
```


## Reference

### CloudflareWorkersSDK

```python
from cloudflareworkers_sdk import CloudflareWorkersSDK

client = CloudflareWorkersSDK(options)
```

Creates a new SDK client.

| Option | Type | Description |
| --- | --- | --- |
| `apikey` | `str` | API key for authentication. |
| `base` | `str` | Base URL of the API server. |
| `prefix` | `str` | URL path prefix prepended to all requests. |
| `suffix` | `str` | URL path suffix appended to all requests. |
| `feature` | `dict` | Feature activation flags. |
| `extend` | `list` | Additional Feature instances to load. |
| `system` | `dict` | System overrides (e.g. custom `fetch` function). |

### test

```python
client = CloudflareWorkersSDK.test(testopts, sdkopts)
```

Creates a test-mode client with mock transport. Both arguments may be `None`.

### CloudflareWorkersSDK methods

| Method | Signature | Description |
| --- | --- | --- |
| `options_map` | `() -> dict` | Deep copy of current SDK options. |
| `get_utility` | `() -> Utility` | Copy of the SDK utility object. |
| `prepare` | `(fetchargs) -> dict` | Build an HTTP request definition without sending. Raises on error. |
| `direct` | `(fetchargs) -> dict` | Build and send an HTTP request. Returns a result dict (branch on `ok`). |
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
| `list` | `(reqmatch, ctrl) -> list` | List entities matching the criteria. Raises on error. |
| `create` | `(reqdata, ctrl) -> any` | Create a new entity. Raises on error. |
| `update` | `(reqdata, ctrl) -> any` | Update an existing entity. Raises on error. |
| `remove` | `(reqmatch, ctrl) -> any` | Remove an entity. Raises on error. |
| `data_get` | `() -> dict` | Get entity data. |
| `data_set` | `(data)` | Set entity data. |
| `match_get` | `() -> dict` | Get entity match criteria. |
| `match_set` | `(match)` | Set entity match criteria. |
| `make` | `() -> Entity` | Create a new instance with the same options. |
| `get_name` | `() -> str` | Return the entity name. |

### Result shape

Entity operations return the ENTITY (call data_get() for the record) (a `dict` for single-entity
ops, a `list` for `list`) and raise on error. Wrap calls in
`try`/`except` to handle failures.

The `direct()` escape hatch never raises — it returns a result `dict`
you branch on via `result["ok"]`:

| Key | Type | Description |
| --- | --- | --- |
| `ok` | `bool` | `True` if the HTTP status is 2xx. |
| `status` | `int` | HTTP status code. |
| `headers` | `dict` | Response headers. |
| `data` | `any` | Parsed JSON response body. |

On error, `ok` is `False` and `err` contains the error value.

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

Create an instance: `account = client.Account()`

#### Operations

| Method | Description |
| --- | --- |
| `list()` | List entities, optionally matching the given criteria. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `id` | `str` |  |

#### Example: List

```python
accounts = client.Account().list({"id": "example"})
```


### Application

Create an instance: `application = client.Application()`

#### Operations

| Method | Description |
| --- | --- |
| `create(data)` | Create a new entity with the given data. |
| `list()` | List entities, optionally matching the given criteria. |
| `load(match)` | Load a single entity by match criteria. |
| `remove(match)` | Remove the matching entity. |
| `update(data)` | Update an existing entity. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `configuration` | `dict` | Application configuration fields you can change without creating a rollout. |
| `constraints` | `dict` |  |
| `errors` | `list` |  |
| `id` | `str` |  |
| `max_instances` | `int` | Maximum number of instances that an autoscaling application can run. |
| `messages` | `list` |  |
| `observability` | `Any` | Top-level application observability settings. |
| `result` | `Any` | The public Containers API returns an application. |
| `result_info` | `dict` | Cursor pagination details for a v4 API list response. |
| `rollout_active_grace_period` | `int` | Grace period for active instances to stay alive before becoming eligible for shutdown signal due to a rollout, in seconds. |
| `success` | `bool` | Whether the API call was successful. |

#### Example: Load

```python
application = client.Application().load({"id": "application_id", "account_id": "account_id"})
```

#### Example: List

```python
applications = client.Application().list({"account_id": "example"})
```

#### Example: Create

```python
application = client.Application().create({
    "account_id": "example_account_id",  # str
    "errors": [],  # list
    "messages": [],  # list
    "result": "example_result",  # Any
    "result_info": {},  # dict
    "success": True,  # bool
})
```


### Brapi

Create an instance: `brapi = client.Brapi()`

#### Operations

| Method | Description |
| --- | --- |
| `create(data)` | Create a new entity with the given data. |
| `list()` | List entities, optionally matching the given criteria. |
| `load(match)` | Load a single entity by match criteria. |
| `remove(match)` | Remove the matching entity. |
| `update(data)` | Update an existing entity. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `Browser` | `str` | Browser name and version. |
| `ProtocolVersion` | `str` | Chrome DevTools Protocol version. |
| `UserAgent` | `str` | User agent string. |
| `V8Version` | `str` | V8 JavaScript engine version. |
| `WebKitVersion` | `str` | WebKit version. |
| `actionTimeout` | `float` | The maximum duration allowed for the browser action to complete after the page has loaded (such as taking screenshots, extracting content, or generating PDFs). |
| `addScriptTag` | `list` | Adds a script element into the page with the desired URL or content. |
| `addStyleTag` | `list` | Adds a `<link rel="stylesheet">` tag into the page with the desired URL or a `<style type="text/css">` tag with the content. |
| `allowRequestPattern` | `list` | Only allow requests that match the provided regex patterns, eg. |
| `allowResourceTypes` | `list` | Only allow requests that match the provided resource types, eg. |
| `authenticate` | `dict` | Provide credentials for HTTP authentication. |
| `bestAttempt` | `bool` | Attempt to proceed when 'awaited' events fail or timeout. |
| `closeReason` | `float` | Reason code for session closure. |
| `closeReasonText` | `str` | Human-readable close reason. |
| `commands` | `list` | Available commands. |
| `connectionEndTime` | `float` | Connection end time. |
| `connectionId` | `str` | Connection ID. |
| `connectionStartTime` | `float` | Connection start time. |
| `cookies` | `list` | Check [options](https://pptr.dev/api/puppeteer.page.setcookie). |
| `custom_ai` | `list` | Optional list of custom AI models to use for the request. |
| `dependencies` | `list` | Domain dependencies. |
| `description` | `str` | Target description. |
| `devtoolsFrontendUrl` | `str` | DevTools frontend URL. |
| `domain` | `str` | Domain name. |
| `elements` | `list` |  |
| `emulateMediaType` | `str` |  |
| `endTime` | `float` | Session end time. |
| `errors` | `list` |  |
| `events` | `list` | Available events. |
| `excludeExternalLinks` | `bool` |  |
| `experimental` | `bool` | Whether this domain is experimental. |
| `formats` | `list` |  |
| `gotoOptions` | `dict` | Check [options](https://pptr.dev/api/puppeteer.gotooptions). |
| `guardrails` | `dict` |  |
| `html` | `str` | Set the content of the page, eg: `<h1>Hello World!!</h1>`. |
| `id` | `str` | Target ID. |
| `interestingOnly` | `bool` |  |
| `lastUpdated` | `float` | Last updated timestamp. |
| `message` | `str` | Target activated. |
| `meta` | `dict` |  |
| `pdfOptions` | `dict` | Check [options](https://pptr.dev/api/puppeteer.pdfoptions). |
| `prompt` | `str` |  |
| `rejectRequestPattern` | `list` | Block undesired requests that match the provided regex patterns, eg. |
| `rejectResourceTypes` | `list` | Block undesired requests that match the provided resource types, eg. |
| `response_format` | `dict` |  |
| `result` | `dict` | HTML content. |
| `root` | `str` |  |
| `screenshotOptions` | `dict` | Check [options](https://pptr.dev/api/puppeteer.screenshotoptions). |
| `scrollPage` | `bool` |  |
| `selector` | `str` |  |
| `sessionId` | `str` | Session ID. |
| `setExtraHTTPHeaders` | `dict` |  |
| `setJavaScriptEnabled` | `bool` |  |
| `startTime` | `float` | Session start time. |
| `success` | `bool` | Response status. |
| `title` | `str` | Title of the target. |
| `type` | `str` | Target type (page, background_page, worker, etc.). |
| `types` | `list` | Type definitions. |
| `url` | `str` | URL of the target. |
| `userAgent` | `str` |  |
| `viewport` | `dict` | Check [options](https://pptr.dev/api/puppeteer.page.setviewport). |
| `visibleLinksOnly` | `bool` |  |
| `waitForSelector` | `dict` | Wait for the selector to appear in page. |
| `waitForTimeout` | `float` | Waits for a specified timeout before continuing. |
| `webSocketDebuggerUrl` | `str` | WebSocket URL for debugging this target. |

#### Example: Load

```python
brapi = client.Brapi().load({"account_id": "account_id"})
```

#### Example: List

```python
brapis = client.Brapi().list({"account_id": "example"})
```

#### Example: Create

```python
brapi = client.Brapi().create({
    "account_id": "example_account_id",  # str
    "Browser": "example_Browser",  # str
    "ProtocolVersion": "example_ProtocolVersion",  # str
    "UserAgent": "example_UserAgent",  # str
    "V8Version": "example_V8Version",  # str
    "WebKitVersion": "example_WebKitVersion",  # str
    "authenticate": {},  # dict
    "domain": "example_domain",  # str
    "elements": [],  # list
    "id": "example_id",  # str
    "message": "example_message",  # str
    "meta": {},  # dict
    "response_format": {},  # dict
    "result": {},  # dict
    "sessionId": "example_sessionId",  # str
    "success": True,  # bool
    "type": "example_type",  # str
    "url": "example_url",  # str
    "viewport": {},  # dict
    "waitForSelector": {},  # dict
})
```


### Build

Create an instance: `build = client.Build()`

#### Operations

| Method | Description |
| --- | --- |
| `list()` | List entities, optionally matching the given criteria. |
| `load(match)` | Load a single entity by match criteria. |
| `update(data)` | Update an existing entity. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `errors` | `list` |  |
| `id` | `str` |  |
| `messages` | `list` |  |
| `result` | `dict` |  |
| `result_info` | `dict` |  |
| `success` | `bool` |  |

#### Example: Load

```python
build = client.Build().load({"id": "build_id", "account_id": "account_id"})
```

#### Example: List

```python
builds = client.Build().list({"account_id": "example", "version_id": "example"})
```


### BuildToken

Create an instance: `build_token = client.BuildToken()`

#### Operations

| Method | Description |
| --- | --- |
| `create(data)` | Create a new entity with the given data. |
| `list()` | List entities, optionally matching the given criteria. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `build_token_name` | `str` |  |
| `build_token_secret` | `str` |  |
| `cloudflare_token_id` | `str` |  |
| `errors` | `list` |  |
| `messages` | `list` |  |
| `result` | `dict` |  |
| `result_info` | `dict` |  |
| `success` | `bool` |  |

#### Example: List

```python
build_tokens = client.BuildToken().list({"account_id": "example"})
```

#### Example: Create

```python
build_token = client.BuildToken().create({
    "account_id": "example_account_id",  # str
    "build_token_name": "example_build_token_name",  # str
    "build_token_secret": "example_build_token_secret",  # str
    "cloudflare_token_id": "example_cloudflare_token_id",  # str
    "errors": [],  # list
    "messages": [],  # list
    "result": {},  # dict
    "success": True,  # bool
})
```


### BuildsApi

Create an instance: `builds_api = client.BuildsApi()`

#### Operations

| Method | Description |
| --- | --- |
| `create(data)` | Create a new entity with the given data. |
| `remove(match)` | Remove the matching entity. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `errors` | `list` |  |
| `messages` | `list` |  |
| `result` | `dict` |  |
| `result_info` | `dict` |  |
| `success` | `bool` |  |

#### Example: Create

```python
builds_api = client.BuildsApi().create({
    "account_id": "example_account_id",  # str
    "trigger_id": "example_trigger_id",  # str
    "errors": [],  # list
    "messages": [],  # list
    "result": {},  # dict
    "success": True,  # bool
})
```


### Connection

Create an instance: `connection = client.Connection()`

#### Operations

| Method | Description |
| --- | --- |
| `remove(match)` | Remove the matching entity. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `id` | `str` |  |


### ContainerImage

Create an instance: `container_image = client.ContainerImage()`

#### Operations

| Method | Description |
| --- | --- |
| `create(data)` | Create a new entity with the given data. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `image` | `str` | Image url. |

#### Example: Create

```python
container_image = client.ContainerImage().create({
    "account_id": "example_account_id",  # str
    "image": "example_image",  # str
})
```


### ContainerInstance

Create an instance: `container_instance = client.ContainerInstance()`

#### Operations

| Method | Description |
| --- | --- |
| `list()` | List entities, optionally matching the given criteria. |
| `load(match)` | Load a single entity by match criteria. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `errors` | `list` |  |
| `id` | `str` |  |
| `messages` | `list` |  |
| `result` | `Any` | A container instance belonging to an application. |
| `result_info` | `dict` | Cursor pagination details for a v4 API list response. |
| `success` | `bool` | Whether the API call was successful. |

#### Example: Load

```python
container_instance = client.ContainerInstance().load({"id": "container_instance_id", "account_id": "account_id", "application_id": "application_id"})
```

#### Example: List

```python
container_instances = client.ContainerInstance().list({"account_id": "example", "application_id": "example"})
```


### DeployHook

Create an instance: `deploy_hook = client.DeployHook()`

#### Operations

| Method | Description |
| --- | --- |
| `create(data)` | Create a new entity with the given data. |
| `list()` | List entities, optionally matching the given criteria. |
| `load(match)` | Load a single entity by match criteria. |
| `remove(match)` | Remove the matching entity. |
| `update(data)` | Update an existing entity. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `branch` | `str` | Git branch name. |
| `deploy_hook_name` | `str` | Deploy hook name (1-58 characters). |
| `errors` | `list` |  |
| `id` | `str` |  |
| `messages` | `list` |  |
| `result` | `dict` |  |
| `result_info` | `dict` |  |
| `success` | `bool` |  |

#### Example: Load

```python
deploy_hook = client.DeployHook().load({"id": "deploy_hook_id", "account_id": "account_id", "worker_id": "worker_id"})
```

#### Example: List

```python
deploy_hooks = client.DeployHook().list({"account_id": "example", "script_name": "example"})
```

#### Example: Create

```python
deploy_hook = client.DeployHook().create({
    "id": "example_id",  # str
    "branch": "example_branch",  # str
    "deploy_hook_name": "example_deploy_hook_name",  # str
    "errors": [],  # list
    "messages": [],  # list
    "result": {},  # dict
    "success": True,  # bool
})
```


### Deployment

Create an instance: `deployment = client.Deployment()`

#### Operations

| Method | Description |
| --- | --- |
| `remove(match)` | Remove the matching entity. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `id` | `str` |  |


### Destination

Create an instance: `destination = client.Destination()`

#### Operations

| Method | Description |
| --- | --- |
| `create(data)` | Create a new entity with the given data. |
| `list()` | List entities, optionally matching the given criteria. |
| `remove(match)` | Remove the matching entity. |
| `update(data)` | Update an existing entity. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `configuration` | `dict` |  |
| `enabled` | `bool` |  |
| `errors` | `list` |  |
| `id` | `str` |  |
| `messages` | `list` |  |
| `name` | `str` |  |
| `result` | `dict` |  |
| `skipPreflightCheck` | `bool` |  |
| `success` | `bool` |  |

#### Example: List

```python
destinations = client.Destination().list({"account_id": "example"})
```

#### Example: Create

```python
destination = client.Destination().create({
    "account_id": "example_account_id",  # str
    "configuration": {},  # dict
    "enabled": True,  # bool
    "errors": [],  # list
    "messages": [],  # list
    "name": "example_name",  # str
    "result": {},  # dict
    "success": True,  # bool
})
```


### Domain

Create an instance: `domain = client.Domain()`

#### Operations

| Method | Description |
| --- | --- |
| `list()` | List entities, optionally matching the given criteria. |
| `load(match)` | Load a single entity by match criteria. |
| `remove(match)` | Remove the matching entity. |
| `update(data)` | Update an existing entity. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `errors` | `list` |  |
| `id` | `str` |  |
| `messages` | `list` |  |
| `result` | `dict` |  |
| `success` | `bool` | Whether the API call was successful. |

#### Example: Load

```python
domain = client.Domain().load({"id": "domain_id", "account_id": "account_id"})
```

#### Example: List

```python
domains = client.Domain().list({"account_id": "example"})
```


### DurableObjectsNamespace

Create an instance: `durable_objects_namespace = client.DurableObjectsNamespace()`

#### Operations

| Method | Description |
| --- | --- |
| `create(data)` | Create a new entity with the given data. |
| `list()` | List entities, optionally matching the given criteria. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `result` | `list` |  |
| `result_info` | `dict` |  |

#### Example: List

```python
durable_objects_namespaces = client.DurableObjectsNamespace().list({"account_id": "example"})
```

#### Example: Create

```python
durable_objects_namespace = client.DurableObjectsNamespace().create({
    "account_id": "example_account_id",  # str
    "namespace_id": "example_namespace_id",  # str
})
```


### EnvironmentVariable

Create an instance: `environment_variable = client.EnvironmentVariable()`

#### Operations

| Method | Description |
| --- | --- |
| `list()` | List entities, optionally matching the given criteria. |
| `update(data)` | Update an existing entity. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `errors` | `list` |  |
| `messages` | `list` |  |
| `result` | `dict` |  |
| `result_info` | `dict` |  |
| `success` | `bool` |  |

#### Example: List

```python
environment_variables = client.EnvironmentVariable().list({"account_id": "example", "trigger_id": "example"})
```


### GitHubIntegration

Create an instance: `git_hub_integration = client.GitHubIntegration()`

#### Operations

| Method | Description |
| --- | --- |
| `list()` | List entities, optionally matching the given criteria. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `errors` | `list` |  |
| `messages` | `list` |  |
| `result` | `dict` |  |
| `result_info` | `dict` |  |
| `success` | `bool` |  |

#### Example: List

```python
git_hub_integrations = client.GitHubIntegration().list({"account_id": "example", "provider_account_id": "example", "provider_type": "example", "repo_id": "example", "branch": "example"})
```


### Hyperdrive

Create an instance: `hyperdrive = client.Hyperdrive()`

#### Operations

| Method | Description |
| --- | --- |
| `create(data)` | Create a new entity with the given data. |
| `list()` | List entities, optionally matching the given criteria. |
| `load(match)` | Load a single entity by match criteria. |
| `remove(match)` | Remove the matching entity. |
| `update(data)` | Update an existing entity. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `caching` | `dict` |  |
| `created_on` | `str` | Defines the creation time of the Hyperdrive configuration. |
| `id` | `str` | Define configurations using a unique string identifier. |
| `modified_on` | `str` | Defines the last modified time of the Hyperdrive configuration. |
| `mtls` | `dict` | mTLS configuration for the origin connection. |
| `name` | `str` | The name of the Hyperdrive configuration. |
| `origin` | `dict` | Combines database connection fields with exactly one supported network location. |
| `origin_connection_limit` | `int` | The (soft) maximum number of connections the Hyperdrive is allowed to make to the origin database. |
| `restarted_on` | `str` | Defines the last time the Hyperdrive connection pool was explicitly restarted via the restart endpoint. |
| `result` | `dict` |  |

#### Example: Load

```python
hyperdrive = client.Hyperdrive().load({"account_id": "account_id", "hyperdrive_id": "hyperdrive_id"})
```

#### Example: List

```python
hyperdrives = client.Hyperdrive().list({"account_id": "example"})
```

#### Example: Create

```python
hyperdrive = client.Hyperdrive().create({
    "account_id": "example_account_id",  # str
    "integration": "example_integration",  # str
    "id": "example_id",  # str
    "name": "example_name",  # str
    "origin": {},  # dict
    "result": {},  # dict
})
```


### ImageRegistry

Create an instance: `image_registry = client.ImageRegistry()`

#### Operations

| Method | Description |
| --- | --- |
| `create(data)` | Create a new entity with the given data. |
| `list()` | List entities, optionally matching the given criteria. |
| `remove(match)` | Remove the matching entity. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `auth` | `dict` | Credentials for authenticating to a private external image registry. |
| `domain` | `str` | Hostname of the private registry, without a scheme or image path. |
| `errors` | `list` |  |
| `expiration_minutes` | `int` | The number of minutes Cloudflare managed registry credentials stay valid. |
| `id` | `str` |  |
| `is_public` | `bool` | Omit this field or set it to `false`. |
| `kind` | `Any` | Registry provider. |
| `messages` | `list` |  |
| `permissions` | `list` | The permissions for Cloudflare managed registry credentials. |
| `result` | `list` |  |
| `success` | `bool` | Whether the API call was successful. |

#### Example: List

```python
image_registrys = client.ImageRegistry().list({"account_id": "example"})
```

#### Example: Create

```python
image_registry = client.ImageRegistry().create({
    "account_id": "example_account_id",  # str
    "auth": {},  # dict
    "errors": [],  # list
    "kind": "example_kind",  # Any
    "messages": [],  # list
    "result": [],  # list
    "success": True,  # bool
})
```


### Issue

Create an instance: `issue = client.Issue()`

#### Operations

| Method | Description |
| --- | --- |
| `create(data)` | Create a new entity with the given data. |
| `list()` | List entities, optionally matching the given criteria. |
| `load(match)` | Load a single entity by match criteria. |
| `remove(match)` | Remove the matching entity. |
| `update(data)` | Update an existing entity. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `afterInactivitySeconds` | `int` |  |
| `afterOccurrences` | `int` |  |
| `enabled` | `bool` |  |
| `errors` | `list` |  |
| `id` | `str` |  |
| `issueIds` | `list` |  |
| `messages` | `list` |  |
| `name` | `str` |  |
| `policyId` | `str` |  |
| `result` | `dict` |  |
| `result_info` | `dict` |  |
| `service` | `str` |  |
| `status` | `str` |  |
| `success` | `bool` |  |
| `title` | `str` |  |

#### Example: Load

```python
issue = client.Issue().load({"id": "issue_id", "account_id": "account_id"})
```

#### Example: List

```python
issues = client.Issue().list({"account_id": "example"})
```

#### Example: Create

```python
issue = client.Issue().create({
    "account_id": "example_account_id",  # str
    "group_id": "example_group_id",  # str
    "errors": [],  # list
    "issueIds": [],  # list
    "messages": [],  # list
    "policyId": "example_policyId",  # str
    "result": {},  # dict
    "result_info": {},  # dict
    "success": True,  # bool
})
```


### Key

Create an instance: `key = client.Key()`

#### Operations

| Method | Description |
| --- | --- |
| `create(data)` | Create a new entity with the given data. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `datasets` | `list` | Leave this empty to use the default datasets |
| `errors` | `list` |  |
| `filters` | `list` | Apply filters to narrow key discovery. |
| `from` | `float` |  |
| `keyNeedle` | `dict` | If the user suggests a key, use this to narrow down the list of keys returned. |
| `limit` | `float` | Advanced usage: set limit=1000+ to retrieve comprehensive key options without needing additional filtering. |
| `messages` | `list` |  |
| `needle` | `dict` | Search for a specific substring in any of the events |
| `result` | `list` |  |
| `success` | `bool` |  |
| `to` | `float` |  |

#### Example: Create

```python
key = client.Key().create({
    "account_id": "example_account_id",  # str
    "errors": [],  # list
    "keyNeedle": {},  # dict
    "messages": [],  # list
    "needle": {},  # dict
    "result": [],  # list
    "success": True,  # bool
})
```


### LiveTail

Create an instance: `live_tail = client.LiveTail()`

#### Operations

| Method | Description |
| --- | --- |
| `create(data)` | Create a new entity with the given data. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `errors` | `list` |  |
| `filterCombination` | `str` | Set a flag to describe how to combine the filters on the query. |
| `filters` | `list` | Apply filters to the query. |
| `messages` | `list` |  |
| `result` | `dict` |  |
| `scriptId` | `str` |  |
| `success` | `bool` |  |

#### Example: Create

```python
live_tail = client.LiveTail().create({
    "account_id": "example_account_id",  # str
    "errors": [],  # list
    "messages": [],  # list
    "result": {},  # dict
    "success": True,  # bool
})
```


### MetricsExport

Create an instance: `metrics_export = client.MetricsExport()`

#### Operations

| Method | Description |
| --- | --- |
| `create(data)` | Create a new entity with the given data. |
| `list()` | List entities, optionally matching the given criteria. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `errors` | `list` |  |
| `messages` | `list` |  |
| `requester` | `dict` |  |
| `resources` | `list` |  |
| `result` | `list` |  |
| `success` | `bool` |  |

#### Example: List

```python
metrics_exports = client.MetricsExport().list({"account_id": "example"})
```

#### Example: Create

```python
metrics_export = client.MetricsExport().create({
    "account_id": "example_account_id",  # str
    "errors": [],  # list
    "messages": [],  # list
    "requester": {},  # dict
    "resources": [],  # list
    "result": [],  # list
    "success": True,  # bool
})
```


### Namespace

Create an instance: `namespace = client.Namespace()`

#### Operations

| Method | Description |
| --- | --- |
| `remove(match)` | Remove the matching entity. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `id` | `str` |  |


### Preview

Create an instance: `preview = client.Preview()`

#### Operations

| Method | Description |
| --- | --- |
| `create(data)` | Create a new entity with the given data. |
| `list()` | List entities, optionally matching the given criteria. |
| `load(match)` | Load a single entity by match criteria. |
| `remove(match)` | Remove the matching entity. |
| `update(data)` | Update an existing entity. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `errors` | `list` |  |
| `id` | `str` |  |
| `messages` | `list` |  |
| `result` | `dict` |  |
| `success` | `bool` | Whether the API call was successful. |

#### Example: Load

```python
preview = client.Preview().load({"id": "preview_id", "account_id": "account_id", "worker_id": "worker_id"})
```

#### Example: List

```python
previews = client.Preview().list({"account_id": "example", "worker_id": "example"})
```

#### Example: Create

```python
preview = client.Preview().create({
    "account_id": "example_account_id",  # str
    "worker_id": "example_worker_id",  # str
    "errors": [],  # list
    "messages": [],  # list
    "result": {},  # dict
    "success": True,  # bool
})
```


### PreviewDeployment

Create an instance: `preview_deployment = client.PreviewDeployment()`

#### Operations

| Method | Description |
| --- | --- |
| `create(data)` | Create a new entity with the given data. |
| `list()` | List entities, optionally matching the given criteria. |
| `load(match)` | Load a single entity by match criteria. |
| `update(data)` | Update an existing entity. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `errors` | `list` |  |
| `id` | `str` |  |
| `messages` | `list` |  |
| `result` | `Any` |  |
| `success` | `bool` | Whether the API call was successful. |

#### Example: Load

```python
preview_deployment = client.PreviewDeployment().load({"id": "preview_deployment_id", "account_id": "account_id", "preview_id": "preview_id", "worker_id": "worker_id"})
```

#### Example: List

```python
preview_deployments = client.PreviewDeployment().list({"account_id": "example", "id": "example_id", "worker_id": "example"})
```

#### Example: Create

```python
preview_deployment = client.PreviewDeployment().create({
    "account_id": "example_account_id",  # str
    "id": "example_id",  # str
    "worker_id": "example_worker_id",  # str
    "errors": [],  # list
    "messages": [],  # list
    "result": "example_result",  # Any
    "success": True,  # bool
})
```


### Query

Create an instance: `query = client.Query()`

#### Operations

| Method | Description |
| --- | --- |
| `create(data)` | Create a new entity with the given data. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `chart` | `bool` | When true, includes time-series data in the response. |
| `chartType` | `str` | Controls the SQL shape and response payload for the 'calculations' view. |
| `compare` | `bool` | When true, includes a comparison dataset from the previous time period of equal length. |
| `distributionScale` | `str` | Value-axis bucketing for chartType 'distribution'. |
| `dry` | `bool` | When true, executes the query without persisting the results. |
| `errors` | `list` |  |
| `granularity` | `float` | Number of time-series buckets. |
| `ignoreSeries` | `bool` | When true, omits time-series data from the response and returns only aggregated values. |
| `limit` | `float` | Maximum number of events to return when view is 'events'. |
| `messages` | `list` |  |
| `offset` | `str` | Cursor for pagination in event, trace, invocation, and agent views. |
| `offsetBy` | `float` | Numeric offset for paginating grouped/pattern results (top-N lists). |
| `offsetDirection` | `str` | Pagination direction: 'next' for forward, 'prev' for backward. |
| `parameters` | `dict` | Query parameters defining what data to retrieve — filters, calculations, group-bys, and ordering. |
| `queryId` | `str` | Identifier for the query. |
| `result` | `dict` | Complete results of a query run. |
| `success` | `bool` |  |
| `timeframe` | `dict` | Timeframe for the query using Unix timestamps in milliseconds. |
| `view` | `str` | Controls the shape of the response. |

#### Example: Create

```python
query = client.Query().create({
    "account_id": "example_account_id",  # str
    "errors": [],  # list
    "messages": [],  # list
    "queryId": "example_queryId",  # str
    "result": {},  # dict
    "success": True,  # bool
    "timeframe": {},  # dict
})
```


### RepositoryConnection

Create an instance: `repository_connection = client.RepositoryConnection()`

#### Operations

| Method | Description |
| --- | --- |
| `update(data)` | Update an existing entity. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `provider_account_id` | `str` | Provider-specific identifier of the account or namespace that owns the repository. |
| `provider_account_name` | `str` | Human-readable name of the account or namespace that owns the repository. |
| `provider_type` | `str` | Source control provider. |
| `repo_id` | `str` | Provider-specific repository identifier. |
| `repo_name` | `str` | Human-readable repository name. |


### Rollout

Create an instance: `rollout = client.Rollout()`

#### Operations

| Method | Description |
| --- | --- |
| `create(data)` | Create a new entity with the given data. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `description` | `str` | Description of the rollout process. |
| `kind` | `str` | Kind of the rollout process. |
| `percentage` | `int` | Initial target version percentage (0-100). |
| `step_percentage` | `int` | Percentage of rollout to increase in each step when "steps" is absent. |
| `steps` | `list` | Steps defining the rollout process, used when "step_percentage" is absent. |
| `strategy` | `str` | Strategy used for the rollout. |
| `target_configuration` | `dict` | User-specified container configuration changes. |

#### Example: Create

```python
rollout = client.Rollout().create({
    "account_id": "example_account_id",  # str
    "application_id": "example_application_id",  # str
    "description": "example_description",  # str
    "strategy": "example_strategy",  # str
    "target_configuration": {},  # dict
})
```


### SavedQuery

Create an instance: `saved_query = client.SavedQuery()`

#### Operations

| Method | Description |
| --- | --- |
| `create(data)` | Create a new entity with the given data. |
| `list()` | List entities, optionally matching the given criteria. |
| `load(match)` | Load a single entity by match criteria. |
| `remove(match)` | Remove the matching entity. |
| `update(data)` | Update an existing entity. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `description` | `str` |  |
| `errors` | `list` |  |
| `id` | `str` |  |
| `messages` | `list` |  |
| `name` | `str` | Query name |
| `parameters` | `dict` |  |
| `result` | `dict` |  |
| `success` | `bool` |  |

#### Example: Load

```python
saved_query = client.SavedQuery().load({"id": "saved_query_id", "account_id": "account_id"})
```

#### Example: List

```python
saved_querys = client.SavedQuery().list({"account_id": "example"})
```

#### Example: Create

```python
saved_query = client.SavedQuery().create({
    "account_id": "example_account_id",  # str
    "description": "example_description",  # str
    "errors": [],  # list
    "messages": [],  # list
    "name": "example_name",  # str
    "parameters": {},  # dict
    "result": {},  # dict
    "success": True,  # bool
})
```


### Script

Create an instance: `script = client.Script()`

#### Operations

| Method | Description |
| --- | --- |
| `remove(match)` | Remove the matching entity. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `id` | `str` |  |


### ScriptSetting

Create an instance: `script_setting = client.ScriptSetting()`

#### Operations

| Method | Description |
| --- | --- |
| `list()` | List entities, optionally matching the given criteria. |
| `update(data)` | Update an existing entity. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `errors` | `list` |  |
| `logpush` | `bool` | Whether Logpush is turned on for the Worker. |
| `messages` | `list` |  |
| `observability` | `Any` |  |
| `result` | `dict` |  |
| `success` | `bool` | Whether the API call was successful. |
| `tags` | `Any` |  |
| `tail_consumers` | `list` | List of Workers that will consume logs from the attached Worker. |

#### Example: List

```python
script_settings = client.ScriptSetting().list({"account_id": "example", "script_name": "example"})
```


### Secret

Create an instance: `secret = client.Secret()`

#### Operations

| Method | Description |
| --- | --- |
| `create(data)` | Create a new entity with the given data. |
| `list()` | List entities, optionally matching the given criteria. |
| `load(match)` | Load a single entity by match criteria. |
| `remove(match)` | Remove the matching entity. |
| `update(data)` | Update an existing entity. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `comment` | `str` | Freeform text describing the secret. |
| `id` | `str` |  |
| `result` | `Any` |  |
| `scopes` | `list` | The list of services that can use this secret. |
| `value` | `str` | The value of the secret. |

#### Example: Load

```python
secret = client.Secret().load({"id": "secret_id", "account_id": "account_id", "store_id": "store_id"})
```

#### Example: List

```python
secrets = client.Secret().list({"account_id": "example", "store_id": "example"})
```

#### Example: Create

```python
secret = client.Secret().create({
    "account_id": "example_account_id",  # str
    "store_id": "example_store_id",  # str
    "result": "example_result",  # Any
})
```


### SecretsStoreDelete

Create an instance: `secrets_store_delete = client.SecretsStoreDelete()`

#### Operations

| Method | Description |
| --- | --- |
| `remove(match)` | Remove the matching entity. |


### SecretsStoreQuota

Create an instance: `secrets_store_quota = client.SecretsStoreQuota()`

#### Operations

| Method | Description |
| --- | --- |
| `load(match)` | Load a single entity by match criteria. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `result` | `Any` |  |

#### Example: Load

```python
secrets_store_quota = client.SecretsStoreQuota().load({"account_id": "account_id"})
```


### SecretsStoreSecret

Create an instance: `secrets_store_secret = client.SecretsStoreSecret()`

#### Operations

| Method | Description |
| --- | --- |
| `create(data)` | Create a new entity with the given data. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `comment` | `str` | Freeform text describing the secret. |
| `name` | `str` | The name of the secret. |
| `scopes` | `list` | The list of services that can use this secret. |

#### Example: Create

```python
secrets_store_secret = client.SecretsStoreSecret().create({
    "account_id": "example_account_id",  # str
    "secret_id": "example_secret_id",  # str
    "store_id": "example_store_id",  # str
    "name": "example_name",  # str
    "scopes": [],  # list
})
```


### SecretsStoreStore

Create an instance: `secrets_store_store = client.SecretsStoreStore()`

#### Operations

| Method | Description |
| --- | --- |
| `create(data)` | Create a new entity with the given data. |
| `load(match)` | Load a single entity by match criteria. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `id` | `str` |  |
| `name` | `str` | The name of the store. |
| `result` | `Any` |  |

#### Example: Load

```python
secrets_store_store = client.SecretsStoreStore().load({"id": "secrets_store_store_id", "account_id": "account_id"})
```

#### Example: Create

```python
secrets_store_store = client.SecretsStoreStore().create({
    "account_id": "example_account_id",  # str
    "name": "example_name",  # str
    "result": "example_result",  # Any
})
```


### SecretsStoreStoresResponseCollection

Create an instance: `secrets_store_stores_response_collection = client.SecretsStoreStoresResponseCollection()`

#### Operations

| Method | Description |
| --- | --- |
| `list()` | List entities, optionally matching the given criteria. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `result` | `list` |  |

#### Example: List

```python
secrets_store_stores_response_collections = client.SecretsStoreStoresResponseCollection().list({"account_id": "example"})
```


### Setting

Create an instance: `setting = client.Setting()`

#### Operations

| Method | Description |
| --- | --- |
| `list()` | List entities, optionally matching the given criteria. |
| `update(data)` | Update an existing entity. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `errors` | `list` |  |
| `messages` | `list` |  |
| `result` | `dict` |  |
| `success` | `bool` | Whether the API call was successful. |

#### Example: List

```python
settings = client.Setting().list({"account_id": "example", "environment_name": "example", "service_id": "example"})
```


### Shared

Create an instance: `shared = client.Shared()`

#### Operations

| Method | Description |
| --- | --- |
| `create(data)` | Create a new entity with the given data. |
| `load(match)` | Load a single entity by match criteria. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `errors` | `list` |  |
| `id` | `str` |  |
| `messages` | `list` |  |
| `result` | `dict` | Complete results of a query run. |
| `success` | `bool` |  |

#### Example: Load

```python
shared = client.Shared().load({"id": "shared_id", "account_id": "account_id"})
```

#### Example: Create

```python
shared = client.Shared().create({
    "account_id": "example_account_id",  # str
    "errors": [],  # list
    "messages": [],  # list
    "result": {},  # dict
    "success": True,  # bool
})
```


### Tail

Create an instance: `tail = client.Tail()`

#### Operations

| Method | Description |
| --- | --- |
| `remove(match)` | Remove the matching entity. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `id` | `str` |  |


### Token

Create an instance: `token = client.Token()`

#### Operations

| Method | Description |
| --- | --- |
| `remove(match)` | Remove the matching entity. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `id` | `str` |  |


### Trigger

Create an instance: `trigger = client.Trigger()`

#### Operations

| Method | Description |
| --- | --- |
| `create(data)` | Create a new entity with the given data. |
| `remove(match)` | Remove the matching entity. |
| `update(data)` | Update an existing entity. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `branch_excludes` | `list` | Branch patterns that must not start builds. |
| `branch_includes` | `list` | Branch patterns that can start builds. |
| `build_caching_enabled` | `bool` | Whether builds reuse cached dependencies and build artifacts. |
| `build_command` | `str` | Command to build the Worker. |
| `build_token_uuid` | `str` | UUID of the build token used when deploying the Worker. |
| `deploy_command` | `str` | Command to deploy the Worker. |
| `external_script_id` | `str` | System-generated tag of the Worker. |
| `id` | `str` |  |
| `path_excludes` | `list` | Path patterns that must not start builds. |
| `path_includes` | `list` | Path patterns that can start builds. |
| `repo_connection_uuid` | `str` | Repository connection UUID. |
| `root_directory` | `str` | Repository directory in which build and deploy commands run. |
| `trigger_name` | `str` | Human-readable name of the build trigger. |

#### Example: Create

```python
trigger = client.Trigger().create({
    "account_id": "example_account_id",  # str
    "branch_excludes": [],  # list
    "branch_includes": [],  # list
    "build_command": "example_build_command",  # str
    "build_token_uuid": "example_build_token_uuid",  # str
    "deploy_command": "example_deploy_command",  # str
    "external_script_id": "example_external_script_id",  # str
    "path_excludes": [],  # list
    "path_includes": [],  # list
    "repo_connection_uuid": "example_repo_connection_uuid",  # str
    "root_directory": "example_root_directory",  # str
    "trigger_name": "example_trigger_name",  # str
})
```


### Usage

Create an instance: `usage = client.Usage()`

#### Operations

| Method | Description |
| --- | --- |
| `list()` | List entities, optionally matching the given criteria. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `errors` | `list` |  |
| `messages` | `list` |  |
| `result` | `dict` |  |
| `success` | `bool` |  |

#### Example: List

```python
usages = client.Usage().list({"account_id": "example", "from": "example", "to": "example"})
```


### Value

Create an instance: `value = client.Value()`

#### Operations

| Method | Description |
| --- | --- |
| `create(data)` | Create a new entity with the given data. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `datasets` | `list` | Leave this empty to use the default datasets |
| `errors` | `list` |  |
| `filters` | `list` | Apply filters before listing values. |
| `key` | `str` |  |
| `limit` | `float` |  |
| `messages` | `list` |  |
| `needle` | `dict` | Full-text search expression to match events containing the specified text or pattern. |
| `result` | `list` |  |
| `success` | `bool` |  |
| `timeframe` | `dict` |  |
| `type` | `str` |  |

#### Example: Create

```python
value = client.Value().create({
    "account_id": "example_account_id",  # str
    "datasets": [],  # list
    "errors": [],  # list
    "key": "example_key",  # str
    "messages": [],  # list
    "needle": {},  # dict
    "result": [],  # list
    "success": True,  # bool
    "timeframe": {},  # dict
    "type": "example_type",  # str
})
```


### Version

Create an instance: `version = client.Version()`

#### Operations

| Method | Description |
| --- | --- |
| `create(data)` | Create a new entity with the given data. |
| `list()` | List entities, optionally matching the given criteria. |
| `load(match)` | Load a single entity by match criteria. |
| `remove(match)` | Remove the matching entity. |
| `update(data)` | Update an existing entity. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `annotations` | `dict` | Metadata about the version. |
| `assets` | `dict` | Configuration for assets within a Worker. |
| `author_email` | `str` | Email of the user who created the version. |
| `author_id` | `str` | Identifier of the user who created the version. |
| `bindings` | `list` | List of bindings attached to a Worker. |
| `cache_options` | `dict` | Global CacheW configuration for the Worker. |
| `compatibility_date` | `str` | Date indicating targeted support in the Workers runtime. |
| `compatibility_flags` | `list` | Flags that enable or disable certain features in the Workers runtime. |
| `containers` | `list` | List of containers attached to a Worker. |
| `created_on` | `str` | When the version was created. |
| `errors` | `list` |  |
| `exports` | `Any` | Declarative exports for the version, including Durable Object classes (with their `storage` backend) and named Worker entrypoints. |
| `exports_reconciliation` | `Any` | Summary of the declarative exports reconciliation that ran on this upload. |
| `id` | `str` | Version identifier. |
| `limits` | `dict` | Resource limits enforced at runtime. |
| `main_module` | `str` | The name of the main module in the `modules` array (e.g. |
| `messages` | `list` |  |
| `migration_tag` | `str` | Durable Object migration tag. |
| `migrations` | `Any` | Migrations for Durable Objects associated with the version. |
| `modules` | `list` | Code, sourcemaps, and other content used at runtime. |
| `number` | `int` | The integer version number, starting from one. |
| `package_dependencies` | `list` | The list of npm packages that were installed and used when this Worker version was built. |
| `placement` | `dict` | Configuration for [Smart Placement](https://developers.cloudflare.com/workers/configuration/smart-placement). |
| `result` | `dict` |  |
| `source` | `str` | The client used to create the version. |
| `startup_time_ms` | `int` | Time in milliseconds spent on [Worker startup](https://developers.cloudflare.com/workers/platform/limits/#worker-startup-time). |
| `success` | `bool` | Whether the API call was successful. |
| `urls` | `list` | All routable URLs that always point to this version. |
| `usage_model` | `str` | Usage model for the version. |

#### Example: Load

```python
version = client.Version().load({"id": "version_id", "account_id": "account_id", "worker_id": "worker_id"})
```

#### Example: List

```python
versions = client.Version().list({"account_id": "example", "worker_id": "example"})
```

#### Example: Create

```python
version = client.Version().create({
    "account_id": "example_account_id",  # str
    "worker_id": "example_worker_id",  # str
    "cache_options": {},  # dict
    "created_on": "example_created_on",  # str
    "errors": [],  # list
    "id": "example_id",  # str
    "messages": [],  # list
    "number": 1,  # int
    "result": {},  # dict
    "success": True,  # bool
    "urls": [],  # list
})
```


### Worker

Create an instance: `worker = client.Worker()`

#### Operations

| Method | Description |
| --- | --- |
| `create(data)` | Create a new entity with the given data. |
| `list()` | List entities, optionally matching the given criteria. |
| `load(match)` | Load a single entity by match criteria. |
| `remove(match)` | Remove the matching entity. |
| `update(data)` | Update an existing entity. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `auto_build` | `bool` | Whether pushes to the git branch build this Preview. |
| `auto_delete` | `bool` | Whether deleting the git branch also deletes this Preview. |
| `branch` | `Any` | Git branch name (required if commit_hash not provided) |
| `commit_hash` | `Any` | Git commit hash (required if branch not provided) |
| `errors` | `list` |  |
| `git_repository` | `Any` | Git repository settings to update |
| `id` | `str` |  |
| `messages` | `list` |  |
| `previews_base_config` | `dict` | Build and deploy settings when creating a Worker build configuration |
| `previews_enabled` | `bool` | Whether Previews are enabled for this Worker |
| `production_settings` | `dict` | Build and deploy settings when creating a Worker build configuration |
| `result` | `dict` | A single Preview of a Worker, with the build settings it currently uses. |
| `result_info` | `dict` |  |
| `script_tag` | `str` | System-generated tag of the Worker. |
| `seed_repo` | `Any` | Optional repository and file overrides used to seed this build. |
| `settings` | `dict` | Partial build settings for updating a Worker build configuration |
| `success` | `bool` | Whether the API call was successful. |

#### Example: Load

```python
worker = client.Worker().load({"id": "worker_id", "account_id": "account_id"})
```

#### Example: List

```python
workers = client.Worker().list({"account_id": "example"})
```

#### Example: Create

```python
worker = client.Worker().create({
    "account_id": "example_account_id",  # str
    "errors": [],  # list
    "git_repository": "example_git_repository",  # Any
    "messages": [],  # list
    "previews_base_config": {},  # dict
    "previews_enabled": True,  # bool
    "production_settings": {},  # dict
    "result": {},  # dict
    "script_tag": "example_script_tag",  # str
    "success": True,  # bool
})
```


### WorkerCronTrigger

Create an instance: `worker_cron_trigger = client.WorkerCronTrigger()`

#### Operations

| Method | Description |
| --- | --- |
| `list()` | List entities, optionally matching the given criteria. |
| `update(data)` | Update an existing entity. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `errors` | `list` |  |
| `messages` | `list` |  |
| `result` | `dict` |  |
| `success` | `bool` | Whether the API call was successful. |

#### Example: List

```python
worker_cron_triggers = client.WorkerCronTrigger().list({"account_id": "example", "script_name": "example"})
```


### WorkerDeployment

Create an instance: `worker_deployment = client.WorkerDeployment()`

#### Operations

| Method | Description |
| --- | --- |
| `create(data)` | Create a new entity with the given data. |
| `load(match)` | Load a single entity by match criteria. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `annotations` | `dict` |  |
| `author_email` | `str` |  |
| `created_on` | `str` |  |
| `errors` | `list` |  |
| `id` | `str` |  |
| `messages` | `list` |  |
| `result` | `dict` |  |
| `source` | `str` |  |
| `strategy` | `str` |  |
| `success` | `bool` | Whether the API call was successful. |
| `versions` | `list` | Worker versions included in this deployment. |

#### Example: Load

```python
worker_deployment = client.WorkerDeployment().load({"id": "worker_deployment_id", "account_id": "account_id"})
```

#### Example: Create

```python
worker_deployment = client.WorkerDeployment().create({
    "account_id": "example_account_id",  # str
    "script_name": "example_script_name",  # str
    "created_on": "example_created_on",  # str
    "errors": [],  # list
    "id": "example_id",  # str
    "messages": [],  # list
    "result": {},  # dict
    "source": "example_source",  # str
    "strategy": "example_strategy",  # str
    "success": True,  # bool
    "versions": [],  # list
})
```


### WorkerEnvironment

Create an instance: `worker_environment = client.WorkerEnvironment()`

#### Operations

| Method | Description |
| --- | --- |
| `load(match)` | Load a single entity by match criteria. |

#### Example: Load

```python
worker_environment = client.WorkerEnvironment().load({"account_id": "account_id", "environment_name": "environment_name", "service_id": "service_id"})
```


### WorkerRoute

Create an instance: `worker_route = client.WorkerRoute()`

#### Operations

| Method | Description |
| --- | --- |
| `create(data)` | Create a new entity with the given data. |
| `list()` | List entities, optionally matching the given criteria. |
| `load(match)` | Load a single entity by match criteria. |
| `remove(match)` | Remove the matching entity. |
| `update(data)` | Update an existing entity. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `errors` | `list` |  |
| `id` | `str` |  |
| `messages` | `list` |  |
| `pattern` | `str` | Pattern to match incoming requests against. |
| `result` | `dict` |  |
| `script` | `str` | Name of the script to run if the route matches. |
| `success` | `bool` | Whether the API call was successful. |

#### Example: Load

```python
worker_route = client.WorkerRoute().load({"id": "worker_route_id", "zone_id": "zone_id"})
```

#### Example: List

```python
worker_routes = client.WorkerRoute().list({"zone_id": "example"})
```

#### Example: Create

```python
worker_route = client.WorkerRoute().create({
    "zone_id": "example_zone_id",  # str
    "errors": [],  # list
    "id": "example_id",  # str
    "messages": [],  # list
    "pattern": "example_pattern",  # str
    "result": {},  # dict
    "success": True,  # bool
})
```


### WorkerScript

Create an instance: `worker_script = client.WorkerScript()`

#### Operations

| Method | Description |
| --- | --- |
| `create(data)` | Create a new entity with the given data. |
| `list()` | List entities, optionally matching the given criteria. |
| `load(match)` | Load a single entity by match criteria. |
| `remove(match)` | Remove the matching entity. |
| `update(data)` | Update an existing entity. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `errors` | `list` |  |
| `id` | `str` |  |
| `messages` | `list` |  |
| `result` | `dict` | A secret value accessible through a binding. |
| `success` | `bool` | Whether the API call was successful. |

#### Example: Load

```python
worker_script = client.WorkerScript().load({"id": "worker_script_id", "account_id": "account_id"})
```

#### Example: List

```python
worker_scripts = client.WorkerScript().list({"account_id": "example"})
```

#### Example: Create

```python
worker_script = client.WorkerScript().create({
    "account_id": "example_account_id",  # str
    "script_name": "example_script_name",  # str
    "errors": [],  # list
    "messages": [],  # list
    "success": True,  # bool
})
```


### WorkerSubdomain

Create an instance: `worker_subdomain = client.WorkerSubdomain()`

#### Operations

| Method | Description |
| --- | --- |
| `list()` | List entities, optionally matching the given criteria. |
| `remove(match)` | Remove the matching entity. |
| `update(data)` | Update an existing entity. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `errors` | `list` |  |
| `messages` | `list` |  |
| `result` | `dict` |  |
| `subdomain` | `str` |  |
| `success` | `bool` | Whether the API call was successful. |

#### Example: List

```python
worker_subdomains = client.WorkerSubdomain().list({"account_id": "example"})
```


### WorkerTailLog

Create an instance: `worker_tail_log = client.WorkerTailLog()`

#### Operations

| Method | Description |
| --- | --- |
| `create(data)` | Create a new entity with the given data. |
| `list()` | List entities, optionally matching the given criteria. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `errors` | `list` |  |
| `messages` | `list` |  |
| `result` | `dict` |  |
| `success` | `bool` | Whether the API call was successful. |

#### Example: List

```python
worker_tail_logs = client.WorkerTailLog().list({"account_id": "example", "script_name": "example"})
```

#### Example: Create

```python
worker_tail_log = client.WorkerTailLog().create({
    "account_id": "example_account_id",  # str
    "script_name": "example_script_name",  # str
    "errors": [],  # list
    "messages": [],  # list
    "result": {},  # dict
    "success": True,  # bool
})
```


### WorkersAccountSetting

Create an instance: `workers_account_setting = client.WorkersAccountSetting()`

#### Operations

| Method | Description |
| --- | --- |
| `list()` | List entities, optionally matching the given criteria. |
| `update(data)` | Update an existing entity. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `default_usage_model` | `str` |  |
| `errors` | `list` |  |
| `green_compute` | `bool` |  |
| `messages` | `list` |  |
| `result` | `dict` |  |
| `success` | `bool` | Whether the API call was successful. |

#### Example: List

```python
workers_account_settings = client.WorkersAccountSetting().list({"account_id": "example"})
```


### WorkersApiResponseNullResult

Create an instance: `workers_api_response_null_result = client.WorkersApiResponseNullResult()`

#### Operations

| Method | Description |
| --- | --- |
| `remove(match)` | Remove the matching entity. |
| `update(data)` | Update an existing entity. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `errors` | `list` |  |
| `messages` | `list` |  |
| `result` | `dict` |  |
| `success` | `bool` | Whether the API call was successful. |


### WorkersCompletedUploadAsset

Create an instance: `workers_completed_upload_asset = client.WorkersCompletedUploadAsset()`

#### Operations

| Method | Description |
| --- | --- |
| `create(data)` | Create a new entity with the given data. |

#### Example: Create

```python
workers_completed_upload_asset = client.WorkersCompletedUploadAsset().create({
    "account_id": "example_account_id",  # str
    "base64": True,  # bool
})
```


### WorkersCreateAssetsUploadSession

Create an instance: `workers_create_assets_upload_session = client.WorkersCreateAssetsUploadSession()`

#### Operations

| Method | Description |
| --- | --- |
| `create(data)` | Create a new entity with the given data. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `manifest` | `dict` | A manifest ([path]: {hash, size}) map of files to upload. |

#### Example: Create

```python
workers_create_assets_upload_session = client.WorkersCreateAssetsUploadSession().create({
    "account_id": "example_account_id",  # str
    "script_name": "example_script_name",  # str
    "manifest": {},  # dict
})
```


### WorkersForPlatform

Create an instance: `workers_for_platform = client.WorkersForPlatform()`

#### Operations

| Method | Description |
| --- | --- |
| `list()` | List entities, optionally matching the given criteria. |
| `load(match)` | Load a single entity by match criteria. |
| `update(data)` | Update an existing entity. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `errors` | `list` |  |
| `messages` | `list` |  |
| `result` | `dict` | A secret value accessible through a binding. |
| `success` | `bool` | Whether the API call was successful. |

#### Example: Load

```python
workers_for_platform = client.WorkersForPlatform().load({"account_id": "account_id", "namespace_id": "namespace_id"})
```

#### Example: List

```python
workers_for_platforms = client.WorkersForPlatform().list({"account_id": "example"})
```


### WorkersKvApiResponseCommonNoResult

Create an instance: `workers_kv_api_response_common_no_result = client.WorkersKvApiResponseCommonNoResult()`

#### Operations

| Method | Description |
| --- | --- |
| `remove(match)` | Remove the matching entity. |
| `update(data)` | Update an existing entity. |


### WorkersKvNamespace

Create an instance: `workers_kv_namespace = client.WorkersKvNamespace()`

#### Operations

| Method | Description |
| --- | --- |
| `create(data)` | Create a new entity with the given data. |
| `list()` | List entities, optionally matching the given criteria. |
| `load(match)` | Load a single entity by match criteria. |
| `remove(match)` | Remove the matching entity. |
| `update(data)` | Update an existing entity. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `errors` | `list` |  |
| `id` | `str` |  |
| `jurisdiction` | `str` | Specify the jurisdiction to restrict the KV namespace to durably store data within. |
| `keys` | `list` | Array of keys to retrieve (maximum of 100). |
| `messages` | `list` |  |
| `result` | `Any` |  |
| `result_info` | `dict` |  |
| `success` | `bool` | Whether the API call was successful. |
| `title` | `str` | Human-readable string name for a Workers KV namespace. |
| `type` | `str` | Return values as strings with `text`, or parse stored JSON values with `json`. |
| `withMetadata` | `bool` | Whether to include metadata in the response. |

#### Example: Load

```python
workers_kv_namespace = client.WorkersKvNamespace().load({"id": "workers_kv_namespace_id", "account_id": "account_id"})
```

#### Example: List

```python
workers_kv_namespaces = client.WorkersKvNamespace().list({"account_id": "example"})
```

#### Example: Create

```python
workers_kv_namespace = client.WorkersKvNamespace().create({
    "account_id": "example_account_id",  # str
    "errors": [],  # list
    "keys": [],  # list
    "messages": [],  # list
    "success": True,  # bool
    "title": "example_title",  # str
})
```


### WorkersNamespaceList

Create an instance: `workers_namespace_list = client.WorkersNamespaceList()`

#### Operations

| Method | Description |
| --- | --- |
| `list()` | List entities, optionally matching the given criteria. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `errors` | `list` |  |
| `messages` | `list` |  |
| `result` | `list` |  |
| `success` | `bool` | Whether the API call was successful. |

#### Example: List

```python
workers_namespace_lists = client.WorkersNamespaceList().list({"account_id": "example"})
```


### WorkersNamespaceScriptDeleteBulk

Create an instance: `workers_namespace_script_delete_bulk = client.WorkersNamespaceScriptDeleteBulk()`

#### Operations

| Method | Description |
| --- | --- |
| `remove(match)` | Remove the matching entity. |


### WorkersNamespaceScriptResponseSingle

Create an instance: `workers_namespace_script_response_single = client.WorkersNamespaceScriptResponseSingle()`

#### Operations

| Method | Description |
| --- | --- |
| `load(match)` | Load a single entity by match criteria. |
| `update(data)` | Update an existing entity. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `errors` | `list` |  |
| `messages` | `list` |  |
| `result` | `dict` | Details about a worker uploaded to a Workers for Platforms namespace. |
| `success` | `bool` | Whether the API call was successful. |

#### Example: Load

```python
workers_namespace_script_response_single = client.WorkersNamespaceScriptResponseSingle().load({"account_id": "account_id", "namespace_id": "namespace_id", "script_name": "script_name"})
```


### WorkersNamespaceSingle

Create an instance: `workers_namespace_single = client.WorkersNamespaceSingle()`

#### Operations

| Method | Description |
| --- | --- |
| `create(data)` | Create a new entity with the given data. |
| `load(match)` | Load a single entity by match criteria. |
| `update(data)` | Update an existing entity. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `errors` | `list` |  |
| `messages` | `list` |  |
| `name` | `str` | The name of the dispatch namespace. |
| `result` | `dict` |  |
| `success` | `bool` | Whether the API call was successful. |
| `trusted_workers` | `bool` | Whether the Workers in the namespace are executed in a "trusted" manner. |

#### Example: Load

```python
workers_namespace_single = client.WorkersNamespaceSingle().load({"account_id": "account_id", "dispatch_namespace": "dispatch_namespace"})
```

#### Example: Create

```python
workers_namespace_single = client.WorkersNamespaceSingle().create({
    "account_id": "example_account_id",  # str
    "errors": [],  # list
    "messages": [],  # list
    "success": True,  # bool
})
```


### WorkersPipelinesOther

Create an instance: `workers_pipelines_other = client.WorkersPipelinesOther()`

#### Operations

| Method | Description |
| --- | --- |
| `create(data)` | Create a new entity with the given data. |
| `list()` | List entities, optionally matching the given criteria. |
| `load(match)` | Load a single entity by match criteria. |
| `remove(match)` | Remove the matching entity. |
| `update(data)` | Update an existing entity. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `config` | `Any` | Defines the configuration of the R2 Sink. |
| `created_at` | `str` |  |
| `destination` | `dict` |  |
| `endpoint` | `str` | Indicates the endpoint URL to send traffic. |
| `failure_reason` | `str` | Indicates the reason for the failure of the Pipeline. |
| `format` | `Any` | Defines the output data format of a sink. |
| `graph` | `dict` | Indicates the processing flow to implement the SQL. |
| `http` | `dict` |  |
| `id` | `str` | Indicates a unique identifier for this pipeline. |
| `modified_at` | `str` |  |
| `name` | `str` | Indicates the name of the Pipeline. |
| `schema` | `dict` | Defines the schema of the events in the data stream. |
| `source` | `list` |  |
| `sql` | `str` | Specifies SQL for the Pipeline processing flow. |
| `status` | `str` | Indicates the current status of the Pipeline. |
| `tables` | `list` | List of streams and sinks used by this pipeline. |
| `type` | `str` | Specifies the type of sink. |
| `version` | `float` | Indicates the version number of last saved configuration. |
| `worker_binding` | `dict` |  |

#### Example: Load

```python
workers_pipelines_other = client.WorkersPipelinesOther().load({"account_id": "account_id"})
```

#### Example: List

```python
workers_pipelines_others = client.WorkersPipelinesOther().list({"account_id": "example"})
```

#### Example: Create

```python
workers_pipelines_other = client.WorkersPipelinesOther().create({
    "account_id": "example_account_id",  # str
    "created_at": "example_created_at",  # str
    "destination": {},  # dict
    "endpoint": "example_endpoint",  # str
    "graph": {},  # dict
    "http": {},  # dict
    "id": "example_id",  # str
    "modified_at": "example_modified_at",  # str
    "name": "example_name",  # str
    "source": [],  # list
    "sql": "example_sql",  # str
    "status": "example_status",  # str
    "tables": [],  # list
    "type": "example_type",  # str
    "version": 1,  # float
    "worker_binding": {},  # dict
})
```


### WorkersScriptAndVersionSetting

Create an instance: `workers_script_and_version_setting = client.WorkersScriptAndVersionSetting()`

#### Operations

| Method | Description |
| --- | --- |
| `list()` | List entities, optionally matching the given criteria. |
| `update(data)` | Update an existing entity. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `errors` | `list` |  |
| `messages` | `list` |  |
| `result` | `dict` |  |
| `success` | `bool` | Whether the API call was successful. |

#### Example: List

```python
workers_script_and_version_settings = client.WorkersScriptAndVersionSetting().list({"account_id": "example", "script_name": "example"})
```


### WorkersScriptResponseCollection

Create an instance: `workers_script_response_collection = client.WorkersScriptResponseCollection()`

#### Operations

| Method | Description |
| --- | --- |
| `list()` | List entities, optionally matching the given criteria. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `errors` | `list` |  |
| `messages` | `list` |  |
| `result` | `list` |  |
| `success` | `bool` | Whether the API call was successful. |

#### Example: List

```python
workers_script_response_collections = client.WorkersScriptResponseCollection().list({"account_id": "example"})
```


### WorkersScriptResponseSingle

Create an instance: `workers_script_response_single = client.WorkersScriptResponseSingle()`

#### Operations

| Method | Description |
| --- | --- |
| `update(data)` | Update an existing entity. |


### WorkersSmartPlacement

Create an instance: `workers_smart_placement = client.WorkersSmartPlacement()`

#### Operations

| Method | Description |
| --- | --- |
| `list()` | List entities, optionally matching the given criteria. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `errors` | `list` |  |
| `messages` | `list` |  |
| `result` | `dict` |  |
| `success` | `bool` | Whether the API call was successful. |

#### Example: List

```python
workers_smart_placements = client.WorkersSmartPlacement().list({"account_id": "example"})
```


### WorkersUsageModel

Create an instance: `workers_usage_model = client.WorkersUsageModel()`

#### Operations

| Method | Description |
| --- | --- |
| `list()` | List entities, optionally matching the given criteria. |
| `update(data)` | Update an existing entity. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `errors` | `list` |  |
| `messages` | `list` |  |
| `result` | `dict` |  |
| `success` | `bool` | Whether the API call was successful. |
| `usage_model` | `str` | Usage model for the Worker invocations. |
| `user_limits` | `dict` | User-defined resource limits for Workers with standard usage model. |

#### Example: List

```python
workers_usage_models = client.WorkersUsageModel().list({"account_id": "example", "script_name": "example"})
```


### WorkersVersionsList

Create an instance: `workers_versions_list = client.WorkersVersionsList()`

#### Operations

| Method | Description |
| --- | --- |
| `list()` | List entities, optionally matching the given criteria. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `errors` | `list` |  |
| `messages` | `list` |  |
| `result` | `dict` |  |
| `success` | `bool` | Whether the API call was successful. |

#### Example: List

```python
workers_versions_lists = client.WorkersVersionsList().list({"account_id": "example", "script_name": "example"})
```


### WorkersVersionsSingle

Create an instance: `workers_versions_single = client.WorkersVersionsSingle()`

#### Operations

| Method | Description |
| --- | --- |
| `load(match)` | Load a single entity by match criteria. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `errors` | `list` |  |
| `messages` | `list` |  |
| `result` | `Any` |  |
| `success` | `bool` | Whether the API call was successful. |

#### Example: Load

```python
workers_versions_single = client.WorkersVersionsSingle().load({"account_id": "account_id", "script_id": "script_id", "version_id": "version_id"})
```


### WorkersVersionsUpload

Create an instance: `workers_versions_upload = client.WorkersVersionsUpload()`

#### Operations

| Method | Description |
| --- | --- |
| `create(data)` | Create a new entity with the given data. |

#### Example: Create

```python
workers_versions_upload = client.WorkersVersionsUpload().create({
    "account_id": "example_account_id",  # str
    "script_name": "example_script_name",  # str
})
```


### Workflow

Create an instance: `workflow = client.Workflow()`

#### Operations

| Method | Description |
| --- | --- |
| `create(data)` | Create a new entity with the given data. |
| `list()` | List entities, optionally matching the given criteria. |
| `load(match)` | Load a single entity by match criteria. |
| `remove(match)` | Remove the matching entity. |
| `update(data)` | Update an existing entity. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `class_name` | `str` |  |
| `concurrency` | `dict` |  |
| `default_retention` | `dict` | Default retention applied to instances of this version when they do not set their own retention. |
| `errors` | `list` |  |
| `id` | `str` |  |
| `instances` | `list` |  |
| `limits` | `dict` |  |
| `messages` | `list` |  |
| `result` | `dict` |  |
| `result_info` | `dict` |  |
| `schedules` | `list` |  |
| `script_name` | `str` |  |
| `success` | `bool` |  |

#### Example: Load

```python
workflow = client.Workflow().load({"id": "workflow_id", "account_id": "account_id"})
```

#### Example: List

```python
workflows = client.Workflow().list({"account_id": "example"})
```

#### Example: Create

```python
workflow = client.Workflow().create({
    "account_id": "example_account_id",  # str
    "workflow_id": "example_workflow_id",  # str
    "class_name": "example_class_name",  # str
    "errors": [],  # list
    "instances": [],  # list
    "messages": [],  # list
    "result": {},  # dict
    "result_info": {},  # dict
    "script_name": "example_script_name",  # str
    "success": True,  # bool
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

Features are the extension mechanism. A feature is a Python class
with hook methods named after pipeline stages (e.g. `PrePoint`,
`PreSpec`). Each method receives the context.

The SDK ships with built-in features:

- **TestFeature**: Test transport

Features are initialized in order. Hooks fire in the order features
were added, so later features can override earlier ones.

### Data as dicts

The Python SDK uses plain dicts throughout rather than typed
objects. This mirrors the dynamic nature of the API and keeps the
SDK flexible — no code generation is needed when the API schema
changes.

Use `helpers.to_map()` to safely validate that a value is a dict.

### Module structure

```
py/
├── cloudflareworkers_sdk.py         -- Main SDK module
├── config.py                    -- Configuration
├── schema.py                    -- Generated option + entity specs
├── features.py                  -- Feature factory
├── core/                        -- Core types and context
├── entity/                      -- Entity implementations
├── feature/                     -- Built-in features (Base, Test, Log)
├── utility/                     -- Utility functions and struct library
└── test/                        -- Test suites
```

The main module (`cloudflareworkers_sdk`) exports the SDK class.
Import entity or utility modules directly only when needed.

### Entity state

Entity instances are stateful. After a successful `list`, the entity
stores the returned data and match criteria internally.

```python
workersubdomain = client.WorkerSubdomain()
workersubdomain.list()

# workersubdomain.data_get() now returns the workersubdomain data from the last list
# workersubdomain.match_get() returns the last match criteria
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
