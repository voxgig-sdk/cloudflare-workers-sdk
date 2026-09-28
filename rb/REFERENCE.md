# CloudflareWorkers Ruby SDK Reference

Complete API reference for the CloudflareWorkers Ruby SDK.


## CloudflareWorkersSDK

### Constructor

```ruby
require_relative 'CloudflareWorkers_sdk'

client = CloudflareWorkersSDK.new(options)
```

Create a new SDK client instance.

**Parameters:**

| Name | Type | Description |
| --- | --- | --- |
| `options` | `Hash` | SDK configuration options. |
| `options["apikey"]` | `String` | API key for authentication. |
| `options["base"]` | `String` | Base URL for API requests. |
| `options["prefix"]` | `String` | URL prefix appended after base. |
| `options["suffix"]` | `String` | URL suffix appended after path. |
| `options["headers"]` | `Hash` | Custom headers for all requests. |
| `options["feature"]` | `Hash` | Feature configuration. |
| `options["system"]` | `Hash` | System overrides (e.g. custom fetch). |


### Static Methods

#### `CloudflareWorkersSDK.test(testopts = nil, sdkopts = nil)`

Create a test client with mock features active. Both arguments may be `nil`.

```ruby
client = CloudflareWorkersSDK.test
```


### Instance Methods

#### `Account(data = nil)`

Create a new `Account` entity instance. Pass `nil` for no initial data.

#### `Application(data = nil)`

Create a new `Application` entity instance. Pass `nil` for no initial data.

#### `Brapi(data = nil)`

Create a new `Brapi` entity instance. Pass `nil` for no initial data.

#### `Build(data = nil)`

Create a new `Build` entity instance. Pass `nil` for no initial data.

#### `BuildToken(data = nil)`

Create a new `BuildToken` entity instance. Pass `nil` for no initial data.

#### `BuildsApi(data = nil)`

Create a new `BuildsApi` entity instance. Pass `nil` for no initial data.

#### `Connection(data = nil)`

Create a new `Connection` entity instance. Pass `nil` for no initial data.

#### `ContainerImage(data = nil)`

Create a new `ContainerImage` entity instance. Pass `nil` for no initial data.

#### `ContainerInstance(data = nil)`

Create a new `ContainerInstance` entity instance. Pass `nil` for no initial data.

#### `DeployHook(data = nil)`

Create a new `DeployHook` entity instance. Pass `nil` for no initial data.

#### `Deployment(data = nil)`

Create a new `Deployment` entity instance. Pass `nil` for no initial data.

#### `Destination(data = nil)`

Create a new `Destination` entity instance. Pass `nil` for no initial data.

#### `Domain(data = nil)`

Create a new `Domain` entity instance. Pass `nil` for no initial data.

#### `DurableObjectsNamespace(data = nil)`

Create a new `DurableObjectsNamespace` entity instance. Pass `nil` for no initial data.

#### `EnvironmentVariable(data = nil)`

Create a new `EnvironmentVariable` entity instance. Pass `nil` for no initial data.

#### `GitHubIntegration(data = nil)`

Create a new `GitHubIntegration` entity instance. Pass `nil` for no initial data.

#### `Hyperdrive(data = nil)`

Create a new `Hyperdrive` entity instance. Pass `nil` for no initial data.

#### `ImageRegistry(data = nil)`

Create a new `ImageRegistry` entity instance. Pass `nil` for no initial data.

#### `Issue(data = nil)`

Create a new `Issue` entity instance. Pass `nil` for no initial data.

#### `Key(data = nil)`

Create a new `Key` entity instance. Pass `nil` for no initial data.

#### `LiveTail(data = nil)`

Create a new `LiveTail` entity instance. Pass `nil` for no initial data.

#### `MetricsExport(data = nil)`

Create a new `MetricsExport` entity instance. Pass `nil` for no initial data.

#### `Namespace(data = nil)`

Create a new `Namespace` entity instance. Pass `nil` for no initial data.

#### `Preview(data = nil)`

Create a new `Preview` entity instance. Pass `nil` for no initial data.

#### `PreviewDeployment(data = nil)`

Create a new `PreviewDeployment` entity instance. Pass `nil` for no initial data.

#### `Query(data = nil)`

Create a new `Query` entity instance. Pass `nil` for no initial data.

#### `RepositoryConnection(data = nil)`

Create a new `RepositoryConnection` entity instance. Pass `nil` for no initial data.

#### `Rollout(data = nil)`

Create a new `Rollout` entity instance. Pass `nil` for no initial data.

#### `SavedQuery(data = nil)`

Create a new `SavedQuery` entity instance. Pass `nil` for no initial data.

#### `Script(data = nil)`

Create a new `Script` entity instance. Pass `nil` for no initial data.

#### `ScriptSetting(data = nil)`

Create a new `ScriptSetting` entity instance. Pass `nil` for no initial data.

#### `Secret(data = nil)`

Create a new `Secret` entity instance. Pass `nil` for no initial data.

#### `SecretsStoreDelete(data = nil)`

Create a new `SecretsStoreDelete` entity instance. Pass `nil` for no initial data.

#### `SecretsStoreQuota(data = nil)`

Create a new `SecretsStoreQuota` entity instance. Pass `nil` for no initial data.

#### `SecretsStoreSecret(data = nil)`

Create a new `SecretsStoreSecret` entity instance. Pass `nil` for no initial data.

#### `SecretsStoreStore(data = nil)`

Create a new `SecretsStoreStore` entity instance. Pass `nil` for no initial data.

#### `SecretsStoreStoresResponseCollection(data = nil)`

Create a new `SecretsStoreStoresResponseCollection` entity instance. Pass `nil` for no initial data.

#### `Setting(data = nil)`

Create a new `Setting` entity instance. Pass `nil` for no initial data.

#### `Shared(data = nil)`

Create a new `Shared` entity instance. Pass `nil` for no initial data.

#### `Tail(data = nil)`

Create a new `Tail` entity instance. Pass `nil` for no initial data.

#### `Token(data = nil)`

Create a new `Token` entity instance. Pass `nil` for no initial data.

#### `Trigger(data = nil)`

Create a new `Trigger` entity instance. Pass `nil` for no initial data.

#### `Usage(data = nil)`

Create a new `Usage` entity instance. Pass `nil` for no initial data.

#### `Value(data = nil)`

Create a new `Value` entity instance. Pass `nil` for no initial data.

#### `Version(data = nil)`

Create a new `Version` entity instance. Pass `nil` for no initial data.

#### `Worker(data = nil)`

Create a new `Worker` entity instance. Pass `nil` for no initial data.

#### `WorkerCronTrigger(data = nil)`

Create a new `WorkerCronTrigger` entity instance. Pass `nil` for no initial data.

#### `WorkerDeployment(data = nil)`

Create a new `WorkerDeployment` entity instance. Pass `nil` for no initial data.

#### `WorkerEnvironment(data = nil)`

Create a new `WorkerEnvironment` entity instance. Pass `nil` for no initial data.

#### `WorkerRoute(data = nil)`

Create a new `WorkerRoute` entity instance. Pass `nil` for no initial data.

#### `WorkerScript(data = nil)`

Create a new `WorkerScript` entity instance. Pass `nil` for no initial data.

#### `WorkerSubdomain(data = nil)`

Create a new `WorkerSubdomain` entity instance. Pass `nil` for no initial data.

#### `WorkerTailLog(data = nil)`

Create a new `WorkerTailLog` entity instance. Pass `nil` for no initial data.

#### `WorkersAccountSetting(data = nil)`

Create a new `WorkersAccountSetting` entity instance. Pass `nil` for no initial data.

#### `WorkersApiResponseNullResult(data = nil)`

Create a new `WorkersApiResponseNullResult` entity instance. Pass `nil` for no initial data.

#### `WorkersCompletedUploadAsset(data = nil)`

Create a new `WorkersCompletedUploadAsset` entity instance. Pass `nil` for no initial data.

#### `WorkersCreateAssetsUploadSession(data = nil)`

Create a new `WorkersCreateAssetsUploadSession` entity instance. Pass `nil` for no initial data.

#### `WorkersForPlatform(data = nil)`

Create a new `WorkersForPlatform` entity instance. Pass `nil` for no initial data.

#### `WorkersKvApiResponseCommonNoResult(data = nil)`

Create a new `WorkersKvApiResponseCommonNoResult` entity instance. Pass `nil` for no initial data.

#### `WorkersKvNamespace(data = nil)`

Create a new `WorkersKvNamespace` entity instance. Pass `nil` for no initial data.

#### `WorkersNamespaceList(data = nil)`

Create a new `WorkersNamespaceList` entity instance. Pass `nil` for no initial data.

#### `WorkersNamespaceScriptDeleteBulk(data = nil)`

Create a new `WorkersNamespaceScriptDeleteBulk` entity instance. Pass `nil` for no initial data.

#### `WorkersNamespaceScriptResponseSingle(data = nil)`

Create a new `WorkersNamespaceScriptResponseSingle` entity instance. Pass `nil` for no initial data.

#### `WorkersNamespaceSingle(data = nil)`

Create a new `WorkersNamespaceSingle` entity instance. Pass `nil` for no initial data.

#### `WorkersPipelinesOther(data = nil)`

Create a new `WorkersPipelinesOther` entity instance. Pass `nil` for no initial data.

#### `WorkersScriptAndVersionSetting(data = nil)`

Create a new `WorkersScriptAndVersionSetting` entity instance. Pass `nil` for no initial data.

#### `WorkersScriptResponseCollection(data = nil)`

Create a new `WorkersScriptResponseCollection` entity instance. Pass `nil` for no initial data.

#### `WorkersScriptResponseSingle(data = nil)`

Create a new `WorkersScriptResponseSingle` entity instance. Pass `nil` for no initial data.

#### `WorkersSmartPlacement(data = nil)`

Create a new `WorkersSmartPlacement` entity instance. Pass `nil` for no initial data.

#### `WorkersUsageModel(data = nil)`

Create a new `WorkersUsageModel` entity instance. Pass `nil` for no initial data.

#### `WorkersVersionsList(data = nil)`

Create a new `WorkersVersionsList` entity instance. Pass `nil` for no initial data.

#### `WorkersVersionsSingle(data = nil)`

Create a new `WorkersVersionsSingle` entity instance. Pass `nil` for no initial data.

#### `WorkersVersionsUpload(data = nil)`

Create a new `WorkersVersionsUpload` entity instance. Pass `nil` for no initial data.

#### `Workflow(data = nil)`

Create a new `Workflow` entity instance. Pass `nil` for no initial data.

#### `options_map -> Hash`

Return a deep copy of the current SDK options.

#### `get_utility -> Utility`

Return a copy of the SDK utility object.

#### `direct(fetchargs = {}) -> Hash`

Make a direct HTTP request to any API endpoint. Returns a result hash
(`{ "ok" => ..., "status" => ..., "data" => ..., "err" => ... }`); it
does not raise — inspect `result["ok"]`.

**Parameters:**

| Name | Type | Description |
| --- | --- | --- |
| `fetchargs["path"]` | `String` | URL path with optional `{param}` placeholders. |
| `fetchargs["method"]` | `String` | HTTP method (default: `"GET"`). |
| `fetchargs["params"]` | `Hash` | Path parameter values for `{param}` substitution. |
| `fetchargs["query"]` | `Hash` | Query string parameters. |
| `fetchargs["headers"]` | `Hash` | Request headers (merged with defaults). |
| `fetchargs["body"]` | `any` | Request body (hashes are JSON-serialized). |
| `fetchargs["ctrl"]` | `Hash` | Control options (e.g. `{ "explain" => true }`). |

**Returns:** `Hash`

#### `prepare(fetchargs = {}) -> Hash`

Prepare a fetch definition without sending the request. Accepts the
same parameters as `direct()`. Raises on error.

**Returns:** `Hash` (the fetch definition; raises on error)


---

## AccountEntity

```ruby
account = client.Account
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `id` | `String` | No |  |

### Operations

#### `list(reqmatch = nil, ctrl = nil) -> Array`

List entities matching the given criteria (call with no argument to list all). Returns an array. Raises on error.

```ruby
results = client.Account.list
```

### Common Methods

#### `data_get -> Hash`

Get the entity data. Returns a copy of the current data.

#### `data_set(data)`

Set the entity data.

#### `match_get -> Hash`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make -> Entity`

Create a new `AccountEntity` instance with the same client and
options.

#### `get_name -> String`

Return the entity name.


---

## ApplicationEntity

```ruby
application = client.Application
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `configuration` | `Hash` | No | Application configuration fields you can change without creating a rollout. |
| `constraints` | `Hash` | No |  |
| `errors` | `Array` | Yes |  |
| `id` | `String` | No |  |
| `max_instances` | `Integer` | No | Maximum number of instances that an autoscaling application can run. |
| `messages` | `Array` | Yes |  |
| `observability` | `Object` | No | Top-level application observability settings. |
| `result` | `Object` | Yes | The public Containers API returns an application. |
| `result_info` | `Hash` | Yes | Cursor pagination details for a v4 API list response. |
| `rollout_active_grace_period` | `Integer` | No | Grace period for active instances to stay alive before becoming eligible for shutdown signal due to a rollout, in seconds. |
| `success` | `Boolean` | Yes | Whether the API call was successful. |

### Operations

#### `create(reqdata, ctrl = nil) -> result`

Create a new entity with the given data. Raises on error.

```ruby
result = client.Application.create({
  "account_id" => "example_account_id", # String
  "errors" => [], # Array
  "messages" => [], # Array
  "result" => "example_result", # Object
  "result_info" => {}, # Hash
  "success" => true, # Boolean
})
```

#### `list(reqmatch = nil, ctrl = nil) -> Array`

List entities matching the given criteria (call with no argument to list all). Returns an array. Raises on error.

```ruby
results = client.Application.list
```

#### `load(reqmatch, ctrl = nil) -> result`

Load a single entity matching the given criteria. Raises on error.

```ruby
result = client.Application.load({ "id" => "application_id", "account_id" => "account_id" })
```

#### `remove(reqmatch, ctrl = nil) -> result`

Remove the entity matching the given criteria. Raises on error.

```ruby
result = client.Application.remove({ "id" => "application_id", "account_id" => "account_id" })
```

#### `update(reqdata, ctrl = nil) -> result`

Update an existing entity. The data must include the entity `id`. Raises on error.

```ruby
result = client.Application.update({
  "id" => "application_id",
  "account_id" => "account_id",
  # Fields to update
})
```

### Common Methods

#### `data_get -> Hash`

Get the entity data. Returns a copy of the current data.

#### `data_set(data)`

Set the entity data.

#### `match_get -> Hash`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make -> Entity`

Create a new `ApplicationEntity` instance with the same client and
options.

#### `get_name -> String`

Return the entity name.


---

## BrapiEntity

```ruby
brapi = client.Brapi
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `Browser` | `String` | Yes | Browser name and version. |
| `ProtocolVersion` | `String` | Yes | Chrome DevTools Protocol version. |
| `UserAgent` | `String` | Yes | User agent string. |
| `V8Version` | `String` | Yes | V8 JavaScript engine version. |
| `WebKitVersion` | `String` | Yes | WebKit version. |
| `actionTimeout` | `Float` | No | The maximum duration allowed for the browser action to complete after the page has loaded (such as taking screenshots, extracting content, or generating PDFs). |
| `addScriptTag` | `Array` | No | Adds a script element into the page with the desired URL or content. |
| `addStyleTag` | `Array` | No | Adds a `<link rel="stylesheet">` tag into the page with the desired URL or a `<style type="text/css">` tag with the content. |
| `allowRequestPattern` | `Array` | No | Only allow requests that match the provided regex patterns, eg. |
| `allowResourceTypes` | `Array` | No | Only allow requests that match the provided resource types, eg. |
| `authenticate` | `Hash` | Yes | Provide credentials for HTTP authentication. |
| `bestAttempt` | `Boolean` | No | Attempt to proceed when 'awaited' events fail or timeout. |
| `closeReason` | `Float` | No | Reason code for session closure. |
| `closeReasonText` | `String` | No | Human-readable close reason. |
| `commands` | `Array` | No | Available commands. |
| `connectionEndTime` | `Float` | No | Connection end time. |
| `connectionId` | `String` | No | Connection ID. |
| `connectionStartTime` | `Float` | No | Connection start time. |
| `cookies` | `Array` | No | Check [options](https://pptr.dev/api/puppeteer.page.setcookie). |
| `custom_ai` | `Array` | No | Optional list of custom AI models to use for the request. |
| `dependencies` | `Array` | No | Domain dependencies. |
| `description` | `String` | No | Target description. |
| `devtoolsFrontendUrl` | `String` | No | DevTools frontend URL. |
| `domain` | `String` | Yes | Domain name. |
| `elements` | `Array` | Yes |  |
| `emulateMediaType` | `String` | No |  |
| `endTime` | `Float` | No | Session end time. |
| `errors` | `Array` | No |  |
| `events` | `Array` | No | Available events. |
| `excludeExternalLinks` | `Boolean` | No |  |
| `experimental` | `Boolean` | No | Whether this domain is experimental. |
| `formats` | `Array` | No |  |
| `gotoOptions` | `Hash` | No | Check [options](https://pptr.dev/api/puppeteer.gotooptions). |
| `guardrails` | `Hash` | No |  |
| `html` | `String` | No | Set the content of the page, eg: `<h1>Hello World!!</h1>`. |
| `id` | `String` | Yes | Target ID. |
| `interestingOnly` | `Boolean` | No |  |
| `lastUpdated` | `Float` | No | Last updated timestamp. |
| `message` | `String` | Yes | Target activated. |
| `meta` | `Hash` | Yes |  |
| `pdfOptions` | `Hash` | No | Check [options](https://pptr.dev/api/puppeteer.pdfoptions). |
| `prompt` | `String` | No |  |
| `rejectRequestPattern` | `Array` | No | Block undesired requests that match the provided regex patterns, eg. |
| `rejectResourceTypes` | `Array` | No | Block undesired requests that match the provided resource types, eg. |
| `response_format` | `Hash` | Yes |  |
| `result` | `Hash` | Yes | HTML content. |
| `root` | `String` | No |  |
| `screenshotOptions` | `Hash` | No | Check [options](https://pptr.dev/api/puppeteer.screenshotoptions). |
| `scrollPage` | `Boolean` | No |  |
| `selector` | `String` | No |  |
| `sessionId` | `String` | Yes | Session ID. |
| `setExtraHTTPHeaders` | `Hash` | No |  |
| `setJavaScriptEnabled` | `Boolean` | No |  |
| `startTime` | `Float` | No | Session start time. |
| `success` | `Boolean` | Yes | Response status. |
| `title` | `String` | No | Title of the target. |
| `type` | `String` | Yes | Target type (page, background_page, worker, etc.). |
| `types` | `Array` | No | Type definitions. |
| `url` | `String` | Yes | URL of the target. |
| `userAgent` | `String` | No |  |
| `viewport` | `Hash` | Yes | Check [options](https://pptr.dev/api/puppeteer.page.setviewport). |
| `visibleLinksOnly` | `Boolean` | No |  |
| `waitForSelector` | `Hash` | Yes | Wait for the selector to appear in page. |
| `waitForTimeout` | `Float` | No | Waits for a specified timeout before continuing. |
| `webSocketDebuggerUrl` | `String` | No | WebSocket URL for debugging this target. |

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

#### `create(reqdata, ctrl = nil) -> result`

Create a new entity with the given data. Raises on error.

```ruby
result = client.Brapi.create({
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

#### `list(reqmatch = nil, ctrl = nil) -> Array`

List entities matching the given criteria (call with no argument to list all). Returns an array. Raises on error.

```ruby
results = client.Brapi.list
```

#### `load(reqmatch, ctrl = nil) -> result`

Load a single entity matching the given criteria. Raises on error.

```ruby
result = client.Brapi.load({ "account_id" => "account_id" })
```

#### `remove(reqmatch, ctrl = nil) -> result`

Remove the entity matching the given criteria. Raises on error.

```ruby
result = client.Brapi.remove({ "account_id" => "account_id" })
```

#### `update(reqdata, ctrl = nil) -> result`

Update an existing entity. The data must include the entity `id`. Raises on error.

```ruby
result = client.Brapi.update({
  "account_id" => "account_id",
  "browser_id" => "browser_id",
  # Fields to update
})
```

### Common Methods

#### `data_get -> Hash`

Get the entity data. Returns a copy of the current data.

#### `data_set(data)`

Set the entity data.

#### `match_get -> Hash`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make -> Entity`

Create a new `BrapiEntity` instance with the same client and
options.

#### `get_name -> String`

Return the entity name.


---

## BuildEntity

```ruby
build = client.Build
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `errors` | `Array` | Yes |  |
| `id` | `String` | No |  |
| `messages` | `Array` | Yes |  |
| `result` | `Hash` | Yes |  |
| `result_info` | `Hash` | No |  |
| `success` | `Boolean` | Yes |  |

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

#### `list(reqmatch = nil, ctrl = nil) -> Array`

List entities matching the given criteria (call with no argument to list all). Returns an array. Raises on error.

```ruby
results = client.Build.list
```

#### `load(reqmatch, ctrl = nil) -> result`

Load a single entity matching the given criteria. Raises on error.

```ruby
result = client.Build.load({ "id" => "build_id", "account_id" => "account_id" })
```

#### `update(reqdata, ctrl = nil) -> result`

Update an existing entity. The data must include the entity `id`. Raises on error.

```ruby
result = client.Build.update({
  "id" => "build_id",
  "account_id" => "account_id",
  # Fields to update
})
```

### Common Methods

#### `data_get -> Hash`

Get the entity data. Returns a copy of the current data.

#### `data_set(data)`

Set the entity data.

#### `match_get -> Hash`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make -> Entity`

Create a new `BuildEntity` instance with the same client and
options.

#### `get_name -> String`

Return the entity name.


---

## BuildTokenEntity

```ruby
build_token = client.BuildToken
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `build_token_name` | `String` | Yes |  |
| `build_token_secret` | `String` | Yes |  |
| `cloudflare_token_id` | `String` | Yes |  |
| `errors` | `Array` | Yes |  |
| `messages` | `Array` | Yes |  |
| `result` | `Hash` | Yes |  |
| `result_info` | `Hash` | No |  |
| `success` | `Boolean` | Yes |  |

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

#### `create(reqdata, ctrl = nil) -> result`

Create a new entity with the given data. Raises on error.

```ruby
result = client.BuildToken.create({
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

#### `list(reqmatch = nil, ctrl = nil) -> Array`

List entities matching the given criteria (call with no argument to list all). Returns an array. Raises on error.

```ruby
results = client.BuildToken.list
```

### Common Methods

#### `data_get -> Hash`

Get the entity data. Returns a copy of the current data.

#### `data_set(data)`

Set the entity data.

#### `match_get -> Hash`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make -> Entity`

Create a new `BuildTokenEntity` instance with the same client and
options.

#### `get_name -> String`

Return the entity name.


---

## BuildsApiEntity

```ruby
builds_api = client.BuildsApi
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `errors` | `Array` | Yes |  |
| `messages` | `Array` | Yes |  |
| `result` | `Hash` | Yes |  |
| `result_info` | `Hash` | No |  |
| `success` | `Boolean` | Yes |  |

### Operations

#### `create(reqdata, ctrl = nil) -> result`

Create a new entity with the given data. Raises on error.

```ruby
result = client.BuildsApi.create({
  "account_id" => "example_account_id", # String
  "trigger_id" => "example_trigger_id", # String
  "errors" => [], # Array
  "messages" => [], # Array
  "result" => {}, # Hash
  "success" => true, # Boolean
})
```

#### `remove(reqmatch, ctrl = nil) -> result`

Remove the entity matching the given criteria. Raises on error.

```ruby
result = client.BuildsApi.remove({ "account_id" => "account_id", "environment_variable_key" => "environment_variable_key", "trigger_id" => "trigger_id" })
```

### Common Methods

#### `data_get -> Hash`

Get the entity data. Returns a copy of the current data.

#### `data_set(data)`

Set the entity data.

#### `match_get -> Hash`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make -> Entity`

Create a new `BuildsApiEntity` instance with the same client and
options.

#### `get_name -> String`

Return the entity name.


---

## ConnectionEntity

```ruby
connection = client.Connection
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `id` | `String` | No |  |

### Operations

#### `remove(reqmatch, ctrl = nil) -> result`

Remove the entity matching the given criteria. Raises on error.

```ruby
result = client.Connection.remove({ "account_id" => "account_id", "id" => "id" })
```

### Common Methods

#### `data_get -> Hash`

Get the entity data. Returns a copy of the current data.

#### `data_set(data)`

Set the entity data.

#### `match_get -> Hash`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make -> Entity`

Create a new `ConnectionEntity` instance with the same client and
options.

#### `get_name -> String`

Return the entity name.


---

## ContainerImageEntity

```ruby
container_image = client.ContainerImage
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `image` | `String` | Yes | Image url. |

### Operations

#### `create(reqdata, ctrl = nil) -> result`

Create a new entity with the given data. Raises on error.

```ruby
result = client.ContainerImage.create({
  "account_id" => "example_account_id", # String
  "image" => "example_image", # String
})
```

### Common Methods

#### `data_get -> Hash`

Get the entity data. Returns a copy of the current data.

#### `data_set(data)`

Set the entity data.

#### `match_get -> Hash`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make -> Entity`

Create a new `ContainerImageEntity` instance with the same client and
options.

#### `get_name -> String`

Return the entity name.


---

## ContainerInstanceEntity

```ruby
container_instance = client.ContainerInstance
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `errors` | `Array` | Yes |  |
| `id` | `String` | No |  |
| `messages` | `Array` | Yes |  |
| `result` | `Object` | Yes | A container instance belonging to an application. |
| `result_info` | `Hash` | Yes | Cursor pagination details for a v4 API list response. |
| `success` | `Boolean` | Yes | Whether the API call was successful. |

### Operations

#### `list(reqmatch = nil, ctrl = nil) -> Array`

List entities matching the given criteria (call with no argument to list all). Returns an array. Raises on error.

```ruby
results = client.ContainerInstance.list
```

#### `load(reqmatch, ctrl = nil) -> result`

Load a single entity matching the given criteria. Raises on error.

```ruby
result = client.ContainerInstance.load({ "id" => "container_instance_id", "account_id" => "account_id", "application_id" => "application_id" })
```

### Common Methods

#### `data_get -> Hash`

Get the entity data. Returns a copy of the current data.

#### `data_set(data)`

Set the entity data.

#### `match_get -> Hash`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make -> Entity`

Create a new `ContainerInstanceEntity` instance with the same client and
options.

#### `get_name -> String`

Return the entity name.


---

## DeployHookEntity

```ruby
deploy_hook = client.DeployHook
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `branch` | `String` | Yes | Git branch name. |
| `deploy_hook_name` | `String` | Yes | Deploy hook name (1-58 characters). |
| `errors` | `Array` | Yes |  |
| `id` | `String` | No |  |
| `messages` | `Array` | Yes |  |
| `result` | `Hash` | Yes |  |
| `result_info` | `Hash` | No |  |
| `success` | `Boolean` | Yes |  |

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

#### `create(reqdata, ctrl = nil) -> result`

Create a new entity with the given data. Raises on error.

```ruby
result = client.DeployHook.create({
  "id" => "example_id", # String
  "branch" => "example_branch", # String
  "deploy_hook_name" => "example_deploy_hook_name", # String
  "errors" => [], # Array
  "messages" => [], # Array
  "result" => {}, # Hash
  "success" => true, # Boolean
})
```

#### `list(reqmatch = nil, ctrl = nil) -> Array`

List entities matching the given criteria (call with no argument to list all). Returns an array. Raises on error.

```ruby
results = client.DeployHook.list
```

#### `load(reqmatch, ctrl = nil) -> result`

Load a single entity matching the given criteria. Raises on error.

```ruby
result = client.DeployHook.load({ "id" => "deploy_hook_id", "account_id" => "account_id", "worker_id" => "worker_id" })
```

#### `remove(reqmatch, ctrl = nil) -> result`

Remove the entity matching the given criteria. Raises on error.

```ruby
result = client.DeployHook.remove({ "id" => "deploy_hook_id", "account_id" => "account_id", "worker_id" => "worker_id" })
```

#### `update(reqdata, ctrl = nil) -> result`

Update an existing entity. The data must include the entity `id`. Raises on error.

```ruby
result = client.DeployHook.update({
  "id" => "deploy_hook_id",
  "account_id" => "account_id",
  "worker_id" => "worker_id",
  # Fields to update
})
```

### Common Methods

#### `data_get -> Hash`

Get the entity data. Returns a copy of the current data.

#### `data_set(data)`

Set the entity data.

#### `match_get -> Hash`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make -> Entity`

Create a new `DeployHookEntity` instance with the same client and
options.

#### `get_name -> String`

Return the entity name.


---

## DeploymentEntity

```ruby
deployment = client.Deployment
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `id` | `String` | No |  |

### Operations

#### `remove(reqmatch, ctrl = nil) -> result`

Remove the entity matching the given criteria. Raises on error.

```ruby
result = client.Deployment.remove({ "account_id" => "account_id", "id" => "id" })
```

### Common Methods

#### `data_get -> Hash`

Get the entity data. Returns a copy of the current data.

#### `data_set(data)`

Set the entity data.

#### `match_get -> Hash`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make -> Entity`

Create a new `DeploymentEntity` instance with the same client and
options.

#### `get_name -> String`

Return the entity name.


---

## DestinationEntity

```ruby
destination = client.Destination
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `configuration` | `Hash` | Yes |  |
| `enabled` | `Boolean` | Yes |  |
| `errors` | `Array` | Yes |  |
| `id` | `String` | No |  |
| `messages` | `Array` | Yes |  |
| `name` | `String` | Yes |  |
| `result` | `Hash` | Yes |  |
| `skipPreflightCheck` | `Boolean` | No |  |
| `success` | `Boolean` | Yes |  |

### Operations

#### `create(reqdata, ctrl = nil) -> result`

Create a new entity with the given data. Raises on error.

```ruby
result = client.Destination.create({
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

#### `list(reqmatch = nil, ctrl = nil) -> Array`

List entities matching the given criteria (call with no argument to list all). Returns an array. Raises on error.

```ruby
results = client.Destination.list
```

#### `remove(reqmatch, ctrl = nil) -> result`

Remove the entity matching the given criteria. Raises on error.

```ruby
result = client.Destination.remove({ "account_id" => "account_id", "id" => "id" })
```

#### `update(reqdata, ctrl = nil) -> result`

Update an existing entity. The data must include the entity `id`. Raises on error.

```ruby
result = client.Destination.update({
  "account_id" => "account_id",
  "id" => "id",
  # Fields to update
})
```

### Common Methods

#### `data_get -> Hash`

Get the entity data. Returns a copy of the current data.

#### `data_set(data)`

Set the entity data.

#### `match_get -> Hash`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make -> Entity`

Create a new `DestinationEntity` instance with the same client and
options.

#### `get_name -> String`

Return the entity name.


---

## DomainEntity

```ruby
domain = client.Domain
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `errors` | `Array` | Yes |  |
| `id` | `String` | No |  |
| `messages` | `Array` | Yes |  |
| `result` | `Hash` | Yes |  |
| `success` | `Boolean` | Yes | Whether the API call was successful. |

### Operations

#### `list(reqmatch = nil, ctrl = nil) -> Array`

List entities matching the given criteria (call with no argument to list all). Returns an array. Raises on error.

```ruby
results = client.Domain.list
```

#### `load(reqmatch, ctrl = nil) -> result`

Load a single entity matching the given criteria. Raises on error.

```ruby
result = client.Domain.load({ "id" => "domain_id", "account_id" => "account_id" })
```

#### `remove(reqmatch, ctrl = nil) -> result`

Remove the entity matching the given criteria. Raises on error.

```ruby
result = client.Domain.remove({ "id" => "domain_id", "account_id" => "account_id" })
```

#### `update(reqdata, ctrl = nil) -> result`

Update an existing entity. The data must include the entity `id`. Raises on error.

```ruby
result = client.Domain.update({
  "id" => "domain_id",
  "account_id" => "account_id",
  # Fields to update
})
```

### Common Methods

#### `data_get -> Hash`

Get the entity data. Returns a copy of the current data.

#### `data_set(data)`

Set the entity data.

#### `match_get -> Hash`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make -> Entity`

Create a new `DomainEntity` instance with the same client and
options.

#### `get_name -> String`

Return the entity name.


---

## DurableObjectsNamespaceEntity

```ruby
durable_objects_namespace = client.DurableObjectsNamespace
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `result` | `Array` | No |  |
| `result_info` | `Hash` | No |  |

### Operations

#### `create(reqdata, ctrl = nil) -> result`

Create a new entity with the given data. Raises on error.

```ruby
result = client.DurableObjectsNamespace.create({
  "account_id" => "example_account_id", # String
  "namespace_id" => "example_namespace_id", # String
})
```

#### `list(reqmatch = nil, ctrl = nil) -> Array`

List entities matching the given criteria (call with no argument to list all). Returns an array. Raises on error.

```ruby
results = client.DurableObjectsNamespace.list
```

### Common Methods

#### `data_get -> Hash`

Get the entity data. Returns a copy of the current data.

#### `data_set(data)`

Set the entity data.

#### `match_get -> Hash`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make -> Entity`

Create a new `DurableObjectsNamespaceEntity` instance with the same client and
options.

#### `get_name -> String`

Return the entity name.


---

## EnvironmentVariableEntity

```ruby
environment_variable = client.EnvironmentVariable
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `errors` | `Array` | Yes |  |
| `messages` | `Array` | Yes |  |
| `result` | `Hash` | Yes |  |
| `result_info` | `Hash` | No |  |
| `success` | `Boolean` | Yes |  |

### Field Usage by Operation

| Field | list | update |
| --- | --- | --- |
| `errors` | - | - |
| `messages` | - | - |
| `result` | Yes | - |
| `result_info` | - | - |
| `success` | - | - |

### Operations

#### `list(reqmatch = nil, ctrl = nil) -> Array`

List entities matching the given criteria (call with no argument to list all). Returns an array. Raises on error.

```ruby
results = client.EnvironmentVariable.list
```

#### `update(reqdata, ctrl = nil) -> result`

Update an existing entity. The data must include the entity `id`. Raises on error.

```ruby
result = client.EnvironmentVariable.update({
  "account_id" => "account_id",
  "trigger_id" => "trigger_id",
  # Fields to update
})
```

### Common Methods

#### `data_get -> Hash`

Get the entity data. Returns a copy of the current data.

#### `data_set(data)`

Set the entity data.

#### `match_get -> Hash`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make -> Entity`

Create a new `EnvironmentVariableEntity` instance with the same client and
options.

#### `get_name -> String`

Return the entity name.


---

## GitHubIntegrationEntity

```ruby
git_hub_integration = client.GitHubIntegration
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `errors` | `Array` | Yes |  |
| `messages` | `Array` | Yes |  |
| `result` | `Hash` | Yes |  |
| `result_info` | `Hash` | No |  |
| `success` | `Boolean` | Yes |  |

### Field Usage by Operation

| Field | list |
| --- | --- |
| `errors` | - |
| `messages` | - |
| `result` | Yes |
| `result_info` | - |
| `success` | - |

### Operations

#### `list(reqmatch = nil, ctrl = nil) -> Array`

List entities matching the given criteria (call with no argument to list all). Returns an array. Raises on error.

```ruby
results = client.GitHubIntegration.list
```

### Common Methods

#### `data_get -> Hash`

Get the entity data. Returns a copy of the current data.

#### `data_set(data)`

Set the entity data.

#### `match_get -> Hash`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make -> Entity`

Create a new `GitHubIntegrationEntity` instance with the same client and
options.

#### `get_name -> String`

Return the entity name.


---

## HyperdriveEntity

```ruby
hyperdrive = client.Hyperdrive
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `caching` | `Hash` | No |  |
| `created_on` | `String` | No | Defines the creation time of the Hyperdrive configuration. |
| `id` | `String` | Yes | Define configurations using a unique string identifier. |
| `modified_on` | `String` | No | Defines the last modified time of the Hyperdrive configuration. |
| `mtls` | `Hash` | No | mTLS configuration for the origin connection. |
| `name` | `String` | Yes | The name of the Hyperdrive configuration. |
| `origin` | `Hash` | Yes | Combines database connection fields with exactly one supported network location. |
| `origin_connection_limit` | `Integer` | No | The (soft) maximum number of connections the Hyperdrive is allowed to make to the origin database. |
| `restarted_on` | `String` | No | Defines the last time the Hyperdrive connection pool was explicitly restarted via the restart endpoint. |
| `result` | `Hash` | Yes |  |

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

#### `create(reqdata, ctrl = nil) -> result`

Create a new entity with the given data. Raises on error.

```ruby
result = client.Hyperdrive.create({
  "account_id" => "example_account_id", # String
  "integration" => "example_integration", # String
  "id" => "example_id", # String
  "name" => "example_name", # String
  "origin" => {}, # Hash
  "result" => {}, # Hash
})
```

#### `list(reqmatch = nil, ctrl = nil) -> Array`

List entities matching the given criteria (call with no argument to list all). Returns an array. Raises on error.

```ruby
results = client.Hyperdrive.list
```

#### `load(reqmatch, ctrl = nil) -> result`

Load a single entity matching the given criteria. Raises on error.

```ruby
result = client.Hyperdrive.load({ "account_id" => "account_id", "hyperdrive_id" => "hyperdrive_id" })
```

#### `remove(reqmatch, ctrl = nil) -> result`

Remove the entity matching the given criteria. Raises on error.

```ruby
result = client.Hyperdrive.remove({ "account_id" => "account_id", "hyperdrive_id" => "hyperdrive_id" })
```

#### `update(reqdata, ctrl = nil) -> result`

Update an existing entity. The data must include the entity `id`. Raises on error.

```ruby
result = client.Hyperdrive.update({
  "account_id" => "account_id",
  "hyperdrive_id" => "hyperdrive_id",
  # Fields to update
})
```

### Common Methods

#### `data_get -> Hash`

Get the entity data. Returns a copy of the current data.

#### `data_set(data)`

Set the entity data.

#### `match_get -> Hash`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make -> Entity`

Create a new `HyperdriveEntity` instance with the same client and
options.

#### `get_name -> String`

Return the entity name.


---

## ImageRegistryEntity

```ruby
image_registry = client.ImageRegistry
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `auth` | `Hash` | Yes | Credentials for authenticating to a private external image registry. |
| `domain` | `String` | Yes | Hostname of the private registry, without a scheme or image path. |
| `errors` | `Array` | Yes |  |
| `expiration_minutes` | `Integer` | No | The number of minutes Cloudflare managed registry credentials stay valid. |
| `id` | `String` | No |  |
| `is_public` | `Boolean` | No | Omit this field or set it to `false`. |
| `kind` | `Object` | Yes | Registry provider. |
| `messages` | `Array` | Yes |  |
| `permissions` | `Array` | No | The permissions for Cloudflare managed registry credentials. |
| `result` | `Array` | Yes |  |
| `success` | `Boolean` | Yes | Whether the API call was successful. |

### Operations

#### `create(reqdata, ctrl = nil) -> result`

Create a new entity with the given data. Raises on error.

```ruby
result = client.ImageRegistry.create({
  "account_id" => "example_account_id", # String
  "auth" => {}, # Hash
  "errors" => [], # Array
  "kind" => "example_kind", # Object
  "messages" => [], # Array
  "result" => [], # Array
  "success" => true, # Boolean
})
```

#### `list(reqmatch = nil, ctrl = nil) -> Array`

List entities matching the given criteria (call with no argument to list all). Returns an array. Raises on error.

```ruby
results = client.ImageRegistry.list
```

#### `remove(reqmatch, ctrl = nil) -> result`

Remove the entity matching the given criteria. Raises on error.

```ruby
result = client.ImageRegistry.remove({ "account_id" => "account_id", "id" => "id" })
```

### Common Methods

#### `data_get -> Hash`

Get the entity data. Returns a copy of the current data.

#### `data_set(data)`

Set the entity data.

#### `match_get -> Hash`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make -> Entity`

Create a new `ImageRegistryEntity` instance with the same client and
options.

#### `get_name -> String`

Return the entity name.


---

## IssueEntity

```ruby
issue = client.Issue
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `afterInactivitySeconds` | `Integer` | No |  |
| `afterOccurrences` | `Integer` | No |  |
| `enabled` | `Boolean` | No |  |
| `errors` | `Array` | Yes |  |
| `id` | `String` | No |  |
| `issueIds` | `Array` | Yes |  |
| `messages` | `Array` | Yes |  |
| `name` | `String` | No |  |
| `policyId` | `String` | Yes |  |
| `result` | `Hash` | Yes |  |
| `result_info` | `Hash` | Yes |  |
| `service` | `String` | No |  |
| `status` | `String` | No |  |
| `success` | `Boolean` | Yes |  |
| `title` | `String` | No |  |

### Operations

#### `create(reqdata, ctrl = nil) -> result`

Create a new entity with the given data. Raises on error.

```ruby
result = client.Issue.create({
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

#### `list(reqmatch = nil, ctrl = nil) -> Array`

List entities matching the given criteria (call with no argument to list all). Returns an array. Raises on error.

```ruby
results = client.Issue.list
```

#### `load(reqmatch, ctrl = nil) -> result`

Load a single entity matching the given criteria. Raises on error.

```ruby
result = client.Issue.load({ "id" => "issue_id", "account_id" => "account_id" })
```

#### `remove(reqmatch, ctrl = nil) -> result`

Remove the entity matching the given criteria. Raises on error.

```ruby
result = client.Issue.remove({ "account_id" => "account_id" })
```

#### `update(reqdata, ctrl = nil) -> result`

Update an existing entity. The data must include the entity `id`. Raises on error.

```ruby
result = client.Issue.update({
  "id" => "issue_id",
  "account_id" => "account_id",
  "automation_id" => "automation_id",
  # Fields to update
})
```

### Common Methods

#### `data_get -> Hash`

Get the entity data. Returns a copy of the current data.

#### `data_set(data)`

Set the entity data.

#### `match_get -> Hash`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make -> Entity`

Create a new `IssueEntity` instance with the same client and
options.

#### `get_name -> String`

Return the entity name.


---

## KeyEntity

```ruby
key = client.Key
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `datasets` | `Array` | No | Leave this empty to use the default datasets |
| `errors` | `Array` | Yes |  |
| `filters` | `Array` | No | Apply filters to narrow key discovery. |
| `from` | `Float` | No |  |
| `keyNeedle` | `Hash` | Yes | If the user suggests a key, use this to narrow down the list of keys returned. |
| `limit` | `Float` | No | Advanced usage: set limit=1000+ to retrieve comprehensive key options without needing additional filtering. |
| `messages` | `Array` | Yes |  |
| `needle` | `Hash` | Yes | Search for a specific substring in any of the events |
| `result` | `Array` | Yes |  |
| `success` | `Boolean` | Yes |  |
| `to` | `Float` | No |  |

### Operations

#### `create(reqdata, ctrl = nil) -> result`

Create a new entity with the given data. Raises on error.

```ruby
result = client.Key.create({
  "account_id" => "example_account_id", # String
  "errors" => [], # Array
  "keyNeedle" => {}, # Hash
  "messages" => [], # Array
  "needle" => {}, # Hash
  "result" => [], # Array
  "success" => true, # Boolean
})
```

### Common Methods

#### `data_get -> Hash`

Get the entity data. Returns a copy of the current data.

#### `data_set(data)`

Set the entity data.

#### `match_get -> Hash`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make -> Entity`

Create a new `KeyEntity` instance with the same client and
options.

#### `get_name -> String`

Return the entity name.


---

## LiveTailEntity

```ruby
live_tail = client.LiveTail
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `errors` | `Array` | Yes |  |
| `filterCombination` | `String` | No | Set a flag to describe how to combine the filters on the query. |
| `filters` | `Array` | No | Apply filters to the query. |
| `messages` | `Array` | Yes |  |
| `result` | `Hash` | Yes |  |
| `scriptId` | `String` | No |  |
| `success` | `Boolean` | Yes |  |

### Operations

#### `create(reqdata, ctrl = nil) -> result`

Create a new entity with the given data. Raises on error.

```ruby
result = client.LiveTail.create({
  "account_id" => "example_account_id", # String
  "errors" => [], # Array
  "messages" => [], # Array
  "result" => {}, # Hash
  "success" => true, # Boolean
})
```

### Common Methods

#### `data_get -> Hash`

Get the entity data. Returns a copy of the current data.

#### `data_set(data)`

Set the entity data.

#### `match_get -> Hash`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make -> Entity`

Create a new `LiveTailEntity` instance with the same client and
options.

#### `get_name -> String`

Return the entity name.


---

## MetricsExportEntity

```ruby
metrics_export = client.MetricsExport
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `errors` | `Array` | Yes |  |
| `messages` | `Array` | Yes |  |
| `requester` | `Hash` | Yes |  |
| `resources` | `Array` | Yes |  |
| `result` | `Array` | Yes |  |
| `success` | `Boolean` | Yes |  |

### Operations

#### `create(reqdata, ctrl = nil) -> result`

Create a new entity with the given data. Raises on error.

```ruby
result = client.MetricsExport.create({
  "account_id" => "example_account_id", # String
  "errors" => [], # Array
  "messages" => [], # Array
  "requester" => {}, # Hash
  "resources" => [], # Array
  "result" => [], # Array
  "success" => true, # Boolean
})
```

#### `list(reqmatch = nil, ctrl = nil) -> Array`

List entities matching the given criteria (call with no argument to list all). Returns an array. Raises on error.

```ruby
results = client.MetricsExport.list
```

### Common Methods

#### `data_get -> Hash`

Get the entity data. Returns a copy of the current data.

#### `data_set(data)`

Set the entity data.

#### `match_get -> Hash`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make -> Entity`

Create a new `MetricsExportEntity` instance with the same client and
options.

#### `get_name -> String`

Return the entity name.


---

## NamespaceEntity

```ruby
namespace = client.Namespace
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `id` | `String` | No |  |

### Operations

#### `remove(reqmatch, ctrl = nil) -> result`

Remove the entity matching the given criteria. Raises on error.

```ruby
result = client.Namespace.remove({ "account_id" => "account_id", "id" => "id" })
```

### Common Methods

#### `data_get -> Hash`

Get the entity data. Returns a copy of the current data.

#### `data_set(data)`

Set the entity data.

#### `match_get -> Hash`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make -> Entity`

Create a new `NamespaceEntity` instance with the same client and
options.

#### `get_name -> String`

Return the entity name.


---

## PreviewEntity

```ruby
preview = client.Preview
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `errors` | `Array` | Yes |  |
| `id` | `String` | No |  |
| `messages` | `Array` | Yes |  |
| `result` | `Hash` | Yes |  |
| `success` | `Boolean` | Yes | Whether the API call was successful. |

### Operations

#### `create(reqdata, ctrl = nil) -> result`

Create a new entity with the given data. Raises on error.

```ruby
result = client.Preview.create({
  "account_id" => "example_account_id", # String
  "worker_id" => "example_worker_id", # String
  "errors" => [], # Array
  "messages" => [], # Array
  "result" => {}, # Hash
  "success" => true, # Boolean
})
```

#### `list(reqmatch = nil, ctrl = nil) -> Array`

List entities matching the given criteria (call with no argument to list all). Returns an array. Raises on error.

```ruby
results = client.Preview.list
```

#### `load(reqmatch, ctrl = nil) -> result`

Load a single entity matching the given criteria. Raises on error.

```ruby
result = client.Preview.load({ "id" => "preview_id", "account_id" => "account_id", "worker_id" => "worker_id" })
```

#### `remove(reqmatch, ctrl = nil) -> result`

Remove the entity matching the given criteria. Raises on error.

```ruby
result = client.Preview.remove({ "id" => "preview_id", "account_id" => "account_id", "worker_id" => "worker_id" })
```

#### `update(reqdata, ctrl = nil) -> result`

Update an existing entity. The data must include the entity `id`. Raises on error.

```ruby
result = client.Preview.update({
  "id" => "preview_id",
  "account_id" => "account_id",
  "worker_id" => "worker_id",
  # Fields to update
})
```

### Common Methods

#### `data_get -> Hash`

Get the entity data. Returns a copy of the current data.

#### `data_set(data)`

Set the entity data.

#### `match_get -> Hash`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make -> Entity`

Create a new `PreviewEntity` instance with the same client and
options.

#### `get_name -> String`

Return the entity name.


---

## PreviewDeploymentEntity

```ruby
preview_deployment = client.PreviewDeployment
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `errors` | `Array` | Yes |  |
| `id` | `String` | No |  |
| `messages` | `Array` | Yes |  |
| `result` | `Object` | Yes |  |
| `success` | `Boolean` | Yes | Whether the API call was successful. |

### Operations

#### `create(reqdata, ctrl = nil) -> result`

Create a new entity with the given data. Raises on error.

```ruby
result = client.PreviewDeployment.create({
  "account_id" => "example_account_id", # String
  "id" => "example_id", # String
  "worker_id" => "example_worker_id", # String
  "errors" => [], # Array
  "messages" => [], # Array
  "result" => "example_result", # Object
  "success" => true, # Boolean
})
```

#### `list(reqmatch = nil, ctrl = nil) -> Array`

List entities matching the given criteria (call with no argument to list all). Returns an array. Raises on error.

```ruby
results = client.PreviewDeployment.list
```

#### `load(reqmatch, ctrl = nil) -> result`

Load a single entity matching the given criteria. Raises on error.

```ruby
result = client.PreviewDeployment.load({ "id" => "preview_deployment_id", "account_id" => "account_id", "preview_id" => "preview_id", "worker_id" => "worker_id" })
```

#### `update(reqdata, ctrl = nil) -> result`

Update an existing entity. The data must include the entity `id`. Raises on error.

```ruby
result = client.PreviewDeployment.update({
  "id" => "preview_deployment_id",
  "account_id" => "account_id",
  "preview_id" => "preview_id",
  "worker_id" => "worker_id",
  # Fields to update
})
```

### Common Methods

#### `data_get -> Hash`

Get the entity data. Returns a copy of the current data.

#### `data_set(data)`

Set the entity data.

#### `match_get -> Hash`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make -> Entity`

Create a new `PreviewDeploymentEntity` instance with the same client and
options.

#### `get_name -> String`

Return the entity name.


---

## QueryEntity

```ruby
query = client.Query
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `chart` | `Boolean` | No | When true, includes time-series data in the response. |
| `chartType` | `String` | No | Controls the SQL shape and response payload for the 'calculations' view. |
| `compare` | `Boolean` | No | When true, includes a comparison dataset from the previous time period of equal length. |
| `distributionScale` | `String` | No | Value-axis bucketing for chartType 'distribution'. |
| `dry` | `Boolean` | No | When true, executes the query without persisting the results. |
| `errors` | `Array` | Yes |  |
| `granularity` | `Float` | No | Number of time-series buckets. |
| `ignoreSeries` | `Boolean` | No | When true, omits time-series data from the response and returns only aggregated values. |
| `limit` | `Float` | No | Maximum number of events to return when view is 'events'. |
| `messages` | `Array` | Yes |  |
| `offset` | `String` | No | Cursor for pagination in event, trace, invocation, and agent views. |
| `offsetBy` | `Float` | No | Numeric offset for paginating grouped/pattern results (top-N lists). |
| `offsetDirection` | `String` | No | Pagination direction: 'next' for forward, 'prev' for backward. |
| `parameters` | `Hash` | No | Query parameters defining what data to retrieve — filters, calculations, group-bys, and ordering. |
| `queryId` | `String` | Yes | Identifier for the query. |
| `result` | `Hash` | Yes | Complete results of a query run. |
| `success` | `Boolean` | Yes |  |
| `timeframe` | `Hash` | Yes | Timeframe for the query using Unix timestamps in milliseconds. |
| `view` | `String` | No | Controls the shape of the response. |

### Operations

#### `create(reqdata, ctrl = nil) -> result`

Create a new entity with the given data. Raises on error.

```ruby
result = client.Query.create({
  "account_id" => "example_account_id", # String
  "errors" => [], # Array
  "messages" => [], # Array
  "queryId" => "example_queryId", # String
  "result" => {}, # Hash
  "success" => true, # Boolean
  "timeframe" => {}, # Hash
})
```

### Common Methods

#### `data_get -> Hash`

Get the entity data. Returns a copy of the current data.

#### `data_set(data)`

Set the entity data.

#### `match_get -> Hash`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make -> Entity`

Create a new `QueryEntity` instance with the same client and
options.

#### `get_name -> String`

Return the entity name.


---

## RepositoryConnectionEntity

```ruby
repository_connection = client.RepositoryConnection
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `provider_account_id` | `String` | Yes | Provider-specific identifier of the account or namespace that owns the repository. |
| `provider_account_name` | `String` | Yes | Human-readable name of the account or namespace that owns the repository. |
| `provider_type` | `String` | Yes | Source control provider. |
| `repo_id` | `String` | Yes | Provider-specific repository identifier. |
| `repo_name` | `String` | Yes | Human-readable repository name. |

### Operations

#### `update(reqdata, ctrl = nil) -> result`

Update an existing entity. The data must include the entity `id`. Raises on error.

```ruby
result = client.RepositoryConnection.update({
  "account_id" => "account_id",
  # Fields to update
})
```

### Common Methods

#### `data_get -> Hash`

Get the entity data. Returns a copy of the current data.

#### `data_set(data)`

Set the entity data.

#### `match_get -> Hash`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make -> Entity`

Create a new `RepositoryConnectionEntity` instance with the same client and
options.

#### `get_name -> String`

Return the entity name.


---

## RolloutEntity

```ruby
rollout = client.Rollout
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `description` | `String` | Yes | Description of the rollout process. |
| `kind` | `String` | No | Kind of the rollout process. |
| `percentage` | `Integer` | No | Initial target version percentage (0-100). |
| `step_percentage` | `Integer` | No | Percentage of rollout to increase in each step when "steps" is absent. |
| `steps` | `Array` | No | Steps defining the rollout process, used when "step_percentage" is absent. |
| `strategy` | `String` | Yes | Strategy used for the rollout. |
| `target_configuration` | `Hash` | Yes | User-specified container configuration changes. |

### Operations

#### `create(reqdata, ctrl = nil) -> result`

Create a new entity with the given data. Raises on error.

```ruby
result = client.Rollout.create({
  "account_id" => "example_account_id", # String
  "application_id" => "example_application_id", # String
  "description" => "example_description", # String
  "strategy" => "example_strategy", # String
  "target_configuration" => {}, # Hash
})
```

### Common Methods

#### `data_get -> Hash`

Get the entity data. Returns a copy of the current data.

#### `data_set(data)`

Set the entity data.

#### `match_get -> Hash`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make -> Entity`

Create a new `RolloutEntity` instance with the same client and
options.

#### `get_name -> String`

Return the entity name.


---

## SavedQueryEntity

```ruby
saved_query = client.SavedQuery
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `description` | `String` | Yes |  |
| `errors` | `Array` | Yes |  |
| `id` | `String` | No |  |
| `messages` | `Array` | Yes |  |
| `name` | `String` | Yes | Query name |
| `parameters` | `Hash` | Yes |  |
| `result` | `Hash` | Yes |  |
| `success` | `Boolean` | Yes |  |

### Operations

#### `create(reqdata, ctrl = nil) -> result`

Create a new entity with the given data. Raises on error.

```ruby
result = client.SavedQuery.create({
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

#### `list(reqmatch = nil, ctrl = nil) -> Array`

List entities matching the given criteria (call with no argument to list all). Returns an array. Raises on error.

```ruby
results = client.SavedQuery.list
```

#### `load(reqmatch, ctrl = nil) -> result`

Load a single entity matching the given criteria. Raises on error.

```ruby
result = client.SavedQuery.load({ "id" => "saved_query_id", "account_id" => "account_id" })
```

#### `remove(reqmatch, ctrl = nil) -> result`

Remove the entity matching the given criteria. Raises on error.

```ruby
result = client.SavedQuery.remove({ "id" => "saved_query_id", "account_id" => "account_id" })
```

#### `update(reqdata, ctrl = nil) -> result`

Update an existing entity. The data must include the entity `id`. Raises on error.

```ruby
result = client.SavedQuery.update({
  "id" => "saved_query_id",
  "account_id" => "account_id",
  # Fields to update
})
```

### Common Methods

#### `data_get -> Hash`

Get the entity data. Returns a copy of the current data.

#### `data_set(data)`

Set the entity data.

#### `match_get -> Hash`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make -> Entity`

Create a new `SavedQueryEntity` instance with the same client and
options.

#### `get_name -> String`

Return the entity name.


---

## ScriptEntity

```ruby
script = client.Script
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `id` | `String` | No |  |

### Operations

#### `remove(reqmatch, ctrl = nil) -> result`

Remove the entity matching the given criteria. Raises on error.

```ruby
result = client.Script.remove({ "account_id" => "account_id", "id" => "id" })
```

### Common Methods

#### `data_get -> Hash`

Get the entity data. Returns a copy of the current data.

#### `data_set(data)`

Set the entity data.

#### `match_get -> Hash`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make -> Entity`

Create a new `ScriptEntity` instance with the same client and
options.

#### `get_name -> String`

Return the entity name.


---

## ScriptSettingEntity

```ruby
script_setting = client.ScriptSetting
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `errors` | `Array` | Yes |  |
| `logpush` | `Boolean` | No | Whether Logpush is turned on for the Worker. |
| `messages` | `Array` | Yes |  |
| `observability` | `Object` | No |  |
| `result` | `Hash` | Yes |  |
| `success` | `Boolean` | Yes | Whether the API call was successful. |
| `tags` | `Object` | No |  |
| `tail_consumers` | `Array` | No | List of Workers that will consume logs from the attached Worker. |

### Operations

#### `list(reqmatch = nil, ctrl = nil) -> Array`

List entities matching the given criteria (call with no argument to list all). Returns an array. Raises on error.

```ruby
results = client.ScriptSetting.list
```

#### `update(reqdata, ctrl = nil) -> result`

Update an existing entity. The data must include the entity `id`. Raises on error.

```ruby
result = client.ScriptSetting.update({
  "account_id" => "account_id",
  "script_name" => "script_name",
  # Fields to update
})
```

### Common Methods

#### `data_get -> Hash`

Get the entity data. Returns a copy of the current data.

#### `data_set(data)`

Set the entity data.

#### `match_get -> Hash`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make -> Entity`

Create a new `ScriptSettingEntity` instance with the same client and
options.

#### `get_name -> String`

Return the entity name.


---

## SecretEntity

```ruby
secret = client.Secret
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `comment` | `String` | No | Freeform text describing the secret. |
| `id` | `String` | No |  |
| `result` | `Object` | Yes |  |
| `scopes` | `Array` | No | The list of services that can use this secret. |
| `value` | `String` | No | The value of the secret. |

### Field Usage by Operation

| Field | load | list | create | update | remove |
| --- | --- | --- | --- | --- | --- |
| `comment` | - | - | - | - | - |
| `id` | - | - | - | - | - |
| `result` | - | Yes | - | - | - |
| `scopes` | - | - | - | - | - |
| `value` | - | - | - | - | - |

### Operations

#### `create(reqdata, ctrl = nil) -> result`

Create a new entity with the given data. Raises on error.

```ruby
result = client.Secret.create({
  "account_id" => "example_account_id", # String
  "store_id" => "example_store_id", # String
  "result" => "example_result", # Object
})
```

#### `list(reqmatch = nil, ctrl = nil) -> Array`

List entities matching the given criteria (call with no argument to list all). Returns an array. Raises on error.

```ruby
results = client.Secret.list
```

#### `load(reqmatch, ctrl = nil) -> result`

Load a single entity matching the given criteria. Raises on error.

```ruby
result = client.Secret.load({ "id" => "secret_id", "account_id" => "account_id", "store_id" => "store_id" })
```

#### `remove(reqmatch, ctrl = nil) -> result`

Remove the entity matching the given criteria. Raises on error.

```ruby
result = client.Secret.remove({ "id" => "secret_id", "account_id" => "account_id", "store_id" => "store_id" })
```

#### `update(reqdata, ctrl = nil) -> result`

Update an existing entity. The data must include the entity `id`. Raises on error.

```ruby
result = client.Secret.update({
  "id" => "secret_id",
  "account_id" => "account_id",
  "store_id" => "store_id",
  # Fields to update
})
```

### Common Methods

#### `data_get -> Hash`

Get the entity data. Returns a copy of the current data.

#### `data_set(data)`

Set the entity data.

#### `match_get -> Hash`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make -> Entity`

Create a new `SecretEntity` instance with the same client and
options.

#### `get_name -> String`

Return the entity name.


---

## SecretsStoreDeleteEntity

```ruby
secrets_store_delete = client.SecretsStoreDelete
```

### Operations

#### `remove(reqmatch, ctrl = nil) -> result`

Remove the entity matching the given criteria. Raises on error.

```ruby
result = client.SecretsStoreDelete.remove({ "account_id" => "account_id", "store_id" => "store_id" })
```

### Common Methods

#### `data_get -> Hash`

Get the entity data. Returns a copy of the current data.

#### `data_set(data)`

Set the entity data.

#### `match_get -> Hash`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make -> Entity`

Create a new `SecretsStoreDeleteEntity` instance with the same client and
options.

#### `get_name -> String`

Return the entity name.


---

## SecretsStoreQuotaEntity

```ruby
secrets_store_quota = client.SecretsStoreQuota
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `result` | `Object` | Yes |  |

### Operations

#### `load(reqmatch, ctrl = nil) -> result`

Load a single entity matching the given criteria. Raises on error.

```ruby
result = client.SecretsStoreQuota.load({ "account_id" => "account_id" })
```

### Common Methods

#### `data_get -> Hash`

Get the entity data. Returns a copy of the current data.

#### `data_set(data)`

Set the entity data.

#### `match_get -> Hash`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make -> Entity`

Create a new `SecretsStoreQuotaEntity` instance with the same client and
options.

#### `get_name -> String`

Return the entity name.


---

## SecretsStoreSecretEntity

```ruby
secrets_store_secret = client.SecretsStoreSecret
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `comment` | `String` | No | Freeform text describing the secret. |
| `name` | `String` | Yes | The name of the secret. |
| `scopes` | `Array` | Yes | The list of services that can use this secret. |

### Operations

#### `create(reqdata, ctrl = nil) -> result`

Create a new entity with the given data. Raises on error.

```ruby
result = client.SecretsStoreSecret.create({
  "account_id" => "example_account_id", # String
  "secret_id" => "example_secret_id", # String
  "store_id" => "example_store_id", # String
  "name" => "example_name", # String
  "scopes" => [], # Array
})
```

### Common Methods

#### `data_get -> Hash`

Get the entity data. Returns a copy of the current data.

#### `data_set(data)`

Set the entity data.

#### `match_get -> Hash`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make -> Entity`

Create a new `SecretsStoreSecretEntity` instance with the same client and
options.

#### `get_name -> String`

Return the entity name.


---

## SecretsStoreStoreEntity

```ruby
secrets_store_store = client.SecretsStoreStore
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `id` | `String` | No |  |
| `name` | `String` | Yes | The name of the store. |
| `result` | `Object` | Yes |  |

### Operations

#### `create(reqdata, ctrl = nil) -> result`

Create a new entity with the given data. Raises on error.

```ruby
result = client.SecretsStoreStore.create({
  "account_id" => "example_account_id", # String
  "name" => "example_name", # String
  "result" => "example_result", # Object
})
```

#### `load(reqmatch, ctrl = nil) -> result`

Load a single entity matching the given criteria. Raises on error.

```ruby
result = client.SecretsStoreStore.load({ "id" => "secrets_store_store_id", "account_id" => "account_id" })
```

### Common Methods

#### `data_get -> Hash`

Get the entity data. Returns a copy of the current data.

#### `data_set(data)`

Set the entity data.

#### `match_get -> Hash`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make -> Entity`

Create a new `SecretsStoreStoreEntity` instance with the same client and
options.

#### `get_name -> String`

Return the entity name.


---

## SecretsStoreStoresResponseCollectionEntity

```ruby
secrets_store_stores_response_collection = client.SecretsStoreStoresResponseCollection
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `result` | `Array` | No |  |

### Operations

#### `list(reqmatch = nil, ctrl = nil) -> Array`

List entities matching the given criteria (call with no argument to list all). Returns an array. Raises on error.

```ruby
results = client.SecretsStoreStoresResponseCollection.list
```

### Common Methods

#### `data_get -> Hash`

Get the entity data. Returns a copy of the current data.

#### `data_set(data)`

Set the entity data.

#### `match_get -> Hash`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make -> Entity`

Create a new `SecretsStoreStoresResponseCollectionEntity` instance with the same client and
options.

#### `get_name -> String`

Return the entity name.


---

## SettingEntity

```ruby
setting = client.Setting
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `errors` | `Array` | Yes |  |
| `messages` | `Array` | Yes |  |
| `result` | `Hash` | Yes |  |
| `success` | `Boolean` | Yes | Whether the API call was successful. |

### Operations

#### `list(reqmatch = nil, ctrl = nil) -> Array`

List entities matching the given criteria (call with no argument to list all). Returns an array. Raises on error.

```ruby
results = client.Setting.list
```

#### `update(reqdata, ctrl = nil) -> result`

Update an existing entity. The data must include the entity `id`. Raises on error.

```ruby
result = client.Setting.update({
  "account_id" => "account_id",
  "environment_name" => "environment_name",
  "service_id" => "service_id",
  # Fields to update
})
```

### Common Methods

#### `data_get -> Hash`

Get the entity data. Returns a copy of the current data.

#### `data_set(data)`

Set the entity data.

#### `match_get -> Hash`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make -> Entity`

Create a new `SettingEntity` instance with the same client and
options.

#### `get_name -> String`

Return the entity name.


---

## SharedEntity

```ruby
shared = client.Shared
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `errors` | `Array` | Yes |  |
| `id` | `String` | No |  |
| `messages` | `Array` | Yes |  |
| `result` | `Hash` | Yes | Complete results of a query run. |
| `success` | `Boolean` | Yes |  |

### Operations

#### `create(reqdata, ctrl = nil) -> result`

Create a new entity with the given data. Raises on error.

```ruby
result = client.Shared.create({
  "account_id" => "example_account_id", # String
  "errors" => [], # Array
  "messages" => [], # Array
  "result" => {}, # Hash
  "success" => true, # Boolean
})
```

#### `load(reqmatch, ctrl = nil) -> result`

Load a single entity matching the given criteria. Raises on error.

```ruby
result = client.Shared.load({ "id" => "shared_id", "account_id" => "account_id" })
```

### Common Methods

#### `data_get -> Hash`

Get the entity data. Returns a copy of the current data.

#### `data_set(data)`

Set the entity data.

#### `match_get -> Hash`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make -> Entity`

Create a new `SharedEntity` instance with the same client and
options.

#### `get_name -> String`

Return the entity name.


---

## TailEntity

```ruby
tail = client.Tail
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `id` | `String` | No |  |

### Operations

#### `remove(reqmatch, ctrl = nil) -> result`

Remove the entity matching the given criteria. Raises on error.

```ruby
result = client.Tail.remove({ "account_id" => "account_id", "id" => "id", "script_id" => "script_id" })
```

### Common Methods

#### `data_get -> Hash`

Get the entity data. Returns a copy of the current data.

#### `data_set(data)`

Set the entity data.

#### `match_get -> Hash`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make -> Entity`

Create a new `TailEntity` instance with the same client and
options.

#### `get_name -> String`

Return the entity name.


---

## TokenEntity

```ruby
token = client.Token
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `id` | `String` | No |  |

### Operations

#### `remove(reqmatch, ctrl = nil) -> result`

Remove the entity matching the given criteria. Raises on error.

```ruby
result = client.Token.remove({ "account_id" => "account_id", "id" => "id" })
```

### Common Methods

#### `data_get -> Hash`

Get the entity data. Returns a copy of the current data.

#### `data_set(data)`

Set the entity data.

#### `match_get -> Hash`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make -> Entity`

Create a new `TokenEntity` instance with the same client and
options.

#### `get_name -> String`

Return the entity name.


---

## TriggerEntity

```ruby
trigger = client.Trigger
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `branch_excludes` | `Array` | Yes | Branch patterns that must not start builds. |
| `branch_includes` | `Array` | Yes | Branch patterns that can start builds. |
| `build_caching_enabled` | `Boolean` | No | Whether builds reuse cached dependencies and build artifacts. |
| `build_command` | `String` | Yes | Command to build the Worker. |
| `build_token_uuid` | `String` | Yes | UUID of the build token used when deploying the Worker. |
| `deploy_command` | `String` | Yes | Command to deploy the Worker. |
| `external_script_id` | `String` | Yes | System-generated tag of the Worker. |
| `id` | `String` | No |  |
| `path_excludes` | `Array` | Yes | Path patterns that must not start builds. |
| `path_includes` | `Array` | Yes | Path patterns that can start builds. |
| `repo_connection_uuid` | `String` | Yes | Repository connection UUID. |
| `root_directory` | `String` | Yes | Repository directory in which build and deploy commands run. |
| `trigger_name` | `String` | Yes | Human-readable name of the build trigger. |

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

#### `create(reqdata, ctrl = nil) -> result`

Create a new entity with the given data. Raises on error.

```ruby
result = client.Trigger.create({
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

#### `remove(reqmatch, ctrl = nil) -> result`

Remove the entity matching the given criteria. Raises on error.

```ruby
result = client.Trigger.remove({ "account_id" => "account_id", "id" => "id" })
```

#### `update(reqdata, ctrl = nil) -> result`

Update an existing entity. The data must include the entity `id`. Raises on error.

```ruby
result = client.Trigger.update({
  "account_id" => "account_id",
  "id" => "id",
  # Fields to update
})
```

### Common Methods

#### `data_get -> Hash`

Get the entity data. Returns a copy of the current data.

#### `data_set(data)`

Set the entity data.

#### `match_get -> Hash`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make -> Entity`

Create a new `TriggerEntity` instance with the same client and
options.

#### `get_name -> String`

Return the entity name.


---

## UsageEntity

```ruby
usage = client.Usage
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `errors` | `Array` | Yes |  |
| `messages` | `Array` | Yes |  |
| `result` | `Hash` | Yes |  |
| `success` | `Boolean` | Yes |  |

### Operations

#### `list(reqmatch = nil, ctrl = nil) -> Array`

List entities matching the given criteria (call with no argument to list all). Returns an array. Raises on error.

```ruby
results = client.Usage.list
```

### Common Methods

#### `data_get -> Hash`

Get the entity data. Returns a copy of the current data.

#### `data_set(data)`

Set the entity data.

#### `match_get -> Hash`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make -> Entity`

Create a new `UsageEntity` instance with the same client and
options.

#### `get_name -> String`

Return the entity name.


---

## ValueEntity

```ruby
value = client.Value
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `datasets` | `Array` | Yes | Leave this empty to use the default datasets |
| `errors` | `Array` | Yes |  |
| `filters` | `Array` | No | Apply filters before listing values. |
| `key` | `String` | Yes |  |
| `limit` | `Float` | No |  |
| `messages` | `Array` | Yes |  |
| `needle` | `Hash` | Yes | Full-text search expression to match events containing the specified text or pattern. |
| `result` | `Array` | Yes |  |
| `success` | `Boolean` | Yes |  |
| `timeframe` | `Hash` | Yes |  |
| `type` | `String` | Yes |  |

### Operations

#### `create(reqdata, ctrl = nil) -> result`

Create a new entity with the given data. Raises on error.

```ruby
result = client.Value.create({
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

### Common Methods

#### `data_get -> Hash`

Get the entity data. Returns a copy of the current data.

#### `data_set(data)`

Set the entity data.

#### `match_get -> Hash`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make -> Entity`

Create a new `ValueEntity` instance with the same client and
options.

#### `get_name -> String`

Return the entity name.


---

## VersionEntity

```ruby
version = client.Version
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `annotations` | `Hash` | No | Metadata about the version. |
| `assets` | `Hash` | No | Configuration for assets within a Worker. |
| `author_email` | `String` | No | Email of the user who created the version. |
| `author_id` | `String` | No | Identifier of the user who created the version. |
| `bindings` | `Array` | No | List of bindings attached to a Worker. |
| `cache_options` | `Hash` | Yes | Global CacheW configuration for the Worker. |
| `compatibility_date` | `String` | No | Date indicating targeted support in the Workers runtime. |
| `compatibility_flags` | `Array` | No | Flags that enable or disable certain features in the Workers runtime. |
| `containers` | `Array` | No | List of containers attached to a Worker. |
| `created_on` | `String` | Yes | When the version was created. |
| `errors` | `Array` | Yes |  |
| `exports` | `Object` | No | Declarative exports for the version, including Durable Object classes (with their `storage` backend) and named Worker entrypoints. |
| `exports_reconciliation` | `Object` | No | Summary of the declarative exports reconciliation that ran on this upload. |
| `id` | `String` | Yes | Version identifier. |
| `limits` | `Hash` | No | Resource limits enforced at runtime. |
| `main_module` | `String` | No | The name of the main module in the `modules` array (e.g. |
| `messages` | `Array` | Yes |  |
| `migration_tag` | `String` | No | Durable Object migration tag. |
| `migrations` | `Object` | No | Migrations for Durable Objects associated with the version. |
| `modules` | `Array` | No | Code, sourcemaps, and other content used at runtime. |
| `number` | `Integer` | Yes | The integer version number, starting from one. |
| `package_dependencies` | `Array` | No | The list of npm packages that were installed and used when this Worker version was built. |
| `placement` | `Hash` | No | Configuration for [Smart Placement](https://developers.cloudflare.com/workers/configuration/smart-placement). |
| `result` | `Hash` | Yes |  |
| `source` | `String` | No | The client used to create the version. |
| `startup_time_ms` | `Integer` | No | Time in milliseconds spent on [Worker startup](https://developers.cloudflare.com/workers/platform/limits/#worker-startup-time). |
| `success` | `Boolean` | Yes | Whether the API call was successful. |
| `urls` | `Array` | Yes | All routable URLs that always point to this version. |
| `usage_model` | `String` | No | Usage model for the version. |

### Operations

#### `create(reqdata, ctrl = nil) -> result`

Create a new entity with the given data. Raises on error.

```ruby
result = client.Version.create({
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

#### `list(reqmatch = nil, ctrl = nil) -> Array`

List entities matching the given criteria (call with no argument to list all). Returns an array. Raises on error.

```ruby
results = client.Version.list
```

#### `load(reqmatch, ctrl = nil) -> result`

Load a single entity matching the given criteria. Raises on error.

```ruby
result = client.Version.load({ "id" => "version_id", "account_id" => "account_id", "worker_id" => "worker_id" })
```

#### `remove(reqmatch, ctrl = nil) -> result`

Remove the entity matching the given criteria. Raises on error.

```ruby
result = client.Version.remove({ "id" => "version_id", "account_id" => "account_id", "worker_id" => "worker_id" })
```

#### `update(reqdata, ctrl = nil) -> result`

Update an existing entity. The data must include the entity `id`. Raises on error.

```ruby
result = client.Version.update({
  "id" => "version_id",
  "account_id" => "account_id",
  "worker_id" => "worker_id",
  # Fields to update
})
```

### Common Methods

#### `data_get -> Hash`

Get the entity data. Returns a copy of the current data.

#### `data_set(data)`

Set the entity data.

#### `match_get -> Hash`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make -> Entity`

Create a new `VersionEntity` instance with the same client and
options.

#### `get_name -> String`

Return the entity name.


---

## WorkerEntity

```ruby
worker = client.Worker
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `auto_build` | `Boolean` | No | Whether pushes to the git branch build this Preview. |
| `auto_delete` | `Boolean` | No | Whether deleting the git branch also deletes this Preview. |
| `branch` | `Object` | No | Git branch name (required if commit_hash not provided) |
| `commit_hash` | `Object` | No | Git commit hash (required if branch not provided) |
| `errors` | `Array` | Yes |  |
| `git_repository` | `Object` | Yes | Git repository settings to update |
| `id` | `String` | No |  |
| `messages` | `Array` | Yes |  |
| `previews_base_config` | `Hash` | Yes | Build and deploy settings when creating a Worker build configuration |
| `previews_enabled` | `Boolean` | Yes | Whether Previews are enabled for this Worker |
| `production_settings` | `Hash` | Yes | Build and deploy settings when creating a Worker build configuration |
| `result` | `Hash` | Yes | A single Preview of a Worker, with the build settings it currently uses. |
| `result_info` | `Hash` | No |  |
| `script_tag` | `String` | Yes | System-generated tag of the Worker. |
| `seed_repo` | `Object` | No | Optional repository and file overrides used to seed this build. |
| `settings` | `Hash` | No | Partial build settings for updating a Worker build configuration |
| `success` | `Boolean` | Yes | Whether the API call was successful. |

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

#### `create(reqdata, ctrl = nil) -> result`

Create a new entity with the given data. Raises on error.

```ruby
result = client.Worker.create({
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

#### `list(reqmatch = nil, ctrl = nil) -> Array`

List entities matching the given criteria (call with no argument to list all). Returns an array. Raises on error.

```ruby
results = client.Worker.list
```

#### `load(reqmatch, ctrl = nil) -> result`

Load a single entity matching the given criteria. Raises on error.

```ruby
result = client.Worker.load({ "id" => "worker_id", "account_id" => "account_id" })
```

#### `remove(reqmatch, ctrl = nil) -> result`

Remove the entity matching the given criteria. Raises on error.

```ruby
result = client.Worker.remove({ "id" => "worker_id", "account_id" => "account_id" })
```

#### `update(reqdata, ctrl = nil) -> result`

Update an existing entity. The data must include the entity `id`. Raises on error.

```ruby
result = client.Worker.update({
  "id" => "worker_id",
  "account_id" => "account_id",
  # Fields to update
})
```

### Common Methods

#### `data_get -> Hash`

Get the entity data. Returns a copy of the current data.

#### `data_set(data)`

Set the entity data.

#### `match_get -> Hash`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make -> Entity`

Create a new `WorkerEntity` instance with the same client and
options.

#### `get_name -> String`

Return the entity name.


---

## WorkerCronTriggerEntity

```ruby
worker_cron_trigger = client.WorkerCronTrigger
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `errors` | `Array` | Yes |  |
| `messages` | `Array` | Yes |  |
| `result` | `Hash` | Yes |  |
| `success` | `Boolean` | Yes | Whether the API call was successful. |

### Operations

#### `list(reqmatch = nil, ctrl = nil) -> Array`

List entities matching the given criteria (call with no argument to list all). Returns an array. Raises on error.

```ruby
results = client.WorkerCronTrigger.list
```

#### `update(reqdata, ctrl = nil) -> result`

Update an existing entity. The data must include the entity `id`. Raises on error.

```ruby
result = client.WorkerCronTrigger.update({
  "account_id" => "account_id",
  "script_name" => "script_name",
  # Fields to update
})
```

### Common Methods

#### `data_get -> Hash`

Get the entity data. Returns a copy of the current data.

#### `data_set(data)`

Set the entity data.

#### `match_get -> Hash`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make -> Entity`

Create a new `WorkerCronTriggerEntity` instance with the same client and
options.

#### `get_name -> String`

Return the entity name.


---

## WorkerDeploymentEntity

```ruby
worker_deployment = client.WorkerDeployment
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `annotations` | `Hash` | No |  |
| `author_email` | `String` | No |  |
| `created_on` | `String` | Yes |  |
| `errors` | `Array` | Yes |  |
| `id` | `String` | Yes |  |
| `messages` | `Array` | Yes |  |
| `result` | `Hash` | Yes |  |
| `source` | `String` | Yes |  |
| `strategy` | `String` | Yes |  |
| `success` | `Boolean` | Yes | Whether the API call was successful. |
| `versions` | `Array` | Yes | Worker versions included in this deployment. |

### Operations

#### `create(reqdata, ctrl = nil) -> result`

Create a new entity with the given data. Raises on error.

```ruby
result = client.WorkerDeployment.create({
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

#### `load(reqmatch, ctrl = nil) -> result`

Load a single entity matching the given criteria. Raises on error.

```ruby
result = client.WorkerDeployment.load({ "id" => "worker_deployment_id", "account_id" => "account_id" })
```

### Common Methods

#### `data_get -> Hash`

Get the entity data. Returns a copy of the current data.

#### `data_set(data)`

Set the entity data.

#### `match_get -> Hash`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make -> Entity`

Create a new `WorkerDeploymentEntity` instance with the same client and
options.

#### `get_name -> String`

Return the entity name.


---

## WorkerEnvironmentEntity

```ruby
worker_environment = client.WorkerEnvironment
```

### Operations

#### `load(reqmatch, ctrl = nil) -> result`

Load a single entity matching the given criteria. Raises on error.

```ruby
result = client.WorkerEnvironment.load({ "account_id" => "account_id", "environment_name" => "environment_name", "service_id" => "service_id" })
```

### Common Methods

#### `data_get -> Hash`

Get the entity data. Returns a copy of the current data.

#### `data_set(data)`

Set the entity data.

#### `match_get -> Hash`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make -> Entity`

Create a new `WorkerEnvironmentEntity` instance with the same client and
options.

#### `get_name -> String`

Return the entity name.


---

## WorkerRouteEntity

```ruby
worker_route = client.WorkerRoute
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `errors` | `Array` | Yes |  |
| `id` | `String` | Yes |  |
| `messages` | `Array` | Yes |  |
| `pattern` | `String` | Yes | Pattern to match incoming requests against. |
| `result` | `Hash` | Yes |  |
| `script` | `String` | No | Name of the script to run if the route matches. |
| `success` | `Boolean` | Yes | Whether the API call was successful. |

### Operations

#### `create(reqdata, ctrl = nil) -> result`

Create a new entity with the given data. Raises on error.

```ruby
result = client.WorkerRoute.create({
  "zone_id" => "example_zone_id", # String
  "errors" => [], # Array
  "id" => "example_id", # String
  "messages" => [], # Array
  "pattern" => "example_pattern", # String
  "result" => {}, # Hash
  "success" => true, # Boolean
})
```

#### `list(reqmatch = nil, ctrl = nil) -> Array`

List entities matching the given criteria (call with no argument to list all). Returns an array. Raises on error.

```ruby
results = client.WorkerRoute.list
```

#### `load(reqmatch, ctrl = nil) -> result`

Load a single entity matching the given criteria. Raises on error.

```ruby
result = client.WorkerRoute.load({ "id" => "worker_route_id", "zone_id" => "zone_id" })
```

#### `remove(reqmatch, ctrl = nil) -> result`

Remove the entity matching the given criteria. Raises on error.

```ruby
result = client.WorkerRoute.remove({ "id" => "worker_route_id", "zone_id" => "zone_id" })
```

#### `update(reqdata, ctrl = nil) -> result`

Update an existing entity. The data must include the entity `id`. Raises on error.

```ruby
result = client.WorkerRoute.update({
  "id" => "worker_route_id",
  "zone_id" => "zone_id",
  # Fields to update
})
```

### Common Methods

#### `data_get -> Hash`

Get the entity data. Returns a copy of the current data.

#### `data_set(data)`

Set the entity data.

#### `match_get -> Hash`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make -> Entity`

Create a new `WorkerRouteEntity` instance with the same client and
options.

#### `get_name -> String`

Return the entity name.


---

## WorkerScriptEntity

```ruby
worker_script = client.WorkerScript
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `errors` | `Array` | Yes |  |
| `id` | `String` | No |  |
| `messages` | `Array` | Yes |  |
| `result` | `Hash` | No | A secret value accessible through a binding. |
| `success` | `Boolean` | Yes | Whether the API call was successful. |

### Field Usage by Operation

| Field | load | list | create | update | remove |
| --- | --- | --- | --- | --- | --- |
| `errors` | - | - | - | - | - |
| `id` | - | - | - | - | - |
| `messages` | - | - | - | - | - |
| `result` | - | Yes | - | - | - |
| `success` | - | - | - | - | - |

### Operations

#### `create(reqdata, ctrl = nil) -> result`

Create a new entity with the given data. Raises on error.

```ruby
result = client.WorkerScript.create({
  "account_id" => "example_account_id", # String
  "script_name" => "example_script_name", # String
  "errors" => [], # Array
  "messages" => [], # Array
  "success" => true, # Boolean
})
```

#### `list(reqmatch = nil, ctrl = nil) -> Array`

List entities matching the given criteria (call with no argument to list all). Returns an array. Raises on error.

```ruby
results = client.WorkerScript.list
```

#### `load(reqmatch, ctrl = nil) -> result`

Load a single entity matching the given criteria. Raises on error.

```ruby
result = client.WorkerScript.load({ "id" => "worker_script_id", "account_id" => "account_id" })
```

#### `remove(reqmatch, ctrl = nil) -> result`

Remove the entity matching the given criteria. Raises on error.

```ruby
result = client.WorkerScript.remove({ "account_id" => "account_id", "script_name" => "script_name" })
```

#### `update(reqdata, ctrl = nil) -> result`

Update an existing entity. The data must include the entity `id`. Raises on error.

```ruby
result = client.WorkerScript.update({
  "id" => "worker_script_id",
  "account_id" => "account_id",
  # Fields to update
})
```

### Common Methods

#### `data_get -> Hash`

Get the entity data. Returns a copy of the current data.

#### `data_set(data)`

Set the entity data.

#### `match_get -> Hash`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make -> Entity`

Create a new `WorkerScriptEntity` instance with the same client and
options.

#### `get_name -> String`

Return the entity name.


---

## WorkerSubdomainEntity

```ruby
worker_subdomain = client.WorkerSubdomain
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `errors` | `Array` | Yes |  |
| `messages` | `Array` | Yes |  |
| `result` | `Hash` | Yes |  |
| `subdomain` | `String` | Yes |  |
| `success` | `Boolean` | Yes | Whether the API call was successful. |

### Operations

#### `list(reqmatch = nil, ctrl = nil) -> Array`

List entities matching the given criteria (call with no argument to list all). Returns an array. Raises on error.

```ruby
results = client.WorkerSubdomain.list
```

#### `remove(reqmatch, ctrl = nil) -> result`

Remove the entity matching the given criteria. Raises on error.

```ruby
result = client.WorkerSubdomain.remove({ "account_id" => "account_id" })
```

#### `update(reqdata, ctrl = nil) -> result`

Update an existing entity. The data must include the entity `id`. Raises on error.

```ruby
result = client.WorkerSubdomain.update({
  "account_id" => "account_id",
  # Fields to update
})
```

### Common Methods

#### `data_get -> Hash`

Get the entity data. Returns a copy of the current data.

#### `data_set(data)`

Set the entity data.

#### `match_get -> Hash`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make -> Entity`

Create a new `WorkerSubdomainEntity` instance with the same client and
options.

#### `get_name -> String`

Return the entity name.


---

## WorkerTailLogEntity

```ruby
worker_tail_log = client.WorkerTailLog
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `errors` | `Array` | Yes |  |
| `messages` | `Array` | Yes |  |
| `result` | `Hash` | Yes |  |
| `success` | `Boolean` | Yes | Whether the API call was successful. |

### Operations

#### `create(reqdata, ctrl = nil) -> result`

Create a new entity with the given data. Raises on error.

```ruby
result = client.WorkerTailLog.create({
  "account_id" => "example_account_id", # String
  "script_name" => "example_script_name", # String
  "errors" => [], # Array
  "messages" => [], # Array
  "result" => {}, # Hash
  "success" => true, # Boolean
})
```

#### `list(reqmatch = nil, ctrl = nil) -> Array`

List entities matching the given criteria (call with no argument to list all). Returns an array. Raises on error.

```ruby
results = client.WorkerTailLog.list
```

### Common Methods

#### `data_get -> Hash`

Get the entity data. Returns a copy of the current data.

#### `data_set(data)`

Set the entity data.

#### `match_get -> Hash`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make -> Entity`

Create a new `WorkerTailLogEntity` instance with the same client and
options.

#### `get_name -> String`

Return the entity name.


---

## WorkersAccountSettingEntity

```ruby
workers_account_setting = client.WorkersAccountSetting
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `default_usage_model` | `String` | No |  |
| `errors` | `Array` | Yes |  |
| `green_compute` | `Boolean` | No |  |
| `messages` | `Array` | Yes |  |
| `result` | `Hash` | Yes |  |
| `success` | `Boolean` | Yes | Whether the API call was successful. |

### Operations

#### `list(reqmatch = nil, ctrl = nil) -> Array`

List entities matching the given criteria (call with no argument to list all). Returns an array. Raises on error.

```ruby
results = client.WorkersAccountSetting.list
```

#### `update(reqdata, ctrl = nil) -> result`

Update an existing entity. The data must include the entity `id`. Raises on error.

```ruby
result = client.WorkersAccountSetting.update({
  "account_id" => "account_id",
  # Fields to update
})
```

### Common Methods

#### `data_get -> Hash`

Get the entity data. Returns a copy of the current data.

#### `data_set(data)`

Set the entity data.

#### `match_get -> Hash`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make -> Entity`

Create a new `WorkersAccountSettingEntity` instance with the same client and
options.

#### `get_name -> String`

Return the entity name.


---

## WorkersApiResponseNullResultEntity

```ruby
workers_api_response_null_result = client.WorkersApiResponseNullResult
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `errors` | `Array` | Yes |  |
| `messages` | `Array` | Yes |  |
| `result` | `Hash` | No |  |
| `success` | `Boolean` | Yes | Whether the API call was successful. |

### Operations

#### `remove(reqmatch, ctrl = nil) -> result`

Remove the entity matching the given criteria. Raises on error.

```ruby
result = client.WorkersApiResponseNullResult.remove({ "account_id" => "account_id" })
```

#### `update(reqdata, ctrl = nil) -> result`

Update an existing entity. The data must include the entity `id`. Raises on error.

```ruby
result = client.WorkersApiResponseNullResult.update({
  "account_id" => "account_id",
  "namespace_id" => "namespace_id",
  "script_id" => "script_id",
  "tag" => "tag",
  # Fields to update
})
```

### Common Methods

#### `data_get -> Hash`

Get the entity data. Returns a copy of the current data.

#### `data_set(data)`

Set the entity data.

#### `match_get -> Hash`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make -> Entity`

Create a new `WorkersApiResponseNullResultEntity` instance with the same client and
options.

#### `get_name -> String`

Return the entity name.


---

## WorkersCompletedUploadAssetEntity

```ruby
workers_completed_upload_asset = client.WorkersCompletedUploadAsset
```

### Operations

#### `create(reqdata, ctrl = nil) -> result`

Create a new entity with the given data. Raises on error.

```ruby
result = client.WorkersCompletedUploadAsset.create({
  "account_id" => "example_account_id", # String
  "base64" => true, # Boolean
})
```

### Common Methods

#### `data_get -> Hash`

Get the entity data. Returns a copy of the current data.

#### `data_set(data)`

Set the entity data.

#### `match_get -> Hash`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make -> Entity`

Create a new `WorkersCompletedUploadAssetEntity` instance with the same client and
options.

#### `get_name -> String`

Return the entity name.


---

## WorkersCreateAssetsUploadSessionEntity

```ruby
workers_create_assets_upload_session = client.WorkersCreateAssetsUploadSession
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `manifest` | `Hash` | Yes | A manifest ([path]: {hash, size}) map of files to upload. |

### Operations

#### `create(reqdata, ctrl = nil) -> result`

Create a new entity with the given data. Raises on error.

```ruby
result = client.WorkersCreateAssetsUploadSession.create({
  "account_id" => "example_account_id", # String
  "script_name" => "example_script_name", # String
  "manifest" => {}, # Hash
})
```

### Common Methods

#### `data_get -> Hash`

Get the entity data. Returns a copy of the current data.

#### `data_set(data)`

Set the entity data.

#### `match_get -> Hash`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make -> Entity`

Create a new `WorkersCreateAssetsUploadSessionEntity` instance with the same client and
options.

#### `get_name -> String`

Return the entity name.


---

## WorkersForPlatformEntity

```ruby
workers_for_platform = client.WorkersForPlatform
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `errors` | `Array` | Yes |  |
| `messages` | `Array` | Yes |  |
| `result` | `Hash` | Yes | A secret value accessible through a binding. |
| `success` | `Boolean` | Yes | Whether the API call was successful. |

### Field Usage by Operation

| Field | load | list | update |
| --- | --- | --- | --- |
| `errors` | - | - | - |
| `messages` | - | - | - |
| `result` | - | Yes | - |
| `success` | - | - | - |

### Operations

#### `list(reqmatch = nil, ctrl = nil) -> Array`

List entities matching the given criteria (call with no argument to list all). Returns an array. Raises on error.

```ruby
results = client.WorkersForPlatform.list
```

#### `load(reqmatch, ctrl = nil) -> result`

Load a single entity matching the given criteria. Raises on error.

```ruby
result = client.WorkersForPlatform.load({ "account_id" => "account_id", "namespace_id" => "namespace_id" })
```

#### `update(reqdata, ctrl = nil) -> result`

Update an existing entity. The data must include the entity `id`. Raises on error.

```ruby
result = client.WorkersForPlatform.update({
  "account_id" => "account_id",
  "namespace_id" => "namespace_id",
  "script_name" => "script_name",
  # Fields to update
})
```

### Common Methods

#### `data_get -> Hash`

Get the entity data. Returns a copy of the current data.

#### `data_set(data)`

Set the entity data.

#### `match_get -> Hash`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make -> Entity`

Create a new `WorkersForPlatformEntity` instance with the same client and
options.

#### `get_name -> String`

Return the entity name.


---

## WorkersKvApiResponseCommonNoResultEntity

```ruby
workers_kv_api_response_common_no_result = client.WorkersKvApiResponseCommonNoResult
```

### Operations

#### `remove(reqmatch, ctrl = nil) -> result`

Remove the entity matching the given criteria. Raises on error.

```ruby
result = client.WorkersKvApiResponseCommonNoResult.remove({ "account_id" => "account_id", "namespace_id" => "namespace_id" })
```

#### `update(reqdata, ctrl = nil) -> result`

Update an existing entity. The data must include the entity `id`. Raises on error.

```ruby
result = client.WorkersKvApiResponseCommonNoResult.update({
  "account_id" => "account_id",
  "key_name" => "key_name",
  "namespace_id" => "namespace_id",
  # Fields to update
})
```

### Common Methods

#### `data_get -> Hash`

Get the entity data. Returns a copy of the current data.

#### `data_set(data)`

Set the entity data.

#### `match_get -> Hash`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make -> Entity`

Create a new `WorkersKvApiResponseCommonNoResultEntity` instance with the same client and
options.

#### `get_name -> String`

Return the entity name.


---

## WorkersKvNamespaceEntity

```ruby
workers_kv_namespace = client.WorkersKvNamespace
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `errors` | `Array` | Yes |  |
| `id` | `String` | No |  |
| `jurisdiction` | `String` | No | Specify the jurisdiction to restrict the KV namespace to durably store data within. |
| `keys` | `Array` | Yes | Array of keys to retrieve (maximum of 100). |
| `messages` | `Array` | Yes |  |
| `result` | `Object` | No |  |
| `result_info` | `Hash` | No |  |
| `success` | `Boolean` | Yes | Whether the API call was successful. |
| `title` | `String` | Yes | Human-readable string name for a Workers KV namespace. |
| `type` | `String` | No | Return values as strings with `text`, or parse stored JSON values with `json`. |
| `withMetadata` | `Boolean` | No | Whether to include metadata in the response. |

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

#### `create(reqdata, ctrl = nil) -> result`

Create a new entity with the given data. Raises on error.

```ruby
result = client.WorkersKvNamespace.create({
  "account_id" => "example_account_id", # String
  "errors" => [], # Array
  "keys" => [], # Array
  "messages" => [], # Array
  "success" => true, # Boolean
  "title" => "example_title", # String
})
```

#### `list(reqmatch = nil, ctrl = nil) -> Array`

List entities matching the given criteria (call with no argument to list all). Returns an array. Raises on error.

```ruby
results = client.WorkersKvNamespace.list
```

#### `load(reqmatch, ctrl = nil) -> result`

Load a single entity matching the given criteria. Raises on error.

```ruby
result = client.WorkersKvNamespace.load({ "id" => "workers_kv_namespace_id", "account_id" => "account_id" })
```

#### `remove(reqmatch, ctrl = nil) -> result`

Remove the entity matching the given criteria. Raises on error.

```ruby
result = client.WorkersKvNamespace.remove({ "account_id" => "account_id", "namespace_id" => "namespace_id" })
```

#### `update(reqdata, ctrl = nil) -> result`

Update an existing entity. The data must include the entity `id`. Raises on error.

```ruby
result = client.WorkersKvNamespace.update({
  "id" => "workers_kv_namespace_id",
  "account_id" => "account_id",
  # Fields to update
})
```

### Common Methods

#### `data_get -> Hash`

Get the entity data. Returns a copy of the current data.

#### `data_set(data)`

Set the entity data.

#### `match_get -> Hash`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make -> Entity`

Create a new `WorkersKvNamespaceEntity` instance with the same client and
options.

#### `get_name -> String`

Return the entity name.


---

## WorkersNamespaceListEntity

```ruby
workers_namespace_list = client.WorkersNamespaceList
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `errors` | `Array` | Yes |  |
| `messages` | `Array` | Yes |  |
| `result` | `Array` | No |  |
| `success` | `Boolean` | Yes | Whether the API call was successful. |

### Operations

#### `list(reqmatch = nil, ctrl = nil) -> Array`

List entities matching the given criteria (call with no argument to list all). Returns an array. Raises on error.

```ruby
results = client.WorkersNamespaceList.list
```

### Common Methods

#### `data_get -> Hash`

Get the entity data. Returns a copy of the current data.

#### `data_set(data)`

Set the entity data.

#### `match_get -> Hash`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make -> Entity`

Create a new `WorkersNamespaceListEntity` instance with the same client and
options.

#### `get_name -> String`

Return the entity name.


---

## WorkersNamespaceScriptDeleteBulkEntity

```ruby
workers_namespace_script_delete_bulk = client.WorkersNamespaceScriptDeleteBulk
```

### Operations

#### `remove(reqmatch, ctrl = nil) -> result`

Remove the entity matching the given criteria. Raises on error.

```ruby
result = client.WorkersNamespaceScriptDeleteBulk.remove({ "account_id" => "account_id", "dispatch_namespace" => "dispatch_namespace", "tag" => "tag" })
```

### Common Methods

#### `data_get -> Hash`

Get the entity data. Returns a copy of the current data.

#### `data_set(data)`

Set the entity data.

#### `match_get -> Hash`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make -> Entity`

Create a new `WorkersNamespaceScriptDeleteBulkEntity` instance with the same client and
options.

#### `get_name -> String`

Return the entity name.


---

## WorkersNamespaceScriptResponseSingleEntity

```ruby
workers_namespace_script_response_single = client.WorkersNamespaceScriptResponseSingle
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `errors` | `Array` | Yes |  |
| `messages` | `Array` | Yes |  |
| `result` | `Hash` | Yes | Details about a worker uploaded to a Workers for Platforms namespace. |
| `success` | `Boolean` | Yes | Whether the API call was successful. |

### Operations

#### `load(reqmatch, ctrl = nil) -> result`

Load a single entity matching the given criteria. Raises on error.

```ruby
result = client.WorkersNamespaceScriptResponseSingle.load({ "account_id" => "account_id", "namespace_id" => "namespace_id", "script_name" => "script_name" })
```

#### `update(reqdata, ctrl = nil) -> result`

Update an existing entity. The data must include the entity `id`. Raises on error.

```ruby
result = client.WorkersNamespaceScriptResponseSingle.update({
  "account_id" => "account_id",
  "namespace_id" => "namespace_id",
  "script_name" => "script_name",
  # Fields to update
})
```

### Common Methods

#### `data_get -> Hash`

Get the entity data. Returns a copy of the current data.

#### `data_set(data)`

Set the entity data.

#### `match_get -> Hash`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make -> Entity`

Create a new `WorkersNamespaceScriptResponseSingleEntity` instance with the same client and
options.

#### `get_name -> String`

Return the entity name.


---

## WorkersNamespaceSingleEntity

```ruby
workers_namespace_single = client.WorkersNamespaceSingle
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `errors` | `Array` | Yes |  |
| `messages` | `Array` | Yes |  |
| `name` | `String` | No | The name of the dispatch namespace. |
| `result` | `Hash` | No |  |
| `success` | `Boolean` | Yes | Whether the API call was successful. |
| `trusted_workers` | `Boolean` | No | Whether the Workers in the namespace are executed in a "trusted" manner. |

### Operations

#### `create(reqdata, ctrl = nil) -> result`

Create a new entity with the given data. Raises on error.

```ruby
result = client.WorkersNamespaceSingle.create({
  "account_id" => "example_account_id", # String
  "errors" => [], # Array
  "messages" => [], # Array
  "success" => true, # Boolean
})
```

#### `load(reqmatch, ctrl = nil) -> result`

Load a single entity matching the given criteria. Raises on error.

```ruby
result = client.WorkersNamespaceSingle.load({ "account_id" => "account_id", "dispatch_namespace" => "dispatch_namespace" })
```

#### `update(reqdata, ctrl = nil) -> result`

Update an existing entity. The data must include the entity `id`. Raises on error.

```ruby
result = client.WorkersNamespaceSingle.update({
  "account_id" => "account_id",
  "dispatch_namespace" => "dispatch_namespace",
  # Fields to update
})
```

### Common Methods

#### `data_get -> Hash`

Get the entity data. Returns a copy of the current data.

#### `data_set(data)`

Set the entity data.

#### `match_get -> Hash`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make -> Entity`

Create a new `WorkersNamespaceSingleEntity` instance with the same client and
options.

#### `get_name -> String`

Return the entity name.


---

## WorkersPipelinesOtherEntity

```ruby
workers_pipelines_other = client.WorkersPipelinesOther
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `config` | `Object` | No | Defines the configuration of the R2 Sink. |
| `created_at` | `String` | Yes |  |
| `destination` | `Hash` | Yes |  |
| `endpoint` | `String` | Yes | Indicates the endpoint URL to send traffic. |
| `failure_reason` | `String` | No | Indicates the reason for the failure of the Pipeline. |
| `format` | `Object` | No | Defines the output data format of a sink. |
| `graph` | `Hash` | Yes | Indicates the processing flow to implement the SQL. |
| `http` | `Hash` | Yes |  |
| `id` | `String` | Yes | Indicates a unique identifier for this pipeline. |
| `modified_at` | `String` | Yes |  |
| `name` | `String` | Yes | Indicates the name of the Pipeline. |
| `schema` | `Hash` | No | Defines the schema of the events in the data stream. |
| `source` | `Array` | Yes |  |
| `sql` | `String` | Yes | Specifies SQL for the Pipeline processing flow. |
| `status` | `String` | Yes | Indicates the current status of the Pipeline. |
| `tables` | `Array` | Yes | List of streams and sinks used by this pipeline. |
| `type` | `String` | Yes | Specifies the type of sink. |
| `version` | `Float` | Yes | Indicates the version number of last saved configuration. |
| `worker_binding` | `Hash` | Yes |  |

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

#### `create(reqdata, ctrl = nil) -> result`

Create a new entity with the given data. Raises on error.

```ruby
result = client.WorkersPipelinesOther.create({
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

#### `list(reqmatch = nil, ctrl = nil) -> Array`

List entities matching the given criteria (call with no argument to list all). Returns an array. Raises on error.

```ruby
results = client.WorkersPipelinesOther.list
```

#### `load(reqmatch, ctrl = nil) -> result`

Load a single entity matching the given criteria. Raises on error.

```ruby
result = client.WorkersPipelinesOther.load({ "account_id" => "account_id" })
```

#### `remove(reqmatch, ctrl = nil) -> result`

Remove the entity matching the given criteria. Raises on error.

```ruby
result = client.WorkersPipelinesOther.remove({ "account_id" => "account_id" })
```

#### `update(reqdata, ctrl = nil) -> result`

Update an existing entity. The data must include the entity `id`. Raises on error.

```ruby
result = client.WorkersPipelinesOther.update({
  "account_id" => "account_id",
  "pipeline_name" => "pipeline_name",
  # Fields to update
})
```

### Common Methods

#### `data_get -> Hash`

Get the entity data. Returns a copy of the current data.

#### `data_set(data)`

Set the entity data.

#### `match_get -> Hash`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make -> Entity`

Create a new `WorkersPipelinesOtherEntity` instance with the same client and
options.

#### `get_name -> String`

Return the entity name.


---

## WorkersScriptAndVersionSettingEntity

```ruby
workers_script_and_version_setting = client.WorkersScriptAndVersionSetting
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `errors` | `Array` | Yes |  |
| `messages` | `Array` | Yes |  |
| `result` | `Hash` | Yes |  |
| `success` | `Boolean` | Yes | Whether the API call was successful. |

### Operations

#### `list(reqmatch = nil, ctrl = nil) -> Array`

List entities matching the given criteria (call with no argument to list all). Returns an array. Raises on error.

```ruby
results = client.WorkersScriptAndVersionSetting.list
```

#### `update(reqdata, ctrl = nil) -> result`

Update an existing entity. The data must include the entity `id`. Raises on error.

```ruby
result = client.WorkersScriptAndVersionSetting.update({
  "account_id" => "account_id",
  "script_name" => "script_name",
  # Fields to update
})
```

### Common Methods

#### `data_get -> Hash`

Get the entity data. Returns a copy of the current data.

#### `data_set(data)`

Set the entity data.

#### `match_get -> Hash`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make -> Entity`

Create a new `WorkersScriptAndVersionSettingEntity` instance with the same client and
options.

#### `get_name -> String`

Return the entity name.


---

## WorkersScriptResponseCollectionEntity

```ruby
workers_script_response_collection = client.WorkersScriptResponseCollection
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `errors` | `Array` | Yes |  |
| `messages` | `Array` | Yes |  |
| `result` | `Array` | Yes |  |
| `success` | `Boolean` | Yes | Whether the API call was successful. |

### Operations

#### `list(reqmatch = nil, ctrl = nil) -> Array`

List entities matching the given criteria (call with no argument to list all). Returns an array. Raises on error.

```ruby
results = client.WorkersScriptResponseCollection.list
```

### Common Methods

#### `data_get -> Hash`

Get the entity data. Returns a copy of the current data.

#### `data_set(data)`

Set the entity data.

#### `match_get -> Hash`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make -> Entity`

Create a new `WorkersScriptResponseCollectionEntity` instance with the same client and
options.

#### `get_name -> String`

Return the entity name.


---

## WorkersScriptResponseSingleEntity

```ruby
workers_script_response_single = client.WorkersScriptResponseSingle
```

### Operations

#### `update(reqdata, ctrl = nil) -> result`

Update an existing entity. The data must include the entity `id`. Raises on error.

```ruby
result = client.WorkersScriptResponseSingle.update({
  "account_id" => "account_id",
  # Fields to update
})
```

### Common Methods

#### `data_get -> Hash`

Get the entity data. Returns a copy of the current data.

#### `data_set(data)`

Set the entity data.

#### `match_get -> Hash`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make -> Entity`

Create a new `WorkersScriptResponseSingleEntity` instance with the same client and
options.

#### `get_name -> String`

Return the entity name.


---

## WorkersSmartPlacementEntity

```ruby
workers_smart_placement = client.WorkersSmartPlacement
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `errors` | `Array` | Yes |  |
| `messages` | `Array` | Yes |  |
| `result` | `Hash` | Yes |  |
| `success` | `Boolean` | Yes | Whether the API call was successful. |

### Operations

#### `list(reqmatch = nil, ctrl = nil) -> Array`

List entities matching the given criteria (call with no argument to list all). Returns an array. Raises on error.

```ruby
results = client.WorkersSmartPlacement.list
```

### Common Methods

#### `data_get -> Hash`

Get the entity data. Returns a copy of the current data.

#### `data_set(data)`

Set the entity data.

#### `match_get -> Hash`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make -> Entity`

Create a new `WorkersSmartPlacementEntity` instance with the same client and
options.

#### `get_name -> String`

Return the entity name.


---

## WorkersUsageModelEntity

```ruby
workers_usage_model = client.WorkersUsageModel
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `errors` | `Array` | Yes |  |
| `messages` | `Array` | Yes |  |
| `result` | `Hash` | Yes |  |
| `success` | `Boolean` | Yes | Whether the API call was successful. |
| `usage_model` | `String` | No | Usage model for the Worker invocations. |
| `user_limits` | `Hash` | No | User-defined resource limits for Workers with standard usage model. |

### Operations

#### `list(reqmatch = nil, ctrl = nil) -> Array`

List entities matching the given criteria (call with no argument to list all). Returns an array. Raises on error.

```ruby
results = client.WorkersUsageModel.list
```

#### `update(reqdata, ctrl = nil) -> result`

Update an existing entity. The data must include the entity `id`. Raises on error.

```ruby
result = client.WorkersUsageModel.update({
  "account_id" => "account_id",
  "script_name" => "script_name",
  # Fields to update
})
```

### Common Methods

#### `data_get -> Hash`

Get the entity data. Returns a copy of the current data.

#### `data_set(data)`

Set the entity data.

#### `match_get -> Hash`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make -> Entity`

Create a new `WorkersUsageModelEntity` instance with the same client and
options.

#### `get_name -> String`

Return the entity name.


---

## WorkersVersionsListEntity

```ruby
workers_versions_list = client.WorkersVersionsList
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `errors` | `Array` | Yes |  |
| `messages` | `Array` | Yes |  |
| `result` | `Hash` | Yes |  |
| `success` | `Boolean` | Yes | Whether the API call was successful. |

### Operations

#### `list(reqmatch = nil, ctrl = nil) -> Array`

List entities matching the given criteria (call with no argument to list all). Returns an array. Raises on error.

```ruby
results = client.WorkersVersionsList.list
```

### Common Methods

#### `data_get -> Hash`

Get the entity data. Returns a copy of the current data.

#### `data_set(data)`

Set the entity data.

#### `match_get -> Hash`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make -> Entity`

Create a new `WorkersVersionsListEntity` instance with the same client and
options.

#### `get_name -> String`

Return the entity name.


---

## WorkersVersionsSingleEntity

```ruby
workers_versions_single = client.WorkersVersionsSingle
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `errors` | `Array` | Yes |  |
| `messages` | `Array` | Yes |  |
| `result` | `Object` | Yes |  |
| `success` | `Boolean` | Yes | Whether the API call was successful. |

### Operations

#### `load(reqmatch, ctrl = nil) -> result`

Load a single entity matching the given criteria. Raises on error.

```ruby
result = client.WorkersVersionsSingle.load({ "account_id" => "account_id", "script_id" => "script_id", "version_id" => "version_id" })
```

### Common Methods

#### `data_get -> Hash`

Get the entity data. Returns a copy of the current data.

#### `data_set(data)`

Set the entity data.

#### `match_get -> Hash`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make -> Entity`

Create a new `WorkersVersionsSingleEntity` instance with the same client and
options.

#### `get_name -> String`

Return the entity name.


---

## WorkersVersionsUploadEntity

```ruby
workers_versions_upload = client.WorkersVersionsUpload
```

### Operations

#### `create(reqdata, ctrl = nil) -> result`

Create a new entity with the given data. Raises on error.

```ruby
result = client.WorkersVersionsUpload.create({
  "account_id" => "example_account_id", # String
  "script_name" => "example_script_name", # String
})
```

### Common Methods

#### `data_get -> Hash`

Get the entity data. Returns a copy of the current data.

#### `data_set(data)`

Set the entity data.

#### `match_get -> Hash`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make -> Entity`

Create a new `WorkersVersionsUploadEntity` instance with the same client and
options.

#### `get_name -> String`

Return the entity name.


---

## WorkflowEntity

```ruby
workflow = client.Workflow
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `class_name` | `String` | Yes |  |
| `concurrency` | `Hash` | No |  |
| `default_retention` | `Hash` | No | Default retention applied to instances of this version when they do not set their own retention. |
| `errors` | `Array` | Yes |  |
| `id` | `String` | No |  |
| `instances` | `Array` | Yes |  |
| `limits` | `Hash` | No |  |
| `messages` | `Array` | Yes |  |
| `result` | `Hash` | Yes |  |
| `result_info` | `Hash` | Yes |  |
| `schedules` | `Array` | No |  |
| `script_name` | `String` | Yes |  |
| `success` | `Boolean` | Yes |  |

### Operations

#### `create(reqdata, ctrl = nil) -> result`

Create a new entity with the given data. Raises on error.

```ruby
result = client.Workflow.create({
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

#### `list(reqmatch = nil, ctrl = nil) -> Array`

List entities matching the given criteria (call with no argument to list all). Returns an array. Raises on error.

```ruby
results = client.Workflow.list
```

#### `load(reqmatch, ctrl = nil) -> result`

Load a single entity matching the given criteria. Raises on error.

```ruby
result = client.Workflow.load({ "id" => "workflow_id", "account_id" => "account_id" })
```

#### `remove(reqmatch, ctrl = nil) -> result`

Remove the entity matching the given criteria. Raises on error.

```ruby
result = client.Workflow.remove({ "id" => "workflow_id", "account_id" => "account_id" })
```

#### `update(reqdata, ctrl = nil) -> result`

Update an existing entity. The data must include the entity `id`. Raises on error.

```ruby
result = client.Workflow.update({
  "id" => "workflow_id",
  "account_id" => "account_id",
  # Fields to update
})
```

### Common Methods

#### `data_get -> Hash`

Get the entity data. Returns a copy of the current data.

#### `data_set(data)`

Set the entity data.

#### `match_get -> Hash`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make -> Entity`

Create a new `WorkflowEntity` instance with the same client and
options.

#### `get_name -> String`

Return the entity name.


---

## Features

| Feature | Version | Description |
| --- | --- | --- |
| `test` | 0.0.1 | Test transport |


Features are activated via the `feature` option:

```ruby
client = CloudflareWorkersSDK.new({
  "feature" => {
    "test" => { "active" => true },
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

