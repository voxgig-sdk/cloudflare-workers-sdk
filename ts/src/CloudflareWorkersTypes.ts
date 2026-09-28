// Typed models for the CloudflareWorkers SDK.
//
// GENERATED from the API model: main.kit.entity.<e>.fields{} and per-op
// params (op.<name>.points[].g.params[]). Field/param types come from the
// canonical type sentinels via @voxgig/sdkgen canonToType (source of truth:
// @voxgig/apidef VALID_CANON). Do not edit by hand.

export interface Account {
  id?: string
}

export interface AccountListMatch {
  id: string

  // Selects a custom action instead of the plain list:
  //   'limit'
  // The remaining keys are that action's own payload.
  $action?: string
  [action: string]: any
}

export interface Application {
  configuration?: Record<string, any>
  constraints?: Record<string, any>
  errors: any[]
  id?: string
  max_instances?: number
  messages: any[]
  observability?: any
  result: any
  result_info: Record<string, any>
  rollout_active_grace_period?: number
  success: boolean
}

export interface ApplicationLoadMatch {
  account_id: string
  id: string
}

export interface ApplicationListMatch {
  account_id: string
  image?: string
  name?: string
  page_token?: string
  per_page?: number

  // Selects a custom action instead of the plain list:
  //   'version'
  // The remaining keys are that action's own payload.
  $action?: string
  [action: string]: any
}

export interface ApplicationCreateData {
  account_id: string
  configuration?: Record<string, any>
  constraints?: Record<string, any>
  errors: any[]
  id?: string
  max_instances?: number
  messages: any[]
  observability?: any
  result: any
  result_info: Record<string, any>
  rollout_active_grace_period?: number
  success: boolean
}

export interface ApplicationUpdateData {
  account_id: string
  id: string
  configuration?: Record<string, any>
  constraints?: Record<string, any>
  errors?: any[]
  max_instances?: number
  messages?: any[]
  observability?: any
  result?: any
  result_info?: Record<string, any>
  rollout_active_grace_period?: number
  success?: boolean
}

export interface ApplicationRemoveMatch {
  account_id: string
  id: string
}

export interface Brapi {
  Browser: string
  ProtocolVersion: string
  UserAgent: string
  V8Version: string
  WebKitVersion: string
  actionTimeout?: number
  addScriptTag?: any[]
  addStyleTag?: any[]
  allowRequestPattern?: any[]
  allowResourceTypes?: any[]
  authenticate: Record<string, any>
  bestAttempt?: boolean
  closeReason?: number
  closeReasonText?: string
  commands?: any[]
  connectionEndTime?: number
  connectionId?: string
  connectionStartTime?: number
  cookies?: any[]
  custom_ai?: any[]
  dependencies?: any[]
  description?: string
  devtoolsFrontendUrl?: string
  domain: string
  elements: any[]
  emulateMediaType?: string
  endTime?: number
  errors?: any[]
  events?: any[]
  excludeExternalLinks?: boolean
  experimental?: boolean
  formats?: any[]
  gotoOptions?: Record<string, any>
  guardrails?: Record<string, any>
  html?: string
  id: string
  interestingOnly?: boolean
  lastUpdated?: number
  message: string
  meta: Record<string, any>
  pdfOptions?: Record<string, any>
  prompt?: string
  rejectRequestPattern?: any[]
  rejectResourceTypes?: any[]
  response_format: Record<string, any>
  result: Record<string, any>
  root?: string
  screenshotOptions?: Record<string, any>
  scrollPage?: boolean
  selector?: string
  sessionId: string
  setExtraHTTPHeaders?: Record<string, any>
  setJavaScriptEnabled?: boolean
  startTime?: number
  success: boolean
  title?: string
  type: string
  types?: any[]
  url: string
  userAgent?: string
  viewport: Record<string, any>
  visibleLinksOnly?: boolean
  waitForSelector: Record<string, any>
  waitForTimeout?: number
  webSocketDebuggerUrl?: string
}

export interface BrapiLoadMatch {
  account_id: string
  job_id?: string
  cache_ttl?: number
  cursor?: number
  limit?: number
  status?: string
  session_id?: string
  keep_alive?: number
  lab?: boolean
  recording?: boolean
  browser_id?: string
  target_id?: string
  recording_id?: string
  format?: string
  target?: string
}

export interface BrapiListMatch {
  account_id: string
  browser_id?: string
  live_view_url_expires_in_m?: number
  limit?: number
  offset?: number
}

export interface BrapiCreateData {
  account_id: string
  keep_alive?: number
  lab?: boolean
  live_view_url_expires_in_m?: number
  recording?: boolean
  target?: boolean
  cache_ttl?: number
  Browser: string
  ProtocolVersion: string
  UserAgent: string
  V8Version: string
  WebKitVersion: string
  actionTimeout?: number
  addScriptTag?: any[]
  addStyleTag?: any[]
  allowRequestPattern?: any[]
  allowResourceTypes?: any[]
  authenticate: Record<string, any>
  bestAttempt?: boolean
  closeReason?: number
  closeReasonText?: string
  commands?: any[]
  connectionEndTime?: number
  connectionId?: string
  connectionStartTime?: number
  cookies?: any[]
  custom_ai?: any[]
  dependencies?: any[]
  description?: string
  devtoolsFrontendUrl?: string
  domain: string
  elements: any[]
  emulateMediaType?: string
  endTime?: number
  errors?: any[]
  events?: any[]
  excludeExternalLinks?: boolean
  experimental?: boolean
  formats?: any[]
  gotoOptions?: Record<string, any>
  guardrails?: Record<string, any>
  html?: string
  id: string
  interestingOnly?: boolean
  lastUpdated?: number
  message: string
  meta: Record<string, any>
  pdfOptions?: Record<string, any>
  prompt?: string
  rejectRequestPattern?: any[]
  rejectResourceTypes?: any[]
  response_format: Record<string, any>
  result: Record<string, any>
  root?: string
  screenshotOptions?: Record<string, any>
  scrollPage?: boolean
  selector?: string
  sessionId: string
  setExtraHTTPHeaders?: Record<string, any>
  setJavaScriptEnabled?: boolean
  startTime?: number
  success: boolean
  title?: string
  type: string
  types?: any[]
  url: string
  userAgent?: string
  viewport: Record<string, any>
  visibleLinksOnly?: boolean
  waitForSelector: Record<string, any>
  waitForTimeout?: number
  webSocketDebuggerUrl?: string

  // Selects a custom action instead of the plain create:
  //   'live_view'
  // The remaining keys are that action's own payload.
  $action?: string
  [action: string]: any
}

export interface BrapiUpdateData {
  account_id: string
  browser_id: string
  live_view_url_expires_in_m?: number
  url?: string
  Browser?: string
  ProtocolVersion?: string
  UserAgent?: string
  V8Version?: string
  WebKitVersion?: string
  actionTimeout?: number
  addScriptTag?: any[]
  addStyleTag?: any[]
  allowRequestPattern?: any[]
  allowResourceTypes?: any[]
  authenticate?: Record<string, any>
  bestAttempt?: boolean
  closeReason?: number
  closeReasonText?: string
  commands?: any[]
  connectionEndTime?: number
  connectionId?: string
  connectionStartTime?: number
  cookies?: any[]
  custom_ai?: any[]
  dependencies?: any[]
  description?: string
  devtoolsFrontendUrl?: string
  domain?: string
  elements?: any[]
  emulateMediaType?: string
  endTime?: number
  errors?: any[]
  events?: any[]
  excludeExternalLinks?: boolean
  experimental?: boolean
  formats?: any[]
  gotoOptions?: Record<string, any>
  guardrails?: Record<string, any>
  html?: string
  id?: string
  interestingOnly?: boolean
  lastUpdated?: number
  message?: string
  meta?: Record<string, any>
  pdfOptions?: Record<string, any>
  prompt?: string
  rejectRequestPattern?: any[]
  rejectResourceTypes?: any[]
  response_format?: Record<string, any>
  result?: Record<string, any>
  root?: string
  screenshotOptions?: Record<string, any>
  scrollPage?: boolean
  selector?: string
  sessionId?: string
  setExtraHTTPHeaders?: Record<string, any>
  setJavaScriptEnabled?: boolean
  startTime?: number
  success?: boolean
  title?: string
  type?: string
  types?: any[]
  userAgent?: string
  viewport?: Record<string, any>
  visibleLinksOnly?: boolean
  waitForSelector?: Record<string, any>
  waitForTimeout?: number
  webSocketDebuggerUrl?: string
}

export interface BrapiRemoveMatch {
  account_id: string
  job_id?: string
  session_id?: string
}

export interface Build {
  errors: any[]
  id?: string
  messages: any[]
  result: Record<string, any>
  result_info?: Record<string, any>
  success: boolean
}

export interface BuildLoadMatch {
  account_id: string
  id: string
}

export interface BuildListMatch {
  account_id: string
  version_id: string

  // Selects a custom action instead of the plain list:
  //   'latest' | 'log'
  // The remaining keys are that action's own payload.
  $action?: string
  [action: string]: any
}

export interface BuildUpdateData {
  account_id: string
  id: string
  errors?: any[]
  messages?: any[]
  result?: Record<string, any>
  result_info?: Record<string, any>
  success?: boolean

  // Selects a custom action instead of the plain update:
  //   'cancel'
  // The remaining keys are that action's own payload.
  $action?: string
  [action: string]: any
}

export interface BuildToken {
  build_token_name: string
  build_token_secret: string
  cloudflare_token_id: string
  errors: any[]
  messages: any[]
  result: Record<string, any>
  result_info?: Record<string, any>
  success: boolean
}

export interface BuildTokenListMatch {
  account_id: string
  page?: number
  per_page?: number
}

export interface BuildTokenCreateData {
  account_id: string
  build_token_name: string
  build_token_secret: string
  cloudflare_token_id: string
  errors: any[]
  messages: any[]
  result: Record<string, any>
  result_info?: Record<string, any>
  success: boolean
}

export interface BuildsApi {
  errors: any[]
  messages: any[]
  result: Record<string, any>
  result_info?: Record<string, any>
  success: boolean
}

export interface BuildsApiCreateData {
  account_id: string
  trigger_id: string
  errors: any[]
  messages: any[]
  result: Record<string, any>
  result_info?: Record<string, any>
  success: boolean
}

export interface BuildsApiRemoveMatch {
  account_id: string
  environment_variable_key: string
  trigger_id: string
}

export interface Connection {
  id?: string
}

export interface ConnectionRemoveMatch {
  account_id: string
  id: string
}

export interface ContainerImage {
  image: string
}

export interface ContainerImageCreateData {
  account_id: string
  image: string
}

export interface ContainerInstance {
  errors: any[]
  id?: string
  messages: any[]
  result: any
  result_info: Record<string, any>
  success: boolean
}

export interface ContainerInstanceLoadMatch {
  account_id: string
  application_id: string
  id: string
}

export interface ContainerInstanceListMatch {
  account_id: string
  application_id: string
  name_prefix?: string
  page_token?: string
  per_page?: number
  state?: string
}

export interface DeployHook {
  branch: string
  deploy_hook_name: string
  errors: any[]
  id?: string
  messages: any[]
  result: Record<string, any>
  result_info?: Record<string, any>
  success: boolean
}

export interface DeployHookLoadMatch {
  account_id: string
  id: string
  worker_id: string
}

export interface DeployHookListMatch {
  account_id: string
  script_name: string
}

export interface DeployHookCreateData {
  id: string
  branch: string
  deploy_hook_name: string
  errors: any[]
  messages: any[]
  result: Record<string, any>
  result_info?: Record<string, any>
  success: boolean
}

export interface DeployHookUpdateData {
  account_id: string
  id: string
  worker_id: string
  branch?: string
  deploy_hook_name?: string
  errors?: any[]
  messages?: any[]
  result?: Record<string, any>
  result_info?: Record<string, any>
  success?: boolean
}

export interface DeployHookRemoveMatch {
  account_id: string
  id: string
  worker_id: string
}

export interface Deployment {
  id?: string
}

export interface DeploymentRemoveMatch {
  account_id: string
  id: string
  preview_id?: string
  worker_id?: string
  script_id?: string
}

export interface Destination {
  configuration: Record<string, any>
  enabled: boolean
  errors: any[]
  id?: string
  messages: any[]
  name: string
  result: Record<string, any>
  skipPreflightCheck?: boolean
  success: boolean
}

export interface DestinationListMatch {
  account_id: string
  order?: string
  order_by?: string
  page?: number
  per_page?: number
}

export interface DestinationCreateData {
  account_id: string
  configuration: Record<string, any>
  enabled: boolean
  errors: any[]
  id?: string
  messages: any[]
  name: string
  result: Record<string, any>
  skipPreflightCheck?: boolean
  success: boolean
}

export interface DestinationUpdateData {
  account_id: string
  id: string
  configuration?: Record<string, any>
  enabled?: boolean
  errors?: any[]
  messages?: any[]
  name?: string
  result?: Record<string, any>
  skipPreflightCheck?: boolean
  success?: boolean
}

export interface DestinationRemoveMatch {
  account_id: string
  id: string
}

export interface Domain {
  errors: any[]
  id?: string
  messages: any[]
  result: Record<string, any>
  success: boolean
}

export interface DomainLoadMatch {
  account_id: string
  id: string
}

export interface DomainListMatch {
  account_id: string
  environment?: string
  hostname?: string
  service?: string
  zone_id?: string
  zone_name?: string
}

export interface DomainUpdateData {
  account_id: string
  errors?: any[]
  id?: string
  messages?: any[]
  result?: Record<string, any>
  success?: boolean
}

export interface DomainRemoveMatch {
  account_id: string
  id: string
}

export interface DurableObjectsNamespace {
  result?: any[]
  result_info?: Record<string, any>
}

export interface DurableObjectsNamespaceListMatch {
  account_id: string
  namespace_id?: string
  cursor?: string
  limit?: number
  page?: number
  per_page?: number
}

export interface DurableObjectsNamespaceCreateData {
  account_id: string
  namespace_id: string
  result?: any[]
  result_info?: Record<string, any>
}

export interface EnvironmentVariable {
  errors: any[]
  messages: any[]
  result: Record<string, any>
  result_info?: Record<string, any>
  success: boolean
}

export interface EnvironmentVariableListMatch {
  account_id: string
  trigger_id: string
}

export interface EnvironmentVariableUpdateData {
  account_id: string
  trigger_id: string
  errors?: any[]
  messages?: any[]
  result?: Record<string, any>
  result_info?: Record<string, any>
  success?: boolean
}

export interface GitHubIntegration {
  errors: any[]
  messages: any[]
  result: Record<string, any>
  result_info?: Record<string, any>
  success: boolean
}

export interface GitHubIntegrationListMatch {
  account_id: string
  provider_account_id: string
  provider_type: string
  repo_id: string
  branch: string
  root_directory?: string
}

export interface Hyperdrive {
  caching?: Record<string, any>
  created_on?: string
  id: string
  modified_on?: string
  mtls?: Record<string, any>
  name: string
  origin: Record<string, any>
  origin_connection_limit?: number
  restarted_on?: string
  result: Record<string, any>
}

export interface HyperdriveLoadMatch {
  account_id: string
  hyperdrive_id: string
}

export interface HyperdriveListMatch {
  account_id: string
  page?: number
  per_page?: number

  // Selects a custom action instead of the plain list:
  //   'config'
  // The remaining keys are that action's own payload.
  $action?: string
  [action: string]: any
}

export interface HyperdriveCreateData {
  account_id: string
  integration: string
  caching?: Record<string, any>
  created_on?: string
  id: string
  modified_on?: string
  mtls?: Record<string, any>
  name: string
  origin: Record<string, any>
  origin_connection_limit?: number
  restarted_on?: string
  result: Record<string, any>

  // Selects a custom action instead of the plain create:
  //   'config' | 'restart'
  // The remaining keys are that action's own payload.
  $action?: string
  [action: string]: any
}

export interface HyperdriveUpdateData {
  account_id: string
  hyperdrive_id: string
  caching?: Record<string, any>
  created_on?: string
  id?: string
  modified_on?: string
  mtls?: Record<string, any>
  name?: string
  origin?: Record<string, any>
  origin_connection_limit?: number
  restarted_on?: string
  result?: Record<string, any>
}

export interface HyperdriveRemoveMatch {
  account_id: string
  hyperdrive_id: string
}

export interface ImageRegistry {
  auth: Record<string, any>
  domain: string
  errors: any[]
  expiration_minutes?: number
  id?: string
  is_public?: boolean
  kind: any
  messages: any[]
  permissions?: any[]
  result: any[]
  success: boolean
}

export interface ImageRegistryListMatch {
  account_id: string
}

export interface ImageRegistryCreateData {
  account_id: string
  domain?: string
  auth: Record<string, any>
  errors: any[]
  expiration_minutes?: number
  id?: string
  is_public?: boolean
  kind: any
  messages: any[]
  permissions?: any[]
  result: any[]
  success: boolean
}

export interface ImageRegistryRemoveMatch {
  account_id: string
  id: string
}

export interface Issue {
  afterInactivitySeconds?: number
  afterOccurrences?: number
  enabled?: boolean
  errors: any[]
  id?: string
  issueIds: any[]
  messages: any[]
  name?: string
  policyId: string
  result: Record<string, any>
  result_info: Record<string, any>
  service?: string
  status?: string
  success: boolean
  title?: string
}

export interface IssueLoadMatch {
  account_id: string
  automation_id?: string
  id?: string
}

export interface IssueListMatch {
  account_id: string
  order?: string
  order_by?: string
  page?: number
  per_page?: number
  search?: string
  service?: string
  status?: string
  type?: string

  // Selects a custom action instead of the plain list:
  //   'automation' | 'occurrence' | 'summary'
  // The remaining keys are that action's own payload.
  $action?: string
  [action: string]: any
}

export interface IssueCreateData {
  account_id: string
  group_id: string
  afterInactivitySeconds?: number
  afterOccurrences?: number
  enabled?: boolean
  errors: any[]
  id?: string
  issueIds: any[]
  messages: any[]
  name?: string
  policyId: string
  result: Record<string, any>
  result_info: Record<string, any>
  service?: string
  status?: string
  success: boolean
  title?: string

  // Selects a custom action instead of the plain create:
  //   'automation' | 'group' | 'notification_run'
  // The remaining keys are that action's own payload.
  $action?: string
  [action: string]: any
}

export interface IssueUpdateData {
  account_id: string
  automation_id: string
  afterInactivitySeconds?: number
  afterOccurrences?: number
  enabled?: boolean
  errors?: any[]
  id?: string
  issueIds?: any[]
  messages?: any[]
  name?: string
  policyId?: string
  result?: Record<string, any>
  result_info?: Record<string, any>
  service?: string
  status?: string
  success?: boolean
  title?: string
}

export interface IssueRemoveMatch {
  account_id: string
  group_id?: string
  issue_id?: string
  automation_id?: string
}

export interface Key {
  datasets?: any[]
  errors: any[]
  filters?: any[]
  from?: number
  keyNeedle: Record<string, any>
  limit?: number
  messages: any[]
  needle: Record<string, any>
  result: any[]
  success: boolean
  to?: number
}

export interface KeyCreateData {
  account_id: string
  datasets?: any[]
  errors: any[]
  filters?: any[]
  from?: number
  keyNeedle: Record<string, any>
  limit?: number
  messages: any[]
  needle: Record<string, any>
  result: any[]
  success: boolean
  to?: number
}

export interface LiveTail {
  errors: any[]
  filterCombination?: string
  filters?: any[]
  messages: any[]
  result: Record<string, any>
  scriptId?: string
  success: boolean
}

export interface LiveTailCreateData {
  account_id: string
  errors: any[]
  filterCombination?: string
  filters?: any[]
  messages: any[]
  result: Record<string, any>
  scriptId?: string
  success: boolean

  // Selects a custom action instead of the plain create:
  //   'heartbeat'
  // The remaining keys are that action's own payload.
  $action?: string
  [action: string]: any
}

export interface MetricsExport {
  errors: any[]
  messages: any[]
  requester: Record<string, any>
  resources: any[]
  result: any[]
  success: boolean
}

export interface MetricsExportListMatch {
  account_id: string
}

export interface MetricsExportCreateData {
  account_id: string
  errors: any[]
  messages: any[]
  requester: Record<string, any>
  resources: any[]
  result: any[]
  success: boolean
}

export interface Namespace {
  id?: string
}

export interface NamespaceRemoveMatch {
  account_id: string
  id: string
}

export interface Preview {
  errors: any[]
  id?: string
  messages: any[]
  result: Record<string, any>
  success: boolean
}

export interface PreviewLoadMatch {
  account_id: string
  id: string
  worker_id: string
}

export interface PreviewListMatch {
  account_id: string
  worker_id: string
  name?: string
  order?: string
  order_by?: string
  page?: number
  per_page?: number
  slug?: string
}

export interface PreviewCreateData {
  account_id: string
  worker_id: string
  ignore_base_config?: boolean
  ignore_default?: boolean
  errors: any[]
  id?: string
  messages: any[]
  result: Record<string, any>
  success: boolean
}

export interface PreviewUpdateData {
  account_id: string
  id: string
  worker_id: string
  ignore_base_config?: boolean
  ignore_default?: boolean
  errors?: any[]
  messages?: any[]
  result?: Record<string, any>
  success?: boolean
}

export interface PreviewRemoveMatch {
  account_id: string
  id: string
  worker_id: string
  force?: boolean
}

export interface PreviewDeployment {
  errors: any[]
  id?: string
  messages: any[]
  result: any
  success: boolean
}

export interface PreviewDeploymentLoadMatch {
  account_id: string
  id: string
  preview_id: string
  worker_id: string
  include?: string
}

export interface PreviewDeploymentListMatch {
  account_id: string
  id: string
  worker_id: string
  page?: number
  per_page?: number
}

export interface PreviewDeploymentCreateData {
  account_id: string
  id: string
  worker_id: string
  ignore_default?: boolean
  errors: any[]
  messages: any[]
  result: any
  success: boolean
}

export interface PreviewDeploymentUpdateData {
  account_id: string
  preview_id: string
  worker_id: string
  ignore_default?: boolean
  errors?: any[]
  id?: string
  messages?: any[]
  result?: any
  success?: boolean
}

export interface Query {
  chart?: boolean
  chartType?: string
  compare?: boolean
  distributionScale?: string
  dry?: boolean
  errors: any[]
  granularity?: number
  ignoreSeries?: boolean
  limit?: number
  messages: any[]
  offset?: string
  offsetBy?: number
  offsetDirection?: string
  parameters?: Record<string, any>
  queryId: string
  result: Record<string, any>
  success: boolean
  timeframe: Record<string, any>
  view?: string
}

export interface QueryCreateData {
  account_id: string
  chart?: boolean
  chartType?: string
  compare?: boolean
  distributionScale?: string
  dry?: boolean
  errors: any[]
  granularity?: number
  ignoreSeries?: boolean
  limit?: number
  messages: any[]
  offset?: string
  offsetBy?: number
  offsetDirection?: string
  parameters?: Record<string, any>
  queryId: string
  result: Record<string, any>
  success: boolean
  timeframe: Record<string, any>
  view?: string
}

export interface RepositoryConnection {
  provider_account_id: string
  provider_account_name: string
  provider_type: string
  repo_id: string
  repo_name: string
}

export interface RepositoryConnectionUpdateData {
  account_id: string
  provider_account_id?: string
  provider_account_name?: string
  provider_type?: string
  repo_id?: string
  repo_name?: string
}

export interface Rollout {
  description: string
  kind?: string
  percentage?: number
  step_percentage?: number
  steps?: any[]
  strategy: string
  target_configuration: Record<string, any>
}

export interface RolloutCreateData {
  account_id: string
  application_id: string
  description: string
  kind?: string
  percentage?: number
  step_percentage?: number
  steps?: any[]
  strategy: string
  target_configuration: Record<string, any>
}

export interface SavedQuery {
  description: string
  errors: any[]
  id?: string
  messages: any[]
  name: string
  parameters: Record<string, any>
  result: Record<string, any>
  success: boolean
}

export interface SavedQueryLoadMatch {
  account_id: string
  id: string
}

export interface SavedQueryListMatch {
  account_id: string
  order?: string
  order_by?: string
  page?: number
  per_page?: number
}

export interface SavedQueryCreateData {
  account_id: string
  description: string
  errors: any[]
  id?: string
  messages: any[]
  name: string
  parameters: Record<string, any>
  result: Record<string, any>
  success: boolean
}

export interface SavedQueryUpdateData {
  account_id: string
  id: string
  description?: string
  errors?: any[]
  messages?: any[]
  name?: string
  parameters?: Record<string, any>
  result?: Record<string, any>
  success?: boolean
}

export interface SavedQueryRemoveMatch {
  account_id: string
  id: string
}

export interface Script {
  id?: string
}

export interface ScriptRemoveMatch {
  account_id: string
  id: string
  force?: boolean
}

export interface ScriptSetting {
  errors: any[]
  logpush?: boolean
  messages: any[]
  observability?: any
  result: Record<string, any>
  success: boolean
  tags?: any
  tail_consumers?: any[]
}

export interface ScriptSettingListMatch {
  account_id: string
  script_name: string
}

export interface ScriptSettingUpdateData {
  account_id: string
  script_name: string
  errors?: any[]
  logpush?: boolean
  messages?: any[]
  observability?: any
  result?: Record<string, any>
  success?: boolean
  tags?: any
  tail_consumers?: any[]
}

export interface Secret {
  comment?: string
  id?: string
  result: any
  scopes?: any[]
  value?: string
}

export interface SecretLoadMatch {
  account_id: string
  id: string
  store_id: string
}

export interface SecretListMatch {
  account_id: string
  store_id: string
  direction?: string
  order?: string
  page?: number
  per_page?: number
  scope?: any[]
  search?: string
}

export interface SecretCreateData {
  account_id: string
  store_id: string
  comment?: string
  id?: string
  result: any
  scopes?: any[]
  value?: string
}

export interface SecretUpdateData {
  account_id: string
  id: string
  store_id: string
  comment?: string
  result?: any
  scopes?: any[]
  value?: string
}

export interface SecretRemoveMatch {
  account_id: string
  id?: string
  store_id: string
}

export interface SecretsStoreDelete {
}

export interface SecretsStoreDeleteRemoveMatch {
  account_id: string
  store_id: string
  force?: boolean
}

export interface SecretsStoreQuota {
  result: any
}

export interface SecretsStoreQuotaLoadMatch {
  account_id: string
}

export interface SecretsStoreSecret {
  comment?: string
  name: string
  scopes: any[]
}

export interface SecretsStoreSecretCreateData {
  account_id: string
  secret_id: string
  store_id: string
  comment?: string
  name: string
  scopes: any[]
}

export interface SecretsStoreStore {
  id?: string
  name: string
  result: any
}

export interface SecretsStoreStoreLoadMatch {
  account_id: string
  id: string
}

export interface SecretsStoreStoreCreateData {
  account_id: string
  id?: string
  name: string
  result: any
}

export interface SecretsStoreStoresResponseCollection {
  result?: any[]
}

export interface SecretsStoreStoresResponseCollectionListMatch {
  account_id: string
  direction?: string
  order?: string
  page?: number
  per_page?: number
}

export interface Setting {
  errors: any[]
  messages: any[]
  result: Record<string, any>
  success: boolean
}

export interface SettingListMatch {
  account_id: string
  environment_name: string
  service_id: string
}

export interface SettingUpdateData {
  account_id: string
  environment_name: string
  service_id: string
  errors?: any[]
  messages?: any[]
  result?: Record<string, any>
  success?: boolean
}

export interface Shared {
  errors: any[]
  id?: string
  messages: any[]
  result: Record<string, any>
  success: boolean
}

export interface SharedLoadMatch {
  account_id: string
  id: string
  view?: string
}

export interface SharedCreateData {
  account_id: string
  errors: any[]
  id?: string
  messages: any[]
  result: Record<string, any>
  success: boolean

  // Selects a custom action instead of the plain create:
  //   'query'
  // The remaining keys are that action's own payload.
  $action?: string
  [action: string]: any
}

export interface Tail {
  id?: string
}

export interface TailRemoveMatch {
  account_id: string
  id: string
  script_id: string
}

export interface Token {
  id?: string
}

export interface TokenRemoveMatch {
  account_id: string
  id: string
}

export interface Trigger {
  branch_excludes: any[]
  branch_includes: any[]
  build_caching_enabled?: boolean
  build_command: string
  build_token_uuid: string
  deploy_command: string
  external_script_id: string
  id?: string
  path_excludes: any[]
  path_includes: any[]
  repo_connection_uuid: string
  root_directory: string
  trigger_name: string
}

export interface TriggerCreateData {
  account_id: string
  branch_excludes: any[]
  branch_includes: any[]
  build_caching_enabled?: boolean
  build_command: string
  build_token_uuid: string
  deploy_command: string
  external_script_id: string
  id?: string
  path_excludes: any[]
  path_includes: any[]
  repo_connection_uuid: string
  root_directory: string
  trigger_name: string

  // Selects a custom action instead of the plain create:
  //   'build'
  // The remaining keys are that action's own payload.
  $action?: string
  [action: string]: any
}

export interface TriggerUpdateData {
  account_id: string
  id: string
  branch_excludes?: any[]
  branch_includes?: any[]
  build_caching_enabled?: boolean
  build_command?: string
  build_token_uuid?: string
  deploy_command?: string
  external_script_id?: string
  path_excludes?: any[]
  path_includes?: any[]
  repo_connection_uuid?: string
  root_directory?: string
  trigger_name?: string
}

export interface TriggerRemoveMatch {
  account_id: string
  id: string
}

export interface Usage {
  errors: any[]
  messages: any[]
  result: Record<string, any>
  success: boolean
}

export interface UsageListMatch {
  account_id: string
  from: string
  to: string
}

export interface Value {
  datasets: any[]
  errors: any[]
  filters?: any[]
  key: string
  limit?: number
  messages: any[]
  needle: Record<string, any>
  result: any[]
  success: boolean
  timeframe: Record<string, any>
  type: string
}

export interface ValueCreateData {
  account_id: string
  datasets: any[]
  errors: any[]
  filters?: any[]
  key: string
  limit?: number
  messages: any[]
  needle: Record<string, any>
  result: any[]
  success: boolean
  timeframe: Record<string, any>
  type: string
}

export interface Version {
  annotations?: Record<string, any>
  assets?: Record<string, any>
  author_email?: string
  author_id?: string
  bindings?: any[]
  cache_options: Record<string, any>
  compatibility_date?: string
  compatibility_flags?: any[]
  containers?: any[]
  created_on: string
  errors: any[]
  exports?: any
  exports_reconciliation?: any
  id: string
  limits?: Record<string, any>
  main_module?: string
  messages: any[]
  migration_tag?: string
  migrations?: any
  modules?: any[]
  number: number
  package_dependencies?: any[]
  placement?: Record<string, any>
  result: Record<string, any>
  source?: string
  startup_time_ms?: number
  success: boolean
  urls: any[]
  usage_model?: string
}

export interface VersionLoadMatch {
  account_id: string
  id: string
  worker_id: string
  include?: string
}

export interface VersionListMatch {
  account_id: string
  worker_id: string
  page?: number
  per_page?: number

  // Selects a custom action instead of the plain list:
  //   'latest'
  // The remaining keys are that action's own payload.
  $action?: string
  [action: string]: any
}

export interface VersionCreateData {
  account_id: string
  worker_id: string
  deploy?: boolean
  annotations?: Record<string, any>
  assets?: Record<string, any>
  author_email?: string
  author_id?: string
  bindings?: any[]
  cache_options: Record<string, any>
  compatibility_date?: string
  compatibility_flags?: any[]
  containers?: any[]
  created_on: string
  errors: any[]
  exports?: any
  exports_reconciliation?: any
  id: string
  limits?: Record<string, any>
  main_module?: string
  messages: any[]
  migration_tag?: string
  migrations?: any
  modules?: any[]
  number: number
  package_dependencies?: any[]
  placement?: Record<string, any>
  result: Record<string, any>
  source?: string
  startup_time_ms?: number
  success: boolean
  urls: any[]
  usage_model?: string
}

export interface VersionUpdateData {
  account_id: string
  worker_id: string
  deploy?: boolean
  annotations?: Record<string, any>
  assets?: Record<string, any>
  author_email?: string
  author_id?: string
  bindings?: any[]
  cache_options?: Record<string, any>
  compatibility_date?: string
  compatibility_flags?: any[]
  containers?: any[]
  created_on?: string
  errors?: any[]
  exports?: any
  exports_reconciliation?: any
  id?: string
  limits?: Record<string, any>
  main_module?: string
  messages?: any[]
  migration_tag?: string
  migrations?: any
  modules?: any[]
  number?: number
  package_dependencies?: any[]
  placement?: Record<string, any>
  result?: Record<string, any>
  source?: string
  startup_time_ms?: number
  success?: boolean
  urls?: any[]
  usage_model?: string

  // Selects a custom action instead of the plain update:
  //   'latest'
  // The remaining keys are that action's own payload.
  $action?: string
  [action: string]: any
}

export interface VersionRemoveMatch {
  account_id: string
  id: string
  worker_id: string
}

export interface Worker {
  auto_build?: boolean
  auto_delete?: boolean
  branch?: any
  commit_hash?: any
  errors: any[]
  git_repository: any
  id?: string
  messages: any[]
  previews_base_config: Record<string, any>
  previews_enabled: boolean
  production_settings: Record<string, any>
  result: Record<string, any>
  result_info?: Record<string, any>
  script_tag: string
  seed_repo?: any
  settings?: Record<string, any>
  success: boolean
}

export interface WorkerLoadMatch {
  account_id: string
  preview_id?: string
  worker_id?: string
  id?: string
}

export interface WorkerListMatch {
  account_id: string
  order?: string
  order_by?: string
  page?: number
  per_page?: number
  preview_id?: string
  worker_id?: string

  // Selects a custom action instead of the plain list:
  //   'build' | 'preview' | 'trigger'
  // The remaining keys are that action's own payload.
  $action?: string
  [action: string]: any
}

export interface WorkerCreateData {
  account_id: string
  preview_id?: string
  worker_id?: string
  auto_build?: boolean
  auto_delete?: boolean
  branch?: any
  commit_hash?: any
  errors: any[]
  git_repository: any
  id?: string
  messages: any[]
  previews_base_config: Record<string, any>
  previews_enabled: boolean
  production_settings: Record<string, any>
  result: Record<string, any>
  result_info?: Record<string, any>
  script_tag: string
  seed_repo?: any
  settings?: Record<string, any>
  success: boolean

  // Selects a custom action instead of the plain create:
  //   'migrate_to_preview'
  // The remaining keys are that action's own payload.
  $action?: string
  [action: string]: any
}

export interface WorkerUpdateData {
  account_id: string
  id: string
  auto_build?: boolean
  auto_delete?: boolean
  branch?: any
  commit_hash?: any
  errors?: any[]
  git_repository?: any
  messages?: any[]
  previews_base_config?: Record<string, any>
  previews_enabled?: boolean
  production_settings?: Record<string, any>
  result?: Record<string, any>
  result_info?: Record<string, any>
  script_tag?: string
  seed_repo?: any
  settings?: Record<string, any>
  success?: boolean
}

export interface WorkerRemoveMatch {
  account_id: string
  id: string
  force?: boolean
}

export interface WorkerCronTrigger {
  errors: any[]
  messages: any[]
  result: Record<string, any>
  success: boolean
}

export interface WorkerCronTriggerListMatch {
  account_id: string
  script_name: string
}

export interface WorkerCronTriggerUpdateData {
  account_id: string
  script_name: string
  errors?: any[]
  messages?: any[]
  result?: Record<string, any>
  success?: boolean
}

export interface WorkerDeployment {
  annotations?: Record<string, any>
  author_email?: string
  created_on: string
  errors: any[]
  id: string
  messages: any[]
  result: Record<string, any>
  source: string
  strategy: string
  success: boolean
  versions: any[]
}

export interface WorkerDeploymentLoadMatch {
  account_id: string
  script_name?: string
  page?: number
  per_page?: number
  since?: string
  until?: string
  id?: string
  script_id?: string
}

export interface WorkerDeploymentCreateData {
  account_id: string
  script_name: string
  force?: boolean
  annotations?: Record<string, any>
  author_email?: string
  created_on: string
  errors: any[]
  id: string
  messages: any[]
  result: Record<string, any>
  source: string
  strategy: string
  success: boolean
  versions: any[]
}

export interface WorkerEnvironment {
}

export interface WorkerEnvironmentLoadMatch {
  account_id: string
  environment_name: string
  service_id: string
}

export interface WorkerRoute {
  errors: any[]
  id: string
  messages: any[]
  pattern: string
  result: Record<string, any>
  script?: string
  success: boolean
}

export interface WorkerRouteLoadMatch {
  id: string
  zone_id: string
}

export interface WorkerRouteListMatch {
  zone_id: string
}

export interface WorkerRouteCreateData {
  zone_id: string
  errors: any[]
  id: string
  messages: any[]
  pattern: string
  result: Record<string, any>
  script?: string
  success: boolean
}

export interface WorkerRouteUpdateData {
  id: string
  zone_id: string
  errors?: any[]
  messages?: any[]
  pattern?: string
  result?: Record<string, any>
  script?: string
  success?: boolean
}

export interface WorkerRouteRemoveMatch {
  id: string
  zone_id: string
}

export interface WorkerScript {
  errors: any[]
  id?: string
  messages: any[]
  result?: Record<string, any>
  success: boolean
}

export interface WorkerScriptLoadMatch {
  account_id: string
  script_id?: string
  secret_name?: string
  url_encoded?: boolean
  id?: string
}

export interface WorkerScriptListMatch {
  account_id: string
  id?: string
  name?: string
  order_by?: string
  page?: number
  per_page?: number
  script_name?: string

  // Selects a custom action instead of the plain list:
  //   'subdomain'
  // The remaining keys are that action's own payload.
  $action?: string
  [action: string]: any
}

export interface WorkerScriptCreateData {
  account_id: string
  script_name: string
  errors: any[]
  id?: string
  messages: any[]
  result?: Record<string, any>
  success: boolean

  // Selects a custom action instead of the plain create:
  //   'subdomain'
  // The remaining keys are that action's own payload.
  $action?: string
  [action: string]: any
}

export interface WorkerScriptUpdateData {
  account_id: string
  id?: string
  bindings_inherit?: string
  script_name?: string
  errors?: any[]
  messages?: any[]
  result?: Record<string, any>
  success?: boolean
}

export interface WorkerScriptRemoveMatch {
  account_id: string
  script_name: string

  // Selects a custom action instead of the plain remove:
  //   'subdomain'
  // The remaining keys are that action's own payload.
  $action?: string
  [action: string]: any
}

export interface WorkerSubdomain {
  errors: any[]
  messages: any[]
  result: Record<string, any>
  subdomain: string
  success: boolean
}

export interface WorkerSubdomainListMatch {
  account_id: string
}

export interface WorkerSubdomainUpdateData {
  account_id: string
  errors?: any[]
  messages?: any[]
  result?: Record<string, any>
  subdomain?: string
  success?: boolean
}

export interface WorkerSubdomainRemoveMatch {
  account_id: string
}

export interface WorkerTailLog {
  errors: any[]
  messages: any[]
  result: Record<string, any>
  success: boolean
}

export interface WorkerTailLogListMatch {
  account_id: string
  script_name: string
}

export interface WorkerTailLogCreateData {
  account_id: string
  script_name: string
  errors: any[]
  messages: any[]
  result: Record<string, any>
  success: boolean
}

export interface WorkersAccountSetting {
  default_usage_model?: string
  errors: any[]
  green_compute?: boolean
  messages: any[]
  result: Record<string, any>
  success: boolean
}

export interface WorkersAccountSettingListMatch {
  account_id: string
}

export interface WorkersAccountSettingUpdateData {
  account_id: string
  default_usage_model?: string
  errors?: any[]
  green_compute?: boolean
  messages?: any[]
  result?: Record<string, any>
  success?: boolean
}

export interface WorkersApiResponseNullResult {
  errors: any[]
  messages: any[]
  result?: Record<string, any>
  success: boolean
}

export interface WorkersApiResponseNullResultUpdateData {
  account_id: string
  namespace_id: string
  script_id: string
  tag: string
  errors?: any[]
  messages?: any[]
  result?: Record<string, any>
  success?: boolean
}

export interface WorkersApiResponseNullResultRemoveMatch {
  account_id: string
  namespace_id?: string
  script_id?: string
  secret_name?: string
  url_encoded?: boolean
  script_name?: string
  force?: boolean
  tag?: string
}

export interface WorkersCompletedUploadAsset {
}

export interface WorkersCompletedUploadAssetCreateData {
  account_id: string
  base64: boolean
}

export interface WorkersCreateAssetsUploadSession {
  manifest: Record<string, any>
}

export interface WorkersCreateAssetsUploadSessionCreateData {
  account_id: string
  namespace_id?: string
  script_name: string
  manifest: Record<string, any>
}

export interface WorkersForPlatform {
  errors: any[]
  messages: any[]
  result: Record<string, any>
  success: boolean
}

export interface WorkersForPlatformLoadMatch {
  account_id: string
  namespace_id: string
  script_id?: string
  secret_name?: string
  url_encoded?: boolean
  script_name?: string
}

export interface WorkersForPlatformListMatch {
  account_id: string
  dispatch_namespace?: string
  tag?: string
  namespace_id?: string
  script_name?: string
}

export interface WorkersForPlatformUpdateData {
  account_id: string
  namespace_id: string
  script_name: string
  bindings_inherit?: string
  errors?: any[]
  messages?: any[]
  result?: Record<string, any>
  success?: boolean
}

export interface WorkersKvApiResponseCommonNoResult {
}

export interface WorkersKvApiResponseCommonNoResultUpdateData {
  account_id: string
  key_name: string
  namespace_id: string
  expiration?: number
  expiration_ttl?: number
}

export interface WorkersKvApiResponseCommonNoResultRemoveMatch {
  account_id: string
  key_name?: string
  namespace_id: string
}

export interface WorkersKvNamespace {
  errors: any[]
  id?: string
  jurisdiction?: string
  keys: any[]
  messages: any[]
  result?: any
  result_info?: Record<string, any>
  success: boolean
  title: string
  type?: string
  withMetadata?: boolean
}

export interface WorkersKvNamespaceLoadMatch {
  account_id: string
  key_name?: string
  namespace_id?: string
  id?: string
}

export interface WorkersKvNamespaceListMatch {
  account_id: string
  namespace_id?: string
  cursor?: string
  limit?: number
  prefix?: string
  direction?: string
  order?: string
  page?: number
  per_page?: number
}

export interface WorkersKvNamespaceCreateData {
  account_id: string
  namespace_id?: string
  errors: any[]
  id?: string
  jurisdiction?: string
  keys: any[]
  messages: any[]
  result?: any
  result_info?: Record<string, any>
  success: boolean
  title: string
  type?: string
  withMetadata?: boolean
}

export interface WorkersKvNamespaceUpdateData {
  account_id: string
  id?: string
  namespace_id?: string
  errors?: any[]
  jurisdiction?: string
  keys?: any[]
  messages?: any[]
  result?: any
  result_info?: Record<string, any>
  success?: boolean
  title?: string
  type?: string
  withMetadata?: boolean
}

export interface WorkersKvNamespaceRemoveMatch {
  account_id: string
  namespace_id: string
}

export interface WorkersNamespaceList {
  errors: any[]
  messages: any[]
  result?: any[]
  success: boolean
}

export interface WorkersNamespaceListListMatch {
  account_id: string
}

export interface WorkersNamespaceScriptDeleteBulk {
}

export interface WorkersNamespaceScriptDeleteBulkRemoveMatch {
  account_id: string
  dispatch_namespace: string
  limit?: number
  tag: string
}

export interface WorkersNamespaceScriptResponseSingle {
  errors: any[]
  messages: any[]
  result: Record<string, any>
  success: boolean
}

export interface WorkersNamespaceScriptResponseSingleLoadMatch {
  account_id: string
  namespace_id: string
  script_name: string
}

export interface WorkersNamespaceScriptResponseSingleUpdateData {
  account_id: string
  namespace_id: string
  script_name: string
  errors?: any[]
  messages?: any[]
  result?: Record<string, any>
  success?: boolean

  // Selects a custom action instead of the plain update:
  //   'secrets_bulk'
  // The remaining keys are that action's own payload.
  $action?: string
  [action: string]: any
}

export interface WorkersNamespaceSingle {
  errors: any[]
  messages: any[]
  name?: string
  result?: Record<string, any>
  success: boolean
  trusted_workers?: boolean
}

export interface WorkersNamespaceSingleLoadMatch {
  account_id: string
  dispatch_namespace: string
}

export interface WorkersNamespaceSingleCreateData {
  account_id: string
  errors: any[]
  messages: any[]
  name?: string
  result?: Record<string, any>
  success: boolean
  trusted_workers?: boolean
}

export interface WorkersNamespaceSingleUpdateData {
  account_id: string
  dispatch_namespace: string
  errors?: any[]
  messages?: any[]
  name?: string
  result?: Record<string, any>
  success?: boolean
  trusted_workers?: boolean
}

export interface WorkersPipelinesOther {
  config?: any
  created_at: string
  destination: Record<string, any>
  endpoint: string
  failure_reason?: string
  format?: any
  graph: Record<string, any>
  http: Record<string, any>
  id: string
  modified_at: string
  name: string
  schema?: Record<string, any>
  source: any[]
  sql: string
  status: string
  tables: any[]
  type: string
  version: number
  worker_binding: Record<string, any>
}

export interface WorkersPipelinesOtherLoadMatch {
  account_id: string
  pipeline_id?: string
  pipeline_name?: string
  sink_id?: string
  stream_id?: string
}

export interface WorkersPipelinesOtherListMatch {
  account_id: string
  name?: string
  page?: number
  per_page?: number
  pipeline_id?: string
  search?: string
}

export interface WorkersPipelinesOtherCreateData {
  account_id: string
  config?: any
  created_at: string
  destination: Record<string, any>
  endpoint: string
  failure_reason?: string
  format?: any
  graph: Record<string, any>
  http: Record<string, any>
  id: string
  modified_at: string
  name: string
  schema?: Record<string, any>
  source: any[]
  sql: string
  status: string
  tables: any[]
  type: string
  version: number
  worker_binding: Record<string, any>
}

export interface WorkersPipelinesOtherUpdateData {
  account_id: string
  pipeline_name: string
  config?: any
  created_at?: string
  destination?: Record<string, any>
  endpoint?: string
  failure_reason?: string
  format?: any
  graph?: Record<string, any>
  http?: Record<string, any>
  id?: string
  modified_at?: string
  name?: string
  schema?: Record<string, any>
  source?: any[]
  sql?: string
  status?: string
  tables?: any[]
  type?: string
  version?: number
  worker_binding?: Record<string, any>
}

export interface WorkersPipelinesOtherRemoveMatch {
  account_id: string
  pipeline_id?: string
  pipeline_name?: string
  sink_id?: string
  stream_id?: string
}

export interface WorkersScriptAndVersionSetting {
  errors: any[]
  messages: any[]
  result: Record<string, any>
  success: boolean
}

export interface WorkersScriptAndVersionSettingListMatch {
  account_id: string
  script_name: string
}

export interface WorkersScriptAndVersionSettingUpdateData {
  account_id: string
  script_name: string
  errors?: any[]
  messages?: any[]
  result?: Record<string, any>
  success?: boolean
}

export interface WorkersScriptResponseCollection {
  errors: any[]
  messages: any[]
  result: any[]
  success: boolean
}

export interface WorkersScriptResponseCollectionListMatch {
  account_id: string
  tag?: string
}

export interface WorkersScriptResponseSingle {
}

export interface WorkersScriptResponseSingleUpdateData {
  account_id: string
  environment_name?: string
  service_id?: string
  namespace_id?: string
  script_name?: string
}

export interface WorkersSmartPlacement {
  errors: any[]
  messages: any[]
  result: Record<string, any>
  success: boolean
}

export interface WorkersSmartPlacementListMatch {
  account_id: string
}

export interface WorkersUsageModel {
  errors: any[]
  messages: any[]
  result: Record<string, any>
  success: boolean
  usage_model?: string
  user_limits?: Record<string, any>
}

export interface WorkersUsageModelListMatch {
  account_id: string
  script_name: string
}

export interface WorkersUsageModelUpdateData {
  account_id: string
  script_name: string
  errors?: any[]
  messages?: any[]
  result?: Record<string, any>
  success?: boolean
  usage_model?: string
  user_limits?: Record<string, any>
}

export interface WorkersVersionsList {
  errors: any[]
  messages: any[]
  result: Record<string, any>
  success: boolean
}

export interface WorkersVersionsListListMatch {
  account_id: string
  script_name: string
  deployable?: boolean
  page?: number
  per_page?: number
}

export interface WorkersVersionsSingle {
  errors: any[]
  messages: any[]
  result: any
  success: boolean
}

export interface WorkersVersionsSingleLoadMatch {
  account_id: string
  script_id: string
  version_id: string
}

export interface WorkersVersionsUpload {
}

export interface WorkersVersionsUploadCreateData {
  account_id: string
  script_name: string
  bindings_inherit?: string
}

export interface Workflow {
  class_name: string
  concurrency?: Record<string, any>
  default_retention?: Record<string, any>
  errors: any[]
  id?: string
  instances: any[]
  limits?: Record<string, any>
  messages: any[]
  result: Record<string, any>
  result_info: Record<string, any>
  schedules?: any[]
  script_name: string
  success: boolean
}

export interface WorkflowLoadMatch {
  account_id: string
  instance_id?: string
  workflow_id?: string
  cursor?: number
  filter?: any[]
  order?: string
  simple?: string
  version_id?: string
  id?: string
  script_name?: string
}

export interface WorkflowListMatch {
  account_id: string
  instance_id?: string
  workflow_id?: string
  attempt?: number
  name?: string
  type?: string
  page?: number
  per_page?: number
  search?: string
  version_id?: string

  // Selects a custom action instead of the plain list:
  //   'instance' | 'instance_terminate' | 'setting' | 'version'
  // The remaining keys are that action's own payload.
  $action?: string
  [action: string]: any
}

export interface WorkflowCreateData {
  account_id: string
  event_type?: string
  instance_id?: string
  workflow_id: string
  class_name: string
  concurrency?: Record<string, any>
  default_retention?: Record<string, any>
  errors: any[]
  id?: string
  instances: any[]
  limits?: Record<string, any>
  messages: any[]
  result: Record<string, any>
  result_info: Record<string, any>
  schedules?: any[]
  script_name: string
  success: boolean

  // Selects a custom action instead of the plain create:
  //   'instance' | 'instance_batch'
  // The remaining keys are that action's own payload.
  $action?: string
  [action: string]: any
}

export interface WorkflowUpdateData {
  account_id: string
  id?: string
  script_name?: string
  class_name?: string
  concurrency?: Record<string, any>
  default_retention?: Record<string, any>
  errors?: any[]
  instances?: any[]
  limits?: Record<string, any>
  messages?: any[]
  result?: Record<string, any>
  result_info?: Record<string, any>
  schedules?: any[]
  success?: boolean
}

export interface WorkflowRemoveMatch {
  account_id: string
  instance_id?: string
  workflow_id?: string
  id?: string
  script_name?: string
}

