# CloudflareWorkers PHP SDK Reference

Complete API reference for the CloudflareWorkers PHP SDK.


## CloudflareWorkersSDK

### Constructor

```php
require_once __DIR__ . '/cloudflareworkers_sdk.php';

$client = new CloudflareWorkersSDK($options);
```

Create a new SDK client instance.

**Parameters:**

| Name | Type | Description |
| --- | --- | --- |
| `$options` | `array` | SDK configuration options. |
| `$options["apikey"]` | `string` | API key for authentication. |
| `$options["base"]` | `string` | Base URL for API requests. |
| `$options["prefix"]` | `string` | URL prefix appended after base. |
| `$options["suffix"]` | `string` | URL suffix appended after path. |
| `$options["headers"]` | `array` | Custom headers for all requests. |
| `$options["feature"]` | `array` | Feature configuration. |
| `$options["system"]` | `array` | System overrides (e.g. custom fetch). |


### Static Methods

#### `CloudflareWorkersSDK::test($testopts = null, $sdkopts = null)`

Create a test client with mock features active. Both arguments may be `null`.

```php
$client = CloudflareWorkersSDK::test();
```


### Instance Methods

#### `Account($data = null)`

Create a new `AccountEntity` instance. Pass `null` for no initial data.

#### `Application($data = null)`

Create a new `ApplicationEntity` instance. Pass `null` for no initial data.

#### `Brapi($data = null)`

Create a new `BrapiEntity` instance. Pass `null` for no initial data.

#### `Build($data = null)`

Create a new `BuildEntity` instance. Pass `null` for no initial data.

#### `BuildToken($data = null)`

Create a new `BuildTokenEntity` instance. Pass `null` for no initial data.

#### `BuildsApi($data = null)`

Create a new `BuildsApiEntity` instance. Pass `null` for no initial data.

#### `Connection($data = null)`

Create a new `ConnectionEntity` instance. Pass `null` for no initial data.

#### `ContainerImage($data = null)`

Create a new `ContainerImageEntity` instance. Pass `null` for no initial data.

#### `ContainerInstance($data = null)`

Create a new `ContainerInstanceEntity` instance. Pass `null` for no initial data.

#### `DeployHook($data = null)`

Create a new `DeployHookEntity` instance. Pass `null` for no initial data.

#### `Deployment($data = null)`

Create a new `DeploymentEntity` instance. Pass `null` for no initial data.

#### `Destination($data = null)`

Create a new `DestinationEntity` instance. Pass `null` for no initial data.

#### `Domain($data = null)`

Create a new `DomainEntity` instance. Pass `null` for no initial data.

#### `DurableObjectsNamespace($data = null)`

Create a new `DurableObjectsNamespaceEntity` instance. Pass `null` for no initial data.

#### `EnvironmentVariable($data = null)`

Create a new `EnvironmentVariableEntity` instance. Pass `null` for no initial data.

#### `GitHubIntegration($data = null)`

Create a new `GitHubIntegrationEntity` instance. Pass `null` for no initial data.

#### `Hyperdrive($data = null)`

Create a new `HyperdriveEntity` instance. Pass `null` for no initial data.

#### `ImageRegistry($data = null)`

Create a new `ImageRegistryEntity` instance. Pass `null` for no initial data.

#### `Issue($data = null)`

Create a new `IssueEntity` instance. Pass `null` for no initial data.

#### `Key($data = null)`

Create a new `KeyEntity` instance. Pass `null` for no initial data.

#### `LiveTail($data = null)`

Create a new `LiveTailEntity` instance. Pass `null` for no initial data.

#### `MetricsExport($data = null)`

Create a new `MetricsExportEntity` instance. Pass `null` for no initial data.

#### `Namespace($data = null)`

Create a new `NamespaceEntity` instance. Pass `null` for no initial data.

#### `Preview($data = null)`

Create a new `PreviewEntity` instance. Pass `null` for no initial data.

#### `PreviewDeployment($data = null)`

Create a new `PreviewDeploymentEntity` instance. Pass `null` for no initial data.

#### `Query($data = null)`

Create a new `QueryEntity` instance. Pass `null` for no initial data.

#### `RepositoryConnection($data = null)`

Create a new `RepositoryConnectionEntity` instance. Pass `null` for no initial data.

#### `Rollout($data = null)`

Create a new `RolloutEntity` instance. Pass `null` for no initial data.

#### `SavedQuery($data = null)`

Create a new `SavedQueryEntity` instance. Pass `null` for no initial data.

#### `Script($data = null)`

Create a new `ScriptEntity` instance. Pass `null` for no initial data.

#### `ScriptSetting($data = null)`

Create a new `ScriptSettingEntity` instance. Pass `null` for no initial data.

#### `Secret($data = null)`

Create a new `SecretEntity` instance. Pass `null` for no initial data.

#### `SecretsStoreDelete($data = null)`

Create a new `SecretsStoreDeleteEntity` instance. Pass `null` for no initial data.

#### `SecretsStoreQuota($data = null)`

Create a new `SecretsStoreQuotaEntity` instance. Pass `null` for no initial data.

#### `SecretsStoreSecret($data = null)`

Create a new `SecretsStoreSecretEntity` instance. Pass `null` for no initial data.

#### `SecretsStoreStore($data = null)`

Create a new `SecretsStoreStoreEntity` instance. Pass `null` for no initial data.

#### `SecretsStoreStoresResponseCollection($data = null)`

Create a new `SecretsStoreStoresResponseCollectionEntity` instance. Pass `null` for no initial data.

#### `Setting($data = null)`

Create a new `SettingEntity` instance. Pass `null` for no initial data.

#### `Shared($data = null)`

Create a new `SharedEntity` instance. Pass `null` for no initial data.

#### `Tail($data = null)`

Create a new `TailEntity` instance. Pass `null` for no initial data.

#### `Token($data = null)`

Create a new `TokenEntity` instance. Pass `null` for no initial data.

#### `Trigger($data = null)`

Create a new `TriggerEntity` instance. Pass `null` for no initial data.

#### `Usage($data = null)`

Create a new `UsageEntity` instance. Pass `null` for no initial data.

#### `Value($data = null)`

Create a new `ValueEntity` instance. Pass `null` for no initial data.

#### `Version($data = null)`

Create a new `VersionEntity` instance. Pass `null` for no initial data.

#### `Worker($data = null)`

Create a new `WorkerEntity` instance. Pass `null` for no initial data.

#### `WorkerCronTrigger($data = null)`

Create a new `WorkerCronTriggerEntity` instance. Pass `null` for no initial data.

#### `WorkerDeployment($data = null)`

Create a new `WorkerDeploymentEntity` instance. Pass `null` for no initial data.

#### `WorkerEnvironment($data = null)`

Create a new `WorkerEnvironmentEntity` instance. Pass `null` for no initial data.

#### `WorkerRoute($data = null)`

Create a new `WorkerRouteEntity` instance. Pass `null` for no initial data.

#### `WorkerScript($data = null)`

Create a new `WorkerScriptEntity` instance. Pass `null` for no initial data.

#### `WorkerSubdomain($data = null)`

Create a new `WorkerSubdomainEntity` instance. Pass `null` for no initial data.

#### `WorkerTailLog($data = null)`

Create a new `WorkerTailLogEntity` instance. Pass `null` for no initial data.

#### `WorkersAccountSetting($data = null)`

Create a new `WorkersAccountSettingEntity` instance. Pass `null` for no initial data.

#### `WorkersApiResponseNullResult($data = null)`

Create a new `WorkersApiResponseNullResultEntity` instance. Pass `null` for no initial data.

#### `WorkersCompletedUploadAsset($data = null)`

Create a new `WorkersCompletedUploadAssetEntity` instance. Pass `null` for no initial data.

#### `WorkersCreateAssetsUploadSession($data = null)`

Create a new `WorkersCreateAssetsUploadSessionEntity` instance. Pass `null` for no initial data.

#### `WorkersForPlatform($data = null)`

Create a new `WorkersForPlatformEntity` instance. Pass `null` for no initial data.

#### `WorkersKvApiResponseCommonNoResult($data = null)`

Create a new `WorkersKvApiResponseCommonNoResultEntity` instance. Pass `null` for no initial data.

#### `WorkersKvNamespace($data = null)`

Create a new `WorkersKvNamespaceEntity` instance. Pass `null` for no initial data.

#### `WorkersNamespaceList($data = null)`

Create a new `WorkersNamespaceListEntity` instance. Pass `null` for no initial data.

#### `WorkersNamespaceScriptDeleteBulk($data = null)`

Create a new `WorkersNamespaceScriptDeleteBulkEntity` instance. Pass `null` for no initial data.

#### `WorkersNamespaceScriptResponseSingle($data = null)`

Create a new `WorkersNamespaceScriptResponseSingleEntity` instance. Pass `null` for no initial data.

#### `WorkersNamespaceSingle($data = null)`

Create a new `WorkersNamespaceSingleEntity` instance. Pass `null` for no initial data.

#### `WorkersPipelinesOther($data = null)`

Create a new `WorkersPipelinesOtherEntity` instance. Pass `null` for no initial data.

#### `WorkersScriptAndVersionSetting($data = null)`

Create a new `WorkersScriptAndVersionSettingEntity` instance. Pass `null` for no initial data.

#### `WorkersScriptResponseCollection($data = null)`

Create a new `WorkersScriptResponseCollectionEntity` instance. Pass `null` for no initial data.

#### `WorkersScriptResponseSingle($data = null)`

Create a new `WorkersScriptResponseSingleEntity` instance. Pass `null` for no initial data.

#### `WorkersSmartPlacement($data = null)`

Create a new `WorkersSmartPlacementEntity` instance. Pass `null` for no initial data.

#### `WorkersUsageModel($data = null)`

Create a new `WorkersUsageModelEntity` instance. Pass `null` for no initial data.

#### `WorkersVersionsList($data = null)`

Create a new `WorkersVersionsListEntity` instance. Pass `null` for no initial data.

#### `WorkersVersionsSingle($data = null)`

Create a new `WorkersVersionsSingleEntity` instance. Pass `null` for no initial data.

#### `WorkersVersionsUpload($data = null)`

Create a new `WorkersVersionsUploadEntity` instance. Pass `null` for no initial data.

#### `Workflow($data = null)`

Create a new `WorkflowEntity` instance. Pass `null` for no initial data.

#### `options_map(): array`

Return a deep copy of the current SDK options.

#### `get_utility(): CloudflareWorkersUtility`

Return a copy of the SDK utility object.

#### `direct(array $fetchargs = []): array`

Make a direct HTTP request to any API endpoint. This is the raw-HTTP escape
hatch: it does **not** throw. It returns a result array
`["ok" => bool, "status" => int, "headers" => array, "data" => mixed]`, or
`["ok" => false, "err" => \Exception]` on failure. Branch on `$result["ok"]`.

**Parameters:**

| Name | Type | Description |
| --- | --- | --- |
| `$fetchargs["path"]` | `string` | URL path with optional `{param}` placeholders. |
| `$fetchargs["method"]` | `string` | HTTP method (default: `"GET"`). |
| `$fetchargs["params"]` | `array` | Path parameter values for `{param}` substitution. |
| `$fetchargs["query"]` | `array` | Query string parameters. |
| `$fetchargs["headers"]` | `array` | Request headers (merged with defaults). |
| `$fetchargs["body"]` | `mixed` | Request body (arrays are JSON-serialized). |
| `$fetchargs["ctrl"]` | `array` | Control options. |

**Returns:** `array` — the result dict (see above); never throws.

#### `prepare(array $fetchargs = []): mixed`

Prepare a fetch definition without sending the request. Returns the
`$fetchdef` array. Throws on error.


---

## AccountEntity

```php
$account = $client->Account();
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `id` | `string` | No |  |

### Operations

#### `list(?array $reqmatch = null, ?array $ctrl = null): mixed`

List entities matching the given criteria (call with no argument to list all). Returns an array. Throws on error.

```php
$results = $client->Account()->list();
```

### Common Methods

#### `data_get(): array`

Get the entity data. Returns a copy of the current data.

#### `data_set($data): void`

Set the entity data.

#### `match_get(): array`

Get the entity match criteria.

#### `match_set($match): void`

Set the entity match criteria.

#### `make(): AccountEntity`

Create a new `AccountEntity` instance with the same client and
options.

#### `get_name(): string`

Return the entity name.


---

## ApplicationEntity

```php
$application = $client->Application();
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `configuration` | `array` | No | Application configuration fields you can change without creating a rollout. |
| `constraints` | `array` | No |  |
| `errors` | `array` | Yes |  |
| `id` | `string` | No |  |
| `max_instances` | `int` | No | Maximum number of instances that an autoscaling application can run. |
| `messages` | `array` | Yes |  |
| `observability` | `mixed` | No | Top-level application observability settings. |
| `result` | `mixed` | Yes | The public Containers API returns an application. |
| `result_info` | `array` | Yes | Cursor pagination details for a v4 API list response. |
| `rollout_active_grace_period` | `int` | No | Grace period for active instances to stay alive before becoming eligible for shutdown signal due to a rollout, in seconds. |
| `success` | `bool` | Yes | Whether the API call was successful. |

### Operations

#### `create(array $reqdata, ?array $ctrl = null): mixed`

Create a new entity with the given data. Throws on error.

```php
$result = $client->Application()->create([
  "account_id" => null, // string
  "errors" => null, // array
  "messages" => null, // array
  "result" => null, // mixed
  "result_info" => null, // array
  "success" => null, // bool
]);
```

#### `list(?array $reqmatch = null, ?array $ctrl = null): mixed`

List entities matching the given criteria (call with no argument to list all). Returns an array. Throws on error.

```php
$results = $client->Application()->list();
```

#### `load(array $reqmatch, ?array $ctrl = null): mixed`

Load a single entity matching the given criteria. Throws on error.

```php
$result = $client->Application()->load(["id" => "application_id", "account_id" => "account_id"]);
```

#### `remove(array $reqmatch, ?array $ctrl = null): mixed`

Remove the entity matching the given criteria. Throws on error.

```php
$result = $client->Application()->remove(["id" => "application_id", "account_id" => "account_id"]);
```

#### `update(array $reqdata, ?array $ctrl = null): mixed`

Update an existing entity. The data must include the entity `id`. Throws on error.

```php
$result = $client->Application()->update([
  "id" => "application_id",
  "account_id" => "account_id",
  // Fields to update
]);
```

### Common Methods

#### `data_get(): array`

Get the entity data. Returns a copy of the current data.

#### `data_set($data): void`

Set the entity data.

#### `match_get(): array`

Get the entity match criteria.

#### `match_set($match): void`

Set the entity match criteria.

#### `make(): ApplicationEntity`

Create a new `ApplicationEntity` instance with the same client and
options.

#### `get_name(): string`

Return the entity name.


---

## BrapiEntity

```php
$brapi = $client->Brapi();
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `Browser` | `string` | Yes | Browser name and version. |
| `ProtocolVersion` | `string` | Yes | Chrome DevTools Protocol version. |
| `UserAgent` | `string` | Yes | User agent string. |
| `V8Version` | `string` | Yes | V8 JavaScript engine version. |
| `WebKitVersion` | `string` | Yes | WebKit version. |
| `actionTimeout` | `float` | No | The maximum duration allowed for the browser action to complete after the page has loaded (such as taking screenshots, extracting content, or generating PDFs). |
| `addScriptTag` | `array` | No | Adds a script element into the page with the desired URL or content. |
| `addStyleTag` | `array` | No | Adds a `<link rel="stylesheet">` tag into the page with the desired URL or a `<style type="text/css">` tag with the content. |
| `allowRequestPattern` | `array` | No | Only allow requests that match the provided regex patterns, eg. |
| `allowResourceTypes` | `array` | No | Only allow requests that match the provided resource types, eg. |
| `authenticate` | `array` | Yes | Provide credentials for HTTP authentication. |
| `bestAttempt` | `bool` | No | Attempt to proceed when 'awaited' events fail or timeout. |
| `closeReason` | `float` | No | Reason code for session closure. |
| `closeReasonText` | `string` | No | Human-readable close reason. |
| `commands` | `array` | No | Available commands. |
| `connectionEndTime` | `float` | No | Connection end time. |
| `connectionId` | `string` | No | Connection ID. |
| `connectionStartTime` | `float` | No | Connection start time. |
| `cookies` | `array` | No | Check [options](https://pptr.dev/api/puppeteer.page.setcookie). |
| `custom_ai` | `array` | No | Optional list of custom AI models to use for the request. |
| `dependencies` | `array` | No | Domain dependencies. |
| `description` | `string` | No | Target description. |
| `devtoolsFrontendUrl` | `string` | No | DevTools frontend URL. |
| `domain` | `string` | Yes | Domain name. |
| `elements` | `array` | Yes |  |
| `emulateMediaType` | `string` | No |  |
| `endTime` | `float` | No | Session end time. |
| `errors` | `array` | No |  |
| `events` | `array` | No | Available events. |
| `excludeExternalLinks` | `bool` | No |  |
| `experimental` | `bool` | No | Whether this domain is experimental. |
| `formats` | `array` | No |  |
| `gotoOptions` | `array` | No | Check [options](https://pptr.dev/api/puppeteer.gotooptions). |
| `guardrails` | `array` | No |  |
| `html` | `string` | No | Set the content of the page, eg: `<h1>Hello World!!</h1>`. |
| `id` | `string` | Yes | Target ID. |
| `interestingOnly` | `bool` | No |  |
| `lastUpdated` | `float` | No | Last updated timestamp. |
| `message` | `string` | Yes | Target activated. |
| `meta` | `array` | Yes |  |
| `pdfOptions` | `array` | No | Check [options](https://pptr.dev/api/puppeteer.pdfoptions). |
| `prompt` | `string` | No |  |
| `rejectRequestPattern` | `array` | No | Block undesired requests that match the provided regex patterns, eg. |
| `rejectResourceTypes` | `array` | No | Block undesired requests that match the provided resource types, eg. |
| `response_format` | `array` | Yes |  |
| `result` | `array` | Yes | HTML content. |
| `root` | `string` | No |  |
| `screenshotOptions` | `array` | No | Check [options](https://pptr.dev/api/puppeteer.screenshotoptions). |
| `scrollPage` | `bool` | No |  |
| `selector` | `string` | No |  |
| `sessionId` | `string` | Yes | Session ID. |
| `setExtraHTTPHeaders` | `array` | No |  |
| `setJavaScriptEnabled` | `bool` | No |  |
| `startTime` | `float` | No | Session start time. |
| `success` | `bool` | Yes | Response status. |
| `title` | `string` | No | Title of the target. |
| `type` | `string` | Yes | Target type (page, background_page, worker, etc.). |
| `types` | `array` | No | Type definitions. |
| `url` | `string` | Yes | URL of the target. |
| `userAgent` | `string` | No |  |
| `viewport` | `array` | Yes | Check [options](https://pptr.dev/api/puppeteer.page.setviewport). |
| `visibleLinksOnly` | `bool` | No |  |
| `waitForSelector` | `array` | Yes | Wait for the selector to appear in page. |
| `waitForTimeout` | `float` | No | Waits for a specified timeout before continuing. |
| `webSocketDebuggerUrl` | `string` | No | WebSocket URL for debugging this target. |

### Field Usage by Operation

| Field | load | list | create | update | remove |
| --- | --- | --- | --- | --- | --- |
| `Browser` | - | - | - | - | - |
| `ProtocolVersion` | - | - | - | - | - |
| `UserAgent` | - | - | - | - | - |
| `V8Version` | - | - | - | - | - |
| `WebKitVersion` | - | - | - | - | - |
| `actionTimeout` | - | - | - | - | - |
| `addScriptTag` | - | - | - | - | - |
| `addStyleTag` | - | - | - | - | - |
| `allowRequestPattern` | - | - | - | - | - |
| `allowResourceTypes` | - | - | - | - | - |
| `authenticate` | - | - | - | - | - |
| `bestAttempt` | - | - | - | - | - |
| `closeReason` | - | - | - | - | - |
| `closeReasonText` | - | - | - | - | - |
| `commands` | - | - | - | - | - |
| `connectionEndTime` | - | - | - | - | - |
| `connectionId` | - | - | - | - | - |
| `connectionStartTime` | - | - | - | - | - |
| `cookies` | - | - | - | - | - |
| `custom_ai` | - | - | - | - | - |
| `dependencies` | - | - | - | - | - |
| `description` | - | - | - | - | - |
| `devtoolsFrontendUrl` | - | - | - | - | - |
| `domain` | - | - | - | - | - |
| `elements` | - | - | - | - | - |
| `emulateMediaType` | - | - | - | - | - |
| `endTime` | - | - | - | - | - |
| `errors` | - | - | - | - | - |
| `events` | - | - | - | - | - |
| `excludeExternalLinks` | - | - | - | - | - |
| `experimental` | - | - | - | - | - |
| `formats` | - | - | - | - | - |
| `gotoOptions` | - | - | - | - | - |
| `guardrails` | - | - | - | - | - |
| `html` | - | - | - | - | - |
| `id` | - | - | - | - | - |
| `interestingOnly` | - | - | - | - | - |
| `lastUpdated` | - | - | - | - | - |
| `message` | - | - | - | - | - |
| `meta` | - | - | - | - | - |
| `pdfOptions` | - | - | - | - | - |
| `prompt` | - | - | - | - | - |
| `rejectRequestPattern` | - | - | - | - | - |
| `rejectResourceTypes` | - | - | - | - | - |
| `response_format` | - | - | - | - | - |
| `result` | - | - | Yes | - | - |
| `root` | - | - | - | - | - |
| `screenshotOptions` | - | - | - | - | - |
| `scrollPage` | - | - | - | - | - |
| `selector` | - | - | - | - | - |
| `sessionId` | - | - | - | - | - |
| `setExtraHTTPHeaders` | - | - | - | - | - |
| `setJavaScriptEnabled` | - | - | - | - | - |
| `startTime` | - | - | - | - | - |
| `success` | - | - | - | - | - |
| `title` | - | - | - | - | - |
| `type` | - | - | - | - | - |
| `types` | - | - | - | - | - |
| `url` | - | - | Yes | - | - |
| `userAgent` | - | - | - | - | - |
| `viewport` | - | - | - | - | - |
| `visibleLinksOnly` | - | - | - | - | - |
| `waitForSelector` | - | - | - | - | - |
| `waitForTimeout` | - | - | - | - | - |
| `webSocketDebuggerUrl` | Yes | - | - | - | - |

### Operations

#### `create(array $reqdata, ?array $ctrl = null): mixed`

Create a new entity with the given data. Throws on error.

```php
$result = $client->Brapi()->create([
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

#### `list(?array $reqmatch = null, ?array $ctrl = null): mixed`

List entities matching the given criteria (call with no argument to list all). Returns an array. Throws on error.

```php
$results = $client->Brapi()->list();
```

#### `load(array $reqmatch, ?array $ctrl = null): mixed`

Load a single entity matching the given criteria. Throws on error.

```php
$result = $client->Brapi()->load(["account_id" => "account_id"]);
```

#### `remove(array $reqmatch, ?array $ctrl = null): mixed`

Remove the entity matching the given criteria. Throws on error.

```php
$result = $client->Brapi()->remove(["account_id" => "account_id"]);
```

#### `update(array $reqdata, ?array $ctrl = null): mixed`

Update an existing entity. The data must include the entity `id`. Throws on error.

```php
$result = $client->Brapi()->update([
  "account_id" => "account_id",
  "browser_id" => "browser_id",
  // Fields to update
]);
```

### Common Methods

#### `data_get(): array`

Get the entity data. Returns a copy of the current data.

#### `data_set($data): void`

Set the entity data.

#### `match_get(): array`

Get the entity match criteria.

#### `match_set($match): void`

Set the entity match criteria.

#### `make(): BrapiEntity`

Create a new `BrapiEntity` instance with the same client and
options.

#### `get_name(): string`

Return the entity name.


---

## BuildEntity

```php
$build = $client->Build();
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `errors` | `array` | Yes |  |
| `id` | `string` | No |  |
| `messages` | `array` | Yes |  |
| `result` | `array` | Yes |  |
| `result_info` | `array` | No |  |
| `success` | `bool` | Yes |  |

### Field Usage by Operation

| Field | load | list | update |
| --- | --- | --- | --- |
| `errors` | - | - | - |
| `id` | - | - | - |
| `messages` | - | - | - |
| `result` | Yes | Yes | - |
| `result_info` | - | - | - |
| `success` | - | - | - |

### Operations

#### `list(?array $reqmatch = null, ?array $ctrl = null): mixed`

List entities matching the given criteria (call with no argument to list all). Returns an array. Throws on error.

```php
$results = $client->Build()->list();
```

#### `load(array $reqmatch, ?array $ctrl = null): mixed`

Load a single entity matching the given criteria. Throws on error.

```php
$result = $client->Build()->load(["id" => "build_id", "account_id" => "account_id"]);
```

#### `update(array $reqdata, ?array $ctrl = null): mixed`

Update an existing entity. The data must include the entity `id`. Throws on error.

```php
$result = $client->Build()->update([
  "id" => "build_id",
  "account_id" => "account_id",
  // Fields to update
]);
```

### Common Methods

#### `data_get(): array`

Get the entity data. Returns a copy of the current data.

#### `data_set($data): void`

Set the entity data.

#### `match_get(): array`

Get the entity match criteria.

#### `match_set($match): void`

Set the entity match criteria.

#### `make(): BuildEntity`

Create a new `BuildEntity` instance with the same client and
options.

#### `get_name(): string`

Return the entity name.


---

## BuildTokenEntity

```php
$build_token = $client->BuildToken();
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `build_token_name` | `string` | Yes |  |
| `build_token_secret` | `string` | Yes |  |
| `cloudflare_token_id` | `string` | Yes |  |
| `errors` | `array` | Yes |  |
| `messages` | `array` | Yes |  |
| `result` | `array` | Yes |  |
| `result_info` | `array` | No |  |
| `success` | `bool` | Yes |  |

### Field Usage by Operation

| Field | list | create |
| --- | --- | --- |
| `build_token_name` | - | - |
| `build_token_secret` | - | - |
| `cloudflare_token_id` | - | - |
| `errors` | - | - |
| `messages` | - | - |
| `result` | Yes | - |
| `result_info` | - | - |
| `success` | - | - |

### Operations

#### `create(array $reqdata, ?array $ctrl = null): mixed`

Create a new entity with the given data. Throws on error.

```php
$result = $client->BuildToken()->create([
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

#### `list(?array $reqmatch = null, ?array $ctrl = null): mixed`

List entities matching the given criteria (call with no argument to list all). Returns an array. Throws on error.

```php
$results = $client->BuildToken()->list();
```

### Common Methods

#### `data_get(): array`

Get the entity data. Returns a copy of the current data.

#### `data_set($data): void`

Set the entity data.

#### `match_get(): array`

Get the entity match criteria.

#### `match_set($match): void`

Set the entity match criteria.

#### `make(): BuildTokenEntity`

Create a new `BuildTokenEntity` instance with the same client and
options.

#### `get_name(): string`

Return the entity name.


---

## BuildsApiEntity

```php
$builds_api = $client->BuildsApi();
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `errors` | `array` | Yes |  |
| `messages` | `array` | Yes |  |
| `result` | `array` | Yes |  |
| `result_info` | `array` | No |  |
| `success` | `bool` | Yes |  |

### Operations

#### `create(array $reqdata, ?array $ctrl = null): mixed`

Create a new entity with the given data. Throws on error.

```php
$result = $client->BuildsApi()->create([
  "account_id" => null, // string
  "trigger_id" => null, // string
  "errors" => null, // array
  "messages" => null, // array
  "result" => null, // array
  "success" => null, // bool
]);
```

#### `remove(array $reqmatch, ?array $ctrl = null): mixed`

Remove the entity matching the given criteria. Throws on error.

```php
$result = $client->BuildsApi()->remove(["account_id" => "account_id", "environment_variable_key" => "environment_variable_key", "trigger_id" => "trigger_id"]);
```

### Common Methods

#### `data_get(): array`

Get the entity data. Returns a copy of the current data.

#### `data_set($data): void`

Set the entity data.

#### `match_get(): array`

Get the entity match criteria.

#### `match_set($match): void`

Set the entity match criteria.

#### `make(): BuildsApiEntity`

Create a new `BuildsApiEntity` instance with the same client and
options.

#### `get_name(): string`

Return the entity name.


---

## ConnectionEntity

```php
$connection = $client->Connection();
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `id` | `string` | No |  |

### Operations

#### `remove(array $reqmatch, ?array $ctrl = null): mixed`

Remove the entity matching the given criteria. Throws on error.

```php
$result = $client->Connection()->remove(["account_id" => "account_id", "id" => "id"]);
```

### Common Methods

#### `data_get(): array`

Get the entity data. Returns a copy of the current data.

#### `data_set($data): void`

Set the entity data.

#### `match_get(): array`

Get the entity match criteria.

#### `match_set($match): void`

Set the entity match criteria.

#### `make(): ConnectionEntity`

Create a new `ConnectionEntity` instance with the same client and
options.

#### `get_name(): string`

Return the entity name.


---

## ContainerImageEntity

```php
$container_image = $client->ContainerImage();
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `image` | `string` | Yes | Image url. |

### Operations

#### `create(array $reqdata, ?array $ctrl = null): mixed`

Create a new entity with the given data. Throws on error.

```php
$result = $client->ContainerImage()->create([
  "account_id" => null, // string
  "image" => null, // string
]);
```

### Common Methods

#### `data_get(): array`

Get the entity data. Returns a copy of the current data.

#### `data_set($data): void`

Set the entity data.

#### `match_get(): array`

Get the entity match criteria.

#### `match_set($match): void`

Set the entity match criteria.

#### `make(): ContainerImageEntity`

Create a new `ContainerImageEntity` instance with the same client and
options.

#### `get_name(): string`

Return the entity name.


---

## ContainerInstanceEntity

```php
$container_instance = $client->ContainerInstance();
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `errors` | `array` | Yes |  |
| `id` | `string` | No |  |
| `messages` | `array` | Yes |  |
| `result` | `mixed` | Yes | A container instance belonging to an application. |
| `result_info` | `array` | Yes | Cursor pagination details for a v4 API list response. |
| `success` | `bool` | Yes | Whether the API call was successful. |

### Operations

#### `list(?array $reqmatch = null, ?array $ctrl = null): mixed`

List entities matching the given criteria (call with no argument to list all). Returns an array. Throws on error.

```php
$results = $client->ContainerInstance()->list();
```

#### `load(array $reqmatch, ?array $ctrl = null): mixed`

Load a single entity matching the given criteria. Throws on error.

```php
$result = $client->ContainerInstance()->load(["id" => "container_instance_id", "account_id" => "account_id", "application_id" => "application_id"]);
```

### Common Methods

#### `data_get(): array`

Get the entity data. Returns a copy of the current data.

#### `data_set($data): void`

Set the entity data.

#### `match_get(): array`

Get the entity match criteria.

#### `match_set($match): void`

Set the entity match criteria.

#### `make(): ContainerInstanceEntity`

Create a new `ContainerInstanceEntity` instance with the same client and
options.

#### `get_name(): string`

Return the entity name.


---

## DeployHookEntity

```php
$deploy_hook = $client->DeployHook();
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `branch` | `string` | Yes | Git branch name. |
| `deploy_hook_name` | `string` | Yes | Deploy hook name (1-58 characters). |
| `errors` | `array` | Yes |  |
| `id` | `string` | No |  |
| `messages` | `array` | Yes |  |
| `result` | `array` | Yes |  |
| `result_info` | `array` | No |  |
| `success` | `bool` | Yes |  |

### Field Usage by Operation

| Field | load | list | create | update | remove |
| --- | --- | --- | --- | --- | --- |
| `branch` | - | - | - | - | - |
| `deploy_hook_name` | - | - | - | - | - |
| `errors` | - | - | - | - | - |
| `id` | - | - | - | - | - |
| `messages` | - | - | - | - | - |
| `result` | Yes | Yes | Yes | - | - |
| `result_info` | - | - | - | - | - |
| `success` | - | - | - | - | - |

### Operations

#### `create(array $reqdata, ?array $ctrl = null): mixed`

Create a new entity with the given data. Throws on error.

```php
$result = $client->DeployHook()->create([
  "id" => null, // string
  "branch" => null, // string
  "deploy_hook_name" => null, // string
  "errors" => null, // array
  "messages" => null, // array
  "result" => null, // array
  "success" => null, // bool
]);
```

#### `list(?array $reqmatch = null, ?array $ctrl = null): mixed`

List entities matching the given criteria (call with no argument to list all). Returns an array. Throws on error.

```php
$results = $client->DeployHook()->list();
```

#### `load(array $reqmatch, ?array $ctrl = null): mixed`

Load a single entity matching the given criteria. Throws on error.

```php
$result = $client->DeployHook()->load(["id" => "deploy_hook_id", "account_id" => "account_id", "worker_id" => "worker_id"]);
```

#### `remove(array $reqmatch, ?array $ctrl = null): mixed`

Remove the entity matching the given criteria. Throws on error.

```php
$result = $client->DeployHook()->remove(["id" => "deploy_hook_id", "account_id" => "account_id", "worker_id" => "worker_id"]);
```

#### `update(array $reqdata, ?array $ctrl = null): mixed`

Update an existing entity. The data must include the entity `id`. Throws on error.

```php
$result = $client->DeployHook()->update([
  "id" => "deploy_hook_id",
  "account_id" => "account_id",
  "worker_id" => "worker_id",
  // Fields to update
]);
```

### Common Methods

#### `data_get(): array`

Get the entity data. Returns a copy of the current data.

#### `data_set($data): void`

Set the entity data.

#### `match_get(): array`

Get the entity match criteria.

#### `match_set($match): void`

Set the entity match criteria.

#### `make(): DeployHookEntity`

Create a new `DeployHookEntity` instance with the same client and
options.

#### `get_name(): string`

Return the entity name.


---

## DeploymentEntity

```php
$deployment = $client->Deployment();
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `id` | `string` | No |  |

### Operations

#### `remove(array $reqmatch, ?array $ctrl = null): mixed`

Remove the entity matching the given criteria. Throws on error.

```php
$result = $client->Deployment()->remove(["account_id" => "account_id", "id" => "id"]);
```

### Common Methods

#### `data_get(): array`

Get the entity data. Returns a copy of the current data.

#### `data_set($data): void`

Set the entity data.

#### `match_get(): array`

Get the entity match criteria.

#### `match_set($match): void`

Set the entity match criteria.

#### `make(): DeploymentEntity`

Create a new `DeploymentEntity` instance with the same client and
options.

#### `get_name(): string`

Return the entity name.


---

## DestinationEntity

```php
$destination = $client->Destination();
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `configuration` | `array` | Yes |  |
| `enabled` | `bool` | Yes |  |
| `errors` | `array` | Yes |  |
| `id` | `string` | No |  |
| `messages` | `array` | Yes |  |
| `name` | `string` | Yes |  |
| `result` | `array` | Yes |  |
| `skipPreflightCheck` | `bool` | No |  |
| `success` | `bool` | Yes |  |

### Operations

#### `create(array $reqdata, ?array $ctrl = null): mixed`

Create a new entity with the given data. Throws on error.

```php
$result = $client->Destination()->create([
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

#### `list(?array $reqmatch = null, ?array $ctrl = null): mixed`

List entities matching the given criteria (call with no argument to list all). Returns an array. Throws on error.

```php
$results = $client->Destination()->list();
```

#### `remove(array $reqmatch, ?array $ctrl = null): mixed`

Remove the entity matching the given criteria. Throws on error.

```php
$result = $client->Destination()->remove(["account_id" => "account_id", "id" => "id"]);
```

#### `update(array $reqdata, ?array $ctrl = null): mixed`

Update an existing entity. The data must include the entity `id`. Throws on error.

```php
$result = $client->Destination()->update([
  "account_id" => "account_id",
  "id" => "id",
  // Fields to update
]);
```

### Common Methods

#### `data_get(): array`

Get the entity data. Returns a copy of the current data.

#### `data_set($data): void`

Set the entity data.

#### `match_get(): array`

Get the entity match criteria.

#### `match_set($match): void`

Set the entity match criteria.

#### `make(): DestinationEntity`

Create a new `DestinationEntity` instance with the same client and
options.

#### `get_name(): string`

Return the entity name.


---

## DomainEntity

```php
$domain = $client->Domain();
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `errors` | `array` | Yes |  |
| `id` | `string` | No |  |
| `messages` | `array` | Yes |  |
| `result` | `array` | Yes |  |
| `success` | `bool` | Yes | Whether the API call was successful. |

### Operations

#### `list(?array $reqmatch = null, ?array $ctrl = null): mixed`

List entities matching the given criteria (call with no argument to list all). Returns an array. Throws on error.

```php
$results = $client->Domain()->list();
```

#### `load(array $reqmatch, ?array $ctrl = null): mixed`

Load a single entity matching the given criteria. Throws on error.

```php
$result = $client->Domain()->load(["id" => "domain_id", "account_id" => "account_id"]);
```

#### `remove(array $reqmatch, ?array $ctrl = null): mixed`

Remove the entity matching the given criteria. Throws on error.

```php
$result = $client->Domain()->remove(["id" => "domain_id", "account_id" => "account_id"]);
```

#### `update(array $reqdata, ?array $ctrl = null): mixed`

Update an existing entity. The data must include the entity `id`. Throws on error.

```php
$result = $client->Domain()->update([
  "id" => "domain_id",
  "account_id" => "account_id",
  // Fields to update
]);
```

### Common Methods

#### `data_get(): array`

Get the entity data. Returns a copy of the current data.

#### `data_set($data): void`

Set the entity data.

#### `match_get(): array`

Get the entity match criteria.

#### `match_set($match): void`

Set the entity match criteria.

#### `make(): DomainEntity`

Create a new `DomainEntity` instance with the same client and
options.

#### `get_name(): string`

Return the entity name.


---

## DurableObjectsNamespaceEntity

```php
$durable_objects_namespace = $client->DurableObjectsNamespace();
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `result` | `array` | No |  |
| `result_info` | `array` | No |  |

### Operations

#### `create(array $reqdata, ?array $ctrl = null): mixed`

Create a new entity with the given data. Throws on error.

```php
$result = $client->DurableObjectsNamespace()->create([
  "account_id" => null, // string
  "namespace_id" => null, // string
]);
```

#### `list(?array $reqmatch = null, ?array $ctrl = null): mixed`

List entities matching the given criteria (call with no argument to list all). Returns an array. Throws on error.

```php
$results = $client->DurableObjectsNamespace()->list();
```

### Common Methods

#### `data_get(): array`

Get the entity data. Returns a copy of the current data.

#### `data_set($data): void`

Set the entity data.

#### `match_get(): array`

Get the entity match criteria.

#### `match_set($match): void`

Set the entity match criteria.

#### `make(): DurableObjectsNamespaceEntity`

Create a new `DurableObjectsNamespaceEntity` instance with the same client and
options.

#### `get_name(): string`

Return the entity name.


---

## EnvironmentVariableEntity

```php
$environment_variable = $client->EnvironmentVariable();
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `errors` | `array` | Yes |  |
| `messages` | `array` | Yes |  |
| `result` | `array` | Yes |  |
| `result_info` | `array` | No |  |
| `success` | `bool` | Yes |  |

### Field Usage by Operation

| Field | list | update |
| --- | --- | --- |
| `errors` | - | - |
| `messages` | - | - |
| `result` | Yes | - |
| `result_info` | - | - |
| `success` | - | - |

### Operations

#### `list(?array $reqmatch = null, ?array $ctrl = null): mixed`

List entities matching the given criteria (call with no argument to list all). Returns an array. Throws on error.

```php
$results = $client->EnvironmentVariable()->list();
```

#### `update(array $reqdata, ?array $ctrl = null): mixed`

Update an existing entity. The data must include the entity `id`. Throws on error.

```php
$result = $client->EnvironmentVariable()->update([
  "account_id" => "account_id",
  "trigger_id" => "trigger_id",
  // Fields to update
]);
```

### Common Methods

#### `data_get(): array`

Get the entity data. Returns a copy of the current data.

#### `data_set($data): void`

Set the entity data.

#### `match_get(): array`

Get the entity match criteria.

#### `match_set($match): void`

Set the entity match criteria.

#### `make(): EnvironmentVariableEntity`

Create a new `EnvironmentVariableEntity` instance with the same client and
options.

#### `get_name(): string`

Return the entity name.


---

## GitHubIntegrationEntity

```php
$git_hub_integration = $client->GitHubIntegration();
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `errors` | `array` | Yes |  |
| `messages` | `array` | Yes |  |
| `result` | `array` | Yes |  |
| `result_info` | `array` | No |  |
| `success` | `bool` | Yes |  |

### Field Usage by Operation

| Field | list |
| --- | --- |
| `errors` | - |
| `messages` | - |
| `result` | Yes |
| `result_info` | - |
| `success` | - |

### Operations

#### `list(?array $reqmatch = null, ?array $ctrl = null): mixed`

List entities matching the given criteria (call with no argument to list all). Returns an array. Throws on error.

```php
$results = $client->GitHubIntegration()->list();
```

### Common Methods

#### `data_get(): array`

Get the entity data. Returns a copy of the current data.

#### `data_set($data): void`

Set the entity data.

#### `match_get(): array`

Get the entity match criteria.

#### `match_set($match): void`

Set the entity match criteria.

#### `make(): GitHubIntegrationEntity`

Create a new `GitHubIntegrationEntity` instance with the same client and
options.

#### `get_name(): string`

Return the entity name.


---

## HyperdriveEntity

```php
$hyperdrive = $client->Hyperdrive();
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `caching` | `array` | No |  |
| `created_on` | `string` | No | Defines the creation time of the Hyperdrive configuration. |
| `id` | `string` | Yes | Define configurations using a unique string identifier. |
| `modified_on` | `string` | No | Defines the last modified time of the Hyperdrive configuration. |
| `mtls` | `array` | No | mTLS configuration for the origin connection. |
| `name` | `string` | Yes | The name of the Hyperdrive configuration. |
| `origin` | `array` | Yes | Combines database connection fields with exactly one supported network location. |
| `origin_connection_limit` | `int` | No | The (soft) maximum number of connections the Hyperdrive is allowed to make to the origin database. |
| `restarted_on` | `string` | No | Defines the last time the Hyperdrive connection pool was explicitly restarted via the restart endpoint. |
| `result` | `array` | Yes |  |

### Field Usage by Operation

| Field | load | list | create | update | remove |
| --- | --- | --- | --- | --- | --- |
| `caching` | - | - | - | - | - |
| `created_on` | - | - | - | - | - |
| `id` | - | - | - | - | - |
| `modified_on` | - | - | - | - | - |
| `mtls` | - | - | - | - | - |
| `name` | - | - | - | - | - |
| `origin` | - | - | - | - | - |
| `origin_connection_limit` | - | - | - | - | - |
| `restarted_on` | - | - | - | - | - |
| `result` | - | - | - | - | - |

### Operations

#### `create(array $reqdata, ?array $ctrl = null): mixed`

Create a new entity with the given data. Throws on error.

```php
$result = $client->Hyperdrive()->create([
  "account_id" => null, // string
  "integration" => null, // string
  "id" => null, // string
  "name" => null, // string
  "origin" => null, // array
  "result" => null, // array
]);
```

#### `list(?array $reqmatch = null, ?array $ctrl = null): mixed`

List entities matching the given criteria (call with no argument to list all). Returns an array. Throws on error.

```php
$results = $client->Hyperdrive()->list();
```

#### `load(array $reqmatch, ?array $ctrl = null): mixed`

Load a single entity matching the given criteria. Throws on error.

```php
$result = $client->Hyperdrive()->load(["account_id" => "account_id", "hyperdrive_id" => "hyperdrive_id"]);
```

#### `remove(array $reqmatch, ?array $ctrl = null): mixed`

Remove the entity matching the given criteria. Throws on error.

```php
$result = $client->Hyperdrive()->remove(["account_id" => "account_id", "hyperdrive_id" => "hyperdrive_id"]);
```

#### `update(array $reqdata, ?array $ctrl = null): mixed`

Update an existing entity. The data must include the entity `id`. Throws on error.

```php
$result = $client->Hyperdrive()->update([
  "account_id" => "account_id",
  "hyperdrive_id" => "hyperdrive_id",
  // Fields to update
]);
```

### Common Methods

#### `data_get(): array`

Get the entity data. Returns a copy of the current data.

#### `data_set($data): void`

Set the entity data.

#### `match_get(): array`

Get the entity match criteria.

#### `match_set($match): void`

Set the entity match criteria.

#### `make(): HyperdriveEntity`

Create a new `HyperdriveEntity` instance with the same client and
options.

#### `get_name(): string`

Return the entity name.


---

## ImageRegistryEntity

```php
$image_registry = $client->ImageRegistry();
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `auth` | `array` | Yes | Credentials for authenticating to a private external image registry. |
| `domain` | `string` | Yes | Hostname of the private registry, without a scheme or image path. |
| `errors` | `array` | Yes |  |
| `expiration_minutes` | `int` | No | The number of minutes Cloudflare managed registry credentials stay valid. |
| `id` | `string` | No |  |
| `is_public` | `bool` | No | Omit this field or set it to `false`. |
| `kind` | `mixed` | Yes | Registry provider. |
| `messages` | `array` | Yes |  |
| `permissions` | `array` | No | The permissions for Cloudflare managed registry credentials. |
| `result` | `array` | Yes |  |
| `success` | `bool` | Yes | Whether the API call was successful. |

### Operations

#### `create(array $reqdata, ?array $ctrl = null): mixed`

Create a new entity with the given data. Throws on error.

```php
$result = $client->ImageRegistry()->create([
  "account_id" => null, // string
  "auth" => null, // array
  "errors" => null, // array
  "kind" => null, // mixed
  "messages" => null, // array
  "result" => null, // array
  "success" => null, // bool
]);
```

#### `list(?array $reqmatch = null, ?array $ctrl = null): mixed`

List entities matching the given criteria (call with no argument to list all). Returns an array. Throws on error.

```php
$results = $client->ImageRegistry()->list();
```

#### `remove(array $reqmatch, ?array $ctrl = null): mixed`

Remove the entity matching the given criteria. Throws on error.

```php
$result = $client->ImageRegistry()->remove(["account_id" => "account_id", "id" => "id"]);
```

### Common Methods

#### `data_get(): array`

Get the entity data. Returns a copy of the current data.

#### `data_set($data): void`

Set the entity data.

#### `match_get(): array`

Get the entity match criteria.

#### `match_set($match): void`

Set the entity match criteria.

#### `make(): ImageRegistryEntity`

Create a new `ImageRegistryEntity` instance with the same client and
options.

#### `get_name(): string`

Return the entity name.


---

## IssueEntity

```php
$issue = $client->Issue();
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `afterInactivitySeconds` | `int` | No |  |
| `afterOccurrences` | `int` | No |  |
| `enabled` | `bool` | No |  |
| `errors` | `array` | Yes |  |
| `id` | `string` | No |  |
| `issueIds` | `array` | Yes |  |
| `messages` | `array` | Yes |  |
| `name` | `string` | No |  |
| `policyId` | `string` | Yes |  |
| `result` | `array` | Yes |  |
| `result_info` | `array` | Yes |  |
| `service` | `string` | No |  |
| `status` | `string` | No |  |
| `success` | `bool` | Yes |  |
| `title` | `string` | No |  |

### Operations

#### `create(array $reqdata, ?array $ctrl = null): mixed`

Create a new entity with the given data. Throws on error.

```php
$result = $client->Issue()->create([
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

#### `list(?array $reqmatch = null, ?array $ctrl = null): mixed`

List entities matching the given criteria (call with no argument to list all). Returns an array. Throws on error.

```php
$results = $client->Issue()->list();
```

#### `load(array $reqmatch, ?array $ctrl = null): mixed`

Load a single entity matching the given criteria. Throws on error.

```php
$result = $client->Issue()->load(["id" => "issue_id", "account_id" => "account_id"]);
```

#### `remove(array $reqmatch, ?array $ctrl = null): mixed`

Remove the entity matching the given criteria. Throws on error.

```php
$result = $client->Issue()->remove(["account_id" => "account_id"]);
```

#### `update(array $reqdata, ?array $ctrl = null): mixed`

Update an existing entity. The data must include the entity `id`. Throws on error.

```php
$result = $client->Issue()->update([
  "id" => "issue_id",
  "account_id" => "account_id",
  "automation_id" => "automation_id",
  // Fields to update
]);
```

### Common Methods

#### `data_get(): array`

Get the entity data. Returns a copy of the current data.

#### `data_set($data): void`

Set the entity data.

#### `match_get(): array`

Get the entity match criteria.

#### `match_set($match): void`

Set the entity match criteria.

#### `make(): IssueEntity`

Create a new `IssueEntity` instance with the same client and
options.

#### `get_name(): string`

Return the entity name.


---

## KeyEntity

```php
$key = $client->Key();
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `datasets` | `array` | No | Leave this empty to use the default datasets |
| `errors` | `array` | Yes |  |
| `filters` | `array` | No | Apply filters to narrow key discovery. |
| `from` | `float` | No |  |
| `keyNeedle` | `array` | Yes | If the user suggests a key, use this to narrow down the list of keys returned. |
| `limit` | `float` | No | Advanced usage: set limit=1000+ to retrieve comprehensive key options without needing additional filtering. |
| `messages` | `array` | Yes |  |
| `needle` | `array` | Yes | Search for a specific substring in any of the events |
| `result` | `array` | Yes |  |
| `success` | `bool` | Yes |  |
| `to` | `float` | No |  |

### Operations

#### `create(array $reqdata, ?array $ctrl = null): mixed`

Create a new entity with the given data. Throws on error.

```php
$result = $client->Key()->create([
  "account_id" => null, // string
  "errors" => null, // array
  "keyNeedle" => null, // array
  "messages" => null, // array
  "needle" => null, // array
  "result" => null, // array
  "success" => null, // bool
]);
```

### Common Methods

#### `data_get(): array`

Get the entity data. Returns a copy of the current data.

#### `data_set($data): void`

Set the entity data.

#### `match_get(): array`

Get the entity match criteria.

#### `match_set($match): void`

Set the entity match criteria.

#### `make(): KeyEntity`

Create a new `KeyEntity` instance with the same client and
options.

#### `get_name(): string`

Return the entity name.


---

## LiveTailEntity

```php
$live_tail = $client->LiveTail();
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `errors` | `array` | Yes |  |
| `filterCombination` | `string` | No | Set a flag to describe how to combine the filters on the query. |
| `filters` | `array` | No | Apply filters to the query. |
| `messages` | `array` | Yes |  |
| `result` | `array` | Yes |  |
| `scriptId` | `string` | No |  |
| `success` | `bool` | Yes |  |

### Operations

#### `create(array $reqdata, ?array $ctrl = null): mixed`

Create a new entity with the given data. Throws on error.

```php
$result = $client->LiveTail()->create([
  "account_id" => null, // string
  "errors" => null, // array
  "messages" => null, // array
  "result" => null, // array
  "success" => null, // bool
]);
```

### Common Methods

#### `data_get(): array`

Get the entity data. Returns a copy of the current data.

#### `data_set($data): void`

Set the entity data.

#### `match_get(): array`

Get the entity match criteria.

#### `match_set($match): void`

Set the entity match criteria.

#### `make(): LiveTailEntity`

Create a new `LiveTailEntity` instance with the same client and
options.

#### `get_name(): string`

Return the entity name.


---

## MetricsExportEntity

```php
$metrics_export = $client->MetricsExport();
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `errors` | `array` | Yes |  |
| `messages` | `array` | Yes |  |
| `requester` | `array` | Yes |  |
| `resources` | `array` | Yes |  |
| `result` | `array` | Yes |  |
| `success` | `bool` | Yes |  |

### Operations

#### `create(array $reqdata, ?array $ctrl = null): mixed`

Create a new entity with the given data. Throws on error.

```php
$result = $client->MetricsExport()->create([
  "account_id" => null, // string
  "errors" => null, // array
  "messages" => null, // array
  "requester" => null, // array
  "resources" => null, // array
  "result" => null, // array
  "success" => null, // bool
]);
```

#### `list(?array $reqmatch = null, ?array $ctrl = null): mixed`

List entities matching the given criteria (call with no argument to list all). Returns an array. Throws on error.

```php
$results = $client->MetricsExport()->list();
```

### Common Methods

#### `data_get(): array`

Get the entity data. Returns a copy of the current data.

#### `data_set($data): void`

Set the entity data.

#### `match_get(): array`

Get the entity match criteria.

#### `match_set($match): void`

Set the entity match criteria.

#### `make(): MetricsExportEntity`

Create a new `MetricsExportEntity` instance with the same client and
options.

#### `get_name(): string`

Return the entity name.


---

## NamespaceEntity

```php
$namespace = $client->Namespace();
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `id` | `string` | No |  |

### Operations

#### `remove(array $reqmatch, ?array $ctrl = null): mixed`

Remove the entity matching the given criteria. Throws on error.

```php
$result = $client->Namespace()->remove(["account_id" => "account_id", "id" => "id"]);
```

### Common Methods

#### `data_get(): array`

Get the entity data. Returns a copy of the current data.

#### `data_set($data): void`

Set the entity data.

#### `match_get(): array`

Get the entity match criteria.

#### `match_set($match): void`

Set the entity match criteria.

#### `make(): NamespaceEntity`

Create a new `NamespaceEntity` instance with the same client and
options.

#### `get_name(): string`

Return the entity name.


---

## PreviewEntity

```php
$preview = $client->Preview();
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `errors` | `array` | Yes |  |
| `id` | `string` | No |  |
| `messages` | `array` | Yes |  |
| `result` | `array` | Yes |  |
| `success` | `bool` | Yes | Whether the API call was successful. |

### Operations

#### `create(array $reqdata, ?array $ctrl = null): mixed`

Create a new entity with the given data. Throws on error.

```php
$result = $client->Preview()->create([
  "account_id" => null, // string
  "worker_id" => null, // string
  "errors" => null, // array
  "messages" => null, // array
  "result" => null, // array
  "success" => null, // bool
]);
```

#### `list(?array $reqmatch = null, ?array $ctrl = null): mixed`

List entities matching the given criteria (call with no argument to list all). Returns an array. Throws on error.

```php
$results = $client->Preview()->list();
```

#### `load(array $reqmatch, ?array $ctrl = null): mixed`

Load a single entity matching the given criteria. Throws on error.

```php
$result = $client->Preview()->load(["id" => "preview_id", "account_id" => "account_id", "worker_id" => "worker_id"]);
```

#### `remove(array $reqmatch, ?array $ctrl = null): mixed`

Remove the entity matching the given criteria. Throws on error.

```php
$result = $client->Preview()->remove(["id" => "preview_id", "account_id" => "account_id", "worker_id" => "worker_id"]);
```

#### `update(array $reqdata, ?array $ctrl = null): mixed`

Update an existing entity. The data must include the entity `id`. Throws on error.

```php
$result = $client->Preview()->update([
  "id" => "preview_id",
  "account_id" => "account_id",
  "worker_id" => "worker_id",
  // Fields to update
]);
```

### Common Methods

#### `data_get(): array`

Get the entity data. Returns a copy of the current data.

#### `data_set($data): void`

Set the entity data.

#### `match_get(): array`

Get the entity match criteria.

#### `match_set($match): void`

Set the entity match criteria.

#### `make(): PreviewEntity`

Create a new `PreviewEntity` instance with the same client and
options.

#### `get_name(): string`

Return the entity name.


---

## PreviewDeploymentEntity

```php
$preview_deployment = $client->PreviewDeployment();
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `errors` | `array` | Yes |  |
| `id` | `string` | No |  |
| `messages` | `array` | Yes |  |
| `result` | `mixed` | Yes |  |
| `success` | `bool` | Yes | Whether the API call was successful. |

### Operations

#### `create(array $reqdata, ?array $ctrl = null): mixed`

Create a new entity with the given data. Throws on error.

```php
$result = $client->PreviewDeployment()->create([
  "account_id" => null, // string
  "id" => null, // string
  "worker_id" => null, // string
  "errors" => null, // array
  "messages" => null, // array
  "result" => null, // mixed
  "success" => null, // bool
]);
```

#### `list(?array $reqmatch = null, ?array $ctrl = null): mixed`

List entities matching the given criteria (call with no argument to list all). Returns an array. Throws on error.

```php
$results = $client->PreviewDeployment()->list();
```

#### `load(array $reqmatch, ?array $ctrl = null): mixed`

Load a single entity matching the given criteria. Throws on error.

```php
$result = $client->PreviewDeployment()->load(["id" => "preview_deployment_id", "account_id" => "account_id", "preview_id" => "preview_id", "worker_id" => "worker_id"]);
```

#### `update(array $reqdata, ?array $ctrl = null): mixed`

Update an existing entity. The data must include the entity `id`. Throws on error.

```php
$result = $client->PreviewDeployment()->update([
  "id" => "preview_deployment_id",
  "account_id" => "account_id",
  "preview_id" => "preview_id",
  "worker_id" => "worker_id",
  // Fields to update
]);
```

### Common Methods

#### `data_get(): array`

Get the entity data. Returns a copy of the current data.

#### `data_set($data): void`

Set the entity data.

#### `match_get(): array`

Get the entity match criteria.

#### `match_set($match): void`

Set the entity match criteria.

#### `make(): PreviewDeploymentEntity`

Create a new `PreviewDeploymentEntity` instance with the same client and
options.

#### `get_name(): string`

Return the entity name.


---

## QueryEntity

```php
$query = $client->Query();
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `chart` | `bool` | No | When true, includes time-series data in the response. |
| `chartType` | `string` | No | Controls the SQL shape and response payload for the 'calculations' view. |
| `compare` | `bool` | No | When true, includes a comparison dataset from the previous time period of equal length. |
| `distributionScale` | `string` | No | Value-axis bucketing for chartType 'distribution'. |
| `dry` | `bool` | No | When true, executes the query without persisting the results. |
| `errors` | `array` | Yes |  |
| `granularity` | `float` | No | Number of time-series buckets. |
| `ignoreSeries` | `bool` | No | When true, omits time-series data from the response and returns only aggregated values. |
| `limit` | `float` | No | Maximum number of events to return when view is 'events'. |
| `messages` | `array` | Yes |  |
| `offset` | `string` | No | Cursor for pagination in event, trace, invocation, and agent views. |
| `offsetBy` | `float` | No | Numeric offset for paginating grouped/pattern results (top-N lists). |
| `offsetDirection` | `string` | No | Pagination direction: 'next' for forward, 'prev' for backward. |
| `parameters` | `array` | No | Query parameters defining what data to retrieve — filters, calculations, group-bys, and ordering. |
| `queryId` | `string` | Yes | Identifier for the query. |
| `result` | `array` | Yes | Complete results of a query run. |
| `success` | `bool` | Yes |  |
| `timeframe` | `array` | Yes | Timeframe for the query using Unix timestamps in milliseconds. |
| `view` | `string` | No | Controls the shape of the response. |

### Operations

#### `create(array $reqdata, ?array $ctrl = null): mixed`

Create a new entity with the given data. Throws on error.

```php
$result = $client->Query()->create([
  "account_id" => null, // string
  "errors" => null, // array
  "messages" => null, // array
  "queryId" => null, // string
  "result" => null, // array
  "success" => null, // bool
  "timeframe" => null, // array
]);
```

### Common Methods

#### `data_get(): array`

Get the entity data. Returns a copy of the current data.

#### `data_set($data): void`

Set the entity data.

#### `match_get(): array`

Get the entity match criteria.

#### `match_set($match): void`

Set the entity match criteria.

#### `make(): QueryEntity`

Create a new `QueryEntity` instance with the same client and
options.

#### `get_name(): string`

Return the entity name.


---

## RepositoryConnectionEntity

```php
$repository_connection = $client->RepositoryConnection();
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `provider_account_id` | `string` | Yes | Provider-specific identifier of the account or namespace that owns the repository. |
| `provider_account_name` | `string` | Yes | Human-readable name of the account or namespace that owns the repository. |
| `provider_type` | `string` | Yes | Source control provider. |
| `repo_id` | `string` | Yes | Provider-specific repository identifier. |
| `repo_name` | `string` | Yes | Human-readable repository name. |

### Operations

#### `update(array $reqdata, ?array $ctrl = null): mixed`

Update an existing entity. The data must include the entity `id`. Throws on error.

```php
$result = $client->RepositoryConnection()->update([
  "account_id" => "account_id",
  // Fields to update
]);
```

### Common Methods

#### `data_get(): array`

Get the entity data. Returns a copy of the current data.

#### `data_set($data): void`

Set the entity data.

#### `match_get(): array`

Get the entity match criteria.

#### `match_set($match): void`

Set the entity match criteria.

#### `make(): RepositoryConnectionEntity`

Create a new `RepositoryConnectionEntity` instance with the same client and
options.

#### `get_name(): string`

Return the entity name.


---

## RolloutEntity

```php
$rollout = $client->Rollout();
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `description` | `string` | Yes | Description of the rollout process. |
| `kind` | `string` | No | Kind of the rollout process. |
| `percentage` | `int` | No | Initial target version percentage (0-100). |
| `step_percentage` | `int` | No | Percentage of rollout to increase in each step when "steps" is absent. |
| `steps` | `array` | No | Steps defining the rollout process, used when "step_percentage" is absent. |
| `strategy` | `string` | Yes | Strategy used for the rollout. |
| `target_configuration` | `array` | Yes | User-specified container configuration changes. |

### Operations

#### `create(array $reqdata, ?array $ctrl = null): mixed`

Create a new entity with the given data. Throws on error.

```php
$result = $client->Rollout()->create([
  "account_id" => null, // string
  "application_id" => null, // string
  "description" => null, // string
  "strategy" => null, // string
  "target_configuration" => null, // array
]);
```

### Common Methods

#### `data_get(): array`

Get the entity data. Returns a copy of the current data.

#### `data_set($data): void`

Set the entity data.

#### `match_get(): array`

Get the entity match criteria.

#### `match_set($match): void`

Set the entity match criteria.

#### `make(): RolloutEntity`

Create a new `RolloutEntity` instance with the same client and
options.

#### `get_name(): string`

Return the entity name.


---

## SavedQueryEntity

```php
$saved_query = $client->SavedQuery();
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `description` | `string` | Yes |  |
| `errors` | `array` | Yes |  |
| `id` | `string` | No |  |
| `messages` | `array` | Yes |  |
| `name` | `string` | Yes | Query name |
| `parameters` | `array` | Yes |  |
| `result` | `array` | Yes |  |
| `success` | `bool` | Yes |  |

### Operations

#### `create(array $reqdata, ?array $ctrl = null): mixed`

Create a new entity with the given data. Throws on error.

```php
$result = $client->SavedQuery()->create([
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

#### `list(?array $reqmatch = null, ?array $ctrl = null): mixed`

List entities matching the given criteria (call with no argument to list all). Returns an array. Throws on error.

```php
$results = $client->SavedQuery()->list();
```

#### `load(array $reqmatch, ?array $ctrl = null): mixed`

Load a single entity matching the given criteria. Throws on error.

```php
$result = $client->SavedQuery()->load(["id" => "saved_query_id", "account_id" => "account_id"]);
```

#### `remove(array $reqmatch, ?array $ctrl = null): mixed`

Remove the entity matching the given criteria. Throws on error.

```php
$result = $client->SavedQuery()->remove(["id" => "saved_query_id", "account_id" => "account_id"]);
```

#### `update(array $reqdata, ?array $ctrl = null): mixed`

Update an existing entity. The data must include the entity `id`. Throws on error.

```php
$result = $client->SavedQuery()->update([
  "id" => "saved_query_id",
  "account_id" => "account_id",
  // Fields to update
]);
```

### Common Methods

#### `data_get(): array`

Get the entity data. Returns a copy of the current data.

#### `data_set($data): void`

Set the entity data.

#### `match_get(): array`

Get the entity match criteria.

#### `match_set($match): void`

Set the entity match criteria.

#### `make(): SavedQueryEntity`

Create a new `SavedQueryEntity` instance with the same client and
options.

#### `get_name(): string`

Return the entity name.


---

## ScriptEntity

```php
$script = $client->Script();
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `id` | `string` | No |  |

### Operations

#### `remove(array $reqmatch, ?array $ctrl = null): mixed`

Remove the entity matching the given criteria. Throws on error.

```php
$result = $client->Script()->remove(["account_id" => "account_id", "id" => "id"]);
```

### Common Methods

#### `data_get(): array`

Get the entity data. Returns a copy of the current data.

#### `data_set($data): void`

Set the entity data.

#### `match_get(): array`

Get the entity match criteria.

#### `match_set($match): void`

Set the entity match criteria.

#### `make(): ScriptEntity`

Create a new `ScriptEntity` instance with the same client and
options.

#### `get_name(): string`

Return the entity name.


---

## ScriptSettingEntity

```php
$script_setting = $client->ScriptSetting();
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `errors` | `array` | Yes |  |
| `logpush` | `bool` | No | Whether Logpush is turned on for the Worker. |
| `messages` | `array` | Yes |  |
| `observability` | `mixed` | No |  |
| `result` | `array` | Yes |  |
| `success` | `bool` | Yes | Whether the API call was successful. |
| `tags` | `mixed` | No |  |
| `tail_consumers` | `array` | No | List of Workers that will consume logs from the attached Worker. |

### Operations

#### `list(?array $reqmatch = null, ?array $ctrl = null): mixed`

List entities matching the given criteria (call with no argument to list all). Returns an array. Throws on error.

```php
$results = $client->ScriptSetting()->list();
```

#### `update(array $reqdata, ?array $ctrl = null): mixed`

Update an existing entity. The data must include the entity `id`. Throws on error.

```php
$result = $client->ScriptSetting()->update([
  "account_id" => "account_id",
  "script_name" => "script_name",
  // Fields to update
]);
```

### Common Methods

#### `data_get(): array`

Get the entity data. Returns a copy of the current data.

#### `data_set($data): void`

Set the entity data.

#### `match_get(): array`

Get the entity match criteria.

#### `match_set($match): void`

Set the entity match criteria.

#### `make(): ScriptSettingEntity`

Create a new `ScriptSettingEntity` instance with the same client and
options.

#### `get_name(): string`

Return the entity name.


---

## SecretEntity

```php
$secret = $client->Secret();
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `comment` | `string` | No | Freeform text describing the secret. |
| `id` | `string` | No |  |
| `result` | `mixed` | Yes |  |
| `scopes` | `array` | No | The list of services that can use this secret. |
| `value` | `string` | No | The value of the secret. |

### Field Usage by Operation

| Field | load | list | create | update | remove |
| --- | --- | --- | --- | --- | --- |
| `comment` | - | - | - | - | - |
| `id` | - | - | - | - | - |
| `result` | - | Yes | - | - | - |
| `scopes` | - | - | - | - | - |
| `value` | - | - | - | - | - |

### Operations

#### `create(array $reqdata, ?array $ctrl = null): mixed`

Create a new entity with the given data. Throws on error.

```php
$result = $client->Secret()->create([
  "account_id" => null, // string
  "store_id" => null, // string
  "result" => null, // mixed
]);
```

#### `list(?array $reqmatch = null, ?array $ctrl = null): mixed`

List entities matching the given criteria (call with no argument to list all). Returns an array. Throws on error.

```php
$results = $client->Secret()->list();
```

#### `load(array $reqmatch, ?array $ctrl = null): mixed`

Load a single entity matching the given criteria. Throws on error.

```php
$result = $client->Secret()->load(["id" => "secret_id", "account_id" => "account_id", "store_id" => "store_id"]);
```

#### `remove(array $reqmatch, ?array $ctrl = null): mixed`

Remove the entity matching the given criteria. Throws on error.

```php
$result = $client->Secret()->remove(["id" => "secret_id", "account_id" => "account_id", "store_id" => "store_id"]);
```

#### `update(array $reqdata, ?array $ctrl = null): mixed`

Update an existing entity. The data must include the entity `id`. Throws on error.

```php
$result = $client->Secret()->update([
  "id" => "secret_id",
  "account_id" => "account_id",
  "store_id" => "store_id",
  // Fields to update
]);
```

### Common Methods

#### `data_get(): array`

Get the entity data. Returns a copy of the current data.

#### `data_set($data): void`

Set the entity data.

#### `match_get(): array`

Get the entity match criteria.

#### `match_set($match): void`

Set the entity match criteria.

#### `make(): SecretEntity`

Create a new `SecretEntity` instance with the same client and
options.

#### `get_name(): string`

Return the entity name.


---

## SecretsStoreDeleteEntity

```php
$secrets_store_delete = $client->SecretsStoreDelete();
```

### Operations

#### `remove(array $reqmatch, ?array $ctrl = null): mixed`

Remove the entity matching the given criteria. Throws on error.

```php
$result = $client->SecretsStoreDelete()->remove(["account_id" => "account_id", "store_id" => "store_id"]);
```

### Common Methods

#### `data_get(): array`

Get the entity data. Returns a copy of the current data.

#### `data_set($data): void`

Set the entity data.

#### `match_get(): array`

Get the entity match criteria.

#### `match_set($match): void`

Set the entity match criteria.

#### `make(): SecretsStoreDeleteEntity`

Create a new `SecretsStoreDeleteEntity` instance with the same client and
options.

#### `get_name(): string`

Return the entity name.


---

## SecretsStoreQuotaEntity

```php
$secrets_store_quota = $client->SecretsStoreQuota();
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `result` | `mixed` | Yes |  |

### Operations

#### `load(array $reqmatch, ?array $ctrl = null): mixed`

Load a single entity matching the given criteria. Throws on error.

```php
$result = $client->SecretsStoreQuota()->load(["account_id" => "account_id"]);
```

### Common Methods

#### `data_get(): array`

Get the entity data. Returns a copy of the current data.

#### `data_set($data): void`

Set the entity data.

#### `match_get(): array`

Get the entity match criteria.

#### `match_set($match): void`

Set the entity match criteria.

#### `make(): SecretsStoreQuotaEntity`

Create a new `SecretsStoreQuotaEntity` instance with the same client and
options.

#### `get_name(): string`

Return the entity name.


---

## SecretsStoreSecretEntity

```php
$secrets_store_secret = $client->SecretsStoreSecret();
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `comment` | `string` | No | Freeform text describing the secret. |
| `name` | `string` | Yes | The name of the secret. |
| `scopes` | `array` | Yes | The list of services that can use this secret. |

### Operations

#### `create(array $reqdata, ?array $ctrl = null): mixed`

Create a new entity with the given data. Throws on error.

```php
$result = $client->SecretsStoreSecret()->create([
  "account_id" => null, // string
  "secret_id" => null, // string
  "store_id" => null, // string
  "name" => null, // string
  "scopes" => null, // array
]);
```

### Common Methods

#### `data_get(): array`

Get the entity data. Returns a copy of the current data.

#### `data_set($data): void`

Set the entity data.

#### `match_get(): array`

Get the entity match criteria.

#### `match_set($match): void`

Set the entity match criteria.

#### `make(): SecretsStoreSecretEntity`

Create a new `SecretsStoreSecretEntity` instance with the same client and
options.

#### `get_name(): string`

Return the entity name.


---

## SecretsStoreStoreEntity

```php
$secrets_store_store = $client->SecretsStoreStore();
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `id` | `string` | No |  |
| `name` | `string` | Yes | The name of the store. |
| `result` | `mixed` | Yes |  |

### Operations

#### `create(array $reqdata, ?array $ctrl = null): mixed`

Create a new entity with the given data. Throws on error.

```php
$result = $client->SecretsStoreStore()->create([
  "account_id" => null, // string
  "name" => null, // string
  "result" => null, // mixed
]);
```

#### `load(array $reqmatch, ?array $ctrl = null): mixed`

Load a single entity matching the given criteria. Throws on error.

```php
$result = $client->SecretsStoreStore()->load(["id" => "secrets_store_store_id", "account_id" => "account_id"]);
```

### Common Methods

#### `data_get(): array`

Get the entity data. Returns a copy of the current data.

#### `data_set($data): void`

Set the entity data.

#### `match_get(): array`

Get the entity match criteria.

#### `match_set($match): void`

Set the entity match criteria.

#### `make(): SecretsStoreStoreEntity`

Create a new `SecretsStoreStoreEntity` instance with the same client and
options.

#### `get_name(): string`

Return the entity name.


---

## SecretsStoreStoresResponseCollectionEntity

```php
$secrets_store_stores_response_collection = $client->SecretsStoreStoresResponseCollection();
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `result` | `array` | No |  |

### Operations

#### `list(?array $reqmatch = null, ?array $ctrl = null): mixed`

List entities matching the given criteria (call with no argument to list all). Returns an array. Throws on error.

```php
$results = $client->SecretsStoreStoresResponseCollection()->list();
```

### Common Methods

#### `data_get(): array`

Get the entity data. Returns a copy of the current data.

#### `data_set($data): void`

Set the entity data.

#### `match_get(): array`

Get the entity match criteria.

#### `match_set($match): void`

Set the entity match criteria.

#### `make(): SecretsStoreStoresResponseCollectionEntity`

Create a new `SecretsStoreStoresResponseCollectionEntity` instance with the same client and
options.

#### `get_name(): string`

Return the entity name.


---

## SettingEntity

```php
$setting = $client->Setting();
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `errors` | `array` | Yes |  |
| `messages` | `array` | Yes |  |
| `result` | `array` | Yes |  |
| `success` | `bool` | Yes | Whether the API call was successful. |

### Operations

#### `list(?array $reqmatch = null, ?array $ctrl = null): mixed`

List entities matching the given criteria (call with no argument to list all). Returns an array. Throws on error.

```php
$results = $client->Setting()->list();
```

#### `update(array $reqdata, ?array $ctrl = null): mixed`

Update an existing entity. The data must include the entity `id`. Throws on error.

```php
$result = $client->Setting()->update([
  "account_id" => "account_id",
  "environment_name" => "environment_name",
  "service_id" => "service_id",
  // Fields to update
]);
```

### Common Methods

#### `data_get(): array`

Get the entity data. Returns a copy of the current data.

#### `data_set($data): void`

Set the entity data.

#### `match_get(): array`

Get the entity match criteria.

#### `match_set($match): void`

Set the entity match criteria.

#### `make(): SettingEntity`

Create a new `SettingEntity` instance with the same client and
options.

#### `get_name(): string`

Return the entity name.


---

## SharedEntity

```php
$shared = $client->Shared();
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `errors` | `array` | Yes |  |
| `id` | `string` | No |  |
| `messages` | `array` | Yes |  |
| `result` | `array` | Yes | Complete results of a query run. |
| `success` | `bool` | Yes |  |

### Operations

#### `create(array $reqdata, ?array $ctrl = null): mixed`

Create a new entity with the given data. Throws on error.

```php
$result = $client->Shared()->create([
  "account_id" => null, // string
  "errors" => null, // array
  "messages" => null, // array
  "result" => null, // array
  "success" => null, // bool
]);
```

#### `load(array $reqmatch, ?array $ctrl = null): mixed`

Load a single entity matching the given criteria. Throws on error.

```php
$result = $client->Shared()->load(["id" => "shared_id", "account_id" => "account_id"]);
```

### Common Methods

#### `data_get(): array`

Get the entity data. Returns a copy of the current data.

#### `data_set($data): void`

Set the entity data.

#### `match_get(): array`

Get the entity match criteria.

#### `match_set($match): void`

Set the entity match criteria.

#### `make(): SharedEntity`

Create a new `SharedEntity` instance with the same client and
options.

#### `get_name(): string`

Return the entity name.


---

## TailEntity

```php
$tail = $client->Tail();
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `id` | `string` | No |  |

### Operations

#### `remove(array $reqmatch, ?array $ctrl = null): mixed`

Remove the entity matching the given criteria. Throws on error.

```php
$result = $client->Tail()->remove(["account_id" => "account_id", "id" => "id", "script_id" => "script_id"]);
```

### Common Methods

#### `data_get(): array`

Get the entity data. Returns a copy of the current data.

#### `data_set($data): void`

Set the entity data.

#### `match_get(): array`

Get the entity match criteria.

#### `match_set($match): void`

Set the entity match criteria.

#### `make(): TailEntity`

Create a new `TailEntity` instance with the same client and
options.

#### `get_name(): string`

Return the entity name.


---

## TokenEntity

```php
$token = $client->Token();
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `id` | `string` | No |  |

### Operations

#### `remove(array $reqmatch, ?array $ctrl = null): mixed`

Remove the entity matching the given criteria. Throws on error.

```php
$result = $client->Token()->remove(["account_id" => "account_id", "id" => "id"]);
```

### Common Methods

#### `data_get(): array`

Get the entity data. Returns a copy of the current data.

#### `data_set($data): void`

Set the entity data.

#### `match_get(): array`

Get the entity match criteria.

#### `match_set($match): void`

Set the entity match criteria.

#### `make(): TokenEntity`

Create a new `TokenEntity` instance with the same client and
options.

#### `get_name(): string`

Return the entity name.


---

## TriggerEntity

```php
$trigger = $client->Trigger();
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `branch_excludes` | `array` | Yes | Branch patterns that must not start builds. |
| `branch_includes` | `array` | Yes | Branch patterns that can start builds. |
| `build_caching_enabled` | `bool` | No | Whether builds reuse cached dependencies and build artifacts. |
| `build_command` | `string` | Yes | Command to build the Worker. |
| `build_token_uuid` | `string` | Yes | UUID of the build token used when deploying the Worker. |
| `deploy_command` | `string` | Yes | Command to deploy the Worker. |
| `external_script_id` | `string` | Yes | System-generated tag of the Worker. |
| `id` | `string` | No |  |
| `path_excludes` | `array` | Yes | Path patterns that must not start builds. |
| `path_includes` | `array` | Yes | Path patterns that can start builds. |
| `repo_connection_uuid` | `string` | Yes | Repository connection UUID. |
| `root_directory` | `string` | Yes | Repository directory in which build and deploy commands run. |
| `trigger_name` | `string` | Yes | Human-readable name of the build trigger. |

### Field Usage by Operation

| Field | create | update | remove |
| --- | --- | --- | --- |
| `branch_excludes` | - | Yes | - |
| `branch_includes` | - | Yes | - |
| `build_caching_enabled` | - | - | - |
| `build_command` | - | Yes | - |
| `build_token_uuid` | - | Yes | - |
| `deploy_command` | - | Yes | - |
| `external_script_id` | - | - | - |
| `id` | - | - | - |
| `path_excludes` | - | Yes | - |
| `path_includes` | - | Yes | - |
| `repo_connection_uuid` | - | - | - |
| `root_directory` | - | Yes | - |
| `trigger_name` | - | Yes | - |

### Operations

#### `create(array $reqdata, ?array $ctrl = null): mixed`

Create a new entity with the given data. Throws on error.

```php
$result = $client->Trigger()->create([
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

#### `remove(array $reqmatch, ?array $ctrl = null): mixed`

Remove the entity matching the given criteria. Throws on error.

```php
$result = $client->Trigger()->remove(["account_id" => "account_id", "id" => "id"]);
```

#### `update(array $reqdata, ?array $ctrl = null): mixed`

Update an existing entity. The data must include the entity `id`. Throws on error.

```php
$result = $client->Trigger()->update([
  "account_id" => "account_id",
  "id" => "id",
  // Fields to update
]);
```

### Common Methods

#### `data_get(): array`

Get the entity data. Returns a copy of the current data.

#### `data_set($data): void`

Set the entity data.

#### `match_get(): array`

Get the entity match criteria.

#### `match_set($match): void`

Set the entity match criteria.

#### `make(): TriggerEntity`

Create a new `TriggerEntity` instance with the same client and
options.

#### `get_name(): string`

Return the entity name.


---

## UsageEntity

```php
$usage = $client->Usage();
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `errors` | `array` | Yes |  |
| `messages` | `array` | Yes |  |
| `result` | `array` | Yes |  |
| `success` | `bool` | Yes |  |

### Operations

#### `list(?array $reqmatch = null, ?array $ctrl = null): mixed`

List entities matching the given criteria (call with no argument to list all). Returns an array. Throws on error.

```php
$results = $client->Usage()->list();
```

### Common Methods

#### `data_get(): array`

Get the entity data. Returns a copy of the current data.

#### `data_set($data): void`

Set the entity data.

#### `match_get(): array`

Get the entity match criteria.

#### `match_set($match): void`

Set the entity match criteria.

#### `make(): UsageEntity`

Create a new `UsageEntity` instance with the same client and
options.

#### `get_name(): string`

Return the entity name.


---

## ValueEntity

```php
$value = $client->Value();
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `datasets` | `array` | Yes | Leave this empty to use the default datasets |
| `errors` | `array` | Yes |  |
| `filters` | `array` | No | Apply filters before listing values. |
| `key` | `string` | Yes |  |
| `limit` | `float` | No |  |
| `messages` | `array` | Yes |  |
| `needle` | `array` | Yes | Full-text search expression to match events containing the specified text or pattern. |
| `result` | `array` | Yes |  |
| `success` | `bool` | Yes |  |
| `timeframe` | `array` | Yes |  |
| `type` | `string` | Yes |  |

### Operations

#### `create(array $reqdata, ?array $ctrl = null): mixed`

Create a new entity with the given data. Throws on error.

```php
$result = $client->Value()->create([
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

### Common Methods

#### `data_get(): array`

Get the entity data. Returns a copy of the current data.

#### `data_set($data): void`

Set the entity data.

#### `match_get(): array`

Get the entity match criteria.

#### `match_set($match): void`

Set the entity match criteria.

#### `make(): ValueEntity`

Create a new `ValueEntity` instance with the same client and
options.

#### `get_name(): string`

Return the entity name.


---

## VersionEntity

```php
$version = $client->Version();
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `annotations` | `array` | No | Metadata about the version. |
| `assets` | `array` | No | Configuration for assets within a Worker. |
| `author_email` | `string` | No | Email of the user who created the version. |
| `author_id` | `string` | No | Identifier of the user who created the version. |
| `bindings` | `array` | No | List of bindings attached to a Worker. |
| `cache_options` | `array` | Yes | Global CacheW configuration for the Worker. |
| `compatibility_date` | `string` | No | Date indicating targeted support in the Workers runtime. |
| `compatibility_flags` | `array` | No | Flags that enable or disable certain features in the Workers runtime. |
| `containers` | `array` | No | List of containers attached to a Worker. |
| `created_on` | `string` | Yes | When the version was created. |
| `errors` | `array` | Yes |  |
| `exports` | `mixed` | No | Declarative exports for the version, including Durable Object classes (with their `storage` backend) and named Worker entrypoints. |
| `exports_reconciliation` | `mixed` | No | Summary of the declarative exports reconciliation that ran on this upload. |
| `id` | `string` | Yes | Version identifier. |
| `limits` | `array` | No | Resource limits enforced at runtime. |
| `main_module` | `string` | No | The name of the main module in the `modules` array (e.g. |
| `messages` | `array` | Yes |  |
| `migration_tag` | `string` | No | Durable Object migration tag. |
| `migrations` | `mixed` | No | Migrations for Durable Objects associated with the version. |
| `modules` | `array` | No | Code, sourcemaps, and other content used at runtime. |
| `number` | `int` | Yes | The integer version number, starting from one. |
| `package_dependencies` | `array` | No | The list of npm packages that were installed and used when this Worker version was built. |
| `placement` | `array` | No | Configuration for [Smart Placement](https://developers.cloudflare.com/workers/configuration/smart-placement). |
| `result` | `array` | Yes |  |
| `source` | `string` | No | The client used to create the version. |
| `startup_time_ms` | `int` | No | Time in milliseconds spent on [Worker startup](https://developers.cloudflare.com/workers/platform/limits/#worker-startup-time). |
| `success` | `bool` | Yes | Whether the API call was successful. |
| `urls` | `array` | Yes | All routable URLs that always point to this version. |
| `usage_model` | `string` | No | Usage model for the version. |

### Operations

#### `create(array $reqdata, ?array $ctrl = null): mixed`

Create a new entity with the given data. Throws on error.

```php
$result = $client->Version()->create([
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

#### `list(?array $reqmatch = null, ?array $ctrl = null): mixed`

List entities matching the given criteria (call with no argument to list all). Returns an array. Throws on error.

```php
$results = $client->Version()->list();
```

#### `load(array $reqmatch, ?array $ctrl = null): mixed`

Load a single entity matching the given criteria. Throws on error.

```php
$result = $client->Version()->load(["id" => "version_id", "account_id" => "account_id", "worker_id" => "worker_id"]);
```

#### `remove(array $reqmatch, ?array $ctrl = null): mixed`

Remove the entity matching the given criteria. Throws on error.

```php
$result = $client->Version()->remove(["id" => "version_id", "account_id" => "account_id", "worker_id" => "worker_id"]);
```

#### `update(array $reqdata, ?array $ctrl = null): mixed`

Update an existing entity. The data must include the entity `id`. Throws on error.

```php
$result = $client->Version()->update([
  "id" => "version_id",
  "account_id" => "account_id",
  "worker_id" => "worker_id",
  // Fields to update
]);
```

### Common Methods

#### `data_get(): array`

Get the entity data. Returns a copy of the current data.

#### `data_set($data): void`

Set the entity data.

#### `match_get(): array`

Get the entity match criteria.

#### `match_set($match): void`

Set the entity match criteria.

#### `make(): VersionEntity`

Create a new `VersionEntity` instance with the same client and
options.

#### `get_name(): string`

Return the entity name.


---

## WorkerEntity

```php
$worker = $client->Worker();
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `auto_build` | `bool` | No | Whether pushes to the git branch build this Preview. |
| `auto_delete` | `bool` | No | Whether deleting the git branch also deletes this Preview. |
| `branch` | `mixed` | No | Git branch name (required if commit_hash not provided) |
| `commit_hash` | `mixed` | No | Git commit hash (required if branch not provided) |
| `errors` | `array` | Yes |  |
| `git_repository` | `mixed` | Yes | Git repository settings to update |
| `id` | `string` | No |  |
| `messages` | `array` | Yes |  |
| `previews_base_config` | `array` | Yes | Build and deploy settings when creating a Worker build configuration |
| `previews_enabled` | `bool` | Yes | Whether Previews are enabled for this Worker |
| `production_settings` | `array` | Yes | Build and deploy settings when creating a Worker build configuration |
| `result` | `array` | Yes | A single Preview of a Worker, with the build settings it currently uses. |
| `result_info` | `array` | No |  |
| `script_tag` | `string` | Yes | System-generated tag of the Worker. |
| `seed_repo` | `mixed` | No | Optional repository and file overrides used to seed this build. |
| `settings` | `array` | No | Partial build settings for updating a Worker build configuration |
| `success` | `bool` | Yes | Whether the API call was successful. |

### Field Usage by Operation

| Field | load | list | create | update | remove |
| --- | --- | --- | --- | --- | --- |
| `auto_build` | - | - | - | - | - |
| `auto_delete` | - | - | - | - | - |
| `branch` | - | - | - | - | - |
| `commit_hash` | - | - | - | - | - |
| `errors` | - | - | - | - | - |
| `git_repository` | - | - | - | - | - |
| `id` | - | - | - | - | - |
| `messages` | - | - | - | - | - |
| `previews_base_config` | - | - | - | - | - |
| `previews_enabled` | - | - | - | - | - |
| `production_settings` | - | - | - | - | - |
| `result` | Yes | Yes | - | - | - |
| `result_info` | - | - | - | - | - |
| `script_tag` | - | - | - | - | - |
| `seed_repo` | - | - | - | - | - |
| `settings` | - | - | - | - | - |
| `success` | - | - | - | - | - |

### Operations

#### `create(array $reqdata, ?array $ctrl = null): mixed`

Create a new entity with the given data. Throws on error.

```php
$result = $client->Worker()->create([
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

#### `list(?array $reqmatch = null, ?array $ctrl = null): mixed`

List entities matching the given criteria (call with no argument to list all). Returns an array. Throws on error.

```php
$results = $client->Worker()->list();
```

#### `load(array $reqmatch, ?array $ctrl = null): mixed`

Load a single entity matching the given criteria. Throws on error.

```php
$result = $client->Worker()->load(["id" => "worker_id", "account_id" => "account_id"]);
```

#### `remove(array $reqmatch, ?array $ctrl = null): mixed`

Remove the entity matching the given criteria. Throws on error.

```php
$result = $client->Worker()->remove(["id" => "worker_id", "account_id" => "account_id"]);
```

#### `update(array $reqdata, ?array $ctrl = null): mixed`

Update an existing entity. The data must include the entity `id`. Throws on error.

```php
$result = $client->Worker()->update([
  "id" => "worker_id",
  "account_id" => "account_id",
  // Fields to update
]);
```

### Common Methods

#### `data_get(): array`

Get the entity data. Returns a copy of the current data.

#### `data_set($data): void`

Set the entity data.

#### `match_get(): array`

Get the entity match criteria.

#### `match_set($match): void`

Set the entity match criteria.

#### `make(): WorkerEntity`

Create a new `WorkerEntity` instance with the same client and
options.

#### `get_name(): string`

Return the entity name.


---

## WorkerCronTriggerEntity

```php
$worker_cron_trigger = $client->WorkerCronTrigger();
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `errors` | `array` | Yes |  |
| `messages` | `array` | Yes |  |
| `result` | `array` | Yes |  |
| `success` | `bool` | Yes | Whether the API call was successful. |

### Operations

#### `list(?array $reqmatch = null, ?array $ctrl = null): mixed`

List entities matching the given criteria (call with no argument to list all). Returns an array. Throws on error.

```php
$results = $client->WorkerCronTrigger()->list();
```

#### `update(array $reqdata, ?array $ctrl = null): mixed`

Update an existing entity. The data must include the entity `id`. Throws on error.

```php
$result = $client->WorkerCronTrigger()->update([
  "account_id" => "account_id",
  "script_name" => "script_name",
  // Fields to update
]);
```

### Common Methods

#### `data_get(): array`

Get the entity data. Returns a copy of the current data.

#### `data_set($data): void`

Set the entity data.

#### `match_get(): array`

Get the entity match criteria.

#### `match_set($match): void`

Set the entity match criteria.

#### `make(): WorkerCronTriggerEntity`

Create a new `WorkerCronTriggerEntity` instance with the same client and
options.

#### `get_name(): string`

Return the entity name.


---

## WorkerDeploymentEntity

```php
$worker_deployment = $client->WorkerDeployment();
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `annotations` | `array` | No |  |
| `author_email` | `string` | No |  |
| `created_on` | `string` | Yes |  |
| `errors` | `array` | Yes |  |
| `id` | `string` | Yes |  |
| `messages` | `array` | Yes |  |
| `result` | `array` | Yes |  |
| `source` | `string` | Yes |  |
| `strategy` | `string` | Yes |  |
| `success` | `bool` | Yes | Whether the API call was successful. |
| `versions` | `array` | Yes | Worker versions included in this deployment. |

### Operations

#### `create(array $reqdata, ?array $ctrl = null): mixed`

Create a new entity with the given data. Throws on error.

```php
$result = $client->WorkerDeployment()->create([
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

#### `load(array $reqmatch, ?array $ctrl = null): mixed`

Load a single entity matching the given criteria. Throws on error.

```php
$result = $client->WorkerDeployment()->load(["id" => "worker_deployment_id", "account_id" => "account_id"]);
```

### Common Methods

#### `data_get(): array`

Get the entity data. Returns a copy of the current data.

#### `data_set($data): void`

Set the entity data.

#### `match_get(): array`

Get the entity match criteria.

#### `match_set($match): void`

Set the entity match criteria.

#### `make(): WorkerDeploymentEntity`

Create a new `WorkerDeploymentEntity` instance with the same client and
options.

#### `get_name(): string`

Return the entity name.


---

## WorkerEnvironmentEntity

```php
$worker_environment = $client->WorkerEnvironment();
```

### Operations

#### `load(array $reqmatch, ?array $ctrl = null): mixed`

Load a single entity matching the given criteria. Throws on error.

```php
$result = $client->WorkerEnvironment()->load(["account_id" => "account_id", "environment_name" => "environment_name", "service_id" => "service_id"]);
```

### Common Methods

#### `data_get(): array`

Get the entity data. Returns a copy of the current data.

#### `data_set($data): void`

Set the entity data.

#### `match_get(): array`

Get the entity match criteria.

#### `match_set($match): void`

Set the entity match criteria.

#### `make(): WorkerEnvironmentEntity`

Create a new `WorkerEnvironmentEntity` instance with the same client and
options.

#### `get_name(): string`

Return the entity name.


---

## WorkerRouteEntity

```php
$worker_route = $client->WorkerRoute();
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `errors` | `array` | Yes |  |
| `id` | `string` | Yes |  |
| `messages` | `array` | Yes |  |
| `pattern` | `string` | Yes | Pattern to match incoming requests against. |
| `result` | `array` | Yes |  |
| `script` | `string` | No | Name of the script to run if the route matches. |
| `success` | `bool` | Yes | Whether the API call was successful. |

### Operations

#### `create(array $reqdata, ?array $ctrl = null): mixed`

Create a new entity with the given data. Throws on error.

```php
$result = $client->WorkerRoute()->create([
  "zone_id" => null, // string
  "errors" => null, // array
  "id" => null, // string
  "messages" => null, // array
  "pattern" => null, // string
  "result" => null, // array
  "success" => null, // bool
]);
```

#### `list(?array $reqmatch = null, ?array $ctrl = null): mixed`

List entities matching the given criteria (call with no argument to list all). Returns an array. Throws on error.

```php
$results = $client->WorkerRoute()->list();
```

#### `load(array $reqmatch, ?array $ctrl = null): mixed`

Load a single entity matching the given criteria. Throws on error.

```php
$result = $client->WorkerRoute()->load(["id" => "worker_route_id", "zone_id" => "zone_id"]);
```

#### `remove(array $reqmatch, ?array $ctrl = null): mixed`

Remove the entity matching the given criteria. Throws on error.

```php
$result = $client->WorkerRoute()->remove(["id" => "worker_route_id", "zone_id" => "zone_id"]);
```

#### `update(array $reqdata, ?array $ctrl = null): mixed`

Update an existing entity. The data must include the entity `id`. Throws on error.

```php
$result = $client->WorkerRoute()->update([
  "id" => "worker_route_id",
  "zone_id" => "zone_id",
  // Fields to update
]);
```

### Common Methods

#### `data_get(): array`

Get the entity data. Returns a copy of the current data.

#### `data_set($data): void`

Set the entity data.

#### `match_get(): array`

Get the entity match criteria.

#### `match_set($match): void`

Set the entity match criteria.

#### `make(): WorkerRouteEntity`

Create a new `WorkerRouteEntity` instance with the same client and
options.

#### `get_name(): string`

Return the entity name.


---

## WorkerScriptEntity

```php
$worker_script = $client->WorkerScript();
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `errors` | `array` | Yes |  |
| `id` | `string` | No |  |
| `messages` | `array` | Yes |  |
| `result` | `array` | No | A secret value accessible through a binding. |
| `success` | `bool` | Yes | Whether the API call was successful. |

### Field Usage by Operation

| Field | load | list | create | update | remove |
| --- | --- | --- | --- | --- | --- |
| `errors` | - | - | - | - | - |
| `id` | - | - | - | - | - |
| `messages` | - | - | - | - | - |
| `result` | - | Yes | - | - | - |
| `success` | - | - | - | - | - |

### Operations

#### `create(array $reqdata, ?array $ctrl = null): mixed`

Create a new entity with the given data. Throws on error.

```php
$result = $client->WorkerScript()->create([
  "account_id" => null, // string
  "script_name" => null, // string
  "errors" => null, // array
  "messages" => null, // array
  "success" => null, // bool
]);
```

#### `list(?array $reqmatch = null, ?array $ctrl = null): mixed`

List entities matching the given criteria (call with no argument to list all). Returns an array. Throws on error.

```php
$results = $client->WorkerScript()->list();
```

#### `load(array $reqmatch, ?array $ctrl = null): mixed`

Load a single entity matching the given criteria. Throws on error.

```php
$result = $client->WorkerScript()->load(["id" => "worker_script_id", "account_id" => "account_id"]);
```

#### `remove(array $reqmatch, ?array $ctrl = null): mixed`

Remove the entity matching the given criteria. Throws on error.

```php
$result = $client->WorkerScript()->remove(["account_id" => "account_id", "script_name" => "script_name"]);
```

#### `update(array $reqdata, ?array $ctrl = null): mixed`

Update an existing entity. The data must include the entity `id`. Throws on error.

```php
$result = $client->WorkerScript()->update([
  "id" => "worker_script_id",
  "account_id" => "account_id",
  // Fields to update
]);
```

### Common Methods

#### `data_get(): array`

Get the entity data. Returns a copy of the current data.

#### `data_set($data): void`

Set the entity data.

#### `match_get(): array`

Get the entity match criteria.

#### `match_set($match): void`

Set the entity match criteria.

#### `make(): WorkerScriptEntity`

Create a new `WorkerScriptEntity` instance with the same client and
options.

#### `get_name(): string`

Return the entity name.


---

## WorkerSubdomainEntity

```php
$worker_subdomain = $client->WorkerSubdomain();
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `errors` | `array` | Yes |  |
| `messages` | `array` | Yes |  |
| `result` | `array` | Yes |  |
| `subdomain` | `string` | Yes |  |
| `success` | `bool` | Yes | Whether the API call was successful. |

### Operations

#### `list(?array $reqmatch = null, ?array $ctrl = null): mixed`

List entities matching the given criteria (call with no argument to list all). Returns an array. Throws on error.

```php
$results = $client->WorkerSubdomain()->list();
```

#### `remove(array $reqmatch, ?array $ctrl = null): mixed`

Remove the entity matching the given criteria. Throws on error.

```php
$result = $client->WorkerSubdomain()->remove(["account_id" => "account_id"]);
```

#### `update(array $reqdata, ?array $ctrl = null): mixed`

Update an existing entity. The data must include the entity `id`. Throws on error.

```php
$result = $client->WorkerSubdomain()->update([
  "account_id" => "account_id",
  // Fields to update
]);
```

### Common Methods

#### `data_get(): array`

Get the entity data. Returns a copy of the current data.

#### `data_set($data): void`

Set the entity data.

#### `match_get(): array`

Get the entity match criteria.

#### `match_set($match): void`

Set the entity match criteria.

#### `make(): WorkerSubdomainEntity`

Create a new `WorkerSubdomainEntity` instance with the same client and
options.

#### `get_name(): string`

Return the entity name.


---

## WorkerTailLogEntity

```php
$worker_tail_log = $client->WorkerTailLog();
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `errors` | `array` | Yes |  |
| `messages` | `array` | Yes |  |
| `result` | `array` | Yes |  |
| `success` | `bool` | Yes | Whether the API call was successful. |

### Operations

#### `create(array $reqdata, ?array $ctrl = null): mixed`

Create a new entity with the given data. Throws on error.

```php
$result = $client->WorkerTailLog()->create([
  "account_id" => null, // string
  "script_name" => null, // string
  "errors" => null, // array
  "messages" => null, // array
  "result" => null, // array
  "success" => null, // bool
]);
```

#### `list(?array $reqmatch = null, ?array $ctrl = null): mixed`

List entities matching the given criteria (call with no argument to list all). Returns an array. Throws on error.

```php
$results = $client->WorkerTailLog()->list();
```

### Common Methods

#### `data_get(): array`

Get the entity data. Returns a copy of the current data.

#### `data_set($data): void`

Set the entity data.

#### `match_get(): array`

Get the entity match criteria.

#### `match_set($match): void`

Set the entity match criteria.

#### `make(): WorkerTailLogEntity`

Create a new `WorkerTailLogEntity` instance with the same client and
options.

#### `get_name(): string`

Return the entity name.


---

## WorkersAccountSettingEntity

```php
$workers_account_setting = $client->WorkersAccountSetting();
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `default_usage_model` | `string` | No |  |
| `errors` | `array` | Yes |  |
| `green_compute` | `bool` | No |  |
| `messages` | `array` | Yes |  |
| `result` | `array` | Yes |  |
| `success` | `bool` | Yes | Whether the API call was successful. |

### Operations

#### `list(?array $reqmatch = null, ?array $ctrl = null): mixed`

List entities matching the given criteria (call with no argument to list all). Returns an array. Throws on error.

```php
$results = $client->WorkersAccountSetting()->list();
```

#### `update(array $reqdata, ?array $ctrl = null): mixed`

Update an existing entity. The data must include the entity `id`. Throws on error.

```php
$result = $client->WorkersAccountSetting()->update([
  "account_id" => "account_id",
  // Fields to update
]);
```

### Common Methods

#### `data_get(): array`

Get the entity data. Returns a copy of the current data.

#### `data_set($data): void`

Set the entity data.

#### `match_get(): array`

Get the entity match criteria.

#### `match_set($match): void`

Set the entity match criteria.

#### `make(): WorkersAccountSettingEntity`

Create a new `WorkersAccountSettingEntity` instance with the same client and
options.

#### `get_name(): string`

Return the entity name.


---

## WorkersApiResponseNullResultEntity

```php
$workers_api_response_null_result = $client->WorkersApiResponseNullResult();
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `errors` | `array` | Yes |  |
| `messages` | `array` | Yes |  |
| `result` | `array` | No |  |
| `success` | `bool` | Yes | Whether the API call was successful. |

### Operations

#### `remove(array $reqmatch, ?array $ctrl = null): mixed`

Remove the entity matching the given criteria. Throws on error.

```php
$result = $client->WorkersApiResponseNullResult()->remove(["account_id" => "account_id"]);
```

#### `update(array $reqdata, ?array $ctrl = null): mixed`

Update an existing entity. The data must include the entity `id`. Throws on error.

```php
$result = $client->WorkersApiResponseNullResult()->update([
  "account_id" => "account_id",
  "namespace_id" => "namespace_id",
  "script_id" => "script_id",
  "tag" => "tag",
  // Fields to update
]);
```

### Common Methods

#### `data_get(): array`

Get the entity data. Returns a copy of the current data.

#### `data_set($data): void`

Set the entity data.

#### `match_get(): array`

Get the entity match criteria.

#### `match_set($match): void`

Set the entity match criteria.

#### `make(): WorkersApiResponseNullResultEntity`

Create a new `WorkersApiResponseNullResultEntity` instance with the same client and
options.

#### `get_name(): string`

Return the entity name.


---

## WorkersCompletedUploadAssetEntity

```php
$workers_completed_upload_asset = $client->WorkersCompletedUploadAsset();
```

### Operations

#### `create(array $reqdata, ?array $ctrl = null): mixed`

Create a new entity with the given data. Throws on error.

```php
$result = $client->WorkersCompletedUploadAsset()->create([
  "account_id" => null, // string
  "base64" => null, // bool
]);
```

### Common Methods

#### `data_get(): array`

Get the entity data. Returns a copy of the current data.

#### `data_set($data): void`

Set the entity data.

#### `match_get(): array`

Get the entity match criteria.

#### `match_set($match): void`

Set the entity match criteria.

#### `make(): WorkersCompletedUploadAssetEntity`

Create a new `WorkersCompletedUploadAssetEntity` instance with the same client and
options.

#### `get_name(): string`

Return the entity name.


---

## WorkersCreateAssetsUploadSessionEntity

```php
$workers_create_assets_upload_session = $client->WorkersCreateAssetsUploadSession();
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `manifest` | `array` | Yes | A manifest ([path]: {hash, size}) map of files to upload. |

### Operations

#### `create(array $reqdata, ?array $ctrl = null): mixed`

Create a new entity with the given data. Throws on error.

```php
$result = $client->WorkersCreateAssetsUploadSession()->create([
  "account_id" => null, // string
  "script_name" => null, // string
  "manifest" => null, // array
]);
```

### Common Methods

#### `data_get(): array`

Get the entity data. Returns a copy of the current data.

#### `data_set($data): void`

Set the entity data.

#### `match_get(): array`

Get the entity match criteria.

#### `match_set($match): void`

Set the entity match criteria.

#### `make(): WorkersCreateAssetsUploadSessionEntity`

Create a new `WorkersCreateAssetsUploadSessionEntity` instance with the same client and
options.

#### `get_name(): string`

Return the entity name.


---

## WorkersForPlatformEntity

```php
$workers_for_platform = $client->WorkersForPlatform();
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `errors` | `array` | Yes |  |
| `messages` | `array` | Yes |  |
| `result` | `array` | Yes | A secret value accessible through a binding. |
| `success` | `bool` | Yes | Whether the API call was successful. |

### Field Usage by Operation

| Field | load | list | update |
| --- | --- | --- | --- |
| `errors` | - | - | - |
| `messages` | - | - | - |
| `result` | - | Yes | - |
| `success` | - | - | - |

### Operations

#### `list(?array $reqmatch = null, ?array $ctrl = null): mixed`

List entities matching the given criteria (call with no argument to list all). Returns an array. Throws on error.

```php
$results = $client->WorkersForPlatform()->list();
```

#### `load(array $reqmatch, ?array $ctrl = null): mixed`

Load a single entity matching the given criteria. Throws on error.

```php
$result = $client->WorkersForPlatform()->load(["account_id" => "account_id", "namespace_id" => "namespace_id"]);
```

#### `update(array $reqdata, ?array $ctrl = null): mixed`

Update an existing entity. The data must include the entity `id`. Throws on error.

```php
$result = $client->WorkersForPlatform()->update([
  "account_id" => "account_id",
  "namespace_id" => "namespace_id",
  "script_name" => "script_name",
  // Fields to update
]);
```

### Common Methods

#### `data_get(): array`

Get the entity data. Returns a copy of the current data.

#### `data_set($data): void`

Set the entity data.

#### `match_get(): array`

Get the entity match criteria.

#### `match_set($match): void`

Set the entity match criteria.

#### `make(): WorkersForPlatformEntity`

Create a new `WorkersForPlatformEntity` instance with the same client and
options.

#### `get_name(): string`

Return the entity name.


---

## WorkersKvApiResponseCommonNoResultEntity

```php
$workers_kv_api_response_common_no_result = $client->WorkersKvApiResponseCommonNoResult();
```

### Operations

#### `remove(array $reqmatch, ?array $ctrl = null): mixed`

Remove the entity matching the given criteria. Throws on error.

```php
$result = $client->WorkersKvApiResponseCommonNoResult()->remove(["account_id" => "account_id", "namespace_id" => "namespace_id"]);
```

#### `update(array $reqdata, ?array $ctrl = null): mixed`

Update an existing entity. The data must include the entity `id`. Throws on error.

```php
$result = $client->WorkersKvApiResponseCommonNoResult()->update([
  "account_id" => "account_id",
  "key_name" => "key_name",
  "namespace_id" => "namespace_id",
  // Fields to update
]);
```

### Common Methods

#### `data_get(): array`

Get the entity data. Returns a copy of the current data.

#### `data_set($data): void`

Set the entity data.

#### `match_get(): array`

Get the entity match criteria.

#### `match_set($match): void`

Set the entity match criteria.

#### `make(): WorkersKvApiResponseCommonNoResultEntity`

Create a new `WorkersKvApiResponseCommonNoResultEntity` instance with the same client and
options.

#### `get_name(): string`

Return the entity name.


---

## WorkersKvNamespaceEntity

```php
$workers_kv_namespace = $client->WorkersKvNamespace();
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `errors` | `array` | Yes |  |
| `id` | `string` | No |  |
| `jurisdiction` | `string` | No | Specify the jurisdiction to restrict the KV namespace to durably store data within. |
| `keys` | `array` | Yes | Array of keys to retrieve (maximum of 100). |
| `messages` | `array` | Yes |  |
| `result` | `mixed` | No |  |
| `result_info` | `array` | No |  |
| `success` | `bool` | Yes | Whether the API call was successful. |
| `title` | `string` | Yes | Human-readable string name for a Workers KV namespace. |
| `type` | `string` | No | Return values as strings with `text`, or parse stored JSON values with `json`. |
| `withMetadata` | `bool` | No | Whether to include metadata in the response. |

### Field Usage by Operation

| Field | load | list | create | update | remove |
| --- | --- | --- | --- | --- | --- |
| `errors` | - | - | - | - | - |
| `id` | - | - | - | - | - |
| `jurisdiction` | - | - | - | - | - |
| `keys` | - | - | - | - | - |
| `messages` | - | - | - | - | - |
| `result` | Yes | - | - | - | - |
| `result_info` | - | - | - | - | - |
| `success` | - | - | - | - | - |
| `title` | - | - | - | - | - |
| `type` | - | - | - | - | - |
| `withMetadata` | - | - | - | - | - |

### Operations

#### `create(array $reqdata, ?array $ctrl = null): mixed`

Create a new entity with the given data. Throws on error.

```php
$result = $client->WorkersKvNamespace()->create([
  "account_id" => null, // string
  "errors" => null, // array
  "keys" => null, // array
  "messages" => null, // array
  "success" => null, // bool
  "title" => null, // string
]);
```

#### `list(?array $reqmatch = null, ?array $ctrl = null): mixed`

List entities matching the given criteria (call with no argument to list all). Returns an array. Throws on error.

```php
$results = $client->WorkersKvNamespace()->list();
```

#### `load(array $reqmatch, ?array $ctrl = null): mixed`

Load a single entity matching the given criteria. Throws on error.

```php
$result = $client->WorkersKvNamespace()->load(["id" => "workers_kv_namespace_id", "account_id" => "account_id"]);
```

#### `remove(array $reqmatch, ?array $ctrl = null): mixed`

Remove the entity matching the given criteria. Throws on error.

```php
$result = $client->WorkersKvNamespace()->remove(["account_id" => "account_id", "namespace_id" => "namespace_id"]);
```

#### `update(array $reqdata, ?array $ctrl = null): mixed`

Update an existing entity. The data must include the entity `id`. Throws on error.

```php
$result = $client->WorkersKvNamespace()->update([
  "id" => "workers_kv_namespace_id",
  "account_id" => "account_id",
  // Fields to update
]);
```

### Common Methods

#### `data_get(): array`

Get the entity data. Returns a copy of the current data.

#### `data_set($data): void`

Set the entity data.

#### `match_get(): array`

Get the entity match criteria.

#### `match_set($match): void`

Set the entity match criteria.

#### `make(): WorkersKvNamespaceEntity`

Create a new `WorkersKvNamespaceEntity` instance with the same client and
options.

#### `get_name(): string`

Return the entity name.


---

## WorkersNamespaceListEntity

```php
$workers_namespace_list = $client->WorkersNamespaceList();
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `errors` | `array` | Yes |  |
| `messages` | `array` | Yes |  |
| `result` | `array` | No |  |
| `success` | `bool` | Yes | Whether the API call was successful. |

### Operations

#### `list(?array $reqmatch = null, ?array $ctrl = null): mixed`

List entities matching the given criteria (call with no argument to list all). Returns an array. Throws on error.

```php
$results = $client->WorkersNamespaceList()->list();
```

### Common Methods

#### `data_get(): array`

Get the entity data. Returns a copy of the current data.

#### `data_set($data): void`

Set the entity data.

#### `match_get(): array`

Get the entity match criteria.

#### `match_set($match): void`

Set the entity match criteria.

#### `make(): WorkersNamespaceListEntity`

Create a new `WorkersNamespaceListEntity` instance with the same client and
options.

#### `get_name(): string`

Return the entity name.


---

## WorkersNamespaceScriptDeleteBulkEntity

```php
$workers_namespace_script_delete_bulk = $client->WorkersNamespaceScriptDeleteBulk();
```

### Operations

#### `remove(array $reqmatch, ?array $ctrl = null): mixed`

Remove the entity matching the given criteria. Throws on error.

```php
$result = $client->WorkersNamespaceScriptDeleteBulk()->remove(["account_id" => "account_id", "dispatch_namespace" => "dispatch_namespace", "tag" => "tag"]);
```

### Common Methods

#### `data_get(): array`

Get the entity data. Returns a copy of the current data.

#### `data_set($data): void`

Set the entity data.

#### `match_get(): array`

Get the entity match criteria.

#### `match_set($match): void`

Set the entity match criteria.

#### `make(): WorkersNamespaceScriptDeleteBulkEntity`

Create a new `WorkersNamespaceScriptDeleteBulkEntity` instance with the same client and
options.

#### `get_name(): string`

Return the entity name.


---

## WorkersNamespaceScriptResponseSingleEntity

```php
$workers_namespace_script_response_single = $client->WorkersNamespaceScriptResponseSingle();
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `errors` | `array` | Yes |  |
| `messages` | `array` | Yes |  |
| `result` | `array` | Yes | Details about a worker uploaded to a Workers for Platforms namespace. |
| `success` | `bool` | Yes | Whether the API call was successful. |

### Operations

#### `load(array $reqmatch, ?array $ctrl = null): mixed`

Load a single entity matching the given criteria. Throws on error.

```php
$result = $client->WorkersNamespaceScriptResponseSingle()->load(["account_id" => "account_id", "namespace_id" => "namespace_id", "script_name" => "script_name"]);
```

#### `update(array $reqdata, ?array $ctrl = null): mixed`

Update an existing entity. The data must include the entity `id`. Throws on error.

```php
$result = $client->WorkersNamespaceScriptResponseSingle()->update([
  "account_id" => "account_id",
  "namespace_id" => "namespace_id",
  "script_name" => "script_name",
  // Fields to update
]);
```

### Common Methods

#### `data_get(): array`

Get the entity data. Returns a copy of the current data.

#### `data_set($data): void`

Set the entity data.

#### `match_get(): array`

Get the entity match criteria.

#### `match_set($match): void`

Set the entity match criteria.

#### `make(): WorkersNamespaceScriptResponseSingleEntity`

Create a new `WorkersNamespaceScriptResponseSingleEntity` instance with the same client and
options.

#### `get_name(): string`

Return the entity name.


---

## WorkersNamespaceSingleEntity

```php
$workers_namespace_single = $client->WorkersNamespaceSingle();
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `errors` | `array` | Yes |  |
| `messages` | `array` | Yes |  |
| `name` | `string` | No | The name of the dispatch namespace. |
| `result` | `array` | No |  |
| `success` | `bool` | Yes | Whether the API call was successful. |
| `trusted_workers` | `bool` | No | Whether the Workers in the namespace are executed in a "trusted" manner. |

### Operations

#### `create(array $reqdata, ?array $ctrl = null): mixed`

Create a new entity with the given data. Throws on error.

```php
$result = $client->WorkersNamespaceSingle()->create([
  "account_id" => null, // string
  "errors" => null, // array
  "messages" => null, // array
  "success" => null, // bool
]);
```

#### `load(array $reqmatch, ?array $ctrl = null): mixed`

Load a single entity matching the given criteria. Throws on error.

```php
$result = $client->WorkersNamespaceSingle()->load(["account_id" => "account_id", "dispatch_namespace" => "dispatch_namespace"]);
```

#### `update(array $reqdata, ?array $ctrl = null): mixed`

Update an existing entity. The data must include the entity `id`. Throws on error.

```php
$result = $client->WorkersNamespaceSingle()->update([
  "account_id" => "account_id",
  "dispatch_namespace" => "dispatch_namespace",
  // Fields to update
]);
```

### Common Methods

#### `data_get(): array`

Get the entity data. Returns a copy of the current data.

#### `data_set($data): void`

Set the entity data.

#### `match_get(): array`

Get the entity match criteria.

#### `match_set($match): void`

Set the entity match criteria.

#### `make(): WorkersNamespaceSingleEntity`

Create a new `WorkersNamespaceSingleEntity` instance with the same client and
options.

#### `get_name(): string`

Return the entity name.


---

## WorkersPipelinesOtherEntity

```php
$workers_pipelines_other = $client->WorkersPipelinesOther();
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `config` | `mixed` | No | Defines the configuration of the R2 Sink. |
| `created_at` | `string` | Yes |  |
| `destination` | `array` | Yes |  |
| `endpoint` | `string` | Yes | Indicates the endpoint URL to send traffic. |
| `failure_reason` | `string` | No | Indicates the reason for the failure of the Pipeline. |
| `format` | `mixed` | No | Defines the output data format of a sink. |
| `graph` | `array` | Yes | Indicates the processing flow to implement the SQL. |
| `http` | `array` | Yes |  |
| `id` | `string` | Yes | Indicates a unique identifier for this pipeline. |
| `modified_at` | `string` | Yes |  |
| `name` | `string` | Yes | Indicates the name of the Pipeline. |
| `schema` | `array` | No | Defines the schema of the events in the data stream. |
| `source` | `array` | Yes |  |
| `sql` | `string` | Yes | Specifies SQL for the Pipeline processing flow. |
| `status` | `string` | Yes | Indicates the current status of the Pipeline. |
| `tables` | `array` | Yes | List of streams and sinks used by this pipeline. |
| `type` | `string` | Yes | Specifies the type of sink. |
| `version` | `float` | Yes | Indicates the version number of last saved configuration. |
| `worker_binding` | `array` | Yes |  |

### Field Usage by Operation

| Field | load | list | create | update | remove |
| --- | --- | --- | --- | --- | --- |
| `config` | - | - | - | - | - |
| `created_at` | - | - | - | - | - |
| `destination` | - | - | - | - | - |
| `endpoint` | Yes | Yes | Yes | - | - |
| `failure_reason` | - | - | - | - | - |
| `format` | - | - | - | - | - |
| `graph` | - | - | - | - | - |
| `http` | - | - | - | - | - |
| `id` | - | - | - | - | - |
| `modified_at` | - | - | - | - | - |
| `name` | - | - | - | - | - |
| `schema` | - | - | - | - | - |
| `source` | - | - | - | - | - |
| `sql` | - | - | - | - | - |
| `status` | - | - | - | - | - |
| `tables` | - | - | - | - | - |
| `type` | - | - | - | - | - |
| `version` | - | - | - | - | - |
| `worker_binding` | - | - | - | - | - |

### Operations

#### `create(array $reqdata, ?array $ctrl = null): mixed`

Create a new entity with the given data. Throws on error.

```php
$result = $client->WorkersPipelinesOther()->create([
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

#### `list(?array $reqmatch = null, ?array $ctrl = null): mixed`

List entities matching the given criteria (call with no argument to list all). Returns an array. Throws on error.

```php
$results = $client->WorkersPipelinesOther()->list();
```

#### `load(array $reqmatch, ?array $ctrl = null): mixed`

Load a single entity matching the given criteria. Throws on error.

```php
$result = $client->WorkersPipelinesOther()->load(["account_id" => "account_id"]);
```

#### `remove(array $reqmatch, ?array $ctrl = null): mixed`

Remove the entity matching the given criteria. Throws on error.

```php
$result = $client->WorkersPipelinesOther()->remove(["account_id" => "account_id"]);
```

#### `update(array $reqdata, ?array $ctrl = null): mixed`

Update an existing entity. The data must include the entity `id`. Throws on error.

```php
$result = $client->WorkersPipelinesOther()->update([
  "account_id" => "account_id",
  "pipeline_name" => "pipeline_name",
  // Fields to update
]);
```

### Common Methods

#### `data_get(): array`

Get the entity data. Returns a copy of the current data.

#### `data_set($data): void`

Set the entity data.

#### `match_get(): array`

Get the entity match criteria.

#### `match_set($match): void`

Set the entity match criteria.

#### `make(): WorkersPipelinesOtherEntity`

Create a new `WorkersPipelinesOtherEntity` instance with the same client and
options.

#### `get_name(): string`

Return the entity name.


---

## WorkersScriptAndVersionSettingEntity

```php
$workers_script_and_version_setting = $client->WorkersScriptAndVersionSetting();
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `errors` | `array` | Yes |  |
| `messages` | `array` | Yes |  |
| `result` | `array` | Yes |  |
| `success` | `bool` | Yes | Whether the API call was successful. |

### Operations

#### `list(?array $reqmatch = null, ?array $ctrl = null): mixed`

List entities matching the given criteria (call with no argument to list all). Returns an array. Throws on error.

```php
$results = $client->WorkersScriptAndVersionSetting()->list();
```

#### `update(array $reqdata, ?array $ctrl = null): mixed`

Update an existing entity. The data must include the entity `id`. Throws on error.

```php
$result = $client->WorkersScriptAndVersionSetting()->update([
  "account_id" => "account_id",
  "script_name" => "script_name",
  // Fields to update
]);
```

### Common Methods

#### `data_get(): array`

Get the entity data. Returns a copy of the current data.

#### `data_set($data): void`

Set the entity data.

#### `match_get(): array`

Get the entity match criteria.

#### `match_set($match): void`

Set the entity match criteria.

#### `make(): WorkersScriptAndVersionSettingEntity`

Create a new `WorkersScriptAndVersionSettingEntity` instance with the same client and
options.

#### `get_name(): string`

Return the entity name.


---

## WorkersScriptResponseCollectionEntity

```php
$workers_script_response_collection = $client->WorkersScriptResponseCollection();
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `errors` | `array` | Yes |  |
| `messages` | `array` | Yes |  |
| `result` | `array` | Yes |  |
| `success` | `bool` | Yes | Whether the API call was successful. |

### Operations

#### `list(?array $reqmatch = null, ?array $ctrl = null): mixed`

List entities matching the given criteria (call with no argument to list all). Returns an array. Throws on error.

```php
$results = $client->WorkersScriptResponseCollection()->list();
```

### Common Methods

#### `data_get(): array`

Get the entity data. Returns a copy of the current data.

#### `data_set($data): void`

Set the entity data.

#### `match_get(): array`

Get the entity match criteria.

#### `match_set($match): void`

Set the entity match criteria.

#### `make(): WorkersScriptResponseCollectionEntity`

Create a new `WorkersScriptResponseCollectionEntity` instance with the same client and
options.

#### `get_name(): string`

Return the entity name.


---

## WorkersScriptResponseSingleEntity

```php
$workers_script_response_single = $client->WorkersScriptResponseSingle();
```

### Operations

#### `update(array $reqdata, ?array $ctrl = null): mixed`

Update an existing entity. The data must include the entity `id`. Throws on error.

```php
$result = $client->WorkersScriptResponseSingle()->update([
  "account_id" => "account_id",
  // Fields to update
]);
```

### Common Methods

#### `data_get(): array`

Get the entity data. Returns a copy of the current data.

#### `data_set($data): void`

Set the entity data.

#### `match_get(): array`

Get the entity match criteria.

#### `match_set($match): void`

Set the entity match criteria.

#### `make(): WorkersScriptResponseSingleEntity`

Create a new `WorkersScriptResponseSingleEntity` instance with the same client and
options.

#### `get_name(): string`

Return the entity name.


---

## WorkersSmartPlacementEntity

```php
$workers_smart_placement = $client->WorkersSmartPlacement();
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `errors` | `array` | Yes |  |
| `messages` | `array` | Yes |  |
| `result` | `array` | Yes |  |
| `success` | `bool` | Yes | Whether the API call was successful. |

### Operations

#### `list(?array $reqmatch = null, ?array $ctrl = null): mixed`

List entities matching the given criteria (call with no argument to list all). Returns an array. Throws on error.

```php
$results = $client->WorkersSmartPlacement()->list();
```

### Common Methods

#### `data_get(): array`

Get the entity data. Returns a copy of the current data.

#### `data_set($data): void`

Set the entity data.

#### `match_get(): array`

Get the entity match criteria.

#### `match_set($match): void`

Set the entity match criteria.

#### `make(): WorkersSmartPlacementEntity`

Create a new `WorkersSmartPlacementEntity` instance with the same client and
options.

#### `get_name(): string`

Return the entity name.


---

## WorkersUsageModelEntity

```php
$workers_usage_model = $client->WorkersUsageModel();
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `errors` | `array` | Yes |  |
| `messages` | `array` | Yes |  |
| `result` | `array` | Yes |  |
| `success` | `bool` | Yes | Whether the API call was successful. |
| `usage_model` | `string` | No | Usage model for the Worker invocations. |
| `user_limits` | `array` | No | User-defined resource limits for Workers with standard usage model. |

### Operations

#### `list(?array $reqmatch = null, ?array $ctrl = null): mixed`

List entities matching the given criteria (call with no argument to list all). Returns an array. Throws on error.

```php
$results = $client->WorkersUsageModel()->list();
```

#### `update(array $reqdata, ?array $ctrl = null): mixed`

Update an existing entity. The data must include the entity `id`. Throws on error.

```php
$result = $client->WorkersUsageModel()->update([
  "account_id" => "account_id",
  "script_name" => "script_name",
  // Fields to update
]);
```

### Common Methods

#### `data_get(): array`

Get the entity data. Returns a copy of the current data.

#### `data_set($data): void`

Set the entity data.

#### `match_get(): array`

Get the entity match criteria.

#### `match_set($match): void`

Set the entity match criteria.

#### `make(): WorkersUsageModelEntity`

Create a new `WorkersUsageModelEntity` instance with the same client and
options.

#### `get_name(): string`

Return the entity name.


---

## WorkersVersionsListEntity

```php
$workers_versions_list = $client->WorkersVersionsList();
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `errors` | `array` | Yes |  |
| `messages` | `array` | Yes |  |
| `result` | `array` | Yes |  |
| `success` | `bool` | Yes | Whether the API call was successful. |

### Operations

#### `list(?array $reqmatch = null, ?array $ctrl = null): mixed`

List entities matching the given criteria (call with no argument to list all). Returns an array. Throws on error.

```php
$results = $client->WorkersVersionsList()->list();
```

### Common Methods

#### `data_get(): array`

Get the entity data. Returns a copy of the current data.

#### `data_set($data): void`

Set the entity data.

#### `match_get(): array`

Get the entity match criteria.

#### `match_set($match): void`

Set the entity match criteria.

#### `make(): WorkersVersionsListEntity`

Create a new `WorkersVersionsListEntity` instance with the same client and
options.

#### `get_name(): string`

Return the entity name.


---

## WorkersVersionsSingleEntity

```php
$workers_versions_single = $client->WorkersVersionsSingle();
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `errors` | `array` | Yes |  |
| `messages` | `array` | Yes |  |
| `result` | `mixed` | Yes |  |
| `success` | `bool` | Yes | Whether the API call was successful. |

### Operations

#### `load(array $reqmatch, ?array $ctrl = null): mixed`

Load a single entity matching the given criteria. Throws on error.

```php
$result = $client->WorkersVersionsSingle()->load(["account_id" => "account_id", "script_id" => "script_id", "version_id" => "version_id"]);
```

### Common Methods

#### `data_get(): array`

Get the entity data. Returns a copy of the current data.

#### `data_set($data): void`

Set the entity data.

#### `match_get(): array`

Get the entity match criteria.

#### `match_set($match): void`

Set the entity match criteria.

#### `make(): WorkersVersionsSingleEntity`

Create a new `WorkersVersionsSingleEntity` instance with the same client and
options.

#### `get_name(): string`

Return the entity name.


---

## WorkersVersionsUploadEntity

```php
$workers_versions_upload = $client->WorkersVersionsUpload();
```

### Operations

#### `create(array $reqdata, ?array $ctrl = null): mixed`

Create a new entity with the given data. Throws on error.

```php
$result = $client->WorkersVersionsUpload()->create([
  "account_id" => null, // string
  "script_name" => null, // string
]);
```

### Common Methods

#### `data_get(): array`

Get the entity data. Returns a copy of the current data.

#### `data_set($data): void`

Set the entity data.

#### `match_get(): array`

Get the entity match criteria.

#### `match_set($match): void`

Set the entity match criteria.

#### `make(): WorkersVersionsUploadEntity`

Create a new `WorkersVersionsUploadEntity` instance with the same client and
options.

#### `get_name(): string`

Return the entity name.


---

## WorkflowEntity

```php
$workflow = $client->Workflow();
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `class_name` | `string` | Yes |  |
| `concurrency` | `array` | No |  |
| `default_retention` | `array` | No | Default retention applied to instances of this version when they do not set their own retention. |
| `errors` | `array` | Yes |  |
| `id` | `string` | No |  |
| `instances` | `array` | Yes |  |
| `limits` | `array` | No |  |
| `messages` | `array` | Yes |  |
| `result` | `array` | Yes |  |
| `result_info` | `array` | Yes |  |
| `schedules` | `array` | No |  |
| `script_name` | `string` | Yes |  |
| `success` | `bool` | Yes |  |

### Operations

#### `create(array $reqdata, ?array $ctrl = null): mixed`

Create a new entity with the given data. Throws on error.

```php
$result = $client->Workflow()->create([
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

#### `list(?array $reqmatch = null, ?array $ctrl = null): mixed`

List entities matching the given criteria (call with no argument to list all). Returns an array. Throws on error.

```php
$results = $client->Workflow()->list();
```

#### `load(array $reqmatch, ?array $ctrl = null): mixed`

Load a single entity matching the given criteria. Throws on error.

```php
$result = $client->Workflow()->load(["id" => "workflow_id", "account_id" => "account_id"]);
```

#### `remove(array $reqmatch, ?array $ctrl = null): mixed`

Remove the entity matching the given criteria. Throws on error.

```php
$result = $client->Workflow()->remove(["id" => "workflow_id", "account_id" => "account_id"]);
```

#### `update(array $reqdata, ?array $ctrl = null): mixed`

Update an existing entity. The data must include the entity `id`. Throws on error.

```php
$result = $client->Workflow()->update([
  "id" => "workflow_id",
  "account_id" => "account_id",
  // Fields to update
]);
```

### Common Methods

#### `data_get(): array`

Get the entity data. Returns a copy of the current data.

#### `data_set($data): void`

Set the entity data.

#### `match_get(): array`

Get the entity match criteria.

#### `match_set($match): void`

Set the entity match criteria.

#### `make(): WorkflowEntity`

Create a new `WorkflowEntity` instance with the same client and
options.

#### `get_name(): string`

Return the entity name.


---

## Features

| Feature | Version | Description |
| --- | --- | --- |
| `test` | 0.0.1 | Test transport |


Features are activated via the `feature` option:

```php
$client = new CloudflareWorkersSDK([
  "feature" => [
    "test" => ["active" => true],
  ],
]);
```


### Configuring features

Each feature is inactive until switched on, and an SDK with no feature
configured does no feature work at all. Every option below keeps its default
unless you name it.

The array form of \`feature\` is significant: several features wrap the
transport, and the order you list them in is the order they nest.

#### `test`

Test transport.

**Configuration**

| Option | Default |
|---|---|
| `active` | `false` |

| Option | Type |
|---|---|
| `entity` | map |
| `net` | map |

These take no default: the feature behaves one way when you supply them and
another when you do not.

**Usage**

Set `feature.test.active` to true in the client options, and override any option above in the same entry. Every option keeps
its default unless you name it.

**Considerations**

- Attaches to pipeline hooks, not the transport, so activation order does
  not change what it observes.
- Installs the BASE transport that the wrapping features wrap, so it must be
  activated before them.
- Inactive by default: leaving it out costs nothing at runtime.

