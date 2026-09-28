-- Typed models for the CloudflareWorkers SDK (LuaLS annotations).
--
-- GENERATED from the API model: main.kit.entity.<e>.fields{} and per-op
-- params (op.<name>.points[].g.params[]). Field/param types come from the
-- canonical type sentinels via @voxgig/sdkgen canonToType (source of truth:
-- @voxgig/apidef VALID_CANON). Annotations only — no runtime effect. Do not
-- edit by hand.

---@class Account
---@field id? string

---@class AccountListMatch
---@field id string

---@class Application
---@field configuration? table
---@field constraints? table
---@field errors table
---@field id? string
---@field max_instances? number
---@field messages table
---@field observability? any
---@field result any
---@field result_info table
---@field rollout_active_grace_period? number
---@field success boolean

---@class ApplicationLoadMatch
---@field account_id string
---@field id string

---@class ApplicationListMatch
---@field account_id string
---@field image? string
---@field name? string
---@field page_token? string
---@field per_page? number

---@class ApplicationCreateData
---@field account_id string
---@field configuration? table
---@field constraints? table
---@field errors table
---@field id? string
---@field max_instances? number
---@field messages table
---@field observability? any
---@field result any
---@field result_info table
---@field rollout_active_grace_period? number
---@field success boolean

---@class ApplicationUpdateData
---@field account_id string
---@field id string
---@field configuration? table
---@field constraints? table
---@field errors? table
---@field max_instances? number
---@field messages? table
---@field observability? any
---@field result? any
---@field result_info? table
---@field rollout_active_grace_period? number
---@field success? boolean

---@class ApplicationRemoveMatch
---@field account_id string
---@field id string

---@class Brapi
---@field Browser string
---@field ProtocolVersion string
---@field UserAgent string
---@field V8Version string
---@field WebKitVersion string
---@field actionTimeout? number
---@field addScriptTag? table
---@field addStyleTag? table
---@field allowRequestPattern? table
---@field allowResourceTypes? table
---@field authenticate table
---@field bestAttempt? boolean
---@field closeReason? number
---@field closeReasonText? string
---@field commands? table
---@field connectionEndTime? number
---@field connectionId? string
---@field connectionStartTime? number
---@field cookies? table
---@field custom_ai? table
---@field dependencies? table
---@field description? string
---@field devtoolsFrontendUrl? string
---@field domain string
---@field elements table
---@field emulateMediaType? string
---@field endTime? number
---@field errors? table
---@field events? table
---@field excludeExternalLinks? boolean
---@field experimental? boolean
---@field formats? table
---@field gotoOptions? table
---@field guardrails? table
---@field html? string
---@field id string
---@field interestingOnly? boolean
---@field lastUpdated? number
---@field message string
---@field meta table
---@field pdfOptions? table
---@field prompt? string
---@field rejectRequestPattern? table
---@field rejectResourceTypes? table
---@field response_format table
---@field result table
---@field root? string
---@field screenshotOptions? table
---@field scrollPage? boolean
---@field selector? string
---@field sessionId string
---@field setExtraHTTPHeaders? table
---@field setJavaScriptEnabled? boolean
---@field startTime? number
---@field success boolean
---@field title? string
---@field type string
---@field types? table
---@field url string
---@field userAgent? string
---@field viewport table
---@field visibleLinksOnly? boolean
---@field waitForSelector table
---@field waitForTimeout? number
---@field webSocketDebuggerUrl? string

---@class BrapiLoadMatch
---@field account_id string
---@field job_id? string
---@field cache_ttl? number
---@field cursor? number
---@field limit? number
---@field status? string
---@field session_id? string
---@field keep_alive? number
---@field lab? boolean
---@field recording? boolean
---@field browser_id? string
---@field target_id? string
---@field recording_id? string
---@field format? string
---@field target? string

---@class BrapiListMatch
---@field account_id string
---@field browser_id? string
---@field live_view_url_expires_in_m? number
---@field limit? number
---@field offset? number

---@class BrapiCreateData
---@field account_id string
---@field keep_alive? number
---@field lab? boolean
---@field live_view_url_expires_in_m? number
---@field recording? boolean
---@field target? boolean
---@field cache_ttl? number
---@field Browser string
---@field ProtocolVersion string
---@field UserAgent string
---@field V8Version string
---@field WebKitVersion string
---@field actionTimeout? number
---@field addScriptTag? table
---@field addStyleTag? table
---@field allowRequestPattern? table
---@field allowResourceTypes? table
---@field authenticate table
---@field bestAttempt? boolean
---@field closeReason? number
---@field closeReasonText? string
---@field commands? table
---@field connectionEndTime? number
---@field connectionId? string
---@field connectionStartTime? number
---@field cookies? table
---@field custom_ai? table
---@field dependencies? table
---@field description? string
---@field devtoolsFrontendUrl? string
---@field domain string
---@field elements table
---@field emulateMediaType? string
---@field endTime? number
---@field errors? table
---@field events? table
---@field excludeExternalLinks? boolean
---@field experimental? boolean
---@field formats? table
---@field gotoOptions? table
---@field guardrails? table
---@field html? string
---@field id string
---@field interestingOnly? boolean
---@field lastUpdated? number
---@field message string
---@field meta table
---@field pdfOptions? table
---@field prompt? string
---@field rejectRequestPattern? table
---@field rejectResourceTypes? table
---@field response_format table
---@field result table
---@field root? string
---@field screenshotOptions? table
---@field scrollPage? boolean
---@field selector? string
---@field sessionId string
---@field setExtraHTTPHeaders? table
---@field setJavaScriptEnabled? boolean
---@field startTime? number
---@field success boolean
---@field title? string
---@field type string
---@field types? table
---@field url string
---@field userAgent? string
---@field viewport table
---@field visibleLinksOnly? boolean
---@field waitForSelector table
---@field waitForTimeout? number
---@field webSocketDebuggerUrl? string

---@class BrapiUpdateData
---@field account_id string
---@field browser_id string
---@field live_view_url_expires_in_m? number
---@field url? string
---@field Browser? string
---@field ProtocolVersion? string
---@field UserAgent? string
---@field V8Version? string
---@field WebKitVersion? string
---@field actionTimeout? number
---@field addScriptTag? table
---@field addStyleTag? table
---@field allowRequestPattern? table
---@field allowResourceTypes? table
---@field authenticate? table
---@field bestAttempt? boolean
---@field closeReason? number
---@field closeReasonText? string
---@field commands? table
---@field connectionEndTime? number
---@field connectionId? string
---@field connectionStartTime? number
---@field cookies? table
---@field custom_ai? table
---@field dependencies? table
---@field description? string
---@field devtoolsFrontendUrl? string
---@field domain? string
---@field elements? table
---@field emulateMediaType? string
---@field endTime? number
---@field errors? table
---@field events? table
---@field excludeExternalLinks? boolean
---@field experimental? boolean
---@field formats? table
---@field gotoOptions? table
---@field guardrails? table
---@field html? string
---@field id? string
---@field interestingOnly? boolean
---@field lastUpdated? number
---@field message? string
---@field meta? table
---@field pdfOptions? table
---@field prompt? string
---@field rejectRequestPattern? table
---@field rejectResourceTypes? table
---@field response_format? table
---@field result? table
---@field root? string
---@field screenshotOptions? table
---@field scrollPage? boolean
---@field selector? string
---@field sessionId? string
---@field setExtraHTTPHeaders? table
---@field setJavaScriptEnabled? boolean
---@field startTime? number
---@field success? boolean
---@field title? string
---@field type? string
---@field types? table
---@field userAgent? string
---@field viewport? table
---@field visibleLinksOnly? boolean
---@field waitForSelector? table
---@field waitForTimeout? number
---@field webSocketDebuggerUrl? string

---@class BrapiRemoveMatch
---@field account_id string
---@field job_id? string
---@field session_id? string

---@class Build
---@field errors table
---@field id? string
---@field messages table
---@field result table
---@field result_info? table
---@field success boolean

---@class BuildLoadMatch
---@field account_id string
---@field id string

---@class BuildListMatch
---@field account_id string
---@field version_id string

---@class BuildUpdateData
---@field account_id string
---@field id string
---@field errors? table
---@field messages? table
---@field result? table
---@field result_info? table
---@field success? boolean

---@class BuildToken
---@field build_token_name string
---@field build_token_secret string
---@field cloudflare_token_id string
---@field errors table
---@field messages table
---@field result table
---@field result_info? table
---@field success boolean

---@class BuildTokenListMatch
---@field account_id string
---@field page? number
---@field per_page? number

---@class BuildTokenCreateData
---@field account_id string
---@field build_token_name string
---@field build_token_secret string
---@field cloudflare_token_id string
---@field errors table
---@field messages table
---@field result table
---@field result_info? table
---@field success boolean

---@class BuildsApi
---@field errors table
---@field messages table
---@field result table
---@field result_info? table
---@field success boolean

---@class BuildsApiCreateData
---@field account_id string
---@field trigger_id string
---@field errors table
---@field messages table
---@field result table
---@field result_info? table
---@field success boolean

---@class BuildsApiRemoveMatch
---@field account_id string
---@field environment_variable_key string
---@field trigger_id string

---@class Connection
---@field id? string

---@class ConnectionRemoveMatch
---@field account_id string
---@field id string

---@class ContainerImage
---@field image string

---@class ContainerImageCreateData
---@field account_id string
---@field image string

---@class ContainerInstance
---@field errors table
---@field id? string
---@field messages table
---@field result any
---@field result_info table
---@field success boolean

---@class ContainerInstanceLoadMatch
---@field account_id string
---@field application_id string
---@field id string

---@class ContainerInstanceListMatch
---@field account_id string
---@field application_id string
---@field name_prefix? string
---@field page_token? string
---@field per_page? number
---@field state? string

---@class DeployHook
---@field branch string
---@field deploy_hook_name string
---@field errors table
---@field id? string
---@field messages table
---@field result table
---@field result_info? table
---@field success boolean

---@class DeployHookLoadMatch
---@field account_id string
---@field id string
---@field worker_id string

---@class DeployHookListMatch
---@field account_id string
---@field script_name string

---@class DeployHookCreateData
---@field id string
---@field branch string
---@field deploy_hook_name string
---@field errors table
---@field messages table
---@field result table
---@field result_info? table
---@field success boolean

---@class DeployHookUpdateData
---@field account_id string
---@field id string
---@field worker_id string
---@field branch? string
---@field deploy_hook_name? string
---@field errors? table
---@field messages? table
---@field result? table
---@field result_info? table
---@field success? boolean

---@class DeployHookRemoveMatch
---@field account_id string
---@field id string
---@field worker_id string

---@class Deployment
---@field id? string

---@class DeploymentRemoveMatch
---@field account_id string
---@field id string
---@field preview_id? string
---@field worker_id? string
---@field script_id? string

---@class Destination
---@field configuration table
---@field enabled boolean
---@field errors table
---@field id? string
---@field messages table
---@field name string
---@field result table
---@field skipPreflightCheck? boolean
---@field success boolean

---@class DestinationListMatch
---@field account_id string
---@field order? string
---@field order_by? string
---@field page? number
---@field per_page? number

---@class DestinationCreateData
---@field account_id string
---@field configuration table
---@field enabled boolean
---@field errors table
---@field id? string
---@field messages table
---@field name string
---@field result table
---@field skipPreflightCheck? boolean
---@field success boolean

---@class DestinationUpdateData
---@field account_id string
---@field id string
---@field configuration? table
---@field enabled? boolean
---@field errors? table
---@field messages? table
---@field name? string
---@field result? table
---@field skipPreflightCheck? boolean
---@field success? boolean

---@class DestinationRemoveMatch
---@field account_id string
---@field id string

---@class Domain
---@field errors table
---@field id? string
---@field messages table
---@field result table
---@field success boolean

---@class DomainLoadMatch
---@field account_id string
---@field id string

---@class DomainListMatch
---@field account_id string
---@field environment? string
---@field hostname? string
---@field service? string
---@field zone_id? string
---@field zone_name? string

---@class DomainUpdateData
---@field account_id string
---@field errors? table
---@field id? string
---@field messages? table
---@field result? table
---@field success? boolean

---@class DomainRemoveMatch
---@field account_id string
---@field id string

---@class DurableObjectsNamespace
---@field result? table
---@field result_info? table

---@class DurableObjectsNamespaceListMatch
---@field account_id string
---@field namespace_id? string
---@field cursor? string
---@field limit? number
---@field page? number
---@field per_page? number

---@class DurableObjectsNamespaceCreateData
---@field account_id string
---@field namespace_id string
---@field result? table
---@field result_info? table

---@class EnvironmentVariable
---@field errors table
---@field messages table
---@field result table
---@field result_info? table
---@field success boolean

---@class EnvironmentVariableListMatch
---@field account_id string
---@field trigger_id string

---@class EnvironmentVariableUpdateData
---@field account_id string
---@field trigger_id string
---@field errors? table
---@field messages? table
---@field result? table
---@field result_info? table
---@field success? boolean

---@class GitHubIntegration
---@field errors table
---@field messages table
---@field result table
---@field result_info? table
---@field success boolean

---@class GitHubIntegrationListMatch
---@field account_id string
---@field provider_account_id string
---@field provider_type string
---@field repo_id string
---@field branch string
---@field root_directory? string

---@class Hyperdrive
---@field caching? table
---@field created_on? string
---@field id string
---@field modified_on? string
---@field mtls? table
---@field name string
---@field origin table
---@field origin_connection_limit? number
---@field restarted_on? string
---@field result table

---@class HyperdriveLoadMatch
---@field account_id string
---@field hyperdrive_id string

---@class HyperdriveListMatch
---@field account_id string
---@field page? number
---@field per_page? number

---@class HyperdriveCreateData
---@field account_id string
---@field integration string
---@field caching? table
---@field created_on? string
---@field id string
---@field modified_on? string
---@field mtls? table
---@field name string
---@field origin table
---@field origin_connection_limit? number
---@field restarted_on? string
---@field result table

---@class HyperdriveUpdateData
---@field account_id string
---@field hyperdrive_id string
---@field caching? table
---@field created_on? string
---@field id? string
---@field modified_on? string
---@field mtls? table
---@field name? string
---@field origin? table
---@field origin_connection_limit? number
---@field restarted_on? string
---@field result? table

---@class HyperdriveRemoveMatch
---@field account_id string
---@field hyperdrive_id string

---@class ImageRegistry
---@field auth table
---@field domain string
---@field errors table
---@field expiration_minutes? number
---@field id? string
---@field is_public? boolean
---@field kind any
---@field messages table
---@field permissions? table
---@field result table
---@field success boolean

---@class ImageRegistryListMatch
---@field account_id string

---@class ImageRegistryCreateData
---@field account_id string
---@field domain? string
---@field auth table
---@field errors table
---@field expiration_minutes? number
---@field id? string
---@field is_public? boolean
---@field kind any
---@field messages table
---@field permissions? table
---@field result table
---@field success boolean

---@class ImageRegistryRemoveMatch
---@field account_id string
---@field id string

---@class Issue
---@field afterInactivitySeconds? number
---@field afterOccurrences? number
---@field enabled? boolean
---@field errors table
---@field id? string
---@field issueIds table
---@field messages table
---@field name? string
---@field policyId string
---@field result table
---@field result_info table
---@field service? string
---@field status? string
---@field success boolean
---@field title? string

---@class IssueLoadMatch
---@field account_id string
---@field automation_id? string
---@field id? string

---@class IssueListMatch
---@field account_id string
---@field order? string
---@field order_by? string
---@field page? number
---@field per_page? number
---@field search? string
---@field service? string
---@field status? string
---@field type? string

---@class IssueCreateData
---@field account_id string
---@field group_id string
---@field afterInactivitySeconds? number
---@field afterOccurrences? number
---@field enabled? boolean
---@field errors table
---@field id? string
---@field issueIds table
---@field messages table
---@field name? string
---@field policyId string
---@field result table
---@field result_info table
---@field service? string
---@field status? string
---@field success boolean
---@field title? string

---@class IssueUpdateData
---@field account_id string
---@field automation_id string
---@field afterInactivitySeconds? number
---@field afterOccurrences? number
---@field enabled? boolean
---@field errors? table
---@field id? string
---@field issueIds? table
---@field messages? table
---@field name? string
---@field policyId? string
---@field result? table
---@field result_info? table
---@field service? string
---@field status? string
---@field success? boolean
---@field title? string

---@class IssueRemoveMatch
---@field account_id string
---@field group_id? string
---@field issue_id? string
---@field automation_id? string

---@class Key
---@field datasets? table
---@field errors table
---@field filters? table
---@field from? number
---@field keyNeedle table
---@field limit? number
---@field messages table
---@field needle table
---@field result table
---@field success boolean
---@field to? number

---@class KeyCreateData
---@field account_id string
---@field datasets? table
---@field errors table
---@field filters? table
---@field from? number
---@field keyNeedle table
---@field limit? number
---@field messages table
---@field needle table
---@field result table
---@field success boolean
---@field to? number

---@class LiveTail
---@field errors table
---@field filterCombination? string
---@field filters? table
---@field messages table
---@field result table
---@field scriptId? string
---@field success boolean

---@class LiveTailCreateData
---@field account_id string
---@field errors table
---@field filterCombination? string
---@field filters? table
---@field messages table
---@field result table
---@field scriptId? string
---@field success boolean

---@class MetricsExport
---@field errors table
---@field messages table
---@field requester table
---@field resources table
---@field result table
---@field success boolean

---@class MetricsExportListMatch
---@field account_id string

---@class MetricsExportCreateData
---@field account_id string
---@field errors table
---@field messages table
---@field requester table
---@field resources table
---@field result table
---@field success boolean

---@class Namespace
---@field id? string

---@class NamespaceRemoveMatch
---@field account_id string
---@field id string

---@class Preview
---@field errors table
---@field id? string
---@field messages table
---@field result table
---@field success boolean

---@class PreviewLoadMatch
---@field account_id string
---@field id string
---@field worker_id string

---@class PreviewListMatch
---@field account_id string
---@field worker_id string
---@field name? string
---@field order? string
---@field order_by? string
---@field page? number
---@field per_page? number
---@field slug? string

---@class PreviewCreateData
---@field account_id string
---@field worker_id string
---@field ignore_base_config? boolean
---@field ignore_default? boolean
---@field errors table
---@field id? string
---@field messages table
---@field result table
---@field success boolean

---@class PreviewUpdateData
---@field account_id string
---@field id string
---@field worker_id string
---@field ignore_base_config? boolean
---@field ignore_default? boolean
---@field errors? table
---@field messages? table
---@field result? table
---@field success? boolean

---@class PreviewRemoveMatch
---@field account_id string
---@field id string
---@field worker_id string
---@field force? boolean

---@class PreviewDeployment
---@field errors table
---@field id? string
---@field messages table
---@field result any
---@field success boolean

---@class PreviewDeploymentLoadMatch
---@field account_id string
---@field id string
---@field preview_id string
---@field worker_id string
---@field include? string

---@class PreviewDeploymentListMatch
---@field account_id string
---@field id string
---@field worker_id string
---@field page? number
---@field per_page? number

---@class PreviewDeploymentCreateData
---@field account_id string
---@field id string
---@field worker_id string
---@field ignore_default? boolean
---@field errors table
---@field messages table
---@field result any
---@field success boolean

---@class PreviewDeploymentUpdateData
---@field account_id string
---@field preview_id string
---@field worker_id string
---@field ignore_default? boolean
---@field errors? table
---@field id? string
---@field messages? table
---@field result? any
---@field success? boolean

---@class Query
---@field chart? boolean
---@field chartType? string
---@field compare? boolean
---@field distributionScale? string
---@field dry? boolean
---@field errors table
---@field granularity? number
---@field ignoreSeries? boolean
---@field limit? number
---@field messages table
---@field offset? string
---@field offsetBy? number
---@field offsetDirection? string
---@field parameters? table
---@field queryId string
---@field result table
---@field success boolean
---@field timeframe table
---@field view? string

---@class QueryCreateData
---@field account_id string
---@field chart? boolean
---@field chartType? string
---@field compare? boolean
---@field distributionScale? string
---@field dry? boolean
---@field errors table
---@field granularity? number
---@field ignoreSeries? boolean
---@field limit? number
---@field messages table
---@field offset? string
---@field offsetBy? number
---@field offsetDirection? string
---@field parameters? table
---@field queryId string
---@field result table
---@field success boolean
---@field timeframe table
---@field view? string

---@class RepositoryConnection
---@field provider_account_id string
---@field provider_account_name string
---@field provider_type string
---@field repo_id string
---@field repo_name string

---@class RepositoryConnectionUpdateData
---@field account_id string
---@field provider_account_id? string
---@field provider_account_name? string
---@field provider_type? string
---@field repo_id? string
---@field repo_name? string

---@class Rollout
---@field description string
---@field kind? string
---@field percentage? number
---@field step_percentage? number
---@field steps? table
---@field strategy string
---@field target_configuration table

---@class RolloutCreateData
---@field account_id string
---@field application_id string
---@field description string
---@field kind? string
---@field percentage? number
---@field step_percentage? number
---@field steps? table
---@field strategy string
---@field target_configuration table

---@class SavedQuery
---@field description string
---@field errors table
---@field id? string
---@field messages table
---@field name string
---@field parameters table
---@field result table
---@field success boolean

---@class SavedQueryLoadMatch
---@field account_id string
---@field id string

---@class SavedQueryListMatch
---@field account_id string
---@field order? string
---@field order_by? string
---@field page? number
---@field per_page? number

---@class SavedQueryCreateData
---@field account_id string
---@field description string
---@field errors table
---@field id? string
---@field messages table
---@field name string
---@field parameters table
---@field result table
---@field success boolean

---@class SavedQueryUpdateData
---@field account_id string
---@field id string
---@field description? string
---@field errors? table
---@field messages? table
---@field name? string
---@field parameters? table
---@field result? table
---@field success? boolean

---@class SavedQueryRemoveMatch
---@field account_id string
---@field id string

---@class Script
---@field id? string

---@class ScriptRemoveMatch
---@field account_id string
---@field id string
---@field force? boolean

---@class ScriptSetting
---@field errors table
---@field logpush? boolean
---@field messages table
---@field observability? any
---@field result table
---@field success boolean
---@field tags? any
---@field tail_consumers? table

---@class ScriptSettingListMatch
---@field account_id string
---@field script_name string

---@class ScriptSettingUpdateData
---@field account_id string
---@field script_name string
---@field errors? table
---@field logpush? boolean
---@field messages? table
---@field observability? any
---@field result? table
---@field success? boolean
---@field tags? any
---@field tail_consumers? table

---@class Secret
---@field comment? string
---@field id? string
---@field result any
---@field scopes? table
---@field value? string

---@class SecretLoadMatch
---@field account_id string
---@field id string
---@field store_id string

---@class SecretListMatch
---@field account_id string
---@field store_id string
---@field direction? string
---@field order? string
---@field page? number
---@field per_page? number
---@field scope? table
---@field search? string

---@class SecretCreateData
---@field account_id string
---@field store_id string
---@field comment? string
---@field id? string
---@field result any
---@field scopes? table
---@field value? string

---@class SecretUpdateData
---@field account_id string
---@field id string
---@field store_id string
---@field comment? string
---@field result? any
---@field scopes? table
---@field value? string

---@class SecretRemoveMatch
---@field account_id string
---@field id? string
---@field store_id string

---@class SecretsStoreDelete

---@class SecretsStoreDeleteRemoveMatch
---@field account_id string
---@field store_id string
---@field force? boolean

---@class SecretsStoreQuota
---@field result any

---@class SecretsStoreQuotaLoadMatch
---@field account_id string

---@class SecretsStoreSecret
---@field comment? string
---@field name string
---@field scopes table

---@class SecretsStoreSecretCreateData
---@field account_id string
---@field secret_id string
---@field store_id string
---@field comment? string
---@field name string
---@field scopes table

---@class SecretsStoreStore
---@field id? string
---@field name string
---@field result any

---@class SecretsStoreStoreLoadMatch
---@field account_id string
---@field id string

---@class SecretsStoreStoreCreateData
---@field account_id string
---@field id? string
---@field name string
---@field result any

---@class SecretsStoreStoresResponseCollection
---@field result? table

---@class SecretsStoreStoresResponseCollectionListMatch
---@field account_id string
---@field direction? string
---@field order? string
---@field page? number
---@field per_page? number

---@class Setting
---@field errors table
---@field messages table
---@field result table
---@field success boolean

---@class SettingListMatch
---@field account_id string
---@field environment_name string
---@field service_id string

---@class SettingUpdateData
---@field account_id string
---@field environment_name string
---@field service_id string
---@field errors? table
---@field messages? table
---@field result? table
---@field success? boolean

---@class Shared
---@field errors table
---@field id? string
---@field messages table
---@field result table
---@field success boolean

---@class SharedLoadMatch
---@field account_id string
---@field id string
---@field view? string

---@class SharedCreateData
---@field account_id string
---@field errors table
---@field id? string
---@field messages table
---@field result table
---@field success boolean

---@class Tail
---@field id? string

---@class TailRemoveMatch
---@field account_id string
---@field id string
---@field script_id string

---@class Token
---@field id? string

---@class TokenRemoveMatch
---@field account_id string
---@field id string

---@class Trigger
---@field branch_excludes table
---@field branch_includes table
---@field build_caching_enabled? boolean
---@field build_command string
---@field build_token_uuid string
---@field deploy_command string
---@field external_script_id string
---@field id? string
---@field path_excludes table
---@field path_includes table
---@field repo_connection_uuid string
---@field root_directory string
---@field trigger_name string

---@class TriggerCreateData
---@field account_id string
---@field branch_excludes table
---@field branch_includes table
---@field build_caching_enabled? boolean
---@field build_command string
---@field build_token_uuid string
---@field deploy_command string
---@field external_script_id string
---@field id? string
---@field path_excludes table
---@field path_includes table
---@field repo_connection_uuid string
---@field root_directory string
---@field trigger_name string

---@class TriggerUpdateData
---@field account_id string
---@field id string
---@field branch_excludes? table
---@field branch_includes? table
---@field build_caching_enabled? boolean
---@field build_command? string
---@field build_token_uuid? string
---@field deploy_command? string
---@field external_script_id? string
---@field path_excludes? table
---@field path_includes? table
---@field repo_connection_uuid? string
---@field root_directory? string
---@field trigger_name? string

---@class TriggerRemoveMatch
---@field account_id string
---@field id string

---@class Usage
---@field errors table
---@field messages table
---@field result table
---@field success boolean

---@class UsageListMatch
---@field account_id string
---@field from string
---@field to string

---@class Value
---@field datasets table
---@field errors table
---@field filters? table
---@field key string
---@field limit? number
---@field messages table
---@field needle table
---@field result table
---@field success boolean
---@field timeframe table
---@field type string

---@class ValueCreateData
---@field account_id string
---@field datasets table
---@field errors table
---@field filters? table
---@field key string
---@field limit? number
---@field messages table
---@field needle table
---@field result table
---@field success boolean
---@field timeframe table
---@field type string

---@class Version
---@field annotations? table
---@field assets? table
---@field author_email? string
---@field author_id? string
---@field bindings? table
---@field cache_options table
---@field compatibility_date? string
---@field compatibility_flags? table
---@field containers? table
---@field created_on string
---@field errors table
---@field exports? any
---@field exports_reconciliation? any
---@field id string
---@field limits? table
---@field main_module? string
---@field messages table
---@field migration_tag? string
---@field migrations? any
---@field modules? table
---@field number number
---@field package_dependencies? table
---@field placement? table
---@field result table
---@field source? string
---@field startup_time_ms? number
---@field success boolean
---@field urls table
---@field usage_model? string

---@class VersionLoadMatch
---@field account_id string
---@field id string
---@field worker_id string
---@field include? string

---@class VersionListMatch
---@field account_id string
---@field worker_id string
---@field page? number
---@field per_page? number

---@class VersionCreateData
---@field account_id string
---@field worker_id string
---@field deploy? boolean
---@field annotations? table
---@field assets? table
---@field author_email? string
---@field author_id? string
---@field bindings? table
---@field cache_options table
---@field compatibility_date? string
---@field compatibility_flags? table
---@field containers? table
---@field created_on string
---@field errors table
---@field exports? any
---@field exports_reconciliation? any
---@field id string
---@field limits? table
---@field main_module? string
---@field messages table
---@field migration_tag? string
---@field migrations? any
---@field modules? table
---@field number number
---@field package_dependencies? table
---@field placement? table
---@field result table
---@field source? string
---@field startup_time_ms? number
---@field success boolean
---@field urls table
---@field usage_model? string

---@class VersionUpdateData
---@field account_id string
---@field worker_id string
---@field deploy? boolean
---@field annotations? table
---@field assets? table
---@field author_email? string
---@field author_id? string
---@field bindings? table
---@field cache_options? table
---@field compatibility_date? string
---@field compatibility_flags? table
---@field containers? table
---@field created_on? string
---@field errors? table
---@field exports? any
---@field exports_reconciliation? any
---@field id? string
---@field limits? table
---@field main_module? string
---@field messages? table
---@field migration_tag? string
---@field migrations? any
---@field modules? table
---@field number? number
---@field package_dependencies? table
---@field placement? table
---@field result? table
---@field source? string
---@field startup_time_ms? number
---@field success? boolean
---@field urls? table
---@field usage_model? string

---@class VersionRemoveMatch
---@field account_id string
---@field id string
---@field worker_id string

---@class Worker
---@field auto_build? boolean
---@field auto_delete? boolean
---@field branch? any
---@field commit_hash? any
---@field errors table
---@field git_repository any
---@field id? string
---@field messages table
---@field previews_base_config table
---@field previews_enabled boolean
---@field production_settings table
---@field result table
---@field result_info? table
---@field script_tag string
---@field seed_repo? any
---@field settings? table
---@field success boolean

---@class WorkerLoadMatch
---@field account_id string
---@field preview_id? string
---@field worker_id? string
---@field id? string

---@class WorkerListMatch
---@field account_id string
---@field order? string
---@field order_by? string
---@field page? number
---@field per_page? number
---@field preview_id? string
---@field worker_id? string

---@class WorkerCreateData
---@field account_id string
---@field preview_id? string
---@field worker_id? string
---@field auto_build? boolean
---@field auto_delete? boolean
---@field branch? any
---@field commit_hash? any
---@field errors table
---@field git_repository any
---@field id? string
---@field messages table
---@field previews_base_config table
---@field previews_enabled boolean
---@field production_settings table
---@field result table
---@field result_info? table
---@field script_tag string
---@field seed_repo? any
---@field settings? table
---@field success boolean

---@class WorkerUpdateData
---@field account_id string
---@field id string
---@field auto_build? boolean
---@field auto_delete? boolean
---@field branch? any
---@field commit_hash? any
---@field errors? table
---@field git_repository? any
---@field messages? table
---@field previews_base_config? table
---@field previews_enabled? boolean
---@field production_settings? table
---@field result? table
---@field result_info? table
---@field script_tag? string
---@field seed_repo? any
---@field settings? table
---@field success? boolean

---@class WorkerRemoveMatch
---@field account_id string
---@field id string
---@field force? boolean

---@class WorkerCronTrigger
---@field errors table
---@field messages table
---@field result table
---@field success boolean

---@class WorkerCronTriggerListMatch
---@field account_id string
---@field script_name string

---@class WorkerCronTriggerUpdateData
---@field account_id string
---@field script_name string
---@field errors? table
---@field messages? table
---@field result? table
---@field success? boolean

---@class WorkerDeployment
---@field annotations? table
---@field author_email? string
---@field created_on string
---@field errors table
---@field id string
---@field messages table
---@field result table
---@field source string
---@field strategy string
---@field success boolean
---@field versions table

---@class WorkerDeploymentLoadMatch
---@field account_id string
---@field script_name? string
---@field page? number
---@field per_page? number
---@field since? string
---@field until? string
---@field id? string
---@field script_id? string

---@class WorkerDeploymentCreateData
---@field account_id string
---@field script_name string
---@field force? boolean
---@field annotations? table
---@field author_email? string
---@field created_on string
---@field errors table
---@field id string
---@field messages table
---@field result table
---@field source string
---@field strategy string
---@field success boolean
---@field versions table

---@class WorkerEnvironment

---@class WorkerEnvironmentLoadMatch
---@field account_id string
---@field environment_name string
---@field service_id string

---@class WorkerRoute
---@field errors table
---@field id string
---@field messages table
---@field pattern string
---@field result table
---@field script? string
---@field success boolean

---@class WorkerRouteLoadMatch
---@field id string
---@field zone_id string

---@class WorkerRouteListMatch
---@field zone_id string

---@class WorkerRouteCreateData
---@field zone_id string
---@field errors table
---@field id string
---@field messages table
---@field pattern string
---@field result table
---@field script? string
---@field success boolean

---@class WorkerRouteUpdateData
---@field id string
---@field zone_id string
---@field errors? table
---@field messages? table
---@field pattern? string
---@field result? table
---@field script? string
---@field success? boolean

---@class WorkerRouteRemoveMatch
---@field id string
---@field zone_id string

---@class WorkerScript
---@field errors table
---@field id? string
---@field messages table
---@field result? table
---@field success boolean

---@class WorkerScriptLoadMatch
---@field account_id string
---@field script_id? string
---@field secret_name? string
---@field url_encoded? boolean
---@field id? string

---@class WorkerScriptListMatch
---@field account_id string
---@field id? string
---@field name? string
---@field order_by? string
---@field page? number
---@field per_page? number
---@field script_name? string

---@class WorkerScriptCreateData
---@field account_id string
---@field script_name string
---@field errors table
---@field id? string
---@field messages table
---@field result? table
---@field success boolean

---@class WorkerScriptUpdateData
---@field account_id string
---@field id? string
---@field bindings_inherit? string
---@field script_name? string
---@field errors? table
---@field messages? table
---@field result? table
---@field success? boolean

---@class WorkerScriptRemoveMatch
---@field account_id string
---@field script_name string

---@class WorkerSubdomain
---@field errors table
---@field messages table
---@field result table
---@field subdomain string
---@field success boolean

---@class WorkerSubdomainListMatch
---@field account_id string

---@class WorkerSubdomainUpdateData
---@field account_id string
---@field errors? table
---@field messages? table
---@field result? table
---@field subdomain? string
---@field success? boolean

---@class WorkerSubdomainRemoveMatch
---@field account_id string

---@class WorkerTailLog
---@field errors table
---@field messages table
---@field result table
---@field success boolean

---@class WorkerTailLogListMatch
---@field account_id string
---@field script_name string

---@class WorkerTailLogCreateData
---@field account_id string
---@field script_name string
---@field errors table
---@field messages table
---@field result table
---@field success boolean

---@class WorkersAccountSetting
---@field default_usage_model? string
---@field errors table
---@field green_compute? boolean
---@field messages table
---@field result table
---@field success boolean

---@class WorkersAccountSettingListMatch
---@field account_id string

---@class WorkersAccountSettingUpdateData
---@field account_id string
---@field default_usage_model? string
---@field errors? table
---@field green_compute? boolean
---@field messages? table
---@field result? table
---@field success? boolean

---@class WorkersApiResponseNullResult
---@field errors table
---@field messages table
---@field result? table
---@field success boolean

---@class WorkersApiResponseNullResultUpdateData
---@field account_id string
---@field namespace_id string
---@field script_id string
---@field tag string
---@field errors? table
---@field messages? table
---@field result? table
---@field success? boolean

---@class WorkersApiResponseNullResultRemoveMatch
---@field account_id string
---@field namespace_id? string
---@field script_id? string
---@field secret_name? string
---@field url_encoded? boolean
---@field script_name? string
---@field force? boolean
---@field tag? string

---@class WorkersCompletedUploadAsset

---@class WorkersCompletedUploadAssetCreateData
---@field account_id string
---@field base64 boolean

---@class WorkersCreateAssetsUploadSession
---@field manifest table

---@class WorkersCreateAssetsUploadSessionCreateData
---@field account_id string
---@field namespace_id? string
---@field script_name string
---@field manifest table

---@class WorkersForPlatform
---@field errors table
---@field messages table
---@field result table
---@field success boolean

---@class WorkersForPlatformLoadMatch
---@field account_id string
---@field namespace_id string
---@field script_id? string
---@field secret_name? string
---@field url_encoded? boolean
---@field script_name? string

---@class WorkersForPlatformListMatch
---@field account_id string
---@field dispatch_namespace? string
---@field tag? string
---@field namespace_id? string
---@field script_name? string

---@class WorkersForPlatformUpdateData
---@field account_id string
---@field namespace_id string
---@field script_name string
---@field bindings_inherit? string
---@field errors? table
---@field messages? table
---@field result? table
---@field success? boolean

---@class WorkersKvApiResponseCommonNoResult

---@class WorkersKvApiResponseCommonNoResultUpdateData
---@field account_id string
---@field key_name string
---@field namespace_id string
---@field expiration? number
---@field expiration_ttl? number

---@class WorkersKvApiResponseCommonNoResultRemoveMatch
---@field account_id string
---@field key_name? string
---@field namespace_id string

---@class WorkersKvNamespace
---@field errors table
---@field id? string
---@field jurisdiction? string
---@field keys table
---@field messages table
---@field result? any
---@field result_info? table
---@field success boolean
---@field title string
---@field type? string
---@field withMetadata? boolean

---@class WorkersKvNamespaceLoadMatch
---@field account_id string
---@field key_name? string
---@field namespace_id? string
---@field id? string

---@class WorkersKvNamespaceListMatch
---@field account_id string
---@field namespace_id? string
---@field cursor? string
---@field limit? number
---@field prefix? string
---@field direction? string
---@field order? string
---@field page? number
---@field per_page? number

---@class WorkersKvNamespaceCreateData
---@field account_id string
---@field namespace_id? string
---@field errors table
---@field id? string
---@field jurisdiction? string
---@field keys table
---@field messages table
---@field result? any
---@field result_info? table
---@field success boolean
---@field title string
---@field type? string
---@field withMetadata? boolean

---@class WorkersKvNamespaceUpdateData
---@field account_id string
---@field id? string
---@field namespace_id? string
---@field errors? table
---@field jurisdiction? string
---@field keys? table
---@field messages? table
---@field result? any
---@field result_info? table
---@field success? boolean
---@field title? string
---@field type? string
---@field withMetadata? boolean

---@class WorkersKvNamespaceRemoveMatch
---@field account_id string
---@field namespace_id string

---@class WorkersNamespaceList
---@field errors table
---@field messages table
---@field result? table
---@field success boolean

---@class WorkersNamespaceListListMatch
---@field account_id string

---@class WorkersNamespaceScriptDeleteBulk

---@class WorkersNamespaceScriptDeleteBulkRemoveMatch
---@field account_id string
---@field dispatch_namespace string
---@field limit? number
---@field tag string

---@class WorkersNamespaceScriptResponseSingle
---@field errors table
---@field messages table
---@field result table
---@field success boolean

---@class WorkersNamespaceScriptResponseSingleLoadMatch
---@field account_id string
---@field namespace_id string
---@field script_name string

---@class WorkersNamespaceScriptResponseSingleUpdateData
---@field account_id string
---@field namespace_id string
---@field script_name string
---@field errors? table
---@field messages? table
---@field result? table
---@field success? boolean

---@class WorkersNamespaceSingle
---@field errors table
---@field messages table
---@field name? string
---@field result? table
---@field success boolean
---@field trusted_workers? boolean

---@class WorkersNamespaceSingleLoadMatch
---@field account_id string
---@field dispatch_namespace string

---@class WorkersNamespaceSingleCreateData
---@field account_id string
---@field errors table
---@field messages table
---@field name? string
---@field result? table
---@field success boolean
---@field trusted_workers? boolean

---@class WorkersNamespaceSingleUpdateData
---@field account_id string
---@field dispatch_namespace string
---@field errors? table
---@field messages? table
---@field name? string
---@field result? table
---@field success? boolean
---@field trusted_workers? boolean

---@class WorkersPipelinesOther
---@field config? any
---@field created_at string
---@field destination table
---@field endpoint string
---@field failure_reason? string
---@field format? any
---@field graph table
---@field http table
---@field id string
---@field modified_at string
---@field name string
---@field schema? table
---@field source table
---@field sql string
---@field status string
---@field tables table
---@field type string
---@field version number
---@field worker_binding table

---@class WorkersPipelinesOtherLoadMatch
---@field account_id string
---@field pipeline_id? string
---@field pipeline_name? string
---@field sink_id? string
---@field stream_id? string

---@class WorkersPipelinesOtherListMatch
---@field account_id string
---@field name? string
---@field page? number
---@field per_page? number
---@field pipeline_id? string
---@field search? string

---@class WorkersPipelinesOtherCreateData
---@field account_id string
---@field config? any
---@field created_at string
---@field destination table
---@field endpoint string
---@field failure_reason? string
---@field format? any
---@field graph table
---@field http table
---@field id string
---@field modified_at string
---@field name string
---@field schema? table
---@field source table
---@field sql string
---@field status string
---@field tables table
---@field type string
---@field version number
---@field worker_binding table

---@class WorkersPipelinesOtherUpdateData
---@field account_id string
---@field pipeline_name string
---@field config? any
---@field created_at? string
---@field destination? table
---@field endpoint? string
---@field failure_reason? string
---@field format? any
---@field graph? table
---@field http? table
---@field id? string
---@field modified_at? string
---@field name? string
---@field schema? table
---@field source? table
---@field sql? string
---@field status? string
---@field tables? table
---@field type? string
---@field version? number
---@field worker_binding? table

---@class WorkersPipelinesOtherRemoveMatch
---@field account_id string
---@field pipeline_id? string
---@field pipeline_name? string
---@field sink_id? string
---@field stream_id? string

---@class WorkersScriptAndVersionSetting
---@field errors table
---@field messages table
---@field result table
---@field success boolean

---@class WorkersScriptAndVersionSettingListMatch
---@field account_id string
---@field script_name string

---@class WorkersScriptAndVersionSettingUpdateData
---@field account_id string
---@field script_name string
---@field errors? table
---@field messages? table
---@field result? table
---@field success? boolean

---@class WorkersScriptResponseCollection
---@field errors table
---@field messages table
---@field result table
---@field success boolean

---@class WorkersScriptResponseCollectionListMatch
---@field account_id string
---@field tag? string

---@class WorkersScriptResponseSingle

---@class WorkersScriptResponseSingleUpdateData
---@field account_id string
---@field environment_name? string
---@field service_id? string
---@field namespace_id? string
---@field script_name? string

---@class WorkersSmartPlacement
---@field errors table
---@field messages table
---@field result table
---@field success boolean

---@class WorkersSmartPlacementListMatch
---@field account_id string

---@class WorkersUsageModel
---@field errors table
---@field messages table
---@field result table
---@field success boolean
---@field usage_model? string
---@field user_limits? table

---@class WorkersUsageModelListMatch
---@field account_id string
---@field script_name string

---@class WorkersUsageModelUpdateData
---@field account_id string
---@field script_name string
---@field errors? table
---@field messages? table
---@field result? table
---@field success? boolean
---@field usage_model? string
---@field user_limits? table

---@class WorkersVersionsList
---@field errors table
---@field messages table
---@field result table
---@field success boolean

---@class WorkersVersionsListListMatch
---@field account_id string
---@field script_name string
---@field deployable? boolean
---@field page? number
---@field per_page? number

---@class WorkersVersionsSingle
---@field errors table
---@field messages table
---@field result any
---@field success boolean

---@class WorkersVersionsSingleLoadMatch
---@field account_id string
---@field script_id string
---@field version_id string

---@class WorkersVersionsUpload

---@class WorkersVersionsUploadCreateData
---@field account_id string
---@field script_name string
---@field bindings_inherit? string

---@class Workflow
---@field class_name string
---@field concurrency? table
---@field default_retention? table
---@field errors table
---@field id? string
---@field instances table
---@field limits? table
---@field messages table
---@field result table
---@field result_info table
---@field schedules? table
---@field script_name string
---@field success boolean

---@class WorkflowLoadMatch
---@field account_id string
---@field instance_id? string
---@field workflow_id? string
---@field cursor? number
---@field filter? table
---@field order? string
---@field simple? string
---@field version_id? string
---@field id? string
---@field script_name? string

---@class WorkflowListMatch
---@field account_id string
---@field instance_id? string
---@field workflow_id? string
---@field attempt? number
---@field name? string
---@field type? string
---@field page? number
---@field per_page? number
---@field search? string
---@field version_id? string

---@class WorkflowCreateData
---@field account_id string
---@field event_type? string
---@field instance_id? string
---@field workflow_id string
---@field class_name string
---@field concurrency? table
---@field default_retention? table
---@field errors table
---@field id? string
---@field instances table
---@field limits? table
---@field messages table
---@field result table
---@field result_info table
---@field schedules? table
---@field script_name string
---@field success boolean

---@class WorkflowUpdateData
---@field account_id string
---@field id? string
---@field script_name? string
---@field class_name? string
---@field concurrency? table
---@field default_retention? table
---@field errors? table
---@field instances? table
---@field limits? table
---@field messages? table
---@field result? table
---@field result_info? table
---@field schedules? table
---@field success? boolean

---@class WorkflowRemoveMatch
---@field account_id string
---@field instance_id? string
---@field workflow_id? string
---@field id? string
---@field script_name? string

local M = {}

return M
