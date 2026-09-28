# CloudflareWorkers PHP SDK



The PHP SDK for the CloudflareWorkers API — an entity-oriented client using PHP conventions.

The SDK exposes the API as capitalised, semantic **Entities** — for example `$client->Account()` — with named operations (`list`/`load`/`create`/`update`/`remove`/`patch`) instead of raw URL paths and query strings. Working with resources and verbs keeps call sites self-describing and reduces cognitive load.

> Other languages, the CLI, and MCP server live alongside this one — see
> the [top-level README](../README.md).


## Install
This package is not yet published to Packagist. Install it from the
GitHub release tag (`php/vX.Y.Z`):

- Releases: [https://github.com/voxgig-sdk/cloudflare-workers-sdk/releases](https://github.com/voxgig-sdk/cloudflare-workers-sdk/releases)


## Tutorial: your first API call

This tutorial walks through creating a client, listing entities, and
loading a specific record.

### 1. Create a client

```php
<?php
require_once 'cloudflareworkers_sdk.php';

$client = new CloudflareWorkersSDK([
    "apikey" => getenv("CLOUDFLARE_WORKERS_APIKEY"),
]);
```

### 2. List account records

```php
try {
    // list() returns entity instances; data_get() reads each record.
    $accounts = $client->Account()->list();
    foreach ($accounts as $record) {
        $item = $record->data_get();
        echo $item["id"] . "\n";
    }
} catch (\Throwable $err) {
    echo "Error: " . $err->getMessage();
}
```

### 3. Load an application

Application is nested under account, so provide the `account_id`.

```php
try {
    // load() returns the ENTITY — call data_get() for the Application record (throws on error).
    $application = $client->Application()->load(["account_id" => "example_account_id", "id" => "example_id"]);
    print_r($application->data_get());
} catch (\Throwable $err) {
    echo "Error: " . $err->getMessage();
}
```


## Error handling

Entity operations throw a `\Throwable` on failure, so wrap them in
`try` / `catch`:

```php
try {
    $workersubdomains = $client->WorkerSubdomain()->list();
} catch (\Throwable $err) {
    echo "Error: " . $err->getMessage();
}
```

`direct()` does **not** throw — it returns the result array. Branch on
`ok`; on failure `status` holds the HTTP status (for error responses) and
`err` holds a transport error, so read both defensively:

```php
$result = $client->direct([
    "path" => "/api/resource/{id}",
    "method" => "GET",
    "params" => ["id" => "example_id"],
]);

if (! $result["ok"]) {
    $err = $result["err"] ?? null;
    echo "request failed: " . ($err ? $err->getMessage() : "HTTP " . $result["status"]);
}
```


## How-to guides

### Make a direct HTTP request

For endpoints not covered by entity methods:

```php
// direct() is the raw-HTTP escape hatch: it returns a result array
// (it does not throw). Branch on $result["ok"].
$result = $client->direct([
    "path" => "/api/resource/{id}",
    "method" => "GET",
    "params" => ["id" => "example"],
]);

if ($result["ok"]) {
    echo $result["status"];  // 200
    print_r($result["data"]);  // response body
} else {
    // On an HTTP error status there is no err (only a transport failure sets
    // it), so fall back to the status code.
    $err = $result["err"] ?? null;
    echo "Error: " . ($err ? $err->getMessage() : "HTTP " . $result["status"]);
}
```

### Prepare a request without sending it

```php
// prepare() throws on error and returns the fetch definition.
$fetchdef = $client->prepare([
    "path" => "/api/resource/{id}",
    "method" => "DELETE",
    "params" => ["id" => "example"],
]);

echo $fetchdef["url"];
echo $fetchdef["method"];
print_r($fetchdef["headers"]);
```

### Use test mode

Create a mock client for unit testing — no server required. Seed fixture
data via the `entity` option so offline calls resolve without a live server:

```php
$client = CloudflareWorkersSDK::test([
    "entity" => ["workerroute" => ["test01" => ["id" => "test01"]]],
]);

// list() returns entity instances (throws on error);
// call data_get() for the mock record.
$workerroute = $client->WorkerRoute()->list();
print_r(array_map(fn($item) => $item->data_get(), $workerroute));
```

### Use a custom fetch function

Replace the HTTP transport with your own function:

```php
$mock_fetch = function ($url, $init) {
    return [
        [
            "status" => 200,
            "statusText" => "OK",
            "headers" => [],
            "json" => function () { return ["id" => "mock01"]; },
        ],
        null,
    ];
};

$client = new CloudflareWorkersSDK([
    "base" => "http://localhost:8080",
    "system" => [
        "fetch" => $mock_fetch,
    ],
]);
```

### Run live tests

Create a `.env.local` file at the project root:

```
CLOUDFLARE_WORKERS_TEST_LIVE=TRUE
CLOUDFLARE_WORKERS_APIKEY=<your-key>
```

Then run:

```bash
cd php && ./vendor/bin/phpunit test/
```


## Reference

### CloudflareWorkersSDK

```php
require_once 'cloudflareworkers_sdk.php';
$client = new CloudflareWorkersSDK($options);
```

Creates a new SDK client.

| Option | Type | Description |
| --- | --- | --- |
| `apikey` | `string` | API key for authentication. |
| `base` | `string` | Base URL of the API server. |
| `prefix` | `string` | URL path prefix prepended to all requests. |
| `suffix` | `string` | URL path suffix appended to all requests. |
| `feature` | `array` | Feature activation flags. |
| `extend` | `array` | Additional Feature instances to load. |
| `system` | `array` | System overrides (e.g. custom `fetch` callable). |

### test

```php
$client = CloudflareWorkersSDK::test($testopts, $sdkopts);
```

Creates a test-mode client with mock transport. Both arguments may be `null`.

### CloudflareWorkersSDK methods

| Method | Signature | Description |
| --- | --- | --- |
| `options_map` | `(): array` | Deep copy of current SDK options. |
| `get_utility` | `(): Utility` | Copy of the SDK utility object. |
| `prepare` | `(array $fetchargs): array` | Build an HTTP request definition without sending. |
| `direct` | `(array $fetchargs): array` | Build and send an HTTP request. |
| `Account` | `($data): AccountEntity` | Create an Account entity instance. |
| `Application` | `($data): ApplicationEntity` | Create an Application entity instance. |
| `Brapi` | `($data): BrapiEntity` | Create a Brapi entity instance. |
| `Build` | `($data): BuildEntity` | Create a Build entity instance. |
| `BuildToken` | `($data): BuildTokenEntity` | Create a BuildToken entity instance. |
| `BuildsApi` | `($data): BuildsApiEntity` | Create a BuildsApi entity instance. |
| `Connection` | `($data): ConnectionEntity` | Create a Connection entity instance. |
| `ContainerImage` | `($data): ContainerImageEntity` | Create a ContainerImage entity instance. |
| `ContainerInstance` | `($data): ContainerInstanceEntity` | Create a ContainerInstance entity instance. |
| `DeployHook` | `($data): DeployHookEntity` | Create a DeployHook entity instance. |
| `Deployment` | `($data): DeploymentEntity` | Create a Deployment entity instance. |
| `Destination` | `($data): DestinationEntity` | Create a Destination entity instance. |
| `Domain` | `($data): DomainEntity` | Create a Domain entity instance. |
| `DurableObjectsNamespace` | `($data): DurableObjectsNamespaceEntity` | Create a DurableObjectsNamespace entity instance. |
| `EnvironmentVariable` | `($data): EnvironmentVariableEntity` | Create an EnvironmentVariable entity instance. |
| `GitHubIntegration` | `($data): GitHubIntegrationEntity` | Create a GitHubIntegration entity instance. |
| `Hyperdrive` | `($data): HyperdriveEntity` | Create a Hyperdrive entity instance. |
| `ImageRegistry` | `($data): ImageRegistryEntity` | Create an ImageRegistry entity instance. |
| `Issue` | `($data): IssueEntity` | Create an Issue entity instance. |
| `Key` | `($data): KeyEntity` | Create a Key entity instance. |
| `LiveTail` | `($data): LiveTailEntity` | Create a LiveTail entity instance. |
| `MetricsExport` | `($data): MetricsExportEntity` | Create a MetricsExport entity instance. |
| `Namespace` | `($data): NamespaceEntity` | Create a Namespace entity instance. |
| `Preview` | `($data): PreviewEntity` | Create a Preview entity instance. |
| `PreviewDeployment` | `($data): PreviewDeploymentEntity` | Create a PreviewDeployment entity instance. |
| `Query` | `($data): QueryEntity` | Create a Query entity instance. |
| `RepositoryConnection` | `($data): RepositoryConnectionEntity` | Create a RepositoryConnection entity instance. |
| `Rollout` | `($data): RolloutEntity` | Create a Rollout entity instance. |
| `SavedQuery` | `($data): SavedQueryEntity` | Create a SavedQuery entity instance. |
| `Script` | `($data): ScriptEntity` | Create a Script entity instance. |
| `ScriptSetting` | `($data): ScriptSettingEntity` | Create a ScriptSetting entity instance. |
| `Secret` | `($data): SecretEntity` | Create a Secret entity instance. |
| `SecretsStoreDelete` | `($data): SecretsStoreDeleteEntity` | Create a SecretsStoreDelete entity instance. |
| `SecretsStoreQuota` | `($data): SecretsStoreQuotaEntity` | Create a SecretsStoreQuota entity instance. |
| `SecretsStoreSecret` | `($data): SecretsStoreSecretEntity` | Create a SecretsStoreSecret entity instance. |
| `SecretsStoreStore` | `($data): SecretsStoreStoreEntity` | Create a SecretsStoreStore entity instance. |
| `SecretsStoreStoresResponseCollection` | `($data): SecretsStoreStoresResponseCollectionEntity` | Create a SecretsStoreStoresResponseCollection entity instance. |
| `Setting` | `($data): SettingEntity` | Create a Setting entity instance. |
| `Shared` | `($data): SharedEntity` | Create a Shared entity instance. |
| `Tail` | `($data): TailEntity` | Create a Tail entity instance. |
| `Token` | `($data): TokenEntity` | Create a Token entity instance. |
| `Trigger` | `($data): TriggerEntity` | Create a Trigger entity instance. |
| `Usage` | `($data): UsageEntity` | Create an Usage entity instance. |
| `Value` | `($data): ValueEntity` | Create a Value entity instance. |
| `Version` | `($data): VersionEntity` | Create a Version entity instance. |
| `Worker` | `($data): WorkerEntity` | Create a Worker entity instance. |
| `WorkerCronTrigger` | `($data): WorkerCronTriggerEntity` | Create a WorkerCronTrigger entity instance. |
| `WorkerDeployment` | `($data): WorkerDeploymentEntity` | Create a WorkerDeployment entity instance. |
| `WorkerEnvironment` | `($data): WorkerEnvironmentEntity` | Create a WorkerEnvironment entity instance. |
| `WorkerRoute` | `($data): WorkerRouteEntity` | Create a WorkerRoute entity instance. |
| `WorkerScript` | `($data): WorkerScriptEntity` | Create a WorkerScript entity instance. |
| `WorkerSubdomain` | `($data): WorkerSubdomainEntity` | Create a WorkerSubdomain entity instance. |
| `WorkerTailLog` | `($data): WorkerTailLogEntity` | Create a WorkerTailLog entity instance. |
| `WorkersAccountSetting` | `($data): WorkersAccountSettingEntity` | Create a WorkersAccountSetting entity instance. |
| `WorkersApiResponseNullResult` | `($data): WorkersApiResponseNullResultEntity` | Create a WorkersApiResponseNullResult entity instance. |
| `WorkersCompletedUploadAsset` | `($data): WorkersCompletedUploadAssetEntity` | Create a WorkersCompletedUploadAsset entity instance. |
| `WorkersCreateAssetsUploadSession` | `($data): WorkersCreateAssetsUploadSessionEntity` | Create a WorkersCreateAssetsUploadSession entity instance. |
| `WorkersForPlatform` | `($data): WorkersForPlatformEntity` | Create a WorkersForPlatform entity instance. |
| `WorkersKvApiResponseCommonNoResult` | `($data): WorkersKvApiResponseCommonNoResultEntity` | Create a WorkersKvApiResponseCommonNoResult entity instance. |
| `WorkersKvNamespace` | `($data): WorkersKvNamespaceEntity` | Create a WorkersKvNamespace entity instance. |
| `WorkersNamespaceList` | `($data): WorkersNamespaceListEntity` | Create a WorkersNamespaceList entity instance. |
| `WorkersNamespaceScriptDeleteBulk` | `($data): WorkersNamespaceScriptDeleteBulkEntity` | Create a WorkersNamespaceScriptDeleteBulk entity instance. |
| `WorkersNamespaceScriptResponseSingle` | `($data): WorkersNamespaceScriptResponseSingleEntity` | Create a WorkersNamespaceScriptResponseSingle entity instance. |
| `WorkersNamespaceSingle` | `($data): WorkersNamespaceSingleEntity` | Create a WorkersNamespaceSingle entity instance. |
| `WorkersPipelinesOther` | `($data): WorkersPipelinesOtherEntity` | Create a WorkersPipelinesOther entity instance. |
| `WorkersScriptAndVersionSetting` | `($data): WorkersScriptAndVersionSettingEntity` | Create a WorkersScriptAndVersionSetting entity instance. |
| `WorkersScriptResponseCollection` | `($data): WorkersScriptResponseCollectionEntity` | Create a WorkersScriptResponseCollection entity instance. |
| `WorkersScriptResponseSingle` | `($data): WorkersScriptResponseSingleEntity` | Create a WorkersScriptResponseSingle entity instance. |
| `WorkersSmartPlacement` | `($data): WorkersSmartPlacementEntity` | Create a WorkersSmartPlacement entity instance. |
| `WorkersUsageModel` | `($data): WorkersUsageModelEntity` | Create a WorkersUsageModel entity instance. |
| `WorkersVersionsList` | `($data): WorkersVersionsListEntity` | Create a WorkersVersionsList entity instance. |
| `WorkersVersionsSingle` | `($data): WorkersVersionsSingleEntity` | Create a WorkersVersionsSingle entity instance. |
| `WorkersVersionsUpload` | `($data): WorkersVersionsUploadEntity` | Create a WorkersVersionsUpload entity instance. |
| `Workflow` | `($data): WorkflowEntity` | Create a Workflow entity instance. |

### Entity interface

All entities share the same interface.

| Method | Signature | Description |
| --- | --- | --- |
| `load` | `($reqmatch, $ctrl): array` | Load a single entity by match criteria. |
| `list` | `(?array $reqmatch = null, $ctrl): array` | List entities matching the criteria (call with no argument to list all). |
| `create` | `($reqdata, $ctrl): array` | Create a new entity. |
| `update` | `($reqdata, $ctrl): array` | Update an existing entity. |
| `remove` | `($reqmatch, $ctrl): array` | Remove an entity. |
| `data_get` | `(): array` | Get entity data. |
| `data_set` | `($data): void` | Set entity data. |
| `match_get` | `(): array` | Get entity match criteria. |
| `match_set` | `($match): void` | Set entity match criteria. |
| `make` | `(): Entity` | Create a new instance with the same options. |
| `get_name` | `(): string` | Return the entity name. |

### Result shape

Entity operations return the ENTITY (call data_get() for the record) (an `array` for single-entity
ops, a `list` for `list`) and throw on error. Wrap calls in
`try`/`catch` to handle failures.

The `direct()` escape hatch never throws — it returns a result `array`
you branch on via `$result["ok"]`:

| Key | Type | Description |
| --- | --- | --- |
| `ok` | `bool` | `true` if the HTTP status is 2xx. |
| `status` | `int` | HTTP status code. |
| `headers` | `array` | Response headers. |
| `data` | `mixed` | Parsed JSON response body. |

On error, `ok` is `false` and `$err` contains the error value.

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

Create an instance: `$account = $client->Account();`

#### Operations

| Method | Description |
| --- | --- |
| `list(match)` | List entities matching the criteria. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `id` | `string` |  |

#### Example: List

```php
// list() returns an array of Account records (throws on error).
$accounts = $client->Account()->list();
```


### Application

Create an instance: `$application = $client->Application();`

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
| `configuration` | `array` | Application configuration fields you can change without creating a rollout. |
| `constraints` | `array` |  |
| `errors` | `array` |  |
| `id` | `string` |  |
| `max_instances` | `int` | Maximum number of instances that an autoscaling application can run. |
| `messages` | `array` |  |
| `observability` | `mixed` | Top-level application observability settings. |
| `result` | `mixed` | The public Containers API returns an application. |
| `result_info` | `array` | Cursor pagination details for a v4 API list response. |
| `rollout_active_grace_period` | `int` | Grace period for active instances to stay alive before becoming eligible for shutdown signal due to a rollout, in seconds. |
| `success` | `bool` | Whether the API call was successful. |

#### Example: Load

```php
// load() returns the ENTITY — call data_get() for the Application record (throws on error).
$application = $client->Application()->load(["id" => "application_id", "account_id" => "account_id"]);
```

#### Example: List

```php
// list() returns an array of Application records (throws on error).
$applications = $client->Application()->list();
```

#### Example: Create

```php
$application = $client->Application()->create([
    "account_id" => null, // string
    "errors" => null, // array
    "messages" => null, // array
    "result" => null, // mixed
    "result_info" => null, // array
    "success" => null, // bool
]);
```


### Brapi

Create an instance: `$brapi = $client->Brapi();`

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
| `actionTimeout` | `float` | The maximum duration allowed for the browser action to complete after the page has loaded (such as taking screenshots, extracting content, or generating PDFs). |
| `addScriptTag` | `array` | Adds a script element into the page with the desired URL or content. |
| `addStyleTag` | `array` | Adds a `<link rel="stylesheet">` tag into the page with the desired URL or a `<style type="text/css">` tag with the content. |
| `allowRequestPattern` | `array` | Only allow requests that match the provided regex patterns, eg. |
| `allowResourceTypes` | `array` | Only allow requests that match the provided resource types, eg. |
| `authenticate` | `array` | Provide credentials for HTTP authentication. |
| `bestAttempt` | `bool` | Attempt to proceed when 'awaited' events fail or timeout. |
| `closeReason` | `float` | Reason code for session closure. |
| `closeReasonText` | `string` | Human-readable close reason. |
| `commands` | `array` | Available commands. |
| `connectionEndTime` | `float` | Connection end time. |
| `connectionId` | `string` | Connection ID. |
| `connectionStartTime` | `float` | Connection start time. |
| `cookies` | `array` | Check [options](https://pptr.dev/api/puppeteer.page.setcookie). |
| `custom_ai` | `array` | Optional list of custom AI models to use for the request. |
| `dependencies` | `array` | Domain dependencies. |
| `description` | `string` | Target description. |
| `devtoolsFrontendUrl` | `string` | DevTools frontend URL. |
| `domain` | `string` | Domain name. |
| `elements` | `array` |  |
| `emulateMediaType` | `string` |  |
| `endTime` | `float` | Session end time. |
| `errors` | `array` |  |
| `events` | `array` | Available events. |
| `excludeExternalLinks` | `bool` |  |
| `experimental` | `bool` | Whether this domain is experimental. |
| `formats` | `array` |  |
| `gotoOptions` | `array` | Check [options](https://pptr.dev/api/puppeteer.gotooptions). |
| `guardrails` | `array` |  |
| `html` | `string` | Set the content of the page, eg: `<h1>Hello World!!</h1>`. |
| `id` | `string` | Target ID. |
| `interestingOnly` | `bool` |  |
| `lastUpdated` | `float` | Last updated timestamp. |
| `message` | `string` | Target activated. |
| `meta` | `array` |  |
| `pdfOptions` | `array` | Check [options](https://pptr.dev/api/puppeteer.pdfoptions). |
| `prompt` | `string` |  |
| `rejectRequestPattern` | `array` | Block undesired requests that match the provided regex patterns, eg. |
| `rejectResourceTypes` | `array` | Block undesired requests that match the provided resource types, eg. |
| `response_format` | `array` |  |
| `result` | `array` | HTML content. |
| `root` | `string` |  |
| `screenshotOptions` | `array` | Check [options](https://pptr.dev/api/puppeteer.screenshotoptions). |
| `scrollPage` | `bool` |  |
| `selector` | `string` |  |
| `sessionId` | `string` | Session ID. |
| `setExtraHTTPHeaders` | `array` |  |
| `setJavaScriptEnabled` | `bool` |  |
| `startTime` | `float` | Session start time. |
| `success` | `bool` | Response status. |
| `title` | `string` | Title of the target. |
| `type` | `string` | Target type (page, background_page, worker, etc.). |
| `types` | `array` | Type definitions. |
| `url` | `string` | URL of the target. |
| `userAgent` | `string` |  |
| `viewport` | `array` | Check [options](https://pptr.dev/api/puppeteer.page.setviewport). |
| `visibleLinksOnly` | `bool` |  |
| `waitForSelector` | `array` | Wait for the selector to appear in page. |
| `waitForTimeout` | `float` | Waits for a specified timeout before continuing. |
| `webSocketDebuggerUrl` | `string` | WebSocket URL for debugging this target. |

#### Example: Load

```php
// load() returns the ENTITY — call data_get() for the Brapi record (throws on error).
$brapi = $client->Brapi()->load(["account_id" => "account_id"]);
```

#### Example: List

```php
// list() returns an array of Brapi records (throws on error).
$brapis = $client->Brapi()->list();
```

#### Example: Create

```php
$brapi = $client->Brapi()->create([
    "account_id" => null, // string
    "Browser" => null, // string
    "ProtocolVersion" => null, // string
    "UserAgent" => null, // string
    "V8Version" => null, // string
    "WebKitVersion" => null, // string
    "authenticate" => null, // array
    "domain" => null, // string
    "elements" => null, // array
    "id" => null, // string
    "message" => null, // string
    "meta" => null, // array
    "response_format" => null, // array
    "result" => null, // array
    "sessionId" => null, // string
    "success" => null, // bool
    "type" => null, // string
    "url" => null, // string
    "viewport" => null, // array
    "waitForSelector" => null, // array
]);
```


### Build

Create an instance: `$build = $client->Build();`

#### Operations

| Method | Description |
| --- | --- |
| `list(match)` | List entities matching the criteria. |
| `load(match)` | Load a single entity by match criteria. |
| `update(data)` | Update an existing entity. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `errors` | `array` |  |
| `id` | `string` |  |
| `messages` | `array` |  |
| `result` | `array` |  |
| `result_info` | `array` |  |
| `success` | `bool` |  |

#### Example: Load

```php
// load() returns the ENTITY — call data_get() for the Build record (throws on error).
$build = $client->Build()->load(["id" => "build_id", "account_id" => "account_id"]);
```

#### Example: List

```php
// list() returns an array of Build records (throws on error).
$builds = $client->Build()->list();
```


### BuildToken

Create an instance: `$build_token = $client->BuildToken();`

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
| `errors` | `array` |  |
| `messages` | `array` |  |
| `result` | `array` |  |
| `result_info` | `array` |  |
| `success` | `bool` |  |

#### Example: List

```php
// list() returns an array of BuildToken records (throws on error).
$build_tokens = $client->BuildToken()->list();
```

#### Example: Create

```php
$build_token = $client->BuildToken()->create([
    "account_id" => null, // string
    "build_token_name" => null, // string
    "build_token_secret" => null, // string
    "cloudflare_token_id" => null, // string
    "errors" => null, // array
    "messages" => null, // array
    "result" => null, // array
    "success" => null, // bool
]);
```


### BuildsApi

Create an instance: `$builds_api = $client->BuildsApi();`

#### Operations

| Method | Description |
| --- | --- |
| `create(data)` | Create a new entity with the given data. |
| `remove(match)` | Remove the matching entity. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `errors` | `array` |  |
| `messages` | `array` |  |
| `result` | `array` |  |
| `result_info` | `array` |  |
| `success` | `bool` |  |

#### Example: Create

```php
$builds_api = $client->BuildsApi()->create([
    "account_id" => null, // string
    "trigger_id" => null, // string
    "errors" => null, // array
    "messages" => null, // array
    "result" => null, // array
    "success" => null, // bool
]);
```


### Connection

Create an instance: `$connection = $client->Connection();`

#### Operations

| Method | Description |
| --- | --- |
| `remove(match)` | Remove the matching entity. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `id` | `string` |  |


### ContainerImage

Create an instance: `$container_image = $client->ContainerImage();`

#### Operations

| Method | Description |
| --- | --- |
| `create(data)` | Create a new entity with the given data. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `image` | `string` | Image url. |

#### Example: Create

```php
$container_image = $client->ContainerImage()->create([
    "account_id" => null, // string
    "image" => null, // string
]);
```


### ContainerInstance

Create an instance: `$container_instance = $client->ContainerInstance();`

#### Operations

| Method | Description |
| --- | --- |
| `list(match)` | List entities matching the criteria. |
| `load(match)` | Load a single entity by match criteria. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `errors` | `array` |  |
| `id` | `string` |  |
| `messages` | `array` |  |
| `result` | `mixed` | A container instance belonging to an application. |
| `result_info` | `array` | Cursor pagination details for a v4 API list response. |
| `success` | `bool` | Whether the API call was successful. |

#### Example: Load

```php
// load() returns the ENTITY — call data_get() for the ContainerInstance record (throws on error).
$container_instance = $client->ContainerInstance()->load(["id" => "container_instance_id", "account_id" => "account_id", "application_id" => "application_id"]);
```

#### Example: List

```php
// list() returns an array of ContainerInstance records (throws on error).
$container_instances = $client->ContainerInstance()->list();
```


### DeployHook

Create an instance: `$deploy_hook = $client->DeployHook();`

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
| `errors` | `array` |  |
| `id` | `string` |  |
| `messages` | `array` |  |
| `result` | `array` |  |
| `result_info` | `array` |  |
| `success` | `bool` |  |

#### Example: Load

```php
// load() returns the ENTITY — call data_get() for the DeployHook record (throws on error).
$deploy_hook = $client->DeployHook()->load(["id" => "deploy_hook_id", "account_id" => "account_id", "worker_id" => "worker_id"]);
```

#### Example: List

```php
// list() returns an array of DeployHook records (throws on error).
$deploy_hooks = $client->DeployHook()->list();
```

#### Example: Create

```php
$deploy_hook = $client->DeployHook()->create([
    "id" => null, // string
    "branch" => null, // string
    "deploy_hook_name" => null, // string
    "errors" => null, // array
    "messages" => null, // array
    "result" => null, // array
    "success" => null, // bool
]);
```


### Deployment

Create an instance: `$deployment = $client->Deployment();`

#### Operations

| Method | Description |
| --- | --- |
| `remove(match)` | Remove the matching entity. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `id` | `string` |  |


### Destination

Create an instance: `$destination = $client->Destination();`

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
| `configuration` | `array` |  |
| `enabled` | `bool` |  |
| `errors` | `array` |  |
| `id` | `string` |  |
| `messages` | `array` |  |
| `name` | `string` |  |
| `result` | `array` |  |
| `skipPreflightCheck` | `bool` |  |
| `success` | `bool` |  |

#### Example: List

```php
// list() returns an array of Destination records (throws on error).
$destinations = $client->Destination()->list();
```

#### Example: Create

```php
$destination = $client->Destination()->create([
    "account_id" => null, // string
    "configuration" => null, // array
    "enabled" => null, // bool
    "errors" => null, // array
    "messages" => null, // array
    "name" => null, // string
    "result" => null, // array
    "success" => null, // bool
]);
```


### Domain

Create an instance: `$domain = $client->Domain();`

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
| `errors` | `array` |  |
| `id` | `string` |  |
| `messages` | `array` |  |
| `result` | `array` |  |
| `success` | `bool` | Whether the API call was successful. |

#### Example: Load

```php
// load() returns the ENTITY — call data_get() for the Domain record (throws on error).
$domain = $client->Domain()->load(["id" => "domain_id", "account_id" => "account_id"]);
```

#### Example: List

```php
// list() returns an array of Domain records (throws on error).
$domains = $client->Domain()->list();
```


### DurableObjectsNamespace

Create an instance: `$durable_objects_namespace = $client->DurableObjectsNamespace();`

#### Operations

| Method | Description |
| --- | --- |
| `create(data)` | Create a new entity with the given data. |
| `list(match)` | List entities matching the criteria. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `result` | `array` |  |
| `result_info` | `array` |  |

#### Example: List

```php
// list() returns an array of DurableObjectsNamespace records (throws on error).
$durable_objects_namespaces = $client->DurableObjectsNamespace()->list();
```

#### Example: Create

```php
$durable_objects_namespace = $client->DurableObjectsNamespace()->create([
    "account_id" => null, // string
    "namespace_id" => null, // string
]);
```


### EnvironmentVariable

Create an instance: `$environment_variable = $client->EnvironmentVariable();`

#### Operations

| Method | Description |
| --- | --- |
| `list(match)` | List entities matching the criteria. |
| `update(data)` | Update an existing entity. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `errors` | `array` |  |
| `messages` | `array` |  |
| `result` | `array` |  |
| `result_info` | `array` |  |
| `success` | `bool` |  |

#### Example: List

```php
// list() returns an array of EnvironmentVariable records (throws on error).
$environment_variables = $client->EnvironmentVariable()->list();
```


### GitHubIntegration

Create an instance: `$git_hub_integration = $client->GitHubIntegration();`

#### Operations

| Method | Description |
| --- | --- |
| `list(match)` | List entities matching the criteria. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `errors` | `array` |  |
| `messages` | `array` |  |
| `result` | `array` |  |
| `result_info` | `array` |  |
| `success` | `bool` |  |

#### Example: List

```php
// list() returns an array of GitHubIntegration records (throws on error).
$git_hub_integrations = $client->GitHubIntegration()->list();
```


### Hyperdrive

Create an instance: `$hyperdrive = $client->Hyperdrive();`

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
| `caching` | `array` |  |
| `created_on` | `string` | Defines the creation time of the Hyperdrive configuration. |
| `id` | `string` | Define configurations using a unique string identifier. |
| `modified_on` | `string` | Defines the last modified time of the Hyperdrive configuration. |
| `mtls` | `array` | mTLS configuration for the origin connection. |
| `name` | `string` | The name of the Hyperdrive configuration. |
| `origin` | `array` | Combines database connection fields with exactly one supported network location. |
| `origin_connection_limit` | `int` | The (soft) maximum number of connections the Hyperdrive is allowed to make to the origin database. |
| `restarted_on` | `string` | Defines the last time the Hyperdrive connection pool was explicitly restarted via the restart endpoint. |
| `result` | `array` |  |

#### Example: Load

```php
// load() returns the ENTITY — call data_get() for the Hyperdrive record (throws on error).
$hyperdrive = $client->Hyperdrive()->load(["account_id" => "account_id", "hyperdrive_id" => "hyperdrive_id"]);
```

#### Example: List

```php
// list() returns an array of Hyperdrive records (throws on error).
$hyperdrives = $client->Hyperdrive()->list();
```

#### Example: Create

```php
$hyperdrive = $client->Hyperdrive()->create([
    "account_id" => null, // string
    "integration" => null, // string
    "id" => null, // string
    "name" => null, // string
    "origin" => null, // array
    "result" => null, // array
]);
```


### ImageRegistry

Create an instance: `$image_registry = $client->ImageRegistry();`

#### Operations

| Method | Description |
| --- | --- |
| `create(data)` | Create a new entity with the given data. |
| `list(match)` | List entities matching the criteria. |
| `remove(match)` | Remove the matching entity. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `auth` | `array` | Credentials for authenticating to a private external image registry. |
| `domain` | `string` | Hostname of the private registry, without a scheme or image path. |
| `errors` | `array` |  |
| `expiration_minutes` | `int` | The number of minutes Cloudflare managed registry credentials stay valid. |
| `id` | `string` |  |
| `is_public` | `bool` | Omit this field or set it to `false`. |
| `kind` | `mixed` | Registry provider. |
| `messages` | `array` |  |
| `permissions` | `array` | The permissions for Cloudflare managed registry credentials. |
| `result` | `array` |  |
| `success` | `bool` | Whether the API call was successful. |

#### Example: List

```php
// list() returns an array of ImageRegistry records (throws on error).
$image_registrys = $client->ImageRegistry()->list();
```

#### Example: Create

```php
$image_registry = $client->ImageRegistry()->create([
    "account_id" => null, // string
    "auth" => null, // array
    "errors" => null, // array
    "kind" => null, // mixed
    "messages" => null, // array
    "result" => null, // array
    "success" => null, // bool
]);
```


### Issue

Create an instance: `$issue = $client->Issue();`

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
| `afterInactivitySeconds` | `int` |  |
| `afterOccurrences` | `int` |  |
| `enabled` | `bool` |  |
| `errors` | `array` |  |
| `id` | `string` |  |
| `issueIds` | `array` |  |
| `messages` | `array` |  |
| `name` | `string` |  |
| `policyId` | `string` |  |
| `result` | `array` |  |
| `result_info` | `array` |  |
| `service` | `string` |  |
| `status` | `string` |  |
| `success` | `bool` |  |
| `title` | `string` |  |

#### Example: Load

```php
// load() returns the ENTITY — call data_get() for the Issue record (throws on error).
$issue = $client->Issue()->load(["id" => "issue_id", "account_id" => "account_id"]);
```

#### Example: List

```php
// list() returns an array of Issue records (throws on error).
$issues = $client->Issue()->list();
```

#### Example: Create

```php
$issue = $client->Issue()->create([
    "account_id" => null, // string
    "group_id" => null, // string
    "errors" => null, // array
    "issueIds" => null, // array
    "messages" => null, // array
    "policyId" => null, // string
    "result" => null, // array
    "result_info" => null, // array
    "success" => null, // bool
]);
```


### Key

Create an instance: `$key = $client->Key();`

#### Operations

| Method | Description |
| --- | --- |
| `create(data)` | Create a new entity with the given data. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `datasets` | `array` | Leave this empty to use the default datasets |
| `errors` | `array` |  |
| `filters` | `array` | Apply filters to narrow key discovery. |
| `from` | `float` |  |
| `keyNeedle` | `array` | If the user suggests a key, use this to narrow down the list of keys returned. |
| `limit` | `float` | Advanced usage: set limit=1000+ to retrieve comprehensive key options without needing additional filtering. |
| `messages` | `array` |  |
| `needle` | `array` | Search for a specific substring in any of the events |
| `result` | `array` |  |
| `success` | `bool` |  |
| `to` | `float` |  |

#### Example: Create

```php
$key = $client->Key()->create([
    "account_id" => null, // string
    "errors" => null, // array
    "keyNeedle" => null, // array
    "messages" => null, // array
    "needle" => null, // array
    "result" => null, // array
    "success" => null, // bool
]);
```


### LiveTail

Create an instance: `$live_tail = $client->LiveTail();`

#### Operations

| Method | Description |
| --- | --- |
| `create(data)` | Create a new entity with the given data. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `errors` | `array` |  |
| `filterCombination` | `string` | Set a flag to describe how to combine the filters on the query. |
| `filters` | `array` | Apply filters to the query. |
| `messages` | `array` |  |
| `result` | `array` |  |
| `scriptId` | `string` |  |
| `success` | `bool` |  |

#### Example: Create

```php
$live_tail = $client->LiveTail()->create([
    "account_id" => null, // string
    "errors" => null, // array
    "messages" => null, // array
    "result" => null, // array
    "success" => null, // bool
]);
```


### MetricsExport

Create an instance: `$metrics_export = $client->MetricsExport();`

#### Operations

| Method | Description |
| --- | --- |
| `create(data)` | Create a new entity with the given data. |
| `list(match)` | List entities matching the criteria. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `errors` | `array` |  |
| `messages` | `array` |  |
| `requester` | `array` |  |
| `resources` | `array` |  |
| `result` | `array` |  |
| `success` | `bool` |  |

#### Example: List

```php
// list() returns an array of MetricsExport records (throws on error).
$metrics_exports = $client->MetricsExport()->list();
```

#### Example: Create

```php
$metrics_export = $client->MetricsExport()->create([
    "account_id" => null, // string
    "errors" => null, // array
    "messages" => null, // array
    "requester" => null, // array
    "resources" => null, // array
    "result" => null, // array
    "success" => null, // bool
]);
```


### Namespace

Create an instance: `$namespace = $client->Namespace();`

#### Operations

| Method | Description |
| --- | --- |
| `remove(match)` | Remove the matching entity. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `id` | `string` |  |


### Preview

Create an instance: `$preview = $client->Preview();`

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
| `errors` | `array` |  |
| `id` | `string` |  |
| `messages` | `array` |  |
| `result` | `array` |  |
| `success` | `bool` | Whether the API call was successful. |

#### Example: Load

```php
// load() returns the ENTITY — call data_get() for the Preview record (throws on error).
$preview = $client->Preview()->load(["id" => "preview_id", "account_id" => "account_id", "worker_id" => "worker_id"]);
```

#### Example: List

```php
// list() returns an array of Preview records (throws on error).
$previews = $client->Preview()->list();
```

#### Example: Create

```php
$preview = $client->Preview()->create([
    "account_id" => null, // string
    "worker_id" => null, // string
    "errors" => null, // array
    "messages" => null, // array
    "result" => null, // array
    "success" => null, // bool
]);
```


### PreviewDeployment

Create an instance: `$preview_deployment = $client->PreviewDeployment();`

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
| `errors` | `array` |  |
| `id` | `string` |  |
| `messages` | `array` |  |
| `result` | `mixed` |  |
| `success` | `bool` | Whether the API call was successful. |

#### Example: Load

```php
// load() returns the ENTITY — call data_get() for the PreviewDeployment record (throws on error).
$preview_deployment = $client->PreviewDeployment()->load(["id" => "preview_deployment_id", "account_id" => "account_id", "preview_id" => "preview_id", "worker_id" => "worker_id"]);
```

#### Example: List

```php
// list() returns an array of PreviewDeployment records (throws on error).
$preview_deployments = $client->PreviewDeployment()->list();
```

#### Example: Create

```php
$preview_deployment = $client->PreviewDeployment()->create([
    "account_id" => null, // string
    "id" => null, // string
    "worker_id" => null, // string
    "errors" => null, // array
    "messages" => null, // array
    "result" => null, // mixed
    "success" => null, // bool
]);
```


### Query

Create an instance: `$query = $client->Query();`

#### Operations

| Method | Description |
| --- | --- |
| `create(data)` | Create a new entity with the given data. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `chart` | `bool` | When true, includes time-series data in the response. |
| `chartType` | `string` | Controls the SQL shape and response payload for the 'calculations' view. |
| `compare` | `bool` | When true, includes a comparison dataset from the previous time period of equal length. |
| `distributionScale` | `string` | Value-axis bucketing for chartType 'distribution'. |
| `dry` | `bool` | When true, executes the query without persisting the results. |
| `errors` | `array` |  |
| `granularity` | `float` | Number of time-series buckets. |
| `ignoreSeries` | `bool` | When true, omits time-series data from the response and returns only aggregated values. |
| `limit` | `float` | Maximum number of events to return when view is 'events'. |
| `messages` | `array` |  |
| `offset` | `string` | Cursor for pagination in event, trace, invocation, and agent views. |
| `offsetBy` | `float` | Numeric offset for paginating grouped/pattern results (top-N lists). |
| `offsetDirection` | `string` | Pagination direction: 'next' for forward, 'prev' for backward. |
| `parameters` | `array` | Query parameters defining what data to retrieve — filters, calculations, group-bys, and ordering. |
| `queryId` | `string` | Identifier for the query. |
| `result` | `array` | Complete results of a query run. |
| `success` | `bool` |  |
| `timeframe` | `array` | Timeframe for the query using Unix timestamps in milliseconds. |
| `view` | `string` | Controls the shape of the response. |

#### Example: Create

```php
$query = $client->Query()->create([
    "account_id" => null, // string
    "errors" => null, // array
    "messages" => null, // array
    "queryId" => null, // string
    "result" => null, // array
    "success" => null, // bool
    "timeframe" => null, // array
]);
```


### RepositoryConnection

Create an instance: `$repository_connection = $client->RepositoryConnection();`

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

Create an instance: `$rollout = $client->Rollout();`

#### Operations

| Method | Description |
| --- | --- |
| `create(data)` | Create a new entity with the given data. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `description` | `string` | Description of the rollout process. |
| `kind` | `string` | Kind of the rollout process. |
| `percentage` | `int` | Initial target version percentage (0-100). |
| `step_percentage` | `int` | Percentage of rollout to increase in each step when "steps" is absent. |
| `steps` | `array` | Steps defining the rollout process, used when "step_percentage" is absent. |
| `strategy` | `string` | Strategy used for the rollout. |
| `target_configuration` | `array` | User-specified container configuration changes. |

#### Example: Create

```php
$rollout = $client->Rollout()->create([
    "account_id" => null, // string
    "application_id" => null, // string
    "description" => null, // string
    "strategy" => null, // string
    "target_configuration" => null, // array
]);
```


### SavedQuery

Create an instance: `$saved_query = $client->SavedQuery();`

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
| `errors` | `array` |  |
| `id` | `string` |  |
| `messages` | `array` |  |
| `name` | `string` | Query name |
| `parameters` | `array` |  |
| `result` | `array` |  |
| `success` | `bool` |  |

#### Example: Load

```php
// load() returns the ENTITY — call data_get() for the SavedQuery record (throws on error).
$saved_query = $client->SavedQuery()->load(["id" => "saved_query_id", "account_id" => "account_id"]);
```

#### Example: List

```php
// list() returns an array of SavedQuery records (throws on error).
$saved_querys = $client->SavedQuery()->list();
```

#### Example: Create

```php
$saved_query = $client->SavedQuery()->create([
    "account_id" => null, // string
    "description" => null, // string
    "errors" => null, // array
    "messages" => null, // array
    "name" => null, // string
    "parameters" => null, // array
    "result" => null, // array
    "success" => null, // bool
]);
```


### Script

Create an instance: `$script = $client->Script();`

#### Operations

| Method | Description |
| --- | --- |
| `remove(match)` | Remove the matching entity. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `id` | `string` |  |


### ScriptSetting

Create an instance: `$script_setting = $client->ScriptSetting();`

#### Operations

| Method | Description |
| --- | --- |
| `list(match)` | List entities matching the criteria. |
| `update(data)` | Update an existing entity. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `errors` | `array` |  |
| `logpush` | `bool` | Whether Logpush is turned on for the Worker. |
| `messages` | `array` |  |
| `observability` | `mixed` |  |
| `result` | `array` |  |
| `success` | `bool` | Whether the API call was successful. |
| `tags` | `mixed` |  |
| `tail_consumers` | `array` | List of Workers that will consume logs from the attached Worker. |

#### Example: List

```php
// list() returns an array of ScriptSetting records (throws on error).
$script_settings = $client->ScriptSetting()->list();
```


### Secret

Create an instance: `$secret = $client->Secret();`

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
| `result` | `mixed` |  |
| `scopes` | `array` | The list of services that can use this secret. |
| `value` | `string` | The value of the secret. |

#### Example: Load

```php
// load() returns the ENTITY — call data_get() for the Secret record (throws on error).
$secret = $client->Secret()->load(["id" => "secret_id", "account_id" => "account_id", "store_id" => "store_id"]);
```

#### Example: List

```php
// list() returns an array of Secret records (throws on error).
$secrets = $client->Secret()->list();
```

#### Example: Create

```php
$secret = $client->Secret()->create([
    "account_id" => null, // string
    "store_id" => null, // string
    "result" => null, // mixed
]);
```


### SecretsStoreDelete

Create an instance: `$secrets_store_delete = $client->SecretsStoreDelete();`

#### Operations

| Method | Description |
| --- | --- |
| `remove(match)` | Remove the matching entity. |


### SecretsStoreQuota

Create an instance: `$secrets_store_quota = $client->SecretsStoreQuota();`

#### Operations

| Method | Description |
| --- | --- |
| `load(match)` | Load a single entity by match criteria. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `result` | `mixed` |  |

#### Example: Load

```php
// load() returns the ENTITY — call data_get() for the SecretsStoreQuota record (throws on error).
$secrets_store_quota = $client->SecretsStoreQuota()->load(["account_id" => "account_id"]);
```


### SecretsStoreSecret

Create an instance: `$secrets_store_secret = $client->SecretsStoreSecret();`

#### Operations

| Method | Description |
| --- | --- |
| `create(data)` | Create a new entity with the given data. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `comment` | `string` | Freeform text describing the secret. |
| `name` | `string` | The name of the secret. |
| `scopes` | `array` | The list of services that can use this secret. |

#### Example: Create

```php
$secrets_store_secret = $client->SecretsStoreSecret()->create([
    "account_id" => null, // string
    "secret_id" => null, // string
    "store_id" => null, // string
    "name" => null, // string
    "scopes" => null, // array
]);
```


### SecretsStoreStore

Create an instance: `$secrets_store_store = $client->SecretsStoreStore();`

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
| `result` | `mixed` |  |

#### Example: Load

```php
// load() returns the ENTITY — call data_get() for the SecretsStoreStore record (throws on error).
$secrets_store_store = $client->SecretsStoreStore()->load(["id" => "secrets_store_store_id", "account_id" => "account_id"]);
```

#### Example: Create

```php
$secrets_store_store = $client->SecretsStoreStore()->create([
    "account_id" => null, // string
    "name" => null, // string
    "result" => null, // mixed
]);
```


### SecretsStoreStoresResponseCollection

Create an instance: `$secrets_store_stores_response_collection = $client->SecretsStoreStoresResponseCollection();`

#### Operations

| Method | Description |
| --- | --- |
| `list(match)` | List entities matching the criteria. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `result` | `array` |  |

#### Example: List

```php
// list() returns an array of SecretsStoreStoresResponseCollection records (throws on error).
$secrets_store_stores_response_collections = $client->SecretsStoreStoresResponseCollection()->list();
```


### Setting

Create an instance: `$setting = $client->Setting();`

#### Operations

| Method | Description |
| --- | --- |
| `list(match)` | List entities matching the criteria. |
| `update(data)` | Update an existing entity. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `errors` | `array` |  |
| `messages` | `array` |  |
| `result` | `array` |  |
| `success` | `bool` | Whether the API call was successful. |

#### Example: List

```php
// list() returns an array of Setting records (throws on error).
$settings = $client->Setting()->list();
```


### Shared

Create an instance: `$shared = $client->Shared();`

#### Operations

| Method | Description |
| --- | --- |
| `create(data)` | Create a new entity with the given data. |
| `load(match)` | Load a single entity by match criteria. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `errors` | `array` |  |
| `id` | `string` |  |
| `messages` | `array` |  |
| `result` | `array` | Complete results of a query run. |
| `success` | `bool` |  |

#### Example: Load

```php
// load() returns the ENTITY — call data_get() for the Shared record (throws on error).
$shared = $client->Shared()->load(["id" => "shared_id", "account_id" => "account_id"]);
```

#### Example: Create

```php
$shared = $client->Shared()->create([
    "account_id" => null, // string
    "errors" => null, // array
    "messages" => null, // array
    "result" => null, // array
    "success" => null, // bool
]);
```


### Tail

Create an instance: `$tail = $client->Tail();`

#### Operations

| Method | Description |
| --- | --- |
| `remove(match)` | Remove the matching entity. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `id` | `string` |  |


### Token

Create an instance: `$token = $client->Token();`

#### Operations

| Method | Description |
| --- | --- |
| `remove(match)` | Remove the matching entity. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `id` | `string` |  |


### Trigger

Create an instance: `$trigger = $client->Trigger();`

#### Operations

| Method | Description |
| --- | --- |
| `create(data)` | Create a new entity with the given data. |
| `remove(match)` | Remove the matching entity. |
| `update(data)` | Update an existing entity. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `branch_excludes` | `array` | Branch patterns that must not start builds. |
| `branch_includes` | `array` | Branch patterns that can start builds. |
| `build_caching_enabled` | `bool` | Whether builds reuse cached dependencies and build artifacts. |
| `build_command` | `string` | Command to build the Worker. |
| `build_token_uuid` | `string` | UUID of the build token used when deploying the Worker. |
| `deploy_command` | `string` | Command to deploy the Worker. |
| `external_script_id` | `string` | System-generated tag of the Worker. |
| `id` | `string` |  |
| `path_excludes` | `array` | Path patterns that must not start builds. |
| `path_includes` | `array` | Path patterns that can start builds. |
| `repo_connection_uuid` | `string` | Repository connection UUID. |
| `root_directory` | `string` | Repository directory in which build and deploy commands run. |
| `trigger_name` | `string` | Human-readable name of the build trigger. |

#### Example: Create

```php
$trigger = $client->Trigger()->create([
    "account_id" => null, // string
    "branch_excludes" => null, // array
    "branch_includes" => null, // array
    "build_command" => null, // string
    "build_token_uuid" => null, // string
    "deploy_command" => null, // string
    "external_script_id" => null, // string
    "path_excludes" => null, // array
    "path_includes" => null, // array
    "repo_connection_uuid" => null, // string
    "root_directory" => null, // string
    "trigger_name" => null, // string
]);
```


### Usage

Create an instance: `$usage = $client->Usage();`

#### Operations

| Method | Description |
| --- | --- |
| `list(match)` | List entities matching the criteria. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `errors` | `array` |  |
| `messages` | `array` |  |
| `result` | `array` |  |
| `success` | `bool` |  |

#### Example: List

```php
// list() returns an array of Usage records (throws on error).
$usages = $client->Usage()->list();
```


### Value

Create an instance: `$value = $client->Value();`

#### Operations

| Method | Description |
| --- | --- |
| `create(data)` | Create a new entity with the given data. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `datasets` | `array` | Leave this empty to use the default datasets |
| `errors` | `array` |  |
| `filters` | `array` | Apply filters before listing values. |
| `key` | `string` |  |
| `limit` | `float` |  |
| `messages` | `array` |  |
| `needle` | `array` | Full-text search expression to match events containing the specified text or pattern. |
| `result` | `array` |  |
| `success` | `bool` |  |
| `timeframe` | `array` |  |
| `type` | `string` |  |

#### Example: Create

```php
$value = $client->Value()->create([
    "account_id" => null, // string
    "datasets" => null, // array
    "errors" => null, // array
    "key" => null, // string
    "messages" => null, // array
    "needle" => null, // array
    "result" => null, // array
    "success" => null, // bool
    "timeframe" => null, // array
    "type" => null, // string
]);
```


### Version

Create an instance: `$version = $client->Version();`

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
| `annotations` | `array` | Metadata about the version. |
| `assets` | `array` | Configuration for assets within a Worker. |
| `author_email` | `string` | Email of the user who created the version. |
| `author_id` | `string` | Identifier of the user who created the version. |
| `bindings` | `array` | List of bindings attached to a Worker. |
| `cache_options` | `array` | Global CacheW configuration for the Worker. |
| `compatibility_date` | `string` | Date indicating targeted support in the Workers runtime. |
| `compatibility_flags` | `array` | Flags that enable or disable certain features in the Workers runtime. |
| `containers` | `array` | List of containers attached to a Worker. |
| `created_on` | `string` | When the version was created. |
| `errors` | `array` |  |
| `exports` | `mixed` | Declarative exports for the version, including Durable Object classes (with their `storage` backend) and named Worker entrypoints. |
| `exports_reconciliation` | `mixed` | Summary of the declarative exports reconciliation that ran on this upload. |
| `id` | `string` | Version identifier. |
| `limits` | `array` | Resource limits enforced at runtime. |
| `main_module` | `string` | The name of the main module in the `modules` array (e.g. |
| `messages` | `array` |  |
| `migration_tag` | `string` | Durable Object migration tag. |
| `migrations` | `mixed` | Migrations for Durable Objects associated with the version. |
| `modules` | `array` | Code, sourcemaps, and other content used at runtime. |
| `number` | `int` | The integer version number, starting from one. |
| `package_dependencies` | `array` | The list of npm packages that were installed and used when this Worker version was built. |
| `placement` | `array` | Configuration for [Smart Placement](https://developers.cloudflare.com/workers/configuration/smart-placement). |
| `result` | `array` |  |
| `source` | `string` | The client used to create the version. |
| `startup_time_ms` | `int` | Time in milliseconds spent on [Worker startup](https://developers.cloudflare.com/workers/platform/limits/#worker-startup-time). |
| `success` | `bool` | Whether the API call was successful. |
| `urls` | `array` | All routable URLs that always point to this version. |
| `usage_model` | `string` | Usage model for the version. |

#### Example: Load

```php
// load() returns the ENTITY — call data_get() for the Version record (throws on error).
$version = $client->Version()->load(["id" => "version_id", "account_id" => "account_id", "worker_id" => "worker_id"]);
```

#### Example: List

```php
// list() returns an array of Version records (throws on error).
$versions = $client->Version()->list();
```

#### Example: Create

```php
$version = $client->Version()->create([
    "account_id" => null, // string
    "worker_id" => null, // string
    "cache_options" => null, // array
    "created_on" => null, // string
    "errors" => null, // array
    "id" => null, // string
    "messages" => null, // array
    "number" => null, // int
    "result" => null, // array
    "success" => null, // bool
    "urls" => null, // array
]);
```


### Worker

Create an instance: `$worker = $client->Worker();`

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
| `auto_build` | `bool` | Whether pushes to the git branch build this Preview. |
| `auto_delete` | `bool` | Whether deleting the git branch also deletes this Preview. |
| `branch` | `mixed` | Git branch name (required if commit_hash not provided) |
| `commit_hash` | `mixed` | Git commit hash (required if branch not provided) |
| `errors` | `array` |  |
| `git_repository` | `mixed` | Git repository settings to update |
| `id` | `string` |  |
| `messages` | `array` |  |
| `previews_base_config` | `array` | Build and deploy settings when creating a Worker build configuration |
| `previews_enabled` | `bool` | Whether Previews are enabled for this Worker |
| `production_settings` | `array` | Build and deploy settings when creating a Worker build configuration |
| `result` | `array` | A single Preview of a Worker, with the build settings it currently uses. |
| `result_info` | `array` |  |
| `script_tag` | `string` | System-generated tag of the Worker. |
| `seed_repo` | `mixed` | Optional repository and file overrides used to seed this build. |
| `settings` | `array` | Partial build settings for updating a Worker build configuration |
| `success` | `bool` | Whether the API call was successful. |

#### Example: Load

```php
// load() returns the ENTITY — call data_get() for the Worker record (throws on error).
$worker = $client->Worker()->load(["id" => "worker_id", "account_id" => "account_id"]);
```

#### Example: List

```php
// list() returns an array of Worker records (throws on error).
$workers = $client->Worker()->list();
```

#### Example: Create

```php
$worker = $client->Worker()->create([
    "account_id" => null, // string
    "errors" => null, // array
    "git_repository" => null, // mixed
    "messages" => null, // array
    "previews_base_config" => null, // array
    "previews_enabled" => null, // bool
    "production_settings" => null, // array
    "result" => null, // array
    "script_tag" => null, // string
    "success" => null, // bool
]);
```


### WorkerCronTrigger

Create an instance: `$worker_cron_trigger = $client->WorkerCronTrigger();`

#### Operations

| Method | Description |
| --- | --- |
| `list(match)` | List entities matching the criteria. |
| `update(data)` | Update an existing entity. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `errors` | `array` |  |
| `messages` | `array` |  |
| `result` | `array` |  |
| `success` | `bool` | Whether the API call was successful. |

#### Example: List

```php
// list() returns an array of WorkerCronTrigger records (throws on error).
$worker_cron_triggers = $client->WorkerCronTrigger()->list();
```


### WorkerDeployment

Create an instance: `$worker_deployment = $client->WorkerDeployment();`

#### Operations

| Method | Description |
| --- | --- |
| `create(data)` | Create a new entity with the given data. |
| `load(match)` | Load a single entity by match criteria. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `annotations` | `array` |  |
| `author_email` | `string` |  |
| `created_on` | `string` |  |
| `errors` | `array` |  |
| `id` | `string` |  |
| `messages` | `array` |  |
| `result` | `array` |  |
| `source` | `string` |  |
| `strategy` | `string` |  |
| `success` | `bool` | Whether the API call was successful. |
| `versions` | `array` | Worker versions included in this deployment. |

#### Example: Load

```php
// load() returns the ENTITY — call data_get() for the WorkerDeployment record (throws on error).
$worker_deployment = $client->WorkerDeployment()->load(["id" => "worker_deployment_id", "account_id" => "account_id"]);
```

#### Example: Create

```php
$worker_deployment = $client->WorkerDeployment()->create([
    "account_id" => null, // string
    "script_name" => null, // string
    "created_on" => null, // string
    "errors" => null, // array
    "id" => null, // string
    "messages" => null, // array
    "result" => null, // array
    "source" => null, // string
    "strategy" => null, // string
    "success" => null, // bool
    "versions" => null, // array
]);
```


### WorkerEnvironment

Create an instance: `$worker_environment = $client->WorkerEnvironment();`

#### Operations

| Method | Description |
| --- | --- |
| `load(match)` | Load a single entity by match criteria. |

#### Example: Load

```php
// load() returns the ENTITY — call data_get() for the WorkerEnvironment record (throws on error).
$worker_environment = $client->WorkerEnvironment()->load(["account_id" => "account_id", "environment_name" => "environment_name", "service_id" => "service_id"]);
```


### WorkerRoute

Create an instance: `$worker_route = $client->WorkerRoute();`

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
| `errors` | `array` |  |
| `id` | `string` |  |
| `messages` | `array` |  |
| `pattern` | `string` | Pattern to match incoming requests against. |
| `result` | `array` |  |
| `script` | `string` | Name of the script to run if the route matches. |
| `success` | `bool` | Whether the API call was successful. |

#### Example: Load

```php
// load() returns the ENTITY — call data_get() for the WorkerRoute record (throws on error).
$worker_route = $client->WorkerRoute()->load(["id" => "worker_route_id", "zone_id" => "zone_id"]);
```

#### Example: List

```php
// list() returns an array of WorkerRoute records (throws on error).
$worker_routes = $client->WorkerRoute()->list();
```

#### Example: Create

```php
$worker_route = $client->WorkerRoute()->create([
    "zone_id" => null, // string
    "errors" => null, // array
    "id" => null, // string
    "messages" => null, // array
    "pattern" => null, // string
    "result" => null, // array
    "success" => null, // bool
]);
```


### WorkerScript

Create an instance: `$worker_script = $client->WorkerScript();`

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
| `errors` | `array` |  |
| `id` | `string` |  |
| `messages` | `array` |  |
| `result` | `array` | A secret value accessible through a binding. |
| `success` | `bool` | Whether the API call was successful. |

#### Example: Load

```php
// load() returns the ENTITY — call data_get() for the WorkerScript record (throws on error).
$worker_script = $client->WorkerScript()->load(["id" => "worker_script_id", "account_id" => "account_id"]);
```

#### Example: List

```php
// list() returns an array of WorkerScript records (throws on error).
$worker_scripts = $client->WorkerScript()->list();
```

#### Example: Create

```php
$worker_script = $client->WorkerScript()->create([
    "account_id" => null, // string
    "script_name" => null, // string
    "errors" => null, // array
    "messages" => null, // array
    "success" => null, // bool
]);
```


### WorkerSubdomain

Create an instance: `$worker_subdomain = $client->WorkerSubdomain();`

#### Operations

| Method | Description |
| --- | --- |
| `list(match)` | List entities matching the criteria. |
| `remove(match)` | Remove the matching entity. |
| `update(data)` | Update an existing entity. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `errors` | `array` |  |
| `messages` | `array` |  |
| `result` | `array` |  |
| `subdomain` | `string` |  |
| `success` | `bool` | Whether the API call was successful. |

#### Example: List

```php
// list() returns an array of WorkerSubdomain records (throws on error).
$worker_subdomains = $client->WorkerSubdomain()->list();
```


### WorkerTailLog

Create an instance: `$worker_tail_log = $client->WorkerTailLog();`

#### Operations

| Method | Description |
| --- | --- |
| `create(data)` | Create a new entity with the given data. |
| `list(match)` | List entities matching the criteria. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `errors` | `array` |  |
| `messages` | `array` |  |
| `result` | `array` |  |
| `success` | `bool` | Whether the API call was successful. |

#### Example: List

```php
// list() returns an array of WorkerTailLog records (throws on error).
$worker_tail_logs = $client->WorkerTailLog()->list();
```

#### Example: Create

```php
$worker_tail_log = $client->WorkerTailLog()->create([
    "account_id" => null, // string
    "script_name" => null, // string
    "errors" => null, // array
    "messages" => null, // array
    "result" => null, // array
    "success" => null, // bool
]);
```


### WorkersAccountSetting

Create an instance: `$workers_account_setting = $client->WorkersAccountSetting();`

#### Operations

| Method | Description |
| --- | --- |
| `list(match)` | List entities matching the criteria. |
| `update(data)` | Update an existing entity. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `default_usage_model` | `string` |  |
| `errors` | `array` |  |
| `green_compute` | `bool` |  |
| `messages` | `array` |  |
| `result` | `array` |  |
| `success` | `bool` | Whether the API call was successful. |

#### Example: List

```php
// list() returns an array of WorkersAccountSetting records (throws on error).
$workers_account_settings = $client->WorkersAccountSetting()->list();
```


### WorkersApiResponseNullResult

Create an instance: `$workers_api_response_null_result = $client->WorkersApiResponseNullResult();`

#### Operations

| Method | Description |
| --- | --- |
| `remove(match)` | Remove the matching entity. |
| `update(data)` | Update an existing entity. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `errors` | `array` |  |
| `messages` | `array` |  |
| `result` | `array` |  |
| `success` | `bool` | Whether the API call was successful. |


### WorkersCompletedUploadAsset

Create an instance: `$workers_completed_upload_asset = $client->WorkersCompletedUploadAsset();`

#### Operations

| Method | Description |
| --- | --- |
| `create(data)` | Create a new entity with the given data. |

#### Example: Create

```php
$workers_completed_upload_asset = $client->WorkersCompletedUploadAsset()->create([
    "account_id" => null, // string
    "base64" => null, // bool
]);
```


### WorkersCreateAssetsUploadSession

Create an instance: `$workers_create_assets_upload_session = $client->WorkersCreateAssetsUploadSession();`

#### Operations

| Method | Description |
| --- | --- |
| `create(data)` | Create a new entity with the given data. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `manifest` | `array` | A manifest ([path]: {hash, size}) map of files to upload. |

#### Example: Create

```php
$workers_create_assets_upload_session = $client->WorkersCreateAssetsUploadSession()->create([
    "account_id" => null, // string
    "script_name" => null, // string
    "manifest" => null, // array
]);
```


### WorkersForPlatform

Create an instance: `$workers_for_platform = $client->WorkersForPlatform();`

#### Operations

| Method | Description |
| --- | --- |
| `list(match)` | List entities matching the criteria. |
| `load(match)` | Load a single entity by match criteria. |
| `update(data)` | Update an existing entity. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `errors` | `array` |  |
| `messages` | `array` |  |
| `result` | `array` | A secret value accessible through a binding. |
| `success` | `bool` | Whether the API call was successful. |

#### Example: Load

```php
// load() returns the ENTITY — call data_get() for the WorkersForPlatform record (throws on error).
$workers_for_platform = $client->WorkersForPlatform()->load(["account_id" => "account_id", "namespace_id" => "namespace_id"]);
```

#### Example: List

```php
// list() returns an array of WorkersForPlatform records (throws on error).
$workers_for_platforms = $client->WorkersForPlatform()->list();
```


### WorkersKvApiResponseCommonNoResult

Create an instance: `$workers_kv_api_response_common_no_result = $client->WorkersKvApiResponseCommonNoResult();`

#### Operations

| Method | Description |
| --- | --- |
| `remove(match)` | Remove the matching entity. |
| `update(data)` | Update an existing entity. |


### WorkersKvNamespace

Create an instance: `$workers_kv_namespace = $client->WorkersKvNamespace();`

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
| `errors` | `array` |  |
| `id` | `string` |  |
| `jurisdiction` | `string` | Specify the jurisdiction to restrict the KV namespace to durably store data within. |
| `keys` | `array` | Array of keys to retrieve (maximum of 100). |
| `messages` | `array` |  |
| `result` | `mixed` |  |
| `result_info` | `array` |  |
| `success` | `bool` | Whether the API call was successful. |
| `title` | `string` | Human-readable string name for a Workers KV namespace. |
| `type` | `string` | Return values as strings with `text`, or parse stored JSON values with `json`. |
| `withMetadata` | `bool` | Whether to include metadata in the response. |

#### Example: Load

```php
// load() returns the ENTITY — call data_get() for the WorkersKvNamespace record (throws on error).
$workers_kv_namespace = $client->WorkersKvNamespace()->load(["id" => "workers_kv_namespace_id", "account_id" => "account_id"]);
```

#### Example: List

```php
// list() returns an array of WorkersKvNamespace records (throws on error).
$workers_kv_namespaces = $client->WorkersKvNamespace()->list();
```

#### Example: Create

```php
$workers_kv_namespace = $client->WorkersKvNamespace()->create([
    "account_id" => null, // string
    "errors" => null, // array
    "keys" => null, // array
    "messages" => null, // array
    "success" => null, // bool
    "title" => null, // string
]);
```


### WorkersNamespaceList

Create an instance: `$workers_namespace_list = $client->WorkersNamespaceList();`

#### Operations

| Method | Description |
| --- | --- |
| `list(match)` | List entities matching the criteria. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `errors` | `array` |  |
| `messages` | `array` |  |
| `result` | `array` |  |
| `success` | `bool` | Whether the API call was successful. |

#### Example: List

```php
// list() returns an array of WorkersNamespaceList records (throws on error).
$workers_namespace_lists = $client->WorkersNamespaceList()->list();
```


### WorkersNamespaceScriptDeleteBulk

Create an instance: `$workers_namespace_script_delete_bulk = $client->WorkersNamespaceScriptDeleteBulk();`

#### Operations

| Method | Description |
| --- | --- |
| `remove(match)` | Remove the matching entity. |


### WorkersNamespaceScriptResponseSingle

Create an instance: `$workers_namespace_script_response_single = $client->WorkersNamespaceScriptResponseSingle();`

#### Operations

| Method | Description |
| --- | --- |
| `load(match)` | Load a single entity by match criteria. |
| `update(data)` | Update an existing entity. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `errors` | `array` |  |
| `messages` | `array` |  |
| `result` | `array` | Details about a worker uploaded to a Workers for Platforms namespace. |
| `success` | `bool` | Whether the API call was successful. |

#### Example: Load

```php
// load() returns the ENTITY — call data_get() for the WorkersNamespaceScriptResponseSingle record (throws on error).
$workers_namespace_script_response_single = $client->WorkersNamespaceScriptResponseSingle()->load(["account_id" => "account_id", "namespace_id" => "namespace_id", "script_name" => "script_name"]);
```


### WorkersNamespaceSingle

Create an instance: `$workers_namespace_single = $client->WorkersNamespaceSingle();`

#### Operations

| Method | Description |
| --- | --- |
| `create(data)` | Create a new entity with the given data. |
| `load(match)` | Load a single entity by match criteria. |
| `update(data)` | Update an existing entity. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `errors` | `array` |  |
| `messages` | `array` |  |
| `name` | `string` | The name of the dispatch namespace. |
| `result` | `array` |  |
| `success` | `bool` | Whether the API call was successful. |
| `trusted_workers` | `bool` | Whether the Workers in the namespace are executed in a "trusted" manner. |

#### Example: Load

```php
// load() returns the ENTITY — call data_get() for the WorkersNamespaceSingle record (throws on error).
$workers_namespace_single = $client->WorkersNamespaceSingle()->load(["account_id" => "account_id", "dispatch_namespace" => "dispatch_namespace"]);
```

#### Example: Create

```php
$workers_namespace_single = $client->WorkersNamespaceSingle()->create([
    "account_id" => null, // string
    "errors" => null, // array
    "messages" => null, // array
    "success" => null, // bool
]);
```


### WorkersPipelinesOther

Create an instance: `$workers_pipelines_other = $client->WorkersPipelinesOther();`

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
| `config` | `mixed` | Defines the configuration of the R2 Sink. |
| `created_at` | `string` |  |
| `destination` | `array` |  |
| `endpoint` | `string` | Indicates the endpoint URL to send traffic. |
| `failure_reason` | `string` | Indicates the reason for the failure of the Pipeline. |
| `format` | `mixed` | Defines the output data format of a sink. |
| `graph` | `array` | Indicates the processing flow to implement the SQL. |
| `http` | `array` |  |
| `id` | `string` | Indicates a unique identifier for this pipeline. |
| `modified_at` | `string` |  |
| `name` | `string` | Indicates the name of the Pipeline. |
| `schema` | `array` | Defines the schema of the events in the data stream. |
| `source` | `array` |  |
| `sql` | `string` | Specifies SQL for the Pipeline processing flow. |
| `status` | `string` | Indicates the current status of the Pipeline. |
| `tables` | `array` | List of streams and sinks used by this pipeline. |
| `type` | `string` | Specifies the type of sink. |
| `version` | `float` | Indicates the version number of last saved configuration. |
| `worker_binding` | `array` |  |

#### Example: Load

```php
// load() returns the ENTITY — call data_get() for the WorkersPipelinesOther record (throws on error).
$workers_pipelines_other = $client->WorkersPipelinesOther()->load(["account_id" => "account_id"]);
```

#### Example: List

```php
// list() returns an array of WorkersPipelinesOther records (throws on error).
$workers_pipelines_others = $client->WorkersPipelinesOther()->list();
```

#### Example: Create

```php
$workers_pipelines_other = $client->WorkersPipelinesOther()->create([
    "account_id" => null, // string
    "created_at" => null, // string
    "destination" => null, // array
    "endpoint" => null, // string
    "graph" => null, // array
    "http" => null, // array
    "id" => null, // string
    "modified_at" => null, // string
    "name" => null, // string
    "source" => null, // array
    "sql" => null, // string
    "status" => null, // string
    "tables" => null, // array
    "type" => null, // string
    "version" => null, // float
    "worker_binding" => null, // array
]);
```


### WorkersScriptAndVersionSetting

Create an instance: `$workers_script_and_version_setting = $client->WorkersScriptAndVersionSetting();`

#### Operations

| Method | Description |
| --- | --- |
| `list(match)` | List entities matching the criteria. |
| `update(data)` | Update an existing entity. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `errors` | `array` |  |
| `messages` | `array` |  |
| `result` | `array` |  |
| `success` | `bool` | Whether the API call was successful. |

#### Example: List

```php
// list() returns an array of WorkersScriptAndVersionSetting records (throws on error).
$workers_script_and_version_settings = $client->WorkersScriptAndVersionSetting()->list();
```


### WorkersScriptResponseCollection

Create an instance: `$workers_script_response_collection = $client->WorkersScriptResponseCollection();`

#### Operations

| Method | Description |
| --- | --- |
| `list(match)` | List entities matching the criteria. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `errors` | `array` |  |
| `messages` | `array` |  |
| `result` | `array` |  |
| `success` | `bool` | Whether the API call was successful. |

#### Example: List

```php
// list() returns an array of WorkersScriptResponseCollection records (throws on error).
$workers_script_response_collections = $client->WorkersScriptResponseCollection()->list();
```


### WorkersScriptResponseSingle

Create an instance: `$workers_script_response_single = $client->WorkersScriptResponseSingle();`

#### Operations

| Method | Description |
| --- | --- |
| `update(data)` | Update an existing entity. |


### WorkersSmartPlacement

Create an instance: `$workers_smart_placement = $client->WorkersSmartPlacement();`

#### Operations

| Method | Description |
| --- | --- |
| `list(match)` | List entities matching the criteria. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `errors` | `array` |  |
| `messages` | `array` |  |
| `result` | `array` |  |
| `success` | `bool` | Whether the API call was successful. |

#### Example: List

```php
// list() returns an array of WorkersSmartPlacement records (throws on error).
$workers_smart_placements = $client->WorkersSmartPlacement()->list();
```


### WorkersUsageModel

Create an instance: `$workers_usage_model = $client->WorkersUsageModel();`

#### Operations

| Method | Description |
| --- | --- |
| `list(match)` | List entities matching the criteria. |
| `update(data)` | Update an existing entity. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `errors` | `array` |  |
| `messages` | `array` |  |
| `result` | `array` |  |
| `success` | `bool` | Whether the API call was successful. |
| `usage_model` | `string` | Usage model for the Worker invocations. |
| `user_limits` | `array` | User-defined resource limits for Workers with standard usage model. |

#### Example: List

```php
// list() returns an array of WorkersUsageModel records (throws on error).
$workers_usage_models = $client->WorkersUsageModel()->list();
```


### WorkersVersionsList

Create an instance: `$workers_versions_list = $client->WorkersVersionsList();`

#### Operations

| Method | Description |
| --- | --- |
| `list(match)` | List entities matching the criteria. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `errors` | `array` |  |
| `messages` | `array` |  |
| `result` | `array` |  |
| `success` | `bool` | Whether the API call was successful. |

#### Example: List

```php
// list() returns an array of WorkersVersionsList records (throws on error).
$workers_versions_lists = $client->WorkersVersionsList()->list();
```


### WorkersVersionsSingle

Create an instance: `$workers_versions_single = $client->WorkersVersionsSingle();`

#### Operations

| Method | Description |
| --- | --- |
| `load(match)` | Load a single entity by match criteria. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `errors` | `array` |  |
| `messages` | `array` |  |
| `result` | `mixed` |  |
| `success` | `bool` | Whether the API call was successful. |

#### Example: Load

```php
// load() returns the ENTITY — call data_get() for the WorkersVersionsSingle record (throws on error).
$workers_versions_single = $client->WorkersVersionsSingle()->load(["account_id" => "account_id", "script_id" => "script_id", "version_id" => "version_id"]);
```


### WorkersVersionsUpload

Create an instance: `$workers_versions_upload = $client->WorkersVersionsUpload();`

#### Operations

| Method | Description |
| --- | --- |
| `create(data)` | Create a new entity with the given data. |

#### Example: Create

```php
$workers_versions_upload = $client->WorkersVersionsUpload()->create([
    "account_id" => null, // string
    "script_name" => null, // string
]);
```


### Workflow

Create an instance: `$workflow = $client->Workflow();`

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
| `concurrency` | `array` |  |
| `default_retention` | `array` | Default retention applied to instances of this version when they do not set their own retention. |
| `errors` | `array` |  |
| `id` | `string` |  |
| `instances` | `array` |  |
| `limits` | `array` |  |
| `messages` | `array` |  |
| `result` | `array` |  |
| `result_info` | `array` |  |
| `schedules` | `array` |  |
| `script_name` | `string` |  |
| `success` | `bool` |  |

#### Example: Load

```php
// load() returns the ENTITY — call data_get() for the Workflow record (throws on error).
$workflow = $client->Workflow()->load(["id" => "workflow_id", "account_id" => "account_id"]);
```

#### Example: List

```php
// list() returns an array of Workflow records (throws on error).
$workflows = $client->Workflow()->list();
```

#### Example: Create

```php
$workflow = $client->Workflow()->create([
    "account_id" => null, // string
    "workflow_id" => null, // string
    "class_name" => null, // string
    "errors" => null, // array
    "instances" => null, // array
    "messages" => null, // array
    "result" => null, // array
    "result_info" => null, // array
    "script_name" => null, // string
    "success" => null, // bool
]);
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

Features are the extension mechanism. A feature is a PHP class
with hook methods named after pipeline stages (e.g. `PrePoint`,
`PreSpec`). Each method receives the context.

The SDK ships with built-in features:

- **TestFeature**: Test transport

Features are initialized in order. Hooks fire in the order features
were added, so later features can override earlier ones.

### Data as arrays

The PHP SDK uses plain PHP associative arrays throughout rather than typed
objects. This mirrors the dynamic nature of the API and keeps the
SDK flexible — no code generation is needed when the API schema
changes.

Use `Helpers::to_map()` to safely validate that a value is an array.

### Directory structure

```
php/
├── cloudflareworkers_sdk.php          -- Main SDK class
├── config.php                     -- Configuration
├── schema.php                     -- Generated option + entity specs
├── features.php                   -- Feature factory
├── core/                          -- Core types and context
├── entity/                        -- Entity implementations
├── feature/                       -- Built-in features (Base, Test, Log)
├── utility/                       -- Utility functions and struct library
└── test/                          -- Test suites
```

The main class (`cloudflareworkers_sdk.php`) exports the SDK class
and test helper. Import entity or utility modules directly only
when needed.

### Entity state

Entity instances are stateful. After a successful `list`, the entity
stores the returned data and match criteria internally.

```php
$workersubdomain = $client->WorkerSubdomain();
$workersubdomain->list();

// $workersubdomain->data_get() now returns the workersubdomain data from the last list
// $workersubdomain->match_get() returns the last match criteria
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
