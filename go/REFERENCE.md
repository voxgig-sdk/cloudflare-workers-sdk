# CloudflareWorkers Golang SDK Reference

Complete API reference for the CloudflareWorkers Golang SDK.


## CloudflareWorkersSDK

### Constructor

```go
func NewCloudflareWorkersSDK(options map[string]any) *CloudflareWorkersSDK
```

Create a new SDK client instance.

**Parameters:**

| Name | Type | Description |
| --- | --- | --- |
| `options` | `map[string]any` | SDK configuration options. |
| `options["apikey"]` | `string` | API key for authentication. |
| `options["base"]` | `string` | Base URL for API requests. |
| `options["prefix"]` | `string` | URL prefix appended after base. |
| `options["suffix"]` | `string` | URL suffix appended after path. |
| `options["headers"]` | `map[string]any` | Custom headers for all requests. |
| `options["feature"]` | `map[string]any` | Feature configuration. |
| `options["system"]` | `map[string]any` | System overrides (e.g. custom fetch). |


### Static Methods

#### `Test() *CloudflareWorkersSDK`

No-arg convenience constructor for the common no-options test case.

```go
client := sdk.Test()
```

#### `TestSDK(testopts, sdkopts map[string]any) *CloudflareWorkersSDK`

Test client with options. Both arguments may be `nil`.

```go
client := sdk.TestSDK(testopts, sdkopts)
```


### Instance Methods

#### `Account(data map[string]any) CloudflareWorkersEntity`

Create a new `Account` entity instance. Pass `nil` for no initial data.

#### `Application(data map[string]any) CloudflareWorkersEntity`

Create a new `Application` entity instance. Pass `nil` for no initial data.

#### `Brapi(data map[string]any) CloudflareWorkersEntity`

Create a new `Brapi` entity instance. Pass `nil` for no initial data.

#### `Build(data map[string]any) CloudflareWorkersEntity`

Create a new `Build` entity instance. Pass `nil` for no initial data.

#### `BuildToken(data map[string]any) CloudflareWorkersEntity`

Create a new `BuildToken` entity instance. Pass `nil` for no initial data.

#### `BuildsApi(data map[string]any) CloudflareWorkersEntity`

Create a new `BuildsApi` entity instance. Pass `nil` for no initial data.

#### `Connection(data map[string]any) CloudflareWorkersEntity`

Create a new `Connection` entity instance. Pass `nil` for no initial data.

#### `ContainerImage(data map[string]any) CloudflareWorkersEntity`

Create a new `ContainerImage` entity instance. Pass `nil` for no initial data.

#### `ContainerInstance(data map[string]any) CloudflareWorkersEntity`

Create a new `ContainerInstance` entity instance. Pass `nil` for no initial data.

#### `DeployHook(data map[string]any) CloudflareWorkersEntity`

Create a new `DeployHook` entity instance. Pass `nil` for no initial data.

#### `Deployment(data map[string]any) CloudflareWorkersEntity`

Create a new `Deployment` entity instance. Pass `nil` for no initial data.

#### `Destination(data map[string]any) CloudflareWorkersEntity`

Create a new `Destination` entity instance. Pass `nil` for no initial data.

#### `Domain(data map[string]any) CloudflareWorkersEntity`

Create a new `Domain` entity instance. Pass `nil` for no initial data.

#### `DurableObjectsNamespace(data map[string]any) CloudflareWorkersEntity`

Create a new `DurableObjectsNamespace` entity instance. Pass `nil` for no initial data.

#### `EnvironmentVariable(data map[string]any) CloudflareWorkersEntity`

Create a new `EnvironmentVariable` entity instance. Pass `nil` for no initial data.

#### `GitHubIntegration(data map[string]any) CloudflareWorkersEntity`

Create a new `GitHubIntegration` entity instance. Pass `nil` for no initial data.

#### `Hyperdrive(data map[string]any) CloudflareWorkersEntity`

Create a new `Hyperdrive` entity instance. Pass `nil` for no initial data.

#### `ImageRegistry(data map[string]any) CloudflareWorkersEntity`

Create a new `ImageRegistry` entity instance. Pass `nil` for no initial data.

#### `Issue(data map[string]any) CloudflareWorkersEntity`

Create a new `Issue` entity instance. Pass `nil` for no initial data.

#### `Key(data map[string]any) CloudflareWorkersEntity`

Create a new `Key` entity instance. Pass `nil` for no initial data.

#### `LiveTail(data map[string]any) CloudflareWorkersEntity`

Create a new `LiveTail` entity instance. Pass `nil` for no initial data.

#### `MetricsExport(data map[string]any) CloudflareWorkersEntity`

Create a new `MetricsExport` entity instance. Pass `nil` for no initial data.

#### `Namespace(data map[string]any) CloudflareWorkersEntity`

Create a new `Namespace` entity instance. Pass `nil` for no initial data.

#### `Preview(data map[string]any) CloudflareWorkersEntity`

Create a new `Preview` entity instance. Pass `nil` for no initial data.

#### `PreviewDeployment(data map[string]any) CloudflareWorkersEntity`

Create a new `PreviewDeployment` entity instance. Pass `nil` for no initial data.

#### `Query(data map[string]any) CloudflareWorkersEntity`

Create a new `Query` entity instance. Pass `nil` for no initial data.

#### `RepositoryConnection(data map[string]any) CloudflareWorkersEntity`

Create a new `RepositoryConnection` entity instance. Pass `nil` for no initial data.

#### `Rollout(data map[string]any) CloudflareWorkersEntity`

Create a new `Rollout` entity instance. Pass `nil` for no initial data.

#### `SavedQuery(data map[string]any) CloudflareWorkersEntity`

Create a new `SavedQuery` entity instance. Pass `nil` for no initial data.

#### `Script(data map[string]any) CloudflareWorkersEntity`

Create a new `Script` entity instance. Pass `nil` for no initial data.

#### `ScriptSetting(data map[string]any) CloudflareWorkersEntity`

Create a new `ScriptSetting` entity instance. Pass `nil` for no initial data.

#### `Secret(data map[string]any) CloudflareWorkersEntity`

Create a new `Secret` entity instance. Pass `nil` for no initial data.

#### `SecretsStoreDelete(data map[string]any) CloudflareWorkersEntity`

Create a new `SecretsStoreDelete` entity instance. Pass `nil` for no initial data.

#### `SecretsStoreQuota(data map[string]any) CloudflareWorkersEntity`

Create a new `SecretsStoreQuota` entity instance. Pass `nil` for no initial data.

#### `SecretsStoreSecret(data map[string]any) CloudflareWorkersEntity`

Create a new `SecretsStoreSecret` entity instance. Pass `nil` for no initial data.

#### `SecretsStoreStore(data map[string]any) CloudflareWorkersEntity`

Create a new `SecretsStoreStore` entity instance. Pass `nil` for no initial data.

#### `SecretsStoreStoresResponseCollection(data map[string]any) CloudflareWorkersEntity`

Create a new `SecretsStoreStoresResponseCollection` entity instance. Pass `nil` for no initial data.

#### `Setting(data map[string]any) CloudflareWorkersEntity`

Create a new `Setting` entity instance. Pass `nil` for no initial data.

#### `Shared(data map[string]any) CloudflareWorkersEntity`

Create a new `Shared` entity instance. Pass `nil` for no initial data.

#### `Tail(data map[string]any) CloudflareWorkersEntity`

Create a new `Tail` entity instance. Pass `nil` for no initial data.

#### `Token(data map[string]any) CloudflareWorkersEntity`

Create a new `Token` entity instance. Pass `nil` for no initial data.

#### `Trigger(data map[string]any) CloudflareWorkersEntity`

Create a new `Trigger` entity instance. Pass `nil` for no initial data.

#### `Usage(data map[string]any) CloudflareWorkersEntity`

Create a new `Usage` entity instance. Pass `nil` for no initial data.

#### `Value(data map[string]any) CloudflareWorkersEntity`

Create a new `Value` entity instance. Pass `nil` for no initial data.

#### `Version(data map[string]any) CloudflareWorkersEntity`

Create a new `Version` entity instance. Pass `nil` for no initial data.

#### `Worker(data map[string]any) CloudflareWorkersEntity`

Create a new `Worker` entity instance. Pass `nil` for no initial data.

#### `WorkerCronTrigger(data map[string]any) CloudflareWorkersEntity`

Create a new `WorkerCronTrigger` entity instance. Pass `nil` for no initial data.

#### `WorkerDeployment(data map[string]any) CloudflareWorkersEntity`

Create a new `WorkerDeployment` entity instance. Pass `nil` for no initial data.

#### `WorkerEnvironment(data map[string]any) CloudflareWorkersEntity`

Create a new `WorkerEnvironment` entity instance. Pass `nil` for no initial data.

#### `WorkerRoute(data map[string]any) CloudflareWorkersEntity`

Create a new `WorkerRoute` entity instance. Pass `nil` for no initial data.

#### `WorkerScript(data map[string]any) CloudflareWorkersEntity`

Create a new `WorkerScript` entity instance. Pass `nil` for no initial data.

#### `WorkerSubdomain(data map[string]any) CloudflareWorkersEntity`

Create a new `WorkerSubdomain` entity instance. Pass `nil` for no initial data.

#### `WorkerTailLog(data map[string]any) CloudflareWorkersEntity`

Create a new `WorkerTailLog` entity instance. Pass `nil` for no initial data.

#### `WorkersAccountSetting(data map[string]any) CloudflareWorkersEntity`

Create a new `WorkersAccountSetting` entity instance. Pass `nil` for no initial data.

#### `WorkersApiResponseNullResult(data map[string]any) CloudflareWorkersEntity`

Create a new `WorkersApiResponseNullResult` entity instance. Pass `nil` for no initial data.

#### `WorkersCompletedUploadAsset(data map[string]any) CloudflareWorkersEntity`

Create a new `WorkersCompletedUploadAsset` entity instance. Pass `nil` for no initial data.

#### `WorkersCreateAssetsUploadSession(data map[string]any) CloudflareWorkersEntity`

Create a new `WorkersCreateAssetsUploadSession` entity instance. Pass `nil` for no initial data.

#### `WorkersForPlatform(data map[string]any) CloudflareWorkersEntity`

Create a new `WorkersForPlatform` entity instance. Pass `nil` for no initial data.

#### `WorkersKvApiResponseCommonNoResult(data map[string]any) CloudflareWorkersEntity`

Create a new `WorkersKvApiResponseCommonNoResult` entity instance. Pass `nil` for no initial data.

#### `WorkersKvNamespace(data map[string]any) CloudflareWorkersEntity`

Create a new `WorkersKvNamespace` entity instance. Pass `nil` for no initial data.

#### `WorkersNamespaceList(data map[string]any) CloudflareWorkersEntity`

Create a new `WorkersNamespaceList` entity instance. Pass `nil` for no initial data.

#### `WorkersNamespaceScriptDeleteBulk(data map[string]any) CloudflareWorkersEntity`

Create a new `WorkersNamespaceScriptDeleteBulk` entity instance. Pass `nil` for no initial data.

#### `WorkersNamespaceScriptResponseSingle(data map[string]any) CloudflareWorkersEntity`

Create a new `WorkersNamespaceScriptResponseSingle` entity instance. Pass `nil` for no initial data.

#### `WorkersNamespaceSingle(data map[string]any) CloudflareWorkersEntity`

Create a new `WorkersNamespaceSingle` entity instance. Pass `nil` for no initial data.

#### `WorkersPipelinesOther(data map[string]any) CloudflareWorkersEntity`

Create a new `WorkersPipelinesOther` entity instance. Pass `nil` for no initial data.

#### `WorkersScriptAndVersionSetting(data map[string]any) CloudflareWorkersEntity`

Create a new `WorkersScriptAndVersionSetting` entity instance. Pass `nil` for no initial data.

#### `WorkersScriptResponseCollection(data map[string]any) CloudflareWorkersEntity`

Create a new `WorkersScriptResponseCollection` entity instance. Pass `nil` for no initial data.

#### `WorkersScriptResponseSingle(data map[string]any) CloudflareWorkersEntity`

Create a new `WorkersScriptResponseSingle` entity instance. Pass `nil` for no initial data.

#### `WorkersSmartPlacement(data map[string]any) CloudflareWorkersEntity`

Create a new `WorkersSmartPlacement` entity instance. Pass `nil` for no initial data.

#### `WorkersUsageModel(data map[string]any) CloudflareWorkersEntity`

Create a new `WorkersUsageModel` entity instance. Pass `nil` for no initial data.

#### `WorkersVersionsList(data map[string]any) CloudflareWorkersEntity`

Create a new `WorkersVersionsList` entity instance. Pass `nil` for no initial data.

#### `WorkersVersionsSingle(data map[string]any) CloudflareWorkersEntity`

Create a new `WorkersVersionsSingle` entity instance. Pass `nil` for no initial data.

#### `WorkersVersionsUpload(data map[string]any) CloudflareWorkersEntity`

Create a new `WorkersVersionsUpload` entity instance. Pass `nil` for no initial data.

#### `Workflow(data map[string]any) CloudflareWorkersEntity`

Create a new `Workflow` entity instance. Pass `nil` for no initial data.

#### `OptionsMap() map[string]any`

Return a deep copy of the current SDK options.

#### `GetUtility() *Utility`

Return a copy of the SDK utility object.

#### `Direct(fetchargs map[string]any) (map[string]any, error)`

Make a direct HTTP request to any API endpoint.

**Parameters:**

| Name | Type | Description |
| --- | --- | --- |
| `fetchargs["path"]` | `string` | URL path with optional `{param}` placeholders. |
| `fetchargs["method"]` | `string` | HTTP method (default: `"GET"`). |
| `fetchargs["params"]` | `map[string]any` | Path parameter values for `{param}` substitution. |
| `fetchargs["query"]` | `map[string]any` | Query string parameters. |
| `fetchargs["headers"]` | `map[string]any` | Request headers (merged with defaults). |
| `fetchargs["body"]` | `any` | Request body (maps are JSON-serialized). |
| `fetchargs["ctrl"]` | `map[string]any` | Control options (e.g. `map[string]any{"explain": true}`). |

**Returns:** `(map[string]any, error)`

#### `Prepare(fetchargs map[string]any) (map[string]any, error)`

Prepare a fetch definition without sending the request. Accepts the
same parameters as `Direct()`.

**Returns:** `(map[string]any, error)`


---

## AccountEntity

```go
account := client.Account(nil)
fmt.Println(account.GetName()) // "account"
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `id` | `string` | No |  |

### Operations

#### `List(reqmatch, ctrl map[string]any) (any, error)`

List entities matching the given criteria. Returns an array.

```go
results, err := client.Account(nil).List(nil, nil)
if err != nil {
    panic(err)
}
fmt.Println(results)
```

### Common Methods

#### `Data(args ...any) any`

Get or set the entity data. When called with data, sets the entity's
internal data and returns the current data. When called without
arguments, returns a copy of the current data.

#### `Match(args ...any) any`

Get or set the entity match criteria. Works the same as `Data()`.

#### `Make() Entity`

Create a new `AccountEntity` instance with the same client and
options.

#### `GetName() string`

Return the entity name.


---

## ApplicationEntity

```go
application := client.Application(nil)
fmt.Println(application.GetName()) // "application"
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `configuration` | `map[string]any` | No | Application configuration fields you can change without creating a rollout. |
| `constraints` | `map[string]any` | No |  |
| `errors` | `[]any` | Yes |  |
| `id` | `string` | No |  |
| `max_instances` | `int` | No | Maximum number of instances that an autoscaling application can run. |
| `messages` | `[]any` | Yes |  |
| `observability` | `any` | No | Top-level application observability settings. |
| `result` | `any` | Yes | The public Containers API returns an application. |
| `result_info` | `map[string]any` | Yes | Cursor pagination details for a v4 API list response. |
| `rollout_active_grace_period` | `int` | No | Grace period for active instances to stay alive before becoming eligible for shutdown signal due to a rollout, in seconds. |
| `success` | `bool` | Yes | Whether the API call was successful. |

### Operations

#### `List(reqmatch, ctrl map[string]any) (any, error)`

List entities matching the given criteria. Returns an array.

```go
results, err := client.Application(nil).List(nil, nil)
if err != nil {
    panic(err)
}
fmt.Println(results)
```

#### `Load(reqmatch, ctrl map[string]any) (any, error)`

Load a single entity matching the given criteria.

```go
result, err := client.Application(nil).Load(map[string]any{"id": "application_id", "account_id": "account_id"}, nil)
if err != nil {
    panic(err)
}
fmt.Println(result)
```

#### `Create(reqdata, ctrl map[string]any) (any, error)`

Create a new entity with the given data.

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

#### `Update(reqdata, ctrl map[string]any) (any, error)`

Update an existing entity. The data must include the entity `id`.

```go
result, err := client.Application(nil).Update(map[string]any{
    "id": "application_id",
    "account_id": "account_id",
    // Fields to update
}, nil)
if err != nil {
    panic(err)
}
fmt.Println(result)
```

#### `Remove(reqmatch, ctrl map[string]any) (any, error)`

Remove the entity matching the given criteria.

```go
result, err := client.Application(nil).Remove(map[string]any{"id": "application_id", "account_id": "account_id"}, nil)
if err != nil {
    panic(err)
}
fmt.Println(result)
```

### Common Methods

#### `Data(args ...any) any`

Get or set the entity data. When called with data, sets the entity's
internal data and returns the current data. When called without
arguments, returns a copy of the current data.

#### `Match(args ...any) any`

Get or set the entity match criteria. Works the same as `Data()`.

#### `Make() Entity`

Create a new `ApplicationEntity` instance with the same client and
options.

#### `GetName() string`

Return the entity name.


---

## BrapiEntity

```go
brapi := client.Brapi(nil)
fmt.Println(brapi.GetName()) // "brapi"
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `Browser` | `string` | Yes | Browser name and version. |
| `ProtocolVersion` | `string` | Yes | Chrome DevTools Protocol version. |
| `UserAgent` | `string` | Yes | User agent string. |
| `V8Version` | `string` | Yes | V8 JavaScript engine version. |
| `WebKitVersion` | `string` | Yes | WebKit version. |
| `actionTimeout` | `float64` | No | The maximum duration allowed for the browser action to complete after the page has loaded (such as taking screenshots, extracting content, or generating PDFs). |
| `addScriptTag` | `[]any` | No | Adds a script element into the page with the desired URL or content. |
| `addStyleTag` | `[]any` | No | Adds a `<link rel="stylesheet">` tag into the page with the desired URL or a `<style type="text/css">` tag with the content. |
| `allowRequestPattern` | `[]any` | No | Only allow requests that match the provided regex patterns, eg. |
| `allowResourceTypes` | `[]any` | No | Only allow requests that match the provided resource types, eg. |
| `authenticate` | `map[string]any` | Yes | Provide credentials for HTTP authentication. |
| `bestAttempt` | `bool` | No | Attempt to proceed when 'awaited' events fail or timeout. |
| `closeReason` | `float64` | No | Reason code for session closure. |
| `closeReasonText` | `string` | No | Human-readable close reason. |
| `commands` | `[]any` | No | Available commands. |
| `connectionEndTime` | `float64` | No | Connection end time. |
| `connectionId` | `string` | No | Connection ID. |
| `connectionStartTime` | `float64` | No | Connection start time. |
| `cookies` | `[]any` | No | Check [options](https://pptr.dev/api/puppeteer.page.setcookie). |
| `custom_ai` | `[]any` | No | Optional list of custom AI models to use for the request. |
| `dependencies` | `[]any` | No | Domain dependencies. |
| `description` | `string` | No | Target description. |
| `devtoolsFrontendUrl` | `string` | No | DevTools frontend URL. |
| `domain` | `string` | Yes | Domain name. |
| `elements` | `[]any` | Yes |  |
| `emulateMediaType` | `string` | No |  |
| `endTime` | `float64` | No | Session end time. |
| `errors` | `[]any` | No |  |
| `events` | `[]any` | No | Available events. |
| `excludeExternalLinks` | `bool` | No |  |
| `experimental` | `bool` | No | Whether this domain is experimental. |
| `formats` | `[]any` | No |  |
| `gotoOptions` | `map[string]any` | No | Check [options](https://pptr.dev/api/puppeteer.gotooptions). |
| `guardrails` | `map[string]any` | No |  |
| `html` | `string` | No | Set the content of the page, eg: `<h1>Hello World!!</h1>`. |
| `id` | `string` | Yes | Target ID. |
| `interestingOnly` | `bool` | No |  |
| `lastUpdated` | `float64` | No | Last updated timestamp. |
| `message` | `string` | Yes | Target activated. |
| `meta` | `map[string]any` | Yes |  |
| `pdfOptions` | `map[string]any` | No | Check [options](https://pptr.dev/api/puppeteer.pdfoptions). |
| `prompt` | `string` | No |  |
| `rejectRequestPattern` | `[]any` | No | Block undesired requests that match the provided regex patterns, eg. |
| `rejectResourceTypes` | `[]any` | No | Block undesired requests that match the provided resource types, eg. |
| `response_format` | `map[string]any` | Yes |  |
| `result` | `map[string]any` | Yes | HTML content. |
| `root` | `string` | No |  |
| `screenshotOptions` | `map[string]any` | No | Check [options](https://pptr.dev/api/puppeteer.screenshotoptions). |
| `scrollPage` | `bool` | No |  |
| `selector` | `string` | No |  |
| `sessionId` | `string` | Yes | Session ID. |
| `setExtraHTTPHeaders` | `map[string]any` | No |  |
| `setJavaScriptEnabled` | `bool` | No |  |
| `startTime` | `float64` | No | Session start time. |
| `success` | `bool` | Yes | Response status. |
| `title` | `string` | No | Title of the target. |
| `type` | `string` | Yes | Target type (page, background_page, worker, etc.). |
| `types` | `[]any` | No | Type definitions. |
| `url` | `string` | Yes | URL of the target. |
| `userAgent` | `string` | No |  |
| `viewport` | `map[string]any` | Yes | Check [options](https://pptr.dev/api/puppeteer.page.setviewport). |
| `visibleLinksOnly` | `bool` | No |  |
| `waitForSelector` | `map[string]any` | Yes | Wait for the selector to appear in page. |
| `waitForTimeout` | `float64` | No | Waits for a specified timeout before continuing. |
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

#### `List(reqmatch, ctrl map[string]any) (any, error)`

List entities matching the given criteria. Returns an array.

```go
results, err := client.Brapi(nil).List(nil, nil)
if err != nil {
    panic(err)
}
fmt.Println(results)
```

#### `Load(reqmatch, ctrl map[string]any) (any, error)`

Load a single entity matching the given criteria.

```go
result, err := client.Brapi(nil).Load(map[string]any{"account_id": "account_id"}, nil)
if err != nil {
    panic(err)
}
fmt.Println(result)
```

#### `Create(reqdata, ctrl map[string]any) (any, error)`

Create a new entity with the given data.

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

#### `Update(reqdata, ctrl map[string]any) (any, error)`

Update an existing entity. The data must include the entity `id`.

```go
result, err := client.Brapi(nil).Update(map[string]any{
    "account_id": "account_id",
    "browser_id": "browser_id",
    // Fields to update
}, nil)
if err != nil {
    panic(err)
}
fmt.Println(result)
```

#### `Remove(reqmatch, ctrl map[string]any) (any, error)`

Remove the entity matching the given criteria.

```go
result, err := client.Brapi(nil).Remove(map[string]any{"account_id": "account_id"}, nil)
if err != nil {
    panic(err)
}
fmt.Println(result)
```

### Common Methods

#### `Data(args ...any) any`

Get or set the entity data. When called with data, sets the entity's
internal data and returns the current data. When called without
arguments, returns a copy of the current data.

#### `Match(args ...any) any`

Get or set the entity match criteria. Works the same as `Data()`.

#### `Make() Entity`

Create a new `BrapiEntity` instance with the same client and
options.

#### `GetName() string`

Return the entity name.


---

## BuildEntity

```go
build := client.Build(nil)
fmt.Println(build.GetName()) // "build"
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `errors` | `[]any` | Yes |  |
| `id` | `string` | No |  |
| `messages` | `[]any` | Yes |  |
| `result` | `map[string]any` | Yes |  |
| `result_info` | `map[string]any` | No |  |
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

#### `List(reqmatch, ctrl map[string]any) (any, error)`

List entities matching the given criteria. Returns an array.

```go
results, err := client.Build(nil).List(nil, nil)
if err != nil {
    panic(err)
}
fmt.Println(results)
```

#### `Load(reqmatch, ctrl map[string]any) (any, error)`

Load a single entity matching the given criteria.

```go
result, err := client.Build(nil).Load(map[string]any{"id": "build_id", "account_id": "account_id"}, nil)
if err != nil {
    panic(err)
}
fmt.Println(result)
```

#### `Update(reqdata, ctrl map[string]any) (any, error)`

Update an existing entity. The data must include the entity `id`.

```go
result, err := client.Build(nil).Update(map[string]any{
    "id": "build_id",
    "account_id": "account_id",
    // Fields to update
}, nil)
if err != nil {
    panic(err)
}
fmt.Println(result)
```

### Common Methods

#### `Data(args ...any) any`

Get or set the entity data. When called with data, sets the entity's
internal data and returns the current data. When called without
arguments, returns a copy of the current data.

#### `Match(args ...any) any`

Get or set the entity match criteria. Works the same as `Data()`.

#### `Make() Entity`

Create a new `BuildEntity` instance with the same client and
options.

#### `GetName() string`

Return the entity name.


---

## BuildTokenEntity

```go
buildToken := client.BuildToken(nil)
fmt.Println(buildToken.GetName()) // "build_token"
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `build_token_name` | `string` | Yes |  |
| `build_token_secret` | `string` | Yes |  |
| `cloudflare_token_id` | `string` | Yes |  |
| `errors` | `[]any` | Yes |  |
| `messages` | `[]any` | Yes |  |
| `result` | `map[string]any` | Yes |  |
| `result_info` | `map[string]any` | No |  |
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

#### `List(reqmatch, ctrl map[string]any) (any, error)`

List entities matching the given criteria. Returns an array.

```go
results, err := client.BuildToken(nil).List(nil, nil)
if err != nil {
    panic(err)
}
fmt.Println(results)
```

#### `Create(reqdata, ctrl map[string]any) (any, error)`

Create a new entity with the given data.

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

### Common Methods

#### `Data(args ...any) any`

Get or set the entity data. When called with data, sets the entity's
internal data and returns the current data. When called without
arguments, returns a copy of the current data.

#### `Match(args ...any) any`

Get or set the entity match criteria. Works the same as `Data()`.

#### `Make() Entity`

Create a new `BuildTokenEntity` instance with the same client and
options.

#### `GetName() string`

Return the entity name.


---

## BuildsApiEntity

```go
buildsApi := client.BuildsApi(nil)
fmt.Println(buildsApi.GetName()) // "builds_api"
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `errors` | `[]any` | Yes |  |
| `messages` | `[]any` | Yes |  |
| `result` | `map[string]any` | Yes |  |
| `result_info` | `map[string]any` | No |  |
| `success` | `bool` | Yes |  |

### Operations

#### `Create(reqdata, ctrl map[string]any) (any, error)`

Create a new entity with the given data.

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

#### `Remove(reqmatch, ctrl map[string]any) (any, error)`

Remove the entity matching the given criteria.

```go
result, err := client.BuildsApi(nil).Remove(map[string]any{"account_id": "account_id", "environment_variable_key": "environment_variable_key", "trigger_id": "trigger_id"}, nil)
if err != nil {
    panic(err)
}
fmt.Println(result)
```

### Common Methods

#### `Data(args ...any) any`

Get or set the entity data. When called with data, sets the entity's
internal data and returns the current data. When called without
arguments, returns a copy of the current data.

#### `Match(args ...any) any`

Get or set the entity match criteria. Works the same as `Data()`.

#### `Make() Entity`

Create a new `BuildsApiEntity` instance with the same client and
options.

#### `GetName() string`

Return the entity name.


---

## ConnectionEntity

```go
connection := client.Connection(nil)
fmt.Println(connection.GetName()) // "connection"
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `id` | `string` | No |  |

### Operations

#### `Remove(reqmatch, ctrl map[string]any) (any, error)`

Remove the entity matching the given criteria.

```go
result, err := client.Connection(nil).Remove(map[string]any{"account_id": "account_id", "id": "id"}, nil)
if err != nil {
    panic(err)
}
fmt.Println(result)
```

### Common Methods

#### `Data(args ...any) any`

Get or set the entity data. When called with data, sets the entity's
internal data and returns the current data. When called without
arguments, returns a copy of the current data.

#### `Match(args ...any) any`

Get or set the entity match criteria. Works the same as `Data()`.

#### `Make() Entity`

Create a new `ConnectionEntity` instance with the same client and
options.

#### `GetName() string`

Return the entity name.


---

## ContainerImageEntity

```go
containerImage := client.ContainerImage(nil)
fmt.Println(containerImage.GetName()) // "container_image"
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `image` | `string` | Yes | Image url. |

### Operations

#### `Create(reqdata, ctrl map[string]any) (any, error)`

Create a new entity with the given data.

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

### Common Methods

#### `Data(args ...any) any`

Get or set the entity data. When called with data, sets the entity's
internal data and returns the current data. When called without
arguments, returns a copy of the current data.

#### `Match(args ...any) any`

Get or set the entity match criteria. Works the same as `Data()`.

#### `Make() Entity`

Create a new `ContainerImageEntity` instance with the same client and
options.

#### `GetName() string`

Return the entity name.


---

## ContainerInstanceEntity

```go
containerInstance := client.ContainerInstance(nil)
fmt.Println(containerInstance.GetName()) // "container_instance"
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `errors` | `[]any` | Yes |  |
| `id` | `string` | No |  |
| `messages` | `[]any` | Yes |  |
| `result` | `any` | Yes | A container instance belonging to an application. |
| `result_info` | `map[string]any` | Yes | Cursor pagination details for a v4 API list response. |
| `success` | `bool` | Yes | Whether the API call was successful. |

### Operations

#### `List(reqmatch, ctrl map[string]any) (any, error)`

List entities matching the given criteria. Returns an array.

```go
results, err := client.ContainerInstance(nil).List(nil, nil)
if err != nil {
    panic(err)
}
fmt.Println(results)
```

#### `Load(reqmatch, ctrl map[string]any) (any, error)`

Load a single entity matching the given criteria.

```go
result, err := client.ContainerInstance(nil).Load(map[string]any{"id": "container_instance_id", "account_id": "account_id", "application_id": "application_id"}, nil)
if err != nil {
    panic(err)
}
fmt.Println(result)
```

### Common Methods

#### `Data(args ...any) any`

Get or set the entity data. When called with data, sets the entity's
internal data and returns the current data. When called without
arguments, returns a copy of the current data.

#### `Match(args ...any) any`

Get or set the entity match criteria. Works the same as `Data()`.

#### `Make() Entity`

Create a new `ContainerInstanceEntity` instance with the same client and
options.

#### `GetName() string`

Return the entity name.


---

## DeployHookEntity

```go
deployHook := client.DeployHook(nil)
fmt.Println(deployHook.GetName()) // "deploy_hook"
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `branch` | `string` | Yes | Git branch name. |
| `deploy_hook_name` | `string` | Yes | Deploy hook name (1-58 characters). |
| `errors` | `[]any` | Yes |  |
| `id` | `string` | No |  |
| `messages` | `[]any` | Yes |  |
| `result` | `map[string]any` | Yes |  |
| `result_info` | `map[string]any` | No |  |
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

#### `List(reqmatch, ctrl map[string]any) (any, error)`

List entities matching the given criteria. Returns an array.

```go
results, err := client.DeployHook(nil).List(nil, nil)
if err != nil {
    panic(err)
}
fmt.Println(results)
```

#### `Load(reqmatch, ctrl map[string]any) (any, error)`

Load a single entity matching the given criteria.

```go
result, err := client.DeployHook(nil).Load(map[string]any{"id": "deploy_hook_id", "account_id": "account_id", "worker_id": "worker_id"}, nil)
if err != nil {
    panic(err)
}
fmt.Println(result)
```

#### `Create(reqdata, ctrl map[string]any) (any, error)`

Create a new entity with the given data.

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

#### `Update(reqdata, ctrl map[string]any) (any, error)`

Update an existing entity. The data must include the entity `id`.

```go
result, err := client.DeployHook(nil).Update(map[string]any{
    "id": "deploy_hook_id",
    "account_id": "account_id",
    "worker_id": "worker_id",
    // Fields to update
}, nil)
if err != nil {
    panic(err)
}
fmt.Println(result)
```

#### `Remove(reqmatch, ctrl map[string]any) (any, error)`

Remove the entity matching the given criteria.

```go
result, err := client.DeployHook(nil).Remove(map[string]any{"id": "deploy_hook_id", "account_id": "account_id", "worker_id": "worker_id"}, nil)
if err != nil {
    panic(err)
}
fmt.Println(result)
```

### Common Methods

#### `Data(args ...any) any`

Get or set the entity data. When called with data, sets the entity's
internal data and returns the current data. When called without
arguments, returns a copy of the current data.

#### `Match(args ...any) any`

Get or set the entity match criteria. Works the same as `Data()`.

#### `Make() Entity`

Create a new `DeployHookEntity` instance with the same client and
options.

#### `GetName() string`

Return the entity name.


---

## DeploymentEntity

```go
deployment := client.Deployment(nil)
fmt.Println(deployment.GetName()) // "deployment"
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `id` | `string` | No |  |

### Operations

#### `Remove(reqmatch, ctrl map[string]any) (any, error)`

Remove the entity matching the given criteria.

```go
result, err := client.Deployment(nil).Remove(map[string]any{"account_id": "account_id", "id": "id"}, nil)
if err != nil {
    panic(err)
}
fmt.Println(result)
```

### Common Methods

#### `Data(args ...any) any`

Get or set the entity data. When called with data, sets the entity's
internal data and returns the current data. When called without
arguments, returns a copy of the current data.

#### `Match(args ...any) any`

Get or set the entity match criteria. Works the same as `Data()`.

#### `Make() Entity`

Create a new `DeploymentEntity` instance with the same client and
options.

#### `GetName() string`

Return the entity name.


---

## DestinationEntity

```go
destination := client.Destination(nil)
fmt.Println(destination.GetName()) // "destination"
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `configuration` | `map[string]any` | Yes |  |
| `enabled` | `bool` | Yes |  |
| `errors` | `[]any` | Yes |  |
| `id` | `string` | No |  |
| `messages` | `[]any` | Yes |  |
| `name` | `string` | Yes |  |
| `result` | `map[string]any` | Yes |  |
| `skipPreflightCheck` | `bool` | No |  |
| `success` | `bool` | Yes |  |

### Operations

#### `List(reqmatch, ctrl map[string]any) (any, error)`

List entities matching the given criteria. Returns an array.

```go
results, err := client.Destination(nil).List(nil, nil)
if err != nil {
    panic(err)
}
fmt.Println(results)
```

#### `Create(reqdata, ctrl map[string]any) (any, error)`

Create a new entity with the given data.

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

#### `Update(reqdata, ctrl map[string]any) (any, error)`

Update an existing entity. The data must include the entity `id`.

```go
result, err := client.Destination(nil).Update(map[string]any{
    "account_id": "account_id",
    "id": "id",
    // Fields to update
}, nil)
if err != nil {
    panic(err)
}
fmt.Println(result)
```

#### `Remove(reqmatch, ctrl map[string]any) (any, error)`

Remove the entity matching the given criteria.

```go
result, err := client.Destination(nil).Remove(map[string]any{"account_id": "account_id", "id": "id"}, nil)
if err != nil {
    panic(err)
}
fmt.Println(result)
```

### Common Methods

#### `Data(args ...any) any`

Get or set the entity data. When called with data, sets the entity's
internal data and returns the current data. When called without
arguments, returns a copy of the current data.

#### `Match(args ...any) any`

Get or set the entity match criteria. Works the same as `Data()`.

#### `Make() Entity`

Create a new `DestinationEntity` instance with the same client and
options.

#### `GetName() string`

Return the entity name.


---

## DomainEntity

```go
domain := client.Domain(nil)
fmt.Println(domain.GetName()) // "domain"
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `errors` | `[]any` | Yes |  |
| `id` | `string` | No |  |
| `messages` | `[]any` | Yes |  |
| `result` | `map[string]any` | Yes |  |
| `success` | `bool` | Yes | Whether the API call was successful. |

### Operations

#### `List(reqmatch, ctrl map[string]any) (any, error)`

List entities matching the given criteria. Returns an array.

```go
results, err := client.Domain(nil).List(nil, nil)
if err != nil {
    panic(err)
}
fmt.Println(results)
```

#### `Load(reqmatch, ctrl map[string]any) (any, error)`

Load a single entity matching the given criteria.

```go
result, err := client.Domain(nil).Load(map[string]any{"id": "domain_id", "account_id": "account_id"}, nil)
if err != nil {
    panic(err)
}
fmt.Println(result)
```

#### `Update(reqdata, ctrl map[string]any) (any, error)`

Update an existing entity. The data must include the entity `id`.

```go
result, err := client.Domain(nil).Update(map[string]any{
    "id": "domain_id",
    "account_id": "account_id",
    // Fields to update
}, nil)
if err != nil {
    panic(err)
}
fmt.Println(result)
```

#### `Remove(reqmatch, ctrl map[string]any) (any, error)`

Remove the entity matching the given criteria.

```go
result, err := client.Domain(nil).Remove(map[string]any{"id": "domain_id", "account_id": "account_id"}, nil)
if err != nil {
    panic(err)
}
fmt.Println(result)
```

### Common Methods

#### `Data(args ...any) any`

Get or set the entity data. When called with data, sets the entity's
internal data and returns the current data. When called without
arguments, returns a copy of the current data.

#### `Match(args ...any) any`

Get or set the entity match criteria. Works the same as `Data()`.

#### `Make() Entity`

Create a new `DomainEntity` instance with the same client and
options.

#### `GetName() string`

Return the entity name.


---

## DurableObjectsNamespaceEntity

```go
durableObjectsNamespace := client.DurableObjectsNamespace(nil)
fmt.Println(durableObjectsNamespace.GetName()) // "durable_objects_namespace"
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `result` | `[]any` | No |  |
| `result_info` | `map[string]any` | No |  |

### Operations

#### `List(reqmatch, ctrl map[string]any) (any, error)`

List entities matching the given criteria. Returns an array.

```go
results, err := client.DurableObjectsNamespace(nil).List(nil, nil)
if err != nil {
    panic(err)
}
fmt.Println(results)
```

#### `Create(reqdata, ctrl map[string]any) (any, error)`

Create a new entity with the given data.

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

### Common Methods

#### `Data(args ...any) any`

Get or set the entity data. When called with data, sets the entity's
internal data and returns the current data. When called without
arguments, returns a copy of the current data.

#### `Match(args ...any) any`

Get or set the entity match criteria. Works the same as `Data()`.

#### `Make() Entity`

Create a new `DurableObjectsNamespaceEntity` instance with the same client and
options.

#### `GetName() string`

Return the entity name.


---

## EnvironmentVariableEntity

```go
environmentVariable := client.EnvironmentVariable(nil)
fmt.Println(environmentVariable.GetName()) // "environment_variable"
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `errors` | `[]any` | Yes |  |
| `messages` | `[]any` | Yes |  |
| `result` | `map[string]any` | Yes |  |
| `result_info` | `map[string]any` | No |  |
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

#### `List(reqmatch, ctrl map[string]any) (any, error)`

List entities matching the given criteria. Returns an array.

```go
results, err := client.EnvironmentVariable(nil).List(nil, nil)
if err != nil {
    panic(err)
}
fmt.Println(results)
```

#### `Update(reqdata, ctrl map[string]any) (any, error)`

Update an existing entity. The data must include the entity `id`.

```go
result, err := client.EnvironmentVariable(nil).Update(map[string]any{
    "account_id": "account_id",
    "trigger_id": "trigger_id",
    // Fields to update
}, nil)
if err != nil {
    panic(err)
}
fmt.Println(result)
```

### Common Methods

#### `Data(args ...any) any`

Get or set the entity data. When called with data, sets the entity's
internal data and returns the current data. When called without
arguments, returns a copy of the current data.

#### `Match(args ...any) any`

Get or set the entity match criteria. Works the same as `Data()`.

#### `Make() Entity`

Create a new `EnvironmentVariableEntity` instance with the same client and
options.

#### `GetName() string`

Return the entity name.


---

## GitHubIntegrationEntity

```go
gitHubIntegration := client.GitHubIntegration(nil)
fmt.Println(gitHubIntegration.GetName()) // "git_hub_integration"
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `errors` | `[]any` | Yes |  |
| `messages` | `[]any` | Yes |  |
| `result` | `map[string]any` | Yes |  |
| `result_info` | `map[string]any` | No |  |
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

#### `List(reqmatch, ctrl map[string]any) (any, error)`

List entities matching the given criteria. Returns an array.

```go
results, err := client.GitHubIntegration(nil).List(nil, nil)
if err != nil {
    panic(err)
}
fmt.Println(results)
```

### Common Methods

#### `Data(args ...any) any`

Get or set the entity data. When called with data, sets the entity's
internal data and returns the current data. When called without
arguments, returns a copy of the current data.

#### `Match(args ...any) any`

Get or set the entity match criteria. Works the same as `Data()`.

#### `Make() Entity`

Create a new `GitHubIntegrationEntity` instance with the same client and
options.

#### `GetName() string`

Return the entity name.


---

## HyperdriveEntity

```go
hyperdrive := client.Hyperdrive(nil)
fmt.Println(hyperdrive.GetName()) // "hyperdrive"
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `caching` | `map[string]any` | No |  |
| `created_on` | `string` | No | Defines the creation time of the Hyperdrive configuration. |
| `id` | `string` | Yes | Define configurations using a unique string identifier. |
| `modified_on` | `string` | No | Defines the last modified time of the Hyperdrive configuration. |
| `mtls` | `map[string]any` | No | mTLS configuration for the origin connection. |
| `name` | `string` | Yes | The name of the Hyperdrive configuration. |
| `origin` | `map[string]any` | Yes | Combines database connection fields with exactly one supported network location. |
| `origin_connection_limit` | `int` | No | The (soft) maximum number of connections the Hyperdrive is allowed to make to the origin database. |
| `restarted_on` | `string` | No | Defines the last time the Hyperdrive connection pool was explicitly restarted via the restart endpoint. |
| `result` | `map[string]any` | Yes |  |

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

#### `List(reqmatch, ctrl map[string]any) (any, error)`

List entities matching the given criteria. Returns an array.

```go
results, err := client.Hyperdrive(nil).List(nil, nil)
if err != nil {
    panic(err)
}
fmt.Println(results)
```

#### `Load(reqmatch, ctrl map[string]any) (any, error)`

Load a single entity matching the given criteria.

```go
result, err := client.Hyperdrive(nil).Load(map[string]any{"account_id": "account_id", "hyperdrive_id": "hyperdrive_id"}, nil)
if err != nil {
    panic(err)
}
fmt.Println(result)
```

#### `Create(reqdata, ctrl map[string]any) (any, error)`

Create a new entity with the given data.

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

#### `Update(reqdata, ctrl map[string]any) (any, error)`

Update an existing entity. The data must include the entity `id`.

```go
result, err := client.Hyperdrive(nil).Update(map[string]any{
    "account_id": "account_id",
    "hyperdrive_id": "hyperdrive_id",
    // Fields to update
}, nil)
if err != nil {
    panic(err)
}
fmt.Println(result)
```

#### `Remove(reqmatch, ctrl map[string]any) (any, error)`

Remove the entity matching the given criteria.

```go
result, err := client.Hyperdrive(nil).Remove(map[string]any{"account_id": "account_id", "hyperdrive_id": "hyperdrive_id"}, nil)
if err != nil {
    panic(err)
}
fmt.Println(result)
```

### Common Methods

#### `Data(args ...any) any`

Get or set the entity data. When called with data, sets the entity's
internal data and returns the current data. When called without
arguments, returns a copy of the current data.

#### `Match(args ...any) any`

Get or set the entity match criteria. Works the same as `Data()`.

#### `Make() Entity`

Create a new `HyperdriveEntity` instance with the same client and
options.

#### `GetName() string`

Return the entity name.


---

## ImageRegistryEntity

```go
imageRegistry := client.ImageRegistry(nil)
fmt.Println(imageRegistry.GetName()) // "image_registry"
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `auth` | `map[string]any` | Yes | Credentials for authenticating to a private external image registry. |
| `domain` | `string` | Yes | Hostname of the private registry, without a scheme or image path. |
| `errors` | `[]any` | Yes |  |
| `expiration_minutes` | `int` | No | The number of minutes Cloudflare managed registry credentials stay valid. |
| `id` | `string` | No |  |
| `is_public` | `bool` | No | Omit this field or set it to `false`. |
| `kind` | `any` | Yes | Registry provider. |
| `messages` | `[]any` | Yes |  |
| `permissions` | `[]any` | No | The permissions for Cloudflare managed registry credentials. |
| `result` | `[]any` | Yes |  |
| `success` | `bool` | Yes | Whether the API call was successful. |

### Operations

#### `List(reqmatch, ctrl map[string]any) (any, error)`

List entities matching the given criteria. Returns an array.

```go
results, err := client.ImageRegistry(nil).List(nil, nil)
if err != nil {
    panic(err)
}
fmt.Println(results)
```

#### `Create(reqdata, ctrl map[string]any) (any, error)`

Create a new entity with the given data.

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

#### `Remove(reqmatch, ctrl map[string]any) (any, error)`

Remove the entity matching the given criteria.

```go
result, err := client.ImageRegistry(nil).Remove(map[string]any{"account_id": "account_id", "id": "id"}, nil)
if err != nil {
    panic(err)
}
fmt.Println(result)
```

### Common Methods

#### `Data(args ...any) any`

Get or set the entity data. When called with data, sets the entity's
internal data and returns the current data. When called without
arguments, returns a copy of the current data.

#### `Match(args ...any) any`

Get or set the entity match criteria. Works the same as `Data()`.

#### `Make() Entity`

Create a new `ImageRegistryEntity` instance with the same client and
options.

#### `GetName() string`

Return the entity name.


---

## IssueEntity

```go
issue := client.Issue(nil)
fmt.Println(issue.GetName()) // "issue"
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `afterInactivitySeconds` | `int` | No |  |
| `afterOccurrences` | `int` | No |  |
| `enabled` | `bool` | No |  |
| `errors` | `[]any` | Yes |  |
| `id` | `string` | No |  |
| `issueIds` | `[]any` | Yes |  |
| `messages` | `[]any` | Yes |  |
| `name` | `string` | No |  |
| `policyId` | `string` | Yes |  |
| `result` | `map[string]any` | Yes |  |
| `result_info` | `map[string]any` | Yes |  |
| `service` | `string` | No |  |
| `status` | `string` | No |  |
| `success` | `bool` | Yes |  |
| `title` | `string` | No |  |

### Operations

#### `List(reqmatch, ctrl map[string]any) (any, error)`

List entities matching the given criteria. Returns an array.

```go
results, err := client.Issue(nil).List(nil, nil)
if err != nil {
    panic(err)
}
fmt.Println(results)
```

#### `Load(reqmatch, ctrl map[string]any) (any, error)`

Load a single entity matching the given criteria.

```go
result, err := client.Issue(nil).Load(map[string]any{"id": "issue_id", "account_id": "account_id"}, nil)
if err != nil {
    panic(err)
}
fmt.Println(result)
```

#### `Create(reqdata, ctrl map[string]any) (any, error)`

Create a new entity with the given data.

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

#### `Update(reqdata, ctrl map[string]any) (any, error)`

Update an existing entity. The data must include the entity `id`.

```go
result, err := client.Issue(nil).Update(map[string]any{
    "id": "issue_id",
    "account_id": "account_id",
    "automation_id": "automation_id",
    // Fields to update
}, nil)
if err != nil {
    panic(err)
}
fmt.Println(result)
```

#### `Remove(reqmatch, ctrl map[string]any) (any, error)`

Remove the entity matching the given criteria.

```go
result, err := client.Issue(nil).Remove(map[string]any{"account_id": "account_id"}, nil)
if err != nil {
    panic(err)
}
fmt.Println(result)
```

### Common Methods

#### `Data(args ...any) any`

Get or set the entity data. When called with data, sets the entity's
internal data and returns the current data. When called without
arguments, returns a copy of the current data.

#### `Match(args ...any) any`

Get or set the entity match criteria. Works the same as `Data()`.

#### `Make() Entity`

Create a new `IssueEntity` instance with the same client and
options.

#### `GetName() string`

Return the entity name.


---

## KeyEntity

```go
key := client.Key(nil)
fmt.Println(key.GetName()) // "key"
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `datasets` | `[]any` | No | Leave this empty to use the default datasets |
| `errors` | `[]any` | Yes |  |
| `filters` | `[]any` | No | Apply filters to narrow key discovery. |
| `from` | `float64` | No |  |
| `keyNeedle` | `map[string]any` | Yes | If the user suggests a key, use this to narrow down the list of keys returned. |
| `limit` | `float64` | No | Advanced usage: set limit=1000+ to retrieve comprehensive key options without needing additional filtering. |
| `messages` | `[]any` | Yes |  |
| `needle` | `map[string]any` | Yes | Search for a specific substring in any of the events |
| `result` | `[]any` | Yes |  |
| `success` | `bool` | Yes |  |
| `to` | `float64` | No |  |

### Operations

#### `Create(reqdata, ctrl map[string]any) (any, error)`

Create a new entity with the given data.

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

### Common Methods

#### `Data(args ...any) any`

Get or set the entity data. When called with data, sets the entity's
internal data and returns the current data. When called without
arguments, returns a copy of the current data.

#### `Match(args ...any) any`

Get or set the entity match criteria. Works the same as `Data()`.

#### `Make() Entity`

Create a new `KeyEntity` instance with the same client and
options.

#### `GetName() string`

Return the entity name.


---

## LiveTailEntity

```go
liveTail := client.LiveTail(nil)
fmt.Println(liveTail.GetName()) // "live_tail"
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `errors` | `[]any` | Yes |  |
| `filterCombination` | `string` | No | Set a flag to describe how to combine the filters on the query. |
| `filters` | `[]any` | No | Apply filters to the query. |
| `messages` | `[]any` | Yes |  |
| `result` | `map[string]any` | Yes |  |
| `scriptId` | `string` | No |  |
| `success` | `bool` | Yes |  |

### Operations

#### `Create(reqdata, ctrl map[string]any) (any, error)`

Create a new entity with the given data.

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

### Common Methods

#### `Data(args ...any) any`

Get or set the entity data. When called with data, sets the entity's
internal data and returns the current data. When called without
arguments, returns a copy of the current data.

#### `Match(args ...any) any`

Get or set the entity match criteria. Works the same as `Data()`.

#### `Make() Entity`

Create a new `LiveTailEntity` instance with the same client and
options.

#### `GetName() string`

Return the entity name.


---

## MetricsExportEntity

```go
metricsExport := client.MetricsExport(nil)
fmt.Println(metricsExport.GetName()) // "metrics_export"
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `errors` | `[]any` | Yes |  |
| `messages` | `[]any` | Yes |  |
| `requester` | `map[string]any` | Yes |  |
| `resources` | `[]any` | Yes |  |
| `result` | `[]any` | Yes |  |
| `success` | `bool` | Yes |  |

### Operations

#### `List(reqmatch, ctrl map[string]any) (any, error)`

List entities matching the given criteria. Returns an array.

```go
results, err := client.MetricsExport(nil).List(nil, nil)
if err != nil {
    panic(err)
}
fmt.Println(results)
```

#### `Create(reqdata, ctrl map[string]any) (any, error)`

Create a new entity with the given data.

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

### Common Methods

#### `Data(args ...any) any`

Get or set the entity data. When called with data, sets the entity's
internal data and returns the current data. When called without
arguments, returns a copy of the current data.

#### `Match(args ...any) any`

Get or set the entity match criteria. Works the same as `Data()`.

#### `Make() Entity`

Create a new `MetricsExportEntity` instance with the same client and
options.

#### `GetName() string`

Return the entity name.


---

## NamespaceEntity

```go
namespace := client.Namespace(nil)
fmt.Println(namespace.GetName()) // "namespace"
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `id` | `string` | No |  |

### Operations

#### `Remove(reqmatch, ctrl map[string]any) (any, error)`

Remove the entity matching the given criteria.

```go
result, err := client.Namespace(nil).Remove(map[string]any{"account_id": "account_id", "id": "id"}, nil)
if err != nil {
    panic(err)
}
fmt.Println(result)
```

### Common Methods

#### `Data(args ...any) any`

Get or set the entity data. When called with data, sets the entity's
internal data and returns the current data. When called without
arguments, returns a copy of the current data.

#### `Match(args ...any) any`

Get or set the entity match criteria. Works the same as `Data()`.

#### `Make() Entity`

Create a new `NamespaceEntity` instance with the same client and
options.

#### `GetName() string`

Return the entity name.


---

## PreviewEntity

```go
preview := client.Preview(nil)
fmt.Println(preview.GetName()) // "preview"
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `errors` | `[]any` | Yes |  |
| `id` | `string` | No |  |
| `messages` | `[]any` | Yes |  |
| `result` | `map[string]any` | Yes |  |
| `success` | `bool` | Yes | Whether the API call was successful. |

### Operations

#### `List(reqmatch, ctrl map[string]any) (any, error)`

List entities matching the given criteria. Returns an array.

```go
results, err := client.Preview(nil).List(nil, nil)
if err != nil {
    panic(err)
}
fmt.Println(results)
```

#### `Load(reqmatch, ctrl map[string]any) (any, error)`

Load a single entity matching the given criteria.

```go
result, err := client.Preview(nil).Load(map[string]any{"id": "preview_id", "account_id": "account_id", "worker_id": "worker_id"}, nil)
if err != nil {
    panic(err)
}
fmt.Println(result)
```

#### `Create(reqdata, ctrl map[string]any) (any, error)`

Create a new entity with the given data.

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

#### `Update(reqdata, ctrl map[string]any) (any, error)`

Update an existing entity. The data must include the entity `id`.

```go
result, err := client.Preview(nil).Update(map[string]any{
    "id": "preview_id",
    "account_id": "account_id",
    "worker_id": "worker_id",
    // Fields to update
}, nil)
if err != nil {
    panic(err)
}
fmt.Println(result)
```

#### `Remove(reqmatch, ctrl map[string]any) (any, error)`

Remove the entity matching the given criteria.

```go
result, err := client.Preview(nil).Remove(map[string]any{"id": "preview_id", "account_id": "account_id", "worker_id": "worker_id"}, nil)
if err != nil {
    panic(err)
}
fmt.Println(result)
```

### Common Methods

#### `Data(args ...any) any`

Get or set the entity data. When called with data, sets the entity's
internal data and returns the current data. When called without
arguments, returns a copy of the current data.

#### `Match(args ...any) any`

Get or set the entity match criteria. Works the same as `Data()`.

#### `Make() Entity`

Create a new `PreviewEntity` instance with the same client and
options.

#### `GetName() string`

Return the entity name.


---

## PreviewDeploymentEntity

```go
previewDeployment := client.PreviewDeployment(nil)
fmt.Println(previewDeployment.GetName()) // "preview_deployment"
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `errors` | `[]any` | Yes |  |
| `id` | `string` | No |  |
| `messages` | `[]any` | Yes |  |
| `result` | `any` | Yes |  |
| `success` | `bool` | Yes | Whether the API call was successful. |

### Operations

#### `List(reqmatch, ctrl map[string]any) (any, error)`

List entities matching the given criteria. Returns an array.

```go
results, err := client.PreviewDeployment(nil).List(nil, nil)
if err != nil {
    panic(err)
}
fmt.Println(results)
```

#### `Load(reqmatch, ctrl map[string]any) (any, error)`

Load a single entity matching the given criteria.

```go
result, err := client.PreviewDeployment(nil).Load(map[string]any{"id": "preview_deployment_id", "account_id": "account_id", "preview_id": "preview_id", "worker_id": "worker_id"}, nil)
if err != nil {
    panic(err)
}
fmt.Println(result)
```

#### `Create(reqdata, ctrl map[string]any) (any, error)`

Create a new entity with the given data.

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

#### `Update(reqdata, ctrl map[string]any) (any, error)`

Update an existing entity. The data must include the entity `id`.

```go
result, err := client.PreviewDeployment(nil).Update(map[string]any{
    "id": "preview_deployment_id",
    "account_id": "account_id",
    "preview_id": "preview_id",
    "worker_id": "worker_id",
    // Fields to update
}, nil)
if err != nil {
    panic(err)
}
fmt.Println(result)
```

### Common Methods

#### `Data(args ...any) any`

Get or set the entity data. When called with data, sets the entity's
internal data and returns the current data. When called without
arguments, returns a copy of the current data.

#### `Match(args ...any) any`

Get or set the entity match criteria. Works the same as `Data()`.

#### `Make() Entity`

Create a new `PreviewDeploymentEntity` instance with the same client and
options.

#### `GetName() string`

Return the entity name.


---

## QueryEntity

```go
query := client.Query(nil)
fmt.Println(query.GetName()) // "query"
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `chart` | `bool` | No | When true, includes time-series data in the response. |
| `chartType` | `string` | No | Controls the SQL shape and response payload for the 'calculations' view. |
| `compare` | `bool` | No | When true, includes a comparison dataset from the previous time period of equal length. |
| `distributionScale` | `string` | No | Value-axis bucketing for chartType 'distribution'. |
| `dry` | `bool` | No | When true, executes the query without persisting the results. |
| `errors` | `[]any` | Yes |  |
| `granularity` | `float64` | No | Number of time-series buckets. |
| `ignoreSeries` | `bool` | No | When true, omits time-series data from the response and returns only aggregated values. |
| `limit` | `float64` | No | Maximum number of events to return when view is 'events'. |
| `messages` | `[]any` | Yes |  |
| `offset` | `string` | No | Cursor for pagination in event, trace, invocation, and agent views. |
| `offsetBy` | `float64` | No | Numeric offset for paginating grouped/pattern results (top-N lists). |
| `offsetDirection` | `string` | No | Pagination direction: 'next' for forward, 'prev' for backward. |
| `parameters` | `map[string]any` | No | Query parameters defining what data to retrieve — filters, calculations, group-bys, and ordering. |
| `queryId` | `string` | Yes | Identifier for the query. |
| `result` | `map[string]any` | Yes | Complete results of a query run. |
| `success` | `bool` | Yes |  |
| `timeframe` | `map[string]any` | Yes | Timeframe for the query using Unix timestamps in milliseconds. |
| `view` | `string` | No | Controls the shape of the response. |

### Operations

#### `Create(reqdata, ctrl map[string]any) (any, error)`

Create a new entity with the given data.

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

### Common Methods

#### `Data(args ...any) any`

Get or set the entity data. When called with data, sets the entity's
internal data and returns the current data. When called without
arguments, returns a copy of the current data.

#### `Match(args ...any) any`

Get or set the entity match criteria. Works the same as `Data()`.

#### `Make() Entity`

Create a new `QueryEntity` instance with the same client and
options.

#### `GetName() string`

Return the entity name.


---

## RepositoryConnectionEntity

```go
repositoryConnection := client.RepositoryConnection(nil)
fmt.Println(repositoryConnection.GetName()) // "repository_connection"
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

#### `Update(reqdata, ctrl map[string]any) (any, error)`

Update an existing entity. The data must include the entity `id`.

```go
result, err := client.RepositoryConnection(nil).Update(map[string]any{
    "account_id": "account_id",
    // Fields to update
}, nil)
if err != nil {
    panic(err)
}
fmt.Println(result)
```

### Common Methods

#### `Data(args ...any) any`

Get or set the entity data. When called with data, sets the entity's
internal data and returns the current data. When called without
arguments, returns a copy of the current data.

#### `Match(args ...any) any`

Get or set the entity match criteria. Works the same as `Data()`.

#### `Make() Entity`

Create a new `RepositoryConnectionEntity` instance with the same client and
options.

#### `GetName() string`

Return the entity name.


---

## RolloutEntity

```go
rollout := client.Rollout(nil)
fmt.Println(rollout.GetName()) // "rollout"
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `description` | `string` | Yes | Description of the rollout process. |
| `kind` | `string` | No | Kind of the rollout process. |
| `percentage` | `int` | No | Initial target version percentage (0-100). |
| `step_percentage` | `int` | No | Percentage of rollout to increase in each step when "steps" is absent. |
| `steps` | `[]any` | No | Steps defining the rollout process, used when "step_percentage" is absent. |
| `strategy` | `string` | Yes | Strategy used for the rollout. |
| `target_configuration` | `map[string]any` | Yes | User-specified container configuration changes. |

### Operations

#### `Create(reqdata, ctrl map[string]any) (any, error)`

Create a new entity with the given data.

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

### Common Methods

#### `Data(args ...any) any`

Get or set the entity data. When called with data, sets the entity's
internal data and returns the current data. When called without
arguments, returns a copy of the current data.

#### `Match(args ...any) any`

Get or set the entity match criteria. Works the same as `Data()`.

#### `Make() Entity`

Create a new `RolloutEntity` instance with the same client and
options.

#### `GetName() string`

Return the entity name.


---

## SavedQueryEntity

```go
savedQuery := client.SavedQuery(nil)
fmt.Println(savedQuery.GetName()) // "saved_query"
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `description` | `string` | Yes |  |
| `errors` | `[]any` | Yes |  |
| `id` | `string` | No |  |
| `messages` | `[]any` | Yes |  |
| `name` | `string` | Yes | Query name |
| `parameters` | `map[string]any` | Yes |  |
| `result` | `map[string]any` | Yes |  |
| `success` | `bool` | Yes |  |

### Operations

#### `List(reqmatch, ctrl map[string]any) (any, error)`

List entities matching the given criteria. Returns an array.

```go
results, err := client.SavedQuery(nil).List(nil, nil)
if err != nil {
    panic(err)
}
fmt.Println(results)
```

#### `Load(reqmatch, ctrl map[string]any) (any, error)`

Load a single entity matching the given criteria.

```go
result, err := client.SavedQuery(nil).Load(map[string]any{"id": "saved_query_id", "account_id": "account_id"}, nil)
if err != nil {
    panic(err)
}
fmt.Println(result)
```

#### `Create(reqdata, ctrl map[string]any) (any, error)`

Create a new entity with the given data.

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

#### `Update(reqdata, ctrl map[string]any) (any, error)`

Update an existing entity. The data must include the entity `id`.

```go
result, err := client.SavedQuery(nil).Update(map[string]any{
    "id": "saved_query_id",
    "account_id": "account_id",
    // Fields to update
}, nil)
if err != nil {
    panic(err)
}
fmt.Println(result)
```

#### `Remove(reqmatch, ctrl map[string]any) (any, error)`

Remove the entity matching the given criteria.

```go
result, err := client.SavedQuery(nil).Remove(map[string]any{"id": "saved_query_id", "account_id": "account_id"}, nil)
if err != nil {
    panic(err)
}
fmt.Println(result)
```

### Common Methods

#### `Data(args ...any) any`

Get or set the entity data. When called with data, sets the entity's
internal data and returns the current data. When called without
arguments, returns a copy of the current data.

#### `Match(args ...any) any`

Get or set the entity match criteria. Works the same as `Data()`.

#### `Make() Entity`

Create a new `SavedQueryEntity` instance with the same client and
options.

#### `GetName() string`

Return the entity name.


---

## ScriptEntity

```go
script := client.Script(nil)
fmt.Println(script.GetName()) // "script"
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `id` | `string` | No |  |

### Operations

#### `Remove(reqmatch, ctrl map[string]any) (any, error)`

Remove the entity matching the given criteria.

```go
result, err := client.Script(nil).Remove(map[string]any{"account_id": "account_id", "id": "id"}, nil)
if err != nil {
    panic(err)
}
fmt.Println(result)
```

### Common Methods

#### `Data(args ...any) any`

Get or set the entity data. When called with data, sets the entity's
internal data and returns the current data. When called without
arguments, returns a copy of the current data.

#### `Match(args ...any) any`

Get or set the entity match criteria. Works the same as `Data()`.

#### `Make() Entity`

Create a new `ScriptEntity` instance with the same client and
options.

#### `GetName() string`

Return the entity name.


---

## ScriptSettingEntity

```go
scriptSetting := client.ScriptSetting(nil)
fmt.Println(scriptSetting.GetName()) // "script_setting"
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `errors` | `[]any` | Yes |  |
| `logpush` | `bool` | No | Whether Logpush is turned on for the Worker. |
| `messages` | `[]any` | Yes |  |
| `observability` | `any` | No |  |
| `result` | `map[string]any` | Yes |  |
| `success` | `bool` | Yes | Whether the API call was successful. |
| `tags` | `any` | No |  |
| `tail_consumers` | `[]any` | No | List of Workers that will consume logs from the attached Worker. |

### Operations

#### `List(reqmatch, ctrl map[string]any) (any, error)`

List entities matching the given criteria. Returns an array.

```go
results, err := client.ScriptSetting(nil).List(nil, nil)
if err != nil {
    panic(err)
}
fmt.Println(results)
```

#### `Update(reqdata, ctrl map[string]any) (any, error)`

Update an existing entity. The data must include the entity `id`.

```go
result, err := client.ScriptSetting(nil).Update(map[string]any{
    "account_id": "account_id",
    "script_name": "script_name",
    // Fields to update
}, nil)
if err != nil {
    panic(err)
}
fmt.Println(result)
```

### Common Methods

#### `Data(args ...any) any`

Get or set the entity data. When called with data, sets the entity's
internal data and returns the current data. When called without
arguments, returns a copy of the current data.

#### `Match(args ...any) any`

Get or set the entity match criteria. Works the same as `Data()`.

#### `Make() Entity`

Create a new `ScriptSettingEntity` instance with the same client and
options.

#### `GetName() string`

Return the entity name.


---

## SecretEntity

```go
secret := client.Secret(nil)
fmt.Println(secret.GetName()) // "secret"
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `comment` | `string` | No | Freeform text describing the secret. |
| `id` | `string` | No |  |
| `result` | `any` | Yes |  |
| `scopes` | `[]any` | No | The list of services that can use this secret. |
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

#### `List(reqmatch, ctrl map[string]any) (any, error)`

List entities matching the given criteria. Returns an array.

```go
results, err := client.Secret(nil).List(nil, nil)
if err != nil {
    panic(err)
}
fmt.Println(results)
```

#### `Load(reqmatch, ctrl map[string]any) (any, error)`

Load a single entity matching the given criteria.

```go
result, err := client.Secret(nil).Load(map[string]any{"id": "secret_id", "account_id": "account_id", "store_id": "store_id"}, nil)
if err != nil {
    panic(err)
}
fmt.Println(result)
```

#### `Create(reqdata, ctrl map[string]any) (any, error)`

Create a new entity with the given data.

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

#### `Update(reqdata, ctrl map[string]any) (any, error)`

Update an existing entity. The data must include the entity `id`.

```go
result, err := client.Secret(nil).Update(map[string]any{
    "id": "secret_id",
    "account_id": "account_id",
    "store_id": "store_id",
    // Fields to update
}, nil)
if err != nil {
    panic(err)
}
fmt.Println(result)
```

#### `Remove(reqmatch, ctrl map[string]any) (any, error)`

Remove the entity matching the given criteria.

```go
result, err := client.Secret(nil).Remove(map[string]any{"id": "secret_id", "account_id": "account_id", "store_id": "store_id"}, nil)
if err != nil {
    panic(err)
}
fmt.Println(result)
```

### Common Methods

#### `Data(args ...any) any`

Get or set the entity data. When called with data, sets the entity's
internal data and returns the current data. When called without
arguments, returns a copy of the current data.

#### `Match(args ...any) any`

Get or set the entity match criteria. Works the same as `Data()`.

#### `Make() Entity`

Create a new `SecretEntity` instance with the same client and
options.

#### `GetName() string`

Return the entity name.


---

## SecretsStoreDeleteEntity

```go
secretsStoreDelete := client.SecretsStoreDelete(nil)
fmt.Println(secretsStoreDelete.GetName()) // "secrets_store_delete"
```

### Operations

#### `Remove(reqmatch, ctrl map[string]any) (any, error)`

Remove the entity matching the given criteria.

```go
result, err := client.SecretsStoreDelete(nil).Remove(map[string]any{"account_id": "account_id", "store_id": "store_id"}, nil)
if err != nil {
    panic(err)
}
fmt.Println(result)
```

### Common Methods

#### `Data(args ...any) any`

Get or set the entity data. When called with data, sets the entity's
internal data and returns the current data. When called without
arguments, returns a copy of the current data.

#### `Match(args ...any) any`

Get or set the entity match criteria. Works the same as `Data()`.

#### `Make() Entity`

Create a new `SecretsStoreDeleteEntity` instance with the same client and
options.

#### `GetName() string`

Return the entity name.


---

## SecretsStoreQuotaEntity

```go
secretsStoreQuota := client.SecretsStoreQuota(nil)
fmt.Println(secretsStoreQuota.GetName()) // "secrets_store_quota"
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `result` | `any` | Yes |  |

### Operations

#### `Load(reqmatch, ctrl map[string]any) (any, error)`

Load a single entity matching the given criteria.

```go
result, err := client.SecretsStoreQuota(nil).Load(map[string]any{"account_id": "account_id"}, nil)
if err != nil {
    panic(err)
}
fmt.Println(result)
```

### Common Methods

#### `Data(args ...any) any`

Get or set the entity data. When called with data, sets the entity's
internal data and returns the current data. When called without
arguments, returns a copy of the current data.

#### `Match(args ...any) any`

Get or set the entity match criteria. Works the same as `Data()`.

#### `Make() Entity`

Create a new `SecretsStoreQuotaEntity` instance with the same client and
options.

#### `GetName() string`

Return the entity name.


---

## SecretsStoreSecretEntity

```go
secretsStoreSecret := client.SecretsStoreSecret(nil)
fmt.Println(secretsStoreSecret.GetName()) // "secrets_store_secret"
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `comment` | `string` | No | Freeform text describing the secret. |
| `name` | `string` | Yes | The name of the secret. |
| `scopes` | `[]any` | Yes | The list of services that can use this secret. |

### Operations

#### `Create(reqdata, ctrl map[string]any) (any, error)`

Create a new entity with the given data.

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

### Common Methods

#### `Data(args ...any) any`

Get or set the entity data. When called with data, sets the entity's
internal data and returns the current data. When called without
arguments, returns a copy of the current data.

#### `Match(args ...any) any`

Get or set the entity match criteria. Works the same as `Data()`.

#### `Make() Entity`

Create a new `SecretsStoreSecretEntity` instance with the same client and
options.

#### `GetName() string`

Return the entity name.


---

## SecretsStoreStoreEntity

```go
secretsStoreStore := client.SecretsStoreStore(nil)
fmt.Println(secretsStoreStore.GetName()) // "secrets_store_store"
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `id` | `string` | No |  |
| `name` | `string` | Yes | The name of the store. |
| `result` | `any` | Yes |  |

### Operations

#### `Load(reqmatch, ctrl map[string]any) (any, error)`

Load a single entity matching the given criteria.

```go
result, err := client.SecretsStoreStore(nil).Load(map[string]any{"id": "secrets_store_store_id", "account_id": "account_id"}, nil)
if err != nil {
    panic(err)
}
fmt.Println(result)
```

#### `Create(reqdata, ctrl map[string]any) (any, error)`

Create a new entity with the given data.

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

### Common Methods

#### `Data(args ...any) any`

Get or set the entity data. When called with data, sets the entity's
internal data and returns the current data. When called without
arguments, returns a copy of the current data.

#### `Match(args ...any) any`

Get or set the entity match criteria. Works the same as `Data()`.

#### `Make() Entity`

Create a new `SecretsStoreStoreEntity` instance with the same client and
options.

#### `GetName() string`

Return the entity name.


---

## SecretsStoreStoresResponseCollectionEntity

```go
secretsStoreStoresResponseCollection := client.SecretsStoreStoresResponseCollection(nil)
fmt.Println(secretsStoreStoresResponseCollection.GetName()) // "secrets_store_stores_response_collection"
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `result` | `[]any` | No |  |

### Operations

#### `List(reqmatch, ctrl map[string]any) (any, error)`

List entities matching the given criteria. Returns an array.

```go
results, err := client.SecretsStoreStoresResponseCollection(nil).List(nil, nil)
if err != nil {
    panic(err)
}
fmt.Println(results)
```

### Common Methods

#### `Data(args ...any) any`

Get or set the entity data. When called with data, sets the entity's
internal data and returns the current data. When called without
arguments, returns a copy of the current data.

#### `Match(args ...any) any`

Get or set the entity match criteria. Works the same as `Data()`.

#### `Make() Entity`

Create a new `SecretsStoreStoresResponseCollectionEntity` instance with the same client and
options.

#### `GetName() string`

Return the entity name.


---

## SettingEntity

```go
setting := client.Setting(nil)
fmt.Println(setting.GetName()) // "setting"
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `errors` | `[]any` | Yes |  |
| `messages` | `[]any` | Yes |  |
| `result` | `map[string]any` | Yes |  |
| `success` | `bool` | Yes | Whether the API call was successful. |

### Operations

#### `List(reqmatch, ctrl map[string]any) (any, error)`

List entities matching the given criteria. Returns an array.

```go
results, err := client.Setting(nil).List(nil, nil)
if err != nil {
    panic(err)
}
fmt.Println(results)
```

#### `Update(reqdata, ctrl map[string]any) (any, error)`

Update an existing entity. The data must include the entity `id`.

```go
result, err := client.Setting(nil).Update(map[string]any{
    "account_id": "account_id",
    "environment_name": "environment_name",
    "service_id": "service_id",
    // Fields to update
}, nil)
if err != nil {
    panic(err)
}
fmt.Println(result)
```

### Common Methods

#### `Data(args ...any) any`

Get or set the entity data. When called with data, sets the entity's
internal data and returns the current data. When called without
arguments, returns a copy of the current data.

#### `Match(args ...any) any`

Get or set the entity match criteria. Works the same as `Data()`.

#### `Make() Entity`

Create a new `SettingEntity` instance with the same client and
options.

#### `GetName() string`

Return the entity name.


---

## SharedEntity

```go
shared := client.Shared(nil)
fmt.Println(shared.GetName()) // "shared"
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `errors` | `[]any` | Yes |  |
| `id` | `string` | No |  |
| `messages` | `[]any` | Yes |  |
| `result` | `map[string]any` | Yes | Complete results of a query run. |
| `success` | `bool` | Yes |  |

### Operations

#### `Load(reqmatch, ctrl map[string]any) (any, error)`

Load a single entity matching the given criteria.

```go
result, err := client.Shared(nil).Load(map[string]any{"id": "shared_id", "account_id": "account_id"}, nil)
if err != nil {
    panic(err)
}
fmt.Println(result)
```

#### `Create(reqdata, ctrl map[string]any) (any, error)`

Create a new entity with the given data.

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

### Common Methods

#### `Data(args ...any) any`

Get or set the entity data. When called with data, sets the entity's
internal data and returns the current data. When called without
arguments, returns a copy of the current data.

#### `Match(args ...any) any`

Get or set the entity match criteria. Works the same as `Data()`.

#### `Make() Entity`

Create a new `SharedEntity` instance with the same client and
options.

#### `GetName() string`

Return the entity name.


---

## TailEntity

```go
tail := client.Tail(nil)
fmt.Println(tail.GetName()) // "tail"
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `id` | `string` | No |  |

### Operations

#### `Remove(reqmatch, ctrl map[string]any) (any, error)`

Remove the entity matching the given criteria.

```go
result, err := client.Tail(nil).Remove(map[string]any{"account_id": "account_id", "id": "id", "script_id": "script_id"}, nil)
if err != nil {
    panic(err)
}
fmt.Println(result)
```

### Common Methods

#### `Data(args ...any) any`

Get or set the entity data. When called with data, sets the entity's
internal data and returns the current data. When called without
arguments, returns a copy of the current data.

#### `Match(args ...any) any`

Get or set the entity match criteria. Works the same as `Data()`.

#### `Make() Entity`

Create a new `TailEntity` instance with the same client and
options.

#### `GetName() string`

Return the entity name.


---

## TokenEntity

```go
token := client.Token(nil)
fmt.Println(token.GetName()) // "token"
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `id` | `string` | No |  |

### Operations

#### `Remove(reqmatch, ctrl map[string]any) (any, error)`

Remove the entity matching the given criteria.

```go
result, err := client.Token(nil).Remove(map[string]any{"account_id": "account_id", "id": "id"}, nil)
if err != nil {
    panic(err)
}
fmt.Println(result)
```

### Common Methods

#### `Data(args ...any) any`

Get or set the entity data. When called with data, sets the entity's
internal data and returns the current data. When called without
arguments, returns a copy of the current data.

#### `Match(args ...any) any`

Get or set the entity match criteria. Works the same as `Data()`.

#### `Make() Entity`

Create a new `TokenEntity` instance with the same client and
options.

#### `GetName() string`

Return the entity name.


---

## TriggerEntity

```go
trigger := client.Trigger(nil)
fmt.Println(trigger.GetName()) // "trigger"
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `branch_excludes` | `[]any` | Yes | Branch patterns that must not start builds. |
| `branch_includes` | `[]any` | Yes | Branch patterns that can start builds. |
| `build_caching_enabled` | `bool` | No | Whether builds reuse cached dependencies and build artifacts. |
| `build_command` | `string` | Yes | Command to build the Worker. |
| `build_token_uuid` | `string` | Yes | UUID of the build token used when deploying the Worker. |
| `deploy_command` | `string` | Yes | Command to deploy the Worker. |
| `external_script_id` | `string` | Yes | System-generated tag of the Worker. |
| `id` | `string` | No |  |
| `path_excludes` | `[]any` | Yes | Path patterns that must not start builds. |
| `path_includes` | `[]any` | Yes | Path patterns that can start builds. |
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

#### `Create(reqdata, ctrl map[string]any) (any, error)`

Create a new entity with the given data.

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

#### `Update(reqdata, ctrl map[string]any) (any, error)`

Update an existing entity. The data must include the entity `id`.

```go
result, err := client.Trigger(nil).Update(map[string]any{
    "account_id": "account_id",
    "id": "id",
    // Fields to update
}, nil)
if err != nil {
    panic(err)
}
fmt.Println(result)
```

#### `Remove(reqmatch, ctrl map[string]any) (any, error)`

Remove the entity matching the given criteria.

```go
result, err := client.Trigger(nil).Remove(map[string]any{"account_id": "account_id", "id": "id"}, nil)
if err != nil {
    panic(err)
}
fmt.Println(result)
```

### Common Methods

#### `Data(args ...any) any`

Get or set the entity data. When called with data, sets the entity's
internal data and returns the current data. When called without
arguments, returns a copy of the current data.

#### `Match(args ...any) any`

Get or set the entity match criteria. Works the same as `Data()`.

#### `Make() Entity`

Create a new `TriggerEntity` instance with the same client and
options.

#### `GetName() string`

Return the entity name.


---

## UsageEntity

```go
usage := client.Usage(nil)
fmt.Println(usage.GetName()) // "usage"
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `errors` | `[]any` | Yes |  |
| `messages` | `[]any` | Yes |  |
| `result` | `map[string]any` | Yes |  |
| `success` | `bool` | Yes |  |

### Operations

#### `List(reqmatch, ctrl map[string]any) (any, error)`

List entities matching the given criteria. Returns an array.

```go
results, err := client.Usage(nil).List(nil, nil)
if err != nil {
    panic(err)
}
fmt.Println(results)
```

### Common Methods

#### `Data(args ...any) any`

Get or set the entity data. When called with data, sets the entity's
internal data and returns the current data. When called without
arguments, returns a copy of the current data.

#### `Match(args ...any) any`

Get or set the entity match criteria. Works the same as `Data()`.

#### `Make() Entity`

Create a new `UsageEntity` instance with the same client and
options.

#### `GetName() string`

Return the entity name.


---

## ValueEntity

```go
value := client.Value(nil)
fmt.Println(value.GetName()) // "value"
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `datasets` | `[]any` | Yes | Leave this empty to use the default datasets |
| `errors` | `[]any` | Yes |  |
| `filters` | `[]any` | No | Apply filters before listing values. |
| `key` | `string` | Yes |  |
| `limit` | `float64` | No |  |
| `messages` | `[]any` | Yes |  |
| `needle` | `map[string]any` | Yes | Full-text search expression to match events containing the specified text or pattern. |
| `result` | `[]any` | Yes |  |
| `success` | `bool` | Yes |  |
| `timeframe` | `map[string]any` | Yes |  |
| `type` | `string` | Yes |  |

### Operations

#### `Create(reqdata, ctrl map[string]any) (any, error)`

Create a new entity with the given data.

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

### Common Methods

#### `Data(args ...any) any`

Get or set the entity data. When called with data, sets the entity's
internal data and returns the current data. When called without
arguments, returns a copy of the current data.

#### `Match(args ...any) any`

Get or set the entity match criteria. Works the same as `Data()`.

#### `Make() Entity`

Create a new `ValueEntity` instance with the same client and
options.

#### `GetName() string`

Return the entity name.


---

## VersionEntity

```go
version := client.Version(nil)
fmt.Println(version.GetName()) // "version"
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `annotations` | `map[string]any` | No | Metadata about the version. |
| `assets` | `map[string]any` | No | Configuration for assets within a Worker. |
| `author_email` | `string` | No | Email of the user who created the version. |
| `author_id` | `string` | No | Identifier of the user who created the version. |
| `bindings` | `[]any` | No | List of bindings attached to a Worker. |
| `cache_options` | `map[string]any` | Yes | Global CacheW configuration for the Worker. |
| `compatibility_date` | `string` | No | Date indicating targeted support in the Workers runtime. |
| `compatibility_flags` | `[]any` | No | Flags that enable or disable certain features in the Workers runtime. |
| `containers` | `[]any` | No | List of containers attached to a Worker. |
| `created_on` | `string` | Yes | When the version was created. |
| `errors` | `[]any` | Yes |  |
| `exports` | `any` | No | Declarative exports for the version, including Durable Object classes (with their `storage` backend) and named Worker entrypoints. |
| `exports_reconciliation` | `any` | No | Summary of the declarative exports reconciliation that ran on this upload. |
| `id` | `string` | Yes | Version identifier. |
| `limits` | `map[string]any` | No | Resource limits enforced at runtime. |
| `main_module` | `string` | No | The name of the main module in the `modules` array (e.g. |
| `messages` | `[]any` | Yes |  |
| `migration_tag` | `string` | No | Durable Object migration tag. |
| `migrations` | `any` | No | Migrations for Durable Objects associated with the version. |
| `modules` | `[]any` | No | Code, sourcemaps, and other content used at runtime. |
| `number` | `int` | Yes | The integer version number, starting from one. |
| `package_dependencies` | `[]any` | No | The list of npm packages that were installed and used when this Worker version was built. |
| `placement` | `map[string]any` | No | Configuration for [Smart Placement](https://developers.cloudflare.com/workers/configuration/smart-placement). |
| `result` | `map[string]any` | Yes |  |
| `source` | `string` | No | The client used to create the version. |
| `startup_time_ms` | `int` | No | Time in milliseconds spent on [Worker startup](https://developers.cloudflare.com/workers/platform/limits/#worker-startup-time). |
| `success` | `bool` | Yes | Whether the API call was successful. |
| `urls` | `[]any` | Yes | All routable URLs that always point to this version. |
| `usage_model` | `string` | No | Usage model for the version. |

### Operations

#### `List(reqmatch, ctrl map[string]any) (any, error)`

List entities matching the given criteria. Returns an array.

```go
results, err := client.Version(nil).List(nil, nil)
if err != nil {
    panic(err)
}
fmt.Println(results)
```

#### `Load(reqmatch, ctrl map[string]any) (any, error)`

Load a single entity matching the given criteria.

```go
result, err := client.Version(nil).Load(map[string]any{"id": "version_id", "account_id": "account_id", "worker_id": "worker_id"}, nil)
if err != nil {
    panic(err)
}
fmt.Println(result)
```

#### `Create(reqdata, ctrl map[string]any) (any, error)`

Create a new entity with the given data.

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

#### `Update(reqdata, ctrl map[string]any) (any, error)`

Update an existing entity. The data must include the entity `id`.

```go
result, err := client.Version(nil).Update(map[string]any{
    "id": "version_id",
    "account_id": "account_id",
    "worker_id": "worker_id",
    // Fields to update
}, nil)
if err != nil {
    panic(err)
}
fmt.Println(result)
```

#### `Remove(reqmatch, ctrl map[string]any) (any, error)`

Remove the entity matching the given criteria.

```go
result, err := client.Version(nil).Remove(map[string]any{"id": "version_id", "account_id": "account_id", "worker_id": "worker_id"}, nil)
if err != nil {
    panic(err)
}
fmt.Println(result)
```

### Common Methods

#### `Data(args ...any) any`

Get or set the entity data. When called with data, sets the entity's
internal data and returns the current data. When called without
arguments, returns a copy of the current data.

#### `Match(args ...any) any`

Get or set the entity match criteria. Works the same as `Data()`.

#### `Make() Entity`

Create a new `VersionEntity` instance with the same client and
options.

#### `GetName() string`

Return the entity name.


---

## WorkerEntity

```go
worker := client.Worker(nil)
fmt.Println(worker.GetName()) // "worker"
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `auto_build` | `bool` | No | Whether pushes to the git branch build this Preview. |
| `auto_delete` | `bool` | No | Whether deleting the git branch also deletes this Preview. |
| `branch` | `any` | No | Git branch name (required if commit_hash not provided) |
| `commit_hash` | `any` | No | Git commit hash (required if branch not provided) |
| `errors` | `[]any` | Yes |  |
| `git_repository` | `any` | Yes | Git repository settings to update |
| `id` | `string` | No |  |
| `messages` | `[]any` | Yes |  |
| `previews_base_config` | `map[string]any` | Yes | Build and deploy settings when creating a Worker build configuration |
| `previews_enabled` | `bool` | Yes | Whether Previews are enabled for this Worker |
| `production_settings` | `map[string]any` | Yes | Build and deploy settings when creating a Worker build configuration |
| `result` | `map[string]any` | Yes | A single Preview of a Worker, with the build settings it currently uses. |
| `result_info` | `map[string]any` | No |  |
| `script_tag` | `string` | Yes | System-generated tag of the Worker. |
| `seed_repo` | `any` | No | Optional repository and file overrides used to seed this build. |
| `settings` | `map[string]any` | No | Partial build settings for updating a Worker build configuration |
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

#### `List(reqmatch, ctrl map[string]any) (any, error)`

List entities matching the given criteria. Returns an array.

```go
results, err := client.Worker(nil).List(nil, nil)
if err != nil {
    panic(err)
}
fmt.Println(results)
```

#### `Load(reqmatch, ctrl map[string]any) (any, error)`

Load a single entity matching the given criteria.

```go
result, err := client.Worker(nil).Load(map[string]any{"id": "worker_id", "account_id": "account_id"}, nil)
if err != nil {
    panic(err)
}
fmt.Println(result)
```

#### `Create(reqdata, ctrl map[string]any) (any, error)`

Create a new entity with the given data.

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

#### `Update(reqdata, ctrl map[string]any) (any, error)`

Update an existing entity. The data must include the entity `id`.

```go
result, err := client.Worker(nil).Update(map[string]any{
    "id": "worker_id",
    "account_id": "account_id",
    // Fields to update
}, nil)
if err != nil {
    panic(err)
}
fmt.Println(result)
```

#### `Remove(reqmatch, ctrl map[string]any) (any, error)`

Remove the entity matching the given criteria.

```go
result, err := client.Worker(nil).Remove(map[string]any{"id": "worker_id", "account_id": "account_id"}, nil)
if err != nil {
    panic(err)
}
fmt.Println(result)
```

### Common Methods

#### `Data(args ...any) any`

Get or set the entity data. When called with data, sets the entity's
internal data and returns the current data. When called without
arguments, returns a copy of the current data.

#### `Match(args ...any) any`

Get or set the entity match criteria. Works the same as `Data()`.

#### `Make() Entity`

Create a new `WorkerEntity` instance with the same client and
options.

#### `GetName() string`

Return the entity name.


---

## WorkerCronTriggerEntity

```go
workerCronTrigger := client.WorkerCronTrigger(nil)
fmt.Println(workerCronTrigger.GetName()) // "worker_cron_trigger"
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `errors` | `[]any` | Yes |  |
| `messages` | `[]any` | Yes |  |
| `result` | `map[string]any` | Yes |  |
| `success` | `bool` | Yes | Whether the API call was successful. |

### Operations

#### `List(reqmatch, ctrl map[string]any) (any, error)`

List entities matching the given criteria. Returns an array.

```go
results, err := client.WorkerCronTrigger(nil).List(nil, nil)
if err != nil {
    panic(err)
}
fmt.Println(results)
```

#### `Update(reqdata, ctrl map[string]any) (any, error)`

Update an existing entity. The data must include the entity `id`.

```go
result, err := client.WorkerCronTrigger(nil).Update(map[string]any{
    "account_id": "account_id",
    "script_name": "script_name",
    // Fields to update
}, nil)
if err != nil {
    panic(err)
}
fmt.Println(result)
```

### Common Methods

#### `Data(args ...any) any`

Get or set the entity data. When called with data, sets the entity's
internal data and returns the current data. When called without
arguments, returns a copy of the current data.

#### `Match(args ...any) any`

Get or set the entity match criteria. Works the same as `Data()`.

#### `Make() Entity`

Create a new `WorkerCronTriggerEntity` instance with the same client and
options.

#### `GetName() string`

Return the entity name.


---

## WorkerDeploymentEntity

```go
workerDeployment := client.WorkerDeployment(nil)
fmt.Println(workerDeployment.GetName()) // "worker_deployment"
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `annotations` | `map[string]any` | No |  |
| `author_email` | `string` | No |  |
| `created_on` | `string` | Yes |  |
| `errors` | `[]any` | Yes |  |
| `id` | `string` | Yes |  |
| `messages` | `[]any` | Yes |  |
| `result` | `map[string]any` | Yes |  |
| `source` | `string` | Yes |  |
| `strategy` | `string` | Yes |  |
| `success` | `bool` | Yes | Whether the API call was successful. |
| `versions` | `[]any` | Yes | Worker versions included in this deployment. |

### Operations

#### `Load(reqmatch, ctrl map[string]any) (any, error)`

Load a single entity matching the given criteria.

```go
result, err := client.WorkerDeployment(nil).Load(map[string]any{"id": "worker_deployment_id", "account_id": "account_id"}, nil)
if err != nil {
    panic(err)
}
fmt.Println(result)
```

#### `Create(reqdata, ctrl map[string]any) (any, error)`

Create a new entity with the given data.

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

### Common Methods

#### `Data(args ...any) any`

Get or set the entity data. When called with data, sets the entity's
internal data and returns the current data. When called without
arguments, returns a copy of the current data.

#### `Match(args ...any) any`

Get or set the entity match criteria. Works the same as `Data()`.

#### `Make() Entity`

Create a new `WorkerDeploymentEntity` instance with the same client and
options.

#### `GetName() string`

Return the entity name.


---

## WorkerEnvironmentEntity

```go
workerEnvironment := client.WorkerEnvironment(nil)
fmt.Println(workerEnvironment.GetName()) // "worker_environment"
```

### Operations

#### `Load(reqmatch, ctrl map[string]any) (any, error)`

Load a single entity matching the given criteria.

```go
result, err := client.WorkerEnvironment(nil).Load(map[string]any{"account_id": "account_id", "environment_name": "environment_name", "service_id": "service_id"}, nil)
if err != nil {
    panic(err)
}
fmt.Println(result)
```

### Common Methods

#### `Data(args ...any) any`

Get or set the entity data. When called with data, sets the entity's
internal data and returns the current data. When called without
arguments, returns a copy of the current data.

#### `Match(args ...any) any`

Get or set the entity match criteria. Works the same as `Data()`.

#### `Make() Entity`

Create a new `WorkerEnvironmentEntity` instance with the same client and
options.

#### `GetName() string`

Return the entity name.


---

## WorkerRouteEntity

```go
workerRoute := client.WorkerRoute(nil)
fmt.Println(workerRoute.GetName()) // "worker_route"
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `errors` | `[]any` | Yes |  |
| `id` | `string` | Yes |  |
| `messages` | `[]any` | Yes |  |
| `pattern` | `string` | Yes | Pattern to match incoming requests against. |
| `result` | `map[string]any` | Yes |  |
| `script` | `string` | No | Name of the script to run if the route matches. |
| `success` | `bool` | Yes | Whether the API call was successful. |

### Operations

#### `List(reqmatch, ctrl map[string]any) (any, error)`

List entities matching the given criteria. Returns an array.

```go
results, err := client.WorkerRoute(nil).List(nil, nil)
if err != nil {
    panic(err)
}
fmt.Println(results)
```

#### `Load(reqmatch, ctrl map[string]any) (any, error)`

Load a single entity matching the given criteria.

```go
result, err := client.WorkerRoute(nil).Load(map[string]any{"id": "worker_route_id", "zone_id": "zone_id"}, nil)
if err != nil {
    panic(err)
}
fmt.Println(result)
```

#### `Create(reqdata, ctrl map[string]any) (any, error)`

Create a new entity with the given data.

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

#### `Update(reqdata, ctrl map[string]any) (any, error)`

Update an existing entity. The data must include the entity `id`.

```go
result, err := client.WorkerRoute(nil).Update(map[string]any{
    "id": "worker_route_id",
    "zone_id": "zone_id",
    // Fields to update
}, nil)
if err != nil {
    panic(err)
}
fmt.Println(result)
```

#### `Remove(reqmatch, ctrl map[string]any) (any, error)`

Remove the entity matching the given criteria.

```go
result, err := client.WorkerRoute(nil).Remove(map[string]any{"id": "worker_route_id", "zone_id": "zone_id"}, nil)
if err != nil {
    panic(err)
}
fmt.Println(result)
```

### Common Methods

#### `Data(args ...any) any`

Get or set the entity data. When called with data, sets the entity's
internal data and returns the current data. When called without
arguments, returns a copy of the current data.

#### `Match(args ...any) any`

Get or set the entity match criteria. Works the same as `Data()`.

#### `Make() Entity`

Create a new `WorkerRouteEntity` instance with the same client and
options.

#### `GetName() string`

Return the entity name.


---

## WorkerScriptEntity

```go
workerScript := client.WorkerScript(nil)
fmt.Println(workerScript.GetName()) // "worker_script"
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `errors` | `[]any` | Yes |  |
| `id` | `string` | No |  |
| `messages` | `[]any` | Yes |  |
| `result` | `map[string]any` | No | A secret value accessible through a binding. |
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

#### `List(reqmatch, ctrl map[string]any) (any, error)`

List entities matching the given criteria. Returns an array.

```go
results, err := client.WorkerScript(nil).List(nil, nil)
if err != nil {
    panic(err)
}
fmt.Println(results)
```

#### `Load(reqmatch, ctrl map[string]any) (any, error)`

Load a single entity matching the given criteria.

```go
result, err := client.WorkerScript(nil).Load(map[string]any{"id": "worker_script_id", "account_id": "account_id"}, nil)
if err != nil {
    panic(err)
}
fmt.Println(result)
```

#### `Create(reqdata, ctrl map[string]any) (any, error)`

Create a new entity with the given data.

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

#### `Update(reqdata, ctrl map[string]any) (any, error)`

Update an existing entity. The data must include the entity `id`.

```go
result, err := client.WorkerScript(nil).Update(map[string]any{
    "id": "worker_script_id",
    "account_id": "account_id",
    // Fields to update
}, nil)
if err != nil {
    panic(err)
}
fmt.Println(result)
```

#### `Remove(reqmatch, ctrl map[string]any) (any, error)`

Remove the entity matching the given criteria.

```go
result, err := client.WorkerScript(nil).Remove(map[string]any{"account_id": "account_id", "script_name": "script_name"}, nil)
if err != nil {
    panic(err)
}
fmt.Println(result)
```

### Common Methods

#### `Data(args ...any) any`

Get or set the entity data. When called with data, sets the entity's
internal data and returns the current data. When called without
arguments, returns a copy of the current data.

#### `Match(args ...any) any`

Get or set the entity match criteria. Works the same as `Data()`.

#### `Make() Entity`

Create a new `WorkerScriptEntity` instance with the same client and
options.

#### `GetName() string`

Return the entity name.


---

## WorkerSubdomainEntity

```go
workerSubdomain := client.WorkerSubdomain(nil)
fmt.Println(workerSubdomain.GetName()) // "worker_subdomain"
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `errors` | `[]any` | Yes |  |
| `messages` | `[]any` | Yes |  |
| `result` | `map[string]any` | Yes |  |
| `subdomain` | `string` | Yes |  |
| `success` | `bool` | Yes | Whether the API call was successful. |

### Operations

#### `List(reqmatch, ctrl map[string]any) (any, error)`

List entities matching the given criteria. Returns an array.

```go
results, err := client.WorkerSubdomain(nil).List(nil, nil)
if err != nil {
    panic(err)
}
fmt.Println(results)
```

#### `Update(reqdata, ctrl map[string]any) (any, error)`

Update an existing entity. The data must include the entity `id`.

```go
result, err := client.WorkerSubdomain(nil).Update(map[string]any{
    "account_id": "account_id",
    // Fields to update
}, nil)
if err != nil {
    panic(err)
}
fmt.Println(result)
```

#### `Remove(reqmatch, ctrl map[string]any) (any, error)`

Remove the entity matching the given criteria.

```go
result, err := client.WorkerSubdomain(nil).Remove(map[string]any{"account_id": "account_id"}, nil)
if err != nil {
    panic(err)
}
fmt.Println(result)
```

### Common Methods

#### `Data(args ...any) any`

Get or set the entity data. When called with data, sets the entity's
internal data and returns the current data. When called without
arguments, returns a copy of the current data.

#### `Match(args ...any) any`

Get or set the entity match criteria. Works the same as `Data()`.

#### `Make() Entity`

Create a new `WorkerSubdomainEntity` instance with the same client and
options.

#### `GetName() string`

Return the entity name.


---

## WorkerTailLogEntity

```go
workerTailLog := client.WorkerTailLog(nil)
fmt.Println(workerTailLog.GetName()) // "worker_tail_log"
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `errors` | `[]any` | Yes |  |
| `messages` | `[]any` | Yes |  |
| `result` | `map[string]any` | Yes |  |
| `success` | `bool` | Yes | Whether the API call was successful. |

### Operations

#### `List(reqmatch, ctrl map[string]any) (any, error)`

List entities matching the given criteria. Returns an array.

```go
results, err := client.WorkerTailLog(nil).List(nil, nil)
if err != nil {
    panic(err)
}
fmt.Println(results)
```

#### `Create(reqdata, ctrl map[string]any) (any, error)`

Create a new entity with the given data.

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

### Common Methods

#### `Data(args ...any) any`

Get or set the entity data. When called with data, sets the entity's
internal data and returns the current data. When called without
arguments, returns a copy of the current data.

#### `Match(args ...any) any`

Get or set the entity match criteria. Works the same as `Data()`.

#### `Make() Entity`

Create a new `WorkerTailLogEntity` instance with the same client and
options.

#### `GetName() string`

Return the entity name.


---

## WorkersAccountSettingEntity

```go
workersAccountSetting := client.WorkersAccountSetting(nil)
fmt.Println(workersAccountSetting.GetName()) // "workers_account_setting"
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `default_usage_model` | `string` | No |  |
| `errors` | `[]any` | Yes |  |
| `green_compute` | `bool` | No |  |
| `messages` | `[]any` | Yes |  |
| `result` | `map[string]any` | Yes |  |
| `success` | `bool` | Yes | Whether the API call was successful. |

### Operations

#### `List(reqmatch, ctrl map[string]any) (any, error)`

List entities matching the given criteria. Returns an array.

```go
results, err := client.WorkersAccountSetting(nil).List(nil, nil)
if err != nil {
    panic(err)
}
fmt.Println(results)
```

#### `Update(reqdata, ctrl map[string]any) (any, error)`

Update an existing entity. The data must include the entity `id`.

```go
result, err := client.WorkersAccountSetting(nil).Update(map[string]any{
    "account_id": "account_id",
    // Fields to update
}, nil)
if err != nil {
    panic(err)
}
fmt.Println(result)
```

### Common Methods

#### `Data(args ...any) any`

Get or set the entity data. When called with data, sets the entity's
internal data and returns the current data. When called without
arguments, returns a copy of the current data.

#### `Match(args ...any) any`

Get or set the entity match criteria. Works the same as `Data()`.

#### `Make() Entity`

Create a new `WorkersAccountSettingEntity` instance with the same client and
options.

#### `GetName() string`

Return the entity name.


---

## WorkersApiResponseNullResultEntity

```go
workersApiResponseNullResult := client.WorkersApiResponseNullResult(nil)
fmt.Println(workersApiResponseNullResult.GetName()) // "workers_api_response_null_result"
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `errors` | `[]any` | Yes |  |
| `messages` | `[]any` | Yes |  |
| `result` | `map[string]any` | No |  |
| `success` | `bool` | Yes | Whether the API call was successful. |

### Operations

#### `Update(reqdata, ctrl map[string]any) (any, error)`

Update an existing entity. The data must include the entity `id`.

```go
result, err := client.WorkersApiResponseNullResult(nil).Update(map[string]any{
    "account_id": "account_id",
    "namespace_id": "namespace_id",
    "script_id": "script_id",
    "tag": "tag",
    // Fields to update
}, nil)
if err != nil {
    panic(err)
}
fmt.Println(result)
```

#### `Remove(reqmatch, ctrl map[string]any) (any, error)`

Remove the entity matching the given criteria.

```go
result, err := client.WorkersApiResponseNullResult(nil).Remove(map[string]any{"account_id": "account_id"}, nil)
if err != nil {
    panic(err)
}
fmt.Println(result)
```

### Common Methods

#### `Data(args ...any) any`

Get or set the entity data. When called with data, sets the entity's
internal data and returns the current data. When called without
arguments, returns a copy of the current data.

#### `Match(args ...any) any`

Get or set the entity match criteria. Works the same as `Data()`.

#### `Make() Entity`

Create a new `WorkersApiResponseNullResultEntity` instance with the same client and
options.

#### `GetName() string`

Return the entity name.


---

## WorkersCompletedUploadAssetEntity

```go
workersCompletedUploadAsset := client.WorkersCompletedUploadAsset(nil)
fmt.Println(workersCompletedUploadAsset.GetName()) // "workers_completed_upload_asset"
```

### Operations

#### `Create(reqdata, ctrl map[string]any) (any, error)`

Create a new entity with the given data.

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

### Common Methods

#### `Data(args ...any) any`

Get or set the entity data. When called with data, sets the entity's
internal data and returns the current data. When called without
arguments, returns a copy of the current data.

#### `Match(args ...any) any`

Get or set the entity match criteria. Works the same as `Data()`.

#### `Make() Entity`

Create a new `WorkersCompletedUploadAssetEntity` instance with the same client and
options.

#### `GetName() string`

Return the entity name.


---

## WorkersCreateAssetsUploadSessionEntity

```go
workersCreateAssetsUploadSession := client.WorkersCreateAssetsUploadSession(nil)
fmt.Println(workersCreateAssetsUploadSession.GetName()) // "workers_create_assets_upload_session"
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `manifest` | `map[string]any` | Yes | A manifest ([path]: {hash, size}) map of files to upload. |

### Operations

#### `Create(reqdata, ctrl map[string]any) (any, error)`

Create a new entity with the given data.

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

### Common Methods

#### `Data(args ...any) any`

Get or set the entity data. When called with data, sets the entity's
internal data and returns the current data. When called without
arguments, returns a copy of the current data.

#### `Match(args ...any) any`

Get or set the entity match criteria. Works the same as `Data()`.

#### `Make() Entity`

Create a new `WorkersCreateAssetsUploadSessionEntity` instance with the same client and
options.

#### `GetName() string`

Return the entity name.


---

## WorkersForPlatformEntity

```go
workersForPlatform := client.WorkersForPlatform(nil)
fmt.Println(workersForPlatform.GetName()) // "workers_for_platform"
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `errors` | `[]any` | Yes |  |
| `messages` | `[]any` | Yes |  |
| `result` | `map[string]any` | Yes | A secret value accessible through a binding. |
| `success` | `bool` | Yes | Whether the API call was successful. |

### Field Usage by Operation

| Field | load | list | update |
| --- | --- | --- | --- |
| `errors` | - | - | - |
| `messages` | - | - | - |
| `result` | - | Yes | - |
| `success` | - | - | - |

### Operations

#### `List(reqmatch, ctrl map[string]any) (any, error)`

List entities matching the given criteria. Returns an array.

```go
results, err := client.WorkersForPlatform(nil).List(nil, nil)
if err != nil {
    panic(err)
}
fmt.Println(results)
```

#### `Load(reqmatch, ctrl map[string]any) (any, error)`

Load a single entity matching the given criteria.

```go
result, err := client.WorkersForPlatform(nil).Load(map[string]any{"account_id": "account_id", "namespace_id": "namespace_id"}, nil)
if err != nil {
    panic(err)
}
fmt.Println(result)
```

#### `Update(reqdata, ctrl map[string]any) (any, error)`

Update an existing entity. The data must include the entity `id`.

```go
result, err := client.WorkersForPlatform(nil).Update(map[string]any{
    "account_id": "account_id",
    "namespace_id": "namespace_id",
    "script_name": "script_name",
    // Fields to update
}, nil)
if err != nil {
    panic(err)
}
fmt.Println(result)
```

### Common Methods

#### `Data(args ...any) any`

Get or set the entity data. When called with data, sets the entity's
internal data and returns the current data. When called without
arguments, returns a copy of the current data.

#### `Match(args ...any) any`

Get or set the entity match criteria. Works the same as `Data()`.

#### `Make() Entity`

Create a new `WorkersForPlatformEntity` instance with the same client and
options.

#### `GetName() string`

Return the entity name.


---

## WorkersKvApiResponseCommonNoResultEntity

```go
workersKvApiResponseCommonNoResult := client.WorkersKvApiResponseCommonNoResult(nil)
fmt.Println(workersKvApiResponseCommonNoResult.GetName()) // "workers_kv_api_response_common_no_result"
```

### Operations

#### `Update(reqdata, ctrl map[string]any) (any, error)`

Update an existing entity. The data must include the entity `id`.

```go
result, err := client.WorkersKvApiResponseCommonNoResult(nil).Update(map[string]any{
    "account_id": "account_id",
    "key_name": "key_name",
    "namespace_id": "namespace_id",
    // Fields to update
}, nil)
if err != nil {
    panic(err)
}
fmt.Println(result)
```

#### `Remove(reqmatch, ctrl map[string]any) (any, error)`

Remove the entity matching the given criteria.

```go
result, err := client.WorkersKvApiResponseCommonNoResult(nil).Remove(map[string]any{"account_id": "account_id", "namespace_id": "namespace_id"}, nil)
if err != nil {
    panic(err)
}
fmt.Println(result)
```

### Common Methods

#### `Data(args ...any) any`

Get or set the entity data. When called with data, sets the entity's
internal data and returns the current data. When called without
arguments, returns a copy of the current data.

#### `Match(args ...any) any`

Get or set the entity match criteria. Works the same as `Data()`.

#### `Make() Entity`

Create a new `WorkersKvApiResponseCommonNoResultEntity` instance with the same client and
options.

#### `GetName() string`

Return the entity name.


---

## WorkersKvNamespaceEntity

```go
workersKvNamespace := client.WorkersKvNamespace(nil)
fmt.Println(workersKvNamespace.GetName()) // "workers_kv_namespace"
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `errors` | `[]any` | Yes |  |
| `id` | `string` | No |  |
| `jurisdiction` | `string` | No | Specify the jurisdiction to restrict the KV namespace to durably store data within. |
| `keys` | `[]any` | Yes | Array of keys to retrieve (maximum of 100). |
| `messages` | `[]any` | Yes |  |
| `result` | `any` | No |  |
| `result_info` | `map[string]any` | No |  |
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

#### `List(reqmatch, ctrl map[string]any) (any, error)`

List entities matching the given criteria. Returns an array.

```go
results, err := client.WorkersKvNamespace(nil).List(nil, nil)
if err != nil {
    panic(err)
}
fmt.Println(results)
```

#### `Load(reqmatch, ctrl map[string]any) (any, error)`

Load a single entity matching the given criteria.

```go
result, err := client.WorkersKvNamespace(nil).Load(map[string]any{"id": "workers_kv_namespace_id", "account_id": "account_id"}, nil)
if err != nil {
    panic(err)
}
fmt.Println(result)
```

#### `Create(reqdata, ctrl map[string]any) (any, error)`

Create a new entity with the given data.

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

#### `Update(reqdata, ctrl map[string]any) (any, error)`

Update an existing entity. The data must include the entity `id`.

```go
result, err := client.WorkersKvNamespace(nil).Update(map[string]any{
    "id": "workers_kv_namespace_id",
    "account_id": "account_id",
    // Fields to update
}, nil)
if err != nil {
    panic(err)
}
fmt.Println(result)
```

#### `Remove(reqmatch, ctrl map[string]any) (any, error)`

Remove the entity matching the given criteria.

```go
result, err := client.WorkersKvNamespace(nil).Remove(map[string]any{"account_id": "account_id", "namespace_id": "namespace_id"}, nil)
if err != nil {
    panic(err)
}
fmt.Println(result)
```

### Common Methods

#### `Data(args ...any) any`

Get or set the entity data. When called with data, sets the entity's
internal data and returns the current data. When called without
arguments, returns a copy of the current data.

#### `Match(args ...any) any`

Get or set the entity match criteria. Works the same as `Data()`.

#### `Make() Entity`

Create a new `WorkersKvNamespaceEntity` instance with the same client and
options.

#### `GetName() string`

Return the entity name.


---

## WorkersNamespaceListEntity

```go
workersNamespaceList := client.WorkersNamespaceList(nil)
fmt.Println(workersNamespaceList.GetName()) // "workers_namespace_list"
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `errors` | `[]any` | Yes |  |
| `messages` | `[]any` | Yes |  |
| `result` | `[]any` | No |  |
| `success` | `bool` | Yes | Whether the API call was successful. |

### Operations

#### `List(reqmatch, ctrl map[string]any) (any, error)`

List entities matching the given criteria. Returns an array.

```go
results, err := client.WorkersNamespaceList(nil).List(nil, nil)
if err != nil {
    panic(err)
}
fmt.Println(results)
```

### Common Methods

#### `Data(args ...any) any`

Get or set the entity data. When called with data, sets the entity's
internal data and returns the current data. When called without
arguments, returns a copy of the current data.

#### `Match(args ...any) any`

Get or set the entity match criteria. Works the same as `Data()`.

#### `Make() Entity`

Create a new `WorkersNamespaceListEntity` instance with the same client and
options.

#### `GetName() string`

Return the entity name.


---

## WorkersNamespaceScriptDeleteBulkEntity

```go
workersNamespaceScriptDeleteBulk := client.WorkersNamespaceScriptDeleteBulk(nil)
fmt.Println(workersNamespaceScriptDeleteBulk.GetName()) // "workers_namespace_script_delete_bulk"
```

### Operations

#### `Remove(reqmatch, ctrl map[string]any) (any, error)`

Remove the entity matching the given criteria.

```go
result, err := client.WorkersNamespaceScriptDeleteBulk(nil).Remove(map[string]any{"account_id": "account_id", "dispatch_namespace": "dispatch_namespace", "tag": "tag"}, nil)
if err != nil {
    panic(err)
}
fmt.Println(result)
```

### Common Methods

#### `Data(args ...any) any`

Get or set the entity data. When called with data, sets the entity's
internal data and returns the current data. When called without
arguments, returns a copy of the current data.

#### `Match(args ...any) any`

Get or set the entity match criteria. Works the same as `Data()`.

#### `Make() Entity`

Create a new `WorkersNamespaceScriptDeleteBulkEntity` instance with the same client and
options.

#### `GetName() string`

Return the entity name.


---

## WorkersNamespaceScriptResponseSingleEntity

```go
workersNamespaceScriptResponseSingle := client.WorkersNamespaceScriptResponseSingle(nil)
fmt.Println(workersNamespaceScriptResponseSingle.GetName()) // "workers_namespace_script_response_single"
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `errors` | `[]any` | Yes |  |
| `messages` | `[]any` | Yes |  |
| `result` | `map[string]any` | Yes | Details about a worker uploaded to a Workers for Platforms namespace. |
| `success` | `bool` | Yes | Whether the API call was successful. |

### Operations

#### `Load(reqmatch, ctrl map[string]any) (any, error)`

Load a single entity matching the given criteria.

```go
result, err := client.WorkersNamespaceScriptResponseSingle(nil).Load(map[string]any{"account_id": "account_id", "namespace_id": "namespace_id", "script_name": "script_name"}, nil)
if err != nil {
    panic(err)
}
fmt.Println(result)
```

#### `Update(reqdata, ctrl map[string]any) (any, error)`

Update an existing entity. The data must include the entity `id`.

```go
result, err := client.WorkersNamespaceScriptResponseSingle(nil).Update(map[string]any{
    "account_id": "account_id",
    "namespace_id": "namespace_id",
    "script_name": "script_name",
    // Fields to update
}, nil)
if err != nil {
    panic(err)
}
fmt.Println(result)
```

### Common Methods

#### `Data(args ...any) any`

Get or set the entity data. When called with data, sets the entity's
internal data and returns the current data. When called without
arguments, returns a copy of the current data.

#### `Match(args ...any) any`

Get or set the entity match criteria. Works the same as `Data()`.

#### `Make() Entity`

Create a new `WorkersNamespaceScriptResponseSingleEntity` instance with the same client and
options.

#### `GetName() string`

Return the entity name.


---

## WorkersNamespaceSingleEntity

```go
workersNamespaceSingle := client.WorkersNamespaceSingle(nil)
fmt.Println(workersNamespaceSingle.GetName()) // "workers_namespace_single"
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `errors` | `[]any` | Yes |  |
| `messages` | `[]any` | Yes |  |
| `name` | `string` | No | The name of the dispatch namespace. |
| `result` | `map[string]any` | No |  |
| `success` | `bool` | Yes | Whether the API call was successful. |
| `trusted_workers` | `bool` | No | Whether the Workers in the namespace are executed in a "trusted" manner. |

### Operations

#### `Load(reqmatch, ctrl map[string]any) (any, error)`

Load a single entity matching the given criteria.

```go
result, err := client.WorkersNamespaceSingle(nil).Load(map[string]any{"account_id": "account_id", "dispatch_namespace": "dispatch_namespace"}, nil)
if err != nil {
    panic(err)
}
fmt.Println(result)
```

#### `Create(reqdata, ctrl map[string]any) (any, error)`

Create a new entity with the given data.

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

#### `Update(reqdata, ctrl map[string]any) (any, error)`

Update an existing entity. The data must include the entity `id`.

```go
result, err := client.WorkersNamespaceSingle(nil).Update(map[string]any{
    "account_id": "account_id",
    "dispatch_namespace": "dispatch_namespace",
    // Fields to update
}, nil)
if err != nil {
    panic(err)
}
fmt.Println(result)
```

### Common Methods

#### `Data(args ...any) any`

Get or set the entity data. When called with data, sets the entity's
internal data and returns the current data. When called without
arguments, returns a copy of the current data.

#### `Match(args ...any) any`

Get or set the entity match criteria. Works the same as `Data()`.

#### `Make() Entity`

Create a new `WorkersNamespaceSingleEntity` instance with the same client and
options.

#### `GetName() string`

Return the entity name.


---

## WorkersPipelinesOtherEntity

```go
workersPipelinesOther := client.WorkersPipelinesOther(nil)
fmt.Println(workersPipelinesOther.GetName()) // "workers_pipelines_other"
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `config` | `any` | No | Defines the configuration of the R2 Sink. |
| `created_at` | `string` | Yes |  |
| `destination` | `map[string]any` | Yes |  |
| `endpoint` | `string` | Yes | Indicates the endpoint URL to send traffic. |
| `failure_reason` | `string` | No | Indicates the reason for the failure of the Pipeline. |
| `format` | `any` | No | Defines the output data format of a sink. |
| `graph` | `map[string]any` | Yes | Indicates the processing flow to implement the SQL. |
| `http` | `map[string]any` | Yes |  |
| `id` | `string` | Yes | Indicates a unique identifier for this pipeline. |
| `modified_at` | `string` | Yes |  |
| `name` | `string` | Yes | Indicates the name of the Pipeline. |
| `schema` | `map[string]any` | No | Defines the schema of the events in the data stream. |
| `source` | `[]any` | Yes |  |
| `sql` | `string` | Yes | Specifies SQL for the Pipeline processing flow. |
| `status` | `string` | Yes | Indicates the current status of the Pipeline. |
| `tables` | `[]any` | Yes | List of streams and sinks used by this pipeline. |
| `type` | `string` | Yes | Specifies the type of sink. |
| `version` | `float64` | Yes | Indicates the version number of last saved configuration. |
| `worker_binding` | `map[string]any` | Yes |  |

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

#### `List(reqmatch, ctrl map[string]any) (any, error)`

List entities matching the given criteria. Returns an array.

```go
results, err := client.WorkersPipelinesOther(nil).List(nil, nil)
if err != nil {
    panic(err)
}
fmt.Println(results)
```

#### `Load(reqmatch, ctrl map[string]any) (any, error)`

Load a single entity matching the given criteria.

```go
result, err := client.WorkersPipelinesOther(nil).Load(map[string]any{"account_id": "account_id"}, nil)
if err != nil {
    panic(err)
}
fmt.Println(result)
```

#### `Create(reqdata, ctrl map[string]any) (any, error)`

Create a new entity with the given data.

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

#### `Update(reqdata, ctrl map[string]any) (any, error)`

Update an existing entity. The data must include the entity `id`.

```go
result, err := client.WorkersPipelinesOther(nil).Update(map[string]any{
    "account_id": "account_id",
    "pipeline_name": "pipeline_name",
    // Fields to update
}, nil)
if err != nil {
    panic(err)
}
fmt.Println(result)
```

#### `Remove(reqmatch, ctrl map[string]any) (any, error)`

Remove the entity matching the given criteria.

```go
result, err := client.WorkersPipelinesOther(nil).Remove(map[string]any{"account_id": "account_id"}, nil)
if err != nil {
    panic(err)
}
fmt.Println(result)
```

### Common Methods

#### `Data(args ...any) any`

Get or set the entity data. When called with data, sets the entity's
internal data and returns the current data. When called without
arguments, returns a copy of the current data.

#### `Match(args ...any) any`

Get or set the entity match criteria. Works the same as `Data()`.

#### `Make() Entity`

Create a new `WorkersPipelinesOtherEntity` instance with the same client and
options.

#### `GetName() string`

Return the entity name.


---

## WorkersScriptAndVersionSettingEntity

```go
workersScriptAndVersionSetting := client.WorkersScriptAndVersionSetting(nil)
fmt.Println(workersScriptAndVersionSetting.GetName()) // "workers_script_and_version_setting"
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `errors` | `[]any` | Yes |  |
| `messages` | `[]any` | Yes |  |
| `result` | `map[string]any` | Yes |  |
| `success` | `bool` | Yes | Whether the API call was successful. |

### Operations

#### `List(reqmatch, ctrl map[string]any) (any, error)`

List entities matching the given criteria. Returns an array.

```go
results, err := client.WorkersScriptAndVersionSetting(nil).List(nil, nil)
if err != nil {
    panic(err)
}
fmt.Println(results)
```

#### `Update(reqdata, ctrl map[string]any) (any, error)`

Update an existing entity. The data must include the entity `id`.

```go
result, err := client.WorkersScriptAndVersionSetting(nil).Update(map[string]any{
    "account_id": "account_id",
    "script_name": "script_name",
    // Fields to update
}, nil)
if err != nil {
    panic(err)
}
fmt.Println(result)
```

### Common Methods

#### `Data(args ...any) any`

Get or set the entity data. When called with data, sets the entity's
internal data and returns the current data. When called without
arguments, returns a copy of the current data.

#### `Match(args ...any) any`

Get or set the entity match criteria. Works the same as `Data()`.

#### `Make() Entity`

Create a new `WorkersScriptAndVersionSettingEntity` instance with the same client and
options.

#### `GetName() string`

Return the entity name.


---

## WorkersScriptResponseCollectionEntity

```go
workersScriptResponseCollection := client.WorkersScriptResponseCollection(nil)
fmt.Println(workersScriptResponseCollection.GetName()) // "workers_script_response_collection"
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `errors` | `[]any` | Yes |  |
| `messages` | `[]any` | Yes |  |
| `result` | `[]any` | Yes |  |
| `success` | `bool` | Yes | Whether the API call was successful. |

### Operations

#### `List(reqmatch, ctrl map[string]any) (any, error)`

List entities matching the given criteria. Returns an array.

```go
results, err := client.WorkersScriptResponseCollection(nil).List(nil, nil)
if err != nil {
    panic(err)
}
fmt.Println(results)
```

### Common Methods

#### `Data(args ...any) any`

Get or set the entity data. When called with data, sets the entity's
internal data and returns the current data. When called without
arguments, returns a copy of the current data.

#### `Match(args ...any) any`

Get or set the entity match criteria. Works the same as `Data()`.

#### `Make() Entity`

Create a new `WorkersScriptResponseCollectionEntity` instance with the same client and
options.

#### `GetName() string`

Return the entity name.


---

## WorkersScriptResponseSingleEntity

```go
workersScriptResponseSingle := client.WorkersScriptResponseSingle(nil)
fmt.Println(workersScriptResponseSingle.GetName()) // "workers_script_response_single"
```

### Operations

#### `Update(reqdata, ctrl map[string]any) (any, error)`

Update an existing entity. The data must include the entity `id`.

```go
result, err := client.WorkersScriptResponseSingle(nil).Update(map[string]any{
    "account_id": "account_id",
    // Fields to update
}, nil)
if err != nil {
    panic(err)
}
fmt.Println(result)
```

### Common Methods

#### `Data(args ...any) any`

Get or set the entity data. When called with data, sets the entity's
internal data and returns the current data. When called without
arguments, returns a copy of the current data.

#### `Match(args ...any) any`

Get or set the entity match criteria. Works the same as `Data()`.

#### `Make() Entity`

Create a new `WorkersScriptResponseSingleEntity` instance with the same client and
options.

#### `GetName() string`

Return the entity name.


---

## WorkersSmartPlacementEntity

```go
workersSmartPlacement := client.WorkersSmartPlacement(nil)
fmt.Println(workersSmartPlacement.GetName()) // "workers_smart_placement"
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `errors` | `[]any` | Yes |  |
| `messages` | `[]any` | Yes |  |
| `result` | `map[string]any` | Yes |  |
| `success` | `bool` | Yes | Whether the API call was successful. |

### Operations

#### `List(reqmatch, ctrl map[string]any) (any, error)`

List entities matching the given criteria. Returns an array.

```go
results, err := client.WorkersSmartPlacement(nil).List(nil, nil)
if err != nil {
    panic(err)
}
fmt.Println(results)
```

### Common Methods

#### `Data(args ...any) any`

Get or set the entity data. When called with data, sets the entity's
internal data and returns the current data. When called without
arguments, returns a copy of the current data.

#### `Match(args ...any) any`

Get or set the entity match criteria. Works the same as `Data()`.

#### `Make() Entity`

Create a new `WorkersSmartPlacementEntity` instance with the same client and
options.

#### `GetName() string`

Return the entity name.


---

## WorkersUsageModelEntity

```go
workersUsageModel := client.WorkersUsageModel(nil)
fmt.Println(workersUsageModel.GetName()) // "workers_usage_model"
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `errors` | `[]any` | Yes |  |
| `messages` | `[]any` | Yes |  |
| `result` | `map[string]any` | Yes |  |
| `success` | `bool` | Yes | Whether the API call was successful. |
| `usage_model` | `string` | No | Usage model for the Worker invocations. |
| `user_limits` | `map[string]any` | No | User-defined resource limits for Workers with standard usage model. |

### Operations

#### `List(reqmatch, ctrl map[string]any) (any, error)`

List entities matching the given criteria. Returns an array.

```go
results, err := client.WorkersUsageModel(nil).List(nil, nil)
if err != nil {
    panic(err)
}
fmt.Println(results)
```

#### `Update(reqdata, ctrl map[string]any) (any, error)`

Update an existing entity. The data must include the entity `id`.

```go
result, err := client.WorkersUsageModel(nil).Update(map[string]any{
    "account_id": "account_id",
    "script_name": "script_name",
    // Fields to update
}, nil)
if err != nil {
    panic(err)
}
fmt.Println(result)
```

### Common Methods

#### `Data(args ...any) any`

Get or set the entity data. When called with data, sets the entity's
internal data and returns the current data. When called without
arguments, returns a copy of the current data.

#### `Match(args ...any) any`

Get or set the entity match criteria. Works the same as `Data()`.

#### `Make() Entity`

Create a new `WorkersUsageModelEntity` instance with the same client and
options.

#### `GetName() string`

Return the entity name.


---

## WorkersVersionsListEntity

```go
workersVersionsList := client.WorkersVersionsList(nil)
fmt.Println(workersVersionsList.GetName()) // "workers_versions_list"
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `errors` | `[]any` | Yes |  |
| `messages` | `[]any` | Yes |  |
| `result` | `map[string]any` | Yes |  |
| `success` | `bool` | Yes | Whether the API call was successful. |

### Operations

#### `List(reqmatch, ctrl map[string]any) (any, error)`

List entities matching the given criteria. Returns an array.

```go
results, err := client.WorkersVersionsList(nil).List(nil, nil)
if err != nil {
    panic(err)
}
fmt.Println(results)
```

### Common Methods

#### `Data(args ...any) any`

Get or set the entity data. When called with data, sets the entity's
internal data and returns the current data. When called without
arguments, returns a copy of the current data.

#### `Match(args ...any) any`

Get or set the entity match criteria. Works the same as `Data()`.

#### `Make() Entity`

Create a new `WorkersVersionsListEntity` instance with the same client and
options.

#### `GetName() string`

Return the entity name.


---

## WorkersVersionsSingleEntity

```go
workersVersionsSingle := client.WorkersVersionsSingle(nil)
fmt.Println(workersVersionsSingle.GetName()) // "workers_versions_single"
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `errors` | `[]any` | Yes |  |
| `messages` | `[]any` | Yes |  |
| `result` | `any` | Yes |  |
| `success` | `bool` | Yes | Whether the API call was successful. |

### Operations

#### `Load(reqmatch, ctrl map[string]any) (any, error)`

Load a single entity matching the given criteria.

```go
result, err := client.WorkersVersionsSingle(nil).Load(map[string]any{"account_id": "account_id", "script_id": "script_id", "version_id": "version_id"}, nil)
if err != nil {
    panic(err)
}
fmt.Println(result)
```

### Common Methods

#### `Data(args ...any) any`

Get or set the entity data. When called with data, sets the entity's
internal data and returns the current data. When called without
arguments, returns a copy of the current data.

#### `Match(args ...any) any`

Get or set the entity match criteria. Works the same as `Data()`.

#### `Make() Entity`

Create a new `WorkersVersionsSingleEntity` instance with the same client and
options.

#### `GetName() string`

Return the entity name.


---

## WorkersVersionsUploadEntity

```go
workersVersionsUpload := client.WorkersVersionsUpload(nil)
fmt.Println(workersVersionsUpload.GetName()) // "workers_versions_upload"
```

### Operations

#### `Create(reqdata, ctrl map[string]any) (any, error)`

Create a new entity with the given data.

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

### Common Methods

#### `Data(args ...any) any`

Get or set the entity data. When called with data, sets the entity's
internal data and returns the current data. When called without
arguments, returns a copy of the current data.

#### `Match(args ...any) any`

Get or set the entity match criteria. Works the same as `Data()`.

#### `Make() Entity`

Create a new `WorkersVersionsUploadEntity` instance with the same client and
options.

#### `GetName() string`

Return the entity name.


---

## WorkflowEntity

```go
workflow := client.Workflow(nil)
fmt.Println(workflow.GetName()) // "workflow"
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `class_name` | `string` | Yes |  |
| `concurrency` | `map[string]any` | No |  |
| `default_retention` | `map[string]any` | No | Default retention applied to instances of this version when they do not set their own retention. |
| `errors` | `[]any` | Yes |  |
| `id` | `string` | No |  |
| `instances` | `[]any` | Yes |  |
| `limits` | `map[string]any` | No |  |
| `messages` | `[]any` | Yes |  |
| `result` | `map[string]any` | Yes |  |
| `result_info` | `map[string]any` | Yes |  |
| `schedules` | `[]any` | No |  |
| `script_name` | `string` | Yes |  |
| `success` | `bool` | Yes |  |

### Operations

#### `List(reqmatch, ctrl map[string]any) (any, error)`

List entities matching the given criteria. Returns an array.

```go
results, err := client.Workflow(nil).List(nil, nil)
if err != nil {
    panic(err)
}
fmt.Println(results)
```

#### `Load(reqmatch, ctrl map[string]any) (any, error)`

Load a single entity matching the given criteria.

```go
result, err := client.Workflow(nil).Load(map[string]any{"id": "workflow_id", "account_id": "account_id"}, nil)
if err != nil {
    panic(err)
}
fmt.Println(result)
```

#### `Create(reqdata, ctrl map[string]any) (any, error)`

Create a new entity with the given data.

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

#### `Update(reqdata, ctrl map[string]any) (any, error)`

Update an existing entity. The data must include the entity `id`.

```go
result, err := client.Workflow(nil).Update(map[string]any{
    "id": "workflow_id",
    "account_id": "account_id",
    // Fields to update
}, nil)
if err != nil {
    panic(err)
}
fmt.Println(result)
```

#### `Remove(reqmatch, ctrl map[string]any) (any, error)`

Remove the entity matching the given criteria.

```go
result, err := client.Workflow(nil).Remove(map[string]any{"id": "workflow_id", "account_id": "account_id"}, nil)
if err != nil {
    panic(err)
}
fmt.Println(result)
```

### Common Methods

#### `Data(args ...any) any`

Get or set the entity data. When called with data, sets the entity's
internal data and returns the current data. When called without
arguments, returns a copy of the current data.

#### `Match(args ...any) any`

Get or set the entity match criteria. Works the same as `Data()`.

#### `Make() Entity`

Create a new `WorkflowEntity` instance with the same client and
options.

#### `GetName() string`

Return the entity name.


---

## Features

| Feature | Version | Description |
| --- | --- | --- |
| `test` | 0.0.1 | Test transport |


Features are activated via the `feature` option:

```go
client := sdk.NewCloudflareWorkersSDK(map[string]any{
    "feature": map[string]any{
        "test": map[string]any{"active": true},
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

