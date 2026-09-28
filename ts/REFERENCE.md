# CloudflareWorkers TypeScript SDK Reference

Complete API reference for the CloudflareWorkers TypeScript SDK.


## CloudflareWorkersSDK

### Constructor

```ts
new CloudflareWorkersSDK(options?: object)
```

Create a new SDK client instance.

**Parameters:**

| Name | Type | Description |
| --- | --- | --- |
| `options` | `object` | SDK configuration options. |
| `options.apikey` | `string` | API key for authentication. |
| `options.base` | `string` | Base URL for API requests. |
| `options.prefix` | `string` | URL prefix appended after base. |
| `options.suffix` | `string` | URL suffix appended after path. |
| `options.headers` | `object` | Custom headers for all requests. |
| `options.feature` | `object` | Feature configuration. |
| `options.system` | `object` | System overrides (e.g. custom fetch). |


### Static Methods

#### `CloudflareWorkersSDK.test(testopts?, sdkopts?)`

Create a test client with mock features active.

```ts
const client = CloudflareWorkersSDK.test()
```

**Parameters:**

| Name | Type | Description |
| --- | --- | --- |
| `testopts` | `object` | Test feature options. |
| `sdkopts` | `object` | Additional SDK options merged with test defaults. |

**Returns:** `CloudflareWorkersSDK` instance in test mode.


### Instance Methods

#### `Account(data?: object)`

Create a new `Account` entity instance.

**Parameters:**

| Name | Type | Description |
| --- | --- | --- |
| `data` | `object` | Initial entity data. |

**Returns:** `AccountEntity` instance.

#### `Application(data?: object)`

Create a new `Application` entity instance.

**Parameters:**

| Name | Type | Description |
| --- | --- | --- |
| `data` | `object` | Initial entity data. |

**Returns:** `ApplicationEntity` instance.

#### `Brapi(data?: object)`

Create a new `Brapi` entity instance.

**Parameters:**

| Name | Type | Description |
| --- | --- | --- |
| `data` | `object` | Initial entity data. |

**Returns:** `BrapiEntity` instance.

#### `Build(data?: object)`

Create a new `Build` entity instance.

**Parameters:**

| Name | Type | Description |
| --- | --- | --- |
| `data` | `object` | Initial entity data. |

**Returns:** `BuildEntity` instance.

#### `BuildToken(data?: object)`

Create a new `BuildToken` entity instance.

**Parameters:**

| Name | Type | Description |
| --- | --- | --- |
| `data` | `object` | Initial entity data. |

**Returns:** `BuildTokenEntity` instance.

#### `BuildsApi(data?: object)`

Create a new `BuildsApi` entity instance.

**Parameters:**

| Name | Type | Description |
| --- | --- | --- |
| `data` | `object` | Initial entity data. |

**Returns:** `BuildsApiEntity` instance.

#### `Connection(data?: object)`

Create a new `Connection` entity instance.

**Parameters:**

| Name | Type | Description |
| --- | --- | --- |
| `data` | `object` | Initial entity data. |

**Returns:** `ConnectionEntity` instance.

#### `ContainerImage(data?: object)`

Create a new `ContainerImage` entity instance.

**Parameters:**

| Name | Type | Description |
| --- | --- | --- |
| `data` | `object` | Initial entity data. |

**Returns:** `ContainerImageEntity` instance.

#### `ContainerInstance(data?: object)`

Create a new `ContainerInstance` entity instance.

**Parameters:**

| Name | Type | Description |
| --- | --- | --- |
| `data` | `object` | Initial entity data. |

**Returns:** `ContainerInstanceEntity` instance.

#### `DeployHook(data?: object)`

Create a new `DeployHook` entity instance.

**Parameters:**

| Name | Type | Description |
| --- | --- | --- |
| `data` | `object` | Initial entity data. |

**Returns:** `DeployHookEntity` instance.

#### `Deployment(data?: object)`

Create a new `Deployment` entity instance.

**Parameters:**

| Name | Type | Description |
| --- | --- | --- |
| `data` | `object` | Initial entity data. |

**Returns:** `DeploymentEntity` instance.

#### `Destination(data?: object)`

Create a new `Destination` entity instance.

**Parameters:**

| Name | Type | Description |
| --- | --- | --- |
| `data` | `object` | Initial entity data. |

**Returns:** `DestinationEntity` instance.

#### `Domain(data?: object)`

Create a new `Domain` entity instance.

**Parameters:**

| Name | Type | Description |
| --- | --- | --- |
| `data` | `object` | Initial entity data. |

**Returns:** `DomainEntity` instance.

#### `DurableObjectsNamespace(data?: object)`

Create a new `DurableObjectsNamespace` entity instance.

**Parameters:**

| Name | Type | Description |
| --- | --- | --- |
| `data` | `object` | Initial entity data. |

**Returns:** `DurableObjectsNamespaceEntity` instance.

#### `EnvironmentVariable(data?: object)`

Create a new `EnvironmentVariable` entity instance.

**Parameters:**

| Name | Type | Description |
| --- | --- | --- |
| `data` | `object` | Initial entity data. |

**Returns:** `EnvironmentVariableEntity` instance.

#### `GitHubIntegration(data?: object)`

Create a new `GitHubIntegration` entity instance.

**Parameters:**

| Name | Type | Description |
| --- | --- | --- |
| `data` | `object` | Initial entity data. |

**Returns:** `GitHubIntegrationEntity` instance.

#### `Hyperdrive(data?: object)`

Create a new `Hyperdrive` entity instance.

**Parameters:**

| Name | Type | Description |
| --- | --- | --- |
| `data` | `object` | Initial entity data. |

**Returns:** `HyperdriveEntity` instance.

#### `ImageRegistry(data?: object)`

Create a new `ImageRegistry` entity instance.

**Parameters:**

| Name | Type | Description |
| --- | --- | --- |
| `data` | `object` | Initial entity data. |

**Returns:** `ImageRegistryEntity` instance.

#### `Issue(data?: object)`

Create a new `Issue` entity instance.

**Parameters:**

| Name | Type | Description |
| --- | --- | --- |
| `data` | `object` | Initial entity data. |

**Returns:** `IssueEntity` instance.

#### `Key(data?: object)`

Create a new `Key` entity instance.

**Parameters:**

| Name | Type | Description |
| --- | --- | --- |
| `data` | `object` | Initial entity data. |

**Returns:** `KeyEntity` instance.

#### `LiveTail(data?: object)`

Create a new `LiveTail` entity instance.

**Parameters:**

| Name | Type | Description |
| --- | --- | --- |
| `data` | `object` | Initial entity data. |

**Returns:** `LiveTailEntity` instance.

#### `MetricsExport(data?: object)`

Create a new `MetricsExport` entity instance.

**Parameters:**

| Name | Type | Description |
| --- | --- | --- |
| `data` | `object` | Initial entity data. |

**Returns:** `MetricsExportEntity` instance.

#### `Namespace(data?: object)`

Create a new `Namespace` entity instance.

**Parameters:**

| Name | Type | Description |
| --- | --- | --- |
| `data` | `object` | Initial entity data. |

**Returns:** `NamespaceEntity` instance.

#### `Preview(data?: object)`

Create a new `Preview` entity instance.

**Parameters:**

| Name | Type | Description |
| --- | --- | --- |
| `data` | `object` | Initial entity data. |

**Returns:** `PreviewEntity` instance.

#### `PreviewDeployment(data?: object)`

Create a new `PreviewDeployment` entity instance.

**Parameters:**

| Name | Type | Description |
| --- | --- | --- |
| `data` | `object` | Initial entity data. |

**Returns:** `PreviewDeploymentEntity` instance.

#### `Query(data?: object)`

Create a new `Query` entity instance.

**Parameters:**

| Name | Type | Description |
| --- | --- | --- |
| `data` | `object` | Initial entity data. |

**Returns:** `QueryEntity` instance.

#### `RepositoryConnection(data?: object)`

Create a new `RepositoryConnection` entity instance.

**Parameters:**

| Name | Type | Description |
| --- | --- | --- |
| `data` | `object` | Initial entity data. |

**Returns:** `RepositoryConnectionEntity` instance.

#### `Rollout(data?: object)`

Create a new `Rollout` entity instance.

**Parameters:**

| Name | Type | Description |
| --- | --- | --- |
| `data` | `object` | Initial entity data. |

**Returns:** `RolloutEntity` instance.

#### `SavedQuery(data?: object)`

Create a new `SavedQuery` entity instance.

**Parameters:**

| Name | Type | Description |
| --- | --- | --- |
| `data` | `object` | Initial entity data. |

**Returns:** `SavedQueryEntity` instance.

#### `Script(data?: object)`

Create a new `Script` entity instance.

**Parameters:**

| Name | Type | Description |
| --- | --- | --- |
| `data` | `object` | Initial entity data. |

**Returns:** `ScriptEntity` instance.

#### `ScriptSetting(data?: object)`

Create a new `ScriptSetting` entity instance.

**Parameters:**

| Name | Type | Description |
| --- | --- | --- |
| `data` | `object` | Initial entity data. |

**Returns:** `ScriptSettingEntity` instance.

#### `Secret(data?: object)`

Create a new `Secret` entity instance.

**Parameters:**

| Name | Type | Description |
| --- | --- | --- |
| `data` | `object` | Initial entity data. |

**Returns:** `SecretEntity` instance.

#### `SecretsStoreDelete(data?: object)`

Create a new `SecretsStoreDelete` entity instance.

**Parameters:**

| Name | Type | Description |
| --- | --- | --- |
| `data` | `object` | Initial entity data. |

**Returns:** `SecretsStoreDeleteEntity` instance.

#### `SecretsStoreQuota(data?: object)`

Create a new `SecretsStoreQuota` entity instance.

**Parameters:**

| Name | Type | Description |
| --- | --- | --- |
| `data` | `object` | Initial entity data. |

**Returns:** `SecretsStoreQuotaEntity` instance.

#### `SecretsStoreSecret(data?: object)`

Create a new `SecretsStoreSecret` entity instance.

**Parameters:**

| Name | Type | Description |
| --- | --- | --- |
| `data` | `object` | Initial entity data. |

**Returns:** `SecretsStoreSecretEntity` instance.

#### `SecretsStoreStore(data?: object)`

Create a new `SecretsStoreStore` entity instance.

**Parameters:**

| Name | Type | Description |
| --- | --- | --- |
| `data` | `object` | Initial entity data. |

**Returns:** `SecretsStoreStoreEntity` instance.

#### `SecretsStoreStoresResponseCollection(data?: object)`

Create a new `SecretsStoreStoresResponseCollection` entity instance.

**Parameters:**

| Name | Type | Description |
| --- | --- | --- |
| `data` | `object` | Initial entity data. |

**Returns:** `SecretsStoreStoresResponseCollectionEntity` instance.

#### `Setting(data?: object)`

Create a new `Setting` entity instance.

**Parameters:**

| Name | Type | Description |
| --- | --- | --- |
| `data` | `object` | Initial entity data. |

**Returns:** `SettingEntity` instance.

#### `Shared(data?: object)`

Create a new `Shared` entity instance.

**Parameters:**

| Name | Type | Description |
| --- | --- | --- |
| `data` | `object` | Initial entity data. |

**Returns:** `SharedEntity` instance.

#### `Tail(data?: object)`

Create a new `Tail` entity instance.

**Parameters:**

| Name | Type | Description |
| --- | --- | --- |
| `data` | `object` | Initial entity data. |

**Returns:** `TailEntity` instance.

#### `Token(data?: object)`

Create a new `Token` entity instance.

**Parameters:**

| Name | Type | Description |
| --- | --- | --- |
| `data` | `object` | Initial entity data. |

**Returns:** `TokenEntity` instance.

#### `Trigger(data?: object)`

Create a new `Trigger` entity instance.

**Parameters:**

| Name | Type | Description |
| --- | --- | --- |
| `data` | `object` | Initial entity data. |

**Returns:** `TriggerEntity` instance.

#### `Usage(data?: object)`

Create a new `Usage` entity instance.

**Parameters:**

| Name | Type | Description |
| --- | --- | --- |
| `data` | `object` | Initial entity data. |

**Returns:** `UsageEntity` instance.

#### `Value(data?: object)`

Create a new `Value` entity instance.

**Parameters:**

| Name | Type | Description |
| --- | --- | --- |
| `data` | `object` | Initial entity data. |

**Returns:** `ValueEntity` instance.

#### `Version(data?: object)`

Create a new `Version` entity instance.

**Parameters:**

| Name | Type | Description |
| --- | --- | --- |
| `data` | `object` | Initial entity data. |

**Returns:** `VersionEntity` instance.

#### `Worker(data?: object)`

Create a new `Worker` entity instance.

**Parameters:**

| Name | Type | Description |
| --- | --- | --- |
| `data` | `object` | Initial entity data. |

**Returns:** `WorkerEntity` instance.

#### `WorkerCronTrigger(data?: object)`

Create a new `WorkerCronTrigger` entity instance.

**Parameters:**

| Name | Type | Description |
| --- | --- | --- |
| `data` | `object` | Initial entity data. |

**Returns:** `WorkerCronTriggerEntity` instance.

#### `WorkerDeployment(data?: object)`

Create a new `WorkerDeployment` entity instance.

**Parameters:**

| Name | Type | Description |
| --- | --- | --- |
| `data` | `object` | Initial entity data. |

**Returns:** `WorkerDeploymentEntity` instance.

#### `WorkerEnvironment(data?: object)`

Create a new `WorkerEnvironment` entity instance.

**Parameters:**

| Name | Type | Description |
| --- | --- | --- |
| `data` | `object` | Initial entity data. |

**Returns:** `WorkerEnvironmentEntity` instance.

#### `WorkerRoute(data?: object)`

Create a new `WorkerRoute` entity instance.

**Parameters:**

| Name | Type | Description |
| --- | --- | --- |
| `data` | `object` | Initial entity data. |

**Returns:** `WorkerRouteEntity` instance.

#### `WorkerScript(data?: object)`

Create a new `WorkerScript` entity instance.

**Parameters:**

| Name | Type | Description |
| --- | --- | --- |
| `data` | `object` | Initial entity data. |

**Returns:** `WorkerScriptEntity` instance.

#### `WorkerSubdomain(data?: object)`

Create a new `WorkerSubdomain` entity instance.

**Parameters:**

| Name | Type | Description |
| --- | --- | --- |
| `data` | `object` | Initial entity data. |

**Returns:** `WorkerSubdomainEntity` instance.

#### `WorkerTailLog(data?: object)`

Create a new `WorkerTailLog` entity instance.

**Parameters:**

| Name | Type | Description |
| --- | --- | --- |
| `data` | `object` | Initial entity data. |

**Returns:** `WorkerTailLogEntity` instance.

#### `WorkersAccountSetting(data?: object)`

Create a new `WorkersAccountSetting` entity instance.

**Parameters:**

| Name | Type | Description |
| --- | --- | --- |
| `data` | `object` | Initial entity data. |

**Returns:** `WorkersAccountSettingEntity` instance.

#### `WorkersApiResponseNullResult(data?: object)`

Create a new `WorkersApiResponseNullResult` entity instance.

**Parameters:**

| Name | Type | Description |
| --- | --- | --- |
| `data` | `object` | Initial entity data. |

**Returns:** `WorkersApiResponseNullResultEntity` instance.

#### `WorkersCompletedUploadAsset(data?: object)`

Create a new `WorkersCompletedUploadAsset` entity instance.

**Parameters:**

| Name | Type | Description |
| --- | --- | --- |
| `data` | `object` | Initial entity data. |

**Returns:** `WorkersCompletedUploadAssetEntity` instance.

#### `WorkersCreateAssetsUploadSession(data?: object)`

Create a new `WorkersCreateAssetsUploadSession` entity instance.

**Parameters:**

| Name | Type | Description |
| --- | --- | --- |
| `data` | `object` | Initial entity data. |

**Returns:** `WorkersCreateAssetsUploadSessionEntity` instance.

#### `WorkersForPlatform(data?: object)`

Create a new `WorkersForPlatform` entity instance.

**Parameters:**

| Name | Type | Description |
| --- | --- | --- |
| `data` | `object` | Initial entity data. |

**Returns:** `WorkersForPlatformEntity` instance.

#### `WorkersKvApiResponseCommonNoResult(data?: object)`

Create a new `WorkersKvApiResponseCommonNoResult` entity instance.

**Parameters:**

| Name | Type | Description |
| --- | --- | --- |
| `data` | `object` | Initial entity data. |

**Returns:** `WorkersKvApiResponseCommonNoResultEntity` instance.

#### `WorkersKvNamespace(data?: object)`

Create a new `WorkersKvNamespace` entity instance.

**Parameters:**

| Name | Type | Description |
| --- | --- | --- |
| `data` | `object` | Initial entity data. |

**Returns:** `WorkersKvNamespaceEntity` instance.

#### `WorkersNamespaceList(data?: object)`

Create a new `WorkersNamespaceList` entity instance.

**Parameters:**

| Name | Type | Description |
| --- | --- | --- |
| `data` | `object` | Initial entity data. |

**Returns:** `WorkersNamespaceListEntity` instance.

#### `WorkersNamespaceScriptDeleteBulk(data?: object)`

Create a new `WorkersNamespaceScriptDeleteBulk` entity instance.

**Parameters:**

| Name | Type | Description |
| --- | --- | --- |
| `data` | `object` | Initial entity data. |

**Returns:** `WorkersNamespaceScriptDeleteBulkEntity` instance.

#### `WorkersNamespaceScriptResponseSingle(data?: object)`

Create a new `WorkersNamespaceScriptResponseSingle` entity instance.

**Parameters:**

| Name | Type | Description |
| --- | --- | --- |
| `data` | `object` | Initial entity data. |

**Returns:** `WorkersNamespaceScriptResponseSingleEntity` instance.

#### `WorkersNamespaceSingle(data?: object)`

Create a new `WorkersNamespaceSingle` entity instance.

**Parameters:**

| Name | Type | Description |
| --- | --- | --- |
| `data` | `object` | Initial entity data. |

**Returns:** `WorkersNamespaceSingleEntity` instance.

#### `WorkersPipelinesOther(data?: object)`

Create a new `WorkersPipelinesOther` entity instance.

**Parameters:**

| Name | Type | Description |
| --- | --- | --- |
| `data` | `object` | Initial entity data. |

**Returns:** `WorkersPipelinesOtherEntity` instance.

#### `WorkersScriptAndVersionSetting(data?: object)`

Create a new `WorkersScriptAndVersionSetting` entity instance.

**Parameters:**

| Name | Type | Description |
| --- | --- | --- |
| `data` | `object` | Initial entity data. |

**Returns:** `WorkersScriptAndVersionSettingEntity` instance.

#### `WorkersScriptResponseCollection(data?: object)`

Create a new `WorkersScriptResponseCollection` entity instance.

**Parameters:**

| Name | Type | Description |
| --- | --- | --- |
| `data` | `object` | Initial entity data. |

**Returns:** `WorkersScriptResponseCollectionEntity` instance.

#### `WorkersScriptResponseSingle(data?: object)`

Create a new `WorkersScriptResponseSingle` entity instance.

**Parameters:**

| Name | Type | Description |
| --- | --- | --- |
| `data` | `object` | Initial entity data. |

**Returns:** `WorkersScriptResponseSingleEntity` instance.

#### `WorkersSmartPlacement(data?: object)`

Create a new `WorkersSmartPlacement` entity instance.

**Parameters:**

| Name | Type | Description |
| --- | --- | --- |
| `data` | `object` | Initial entity data. |

**Returns:** `WorkersSmartPlacementEntity` instance.

#### `WorkersUsageModel(data?: object)`

Create a new `WorkersUsageModel` entity instance.

**Parameters:**

| Name | Type | Description |
| --- | --- | --- |
| `data` | `object` | Initial entity data. |

**Returns:** `WorkersUsageModelEntity` instance.

#### `WorkersVersionsList(data?: object)`

Create a new `WorkersVersionsList` entity instance.

**Parameters:**

| Name | Type | Description |
| --- | --- | --- |
| `data` | `object` | Initial entity data. |

**Returns:** `WorkersVersionsListEntity` instance.

#### `WorkersVersionsSingle(data?: object)`

Create a new `WorkersVersionsSingle` entity instance.

**Parameters:**

| Name | Type | Description |
| --- | --- | --- |
| `data` | `object` | Initial entity data. |

**Returns:** `WorkersVersionsSingleEntity` instance.

#### `WorkersVersionsUpload(data?: object)`

Create a new `WorkersVersionsUpload` entity instance.

**Parameters:**

| Name | Type | Description |
| --- | --- | --- |
| `data` | `object` | Initial entity data. |

**Returns:** `WorkersVersionsUploadEntity` instance.

#### `Workflow(data?: object)`

Create a new `Workflow` entity instance.

**Parameters:**

| Name | Type | Description |
| --- | --- | --- |
| `data` | `object` | Initial entity data. |

**Returns:** `WorkflowEntity` instance.

#### `options()`

Return a deep copy of the current SDK options.

**Returns:** `object`

#### `utility()`

Return a copy of the SDK utility object.

**Returns:** `object`

#### `direct(fetchargs?: object)`

Make a direct HTTP request to any API endpoint.

**Parameters:**

| Name | Type | Description |
| --- | --- | --- |
| `fetchargs.path` | `string` | URL path with optional `{param}` placeholders. |
| `fetchargs.method` | `string` | HTTP method (default: `GET`). |
| `fetchargs.params` | `object` | Path parameter values for `{param}` substitution. |
| `fetchargs.query` | `object` | Query string parameters. |
| `fetchargs.headers` | `object` | Request headers (merged with defaults). |
| `fetchargs.body` | `any` | Request body (objects are JSON-serialized). |
| `fetchargs.ctrl` | `object` | Control options (e.g. `{ explain: true }`). |

**Returns:** `Promise<{ ok, status, headers, data } | Error>`

#### `prepare(fetchargs?: object)`

Prepare a fetch definition without sending the request. Accepts the
same parameters as `direct()`.

**Returns:** `Promise<{ url, method, headers, body } | Error>`

#### `tester(testopts?, sdkopts?)`

Alias for `CloudflareWorkersSDK.test()`.

**Returns:** `CloudflareWorkersSDK` instance in test mode.


---

## AccountEntity

```ts
const account = client.Account()
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `id` | `string` | No |  |

### Actions

This entity exposes custom API actions in addition to the standard
operations. Select one with `$action` in the call's argument; the
remaining keys are sent as that action's payload.

| Action | Route | Call |
| --- | --- | --- |
| `limit` | `/accounts/{account_id}/builds/account/limits` | `client.Account().list({ $action: 'limit', ... })` |

An action returns that action's OWN response, which is not necessarily a
Account record — check the API definition for its shape.

```ts
const result = await client.Account().list({
  $action: 'limit',
  /* ...the action's own arguments */
})
```

### Operations

#### `list(match: object, ctrl?: object)`

List entities matching the given criteria. Returns an array.

```ts
const results = await client.Account().list({ id: "example" })
```

### Common Methods

#### `data(data?: object)`

Get or set the entity data. When called with data, sets the entity's
internal data and returns the current data. When called without
arguments, returns a copy of the current data.

#### `match(match?: object)`

Get or set the entity match criteria. Works the same as `data()`.

#### `make()`

Create a new `AccountEntity` instance with the same client and
options.

#### `client()`

Return the parent `CloudflareWorkersSDK` instance.

#### `entopts()`

Return a copy of the entity options.


---

## ApplicationEntity

```ts
const application = client.Application()
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `configuration` | `Record<string, any>` | No | Application configuration fields you can change without creating a rollout. |
| `constraints` | `Record<string, any>` | No |  |
| `errors` | `any[]` | Yes |  |
| `id` | `string` | No |  |
| `max_instances` | `number` | No | Maximum number of instances that an autoscaling application can run. |
| `messages` | `any[]` | Yes |  |
| `observability` | `any` | No | Top-level application observability settings. |
| `result` | `any` | Yes | The public Containers API returns an application. |
| `result_info` | `Record<string, any>` | Yes | Cursor pagination details for a v4 API list response. |
| `rollout_active_grace_period` | `number` | No | Grace period for active instances to stay alive before becoming eligible for shutdown signal due to a rollout, in seconds. |
| `success` | `boolean` | Yes | Whether the API call was successful. |

### Actions

This entity exposes custom API actions in addition to the standard
operations. Select one with `$action` in the call's argument; the
remaining keys are sent as that action's payload.

| Action | Route | Call |
| --- | --- | --- |
| `version` | `/accounts/{account_id}/containers/applications/{application_id}/versions` | `client.Application().list({ $action: 'version', ... })` |

An action returns that action's OWN response, which is not necessarily a
Application record — check the API definition for its shape.

```ts
const result = await client.Application().list({
  $action: 'version',
  /* ...the action's own arguments */
})
```

### Operations

#### `create(data: object, ctrl?: object)`

Create a new entity with the given data.

```ts
const result = await client.Application().create({
  account_id: 'example_account_id',
  errors: [],
  messages: [],
  result: 'example_result',
  result_info: {},
  success: true,
})
```

#### `list(match: object, ctrl?: object)`

List entities matching the given criteria. Returns an array.

```ts
const results = await client.Application().list({ account_id: "example" })
```

#### `load(match: object, ctrl?: object)`

Load a single entity matching the given criteria.

```ts
const result = await client.Application().load({ id: 'application_id', account_id: 'account_id' })
```

#### `remove(match: object, ctrl?: object)`

Remove the entity matching the given criteria.

```ts
const result = await client.Application().remove({ id: 'application_id', account_id: 'account_id' })
```

#### `update(data: object, ctrl?: object)`

Update an existing entity. The data must include the entity `id`.

```ts
const result = await client.Application().update({
  id: 'application_id',
  account_id: 'account_id',
  // Fields to update
})
```

### Common Methods

#### `data(data?: object)`

Get or set the entity data. When called with data, sets the entity's
internal data and returns the current data. When called without
arguments, returns a copy of the current data.

#### `match(match?: object)`

Get or set the entity match criteria. Works the same as `data()`.

#### `make()`

Create a new `ApplicationEntity` instance with the same client and
options.

#### `client()`

Return the parent `CloudflareWorkersSDK` instance.

#### `entopts()`

Return a copy of the entity options.


---

## BrapiEntity

```ts
const brapi = client.Brapi()
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
| `addScriptTag` | `any[]` | No | Adds a script element into the page with the desired URL or content. |
| `addStyleTag` | `any[]` | No | Adds a `<link rel="stylesheet">` tag into the page with the desired URL or a `<style type="text/css">` tag with the content. |
| `allowRequestPattern` | `any[]` | No | Only allow requests that match the provided regex patterns, eg. |
| `allowResourceTypes` | `any[]` | No | Only allow requests that match the provided resource types, eg. |
| `authenticate` | `Record<string, any>` | Yes | Provide credentials for HTTP authentication. |
| `bestAttempt` | `boolean` | No | Attempt to proceed when 'awaited' events fail or timeout. |
| `closeReason` | `number` | No | Reason code for session closure. |
| `closeReasonText` | `string` | No | Human-readable close reason. |
| `commands` | `any[]` | No | Available commands. |
| `connectionEndTime` | `number` | No | Connection end time. |
| `connectionId` | `string` | No | Connection ID. |
| `connectionStartTime` | `number` | No | Connection start time. |
| `cookies` | `any[]` | No | Check [options](https://pptr.dev/api/puppeteer.page.setcookie). |
| `custom_ai` | `any[]` | No | Optional list of custom AI models to use for the request. |
| `dependencies` | `any[]` | No | Domain dependencies. |
| `description` | `string` | No | Target description. |
| `devtoolsFrontendUrl` | `string` | No | DevTools frontend URL. |
| `domain` | `string` | Yes | Domain name. |
| `elements` | `any[]` | Yes |  |
| `emulateMediaType` | `string` | No |  |
| `endTime` | `number` | No | Session end time. |
| `errors` | `any[]` | No |  |
| `events` | `any[]` | No | Available events. |
| `excludeExternalLinks` | `boolean` | No |  |
| `experimental` | `boolean` | No | Whether this domain is experimental. |
| `formats` | `any[]` | No |  |
| `gotoOptions` | `Record<string, any>` | No | Check [options](https://pptr.dev/api/puppeteer.gotooptions). |
| `guardrails` | `Record<string, any>` | No |  |
| `html` | `string` | No | Set the content of the page, eg: `<h1>Hello World!!</h1>`. |
| `id` | `string` | Yes | Target ID. |
| `interestingOnly` | `boolean` | No |  |
| `lastUpdated` | `number` | No | Last updated timestamp. |
| `message` | `string` | Yes | Target activated. |
| `meta` | `Record<string, any>` | Yes |  |
| `pdfOptions` | `Record<string, any>` | No | Check [options](https://pptr.dev/api/puppeteer.pdfoptions). |
| `prompt` | `string` | No |  |
| `rejectRequestPattern` | `any[]` | No | Block undesired requests that match the provided regex patterns, eg. |
| `rejectResourceTypes` | `any[]` | No | Block undesired requests that match the provided resource types, eg. |
| `response_format` | `Record<string, any>` | Yes |  |
| `result` | `Record<string, any>` | Yes | HTML content. |
| `root` | `string` | No |  |
| `screenshotOptions` | `Record<string, any>` | No | Check [options](https://pptr.dev/api/puppeteer.screenshotoptions). |
| `scrollPage` | `boolean` | No |  |
| `selector` | `string` | No |  |
| `sessionId` | `string` | Yes | Session ID. |
| `setExtraHTTPHeaders` | `Record<string, any>` | No |  |
| `setJavaScriptEnabled` | `boolean` | No |  |
| `startTime` | `number` | No | Session start time. |
| `success` | `boolean` | Yes | Response status. |
| `title` | `string` | No | Title of the target. |
| `type` | `string` | Yes | Target type (page, background_page, worker, etc.). |
| `types` | `any[]` | No | Type definitions. |
| `url` | `string` | Yes | URL of the target. |
| `userAgent` | `string` | No |  |
| `viewport` | `Record<string, any>` | Yes | Check [options](https://pptr.dev/api/puppeteer.page.setviewport). |
| `visibleLinksOnly` | `boolean` | No |  |
| `waitForSelector` | `Record<string, any>` | Yes | Wait for the selector to appear in page. |
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

### Actions

This entity exposes custom API actions in addition to the standard
operations. Select one with `$action` in the call's argument; the
remaining keys are sent as that action's payload.

| Action | Route | Call |
| --- | --- | --- |
| `live_view` | `/accounts/{account_id}/browser-rendering/devtools/browser/{session_id}/live_view` | `client.Brapi().create({ $action: 'live_view', ... })` |

An action returns that action's OWN response, which is not necessarily a
Brapi record — check the API definition for its shape.

```ts
const result = await client.Brapi().create({
  $action: 'live_view',
  /* ...the action's own arguments */
})
```

### Operations

#### `create(data: object, ctrl?: object)`

Create a new entity with the given data.

```ts
const result = await client.Brapi().create({
  account_id: 'example_account_id',
  Browser: 'example_Browser',
  ProtocolVersion: 'example_ProtocolVersion',
  UserAgent: 'example_UserAgent',
  V8Version: 'example_V8Version',
  WebKitVersion: 'example_WebKitVersion',
  authenticate: {},
  domain: 'example_domain',
  elements: [],
  id: 'example_id',
  message: 'example_message',
  meta: {},
  response_format: {},
  result: {},
  sessionId: 'example_sessionId',
  success: true,
  type: 'example_type',
  url: 'example_url',
  viewport: {},
  waitForSelector: {},
})
```

#### `list(match: object, ctrl?: object)`

List entities matching the given criteria. Returns an array.

```ts
const results = await client.Brapi().list({ account_id: "example" })
```

#### `load(match: object, ctrl?: object)`

Load a single entity matching the given criteria.

```ts
const result = await client.Brapi().load({ account_id: 'account_id' })
```

#### `remove(match: object, ctrl?: object)`

Remove the entity matching the given criteria.

```ts
const result = await client.Brapi().remove({ account_id: 'account_id' })
```

#### `update(data: object, ctrl?: object)`

Update an existing entity. The data must include the entity `id`.

```ts
const result = await client.Brapi().update({
  account_id: 'account_id',
  browser_id: 'browser_id',
  // Fields to update
})
```

### Common Methods

#### `data(data?: object)`

Get or set the entity data. When called with data, sets the entity's
internal data and returns the current data. When called without
arguments, returns a copy of the current data.

#### `match(match?: object)`

Get or set the entity match criteria. Works the same as `data()`.

#### `make()`

Create a new `BrapiEntity` instance with the same client and
options.

#### `client()`

Return the parent `CloudflareWorkersSDK` instance.

#### `entopts()`

Return a copy of the entity options.


---

## BuildEntity

```ts
const build = client.Build()
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `errors` | `any[]` | Yes |  |
| `id` | `string` | No |  |
| `messages` | `any[]` | Yes |  |
| `result` | `Record<string, any>` | Yes |  |
| `result_info` | `Record<string, any>` | No |  |
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

### Actions

This entity exposes custom API actions in addition to the standard
operations. Select one with `$action` in the call's argument; the
remaining keys are sent as that action's payload.

| Action | Route | Call |
| --- | --- | --- |
| `latest` | `/accounts/{account_id}/builds/builds/latest` | `client.Build().list({ $action: 'latest', ... })` |
| `log` | `/accounts/{account_id}/builds/builds/{build_uuid}/logs` | `client.Build().list({ $action: 'log', ... })` |
| `cancel` | `/accounts/{account_id}/builds/builds/{build_uuid}/cancel` | `client.Build().update({ $action: 'cancel', ... })` |

An action returns that action's OWN response, which is not necessarily a
Build record — check the API definition for its shape.

```ts
const result = await client.Build().list({
  $action: 'latest',
  /* ...the action's own arguments */
})
```

### Operations

#### `list(match: object, ctrl?: object)`

List entities matching the given criteria. Returns an array.

```ts
const results = await client.Build().list({ account_id: "example", version_id: "example" })
```

#### `load(match: object, ctrl?: object)`

Load a single entity matching the given criteria.

```ts
const result = await client.Build().load({ id: 'build_id', account_id: 'account_id' })
```

#### `update(data: object, ctrl?: object)`

Update an existing entity. The data must include the entity `id`.

```ts
const result = await client.Build().update({
  id: 'build_id',
  account_id: 'account_id',
  // Fields to update
})
```

### Common Methods

#### `data(data?: object)`

Get or set the entity data. When called with data, sets the entity's
internal data and returns the current data. When called without
arguments, returns a copy of the current data.

#### `match(match?: object)`

Get or set the entity match criteria. Works the same as `data()`.

#### `make()`

Create a new `BuildEntity` instance with the same client and
options.

#### `client()`

Return the parent `CloudflareWorkersSDK` instance.

#### `entopts()`

Return a copy of the entity options.


---

## BuildTokenEntity

```ts
const build_token = client.BuildToken()
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `build_token_name` | `string` | Yes |  |
| `build_token_secret` | `string` | Yes |  |
| `cloudflare_token_id` | `string` | Yes |  |
| `errors` | `any[]` | Yes |  |
| `messages` | `any[]` | Yes |  |
| `result` | `Record<string, any>` | Yes |  |
| `result_info` | `Record<string, any>` | No |  |
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

#### `create(data: object, ctrl?: object)`

Create a new entity with the given data.

```ts
const result = await client.BuildToken().create({
  account_id: 'example_account_id',
  build_token_name: 'example_build_token_name',
  build_token_secret: 'example_build_token_secret',
  cloudflare_token_id: 'example_cloudflare_token_id',
  errors: [],
  messages: [],
  result: {},
  success: true,
})
```

#### `list(match: object, ctrl?: object)`

List entities matching the given criteria. Returns an array.

```ts
const results = await client.BuildToken().list({ account_id: "example" })
```

### Common Methods

#### `data(data?: object)`

Get or set the entity data. When called with data, sets the entity's
internal data and returns the current data. When called without
arguments, returns a copy of the current data.

#### `match(match?: object)`

Get or set the entity match criteria. Works the same as `data()`.

#### `make()`

Create a new `BuildTokenEntity` instance with the same client and
options.

#### `client()`

Return the parent `CloudflareWorkersSDK` instance.

#### `entopts()`

Return a copy of the entity options.


---

## BuildsApiEntity

```ts
const builds_api = client.BuildsApi()
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `errors` | `any[]` | Yes |  |
| `messages` | `any[]` | Yes |  |
| `result` | `Record<string, any>` | Yes |  |
| `result_info` | `Record<string, any>` | No |  |
| `success` | `boolean` | Yes |  |

### Operations

#### `create(data: object, ctrl?: object)`

Create a new entity with the given data.

```ts
const result = await client.BuildsApi().create({
  account_id: 'example_account_id',
  trigger_id: 'example_trigger_id',
  errors: [],
  messages: [],
  result: {},
  success: true,
})
```

#### `remove(match: object, ctrl?: object)`

Remove the entity matching the given criteria.

```ts
const result = await client.BuildsApi().remove({ account_id: 'account_id', environment_variable_key: 'environment_variable_key', trigger_id: 'trigger_id' })
```

### Common Methods

#### `data(data?: object)`

Get or set the entity data. When called with data, sets the entity's
internal data and returns the current data. When called without
arguments, returns a copy of the current data.

#### `match(match?: object)`

Get or set the entity match criteria. Works the same as `data()`.

#### `make()`

Create a new `BuildsApiEntity` instance with the same client and
options.

#### `client()`

Return the parent `CloudflareWorkersSDK` instance.

#### `entopts()`

Return a copy of the entity options.


---

## ConnectionEntity

```ts
const connection = client.Connection()
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `id` | `string` | No |  |

### Operations

#### `remove(match: object, ctrl?: object)`

Remove the entity matching the given criteria.

```ts
const result = await client.Connection().remove({ account_id: 'account_id', id: 'id' })
```

### Common Methods

#### `data(data?: object)`

Get or set the entity data. When called with data, sets the entity's
internal data and returns the current data. When called without
arguments, returns a copy of the current data.

#### `match(match?: object)`

Get or set the entity match criteria. Works the same as `data()`.

#### `make()`

Create a new `ConnectionEntity` instance with the same client and
options.

#### `client()`

Return the parent `CloudflareWorkersSDK` instance.

#### `entopts()`

Return a copy of the entity options.


---

## ContainerImageEntity

```ts
const container_image = client.ContainerImage()
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `image` | `string` | Yes | Image url. |

### Operations

#### `create(data: object, ctrl?: object)`

Create a new entity with the given data.

```ts
const result = await client.ContainerImage().create({
  account_id: 'example_account_id',
  image: 'example_image',
})
```

### Common Methods

#### `data(data?: object)`

Get or set the entity data. When called with data, sets the entity's
internal data and returns the current data. When called without
arguments, returns a copy of the current data.

#### `match(match?: object)`

Get or set the entity match criteria. Works the same as `data()`.

#### `make()`

Create a new `ContainerImageEntity` instance with the same client and
options.

#### `client()`

Return the parent `CloudflareWorkersSDK` instance.

#### `entopts()`

Return a copy of the entity options.


---

## ContainerInstanceEntity

```ts
const container_instance = client.ContainerInstance()
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `errors` | `any[]` | Yes |  |
| `id` | `string` | No |  |
| `messages` | `any[]` | Yes |  |
| `result` | `any` | Yes | A container instance belonging to an application. |
| `result_info` | `Record<string, any>` | Yes | Cursor pagination details for a v4 API list response. |
| `success` | `boolean` | Yes | Whether the API call was successful. |

### Operations

#### `list(match: object, ctrl?: object)`

List entities matching the given criteria. Returns an array.

```ts
const results = await client.ContainerInstance().list({ account_id: "example", application_id: "example" })
```

#### `load(match: object, ctrl?: object)`

Load a single entity matching the given criteria.

```ts
const result = await client.ContainerInstance().load({ id: 'container_instance_id', account_id: 'account_id', application_id: 'application_id' })
```

### Common Methods

#### `data(data?: object)`

Get or set the entity data. When called with data, sets the entity's
internal data and returns the current data. When called without
arguments, returns a copy of the current data.

#### `match(match?: object)`

Get or set the entity match criteria. Works the same as `data()`.

#### `make()`

Create a new `ContainerInstanceEntity` instance with the same client and
options.

#### `client()`

Return the parent `CloudflareWorkersSDK` instance.

#### `entopts()`

Return a copy of the entity options.


---

## DeployHookEntity

```ts
const deploy_hook = client.DeployHook()
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `branch` | `string` | Yes | Git branch name. |
| `deploy_hook_name` | `string` | Yes | Deploy hook name (1-58 characters). |
| `errors` | `any[]` | Yes |  |
| `id` | `string` | No |  |
| `messages` | `any[]` | Yes |  |
| `result` | `Record<string, any>` | Yes |  |
| `result_info` | `Record<string, any>` | No |  |
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

#### `create(data: object, ctrl?: object)`

Create a new entity with the given data.

```ts
const result = await client.DeployHook().create({
  id: 'example_id',
  branch: 'example_branch',
  deploy_hook_name: 'example_deploy_hook_name',
  errors: [],
  messages: [],
  result: {},
  success: true,
})
```

#### `list(match: object, ctrl?: object)`

List entities matching the given criteria. Returns an array.

```ts
const results = await client.DeployHook().list({ account_id: "example", script_name: "example" })
```

#### `load(match: object, ctrl?: object)`

Load a single entity matching the given criteria.

```ts
const result = await client.DeployHook().load({ id: 'deploy_hook_id', account_id: 'account_id', worker_id: 'worker_id' })
```

#### `remove(match: object, ctrl?: object)`

Remove the entity matching the given criteria.

```ts
const result = await client.DeployHook().remove({ id: 'deploy_hook_id', account_id: 'account_id', worker_id: 'worker_id' })
```

#### `update(data: object, ctrl?: object)`

Update an existing entity. The data must include the entity `id`.

```ts
const result = await client.DeployHook().update({
  id: 'deploy_hook_id',
  account_id: 'account_id',
  worker_id: 'worker_id',
  // Fields to update
})
```

### Common Methods

#### `data(data?: object)`

Get or set the entity data. When called with data, sets the entity's
internal data and returns the current data. When called without
arguments, returns a copy of the current data.

#### `match(match?: object)`

Get or set the entity match criteria. Works the same as `data()`.

#### `make()`

Create a new `DeployHookEntity` instance with the same client and
options.

#### `client()`

Return the parent `CloudflareWorkersSDK` instance.

#### `entopts()`

Return a copy of the entity options.


---

## DeploymentEntity

```ts
const deployment = client.Deployment()
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `id` | `string` | No |  |

### Operations

#### `remove(match: object, ctrl?: object)`

Remove the entity matching the given criteria.

```ts
const result = await client.Deployment().remove({ account_id: 'account_id', id: 'id' })
```

### Common Methods

#### `data(data?: object)`

Get or set the entity data. When called with data, sets the entity's
internal data and returns the current data. When called without
arguments, returns a copy of the current data.

#### `match(match?: object)`

Get or set the entity match criteria. Works the same as `data()`.

#### `make()`

Create a new `DeploymentEntity` instance with the same client and
options.

#### `client()`

Return the parent `CloudflareWorkersSDK` instance.

#### `entopts()`

Return a copy of the entity options.


---

## DestinationEntity

```ts
const destination = client.Destination()
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `configuration` | `Record<string, any>` | Yes |  |
| `enabled` | `boolean` | Yes |  |
| `errors` | `any[]` | Yes |  |
| `id` | `string` | No |  |
| `messages` | `any[]` | Yes |  |
| `name` | `string` | Yes |  |
| `result` | `Record<string, any>` | Yes |  |
| `skipPreflightCheck` | `boolean` | No |  |
| `success` | `boolean` | Yes |  |

### Operations

#### `create(data: object, ctrl?: object)`

Create a new entity with the given data.

```ts
const result = await client.Destination().create({
  account_id: 'example_account_id',
  configuration: {},
  enabled: true,
  errors: [],
  messages: [],
  name: 'example_name',
  result: {},
  success: true,
})
```

#### `list(match: object, ctrl?: object)`

List entities matching the given criteria. Returns an array.

```ts
const results = await client.Destination().list({ account_id: "example" })
```

#### `remove(match: object, ctrl?: object)`

Remove the entity matching the given criteria.

```ts
const result = await client.Destination().remove({ account_id: 'account_id', id: 'id' })
```

#### `update(data: object, ctrl?: object)`

Update an existing entity. The data must include the entity `id`.

```ts
const result = await client.Destination().update({
  account_id: 'account_id',
  id: 'id',
  // Fields to update
})
```

### Common Methods

#### `data(data?: object)`

Get or set the entity data. When called with data, sets the entity's
internal data and returns the current data. When called without
arguments, returns a copy of the current data.

#### `match(match?: object)`

Get or set the entity match criteria. Works the same as `data()`.

#### `make()`

Create a new `DestinationEntity` instance with the same client and
options.

#### `client()`

Return the parent `CloudflareWorkersSDK` instance.

#### `entopts()`

Return a copy of the entity options.


---

## DomainEntity

```ts
const domain = client.Domain()
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `errors` | `any[]` | Yes |  |
| `id` | `string` | No |  |
| `messages` | `any[]` | Yes |  |
| `result` | `Record<string, any>` | Yes |  |
| `success` | `boolean` | Yes | Whether the API call was successful. |

### Operations

#### `list(match: object, ctrl?: object)`

List entities matching the given criteria. Returns an array.

```ts
const results = await client.Domain().list({ account_id: "example" })
```

#### `load(match: object, ctrl?: object)`

Load a single entity matching the given criteria.

```ts
const result = await client.Domain().load({ id: 'domain_id', account_id: 'account_id' })
```

#### `remove(match: object, ctrl?: object)`

Remove the entity matching the given criteria.

```ts
const result = await client.Domain().remove({ id: 'domain_id', account_id: 'account_id' })
```

#### `update(data: object, ctrl?: object)`

Update an existing entity. The data must include the entity `id`.

```ts
const result = await client.Domain().update({
  id: 'domain_id',
  account_id: 'account_id',
  // Fields to update
})
```

### Common Methods

#### `data(data?: object)`

Get or set the entity data. When called with data, sets the entity's
internal data and returns the current data. When called without
arguments, returns a copy of the current data.

#### `match(match?: object)`

Get or set the entity match criteria. Works the same as `data()`.

#### `make()`

Create a new `DomainEntity` instance with the same client and
options.

#### `client()`

Return the parent `CloudflareWorkersSDK` instance.

#### `entopts()`

Return a copy of the entity options.


---

## DurableObjectsNamespaceEntity

```ts
const durable_objects_namespace = client.DurableObjectsNamespace()
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `result` | `any[]` | No |  |
| `result_info` | `Record<string, any>` | No |  |

### Operations

#### `create(data: object, ctrl?: object)`

Create a new entity with the given data.

```ts
const result = await client.DurableObjectsNamespace().create({
  account_id: 'example_account_id',
  namespace_id: 'example_namespace_id',
})
```

#### `list(match: object, ctrl?: object)`

List entities matching the given criteria. Returns an array.

```ts
const results = await client.DurableObjectsNamespace().list({ account_id: "example" })
```

### Common Methods

#### `data(data?: object)`

Get or set the entity data. When called with data, sets the entity's
internal data and returns the current data. When called without
arguments, returns a copy of the current data.

#### `match(match?: object)`

Get or set the entity match criteria. Works the same as `data()`.

#### `make()`

Create a new `DurableObjectsNamespaceEntity` instance with the same client and
options.

#### `client()`

Return the parent `CloudflareWorkersSDK` instance.

#### `entopts()`

Return a copy of the entity options.


---

## EnvironmentVariableEntity

```ts
const environment_variable = client.EnvironmentVariable()
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `errors` | `any[]` | Yes |  |
| `messages` | `any[]` | Yes |  |
| `result` | `Record<string, any>` | Yes |  |
| `result_info` | `Record<string, any>` | No |  |
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

#### `list(match: object, ctrl?: object)`

List entities matching the given criteria. Returns an array.

```ts
const results = await client.EnvironmentVariable().list({ account_id: "example", trigger_id: "example" })
```

#### `update(data: object, ctrl?: object)`

Update an existing entity. The data must include the entity `id`.

```ts
const result = await client.EnvironmentVariable().update({
  account_id: 'account_id',
  trigger_id: 'trigger_id',
  // Fields to update
})
```

### Common Methods

#### `data(data?: object)`

Get or set the entity data. When called with data, sets the entity's
internal data and returns the current data. When called without
arguments, returns a copy of the current data.

#### `match(match?: object)`

Get or set the entity match criteria. Works the same as `data()`.

#### `make()`

Create a new `EnvironmentVariableEntity` instance with the same client and
options.

#### `client()`

Return the parent `CloudflareWorkersSDK` instance.

#### `entopts()`

Return a copy of the entity options.


---

## GitHubIntegrationEntity

```ts
const git_hub_integration = client.GitHubIntegration()
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `errors` | `any[]` | Yes |  |
| `messages` | `any[]` | Yes |  |
| `result` | `Record<string, any>` | Yes |  |
| `result_info` | `Record<string, any>` | No |  |
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

#### `list(match: object, ctrl?: object)`

List entities matching the given criteria. Returns an array.

```ts
const results = await client.GitHubIntegration().list({ account_id: "example", provider_account_id: "example", provider_type: "example", repo_id: "example", branch: "example" })
```

### Common Methods

#### `data(data?: object)`

Get or set the entity data. When called with data, sets the entity's
internal data and returns the current data. When called without
arguments, returns a copy of the current data.

#### `match(match?: object)`

Get or set the entity match criteria. Works the same as `data()`.

#### `make()`

Create a new `GitHubIntegrationEntity` instance with the same client and
options.

#### `client()`

Return the parent `CloudflareWorkersSDK` instance.

#### `entopts()`

Return a copy of the entity options.


---

## HyperdriveEntity

```ts
const hyperdrive = client.Hyperdrive()
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `caching` | `Record<string, any>` | No |  |
| `created_on` | `string` | No | Defines the creation time of the Hyperdrive configuration. |
| `id` | `string` | Yes | Define configurations using a unique string identifier. |
| `modified_on` | `string` | No | Defines the last modified time of the Hyperdrive configuration. |
| `mtls` | `Record<string, any>` | No | mTLS configuration for the origin connection. |
| `name` | `string` | Yes | The name of the Hyperdrive configuration. |
| `origin` | `Record<string, any>` | Yes | Combines database connection fields with exactly one supported network location. |
| `origin_connection_limit` | `number` | No | The (soft) maximum number of connections the Hyperdrive is allowed to make to the origin database. |
| `restarted_on` | `string` | No | Defines the last time the Hyperdrive connection pool was explicitly restarted via the restart endpoint. |
| `result` | `Record<string, any>` | Yes |  |

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

### Actions

This entity exposes custom API actions in addition to the standard
operations. Select one with `$action` in the call's argument; the
remaining keys are sent as that action's payload.

| Action | Route | Call |
| --- | --- | --- |
| `config` | `/accounts/{account_id}/hyperdrive/configs` | `client.Hyperdrive().create({ $action: 'config', ... })` |
| `restart` | `/accounts/{account_id}/hyperdrive/configs/{hyperdrive_id}/restart` | `client.Hyperdrive().create({ $action: 'restart', ... })` |
| `config` | `/accounts/{account_id}/hyperdrive/configs` | `client.Hyperdrive().list({ $action: 'config', ... })` |

An action returns that action's OWN response, which is not necessarily a
Hyperdrive record — check the API definition for its shape.

```ts
const result = await client.Hyperdrive().create({
  $action: 'config',
  /* ...the action's own arguments */
})
```

### Operations

#### `create(data: object, ctrl?: object)`

Create a new entity with the given data.

```ts
const result = await client.Hyperdrive().create({
  account_id: 'example_account_id',
  integration: 'example_integration',
  id: 'example_id',
  name: 'example_name',
  origin: {},
  result: {},
})
```

#### `list(match: object, ctrl?: object)`

List entities matching the given criteria. Returns an array.

```ts
const results = await client.Hyperdrive().list({ account_id: "example" })
```

#### `load(match: object, ctrl?: object)`

Load a single entity matching the given criteria.

```ts
const result = await client.Hyperdrive().load({ account_id: 'account_id', hyperdrive_id: 'hyperdrive_id' })
```

#### `remove(match: object, ctrl?: object)`

Remove the entity matching the given criteria.

```ts
const result = await client.Hyperdrive().remove({ account_id: 'account_id', hyperdrive_id: 'hyperdrive_id' })
```

#### `update(data: object, ctrl?: object)`

Update an existing entity. The data must include the entity `id`.

```ts
const result = await client.Hyperdrive().update({
  account_id: 'account_id',
  hyperdrive_id: 'hyperdrive_id',
  // Fields to update
})
```

### Common Methods

#### `data(data?: object)`

Get or set the entity data. When called with data, sets the entity's
internal data and returns the current data. When called without
arguments, returns a copy of the current data.

#### `match(match?: object)`

Get or set the entity match criteria. Works the same as `data()`.

#### `make()`

Create a new `HyperdriveEntity` instance with the same client and
options.

#### `client()`

Return the parent `CloudflareWorkersSDK` instance.

#### `entopts()`

Return a copy of the entity options.


---

## ImageRegistryEntity

```ts
const image_registry = client.ImageRegistry()
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `auth` | `Record<string, any>` | Yes | Credentials for authenticating to a private external image registry. |
| `domain` | `string` | Yes | Hostname of the private registry, without a scheme or image path. |
| `errors` | `any[]` | Yes |  |
| `expiration_minutes` | `number` | No | The number of minutes Cloudflare managed registry credentials stay valid. |
| `id` | `string` | No |  |
| `is_public` | `boolean` | No | Omit this field or set it to `false`. |
| `kind` | `any` | Yes | Registry provider. |
| `messages` | `any[]` | Yes |  |
| `permissions` | `any[]` | No | The permissions for Cloudflare managed registry credentials. |
| `result` | `any[]` | Yes |  |
| `success` | `boolean` | Yes | Whether the API call was successful. |

### Operations

#### `create(data: object, ctrl?: object)`

Create a new entity with the given data.

```ts
const result = await client.ImageRegistry().create({
  account_id: 'example_account_id',
  auth: {},
  errors: [],
  kind: 'example_kind',
  messages: [],
  result: [],
  success: true,
})
```

#### `list(match: object, ctrl?: object)`

List entities matching the given criteria. Returns an array.

```ts
const results = await client.ImageRegistry().list({ account_id: "example" })
```

#### `remove(match: object, ctrl?: object)`

Remove the entity matching the given criteria.

```ts
const result = await client.ImageRegistry().remove({ account_id: 'account_id', id: 'id' })
```

### Common Methods

#### `data(data?: object)`

Get or set the entity data. When called with data, sets the entity's
internal data and returns the current data. When called without
arguments, returns a copy of the current data.

#### `match(match?: object)`

Get or set the entity match criteria. Works the same as `data()`.

#### `make()`

Create a new `ImageRegistryEntity` instance with the same client and
options.

#### `client()`

Return the parent `CloudflareWorkersSDK` instance.

#### `entopts()`

Return a copy of the entity options.


---

## IssueEntity

```ts
const issue = client.Issue()
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `afterInactivitySeconds` | `number` | No |  |
| `afterOccurrences` | `number` | No |  |
| `enabled` | `boolean` | No |  |
| `errors` | `any[]` | Yes |  |
| `id` | `string` | No |  |
| `issueIds` | `any[]` | Yes |  |
| `messages` | `any[]` | Yes |  |
| `name` | `string` | No |  |
| `policyId` | `string` | Yes |  |
| `result` | `Record<string, any>` | Yes |  |
| `result_info` | `Record<string, any>` | Yes |  |
| `service` | `string` | No |  |
| `status` | `string` | No |  |
| `success` | `boolean` | Yes |  |
| `title` | `string` | No |  |

### Actions

This entity exposes custom API actions in addition to the standard
operations. Select one with `$action` in the call's argument; the
remaining keys are sent as that action's payload.

| Action | Route | Call |
| --- | --- | --- |
| `automation` | `/accounts/{account_id}/workers/observability/issues/automations` | `client.Issue().create({ $action: 'automation', ... })` |
| `group` | `/accounts/{account_id}/workers/observability/issues/groups` | `client.Issue().create({ $action: 'group', ... })` |
| `notification_run` | `/accounts/{account_id}/workers/observability/issues/{issueId}/notification-runs` | `client.Issue().create({ $action: 'notification_run', ... })` |
| `automation` | `/accounts/{account_id}/workers/observability/issues/automations` | `client.Issue().list({ $action: 'automation', ... })` |
| `occurrence` | `/accounts/{account_id}/workers/observability/issues/{issueId}/occurrences` | `client.Issue().list({ $action: 'occurrence', ... })` |
| `summary` | `/accounts/{account_id}/workers/observability/issues/summary` | `client.Issue().list({ $action: 'summary', ... })` |

An action returns that action's OWN response, which is not necessarily a
Issue record — check the API definition for its shape.

```ts
const result = await client.Issue().create({
  $action: 'automation',
  /* ...the action's own arguments */
})
```

### Operations

#### `create(data: object, ctrl?: object)`

Create a new entity with the given data.

```ts
const result = await client.Issue().create({
  account_id: 'example_account_id',
  group_id: 'example_group_id',
  errors: [],
  issueIds: [],
  messages: [],
  policyId: 'example_policyId',
  result: {},
  result_info: {},
  success: true,
})
```

#### `list(match: object, ctrl?: object)`

List entities matching the given criteria. Returns an array.

```ts
const results = await client.Issue().list({ account_id: "example" })
```

#### `load(match: object, ctrl?: object)`

Load a single entity matching the given criteria.

```ts
const result = await client.Issue().load({ id: 'issue_id', account_id: 'account_id' })
```

#### `remove(match: object, ctrl?: object)`

Remove the entity matching the given criteria.

```ts
const result = await client.Issue().remove({ account_id: 'account_id' })
```

#### `update(data: object, ctrl?: object)`

Update an existing entity. The data must include the entity `id`.

```ts
const result = await client.Issue().update({
  id: 'issue_id',
  account_id: 'account_id',
  automation_id: 'automation_id',
  // Fields to update
})
```

### Common Methods

#### `data(data?: object)`

Get or set the entity data. When called with data, sets the entity's
internal data and returns the current data. When called without
arguments, returns a copy of the current data.

#### `match(match?: object)`

Get or set the entity match criteria. Works the same as `data()`.

#### `make()`

Create a new `IssueEntity` instance with the same client and
options.

#### `client()`

Return the parent `CloudflareWorkersSDK` instance.

#### `entopts()`

Return a copy of the entity options.


---

## KeyEntity

```ts
const key = client.Key()
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `datasets` | `any[]` | No | Leave this empty to use the default datasets |
| `errors` | `any[]` | Yes |  |
| `filters` | `any[]` | No | Apply filters to narrow key discovery. |
| `from` | `number` | No |  |
| `keyNeedle` | `Record<string, any>` | Yes | If the user suggests a key, use this to narrow down the list of keys returned. |
| `limit` | `number` | No | Advanced usage: set limit=1000+ to retrieve comprehensive key options without needing additional filtering. |
| `messages` | `any[]` | Yes |  |
| `needle` | `Record<string, any>` | Yes | Search for a specific substring in any of the events |
| `result` | `any[]` | Yes |  |
| `success` | `boolean` | Yes |  |
| `to` | `number` | No |  |

### Operations

#### `create(data: object, ctrl?: object)`

Create a new entity with the given data.

```ts
const result = await client.Key().create({
  account_id: 'example_account_id',
  errors: [],
  keyNeedle: {},
  messages: [],
  needle: {},
  result: [],
  success: true,
})
```

### Common Methods

#### `data(data?: object)`

Get or set the entity data. When called with data, sets the entity's
internal data and returns the current data. When called without
arguments, returns a copy of the current data.

#### `match(match?: object)`

Get or set the entity match criteria. Works the same as `data()`.

#### `make()`

Create a new `KeyEntity` instance with the same client and
options.

#### `client()`

Return the parent `CloudflareWorkersSDK` instance.

#### `entopts()`

Return a copy of the entity options.


---

## LiveTailEntity

```ts
const live_tail = client.LiveTail()
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `errors` | `any[]` | Yes |  |
| `filterCombination` | `string` | No | Set a flag to describe how to combine the filters on the query. |
| `filters` | `any[]` | No | Apply filters to the query. |
| `messages` | `any[]` | Yes |  |
| `result` | `Record<string, any>` | Yes |  |
| `scriptId` | `string` | No |  |
| `success` | `boolean` | Yes |  |

### Actions

This entity exposes custom API actions in addition to the standard
operations. Select one with `$action` in the call's argument; the
remaining keys are sent as that action's payload.

| Action | Route | Call |
| --- | --- | --- |
| `heartbeat` | `/accounts/{account_id}/workers/observability/telemetry/live-tail/heartbeat` | `client.LiveTail().create({ $action: 'heartbeat', ... })` |

An action returns that action's OWN response, which is not necessarily a
LiveTail record — check the API definition for its shape.

```ts
const result = await client.LiveTail().create({
  $action: 'heartbeat',
  /* ...the action's own arguments */
})
```

### Operations

#### `create(data: object, ctrl?: object)`

Create a new entity with the given data.

```ts
const result = await client.LiveTail().create({
  account_id: 'example_account_id',
  errors: [],
  messages: [],
  result: {},
  success: true,
})
```

### Common Methods

#### `data(data?: object)`

Get or set the entity data. When called with data, sets the entity's
internal data and returns the current data. When called without
arguments, returns a copy of the current data.

#### `match(match?: object)`

Get or set the entity match criteria. Works the same as `data()`.

#### `make()`

Create a new `LiveTailEntity` instance with the same client and
options.

#### `client()`

Return the parent `CloudflareWorkersSDK` instance.

#### `entopts()`

Return a copy of the entity options.


---

## MetricsExportEntity

```ts
const metrics_export = client.MetricsExport()
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `errors` | `any[]` | Yes |  |
| `messages` | `any[]` | Yes |  |
| `requester` | `Record<string, any>` | Yes |  |
| `resources` | `any[]` | Yes |  |
| `result` | `any[]` | Yes |  |
| `success` | `boolean` | Yes |  |

### Operations

#### `create(data: object, ctrl?: object)`

Create a new entity with the given data.

```ts
const result = await client.MetricsExport().create({
  account_id: 'example_account_id',
  errors: [],
  messages: [],
  requester: {},
  resources: [],
  result: [],
  success: true,
})
```

#### `list(match: object, ctrl?: object)`

List entities matching the given criteria. Returns an array.

```ts
const results = await client.MetricsExport().list({ account_id: "example" })
```

### Common Methods

#### `data(data?: object)`

Get or set the entity data. When called with data, sets the entity's
internal data and returns the current data. When called without
arguments, returns a copy of the current data.

#### `match(match?: object)`

Get or set the entity match criteria. Works the same as `data()`.

#### `make()`

Create a new `MetricsExportEntity` instance with the same client and
options.

#### `client()`

Return the parent `CloudflareWorkersSDK` instance.

#### `entopts()`

Return a copy of the entity options.


---

## NamespaceEntity

```ts
const namespace = client.Namespace()
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `id` | `string` | No |  |

### Operations

#### `remove(match: object, ctrl?: object)`

Remove the entity matching the given criteria.

```ts
const result = await client.Namespace().remove({ account_id: 'account_id', id: 'id' })
```

### Common Methods

#### `data(data?: object)`

Get or set the entity data. When called with data, sets the entity's
internal data and returns the current data. When called without
arguments, returns a copy of the current data.

#### `match(match?: object)`

Get or set the entity match criteria. Works the same as `data()`.

#### `make()`

Create a new `NamespaceEntity` instance with the same client and
options.

#### `client()`

Return the parent `CloudflareWorkersSDK` instance.

#### `entopts()`

Return a copy of the entity options.


---

## PreviewEntity

```ts
const preview = client.Preview()
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `errors` | `any[]` | Yes |  |
| `id` | `string` | No |  |
| `messages` | `any[]` | Yes |  |
| `result` | `Record<string, any>` | Yes |  |
| `success` | `boolean` | Yes | Whether the API call was successful. |

### Operations

#### `create(data: object, ctrl?: object)`

Create a new entity with the given data.

```ts
const result = await client.Preview().create({
  account_id: 'example_account_id',
  worker_id: 'example_worker_id',
  errors: [],
  messages: [],
  result: {},
  success: true,
})
```

#### `list(match: object, ctrl?: object)`

List entities matching the given criteria. Returns an array.

```ts
const results = await client.Preview().list({ account_id: "example", worker_id: "example" })
```

#### `load(match: object, ctrl?: object)`

Load a single entity matching the given criteria.

```ts
const result = await client.Preview().load({ id: 'preview_id', account_id: 'account_id', worker_id: 'worker_id' })
```

#### `remove(match: object, ctrl?: object)`

Remove the entity matching the given criteria.

```ts
const result = await client.Preview().remove({ id: 'preview_id', account_id: 'account_id', worker_id: 'worker_id' })
```

#### `update(data: object, ctrl?: object)`

Update an existing entity. The data must include the entity `id`.

```ts
const result = await client.Preview().update({
  id: 'preview_id',
  account_id: 'account_id',
  worker_id: 'worker_id',
  // Fields to update
})
```

### Common Methods

#### `data(data?: object)`

Get or set the entity data. When called with data, sets the entity's
internal data and returns the current data. When called without
arguments, returns a copy of the current data.

#### `match(match?: object)`

Get or set the entity match criteria. Works the same as `data()`.

#### `make()`

Create a new `PreviewEntity` instance with the same client and
options.

#### `client()`

Return the parent `CloudflareWorkersSDK` instance.

#### `entopts()`

Return a copy of the entity options.


---

## PreviewDeploymentEntity

```ts
const preview_deployment = client.PreviewDeployment()
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `errors` | `any[]` | Yes |  |
| `id` | `string` | No |  |
| `messages` | `any[]` | Yes |  |
| `result` | `any` | Yes |  |
| `success` | `boolean` | Yes | Whether the API call was successful. |

### Operations

#### `create(data: object, ctrl?: object)`

Create a new entity with the given data.

```ts
const result = await client.PreviewDeployment().create({
  account_id: 'example_account_id',
  id: 'example_id',
  worker_id: 'example_worker_id',
  errors: [],
  messages: [],
  result: 'example_result',
  success: true,
})
```

#### `list(match: object, ctrl?: object)`

List entities matching the given criteria. Returns an array.

```ts
const results = await client.PreviewDeployment().list({ account_id: "example", id: "example_id", worker_id: "example" })
```

#### `load(match: object, ctrl?: object)`

Load a single entity matching the given criteria.

```ts
const result = await client.PreviewDeployment().load({ id: 'preview_deployment_id', account_id: 'account_id', preview_id: 'preview_id', worker_id: 'worker_id' })
```

#### `update(data: object, ctrl?: object)`

Update an existing entity. The data must include the entity `id`.

```ts
const result = await client.PreviewDeployment().update({
  id: 'preview_deployment_id',
  account_id: 'account_id',
  preview_id: 'preview_id',
  worker_id: 'worker_id',
  // Fields to update
})
```

### Common Methods

#### `data(data?: object)`

Get or set the entity data. When called with data, sets the entity's
internal data and returns the current data. When called without
arguments, returns a copy of the current data.

#### `match(match?: object)`

Get or set the entity match criteria. Works the same as `data()`.

#### `make()`

Create a new `PreviewDeploymentEntity` instance with the same client and
options.

#### `client()`

Return the parent `CloudflareWorkersSDK` instance.

#### `entopts()`

Return a copy of the entity options.


---

## QueryEntity

```ts
const query = client.Query()
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `chart` | `boolean` | No | When true, includes time-series data in the response. |
| `chartType` | `string` | No | Controls the SQL shape and response payload for the 'calculations' view. |
| `compare` | `boolean` | No | When true, includes a comparison dataset from the previous time period of equal length. |
| `distributionScale` | `string` | No | Value-axis bucketing for chartType 'distribution'. |
| `dry` | `boolean` | No | When true, executes the query without persisting the results. |
| `errors` | `any[]` | Yes |  |
| `granularity` | `number` | No | Number of time-series buckets. |
| `ignoreSeries` | `boolean` | No | When true, omits time-series data from the response and returns only aggregated values. |
| `limit` | `number` | No | Maximum number of events to return when view is 'events'. |
| `messages` | `any[]` | Yes |  |
| `offset` | `string` | No | Cursor for pagination in event, trace, invocation, and agent views. |
| `offsetBy` | `number` | No | Numeric offset for paginating grouped/pattern results (top-N lists). |
| `offsetDirection` | `string` | No | Pagination direction: 'next' for forward, 'prev' for backward. |
| `parameters` | `Record<string, any>` | No | Query parameters defining what data to retrieve — filters, calculations, group-bys, and ordering. |
| `queryId` | `string` | Yes | Identifier for the query. |
| `result` | `Record<string, any>` | Yes | Complete results of a query run. |
| `success` | `boolean` | Yes |  |
| `timeframe` | `Record<string, any>` | Yes | Timeframe for the query using Unix timestamps in milliseconds. |
| `view` | `string` | No | Controls the shape of the response. |

### Operations

#### `create(data: object, ctrl?: object)`

Create a new entity with the given data.

```ts
const result = await client.Query().create({
  account_id: 'example_account_id',
  errors: [],
  messages: [],
  queryId: 'example_queryId',
  result: {},
  success: true,
  timeframe: {},
})
```

### Common Methods

#### `data(data?: object)`

Get or set the entity data. When called with data, sets the entity's
internal data and returns the current data. When called without
arguments, returns a copy of the current data.

#### `match(match?: object)`

Get or set the entity match criteria. Works the same as `data()`.

#### `make()`

Create a new `QueryEntity` instance with the same client and
options.

#### `client()`

Return the parent `CloudflareWorkersSDK` instance.

#### `entopts()`

Return a copy of the entity options.


---

## RepositoryConnectionEntity

```ts
const repository_connection = client.RepositoryConnection()
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

#### `update(data: object, ctrl?: object)`

Update an existing entity. The data must include the entity `id`.

```ts
const result = await client.RepositoryConnection().update({
  account_id: 'account_id',
  // Fields to update
})
```

### Common Methods

#### `data(data?: object)`

Get or set the entity data. When called with data, sets the entity's
internal data and returns the current data. When called without
arguments, returns a copy of the current data.

#### `match(match?: object)`

Get or set the entity match criteria. Works the same as `data()`.

#### `make()`

Create a new `RepositoryConnectionEntity` instance with the same client and
options.

#### `client()`

Return the parent `CloudflareWorkersSDK` instance.

#### `entopts()`

Return a copy of the entity options.


---

## RolloutEntity

```ts
const rollout = client.Rollout()
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `description` | `string` | Yes | Description of the rollout process. |
| `kind` | `string` | No | Kind of the rollout process. |
| `percentage` | `number` | No | Initial target version percentage (0-100). |
| `step_percentage` | `number` | No | Percentage of rollout to increase in each step when "steps" is absent. |
| `steps` | `any[]` | No | Steps defining the rollout process, used when "step_percentage" is absent. |
| `strategy` | `string` | Yes | Strategy used for the rollout. |
| `target_configuration` | `Record<string, any>` | Yes | User-specified container configuration changes. |

### Operations

#### `create(data: object, ctrl?: object)`

Create a new entity with the given data.

```ts
const result = await client.Rollout().create({
  account_id: 'example_account_id',
  application_id: 'example_application_id',
  description: 'example_description',
  strategy: 'example_strategy',
  target_configuration: {},
})
```

### Common Methods

#### `data(data?: object)`

Get or set the entity data. When called with data, sets the entity's
internal data and returns the current data. When called without
arguments, returns a copy of the current data.

#### `match(match?: object)`

Get or set the entity match criteria. Works the same as `data()`.

#### `make()`

Create a new `RolloutEntity` instance with the same client and
options.

#### `client()`

Return the parent `CloudflareWorkersSDK` instance.

#### `entopts()`

Return a copy of the entity options.


---

## SavedQueryEntity

```ts
const saved_query = client.SavedQuery()
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `description` | `string` | Yes |  |
| `errors` | `any[]` | Yes |  |
| `id` | `string` | No |  |
| `messages` | `any[]` | Yes |  |
| `name` | `string` | Yes | Query name |
| `parameters` | `Record<string, any>` | Yes |  |
| `result` | `Record<string, any>` | Yes |  |
| `success` | `boolean` | Yes |  |

### Operations

#### `create(data: object, ctrl?: object)`

Create a new entity with the given data.

```ts
const result = await client.SavedQuery().create({
  account_id: 'example_account_id',
  description: 'example_description',
  errors: [],
  messages: [],
  name: 'example_name',
  parameters: {},
  result: {},
  success: true,
})
```

#### `list(match: object, ctrl?: object)`

List entities matching the given criteria. Returns an array.

```ts
const results = await client.SavedQuery().list({ account_id: "example" })
```

#### `load(match: object, ctrl?: object)`

Load a single entity matching the given criteria.

```ts
const result = await client.SavedQuery().load({ id: 'saved_query_id', account_id: 'account_id' })
```

#### `remove(match: object, ctrl?: object)`

Remove the entity matching the given criteria.

```ts
const result = await client.SavedQuery().remove({ id: 'saved_query_id', account_id: 'account_id' })
```

#### `update(data: object, ctrl?: object)`

Update an existing entity. The data must include the entity `id`.

```ts
const result = await client.SavedQuery().update({
  id: 'saved_query_id',
  account_id: 'account_id',
  // Fields to update
})
```

### Common Methods

#### `data(data?: object)`

Get or set the entity data. When called with data, sets the entity's
internal data and returns the current data. When called without
arguments, returns a copy of the current data.

#### `match(match?: object)`

Get or set the entity match criteria. Works the same as `data()`.

#### `make()`

Create a new `SavedQueryEntity` instance with the same client and
options.

#### `client()`

Return the parent `CloudflareWorkersSDK` instance.

#### `entopts()`

Return a copy of the entity options.


---

## ScriptEntity

```ts
const script = client.Script()
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `id` | `string` | No |  |

### Operations

#### `remove(match: object, ctrl?: object)`

Remove the entity matching the given criteria.

```ts
const result = await client.Script().remove({ account_id: 'account_id', id: 'id' })
```

### Common Methods

#### `data(data?: object)`

Get or set the entity data. When called with data, sets the entity's
internal data and returns the current data. When called without
arguments, returns a copy of the current data.

#### `match(match?: object)`

Get or set the entity match criteria. Works the same as `data()`.

#### `make()`

Create a new `ScriptEntity` instance with the same client and
options.

#### `client()`

Return the parent `CloudflareWorkersSDK` instance.

#### `entopts()`

Return a copy of the entity options.


---

## ScriptSettingEntity

```ts
const script_setting = client.ScriptSetting()
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `errors` | `any[]` | Yes |  |
| `logpush` | `boolean` | No | Whether Logpush is turned on for the Worker. |
| `messages` | `any[]` | Yes |  |
| `observability` | `any` | No |  |
| `result` | `Record<string, any>` | Yes |  |
| `success` | `boolean` | Yes | Whether the API call was successful. |
| `tags` | `any` | No |  |
| `tail_consumers` | `any[]` | No | List of Workers that will consume logs from the attached Worker. |

### Operations

#### `list(match: object, ctrl?: object)`

List entities matching the given criteria. Returns an array.

```ts
const results = await client.ScriptSetting().list({ account_id: "example", script_name: "example" })
```

#### `update(data: object, ctrl?: object)`

Update an existing entity. The data must include the entity `id`.

```ts
const result = await client.ScriptSetting().update({
  account_id: 'account_id',
  script_name: 'script_name',
  // Fields to update
})
```

### Common Methods

#### `data(data?: object)`

Get or set the entity data. When called with data, sets the entity's
internal data and returns the current data. When called without
arguments, returns a copy of the current data.

#### `match(match?: object)`

Get or set the entity match criteria. Works the same as `data()`.

#### `make()`

Create a new `ScriptSettingEntity` instance with the same client and
options.

#### `client()`

Return the parent `CloudflareWorkersSDK` instance.

#### `entopts()`

Return a copy of the entity options.


---

## SecretEntity

```ts
const secret = client.Secret()
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `comment` | `string` | No | Freeform text describing the secret. |
| `id` | `string` | No |  |
| `result` | `any` | Yes |  |
| `scopes` | `any[]` | No | The list of services that can use this secret. |
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

#### `create(data: object, ctrl?: object)`

Create a new entity with the given data.

```ts
const result = await client.Secret().create({
  account_id: 'example_account_id',
  store_id: 'example_store_id',
  result: 'example_result',
})
```

#### `list(match: object, ctrl?: object)`

List entities matching the given criteria. Returns an array.

```ts
const results = await client.Secret().list({ account_id: "example", store_id: "example" })
```

#### `load(match: object, ctrl?: object)`

Load a single entity matching the given criteria.

```ts
const result = await client.Secret().load({ id: 'secret_id', account_id: 'account_id', store_id: 'store_id' })
```

#### `remove(match: object, ctrl?: object)`

Remove the entity matching the given criteria.

```ts
const result = await client.Secret().remove({ id: 'secret_id', account_id: 'account_id', store_id: 'store_id' })
```

#### `update(data: object, ctrl?: object)`

Update an existing entity. The data must include the entity `id`.

```ts
const result = await client.Secret().update({
  id: 'secret_id',
  account_id: 'account_id',
  store_id: 'store_id',
  // Fields to update
})
```

### Common Methods

#### `data(data?: object)`

Get or set the entity data. When called with data, sets the entity's
internal data and returns the current data. When called without
arguments, returns a copy of the current data.

#### `match(match?: object)`

Get or set the entity match criteria. Works the same as `data()`.

#### `make()`

Create a new `SecretEntity` instance with the same client and
options.

#### `client()`

Return the parent `CloudflareWorkersSDK` instance.

#### `entopts()`

Return a copy of the entity options.


---

## SecretsStoreDeleteEntity

```ts
const secrets_store_delete = client.SecretsStoreDelete()
```

### Operations

#### `remove(match: object, ctrl?: object)`

Remove the entity matching the given criteria.

```ts
const result = await client.SecretsStoreDelete().remove({ account_id: 'account_id', store_id: 'store_id' })
```

### Common Methods

#### `data(data?: object)`

Get or set the entity data. When called with data, sets the entity's
internal data and returns the current data. When called without
arguments, returns a copy of the current data.

#### `match(match?: object)`

Get or set the entity match criteria. Works the same as `data()`.

#### `make()`

Create a new `SecretsStoreDeleteEntity` instance with the same client and
options.

#### `client()`

Return the parent `CloudflareWorkersSDK` instance.

#### `entopts()`

Return a copy of the entity options.


---

## SecretsStoreQuotaEntity

```ts
const secrets_store_quota = client.SecretsStoreQuota()
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `result` | `any` | Yes |  |

### Operations

#### `load(match: object, ctrl?: object)`

Load a single entity matching the given criteria.

```ts
const result = await client.SecretsStoreQuota().load({ account_id: 'account_id' })
```

### Common Methods

#### `data(data?: object)`

Get or set the entity data. When called with data, sets the entity's
internal data and returns the current data. When called without
arguments, returns a copy of the current data.

#### `match(match?: object)`

Get or set the entity match criteria. Works the same as `data()`.

#### `make()`

Create a new `SecretsStoreQuotaEntity` instance with the same client and
options.

#### `client()`

Return the parent `CloudflareWorkersSDK` instance.

#### `entopts()`

Return a copy of the entity options.


---

## SecretsStoreSecretEntity

```ts
const secrets_store_secret = client.SecretsStoreSecret()
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `comment` | `string` | No | Freeform text describing the secret. |
| `name` | `string` | Yes | The name of the secret. |
| `scopes` | `any[]` | Yes | The list of services that can use this secret. |

### Operations

#### `create(data: object, ctrl?: object)`

Create a new entity with the given data.

```ts
const result = await client.SecretsStoreSecret().create({
  account_id: 'example_account_id',
  secret_id: 'example_secret_id',
  store_id: 'example_store_id',
  name: 'example_name',
  scopes: [],
})
```

### Common Methods

#### `data(data?: object)`

Get or set the entity data. When called with data, sets the entity's
internal data and returns the current data. When called without
arguments, returns a copy of the current data.

#### `match(match?: object)`

Get or set the entity match criteria. Works the same as `data()`.

#### `make()`

Create a new `SecretsStoreSecretEntity` instance with the same client and
options.

#### `client()`

Return the parent `CloudflareWorkersSDK` instance.

#### `entopts()`

Return a copy of the entity options.


---

## SecretsStoreStoreEntity

```ts
const secrets_store_store = client.SecretsStoreStore()
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `id` | `string` | No |  |
| `name` | `string` | Yes | The name of the store. |
| `result` | `any` | Yes |  |

### Operations

#### `create(data: object, ctrl?: object)`

Create a new entity with the given data.

```ts
const result = await client.SecretsStoreStore().create({
  account_id: 'example_account_id',
  name: 'example_name',
  result: 'example_result',
})
```

#### `load(match: object, ctrl?: object)`

Load a single entity matching the given criteria.

```ts
const result = await client.SecretsStoreStore().load({ id: 'secrets_store_store_id', account_id: 'account_id' })
```

### Common Methods

#### `data(data?: object)`

Get or set the entity data. When called with data, sets the entity's
internal data and returns the current data. When called without
arguments, returns a copy of the current data.

#### `match(match?: object)`

Get or set the entity match criteria. Works the same as `data()`.

#### `make()`

Create a new `SecretsStoreStoreEntity` instance with the same client and
options.

#### `client()`

Return the parent `CloudflareWorkersSDK` instance.

#### `entopts()`

Return a copy of the entity options.


---

## SecretsStoreStoresResponseCollectionEntity

```ts
const secrets_store_stores_response_collection = client.SecretsStoreStoresResponseCollection()
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `result` | `any[]` | No |  |

### Operations

#### `list(match: object, ctrl?: object)`

List entities matching the given criteria. Returns an array.

```ts
const results = await client.SecretsStoreStoresResponseCollection().list({ account_id: "example" })
```

### Common Methods

#### `data(data?: object)`

Get or set the entity data. When called with data, sets the entity's
internal data and returns the current data. When called without
arguments, returns a copy of the current data.

#### `match(match?: object)`

Get or set the entity match criteria. Works the same as `data()`.

#### `make()`

Create a new `SecretsStoreStoresResponseCollectionEntity` instance with the same client and
options.

#### `client()`

Return the parent `CloudflareWorkersSDK` instance.

#### `entopts()`

Return a copy of the entity options.


---

## SettingEntity

```ts
const setting = client.Setting()
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `errors` | `any[]` | Yes |  |
| `messages` | `any[]` | Yes |  |
| `result` | `Record<string, any>` | Yes |  |
| `success` | `boolean` | Yes | Whether the API call was successful. |

### Operations

#### `list(match: object, ctrl?: object)`

List entities matching the given criteria. Returns an array.

```ts
const results = await client.Setting().list({ account_id: "example", environment_name: "example", service_id: "example" })
```

#### `update(data: object, ctrl?: object)`

Update an existing entity. The data must include the entity `id`.

```ts
const result = await client.Setting().update({
  account_id: 'account_id',
  environment_name: 'environment_name',
  service_id: 'service_id',
  // Fields to update
})
```

### Common Methods

#### `data(data?: object)`

Get or set the entity data. When called with data, sets the entity's
internal data and returns the current data. When called without
arguments, returns a copy of the current data.

#### `match(match?: object)`

Get or set the entity match criteria. Works the same as `data()`.

#### `make()`

Create a new `SettingEntity` instance with the same client and
options.

#### `client()`

Return the parent `CloudflareWorkersSDK` instance.

#### `entopts()`

Return a copy of the entity options.


---

## SharedEntity

```ts
const shared = client.Shared()
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `errors` | `any[]` | Yes |  |
| `id` | `string` | No |  |
| `messages` | `any[]` | Yes |  |
| `result` | `Record<string, any>` | Yes | Complete results of a query run. |
| `success` | `boolean` | Yes |  |

### Actions

This entity exposes custom API actions in addition to the standard
operations. Select one with `$action` in the call's argument; the
remaining keys are sent as that action's payload.

| Action | Route | Call |
| --- | --- | --- |
| `query` | `/accounts/{account_id}/workers/observability/shared/query` | `client.Shared().create({ $action: 'query', ... })` |

An action returns that action's OWN response, which is not necessarily a
Shared record — check the API definition for its shape.

```ts
const result = await client.Shared().create({
  $action: 'query',
  /* ...the action's own arguments */
})
```

### Operations

#### `create(data: object, ctrl?: object)`

Create a new entity with the given data.

```ts
const result = await client.Shared().create({
  account_id: 'example_account_id',
  errors: [],
  messages: [],
  result: {},
  success: true,
})
```

#### `load(match: object, ctrl?: object)`

Load a single entity matching the given criteria.

```ts
const result = await client.Shared().load({ id: 'shared_id', account_id: 'account_id' })
```

### Common Methods

#### `data(data?: object)`

Get or set the entity data. When called with data, sets the entity's
internal data and returns the current data. When called without
arguments, returns a copy of the current data.

#### `match(match?: object)`

Get or set the entity match criteria. Works the same as `data()`.

#### `make()`

Create a new `SharedEntity` instance with the same client and
options.

#### `client()`

Return the parent `CloudflareWorkersSDK` instance.

#### `entopts()`

Return a copy of the entity options.


---

## TailEntity

```ts
const tail = client.Tail()
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `id` | `string` | No |  |

### Operations

#### `remove(match: object, ctrl?: object)`

Remove the entity matching the given criteria.

```ts
const result = await client.Tail().remove({ account_id: 'account_id', id: 'id', script_id: 'script_id' })
```

### Common Methods

#### `data(data?: object)`

Get or set the entity data. When called with data, sets the entity's
internal data and returns the current data. When called without
arguments, returns a copy of the current data.

#### `match(match?: object)`

Get or set the entity match criteria. Works the same as `data()`.

#### `make()`

Create a new `TailEntity` instance with the same client and
options.

#### `client()`

Return the parent `CloudflareWorkersSDK` instance.

#### `entopts()`

Return a copy of the entity options.


---

## TokenEntity

```ts
const token = client.Token()
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `id` | `string` | No |  |

### Operations

#### `remove(match: object, ctrl?: object)`

Remove the entity matching the given criteria.

```ts
const result = await client.Token().remove({ account_id: 'account_id', id: 'id' })
```

### Common Methods

#### `data(data?: object)`

Get or set the entity data. When called with data, sets the entity's
internal data and returns the current data. When called without
arguments, returns a copy of the current data.

#### `match(match?: object)`

Get or set the entity match criteria. Works the same as `data()`.

#### `make()`

Create a new `TokenEntity` instance with the same client and
options.

#### `client()`

Return the parent `CloudflareWorkersSDK` instance.

#### `entopts()`

Return a copy of the entity options.


---

## TriggerEntity

```ts
const trigger = client.Trigger()
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `branch_excludes` | `any[]` | Yes | Branch patterns that must not start builds. |
| `branch_includes` | `any[]` | Yes | Branch patterns that can start builds. |
| `build_caching_enabled` | `boolean` | No | Whether builds reuse cached dependencies and build artifacts. |
| `build_command` | `string` | Yes | Command to build the Worker. |
| `build_token_uuid` | `string` | Yes | UUID of the build token used when deploying the Worker. |
| `deploy_command` | `string` | Yes | Command to deploy the Worker. |
| `external_script_id` | `string` | Yes | System-generated tag of the Worker. |
| `id` | `string` | No |  |
| `path_excludes` | `any[]` | Yes | Path patterns that must not start builds. |
| `path_includes` | `any[]` | Yes | Path patterns that can start builds. |
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

### Actions

This entity exposes custom API actions in addition to the standard
operations. Select one with `$action` in the call's argument; the
remaining keys are sent as that action's payload.

| Action | Route | Call |
| --- | --- | --- |
| `build` | `/accounts/{account_id}/builds/triggers/{trigger_uuid}/builds` | `client.Trigger().create({ $action: 'build', ... })` |

An action returns that action's OWN response, which is not necessarily a
Trigger record — check the API definition for its shape.

```ts
const result = await client.Trigger().create({
  $action: 'build',
  /* ...the action's own arguments */
})
```

### Operations

#### `create(data: object, ctrl?: object)`

Create a new entity with the given data.

```ts
const result = await client.Trigger().create({
  account_id: 'example_account_id',
  branch_excludes: [],
  branch_includes: [],
  build_command: 'example_build_command',
  build_token_uuid: 'example_build_token_uuid',
  deploy_command: 'example_deploy_command',
  external_script_id: 'example_external_script_id',
  path_excludes: [],
  path_includes: [],
  repo_connection_uuid: 'example_repo_connection_uuid',
  root_directory: 'example_root_directory',
  trigger_name: 'example_trigger_name',
})
```

#### `remove(match: object, ctrl?: object)`

Remove the entity matching the given criteria.

```ts
const result = await client.Trigger().remove({ account_id: 'account_id', id: 'id' })
```

#### `update(data: object, ctrl?: object)`

Update an existing entity. The data must include the entity `id`.

```ts
const result = await client.Trigger().update({
  account_id: 'account_id',
  id: 'id',
  // Fields to update
})
```

### Common Methods

#### `data(data?: object)`

Get or set the entity data. When called with data, sets the entity's
internal data and returns the current data. When called without
arguments, returns a copy of the current data.

#### `match(match?: object)`

Get or set the entity match criteria. Works the same as `data()`.

#### `make()`

Create a new `TriggerEntity` instance with the same client and
options.

#### `client()`

Return the parent `CloudflareWorkersSDK` instance.

#### `entopts()`

Return a copy of the entity options.


---

## UsageEntity

```ts
const usage = client.Usage()
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `errors` | `any[]` | Yes |  |
| `messages` | `any[]` | Yes |  |
| `result` | `Record<string, any>` | Yes |  |
| `success` | `boolean` | Yes |  |

### Operations

#### `list(match: object, ctrl?: object)`

List entities matching the given criteria. Returns an array.

```ts
const results = await client.Usage().list({ account_id: "example", from: "example", to: "example" })
```

### Common Methods

#### `data(data?: object)`

Get or set the entity data. When called with data, sets the entity's
internal data and returns the current data. When called without
arguments, returns a copy of the current data.

#### `match(match?: object)`

Get or set the entity match criteria. Works the same as `data()`.

#### `make()`

Create a new `UsageEntity` instance with the same client and
options.

#### `client()`

Return the parent `CloudflareWorkersSDK` instance.

#### `entopts()`

Return a copy of the entity options.


---

## ValueEntity

```ts
const value = client.Value()
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `datasets` | `any[]` | Yes | Leave this empty to use the default datasets |
| `errors` | `any[]` | Yes |  |
| `filters` | `any[]` | No | Apply filters before listing values. |
| `key` | `string` | Yes |  |
| `limit` | `number` | No |  |
| `messages` | `any[]` | Yes |  |
| `needle` | `Record<string, any>` | Yes | Full-text search expression to match events containing the specified text or pattern. |
| `result` | `any[]` | Yes |  |
| `success` | `boolean` | Yes |  |
| `timeframe` | `Record<string, any>` | Yes |  |
| `type` | `string` | Yes |  |

### Operations

#### `create(data: object, ctrl?: object)`

Create a new entity with the given data.

```ts
const result = await client.Value().create({
  account_id: 'example_account_id',
  datasets: [],
  errors: [],
  key: 'example_key',
  messages: [],
  needle: {},
  result: [],
  success: true,
  timeframe: {},
  type: 'example_type',
})
```

### Common Methods

#### `data(data?: object)`

Get or set the entity data. When called with data, sets the entity's
internal data and returns the current data. When called without
arguments, returns a copy of the current data.

#### `match(match?: object)`

Get or set the entity match criteria. Works the same as `data()`.

#### `make()`

Create a new `ValueEntity` instance with the same client and
options.

#### `client()`

Return the parent `CloudflareWorkersSDK` instance.

#### `entopts()`

Return a copy of the entity options.


---

## VersionEntity

```ts
const version = client.Version()
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `annotations` | `Record<string, any>` | No | Metadata about the version. |
| `assets` | `Record<string, any>` | No | Configuration for assets within a Worker. |
| `author_email` | `string` | No | Email of the user who created the version. |
| `author_id` | `string` | No | Identifier of the user who created the version. |
| `bindings` | `any[]` | No | List of bindings attached to a Worker. |
| `cache_options` | `Record<string, any>` | Yes | Global CacheW configuration for the Worker. |
| `compatibility_date` | `string` | No | Date indicating targeted support in the Workers runtime. |
| `compatibility_flags` | `any[]` | No | Flags that enable or disable certain features in the Workers runtime. |
| `containers` | `any[]` | No | List of containers attached to a Worker. |
| `created_on` | `string` | Yes | When the version was created. |
| `errors` | `any[]` | Yes |  |
| `exports` | `any` | No | Declarative exports for the version, including Durable Object classes (with their `storage` backend) and named Worker entrypoints. |
| `exports_reconciliation` | `any` | No | Summary of the declarative exports reconciliation that ran on this upload. |
| `id` | `string` | Yes | Version identifier. |
| `limits` | `Record<string, any>` | No | Resource limits enforced at runtime. |
| `main_module` | `string` | No | The name of the main module in the `modules` array (e.g. |
| `messages` | `any[]` | Yes |  |
| `migration_tag` | `string` | No | Durable Object migration tag. |
| `migrations` | `any` | No | Migrations for Durable Objects associated with the version. |
| `modules` | `any[]` | No | Code, sourcemaps, and other content used at runtime. |
| `number` | `number` | Yes | The integer version number, starting from one. |
| `package_dependencies` | `any[]` | No | The list of npm packages that were installed and used when this Worker version was built. |
| `placement` | `Record<string, any>` | No | Configuration for [Smart Placement](https://developers.cloudflare.com/workers/configuration/smart-placement). |
| `result` | `Record<string, any>` | Yes |  |
| `source` | `string` | No | The client used to create the version. |
| `startup_time_ms` | `number` | No | Time in milliseconds spent on [Worker startup](https://developers.cloudflare.com/workers/platform/limits/#worker-startup-time). |
| `success` | `boolean` | Yes | Whether the API call was successful. |
| `urls` | `any[]` | Yes | All routable URLs that always point to this version. |
| `usage_model` | `string` | No | Usage model for the version. |

### Actions

This entity exposes custom API actions in addition to the standard
operations. Select one with `$action` in the call's argument; the
remaining keys are sent as that action's payload.

| Action | Route | Call |
| --- | --- | --- |
| `latest` | `/accounts/{account_id}/workers/workers/{worker_id}/versions/latest` | `client.Version().list({ $action: 'latest', ... })` |
| `latest` | `/accounts/{account_id}/workers/workers/{worker_id}/versions/latest` | `client.Version().update({ $action: 'latest', ... })` |

An action returns that action's OWN response, which is not necessarily a
Version record — check the API definition for its shape.

```ts
const result = await client.Version().list({
  $action: 'latest',
  /* ...the action's own arguments */
})
```

### Operations

#### `create(data: object, ctrl?: object)`

Create a new entity with the given data.

```ts
const result = await client.Version().create({
  account_id: 'example_account_id',
  worker_id: 'example_worker_id',
  cache_options: {},
  created_on: 'example_created_on',
  errors: [],
  id: 'example_id',
  messages: [],
  number: 1,
  result: {},
  success: true,
  urls: [],
})
```

#### `list(match: object, ctrl?: object)`

List entities matching the given criteria. Returns an array.

```ts
const results = await client.Version().list({ account_id: "example", worker_id: "example" })
```

#### `load(match: object, ctrl?: object)`

Load a single entity matching the given criteria.

```ts
const result = await client.Version().load({ id: 'version_id', account_id: 'account_id', worker_id: 'worker_id' })
```

#### `remove(match: object, ctrl?: object)`

Remove the entity matching the given criteria.

```ts
const result = await client.Version().remove({ id: 'version_id', account_id: 'account_id', worker_id: 'worker_id' })
```

#### `update(data: object, ctrl?: object)`

Update an existing entity. The data must include the entity `id`.

```ts
const result = await client.Version().update({
  id: 'version_id',
  account_id: 'account_id',
  worker_id: 'worker_id',
  // Fields to update
})
```

### Common Methods

#### `data(data?: object)`

Get or set the entity data. When called with data, sets the entity's
internal data and returns the current data. When called without
arguments, returns a copy of the current data.

#### `match(match?: object)`

Get or set the entity match criteria. Works the same as `data()`.

#### `make()`

Create a new `VersionEntity` instance with the same client and
options.

#### `client()`

Return the parent `CloudflareWorkersSDK` instance.

#### `entopts()`

Return a copy of the entity options.


---

## WorkerEntity

```ts
const worker = client.Worker()
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `auto_build` | `boolean` | No | Whether pushes to the git branch build this Preview. |
| `auto_delete` | `boolean` | No | Whether deleting the git branch also deletes this Preview. |
| `branch` | `any` | No | Git branch name (required if commit_hash not provided) |
| `commit_hash` | `any` | No | Git commit hash (required if branch not provided) |
| `errors` | `any[]` | Yes |  |
| `git_repository` | `any` | Yes | Git repository settings to update |
| `id` | `string` | No |  |
| `messages` | `any[]` | Yes |  |
| `previews_base_config` | `Record<string, any>` | Yes | Build and deploy settings when creating a Worker build configuration |
| `previews_enabled` | `boolean` | Yes | Whether Previews are enabled for this Worker |
| `production_settings` | `Record<string, any>` | Yes | Build and deploy settings when creating a Worker build configuration |
| `result` | `Record<string, any>` | Yes | A single Preview of a Worker, with the build settings it currently uses. |
| `result_info` | `Record<string, any>` | No |  |
| `script_tag` | `string` | Yes | System-generated tag of the Worker. |
| `seed_repo` | `any` | No | Optional repository and file overrides used to seed this build. |
| `settings` | `Record<string, any>` | No | Partial build settings for updating a Worker build configuration |
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

### Actions

This entity exposes custom API actions in addition to the standard
operations. Select one with `$action` in the call's argument; the
remaining keys are sent as that action's payload.

| Action | Route | Call |
| --- | --- | --- |
| `migrate_to_preview` | `/accounts/{account_id}/builds/workers/{script_tag}/migrate_to_previews` | `client.Worker().create({ $action: 'migrate_to_preview', ... })` |
| `build` | `/accounts/{account_id}/builds/workers/{external_script_id}/builds` | `client.Worker().list({ $action: 'build', ... })` |
| `preview` | `/accounts/{account_id}/builds/workers/{script_tag}/previews` | `client.Worker().list({ $action: 'preview', ... })` |
| `trigger` | `/accounts/{account_id}/builds/workers/{external_script_id}/triggers` | `client.Worker().list({ $action: 'trigger', ... })` |

An action returns that action's OWN response, which is not necessarily a
Worker record — check the API definition for its shape.

```ts
const result = await client.Worker().create({
  $action: 'migrate_to_preview',
  /* ...the action's own arguments */
})
```

### Operations

#### `create(data: object, ctrl?: object)`

Create a new entity with the given data.

```ts
const result = await client.Worker().create({
  account_id: 'example_account_id',
  errors: [],
  git_repository: 'example_git_repository',
  messages: [],
  previews_base_config: {},
  previews_enabled: true,
  production_settings: {},
  result: {},
  script_tag: 'example_script_tag',
  success: true,
})
```

#### `list(match: object, ctrl?: object)`

List entities matching the given criteria. Returns an array.

```ts
const results = await client.Worker().list({ account_id: "example" })
```

#### `load(match: object, ctrl?: object)`

Load a single entity matching the given criteria.

```ts
const result = await client.Worker().load({ id: 'worker_id', account_id: 'account_id' })
```

#### `remove(match: object, ctrl?: object)`

Remove the entity matching the given criteria.

```ts
const result = await client.Worker().remove({ id: 'worker_id', account_id: 'account_id' })
```

#### `update(data: object, ctrl?: object)`

Update an existing entity. The data must include the entity `id`.

```ts
const result = await client.Worker().update({
  id: 'worker_id',
  account_id: 'account_id',
  // Fields to update
})
```

### Common Methods

#### `data(data?: object)`

Get or set the entity data. When called with data, sets the entity's
internal data and returns the current data. When called without
arguments, returns a copy of the current data.

#### `match(match?: object)`

Get or set the entity match criteria. Works the same as `data()`.

#### `make()`

Create a new `WorkerEntity` instance with the same client and
options.

#### `client()`

Return the parent `CloudflareWorkersSDK` instance.

#### `entopts()`

Return a copy of the entity options.


---

## WorkerCronTriggerEntity

```ts
const worker_cron_trigger = client.WorkerCronTrigger()
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `errors` | `any[]` | Yes |  |
| `messages` | `any[]` | Yes |  |
| `result` | `Record<string, any>` | Yes |  |
| `success` | `boolean` | Yes | Whether the API call was successful. |

### Operations

#### `list(match: object, ctrl?: object)`

List entities matching the given criteria. Returns an array.

```ts
const results = await client.WorkerCronTrigger().list({ account_id: "example", script_name: "example" })
```

#### `update(data: object, ctrl?: object)`

Update an existing entity. The data must include the entity `id`.

```ts
const result = await client.WorkerCronTrigger().update({
  account_id: 'account_id',
  script_name: 'script_name',
  // Fields to update
})
```

### Common Methods

#### `data(data?: object)`

Get or set the entity data. When called with data, sets the entity's
internal data and returns the current data. When called without
arguments, returns a copy of the current data.

#### `match(match?: object)`

Get or set the entity match criteria. Works the same as `data()`.

#### `make()`

Create a new `WorkerCronTriggerEntity` instance with the same client and
options.

#### `client()`

Return the parent `CloudflareWorkersSDK` instance.

#### `entopts()`

Return a copy of the entity options.


---

## WorkerDeploymentEntity

```ts
const worker_deployment = client.WorkerDeployment()
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `annotations` | `Record<string, any>` | No |  |
| `author_email` | `string` | No |  |
| `created_on` | `string` | Yes |  |
| `errors` | `any[]` | Yes |  |
| `id` | `string` | Yes |  |
| `messages` | `any[]` | Yes |  |
| `result` | `Record<string, any>` | Yes |  |
| `source` | `string` | Yes |  |
| `strategy` | `string` | Yes |  |
| `success` | `boolean` | Yes | Whether the API call was successful. |
| `versions` | `any[]` | Yes | Worker versions included in this deployment. |

### Operations

#### `create(data: object, ctrl?: object)`

Create a new entity with the given data.

```ts
const result = await client.WorkerDeployment().create({
  account_id: 'example_account_id',
  script_name: 'example_script_name',
  created_on: 'example_created_on',
  errors: [],
  id: 'example_id',
  messages: [],
  result: {},
  source: 'example_source',
  strategy: 'example_strategy',
  success: true,
  versions: [],
})
```

#### `load(match: object, ctrl?: object)`

Load a single entity matching the given criteria.

```ts
const result = await client.WorkerDeployment().load({ id: 'worker_deployment_id', account_id: 'account_id' })
```

### Common Methods

#### `data(data?: object)`

Get or set the entity data. When called with data, sets the entity's
internal data and returns the current data. When called without
arguments, returns a copy of the current data.

#### `match(match?: object)`

Get or set the entity match criteria. Works the same as `data()`.

#### `make()`

Create a new `WorkerDeploymentEntity` instance with the same client and
options.

#### `client()`

Return the parent `CloudflareWorkersSDK` instance.

#### `entopts()`

Return a copy of the entity options.


---

## WorkerEnvironmentEntity

```ts
const worker_environment = client.WorkerEnvironment()
```

### Operations

#### `load(match: object, ctrl?: object)`

Load a single entity matching the given criteria.

```ts
const result = await client.WorkerEnvironment().load({ account_id: 'account_id', environment_name: 'environment_name', service_id: 'service_id' })
```

### Common Methods

#### `data(data?: object)`

Get or set the entity data. When called with data, sets the entity's
internal data and returns the current data. When called without
arguments, returns a copy of the current data.

#### `match(match?: object)`

Get or set the entity match criteria. Works the same as `data()`.

#### `make()`

Create a new `WorkerEnvironmentEntity` instance with the same client and
options.

#### `client()`

Return the parent `CloudflareWorkersSDK` instance.

#### `entopts()`

Return a copy of the entity options.


---

## WorkerRouteEntity

```ts
const worker_route = client.WorkerRoute()
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `errors` | `any[]` | Yes |  |
| `id` | `string` | Yes |  |
| `messages` | `any[]` | Yes |  |
| `pattern` | `string` | Yes | Pattern to match incoming requests against. |
| `result` | `Record<string, any>` | Yes |  |
| `script` | `string` | No | Name of the script to run if the route matches. |
| `success` | `boolean` | Yes | Whether the API call was successful. |

### Operations

#### `create(data: object, ctrl?: object)`

Create a new entity with the given data.

```ts
const result = await client.WorkerRoute().create({
  zone_id: 'example_zone_id',
  errors: [],
  id: 'example_id',
  messages: [],
  pattern: 'example_pattern',
  result: {},
  success: true,
})
```

#### `list(match: object, ctrl?: object)`

List entities matching the given criteria. Returns an array.

```ts
const results = await client.WorkerRoute().list({ zone_id: "example" })
```

#### `load(match: object, ctrl?: object)`

Load a single entity matching the given criteria.

```ts
const result = await client.WorkerRoute().load({ id: 'worker_route_id', zone_id: 'zone_id' })
```

#### `remove(match: object, ctrl?: object)`

Remove the entity matching the given criteria.

```ts
const result = await client.WorkerRoute().remove({ id: 'worker_route_id', zone_id: 'zone_id' })
```

#### `update(data: object, ctrl?: object)`

Update an existing entity. The data must include the entity `id`.

```ts
const result = await client.WorkerRoute().update({
  id: 'worker_route_id',
  zone_id: 'zone_id',
  // Fields to update
})
```

### Common Methods

#### `data(data?: object)`

Get or set the entity data. When called with data, sets the entity's
internal data and returns the current data. When called without
arguments, returns a copy of the current data.

#### `match(match?: object)`

Get or set the entity match criteria. Works the same as `data()`.

#### `make()`

Create a new `WorkerRouteEntity` instance with the same client and
options.

#### `client()`

Return the parent `CloudflareWorkersSDK` instance.

#### `entopts()`

Return a copy of the entity options.


---

## WorkerScriptEntity

```ts
const worker_script = client.WorkerScript()
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `errors` | `any[]` | Yes |  |
| `id` | `string` | No |  |
| `messages` | `any[]` | Yes |  |
| `result` | `Record<string, any>` | No | A secret value accessible through a binding. |
| `success` | `boolean` | Yes | Whether the API call was successful. |

### Field Usage by Operation

| Field | load | list | create | update | remove |
| --- | --- | --- | --- | --- | --- |
| `errors` | - | - | - | - | - |
| `id` | - | - | - | - | - |
| `messages` | - | - | - | - | - |
| `result` | - | Yes | - | - | - |
| `success` | - | - | - | - | - |

### Actions

This entity exposes custom API actions in addition to the standard
operations. Select one with `$action` in the call's argument; the
remaining keys are sent as that action's payload.

| Action | Route | Call |
| --- | --- | --- |
| `subdomain` | `/accounts/{account_id}/workers/scripts/{script_name}/subdomain` | `client.WorkerScript().create({ $action: 'subdomain', ... })` |
| `subdomain` | `/accounts/{account_id}/workers/scripts/{script_name}/subdomain` | `client.WorkerScript().list({ $action: 'subdomain', ... })` |
| `secrets_bulk` | `/accounts/{account_id}/workers/scripts/{script_name}/secrets-bulk` | `client.WorkerScript().patch({ $action: 'secrets_bulk', ... })` |
| `subdomain` | `/accounts/{account_id}/workers/scripts/{script_name}/subdomain` | `client.WorkerScript().remove({ $action: 'subdomain', ... })` |

An action returns that action's OWN response, which is not necessarily a
WorkerScript record — check the API definition for its shape.

```ts
const result = await client.WorkerScript().create({
  $action: 'subdomain',
  /* ...the action's own arguments */
})
```

### Operations

#### `create(data: object, ctrl?: object)`

Create a new entity with the given data.

```ts
const result = await client.WorkerScript().create({
  account_id: 'example_account_id',
  script_name: 'example_script_name',
  errors: [],
  messages: [],
  success: true,
})
```

#### `list(match: object, ctrl?: object)`

List entities matching the given criteria. Returns an array.

```ts
const results = await client.WorkerScript().list({ account_id: "example" })
```

#### `load(match: object, ctrl?: object)`

Load a single entity matching the given criteria.

```ts
const result = await client.WorkerScript().load({ id: 'worker_script_id', account_id: 'account_id' })
```

#### `remove(match: object, ctrl?: object)`

Remove the entity matching the given criteria.

```ts
const result = await client.WorkerScript().remove({ account_id: 'account_id', script_name: 'script_name' })
```

#### `update(data: object, ctrl?: object)`

Update an existing entity. The data must include the entity `id`.

```ts
const result = await client.WorkerScript().update({
  id: 'worker_script_id',
  account_id: 'account_id',
  // Fields to update
})
```

### Common Methods

#### `data(data?: object)`

Get or set the entity data. When called with data, sets the entity's
internal data and returns the current data. When called without
arguments, returns a copy of the current data.

#### `match(match?: object)`

Get or set the entity match criteria. Works the same as `data()`.

#### `make()`

Create a new `WorkerScriptEntity` instance with the same client and
options.

#### `client()`

Return the parent `CloudflareWorkersSDK` instance.

#### `entopts()`

Return a copy of the entity options.


---

## WorkerSubdomainEntity

```ts
const worker_subdomain = client.WorkerSubdomain()
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `errors` | `any[]` | Yes |  |
| `messages` | `any[]` | Yes |  |
| `result` | `Record<string, any>` | Yes |  |
| `subdomain` | `string` | Yes |  |
| `success` | `boolean` | Yes | Whether the API call was successful. |

### Operations

#### `list(match: object, ctrl?: object)`

List entities matching the given criteria. Returns an array.

```ts
const results = await client.WorkerSubdomain().list({ account_id: "example" })
```

#### `remove(match: object, ctrl?: object)`

Remove the entity matching the given criteria.

```ts
const result = await client.WorkerSubdomain().remove({ account_id: 'account_id' })
```

#### `update(data: object, ctrl?: object)`

Update an existing entity. The data must include the entity `id`.

```ts
const result = await client.WorkerSubdomain().update({
  account_id: 'account_id',
  // Fields to update
})
```

### Common Methods

#### `data(data?: object)`

Get or set the entity data. When called with data, sets the entity's
internal data and returns the current data. When called without
arguments, returns a copy of the current data.

#### `match(match?: object)`

Get or set the entity match criteria. Works the same as `data()`.

#### `make()`

Create a new `WorkerSubdomainEntity` instance with the same client and
options.

#### `client()`

Return the parent `CloudflareWorkersSDK` instance.

#### `entopts()`

Return a copy of the entity options.


---

## WorkerTailLogEntity

```ts
const worker_tail_log = client.WorkerTailLog()
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `errors` | `any[]` | Yes |  |
| `messages` | `any[]` | Yes |  |
| `result` | `Record<string, any>` | Yes |  |
| `success` | `boolean` | Yes | Whether the API call was successful. |

### Operations

#### `create(data: object, ctrl?: object)`

Create a new entity with the given data.

```ts
const result = await client.WorkerTailLog().create({
  account_id: 'example_account_id',
  script_name: 'example_script_name',
  errors: [],
  messages: [],
  result: {},
  success: true,
})
```

#### `list(match: object, ctrl?: object)`

List entities matching the given criteria. Returns an array.

```ts
const results = await client.WorkerTailLog().list({ account_id: "example", script_name: "example" })
```

### Common Methods

#### `data(data?: object)`

Get or set the entity data. When called with data, sets the entity's
internal data and returns the current data. When called without
arguments, returns a copy of the current data.

#### `match(match?: object)`

Get or set the entity match criteria. Works the same as `data()`.

#### `make()`

Create a new `WorkerTailLogEntity` instance with the same client and
options.

#### `client()`

Return the parent `CloudflareWorkersSDK` instance.

#### `entopts()`

Return a copy of the entity options.


---

## WorkersAccountSettingEntity

```ts
const workers_account_setting = client.WorkersAccountSetting()
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `default_usage_model` | `string` | No |  |
| `errors` | `any[]` | Yes |  |
| `green_compute` | `boolean` | No |  |
| `messages` | `any[]` | Yes |  |
| `result` | `Record<string, any>` | Yes |  |
| `success` | `boolean` | Yes | Whether the API call was successful. |

### Operations

#### `list(match: object, ctrl?: object)`

List entities matching the given criteria. Returns an array.

```ts
const results = await client.WorkersAccountSetting().list({ account_id: "example" })
```

#### `update(data: object, ctrl?: object)`

Update an existing entity. The data must include the entity `id`.

```ts
const result = await client.WorkersAccountSetting().update({
  account_id: 'account_id',
  // Fields to update
})
```

### Common Methods

#### `data(data?: object)`

Get or set the entity data. When called with data, sets the entity's
internal data and returns the current data. When called without
arguments, returns a copy of the current data.

#### `match(match?: object)`

Get or set the entity match criteria. Works the same as `data()`.

#### `make()`

Create a new `WorkersAccountSettingEntity` instance with the same client and
options.

#### `client()`

Return the parent `CloudflareWorkersSDK` instance.

#### `entopts()`

Return a copy of the entity options.


---

## WorkersApiResponseNullResultEntity

```ts
const workers_api_response_null_result = client.WorkersApiResponseNullResult()
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `errors` | `any[]` | Yes |  |
| `messages` | `any[]` | Yes |  |
| `result` | `Record<string, any>` | No |  |
| `success` | `boolean` | Yes | Whether the API call was successful. |

### Operations

#### `remove(match: object, ctrl?: object)`

Remove the entity matching the given criteria.

```ts
const result = await client.WorkersApiResponseNullResult().remove({ account_id: 'account_id' })
```

#### `update(data: object, ctrl?: object)`

Update an existing entity. The data must include the entity `id`.

```ts
const result = await client.WorkersApiResponseNullResult().update({
  account_id: 'account_id',
  namespace_id: 'namespace_id',
  script_id: 'script_id',
  tag: 'tag',
  // Fields to update
})
```

### Common Methods

#### `data(data?: object)`

Get or set the entity data. When called with data, sets the entity's
internal data and returns the current data. When called without
arguments, returns a copy of the current data.

#### `match(match?: object)`

Get or set the entity match criteria. Works the same as `data()`.

#### `make()`

Create a new `WorkersApiResponseNullResultEntity` instance with the same client and
options.

#### `client()`

Return the parent `CloudflareWorkersSDK` instance.

#### `entopts()`

Return a copy of the entity options.


---

## WorkersCompletedUploadAssetEntity

```ts
const workers_completed_upload_asset = client.WorkersCompletedUploadAsset()
```

### Operations

#### `create(data: object, ctrl?: object)`

Create a new entity with the given data.

```ts
const result = await client.WorkersCompletedUploadAsset().create({
  account_id: 'example_account_id',
  base64: true,
})
```

### Common Methods

#### `data(data?: object)`

Get or set the entity data. When called with data, sets the entity's
internal data and returns the current data. When called without
arguments, returns a copy of the current data.

#### `match(match?: object)`

Get or set the entity match criteria. Works the same as `data()`.

#### `make()`

Create a new `WorkersCompletedUploadAssetEntity` instance with the same client and
options.

#### `client()`

Return the parent `CloudflareWorkersSDK` instance.

#### `entopts()`

Return a copy of the entity options.


---

## WorkersCreateAssetsUploadSessionEntity

```ts
const workers_create_assets_upload_session = client.WorkersCreateAssetsUploadSession()
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `manifest` | `Record<string, any>` | Yes | A manifest ([path]: {hash, size}) map of files to upload. |

### Operations

#### `create(data: object, ctrl?: object)`

Create a new entity with the given data.

```ts
const result = await client.WorkersCreateAssetsUploadSession().create({
  account_id: 'example_account_id',
  script_name: 'example_script_name',
  manifest: {},
})
```

### Common Methods

#### `data(data?: object)`

Get or set the entity data. When called with data, sets the entity's
internal data and returns the current data. When called without
arguments, returns a copy of the current data.

#### `match(match?: object)`

Get or set the entity match criteria. Works the same as `data()`.

#### `make()`

Create a new `WorkersCreateAssetsUploadSessionEntity` instance with the same client and
options.

#### `client()`

Return the parent `CloudflareWorkersSDK` instance.

#### `entopts()`

Return a copy of the entity options.


---

## WorkersForPlatformEntity

```ts
const workers_for_platform = client.WorkersForPlatform()
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `errors` | `any[]` | Yes |  |
| `messages` | `any[]` | Yes |  |
| `result` | `Record<string, any>` | Yes | A secret value accessible through a binding. |
| `success` | `boolean` | Yes | Whether the API call was successful. |

### Field Usage by Operation

| Field | load | list | update |
| --- | --- | --- | --- |
| `errors` | - | - | - |
| `messages` | - | - | - |
| `result` | - | Yes | - |
| `success` | - | - | - |

### Operations

#### `list(match: object, ctrl?: object)`

List entities matching the given criteria. Returns an array.

```ts
const results = await client.WorkersForPlatform().list({ account_id: "example" })
```

#### `load(match: object, ctrl?: object)`

Load a single entity matching the given criteria.

```ts
const result = await client.WorkersForPlatform().load({ account_id: 'account_id', namespace_id: 'namespace_id' })
```

#### `update(data: object, ctrl?: object)`

Update an existing entity. The data must include the entity `id`.

```ts
const result = await client.WorkersForPlatform().update({
  account_id: 'account_id',
  namespace_id: 'namespace_id',
  script_name: 'script_name',
  // Fields to update
})
```

### Common Methods

#### `data(data?: object)`

Get or set the entity data. When called with data, sets the entity's
internal data and returns the current data. When called without
arguments, returns a copy of the current data.

#### `match(match?: object)`

Get or set the entity match criteria. Works the same as `data()`.

#### `make()`

Create a new `WorkersForPlatformEntity` instance with the same client and
options.

#### `client()`

Return the parent `CloudflareWorkersSDK` instance.

#### `entopts()`

Return a copy of the entity options.


---

## WorkersKvApiResponseCommonNoResultEntity

```ts
const workers_kv_api_response_common_no_result = client.WorkersKvApiResponseCommonNoResult()
```

### Operations

#### `remove(match: object, ctrl?: object)`

Remove the entity matching the given criteria.

```ts
const result = await client.WorkersKvApiResponseCommonNoResult().remove({ account_id: 'account_id', namespace_id: 'namespace_id' })
```

#### `update(data: object, ctrl?: object)`

Update an existing entity. The data must include the entity `id`.

```ts
const result = await client.WorkersKvApiResponseCommonNoResult().update({
  account_id: 'account_id',
  key_name: 'key_name',
  namespace_id: 'namespace_id',
  // Fields to update
})
```

### Common Methods

#### `data(data?: object)`

Get or set the entity data. When called with data, sets the entity's
internal data and returns the current data. When called without
arguments, returns a copy of the current data.

#### `match(match?: object)`

Get or set the entity match criteria. Works the same as `data()`.

#### `make()`

Create a new `WorkersKvApiResponseCommonNoResultEntity` instance with the same client and
options.

#### `client()`

Return the parent `CloudflareWorkersSDK` instance.

#### `entopts()`

Return a copy of the entity options.


---

## WorkersKvNamespaceEntity

```ts
const workers_kv_namespace = client.WorkersKvNamespace()
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `errors` | `any[]` | Yes |  |
| `id` | `string` | No |  |
| `jurisdiction` | `string` | No | Specify the jurisdiction to restrict the KV namespace to durably store data within. |
| `keys` | `any[]` | Yes | Array of keys to retrieve (maximum of 100). |
| `messages` | `any[]` | Yes |  |
| `result` | `any` | No |  |
| `result_info` | `Record<string, any>` | No |  |
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

#### `create(data: object, ctrl?: object)`

Create a new entity with the given data.

```ts
const result = await client.WorkersKvNamespace().create({
  account_id: 'example_account_id',
  errors: [],
  keys: [],
  messages: [],
  success: true,
  title: 'example_title',
})
```

#### `list(match: object, ctrl?: object)`

List entities matching the given criteria. Returns an array.

```ts
const results = await client.WorkersKvNamespace().list({ account_id: "example" })
```

#### `load(match: object, ctrl?: object)`

Load a single entity matching the given criteria.

```ts
const result = await client.WorkersKvNamespace().load({ id: 'workers_kv_namespace_id', account_id: 'account_id' })
```

#### `remove(match: object, ctrl?: object)`

Remove the entity matching the given criteria.

```ts
const result = await client.WorkersKvNamespace().remove({ account_id: 'account_id', namespace_id: 'namespace_id' })
```

#### `update(data: object, ctrl?: object)`

Update an existing entity. The data must include the entity `id`.

```ts
const result = await client.WorkersKvNamespace().update({
  id: 'workers_kv_namespace_id',
  account_id: 'account_id',
  // Fields to update
})
```

### Common Methods

#### `data(data?: object)`

Get or set the entity data. When called with data, sets the entity's
internal data and returns the current data. When called without
arguments, returns a copy of the current data.

#### `match(match?: object)`

Get or set the entity match criteria. Works the same as `data()`.

#### `make()`

Create a new `WorkersKvNamespaceEntity` instance with the same client and
options.

#### `client()`

Return the parent `CloudflareWorkersSDK` instance.

#### `entopts()`

Return a copy of the entity options.


---

## WorkersNamespaceListEntity

```ts
const workers_namespace_list = client.WorkersNamespaceList()
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `errors` | `any[]` | Yes |  |
| `messages` | `any[]` | Yes |  |
| `result` | `any[]` | No |  |
| `success` | `boolean` | Yes | Whether the API call was successful. |

### Operations

#### `list(match: object, ctrl?: object)`

List entities matching the given criteria. Returns an array.

```ts
const results = await client.WorkersNamespaceList().list({ account_id: "example" })
```

### Common Methods

#### `data(data?: object)`

Get or set the entity data. When called with data, sets the entity's
internal data and returns the current data. When called without
arguments, returns a copy of the current data.

#### `match(match?: object)`

Get or set the entity match criteria. Works the same as `data()`.

#### `make()`

Create a new `WorkersNamespaceListEntity` instance with the same client and
options.

#### `client()`

Return the parent `CloudflareWorkersSDK` instance.

#### `entopts()`

Return a copy of the entity options.


---

## WorkersNamespaceScriptDeleteBulkEntity

```ts
const workers_namespace_script_delete_bulk = client.WorkersNamespaceScriptDeleteBulk()
```

### Operations

#### `remove(match: object, ctrl?: object)`

Remove the entity matching the given criteria.

```ts
const result = await client.WorkersNamespaceScriptDeleteBulk().remove({ account_id: 'account_id', dispatch_namespace: 'dispatch_namespace', tag: 'tag' })
```

### Common Methods

#### `data(data?: object)`

Get or set the entity data. When called with data, sets the entity's
internal data and returns the current data. When called without
arguments, returns a copy of the current data.

#### `match(match?: object)`

Get or set the entity match criteria. Works the same as `data()`.

#### `make()`

Create a new `WorkersNamespaceScriptDeleteBulkEntity` instance with the same client and
options.

#### `client()`

Return the parent `CloudflareWorkersSDK` instance.

#### `entopts()`

Return a copy of the entity options.


---

## WorkersNamespaceScriptResponseSingleEntity

```ts
const workers_namespace_script_response_single = client.WorkersNamespaceScriptResponseSingle()
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `errors` | `any[]` | Yes |  |
| `messages` | `any[]` | Yes |  |
| `result` | `Record<string, any>` | Yes | Details about a worker uploaded to a Workers for Platforms namespace. |
| `success` | `boolean` | Yes | Whether the API call was successful. |

### Actions

This entity exposes custom API actions in addition to the standard
operations. Select one with `$action` in the call's argument; the
remaining keys are sent as that action's payload.

| Action | Route | Call |
| --- | --- | --- |
| `secrets_bulk` | `/accounts/{account_id}/workers/dispatch/namespaces/{dispatch_namespace}/scripts/{script_name}/secrets-bulk` | `client.WorkersNamespaceScriptResponseSingle().update({ $action: 'secrets_bulk', ... })` |

An action returns that action's OWN response, which is not necessarily a
WorkersNamespaceScriptResponseSingle record — check the API definition for its shape.

```ts
const result = await client.WorkersNamespaceScriptResponseSingle().update({
  $action: 'secrets_bulk',
  /* ...the action's own arguments */
})
```

### Operations

#### `load(match: object, ctrl?: object)`

Load a single entity matching the given criteria.

```ts
const result = await client.WorkersNamespaceScriptResponseSingle().load({ account_id: 'account_id', namespace_id: 'namespace_id', script_name: 'script_name' })
```

#### `update(data: object, ctrl?: object)`

Update an existing entity. The data must include the entity `id`.

```ts
const result = await client.WorkersNamespaceScriptResponseSingle().update({
  account_id: 'account_id',
  namespace_id: 'namespace_id',
  script_name: 'script_name',
  // Fields to update
})
```

### Common Methods

#### `data(data?: object)`

Get or set the entity data. When called with data, sets the entity's
internal data and returns the current data. When called without
arguments, returns a copy of the current data.

#### `match(match?: object)`

Get or set the entity match criteria. Works the same as `data()`.

#### `make()`

Create a new `WorkersNamespaceScriptResponseSingleEntity` instance with the same client and
options.

#### `client()`

Return the parent `CloudflareWorkersSDK` instance.

#### `entopts()`

Return a copy of the entity options.


---

## WorkersNamespaceSingleEntity

```ts
const workers_namespace_single = client.WorkersNamespaceSingle()
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `errors` | `any[]` | Yes |  |
| `messages` | `any[]` | Yes |  |
| `name` | `string` | No | The name of the dispatch namespace. |
| `result` | `Record<string, any>` | No |  |
| `success` | `boolean` | Yes | Whether the API call was successful. |
| `trusted_workers` | `boolean` | No | Whether the Workers in the namespace are executed in a "trusted" manner. |

### Operations

#### `create(data: object, ctrl?: object)`

Create a new entity with the given data.

```ts
const result = await client.WorkersNamespaceSingle().create({
  account_id: 'example_account_id',
  errors: [],
  messages: [],
  success: true,
})
```

#### `load(match: object, ctrl?: object)`

Load a single entity matching the given criteria.

```ts
const result = await client.WorkersNamespaceSingle().load({ account_id: 'account_id', dispatch_namespace: 'dispatch_namespace' })
```

#### `update(data: object, ctrl?: object)`

Update an existing entity. The data must include the entity `id`.

```ts
const result = await client.WorkersNamespaceSingle().update({
  account_id: 'account_id',
  dispatch_namespace: 'dispatch_namespace',
  // Fields to update
})
```

### Common Methods

#### `data(data?: object)`

Get or set the entity data. When called with data, sets the entity's
internal data and returns the current data. When called without
arguments, returns a copy of the current data.

#### `match(match?: object)`

Get or set the entity match criteria. Works the same as `data()`.

#### `make()`

Create a new `WorkersNamespaceSingleEntity` instance with the same client and
options.

#### `client()`

Return the parent `CloudflareWorkersSDK` instance.

#### `entopts()`

Return a copy of the entity options.


---

## WorkersPipelinesOtherEntity

```ts
const workers_pipelines_other = client.WorkersPipelinesOther()
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `config` | `any` | No | Defines the configuration of the R2 Sink. |
| `created_at` | `string` | Yes |  |
| `destination` | `Record<string, any>` | Yes |  |
| `endpoint` | `string` | Yes | Indicates the endpoint URL to send traffic. |
| `failure_reason` | `string` | No | Indicates the reason for the failure of the Pipeline. |
| `format` | `any` | No | Defines the output data format of a sink. |
| `graph` | `Record<string, any>` | Yes | Indicates the processing flow to implement the SQL. |
| `http` | `Record<string, any>` | Yes |  |
| `id` | `string` | Yes | Indicates a unique identifier for this pipeline. |
| `modified_at` | `string` | Yes |  |
| `name` | `string` | Yes | Indicates the name of the Pipeline. |
| `schema` | `Record<string, any>` | No | Defines the schema of the events in the data stream. |
| `source` | `any[]` | Yes |  |
| `sql` | `string` | Yes | Specifies SQL for the Pipeline processing flow. |
| `status` | `string` | Yes | Indicates the current status of the Pipeline. |
| `tables` | `any[]` | Yes | List of streams and sinks used by this pipeline. |
| `type` | `string` | Yes | Specifies the type of sink. |
| `version` | `number` | Yes | Indicates the version number of last saved configuration. |
| `worker_binding` | `Record<string, any>` | Yes |  |

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

#### `create(data: object, ctrl?: object)`

Create a new entity with the given data.

```ts
const result = await client.WorkersPipelinesOther().create({
  account_id: 'example_account_id',
  created_at: 'example_created_at',
  destination: {},
  endpoint: 'example_endpoint',
  graph: {},
  http: {},
  id: 'example_id',
  modified_at: 'example_modified_at',
  name: 'example_name',
  source: [],
  sql: 'example_sql',
  status: 'example_status',
  tables: [],
  type: 'example_type',
  version: 1,
  worker_binding: {},
})
```

#### `list(match: object, ctrl?: object)`

List entities matching the given criteria. Returns an array.

```ts
const results = await client.WorkersPipelinesOther().list({ account_id: "example" })
```

#### `load(match: object, ctrl?: object)`

Load a single entity matching the given criteria.

```ts
const result = await client.WorkersPipelinesOther().load({ account_id: 'account_id' })
```

#### `remove(match: object, ctrl?: object)`

Remove the entity matching the given criteria.

```ts
const result = await client.WorkersPipelinesOther().remove({ account_id: 'account_id' })
```

#### `update(data: object, ctrl?: object)`

Update an existing entity. The data must include the entity `id`.

```ts
const result = await client.WorkersPipelinesOther().update({
  account_id: 'account_id',
  pipeline_name: 'pipeline_name',
  // Fields to update
})
```

### Common Methods

#### `data(data?: object)`

Get or set the entity data. When called with data, sets the entity's
internal data and returns the current data. When called without
arguments, returns a copy of the current data.

#### `match(match?: object)`

Get or set the entity match criteria. Works the same as `data()`.

#### `make()`

Create a new `WorkersPipelinesOtherEntity` instance with the same client and
options.

#### `client()`

Return the parent `CloudflareWorkersSDK` instance.

#### `entopts()`

Return a copy of the entity options.


---

## WorkersScriptAndVersionSettingEntity

```ts
const workers_script_and_version_setting = client.WorkersScriptAndVersionSetting()
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `errors` | `any[]` | Yes |  |
| `messages` | `any[]` | Yes |  |
| `result` | `Record<string, any>` | Yes |  |
| `success` | `boolean` | Yes | Whether the API call was successful. |

### Operations

#### `list(match: object, ctrl?: object)`

List entities matching the given criteria. Returns an array.

```ts
const results = await client.WorkersScriptAndVersionSetting().list({ account_id: "example", script_name: "example" })
```

#### `update(data: object, ctrl?: object)`

Update an existing entity. The data must include the entity `id`.

```ts
const result = await client.WorkersScriptAndVersionSetting().update({
  account_id: 'account_id',
  script_name: 'script_name',
  // Fields to update
})
```

### Common Methods

#### `data(data?: object)`

Get or set the entity data. When called with data, sets the entity's
internal data and returns the current data. When called without
arguments, returns a copy of the current data.

#### `match(match?: object)`

Get or set the entity match criteria. Works the same as `data()`.

#### `make()`

Create a new `WorkersScriptAndVersionSettingEntity` instance with the same client and
options.

#### `client()`

Return the parent `CloudflareWorkersSDK` instance.

#### `entopts()`

Return a copy of the entity options.


---

## WorkersScriptResponseCollectionEntity

```ts
const workers_script_response_collection = client.WorkersScriptResponseCollection()
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `errors` | `any[]` | Yes |  |
| `messages` | `any[]` | Yes |  |
| `result` | `any[]` | Yes |  |
| `success` | `boolean` | Yes | Whether the API call was successful. |

### Operations

#### `list(match: object, ctrl?: object)`

List entities matching the given criteria. Returns an array.

```ts
const results = await client.WorkersScriptResponseCollection().list({ account_id: "example" })
```

### Common Methods

#### `data(data?: object)`

Get or set the entity data. When called with data, sets the entity's
internal data and returns the current data. When called without
arguments, returns a copy of the current data.

#### `match(match?: object)`

Get or set the entity match criteria. Works the same as `data()`.

#### `make()`

Create a new `WorkersScriptResponseCollectionEntity` instance with the same client and
options.

#### `client()`

Return the parent `CloudflareWorkersSDK` instance.

#### `entopts()`

Return a copy of the entity options.


---

## WorkersScriptResponseSingleEntity

```ts
const workers_script_response_single = client.WorkersScriptResponseSingle()
```

### Operations

#### `update(data: object, ctrl?: object)`

Update an existing entity. The data must include the entity `id`.

```ts
const result = await client.WorkersScriptResponseSingle().update({
  account_id: 'account_id',
  // Fields to update
})
```

### Common Methods

#### `data(data?: object)`

Get or set the entity data. When called with data, sets the entity's
internal data and returns the current data. When called without
arguments, returns a copy of the current data.

#### `match(match?: object)`

Get or set the entity match criteria. Works the same as `data()`.

#### `make()`

Create a new `WorkersScriptResponseSingleEntity` instance with the same client and
options.

#### `client()`

Return the parent `CloudflareWorkersSDK` instance.

#### `entopts()`

Return a copy of the entity options.


---

## WorkersSmartPlacementEntity

```ts
const workers_smart_placement = client.WorkersSmartPlacement()
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `errors` | `any[]` | Yes |  |
| `messages` | `any[]` | Yes |  |
| `result` | `Record<string, any>` | Yes |  |
| `success` | `boolean` | Yes | Whether the API call was successful. |

### Operations

#### `list(match: object, ctrl?: object)`

List entities matching the given criteria. Returns an array.

```ts
const results = await client.WorkersSmartPlacement().list({ account_id: "example" })
```

### Common Methods

#### `data(data?: object)`

Get or set the entity data. When called with data, sets the entity's
internal data and returns the current data. When called without
arguments, returns a copy of the current data.

#### `match(match?: object)`

Get or set the entity match criteria. Works the same as `data()`.

#### `make()`

Create a new `WorkersSmartPlacementEntity` instance with the same client and
options.

#### `client()`

Return the parent `CloudflareWorkersSDK` instance.

#### `entopts()`

Return a copy of the entity options.


---

## WorkersUsageModelEntity

```ts
const workers_usage_model = client.WorkersUsageModel()
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `errors` | `any[]` | Yes |  |
| `messages` | `any[]` | Yes |  |
| `result` | `Record<string, any>` | Yes |  |
| `success` | `boolean` | Yes | Whether the API call was successful. |
| `usage_model` | `string` | No | Usage model for the Worker invocations. |
| `user_limits` | `Record<string, any>` | No | User-defined resource limits for Workers with standard usage model. |

### Operations

#### `list(match: object, ctrl?: object)`

List entities matching the given criteria. Returns an array.

```ts
const results = await client.WorkersUsageModel().list({ account_id: "example", script_name: "example" })
```

#### `update(data: object, ctrl?: object)`

Update an existing entity. The data must include the entity `id`.

```ts
const result = await client.WorkersUsageModel().update({
  account_id: 'account_id',
  script_name: 'script_name',
  // Fields to update
})
```

### Common Methods

#### `data(data?: object)`

Get or set the entity data. When called with data, sets the entity's
internal data and returns the current data. When called without
arguments, returns a copy of the current data.

#### `match(match?: object)`

Get or set the entity match criteria. Works the same as `data()`.

#### `make()`

Create a new `WorkersUsageModelEntity` instance with the same client and
options.

#### `client()`

Return the parent `CloudflareWorkersSDK` instance.

#### `entopts()`

Return a copy of the entity options.


---

## WorkersVersionsListEntity

```ts
const workers_versions_list = client.WorkersVersionsList()
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `errors` | `any[]` | Yes |  |
| `messages` | `any[]` | Yes |  |
| `result` | `Record<string, any>` | Yes |  |
| `success` | `boolean` | Yes | Whether the API call was successful. |

### Operations

#### `list(match: object, ctrl?: object)`

List entities matching the given criteria. Returns an array.

```ts
const results = await client.WorkersVersionsList().list({ account_id: "example", script_name: "example" })
```

### Common Methods

#### `data(data?: object)`

Get or set the entity data. When called with data, sets the entity's
internal data and returns the current data. When called without
arguments, returns a copy of the current data.

#### `match(match?: object)`

Get or set the entity match criteria. Works the same as `data()`.

#### `make()`

Create a new `WorkersVersionsListEntity` instance with the same client and
options.

#### `client()`

Return the parent `CloudflareWorkersSDK` instance.

#### `entopts()`

Return a copy of the entity options.


---

## WorkersVersionsSingleEntity

```ts
const workers_versions_single = client.WorkersVersionsSingle()
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `errors` | `any[]` | Yes |  |
| `messages` | `any[]` | Yes |  |
| `result` | `any` | Yes |  |
| `success` | `boolean` | Yes | Whether the API call was successful. |

### Operations

#### `load(match: object, ctrl?: object)`

Load a single entity matching the given criteria.

```ts
const result = await client.WorkersVersionsSingle().load({ account_id: 'account_id', script_id: 'script_id', version_id: 'version_id' })
```

### Common Methods

#### `data(data?: object)`

Get or set the entity data. When called with data, sets the entity's
internal data and returns the current data. When called without
arguments, returns a copy of the current data.

#### `match(match?: object)`

Get or set the entity match criteria. Works the same as `data()`.

#### `make()`

Create a new `WorkersVersionsSingleEntity` instance with the same client and
options.

#### `client()`

Return the parent `CloudflareWorkersSDK` instance.

#### `entopts()`

Return a copy of the entity options.


---

## WorkersVersionsUploadEntity

```ts
const workers_versions_upload = client.WorkersVersionsUpload()
```

### Operations

#### `create(data: object, ctrl?: object)`

Create a new entity with the given data.

```ts
const result = await client.WorkersVersionsUpload().create({
  account_id: 'example_account_id',
  script_name: 'example_script_name',
})
```

### Common Methods

#### `data(data?: object)`

Get or set the entity data. When called with data, sets the entity's
internal data and returns the current data. When called without
arguments, returns a copy of the current data.

#### `match(match?: object)`

Get or set the entity match criteria. Works the same as `data()`.

#### `make()`

Create a new `WorkersVersionsUploadEntity` instance with the same client and
options.

#### `client()`

Return the parent `CloudflareWorkersSDK` instance.

#### `entopts()`

Return a copy of the entity options.


---

## WorkflowEntity

```ts
const workflow = client.Workflow()
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `class_name` | `string` | Yes |  |
| `concurrency` | `Record<string, any>` | No |  |
| `default_retention` | `Record<string, any>` | No | Default retention applied to instances of this version when they do not set their own retention. |
| `errors` | `any[]` | Yes |  |
| `id` | `string` | No |  |
| `instances` | `any[]` | Yes |  |
| `limits` | `Record<string, any>` | No |  |
| `messages` | `any[]` | Yes |  |
| `result` | `Record<string, any>` | Yes |  |
| `result_info` | `Record<string, any>` | Yes |  |
| `schedules` | `any[]` | No |  |
| `script_name` | `string` | Yes |  |
| `success` | `boolean` | Yes |  |

### Actions

This entity exposes custom API actions in addition to the standard
operations. Select one with `$action` in the call's argument; the
remaining keys are sent as that action's payload.

| Action | Route | Call |
| --- | --- | --- |
| `instance` | `/accounts/{account_id}/workflows/{workflow_name}/instances` | `client.Workflow().create({ $action: 'instance', ... })` |
| `instance_batch` | `/accounts/{account_id}/workflows/{workflow_name}/instances/batch` | `client.Workflow().create({ $action: 'instance_batch', ... })` |
| `instance` | `/accounts/{account_id}/workflows/{workflow_name}/instances` | `client.Workflow().list({ $action: 'instance', ... })` |
| `instance_terminate` | `/accounts/{account_id}/workflows/{workflow_name}/instances/terminate` | `client.Workflow().list({ $action: 'instance_terminate', ... })` |
| `setting` | `/accounts/{account_id}/workflows/settings` | `client.Workflow().list({ $action: 'setting', ... })` |
| `version` | `/accounts/{account_id}/workflows/{workflow_name}/versions` | `client.Workflow().list({ $action: 'version', ... })` |
| `setting` | `/accounts/{account_id}/workflows/settings` | `client.Workflow().patch({ $action: 'setting', ... })` |
| `status` | `/accounts/{account_id}/workflows/{workflow_name}/instances/{instance_id}/status` | `client.Workflow().patch({ $action: 'status', ... })` |

An action returns that action's OWN response, which is not necessarily a
Workflow record — check the API definition for its shape.

```ts
const result = await client.Workflow().create({
  $action: 'instance',
  /* ...the action's own arguments */
})
```

### Operations

#### `create(data: object, ctrl?: object)`

Create a new entity with the given data.

```ts
const result = await client.Workflow().create({
  account_id: 'example_account_id',
  workflow_id: 'example_workflow_id',
  class_name: 'example_class_name',
  errors: [],
  instances: [],
  messages: [],
  result: {},
  result_info: {},
  script_name: 'example_script_name',
  success: true,
})
```

#### `list(match: object, ctrl?: object)`

List entities matching the given criteria. Returns an array.

```ts
const results = await client.Workflow().list({ account_id: "example" })
```

#### `load(match: object, ctrl?: object)`

Load a single entity matching the given criteria.

```ts
const result = await client.Workflow().load({ id: 'workflow_id', account_id: 'account_id' })
```

#### `remove(match: object, ctrl?: object)`

Remove the entity matching the given criteria.

```ts
const result = await client.Workflow().remove({ id: 'workflow_id', account_id: 'account_id' })
```

#### `update(data: object, ctrl?: object)`

Update an existing entity. The data must include the entity `id`.

```ts
const result = await client.Workflow().update({
  id: 'workflow_id',
  account_id: 'account_id',
  // Fields to update
})
```

### Common Methods

#### `data(data?: object)`

Get or set the entity data. When called with data, sets the entity's
internal data and returns the current data. When called without
arguments, returns a copy of the current data.

#### `match(match?: object)`

Get or set the entity match criteria. Works the same as `data()`.

#### `make()`

Create a new `WorkflowEntity` instance with the same client and
options.

#### `client()`

Return the parent `CloudflareWorkersSDK` instance.

#### `entopts()`

Return a copy of the entity options.


---

## Features

| Feature | Version | Description |
| --- | --- | --- |
| `test` | 0.0.1 | Test transport |


Features are activated via the `feature` option:

```ts
const client = new CloudflareWorkersSDK({
  feature: {
    test: { active: true },
  }
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

