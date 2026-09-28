# CloudflareWorkers Lua SDK Reference

Complete API reference for the CloudflareWorkers Lua SDK.


## CloudflareWorkersSDK

### Constructor

```lua
local sdk = require("cloudflare-workers_sdk")
local client = sdk.new(options)
```

Create a new SDK client instance.

**Parameters:**

| Name | Type | Description |
| --- | --- | --- |
| `options` | `table` | SDK configuration options. |
| `options.apikey` | `string` | API key for authentication. |
| `options.base` | `string` | Base URL for API requests. |
| `options.prefix` | `string` | URL prefix appended after base. |
| `options.suffix` | `string` | URL suffix appended after path. |
| `options.headers` | `table` | Custom headers for all requests. |
| `options.feature` | `table` | Feature configuration. |
| `options.system` | `table` | System overrides (e.g. custom fetch). |


### Static Methods

#### `sdk.test(testopts?, sdkopts?)`

Create a test client with mock features active. Both arguments are optional.

```lua
local client = sdk.test()
```


### Instance Methods

#### `Account(data)`

Create a new `Account` entity instance. Pass `nil` for no initial data.

#### `Application(data)`

Create a new `Application` entity instance. Pass `nil` for no initial data.

#### `Brapi(data)`

Create a new `Brapi` entity instance. Pass `nil` for no initial data.

#### `Build(data)`

Create a new `Build` entity instance. Pass `nil` for no initial data.

#### `BuildToken(data)`

Create a new `BuildToken` entity instance. Pass `nil` for no initial data.

#### `BuildsApi(data)`

Create a new `BuildsApi` entity instance. Pass `nil` for no initial data.

#### `Connection(data)`

Create a new `Connection` entity instance. Pass `nil` for no initial data.

#### `ContainerImage(data)`

Create a new `ContainerImage` entity instance. Pass `nil` for no initial data.

#### `ContainerInstance(data)`

Create a new `ContainerInstance` entity instance. Pass `nil` for no initial data.

#### `DeployHook(data)`

Create a new `DeployHook` entity instance. Pass `nil` for no initial data.

#### `Deployment(data)`

Create a new `Deployment` entity instance. Pass `nil` for no initial data.

#### `Destination(data)`

Create a new `Destination` entity instance. Pass `nil` for no initial data.

#### `Domain(data)`

Create a new `Domain` entity instance. Pass `nil` for no initial data.

#### `DurableObjectsNamespace(data)`

Create a new `DurableObjectsNamespace` entity instance. Pass `nil` for no initial data.

#### `EnvironmentVariable(data)`

Create a new `EnvironmentVariable` entity instance. Pass `nil` for no initial data.

#### `GitHubIntegration(data)`

Create a new `GitHubIntegration` entity instance. Pass `nil` for no initial data.

#### `Hyperdrive(data)`

Create a new `Hyperdrive` entity instance. Pass `nil` for no initial data.

#### `ImageRegistry(data)`

Create a new `ImageRegistry` entity instance. Pass `nil` for no initial data.

#### `Issue(data)`

Create a new `Issue` entity instance. Pass `nil` for no initial data.

#### `Key(data)`

Create a new `Key` entity instance. Pass `nil` for no initial data.

#### `LiveTail(data)`

Create a new `LiveTail` entity instance. Pass `nil` for no initial data.

#### `MetricsExport(data)`

Create a new `MetricsExport` entity instance. Pass `nil` for no initial data.

#### `Namespace(data)`

Create a new `Namespace` entity instance. Pass `nil` for no initial data.

#### `Preview(data)`

Create a new `Preview` entity instance. Pass `nil` for no initial data.

#### `PreviewDeployment(data)`

Create a new `PreviewDeployment` entity instance. Pass `nil` for no initial data.

#### `Query(data)`

Create a new `Query` entity instance. Pass `nil` for no initial data.

#### `RepositoryConnection(data)`

Create a new `RepositoryConnection` entity instance. Pass `nil` for no initial data.

#### `Rollout(data)`

Create a new `Rollout` entity instance. Pass `nil` for no initial data.

#### `SavedQuery(data)`

Create a new `SavedQuery` entity instance. Pass `nil` for no initial data.

#### `Script(data)`

Create a new `Script` entity instance. Pass `nil` for no initial data.

#### `ScriptSetting(data)`

Create a new `ScriptSetting` entity instance. Pass `nil` for no initial data.

#### `Secret(data)`

Create a new `Secret` entity instance. Pass `nil` for no initial data.

#### `SecretsStoreDelete(data)`

Create a new `SecretsStoreDelete` entity instance. Pass `nil` for no initial data.

#### `SecretsStoreQuota(data)`

Create a new `SecretsStoreQuota` entity instance. Pass `nil` for no initial data.

#### `SecretsStoreSecret(data)`

Create a new `SecretsStoreSecret` entity instance. Pass `nil` for no initial data.

#### `SecretsStoreStore(data)`

Create a new `SecretsStoreStore` entity instance. Pass `nil` for no initial data.

#### `SecretsStoreStoresResponseCollection(data)`

Create a new `SecretsStoreStoresResponseCollection` entity instance. Pass `nil` for no initial data.

#### `Setting(data)`

Create a new `Setting` entity instance. Pass `nil` for no initial data.

#### `Shared(data)`

Create a new `Shared` entity instance. Pass `nil` for no initial data.

#### `Tail(data)`

Create a new `Tail` entity instance. Pass `nil` for no initial data.

#### `Token(data)`

Create a new `Token` entity instance. Pass `nil` for no initial data.

#### `Trigger(data)`

Create a new `Trigger` entity instance. Pass `nil` for no initial data.

#### `Usage(data)`

Create a new `Usage` entity instance. Pass `nil` for no initial data.

#### `Value(data)`

Create a new `Value` entity instance. Pass `nil` for no initial data.

#### `Version(data)`

Create a new `Version` entity instance. Pass `nil` for no initial data.

#### `Worker(data)`

Create a new `Worker` entity instance. Pass `nil` for no initial data.

#### `WorkerCronTrigger(data)`

Create a new `WorkerCronTrigger` entity instance. Pass `nil` for no initial data.

#### `WorkerDeployment(data)`

Create a new `WorkerDeployment` entity instance. Pass `nil` for no initial data.

#### `WorkerEnvironment(data)`

Create a new `WorkerEnvironment` entity instance. Pass `nil` for no initial data.

#### `WorkerRoute(data)`

Create a new `WorkerRoute` entity instance. Pass `nil` for no initial data.

#### `WorkerScript(data)`

Create a new `WorkerScript` entity instance. Pass `nil` for no initial data.

#### `WorkerSubdomain(data)`

Create a new `WorkerSubdomain` entity instance. Pass `nil` for no initial data.

#### `WorkerTailLog(data)`

Create a new `WorkerTailLog` entity instance. Pass `nil` for no initial data.

#### `WorkersAccountSetting(data)`

Create a new `WorkersAccountSetting` entity instance. Pass `nil` for no initial data.

#### `WorkersApiResponseNullResult(data)`

Create a new `WorkersApiResponseNullResult` entity instance. Pass `nil` for no initial data.

#### `WorkersCompletedUploadAsset(data)`

Create a new `WorkersCompletedUploadAsset` entity instance. Pass `nil` for no initial data.

#### `WorkersCreateAssetsUploadSession(data)`

Create a new `WorkersCreateAssetsUploadSession` entity instance. Pass `nil` for no initial data.

#### `WorkersForPlatform(data)`

Create a new `WorkersForPlatform` entity instance. Pass `nil` for no initial data.

#### `WorkersKvApiResponseCommonNoResult(data)`

Create a new `WorkersKvApiResponseCommonNoResult` entity instance. Pass `nil` for no initial data.

#### `WorkersKvNamespace(data)`

Create a new `WorkersKvNamespace` entity instance. Pass `nil` for no initial data.

#### `WorkersNamespaceList(data)`

Create a new `WorkersNamespaceList` entity instance. Pass `nil` for no initial data.

#### `WorkersNamespaceScriptDeleteBulk(data)`

Create a new `WorkersNamespaceScriptDeleteBulk` entity instance. Pass `nil` for no initial data.

#### `WorkersNamespaceScriptResponseSingle(data)`

Create a new `WorkersNamespaceScriptResponseSingle` entity instance. Pass `nil` for no initial data.

#### `WorkersNamespaceSingle(data)`

Create a new `WorkersNamespaceSingle` entity instance. Pass `nil` for no initial data.

#### `WorkersPipelinesOther(data)`

Create a new `WorkersPipelinesOther` entity instance. Pass `nil` for no initial data.

#### `WorkersScriptAndVersionSetting(data)`

Create a new `WorkersScriptAndVersionSetting` entity instance. Pass `nil` for no initial data.

#### `WorkersScriptResponseCollection(data)`

Create a new `WorkersScriptResponseCollection` entity instance. Pass `nil` for no initial data.

#### `WorkersScriptResponseSingle(data)`

Create a new `WorkersScriptResponseSingle` entity instance. Pass `nil` for no initial data.

#### `WorkersSmartPlacement(data)`

Create a new `WorkersSmartPlacement` entity instance. Pass `nil` for no initial data.

#### `WorkersUsageModel(data)`

Create a new `WorkersUsageModel` entity instance. Pass `nil` for no initial data.

#### `WorkersVersionsList(data)`

Create a new `WorkersVersionsList` entity instance. Pass `nil` for no initial data.

#### `WorkersVersionsSingle(data)`

Create a new `WorkersVersionsSingle` entity instance. Pass `nil` for no initial data.

#### `WorkersVersionsUpload(data)`

Create a new `WorkersVersionsUpload` entity instance. Pass `nil` for no initial data.

#### `Workflow(data)`

Create a new `Workflow` entity instance. Pass `nil` for no initial data.

#### `options_map() -> table`

Return a deep copy of the current SDK options.

#### `get_utility() -> Utility`

Return a copy of the SDK utility object.

#### `direct(fetchargs) -> table, err`

Make a direct HTTP request to any API endpoint.

**Parameters:**

| Name | Type | Description |
| --- | --- | --- |
| `fetchargs.path` | `string` | URL path with optional `{param}` placeholders. |
| `fetchargs.method` | `string` | HTTP method (default: `"GET"`). |
| `fetchargs.params` | `table` | Path parameter values for `{param}` substitution. |
| `fetchargs.query` | `table` | Query string parameters. |
| `fetchargs.headers` | `table` | Request headers (merged with defaults). |
| `fetchargs.body` | `any` | Request body (tables are JSON-serialized). |
| `fetchargs.ctrl` | `table` | Control options (e.g. `{ explain = true }`). |

**Returns:** `table, err`

#### `prepare(fetchargs) -> table, err`

Prepare a fetch definition without sending the request. Accepts the
same parameters as `direct()`.

**Returns:** `table, err`


---

## AccountEntity

```lua
local account = client:Account(nil)
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `id` | `string` | No |  |

### Operations

#### `list(reqmatch, ctrl) -> any, err`

List entities matching the given criteria. Returns an array.

```lua
local results, err = client:Account():list()
```

### Common Methods

#### `data_get() -> table`

Get the entity data. Returns a copy of the current data.

#### `data_set(data)`

Set the entity data.

#### `match_get() -> table`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make() -> Entity`

Create a new `AccountEntity` instance with the same client and
options.

#### `get_name() -> string`

Return the entity name.


---

## ApplicationEntity

```lua
local application = client:Application(nil)
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `configuration` | `table` | No | Application configuration fields you can change without creating a rollout. |
| `constraints` | `table` | No |  |
| `errors` | `table` | Yes |  |
| `id` | `string` | No |  |
| `max_instances` | `number` | No | Maximum number of instances that an autoscaling application can run. |
| `messages` | `table` | Yes |  |
| `observability` | `any` | No | Top-level application observability settings. |
| `result` | `any` | Yes | The public Containers API returns an application. |
| `result_info` | `table` | Yes | Cursor pagination details for a v4 API list response. |
| `rollout_active_grace_period` | `number` | No | Grace period for active instances to stay alive before becoming eligible for shutdown signal due to a rollout, in seconds. |
| `success` | `boolean` | Yes | Whether the API call was successful. |

### Operations

#### `create(reqdata, ctrl) -> any, err`

Create a new entity with the given data.

```lua
local result, err = client:Application():create({
  account_id = --[[ string ]],
  errors = --[[ table ]],
  messages = --[[ table ]],
  result = --[[ any ]],
  result_info = --[[ table ]],
  success = --[[ boolean ]],
})
```

#### `list(reqmatch, ctrl) -> any, err`

List entities matching the given criteria. Returns an array.

```lua
local results, err = client:Application():list()
```

#### `load(reqmatch, ctrl) -> any, err`

Load a single entity matching the given criteria.

```lua
local result, err = client:Application():load({ id = "application_id", account_id = "account_id" })
```

#### `remove(reqmatch, ctrl) -> any, err`

Remove the entity matching the given criteria.

```lua
local result, err = client:Application():remove({ id = "application_id", account_id = "account_id" })
```

#### `update(reqdata, ctrl) -> any, err`

Update an existing entity. The data must include the entity `id`.

```lua
local result, err = client:Application():update({
  id = "application_id",
  account_id = "account_id",
  -- Fields to update
})
```

### Common Methods

#### `data_get() -> table`

Get the entity data. Returns a copy of the current data.

#### `data_set(data)`

Set the entity data.

#### `match_get() -> table`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make() -> Entity`

Create a new `ApplicationEntity` instance with the same client and
options.

#### `get_name() -> string`

Return the entity name.


---

## BrapiEntity

```lua
local brapi = client:Brapi(nil)
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `Browser` | `string` | Yes | Browser name and version. |
| `ProtocolVersion` | `string` | Yes | Chrome DevTools Protocol version. |
| `UserAgent` | `string` | Yes | User agent string. |
| `V8Version` | `string` | Yes | V8 JavaScript engine version. |
| `WebKitVersion` | `string` | Yes | WebKit version. |
| `actionTimeout` | `number` | No | The maximum duration allowed for the browser action to complete after the page has loaded (such as taking screenshots, extracting content, or generating PDFs). |
| `addScriptTag` | `table` | No | Adds a script element into the page with the desired URL or content. |
| `addStyleTag` | `table` | No | Adds a `<link rel="stylesheet">` tag into the page with the desired URL or a `<style type="text/css">` tag with the content. |
| `allowRequestPattern` | `table` | No | Only allow requests that match the provided regex patterns, eg. |
| `allowResourceTypes` | `table` | No | Only allow requests that match the provided resource types, eg. |
| `authenticate` | `table` | Yes | Provide credentials for HTTP authentication. |
| `bestAttempt` | `boolean` | No | Attempt to proceed when 'awaited' events fail or timeout. |
| `closeReason` | `number` | No | Reason code for session closure. |
| `closeReasonText` | `string` | No | Human-readable close reason. |
| `commands` | `table` | No | Available commands. |
| `connectionEndTime` | `number` | No | Connection end time. |
| `connectionId` | `string` | No | Connection ID. |
| `connectionStartTime` | `number` | No | Connection start time. |
| `cookies` | `table` | No | Check [options](https://pptr.dev/api/puppeteer.page.setcookie). |
| `custom_ai` | `table` | No | Optional list of custom AI models to use for the request. |
| `dependencies` | `table` | No | Domain dependencies. |
| `description` | `string` | No | Target description. |
| `devtoolsFrontendUrl` | `string` | No | DevTools frontend URL. |
| `domain` | `string` | Yes | Domain name. |
| `elements` | `table` | Yes |  |
| `emulateMediaType` | `string` | No |  |
| `endTime` | `number` | No | Session end time. |
| `errors` | `table` | No |  |
| `events` | `table` | No | Available events. |
| `excludeExternalLinks` | `boolean` | No |  |
| `experimental` | `boolean` | No | Whether this domain is experimental. |
| `formats` | `table` | No |  |
| `gotoOptions` | `table` | No | Check [options](https://pptr.dev/api/puppeteer.gotooptions). |
| `guardrails` | `table` | No |  |
| `html` | `string` | No | Set the content of the page, eg: `<h1>Hello World!!</h1>`. |
| `id` | `string` | Yes | Target ID. |
| `interestingOnly` | `boolean` | No |  |
| `lastUpdated` | `number` | No | Last updated timestamp. |
| `message` | `string` | Yes | Target activated. |
| `meta` | `table` | Yes |  |
| `pdfOptions` | `table` | No | Check [options](https://pptr.dev/api/puppeteer.pdfoptions). |
| `prompt` | `string` | No |  |
| `rejectRequestPattern` | `table` | No | Block undesired requests that match the provided regex patterns, eg. |
| `rejectResourceTypes` | `table` | No | Block undesired requests that match the provided resource types, eg. |
| `response_format` | `table` | Yes |  |
| `result` | `table` | Yes | HTML content. |
| `root` | `string` | No |  |
| `screenshotOptions` | `table` | No | Check [options](https://pptr.dev/api/puppeteer.screenshotoptions). |
| `scrollPage` | `boolean` | No |  |
| `selector` | `string` | No |  |
| `sessionId` | `string` | Yes | Session ID. |
| `setExtraHTTPHeaders` | `table` | No |  |
| `setJavaScriptEnabled` | `boolean` | No |  |
| `startTime` | `number` | No | Session start time. |
| `success` | `boolean` | Yes | Response status. |
| `title` | `string` | No | Title of the target. |
| `type` | `string` | Yes | Target type (page, background_page, worker, etc.). |
| `types` | `table` | No | Type definitions. |
| `url` | `string` | Yes | URL of the target. |
| `userAgent` | `string` | No |  |
| `viewport` | `table` | Yes | Check [options](https://pptr.dev/api/puppeteer.page.setviewport). |
| `visibleLinksOnly` | `boolean` | No |  |
| `waitForSelector` | `table` | Yes | Wait for the selector to appear in page. |
| `waitForTimeout` | `number` | No | Waits for a specified timeout before continuing. |
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

#### `create(reqdata, ctrl) -> any, err`

Create a new entity with the given data.

```lua
local result, err = client:Brapi():create({
  account_id = --[[ string ]],
  Browser = --[[ string ]],
  ProtocolVersion = --[[ string ]],
  UserAgent = --[[ string ]],
  V8Version = --[[ string ]],
  WebKitVersion = --[[ string ]],
  authenticate = --[[ table ]],
  domain = --[[ string ]],
  elements = --[[ table ]],
  id = --[[ string ]],
  message = --[[ string ]],
  meta = --[[ table ]],
  response_format = --[[ table ]],
  result = --[[ table ]],
  sessionId = --[[ string ]],
  success = --[[ boolean ]],
  type = --[[ string ]],
  url = --[[ string ]],
  viewport = --[[ table ]],
  waitForSelector = --[[ table ]],
})
```

#### `list(reqmatch, ctrl) -> any, err`

List entities matching the given criteria. Returns an array.

```lua
local results, err = client:Brapi():list()
```

#### `load(reqmatch, ctrl) -> any, err`

Load a single entity matching the given criteria.

```lua
local result, err = client:Brapi():load({ account_id = "account_id" })
```

#### `remove(reqmatch, ctrl) -> any, err`

Remove the entity matching the given criteria.

```lua
local result, err = client:Brapi():remove({ account_id = "account_id" })
```

#### `update(reqdata, ctrl) -> any, err`

Update an existing entity. The data must include the entity `id`.

```lua
local result, err = client:Brapi():update({
  account_id = "account_id",
  browser_id = "browser_id",
  -- Fields to update
})
```

### Common Methods

#### `data_get() -> table`

Get the entity data. Returns a copy of the current data.

#### `data_set(data)`

Set the entity data.

#### `match_get() -> table`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make() -> Entity`

Create a new `BrapiEntity` instance with the same client and
options.

#### `get_name() -> string`

Return the entity name.


---

## BuildEntity

```lua
local build = client:Build(nil)
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `errors` | `table` | Yes |  |
| `id` | `string` | No |  |
| `messages` | `table` | Yes |  |
| `result` | `table` | Yes |  |
| `result_info` | `table` | No |  |
| `success` | `boolean` | Yes |  |

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

#### `list(reqmatch, ctrl) -> any, err`

List entities matching the given criteria. Returns an array.

```lua
local results, err = client:Build():list()
```

#### `load(reqmatch, ctrl) -> any, err`

Load a single entity matching the given criteria.

```lua
local result, err = client:Build():load({ id = "build_id", account_id = "account_id" })
```

#### `update(reqdata, ctrl) -> any, err`

Update an existing entity. The data must include the entity `id`.

```lua
local result, err = client:Build():update({
  id = "build_id",
  account_id = "account_id",
  -- Fields to update
})
```

### Common Methods

#### `data_get() -> table`

Get the entity data. Returns a copy of the current data.

#### `data_set(data)`

Set the entity data.

#### `match_get() -> table`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make() -> Entity`

Create a new `BuildEntity` instance with the same client and
options.

#### `get_name() -> string`

Return the entity name.


---

## BuildTokenEntity

```lua
local build_token = client:BuildToken(nil)
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `build_token_name` | `string` | Yes |  |
| `build_token_secret` | `string` | Yes |  |
| `cloudflare_token_id` | `string` | Yes |  |
| `errors` | `table` | Yes |  |
| `messages` | `table` | Yes |  |
| `result` | `table` | Yes |  |
| `result_info` | `table` | No |  |
| `success` | `boolean` | Yes |  |

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

#### `create(reqdata, ctrl) -> any, err`

Create a new entity with the given data.

```lua
local result, err = client:BuildToken():create({
  account_id = --[[ string ]],
  build_token_name = --[[ string ]],
  build_token_secret = --[[ string ]],
  cloudflare_token_id = --[[ string ]],
  errors = --[[ table ]],
  messages = --[[ table ]],
  result = --[[ table ]],
  success = --[[ boolean ]],
})
```

#### `list(reqmatch, ctrl) -> any, err`

List entities matching the given criteria. Returns an array.

```lua
local results, err = client:BuildToken():list()
```

### Common Methods

#### `data_get() -> table`

Get the entity data. Returns a copy of the current data.

#### `data_set(data)`

Set the entity data.

#### `match_get() -> table`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make() -> Entity`

Create a new `BuildTokenEntity` instance with the same client and
options.

#### `get_name() -> string`

Return the entity name.


---

## BuildsApiEntity

```lua
local builds_api = client:BuildsApi(nil)
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `errors` | `table` | Yes |  |
| `messages` | `table` | Yes |  |
| `result` | `table` | Yes |  |
| `result_info` | `table` | No |  |
| `success` | `boolean` | Yes |  |

### Operations

#### `create(reqdata, ctrl) -> any, err`

Create a new entity with the given data.

```lua
local result, err = client:BuildsApi():create({
  account_id = --[[ string ]],
  trigger_id = --[[ string ]],
  errors = --[[ table ]],
  messages = --[[ table ]],
  result = --[[ table ]],
  success = --[[ boolean ]],
})
```

#### `remove(reqmatch, ctrl) -> any, err`

Remove the entity matching the given criteria.

```lua
local result, err = client:BuildsApi():remove({ account_id = "account_id", environment_variable_key = "environment_variable_key", trigger_id = "trigger_id" })
```

### Common Methods

#### `data_get() -> table`

Get the entity data. Returns a copy of the current data.

#### `data_set(data)`

Set the entity data.

#### `match_get() -> table`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make() -> Entity`

Create a new `BuildsApiEntity` instance with the same client and
options.

#### `get_name() -> string`

Return the entity name.


---

## ConnectionEntity

```lua
local connection = client:Connection(nil)
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `id` | `string` | No |  |

### Operations

#### `remove(reqmatch, ctrl) -> any, err`

Remove the entity matching the given criteria.

```lua
local result, err = client:Connection():remove({ account_id = "account_id", id = "id" })
```

### Common Methods

#### `data_get() -> table`

Get the entity data. Returns a copy of the current data.

#### `data_set(data)`

Set the entity data.

#### `match_get() -> table`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make() -> Entity`

Create a new `ConnectionEntity` instance with the same client and
options.

#### `get_name() -> string`

Return the entity name.


---

## ContainerImageEntity

```lua
local container_image = client:ContainerImage(nil)
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `image` | `string` | Yes | Image url. |

### Operations

#### `create(reqdata, ctrl) -> any, err`

Create a new entity with the given data.

```lua
local result, err = client:ContainerImage():create({
  account_id = --[[ string ]],
  image = --[[ string ]],
})
```

### Common Methods

#### `data_get() -> table`

Get the entity data. Returns a copy of the current data.

#### `data_set(data)`

Set the entity data.

#### `match_get() -> table`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make() -> Entity`

Create a new `ContainerImageEntity` instance with the same client and
options.

#### `get_name() -> string`

Return the entity name.


---

## ContainerInstanceEntity

```lua
local container_instance = client:ContainerInstance(nil)
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `errors` | `table` | Yes |  |
| `id` | `string` | No |  |
| `messages` | `table` | Yes |  |
| `result` | `any` | Yes | A container instance belonging to an application. |
| `result_info` | `table` | Yes | Cursor pagination details for a v4 API list response. |
| `success` | `boolean` | Yes | Whether the API call was successful. |

### Operations

#### `list(reqmatch, ctrl) -> any, err`

List entities matching the given criteria. Returns an array.

```lua
local results, err = client:ContainerInstance():list()
```

#### `load(reqmatch, ctrl) -> any, err`

Load a single entity matching the given criteria.

```lua
local result, err = client:ContainerInstance():load({ id = "container_instance_id", account_id = "account_id", application_id = "application_id" })
```

### Common Methods

#### `data_get() -> table`

Get the entity data. Returns a copy of the current data.

#### `data_set(data)`

Set the entity data.

#### `match_get() -> table`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make() -> Entity`

Create a new `ContainerInstanceEntity` instance with the same client and
options.

#### `get_name() -> string`

Return the entity name.


---

## DeployHookEntity

```lua
local deploy_hook = client:DeployHook(nil)
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `branch` | `string` | Yes | Git branch name. |
| `deploy_hook_name` | `string` | Yes | Deploy hook name (1-58 characters). |
| `errors` | `table` | Yes |  |
| `id` | `string` | No |  |
| `messages` | `table` | Yes |  |
| `result` | `table` | Yes |  |
| `result_info` | `table` | No |  |
| `success` | `boolean` | Yes |  |

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

#### `create(reqdata, ctrl) -> any, err`

Create a new entity with the given data.

```lua
local result, err = client:DeployHook():create({
  id = --[[ string ]],
  branch = --[[ string ]],
  deploy_hook_name = --[[ string ]],
  errors = --[[ table ]],
  messages = --[[ table ]],
  result = --[[ table ]],
  success = --[[ boolean ]],
})
```

#### `list(reqmatch, ctrl) -> any, err`

List entities matching the given criteria. Returns an array.

```lua
local results, err = client:DeployHook():list()
```

#### `load(reqmatch, ctrl) -> any, err`

Load a single entity matching the given criteria.

```lua
local result, err = client:DeployHook():load({ id = "deploy_hook_id", account_id = "account_id", worker_id = "worker_id" })
```

#### `remove(reqmatch, ctrl) -> any, err`

Remove the entity matching the given criteria.

```lua
local result, err = client:DeployHook():remove({ id = "deploy_hook_id", account_id = "account_id", worker_id = "worker_id" })
```

#### `update(reqdata, ctrl) -> any, err`

Update an existing entity. The data must include the entity `id`.

```lua
local result, err = client:DeployHook():update({
  id = "deploy_hook_id",
  account_id = "account_id",
  worker_id = "worker_id",
  -- Fields to update
})
```

### Common Methods

#### `data_get() -> table`

Get the entity data. Returns a copy of the current data.

#### `data_set(data)`

Set the entity data.

#### `match_get() -> table`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make() -> Entity`

Create a new `DeployHookEntity` instance with the same client and
options.

#### `get_name() -> string`

Return the entity name.


---

## DeploymentEntity

```lua
local deployment = client:Deployment(nil)
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `id` | `string` | No |  |

### Operations

#### `remove(reqmatch, ctrl) -> any, err`

Remove the entity matching the given criteria.

```lua
local result, err = client:Deployment():remove({ account_id = "account_id", id = "id" })
```

### Common Methods

#### `data_get() -> table`

Get the entity data. Returns a copy of the current data.

#### `data_set(data)`

Set the entity data.

#### `match_get() -> table`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make() -> Entity`

Create a new `DeploymentEntity` instance with the same client and
options.

#### `get_name() -> string`

Return the entity name.


---

## DestinationEntity

```lua
local destination = client:Destination(nil)
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `configuration` | `table` | Yes |  |
| `enabled` | `boolean` | Yes |  |
| `errors` | `table` | Yes |  |
| `id` | `string` | No |  |
| `messages` | `table` | Yes |  |
| `name` | `string` | Yes |  |
| `result` | `table` | Yes |  |
| `skipPreflightCheck` | `boolean` | No |  |
| `success` | `boolean` | Yes |  |

### Operations

#### `create(reqdata, ctrl) -> any, err`

Create a new entity with the given data.

```lua
local result, err = client:Destination():create({
  account_id = --[[ string ]],
  configuration = --[[ table ]],
  enabled = --[[ boolean ]],
  errors = --[[ table ]],
  messages = --[[ table ]],
  name = --[[ string ]],
  result = --[[ table ]],
  success = --[[ boolean ]],
})
```

#### `list(reqmatch, ctrl) -> any, err`

List entities matching the given criteria. Returns an array.

```lua
local results, err = client:Destination():list()
```

#### `remove(reqmatch, ctrl) -> any, err`

Remove the entity matching the given criteria.

```lua
local result, err = client:Destination():remove({ account_id = "account_id", id = "id" })
```

#### `update(reqdata, ctrl) -> any, err`

Update an existing entity. The data must include the entity `id`.

```lua
local result, err = client:Destination():update({
  account_id = "account_id",
  id = "id",
  -- Fields to update
})
```

### Common Methods

#### `data_get() -> table`

Get the entity data. Returns a copy of the current data.

#### `data_set(data)`

Set the entity data.

#### `match_get() -> table`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make() -> Entity`

Create a new `DestinationEntity` instance with the same client and
options.

#### `get_name() -> string`

Return the entity name.


---

## DomainEntity

```lua
local domain = client:Domain(nil)
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `errors` | `table` | Yes |  |
| `id` | `string` | No |  |
| `messages` | `table` | Yes |  |
| `result` | `table` | Yes |  |
| `success` | `boolean` | Yes | Whether the API call was successful. |

### Operations

#### `list(reqmatch, ctrl) -> any, err`

List entities matching the given criteria. Returns an array.

```lua
local results, err = client:Domain():list()
```

#### `load(reqmatch, ctrl) -> any, err`

Load a single entity matching the given criteria.

```lua
local result, err = client:Domain():load({ id = "domain_id", account_id = "account_id" })
```

#### `remove(reqmatch, ctrl) -> any, err`

Remove the entity matching the given criteria.

```lua
local result, err = client:Domain():remove({ id = "domain_id", account_id = "account_id" })
```

#### `update(reqdata, ctrl) -> any, err`

Update an existing entity. The data must include the entity `id`.

```lua
local result, err = client:Domain():update({
  id = "domain_id",
  account_id = "account_id",
  -- Fields to update
})
```

### Common Methods

#### `data_get() -> table`

Get the entity data. Returns a copy of the current data.

#### `data_set(data)`

Set the entity data.

#### `match_get() -> table`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make() -> Entity`

Create a new `DomainEntity` instance with the same client and
options.

#### `get_name() -> string`

Return the entity name.


---

## DurableObjectsNamespaceEntity

```lua
local durable_objects_namespace = client:DurableObjectsNamespace(nil)
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `result` | `table` | No |  |
| `result_info` | `table` | No |  |

### Operations

#### `create(reqdata, ctrl) -> any, err`

Create a new entity with the given data.

```lua
local result, err = client:DurableObjectsNamespace():create({
  account_id = --[[ string ]],
  namespace_id = --[[ string ]],
})
```

#### `list(reqmatch, ctrl) -> any, err`

List entities matching the given criteria. Returns an array.

```lua
local results, err = client:DurableObjectsNamespace():list()
```

### Common Methods

#### `data_get() -> table`

Get the entity data. Returns a copy of the current data.

#### `data_set(data)`

Set the entity data.

#### `match_get() -> table`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make() -> Entity`

Create a new `DurableObjectsNamespaceEntity` instance with the same client and
options.

#### `get_name() -> string`

Return the entity name.


---

## EnvironmentVariableEntity

```lua
local environment_variable = client:EnvironmentVariable(nil)
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `errors` | `table` | Yes |  |
| `messages` | `table` | Yes |  |
| `result` | `table` | Yes |  |
| `result_info` | `table` | No |  |
| `success` | `boolean` | Yes |  |

### Field Usage by Operation

| Field | list | update |
| --- | --- | --- |
| `errors` | - | - |
| `messages` | - | - |
| `result` | Yes | - |
| `result_info` | - | - |
| `success` | - | - |

### Operations

#### `list(reqmatch, ctrl) -> any, err`

List entities matching the given criteria. Returns an array.

```lua
local results, err = client:EnvironmentVariable():list()
```

#### `update(reqdata, ctrl) -> any, err`

Update an existing entity. The data must include the entity `id`.

```lua
local result, err = client:EnvironmentVariable():update({
  account_id = "account_id",
  trigger_id = "trigger_id",
  -- Fields to update
})
```

### Common Methods

#### `data_get() -> table`

Get the entity data. Returns a copy of the current data.

#### `data_set(data)`

Set the entity data.

#### `match_get() -> table`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make() -> Entity`

Create a new `EnvironmentVariableEntity` instance with the same client and
options.

#### `get_name() -> string`

Return the entity name.


---

## GitHubIntegrationEntity

```lua
local git_hub_integration = client:GitHubIntegration(nil)
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `errors` | `table` | Yes |  |
| `messages` | `table` | Yes |  |
| `result` | `table` | Yes |  |
| `result_info` | `table` | No |  |
| `success` | `boolean` | Yes |  |

### Field Usage by Operation

| Field | list |
| --- | --- |
| `errors` | - |
| `messages` | - |
| `result` | Yes |
| `result_info` | - |
| `success` | - |

### Operations

#### `list(reqmatch, ctrl) -> any, err`

List entities matching the given criteria. Returns an array.

```lua
local results, err = client:GitHubIntegration():list()
```

### Common Methods

#### `data_get() -> table`

Get the entity data. Returns a copy of the current data.

#### `data_set(data)`

Set the entity data.

#### `match_get() -> table`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make() -> Entity`

Create a new `GitHubIntegrationEntity` instance with the same client and
options.

#### `get_name() -> string`

Return the entity name.


---

## HyperdriveEntity

```lua
local hyperdrive = client:Hyperdrive(nil)
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `caching` | `table` | No |  |
| `created_on` | `string` | No | Defines the creation time of the Hyperdrive configuration. |
| `id` | `string` | Yes | Define configurations using a unique string identifier. |
| `modified_on` | `string` | No | Defines the last modified time of the Hyperdrive configuration. |
| `mtls` | `table` | No | mTLS configuration for the origin connection. |
| `name` | `string` | Yes | The name of the Hyperdrive configuration. |
| `origin` | `table` | Yes | Combines database connection fields with exactly one supported network location. |
| `origin_connection_limit` | `number` | No | The (soft) maximum number of connections the Hyperdrive is allowed to make to the origin database. |
| `restarted_on` | `string` | No | Defines the last time the Hyperdrive connection pool was explicitly restarted via the restart endpoint. |
| `result` | `table` | Yes |  |

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

#### `create(reqdata, ctrl) -> any, err`

Create a new entity with the given data.

```lua
local result, err = client:Hyperdrive():create({
  account_id = --[[ string ]],
  integration = --[[ string ]],
  id = --[[ string ]],
  name = --[[ string ]],
  origin = --[[ table ]],
  result = --[[ table ]],
})
```

#### `list(reqmatch, ctrl) -> any, err`

List entities matching the given criteria. Returns an array.

```lua
local results, err = client:Hyperdrive():list()
```

#### `load(reqmatch, ctrl) -> any, err`

Load a single entity matching the given criteria.

```lua
local result, err = client:Hyperdrive():load({ account_id = "account_id", hyperdrive_id = "hyperdrive_id" })
```

#### `remove(reqmatch, ctrl) -> any, err`

Remove the entity matching the given criteria.

```lua
local result, err = client:Hyperdrive():remove({ account_id = "account_id", hyperdrive_id = "hyperdrive_id" })
```

#### `update(reqdata, ctrl) -> any, err`

Update an existing entity. The data must include the entity `id`.

```lua
local result, err = client:Hyperdrive():update({
  account_id = "account_id",
  hyperdrive_id = "hyperdrive_id",
  -- Fields to update
})
```

### Common Methods

#### `data_get() -> table`

Get the entity data. Returns a copy of the current data.

#### `data_set(data)`

Set the entity data.

#### `match_get() -> table`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make() -> Entity`

Create a new `HyperdriveEntity` instance with the same client and
options.

#### `get_name() -> string`

Return the entity name.


---

## ImageRegistryEntity

```lua
local image_registry = client:ImageRegistry(nil)
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `auth` | `table` | Yes | Credentials for authenticating to a private external image registry. |
| `domain` | `string` | Yes | Hostname of the private registry, without a scheme or image path. |
| `errors` | `table` | Yes |  |
| `expiration_minutes` | `number` | No | The number of minutes Cloudflare managed registry credentials stay valid. |
| `id` | `string` | No |  |
| `is_public` | `boolean` | No | Omit this field or set it to `false`. |
| `kind` | `any` | Yes | Registry provider. |
| `messages` | `table` | Yes |  |
| `permissions` | `table` | No | The permissions for Cloudflare managed registry credentials. |
| `result` | `table` | Yes |  |
| `success` | `boolean` | Yes | Whether the API call was successful. |

### Operations

#### `create(reqdata, ctrl) -> any, err`

Create a new entity with the given data.

```lua
local result, err = client:ImageRegistry():create({
  account_id = --[[ string ]],
  auth = --[[ table ]],
  errors = --[[ table ]],
  kind = --[[ any ]],
  messages = --[[ table ]],
  result = --[[ table ]],
  success = --[[ boolean ]],
})
```

#### `list(reqmatch, ctrl) -> any, err`

List entities matching the given criteria. Returns an array.

```lua
local results, err = client:ImageRegistry():list()
```

#### `remove(reqmatch, ctrl) -> any, err`

Remove the entity matching the given criteria.

```lua
local result, err = client:ImageRegistry():remove({ account_id = "account_id", id = "id" })
```

### Common Methods

#### `data_get() -> table`

Get the entity data. Returns a copy of the current data.

#### `data_set(data)`

Set the entity data.

#### `match_get() -> table`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make() -> Entity`

Create a new `ImageRegistryEntity` instance with the same client and
options.

#### `get_name() -> string`

Return the entity name.


---

## IssueEntity

```lua
local issue = client:Issue(nil)
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `afterInactivitySeconds` | `number` | No |  |
| `afterOccurrences` | `number` | No |  |
| `enabled` | `boolean` | No |  |
| `errors` | `table` | Yes |  |
| `id` | `string` | No |  |
| `issueIds` | `table` | Yes |  |
| `messages` | `table` | Yes |  |
| `name` | `string` | No |  |
| `policyId` | `string` | Yes |  |
| `result` | `table` | Yes |  |
| `result_info` | `table` | Yes |  |
| `service` | `string` | No |  |
| `status` | `string` | No |  |
| `success` | `boolean` | Yes |  |
| `title` | `string` | No |  |

### Operations

#### `create(reqdata, ctrl) -> any, err`

Create a new entity with the given data.

```lua
local result, err = client:Issue():create({
  account_id = --[[ string ]],
  group_id = --[[ string ]],
  errors = --[[ table ]],
  issueIds = --[[ table ]],
  messages = --[[ table ]],
  policyId = --[[ string ]],
  result = --[[ table ]],
  result_info = --[[ table ]],
  success = --[[ boolean ]],
})
```

#### `list(reqmatch, ctrl) -> any, err`

List entities matching the given criteria. Returns an array.

```lua
local results, err = client:Issue():list()
```

#### `load(reqmatch, ctrl) -> any, err`

Load a single entity matching the given criteria.

```lua
local result, err = client:Issue():load({ id = "issue_id", account_id = "account_id" })
```

#### `remove(reqmatch, ctrl) -> any, err`

Remove the entity matching the given criteria.

```lua
local result, err = client:Issue():remove({ account_id = "account_id" })
```

#### `update(reqdata, ctrl) -> any, err`

Update an existing entity. The data must include the entity `id`.

```lua
local result, err = client:Issue():update({
  id = "issue_id",
  account_id = "account_id",
  automation_id = "automation_id",
  -- Fields to update
})
```

### Common Methods

#### `data_get() -> table`

Get the entity data. Returns a copy of the current data.

#### `data_set(data)`

Set the entity data.

#### `match_get() -> table`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make() -> Entity`

Create a new `IssueEntity` instance with the same client and
options.

#### `get_name() -> string`

Return the entity name.


---

## KeyEntity

```lua
local key = client:Key(nil)
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `datasets` | `table` | No | Leave this empty to use the default datasets |
| `errors` | `table` | Yes |  |
| `filters` | `table` | No | Apply filters to narrow key discovery. |
| `from` | `number` | No |  |
| `keyNeedle` | `table` | Yes | If the user suggests a key, use this to narrow down the list of keys returned. |
| `limit` | `number` | No | Advanced usage: set limit=1000+ to retrieve comprehensive key options without needing additional filtering. |
| `messages` | `table` | Yes |  |
| `needle` | `table` | Yes | Search for a specific substring in any of the events |
| `result` | `table` | Yes |  |
| `success` | `boolean` | Yes |  |
| `to` | `number` | No |  |

### Operations

#### `create(reqdata, ctrl) -> any, err`

Create a new entity with the given data.

```lua
local result, err = client:Key():create({
  account_id = --[[ string ]],
  errors = --[[ table ]],
  keyNeedle = --[[ table ]],
  messages = --[[ table ]],
  needle = --[[ table ]],
  result = --[[ table ]],
  success = --[[ boolean ]],
})
```

### Common Methods

#### `data_get() -> table`

Get the entity data. Returns a copy of the current data.

#### `data_set(data)`

Set the entity data.

#### `match_get() -> table`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make() -> Entity`

Create a new `KeyEntity` instance with the same client and
options.

#### `get_name() -> string`

Return the entity name.


---

## LiveTailEntity

```lua
local live_tail = client:LiveTail(nil)
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `errors` | `table` | Yes |  |
| `filterCombination` | `string` | No | Set a flag to describe how to combine the filters on the query. |
| `filters` | `table` | No | Apply filters to the query. |
| `messages` | `table` | Yes |  |
| `result` | `table` | Yes |  |
| `scriptId` | `string` | No |  |
| `success` | `boolean` | Yes |  |

### Operations

#### `create(reqdata, ctrl) -> any, err`

Create a new entity with the given data.

```lua
local result, err = client:LiveTail():create({
  account_id = --[[ string ]],
  errors = --[[ table ]],
  messages = --[[ table ]],
  result = --[[ table ]],
  success = --[[ boolean ]],
})
```

### Common Methods

#### `data_get() -> table`

Get the entity data. Returns a copy of the current data.

#### `data_set(data)`

Set the entity data.

#### `match_get() -> table`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make() -> Entity`

Create a new `LiveTailEntity` instance with the same client and
options.

#### `get_name() -> string`

Return the entity name.


---

## MetricsExportEntity

```lua
local metrics_export = client:MetricsExport(nil)
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `errors` | `table` | Yes |  |
| `messages` | `table` | Yes |  |
| `requester` | `table` | Yes |  |
| `resources` | `table` | Yes |  |
| `result` | `table` | Yes |  |
| `success` | `boolean` | Yes |  |

### Operations

#### `create(reqdata, ctrl) -> any, err`

Create a new entity with the given data.

```lua
local result, err = client:MetricsExport():create({
  account_id = --[[ string ]],
  errors = --[[ table ]],
  messages = --[[ table ]],
  requester = --[[ table ]],
  resources = --[[ table ]],
  result = --[[ table ]],
  success = --[[ boolean ]],
})
```

#### `list(reqmatch, ctrl) -> any, err`

List entities matching the given criteria. Returns an array.

```lua
local results, err = client:MetricsExport():list()
```

### Common Methods

#### `data_get() -> table`

Get the entity data. Returns a copy of the current data.

#### `data_set(data)`

Set the entity data.

#### `match_get() -> table`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make() -> Entity`

Create a new `MetricsExportEntity` instance with the same client and
options.

#### `get_name() -> string`

Return the entity name.


---

## NamespaceEntity

```lua
local namespace = client:Namespace(nil)
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `id` | `string` | No |  |

### Operations

#### `remove(reqmatch, ctrl) -> any, err`

Remove the entity matching the given criteria.

```lua
local result, err = client:Namespace():remove({ account_id = "account_id", id = "id" })
```

### Common Methods

#### `data_get() -> table`

Get the entity data. Returns a copy of the current data.

#### `data_set(data)`

Set the entity data.

#### `match_get() -> table`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make() -> Entity`

Create a new `NamespaceEntity` instance with the same client and
options.

#### `get_name() -> string`

Return the entity name.


---

## PreviewEntity

```lua
local preview = client:Preview(nil)
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `errors` | `table` | Yes |  |
| `id` | `string` | No |  |
| `messages` | `table` | Yes |  |
| `result` | `table` | Yes |  |
| `success` | `boolean` | Yes | Whether the API call was successful. |

### Operations

#### `create(reqdata, ctrl) -> any, err`

Create a new entity with the given data.

```lua
local result, err = client:Preview():create({
  account_id = --[[ string ]],
  worker_id = --[[ string ]],
  errors = --[[ table ]],
  messages = --[[ table ]],
  result = --[[ table ]],
  success = --[[ boolean ]],
})
```

#### `list(reqmatch, ctrl) -> any, err`

List entities matching the given criteria. Returns an array.

```lua
local results, err = client:Preview():list()
```

#### `load(reqmatch, ctrl) -> any, err`

Load a single entity matching the given criteria.

```lua
local result, err = client:Preview():load({ id = "preview_id", account_id = "account_id", worker_id = "worker_id" })
```

#### `remove(reqmatch, ctrl) -> any, err`

Remove the entity matching the given criteria.

```lua
local result, err = client:Preview():remove({ id = "preview_id", account_id = "account_id", worker_id = "worker_id" })
```

#### `update(reqdata, ctrl) -> any, err`

Update an existing entity. The data must include the entity `id`.

```lua
local result, err = client:Preview():update({
  id = "preview_id",
  account_id = "account_id",
  worker_id = "worker_id",
  -- Fields to update
})
```

### Common Methods

#### `data_get() -> table`

Get the entity data. Returns a copy of the current data.

#### `data_set(data)`

Set the entity data.

#### `match_get() -> table`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make() -> Entity`

Create a new `PreviewEntity` instance with the same client and
options.

#### `get_name() -> string`

Return the entity name.


---

## PreviewDeploymentEntity

```lua
local preview_deployment = client:PreviewDeployment(nil)
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `errors` | `table` | Yes |  |
| `id` | `string` | No |  |
| `messages` | `table` | Yes |  |
| `result` | `any` | Yes |  |
| `success` | `boolean` | Yes | Whether the API call was successful. |

### Operations

#### `create(reqdata, ctrl) -> any, err`

Create a new entity with the given data.

```lua
local result, err = client:PreviewDeployment():create({
  account_id = --[[ string ]],
  id = --[[ string ]],
  worker_id = --[[ string ]],
  errors = --[[ table ]],
  messages = --[[ table ]],
  result = --[[ any ]],
  success = --[[ boolean ]],
})
```

#### `list(reqmatch, ctrl) -> any, err`

List entities matching the given criteria. Returns an array.

```lua
local results, err = client:PreviewDeployment():list()
```

#### `load(reqmatch, ctrl) -> any, err`

Load a single entity matching the given criteria.

```lua
local result, err = client:PreviewDeployment():load({ id = "preview_deployment_id", account_id = "account_id", preview_id = "preview_id", worker_id = "worker_id" })
```

#### `update(reqdata, ctrl) -> any, err`

Update an existing entity. The data must include the entity `id`.

```lua
local result, err = client:PreviewDeployment():update({
  id = "preview_deployment_id",
  account_id = "account_id",
  preview_id = "preview_id",
  worker_id = "worker_id",
  -- Fields to update
})
```

### Common Methods

#### `data_get() -> table`

Get the entity data. Returns a copy of the current data.

#### `data_set(data)`

Set the entity data.

#### `match_get() -> table`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make() -> Entity`

Create a new `PreviewDeploymentEntity` instance with the same client and
options.

#### `get_name() -> string`

Return the entity name.


---

## QueryEntity

```lua
local query = client:Query(nil)
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `chart` | `boolean` | No | When true, includes time-series data in the response. |
| `chartType` | `string` | No | Controls the SQL shape and response payload for the 'calculations' view. |
| `compare` | `boolean` | No | When true, includes a comparison dataset from the previous time period of equal length. |
| `distributionScale` | `string` | No | Value-axis bucketing for chartType 'distribution'. |
| `dry` | `boolean` | No | When true, executes the query without persisting the results. |
| `errors` | `table` | Yes |  |
| `granularity` | `number` | No | Number of time-series buckets. |
| `ignoreSeries` | `boolean` | No | When true, omits time-series data from the response and returns only aggregated values. |
| `limit` | `number` | No | Maximum number of events to return when view is 'events'. |
| `messages` | `table` | Yes |  |
| `offset` | `string` | No | Cursor for pagination in event, trace, invocation, and agent views. |
| `offsetBy` | `number` | No | Numeric offset for paginating grouped/pattern results (top-N lists). |
| `offsetDirection` | `string` | No | Pagination direction: 'next' for forward, 'prev' for backward. |
| `parameters` | `table` | No | Query parameters defining what data to retrieve — filters, calculations, group-bys, and ordering. |
| `queryId` | `string` | Yes | Identifier for the query. |
| `result` | `table` | Yes | Complete results of a query run. |
| `success` | `boolean` | Yes |  |
| `timeframe` | `table` | Yes | Timeframe for the query using Unix timestamps in milliseconds. |
| `view` | `string` | No | Controls the shape of the response. |

### Operations

#### `create(reqdata, ctrl) -> any, err`

Create a new entity with the given data.

```lua
local result, err = client:Query():create({
  account_id = --[[ string ]],
  errors = --[[ table ]],
  messages = --[[ table ]],
  queryId = --[[ string ]],
  result = --[[ table ]],
  success = --[[ boolean ]],
  timeframe = --[[ table ]],
})
```

### Common Methods

#### `data_get() -> table`

Get the entity data. Returns a copy of the current data.

#### `data_set(data)`

Set the entity data.

#### `match_get() -> table`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make() -> Entity`

Create a new `QueryEntity` instance with the same client and
options.

#### `get_name() -> string`

Return the entity name.


---

## RepositoryConnectionEntity

```lua
local repository_connection = client:RepositoryConnection(nil)
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

#### `update(reqdata, ctrl) -> any, err`

Update an existing entity. The data must include the entity `id`.

```lua
local result, err = client:RepositoryConnection():update({
  account_id = "account_id",
  -- Fields to update
})
```

### Common Methods

#### `data_get() -> table`

Get the entity data. Returns a copy of the current data.

#### `data_set(data)`

Set the entity data.

#### `match_get() -> table`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make() -> Entity`

Create a new `RepositoryConnectionEntity` instance with the same client and
options.

#### `get_name() -> string`

Return the entity name.


---

## RolloutEntity

```lua
local rollout = client:Rollout(nil)
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `description` | `string` | Yes | Description of the rollout process. |
| `kind` | `string` | No | Kind of the rollout process. |
| `percentage` | `number` | No | Initial target version percentage (0-100). |
| `step_percentage` | `number` | No | Percentage of rollout to increase in each step when "steps" is absent. |
| `steps` | `table` | No | Steps defining the rollout process, used when "step_percentage" is absent. |
| `strategy` | `string` | Yes | Strategy used for the rollout. |
| `target_configuration` | `table` | Yes | User-specified container configuration changes. |

### Operations

#### `create(reqdata, ctrl) -> any, err`

Create a new entity with the given data.

```lua
local result, err = client:Rollout():create({
  account_id = --[[ string ]],
  application_id = --[[ string ]],
  description = --[[ string ]],
  strategy = --[[ string ]],
  target_configuration = --[[ table ]],
})
```

### Common Methods

#### `data_get() -> table`

Get the entity data. Returns a copy of the current data.

#### `data_set(data)`

Set the entity data.

#### `match_get() -> table`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make() -> Entity`

Create a new `RolloutEntity` instance with the same client and
options.

#### `get_name() -> string`

Return the entity name.


---

## SavedQueryEntity

```lua
local saved_query = client:SavedQuery(nil)
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `description` | `string` | Yes |  |
| `errors` | `table` | Yes |  |
| `id` | `string` | No |  |
| `messages` | `table` | Yes |  |
| `name` | `string` | Yes | Query name |
| `parameters` | `table` | Yes |  |
| `result` | `table` | Yes |  |
| `success` | `boolean` | Yes |  |

### Operations

#### `create(reqdata, ctrl) -> any, err`

Create a new entity with the given data.

```lua
local result, err = client:SavedQuery():create({
  account_id = --[[ string ]],
  description = --[[ string ]],
  errors = --[[ table ]],
  messages = --[[ table ]],
  name = --[[ string ]],
  parameters = --[[ table ]],
  result = --[[ table ]],
  success = --[[ boolean ]],
})
```

#### `list(reqmatch, ctrl) -> any, err`

List entities matching the given criteria. Returns an array.

```lua
local results, err = client:SavedQuery():list()
```

#### `load(reqmatch, ctrl) -> any, err`

Load a single entity matching the given criteria.

```lua
local result, err = client:SavedQuery():load({ id = "saved_query_id", account_id = "account_id" })
```

#### `remove(reqmatch, ctrl) -> any, err`

Remove the entity matching the given criteria.

```lua
local result, err = client:SavedQuery():remove({ id = "saved_query_id", account_id = "account_id" })
```

#### `update(reqdata, ctrl) -> any, err`

Update an existing entity. The data must include the entity `id`.

```lua
local result, err = client:SavedQuery():update({
  id = "saved_query_id",
  account_id = "account_id",
  -- Fields to update
})
```

### Common Methods

#### `data_get() -> table`

Get the entity data. Returns a copy of the current data.

#### `data_set(data)`

Set the entity data.

#### `match_get() -> table`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make() -> Entity`

Create a new `SavedQueryEntity` instance with the same client and
options.

#### `get_name() -> string`

Return the entity name.


---

## ScriptEntity

```lua
local script = client:Script(nil)
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `id` | `string` | No |  |

### Operations

#### `remove(reqmatch, ctrl) -> any, err`

Remove the entity matching the given criteria.

```lua
local result, err = client:Script():remove({ account_id = "account_id", id = "id" })
```

### Common Methods

#### `data_get() -> table`

Get the entity data. Returns a copy of the current data.

#### `data_set(data)`

Set the entity data.

#### `match_get() -> table`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make() -> Entity`

Create a new `ScriptEntity` instance with the same client and
options.

#### `get_name() -> string`

Return the entity name.


---

## ScriptSettingEntity

```lua
local script_setting = client:ScriptSetting(nil)
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `errors` | `table` | Yes |  |
| `logpush` | `boolean` | No | Whether Logpush is turned on for the Worker. |
| `messages` | `table` | Yes |  |
| `observability` | `any` | No |  |
| `result` | `table` | Yes |  |
| `success` | `boolean` | Yes | Whether the API call was successful. |
| `tags` | `any` | No |  |
| `tail_consumers` | `table` | No | List of Workers that will consume logs from the attached Worker. |

### Operations

#### `list(reqmatch, ctrl) -> any, err`

List entities matching the given criteria. Returns an array.

```lua
local results, err = client:ScriptSetting():list()
```

#### `update(reqdata, ctrl) -> any, err`

Update an existing entity. The data must include the entity `id`.

```lua
local result, err = client:ScriptSetting():update({
  account_id = "account_id",
  script_name = "script_name",
  -- Fields to update
})
```

### Common Methods

#### `data_get() -> table`

Get the entity data. Returns a copy of the current data.

#### `data_set(data)`

Set the entity data.

#### `match_get() -> table`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make() -> Entity`

Create a new `ScriptSettingEntity` instance with the same client and
options.

#### `get_name() -> string`

Return the entity name.


---

## SecretEntity

```lua
local secret = client:Secret(nil)
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `comment` | `string` | No | Freeform text describing the secret. |
| `id` | `string` | No |  |
| `result` | `any` | Yes |  |
| `scopes` | `table` | No | The list of services that can use this secret. |
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

#### `create(reqdata, ctrl) -> any, err`

Create a new entity with the given data.

```lua
local result, err = client:Secret():create({
  account_id = --[[ string ]],
  store_id = --[[ string ]],
  result = --[[ any ]],
})
```

#### `list(reqmatch, ctrl) -> any, err`

List entities matching the given criteria. Returns an array.

```lua
local results, err = client:Secret():list()
```

#### `load(reqmatch, ctrl) -> any, err`

Load a single entity matching the given criteria.

```lua
local result, err = client:Secret():load({ id = "secret_id", account_id = "account_id", store_id = "store_id" })
```

#### `remove(reqmatch, ctrl) -> any, err`

Remove the entity matching the given criteria.

```lua
local result, err = client:Secret():remove({ id = "secret_id", account_id = "account_id", store_id = "store_id" })
```

#### `update(reqdata, ctrl) -> any, err`

Update an existing entity. The data must include the entity `id`.

```lua
local result, err = client:Secret():update({
  id = "secret_id",
  account_id = "account_id",
  store_id = "store_id",
  -- Fields to update
})
```

### Common Methods

#### `data_get() -> table`

Get the entity data. Returns a copy of the current data.

#### `data_set(data)`

Set the entity data.

#### `match_get() -> table`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make() -> Entity`

Create a new `SecretEntity` instance with the same client and
options.

#### `get_name() -> string`

Return the entity name.


---

## SecretsStoreDeleteEntity

```lua
local secrets_store_delete = client:SecretsStoreDelete(nil)
```

### Operations

#### `remove(reqmatch, ctrl) -> any, err`

Remove the entity matching the given criteria.

```lua
local result, err = client:SecretsStoreDelete():remove({ account_id = "account_id", store_id = "store_id" })
```

### Common Methods

#### `data_get() -> table`

Get the entity data. Returns a copy of the current data.

#### `data_set(data)`

Set the entity data.

#### `match_get() -> table`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make() -> Entity`

Create a new `SecretsStoreDeleteEntity` instance with the same client and
options.

#### `get_name() -> string`

Return the entity name.


---

## SecretsStoreQuotaEntity

```lua
local secrets_store_quota = client:SecretsStoreQuota(nil)
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `result` | `any` | Yes |  |

### Operations

#### `load(reqmatch, ctrl) -> any, err`

Load a single entity matching the given criteria.

```lua
local result, err = client:SecretsStoreQuota():load({ account_id = "account_id" })
```

### Common Methods

#### `data_get() -> table`

Get the entity data. Returns a copy of the current data.

#### `data_set(data)`

Set the entity data.

#### `match_get() -> table`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make() -> Entity`

Create a new `SecretsStoreQuotaEntity` instance with the same client and
options.

#### `get_name() -> string`

Return the entity name.


---

## SecretsStoreSecretEntity

```lua
local secrets_store_secret = client:SecretsStoreSecret(nil)
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `comment` | `string` | No | Freeform text describing the secret. |
| `name` | `string` | Yes | The name of the secret. |
| `scopes` | `table` | Yes | The list of services that can use this secret. |

### Operations

#### `create(reqdata, ctrl) -> any, err`

Create a new entity with the given data.

```lua
local result, err = client:SecretsStoreSecret():create({
  account_id = --[[ string ]],
  secret_id = --[[ string ]],
  store_id = --[[ string ]],
  name = --[[ string ]],
  scopes = --[[ table ]],
})
```

### Common Methods

#### `data_get() -> table`

Get the entity data. Returns a copy of the current data.

#### `data_set(data)`

Set the entity data.

#### `match_get() -> table`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make() -> Entity`

Create a new `SecretsStoreSecretEntity` instance with the same client and
options.

#### `get_name() -> string`

Return the entity name.


---

## SecretsStoreStoreEntity

```lua
local secrets_store_store = client:SecretsStoreStore(nil)
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `id` | `string` | No |  |
| `name` | `string` | Yes | The name of the store. |
| `result` | `any` | Yes |  |

### Operations

#### `create(reqdata, ctrl) -> any, err`

Create a new entity with the given data.

```lua
local result, err = client:SecretsStoreStore():create({
  account_id = --[[ string ]],
  name = --[[ string ]],
  result = --[[ any ]],
})
```

#### `load(reqmatch, ctrl) -> any, err`

Load a single entity matching the given criteria.

```lua
local result, err = client:SecretsStoreStore():load({ id = "secrets_store_store_id", account_id = "account_id" })
```

### Common Methods

#### `data_get() -> table`

Get the entity data. Returns a copy of the current data.

#### `data_set(data)`

Set the entity data.

#### `match_get() -> table`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make() -> Entity`

Create a new `SecretsStoreStoreEntity` instance with the same client and
options.

#### `get_name() -> string`

Return the entity name.


---

## SecretsStoreStoresResponseCollectionEntity

```lua
local secrets_store_stores_response_collection = client:SecretsStoreStoresResponseCollection(nil)
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `result` | `table` | No |  |

### Operations

#### `list(reqmatch, ctrl) -> any, err`

List entities matching the given criteria. Returns an array.

```lua
local results, err = client:SecretsStoreStoresResponseCollection():list()
```

### Common Methods

#### `data_get() -> table`

Get the entity data. Returns a copy of the current data.

#### `data_set(data)`

Set the entity data.

#### `match_get() -> table`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make() -> Entity`

Create a new `SecretsStoreStoresResponseCollectionEntity` instance with the same client and
options.

#### `get_name() -> string`

Return the entity name.


---

## SettingEntity

```lua
local setting = client:Setting(nil)
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `errors` | `table` | Yes |  |
| `messages` | `table` | Yes |  |
| `result` | `table` | Yes |  |
| `success` | `boolean` | Yes | Whether the API call was successful. |

### Operations

#### `list(reqmatch, ctrl) -> any, err`

List entities matching the given criteria. Returns an array.

```lua
local results, err = client:Setting():list()
```

#### `update(reqdata, ctrl) -> any, err`

Update an existing entity. The data must include the entity `id`.

```lua
local result, err = client:Setting():update({
  account_id = "account_id",
  environment_name = "environment_name",
  service_id = "service_id",
  -- Fields to update
})
```

### Common Methods

#### `data_get() -> table`

Get the entity data. Returns a copy of the current data.

#### `data_set(data)`

Set the entity data.

#### `match_get() -> table`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make() -> Entity`

Create a new `SettingEntity` instance with the same client and
options.

#### `get_name() -> string`

Return the entity name.


---

## SharedEntity

```lua
local shared = client:Shared(nil)
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `errors` | `table` | Yes |  |
| `id` | `string` | No |  |
| `messages` | `table` | Yes |  |
| `result` | `table` | Yes | Complete results of a query run. |
| `success` | `boolean` | Yes |  |

### Operations

#### `create(reqdata, ctrl) -> any, err`

Create a new entity with the given data.

```lua
local result, err = client:Shared():create({
  account_id = --[[ string ]],
  errors = --[[ table ]],
  messages = --[[ table ]],
  result = --[[ table ]],
  success = --[[ boolean ]],
})
```

#### `load(reqmatch, ctrl) -> any, err`

Load a single entity matching the given criteria.

```lua
local result, err = client:Shared():load({ id = "shared_id", account_id = "account_id" })
```

### Common Methods

#### `data_get() -> table`

Get the entity data. Returns a copy of the current data.

#### `data_set(data)`

Set the entity data.

#### `match_get() -> table`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make() -> Entity`

Create a new `SharedEntity` instance with the same client and
options.

#### `get_name() -> string`

Return the entity name.


---

## TailEntity

```lua
local tail = client:Tail(nil)
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `id` | `string` | No |  |

### Operations

#### `remove(reqmatch, ctrl) -> any, err`

Remove the entity matching the given criteria.

```lua
local result, err = client:Tail():remove({ account_id = "account_id", id = "id", script_id = "script_id" })
```

### Common Methods

#### `data_get() -> table`

Get the entity data. Returns a copy of the current data.

#### `data_set(data)`

Set the entity data.

#### `match_get() -> table`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make() -> Entity`

Create a new `TailEntity` instance with the same client and
options.

#### `get_name() -> string`

Return the entity name.


---

## TokenEntity

```lua
local token = client:Token(nil)
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `id` | `string` | No |  |

### Operations

#### `remove(reqmatch, ctrl) -> any, err`

Remove the entity matching the given criteria.

```lua
local result, err = client:Token():remove({ account_id = "account_id", id = "id" })
```

### Common Methods

#### `data_get() -> table`

Get the entity data. Returns a copy of the current data.

#### `data_set(data)`

Set the entity data.

#### `match_get() -> table`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make() -> Entity`

Create a new `TokenEntity` instance with the same client and
options.

#### `get_name() -> string`

Return the entity name.


---

## TriggerEntity

```lua
local trigger = client:Trigger(nil)
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `branch_excludes` | `table` | Yes | Branch patterns that must not start builds. |
| `branch_includes` | `table` | Yes | Branch patterns that can start builds. |
| `build_caching_enabled` | `boolean` | No | Whether builds reuse cached dependencies and build artifacts. |
| `build_command` | `string` | Yes | Command to build the Worker. |
| `build_token_uuid` | `string` | Yes | UUID of the build token used when deploying the Worker. |
| `deploy_command` | `string` | Yes | Command to deploy the Worker. |
| `external_script_id` | `string` | Yes | System-generated tag of the Worker. |
| `id` | `string` | No |  |
| `path_excludes` | `table` | Yes | Path patterns that must not start builds. |
| `path_includes` | `table` | Yes | Path patterns that can start builds. |
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

#### `create(reqdata, ctrl) -> any, err`

Create a new entity with the given data.

```lua
local result, err = client:Trigger():create({
  account_id = --[[ string ]],
  branch_excludes = --[[ table ]],
  branch_includes = --[[ table ]],
  build_command = --[[ string ]],
  build_token_uuid = --[[ string ]],
  deploy_command = --[[ string ]],
  external_script_id = --[[ string ]],
  path_excludes = --[[ table ]],
  path_includes = --[[ table ]],
  repo_connection_uuid = --[[ string ]],
  root_directory = --[[ string ]],
  trigger_name = --[[ string ]],
})
```

#### `remove(reqmatch, ctrl) -> any, err`

Remove the entity matching the given criteria.

```lua
local result, err = client:Trigger():remove({ account_id = "account_id", id = "id" })
```

#### `update(reqdata, ctrl) -> any, err`

Update an existing entity. The data must include the entity `id`.

```lua
local result, err = client:Trigger():update({
  account_id = "account_id",
  id = "id",
  -- Fields to update
})
```

### Common Methods

#### `data_get() -> table`

Get the entity data. Returns a copy of the current data.

#### `data_set(data)`

Set the entity data.

#### `match_get() -> table`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make() -> Entity`

Create a new `TriggerEntity` instance with the same client and
options.

#### `get_name() -> string`

Return the entity name.


---

## UsageEntity

```lua
local usage = client:Usage(nil)
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `errors` | `table` | Yes |  |
| `messages` | `table` | Yes |  |
| `result` | `table` | Yes |  |
| `success` | `boolean` | Yes |  |

### Operations

#### `list(reqmatch, ctrl) -> any, err`

List entities matching the given criteria. Returns an array.

```lua
local results, err = client:Usage():list()
```

### Common Methods

#### `data_get() -> table`

Get the entity data. Returns a copy of the current data.

#### `data_set(data)`

Set the entity data.

#### `match_get() -> table`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make() -> Entity`

Create a new `UsageEntity` instance with the same client and
options.

#### `get_name() -> string`

Return the entity name.


---

## ValueEntity

```lua
local value = client:Value(nil)
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `datasets` | `table` | Yes | Leave this empty to use the default datasets |
| `errors` | `table` | Yes |  |
| `filters` | `table` | No | Apply filters before listing values. |
| `key` | `string` | Yes |  |
| `limit` | `number` | No |  |
| `messages` | `table` | Yes |  |
| `needle` | `table` | Yes | Full-text search expression to match events containing the specified text or pattern. |
| `result` | `table` | Yes |  |
| `success` | `boolean` | Yes |  |
| `timeframe` | `table` | Yes |  |
| `type` | `string` | Yes |  |

### Operations

#### `create(reqdata, ctrl) -> any, err`

Create a new entity with the given data.

```lua
local result, err = client:Value():create({
  account_id = --[[ string ]],
  datasets = --[[ table ]],
  errors = --[[ table ]],
  key = --[[ string ]],
  messages = --[[ table ]],
  needle = --[[ table ]],
  result = --[[ table ]],
  success = --[[ boolean ]],
  timeframe = --[[ table ]],
  type = --[[ string ]],
})
```

### Common Methods

#### `data_get() -> table`

Get the entity data. Returns a copy of the current data.

#### `data_set(data)`

Set the entity data.

#### `match_get() -> table`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make() -> Entity`

Create a new `ValueEntity` instance with the same client and
options.

#### `get_name() -> string`

Return the entity name.


---

## VersionEntity

```lua
local version = client:Version(nil)
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `annotations` | `table` | No | Metadata about the version. |
| `assets` | `table` | No | Configuration for assets within a Worker. |
| `author_email` | `string` | No | Email of the user who created the version. |
| `author_id` | `string` | No | Identifier of the user who created the version. |
| `bindings` | `table` | No | List of bindings attached to a Worker. |
| `cache_options` | `table` | Yes | Global CacheW configuration for the Worker. |
| `compatibility_date` | `string` | No | Date indicating targeted support in the Workers runtime. |
| `compatibility_flags` | `table` | No | Flags that enable or disable certain features in the Workers runtime. |
| `containers` | `table` | No | List of containers attached to a Worker. |
| `created_on` | `string` | Yes | When the version was created. |
| `errors` | `table` | Yes |  |
| `exports` | `any` | No | Declarative exports for the version, including Durable Object classes (with their `storage` backend) and named Worker entrypoints. |
| `exports_reconciliation` | `any` | No | Summary of the declarative exports reconciliation that ran on this upload. |
| `id` | `string` | Yes | Version identifier. |
| `limits` | `table` | No | Resource limits enforced at runtime. |
| `main_module` | `string` | No | The name of the main module in the `modules` array (e.g. |
| `messages` | `table` | Yes |  |
| `migration_tag` | `string` | No | Durable Object migration tag. |
| `migrations` | `any` | No | Migrations for Durable Objects associated with the version. |
| `modules` | `table` | No | Code, sourcemaps, and other content used at runtime. |
| `number` | `number` | Yes | The integer version number, starting from one. |
| `package_dependencies` | `table` | No | The list of npm packages that were installed and used when this Worker version was built. |
| `placement` | `table` | No | Configuration for [Smart Placement](https://developers.cloudflare.com/workers/configuration/smart-placement). |
| `result` | `table` | Yes |  |
| `source` | `string` | No | The client used to create the version. |
| `startup_time_ms` | `number` | No | Time in milliseconds spent on [Worker startup](https://developers.cloudflare.com/workers/platform/limits/#worker-startup-time). |
| `success` | `boolean` | Yes | Whether the API call was successful. |
| `urls` | `table` | Yes | All routable URLs that always point to this version. |
| `usage_model` | `string` | No | Usage model for the version. |

### Operations

#### `create(reqdata, ctrl) -> any, err`

Create a new entity with the given data.

```lua
local result, err = client:Version():create({
  account_id = --[[ string ]],
  worker_id = --[[ string ]],
  cache_options = --[[ table ]],
  created_on = --[[ string ]],
  errors = --[[ table ]],
  id = --[[ string ]],
  messages = --[[ table ]],
  number = --[[ number ]],
  result = --[[ table ]],
  success = --[[ boolean ]],
  urls = --[[ table ]],
})
```

#### `list(reqmatch, ctrl) -> any, err`

List entities matching the given criteria. Returns an array.

```lua
local results, err = client:Version():list()
```

#### `load(reqmatch, ctrl) -> any, err`

Load a single entity matching the given criteria.

```lua
local result, err = client:Version():load({ id = "version_id", account_id = "account_id", worker_id = "worker_id" })
```

#### `remove(reqmatch, ctrl) -> any, err`

Remove the entity matching the given criteria.

```lua
local result, err = client:Version():remove({ id = "version_id", account_id = "account_id", worker_id = "worker_id" })
```

#### `update(reqdata, ctrl) -> any, err`

Update an existing entity. The data must include the entity `id`.

```lua
local result, err = client:Version():update({
  id = "version_id",
  account_id = "account_id",
  worker_id = "worker_id",
  -- Fields to update
})
```

### Common Methods

#### `data_get() -> table`

Get the entity data. Returns a copy of the current data.

#### `data_set(data)`

Set the entity data.

#### `match_get() -> table`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make() -> Entity`

Create a new `VersionEntity` instance with the same client and
options.

#### `get_name() -> string`

Return the entity name.


---

## WorkerEntity

```lua
local worker = client:Worker(nil)
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `auto_build` | `boolean` | No | Whether pushes to the git branch build this Preview. |
| `auto_delete` | `boolean` | No | Whether deleting the git branch also deletes this Preview. |
| `branch` | `any` | No | Git branch name (required if commit_hash not provided) |
| `commit_hash` | `any` | No | Git commit hash (required if branch not provided) |
| `errors` | `table` | Yes |  |
| `git_repository` | `any` | Yes | Git repository settings to update |
| `id` | `string` | No |  |
| `messages` | `table` | Yes |  |
| `previews_base_config` | `table` | Yes | Build and deploy settings when creating a Worker build configuration |
| `previews_enabled` | `boolean` | Yes | Whether Previews are enabled for this Worker |
| `production_settings` | `table` | Yes | Build and deploy settings when creating a Worker build configuration |
| `result` | `table` | Yes | A single Preview of a Worker, with the build settings it currently uses. |
| `result_info` | `table` | No |  |
| `script_tag` | `string` | Yes | System-generated tag of the Worker. |
| `seed_repo` | `any` | No | Optional repository and file overrides used to seed this build. |
| `settings` | `table` | No | Partial build settings for updating a Worker build configuration |
| `success` | `boolean` | Yes | Whether the API call was successful. |

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

#### `create(reqdata, ctrl) -> any, err`

Create a new entity with the given data.

```lua
local result, err = client:Worker():create({
  account_id = --[[ string ]],
  errors = --[[ table ]],
  git_repository = --[[ any ]],
  messages = --[[ table ]],
  previews_base_config = --[[ table ]],
  previews_enabled = --[[ boolean ]],
  production_settings = --[[ table ]],
  result = --[[ table ]],
  script_tag = --[[ string ]],
  success = --[[ boolean ]],
})
```

#### `list(reqmatch, ctrl) -> any, err`

List entities matching the given criteria. Returns an array.

```lua
local results, err = client:Worker():list()
```

#### `load(reqmatch, ctrl) -> any, err`

Load a single entity matching the given criteria.

```lua
local result, err = client:Worker():load({ id = "worker_id", account_id = "account_id" })
```

#### `remove(reqmatch, ctrl) -> any, err`

Remove the entity matching the given criteria.

```lua
local result, err = client:Worker():remove({ id = "worker_id", account_id = "account_id" })
```

#### `update(reqdata, ctrl) -> any, err`

Update an existing entity. The data must include the entity `id`.

```lua
local result, err = client:Worker():update({
  id = "worker_id",
  account_id = "account_id",
  -- Fields to update
})
```

### Common Methods

#### `data_get() -> table`

Get the entity data. Returns a copy of the current data.

#### `data_set(data)`

Set the entity data.

#### `match_get() -> table`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make() -> Entity`

Create a new `WorkerEntity` instance with the same client and
options.

#### `get_name() -> string`

Return the entity name.


---

## WorkerCronTriggerEntity

```lua
local worker_cron_trigger = client:WorkerCronTrigger(nil)
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `errors` | `table` | Yes |  |
| `messages` | `table` | Yes |  |
| `result` | `table` | Yes |  |
| `success` | `boolean` | Yes | Whether the API call was successful. |

### Operations

#### `list(reqmatch, ctrl) -> any, err`

List entities matching the given criteria. Returns an array.

```lua
local results, err = client:WorkerCronTrigger():list()
```

#### `update(reqdata, ctrl) -> any, err`

Update an existing entity. The data must include the entity `id`.

```lua
local result, err = client:WorkerCronTrigger():update({
  account_id = "account_id",
  script_name = "script_name",
  -- Fields to update
})
```

### Common Methods

#### `data_get() -> table`

Get the entity data. Returns a copy of the current data.

#### `data_set(data)`

Set the entity data.

#### `match_get() -> table`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make() -> Entity`

Create a new `WorkerCronTriggerEntity` instance with the same client and
options.

#### `get_name() -> string`

Return the entity name.


---

## WorkerDeploymentEntity

```lua
local worker_deployment = client:WorkerDeployment(nil)
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `annotations` | `table` | No |  |
| `author_email` | `string` | No |  |
| `created_on` | `string` | Yes |  |
| `errors` | `table` | Yes |  |
| `id` | `string` | Yes |  |
| `messages` | `table` | Yes |  |
| `result` | `table` | Yes |  |
| `source` | `string` | Yes |  |
| `strategy` | `string` | Yes |  |
| `success` | `boolean` | Yes | Whether the API call was successful. |
| `versions` | `table` | Yes | Worker versions included in this deployment. |

### Operations

#### `create(reqdata, ctrl) -> any, err`

Create a new entity with the given data.

```lua
local result, err = client:WorkerDeployment():create({
  account_id = --[[ string ]],
  script_name = --[[ string ]],
  created_on = --[[ string ]],
  errors = --[[ table ]],
  id = --[[ string ]],
  messages = --[[ table ]],
  result = --[[ table ]],
  source = --[[ string ]],
  strategy = --[[ string ]],
  success = --[[ boolean ]],
  versions = --[[ table ]],
})
```

#### `load(reqmatch, ctrl) -> any, err`

Load a single entity matching the given criteria.

```lua
local result, err = client:WorkerDeployment():load({ id = "worker_deployment_id", account_id = "account_id" })
```

### Common Methods

#### `data_get() -> table`

Get the entity data. Returns a copy of the current data.

#### `data_set(data)`

Set the entity data.

#### `match_get() -> table`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make() -> Entity`

Create a new `WorkerDeploymentEntity` instance with the same client and
options.

#### `get_name() -> string`

Return the entity name.


---

## WorkerEnvironmentEntity

```lua
local worker_environment = client:WorkerEnvironment(nil)
```

### Operations

#### `load(reqmatch, ctrl) -> any, err`

Load a single entity matching the given criteria.

```lua
local result, err = client:WorkerEnvironment():load({ account_id = "account_id", environment_name = "environment_name", service_id = "service_id" })
```

### Common Methods

#### `data_get() -> table`

Get the entity data. Returns a copy of the current data.

#### `data_set(data)`

Set the entity data.

#### `match_get() -> table`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make() -> Entity`

Create a new `WorkerEnvironmentEntity` instance with the same client and
options.

#### `get_name() -> string`

Return the entity name.


---

## WorkerRouteEntity

```lua
local worker_route = client:WorkerRoute(nil)
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `errors` | `table` | Yes |  |
| `id` | `string` | Yes |  |
| `messages` | `table` | Yes |  |
| `pattern` | `string` | Yes | Pattern to match incoming requests against. |
| `result` | `table` | Yes |  |
| `script` | `string` | No | Name of the script to run if the route matches. |
| `success` | `boolean` | Yes | Whether the API call was successful. |

### Operations

#### `create(reqdata, ctrl) -> any, err`

Create a new entity with the given data.

```lua
local result, err = client:WorkerRoute():create({
  zone_id = --[[ string ]],
  errors = --[[ table ]],
  id = --[[ string ]],
  messages = --[[ table ]],
  pattern = --[[ string ]],
  result = --[[ table ]],
  success = --[[ boolean ]],
})
```

#### `list(reqmatch, ctrl) -> any, err`

List entities matching the given criteria. Returns an array.

```lua
local results, err = client:WorkerRoute():list()
```

#### `load(reqmatch, ctrl) -> any, err`

Load a single entity matching the given criteria.

```lua
local result, err = client:WorkerRoute():load({ id = "worker_route_id", zone_id = "zone_id" })
```

#### `remove(reqmatch, ctrl) -> any, err`

Remove the entity matching the given criteria.

```lua
local result, err = client:WorkerRoute():remove({ id = "worker_route_id", zone_id = "zone_id" })
```

#### `update(reqdata, ctrl) -> any, err`

Update an existing entity. The data must include the entity `id`.

```lua
local result, err = client:WorkerRoute():update({
  id = "worker_route_id",
  zone_id = "zone_id",
  -- Fields to update
})
```

### Common Methods

#### `data_get() -> table`

Get the entity data. Returns a copy of the current data.

#### `data_set(data)`

Set the entity data.

#### `match_get() -> table`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make() -> Entity`

Create a new `WorkerRouteEntity` instance with the same client and
options.

#### `get_name() -> string`

Return the entity name.


---

## WorkerScriptEntity

```lua
local worker_script = client:WorkerScript(nil)
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `errors` | `table` | Yes |  |
| `id` | `string` | No |  |
| `messages` | `table` | Yes |  |
| `result` | `table` | No | A secret value accessible through a binding. |
| `success` | `boolean` | Yes | Whether the API call was successful. |

### Field Usage by Operation

| Field | load | list | create | update | remove |
| --- | --- | --- | --- | --- | --- |
| `errors` | - | - | - | - | - |
| `id` | - | - | - | - | - |
| `messages` | - | - | - | - | - |
| `result` | - | Yes | - | - | - |
| `success` | - | - | - | - | - |

### Operations

#### `create(reqdata, ctrl) -> any, err`

Create a new entity with the given data.

```lua
local result, err = client:WorkerScript():create({
  account_id = --[[ string ]],
  script_name = --[[ string ]],
  errors = --[[ table ]],
  messages = --[[ table ]],
  success = --[[ boolean ]],
})
```

#### `list(reqmatch, ctrl) -> any, err`

List entities matching the given criteria. Returns an array.

```lua
local results, err = client:WorkerScript():list()
```

#### `load(reqmatch, ctrl) -> any, err`

Load a single entity matching the given criteria.

```lua
local result, err = client:WorkerScript():load({ id = "worker_script_id", account_id = "account_id" })
```

#### `remove(reqmatch, ctrl) -> any, err`

Remove the entity matching the given criteria.

```lua
local result, err = client:WorkerScript():remove({ account_id = "account_id", script_name = "script_name" })
```

#### `update(reqdata, ctrl) -> any, err`

Update an existing entity. The data must include the entity `id`.

```lua
local result, err = client:WorkerScript():update({
  id = "worker_script_id",
  account_id = "account_id",
  -- Fields to update
})
```

### Common Methods

#### `data_get() -> table`

Get the entity data. Returns a copy of the current data.

#### `data_set(data)`

Set the entity data.

#### `match_get() -> table`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make() -> Entity`

Create a new `WorkerScriptEntity` instance with the same client and
options.

#### `get_name() -> string`

Return the entity name.


---

## WorkerSubdomainEntity

```lua
local worker_subdomain = client:WorkerSubdomain(nil)
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `errors` | `table` | Yes |  |
| `messages` | `table` | Yes |  |
| `result` | `table` | Yes |  |
| `subdomain` | `string` | Yes |  |
| `success` | `boolean` | Yes | Whether the API call was successful. |

### Operations

#### `list(reqmatch, ctrl) -> any, err`

List entities matching the given criteria. Returns an array.

```lua
local results, err = client:WorkerSubdomain():list()
```

#### `remove(reqmatch, ctrl) -> any, err`

Remove the entity matching the given criteria.

```lua
local result, err = client:WorkerSubdomain():remove({ account_id = "account_id" })
```

#### `update(reqdata, ctrl) -> any, err`

Update an existing entity. The data must include the entity `id`.

```lua
local result, err = client:WorkerSubdomain():update({
  account_id = "account_id",
  -- Fields to update
})
```

### Common Methods

#### `data_get() -> table`

Get the entity data. Returns a copy of the current data.

#### `data_set(data)`

Set the entity data.

#### `match_get() -> table`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make() -> Entity`

Create a new `WorkerSubdomainEntity` instance with the same client and
options.

#### `get_name() -> string`

Return the entity name.


---

## WorkerTailLogEntity

```lua
local worker_tail_log = client:WorkerTailLog(nil)
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `errors` | `table` | Yes |  |
| `messages` | `table` | Yes |  |
| `result` | `table` | Yes |  |
| `success` | `boolean` | Yes | Whether the API call was successful. |

### Operations

#### `create(reqdata, ctrl) -> any, err`

Create a new entity with the given data.

```lua
local result, err = client:WorkerTailLog():create({
  account_id = --[[ string ]],
  script_name = --[[ string ]],
  errors = --[[ table ]],
  messages = --[[ table ]],
  result = --[[ table ]],
  success = --[[ boolean ]],
})
```

#### `list(reqmatch, ctrl) -> any, err`

List entities matching the given criteria. Returns an array.

```lua
local results, err = client:WorkerTailLog():list()
```

### Common Methods

#### `data_get() -> table`

Get the entity data. Returns a copy of the current data.

#### `data_set(data)`

Set the entity data.

#### `match_get() -> table`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make() -> Entity`

Create a new `WorkerTailLogEntity` instance with the same client and
options.

#### `get_name() -> string`

Return the entity name.


---

## WorkersAccountSettingEntity

```lua
local workers_account_setting = client:WorkersAccountSetting(nil)
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `default_usage_model` | `string` | No |  |
| `errors` | `table` | Yes |  |
| `green_compute` | `boolean` | No |  |
| `messages` | `table` | Yes |  |
| `result` | `table` | Yes |  |
| `success` | `boolean` | Yes | Whether the API call was successful. |

### Operations

#### `list(reqmatch, ctrl) -> any, err`

List entities matching the given criteria. Returns an array.

```lua
local results, err = client:WorkersAccountSetting():list()
```

#### `update(reqdata, ctrl) -> any, err`

Update an existing entity. The data must include the entity `id`.

```lua
local result, err = client:WorkersAccountSetting():update({
  account_id = "account_id",
  -- Fields to update
})
```

### Common Methods

#### `data_get() -> table`

Get the entity data. Returns a copy of the current data.

#### `data_set(data)`

Set the entity data.

#### `match_get() -> table`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make() -> Entity`

Create a new `WorkersAccountSettingEntity` instance with the same client and
options.

#### `get_name() -> string`

Return the entity name.


---

## WorkersApiResponseNullResultEntity

```lua
local workers_api_response_null_result = client:WorkersApiResponseNullResult(nil)
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `errors` | `table` | Yes |  |
| `messages` | `table` | Yes |  |
| `result` | `table` | No |  |
| `success` | `boolean` | Yes | Whether the API call was successful. |

### Operations

#### `remove(reqmatch, ctrl) -> any, err`

Remove the entity matching the given criteria.

```lua
local result, err = client:WorkersApiResponseNullResult():remove({ account_id = "account_id" })
```

#### `update(reqdata, ctrl) -> any, err`

Update an existing entity. The data must include the entity `id`.

```lua
local result, err = client:WorkersApiResponseNullResult():update({
  account_id = "account_id",
  namespace_id = "namespace_id",
  script_id = "script_id",
  tag = "tag",
  -- Fields to update
})
```

### Common Methods

#### `data_get() -> table`

Get the entity data. Returns a copy of the current data.

#### `data_set(data)`

Set the entity data.

#### `match_get() -> table`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make() -> Entity`

Create a new `WorkersApiResponseNullResultEntity` instance with the same client and
options.

#### `get_name() -> string`

Return the entity name.


---

## WorkersCompletedUploadAssetEntity

```lua
local workers_completed_upload_asset = client:WorkersCompletedUploadAsset(nil)
```

### Operations

#### `create(reqdata, ctrl) -> any, err`

Create a new entity with the given data.

```lua
local result, err = client:WorkersCompletedUploadAsset():create({
  account_id = --[[ string ]],
  base64 = --[[ boolean ]],
})
```

### Common Methods

#### `data_get() -> table`

Get the entity data. Returns a copy of the current data.

#### `data_set(data)`

Set the entity data.

#### `match_get() -> table`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make() -> Entity`

Create a new `WorkersCompletedUploadAssetEntity` instance with the same client and
options.

#### `get_name() -> string`

Return the entity name.


---

## WorkersCreateAssetsUploadSessionEntity

```lua
local workers_create_assets_upload_session = client:WorkersCreateAssetsUploadSession(nil)
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `manifest` | `table` | Yes | A manifest ([path]: {hash, size}) map of files to upload. |

### Operations

#### `create(reqdata, ctrl) -> any, err`

Create a new entity with the given data.

```lua
local result, err = client:WorkersCreateAssetsUploadSession():create({
  account_id = --[[ string ]],
  script_name = --[[ string ]],
  manifest = --[[ table ]],
})
```

### Common Methods

#### `data_get() -> table`

Get the entity data. Returns a copy of the current data.

#### `data_set(data)`

Set the entity data.

#### `match_get() -> table`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make() -> Entity`

Create a new `WorkersCreateAssetsUploadSessionEntity` instance with the same client and
options.

#### `get_name() -> string`

Return the entity name.


---

## WorkersForPlatformEntity

```lua
local workers_for_platform = client:WorkersForPlatform(nil)
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `errors` | `table` | Yes |  |
| `messages` | `table` | Yes |  |
| `result` | `table` | Yes | A secret value accessible through a binding. |
| `success` | `boolean` | Yes | Whether the API call was successful. |

### Field Usage by Operation

| Field | load | list | update |
| --- | --- | --- | --- |
| `errors` | - | - | - |
| `messages` | - | - | - |
| `result` | - | Yes | - |
| `success` | - | - | - |

### Operations

#### `list(reqmatch, ctrl) -> any, err`

List entities matching the given criteria. Returns an array.

```lua
local results, err = client:WorkersForPlatform():list()
```

#### `load(reqmatch, ctrl) -> any, err`

Load a single entity matching the given criteria.

```lua
local result, err = client:WorkersForPlatform():load({ account_id = "account_id", namespace_id = "namespace_id" })
```

#### `update(reqdata, ctrl) -> any, err`

Update an existing entity. The data must include the entity `id`.

```lua
local result, err = client:WorkersForPlatform():update({
  account_id = "account_id",
  namespace_id = "namespace_id",
  script_name = "script_name",
  -- Fields to update
})
```

### Common Methods

#### `data_get() -> table`

Get the entity data. Returns a copy of the current data.

#### `data_set(data)`

Set the entity data.

#### `match_get() -> table`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make() -> Entity`

Create a new `WorkersForPlatformEntity` instance with the same client and
options.

#### `get_name() -> string`

Return the entity name.


---

## WorkersKvApiResponseCommonNoResultEntity

```lua
local workers_kv_api_response_common_no_result = client:WorkersKvApiResponseCommonNoResult(nil)
```

### Operations

#### `remove(reqmatch, ctrl) -> any, err`

Remove the entity matching the given criteria.

```lua
local result, err = client:WorkersKvApiResponseCommonNoResult():remove({ account_id = "account_id", namespace_id = "namespace_id" })
```

#### `update(reqdata, ctrl) -> any, err`

Update an existing entity. The data must include the entity `id`.

```lua
local result, err = client:WorkersKvApiResponseCommonNoResult():update({
  account_id = "account_id",
  key_name = "key_name",
  namespace_id = "namespace_id",
  -- Fields to update
})
```

### Common Methods

#### `data_get() -> table`

Get the entity data. Returns a copy of the current data.

#### `data_set(data)`

Set the entity data.

#### `match_get() -> table`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make() -> Entity`

Create a new `WorkersKvApiResponseCommonNoResultEntity` instance with the same client and
options.

#### `get_name() -> string`

Return the entity name.


---

## WorkersKvNamespaceEntity

```lua
local workers_kv_namespace = client:WorkersKvNamespace(nil)
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `errors` | `table` | Yes |  |
| `id` | `string` | No |  |
| `jurisdiction` | `string` | No | Specify the jurisdiction to restrict the KV namespace to durably store data within. |
| `keys` | `table` | Yes | Array of keys to retrieve (maximum of 100). |
| `messages` | `table` | Yes |  |
| `result` | `any` | No |  |
| `result_info` | `table` | No |  |
| `success` | `boolean` | Yes | Whether the API call was successful. |
| `title` | `string` | Yes | Human-readable string name for a Workers KV namespace. |
| `type` | `string` | No | Return values as strings with `text`, or parse stored JSON values with `json`. |
| `withMetadata` | `boolean` | No | Whether to include metadata in the response. |

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

#### `create(reqdata, ctrl) -> any, err`

Create a new entity with the given data.

```lua
local result, err = client:WorkersKvNamespace():create({
  account_id = --[[ string ]],
  errors = --[[ table ]],
  keys = --[[ table ]],
  messages = --[[ table ]],
  success = --[[ boolean ]],
  title = --[[ string ]],
})
```

#### `list(reqmatch, ctrl) -> any, err`

List entities matching the given criteria. Returns an array.

```lua
local results, err = client:WorkersKvNamespace():list()
```

#### `load(reqmatch, ctrl) -> any, err`

Load a single entity matching the given criteria.

```lua
local result, err = client:WorkersKvNamespace():load({ id = "workers_kv_namespace_id", account_id = "account_id" })
```

#### `remove(reqmatch, ctrl) -> any, err`

Remove the entity matching the given criteria.

```lua
local result, err = client:WorkersKvNamespace():remove({ account_id = "account_id", namespace_id = "namespace_id" })
```

#### `update(reqdata, ctrl) -> any, err`

Update an existing entity. The data must include the entity `id`.

```lua
local result, err = client:WorkersKvNamespace():update({
  id = "workers_kv_namespace_id",
  account_id = "account_id",
  -- Fields to update
})
```

### Common Methods

#### `data_get() -> table`

Get the entity data. Returns a copy of the current data.

#### `data_set(data)`

Set the entity data.

#### `match_get() -> table`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make() -> Entity`

Create a new `WorkersKvNamespaceEntity` instance with the same client and
options.

#### `get_name() -> string`

Return the entity name.


---

## WorkersNamespaceListEntity

```lua
local workers_namespace_list = client:WorkersNamespaceList(nil)
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `errors` | `table` | Yes |  |
| `messages` | `table` | Yes |  |
| `result` | `table` | No |  |
| `success` | `boolean` | Yes | Whether the API call was successful. |

### Operations

#### `list(reqmatch, ctrl) -> any, err`

List entities matching the given criteria. Returns an array.

```lua
local results, err = client:WorkersNamespaceList():list()
```

### Common Methods

#### `data_get() -> table`

Get the entity data. Returns a copy of the current data.

#### `data_set(data)`

Set the entity data.

#### `match_get() -> table`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make() -> Entity`

Create a new `WorkersNamespaceListEntity` instance with the same client and
options.

#### `get_name() -> string`

Return the entity name.


---

## WorkersNamespaceScriptDeleteBulkEntity

```lua
local workers_namespace_script_delete_bulk = client:WorkersNamespaceScriptDeleteBulk(nil)
```

### Operations

#### `remove(reqmatch, ctrl) -> any, err`

Remove the entity matching the given criteria.

```lua
local result, err = client:WorkersNamespaceScriptDeleteBulk():remove({ account_id = "account_id", dispatch_namespace = "dispatch_namespace", tag = "tag" })
```

### Common Methods

#### `data_get() -> table`

Get the entity data. Returns a copy of the current data.

#### `data_set(data)`

Set the entity data.

#### `match_get() -> table`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make() -> Entity`

Create a new `WorkersNamespaceScriptDeleteBulkEntity` instance with the same client and
options.

#### `get_name() -> string`

Return the entity name.


---

## WorkersNamespaceScriptResponseSingleEntity

```lua
local workers_namespace_script_response_single = client:WorkersNamespaceScriptResponseSingle(nil)
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `errors` | `table` | Yes |  |
| `messages` | `table` | Yes |  |
| `result` | `table` | Yes | Details about a worker uploaded to a Workers for Platforms namespace. |
| `success` | `boolean` | Yes | Whether the API call was successful. |

### Operations

#### `load(reqmatch, ctrl) -> any, err`

Load a single entity matching the given criteria.

```lua
local result, err = client:WorkersNamespaceScriptResponseSingle():load({ account_id = "account_id", namespace_id = "namespace_id", script_name = "script_name" })
```

#### `update(reqdata, ctrl) -> any, err`

Update an existing entity. The data must include the entity `id`.

```lua
local result, err = client:WorkersNamespaceScriptResponseSingle():update({
  account_id = "account_id",
  namespace_id = "namespace_id",
  script_name = "script_name",
  -- Fields to update
})
```

### Common Methods

#### `data_get() -> table`

Get the entity data. Returns a copy of the current data.

#### `data_set(data)`

Set the entity data.

#### `match_get() -> table`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make() -> Entity`

Create a new `WorkersNamespaceScriptResponseSingleEntity` instance with the same client and
options.

#### `get_name() -> string`

Return the entity name.


---

## WorkersNamespaceSingleEntity

```lua
local workers_namespace_single = client:WorkersNamespaceSingle(nil)
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `errors` | `table` | Yes |  |
| `messages` | `table` | Yes |  |
| `name` | `string` | No | The name of the dispatch namespace. |
| `result` | `table` | No |  |
| `success` | `boolean` | Yes | Whether the API call was successful. |
| `trusted_workers` | `boolean` | No | Whether the Workers in the namespace are executed in a "trusted" manner. |

### Operations

#### `create(reqdata, ctrl) -> any, err`

Create a new entity with the given data.

```lua
local result, err = client:WorkersNamespaceSingle():create({
  account_id = --[[ string ]],
  errors = --[[ table ]],
  messages = --[[ table ]],
  success = --[[ boolean ]],
})
```

#### `load(reqmatch, ctrl) -> any, err`

Load a single entity matching the given criteria.

```lua
local result, err = client:WorkersNamespaceSingle():load({ account_id = "account_id", dispatch_namespace = "dispatch_namespace" })
```

#### `update(reqdata, ctrl) -> any, err`

Update an existing entity. The data must include the entity `id`.

```lua
local result, err = client:WorkersNamespaceSingle():update({
  account_id = "account_id",
  dispatch_namespace = "dispatch_namespace",
  -- Fields to update
})
```

### Common Methods

#### `data_get() -> table`

Get the entity data. Returns a copy of the current data.

#### `data_set(data)`

Set the entity data.

#### `match_get() -> table`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make() -> Entity`

Create a new `WorkersNamespaceSingleEntity` instance with the same client and
options.

#### `get_name() -> string`

Return the entity name.


---

## WorkersPipelinesOtherEntity

```lua
local workers_pipelines_other = client:WorkersPipelinesOther(nil)
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `config` | `any` | No | Defines the configuration of the R2 Sink. |
| `created_at` | `string` | Yes |  |
| `destination` | `table` | Yes |  |
| `endpoint` | `string` | Yes | Indicates the endpoint URL to send traffic. |
| `failure_reason` | `string` | No | Indicates the reason for the failure of the Pipeline. |
| `format` | `any` | No | Defines the output data format of a sink. |
| `graph` | `table` | Yes | Indicates the processing flow to implement the SQL. |
| `http` | `table` | Yes |  |
| `id` | `string` | Yes | Indicates a unique identifier for this pipeline. |
| `modified_at` | `string` | Yes |  |
| `name` | `string` | Yes | Indicates the name of the Pipeline. |
| `schema` | `table` | No | Defines the schema of the events in the data stream. |
| `source` | `table` | Yes |  |
| `sql` | `string` | Yes | Specifies SQL for the Pipeline processing flow. |
| `status` | `string` | Yes | Indicates the current status of the Pipeline. |
| `tables` | `table` | Yes | List of streams and sinks used by this pipeline. |
| `type` | `string` | Yes | Specifies the type of sink. |
| `version` | `number` | Yes | Indicates the version number of last saved configuration. |
| `worker_binding` | `table` | Yes |  |

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

#### `create(reqdata, ctrl) -> any, err`

Create a new entity with the given data.

```lua
local result, err = client:WorkersPipelinesOther():create({
  account_id = --[[ string ]],
  created_at = --[[ string ]],
  destination = --[[ table ]],
  endpoint = --[[ string ]],
  graph = --[[ table ]],
  http = --[[ table ]],
  id = --[[ string ]],
  modified_at = --[[ string ]],
  name = --[[ string ]],
  source = --[[ table ]],
  sql = --[[ string ]],
  status = --[[ string ]],
  tables = --[[ table ]],
  type = --[[ string ]],
  version = --[[ number ]],
  worker_binding = --[[ table ]],
})
```

#### `list(reqmatch, ctrl) -> any, err`

List entities matching the given criteria. Returns an array.

```lua
local results, err = client:WorkersPipelinesOther():list()
```

#### `load(reqmatch, ctrl) -> any, err`

Load a single entity matching the given criteria.

```lua
local result, err = client:WorkersPipelinesOther():load({ account_id = "account_id" })
```

#### `remove(reqmatch, ctrl) -> any, err`

Remove the entity matching the given criteria.

```lua
local result, err = client:WorkersPipelinesOther():remove({ account_id = "account_id" })
```

#### `update(reqdata, ctrl) -> any, err`

Update an existing entity. The data must include the entity `id`.

```lua
local result, err = client:WorkersPipelinesOther():update({
  account_id = "account_id",
  pipeline_name = "pipeline_name",
  -- Fields to update
})
```

### Common Methods

#### `data_get() -> table`

Get the entity data. Returns a copy of the current data.

#### `data_set(data)`

Set the entity data.

#### `match_get() -> table`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make() -> Entity`

Create a new `WorkersPipelinesOtherEntity` instance with the same client and
options.

#### `get_name() -> string`

Return the entity name.


---

## WorkersScriptAndVersionSettingEntity

```lua
local workers_script_and_version_setting = client:WorkersScriptAndVersionSetting(nil)
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `errors` | `table` | Yes |  |
| `messages` | `table` | Yes |  |
| `result` | `table` | Yes |  |
| `success` | `boolean` | Yes | Whether the API call was successful. |

### Operations

#### `list(reqmatch, ctrl) -> any, err`

List entities matching the given criteria. Returns an array.

```lua
local results, err = client:WorkersScriptAndVersionSetting():list()
```

#### `update(reqdata, ctrl) -> any, err`

Update an existing entity. The data must include the entity `id`.

```lua
local result, err = client:WorkersScriptAndVersionSetting():update({
  account_id = "account_id",
  script_name = "script_name",
  -- Fields to update
})
```

### Common Methods

#### `data_get() -> table`

Get the entity data. Returns a copy of the current data.

#### `data_set(data)`

Set the entity data.

#### `match_get() -> table`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make() -> Entity`

Create a new `WorkersScriptAndVersionSettingEntity` instance with the same client and
options.

#### `get_name() -> string`

Return the entity name.


---

## WorkersScriptResponseCollectionEntity

```lua
local workers_script_response_collection = client:WorkersScriptResponseCollection(nil)
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `errors` | `table` | Yes |  |
| `messages` | `table` | Yes |  |
| `result` | `table` | Yes |  |
| `success` | `boolean` | Yes | Whether the API call was successful. |

### Operations

#### `list(reqmatch, ctrl) -> any, err`

List entities matching the given criteria. Returns an array.

```lua
local results, err = client:WorkersScriptResponseCollection():list()
```

### Common Methods

#### `data_get() -> table`

Get the entity data. Returns a copy of the current data.

#### `data_set(data)`

Set the entity data.

#### `match_get() -> table`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make() -> Entity`

Create a new `WorkersScriptResponseCollectionEntity` instance with the same client and
options.

#### `get_name() -> string`

Return the entity name.


---

## WorkersScriptResponseSingleEntity

```lua
local workers_script_response_single = client:WorkersScriptResponseSingle(nil)
```

### Operations

#### `update(reqdata, ctrl) -> any, err`

Update an existing entity. The data must include the entity `id`.

```lua
local result, err = client:WorkersScriptResponseSingle():update({
  account_id = "account_id",
  -- Fields to update
})
```

### Common Methods

#### `data_get() -> table`

Get the entity data. Returns a copy of the current data.

#### `data_set(data)`

Set the entity data.

#### `match_get() -> table`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make() -> Entity`

Create a new `WorkersScriptResponseSingleEntity` instance with the same client and
options.

#### `get_name() -> string`

Return the entity name.


---

## WorkersSmartPlacementEntity

```lua
local workers_smart_placement = client:WorkersSmartPlacement(nil)
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `errors` | `table` | Yes |  |
| `messages` | `table` | Yes |  |
| `result` | `table` | Yes |  |
| `success` | `boolean` | Yes | Whether the API call was successful. |

### Operations

#### `list(reqmatch, ctrl) -> any, err`

List entities matching the given criteria. Returns an array.

```lua
local results, err = client:WorkersSmartPlacement():list()
```

### Common Methods

#### `data_get() -> table`

Get the entity data. Returns a copy of the current data.

#### `data_set(data)`

Set the entity data.

#### `match_get() -> table`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make() -> Entity`

Create a new `WorkersSmartPlacementEntity` instance with the same client and
options.

#### `get_name() -> string`

Return the entity name.


---

## WorkersUsageModelEntity

```lua
local workers_usage_model = client:WorkersUsageModel(nil)
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `errors` | `table` | Yes |  |
| `messages` | `table` | Yes |  |
| `result` | `table` | Yes |  |
| `success` | `boolean` | Yes | Whether the API call was successful. |
| `usage_model` | `string` | No | Usage model for the Worker invocations. |
| `user_limits` | `table` | No | User-defined resource limits for Workers with standard usage model. |

### Operations

#### `list(reqmatch, ctrl) -> any, err`

List entities matching the given criteria. Returns an array.

```lua
local results, err = client:WorkersUsageModel():list()
```

#### `update(reqdata, ctrl) -> any, err`

Update an existing entity. The data must include the entity `id`.

```lua
local result, err = client:WorkersUsageModel():update({
  account_id = "account_id",
  script_name = "script_name",
  -- Fields to update
})
```

### Common Methods

#### `data_get() -> table`

Get the entity data. Returns a copy of the current data.

#### `data_set(data)`

Set the entity data.

#### `match_get() -> table`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make() -> Entity`

Create a new `WorkersUsageModelEntity` instance with the same client and
options.

#### `get_name() -> string`

Return the entity name.


---

## WorkersVersionsListEntity

```lua
local workers_versions_list = client:WorkersVersionsList(nil)
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `errors` | `table` | Yes |  |
| `messages` | `table` | Yes |  |
| `result` | `table` | Yes |  |
| `success` | `boolean` | Yes | Whether the API call was successful. |

### Operations

#### `list(reqmatch, ctrl) -> any, err`

List entities matching the given criteria. Returns an array.

```lua
local results, err = client:WorkersVersionsList():list()
```

### Common Methods

#### `data_get() -> table`

Get the entity data. Returns a copy of the current data.

#### `data_set(data)`

Set the entity data.

#### `match_get() -> table`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make() -> Entity`

Create a new `WorkersVersionsListEntity` instance with the same client and
options.

#### `get_name() -> string`

Return the entity name.


---

## WorkersVersionsSingleEntity

```lua
local workers_versions_single = client:WorkersVersionsSingle(nil)
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `errors` | `table` | Yes |  |
| `messages` | `table` | Yes |  |
| `result` | `any` | Yes |  |
| `success` | `boolean` | Yes | Whether the API call was successful. |

### Operations

#### `load(reqmatch, ctrl) -> any, err`

Load a single entity matching the given criteria.

```lua
local result, err = client:WorkersVersionsSingle():load({ account_id = "account_id", script_id = "script_id", version_id = "version_id" })
```

### Common Methods

#### `data_get() -> table`

Get the entity data. Returns a copy of the current data.

#### `data_set(data)`

Set the entity data.

#### `match_get() -> table`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make() -> Entity`

Create a new `WorkersVersionsSingleEntity` instance with the same client and
options.

#### `get_name() -> string`

Return the entity name.


---

## WorkersVersionsUploadEntity

```lua
local workers_versions_upload = client:WorkersVersionsUpload(nil)
```

### Operations

#### `create(reqdata, ctrl) -> any, err`

Create a new entity with the given data.

```lua
local result, err = client:WorkersVersionsUpload():create({
  account_id = --[[ string ]],
  script_name = --[[ string ]],
})
```

### Common Methods

#### `data_get() -> table`

Get the entity data. Returns a copy of the current data.

#### `data_set(data)`

Set the entity data.

#### `match_get() -> table`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make() -> Entity`

Create a new `WorkersVersionsUploadEntity` instance with the same client and
options.

#### `get_name() -> string`

Return the entity name.


---

## WorkflowEntity

```lua
local workflow = client:Workflow(nil)
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `class_name` | `string` | Yes |  |
| `concurrency` | `table` | No |  |
| `default_retention` | `table` | No | Default retention applied to instances of this version when they do not set their own retention. |
| `errors` | `table` | Yes |  |
| `id` | `string` | No |  |
| `instances` | `table` | Yes |  |
| `limits` | `table` | No |  |
| `messages` | `table` | Yes |  |
| `result` | `table` | Yes |  |
| `result_info` | `table` | Yes |  |
| `schedules` | `table` | No |  |
| `script_name` | `string` | Yes |  |
| `success` | `boolean` | Yes |  |

### Operations

#### `create(reqdata, ctrl) -> any, err`

Create a new entity with the given data.

```lua
local result, err = client:Workflow():create({
  account_id = --[[ string ]],
  workflow_id = --[[ string ]],
  class_name = --[[ string ]],
  errors = --[[ table ]],
  instances = --[[ table ]],
  messages = --[[ table ]],
  result = --[[ table ]],
  result_info = --[[ table ]],
  script_name = --[[ string ]],
  success = --[[ boolean ]],
})
```

#### `list(reqmatch, ctrl) -> any, err`

List entities matching the given criteria. Returns an array.

```lua
local results, err = client:Workflow():list()
```

#### `load(reqmatch, ctrl) -> any, err`

Load a single entity matching the given criteria.

```lua
local result, err = client:Workflow():load({ id = "workflow_id", account_id = "account_id" })
```

#### `remove(reqmatch, ctrl) -> any, err`

Remove the entity matching the given criteria.

```lua
local result, err = client:Workflow():remove({ id = "workflow_id", account_id = "account_id" })
```

#### `update(reqdata, ctrl) -> any, err`

Update an existing entity. The data must include the entity `id`.

```lua
local result, err = client:Workflow():update({
  id = "workflow_id",
  account_id = "account_id",
  -- Fields to update
})
```

### Common Methods

#### `data_get() -> table`

Get the entity data. Returns a copy of the current data.

#### `data_set(data)`

Set the entity data.

#### `match_get() -> table`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make() -> Entity`

Create a new `WorkflowEntity` instance with the same client and
options.

#### `get_name() -> string`

Return the entity name.


---

## Features

| Feature | Version | Description |
| --- | --- | --- |
| `test` | 0.0.1 | Test transport |


Features are activated via the `feature` option:

```lua
local client = sdk.new({
  feature = {
    test = { active = true },
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

