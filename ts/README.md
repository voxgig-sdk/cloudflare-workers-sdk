# CloudflareWorkers TypeScript SDK



The TypeScript SDK for the CloudflareWorkers API — a type-safe, entity-oriented client with full async/await support.

The API is exposed as capitalised, semantic **Entities** — e.g.
`client.Account()` — each with a small set of operations (`list`, `load`, `create`, `update`, `remove`, `patch`)
instead of raw URL paths and query parameters. This keeps the surface
predictable and low-friction for both humans and AI agents.

> Also generated from this model: `go`, `go-cli`, `go-mcp`, `lua`, `php`, `py`, `rb` — see
> the [top-level README](../README.md).


## Install
This package is not yet published to npm. Install it from the GitHub
release tag (`ts/vX.Y.Z`):

- Releases: [https://github.com/voxgig-sdk/cloudflare-workers-sdk/releases](https://github.com/voxgig-sdk/cloudflare-workers-sdk/releases)


## Tutorial: your first API call

This tutorial walks through creating a client, listing entities, and
loading a specific record.

### 1. Create a client

```ts
import { CloudflareWorkersSDK } from '@voxgig-sdk/cloudflare-workers-sdk'

const client = new CloudflareWorkersSDK({
  apikey: process.env.CLOUDFLARE_WORKERS_APIKEY,
})
```

### 2. List account records

`list()` resolves to an array of Account ENTITIES — every operation
resolves to entities, not raw records. Iterate them directly, and call
`.data()` on one for the record it holds:

```ts
const accounts = await client.Account().list({ id: "example" })

for (const account of accounts) {
  console.log(account)
}
```

### 3. Load an application

Application is nested under account, so provide the `account_id`.
`load()` returns the entity directly and throws on failure:

```ts
try {
  const application = await client.Application().load({
    account_id: 'example_account_id',
    id: 'example_id',
  })
  console.log(application)
} catch (err) {
  console.error('load failed:', err)
}
```


## Error handling

Entity operations reject on failure, so wrap them in `try` / `catch`:

```ts
try {
  const workersubdomains = await client.WorkerSubdomain().list()
  console.log(workersubdomains)
} catch (err) {
  console.error('list failed:', err)
}
```

The low-level `direct()` method does **not** throw — it returns the
value or an `Error`, so check the result before using it:

```ts
const result = await client.direct({
  path: '/api/resource/{id}',
  method: 'GET',
  params: { id: 'example_id' },
})

if (result instanceof Error) {
  throw result
}
```


## How-to guides

### Make a direct HTTP request

For endpoints not covered by entity methods:

```ts
const result = await client.direct({
  path: '/api/resource/{id}',
  method: 'GET',
  params: { id: 'example' },
})

if (result instanceof Error) {
  throw result
}
if (result.ok) {
  console.log(result.status)  // 200
  console.log(result.data)    // response body
}
```

### Prepare a request without sending it

```ts
const fetchdef = await client.prepare({
  path: '/api/resource/{id}',
  method: 'DELETE',
  params: { id: 'example' },
})

// Inspect before sending
console.log(fetchdef.url)
console.log(fetchdef.method)
console.log(fetchdef.headers)
```

### Use test mode

Create a mock client for unit testing — no server required:

```ts
const client = CloudflareWorkersSDK.test()

const workersubdomain = await client.WorkerSubdomain().list()
// workersubdomain is the entity, populated with mock response data
// — call workersubdomain.data() for the record itself
console.log(workersubdomain)
```

You can also use the instance method:

```ts
const client = new CloudflareWorkersSDK({ apikey: '...' })
const testClient = client.tester()
```

### Retain entity state across calls

Entity instances remember their last match and data:

```ts
const entity = client.WorkerSubdomain()

// First call runs the operation and stores its result
await entity.list()

// Subsequent calls reuse the stored state
const data = entity.data()
console.log(data)
```

### Add custom middleware

Pass features via the `extend` option:

```ts
const logger = {
  hooks: {
    PreRequest: (ctx: any) => {
      console.log('Requesting:', ctx.spec.method, ctx.spec.path)
    },
    PreResponse: (ctx: any) => {
      console.log('Status:', ctx.out.request?.status)
    },
  },
}

const client = new CloudflareWorkersSDK({
  apikey: '...',
  extend: [logger],
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
cd ts && npm test
```

Live entity tests continue independent operations after errors and attempt
supported cleanup. Their final result reports failures and missing prerequisites
after the remaining work completes. The model and test inputs determine which
API operations the generated scenarios cover.


## Reference

### CloudflareWorkersSDK

#### Constructor

```ts
new CloudflareWorkersSDK(options?: {
  apikey?: string
  base?: string
  prefix?: string
  suffix?: string
  feature?: Record<string, { active: boolean }>
  extend?: Feature[]
})
```

| Option | Type | Description |
| --- | --- | --- |
| `apikey` | `string` | API key for authentication. |
| `base` | `string` | Base URL of the API server. |
| `prefix` | `string` | URL path prefix prepended to all requests. |
| `suffix` | `string` | URL path suffix appended to all requests. |
| `feature` | `object` | Feature activation flags (e.g. `{ test: { active: true } }`). |
| `extend` | `Feature[]` | Additional feature instances to load. |

#### Methods

| Method | Returns | Description |
| --- | --- | --- |
| `options()` | `object` | Deep copy of current SDK options. |
| `utility()` | `Utility` | Deep copy of the SDK utility object. |
| `prepare(fetchargs?)` | `Promise<FetchDef>` | Build an HTTP request definition without sending it. |
| `direct(fetchargs?)` | `Promise<DirectResult>` | Build and send an HTTP request. |
| `Account(data?)` | `AccountEntity` | Create an Account entity instance. |
| `Application(data?)` | `ApplicationEntity` | Create an Application entity instance. |
| `Brapi(data?)` | `BrapiEntity` | Create a Brapi entity instance. |
| `Build(data?)` | `BuildEntity` | Create a Build entity instance. |
| `BuildToken(data?)` | `BuildTokenEntity` | Create a BuildToken entity instance. |
| `BuildsApi(data?)` | `BuildsApiEntity` | Create a BuildsApi entity instance. |
| `Connection(data?)` | `ConnectionEntity` | Create a Connection entity instance. |
| `ContainerImage(data?)` | `ContainerImageEntity` | Create a ContainerImage entity instance. |
| `ContainerInstance(data?)` | `ContainerInstanceEntity` | Create a ContainerInstance entity instance. |
| `DeployHook(data?)` | `DeployHookEntity` | Create a DeployHook entity instance. |
| `Deployment(data?)` | `DeploymentEntity` | Create a Deployment entity instance. |
| `Destination(data?)` | `DestinationEntity` | Create a Destination entity instance. |
| `Domain(data?)` | `DomainEntity` | Create a Domain entity instance. |
| `DurableObjectsNamespace(data?)` | `DurableObjectsNamespaceEntity` | Create a DurableObjectsNamespace entity instance. |
| `EnvironmentVariable(data?)` | `EnvironmentVariableEntity` | Create an EnvironmentVariable entity instance. |
| `GitHubIntegration(data?)` | `GitHubIntegrationEntity` | Create a GitHubIntegration entity instance. |
| `Hyperdrive(data?)` | `HyperdriveEntity` | Create a Hyperdrive entity instance. |
| `ImageRegistry(data?)` | `ImageRegistryEntity` | Create an ImageRegistry entity instance. |
| `Issue(data?)` | `IssueEntity` | Create an Issue entity instance. |
| `Key(data?)` | `KeyEntity` | Create a Key entity instance. |
| `LiveTail(data?)` | `LiveTailEntity` | Create a LiveTail entity instance. |
| `MetricsExport(data?)` | `MetricsExportEntity` | Create a MetricsExport entity instance. |
| `Namespace(data?)` | `NamespaceEntity` | Create a Namespace entity instance. |
| `Preview(data?)` | `PreviewEntity` | Create a Preview entity instance. |
| `PreviewDeployment(data?)` | `PreviewDeploymentEntity` | Create a PreviewDeployment entity instance. |
| `Query(data?)` | `QueryEntity` | Create a Query entity instance. |
| `RepositoryConnection(data?)` | `RepositoryConnectionEntity` | Create a RepositoryConnection entity instance. |
| `Rollout(data?)` | `RolloutEntity` | Create a Rollout entity instance. |
| `SavedQuery(data?)` | `SavedQueryEntity` | Create a SavedQuery entity instance. |
| `Script(data?)` | `ScriptEntity` | Create a Script entity instance. |
| `ScriptSetting(data?)` | `ScriptSettingEntity` | Create a ScriptSetting entity instance. |
| `Secret(data?)` | `SecretEntity` | Create a Secret entity instance. |
| `SecretsStoreDelete(data?)` | `SecretsStoreDeleteEntity` | Create a SecretsStoreDelete entity instance. |
| `SecretsStoreQuota(data?)` | `SecretsStoreQuotaEntity` | Create a SecretsStoreQuota entity instance. |
| `SecretsStoreSecret(data?)` | `SecretsStoreSecretEntity` | Create a SecretsStoreSecret entity instance. |
| `SecretsStoreStore(data?)` | `SecretsStoreStoreEntity` | Create a SecretsStoreStore entity instance. |
| `SecretsStoreStoresResponseCollection(data?)` | `SecretsStoreStoresResponseCollectionEntity` | Create a SecretsStoreStoresResponseCollection entity instance. |
| `Setting(data?)` | `SettingEntity` | Create a Setting entity instance. |
| `Shared(data?)` | `SharedEntity` | Create a Shared entity instance. |
| `Tail(data?)` | `TailEntity` | Create a Tail entity instance. |
| `Token(data?)` | `TokenEntity` | Create a Token entity instance. |
| `Trigger(data?)` | `TriggerEntity` | Create a Trigger entity instance. |
| `Usage(data?)` | `UsageEntity` | Create an Usage entity instance. |
| `Value(data?)` | `ValueEntity` | Create a Value entity instance. |
| `Version(data?)` | `VersionEntity` | Create a Version entity instance. |
| `Worker(data?)` | `WorkerEntity` | Create a Worker entity instance. |
| `WorkerCronTrigger(data?)` | `WorkerCronTriggerEntity` | Create a WorkerCronTrigger entity instance. |
| `WorkerDeployment(data?)` | `WorkerDeploymentEntity` | Create a WorkerDeployment entity instance. |
| `WorkerEnvironment(data?)` | `WorkerEnvironmentEntity` | Create a WorkerEnvironment entity instance. |
| `WorkerRoute(data?)` | `WorkerRouteEntity` | Create a WorkerRoute entity instance. |
| `WorkerScript(data?)` | `WorkerScriptEntity` | Create a WorkerScript entity instance. |
| `WorkerSubdomain(data?)` | `WorkerSubdomainEntity` | Create a WorkerSubdomain entity instance. |
| `WorkerTailLog(data?)` | `WorkerTailLogEntity` | Create a WorkerTailLog entity instance. |
| `WorkersAccountSetting(data?)` | `WorkersAccountSettingEntity` | Create a WorkersAccountSetting entity instance. |
| `WorkersApiResponseNullResult(data?)` | `WorkersApiResponseNullResultEntity` | Create a WorkersApiResponseNullResult entity instance. |
| `WorkersCompletedUploadAsset(data?)` | `WorkersCompletedUploadAssetEntity` | Create a WorkersCompletedUploadAsset entity instance. |
| `WorkersCreateAssetsUploadSession(data?)` | `WorkersCreateAssetsUploadSessionEntity` | Create a WorkersCreateAssetsUploadSession entity instance. |
| `WorkersForPlatform(data?)` | `WorkersForPlatformEntity` | Create a WorkersForPlatform entity instance. |
| `WorkersKvApiResponseCommonNoResult(data?)` | `WorkersKvApiResponseCommonNoResultEntity` | Create a WorkersKvApiResponseCommonNoResult entity instance. |
| `WorkersKvNamespace(data?)` | `WorkersKvNamespaceEntity` | Create a WorkersKvNamespace entity instance. |
| `WorkersNamespaceList(data?)` | `WorkersNamespaceListEntity` | Create a WorkersNamespaceList entity instance. |
| `WorkersNamespaceScriptDeleteBulk(data?)` | `WorkersNamespaceScriptDeleteBulkEntity` | Create a WorkersNamespaceScriptDeleteBulk entity instance. |
| `WorkersNamespaceScriptResponseSingle(data?)` | `WorkersNamespaceScriptResponseSingleEntity` | Create a WorkersNamespaceScriptResponseSingle entity instance. |
| `WorkersNamespaceSingle(data?)` | `WorkersNamespaceSingleEntity` | Create a WorkersNamespaceSingle entity instance. |
| `WorkersPipelinesOther(data?)` | `WorkersPipelinesOtherEntity` | Create a WorkersPipelinesOther entity instance. |
| `WorkersScriptAndVersionSetting(data?)` | `WorkersScriptAndVersionSettingEntity` | Create a WorkersScriptAndVersionSetting entity instance. |
| `WorkersScriptResponseCollection(data?)` | `WorkersScriptResponseCollectionEntity` | Create a WorkersScriptResponseCollection entity instance. |
| `WorkersScriptResponseSingle(data?)` | `WorkersScriptResponseSingleEntity` | Create a WorkersScriptResponseSingle entity instance. |
| `WorkersSmartPlacement(data?)` | `WorkersSmartPlacementEntity` | Create a WorkersSmartPlacement entity instance. |
| `WorkersUsageModel(data?)` | `WorkersUsageModelEntity` | Create a WorkersUsageModel entity instance. |
| `WorkersVersionsList(data?)` | `WorkersVersionsListEntity` | Create a WorkersVersionsList entity instance. |
| `WorkersVersionsSingle(data?)` | `WorkersVersionsSingleEntity` | Create a WorkersVersionsSingle entity instance. |
| `WorkersVersionsUpload(data?)` | `WorkersVersionsUploadEntity` | Create a WorkersVersionsUpload entity instance. |
| `Workflow(data?)` | `WorkflowEntity` | Create a Workflow entity instance. |
| `tester(testopts?, sdkopts?)` | `CloudflareWorkersSDK` | Create a test-mode client instance. |

#### Static methods

| Method | Returns | Description |
| --- | --- | --- |
| `CloudflareWorkersSDK.test(testopts?, sdkopts?)` | `CloudflareWorkersSDK` | Create a test-mode client. |

### Entity interface

All entities share the same interface.

#### Methods

| Method | Signature | Description |
| --- | --- | --- |
| `load` | `load(reqmatch?, ctrl?): Promise<Entity>` | Load a single entity by match criteria. |
| `list` | `list(reqmatch?, ctrl?): Promise<Entity[]>` | List entities matching the criteria. |
| `create` | `create(reqdata?, ctrl?): Promise<Entity>` | Create a new entity. |
| `update` | `update(reqdata?, ctrl?): Promise<Entity>` | Update an existing entity. |
| `remove` | `remove(reqmatch?, ctrl?): Promise<void>` | Remove an entity. |
| `data` | `data(data?: Partial<Entity>): Entity` | Get or set entity data. |
| `match` | `match(match?: Partial<Entity>): Partial<Entity>` | Get or set entity match criteria. |
| `make` | `make(): Entity` | Create a new instance with the same options. |
| `client` | `client(): CloudflareWorkersSDK` | Return the parent SDK client. |
| `entopts` | `entopts(): object` | Return a copy of the entity options. |

#### Return values

Entity operations resolve to the entity data directly — there is no
result envelope:

- `load`, `create` and `update` resolve to a single entity object.
- `list` resolves to an **array** of entity objects (iterate it directly;
  there is no `.data` and no `.ok`).
- `remove` resolves to `void`.

On a failed request these methods **throw**, so wrap calls in
`try`/`catch` to handle errors. Only `direct()` returns the result
envelope described below.

### DirectResult shape

The `direct()` method returns:

```ts
{
  ok: boolean
  status: number
  headers: object
  data: any
}
```

On error, `ok` is `false` and an `err` property contains the error.

### FetchDef shape

The `prepare()` method returns:

```ts
{
  url: string
  method: string
  headers: Record<string, string>
  body?: any
}
```

### Entities

#### Account

| Field | Description |
| --- | --- |
| `id` |  |

Operations: list.

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

Operations: create, list, load, remove, update.

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

Operations: create, list, load, remove, update.

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

Operations: list, load, update.

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

Operations: create, list.

API path: `/accounts/{account_id}/builds/tokens`

#### BuildsApi

| Field | Description |
| --- | --- |
| `errors` |  |
| `messages` |  |
| `result` |  |
| `result_info` |  |
| `success` |  |

Operations: create, remove.

API path: `/accounts/{account_id}/builds/triggers/{trigger_uuid}/purge_build_cache`

#### Connection

| Field | Description |
| --- | --- |
| `id` |  |

Operations: remove.

API path: `/accounts/{account_id}/builds/repos/connections/{repo_connection_uuid}`

#### ContainerImage

| Field | Description |
| --- | --- |
| `image` | Image url. |

Operations: create.

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

Operations: list, load.

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

Operations: create, list, load, remove, update.

API path: `/accounts/{account_id}/builds/workers/{script_name}/deploy_hooks`

#### Deployment

| Field | Description |
| --- | --- |
| `id` |  |

Operations: remove.

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

Operations: create, list, remove, update.

API path: `/accounts/{account_id}/workers/observability/destinations`

#### Domain

| Field | Description |
| --- | --- |
| `errors` |  |
| `id` |  |
| `messages` |  |
| `result` |  |
| `success` | Whether the API call was successful. |

Operations: list, load, remove, update.

API path: `/accounts/{account_id}/workers/domains`

#### DurableObjectsNamespace

| Field | Description |
| --- | --- |
| `result` |  |
| `result_info` |  |

Operations: create, list.

API path: `/accounts/{account_id}/workers/durable_objects/namespaces/{id}/query/v2`

#### EnvironmentVariable

| Field | Description |
| --- | --- |
| `errors` |  |
| `messages` |  |
| `result` |  |
| `result_info` |  |
| `success` |  |

Operations: list, update.

API path: `/accounts/{account_id}/builds/triggers/{trigger_uuid}/environment_variables`

#### GitHubIntegration

| Field | Description |
| --- | --- |
| `errors` |  |
| `messages` |  |
| `result` |  |
| `result_info` |  |
| `success` |  |

Operations: list.

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

Operations: create, list, load, patch, remove, update.

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

Operations: create, list, remove.

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

Operations: create, list, load, patch, remove, update.

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

Operations: create.

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

Operations: create.

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

Operations: create, list.

API path: `/accounts/{account_id}/workers/observability/metricsexport`

#### Namespace

| Field | Description |
| --- | --- |
| `id` |  |

Operations: remove.

API path: `/accounts/{account_id}/workers/dispatch/namespaces/{dispatch_namespace}`

#### Preview

| Field | Description |
| --- | --- |
| `errors` |  |
| `id` |  |
| `messages` |  |
| `result` |  |
| `success` | Whether the API call was successful. |

Operations: create, list, load, patch, remove, update.

API path: `/accounts/{account_id}/workers/workers/{worker_id}/previews`

#### PreviewDeployment

| Field | Description |
| --- | --- |
| `errors` |  |
| `id` |  |
| `messages` |  |
| `result` |  |
| `success` | Whether the API call was successful. |

Operations: create, list, load, update.

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

Operations: create.

API path: `/accounts/{account_id}/workers/observability/telemetry/query`

#### RepositoryConnection

| Field | Description |
| --- | --- |
| `provider_account_id` | Provider-specific identifier of the account or namespace that owns the repository. |
| `provider_account_name` | Human-readable name of the account or namespace that owns the repository. |
| `provider_type` | Source control provider. |
| `repo_id` | Provider-specific repository identifier. |
| `repo_name` | Human-readable repository name. |

Operations: update.

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

Operations: create.

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

Operations: create, list, load, remove, update.

API path: `/accounts/{account_id}/workers/observability/queries`

#### Script

| Field | Description |
| --- | --- |
| `id` |  |

Operations: remove.

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

Operations: list, update.

API path: `/accounts/{account_id}/workers/scripts/{script_name}/script-settings`

#### Secret

| Field | Description |
| --- | --- |
| `comment` | Freeform text describing the secret. |
| `id` |  |
| `result` |  |
| `scopes` | The list of services that can use this secret. |
| `value` | The value of the secret. |

Operations: create, list, load, remove, update.

API path: `/accounts/{account_id}/secrets_store/stores/{store_id}/secrets`

#### SecretsStoreDelete

| Field | Description |
| --- | --- |

Operations: remove.

API path: `/accounts/{account_id}/secrets_store/stores/{store_id}`

#### SecretsStoreQuota

| Field | Description |
| --- | --- |
| `result` |  |

Operations: load.

API path: `/accounts/{account_id}/secrets_store/quota`

#### SecretsStoreSecret

| Field | Description |
| --- | --- |
| `comment` | Freeform text describing the secret. |
| `name` | The name of the secret. |
| `scopes` | The list of services that can use this secret. |

Operations: create.

API path: `/accounts/{account_id}/secrets_store/stores/{store_id}/secrets/{secret_id}/duplicate`

#### SecretsStoreStore

| Field | Description |
| --- | --- |
| `id` |  |
| `name` | The name of the store. |
| `result` |  |

Operations: create, load.

API path: `/accounts/{account_id}/secrets_store/stores`

#### SecretsStoreStoresResponseCollection

| Field | Description |
| --- | --- |
| `result` |  |

Operations: list.

API path: `/accounts/{account_id}/secrets_store/stores`

#### Setting

| Field | Description |
| --- | --- |
| `errors` |  |
| `messages` |  |
| `result` |  |
| `success` | Whether the API call was successful. |

Operations: list, update.

API path: `/accounts/{account_id}/workers/services/{service_name}/environments/{environment_name}/settings`

#### Shared

| Field | Description |
| --- | --- |
| `errors` |  |
| `id` |  |
| `messages` |  |
| `result` | Complete results of a query run. |
| `success` |  |

Operations: create, load.

API path: `/accounts/{account_id}/workers/observability/shared/query`

#### Tail

| Field | Description |
| --- | --- |
| `id` |  |

Operations: remove.

API path: `/accounts/{account_id}/workers/scripts/{script_name}/tails/{id}`

#### Token

| Field | Description |
| --- | --- |
| `id` |  |

Operations: remove.

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

Operations: create, remove, update.

API path: `/accounts/{account_id}/builds/triggers/{trigger_uuid}/builds`

#### Usage

| Field | Description |
| --- | --- |
| `errors` |  |
| `messages` |  |
| `result` |  |
| `success` |  |

Operations: list.

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

Operations: create.

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

Operations: create, list, load, remove, update.

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

Operations: create, list, load, patch, remove, update.

API path: `/accounts/{account_id}/builds/workers/{script_tag}/previews/{preview_id}/builds`

#### WorkerCronTrigger

| Field | Description |
| --- | --- |
| `errors` |  |
| `messages` |  |
| `result` |  |
| `success` | Whether the API call was successful. |

Operations: list, update.

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

Operations: create, load.

API path: `/accounts/{account_id}/workers/scripts/{script_name}/deployments`

#### WorkerEnvironment

| Field | Description |
| --- | --- |

Operations: load.

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

Operations: create, list, load, remove, update.

API path: `/zones/{zone_id}/workers/routes`

#### WorkerScript

| Field | Description |
| --- | --- |
| `errors` |  |
| `id` |  |
| `messages` |  |
| `result` | A secret value accessible through a binding. |
| `success` | Whether the API call was successful. |

Operations: create, list, load, patch, remove, update.

API path: `/accounts/{account_id}/workers/scripts/{script_name}/subdomain`

#### WorkerSubdomain

| Field | Description |
| --- | --- |
| `errors` |  |
| `messages` |  |
| `result` |  |
| `subdomain` |  |
| `success` | Whether the API call was successful. |

Operations: list, remove, update.

API path: `/accounts/{account_id}/workers/subdomain`

#### WorkerTailLog

| Field | Description |
| --- | --- |
| `errors` |  |
| `messages` |  |
| `result` |  |
| `success` | Whether the API call was successful. |

Operations: create, list.

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

Operations: list, update.

API path: `/accounts/{account_id}/workers/account-settings`

#### WorkersApiResponseNullResult

| Field | Description |
| --- | --- |
| `errors` |  |
| `messages` |  |
| `result` |  |
| `success` | Whether the API call was successful. |

Operations: remove, update.

API path: `/accounts/{account_id}/workers/dispatch/namespaces/{dispatch_namespace}/scripts/{script_name}/secrets/{secret_name}`

#### WorkersCompletedUploadAsset

| Field | Description |
| --- | --- |

Operations: create.

API path: `/accounts/{account_id}/workers/assets/upload`

#### WorkersCreateAssetsUploadSession

| Field | Description |
| --- | --- |
| `manifest` | A manifest ([path]: {hash, size}) map of files to upload. |

Operations: create.

API path: `/accounts/{account_id}/workers/dispatch/namespaces/{dispatch_namespace}/scripts/{script_name}/assets-upload-session`

#### WorkersForPlatform

| Field | Description |
| --- | --- |
| `errors` |  |
| `messages` |  |
| `result` | A secret value accessible through a binding. |
| `success` | Whether the API call was successful. |

Operations: list, load, patch, update.

API path: `/accounts/{account_id}/workers/dispatch/namespaces/{dispatch_namespace}/scripts`

#### WorkersKvApiResponseCommonNoResult

| Field | Description |
| --- | --- |

Operations: remove, update.

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

Operations: create, list, load, remove, update.

API path: `/accounts/{account_id}/storage/kv/namespaces/{namespace_id}/bulk/delete`

#### WorkersNamespaceList

| Field | Description |
| --- | --- |
| `errors` |  |
| `messages` |  |
| `result` |  |
| `success` | Whether the API call was successful. |

Operations: list.

API path: `/accounts/{account_id}/workers/dispatch/namespaces`

#### WorkersNamespaceScriptDeleteBulk

| Field | Description |
| --- | --- |

Operations: remove.

API path: `/accounts/{account_id}/workers/dispatch/namespaces/{dispatch_namespace}/scripts`

#### WorkersNamespaceScriptResponseSingle

| Field | Description |
| --- | --- |
| `errors` |  |
| `messages` |  |
| `result` | Details about a worker uploaded to a Workers for Platforms namespace. |
| `success` | Whether the API call was successful. |

Operations: load, update.

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

Operations: create, load, patch, update.

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

Operations: create, list, load, patch, remove, update.

API path: `/accounts/{account_id}/pipelines`

#### WorkersScriptAndVersionSetting

| Field | Description |
| --- | --- |
| `errors` |  |
| `messages` |  |
| `result` |  |
| `success` | Whether the API call was successful. |

Operations: list, update.

API path: `/accounts/{account_id}/workers/scripts/{script_name}/settings`

#### WorkersScriptResponseCollection

| Field | Description |
| --- | --- |
| `errors` |  |
| `messages` |  |
| `result` |  |
| `success` | Whether the API call was successful. |

Operations: list.

API path: `/accounts/{account_id}/workers/scripts`

#### WorkersScriptResponseSingle

| Field | Description |
| --- | --- |

Operations: update.

API path: `/accounts/{account_id}/workers/services/{service_name}/environments/{environment_name}/content`

#### WorkersSmartPlacement

| Field | Description |
| --- | --- |
| `errors` |  |
| `messages` |  |
| `result` |  |
| `success` | Whether the API call was successful. |

Operations: list.

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

Operations: list, update.

API path: `/accounts/{account_id}/workers/scripts/{script_name}/usage-model`

#### WorkersVersionsList

| Field | Description |
| --- | --- |
| `errors` |  |
| `messages` |  |
| `result` |  |
| `success` | Whether the API call was successful. |

Operations: list.

API path: `/accounts/{account_id}/workers/scripts/{script_name}/versions`

#### WorkersVersionsSingle

| Field | Description |
| --- | --- |
| `errors` |  |
| `messages` |  |
| `result` |  |
| `success` | Whether the API call was successful. |

Operations: load.

API path: `/accounts/{account_id}/workers/scripts/{script_name}/versions/{version_id}`

#### WorkersVersionsUpload

| Field | Description |
| --- | --- |

Operations: create.

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

Operations: create, list, load, patch, remove, update.

API path: `/accounts/{account_id}/workflows/{workflow_name}/instances/{instance_id}/events/{event_type}`



## Entities


### Account

Create an instance: `const account = client.Account()`

#### Operations

| Method | Description |
| --- | --- |
| `list(match)` | List entities matching the criteria. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `id` | `string` |  |

#### Example: List

```ts
const accounts = await client.Account().list({ id: "example" })
```


### Application

Create an instance: `const application = client.Application()`

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
| `configuration` | `Record<string, any>` | Application configuration fields you can change without creating a rollout. |
| `constraints` | `Record<string, any>` |  |
| `errors` | `any[]` |  |
| `id` | `string` |  |
| `max_instances` | `number` | Maximum number of instances that an autoscaling application can run. |
| `messages` | `any[]` |  |
| `observability` | `any` | Top-level application observability settings. |
| `result` | `any` | The public Containers API returns an application. |
| `result_info` | `Record<string, any>` | Cursor pagination details for a v4 API list response. |
| `rollout_active_grace_period` | `number` | Grace period for active instances to stay alive before becoming eligible for shutdown signal due to a rollout, in seconds. |
| `success` | `boolean` | Whether the API call was successful. |

#### Example: Load

```ts
const application = await client.Application().load({ id: 'application_id', account_id: 'account_id' })
```

#### Example: List

```ts
const applications = await client.Application().list({ account_id: "example" })
```

#### Example: Create

```ts
const application = await client.Application().create({
  account_id: 'example_account_id',
  errors: [],
  messages: [],
  result: 'example_result',
  result_info: {},
  success: true,
})
```


### Brapi

Create an instance: `const brapi = client.Brapi()`

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
| `addScriptTag` | `any[]` | Adds a script element into the page with the desired URL or content. |
| `addStyleTag` | `any[]` | Adds a `<link rel="stylesheet">` tag into the page with the desired URL or a `<style type="text/css">` tag with the content. |
| `allowRequestPattern` | `any[]` | Only allow requests that match the provided regex patterns, eg. |
| `allowResourceTypes` | `any[]` | Only allow requests that match the provided resource types, eg. |
| `authenticate` | `Record<string, any>` | Provide credentials for HTTP authentication. |
| `bestAttempt` | `boolean` | Attempt to proceed when 'awaited' events fail or timeout. |
| `closeReason` | `number` | Reason code for session closure. |
| `closeReasonText` | `string` | Human-readable close reason. |
| `commands` | `any[]` | Available commands. |
| `connectionEndTime` | `number` | Connection end time. |
| `connectionId` | `string` | Connection ID. |
| `connectionStartTime` | `number` | Connection start time. |
| `cookies` | `any[]` | Check [options](https://pptr.dev/api/puppeteer.page.setcookie). |
| `custom_ai` | `any[]` | Optional list of custom AI models to use for the request. |
| `dependencies` | `any[]` | Domain dependencies. |
| `description` | `string` | Target description. |
| `devtoolsFrontendUrl` | `string` | DevTools frontend URL. |
| `domain` | `string` | Domain name. |
| `elements` | `any[]` |  |
| `emulateMediaType` | `string` |  |
| `endTime` | `number` | Session end time. |
| `errors` | `any[]` |  |
| `events` | `any[]` | Available events. |
| `excludeExternalLinks` | `boolean` |  |
| `experimental` | `boolean` | Whether this domain is experimental. |
| `formats` | `any[]` |  |
| `gotoOptions` | `Record<string, any>` | Check [options](https://pptr.dev/api/puppeteer.gotooptions). |
| `guardrails` | `Record<string, any>` |  |
| `html` | `string` | Set the content of the page, eg: `<h1>Hello World!!</h1>`. |
| `id` | `string` | Target ID. |
| `interestingOnly` | `boolean` |  |
| `lastUpdated` | `number` | Last updated timestamp. |
| `message` | `string` | Target activated. |
| `meta` | `Record<string, any>` |  |
| `pdfOptions` | `Record<string, any>` | Check [options](https://pptr.dev/api/puppeteer.pdfoptions). |
| `prompt` | `string` |  |
| `rejectRequestPattern` | `any[]` | Block undesired requests that match the provided regex patterns, eg. |
| `rejectResourceTypes` | `any[]` | Block undesired requests that match the provided resource types, eg. |
| `response_format` | `Record<string, any>` |  |
| `result` | `Record<string, any>` | HTML content. |
| `root` | `string` |  |
| `screenshotOptions` | `Record<string, any>` | Check [options](https://pptr.dev/api/puppeteer.screenshotoptions). |
| `scrollPage` | `boolean` |  |
| `selector` | `string` |  |
| `sessionId` | `string` | Session ID. |
| `setExtraHTTPHeaders` | `Record<string, any>` |  |
| `setJavaScriptEnabled` | `boolean` |  |
| `startTime` | `number` | Session start time. |
| `success` | `boolean` | Response status. |
| `title` | `string` | Title of the target. |
| `type` | `string` | Target type (page, background_page, worker, etc.). |
| `types` | `any[]` | Type definitions. |
| `url` | `string` | URL of the target. |
| `userAgent` | `string` |  |
| `viewport` | `Record<string, any>` | Check [options](https://pptr.dev/api/puppeteer.page.setviewport). |
| `visibleLinksOnly` | `boolean` |  |
| `waitForSelector` | `Record<string, any>` | Wait for the selector to appear in page. |
| `waitForTimeout` | `number` | Waits for a specified timeout before continuing. |
| `webSocketDebuggerUrl` | `string` | WebSocket URL for debugging this target. |

#### Example: Load

```ts
const brapi = await client.Brapi().load({ account_id: 'account_id' })
```

#### Example: List

```ts
const brapis = await client.Brapi().list({ account_id: "example" })
```

#### Example: Create

```ts
const brapi = await client.Brapi().create({
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


### Build

Create an instance: `const build = client.Build()`

#### Operations

| Method | Description |
| --- | --- |
| `list(match)` | List entities matching the criteria. |
| `load(match)` | Load a single entity by match criteria. |
| `update(data)` | Update an existing entity. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `errors` | `any[]` |  |
| `id` | `string` |  |
| `messages` | `any[]` |  |
| `result` | `Record<string, any>` |  |
| `result_info` | `Record<string, any>` |  |
| `success` | `boolean` |  |

#### Example: Load

```ts
const build = await client.Build().load({ id: 'build_id', account_id: 'account_id' })
```

#### Example: List

```ts
const builds = await client.Build().list({ account_id: "example", version_id: "example" })
```


### BuildToken

Create an instance: `const build_token = client.BuildToken()`

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
| `errors` | `any[]` |  |
| `messages` | `any[]` |  |
| `result` | `Record<string, any>` |  |
| `result_info` | `Record<string, any>` |  |
| `success` | `boolean` |  |

#### Example: List

```ts
const build_tokens = await client.BuildToken().list({ account_id: "example" })
```

#### Example: Create

```ts
const build_token = await client.BuildToken().create({
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


### BuildsApi

Create an instance: `const builds_api = client.BuildsApi()`

#### Operations

| Method | Description |
| --- | --- |
| `create(data)` | Create a new entity with the given data. |
| `remove(match)` | Remove the matching entity. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `errors` | `any[]` |  |
| `messages` | `any[]` |  |
| `result` | `Record<string, any>` |  |
| `result_info` | `Record<string, any>` |  |
| `success` | `boolean` |  |

#### Example: Create

```ts
const builds_api = await client.BuildsApi().create({
  account_id: 'example_account_id',
  trigger_id: 'example_trigger_id',
  errors: [],
  messages: [],
  result: {},
  success: true,
})
```


### Connection

Create an instance: `const connection = client.Connection()`

#### Operations

| Method | Description |
| --- | --- |
| `remove(match)` | Remove the matching entity. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `id` | `string` |  |


### ContainerImage

Create an instance: `const container_image = client.ContainerImage()`

#### Operations

| Method | Description |
| --- | --- |
| `create(data)` | Create a new entity with the given data. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `image` | `string` | Image url. |

#### Example: Create

```ts
const container_image = await client.ContainerImage().create({
  account_id: 'example_account_id',
  image: 'example_image',
})
```


### ContainerInstance

Create an instance: `const container_instance = client.ContainerInstance()`

#### Operations

| Method | Description |
| --- | --- |
| `list(match)` | List entities matching the criteria. |
| `load(match)` | Load a single entity by match criteria. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `errors` | `any[]` |  |
| `id` | `string` |  |
| `messages` | `any[]` |  |
| `result` | `any` | A container instance belonging to an application. |
| `result_info` | `Record<string, any>` | Cursor pagination details for a v4 API list response. |
| `success` | `boolean` | Whether the API call was successful. |

#### Example: Load

```ts
const container_instance = await client.ContainerInstance().load({ id: 'container_instance_id', account_id: 'account_id', application_id: 'application_id' })
```

#### Example: List

```ts
const container_instances = await client.ContainerInstance().list({ account_id: "example", application_id: "example" })
```


### DeployHook

Create an instance: `const deploy_hook = client.DeployHook()`

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
| `errors` | `any[]` |  |
| `id` | `string` |  |
| `messages` | `any[]` |  |
| `result` | `Record<string, any>` |  |
| `result_info` | `Record<string, any>` |  |
| `success` | `boolean` |  |

#### Example: Load

```ts
const deploy_hook = await client.DeployHook().load({ id: 'deploy_hook_id', account_id: 'account_id', worker_id: 'worker_id' })
```

#### Example: List

```ts
const deploy_hooks = await client.DeployHook().list({ account_id: "example", script_name: "example" })
```

#### Example: Create

```ts
const deploy_hook = await client.DeployHook().create({
  id: 'example_id',
  branch: 'example_branch',
  deploy_hook_name: 'example_deploy_hook_name',
  errors: [],
  messages: [],
  result: {},
  success: true,
})
```


### Deployment

Create an instance: `const deployment = client.Deployment()`

#### Operations

| Method | Description |
| --- | --- |
| `remove(match)` | Remove the matching entity. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `id` | `string` |  |


### Destination

Create an instance: `const destination = client.Destination()`

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
| `configuration` | `Record<string, any>` |  |
| `enabled` | `boolean` |  |
| `errors` | `any[]` |  |
| `id` | `string` |  |
| `messages` | `any[]` |  |
| `name` | `string` |  |
| `result` | `Record<string, any>` |  |
| `skipPreflightCheck` | `boolean` |  |
| `success` | `boolean` |  |

#### Example: List

```ts
const destinations = await client.Destination().list({ account_id: "example" })
```

#### Example: Create

```ts
const destination = await client.Destination().create({
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


### Domain

Create an instance: `const domain = client.Domain()`

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
| `errors` | `any[]` |  |
| `id` | `string` |  |
| `messages` | `any[]` |  |
| `result` | `Record<string, any>` |  |
| `success` | `boolean` | Whether the API call was successful. |

#### Example: Load

```ts
const domain = await client.Domain().load({ id: 'domain_id', account_id: 'account_id' })
```

#### Example: List

```ts
const domains = await client.Domain().list({ account_id: "example" })
```


### DurableObjectsNamespace

Create an instance: `const durable_objects_namespace = client.DurableObjectsNamespace()`

#### Operations

| Method | Description |
| --- | --- |
| `create(data)` | Create a new entity with the given data. |
| `list(match)` | List entities matching the criteria. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `result` | `any[]` |  |
| `result_info` | `Record<string, any>` |  |

#### Example: List

```ts
const durable_objects_namespaces = await client.DurableObjectsNamespace().list({ account_id: "example" })
```

#### Example: Create

```ts
const durable_objects_namespace = await client.DurableObjectsNamespace().create({
  account_id: 'example_account_id',
  namespace_id: 'example_namespace_id',
})
```


### EnvironmentVariable

Create an instance: `const environment_variable = client.EnvironmentVariable()`

#### Operations

| Method | Description |
| --- | --- |
| `list(match)` | List entities matching the criteria. |
| `update(data)` | Update an existing entity. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `errors` | `any[]` |  |
| `messages` | `any[]` |  |
| `result` | `Record<string, any>` |  |
| `result_info` | `Record<string, any>` |  |
| `success` | `boolean` |  |

#### Example: List

```ts
const environment_variables = await client.EnvironmentVariable().list({ account_id: "example", trigger_id: "example" })
```


### GitHubIntegration

Create an instance: `const git_hub_integration = client.GitHubIntegration()`

#### Operations

| Method | Description |
| --- | --- |
| `list(match)` | List entities matching the criteria. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `errors` | `any[]` |  |
| `messages` | `any[]` |  |
| `result` | `Record<string, any>` |  |
| `result_info` | `Record<string, any>` |  |
| `success` | `boolean` |  |

#### Example: List

```ts
const git_hub_integrations = await client.GitHubIntegration().list({ account_id: "example", provider_account_id: "example", provider_type: "example", repo_id: "example", branch: "example" })
```


### Hyperdrive

Create an instance: `const hyperdrive = client.Hyperdrive()`

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
| `caching` | `Record<string, any>` |  |
| `created_on` | `string` | Defines the creation time of the Hyperdrive configuration. |
| `id` | `string` | Define configurations using a unique string identifier. |
| `modified_on` | `string` | Defines the last modified time of the Hyperdrive configuration. |
| `mtls` | `Record<string, any>` | mTLS configuration for the origin connection. |
| `name` | `string` | The name of the Hyperdrive configuration. |
| `origin` | `Record<string, any>` | Combines database connection fields with exactly one supported network location. |
| `origin_connection_limit` | `number` | The (soft) maximum number of connections the Hyperdrive is allowed to make to the origin database. |
| `restarted_on` | `string` | Defines the last time the Hyperdrive connection pool was explicitly restarted via the restart endpoint. |
| `result` | `Record<string, any>` |  |

#### Example: Load

```ts
const hyperdrive = await client.Hyperdrive().load({ account_id: 'account_id', hyperdrive_id: 'hyperdrive_id' })
```

#### Example: List

```ts
const hyperdrives = await client.Hyperdrive().list({ account_id: "example" })
```

#### Example: Create

```ts
const hyperdrive = await client.Hyperdrive().create({
  account_id: 'example_account_id',
  integration: 'example_integration',
  id: 'example_id',
  name: 'example_name',
  origin: {},
  result: {},
})
```


### ImageRegistry

Create an instance: `const image_registry = client.ImageRegistry()`

#### Operations

| Method | Description |
| --- | --- |
| `create(data)` | Create a new entity with the given data. |
| `list(match)` | List entities matching the criteria. |
| `remove(match)` | Remove the matching entity. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `auth` | `Record<string, any>` | Credentials for authenticating to a private external image registry. |
| `domain` | `string` | Hostname of the private registry, without a scheme or image path. |
| `errors` | `any[]` |  |
| `expiration_minutes` | `number` | The number of minutes Cloudflare managed registry credentials stay valid. |
| `id` | `string` |  |
| `is_public` | `boolean` | Omit this field or set it to `false`. |
| `kind` | `any` | Registry provider. |
| `messages` | `any[]` |  |
| `permissions` | `any[]` | The permissions for Cloudflare managed registry credentials. |
| `result` | `any[]` |  |
| `success` | `boolean` | Whether the API call was successful. |

#### Example: List

```ts
const image_registrys = await client.ImageRegistry().list({ account_id: "example" })
```

#### Example: Create

```ts
const image_registry = await client.ImageRegistry().create({
  account_id: 'example_account_id',
  auth: {},
  errors: [],
  kind: 'example_kind',
  messages: [],
  result: [],
  success: true,
})
```


### Issue

Create an instance: `const issue = client.Issue()`

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
| `errors` | `any[]` |  |
| `id` | `string` |  |
| `issueIds` | `any[]` |  |
| `messages` | `any[]` |  |
| `name` | `string` |  |
| `policyId` | `string` |  |
| `result` | `Record<string, any>` |  |
| `result_info` | `Record<string, any>` |  |
| `service` | `string` |  |
| `status` | `string` |  |
| `success` | `boolean` |  |
| `title` | `string` |  |

#### Example: Load

```ts
const issue = await client.Issue().load({ id: 'issue_id', account_id: 'account_id' })
```

#### Example: List

```ts
const issues = await client.Issue().list({ account_id: "example" })
```

#### Example: Create

```ts
const issue = await client.Issue().create({
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


### Key

Create an instance: `const key = client.Key()`

#### Operations

| Method | Description |
| --- | --- |
| `create(data)` | Create a new entity with the given data. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `datasets` | `any[]` | Leave this empty to use the default datasets |
| `errors` | `any[]` |  |
| `filters` | `any[]` | Apply filters to narrow key discovery. |
| `from` | `number` |  |
| `keyNeedle` | `Record<string, any>` | If the user suggests a key, use this to narrow down the list of keys returned. |
| `limit` | `number` | Advanced usage: set limit=1000+ to retrieve comprehensive key options without needing additional filtering. |
| `messages` | `any[]` |  |
| `needle` | `Record<string, any>` | Search for a specific substring in any of the events |
| `result` | `any[]` |  |
| `success` | `boolean` |  |
| `to` | `number` |  |

#### Example: Create

```ts
const key = await client.Key().create({
  account_id: 'example_account_id',
  errors: [],
  keyNeedle: {},
  messages: [],
  needle: {},
  result: [],
  success: true,
})
```


### LiveTail

Create an instance: `const live_tail = client.LiveTail()`

#### Operations

| Method | Description |
| --- | --- |
| `create(data)` | Create a new entity with the given data. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `errors` | `any[]` |  |
| `filterCombination` | `string` | Set a flag to describe how to combine the filters on the query. |
| `filters` | `any[]` | Apply filters to the query. |
| `messages` | `any[]` |  |
| `result` | `Record<string, any>` |  |
| `scriptId` | `string` |  |
| `success` | `boolean` |  |

#### Example: Create

```ts
const live_tail = await client.LiveTail().create({
  account_id: 'example_account_id',
  errors: [],
  messages: [],
  result: {},
  success: true,
})
```


### MetricsExport

Create an instance: `const metrics_export = client.MetricsExport()`

#### Operations

| Method | Description |
| --- | --- |
| `create(data)` | Create a new entity with the given data. |
| `list(match)` | List entities matching the criteria. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `errors` | `any[]` |  |
| `messages` | `any[]` |  |
| `requester` | `Record<string, any>` |  |
| `resources` | `any[]` |  |
| `result` | `any[]` |  |
| `success` | `boolean` |  |

#### Example: List

```ts
const metrics_exports = await client.MetricsExport().list({ account_id: "example" })
```

#### Example: Create

```ts
const metrics_export = await client.MetricsExport().create({
  account_id: 'example_account_id',
  errors: [],
  messages: [],
  requester: {},
  resources: [],
  result: [],
  success: true,
})
```


### Namespace

Create an instance: `const namespace = client.Namespace()`

#### Operations

| Method | Description |
| --- | --- |
| `remove(match)` | Remove the matching entity. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `id` | `string` |  |


### Preview

Create an instance: `const preview = client.Preview()`

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
| `errors` | `any[]` |  |
| `id` | `string` |  |
| `messages` | `any[]` |  |
| `result` | `Record<string, any>` |  |
| `success` | `boolean` | Whether the API call was successful. |

#### Example: Load

```ts
const preview = await client.Preview().load({ id: 'preview_id', account_id: 'account_id', worker_id: 'worker_id' })
```

#### Example: List

```ts
const previews = await client.Preview().list({ account_id: "example", worker_id: "example" })
```

#### Example: Create

```ts
const preview = await client.Preview().create({
  account_id: 'example_account_id',
  worker_id: 'example_worker_id',
  errors: [],
  messages: [],
  result: {},
  success: true,
})
```


### PreviewDeployment

Create an instance: `const preview_deployment = client.PreviewDeployment()`

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
| `errors` | `any[]` |  |
| `id` | `string` |  |
| `messages` | `any[]` |  |
| `result` | `any` |  |
| `success` | `boolean` | Whether the API call was successful. |

#### Example: Load

```ts
const preview_deployment = await client.PreviewDeployment().load({ id: 'preview_deployment_id', account_id: 'account_id', preview_id: 'preview_id', worker_id: 'worker_id' })
```

#### Example: List

```ts
const preview_deployments = await client.PreviewDeployment().list({ account_id: "example", id: "example_id", worker_id: "example" })
```

#### Example: Create

```ts
const preview_deployment = await client.PreviewDeployment().create({
  account_id: 'example_account_id',
  id: 'example_id',
  worker_id: 'example_worker_id',
  errors: [],
  messages: [],
  result: 'example_result',
  success: true,
})
```


### Query

Create an instance: `const query = client.Query()`

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
| `errors` | `any[]` |  |
| `granularity` | `number` | Number of time-series buckets. |
| `ignoreSeries` | `boolean` | When true, omits time-series data from the response and returns only aggregated values. |
| `limit` | `number` | Maximum number of events to return when view is 'events'. |
| `messages` | `any[]` |  |
| `offset` | `string` | Cursor for pagination in event, trace, invocation, and agent views. |
| `offsetBy` | `number` | Numeric offset for paginating grouped/pattern results (top-N lists). |
| `offsetDirection` | `string` | Pagination direction: 'next' for forward, 'prev' for backward. |
| `parameters` | `Record<string, any>` | Query parameters defining what data to retrieve — filters, calculations, group-bys, and ordering. |
| `queryId` | `string` | Identifier for the query. |
| `result` | `Record<string, any>` | Complete results of a query run. |
| `success` | `boolean` |  |
| `timeframe` | `Record<string, any>` | Timeframe for the query using Unix timestamps in milliseconds. |
| `view` | `string` | Controls the shape of the response. |

#### Example: Create

```ts
const query = await client.Query().create({
  account_id: 'example_account_id',
  errors: [],
  messages: [],
  queryId: 'example_queryId',
  result: {},
  success: true,
  timeframe: {},
})
```


### RepositoryConnection

Create an instance: `const repository_connection = client.RepositoryConnection()`

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

Create an instance: `const rollout = client.Rollout()`

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
| `steps` | `any[]` | Steps defining the rollout process, used when "step_percentage" is absent. |
| `strategy` | `string` | Strategy used for the rollout. |
| `target_configuration` | `Record<string, any>` | User-specified container configuration changes. |

#### Example: Create

```ts
const rollout = await client.Rollout().create({
  account_id: 'example_account_id',
  application_id: 'example_application_id',
  description: 'example_description',
  strategy: 'example_strategy',
  target_configuration: {},
})
```


### SavedQuery

Create an instance: `const saved_query = client.SavedQuery()`

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
| `errors` | `any[]` |  |
| `id` | `string` |  |
| `messages` | `any[]` |  |
| `name` | `string` | Query name |
| `parameters` | `Record<string, any>` |  |
| `result` | `Record<string, any>` |  |
| `success` | `boolean` |  |

#### Example: Load

```ts
const saved_query = await client.SavedQuery().load({ id: 'saved_query_id', account_id: 'account_id' })
```

#### Example: List

```ts
const saved_querys = await client.SavedQuery().list({ account_id: "example" })
```

#### Example: Create

```ts
const saved_query = await client.SavedQuery().create({
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


### Script

Create an instance: `const script = client.Script()`

#### Operations

| Method | Description |
| --- | --- |
| `remove(match)` | Remove the matching entity. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `id` | `string` |  |


### ScriptSetting

Create an instance: `const script_setting = client.ScriptSetting()`

#### Operations

| Method | Description |
| --- | --- |
| `list(match)` | List entities matching the criteria. |
| `update(data)` | Update an existing entity. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `errors` | `any[]` |  |
| `logpush` | `boolean` | Whether Logpush is turned on for the Worker. |
| `messages` | `any[]` |  |
| `observability` | `any` |  |
| `result` | `Record<string, any>` |  |
| `success` | `boolean` | Whether the API call was successful. |
| `tags` | `any` |  |
| `tail_consumers` | `any[]` | List of Workers that will consume logs from the attached Worker. |

#### Example: List

```ts
const script_settings = await client.ScriptSetting().list({ account_id: "example", script_name: "example" })
```


### Secret

Create an instance: `const secret = client.Secret()`

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
| `scopes` | `any[]` | The list of services that can use this secret. |
| `value` | `string` | The value of the secret. |

#### Example: Load

```ts
const secret = await client.Secret().load({ id: 'secret_id', account_id: 'account_id', store_id: 'store_id' })
```

#### Example: List

```ts
const secrets = await client.Secret().list({ account_id: "example", store_id: "example" })
```

#### Example: Create

```ts
const secret = await client.Secret().create({
  account_id: 'example_account_id',
  store_id: 'example_store_id',
  result: 'example_result',
})
```


### SecretsStoreDelete

Create an instance: `const secrets_store_delete = client.SecretsStoreDelete()`

#### Operations

| Method | Description |
| --- | --- |
| `remove(match)` | Remove the matching entity. |


### SecretsStoreQuota

Create an instance: `const secrets_store_quota = client.SecretsStoreQuota()`

#### Operations

| Method | Description |
| --- | --- |
| `load(match)` | Load a single entity by match criteria. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `result` | `any` |  |

#### Example: Load

```ts
const secrets_store_quota = await client.SecretsStoreQuota().load({ account_id: 'account_id' })
```


### SecretsStoreSecret

Create an instance: `const secrets_store_secret = client.SecretsStoreSecret()`

#### Operations

| Method | Description |
| --- | --- |
| `create(data)` | Create a new entity with the given data. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `comment` | `string` | Freeform text describing the secret. |
| `name` | `string` | The name of the secret. |
| `scopes` | `any[]` | The list of services that can use this secret. |

#### Example: Create

```ts
const secrets_store_secret = await client.SecretsStoreSecret().create({
  account_id: 'example_account_id',
  secret_id: 'example_secret_id',
  store_id: 'example_store_id',
  name: 'example_name',
  scopes: [],
})
```


### SecretsStoreStore

Create an instance: `const secrets_store_store = client.SecretsStoreStore()`

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

```ts
const secrets_store_store = await client.SecretsStoreStore().load({ id: 'secrets_store_store_id', account_id: 'account_id' })
```

#### Example: Create

```ts
const secrets_store_store = await client.SecretsStoreStore().create({
  account_id: 'example_account_id',
  name: 'example_name',
  result: 'example_result',
})
```


### SecretsStoreStoresResponseCollection

Create an instance: `const secrets_store_stores_response_collection = client.SecretsStoreStoresResponseCollection()`

#### Operations

| Method | Description |
| --- | --- |
| `list(match)` | List entities matching the criteria. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `result` | `any[]` |  |

#### Example: List

```ts
const secrets_store_stores_response_collections = await client.SecretsStoreStoresResponseCollection().list({ account_id: "example" })
```


### Setting

Create an instance: `const setting = client.Setting()`

#### Operations

| Method | Description |
| --- | --- |
| `list(match)` | List entities matching the criteria. |
| `update(data)` | Update an existing entity. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `errors` | `any[]` |  |
| `messages` | `any[]` |  |
| `result` | `Record<string, any>` |  |
| `success` | `boolean` | Whether the API call was successful. |

#### Example: List

```ts
const settings = await client.Setting().list({ account_id: "example", environment_name: "example", service_id: "example" })
```


### Shared

Create an instance: `const shared = client.Shared()`

#### Operations

| Method | Description |
| --- | --- |
| `create(data)` | Create a new entity with the given data. |
| `load(match)` | Load a single entity by match criteria. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `errors` | `any[]` |  |
| `id` | `string` |  |
| `messages` | `any[]` |  |
| `result` | `Record<string, any>` | Complete results of a query run. |
| `success` | `boolean` |  |

#### Example: Load

```ts
const shared = await client.Shared().load({ id: 'shared_id', account_id: 'account_id' })
```

#### Example: Create

```ts
const shared = await client.Shared().create({
  account_id: 'example_account_id',
  errors: [],
  messages: [],
  result: {},
  success: true,
})
```


### Tail

Create an instance: `const tail = client.Tail()`

#### Operations

| Method | Description |
| --- | --- |
| `remove(match)` | Remove the matching entity. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `id` | `string` |  |


### Token

Create an instance: `const token = client.Token()`

#### Operations

| Method | Description |
| --- | --- |
| `remove(match)` | Remove the matching entity. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `id` | `string` |  |


### Trigger

Create an instance: `const trigger = client.Trigger()`

#### Operations

| Method | Description |
| --- | --- |
| `create(data)` | Create a new entity with the given data. |
| `remove(match)` | Remove the matching entity. |
| `update(data)` | Update an existing entity. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `branch_excludes` | `any[]` | Branch patterns that must not start builds. |
| `branch_includes` | `any[]` | Branch patterns that can start builds. |
| `build_caching_enabled` | `boolean` | Whether builds reuse cached dependencies and build artifacts. |
| `build_command` | `string` | Command to build the Worker. |
| `build_token_uuid` | `string` | UUID of the build token used when deploying the Worker. |
| `deploy_command` | `string` | Command to deploy the Worker. |
| `external_script_id` | `string` | System-generated tag of the Worker. |
| `id` | `string` |  |
| `path_excludes` | `any[]` | Path patterns that must not start builds. |
| `path_includes` | `any[]` | Path patterns that can start builds. |
| `repo_connection_uuid` | `string` | Repository connection UUID. |
| `root_directory` | `string` | Repository directory in which build and deploy commands run. |
| `trigger_name` | `string` | Human-readable name of the build trigger. |

#### Example: Create

```ts
const trigger = await client.Trigger().create({
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


### Usage

Create an instance: `const usage = client.Usage()`

#### Operations

| Method | Description |
| --- | --- |
| `list(match)` | List entities matching the criteria. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `errors` | `any[]` |  |
| `messages` | `any[]` |  |
| `result` | `Record<string, any>` |  |
| `success` | `boolean` |  |

#### Example: List

```ts
const usages = await client.Usage().list({ account_id: "example", from: "example", to: "example" })
```


### Value

Create an instance: `const value = client.Value()`

#### Operations

| Method | Description |
| --- | --- |
| `create(data)` | Create a new entity with the given data. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `datasets` | `any[]` | Leave this empty to use the default datasets |
| `errors` | `any[]` |  |
| `filters` | `any[]` | Apply filters before listing values. |
| `key` | `string` |  |
| `limit` | `number` |  |
| `messages` | `any[]` |  |
| `needle` | `Record<string, any>` | Full-text search expression to match events containing the specified text or pattern. |
| `result` | `any[]` |  |
| `success` | `boolean` |  |
| `timeframe` | `Record<string, any>` |  |
| `type` | `string` |  |

#### Example: Create

```ts
const value = await client.Value().create({
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


### Version

Create an instance: `const version = client.Version()`

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
| `annotations` | `Record<string, any>` | Metadata about the version. |
| `assets` | `Record<string, any>` | Configuration for assets within a Worker. |
| `author_email` | `string` | Email of the user who created the version. |
| `author_id` | `string` | Identifier of the user who created the version. |
| `bindings` | `any[]` | List of bindings attached to a Worker. |
| `cache_options` | `Record<string, any>` | Global CacheW configuration for the Worker. |
| `compatibility_date` | `string` | Date indicating targeted support in the Workers runtime. |
| `compatibility_flags` | `any[]` | Flags that enable or disable certain features in the Workers runtime. |
| `containers` | `any[]` | List of containers attached to a Worker. |
| `created_on` | `string` | When the version was created. |
| `errors` | `any[]` |  |
| `exports` | `any` | Declarative exports for the version, including Durable Object classes (with their `storage` backend) and named Worker entrypoints. |
| `exports_reconciliation` | `any` | Summary of the declarative exports reconciliation that ran on this upload. |
| `id` | `string` | Version identifier. |
| `limits` | `Record<string, any>` | Resource limits enforced at runtime. |
| `main_module` | `string` | The name of the main module in the `modules` array (e.g. |
| `messages` | `any[]` |  |
| `migration_tag` | `string` | Durable Object migration tag. |
| `migrations` | `any` | Migrations for Durable Objects associated with the version. |
| `modules` | `any[]` | Code, sourcemaps, and other content used at runtime. |
| `number` | `number` | The integer version number, starting from one. |
| `package_dependencies` | `any[]` | The list of npm packages that were installed and used when this Worker version was built. |
| `placement` | `Record<string, any>` | Configuration for [Smart Placement](https://developers.cloudflare.com/workers/configuration/smart-placement). |
| `result` | `Record<string, any>` |  |
| `source` | `string` | The client used to create the version. |
| `startup_time_ms` | `number` | Time in milliseconds spent on [Worker startup](https://developers.cloudflare.com/workers/platform/limits/#worker-startup-time). |
| `success` | `boolean` | Whether the API call was successful. |
| `urls` | `any[]` | All routable URLs that always point to this version. |
| `usage_model` | `string` | Usage model for the version. |

#### Example: Load

```ts
const version = await client.Version().load({ id: 'version_id', account_id: 'account_id', worker_id: 'worker_id' })
```

#### Example: List

```ts
const versions = await client.Version().list({ account_id: "example", worker_id: "example" })
```

#### Example: Create

```ts
const version = await client.Version().create({
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


### Worker

Create an instance: `const worker = client.Worker()`

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
| `errors` | `any[]` |  |
| `git_repository` | `any` | Git repository settings to update |
| `id` | `string` |  |
| `messages` | `any[]` |  |
| `previews_base_config` | `Record<string, any>` | Build and deploy settings when creating a Worker build configuration |
| `previews_enabled` | `boolean` | Whether Previews are enabled for this Worker |
| `production_settings` | `Record<string, any>` | Build and deploy settings when creating a Worker build configuration |
| `result` | `Record<string, any>` | A single Preview of a Worker, with the build settings it currently uses. |
| `result_info` | `Record<string, any>` |  |
| `script_tag` | `string` | System-generated tag of the Worker. |
| `seed_repo` | `any` | Optional repository and file overrides used to seed this build. |
| `settings` | `Record<string, any>` | Partial build settings for updating a Worker build configuration |
| `success` | `boolean` | Whether the API call was successful. |

#### Example: Load

```ts
const worker = await client.Worker().load({ id: 'worker_id', account_id: 'account_id' })
```

#### Example: List

```ts
const workers = await client.Worker().list({ account_id: "example" })
```

#### Example: Create

```ts
const worker = await client.Worker().create({
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


### WorkerCronTrigger

Create an instance: `const worker_cron_trigger = client.WorkerCronTrigger()`

#### Operations

| Method | Description |
| --- | --- |
| `list(match)` | List entities matching the criteria. |
| `update(data)` | Update an existing entity. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `errors` | `any[]` |  |
| `messages` | `any[]` |  |
| `result` | `Record<string, any>` |  |
| `success` | `boolean` | Whether the API call was successful. |

#### Example: List

```ts
const worker_cron_triggers = await client.WorkerCronTrigger().list({ account_id: "example", script_name: "example" })
```


### WorkerDeployment

Create an instance: `const worker_deployment = client.WorkerDeployment()`

#### Operations

| Method | Description |
| --- | --- |
| `create(data)` | Create a new entity with the given data. |
| `load(match)` | Load a single entity by match criteria. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `annotations` | `Record<string, any>` |  |
| `author_email` | `string` |  |
| `created_on` | `string` |  |
| `errors` | `any[]` |  |
| `id` | `string` |  |
| `messages` | `any[]` |  |
| `result` | `Record<string, any>` |  |
| `source` | `string` |  |
| `strategy` | `string` |  |
| `success` | `boolean` | Whether the API call was successful. |
| `versions` | `any[]` | Worker versions included in this deployment. |

#### Example: Load

```ts
const worker_deployment = await client.WorkerDeployment().load({ id: 'worker_deployment_id', account_id: 'account_id' })
```

#### Example: Create

```ts
const worker_deployment = await client.WorkerDeployment().create({
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


### WorkerEnvironment

Create an instance: `const worker_environment = client.WorkerEnvironment()`

#### Operations

| Method | Description |
| --- | --- |
| `load(match)` | Load a single entity by match criteria. |

#### Example: Load

```ts
const worker_environment = await client.WorkerEnvironment().load({ account_id: 'account_id', environment_name: 'environment_name', service_id: 'service_id' })
```


### WorkerRoute

Create an instance: `const worker_route = client.WorkerRoute()`

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
| `errors` | `any[]` |  |
| `id` | `string` |  |
| `messages` | `any[]` |  |
| `pattern` | `string` | Pattern to match incoming requests against. |
| `result` | `Record<string, any>` |  |
| `script` | `string` | Name of the script to run if the route matches. |
| `success` | `boolean` | Whether the API call was successful. |

#### Example: Load

```ts
const worker_route = await client.WorkerRoute().load({ id: 'worker_route_id', zone_id: 'zone_id' })
```

#### Example: List

```ts
const worker_routes = await client.WorkerRoute().list({ zone_id: "example" })
```

#### Example: Create

```ts
const worker_route = await client.WorkerRoute().create({
  zone_id: 'example_zone_id',
  errors: [],
  id: 'example_id',
  messages: [],
  pattern: 'example_pattern',
  result: {},
  success: true,
})
```


### WorkerScript

Create an instance: `const worker_script = client.WorkerScript()`

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
| `errors` | `any[]` |  |
| `id` | `string` |  |
| `messages` | `any[]` |  |
| `result` | `Record<string, any>` | A secret value accessible through a binding. |
| `success` | `boolean` | Whether the API call was successful. |

#### Example: Load

```ts
const worker_script = await client.WorkerScript().load({ id: 'worker_script_id', account_id: 'account_id' })
```

#### Example: List

```ts
const worker_scripts = await client.WorkerScript().list({ account_id: "example" })
```

#### Example: Create

```ts
const worker_script = await client.WorkerScript().create({
  account_id: 'example_account_id',
  script_name: 'example_script_name',
  errors: [],
  messages: [],
  success: true,
})
```


### WorkerSubdomain

Create an instance: `const worker_subdomain = client.WorkerSubdomain()`

#### Operations

| Method | Description |
| --- | --- |
| `list(match)` | List entities matching the criteria. |
| `remove(match)` | Remove the matching entity. |
| `update(data)` | Update an existing entity. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `errors` | `any[]` |  |
| `messages` | `any[]` |  |
| `result` | `Record<string, any>` |  |
| `subdomain` | `string` |  |
| `success` | `boolean` | Whether the API call was successful. |

#### Example: List

```ts
const worker_subdomains = await client.WorkerSubdomain().list({ account_id: "example" })
```


### WorkerTailLog

Create an instance: `const worker_tail_log = client.WorkerTailLog()`

#### Operations

| Method | Description |
| --- | --- |
| `create(data)` | Create a new entity with the given data. |
| `list(match)` | List entities matching the criteria. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `errors` | `any[]` |  |
| `messages` | `any[]` |  |
| `result` | `Record<string, any>` |  |
| `success` | `boolean` | Whether the API call was successful. |

#### Example: List

```ts
const worker_tail_logs = await client.WorkerTailLog().list({ account_id: "example", script_name: "example" })
```

#### Example: Create

```ts
const worker_tail_log = await client.WorkerTailLog().create({
  account_id: 'example_account_id',
  script_name: 'example_script_name',
  errors: [],
  messages: [],
  result: {},
  success: true,
})
```


### WorkersAccountSetting

Create an instance: `const workers_account_setting = client.WorkersAccountSetting()`

#### Operations

| Method | Description |
| --- | --- |
| `list(match)` | List entities matching the criteria. |
| `update(data)` | Update an existing entity. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `default_usage_model` | `string` |  |
| `errors` | `any[]` |  |
| `green_compute` | `boolean` |  |
| `messages` | `any[]` |  |
| `result` | `Record<string, any>` |  |
| `success` | `boolean` | Whether the API call was successful. |

#### Example: List

```ts
const workers_account_settings = await client.WorkersAccountSetting().list({ account_id: "example" })
```


### WorkersApiResponseNullResult

Create an instance: `const workers_api_response_null_result = client.WorkersApiResponseNullResult()`

#### Operations

| Method | Description |
| --- | --- |
| `remove(match)` | Remove the matching entity. |
| `update(data)` | Update an existing entity. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `errors` | `any[]` |  |
| `messages` | `any[]` |  |
| `result` | `Record<string, any>` |  |
| `success` | `boolean` | Whether the API call was successful. |


### WorkersCompletedUploadAsset

Create an instance: `const workers_completed_upload_asset = client.WorkersCompletedUploadAsset()`

#### Operations

| Method | Description |
| --- | --- |
| `create(data)` | Create a new entity with the given data. |

#### Example: Create

```ts
const workers_completed_upload_asset = await client.WorkersCompletedUploadAsset().create({
  account_id: 'example_account_id',
  base64: true,
})
```


### WorkersCreateAssetsUploadSession

Create an instance: `const workers_create_assets_upload_session = client.WorkersCreateAssetsUploadSession()`

#### Operations

| Method | Description |
| --- | --- |
| `create(data)` | Create a new entity with the given data. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `manifest` | `Record<string, any>` | A manifest ([path]: {hash, size}) map of files to upload. |

#### Example: Create

```ts
const workers_create_assets_upload_session = await client.WorkersCreateAssetsUploadSession().create({
  account_id: 'example_account_id',
  script_name: 'example_script_name',
  manifest: {},
})
```


### WorkersForPlatform

Create an instance: `const workers_for_platform = client.WorkersForPlatform()`

#### Operations

| Method | Description |
| --- | --- |
| `list(match)` | List entities matching the criteria. |
| `load(match)` | Load a single entity by match criteria. |
| `update(data)` | Update an existing entity. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `errors` | `any[]` |  |
| `messages` | `any[]` |  |
| `result` | `Record<string, any>` | A secret value accessible through a binding. |
| `success` | `boolean` | Whether the API call was successful. |

#### Example: Load

```ts
const workers_for_platform = await client.WorkersForPlatform().load({ account_id: 'account_id', namespace_id: 'namespace_id' })
```

#### Example: List

```ts
const workers_for_platforms = await client.WorkersForPlatform().list({ account_id: "example" })
```


### WorkersKvApiResponseCommonNoResult

Create an instance: `const workers_kv_api_response_common_no_result = client.WorkersKvApiResponseCommonNoResult()`

#### Operations

| Method | Description |
| --- | --- |
| `remove(match)` | Remove the matching entity. |
| `update(data)` | Update an existing entity. |


### WorkersKvNamespace

Create an instance: `const workers_kv_namespace = client.WorkersKvNamespace()`

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
| `errors` | `any[]` |  |
| `id` | `string` |  |
| `jurisdiction` | `string` | Specify the jurisdiction to restrict the KV namespace to durably store data within. |
| `keys` | `any[]` | Array of keys to retrieve (maximum of 100). |
| `messages` | `any[]` |  |
| `result` | `any` |  |
| `result_info` | `Record<string, any>` |  |
| `success` | `boolean` | Whether the API call was successful. |
| `title` | `string` | Human-readable string name for a Workers KV namespace. |
| `type` | `string` | Return values as strings with `text`, or parse stored JSON values with `json`. |
| `withMetadata` | `boolean` | Whether to include metadata in the response. |

#### Example: Load

```ts
const workers_kv_namespace = await client.WorkersKvNamespace().load({ id: 'workers_kv_namespace_id', account_id: 'account_id' })
```

#### Example: List

```ts
const workers_kv_namespaces = await client.WorkersKvNamespace().list({ account_id: "example" })
```

#### Example: Create

```ts
const workers_kv_namespace = await client.WorkersKvNamespace().create({
  account_id: 'example_account_id',
  errors: [],
  keys: [],
  messages: [],
  success: true,
  title: 'example_title',
})
```


### WorkersNamespaceList

Create an instance: `const workers_namespace_list = client.WorkersNamespaceList()`

#### Operations

| Method | Description |
| --- | --- |
| `list(match)` | List entities matching the criteria. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `errors` | `any[]` |  |
| `messages` | `any[]` |  |
| `result` | `any[]` |  |
| `success` | `boolean` | Whether the API call was successful. |

#### Example: List

```ts
const workers_namespace_lists = await client.WorkersNamespaceList().list({ account_id: "example" })
```


### WorkersNamespaceScriptDeleteBulk

Create an instance: `const workers_namespace_script_delete_bulk = client.WorkersNamespaceScriptDeleteBulk()`

#### Operations

| Method | Description |
| --- | --- |
| `remove(match)` | Remove the matching entity. |


### WorkersNamespaceScriptResponseSingle

Create an instance: `const workers_namespace_script_response_single = client.WorkersNamespaceScriptResponseSingle()`

#### Operations

| Method | Description |
| --- | --- |
| `load(match)` | Load a single entity by match criteria. |
| `update(data)` | Update an existing entity. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `errors` | `any[]` |  |
| `messages` | `any[]` |  |
| `result` | `Record<string, any>` | Details about a worker uploaded to a Workers for Platforms namespace. |
| `success` | `boolean` | Whether the API call was successful. |

#### Example: Load

```ts
const workers_namespace_script_response_single = await client.WorkersNamespaceScriptResponseSingle().load({ account_id: 'account_id', namespace_id: 'namespace_id', script_name: 'script_name' })
```


### WorkersNamespaceSingle

Create an instance: `const workers_namespace_single = client.WorkersNamespaceSingle()`

#### Operations

| Method | Description |
| --- | --- |
| `create(data)` | Create a new entity with the given data. |
| `load(match)` | Load a single entity by match criteria. |
| `update(data)` | Update an existing entity. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `errors` | `any[]` |  |
| `messages` | `any[]` |  |
| `name` | `string` | The name of the dispatch namespace. |
| `result` | `Record<string, any>` |  |
| `success` | `boolean` | Whether the API call was successful. |
| `trusted_workers` | `boolean` | Whether the Workers in the namespace are executed in a "trusted" manner. |

#### Example: Load

```ts
const workers_namespace_single = await client.WorkersNamespaceSingle().load({ account_id: 'account_id', dispatch_namespace: 'dispatch_namespace' })
```

#### Example: Create

```ts
const workers_namespace_single = await client.WorkersNamespaceSingle().create({
  account_id: 'example_account_id',
  errors: [],
  messages: [],
  success: true,
})
```


### WorkersPipelinesOther

Create an instance: `const workers_pipelines_other = client.WorkersPipelinesOther()`

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
| `destination` | `Record<string, any>` |  |
| `endpoint` | `string` | Indicates the endpoint URL to send traffic. |
| `failure_reason` | `string` | Indicates the reason for the failure of the Pipeline. |
| `format` | `any` | Defines the output data format of a sink. |
| `graph` | `Record<string, any>` | Indicates the processing flow to implement the SQL. |
| `http` | `Record<string, any>` |  |
| `id` | `string` | Indicates a unique identifier for this pipeline. |
| `modified_at` | `string` |  |
| `name` | `string` | Indicates the name of the Pipeline. |
| `schema` | `Record<string, any>` | Defines the schema of the events in the data stream. |
| `source` | `any[]` |  |
| `sql` | `string` | Specifies SQL for the Pipeline processing flow. |
| `status` | `string` | Indicates the current status of the Pipeline. |
| `tables` | `any[]` | List of streams and sinks used by this pipeline. |
| `type` | `string` | Specifies the type of sink. |
| `version` | `number` | Indicates the version number of last saved configuration. |
| `worker_binding` | `Record<string, any>` |  |

#### Example: Load

```ts
const workers_pipelines_other = await client.WorkersPipelinesOther().load({ account_id: 'account_id' })
```

#### Example: List

```ts
const workers_pipelines_others = await client.WorkersPipelinesOther().list({ account_id: "example" })
```

#### Example: Create

```ts
const workers_pipelines_other = await client.WorkersPipelinesOther().create({
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


### WorkersScriptAndVersionSetting

Create an instance: `const workers_script_and_version_setting = client.WorkersScriptAndVersionSetting()`

#### Operations

| Method | Description |
| --- | --- |
| `list(match)` | List entities matching the criteria. |
| `update(data)` | Update an existing entity. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `errors` | `any[]` |  |
| `messages` | `any[]` |  |
| `result` | `Record<string, any>` |  |
| `success` | `boolean` | Whether the API call was successful. |

#### Example: List

```ts
const workers_script_and_version_settings = await client.WorkersScriptAndVersionSetting().list({ account_id: "example", script_name: "example" })
```


### WorkersScriptResponseCollection

Create an instance: `const workers_script_response_collection = client.WorkersScriptResponseCollection()`

#### Operations

| Method | Description |
| --- | --- |
| `list(match)` | List entities matching the criteria. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `errors` | `any[]` |  |
| `messages` | `any[]` |  |
| `result` | `any[]` |  |
| `success` | `boolean` | Whether the API call was successful. |

#### Example: List

```ts
const workers_script_response_collections = await client.WorkersScriptResponseCollection().list({ account_id: "example" })
```


### WorkersScriptResponseSingle

Create an instance: `const workers_script_response_single = client.WorkersScriptResponseSingle()`

#### Operations

| Method | Description |
| --- | --- |
| `update(data)` | Update an existing entity. |


### WorkersSmartPlacement

Create an instance: `const workers_smart_placement = client.WorkersSmartPlacement()`

#### Operations

| Method | Description |
| --- | --- |
| `list(match)` | List entities matching the criteria. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `errors` | `any[]` |  |
| `messages` | `any[]` |  |
| `result` | `Record<string, any>` |  |
| `success` | `boolean` | Whether the API call was successful. |

#### Example: List

```ts
const workers_smart_placements = await client.WorkersSmartPlacement().list({ account_id: "example" })
```


### WorkersUsageModel

Create an instance: `const workers_usage_model = client.WorkersUsageModel()`

#### Operations

| Method | Description |
| --- | --- |
| `list(match)` | List entities matching the criteria. |
| `update(data)` | Update an existing entity. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `errors` | `any[]` |  |
| `messages` | `any[]` |  |
| `result` | `Record<string, any>` |  |
| `success` | `boolean` | Whether the API call was successful. |
| `usage_model` | `string` | Usage model for the Worker invocations. |
| `user_limits` | `Record<string, any>` | User-defined resource limits for Workers with standard usage model. |

#### Example: List

```ts
const workers_usage_models = await client.WorkersUsageModel().list({ account_id: "example", script_name: "example" })
```


### WorkersVersionsList

Create an instance: `const workers_versions_list = client.WorkersVersionsList()`

#### Operations

| Method | Description |
| --- | --- |
| `list(match)` | List entities matching the criteria. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `errors` | `any[]` |  |
| `messages` | `any[]` |  |
| `result` | `Record<string, any>` |  |
| `success` | `boolean` | Whether the API call was successful. |

#### Example: List

```ts
const workers_versions_lists = await client.WorkersVersionsList().list({ account_id: "example", script_name: "example" })
```


### WorkersVersionsSingle

Create an instance: `const workers_versions_single = client.WorkersVersionsSingle()`

#### Operations

| Method | Description |
| --- | --- |
| `load(match)` | Load a single entity by match criteria. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `errors` | `any[]` |  |
| `messages` | `any[]` |  |
| `result` | `any` |  |
| `success` | `boolean` | Whether the API call was successful. |

#### Example: Load

```ts
const workers_versions_single = await client.WorkersVersionsSingle().load({ account_id: 'account_id', script_id: 'script_id', version_id: 'version_id' })
```


### WorkersVersionsUpload

Create an instance: `const workers_versions_upload = client.WorkersVersionsUpload()`

#### Operations

| Method | Description |
| --- | --- |
| `create(data)` | Create a new entity with the given data. |

#### Example: Create

```ts
const workers_versions_upload = await client.WorkersVersionsUpload().create({
  account_id: 'example_account_id',
  script_name: 'example_script_name',
})
```


### Workflow

Create an instance: `const workflow = client.Workflow()`

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
| `concurrency` | `Record<string, any>` |  |
| `default_retention` | `Record<string, any>` | Default retention applied to instances of this version when they do not set their own retention. |
| `errors` | `any[]` |  |
| `id` | `string` |  |
| `instances` | `any[]` |  |
| `limits` | `Record<string, any>` |  |
| `messages` | `any[]` |  |
| `result` | `Record<string, any>` |  |
| `result_info` | `Record<string, any>` |  |
| `schedules` | `any[]` |  |
| `script_name` | `string` |  |
| `success` | `boolean` |  |

#### Example: Load

```ts
const workflow = await client.Workflow().load({ id: 'workflow_id', account_id: 'account_id' })
```

#### Example: List

```ts
const workflows = await client.Workflow().list({ account_id: "example" })
```

#### Example: Create

```ts
const workflow = await client.Workflow().create({
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

Features are the extension mechanism. A feature is an object with a
`hooks` map. Each hook key is a pipeline stage name, and the value is
a function that receives the context.

The SDK ships with built-in features:

- **TestFeature**: Test transport

Features are initialized in order. Hooks fire in the order features
were added, so later features can override earlier ones.

### Module structure

```
cloudflare-workers/
├── src/
│   ├── CloudflareWorkersSDK.ts        # Main SDK class
│   ├── entity/             # Entity implementations
│   ├── feature/            # Built-in features (Base, Test, Log)
│   └── utility/            # Utility functions
├── test/                   # Test suites
└── dist/                   # Compiled output
```

Import the SDK from the package root:

```ts
import { CloudflareWorkersSDK } from '@voxgig-sdk/cloudflare-workers-sdk'
```

### Entity state

Entity instances are stateful. After a successful `list`, the entity
stores the returned data and match criteria internally. Subsequent
calls on the same instance can rely on this state.

```ts
const workersubdomain = client.WorkerSubdomain()
await workersubdomain.list()

// workersubdomain.data() now returns the workersubdomain data from the last `list`
// workersubdomain.match() returns the last match criteria
```

Call `make()` to create a fresh instance with the same configuration
but no stored state.

### Direct vs entity access

The entity interface handles URL construction, parameter placement,
and response parsing automatically. Use it for standard CRUD operations.

The `direct` method gives full control over the HTTP request. Use it
for non-standard endpoints, bulk operations, or any path not modelled
as an entity. The `prepare` method is useful for debugging — it
shows exactly what `direct` would send.


## Full Reference

See [REFERENCE.md](REFERENCE.md) for complete API reference
documentation including all method signatures, entity field schemas,
and detailed usage examples.
