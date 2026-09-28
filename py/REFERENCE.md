# CloudflareWorkers Python SDK Reference

Complete API reference for the CloudflareWorkers Python SDK.


## CloudflareWorkersSDK

### Constructor

```python
from cloudflareworkers_sdk import CloudflareWorkersSDK

client = CloudflareWorkersSDK(options)
```

Create a new SDK client instance.

**Parameters:**

| Name | Type | Description |
| --- | --- | --- |
| `options` | `dict` | SDK configuration options. |
| `options["apikey"]` | `str` | API key for authentication. |
| `options["base"]` | `str` | Base URL for API requests. |
| `options["prefix"]` | `str` | URL prefix appended after base. |
| `options["suffix"]` | `str` | URL suffix appended after path. |
| `options["headers"]` | `dict` | Custom headers for all requests. |
| `options["feature"]` | `dict` | Feature configuration. |
| `options["system"]` | `dict` | System overrides (e.g. custom fetch). |


### Static Methods

#### `CloudflareWorkersSDK.test(testopts=None, sdkopts=None)`

Create a test client with mock features active. Both arguments may be `None`.

```python
client = CloudflareWorkersSDK.test()
```


### Instance Methods

#### `Account(data=None)`

Create a new `AccountEntity` instance. Pass `None` for no initial data.

#### `Application(data=None)`

Create a new `ApplicationEntity` instance. Pass `None` for no initial data.

#### `Brapi(data=None)`

Create a new `BrapiEntity` instance. Pass `None` for no initial data.

#### `Build(data=None)`

Create a new `BuildEntity` instance. Pass `None` for no initial data.

#### `BuildToken(data=None)`

Create a new `BuildTokenEntity` instance. Pass `None` for no initial data.

#### `BuildsApi(data=None)`

Create a new `BuildsApiEntity` instance. Pass `None` for no initial data.

#### `Connection(data=None)`

Create a new `ConnectionEntity` instance. Pass `None` for no initial data.

#### `ContainerImage(data=None)`

Create a new `ContainerImageEntity` instance. Pass `None` for no initial data.

#### `ContainerInstance(data=None)`

Create a new `ContainerInstanceEntity` instance. Pass `None` for no initial data.

#### `DeployHook(data=None)`

Create a new `DeployHookEntity` instance. Pass `None` for no initial data.

#### `Deployment(data=None)`

Create a new `DeploymentEntity` instance. Pass `None` for no initial data.

#### `Destination(data=None)`

Create a new `DestinationEntity` instance. Pass `None` for no initial data.

#### `Domain(data=None)`

Create a new `DomainEntity` instance. Pass `None` for no initial data.

#### `DurableObjectsNamespace(data=None)`

Create a new `DurableObjectsNamespaceEntity` instance. Pass `None` for no initial data.

#### `EnvironmentVariable(data=None)`

Create a new `EnvironmentVariableEntity` instance. Pass `None` for no initial data.

#### `GitHubIntegration(data=None)`

Create a new `GitHubIntegrationEntity` instance. Pass `None` for no initial data.

#### `Hyperdrive(data=None)`

Create a new `HyperdriveEntity` instance. Pass `None` for no initial data.

#### `ImageRegistry(data=None)`

Create a new `ImageRegistryEntity` instance. Pass `None` for no initial data.

#### `Issue(data=None)`

Create a new `IssueEntity` instance. Pass `None` for no initial data.

#### `Key(data=None)`

Create a new `KeyEntity` instance. Pass `None` for no initial data.

#### `LiveTail(data=None)`

Create a new `LiveTailEntity` instance. Pass `None` for no initial data.

#### `MetricsExport(data=None)`

Create a new `MetricsExportEntity` instance. Pass `None` for no initial data.

#### `Namespace(data=None)`

Create a new `NamespaceEntity` instance. Pass `None` for no initial data.

#### `Preview(data=None)`

Create a new `PreviewEntity` instance. Pass `None` for no initial data.

#### `PreviewDeployment(data=None)`

Create a new `PreviewDeploymentEntity` instance. Pass `None` for no initial data.

#### `Query(data=None)`

Create a new `QueryEntity` instance. Pass `None` for no initial data.

#### `RepositoryConnection(data=None)`

Create a new `RepositoryConnectionEntity` instance. Pass `None` for no initial data.

#### `Rollout(data=None)`

Create a new `RolloutEntity` instance. Pass `None` for no initial data.

#### `SavedQuery(data=None)`

Create a new `SavedQueryEntity` instance. Pass `None` for no initial data.

#### `Script(data=None)`

Create a new `ScriptEntity` instance. Pass `None` for no initial data.

#### `ScriptSetting(data=None)`

Create a new `ScriptSettingEntity` instance. Pass `None` for no initial data.

#### `Secret(data=None)`

Create a new `SecretEntity` instance. Pass `None` for no initial data.

#### `SecretsStoreDelete(data=None)`

Create a new `SecretsStoreDeleteEntity` instance. Pass `None` for no initial data.

#### `SecretsStoreQuota(data=None)`

Create a new `SecretsStoreQuotaEntity` instance. Pass `None` for no initial data.

#### `SecretsStoreSecret(data=None)`

Create a new `SecretsStoreSecretEntity` instance. Pass `None` for no initial data.

#### `SecretsStoreStore(data=None)`

Create a new `SecretsStoreStoreEntity` instance. Pass `None` for no initial data.

#### `SecretsStoreStoresResponseCollection(data=None)`

Create a new `SecretsStoreStoresResponseCollectionEntity` instance. Pass `None` for no initial data.

#### `Setting(data=None)`

Create a new `SettingEntity` instance. Pass `None` for no initial data.

#### `Shared(data=None)`

Create a new `SharedEntity` instance. Pass `None` for no initial data.

#### `Tail(data=None)`

Create a new `TailEntity` instance. Pass `None` for no initial data.

#### `Token(data=None)`

Create a new `TokenEntity` instance. Pass `None` for no initial data.

#### `Trigger(data=None)`

Create a new `TriggerEntity` instance. Pass `None` for no initial data.

#### `Usage(data=None)`

Create a new `UsageEntity` instance. Pass `None` for no initial data.

#### `Value(data=None)`

Create a new `ValueEntity` instance. Pass `None` for no initial data.

#### `Version(data=None)`

Create a new `VersionEntity` instance. Pass `None` for no initial data.

#### `Worker(data=None)`

Create a new `WorkerEntity` instance. Pass `None` for no initial data.

#### `WorkerCronTrigger(data=None)`

Create a new `WorkerCronTriggerEntity` instance. Pass `None` for no initial data.

#### `WorkerDeployment(data=None)`

Create a new `WorkerDeploymentEntity` instance. Pass `None` for no initial data.

#### `WorkerEnvironment(data=None)`

Create a new `WorkerEnvironmentEntity` instance. Pass `None` for no initial data.

#### `WorkerRoute(data=None)`

Create a new `WorkerRouteEntity` instance. Pass `None` for no initial data.

#### `WorkerScript(data=None)`

Create a new `WorkerScriptEntity` instance. Pass `None` for no initial data.

#### `WorkerSubdomain(data=None)`

Create a new `WorkerSubdomainEntity` instance. Pass `None` for no initial data.

#### `WorkerTailLog(data=None)`

Create a new `WorkerTailLogEntity` instance. Pass `None` for no initial data.

#### `WorkersAccountSetting(data=None)`

Create a new `WorkersAccountSettingEntity` instance. Pass `None` for no initial data.

#### `WorkersApiResponseNullResult(data=None)`

Create a new `WorkersApiResponseNullResultEntity` instance. Pass `None` for no initial data.

#### `WorkersCompletedUploadAsset(data=None)`

Create a new `WorkersCompletedUploadAssetEntity` instance. Pass `None` for no initial data.

#### `WorkersCreateAssetsUploadSession(data=None)`

Create a new `WorkersCreateAssetsUploadSessionEntity` instance. Pass `None` for no initial data.

#### `WorkersForPlatform(data=None)`

Create a new `WorkersForPlatformEntity` instance. Pass `None` for no initial data.

#### `WorkersKvApiResponseCommonNoResult(data=None)`

Create a new `WorkersKvApiResponseCommonNoResultEntity` instance. Pass `None` for no initial data.

#### `WorkersKvNamespace(data=None)`

Create a new `WorkersKvNamespaceEntity` instance. Pass `None` for no initial data.

#### `WorkersNamespaceList(data=None)`

Create a new `WorkersNamespaceListEntity` instance. Pass `None` for no initial data.

#### `WorkersNamespaceScriptDeleteBulk(data=None)`

Create a new `WorkersNamespaceScriptDeleteBulkEntity` instance. Pass `None` for no initial data.

#### `WorkersNamespaceScriptResponseSingle(data=None)`

Create a new `WorkersNamespaceScriptResponseSingleEntity` instance. Pass `None` for no initial data.

#### `WorkersNamespaceSingle(data=None)`

Create a new `WorkersNamespaceSingleEntity` instance. Pass `None` for no initial data.

#### `WorkersPipelinesOther(data=None)`

Create a new `WorkersPipelinesOtherEntity` instance. Pass `None` for no initial data.

#### `WorkersScriptAndVersionSetting(data=None)`

Create a new `WorkersScriptAndVersionSettingEntity` instance. Pass `None` for no initial data.

#### `WorkersScriptResponseCollection(data=None)`

Create a new `WorkersScriptResponseCollectionEntity` instance. Pass `None` for no initial data.

#### `WorkersScriptResponseSingle(data=None)`

Create a new `WorkersScriptResponseSingleEntity` instance. Pass `None` for no initial data.

#### `WorkersSmartPlacement(data=None)`

Create a new `WorkersSmartPlacementEntity` instance. Pass `None` for no initial data.

#### `WorkersUsageModel(data=None)`

Create a new `WorkersUsageModelEntity` instance. Pass `None` for no initial data.

#### `WorkersVersionsList(data=None)`

Create a new `WorkersVersionsListEntity` instance. Pass `None` for no initial data.

#### `WorkersVersionsSingle(data=None)`

Create a new `WorkersVersionsSingleEntity` instance. Pass `None` for no initial data.

#### `WorkersVersionsUpload(data=None)`

Create a new `WorkersVersionsUploadEntity` instance. Pass `None` for no initial data.

#### `Workflow(data=None)`

Create a new `WorkflowEntity` instance. Pass `None` for no initial data.

#### `options_map() -> dict`

Return a deep copy of the current SDK options.

#### `get_utility() -> Utility`

Return a copy of the SDK utility object.

#### `direct(fetchargs=None) -> dict`

Make a direct HTTP request to any API endpoint. Returns a result `dict` with `ok`, `status`, `headers`, and `data` (or `err` on failure). This escape hatch never raises — branch on `result["ok"]`.

**Parameters:**

| Name | Type | Description |
| --- | --- | --- |
| `fetchargs["path"]` | `str` | URL path with optional `{param}` placeholders. |
| `fetchargs["method"]` | `str` | HTTP method (default: `"GET"`). |
| `fetchargs["params"]` | `dict` | Path parameter values. |
| `fetchargs["query"]` | `dict` | Query string parameters. |
| `fetchargs["headers"]` | `dict` | Request headers (merged with defaults). |
| `fetchargs["body"]` | `any` | Request body (dicts are JSON-serialized). |

**Returns:** `result_dict`

#### `prepare(fetchargs=None) -> dict`

Prepare a fetch definition without sending. Returns the `fetchdef` and raises on error.


---

## AccountEntity

```python
account = client.Account()
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `id` | `str` | No |  |

### Operations

#### `list(reqmatch=None, ctrl=None) -> list`

List entities matching the given criteria. The match is optional — call `list()` with no argument to list all records. Returns a list and raises on error.

```python
results = client.Account().list({"id": "example"})
for account in results:
    print(account)
```

### Common Methods

#### `data_get() -> dict`

Get the entity data.

#### `data_set(data)`

Set the entity data.

#### `match_get() -> dict`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make() -> Entity`

Create a new `AccountEntity` instance with the same options.

#### `get_name() -> str`

Return the entity name.


---

## ApplicationEntity

```python
application = client.Application()
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `configuration` | `dict` | No | Application configuration fields you can change without creating a rollout. |
| `constraints` | `dict` | No |  |
| `errors` | `list` | Yes |  |
| `id` | `str` | No |  |
| `max_instances` | `int` | No | Maximum number of instances that an autoscaling application can run. |
| `messages` | `list` | Yes |  |
| `observability` | `Any` | No | Top-level application observability settings. |
| `result` | `Any` | Yes | The public Containers API returns an application. |
| `result_info` | `dict` | Yes | Cursor pagination details for a v4 API list response. |
| `rollout_active_grace_period` | `int` | No | Grace period for active instances to stay alive before becoming eligible for shutdown signal due to a rollout, in seconds. |
| `success` | `bool` | Yes | Whether the API call was successful. |

### Operations

#### `create(reqdata, ctrl=None) -> dict`

Create a new entity with the given data. Returns the created entity data and raises on error.

```python
result = client.Application().create({
    "account_id": "example_account_id",  # str
    "errors": [],  # list
    "messages": [],  # list
    "result": "example_result",  # Any
    "result_info": {},  # dict
    "success": True,  # bool
})
```

#### `list(reqmatch=None, ctrl=None) -> list`

List entities matching the given criteria. The match is optional — call `list()` with no argument to list all records. Returns a list and raises on error.

```python
results = client.Application().list({"account_id": "example"})
for application in results:
    print(application)
```

#### `load(reqmatch, ctrl=None) -> dict`

Load a single entity matching the given criteria. Returns the entity data and raises on error.

```python
result = client.Application().load({"id": "application_id", "account_id": "account_id"})
```

#### `remove(reqmatch, ctrl=None) -> dict`

Remove the entity matching the given criteria. Raises on error.

```python
result = client.Application().remove({"id": "application_id", "account_id": "account_id"})
```

#### `update(reqdata, ctrl=None) -> dict`

Update an existing entity. The data must include the entity `id`. Returns the updated entity data and raises on error.

```python
result = client.Application().update({
    "id": "application_id",
    "account_id": "account_id",
    # Fields to update
})
```

### Common Methods

#### `data_get() -> dict`

Get the entity data.

#### `data_set(data)`

Set the entity data.

#### `match_get() -> dict`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make() -> Entity`

Create a new `ApplicationEntity` instance with the same options.

#### `get_name() -> str`

Return the entity name.


---

## BrapiEntity

```python
brapi = client.Brapi()
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `Browser` | `str` | Yes | Browser name and version. |
| `ProtocolVersion` | `str` | Yes | Chrome DevTools Protocol version. |
| `UserAgent` | `str` | Yes | User agent string. |
| `V8Version` | `str` | Yes | V8 JavaScript engine version. |
| `WebKitVersion` | `str` | Yes | WebKit version. |
| `actionTimeout` | `float` | No | The maximum duration allowed for the browser action to complete after the page has loaded (such as taking screenshots, extracting content, or generating PDFs). |
| `addScriptTag` | `list` | No | Adds a script element into the page with the desired URL or content. |
| `addStyleTag` | `list` | No | Adds a `<link rel="stylesheet">` tag into the page with the desired URL or a `<style type="text/css">` tag with the content. |
| `allowRequestPattern` | `list` | No | Only allow requests that match the provided regex patterns, eg. |
| `allowResourceTypes` | `list` | No | Only allow requests that match the provided resource types, eg. |
| `authenticate` | `dict` | Yes | Provide credentials for HTTP authentication. |
| `bestAttempt` | `bool` | No | Attempt to proceed when 'awaited' events fail or timeout. |
| `closeReason` | `float` | No | Reason code for session closure. |
| `closeReasonText` | `str` | No | Human-readable close reason. |
| `commands` | `list` | No | Available commands. |
| `connectionEndTime` | `float` | No | Connection end time. |
| `connectionId` | `str` | No | Connection ID. |
| `connectionStartTime` | `float` | No | Connection start time. |
| `cookies` | `list` | No | Check [options](https://pptr.dev/api/puppeteer.page.setcookie). |
| `custom_ai` | `list` | No | Optional list of custom AI models to use for the request. |
| `dependencies` | `list` | No | Domain dependencies. |
| `description` | `str` | No | Target description. |
| `devtoolsFrontendUrl` | `str` | No | DevTools frontend URL. |
| `domain` | `str` | Yes | Domain name. |
| `elements` | `list` | Yes |  |
| `emulateMediaType` | `str` | No |  |
| `endTime` | `float` | No | Session end time. |
| `errors` | `list` | No |  |
| `events` | `list` | No | Available events. |
| `excludeExternalLinks` | `bool` | No |  |
| `experimental` | `bool` | No | Whether this domain is experimental. |
| `formats` | `list` | No |  |
| `gotoOptions` | `dict` | No | Check [options](https://pptr.dev/api/puppeteer.gotooptions). |
| `guardrails` | `dict` | No |  |
| `html` | `str` | No | Set the content of the page, eg: `<h1>Hello World!!</h1>`. |
| `id` | `str` | Yes | Target ID. |
| `interestingOnly` | `bool` | No |  |
| `lastUpdated` | `float` | No | Last updated timestamp. |
| `message` | `str` | Yes | Target activated. |
| `meta` | `dict` | Yes |  |
| `pdfOptions` | `dict` | No | Check [options](https://pptr.dev/api/puppeteer.pdfoptions). |
| `prompt` | `str` | No |  |
| `rejectRequestPattern` | `list` | No | Block undesired requests that match the provided regex patterns, eg. |
| `rejectResourceTypes` | `list` | No | Block undesired requests that match the provided resource types, eg. |
| `response_format` | `dict` | Yes |  |
| `result` | `dict` | Yes | HTML content. |
| `root` | `str` | No |  |
| `screenshotOptions` | `dict` | No | Check [options](https://pptr.dev/api/puppeteer.screenshotoptions). |
| `scrollPage` | `bool` | No |  |
| `selector` | `str` | No |  |
| `sessionId` | `str` | Yes | Session ID. |
| `setExtraHTTPHeaders` | `dict` | No |  |
| `setJavaScriptEnabled` | `bool` | No |  |
| `startTime` | `float` | No | Session start time. |
| `success` | `bool` | Yes | Response status. |
| `title` | `str` | No | Title of the target. |
| `type` | `str` | Yes | Target type (page, background_page, worker, etc.). |
| `types` | `list` | No | Type definitions. |
| `url` | `str` | Yes | URL of the target. |
| `userAgent` | `str` | No |  |
| `viewport` | `dict` | Yes | Check [options](https://pptr.dev/api/puppeteer.page.setviewport). |
| `visibleLinksOnly` | `bool` | No |  |
| `waitForSelector` | `dict` | Yes | Wait for the selector to appear in page. |
| `waitForTimeout` | `float` | No | Waits for a specified timeout before continuing. |
| `webSocketDebuggerUrl` | `str` | No | WebSocket URL for debugging this target. |

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

#### `create(reqdata, ctrl=None) -> dict`

Create a new entity with the given data. Returns the created entity data and raises on error.

```python
result = client.Brapi().create({
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

#### `list(reqmatch=None, ctrl=None) -> list`

List entities matching the given criteria. The match is optional — call `list()` with no argument to list all records. Returns a list and raises on error.

```python
results = client.Brapi().list({"account_id": "example"})
for brapi in results:
    print(brapi)
```

#### `load(reqmatch, ctrl=None) -> dict`

Load a single entity matching the given criteria. Returns the entity data and raises on error.

```python
result = client.Brapi().load({"account_id": "account_id"})
```

#### `remove(reqmatch, ctrl=None) -> dict`

Remove the entity matching the given criteria. Raises on error.

```python
result = client.Brapi().remove({"account_id": "account_id"})
```

#### `update(reqdata, ctrl=None) -> dict`

Update an existing entity. The data must include the entity `id`. Returns the updated entity data and raises on error.

```python
result = client.Brapi().update({
    "account_id": "account_id",
    "browser_id": "browser_id",
    # Fields to update
})
```

### Common Methods

#### `data_get() -> dict`

Get the entity data.

#### `data_set(data)`

Set the entity data.

#### `match_get() -> dict`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make() -> Entity`

Create a new `BrapiEntity` instance with the same options.

#### `get_name() -> str`

Return the entity name.


---

## BuildEntity

```python
build = client.Build()
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `errors` | `list` | Yes |  |
| `id` | `str` | No |  |
| `messages` | `list` | Yes |  |
| `result` | `dict` | Yes |  |
| `result_info` | `dict` | No |  |
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

#### `list(reqmatch=None, ctrl=None) -> list`

List entities matching the given criteria. The match is optional — call `list()` with no argument to list all records. Returns a list and raises on error.

```python
results = client.Build().list({"account_id": "example", "version_id": "example"})
for build in results:
    print(build)
```

#### `load(reqmatch, ctrl=None) -> dict`

Load a single entity matching the given criteria. Returns the entity data and raises on error.

```python
result = client.Build().load({"id": "build_id", "account_id": "account_id"})
```

#### `update(reqdata, ctrl=None) -> dict`

Update an existing entity. The data must include the entity `id`. Returns the updated entity data and raises on error.

```python
result = client.Build().update({
    "id": "build_id",
    "account_id": "account_id",
    # Fields to update
})
```

### Common Methods

#### `data_get() -> dict`

Get the entity data.

#### `data_set(data)`

Set the entity data.

#### `match_get() -> dict`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make() -> Entity`

Create a new `BuildEntity` instance with the same options.

#### `get_name() -> str`

Return the entity name.


---

## BuildTokenEntity

```python
build_token = client.BuildToken()
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `build_token_name` | `str` | Yes |  |
| `build_token_secret` | `str` | Yes |  |
| `cloudflare_token_id` | `str` | Yes |  |
| `errors` | `list` | Yes |  |
| `messages` | `list` | Yes |  |
| `result` | `dict` | Yes |  |
| `result_info` | `dict` | No |  |
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

#### `create(reqdata, ctrl=None) -> dict`

Create a new entity with the given data. Returns the created entity data and raises on error.

```python
result = client.BuildToken().create({
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

#### `list(reqmatch=None, ctrl=None) -> list`

List entities matching the given criteria. The match is optional — call `list()` with no argument to list all records. Returns a list and raises on error.

```python
results = client.BuildToken().list({"account_id": "example"})
for build_token in results:
    print(build_token)
```

### Common Methods

#### `data_get() -> dict`

Get the entity data.

#### `data_set(data)`

Set the entity data.

#### `match_get() -> dict`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make() -> Entity`

Create a new `BuildTokenEntity` instance with the same options.

#### `get_name() -> str`

Return the entity name.


---

## BuildsApiEntity

```python
builds_api = client.BuildsApi()
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `errors` | `list` | Yes |  |
| `messages` | `list` | Yes |  |
| `result` | `dict` | Yes |  |
| `result_info` | `dict` | No |  |
| `success` | `bool` | Yes |  |

### Operations

#### `create(reqdata, ctrl=None) -> dict`

Create a new entity with the given data. Returns the created entity data and raises on error.

```python
result = client.BuildsApi().create({
    "account_id": "example_account_id",  # str
    "trigger_id": "example_trigger_id",  # str
    "errors": [],  # list
    "messages": [],  # list
    "result": {},  # dict
    "success": True,  # bool
})
```

#### `remove(reqmatch, ctrl=None) -> dict`

Remove the entity matching the given criteria. Raises on error.

```python
result = client.BuildsApi().remove({"account_id": "account_id", "environment_variable_key": "environment_variable_key", "trigger_id": "trigger_id"})
```

### Common Methods

#### `data_get() -> dict`

Get the entity data.

#### `data_set(data)`

Set the entity data.

#### `match_get() -> dict`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make() -> Entity`

Create a new `BuildsApiEntity` instance with the same options.

#### `get_name() -> str`

Return the entity name.


---

## ConnectionEntity

```python
connection = client.Connection()
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `id` | `str` | No |  |

### Operations

#### `remove(reqmatch, ctrl=None) -> dict`

Remove the entity matching the given criteria. Raises on error.

```python
result = client.Connection().remove({"account_id": "account_id", "id": "id"})
```

### Common Methods

#### `data_get() -> dict`

Get the entity data.

#### `data_set(data)`

Set the entity data.

#### `match_get() -> dict`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make() -> Entity`

Create a new `ConnectionEntity` instance with the same options.

#### `get_name() -> str`

Return the entity name.


---

## ContainerImageEntity

```python
container_image = client.ContainerImage()
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `image` | `str` | Yes | Image url. |

### Operations

#### `create(reqdata, ctrl=None) -> dict`

Create a new entity with the given data. Returns the created entity data and raises on error.

```python
result = client.ContainerImage().create({
    "account_id": "example_account_id",  # str
    "image": "example_image",  # str
})
```

### Common Methods

#### `data_get() -> dict`

Get the entity data.

#### `data_set(data)`

Set the entity data.

#### `match_get() -> dict`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make() -> Entity`

Create a new `ContainerImageEntity` instance with the same options.

#### `get_name() -> str`

Return the entity name.


---

## ContainerInstanceEntity

```python
container_instance = client.ContainerInstance()
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `errors` | `list` | Yes |  |
| `id` | `str` | No |  |
| `messages` | `list` | Yes |  |
| `result` | `Any` | Yes | A container instance belonging to an application. |
| `result_info` | `dict` | Yes | Cursor pagination details for a v4 API list response. |
| `success` | `bool` | Yes | Whether the API call was successful. |

### Operations

#### `list(reqmatch=None, ctrl=None) -> list`

List entities matching the given criteria. The match is optional — call `list()` with no argument to list all records. Returns a list and raises on error.

```python
results = client.ContainerInstance().list({"account_id": "example", "application_id": "example"})
for container_instance in results:
    print(container_instance)
```

#### `load(reqmatch, ctrl=None) -> dict`

Load a single entity matching the given criteria. Returns the entity data and raises on error.

```python
result = client.ContainerInstance().load({"id": "container_instance_id", "account_id": "account_id", "application_id": "application_id"})
```

### Common Methods

#### `data_get() -> dict`

Get the entity data.

#### `data_set(data)`

Set the entity data.

#### `match_get() -> dict`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make() -> Entity`

Create a new `ContainerInstanceEntity` instance with the same options.

#### `get_name() -> str`

Return the entity name.


---

## DeployHookEntity

```python
deploy_hook = client.DeployHook()
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `branch` | `str` | Yes | Git branch name. |
| `deploy_hook_name` | `str` | Yes | Deploy hook name (1-58 characters). |
| `errors` | `list` | Yes |  |
| `id` | `str` | No |  |
| `messages` | `list` | Yes |  |
| `result` | `dict` | Yes |  |
| `result_info` | `dict` | No |  |
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

#### `create(reqdata, ctrl=None) -> dict`

Create a new entity with the given data. Returns the created entity data and raises on error.

```python
result = client.DeployHook().create({
    "id": "example_id",  # str
    "branch": "example_branch",  # str
    "deploy_hook_name": "example_deploy_hook_name",  # str
    "errors": [],  # list
    "messages": [],  # list
    "result": {},  # dict
    "success": True,  # bool
})
```

#### `list(reqmatch=None, ctrl=None) -> list`

List entities matching the given criteria. The match is optional — call `list()` with no argument to list all records. Returns a list and raises on error.

```python
results = client.DeployHook().list({"account_id": "example", "script_name": "example"})
for deploy_hook in results:
    print(deploy_hook)
```

#### `load(reqmatch, ctrl=None) -> dict`

Load a single entity matching the given criteria. Returns the entity data and raises on error.

```python
result = client.DeployHook().load({"id": "deploy_hook_id", "account_id": "account_id", "worker_id": "worker_id"})
```

#### `remove(reqmatch, ctrl=None) -> dict`

Remove the entity matching the given criteria. Raises on error.

```python
result = client.DeployHook().remove({"id": "deploy_hook_id", "account_id": "account_id", "worker_id": "worker_id"})
```

#### `update(reqdata, ctrl=None) -> dict`

Update an existing entity. The data must include the entity `id`. Returns the updated entity data and raises on error.

```python
result = client.DeployHook().update({
    "id": "deploy_hook_id",
    "account_id": "account_id",
    "worker_id": "worker_id",
    # Fields to update
})
```

### Common Methods

#### `data_get() -> dict`

Get the entity data.

#### `data_set(data)`

Set the entity data.

#### `match_get() -> dict`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make() -> Entity`

Create a new `DeployHookEntity` instance with the same options.

#### `get_name() -> str`

Return the entity name.


---

## DeploymentEntity

```python
deployment = client.Deployment()
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `id` | `str` | No |  |

### Operations

#### `remove(reqmatch, ctrl=None) -> dict`

Remove the entity matching the given criteria. Raises on error.

```python
result = client.Deployment().remove({"account_id": "account_id", "id": "id"})
```

### Common Methods

#### `data_get() -> dict`

Get the entity data.

#### `data_set(data)`

Set the entity data.

#### `match_get() -> dict`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make() -> Entity`

Create a new `DeploymentEntity` instance with the same options.

#### `get_name() -> str`

Return the entity name.


---

## DestinationEntity

```python
destination = client.Destination()
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `configuration` | `dict` | Yes |  |
| `enabled` | `bool` | Yes |  |
| `errors` | `list` | Yes |  |
| `id` | `str` | No |  |
| `messages` | `list` | Yes |  |
| `name` | `str` | Yes |  |
| `result` | `dict` | Yes |  |
| `skipPreflightCheck` | `bool` | No |  |
| `success` | `bool` | Yes |  |

### Operations

#### `create(reqdata, ctrl=None) -> dict`

Create a new entity with the given data. Returns the created entity data and raises on error.

```python
result = client.Destination().create({
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

#### `list(reqmatch=None, ctrl=None) -> list`

List entities matching the given criteria. The match is optional — call `list()` with no argument to list all records. Returns a list and raises on error.

```python
results = client.Destination().list({"account_id": "example"})
for destination in results:
    print(destination)
```

#### `remove(reqmatch, ctrl=None) -> dict`

Remove the entity matching the given criteria. Raises on error.

```python
result = client.Destination().remove({"account_id": "account_id", "id": "id"})
```

#### `update(reqdata, ctrl=None) -> dict`

Update an existing entity. The data must include the entity `id`. Returns the updated entity data and raises on error.

```python
result = client.Destination().update({
    "account_id": "account_id",
    "id": "id",
    # Fields to update
})
```

### Common Methods

#### `data_get() -> dict`

Get the entity data.

#### `data_set(data)`

Set the entity data.

#### `match_get() -> dict`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make() -> Entity`

Create a new `DestinationEntity` instance with the same options.

#### `get_name() -> str`

Return the entity name.


---

## DomainEntity

```python
domain = client.Domain()
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `errors` | `list` | Yes |  |
| `id` | `str` | No |  |
| `messages` | `list` | Yes |  |
| `result` | `dict` | Yes |  |
| `success` | `bool` | Yes | Whether the API call was successful. |

### Operations

#### `list(reqmatch=None, ctrl=None) -> list`

List entities matching the given criteria. The match is optional — call `list()` with no argument to list all records. Returns a list and raises on error.

```python
results = client.Domain().list({"account_id": "example"})
for domain in results:
    print(domain)
```

#### `load(reqmatch, ctrl=None) -> dict`

Load a single entity matching the given criteria. Returns the entity data and raises on error.

```python
result = client.Domain().load({"id": "domain_id", "account_id": "account_id"})
```

#### `remove(reqmatch, ctrl=None) -> dict`

Remove the entity matching the given criteria. Raises on error.

```python
result = client.Domain().remove({"id": "domain_id", "account_id": "account_id"})
```

#### `update(reqdata, ctrl=None) -> dict`

Update an existing entity. The data must include the entity `id`. Returns the updated entity data and raises on error.

```python
result = client.Domain().update({
    "id": "domain_id",
    "account_id": "account_id",
    # Fields to update
})
```

### Common Methods

#### `data_get() -> dict`

Get the entity data.

#### `data_set(data)`

Set the entity data.

#### `match_get() -> dict`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make() -> Entity`

Create a new `DomainEntity` instance with the same options.

#### `get_name() -> str`

Return the entity name.


---

## DurableObjectsNamespaceEntity

```python
durable_objects_namespace = client.DurableObjectsNamespace()
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `result` | `list` | No |  |
| `result_info` | `dict` | No |  |

### Operations

#### `create(reqdata, ctrl=None) -> dict`

Create a new entity with the given data. Returns the created entity data and raises on error.

```python
result = client.DurableObjectsNamespace().create({
    "account_id": "example_account_id",  # str
    "namespace_id": "example_namespace_id",  # str
})
```

#### `list(reqmatch=None, ctrl=None) -> list`

List entities matching the given criteria. The match is optional — call `list()` with no argument to list all records. Returns a list and raises on error.

```python
results = client.DurableObjectsNamespace().list({"account_id": "example"})
for durable_objects_namespace in results:
    print(durable_objects_namespace)
```

### Common Methods

#### `data_get() -> dict`

Get the entity data.

#### `data_set(data)`

Set the entity data.

#### `match_get() -> dict`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make() -> Entity`

Create a new `DurableObjectsNamespaceEntity` instance with the same options.

#### `get_name() -> str`

Return the entity name.


---

## EnvironmentVariableEntity

```python
environment_variable = client.EnvironmentVariable()
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `errors` | `list` | Yes |  |
| `messages` | `list` | Yes |  |
| `result` | `dict` | Yes |  |
| `result_info` | `dict` | No |  |
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

#### `list(reqmatch=None, ctrl=None) -> list`

List entities matching the given criteria. The match is optional — call `list()` with no argument to list all records. Returns a list and raises on error.

```python
results = client.EnvironmentVariable().list({"account_id": "example", "trigger_id": "example"})
for environment_variable in results:
    print(environment_variable)
```

#### `update(reqdata, ctrl=None) -> dict`

Update an existing entity. The data must include the entity `id`. Returns the updated entity data and raises on error.

```python
result = client.EnvironmentVariable().update({
    "account_id": "account_id",
    "trigger_id": "trigger_id",
    # Fields to update
})
```

### Common Methods

#### `data_get() -> dict`

Get the entity data.

#### `data_set(data)`

Set the entity data.

#### `match_get() -> dict`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make() -> Entity`

Create a new `EnvironmentVariableEntity` instance with the same options.

#### `get_name() -> str`

Return the entity name.


---

## GitHubIntegrationEntity

```python
git_hub_integration = client.GitHubIntegration()
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `errors` | `list` | Yes |  |
| `messages` | `list` | Yes |  |
| `result` | `dict` | Yes |  |
| `result_info` | `dict` | No |  |
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

#### `list(reqmatch=None, ctrl=None) -> list`

List entities matching the given criteria. The match is optional — call `list()` with no argument to list all records. Returns a list and raises on error.

```python
results = client.GitHubIntegration().list({"account_id": "example", "provider_account_id": "example", "provider_type": "example", "repo_id": "example", "branch": "example"})
for git_hub_integration in results:
    print(git_hub_integration)
```

### Common Methods

#### `data_get() -> dict`

Get the entity data.

#### `data_set(data)`

Set the entity data.

#### `match_get() -> dict`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make() -> Entity`

Create a new `GitHubIntegrationEntity` instance with the same options.

#### `get_name() -> str`

Return the entity name.


---

## HyperdriveEntity

```python
hyperdrive = client.Hyperdrive()
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `caching` | `dict` | No |  |
| `created_on` | `str` | No | Defines the creation time of the Hyperdrive configuration. |
| `id` | `str` | Yes | Define configurations using a unique string identifier. |
| `modified_on` | `str` | No | Defines the last modified time of the Hyperdrive configuration. |
| `mtls` | `dict` | No | mTLS configuration for the origin connection. |
| `name` | `str` | Yes | The name of the Hyperdrive configuration. |
| `origin` | `dict` | Yes | Combines database connection fields with exactly one supported network location. |
| `origin_connection_limit` | `int` | No | The (soft) maximum number of connections the Hyperdrive is allowed to make to the origin database. |
| `restarted_on` | `str` | No | Defines the last time the Hyperdrive connection pool was explicitly restarted via the restart endpoint. |
| `result` | `dict` | Yes |  |

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

#### `create(reqdata, ctrl=None) -> dict`

Create a new entity with the given data. Returns the created entity data and raises on error.

```python
result = client.Hyperdrive().create({
    "account_id": "example_account_id",  # str
    "integration": "example_integration",  # str
    "id": "example_id",  # str
    "name": "example_name",  # str
    "origin": {},  # dict
    "result": {},  # dict
})
```

#### `list(reqmatch=None, ctrl=None) -> list`

List entities matching the given criteria. The match is optional — call `list()` with no argument to list all records. Returns a list and raises on error.

```python
results = client.Hyperdrive().list({"account_id": "example"})
for hyperdrive in results:
    print(hyperdrive)
```

#### `load(reqmatch, ctrl=None) -> dict`

Load a single entity matching the given criteria. Returns the entity data and raises on error.

```python
result = client.Hyperdrive().load({"account_id": "account_id", "hyperdrive_id": "hyperdrive_id"})
```

#### `remove(reqmatch, ctrl=None) -> dict`

Remove the entity matching the given criteria. Raises on error.

```python
result = client.Hyperdrive().remove({"account_id": "account_id", "hyperdrive_id": "hyperdrive_id"})
```

#### `update(reqdata, ctrl=None) -> dict`

Update an existing entity. The data must include the entity `id`. Returns the updated entity data and raises on error.

```python
result = client.Hyperdrive().update({
    "account_id": "account_id",
    "hyperdrive_id": "hyperdrive_id",
    # Fields to update
})
```

### Common Methods

#### `data_get() -> dict`

Get the entity data.

#### `data_set(data)`

Set the entity data.

#### `match_get() -> dict`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make() -> Entity`

Create a new `HyperdriveEntity` instance with the same options.

#### `get_name() -> str`

Return the entity name.


---

## ImageRegistryEntity

```python
image_registry = client.ImageRegistry()
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `auth` | `dict` | Yes | Credentials for authenticating to a private external image registry. |
| `domain` | `str` | Yes | Hostname of the private registry, without a scheme or image path. |
| `errors` | `list` | Yes |  |
| `expiration_minutes` | `int` | No | The number of minutes Cloudflare managed registry credentials stay valid. |
| `id` | `str` | No |  |
| `is_public` | `bool` | No | Omit this field or set it to `false`. |
| `kind` | `Any` | Yes | Registry provider. |
| `messages` | `list` | Yes |  |
| `permissions` | `list` | No | The permissions for Cloudflare managed registry credentials. |
| `result` | `list` | Yes |  |
| `success` | `bool` | Yes | Whether the API call was successful. |

### Operations

#### `create(reqdata, ctrl=None) -> dict`

Create a new entity with the given data. Returns the created entity data and raises on error.

```python
result = client.ImageRegistry().create({
    "account_id": "example_account_id",  # str
    "auth": {},  # dict
    "errors": [],  # list
    "kind": "example_kind",  # Any
    "messages": [],  # list
    "result": [],  # list
    "success": True,  # bool
})
```

#### `list(reqmatch=None, ctrl=None) -> list`

List entities matching the given criteria. The match is optional — call `list()` with no argument to list all records. Returns a list and raises on error.

```python
results = client.ImageRegistry().list({"account_id": "example"})
for image_registry in results:
    print(image_registry)
```

#### `remove(reqmatch, ctrl=None) -> dict`

Remove the entity matching the given criteria. Raises on error.

```python
result = client.ImageRegistry().remove({"account_id": "account_id", "id": "id"})
```

### Common Methods

#### `data_get() -> dict`

Get the entity data.

#### `data_set(data)`

Set the entity data.

#### `match_get() -> dict`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make() -> Entity`

Create a new `ImageRegistryEntity` instance with the same options.

#### `get_name() -> str`

Return the entity name.


---

## IssueEntity

```python
issue = client.Issue()
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `afterInactivitySeconds` | `int` | No |  |
| `afterOccurrences` | `int` | No |  |
| `enabled` | `bool` | No |  |
| `errors` | `list` | Yes |  |
| `id` | `str` | No |  |
| `issueIds` | `list` | Yes |  |
| `messages` | `list` | Yes |  |
| `name` | `str` | No |  |
| `policyId` | `str` | Yes |  |
| `result` | `dict` | Yes |  |
| `result_info` | `dict` | Yes |  |
| `service` | `str` | No |  |
| `status` | `str` | No |  |
| `success` | `bool` | Yes |  |
| `title` | `str` | No |  |

### Operations

#### `create(reqdata, ctrl=None) -> dict`

Create a new entity with the given data. Returns the created entity data and raises on error.

```python
result = client.Issue().create({
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

#### `list(reqmatch=None, ctrl=None) -> list`

List entities matching the given criteria. The match is optional — call `list()` with no argument to list all records. Returns a list and raises on error.

```python
results = client.Issue().list({"account_id": "example"})
for issue in results:
    print(issue)
```

#### `load(reqmatch, ctrl=None) -> dict`

Load a single entity matching the given criteria. Returns the entity data and raises on error.

```python
result = client.Issue().load({"id": "issue_id", "account_id": "account_id"})
```

#### `remove(reqmatch, ctrl=None) -> dict`

Remove the entity matching the given criteria. Raises on error.

```python
result = client.Issue().remove({"account_id": "account_id"})
```

#### `update(reqdata, ctrl=None) -> dict`

Update an existing entity. The data must include the entity `id`. Returns the updated entity data and raises on error.

```python
result = client.Issue().update({
    "id": "issue_id",
    "account_id": "account_id",
    "automation_id": "automation_id",
    # Fields to update
})
```

### Common Methods

#### `data_get() -> dict`

Get the entity data.

#### `data_set(data)`

Set the entity data.

#### `match_get() -> dict`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make() -> Entity`

Create a new `IssueEntity` instance with the same options.

#### `get_name() -> str`

Return the entity name.


---

## KeyEntity

```python
key = client.Key()
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `datasets` | `list` | No | Leave this empty to use the default datasets |
| `errors` | `list` | Yes |  |
| `filters` | `list` | No | Apply filters to narrow key discovery. |
| `from` | `float` | No |  |
| `keyNeedle` | `dict` | Yes | If the user suggests a key, use this to narrow down the list of keys returned. |
| `limit` | `float` | No | Advanced usage: set limit=1000+ to retrieve comprehensive key options without needing additional filtering. |
| `messages` | `list` | Yes |  |
| `needle` | `dict` | Yes | Search for a specific substring in any of the events |
| `result` | `list` | Yes |  |
| `success` | `bool` | Yes |  |
| `to` | `float` | No |  |

### Operations

#### `create(reqdata, ctrl=None) -> dict`

Create a new entity with the given data. Returns the created entity data and raises on error.

```python
result = client.Key().create({
    "account_id": "example_account_id",  # str
    "errors": [],  # list
    "keyNeedle": {},  # dict
    "messages": [],  # list
    "needle": {},  # dict
    "result": [],  # list
    "success": True,  # bool
})
```

### Common Methods

#### `data_get() -> dict`

Get the entity data.

#### `data_set(data)`

Set the entity data.

#### `match_get() -> dict`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make() -> Entity`

Create a new `KeyEntity` instance with the same options.

#### `get_name() -> str`

Return the entity name.


---

## LiveTailEntity

```python
live_tail = client.LiveTail()
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `errors` | `list` | Yes |  |
| `filterCombination` | `str` | No | Set a flag to describe how to combine the filters on the query. |
| `filters` | `list` | No | Apply filters to the query. |
| `messages` | `list` | Yes |  |
| `result` | `dict` | Yes |  |
| `scriptId` | `str` | No |  |
| `success` | `bool` | Yes |  |

### Operations

#### `create(reqdata, ctrl=None) -> dict`

Create a new entity with the given data. Returns the created entity data and raises on error.

```python
result = client.LiveTail().create({
    "account_id": "example_account_id",  # str
    "errors": [],  # list
    "messages": [],  # list
    "result": {},  # dict
    "success": True,  # bool
})
```

### Common Methods

#### `data_get() -> dict`

Get the entity data.

#### `data_set(data)`

Set the entity data.

#### `match_get() -> dict`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make() -> Entity`

Create a new `LiveTailEntity` instance with the same options.

#### `get_name() -> str`

Return the entity name.


---

## MetricsExportEntity

```python
metrics_export = client.MetricsExport()
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `errors` | `list` | Yes |  |
| `messages` | `list` | Yes |  |
| `requester` | `dict` | Yes |  |
| `resources` | `list` | Yes |  |
| `result` | `list` | Yes |  |
| `success` | `bool` | Yes |  |

### Operations

#### `create(reqdata, ctrl=None) -> dict`

Create a new entity with the given data. Returns the created entity data and raises on error.

```python
result = client.MetricsExport().create({
    "account_id": "example_account_id",  # str
    "errors": [],  # list
    "messages": [],  # list
    "requester": {},  # dict
    "resources": [],  # list
    "result": [],  # list
    "success": True,  # bool
})
```

#### `list(reqmatch=None, ctrl=None) -> list`

List entities matching the given criteria. The match is optional — call `list()` with no argument to list all records. Returns a list and raises on error.

```python
results = client.MetricsExport().list({"account_id": "example"})
for metrics_export in results:
    print(metrics_export)
```

### Common Methods

#### `data_get() -> dict`

Get the entity data.

#### `data_set(data)`

Set the entity data.

#### `match_get() -> dict`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make() -> Entity`

Create a new `MetricsExportEntity` instance with the same options.

#### `get_name() -> str`

Return the entity name.


---

## NamespaceEntity

```python
namespace = client.Namespace()
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `id` | `str` | No |  |

### Operations

#### `remove(reqmatch, ctrl=None) -> dict`

Remove the entity matching the given criteria. Raises on error.

```python
result = client.Namespace().remove({"account_id": "account_id", "id": "id"})
```

### Common Methods

#### `data_get() -> dict`

Get the entity data.

#### `data_set(data)`

Set the entity data.

#### `match_get() -> dict`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make() -> Entity`

Create a new `NamespaceEntity` instance with the same options.

#### `get_name() -> str`

Return the entity name.


---

## PreviewEntity

```python
preview = client.Preview()
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `errors` | `list` | Yes |  |
| `id` | `str` | No |  |
| `messages` | `list` | Yes |  |
| `result` | `dict` | Yes |  |
| `success` | `bool` | Yes | Whether the API call was successful. |

### Operations

#### `create(reqdata, ctrl=None) -> dict`

Create a new entity with the given data. Returns the created entity data and raises on error.

```python
result = client.Preview().create({
    "account_id": "example_account_id",  # str
    "worker_id": "example_worker_id",  # str
    "errors": [],  # list
    "messages": [],  # list
    "result": {},  # dict
    "success": True,  # bool
})
```

#### `list(reqmatch=None, ctrl=None) -> list`

List entities matching the given criteria. The match is optional — call `list()` with no argument to list all records. Returns a list and raises on error.

```python
results = client.Preview().list({"account_id": "example", "worker_id": "example"})
for preview in results:
    print(preview)
```

#### `load(reqmatch, ctrl=None) -> dict`

Load a single entity matching the given criteria. Returns the entity data and raises on error.

```python
result = client.Preview().load({"id": "preview_id", "account_id": "account_id", "worker_id": "worker_id"})
```

#### `remove(reqmatch, ctrl=None) -> dict`

Remove the entity matching the given criteria. Raises on error.

```python
result = client.Preview().remove({"id": "preview_id", "account_id": "account_id", "worker_id": "worker_id"})
```

#### `update(reqdata, ctrl=None) -> dict`

Update an existing entity. The data must include the entity `id`. Returns the updated entity data and raises on error.

```python
result = client.Preview().update({
    "id": "preview_id",
    "account_id": "account_id",
    "worker_id": "worker_id",
    # Fields to update
})
```

### Common Methods

#### `data_get() -> dict`

Get the entity data.

#### `data_set(data)`

Set the entity data.

#### `match_get() -> dict`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make() -> Entity`

Create a new `PreviewEntity` instance with the same options.

#### `get_name() -> str`

Return the entity name.


---

## PreviewDeploymentEntity

```python
preview_deployment = client.PreviewDeployment()
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `errors` | `list` | Yes |  |
| `id` | `str` | No |  |
| `messages` | `list` | Yes |  |
| `result` | `Any` | Yes |  |
| `success` | `bool` | Yes | Whether the API call was successful. |

### Operations

#### `create(reqdata, ctrl=None) -> dict`

Create a new entity with the given data. Returns the created entity data and raises on error.

```python
result = client.PreviewDeployment().create({
    "account_id": "example_account_id",  # str
    "id": "example_id",  # str
    "worker_id": "example_worker_id",  # str
    "errors": [],  # list
    "messages": [],  # list
    "result": "example_result",  # Any
    "success": True,  # bool
})
```

#### `list(reqmatch=None, ctrl=None) -> list`

List entities matching the given criteria. The match is optional — call `list()` with no argument to list all records. Returns a list and raises on error.

```python
results = client.PreviewDeployment().list({"account_id": "example", "id": "example_id", "worker_id": "example"})
for preview_deployment in results:
    print(preview_deployment)
```

#### `load(reqmatch, ctrl=None) -> dict`

Load a single entity matching the given criteria. Returns the entity data and raises on error.

```python
result = client.PreviewDeployment().load({"id": "preview_deployment_id", "account_id": "account_id", "preview_id": "preview_id", "worker_id": "worker_id"})
```

#### `update(reqdata, ctrl=None) -> dict`

Update an existing entity. The data must include the entity `id`. Returns the updated entity data and raises on error.

```python
result = client.PreviewDeployment().update({
    "id": "preview_deployment_id",
    "account_id": "account_id",
    "preview_id": "preview_id",
    "worker_id": "worker_id",
    # Fields to update
})
```

### Common Methods

#### `data_get() -> dict`

Get the entity data.

#### `data_set(data)`

Set the entity data.

#### `match_get() -> dict`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make() -> Entity`

Create a new `PreviewDeploymentEntity` instance with the same options.

#### `get_name() -> str`

Return the entity name.


---

## QueryEntity

```python
query = client.Query()
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `chart` | `bool` | No | When true, includes time-series data in the response. |
| `chartType` | `str` | No | Controls the SQL shape and response payload for the 'calculations' view. |
| `compare` | `bool` | No | When true, includes a comparison dataset from the previous time period of equal length. |
| `distributionScale` | `str` | No | Value-axis bucketing for chartType 'distribution'. |
| `dry` | `bool` | No | When true, executes the query without persisting the results. |
| `errors` | `list` | Yes |  |
| `granularity` | `float` | No | Number of time-series buckets. |
| `ignoreSeries` | `bool` | No | When true, omits time-series data from the response and returns only aggregated values. |
| `limit` | `float` | No | Maximum number of events to return when view is 'events'. |
| `messages` | `list` | Yes |  |
| `offset` | `str` | No | Cursor for pagination in event, trace, invocation, and agent views. |
| `offsetBy` | `float` | No | Numeric offset for paginating grouped/pattern results (top-N lists). |
| `offsetDirection` | `str` | No | Pagination direction: 'next' for forward, 'prev' for backward. |
| `parameters` | `dict` | No | Query parameters defining what data to retrieve — filters, calculations, group-bys, and ordering. |
| `queryId` | `str` | Yes | Identifier for the query. |
| `result` | `dict` | Yes | Complete results of a query run. |
| `success` | `bool` | Yes |  |
| `timeframe` | `dict` | Yes | Timeframe for the query using Unix timestamps in milliseconds. |
| `view` | `str` | No | Controls the shape of the response. |

### Operations

#### `create(reqdata, ctrl=None) -> dict`

Create a new entity with the given data. Returns the created entity data and raises on error.

```python
result = client.Query().create({
    "account_id": "example_account_id",  # str
    "errors": [],  # list
    "messages": [],  # list
    "queryId": "example_queryId",  # str
    "result": {},  # dict
    "success": True,  # bool
    "timeframe": {},  # dict
})
```

### Common Methods

#### `data_get() -> dict`

Get the entity data.

#### `data_set(data)`

Set the entity data.

#### `match_get() -> dict`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make() -> Entity`

Create a new `QueryEntity` instance with the same options.

#### `get_name() -> str`

Return the entity name.


---

## RepositoryConnectionEntity

```python
repository_connection = client.RepositoryConnection()
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `provider_account_id` | `str` | Yes | Provider-specific identifier of the account or namespace that owns the repository. |
| `provider_account_name` | `str` | Yes | Human-readable name of the account or namespace that owns the repository. |
| `provider_type` | `str` | Yes | Source control provider. |
| `repo_id` | `str` | Yes | Provider-specific repository identifier. |
| `repo_name` | `str` | Yes | Human-readable repository name. |

### Operations

#### `update(reqdata, ctrl=None) -> dict`

Update an existing entity. The data must include the entity `id`. Returns the updated entity data and raises on error.

```python
result = client.RepositoryConnection().update({
    "account_id": "account_id",
    # Fields to update
})
```

### Common Methods

#### `data_get() -> dict`

Get the entity data.

#### `data_set(data)`

Set the entity data.

#### `match_get() -> dict`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make() -> Entity`

Create a new `RepositoryConnectionEntity` instance with the same options.

#### `get_name() -> str`

Return the entity name.


---

## RolloutEntity

```python
rollout = client.Rollout()
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `description` | `str` | Yes | Description of the rollout process. |
| `kind` | `str` | No | Kind of the rollout process. |
| `percentage` | `int` | No | Initial target version percentage (0-100). |
| `step_percentage` | `int` | No | Percentage of rollout to increase in each step when "steps" is absent. |
| `steps` | `list` | No | Steps defining the rollout process, used when "step_percentage" is absent. |
| `strategy` | `str` | Yes | Strategy used for the rollout. |
| `target_configuration` | `dict` | Yes | User-specified container configuration changes. |

### Operations

#### `create(reqdata, ctrl=None) -> dict`

Create a new entity with the given data. Returns the created entity data and raises on error.

```python
result = client.Rollout().create({
    "account_id": "example_account_id",  # str
    "application_id": "example_application_id",  # str
    "description": "example_description",  # str
    "strategy": "example_strategy",  # str
    "target_configuration": {},  # dict
})
```

### Common Methods

#### `data_get() -> dict`

Get the entity data.

#### `data_set(data)`

Set the entity data.

#### `match_get() -> dict`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make() -> Entity`

Create a new `RolloutEntity` instance with the same options.

#### `get_name() -> str`

Return the entity name.


---

## SavedQueryEntity

```python
saved_query = client.SavedQuery()
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `description` | `str` | Yes |  |
| `errors` | `list` | Yes |  |
| `id` | `str` | No |  |
| `messages` | `list` | Yes |  |
| `name` | `str` | Yes | Query name |
| `parameters` | `dict` | Yes |  |
| `result` | `dict` | Yes |  |
| `success` | `bool` | Yes |  |

### Operations

#### `create(reqdata, ctrl=None) -> dict`

Create a new entity with the given data. Returns the created entity data and raises on error.

```python
result = client.SavedQuery().create({
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

#### `list(reqmatch=None, ctrl=None) -> list`

List entities matching the given criteria. The match is optional — call `list()` with no argument to list all records. Returns a list and raises on error.

```python
results = client.SavedQuery().list({"account_id": "example"})
for saved_query in results:
    print(saved_query)
```

#### `load(reqmatch, ctrl=None) -> dict`

Load a single entity matching the given criteria. Returns the entity data and raises on error.

```python
result = client.SavedQuery().load({"id": "saved_query_id", "account_id": "account_id"})
```

#### `remove(reqmatch, ctrl=None) -> dict`

Remove the entity matching the given criteria. Raises on error.

```python
result = client.SavedQuery().remove({"id": "saved_query_id", "account_id": "account_id"})
```

#### `update(reqdata, ctrl=None) -> dict`

Update an existing entity. The data must include the entity `id`. Returns the updated entity data and raises on error.

```python
result = client.SavedQuery().update({
    "id": "saved_query_id",
    "account_id": "account_id",
    # Fields to update
})
```

### Common Methods

#### `data_get() -> dict`

Get the entity data.

#### `data_set(data)`

Set the entity data.

#### `match_get() -> dict`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make() -> Entity`

Create a new `SavedQueryEntity` instance with the same options.

#### `get_name() -> str`

Return the entity name.


---

## ScriptEntity

```python
script = client.Script()
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `id` | `str` | No |  |

### Operations

#### `remove(reqmatch, ctrl=None) -> dict`

Remove the entity matching the given criteria. Raises on error.

```python
result = client.Script().remove({"account_id": "account_id", "id": "id"})
```

### Common Methods

#### `data_get() -> dict`

Get the entity data.

#### `data_set(data)`

Set the entity data.

#### `match_get() -> dict`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make() -> Entity`

Create a new `ScriptEntity` instance with the same options.

#### `get_name() -> str`

Return the entity name.


---

## ScriptSettingEntity

```python
script_setting = client.ScriptSetting()
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `errors` | `list` | Yes |  |
| `logpush` | `bool` | No | Whether Logpush is turned on for the Worker. |
| `messages` | `list` | Yes |  |
| `observability` | `Any` | No |  |
| `result` | `dict` | Yes |  |
| `success` | `bool` | Yes | Whether the API call was successful. |
| `tags` | `Any` | No |  |
| `tail_consumers` | `list` | No | List of Workers that will consume logs from the attached Worker. |

### Operations

#### `list(reqmatch=None, ctrl=None) -> list`

List entities matching the given criteria. The match is optional — call `list()` with no argument to list all records. Returns a list and raises on error.

```python
results = client.ScriptSetting().list({"account_id": "example", "script_name": "example"})
for script_setting in results:
    print(script_setting)
```

#### `update(reqdata, ctrl=None) -> dict`

Update an existing entity. The data must include the entity `id`. Returns the updated entity data and raises on error.

```python
result = client.ScriptSetting().update({
    "account_id": "account_id",
    "script_name": "script_name",
    # Fields to update
})
```

### Common Methods

#### `data_get() -> dict`

Get the entity data.

#### `data_set(data)`

Set the entity data.

#### `match_get() -> dict`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make() -> Entity`

Create a new `ScriptSettingEntity` instance with the same options.

#### `get_name() -> str`

Return the entity name.


---

## SecretEntity

```python
secret = client.Secret()
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `comment` | `str` | No | Freeform text describing the secret. |
| `id` | `str` | No |  |
| `result` | `Any` | Yes |  |
| `scopes` | `list` | No | The list of services that can use this secret. |
| `value` | `str` | No | The value of the secret. |

### Field Usage by Operation

| Field | load | list | create | update | remove |
| --- | --- | --- | --- | --- | --- |
| `comment` | - | - | - | - | - |
| `id` | - | - | - | - | - |
| `result` | - | Yes | - | - | - |
| `scopes` | - | - | - | - | - |
| `value` | - | - | - | - | - |

### Operations

#### `create(reqdata, ctrl=None) -> dict`

Create a new entity with the given data. Returns the created entity data and raises on error.

```python
result = client.Secret().create({
    "account_id": "example_account_id",  # str
    "store_id": "example_store_id",  # str
    "result": "example_result",  # Any
})
```

#### `list(reqmatch=None, ctrl=None) -> list`

List entities matching the given criteria. The match is optional — call `list()` with no argument to list all records. Returns a list and raises on error.

```python
results = client.Secret().list({"account_id": "example", "store_id": "example"})
for secret in results:
    print(secret)
```

#### `load(reqmatch, ctrl=None) -> dict`

Load a single entity matching the given criteria. Returns the entity data and raises on error.

```python
result = client.Secret().load({"id": "secret_id", "account_id": "account_id", "store_id": "store_id"})
```

#### `remove(reqmatch, ctrl=None) -> dict`

Remove the entity matching the given criteria. Raises on error.

```python
result = client.Secret().remove({"id": "secret_id", "account_id": "account_id", "store_id": "store_id"})
```

#### `update(reqdata, ctrl=None) -> dict`

Update an existing entity. The data must include the entity `id`. Returns the updated entity data and raises on error.

```python
result = client.Secret().update({
    "id": "secret_id",
    "account_id": "account_id",
    "store_id": "store_id",
    # Fields to update
})
```

### Common Methods

#### `data_get() -> dict`

Get the entity data.

#### `data_set(data)`

Set the entity data.

#### `match_get() -> dict`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make() -> Entity`

Create a new `SecretEntity` instance with the same options.

#### `get_name() -> str`

Return the entity name.


---

## SecretsStoreDeleteEntity

```python
secrets_store_delete = client.SecretsStoreDelete()
```

### Operations

#### `remove(reqmatch, ctrl=None) -> dict`

Remove the entity matching the given criteria. Raises on error.

```python
result = client.SecretsStoreDelete().remove({"account_id": "account_id", "store_id": "store_id"})
```

### Common Methods

#### `data_get() -> dict`

Get the entity data.

#### `data_set(data)`

Set the entity data.

#### `match_get() -> dict`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make() -> Entity`

Create a new `SecretsStoreDeleteEntity` instance with the same options.

#### `get_name() -> str`

Return the entity name.


---

## SecretsStoreQuotaEntity

```python
secrets_store_quota = client.SecretsStoreQuota()
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `result` | `Any` | Yes |  |

### Operations

#### `load(reqmatch, ctrl=None) -> dict`

Load a single entity matching the given criteria. Returns the entity data and raises on error.

```python
result = client.SecretsStoreQuota().load({"account_id": "account_id"})
```

### Common Methods

#### `data_get() -> dict`

Get the entity data.

#### `data_set(data)`

Set the entity data.

#### `match_get() -> dict`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make() -> Entity`

Create a new `SecretsStoreQuotaEntity` instance with the same options.

#### `get_name() -> str`

Return the entity name.


---

## SecretsStoreSecretEntity

```python
secrets_store_secret = client.SecretsStoreSecret()
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `comment` | `str` | No | Freeform text describing the secret. |
| `name` | `str` | Yes | The name of the secret. |
| `scopes` | `list` | Yes | The list of services that can use this secret. |

### Operations

#### `create(reqdata, ctrl=None) -> dict`

Create a new entity with the given data. Returns the created entity data and raises on error.

```python
result = client.SecretsStoreSecret().create({
    "account_id": "example_account_id",  # str
    "secret_id": "example_secret_id",  # str
    "store_id": "example_store_id",  # str
    "name": "example_name",  # str
    "scopes": [],  # list
})
```

### Common Methods

#### `data_get() -> dict`

Get the entity data.

#### `data_set(data)`

Set the entity data.

#### `match_get() -> dict`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make() -> Entity`

Create a new `SecretsStoreSecretEntity` instance with the same options.

#### `get_name() -> str`

Return the entity name.


---

## SecretsStoreStoreEntity

```python
secrets_store_store = client.SecretsStoreStore()
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `id` | `str` | No |  |
| `name` | `str` | Yes | The name of the store. |
| `result` | `Any` | Yes |  |

### Operations

#### `create(reqdata, ctrl=None) -> dict`

Create a new entity with the given data. Returns the created entity data and raises on error.

```python
result = client.SecretsStoreStore().create({
    "account_id": "example_account_id",  # str
    "name": "example_name",  # str
    "result": "example_result",  # Any
})
```

#### `load(reqmatch, ctrl=None) -> dict`

Load a single entity matching the given criteria. Returns the entity data and raises on error.

```python
result = client.SecretsStoreStore().load({"id": "secrets_store_store_id", "account_id": "account_id"})
```

### Common Methods

#### `data_get() -> dict`

Get the entity data.

#### `data_set(data)`

Set the entity data.

#### `match_get() -> dict`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make() -> Entity`

Create a new `SecretsStoreStoreEntity` instance with the same options.

#### `get_name() -> str`

Return the entity name.


---

## SecretsStoreStoresResponseCollectionEntity

```python
secrets_store_stores_response_collection = client.SecretsStoreStoresResponseCollection()
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `result` | `list` | No |  |

### Operations

#### `list(reqmatch=None, ctrl=None) -> list`

List entities matching the given criteria. The match is optional — call `list()` with no argument to list all records. Returns a list and raises on error.

```python
results = client.SecretsStoreStoresResponseCollection().list({"account_id": "example"})
for secrets_store_stores_response_collection in results:
    print(secrets_store_stores_response_collection)
```

### Common Methods

#### `data_get() -> dict`

Get the entity data.

#### `data_set(data)`

Set the entity data.

#### `match_get() -> dict`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make() -> Entity`

Create a new `SecretsStoreStoresResponseCollectionEntity` instance with the same options.

#### `get_name() -> str`

Return the entity name.


---

## SettingEntity

```python
setting = client.Setting()
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `errors` | `list` | Yes |  |
| `messages` | `list` | Yes |  |
| `result` | `dict` | Yes |  |
| `success` | `bool` | Yes | Whether the API call was successful. |

### Operations

#### `list(reqmatch=None, ctrl=None) -> list`

List entities matching the given criteria. The match is optional — call `list()` with no argument to list all records. Returns a list and raises on error.

```python
results = client.Setting().list({"account_id": "example", "environment_name": "example", "service_id": "example"})
for setting in results:
    print(setting)
```

#### `update(reqdata, ctrl=None) -> dict`

Update an existing entity. The data must include the entity `id`. Returns the updated entity data and raises on error.

```python
result = client.Setting().update({
    "account_id": "account_id",
    "environment_name": "environment_name",
    "service_id": "service_id",
    # Fields to update
})
```

### Common Methods

#### `data_get() -> dict`

Get the entity data.

#### `data_set(data)`

Set the entity data.

#### `match_get() -> dict`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make() -> Entity`

Create a new `SettingEntity` instance with the same options.

#### `get_name() -> str`

Return the entity name.


---

## SharedEntity

```python
shared = client.Shared()
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `errors` | `list` | Yes |  |
| `id` | `str` | No |  |
| `messages` | `list` | Yes |  |
| `result` | `dict` | Yes | Complete results of a query run. |
| `success` | `bool` | Yes |  |

### Operations

#### `create(reqdata, ctrl=None) -> dict`

Create a new entity with the given data. Returns the created entity data and raises on error.

```python
result = client.Shared().create({
    "account_id": "example_account_id",  # str
    "errors": [],  # list
    "messages": [],  # list
    "result": {},  # dict
    "success": True,  # bool
})
```

#### `load(reqmatch, ctrl=None) -> dict`

Load a single entity matching the given criteria. Returns the entity data and raises on error.

```python
result = client.Shared().load({"id": "shared_id", "account_id": "account_id"})
```

### Common Methods

#### `data_get() -> dict`

Get the entity data.

#### `data_set(data)`

Set the entity data.

#### `match_get() -> dict`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make() -> Entity`

Create a new `SharedEntity` instance with the same options.

#### `get_name() -> str`

Return the entity name.


---

## TailEntity

```python
tail = client.Tail()
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `id` | `str` | No |  |

### Operations

#### `remove(reqmatch, ctrl=None) -> dict`

Remove the entity matching the given criteria. Raises on error.

```python
result = client.Tail().remove({"account_id": "account_id", "id": "id", "script_id": "script_id"})
```

### Common Methods

#### `data_get() -> dict`

Get the entity data.

#### `data_set(data)`

Set the entity data.

#### `match_get() -> dict`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make() -> Entity`

Create a new `TailEntity` instance with the same options.

#### `get_name() -> str`

Return the entity name.


---

## TokenEntity

```python
token = client.Token()
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `id` | `str` | No |  |

### Operations

#### `remove(reqmatch, ctrl=None) -> dict`

Remove the entity matching the given criteria. Raises on error.

```python
result = client.Token().remove({"account_id": "account_id", "id": "id"})
```

### Common Methods

#### `data_get() -> dict`

Get the entity data.

#### `data_set(data)`

Set the entity data.

#### `match_get() -> dict`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make() -> Entity`

Create a new `TokenEntity` instance with the same options.

#### `get_name() -> str`

Return the entity name.


---

## TriggerEntity

```python
trigger = client.Trigger()
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `branch_excludes` | `list` | Yes | Branch patterns that must not start builds. |
| `branch_includes` | `list` | Yes | Branch patterns that can start builds. |
| `build_caching_enabled` | `bool` | No | Whether builds reuse cached dependencies and build artifacts. |
| `build_command` | `str` | Yes | Command to build the Worker. |
| `build_token_uuid` | `str` | Yes | UUID of the build token used when deploying the Worker. |
| `deploy_command` | `str` | Yes | Command to deploy the Worker. |
| `external_script_id` | `str` | Yes | System-generated tag of the Worker. |
| `id` | `str` | No |  |
| `path_excludes` | `list` | Yes | Path patterns that must not start builds. |
| `path_includes` | `list` | Yes | Path patterns that can start builds. |
| `repo_connection_uuid` | `str` | Yes | Repository connection UUID. |
| `root_directory` | `str` | Yes | Repository directory in which build and deploy commands run. |
| `trigger_name` | `str` | Yes | Human-readable name of the build trigger. |

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

#### `create(reqdata, ctrl=None) -> dict`

Create a new entity with the given data. Returns the created entity data and raises on error.

```python
result = client.Trigger().create({
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

#### `remove(reqmatch, ctrl=None) -> dict`

Remove the entity matching the given criteria. Raises on error.

```python
result = client.Trigger().remove({"account_id": "account_id", "id": "id"})
```

#### `update(reqdata, ctrl=None) -> dict`

Update an existing entity. The data must include the entity `id`. Returns the updated entity data and raises on error.

```python
result = client.Trigger().update({
    "account_id": "account_id",
    "id": "id",
    # Fields to update
})
```

### Common Methods

#### `data_get() -> dict`

Get the entity data.

#### `data_set(data)`

Set the entity data.

#### `match_get() -> dict`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make() -> Entity`

Create a new `TriggerEntity` instance with the same options.

#### `get_name() -> str`

Return the entity name.


---

## UsageEntity

```python
usage = client.Usage()
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `errors` | `list` | Yes |  |
| `messages` | `list` | Yes |  |
| `result` | `dict` | Yes |  |
| `success` | `bool` | Yes |  |

### Operations

#### `list(reqmatch=None, ctrl=None) -> list`

List entities matching the given criteria. The match is optional — call `list()` with no argument to list all records. Returns a list and raises on error.

```python
results = client.Usage().list({"account_id": "example", "from": "example", "to": "example"})
for usage in results:
    print(usage)
```

### Common Methods

#### `data_get() -> dict`

Get the entity data.

#### `data_set(data)`

Set the entity data.

#### `match_get() -> dict`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make() -> Entity`

Create a new `UsageEntity` instance with the same options.

#### `get_name() -> str`

Return the entity name.


---

## ValueEntity

```python
value = client.Value()
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `datasets` | `list` | Yes | Leave this empty to use the default datasets |
| `errors` | `list` | Yes |  |
| `filters` | `list` | No | Apply filters before listing values. |
| `key` | `str` | Yes |  |
| `limit` | `float` | No |  |
| `messages` | `list` | Yes |  |
| `needle` | `dict` | Yes | Full-text search expression to match events containing the specified text or pattern. |
| `result` | `list` | Yes |  |
| `success` | `bool` | Yes |  |
| `timeframe` | `dict` | Yes |  |
| `type` | `str` | Yes |  |

### Operations

#### `create(reqdata, ctrl=None) -> dict`

Create a new entity with the given data. Returns the created entity data and raises on error.

```python
result = client.Value().create({
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

### Common Methods

#### `data_get() -> dict`

Get the entity data.

#### `data_set(data)`

Set the entity data.

#### `match_get() -> dict`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make() -> Entity`

Create a new `ValueEntity` instance with the same options.

#### `get_name() -> str`

Return the entity name.


---

## VersionEntity

```python
version = client.Version()
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `annotations` | `dict` | No | Metadata about the version. |
| `assets` | `dict` | No | Configuration for assets within a Worker. |
| `author_email` | `str` | No | Email of the user who created the version. |
| `author_id` | `str` | No | Identifier of the user who created the version. |
| `bindings` | `list` | No | List of bindings attached to a Worker. |
| `cache_options` | `dict` | Yes | Global CacheW configuration for the Worker. |
| `compatibility_date` | `str` | No | Date indicating targeted support in the Workers runtime. |
| `compatibility_flags` | `list` | No | Flags that enable or disable certain features in the Workers runtime. |
| `containers` | `list` | No | List of containers attached to a Worker. |
| `created_on` | `str` | Yes | When the version was created. |
| `errors` | `list` | Yes |  |
| `exports` | `Any` | No | Declarative exports for the version, including Durable Object classes (with their `storage` backend) and named Worker entrypoints. |
| `exports_reconciliation` | `Any` | No | Summary of the declarative exports reconciliation that ran on this upload. |
| `id` | `str` | Yes | Version identifier. |
| `limits` | `dict` | No | Resource limits enforced at runtime. |
| `main_module` | `str` | No | The name of the main module in the `modules` array (e.g. |
| `messages` | `list` | Yes |  |
| `migration_tag` | `str` | No | Durable Object migration tag. |
| `migrations` | `Any` | No | Migrations for Durable Objects associated with the version. |
| `modules` | `list` | No | Code, sourcemaps, and other content used at runtime. |
| `number` | `int` | Yes | The integer version number, starting from one. |
| `package_dependencies` | `list` | No | The list of npm packages that were installed and used when this Worker version was built. |
| `placement` | `dict` | No | Configuration for [Smart Placement](https://developers.cloudflare.com/workers/configuration/smart-placement). |
| `result` | `dict` | Yes |  |
| `source` | `str` | No | The client used to create the version. |
| `startup_time_ms` | `int` | No | Time in milliseconds spent on [Worker startup](https://developers.cloudflare.com/workers/platform/limits/#worker-startup-time). |
| `success` | `bool` | Yes | Whether the API call was successful. |
| `urls` | `list` | Yes | All routable URLs that always point to this version. |
| `usage_model` | `str` | No | Usage model for the version. |

### Operations

#### `create(reqdata, ctrl=None) -> dict`

Create a new entity with the given data. Returns the created entity data and raises on error.

```python
result = client.Version().create({
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

#### `list(reqmatch=None, ctrl=None) -> list`

List entities matching the given criteria. The match is optional — call `list()` with no argument to list all records. Returns a list and raises on error.

```python
results = client.Version().list({"account_id": "example", "worker_id": "example"})
for version in results:
    print(version)
```

#### `load(reqmatch, ctrl=None) -> dict`

Load a single entity matching the given criteria. Returns the entity data and raises on error.

```python
result = client.Version().load({"id": "version_id", "account_id": "account_id", "worker_id": "worker_id"})
```

#### `remove(reqmatch, ctrl=None) -> dict`

Remove the entity matching the given criteria. Raises on error.

```python
result = client.Version().remove({"id": "version_id", "account_id": "account_id", "worker_id": "worker_id"})
```

#### `update(reqdata, ctrl=None) -> dict`

Update an existing entity. The data must include the entity `id`. Returns the updated entity data and raises on error.

```python
result = client.Version().update({
    "id": "version_id",
    "account_id": "account_id",
    "worker_id": "worker_id",
    # Fields to update
})
```

### Common Methods

#### `data_get() -> dict`

Get the entity data.

#### `data_set(data)`

Set the entity data.

#### `match_get() -> dict`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make() -> Entity`

Create a new `VersionEntity` instance with the same options.

#### `get_name() -> str`

Return the entity name.


---

## WorkerEntity

```python
worker = client.Worker()
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `auto_build` | `bool` | No | Whether pushes to the git branch build this Preview. |
| `auto_delete` | `bool` | No | Whether deleting the git branch also deletes this Preview. |
| `branch` | `Any` | No | Git branch name (required if commit_hash not provided) |
| `commit_hash` | `Any` | No | Git commit hash (required if branch not provided) |
| `errors` | `list` | Yes |  |
| `git_repository` | `Any` | Yes | Git repository settings to update |
| `id` | `str` | No |  |
| `messages` | `list` | Yes |  |
| `previews_base_config` | `dict` | Yes | Build and deploy settings when creating a Worker build configuration |
| `previews_enabled` | `bool` | Yes | Whether Previews are enabled for this Worker |
| `production_settings` | `dict` | Yes | Build and deploy settings when creating a Worker build configuration |
| `result` | `dict` | Yes | A single Preview of a Worker, with the build settings it currently uses. |
| `result_info` | `dict` | No |  |
| `script_tag` | `str` | Yes | System-generated tag of the Worker. |
| `seed_repo` | `Any` | No | Optional repository and file overrides used to seed this build. |
| `settings` | `dict` | No | Partial build settings for updating a Worker build configuration |
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

#### `create(reqdata, ctrl=None) -> dict`

Create a new entity with the given data. Returns the created entity data and raises on error.

```python
result = client.Worker().create({
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

#### `list(reqmatch=None, ctrl=None) -> list`

List entities matching the given criteria. The match is optional — call `list()` with no argument to list all records. Returns a list and raises on error.

```python
results = client.Worker().list({"account_id": "example"})
for worker in results:
    print(worker)
```

#### `load(reqmatch, ctrl=None) -> dict`

Load a single entity matching the given criteria. Returns the entity data and raises on error.

```python
result = client.Worker().load({"id": "worker_id", "account_id": "account_id"})
```

#### `remove(reqmatch, ctrl=None) -> dict`

Remove the entity matching the given criteria. Raises on error.

```python
result = client.Worker().remove({"id": "worker_id", "account_id": "account_id"})
```

#### `update(reqdata, ctrl=None) -> dict`

Update an existing entity. The data must include the entity `id`. Returns the updated entity data and raises on error.

```python
result = client.Worker().update({
    "id": "worker_id",
    "account_id": "account_id",
    # Fields to update
})
```

### Common Methods

#### `data_get() -> dict`

Get the entity data.

#### `data_set(data)`

Set the entity data.

#### `match_get() -> dict`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make() -> Entity`

Create a new `WorkerEntity` instance with the same options.

#### `get_name() -> str`

Return the entity name.


---

## WorkerCronTriggerEntity

```python
worker_cron_trigger = client.WorkerCronTrigger()
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `errors` | `list` | Yes |  |
| `messages` | `list` | Yes |  |
| `result` | `dict` | Yes |  |
| `success` | `bool` | Yes | Whether the API call was successful. |

### Operations

#### `list(reqmatch=None, ctrl=None) -> list`

List entities matching the given criteria. The match is optional — call `list()` with no argument to list all records. Returns a list and raises on error.

```python
results = client.WorkerCronTrigger().list({"account_id": "example", "script_name": "example"})
for worker_cron_trigger in results:
    print(worker_cron_trigger)
```

#### `update(reqdata, ctrl=None) -> dict`

Update an existing entity. The data must include the entity `id`. Returns the updated entity data and raises on error.

```python
result = client.WorkerCronTrigger().update({
    "account_id": "account_id",
    "script_name": "script_name",
    # Fields to update
})
```

### Common Methods

#### `data_get() -> dict`

Get the entity data.

#### `data_set(data)`

Set the entity data.

#### `match_get() -> dict`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make() -> Entity`

Create a new `WorkerCronTriggerEntity` instance with the same options.

#### `get_name() -> str`

Return the entity name.


---

## WorkerDeploymentEntity

```python
worker_deployment = client.WorkerDeployment()
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `annotations` | `dict` | No |  |
| `author_email` | `str` | No |  |
| `created_on` | `str` | Yes |  |
| `errors` | `list` | Yes |  |
| `id` | `str` | Yes |  |
| `messages` | `list` | Yes |  |
| `result` | `dict` | Yes |  |
| `source` | `str` | Yes |  |
| `strategy` | `str` | Yes |  |
| `success` | `bool` | Yes | Whether the API call was successful. |
| `versions` | `list` | Yes | Worker versions included in this deployment. |

### Operations

#### `create(reqdata, ctrl=None) -> dict`

Create a new entity with the given data. Returns the created entity data and raises on error.

```python
result = client.WorkerDeployment().create({
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

#### `load(reqmatch, ctrl=None) -> dict`

Load a single entity matching the given criteria. Returns the entity data and raises on error.

```python
result = client.WorkerDeployment().load({"id": "worker_deployment_id", "account_id": "account_id"})
```

### Common Methods

#### `data_get() -> dict`

Get the entity data.

#### `data_set(data)`

Set the entity data.

#### `match_get() -> dict`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make() -> Entity`

Create a new `WorkerDeploymentEntity` instance with the same options.

#### `get_name() -> str`

Return the entity name.


---

## WorkerEnvironmentEntity

```python
worker_environment = client.WorkerEnvironment()
```

### Operations

#### `load(reqmatch, ctrl=None) -> dict`

Load a single entity matching the given criteria. Returns the entity data and raises on error.

```python
result = client.WorkerEnvironment().load({"account_id": "account_id", "environment_name": "environment_name", "service_id": "service_id"})
```

### Common Methods

#### `data_get() -> dict`

Get the entity data.

#### `data_set(data)`

Set the entity data.

#### `match_get() -> dict`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make() -> Entity`

Create a new `WorkerEnvironmentEntity` instance with the same options.

#### `get_name() -> str`

Return the entity name.


---

## WorkerRouteEntity

```python
worker_route = client.WorkerRoute()
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `errors` | `list` | Yes |  |
| `id` | `str` | Yes |  |
| `messages` | `list` | Yes |  |
| `pattern` | `str` | Yes | Pattern to match incoming requests against. |
| `result` | `dict` | Yes |  |
| `script` | `str` | No | Name of the script to run if the route matches. |
| `success` | `bool` | Yes | Whether the API call was successful. |

### Operations

#### `create(reqdata, ctrl=None) -> dict`

Create a new entity with the given data. Returns the created entity data and raises on error.

```python
result = client.WorkerRoute().create({
    "zone_id": "example_zone_id",  # str
    "errors": [],  # list
    "id": "example_id",  # str
    "messages": [],  # list
    "pattern": "example_pattern",  # str
    "result": {},  # dict
    "success": True,  # bool
})
```

#### `list(reqmatch=None, ctrl=None) -> list`

List entities matching the given criteria. The match is optional — call `list()` with no argument to list all records. Returns a list and raises on error.

```python
results = client.WorkerRoute().list({"zone_id": "example"})
for worker_route in results:
    print(worker_route)
```

#### `load(reqmatch, ctrl=None) -> dict`

Load a single entity matching the given criteria. Returns the entity data and raises on error.

```python
result = client.WorkerRoute().load({"id": "worker_route_id", "zone_id": "zone_id"})
```

#### `remove(reqmatch, ctrl=None) -> dict`

Remove the entity matching the given criteria. Raises on error.

```python
result = client.WorkerRoute().remove({"id": "worker_route_id", "zone_id": "zone_id"})
```

#### `update(reqdata, ctrl=None) -> dict`

Update an existing entity. The data must include the entity `id`. Returns the updated entity data and raises on error.

```python
result = client.WorkerRoute().update({
    "id": "worker_route_id",
    "zone_id": "zone_id",
    # Fields to update
})
```

### Common Methods

#### `data_get() -> dict`

Get the entity data.

#### `data_set(data)`

Set the entity data.

#### `match_get() -> dict`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make() -> Entity`

Create a new `WorkerRouteEntity` instance with the same options.

#### `get_name() -> str`

Return the entity name.


---

## WorkerScriptEntity

```python
worker_script = client.WorkerScript()
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `errors` | `list` | Yes |  |
| `id` | `str` | No |  |
| `messages` | `list` | Yes |  |
| `result` | `dict` | No | A secret value accessible through a binding. |
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

#### `create(reqdata, ctrl=None) -> dict`

Create a new entity with the given data. Returns the created entity data and raises on error.

```python
result = client.WorkerScript().create({
    "account_id": "example_account_id",  # str
    "script_name": "example_script_name",  # str
    "errors": [],  # list
    "messages": [],  # list
    "success": True,  # bool
})
```

#### `list(reqmatch=None, ctrl=None) -> list`

List entities matching the given criteria. The match is optional — call `list()` with no argument to list all records. Returns a list and raises on error.

```python
results = client.WorkerScript().list({"account_id": "example"})
for worker_script in results:
    print(worker_script)
```

#### `load(reqmatch, ctrl=None) -> dict`

Load a single entity matching the given criteria. Returns the entity data and raises on error.

```python
result = client.WorkerScript().load({"id": "worker_script_id", "account_id": "account_id"})
```

#### `remove(reqmatch, ctrl=None) -> dict`

Remove the entity matching the given criteria. Raises on error.

```python
result = client.WorkerScript().remove({"account_id": "account_id", "script_name": "script_name"})
```

#### `update(reqdata, ctrl=None) -> dict`

Update an existing entity. The data must include the entity `id`. Returns the updated entity data and raises on error.

```python
result = client.WorkerScript().update({
    "id": "worker_script_id",
    "account_id": "account_id",
    # Fields to update
})
```

### Common Methods

#### `data_get() -> dict`

Get the entity data.

#### `data_set(data)`

Set the entity data.

#### `match_get() -> dict`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make() -> Entity`

Create a new `WorkerScriptEntity` instance with the same options.

#### `get_name() -> str`

Return the entity name.


---

## WorkerSubdomainEntity

```python
worker_subdomain = client.WorkerSubdomain()
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `errors` | `list` | Yes |  |
| `messages` | `list` | Yes |  |
| `result` | `dict` | Yes |  |
| `subdomain` | `str` | Yes |  |
| `success` | `bool` | Yes | Whether the API call was successful. |

### Operations

#### `list(reqmatch=None, ctrl=None) -> list`

List entities matching the given criteria. The match is optional — call `list()` with no argument to list all records. Returns a list and raises on error.

```python
results = client.WorkerSubdomain().list({"account_id": "example"})
for worker_subdomain in results:
    print(worker_subdomain)
```

#### `remove(reqmatch, ctrl=None) -> dict`

Remove the entity matching the given criteria. Raises on error.

```python
result = client.WorkerSubdomain().remove({"account_id": "account_id"})
```

#### `update(reqdata, ctrl=None) -> dict`

Update an existing entity. The data must include the entity `id`. Returns the updated entity data and raises on error.

```python
result = client.WorkerSubdomain().update({
    "account_id": "account_id",
    # Fields to update
})
```

### Common Methods

#### `data_get() -> dict`

Get the entity data.

#### `data_set(data)`

Set the entity data.

#### `match_get() -> dict`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make() -> Entity`

Create a new `WorkerSubdomainEntity` instance with the same options.

#### `get_name() -> str`

Return the entity name.


---

## WorkerTailLogEntity

```python
worker_tail_log = client.WorkerTailLog()
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `errors` | `list` | Yes |  |
| `messages` | `list` | Yes |  |
| `result` | `dict` | Yes |  |
| `success` | `bool` | Yes | Whether the API call was successful. |

### Operations

#### `create(reqdata, ctrl=None) -> dict`

Create a new entity with the given data. Returns the created entity data and raises on error.

```python
result = client.WorkerTailLog().create({
    "account_id": "example_account_id",  # str
    "script_name": "example_script_name",  # str
    "errors": [],  # list
    "messages": [],  # list
    "result": {},  # dict
    "success": True,  # bool
})
```

#### `list(reqmatch=None, ctrl=None) -> list`

List entities matching the given criteria. The match is optional — call `list()` with no argument to list all records. Returns a list and raises on error.

```python
results = client.WorkerTailLog().list({"account_id": "example", "script_name": "example"})
for worker_tail_log in results:
    print(worker_tail_log)
```

### Common Methods

#### `data_get() -> dict`

Get the entity data.

#### `data_set(data)`

Set the entity data.

#### `match_get() -> dict`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make() -> Entity`

Create a new `WorkerTailLogEntity` instance with the same options.

#### `get_name() -> str`

Return the entity name.


---

## WorkersAccountSettingEntity

```python
workers_account_setting = client.WorkersAccountSetting()
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `default_usage_model` | `str` | No |  |
| `errors` | `list` | Yes |  |
| `green_compute` | `bool` | No |  |
| `messages` | `list` | Yes |  |
| `result` | `dict` | Yes |  |
| `success` | `bool` | Yes | Whether the API call was successful. |

### Operations

#### `list(reqmatch=None, ctrl=None) -> list`

List entities matching the given criteria. The match is optional — call `list()` with no argument to list all records. Returns a list and raises on error.

```python
results = client.WorkersAccountSetting().list({"account_id": "example"})
for workers_account_setting in results:
    print(workers_account_setting)
```

#### `update(reqdata, ctrl=None) -> dict`

Update an existing entity. The data must include the entity `id`. Returns the updated entity data and raises on error.

```python
result = client.WorkersAccountSetting().update({
    "account_id": "account_id",
    # Fields to update
})
```

### Common Methods

#### `data_get() -> dict`

Get the entity data.

#### `data_set(data)`

Set the entity data.

#### `match_get() -> dict`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make() -> Entity`

Create a new `WorkersAccountSettingEntity` instance with the same options.

#### `get_name() -> str`

Return the entity name.


---

## WorkersApiResponseNullResultEntity

```python
workers_api_response_null_result = client.WorkersApiResponseNullResult()
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `errors` | `list` | Yes |  |
| `messages` | `list` | Yes |  |
| `result` | `dict` | No |  |
| `success` | `bool` | Yes | Whether the API call was successful. |

### Operations

#### `remove(reqmatch, ctrl=None) -> dict`

Remove the entity matching the given criteria. Raises on error.

```python
result = client.WorkersApiResponseNullResult().remove({"account_id": "account_id"})
```

#### `update(reqdata, ctrl=None) -> dict`

Update an existing entity. The data must include the entity `id`. Returns the updated entity data and raises on error.

```python
result = client.WorkersApiResponseNullResult().update({
    "account_id": "account_id",
    "namespace_id": "namespace_id",
    "script_id": "script_id",
    "tag": "tag",
    # Fields to update
})
```

### Common Methods

#### `data_get() -> dict`

Get the entity data.

#### `data_set(data)`

Set the entity data.

#### `match_get() -> dict`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make() -> Entity`

Create a new `WorkersApiResponseNullResultEntity` instance with the same options.

#### `get_name() -> str`

Return the entity name.


---

## WorkersCompletedUploadAssetEntity

```python
workers_completed_upload_asset = client.WorkersCompletedUploadAsset()
```

### Operations

#### `create(reqdata, ctrl=None) -> dict`

Create a new entity with the given data. Returns the created entity data and raises on error.

```python
result = client.WorkersCompletedUploadAsset().create({
    "account_id": "example_account_id",  # str
    "base64": True,  # bool
})
```

### Common Methods

#### `data_get() -> dict`

Get the entity data.

#### `data_set(data)`

Set the entity data.

#### `match_get() -> dict`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make() -> Entity`

Create a new `WorkersCompletedUploadAssetEntity` instance with the same options.

#### `get_name() -> str`

Return the entity name.


---

## WorkersCreateAssetsUploadSessionEntity

```python
workers_create_assets_upload_session = client.WorkersCreateAssetsUploadSession()
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `manifest` | `dict` | Yes | A manifest ([path]: {hash, size}) map of files to upload. |

### Operations

#### `create(reqdata, ctrl=None) -> dict`

Create a new entity with the given data. Returns the created entity data and raises on error.

```python
result = client.WorkersCreateAssetsUploadSession().create({
    "account_id": "example_account_id",  # str
    "script_name": "example_script_name",  # str
    "manifest": {},  # dict
})
```

### Common Methods

#### `data_get() -> dict`

Get the entity data.

#### `data_set(data)`

Set the entity data.

#### `match_get() -> dict`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make() -> Entity`

Create a new `WorkersCreateAssetsUploadSessionEntity` instance with the same options.

#### `get_name() -> str`

Return the entity name.


---

## WorkersForPlatformEntity

```python
workers_for_platform = client.WorkersForPlatform()
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `errors` | `list` | Yes |  |
| `messages` | `list` | Yes |  |
| `result` | `dict` | Yes | A secret value accessible through a binding. |
| `success` | `bool` | Yes | Whether the API call was successful. |

### Field Usage by Operation

| Field | load | list | update |
| --- | --- | --- | --- |
| `errors` | - | - | - |
| `messages` | - | - | - |
| `result` | - | Yes | - |
| `success` | - | - | - |

### Operations

#### `list(reqmatch=None, ctrl=None) -> list`

List entities matching the given criteria. The match is optional — call `list()` with no argument to list all records. Returns a list and raises on error.

```python
results = client.WorkersForPlatform().list({"account_id": "example"})
for workers_for_platform in results:
    print(workers_for_platform)
```

#### `load(reqmatch, ctrl=None) -> dict`

Load a single entity matching the given criteria. Returns the entity data and raises on error.

```python
result = client.WorkersForPlatform().load({"account_id": "account_id", "namespace_id": "namespace_id"})
```

#### `update(reqdata, ctrl=None) -> dict`

Update an existing entity. The data must include the entity `id`. Returns the updated entity data and raises on error.

```python
result = client.WorkersForPlatform().update({
    "account_id": "account_id",
    "namespace_id": "namespace_id",
    "script_name": "script_name",
    # Fields to update
})
```

### Common Methods

#### `data_get() -> dict`

Get the entity data.

#### `data_set(data)`

Set the entity data.

#### `match_get() -> dict`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make() -> Entity`

Create a new `WorkersForPlatformEntity` instance with the same options.

#### `get_name() -> str`

Return the entity name.


---

## WorkersKvApiResponseCommonNoResultEntity

```python
workers_kv_api_response_common_no_result = client.WorkersKvApiResponseCommonNoResult()
```

### Operations

#### `remove(reqmatch, ctrl=None) -> dict`

Remove the entity matching the given criteria. Raises on error.

```python
result = client.WorkersKvApiResponseCommonNoResult().remove({"account_id": "account_id", "namespace_id": "namespace_id"})
```

#### `update(reqdata, ctrl=None) -> dict`

Update an existing entity. The data must include the entity `id`. Returns the updated entity data and raises on error.

```python
result = client.WorkersKvApiResponseCommonNoResult().update({
    "account_id": "account_id",
    "key_name": "key_name",
    "namespace_id": "namespace_id",
    # Fields to update
})
```

### Common Methods

#### `data_get() -> dict`

Get the entity data.

#### `data_set(data)`

Set the entity data.

#### `match_get() -> dict`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make() -> Entity`

Create a new `WorkersKvApiResponseCommonNoResultEntity` instance with the same options.

#### `get_name() -> str`

Return the entity name.


---

## WorkersKvNamespaceEntity

```python
workers_kv_namespace = client.WorkersKvNamespace()
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `errors` | `list` | Yes |  |
| `id` | `str` | No |  |
| `jurisdiction` | `str` | No | Specify the jurisdiction to restrict the KV namespace to durably store data within. |
| `keys` | `list` | Yes | Array of keys to retrieve (maximum of 100). |
| `messages` | `list` | Yes |  |
| `result` | `Any` | No |  |
| `result_info` | `dict` | No |  |
| `success` | `bool` | Yes | Whether the API call was successful. |
| `title` | `str` | Yes | Human-readable string name for a Workers KV namespace. |
| `type` | `str` | No | Return values as strings with `text`, or parse stored JSON values with `json`. |
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

#### `create(reqdata, ctrl=None) -> dict`

Create a new entity with the given data. Returns the created entity data and raises on error.

```python
result = client.WorkersKvNamespace().create({
    "account_id": "example_account_id",  # str
    "errors": [],  # list
    "keys": [],  # list
    "messages": [],  # list
    "success": True,  # bool
    "title": "example_title",  # str
})
```

#### `list(reqmatch=None, ctrl=None) -> list`

List entities matching the given criteria. The match is optional — call `list()` with no argument to list all records. Returns a list and raises on error.

```python
results = client.WorkersKvNamespace().list({"account_id": "example"})
for workers_kv_namespace in results:
    print(workers_kv_namespace)
```

#### `load(reqmatch, ctrl=None) -> dict`

Load a single entity matching the given criteria. Returns the entity data and raises on error.

```python
result = client.WorkersKvNamespace().load({"id": "workers_kv_namespace_id", "account_id": "account_id"})
```

#### `remove(reqmatch, ctrl=None) -> dict`

Remove the entity matching the given criteria. Raises on error.

```python
result = client.WorkersKvNamespace().remove({"account_id": "account_id", "namespace_id": "namespace_id"})
```

#### `update(reqdata, ctrl=None) -> dict`

Update an existing entity. The data must include the entity `id`. Returns the updated entity data and raises on error.

```python
result = client.WorkersKvNamespace().update({
    "id": "workers_kv_namespace_id",
    "account_id": "account_id",
    # Fields to update
})
```

### Common Methods

#### `data_get() -> dict`

Get the entity data.

#### `data_set(data)`

Set the entity data.

#### `match_get() -> dict`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make() -> Entity`

Create a new `WorkersKvNamespaceEntity` instance with the same options.

#### `get_name() -> str`

Return the entity name.


---

## WorkersNamespaceListEntity

```python
workers_namespace_list = client.WorkersNamespaceList()
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `errors` | `list` | Yes |  |
| `messages` | `list` | Yes |  |
| `result` | `list` | No |  |
| `success` | `bool` | Yes | Whether the API call was successful. |

### Operations

#### `list(reqmatch=None, ctrl=None) -> list`

List entities matching the given criteria. The match is optional — call `list()` with no argument to list all records. Returns a list and raises on error.

```python
results = client.WorkersNamespaceList().list({"account_id": "example"})
for workers_namespace_list in results:
    print(workers_namespace_list)
```

### Common Methods

#### `data_get() -> dict`

Get the entity data.

#### `data_set(data)`

Set the entity data.

#### `match_get() -> dict`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make() -> Entity`

Create a new `WorkersNamespaceListEntity` instance with the same options.

#### `get_name() -> str`

Return the entity name.


---

## WorkersNamespaceScriptDeleteBulkEntity

```python
workers_namespace_script_delete_bulk = client.WorkersNamespaceScriptDeleteBulk()
```

### Operations

#### `remove(reqmatch, ctrl=None) -> dict`

Remove the entity matching the given criteria. Raises on error.

```python
result = client.WorkersNamespaceScriptDeleteBulk().remove({"account_id": "account_id", "dispatch_namespace": "dispatch_namespace", "tag": "tag"})
```

### Common Methods

#### `data_get() -> dict`

Get the entity data.

#### `data_set(data)`

Set the entity data.

#### `match_get() -> dict`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make() -> Entity`

Create a new `WorkersNamespaceScriptDeleteBulkEntity` instance with the same options.

#### `get_name() -> str`

Return the entity name.


---

## WorkersNamespaceScriptResponseSingleEntity

```python
workers_namespace_script_response_single = client.WorkersNamespaceScriptResponseSingle()
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `errors` | `list` | Yes |  |
| `messages` | `list` | Yes |  |
| `result` | `dict` | Yes | Details about a worker uploaded to a Workers for Platforms namespace. |
| `success` | `bool` | Yes | Whether the API call was successful. |

### Operations

#### `load(reqmatch, ctrl=None) -> dict`

Load a single entity matching the given criteria. Returns the entity data and raises on error.

```python
result = client.WorkersNamespaceScriptResponseSingle().load({"account_id": "account_id", "namespace_id": "namespace_id", "script_name": "script_name"})
```

#### `update(reqdata, ctrl=None) -> dict`

Update an existing entity. The data must include the entity `id`. Returns the updated entity data and raises on error.

```python
result = client.WorkersNamespaceScriptResponseSingle().update({
    "account_id": "account_id",
    "namespace_id": "namespace_id",
    "script_name": "script_name",
    # Fields to update
})
```

### Common Methods

#### `data_get() -> dict`

Get the entity data.

#### `data_set(data)`

Set the entity data.

#### `match_get() -> dict`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make() -> Entity`

Create a new `WorkersNamespaceScriptResponseSingleEntity` instance with the same options.

#### `get_name() -> str`

Return the entity name.


---

## WorkersNamespaceSingleEntity

```python
workers_namespace_single = client.WorkersNamespaceSingle()
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `errors` | `list` | Yes |  |
| `messages` | `list` | Yes |  |
| `name` | `str` | No | The name of the dispatch namespace. |
| `result` | `dict` | No |  |
| `success` | `bool` | Yes | Whether the API call was successful. |
| `trusted_workers` | `bool` | No | Whether the Workers in the namespace are executed in a "trusted" manner. |

### Operations

#### `create(reqdata, ctrl=None) -> dict`

Create a new entity with the given data. Returns the created entity data and raises on error.

```python
result = client.WorkersNamespaceSingle().create({
    "account_id": "example_account_id",  # str
    "errors": [],  # list
    "messages": [],  # list
    "success": True,  # bool
})
```

#### `load(reqmatch, ctrl=None) -> dict`

Load a single entity matching the given criteria. Returns the entity data and raises on error.

```python
result = client.WorkersNamespaceSingle().load({"account_id": "account_id", "dispatch_namespace": "dispatch_namespace"})
```

#### `update(reqdata, ctrl=None) -> dict`

Update an existing entity. The data must include the entity `id`. Returns the updated entity data and raises on error.

```python
result = client.WorkersNamespaceSingle().update({
    "account_id": "account_id",
    "dispatch_namespace": "dispatch_namespace",
    # Fields to update
})
```

### Common Methods

#### `data_get() -> dict`

Get the entity data.

#### `data_set(data)`

Set the entity data.

#### `match_get() -> dict`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make() -> Entity`

Create a new `WorkersNamespaceSingleEntity` instance with the same options.

#### `get_name() -> str`

Return the entity name.


---

## WorkersPipelinesOtherEntity

```python
workers_pipelines_other = client.WorkersPipelinesOther()
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `config` | `Any` | No | Defines the configuration of the R2 Sink. |
| `created_at` | `str` | Yes |  |
| `destination` | `dict` | Yes |  |
| `endpoint` | `str` | Yes | Indicates the endpoint URL to send traffic. |
| `failure_reason` | `str` | No | Indicates the reason for the failure of the Pipeline. |
| `format` | `Any` | No | Defines the output data format of a sink. |
| `graph` | `dict` | Yes | Indicates the processing flow to implement the SQL. |
| `http` | `dict` | Yes |  |
| `id` | `str` | Yes | Indicates a unique identifier for this pipeline. |
| `modified_at` | `str` | Yes |  |
| `name` | `str` | Yes | Indicates the name of the Pipeline. |
| `schema` | `dict` | No | Defines the schema of the events in the data stream. |
| `source` | `list` | Yes |  |
| `sql` | `str` | Yes | Specifies SQL for the Pipeline processing flow. |
| `status` | `str` | Yes | Indicates the current status of the Pipeline. |
| `tables` | `list` | Yes | List of streams and sinks used by this pipeline. |
| `type` | `str` | Yes | Specifies the type of sink. |
| `version` | `float` | Yes | Indicates the version number of last saved configuration. |
| `worker_binding` | `dict` | Yes |  |

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

#### `create(reqdata, ctrl=None) -> dict`

Create a new entity with the given data. Returns the created entity data and raises on error.

```python
result = client.WorkersPipelinesOther().create({
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

#### `list(reqmatch=None, ctrl=None) -> list`

List entities matching the given criteria. The match is optional — call `list()` with no argument to list all records. Returns a list and raises on error.

```python
results = client.WorkersPipelinesOther().list({"account_id": "example"})
for workers_pipelines_other in results:
    print(workers_pipelines_other)
```

#### `load(reqmatch, ctrl=None) -> dict`

Load a single entity matching the given criteria. Returns the entity data and raises on error.

```python
result = client.WorkersPipelinesOther().load({"account_id": "account_id"})
```

#### `remove(reqmatch, ctrl=None) -> dict`

Remove the entity matching the given criteria. Raises on error.

```python
result = client.WorkersPipelinesOther().remove({"account_id": "account_id"})
```

#### `update(reqdata, ctrl=None) -> dict`

Update an existing entity. The data must include the entity `id`. Returns the updated entity data and raises on error.

```python
result = client.WorkersPipelinesOther().update({
    "account_id": "account_id",
    "pipeline_name": "pipeline_name",
    # Fields to update
})
```

### Common Methods

#### `data_get() -> dict`

Get the entity data.

#### `data_set(data)`

Set the entity data.

#### `match_get() -> dict`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make() -> Entity`

Create a new `WorkersPipelinesOtherEntity` instance with the same options.

#### `get_name() -> str`

Return the entity name.


---

## WorkersScriptAndVersionSettingEntity

```python
workers_script_and_version_setting = client.WorkersScriptAndVersionSetting()
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `errors` | `list` | Yes |  |
| `messages` | `list` | Yes |  |
| `result` | `dict` | Yes |  |
| `success` | `bool` | Yes | Whether the API call was successful. |

### Operations

#### `list(reqmatch=None, ctrl=None) -> list`

List entities matching the given criteria. The match is optional — call `list()` with no argument to list all records. Returns a list and raises on error.

```python
results = client.WorkersScriptAndVersionSetting().list({"account_id": "example", "script_name": "example"})
for workers_script_and_version_setting in results:
    print(workers_script_and_version_setting)
```

#### `update(reqdata, ctrl=None) -> dict`

Update an existing entity. The data must include the entity `id`. Returns the updated entity data and raises on error.

```python
result = client.WorkersScriptAndVersionSetting().update({
    "account_id": "account_id",
    "script_name": "script_name",
    # Fields to update
})
```

### Common Methods

#### `data_get() -> dict`

Get the entity data.

#### `data_set(data)`

Set the entity data.

#### `match_get() -> dict`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make() -> Entity`

Create a new `WorkersScriptAndVersionSettingEntity` instance with the same options.

#### `get_name() -> str`

Return the entity name.


---

## WorkersScriptResponseCollectionEntity

```python
workers_script_response_collection = client.WorkersScriptResponseCollection()
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `errors` | `list` | Yes |  |
| `messages` | `list` | Yes |  |
| `result` | `list` | Yes |  |
| `success` | `bool` | Yes | Whether the API call was successful. |

### Operations

#### `list(reqmatch=None, ctrl=None) -> list`

List entities matching the given criteria. The match is optional — call `list()` with no argument to list all records. Returns a list and raises on error.

```python
results = client.WorkersScriptResponseCollection().list({"account_id": "example"})
for workers_script_response_collection in results:
    print(workers_script_response_collection)
```

### Common Methods

#### `data_get() -> dict`

Get the entity data.

#### `data_set(data)`

Set the entity data.

#### `match_get() -> dict`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make() -> Entity`

Create a new `WorkersScriptResponseCollectionEntity` instance with the same options.

#### `get_name() -> str`

Return the entity name.


---

## WorkersScriptResponseSingleEntity

```python
workers_script_response_single = client.WorkersScriptResponseSingle()
```

### Operations

#### `update(reqdata, ctrl=None) -> dict`

Update an existing entity. The data must include the entity `id`. Returns the updated entity data and raises on error.

```python
result = client.WorkersScriptResponseSingle().update({
    "account_id": "account_id",
    # Fields to update
})
```

### Common Methods

#### `data_get() -> dict`

Get the entity data.

#### `data_set(data)`

Set the entity data.

#### `match_get() -> dict`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make() -> Entity`

Create a new `WorkersScriptResponseSingleEntity` instance with the same options.

#### `get_name() -> str`

Return the entity name.


---

## WorkersSmartPlacementEntity

```python
workers_smart_placement = client.WorkersSmartPlacement()
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `errors` | `list` | Yes |  |
| `messages` | `list` | Yes |  |
| `result` | `dict` | Yes |  |
| `success` | `bool` | Yes | Whether the API call was successful. |

### Operations

#### `list(reqmatch=None, ctrl=None) -> list`

List entities matching the given criteria. The match is optional — call `list()` with no argument to list all records. Returns a list and raises on error.

```python
results = client.WorkersSmartPlacement().list({"account_id": "example"})
for workers_smart_placement in results:
    print(workers_smart_placement)
```

### Common Methods

#### `data_get() -> dict`

Get the entity data.

#### `data_set(data)`

Set the entity data.

#### `match_get() -> dict`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make() -> Entity`

Create a new `WorkersSmartPlacementEntity` instance with the same options.

#### `get_name() -> str`

Return the entity name.


---

## WorkersUsageModelEntity

```python
workers_usage_model = client.WorkersUsageModel()
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `errors` | `list` | Yes |  |
| `messages` | `list` | Yes |  |
| `result` | `dict` | Yes |  |
| `success` | `bool` | Yes | Whether the API call was successful. |
| `usage_model` | `str` | No | Usage model for the Worker invocations. |
| `user_limits` | `dict` | No | User-defined resource limits for Workers with standard usage model. |

### Operations

#### `list(reqmatch=None, ctrl=None) -> list`

List entities matching the given criteria. The match is optional — call `list()` with no argument to list all records. Returns a list and raises on error.

```python
results = client.WorkersUsageModel().list({"account_id": "example", "script_name": "example"})
for workers_usage_model in results:
    print(workers_usage_model)
```

#### `update(reqdata, ctrl=None) -> dict`

Update an existing entity. The data must include the entity `id`. Returns the updated entity data and raises on error.

```python
result = client.WorkersUsageModel().update({
    "account_id": "account_id",
    "script_name": "script_name",
    # Fields to update
})
```

### Common Methods

#### `data_get() -> dict`

Get the entity data.

#### `data_set(data)`

Set the entity data.

#### `match_get() -> dict`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make() -> Entity`

Create a new `WorkersUsageModelEntity` instance with the same options.

#### `get_name() -> str`

Return the entity name.


---

## WorkersVersionsListEntity

```python
workers_versions_list = client.WorkersVersionsList()
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `errors` | `list` | Yes |  |
| `messages` | `list` | Yes |  |
| `result` | `dict` | Yes |  |
| `success` | `bool` | Yes | Whether the API call was successful. |

### Operations

#### `list(reqmatch=None, ctrl=None) -> list`

List entities matching the given criteria. The match is optional — call `list()` with no argument to list all records. Returns a list and raises on error.

```python
results = client.WorkersVersionsList().list({"account_id": "example", "script_name": "example"})
for workers_versions_list in results:
    print(workers_versions_list)
```

### Common Methods

#### `data_get() -> dict`

Get the entity data.

#### `data_set(data)`

Set the entity data.

#### `match_get() -> dict`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make() -> Entity`

Create a new `WorkersVersionsListEntity` instance with the same options.

#### `get_name() -> str`

Return the entity name.


---

## WorkersVersionsSingleEntity

```python
workers_versions_single = client.WorkersVersionsSingle()
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `errors` | `list` | Yes |  |
| `messages` | `list` | Yes |  |
| `result` | `Any` | Yes |  |
| `success` | `bool` | Yes | Whether the API call was successful. |

### Operations

#### `load(reqmatch, ctrl=None) -> dict`

Load a single entity matching the given criteria. Returns the entity data and raises on error.

```python
result = client.WorkersVersionsSingle().load({"account_id": "account_id", "script_id": "script_id", "version_id": "version_id"})
```

### Common Methods

#### `data_get() -> dict`

Get the entity data.

#### `data_set(data)`

Set the entity data.

#### `match_get() -> dict`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make() -> Entity`

Create a new `WorkersVersionsSingleEntity` instance with the same options.

#### `get_name() -> str`

Return the entity name.


---

## WorkersVersionsUploadEntity

```python
workers_versions_upload = client.WorkersVersionsUpload()
```

### Operations

#### `create(reqdata, ctrl=None) -> dict`

Create a new entity with the given data. Returns the created entity data and raises on error.

```python
result = client.WorkersVersionsUpload().create({
    "account_id": "example_account_id",  # str
    "script_name": "example_script_name",  # str
})
```

### Common Methods

#### `data_get() -> dict`

Get the entity data.

#### `data_set(data)`

Set the entity data.

#### `match_get() -> dict`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make() -> Entity`

Create a new `WorkersVersionsUploadEntity` instance with the same options.

#### `get_name() -> str`

Return the entity name.


---

## WorkflowEntity

```python
workflow = client.Workflow()
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `class_name` | `str` | Yes |  |
| `concurrency` | `dict` | No |  |
| `default_retention` | `dict` | No | Default retention applied to instances of this version when they do not set their own retention. |
| `errors` | `list` | Yes |  |
| `id` | `str` | No |  |
| `instances` | `list` | Yes |  |
| `limits` | `dict` | No |  |
| `messages` | `list` | Yes |  |
| `result` | `dict` | Yes |  |
| `result_info` | `dict` | Yes |  |
| `schedules` | `list` | No |  |
| `script_name` | `str` | Yes |  |
| `success` | `bool` | Yes |  |

### Operations

#### `create(reqdata, ctrl=None) -> dict`

Create a new entity with the given data. Returns the created entity data and raises on error.

```python
result = client.Workflow().create({
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

#### `list(reqmatch=None, ctrl=None) -> list`

List entities matching the given criteria. The match is optional — call `list()` with no argument to list all records. Returns a list and raises on error.

```python
results = client.Workflow().list({"account_id": "example"})
for workflow in results:
    print(workflow)
```

#### `load(reqmatch, ctrl=None) -> dict`

Load a single entity matching the given criteria. Returns the entity data and raises on error.

```python
result = client.Workflow().load({"id": "workflow_id", "account_id": "account_id"})
```

#### `remove(reqmatch, ctrl=None) -> dict`

Remove the entity matching the given criteria. Raises on error.

```python
result = client.Workflow().remove({"id": "workflow_id", "account_id": "account_id"})
```

#### `update(reqdata, ctrl=None) -> dict`

Update an existing entity. The data must include the entity `id`. Returns the updated entity data and raises on error.

```python
result = client.Workflow().update({
    "id": "workflow_id",
    "account_id": "account_id",
    # Fields to update
})
```

### Common Methods

#### `data_get() -> dict`

Get the entity data.

#### `data_set(data)`

Set the entity data.

#### `match_get() -> dict`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make() -> Entity`

Create a new `WorkflowEntity` instance with the same options.

#### `get_name() -> str`

Return the entity name.


---

## Features

| Feature | Version | Description |
| --- | --- | --- |
| `test` | 0.0.1 | Test transport |


Features are activated via the `feature` option:

```python
client = CloudflareWorkersSDK({
    "feature": {
        "test": {"active": True},
    },
})
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

