# Cloudflare Workers

Cloudflare Workers: serverless functions, KV namespaces, Durable Objects, builds, browser rendering, containers, Hyperdrive, Pipelines, secrets, workflows, scripts, routes, tails, and deployments.

## Start here

This guide introduces the API, the client libraries, and the companion tools in this repository. Start with the API capabilities, choose a client for your application, and use the linked reference when you need exact request and response details.

The selected API surface contains 74 entities and 303 HTTP routes. There are 6 SDK targets and 2 companion tools.

An entity groups related API operations. An operation can have several routes with different inputs or authentication requirements. The SDK exposes the entity and its operations using the conventions of the selected language.

## What the API provides

### [Account](docs/api/account.html)

Results: Account limits retrieved successfully.

SDK operations: `list`.

### [Application](docs/api/application.html)

Results: A newly created application.; Get all application associated with your account.; List application versions.; A single application.; Delete application response.; Modify application response.

SDK operations: `create`, `list`, `load`, `remove`, `update`.

Key fields to recognise:

- `configuration`: User-specified container configuration.
- `id`: An Application ID represents an identifier of an application.
- `max_instances`: Maximum number of instances the application allows. This is relevant for applications that auto-scale.
- `observability`: Top-level observability settings for the application. This field is mutually exclusive with configuration.observability.
- `result`: The public Containers API returns an application.

### [Brapi](docs/api/brapi.html)

Results: Returns a session ID ready to be connected to.; Live view URLs generated successfully; Returns the requested formats information.; Returns the page&#39;s content.; Returns the ID for the started crawl job.; Returns the JSON based on a user prompt or JSON schema.; Returns the links.; Returns the page markdown.; Returns the PDF.; Returns the scraped elements.; Returns the screenshot.; List of targets.; Returns the account&#39;s sessions.; Chrome DevTools Protocol schema.; Returns the result of a crawl job.; Returns network recording events for the requested target ID, or HAR JSON when format=har.; Target activated successfully.; Target is closing.; The target with the given ID.; Browser version information.; Returns the session details.; Returns the recording data as a dictionary of events per targetId.; Crawl job cancelled successfully.; Browser session closing or already closed.; Information about the newly created tab.

SDK operations: `create`, `list`, `load`, `remove`, `update`.

Key fields to recognise:

- `Browser`: Browser name and version.
- `ProtocolVersion`: Chrome DevTools Protocol version.
- `UserAgent`: User agent string.
- `V8Version`: V8 JavaScript engine version.
- `WebKitVersion`: WebKit version.

### [Build](docs/api/build.html)

Results: Build logs retrieved successfully; Latest builds retrieved successfully; Builds retrieved successfully; Build retrieved successfully; Build canceled successfully.

SDK operations: `list`, `load`, `update`.

### [BuildToken](docs/api/build_token.html)

Results: Build token created successfully; Build tokens retrieved successfully.

SDK operations: `create`, `list`.

### [BuildsApi](docs/api/builds_api.html)

Results: Operation successful.

SDK operations: `create`, `remove`.

### [Connection](docs/api/connection.html)

Results: Operation successful.

SDK operations: `remove`.

### [ContainerImage](docs/api/container_image.html)

Results: The container image is ready or preparation reached a terminal error.; Container image preparation is still in progress.

SDK operations: `create`.

Key fields to recognise:

- `image`: Image url.

### [ContainerInstance](docs/api/container_instance.html)

Results: List of container instances.; Container instance details.

SDK operations: `list`, `load`.

Key fields to recognise:

- `id`: A container instance ID (64-character hex Durable Object actor ID).
- `result`: Container instances belonging to an application.
- `result_info`: Cursor pagination details for a v4 API list response.
- `success`: Whether the API call was successful.

### [DeployHook](docs/api/deploy_hook.html)

Results: Deploy hook created successfully; Build triggered successfully; Deploy hooks retrieved successfully; Deploy hook retrieved successfully; Deploy hook deleted successfully; Deploy hook updated successfully.

SDK operations: `create`, `list`, `load`, `remove`, `update`.

Key fields to recognise:

- `branch`: Git branch name.
- `deploy_hook_name`: Deploy hook name (1-58 characters).

### [Deployment](docs/api/deployment.html)

Results: Delete Preview Deployment success.; Delete Deployment response.

SDK operations: `remove`.

### [Destination](docs/api/destination.html)

Results: Resource created; Successful request.

SDK operations: `create`, `list`, `remove`, `update`.

### [Domain](docs/api/domain.html)

Results: List domains response.; Get domain response.; Detach domain response.; Attach domain response.

SDK operations: `list`, `load`, `remove`, `update`.

Key fields to recognise:

- `id`: Immutable ID of the domain.
- `success`: Whether the API call was successful.

### [DurableObjectsNamespace](docs/api/durable_objects_namespace.html)

Results: Query execution response.; List Objects response.; List Namespaces response.

SDK operations: `create`, `list`.

### [EnvironmentVariable](docs/api/environment_variable.html)

Results: Environment variables retrieved successfully; Environment variables updated successfully.

SDK operations: `list`, `update`.

### [GitHubIntegration](docs/api/git_hub_integration.html)

Results: Configuration autofill data retrieved successfully.

SDK operations: `list`.

### [Hyperdrive](docs/api/hyperdrive.html)

Results: Restart Hyperdrive Response.; Create Database Signature Response.; Create Hyperdrive Response.; List Hyperdrives Response.; Get Hyperdrive Response.; Update Hyperdrive Response.; Delete Hyperdrive Response.; Replace Hyperdrive Response.

SDK operations: `create`, `list`, `load`, `patch`, `remove`, `update`.

Key fields to recognise:

- `created_on`: Defines the creation time of the Hyperdrive configuration.
- `id`: Define configurations using a unique string identifier.
- `modified_on`: Defines the last modified time of the Hyperdrive configuration.
- `mtls`: mTLS configuration for the origin connection. Cannot be used with VPC Service origins; TLS must be managed on the VPC Service.
- `name`: The name of the Hyperdrive configuration. Used to identify the configuration in the Cloudflare dashboard and API.

### [ImageRegistry](docs/api/image_registry.html)

Results: Credentials with scoped permissions to access the registry.; The external image registry configuration was added to the account.; The list of registries that are added in the account.; The image registry is deleted.

SDK operations: `create`, `list`, `remove`.

Key fields to recognise:

- `auth`: Credentials for authenticating to a private external image registry.
- `domain`: A string representation of a domain name. See RFC-1034 (https://www.ietf.org/rfc/rfc1034.txt). Consider that the limit of a domain name is min 3 and max 253 ASCII characters.
- `expiration_minutes`: The number of minutes Cloudflare managed registry credentials stay valid.
- `is_public`: Omit this field or set it to `false`.
- `kind`: The type of registry that is being configured.

### [Issue](docs/api/issue.html)

Results: Successful request.

SDK operations: `create`, `list`, `load`, `patch`, `remove`, `update`.

Key fields to recognise:

- `id`: Unique occurrence ID.

### [Key](docs/api/key.html)

Results: Successful request.

SDK operations: `create`.

Key fields to recognise:

- `datasets`: Leave this empty to use the default datasets
- `filters`: Apply filters to narrow key discovery.
- `keyNeedle`: If the user suggests a key, use this to narrow down the list of keys returned.
- `limit`: Advanced usage: set limit=1000+ to retrieve comprehensive key options without needing additional filtering.
- `needle`: Search for a specific substring in any of the events

### [LiveTail](docs/api/live_tail.html)

Results: Successful request.

SDK operations: `create`.

Key fields to recognise:

- `filterCombination`: Set a flag to describe how to combine the filters on the query.
- `filters`: Apply filters to the query.

### [MetricsExport](docs/api/metrics_export.html)

Results: Resource created; Successful request.

SDK operations: `create`, `list`.

### [Namespace](docs/api/namespace.html)

Results: Delete a Workers for Platforms namespace.

SDK operations: `remove`.

### [Preview](docs/api/preview.html)

Results: Create Preview success.; List Previews success.; Get Preview success.; Edit Preview success.; Delete Preview success.; Update Preview success.

SDK operations: `create`, `list`, `load`, `patch`, `remove`, `update`.

Key fields to recognise:

- `id`: Immutable ID of the Preview.
- `success`: Whether the API call was successful.

### [PreviewDeployment](docs/api/preview_deployment.html)

Results: Create Preview Deployment success.; List Preview Deployments success.; Get Preview Deployment success.; Patch Preview Deployment success.

SDK operations: `create`, `list`, `load`, `update`.

Key fields to recognise:

- `id`: Identifier of the D1 database to bind to.
- `success`: Whether the API call was successful.

### [Query](docs/api/query.html)

Results: Successful request.

SDK operations: `create`.

Key fields to recognise:

- `chart`: When true, includes time-series data in the response.
- `chartType`: Controls the SQL shape and response payload for the &#39;calculations&#39; view.
- `compare`: Comparison calculation results from the previous time period. Present when the compare option is enabled. Same structure as calculations.
- `distributionScale`: Value-axis bucketing for chartType &#39;distribution&#39;.
- `dry`: Whether this was a dry run (results not persisted).

### [RepositoryConnection](docs/api/repository_connection.html)

Results: Repository connection upserted successfully.

SDK operations: `update`.

Key fields to recognise:

- `provider_account_id`: Provider-specific identifier of the account or namespace that owns the repository.
- `provider_account_name`: Human-readable name of the account or namespace that owns the repository.
- `provider_type`: Source control provider.
- `repo_id`: Provider-specific repository identifier.
- `repo_name`: Human-readable repository name.

### [Rollout](docs/api/rollout.html)

Results: Application rollout created successfully.

SDK operations: `create`.

Key fields to recognise:

- `description`: Description of the rollout step.
- `kind`: Kind of the rollout process. - &quot;full_auto&quot;: For rolling rollouts, starts progressing steps upon rollout creation. For new_instances rollouts, advances percentage targets automatically after target-version health is observed. - &quot;full_manual&quot;: Requires manually progressing each step in the rollout using the UpdateRollout&#39;s action paramater. - &quot;durable_objects_auto&quot;: Default when the application is a DO application.
- `percentage`: Current target version percentage (0-100). Only present for &quot;new_instances&quot; strategy.
- `step_percentage`: Percentage of rollout to increase in each step when &quot;steps&quot; is absent.
- `steps`: Steps defining the rollout process, used when &quot;step_percentage&quot; is absent.

### [SavedQuery](docs/api/saved_query.html)

Results: Successful request.

SDK operations: `create`, `list`, `load`, `remove`, `update`.

Key fields to recognise:

- `name`: Query name

### [Script](docs/api/script.html)

Results: Delete Worker response.

SDK operations: `remove`.

### [ScriptSetting](docs/api/script_setting.html)

Results: Fetch script settings.; Patch script settings.

SDK operations: `list`, `update`.

Key fields to recognise:

- `logpush`: Whether Logpush is turned on for the Worker.
- `success`: Whether the API call was successful.
- `tail_consumers`: List of Workers that will consume logs from the attached Worker.

### [Secret](docs/api/secret.html)

Results: Secret detail.; List store secrets response.; Secret deletion accepted.; Secrets deletion accepted.

SDK operations: `create`, `list`, `load`, `remove`, `update`.

Key fields to recognise:

- `comment`: Freeform text describing the secret.
- `id`: Secret identifier tag.
- `result`: Result is null for delete operations.
- `scopes`: The list of services that can use this secret.
- `value`: The value of the secret.

### [SecretsStoreDelete](docs/api/secrets_store_delete.html)

Results: Store deleted.

SDK operations: `remove`.

### [SecretsStoreQuota](docs/api/secrets_store_quota.html)

Results: Usage and quota.

SDK operations: `load`.

### [SecretsStoreSecret](docs/api/secrets_store_secret.html)

Results: Secret detail.

SDK operations: `create`.

Key fields to recognise:

- `comment`: Freeform text describing the secret.
- `name`: The name of the secret.
- `scopes`: The list of services that can use this secret.

### [SecretsStoreStore](docs/api/secrets_store_store.html)

Results: Store details.

SDK operations: `create`, `load`.

Key fields to recognise:

- `id`: Store Identifier.
- `name`: The name of the store.

### [SecretsStoreStoresResponseCollection](docs/api/secrets_store_stores_response_collection.html)

Results: List account stores response.

SDK operations: `list`.

### [Setting](docs/api/setting.html)

Results: Fetch script settings.; Patch script settings.

SDK operations: `list`, `update`.

Key fields to recognise:

- `success`: Whether the API call was successful.

### [Shared](docs/api/shared.html)

Results: Successful request.

SDK operations: `create`, `load`.

Key fields to recognise:

- `errors`: Distinct errors reported by spans in the run.
- `id`: Specify the ID of the shared query.
- `result`: Complete results of a query run. The populated fields depend on the requested view type (events, calculations, invocations, traces, or agents).

### [Tail](docs/api/tail.html)

Results: Delete Tail response.

SDK operations: `remove`.

### [Token](docs/api/token.html)

Results: Operation successful.

SDK operations: `remove`.

### [Trigger](docs/api/trigger.html)

Results: Build created successfully; Trigger created successfully; Operation successful; Trigger updated successfully.

SDK operations: `create`, `remove`, `update`.

Key fields to recognise:

- `branch_excludes`: Branch patterns that must not start builds.
- `branch_includes`: Branch patterns that can start builds.
- `build_caching_enabled`: Whether builds reuse cached dependencies and build artifacts.
- `build_command`: Command to build the Worker.
- `build_token_uuid`: UUID of the build token used when deploying the Worker.

### [Usage](docs/api/usage.html)

Results: Successful request.

SDK operations: `list`.

### [Value](docs/api/value.html)

Results: Successful request.

SDK operations: `create`.

Key fields to recognise:

- `datasets`: Leave this empty to use the default datasets
- `filters`: Apply filters before listing values.
- `needle`: Full-text search expression to match events containing the specified text or pattern.

### [Version](docs/api/version.html)

Results: Create version success.; List versions success.; Get latest version success.; Get version success.; Delete version success.; Patch version success.

SDK operations: `create`, `list`, `load`, `remove`, `update`.

Key fields to recognise:

- `annotations`: Metadata about the version.
- `assets`: Configuration for assets within a Worker. [`_headers`](https://developers.cloudflare.com/workers/static-assets/headers/#custom-headers) and [`_redirects`](https://developers.cloudflare.com/workers/static-assets/redirects/) files should be included as modules named `_headers` and `_redirects` with content type `text/plain`.
- `author_email`: Email of the user who created the version.
- `author_id`: Identifier of the user who created the version.
- `bindings`: List of bindings attached to a Worker. You can find more about bindings on our docs: https://developers.cloudflare.com/workers/configuration/multipart-upload-metadata/#bindings.

### [Worker](docs/api/worker.html)

Results: Build created successfully; Worker migrated to Previews successfully; Worker build configuration created successfully; Create Worker success.; List Workers success.; Builds retrieved successfully; Previews retrieved successfully; Triggers retrieved successfully; Preview retrieved successfully; Worker build configuration retrieved successfully; Get Worker success.; Worker build configuration updated successfully; Preview updated successfully; Partially Update Worker success.; Delete Worker success.; Worker build configuration deleted successfully.; Update Worker success.

SDK operations: `create`, `list`, `load`, `patch`, `remove`, `update`.

Key fields to recognise:

- `auto_build`: Whether pushes to the git branch build this Preview. Deploy hooks, manual builds, and retries run regardless of this setting.
- `auto_delete`: Whether deleting the git branch also deletes this Preview.
- `branch`: Git branch name.
- `commit_hash`: Git commit hash
- `git_repository`: Git repository details linked to a Worker script build configuration

### [WorkerCronTrigger](docs/api/worker_cron_trigger.html)

Results: Get Cron Triggers response.; Update Cron Triggers response.

SDK operations: `list`, `update`.

Key fields to recognise:

- `success`: Whether the API call was successful.

### [WorkerDeployment](docs/api/worker_deployment.html)

Results: Create Deployment response.; List Deployments response.; Get Deployment response.

SDK operations: `create`, `load`.

Key fields to recognise:

- `success`: Whether the API call was successful.
- `versions`: Worker versions included in this deployment. Each object must contain a `version_id` UUID and a `percentage`; percentages across all objects must total 100. In the `cf` CLI, pass the entire array as one JSON value to `--versions`, either inline, for example `--versions &#39;[&#123;&quot;version_id&quot;:&quot;023e105f-2a42-4f8b-a1c1-73f6a2a30c0f&quot;,&quot;percentage&quot;:100&#125;]&#39;`, or from a JSON file with `--versions @versions.json`.

### [WorkerEnvironment](docs/api/worker_environment.html)

Results: Get script content.

SDK operations: `load`.

### [WorkerRoute](docs/api/worker_route.html)

Results: Create Route response.; List Routes response.; Get Route response.; Delete Route response.; Update Route response.

SDK operations: `create`, `list`, `load`, `remove`, `update`.

Key fields to recognise:

- `id`: Identifier.
- `pattern`: Pattern to match incoming requests against. [Learn more](https://developers.cloudflare.com/workers/configuration/routing/routes/#matching-behavior).
- `script`: Name of the script to run if the route matches.
- `success`: Whether the API call was successful.

### [WorkerScript](docs/api/worker_script.html)

Results: Post subdomain response.; Search Workers success.; List script secrets.; Get subdomain response.; Get script secret binding.; Worker successfully downloaded. Returns script content as a multipart form, with no metadata part and no JSON encoding applied.; Fetch script content.; Patch script secrets bulk success.; Delete subdomain response.; Upload Worker Module response.; Put script secret binding success.

SDK operations: `create`, `list`, `load`, `patch`, `remove`, `update`.

Key fields to recognise:

- `id`: Identifier.
- `result`: A secret value accessible through a binding.
- `success`: Whether the API call was successful.

### [WorkerSubdomain](docs/api/worker_subdomain.html)

Results: Get Subdomain response.; Subdomain deleted successfully.; Create Subdomain response.

SDK operations: `list`, `remove`, `update`.

Key fields to recognise:

- `success`: Whether the API call was successful.

### [WorkerTailLog](docs/api/worker_tail_log.html)

Results: Start Tail response.; List Tails response.

SDK operations: `create`, `list`.

Key fields to recognise:

- `success`: Whether the API call was successful.

### [WorkersAccountSetting](docs/api/workers_account_setting.html)

Results: Fetch Workers Account Settings response.; Create Workers Account Settings response.

SDK operations: `list`, `update`.

Key fields to recognise:

- `success`: Whether the API call was successful.

### [WorkersApiResponseNullResult](docs/api/workers_api_response_null_result.html)

Results: Delete script secret binding (Workers for Platforms).; Delete Worker response.; Delete script tag.; Delete script secret binding.; Put script tag.

SDK operations: `remove`, `update`.

Key fields to recognise:

- `success`: Whether the API call was successful.

### [WorkersCompletedUploadAsset](docs/api/workers_completed_upload_asset.html)

Results: Upload Assets response.

SDK operations: `create`.

### [WorkersCreateAssetsUploadSession](docs/api/workers_create_assets_upload_session.html)

Results: Create Assets Upload Session response.

SDK operations: `create`.

Key fields to recognise:

- `manifest`: A manifest ([path]: &#123;hash, size&#125;) map of files to upload.

### [WorkersForPlatform](docs/api/workers_for_platform.html)

Results: List scripts in namespace response.; Fetch script bindings (Workers for Platforms).; List script secrets.; Fetch script settings.; Fetch script tags.; Get script secret (Workers for Platforms).; Get script content.; Patch script settings.; Upload Worker Module response.

SDK operations: `list`, `load`, `patch`, `update`.

Key fields to recognise:

- `result`: List of bindings attached to a Worker. You can find more about bindings on our docs: https://developers.cloudflare.com/workers/configuration/multipart-upload-metadata/#bindings.
- `success`: Whether the API call was successful.

### [WorkersKvApiResponseCommonNoResult](docs/api/workers_kv_api_response_common_no_result.html)

Results: Delete key-value pair response.; Remove a Namespace response.; Write key-value pair with metadata response.

SDK operations: `remove`, `update`.

### [WorkersKvNamespace](docs/api/workers_kv_namespace.html)

Results: Delete multiple key-value pairs response.; Get multiple key-value pairs response.; Create a Namespace response.; List a Namespace&#39;s Keys response.; List Namespaces response.; Read the metadata for a key response.; Read key-value pair response.; Get a Namespace response.; Rename a Namespace response.; Write multiple key-value pairs response.

SDK operations: `create`, `list`, `load`, `remove`, `update`.

Key fields to recognise:

- `id`: ID of the Workers KV namespace.
- `jurisdiction`: Specify the jurisdiction to restrict the KV namespace to durably store data within. Can only be set at namespace creation time.
- `keys`: Array of keys to retrieve (maximum of 100).
- `success`: Whether the API call was successful.
- `title`: Human-readable string name for a Workers KV namespace.

### [WorkersNamespaceList](docs/api/workers_namespace_list.html)

Results: Fetch a list of Workers for Platforms namespaces.

SDK operations: `list`.

Key fields to recognise:

- `success`: Whether the API call was successful.

### [WorkersNamespaceScriptDeleteBulk](docs/api/workers_namespace_script_delete_bulk.html)

Results: Delete scripts in namespace response.

SDK operations: `remove`.

### [WorkersNamespaceScriptResponseSingle](docs/api/workers_namespace_script_response_single.html)

Results: Worker Details Response (Workers for Platforms).; Patch script secrets bulk success (Workers for Platforms).

SDK operations: `load`, `update`.

Key fields to recognise:

- `result`: Details about a worker uploaded to a Workers for Platforms namespace.
- `success`: Whether the API call was successful.

### [WorkersNamespaceSingle](docs/api/workers_namespace_single.html)

Results: Fetch a list of Workers for Platforms namespaces.; Get a Workers for Platforms namespace.; Patch a Workers for Platforms namespace.; Update a Workers for Platforms namespace.

SDK operations: `create`, `load`, `patch`, `update`.

Key fields to recognise:

- `name`: The name of the dispatch namespace.
- `success`: Whether the API call was successful.
- `trusted_workers`: Whether the Workers in the namespace are executed in a &quot;trusted&quot; manner. When a Worker is trusted, it has access to the shared caches for the zone in the Cache API, and has access to the `request.cf` object on incoming Requests. When a Worker is untrusted, caches are not shared across the zone, and `request.cf` is undefined. By default, Workers in a namespace are &quot;untrusted&quot;.

### [WorkersPipelinesOther](docs/api/workers_pipelines_other.html)

Results: [DEPRECATED] Indicates a successfully created pipeline. Use /pipelines/v1/pipelines instead.; Indicates a successfully created Pipeline.; Indicates a successfully created Sink.; Indicates a successfully created Stream.; Indicates SQL validation success.; Indicates successfully listed Sinks.; Indicates a successfully listed Pipelines.; [DEPRECATED] Lists the pipelines. Use /pipelines/v1/pipelines instead.; Indicates a successfully retrieved Pipeline.; [DEPRECATED] Describes the configuration of a pipeline.; Indicates that Sink was retrieved.; Indicates a successfully retrieved Stream.; Indicates a successfully updated Stream.; Indicates a successfully deleted Pipeline.; [DEPRECATED] Indicates a successfully deleted pipeline.; Indicates a successfully deleted Sink.; Indicates a successfully deleted Stream.; [DEPRECATED] Indicates a successfully updated pipeline.

SDK operations: `create`, `list`, `load`, `patch`, `remove`, `update`.

Key fields to recognise:

- `config`: Defines the configuration of the R2 Sink.
- `endpoint`: Indicates the endpoint URL to send traffic.
- `failure_reason`: Indicates the reason for the failure of the Pipeline.
- `format`: Specifies the format of data to deliver.
- `graph`: Indicates the processing flow to implement the SQL.

### [WorkersScriptAndVersionSetting](docs/api/workers_script_and_version_setting.html)

Results: Fetch settings.; Patch settings.

SDK operations: `list`, `update`.

Key fields to recognise:

- `success`: Whether the API call was successful.

### [WorkersScriptResponseCollection](docs/api/workers_script_response_collection.html)

Results: List Workers response.

SDK operations: `list`.

Key fields to recognise:

- `success`: Whether the API call was successful.

### [WorkersScriptResponseSingle](docs/api/workers_script_response_single.html)

Results: Put script content.; Put script content (Workers for Platforms).

SDK operations: `update`.

### [WorkersSmartPlacement](docs/api/workers_smart_placement.html)

Results: List Placement Regions response.

SDK operations: `list`.

Key fields to recognise:

- `success`: Whether the API call was successful.

### [WorkersUsageModel](docs/api/workers_usage_model.html)

Results: Fetch Usage Model response.; Update Usage Model response.

SDK operations: `list`, `update`.

Key fields to recognise:

- `success`: Whether the API call was successful.
- `usage_model`: Usage model for the Worker invocations.
- `user_limits`: User-defined resource limits for Workers with standard usage model.

### [WorkersVersionsList](docs/api/workers_versions_list.html)

Results: List Versions response.

SDK operations: `list`.

Key fields to recognise:

- `success`: Whether the API call was successful.

### [WorkersVersionsSingle](docs/api/workers_versions_single.html)

Results: Get Version Detail response.

SDK operations: `load`.

Key fields to recognise:

- `success`: Whether the API call was successful.

### [WorkersVersionsUpload](docs/api/workers_versions_upload.html)

Results: Upload Version response.

SDK operations: `create`.

### [Workflow](docs/api/workflow.html)

Results: Send an event to an instance.; Create workflow instance. Body is a JSON parsable string that it&#39;s passed into the new instance as the event payload.; Batch create workflow instances. Body is a JSON list that contain all payloads and ids that are passed into the new instance as the event payload.; Returns deleted instances and any per-instance errors.; Batch terminate instances of a workflow, via a async job. Body is a JSON list that contain the ids of the instances to terminate.; List of workflow instances.; Get the full output from a specific instance step.; List of all Workflows belonging to a account.; List deployed workflow versions.; A five-minute subscription token.; Get the parsed DAG for a specific workflow version.; Get the parsed graph for a specific workflow version.; Get status of the job responsible for terminate all instances of a workflow.; Account settings.; Get all logs and status from the instance.; Get specific version details.; Get Workflow details.; Script trigger declarations.; Change status of instance - it can be paused, resumed or terminated.; Effective script trigger declarations.; Updated account settings.; Instance deleted.; Deletes a Workflow.; Number of deleted trigger declarations.; Create/modify a Workflow based on a deployed script with an existing `WorkflowEntrypoint` class. Must be done after deploying the corresponding script.

SDK operations: `create`, `list`, `load`, `patch`, `remove`, `update`.

Key fields to recognise:

- `default_retention`: Default retention applied to instances of this version when they do not set their own retention.

### Route map

Use this map to locate a capability. Consult the entity reference before supplying request data; routes for the same operation can require different fields.

| Entity | SDK operation | HTTP route | Authentication |
| --- | --- | --- | --- |
| [Account](docs/api/account.html) | `list` | `GET /accounts/{account_id}/builds/account/limits` | Required |
| [Application](docs/api/application.html) | `create` | `POST /accounts/{account_id}/containers/applications` | Required |
| [Application](docs/api/application.html) | `list` | `GET /accounts/{account_id}/containers/applications` | Required |
| [Application](docs/api/application.html) | `list` | `GET /accounts/{account_id}/containers/applications/{application_id}/versions` | Required |
| [Application](docs/api/application.html) | `load` | `GET /accounts/{account_id}/containers/applications/{application_id}` | Required |
| [Application](docs/api/application.html) | `remove` | `DELETE /accounts/{account_id}/containers/applications/{application_id}` | Required |
| [Application](docs/api/application.html) | `update` | `PATCH /accounts/{account_id}/containers/applications/{application_id}` | Required |
| [Brapi](docs/api/brapi.html) | `create` | `POST /accounts/{account_id}/browser-rendering/devtools/browser` | Required |
| [Brapi](docs/api/brapi.html) | `create` | `POST /accounts/{account_id}/browser-rendering/devtools/browser/{session_id}/live_view` | Required |
| [Brapi](docs/api/brapi.html) | `create` | `POST /accounts/{account_id}/browser-rendering/accessibilityTree` | Required |
| [Brapi](docs/api/brapi.html) | `create` | `POST /accounts/{account_id}/browser-rendering/content` | Required |
| [Brapi](docs/api/brapi.html) | `create` | `POST /accounts/{account_id}/browser-rendering/crawl` | Required |
| [Brapi](docs/api/brapi.html) | `create` | `POST /accounts/{account_id}/browser-rendering/json` | Required |
| [Brapi](docs/api/brapi.html) | `create` | `POST /accounts/{account_id}/browser-rendering/links` | Required |
| [Brapi](docs/api/brapi.html) | `create` | `POST /accounts/{account_id}/browser-rendering/markdown` | Required |
| [Brapi](docs/api/brapi.html) | `create` | `POST /accounts/{account_id}/browser-rendering/pdf` | Required |
| [Brapi](docs/api/brapi.html) | `create` | `POST /accounts/{account_id}/browser-rendering/scrape` | Required |
| [Brapi](docs/api/brapi.html) | `create` | `POST /accounts/{account_id}/browser-rendering/screenshot` | Required |
| [Brapi](docs/api/brapi.html) | `create` | `POST /accounts/{account_id}/browser-rendering/snapshot` | Required |
| [Brapi](docs/api/brapi.html) | `list` | `GET /accounts/{account_id}/browser-rendering/devtools/browser/{session_id}/json` | Required |
| [Brapi](docs/api/brapi.html) | `list` | `GET /accounts/{account_id}/browser-rendering/devtools/browser/{session_id}/json/list` | Required |
| [Brapi](docs/api/brapi.html) | `list` | `GET /accounts/{account_id}/browser-rendering/devtools/session` | Required |
| [Brapi](docs/api/brapi.html) | `list` | `GET /accounts/{account_id}/browser-rendering/devtools/browser/{session_id}/json/protocol` | Required |
| [Brapi](docs/api/brapi.html) | `load` | `GET /accounts/{account_id}/browser-rendering/crawl/{job_id}` | Required |
| [Brapi](docs/api/brapi.html) | `load` | `GET /accounts/{account_id}/browser-rendering/devtools/browser/{session_id}` | Required |
| [Brapi](docs/api/brapi.html) | `load` | `GET /accounts/{account_id}/browser-rendering/devtools/browser` | Required |
| [Brapi](docs/api/brapi.html) | `load` | `GET /accounts/{account_id}/browser-rendering/devtools/browser/{session_id}/page/{target_id}` | Required |
| [Brapi](docs/api/brapi.html) | `load` | `GET /accounts/{account_id}/browser-rendering/recording/{session_id}/network` | Required |
| [Brapi](docs/api/brapi.html) | `load` | `GET /accounts/{account_id}/browser-rendering/devtools/browser/{session_id}/json/activate/{target_id}` | Required |
| [Brapi](docs/api/brapi.html) | `load` | `GET /accounts/{account_id}/browser-rendering/devtools/browser/{session_id}/json/close/{target_id}` | Required |
| [Brapi](docs/api/brapi.html) | `load` | `GET /accounts/{account_id}/browser-rendering/devtools/browser/{session_id}/json/list/{target_id}` | Required |
| [Brapi](docs/api/brapi.html) | `load` | `GET /accounts/{account_id}/browser-rendering/devtools/browser/{session_id}/json/version` | Required |
| [Brapi](docs/api/brapi.html) | `load` | `GET /accounts/{account_id}/browser-rendering/devtools/session/{session_id}` | Required |
| [Brapi](docs/api/brapi.html) | `load` | `GET /accounts/{account_id}/browser-rendering/recording/{session_id}` | Required |
| [Brapi](docs/api/brapi.html) | `remove` | `DELETE /accounts/{account_id}/browser-rendering/crawl/{job_id}` | Required |
| [Brapi](docs/api/brapi.html) | `remove` | `DELETE /accounts/{account_id}/browser-rendering/devtools/browser/{session_id}` | Required |
| [Brapi](docs/api/brapi.html) | `update` | `PUT /accounts/{account_id}/browser-rendering/devtools/browser/{session_id}/json/new` | Required |
| [Build](docs/api/build.html) | `list` | `GET /accounts/{account_id}/builds/builds/{build_uuid}/logs` | Required |
| [Build](docs/api/build.html) | `list` | `GET /accounts/{account_id}/builds/builds/latest` | Required |
| [Build](docs/api/build.html) | `list` | `GET /accounts/{account_id}/builds/builds` | Required |
| [Build](docs/api/build.html) | `load` | `GET /accounts/{account_id}/builds/builds/{build_uuid}` | Required |
| [Build](docs/api/build.html) | `update` | `PUT /accounts/{account_id}/builds/builds/{build_uuid}/cancel` | Required |
| [BuildToken](docs/api/build_token.html) | `create` | `POST /accounts/{account_id}/builds/tokens` | Required |
| [BuildToken](docs/api/build_token.html) | `list` | `GET /accounts/{account_id}/builds/tokens` | Required |
| [BuildsApi](docs/api/builds_api.html) | `create` | `POST /accounts/{account_id}/builds/triggers/{trigger_uuid}/purge_build_cache` | Required |
| [BuildsApi](docs/api/builds_api.html) | `remove` | `DELETE /accounts/{account_id}/builds/triggers/{trigger_uuid}/environment_variables/{environment_variable_key}` | Required |
| [Connection](docs/api/connection.html) | `remove` | `DELETE /accounts/{account_id}/builds/repos/connections/{repo_connection_uuid}` | Required |
| [ContainerImage](docs/api/container_image.html) | `create` | `POST /accounts/{account_id}/containers/image-preparations` | Required |
| [ContainerInstance](docs/api/container_instance.html) | `list` | `GET /accounts/{account_id}/containers/applications/{application_id}/instances` | Required |
| [ContainerInstance](docs/api/container_instance.html) | `list` | `GET /accounts/{account_id}/containers/applications/{application_id}/instances-v2` | Required |
| [ContainerInstance](docs/api/container_instance.html) | `load` | `GET /accounts/{account_id}/containers/applications/{application_id}/instances/{instance_id}` | Required |
| [DeployHook](docs/api/deploy_hook.html) | `create` | `POST /accounts/{account_id}/builds/workers/{script_name}/deploy_hooks` | Required |
| [DeployHook](docs/api/deploy_hook.html) | `create` | `POST /workers/builds/deploy_hooks/{deploy_hook_uuid}` | Not required |
| [DeployHook](docs/api/deploy_hook.html) | `list` | `GET /accounts/{account_id}/builds/workers/{script_name}/deploy_hooks` | Required |
| [DeployHook](docs/api/deploy_hook.html) | `load` | `GET /accounts/{account_id}/builds/workers/{script_name}/deploy_hooks/{deploy_hook_uuid}` | Required |
| [DeployHook](docs/api/deploy_hook.html) | `remove` | `DELETE /accounts/{account_id}/builds/workers/{script_name}/deploy_hooks/{deploy_hook_uuid}` | Required |
| [DeployHook](docs/api/deploy_hook.html) | `update` | `PUT /accounts/{account_id}/builds/workers/{script_name}/deploy_hooks/{deploy_hook_uuid}` | Required |
| [Deployment](docs/api/deployment.html) | `remove` | `DELETE /accounts/{account_id}/workers/workers/{worker_id}/previews/{preview_id}/deployments/{deployment_id}` | Required |
| [Deployment](docs/api/deployment.html) | `remove` | `DELETE /accounts/{account_id}/workers/scripts/{script_name}/deployments/{deployment_id}` | Required |
| [Destination](docs/api/destination.html) | `create` | `POST /accounts/{account_id}/workers/observability/destinations` | Required |
| [Destination](docs/api/destination.html) | `list` | `GET /accounts/{account_id}/workers/observability/destinations` | Required |
| [Destination](docs/api/destination.html) | `remove` | `DELETE /accounts/{account_id}/workers/observability/destinations/{slug}` | Required |
| [Destination](docs/api/destination.html) | `update` | `PATCH /accounts/{account_id}/workers/observability/destinations/{slug}` | Required |
| [Domain](docs/api/domain.html) | `list` | `GET /accounts/{account_id}/workers/domains` | Required |
| [Domain](docs/api/domain.html) | `load` | `GET /accounts/{account_id}/workers/domains/{domain_id}` | Required |
| [Domain](docs/api/domain.html) | `remove` | `DELETE /accounts/{account_id}/workers/domains/{domain_id}` | Required |
| [Domain](docs/api/domain.html) | `update` | `PUT /accounts/{account_id}/workers/domains` | Required |
| [DurableObjectsNamespace](docs/api/durable_objects_namespace.html) | `create` | `POST /accounts/{account_id}/workers/durable_objects/namespaces/{id}/query/v2` | Required |
| [DurableObjectsNamespace](docs/api/durable_objects_namespace.html) | `list` | `GET /accounts/{account_id}/workers/durable_objects/namespaces/{id}/objects` | Required |
| [DurableObjectsNamespace](docs/api/durable_objects_namespace.html) | `list` | `GET /accounts/{account_id}/workers/durable_objects/namespaces` | Required |
| [EnvironmentVariable](docs/api/environment_variable.html) | `list` | `GET /accounts/{account_id}/builds/triggers/{trigger_uuid}/environment_variables` | Required |
| [EnvironmentVariable](docs/api/environment_variable.html) | `update` | `PATCH /accounts/{account_id}/builds/triggers/{trigger_uuid}/environment_variables` | Required |
| [GitHubIntegration](docs/api/git_hub_integration.html) | `list` | `GET /accounts/{account_id}/builds/repos/{provider_type}/{provider_account_id}/{repo_id}/config_autofill` | Required |
| [Hyperdrive](docs/api/hyperdrive.html) | `create` | `POST /accounts/{account_id}/hyperdrive/configs/{hyperdrive_id}/restart` | Required |
| [Hyperdrive](docs/api/hyperdrive.html) | `create` | `POST /accounts/{account_id}/hyperdrive/integrationsOperations/{integration}/createDatabaseSignature` | Required |
| [Hyperdrive](docs/api/hyperdrive.html) | `create` | `POST /accounts/{account_id}/hyperdrive/configs` | Required |
| [Hyperdrive](docs/api/hyperdrive.html) | `list` | `GET /accounts/{account_id}/hyperdrive/configs` | Required |
| [Hyperdrive](docs/api/hyperdrive.html) | `load` | `GET /accounts/{account_id}/hyperdrive/configs/{hyperdrive_id}` | Required |
| [Hyperdrive](docs/api/hyperdrive.html) | `patch` | `PATCH /accounts/{account_id}/hyperdrive/configs/{hyperdrive_id}` | Required |
| [Hyperdrive](docs/api/hyperdrive.html) | `remove` | `DELETE /accounts/{account_id}/hyperdrive/configs/{hyperdrive_id}` | Required |
| [Hyperdrive](docs/api/hyperdrive.html) | `update` | `PUT /accounts/{account_id}/hyperdrive/configs/{hyperdrive_id}` | Required |
| [ImageRegistry](docs/api/image_registry.html) | `create` | `POST /accounts/{account_id}/containers/registries/{domain}/credentials` | Required |
| [ImageRegistry](docs/api/image_registry.html) | `create` | `POST /accounts/{account_id}/containers/registries` | Required |
| [ImageRegistry](docs/api/image_registry.html) | `list` | `GET /accounts/{account_id}/containers/registries` | Required |
| [ImageRegistry](docs/api/image_registry.html) | `remove` | `DELETE /accounts/{account_id}/containers/registries/{domain}` | Required |
| [Issue](docs/api/issue.html) | `create` | `POST /accounts/{account_id}/workers/observability/issues/groups/{groupId}/members` | Required |
| [Issue](docs/api/issue.html) | `create` | `POST /accounts/{account_id}/workers/observability/issues/{issueId}/notification-runs` | Required |
| [Issue](docs/api/issue.html) | `create` | `POST /accounts/{account_id}/workers/observability/issues/automations` | Required |
| [Issue](docs/api/issue.html) | `create` | `POST /accounts/{account_id}/workers/observability/issues/groups` | Required |
| [Issue](docs/api/issue.html) | `list` | `GET /accounts/{account_id}/workers/observability/issues` | Required |
| [Issue](docs/api/issue.html) | `list` | `GET /accounts/{account_id}/workers/observability/issues/{issueId}/occurrences` | Required |
| [Issue](docs/api/issue.html) | `list` | `GET /accounts/{account_id}/workers/observability/issues/automations` | Required |
| [Issue](docs/api/issue.html) | `list` | `GET /accounts/{account_id}/workers/observability/issues/summary` | Required |
| [Issue](docs/api/issue.html) | `load` | `GET /accounts/{account_id}/workers/observability/issues/automations/{automationId}` | Required |
| [Issue](docs/api/issue.html) | `load` | `GET /accounts/{account_id}/workers/observability/issues/{issueId}` | Required |
| [Issue](docs/api/issue.html) | `patch` | `PATCH /accounts/{account_id}/workers/observability/issues/{issueId}` | Required |
| [Issue](docs/api/issue.html) | `remove` | `DELETE /accounts/{account_id}/workers/observability/issues/groups/{groupId}/members/{issueId}` | Required |
| [Issue](docs/api/issue.html) | `remove` | `DELETE /accounts/{account_id}/workers/observability/issues/automations/{automationId}` | Required |
| [Issue](docs/api/issue.html) | `remove` | `DELETE /accounts/{account_id}/workers/observability/issues/groups/{groupId}` | Required |
| [Issue](docs/api/issue.html) | `update` | `PUT /accounts/{account_id}/workers/observability/issues/automations/{automationId}` | Required |
| [Key](docs/api/key.html) | `create` | `POST /accounts/{account_id}/workers/observability/telemetry/keys` | Required |
| [LiveTail](docs/api/live_tail.html) | `create` | `POST /accounts/{account_id}/workers/observability/telemetry/live-tail` | Required |
| [LiveTail](docs/api/live_tail.html) | `create` | `POST /accounts/{account_id}/workers/observability/telemetry/live-tail/heartbeat` | Required |
| [MetricsExport](docs/api/metrics_export.html) | `create` | `POST /accounts/{account_id}/workers/observability/metricsexport` | Required |
| [MetricsExport](docs/api/metrics_export.html) | `list` | `GET /accounts/{account_id}/workers/observability/metricsexport` | Required |
| [Namespace](docs/api/namespace.html) | `remove` | `DELETE /accounts/{account_id}/workers/dispatch/namespaces/{dispatch_namespace}` | Required |
| [Preview](docs/api/preview.html) | `create` | `POST /accounts/{account_id}/workers/workers/{worker_id}/previews` | Required |
| [Preview](docs/api/preview.html) | `list` | `GET /accounts/{account_id}/workers/workers/{worker_id}/previews` | Required |
| [Preview](docs/api/preview.html) | `load` | `GET /accounts/{account_id}/workers/workers/{worker_id}/previews/{preview_id}` | Required |
| [Preview](docs/api/preview.html) | `patch` | `PATCH /accounts/{account_id}/workers/workers/{worker_id}/previews/{preview_id}` | Required |
| [Preview](docs/api/preview.html) | `remove` | `DELETE /accounts/{account_id}/workers/workers/{worker_id}/previews/{preview_id}` | Required |
| [Preview](docs/api/preview.html) | `update` | `PUT /accounts/{account_id}/workers/workers/{worker_id}/previews/{preview_id}` | Required |
| [PreviewDeployment](docs/api/preview_deployment.html) | `create` | `POST /accounts/{account_id}/workers/workers/{worker_id}/previews/{preview_id}/deployments` | Required |
| [PreviewDeployment](docs/api/preview_deployment.html) | `list` | `GET /accounts/{account_id}/workers/workers/{worker_id}/previews/{preview_id}/deployments` | Required |
| [PreviewDeployment](docs/api/preview_deployment.html) | `load` | `GET /accounts/{account_id}/workers/workers/{worker_id}/previews/{preview_id}/deployments/{deployment_id}` | Required |
| [PreviewDeployment](docs/api/preview_deployment.html) | `update` | `PATCH /accounts/{account_id}/workers/workers/{worker_id}/previews/{preview_id}/deployments/latest` | Required |
| [Query](docs/api/query.html) | `create` | `POST /accounts/{account_id}/workers/observability/telemetry/query` | Required |
| [RepositoryConnection](docs/api/repository_connection.html) | `update` | `PUT /accounts/{account_id}/builds/repos/connections` | Required |
| [Rollout](docs/api/rollout.html) | `create` | `POST /accounts/{account_id}/containers/applications/{application_id}/rollouts` | Required |
| [SavedQuery](docs/api/saved_query.html) | `create` | `POST /accounts/{account_id}/workers/observability/queries` | Required |
| [SavedQuery](docs/api/saved_query.html) | `list` | `GET /accounts/{account_id}/workers/observability/queries` | Required |
| [SavedQuery](docs/api/saved_query.html) | `load` | `GET /accounts/{account_id}/workers/observability/queries/{queryId}` | Required |
| [SavedQuery](docs/api/saved_query.html) | `remove` | `DELETE /accounts/{account_id}/workers/observability/queries/{queryId}` | Required |
| [SavedQuery](docs/api/saved_query.html) | `update` | `PATCH /accounts/{account_id}/workers/observability/queries/{queryId}` | Required |
| [Script](docs/api/script.html) | `remove` | `DELETE /accounts/{account_id}/workers/scripts/{script_name}` | Required |
| [ScriptSetting](docs/api/script_setting.html) | `list` | `GET /accounts/{account_id}/workers/scripts/{script_name}/script-settings` | Required |
| [ScriptSetting](docs/api/script_setting.html) | `update` | `PATCH /accounts/{account_id}/workers/scripts/{script_name}/script-settings` | Required |
| [Secret](docs/api/secret.html) | `create` | `POST /accounts/{account_id}/secrets_store/stores/{store_id}/secrets` | Required |
| [Secret](docs/api/secret.html) | `list` | `GET /accounts/{account_id}/secrets_store/stores/{store_id}/secrets` | Required |
| [Secret](docs/api/secret.html) | `load` | `GET /accounts/{account_id}/secrets_store/stores/{store_id}/secrets/{secret_id}` | Required |
| [Secret](docs/api/secret.html) | `remove` | `DELETE /accounts/{account_id}/secrets_store/stores/{store_id}/secrets/{secret_id}` | Required |
| [Secret](docs/api/secret.html) | `remove` | `DELETE /accounts/{account_id}/secrets_store/stores/{store_id}/secrets` | Required |
| [Secret](docs/api/secret.html) | `update` | `PATCH /accounts/{account_id}/secrets_store/stores/{store_id}/secrets/{secret_id}` | Required |
| [SecretsStoreDelete](docs/api/secrets_store_delete.html) | `remove` | `DELETE /accounts/{account_id}/secrets_store/stores/{store_id}` | Required |
| [SecretsStoreQuota](docs/api/secrets_store_quota.html) | `load` | `GET /accounts/{account_id}/secrets_store/quota` | Required |
| [SecretsStoreSecret](docs/api/secrets_store_secret.html) | `create` | `POST /accounts/{account_id}/secrets_store/stores/{store_id}/secrets/{secret_id}/duplicate` | Required |
| [SecretsStoreStore](docs/api/secrets_store_store.html) | `create` | `POST /accounts/{account_id}/secrets_store/stores` | Required |
| [SecretsStoreStore](docs/api/secrets_store_store.html) | `load` | `GET /accounts/{account_id}/secrets_store/stores/{store_id}` | Required |
| [SecretsStoreStoresResponseCollection](docs/api/secrets_store_stores_response_collection.html) | `list` | `GET /accounts/{account_id}/secrets_store/stores` | Required |
| [Setting](docs/api/setting.html) | `list` | `GET /accounts/{account_id}/workers/services/{service_name}/environments/{environment_name}/settings` | Required |
| [Setting](docs/api/setting.html) | `update` | `PATCH /accounts/{account_id}/workers/services/{service_name}/environments/{environment_name}/settings` | Required |
| [Shared](docs/api/shared.html) | `create` | `POST /accounts/{account_id}/workers/observability/shared/query` | Required |
| [Shared](docs/api/shared.html) | `load` | `GET /accounts/{account_id}/workers/observability/shared/query/{id}` | Required |
| [Tail](docs/api/tail.html) | `remove` | `DELETE /accounts/{account_id}/workers/scripts/{script_name}/tails/{id}` | Required |
| [Token](docs/api/token.html) | `remove` | `DELETE /accounts/{account_id}/builds/tokens/{build_token_uuid}` | Required |
| [Trigger](docs/api/trigger.html) | `create` | `POST /accounts/{account_id}/builds/triggers/{trigger_uuid}/builds` | Required |
| [Trigger](docs/api/trigger.html) | `create` | `POST /accounts/{account_id}/builds/triggers` | Required |
| [Trigger](docs/api/trigger.html) | `remove` | `DELETE /accounts/{account_id}/builds/triggers/{trigger_uuid}` | Required |
| [Trigger](docs/api/trigger.html) | `update` | `PATCH /accounts/{account_id}/builds/triggers/{trigger_uuid}` | Required |
| [Usage](docs/api/usage.html) | `list` | `GET /accounts/{account_id}/workers/observability/usage` | Required |
| [Value](docs/api/value.html) | `create` | `POST /accounts/{account_id}/workers/observability/telemetry/values` | Required |
| [Version](docs/api/version.html) | `create` | `POST /accounts/{account_id}/workers/workers/{worker_id}/versions` | Required |
| [Version](docs/api/version.html) | `list` | `GET /accounts/{account_id}/workers/workers/{worker_id}/versions` | Required |
| [Version](docs/api/version.html) | `list` | `GET /accounts/{account_id}/workers/workers/{worker_id}/versions/latest` | Required |
| [Version](docs/api/version.html) | `load` | `GET /accounts/{account_id}/workers/workers/{worker_id}/versions/{version_id}` | Required |
| [Version](docs/api/version.html) | `remove` | `DELETE /accounts/{account_id}/workers/workers/{worker_id}/versions/{version_id}` | Required |
| [Version](docs/api/version.html) | `update` | `PATCH /accounts/{account_id}/workers/workers/{worker_id}/versions/latest` | Required |
| [Worker](docs/api/worker.html) | `create` | `POST /accounts/{account_id}/builds/workers/{script_tag}/previews/{preview_id}/builds` | Required |
| [Worker](docs/api/worker.html) | `create` | `POST /accounts/{account_id}/builds/workers/{script_tag}/migrate_to_previews` | Required |
| [Worker](docs/api/worker.html) | `create` | `POST /accounts/{account_id}/builds/workers` | Required |
| [Worker](docs/api/worker.html) | `create` | `POST /accounts/{account_id}/workers/workers` | Required |
| [Worker](docs/api/worker.html) | `list` | `GET /accounts/{account_id}/workers/workers` | Required |
| [Worker](docs/api/worker.html) | `list` | `GET /accounts/{account_id}/builds/workers/{script_tag}/previews/{preview_id}/builds` | Required |
| [Worker](docs/api/worker.html) | `list` | `GET /accounts/{account_id}/builds/workers/{external_script_id}/builds` | Required |
| [Worker](docs/api/worker.html) | `list` | `GET /accounts/{account_id}/builds/workers/{script_tag}/previews` | Required |
| [Worker](docs/api/worker.html) | `list` | `GET /accounts/{account_id}/builds/workers/{external_script_id}/triggers` | Required |
| [Worker](docs/api/worker.html) | `load` | `GET /accounts/{account_id}/builds/workers/{script_tag}/previews/{preview_id}` | Required |
| [Worker](docs/api/worker.html) | `load` | `GET /accounts/{account_id}/builds/workers/{script_tag}` | Required |
| [Worker](docs/api/worker.html) | `load` | `GET /accounts/{account_id}/workers/workers/{worker_id}` | Required |
| [Worker](docs/api/worker.html) | `patch` | `PATCH /accounts/{account_id}/builds/workers/{script_tag}` | Required |
| [Worker](docs/api/worker.html) | `patch` | `PATCH /accounts/{account_id}/builds/workers/{script_tag}/previews/{preview_id}` | Required |
| [Worker](docs/api/worker.html) | `patch` | `PATCH /accounts/{account_id}/workers/workers/{worker_id}` | Required |
| [Worker](docs/api/worker.html) | `remove` | `DELETE /accounts/{account_id}/workers/workers/{worker_id}` | Required |
| [Worker](docs/api/worker.html) | `remove` | `DELETE /accounts/{account_id}/builds/workers/{script_tag}` | Required |
| [Worker](docs/api/worker.html) | `update` | `PUT /accounts/{account_id}/workers/workers/{worker_id}` | Required |
| [WorkerCronTrigger](docs/api/worker_cron_trigger.html) | `list` | `GET /accounts/{account_id}/workers/scripts/{script_name}/schedules` | Required |
| [WorkerCronTrigger](docs/api/worker_cron_trigger.html) | `update` | `PUT /accounts/{account_id}/workers/scripts/{script_name}/schedules` | Required |
| [WorkerDeployment](docs/api/worker_deployment.html) | `create` | `POST /accounts/{account_id}/workers/scripts/{script_name}/deployments` | Required |
| [WorkerDeployment](docs/api/worker_deployment.html) | `load` | `GET /accounts/{account_id}/workers/scripts/{script_name}/deployments` | Required |
| [WorkerDeployment](docs/api/worker_deployment.html) | `load` | `GET /accounts/{account_id}/workers/scripts/{script_name}/deployments/{deployment_id}` | Required |
| [WorkerEnvironment](docs/api/worker_environment.html) | `load` | `GET /accounts/{account_id}/workers/services/{service_name}/environments/{environment_name}/content` | Required |
| [WorkerRoute](docs/api/worker_route.html) | `create` | `POST /zones/{zone_id}/workers/routes` | Required |
| [WorkerRoute](docs/api/worker_route.html) | `list` | `GET /zones/{zone_id}/workers/routes` | Required |
| [WorkerRoute](docs/api/worker_route.html) | `load` | `GET /zones/{zone_id}/workers/routes/{route_id}` | Required |
| [WorkerRoute](docs/api/worker_route.html) | `remove` | `DELETE /zones/{zone_id}/workers/routes/{route_id}` | Required |
| [WorkerRoute](docs/api/worker_route.html) | `update` | `PUT /zones/{zone_id}/workers/routes/{route_id}` | Required |
| [WorkerScript](docs/api/worker_script.html) | `create` | `POST /accounts/{account_id}/workers/scripts/{script_name}/subdomain` | Required |
| [WorkerScript](docs/api/worker_script.html) | `list` | `GET /accounts/{account_id}/workers/scripts-search` | Required |
| [WorkerScript](docs/api/worker_script.html) | `list` | `GET /accounts/{account_id}/workers/scripts/{script_name}/secrets` | Required |
| [WorkerScript](docs/api/worker_script.html) | `list` | `GET /accounts/{account_id}/workers/scripts/{script_name}/subdomain` | Required |
| [WorkerScript](docs/api/worker_script.html) | `load` | `GET /accounts/{account_id}/workers/scripts/{script_name}/secrets/{secret_name}` | Required |
| [WorkerScript](docs/api/worker_script.html) | `load` | `GET /accounts/{account_id}/workers/scripts/{script_name}` | Required |
| [WorkerScript](docs/api/worker_script.html) | `load` | `GET /accounts/{account_id}/workers/scripts/{script_name}/content/v2` | Required |
| [WorkerScript](docs/api/worker_script.html) | `patch` | `PATCH /accounts/{account_id}/workers/scripts/{script_name}/secrets-bulk` | Required |
| [WorkerScript](docs/api/worker_script.html) | `remove` | `DELETE /accounts/{account_id}/workers/scripts/{script_name}/subdomain` | Required |
| [WorkerScript](docs/api/worker_script.html) | `update` | `PUT /accounts/{account_id}/workers/scripts/{script_name}` | Required |
| [WorkerScript](docs/api/worker_script.html) | `update` | `PUT /accounts/{account_id}/workers/scripts/{script_name}/secrets` | Required |
| [WorkerSubdomain](docs/api/worker_subdomain.html) | `list` | `GET /accounts/{account_id}/workers/subdomain` | Required |
| [WorkerSubdomain](docs/api/worker_subdomain.html) | `remove` | `DELETE /accounts/{account_id}/workers/subdomain` | Required |
| [WorkerSubdomain](docs/api/worker_subdomain.html) | `update` | `PUT /accounts/{account_id}/workers/subdomain` | Required |
| [WorkerTailLog](docs/api/worker_tail_log.html) | `create` | `POST /accounts/{account_id}/workers/scripts/{script_name}/tails` | Required |
| [WorkerTailLog](docs/api/worker_tail_log.html) | `list` | `GET /accounts/{account_id}/workers/scripts/{script_name}/tails` | Required |
| [WorkersAccountSetting](docs/api/workers_account_setting.html) | `list` | `GET /accounts/{account_id}/workers/account-settings` | Required |
| [WorkersAccountSetting](docs/api/workers_account_setting.html) | `update` | `PUT /accounts/{account_id}/workers/account-settings` | Required |
| [WorkersApiResponseNullResult](docs/api/workers_api_response_null_result.html) | `remove` | `DELETE /accounts/{account_id}/workers/dispatch/namespaces/{dispatch_namespace}/scripts/{script_name}/secrets/{secret_name}` | Required |
| [WorkersApiResponseNullResult](docs/api/workers_api_response_null_result.html) | `remove` | `DELETE /accounts/{account_id}/workers/dispatch/namespaces/{dispatch_namespace}/scripts/{script_name}` | Required |
| [WorkersApiResponseNullResult](docs/api/workers_api_response_null_result.html) | `remove` | `DELETE /accounts/{account_id}/workers/dispatch/namespaces/{dispatch_namespace}/scripts/{script_name}/tags/{tag}` | Required |
| [WorkersApiResponseNullResult](docs/api/workers_api_response_null_result.html) | `remove` | `DELETE /accounts/{account_id}/workers/scripts/{script_name}/secrets/{secret_name}` | Required |
| [WorkersApiResponseNullResult](docs/api/workers_api_response_null_result.html) | `update` | `PUT /accounts/{account_id}/workers/dispatch/namespaces/{dispatch_namespace}/scripts/{script_name}/tags/{tag}` | Required |
| [WorkersCompletedUploadAsset](docs/api/workers_completed_upload_asset.html) | `create` | `POST /accounts/{account_id}/workers/assets/upload` | Required |
| [WorkersCreateAssetsUploadSession](docs/api/workers_create_assets_upload_session.html) | `create` | `POST /accounts/{account_id}/workers/dispatch/namespaces/{dispatch_namespace}/scripts/{script_name}/assets-upload-session` | Required |
| [WorkersCreateAssetsUploadSession](docs/api/workers_create_assets_upload_session.html) | `create` | `POST /accounts/{account_id}/workers/scripts/{script_name}/assets-upload-session` | Required |
| [WorkersForPlatform](docs/api/workers_for_platform.html) | `list` | `GET /accounts/{account_id}/workers/dispatch/namespaces/{dispatch_namespace}/scripts` | Required |
| [WorkersForPlatform](docs/api/workers_for_platform.html) | `list` | `GET /accounts/{account_id}/workers/dispatch/namespaces/{dispatch_namespace}/scripts/{script_name}/bindings` | Required |
| [WorkersForPlatform](docs/api/workers_for_platform.html) | `list` | `GET /accounts/{account_id}/workers/dispatch/namespaces/{dispatch_namespace}/scripts/{script_name}/secrets` | Required |
| [WorkersForPlatform](docs/api/workers_for_platform.html) | `list` | `GET /accounts/{account_id}/workers/dispatch/namespaces/{dispatch_namespace}/scripts/{script_name}/settings` | Required |
| [WorkersForPlatform](docs/api/workers_for_platform.html) | `list` | `GET /accounts/{account_id}/workers/dispatch/namespaces/{dispatch_namespace}/scripts/{script_name}/tags` | Required |
| [WorkersForPlatform](docs/api/workers_for_platform.html) | `load` | `GET /accounts/{account_id}/workers/dispatch/namespaces/{dispatch_namespace}/scripts/{script_name}/secrets/{secret_name}` | Required |
| [WorkersForPlatform](docs/api/workers_for_platform.html) | `load` | `GET /accounts/{account_id}/workers/dispatch/namespaces/{dispatch_namespace}/scripts/{script_name}/content` | Required |
| [WorkersForPlatform](docs/api/workers_for_platform.html) | `patch` | `PATCH /accounts/{account_id}/workers/dispatch/namespaces/{dispatch_namespace}/scripts/{script_name}/settings` | Required |
| [WorkersForPlatform](docs/api/workers_for_platform.html) | `update` | `PUT /accounts/{account_id}/workers/dispatch/namespaces/{dispatch_namespace}/scripts/{script_name}` | Required |
| [WorkersForPlatform](docs/api/workers_for_platform.html) | `update` | `PUT /accounts/{account_id}/workers/dispatch/namespaces/{dispatch_namespace}/scripts/{script_name}/secrets` | Required |
| [WorkersForPlatform](docs/api/workers_for_platform.html) | `update` | `PUT /accounts/{account_id}/workers/dispatch/namespaces/{dispatch_namespace}/scripts/{script_name}/tags` | Required |
| [WorkersKvApiResponseCommonNoResult](docs/api/workers_kv_api_response_common_no_result.html) | `remove` | `DELETE /accounts/{account_id}/storage/kv/namespaces/{namespace_id}/values/{key_name}` | Required |
| [WorkersKvApiResponseCommonNoResult](docs/api/workers_kv_api_response_common_no_result.html) | `remove` | `DELETE /accounts/{account_id}/storage/kv/namespaces/{namespace_id}` | Required |
| [WorkersKvApiResponseCommonNoResult](docs/api/workers_kv_api_response_common_no_result.html) | `update` | `PUT /accounts/{account_id}/storage/kv/namespaces/{namespace_id}/values/{key_name}` | Required |
| [WorkersKvNamespace](docs/api/workers_kv_namespace.html) | `create` | `POST /accounts/{account_id}/storage/kv/namespaces/{namespace_id}/bulk/delete` | Required |
| [WorkersKvNamespace](docs/api/workers_kv_namespace.html) | `create` | `POST /accounts/{account_id}/storage/kv/namespaces/{namespace_id}/bulk/get` | Required |
| [WorkersKvNamespace](docs/api/workers_kv_namespace.html) | `create` | `POST /accounts/{account_id}/storage/kv/namespaces` | Required |
| [WorkersKvNamespace](docs/api/workers_kv_namespace.html) | `list` | `GET /accounts/{account_id}/storage/kv/namespaces/{namespace_id}/keys` | Required |
| [WorkersKvNamespace](docs/api/workers_kv_namespace.html) | `list` | `GET /accounts/{account_id}/storage/kv/namespaces` | Required |
| [WorkersKvNamespace](docs/api/workers_kv_namespace.html) | `load` | `GET /accounts/{account_id}/storage/kv/namespaces/{namespace_id}/metadata/{key_name}` | Required |
| [WorkersKvNamespace](docs/api/workers_kv_namespace.html) | `load` | `GET /accounts/{account_id}/storage/kv/namespaces/{namespace_id}/values/{key_name}` | Required |
| [WorkersKvNamespace](docs/api/workers_kv_namespace.html) | `load` | `GET /accounts/{account_id}/storage/kv/namespaces/{namespace_id}` | Required |
| [WorkersKvNamespace](docs/api/workers_kv_namespace.html) | `remove` | `DELETE /accounts/{account_id}/storage/kv/namespaces/{namespace_id}/bulk` | Required |
| [WorkersKvNamespace](docs/api/workers_kv_namespace.html) | `update` | `PUT /accounts/{account_id}/storage/kv/namespaces/{namespace_id}` | Required |
| [WorkersKvNamespace](docs/api/workers_kv_namespace.html) | `update` | `PUT /accounts/{account_id}/storage/kv/namespaces/{namespace_id}/bulk` | Required |
| [WorkersNamespaceList](docs/api/workers_namespace_list.html) | `list` | `GET /accounts/{account_id}/workers/dispatch/namespaces` | Required |
| [WorkersNamespaceScriptDeleteBulk](docs/api/workers_namespace_script_delete_bulk.html) | `remove` | `DELETE /accounts/{account_id}/workers/dispatch/namespaces/{dispatch_namespace}/scripts` | Required |
| [WorkersNamespaceScriptResponseSingle](docs/api/workers_namespace_script_response_single.html) | `load` | `GET /accounts/{account_id}/workers/dispatch/namespaces/{dispatch_namespace}/scripts/{script_name}` | Required |
| [WorkersNamespaceScriptResponseSingle](docs/api/workers_namespace_script_response_single.html) | `update` | `PATCH /accounts/{account_id}/workers/dispatch/namespaces/{dispatch_namespace}/scripts/{script_name}/secrets-bulk` | Required |
| [WorkersNamespaceSingle](docs/api/workers_namespace_single.html) | `create` | `POST /accounts/{account_id}/workers/dispatch/namespaces` | Required |
| [WorkersNamespaceSingle](docs/api/workers_namespace_single.html) | `load` | `GET /accounts/{account_id}/workers/dispatch/namespaces/{dispatch_namespace}` | Required |
| [WorkersNamespaceSingle](docs/api/workers_namespace_single.html) | `patch` | `PATCH /accounts/{account_id}/workers/dispatch/namespaces/{dispatch_namespace}` | Required |
| [WorkersNamespaceSingle](docs/api/workers_namespace_single.html) | `update` | `PUT /accounts/{account_id}/workers/dispatch/namespaces/{dispatch_namespace}` | Required |
| [WorkersPipelinesOther](docs/api/workers_pipelines_other.html) | `create` | `POST /accounts/{account_id}/pipelines` | Required |
| [WorkersPipelinesOther](docs/api/workers_pipelines_other.html) | `create` | `POST /accounts/{account_id}/pipelines/v1/pipelines` | Required |
| [WorkersPipelinesOther](docs/api/workers_pipelines_other.html) | `create` | `POST /accounts/{account_id}/pipelines/v1/sinks` | Required |
| [WorkersPipelinesOther](docs/api/workers_pipelines_other.html) | `create` | `POST /accounts/{account_id}/pipelines/v1/streams` | Required |
| [WorkersPipelinesOther](docs/api/workers_pipelines_other.html) | `create` | `POST /accounts/{account_id}/pipelines/v1/validate_sql` | Required |
| [WorkersPipelinesOther](docs/api/workers_pipelines_other.html) | `list` | `GET /accounts/{account_id}/pipelines/v1/sinks` | Required |
| [WorkersPipelinesOther](docs/api/workers_pipelines_other.html) | `list` | `GET /accounts/{account_id}/pipelines/v1/streams` | Required |
| [WorkersPipelinesOther](docs/api/workers_pipelines_other.html) | `list` | `GET /accounts/{account_id}/pipelines/v1/pipelines` | Required |
| [WorkersPipelinesOther](docs/api/workers_pipelines_other.html) | `list` | `GET /accounts/{account_id}/pipelines` | Required |
| [WorkersPipelinesOther](docs/api/workers_pipelines_other.html) | `load` | `GET /accounts/{account_id}/pipelines/v1/pipelines/{pipeline_id}` | Required |
| [WorkersPipelinesOther](docs/api/workers_pipelines_other.html) | `load` | `GET /accounts/{account_id}/pipelines/{pipeline_name}` | Required |
| [WorkersPipelinesOther](docs/api/workers_pipelines_other.html) | `load` | `GET /accounts/{account_id}/pipelines/v1/sinks/{sink_id}` | Required |
| [WorkersPipelinesOther](docs/api/workers_pipelines_other.html) | `load` | `GET /accounts/{account_id}/pipelines/v1/streams/{stream_id}` | Required |
| [WorkersPipelinesOther](docs/api/workers_pipelines_other.html) | `patch` | `PATCH /accounts/{account_id}/pipelines/v1/streams/{stream_id}` | Required |
| [WorkersPipelinesOther](docs/api/workers_pipelines_other.html) | `remove` | `DELETE /accounts/{account_id}/pipelines/v1/pipelines/{pipeline_id}` | Required |
| [WorkersPipelinesOther](docs/api/workers_pipelines_other.html) | `remove` | `DELETE /accounts/{account_id}/pipelines/{pipeline_name}` | Required |
| [WorkersPipelinesOther](docs/api/workers_pipelines_other.html) | `remove` | `DELETE /accounts/{account_id}/pipelines/v1/sinks/{sink_id}` | Required |
| [WorkersPipelinesOther](docs/api/workers_pipelines_other.html) | `remove` | `DELETE /accounts/{account_id}/pipelines/v1/streams/{stream_id}` | Required |
| [WorkersPipelinesOther](docs/api/workers_pipelines_other.html) | `update` | `PUT /accounts/{account_id}/pipelines/{pipeline_name}` | Required |
| [WorkersScriptAndVersionSetting](docs/api/workers_script_and_version_setting.html) | `list` | `GET /accounts/{account_id}/workers/scripts/{script_name}/settings` | Required |
| [WorkersScriptAndVersionSetting](docs/api/workers_script_and_version_setting.html) | `update` | `PATCH /accounts/{account_id}/workers/scripts/{script_name}/settings` | Required |
| [WorkersScriptResponseCollection](docs/api/workers_script_response_collection.html) | `list` | `GET /accounts/{account_id}/workers/scripts` | Required |
| [WorkersScriptResponseSingle](docs/api/workers_script_response_single.html) | `update` | `PUT /accounts/{account_id}/workers/services/{service_name}/environments/{environment_name}/content` | Required |
| [WorkersScriptResponseSingle](docs/api/workers_script_response_single.html) | `update` | `PUT /accounts/{account_id}/workers/dispatch/namespaces/{dispatch_namespace}/scripts/{script_name}/content` | Required |
| [WorkersScriptResponseSingle](docs/api/workers_script_response_single.html) | `update` | `PUT /accounts/{account_id}/workers/scripts/{script_name}/content` | Required |
| [WorkersSmartPlacement](docs/api/workers_smart_placement.html) | `list` | `GET /accounts/{account_id}/workers/placement/regions` | Required |
| [WorkersUsageModel](docs/api/workers_usage_model.html) | `list` | `GET /accounts/{account_id}/workers/scripts/{script_name}/usage-model` | Required |
| [WorkersUsageModel](docs/api/workers_usage_model.html) | `update` | `PUT /accounts/{account_id}/workers/scripts/{script_name}/usage-model` | Required |
| [WorkersVersionsList](docs/api/workers_versions_list.html) | `list` | `GET /accounts/{account_id}/workers/scripts/{script_name}/versions` | Required |
| [WorkersVersionsSingle](docs/api/workers_versions_single.html) | `load` | `GET /accounts/{account_id}/workers/scripts/{script_name}/versions/{version_id}` | Required |
| [WorkersVersionsUpload](docs/api/workers_versions_upload.html) | `create` | `POST /accounts/{account_id}/workers/scripts/{script_name}/versions` | Required |
| [Workflow](docs/api/workflow.html) | `create` | `POST /accounts/{account_id}/workflows/{workflow_name}/instances/{instance_id}/events/{event_type}` | Required |
| [Workflow](docs/api/workflow.html) | `create` | `POST /accounts/{account_id}/workflows/{workflow_name}/instances` | Required |
| [Workflow](docs/api/workflow.html) | `create` | `POST /accounts/{account_id}/workflows/{workflow_name}/instances/batch` | Required |
| [Workflow](docs/api/workflow.html) | `create` | `POST /accounts/{account_id}/workflows/{workflow_name}/instances/batch/delete` | Required |
| [Workflow](docs/api/workflow.html) | `create` | `POST /accounts/{account_id}/workflows/{workflow_name}/instances/batch/terminate` | Required |
| [Workflow](docs/api/workflow.html) | `list` | `GET /accounts/{account_id}/workflows/{workflow_name}/instances` | Required |
| [Workflow](docs/api/workflow.html) | `list` | `GET /accounts/{account_id}/workflows/{workflow_name}/instances/{instance_id}/step` | Required |
| [Workflow](docs/api/workflow.html) | `list` | `GET /accounts/{account_id}/workflows` | Required |
| [Workflow](docs/api/workflow.html) | `list` | `GET /accounts/{account_id}/workflows/{workflow_name}/versions` | Required |
| [Workflow](docs/api/workflow.html) | `list` | `GET /accounts/{account_id}/workflows/{workflow_name}/instances/{instance_id}/subscribe/token` | Required |
| [Workflow](docs/api/workflow.html) | `list` | `GET /accounts/{account_id}/workflows/{workflow_name}/versions/{version_id}/dag` | Required |
| [Workflow](docs/api/workflow.html) | `list` | `GET /accounts/{account_id}/workflows/{workflow_name}/versions/{version_id}/graph` | Required |
| [Workflow](docs/api/workflow.html) | `list` | `GET /accounts/{account_id}/workflows/{workflow_name}/instances/terminate` | Required |
| [Workflow](docs/api/workflow.html) | `list` | `GET /accounts/{account_id}/workflows/settings` | Required |
| [Workflow](docs/api/workflow.html) | `load` | `GET /accounts/{account_id}/workflows/{workflow_name}/instances/{instance_id}/subscribe` | Required |
| [Workflow](docs/api/workflow.html) | `load` | `GET /accounts/{account_id}/workflows/{workflow_name}/instances/{instance_id}` | Required |
| [Workflow](docs/api/workflow.html) | `load` | `GET /accounts/{account_id}/workflows/{workflow_name}/versions/{version_id}` | Required |
| [Workflow](docs/api/workflow.html) | `load` | `GET /accounts/{account_id}/workflows/{workflow_name}` | Required |
| [Workflow](docs/api/workflow.html) | `load` | `GET /accounts/{account_id}/triggers/{script_name}` | Required |
| [Workflow](docs/api/workflow.html) | `patch` | `PATCH /accounts/{account_id}/workflows/{workflow_name}/instances/{instance_id}/status` | Required |
| [Workflow](docs/api/workflow.html) | `patch` | `PATCH /accounts/{account_id}/triggers/{script_name}` | Required |
| [Workflow](docs/api/workflow.html) | `patch` | `PATCH /accounts/{account_id}/workflows/settings` | Required |
| [Workflow](docs/api/workflow.html) | `remove` | `DELETE /accounts/{account_id}/workflows/{workflow_name}/instances/{instance_id}` | Required |
| [Workflow](docs/api/workflow.html) | `remove` | `DELETE /accounts/{account_id}/workflows/{workflow_name}` | Required |
| [Workflow](docs/api/workflow.html) | `remove` | `DELETE /accounts/{account_id}/triggers/{script_name}` | Required |
| [Workflow](docs/api/workflow.html) | `update` | `PUT /accounts/{account_id}/workflows/{workflow_name}` | Required |
| [Workflow](docs/api/workflow.html) | `update` | `PUT /accounts/{account_id}/triggers/{script_name}` | Required |

## Connect to the API

- Client API: `https://api.cloudflare.com/client/v4`

The default credential is sent in the `X-Auth-Email` header.

Check authentication for the route you plan to call. A route that declares no authentication can be used without credentials; this does not change the requirements of other routes. Keep credentials in environment variables or a configured secret provider, and keep them out of source control and logs.

## Make a first request

1. Choose the API server and an operation that matches your task.
2. Check the operation’s required input and authentication. Use values valid for your account and environment.
3. Send one request and inspect the returned data before adding retries, concurrency, or a larger batch.

For an SDK call, install or build the chosen client, create a client instance with its documented configuration, and call the required entity operation. Language references describe the argument shape, asynchronous behaviour, and returned values.

## Choose an SDK

Choose the language already used by your application or service. The clients represent the same API model, while package setup, naming, and return types follow each language. Check the selected client’s reference and tests before integrating it into an existing application.

| Client | Repository directory | Distribution |
| --- | --- | --- |
| [Golang](docs/sdks/go.html) | `go/` | Build from source |
| [Lua](docs/sdks/lua.html) | `lua/` | Build from source |
| [PHP](docs/sdks/php.html) | `php/` | Build from source |
| [Python](docs/sdks/py.html) | `py/` | Build from source |
| [Ruby](docs/sdks/rb.html) | `rb/` | Build from source |
| [TypeScript](docs/sdks/ts.html) | `ts/` | Build from source |

Build-from-source entries are not marked as published in the project model. Follow the build instructions in that target’s README, then consume the resulting package using your language’s local dependency mechanism. Published entries give the installation command recorded for that client.

## Companion tools

These targets provide another way to use the API. Their available commands or tools can cover a smaller set of operations than the client libraries.

### [Go CLI](docs/tools/go-cli.html)

Use the command-line interface for shell-based tasks and scripts.

Repository directory: `go-cli/`. Not published. Build from the go-cli directory.


### [Go MCP server](docs/tools/go-mcp.html)

Use the MCP server to expose supported API operations to an MCP client.

Repository directory: `go-mcp/`. Not published. Build from the go-mcp directory.

- `cloudflare-workers_list`: List records for an entity. Supported entities: `account`, `application`, `brapi`, `build`, `build_token`, `container_instance`, `deploy_hook`, `destination`, `domain`, `durable_objects_namespace`, `environment_variable`, `git_hub_integration`, `hyperdrive`, `image_registry`, `issue`, `metrics_export`, `preview`, `preview_deployment`, `saved_query`, `script_setting`, `secret`, `secrets_store_stores_response_collection`, `setting`, `usage`, `version`, `worker`, `worker_cron_trigger`, `worker_route`, `worker_script`, `worker_subdomain`, `worker_tail_log`, `workers_account_setting`, `workers_for_platform`, `workers_kv_namespace`, `workers_namespace_list`, `workers_pipelines_other`, `workers_script_and_version_setting`, `workers_script_response_collection`, `workers_smart_placement`, `workers_usage_model`, `workers_versions_list`, `workflow`.
- `cloudflare-workers_load`: Load one record for an entity. Supported entities: `application`, `brapi`, `build`, `container_instance`, `deploy_hook`, `domain`, `hyperdrive`, `issue`, `preview`, `preview_deployment`, `saved_query`, `secret`, `secrets_store_quota`, `secrets_store_store`, `shared`, `version`, `worker`, `worker_deployment`, `worker_environment`, `worker_route`, `worker_script`, `workers_for_platform`, `workers_kv_namespace`, `workers_namespace_script_response_single`, `workers_namespace_single`, `workers_pipelines_other`, `workers_versions_single`, `workflow`.

## Operational features

Features supply behaviour around API calls, such as request handling, diagnostics, or local testing. Inclusion in this project does not mean a feature is enabled at runtime. Check the selected SDK’s supported features and configuration defaults, then enable the behaviour your application needs.

- [`test`](docs/features/test.html): In-memory mock transport for testing without a live server

Start with the default client configuration. Add request limits and diagnostics as needed, test error paths, and review retry behaviour before using operations that change data. A retry can repeat an operation unless the API provides a suitable guarantee.

## Continue with the documentation

- Follow the [first-call guide](docs/guides/first-call.html) for the setup sequence.
- Read the [authentication guide](docs/guides/authentication.html) before using protected routes.
- Use the [API reference](docs/api/index.html) for request schemas, response formats, and status codes.
- Check the chosen SDK or companion tool reference for its configuration and supported operations.

