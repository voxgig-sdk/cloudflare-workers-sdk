# Typed models for the CloudflareWorkers SDK.
#
# GENERATED from the API model: main.kit.entity.<e>.fields{} and per-op
# params (op.<name>.points[].g.params[]). Field/param types come from the
# canonical type sentinels via @voxgig/sdkgen canonToType (source of truth:
# @voxgig/apidef VALID_CANON). Do not edit by hand.
#
# These are TypedDicts, not dataclasses: the SDK ops return/accept plain dicts
# at runtime, and a TypedDict IS a dict shape, so the types match the runtime.
# Optional (req:false) keys are modelled as TypedDict key-optionality
# (total=False), split into a required base + total=False subclass when a type
# has both required and optional keys.

from __future__ import annotations

from typing import TypedDict, Any


class Account(TypedDict, total=False):
    id: str


class AccountListMatch(TypedDict):
    id: str


class ApplicationRequired(TypedDict):
    errors: list
    messages: list
    result: Any
    result_info: dict
    success: bool


class Application(ApplicationRequired, total=False):
    configuration: dict
    constraints: dict
    id: str
    max_instances: int
    observability: Any
    rollout_active_grace_period: int


class ApplicationLoadMatch(TypedDict):
    account_id: str
    id: str


class ApplicationListMatchRequired(TypedDict):
    account_id: str


class ApplicationListMatch(ApplicationListMatchRequired, total=False):
    image: str
    name: str
    page_token: str
    per_page: int


class ApplicationCreateDataRequired(TypedDict):
    account_id: str
    errors: list
    messages: list
    result: Any
    result_info: dict
    success: bool


class ApplicationCreateData(ApplicationCreateDataRequired, total=False):
    configuration: dict
    constraints: dict
    id: str
    max_instances: int
    observability: Any
    rollout_active_grace_period: int


class ApplicationUpdateDataRequired(TypedDict):
    account_id: str
    id: str


class ApplicationUpdateData(ApplicationUpdateDataRequired, total=False):
    configuration: dict
    constraints: dict
    errors: list
    max_instances: int
    messages: list
    observability: Any
    result: Any
    result_info: dict
    rollout_active_grace_period: int
    success: bool


class ApplicationRemoveMatch(TypedDict):
    account_id: str
    id: str


class BrapiRequired(TypedDict):
    Browser: str
    ProtocolVersion: str
    UserAgent: str
    V8Version: str
    WebKitVersion: str
    authenticate: dict
    domain: str
    elements: list
    id: str
    message: str
    meta: dict
    response_format: dict
    result: dict
    sessionId: str
    success: bool
    type: str
    url: str
    viewport: dict
    waitForSelector: dict


class Brapi(BrapiRequired, total=False):
    actionTimeout: float
    addScriptTag: list
    addStyleTag: list
    allowRequestPattern: list
    allowResourceTypes: list
    bestAttempt: bool
    closeReason: float
    closeReasonText: str
    commands: list
    connectionEndTime: float
    connectionId: str
    connectionStartTime: float
    cookies: list
    custom_ai: list
    dependencies: list
    description: str
    devtoolsFrontendUrl: str
    emulateMediaType: str
    endTime: float
    errors: list
    events: list
    excludeExternalLinks: bool
    experimental: bool
    formats: list
    gotoOptions: dict
    guardrails: dict
    html: str
    interestingOnly: bool
    lastUpdated: float
    pdfOptions: dict
    prompt: str
    rejectRequestPattern: list
    rejectResourceTypes: list
    root: str
    screenshotOptions: dict
    scrollPage: bool
    selector: str
    setExtraHTTPHeaders: dict
    setJavaScriptEnabled: bool
    startTime: float
    title: str
    types: list
    userAgent: str
    visibleLinksOnly: bool
    waitForTimeout: float
    webSocketDebuggerUrl: str


class BrapiLoadMatchRequired(TypedDict):
    account_id: str


class BrapiLoadMatch(BrapiLoadMatchRequired, total=False):
    job_id: str
    cache_ttl: float
    cursor: float
    limit: float
    status: str
    session_id: str
    keep_alive: float
    lab: bool
    recording: bool
    browser_id: str
    target_id: str
    recording_id: str
    format: str
    target: str


class BrapiListMatchRequired(TypedDict):
    account_id: str


class BrapiListMatch(BrapiListMatchRequired, total=False):
    browser_id: str
    live_view_url_expires_in_m: float
    limit: float
    offset: float


class BrapiCreateDataRequired(TypedDict):
    account_id: str
    Browser: str
    ProtocolVersion: str
    UserAgent: str
    V8Version: str
    WebKitVersion: str
    authenticate: dict
    domain: str
    elements: list
    id: str
    message: str
    meta: dict
    response_format: dict
    result: dict
    sessionId: str
    success: bool
    type: str
    url: str
    viewport: dict
    waitForSelector: dict


class BrapiCreateData(BrapiCreateDataRequired, total=False):
    keep_alive: float
    lab: bool
    live_view_url_expires_in_m: float
    recording: bool
    target: bool
    cache_ttl: float
    actionTimeout: float
    addScriptTag: list
    addStyleTag: list
    allowRequestPattern: list
    allowResourceTypes: list
    bestAttempt: bool
    closeReason: float
    closeReasonText: str
    commands: list
    connectionEndTime: float
    connectionId: str
    connectionStartTime: float
    cookies: list
    custom_ai: list
    dependencies: list
    description: str
    devtoolsFrontendUrl: str
    emulateMediaType: str
    endTime: float
    errors: list
    events: list
    excludeExternalLinks: bool
    experimental: bool
    formats: list
    gotoOptions: dict
    guardrails: dict
    html: str
    interestingOnly: bool
    lastUpdated: float
    pdfOptions: dict
    prompt: str
    rejectRequestPattern: list
    rejectResourceTypes: list
    root: str
    screenshotOptions: dict
    scrollPage: bool
    selector: str
    setExtraHTTPHeaders: dict
    setJavaScriptEnabled: bool
    startTime: float
    title: str
    types: list
    userAgent: str
    visibleLinksOnly: bool
    waitForTimeout: float
    webSocketDebuggerUrl: str


class BrapiUpdateDataRequired(TypedDict):
    account_id: str
    browser_id: str


class BrapiUpdateData(BrapiUpdateDataRequired, total=False):
    live_view_url_expires_in_m: float
    url: str
    Browser: str
    ProtocolVersion: str
    UserAgent: str
    V8Version: str
    WebKitVersion: str
    actionTimeout: float
    addScriptTag: list
    addStyleTag: list
    allowRequestPattern: list
    allowResourceTypes: list
    authenticate: dict
    bestAttempt: bool
    closeReason: float
    closeReasonText: str
    commands: list
    connectionEndTime: float
    connectionId: str
    connectionStartTime: float
    cookies: list
    custom_ai: list
    dependencies: list
    description: str
    devtoolsFrontendUrl: str
    domain: str
    elements: list
    emulateMediaType: str
    endTime: float
    errors: list
    events: list
    excludeExternalLinks: bool
    experimental: bool
    formats: list
    gotoOptions: dict
    guardrails: dict
    html: str
    id: str
    interestingOnly: bool
    lastUpdated: float
    message: str
    meta: dict
    pdfOptions: dict
    prompt: str
    rejectRequestPattern: list
    rejectResourceTypes: list
    response_format: dict
    result: dict
    root: str
    screenshotOptions: dict
    scrollPage: bool
    selector: str
    sessionId: str
    setExtraHTTPHeaders: dict
    setJavaScriptEnabled: bool
    startTime: float
    success: bool
    title: str
    type: str
    types: list
    userAgent: str
    viewport: dict
    visibleLinksOnly: bool
    waitForSelector: dict
    waitForTimeout: float
    webSocketDebuggerUrl: str


class BrapiRemoveMatchRequired(TypedDict):
    account_id: str


class BrapiRemoveMatch(BrapiRemoveMatchRequired, total=False):
    job_id: str
    session_id: str


class BuildRequired(TypedDict):
    errors: list
    messages: list
    result: dict
    success: bool


class Build(BuildRequired, total=False):
    id: str
    result_info: dict


class BuildLoadMatch(TypedDict):
    account_id: str
    id: str


class BuildListMatch(TypedDict):
    account_id: str
    version_id: str


class BuildUpdateDataRequired(TypedDict):
    account_id: str
    id: str


class BuildUpdateData(BuildUpdateDataRequired, total=False):
    errors: list
    messages: list
    result: dict
    result_info: dict
    success: bool


class BuildTokenRequired(TypedDict):
    build_token_name: str
    build_token_secret: str
    cloudflare_token_id: str
    errors: list
    messages: list
    result: dict
    success: bool


class BuildToken(BuildTokenRequired, total=False):
    result_info: dict


class BuildTokenListMatchRequired(TypedDict):
    account_id: str


class BuildTokenListMatch(BuildTokenListMatchRequired, total=False):
    page: int
    per_page: int


class BuildTokenCreateDataRequired(TypedDict):
    account_id: str
    build_token_name: str
    build_token_secret: str
    cloudflare_token_id: str
    errors: list
    messages: list
    result: dict
    success: bool


class BuildTokenCreateData(BuildTokenCreateDataRequired, total=False):
    result_info: dict


class BuildsApiRequired(TypedDict):
    errors: list
    messages: list
    result: dict
    success: bool


class BuildsApi(BuildsApiRequired, total=False):
    result_info: dict


class BuildsApiCreateDataRequired(TypedDict):
    account_id: str
    trigger_id: str
    errors: list
    messages: list
    result: dict
    success: bool


class BuildsApiCreateData(BuildsApiCreateDataRequired, total=False):
    result_info: dict


class BuildsApiRemoveMatch(TypedDict):
    account_id: str
    environment_variable_key: str
    trigger_id: str


class Connection(TypedDict, total=False):
    id: str


class ConnectionRemoveMatch(TypedDict):
    account_id: str
    id: str


class ContainerImage(TypedDict):
    image: str


class ContainerImageCreateData(TypedDict):
    account_id: str
    image: str


class ContainerInstanceRequired(TypedDict):
    errors: list
    messages: list
    result: Any
    result_info: dict
    success: bool


class ContainerInstance(ContainerInstanceRequired, total=False):
    id: str


class ContainerInstanceLoadMatch(TypedDict):
    account_id: str
    application_id: str
    id: str


class ContainerInstanceListMatchRequired(TypedDict):
    account_id: str
    application_id: str


class ContainerInstanceListMatch(ContainerInstanceListMatchRequired, total=False):
    name_prefix: str
    page_token: str
    per_page: int
    state: str


class DeployHookRequired(TypedDict):
    branch: str
    deploy_hook_name: str
    errors: list
    messages: list
    result: dict
    success: bool


class DeployHook(DeployHookRequired, total=False):
    id: str
    result_info: dict


class DeployHookLoadMatch(TypedDict):
    account_id: str
    id: str
    worker_id: str


class DeployHookListMatch(TypedDict):
    account_id: str
    script_name: str


class DeployHookCreateDataRequired(TypedDict):
    id: str
    branch: str
    deploy_hook_name: str
    errors: list
    messages: list
    result: dict
    success: bool


class DeployHookCreateData(DeployHookCreateDataRequired, total=False):
    result_info: dict


class DeployHookUpdateDataRequired(TypedDict):
    account_id: str
    id: str
    worker_id: str


class DeployHookUpdateData(DeployHookUpdateDataRequired, total=False):
    branch: str
    deploy_hook_name: str
    errors: list
    messages: list
    result: dict
    result_info: dict
    success: bool


class DeployHookRemoveMatch(TypedDict):
    account_id: str
    id: str
    worker_id: str


class Deployment(TypedDict, total=False):
    id: str


class DeploymentRemoveMatchRequired(TypedDict):
    account_id: str
    id: str


class DeploymentRemoveMatch(DeploymentRemoveMatchRequired, total=False):
    preview_id: str
    worker_id: str
    script_id: str


class DestinationRequired(TypedDict):
    configuration: dict
    enabled: bool
    errors: list
    messages: list
    name: str
    result: dict
    success: bool


class Destination(DestinationRequired, total=False):
    id: str
    skipPreflightCheck: bool


class DestinationListMatchRequired(TypedDict):
    account_id: str


class DestinationListMatch(DestinationListMatchRequired, total=False):
    order: str
    order_by: str
    page: float
    per_page: float


class DestinationCreateDataRequired(TypedDict):
    account_id: str
    configuration: dict
    enabled: bool
    errors: list
    messages: list
    name: str
    result: dict
    success: bool


class DestinationCreateData(DestinationCreateDataRequired, total=False):
    id: str
    skipPreflightCheck: bool


class DestinationUpdateDataRequired(TypedDict):
    account_id: str
    id: str


class DestinationUpdateData(DestinationUpdateDataRequired, total=False):
    configuration: dict
    enabled: bool
    errors: list
    messages: list
    name: str
    result: dict
    skipPreflightCheck: bool
    success: bool


class DestinationRemoveMatch(TypedDict):
    account_id: str
    id: str


class DomainRequired(TypedDict):
    errors: list
    messages: list
    result: dict
    success: bool


class Domain(DomainRequired, total=False):
    id: str


class DomainLoadMatch(TypedDict):
    account_id: str
    id: str


class DomainListMatchRequired(TypedDict):
    account_id: str


class DomainListMatch(DomainListMatchRequired, total=False):
    environment: str
    hostname: str
    service: str
    zone_id: str
    zone_name: str


class DomainUpdateDataRequired(TypedDict):
    account_id: str


class DomainUpdateData(DomainUpdateDataRequired, total=False):
    errors: list
    id: str
    messages: list
    result: dict
    success: bool


class DomainRemoveMatch(TypedDict):
    account_id: str
    id: str


class DurableObjectsNamespace(TypedDict, total=False):
    result: list
    result_info: dict


class DurableObjectsNamespaceListMatchRequired(TypedDict):
    account_id: str


class DurableObjectsNamespaceListMatch(DurableObjectsNamespaceListMatchRequired, total=False):
    namespace_id: str
    cursor: str
    limit: float
    page: int
    per_page: int


class DurableObjectsNamespaceCreateDataRequired(TypedDict):
    account_id: str
    namespace_id: str


class DurableObjectsNamespaceCreateData(DurableObjectsNamespaceCreateDataRequired, total=False):
    result: list
    result_info: dict


class EnvironmentVariableRequired(TypedDict):
    errors: list
    messages: list
    result: dict
    success: bool


class EnvironmentVariable(EnvironmentVariableRequired, total=False):
    result_info: dict


class EnvironmentVariableListMatch(TypedDict):
    account_id: str
    trigger_id: str


class EnvironmentVariableUpdateDataRequired(TypedDict):
    account_id: str
    trigger_id: str


class EnvironmentVariableUpdateData(EnvironmentVariableUpdateDataRequired, total=False):
    errors: list
    messages: list
    result: dict
    result_info: dict
    success: bool


class GitHubIntegrationRequired(TypedDict):
    errors: list
    messages: list
    result: dict
    success: bool


class GitHubIntegration(GitHubIntegrationRequired, total=False):
    result_info: dict


class GitHubIntegrationListMatchRequired(TypedDict):
    account_id: str
    provider_account_id: str
    provider_type: str
    repo_id: str
    branch: str


class GitHubIntegrationListMatch(GitHubIntegrationListMatchRequired, total=False):
    root_directory: str


class HyperdriveRequired(TypedDict):
    id: str
    name: str
    origin: dict
    result: dict


class Hyperdrive(HyperdriveRequired, total=False):
    caching: dict
    created_on: str
    modified_on: str
    mtls: dict
    origin_connection_limit: int
    restarted_on: str


class HyperdriveLoadMatch(TypedDict):
    account_id: str
    hyperdrive_id: str


class HyperdriveListMatchRequired(TypedDict):
    account_id: str


class HyperdriveListMatch(HyperdriveListMatchRequired, total=False):
    page: int
    per_page: int


class HyperdriveCreateDataRequired(TypedDict):
    account_id: str
    integration: str
    id: str
    name: str
    origin: dict
    result: dict


class HyperdriveCreateData(HyperdriveCreateDataRequired, total=False):
    caching: dict
    created_on: str
    modified_on: str
    mtls: dict
    origin_connection_limit: int
    restarted_on: str


class HyperdriveUpdateDataRequired(TypedDict):
    account_id: str
    hyperdrive_id: str


class HyperdriveUpdateData(HyperdriveUpdateDataRequired, total=False):
    caching: dict
    created_on: str
    id: str
    modified_on: str
    mtls: dict
    name: str
    origin: dict
    origin_connection_limit: int
    restarted_on: str
    result: dict


class HyperdriveRemoveMatch(TypedDict):
    account_id: str
    hyperdrive_id: str


class ImageRegistryRequired(TypedDict):
    auth: dict
    domain: str
    errors: list
    kind: Any
    messages: list
    result: list
    success: bool


class ImageRegistry(ImageRegistryRequired, total=False):
    expiration_minutes: int
    id: str
    is_public: bool
    permissions: list


class ImageRegistryListMatch(TypedDict):
    account_id: str


class ImageRegistryCreateDataRequired(TypedDict):
    account_id: str
    auth: dict
    errors: list
    kind: Any
    messages: list
    result: list
    success: bool


class ImageRegistryCreateData(ImageRegistryCreateDataRequired, total=False):
    domain: str
    expiration_minutes: int
    id: str
    is_public: bool
    permissions: list


class ImageRegistryRemoveMatch(TypedDict):
    account_id: str
    id: str


class IssueRequired(TypedDict):
    errors: list
    issueIds: list
    messages: list
    policyId: str
    result: dict
    result_info: dict
    success: bool


class Issue(IssueRequired, total=False):
    afterInactivitySeconds: int
    afterOccurrences: int
    enabled: bool
    id: str
    name: str
    service: str
    status: str
    title: str


class IssueLoadMatchRequired(TypedDict):
    account_id: str


class IssueLoadMatch(IssueLoadMatchRequired, total=False):
    automation_id: str
    id: str


class IssueListMatchRequired(TypedDict):
    account_id: str


class IssueListMatch(IssueListMatchRequired, total=False):
    order: str
    order_by: str
    page: int
    per_page: int
    search: str
    service: str
    status: str
    type: str


class IssueCreateDataRequired(TypedDict):
    account_id: str
    group_id: str
    errors: list
    issueIds: list
    messages: list
    policyId: str
    result: dict
    result_info: dict
    success: bool


class IssueCreateData(IssueCreateDataRequired, total=False):
    afterInactivitySeconds: int
    afterOccurrences: int
    enabled: bool
    id: str
    name: str
    service: str
    status: str
    title: str


class IssueUpdateDataRequired(TypedDict):
    account_id: str
    automation_id: str


class IssueUpdateData(IssueUpdateDataRequired, total=False):
    afterInactivitySeconds: int
    afterOccurrences: int
    enabled: bool
    errors: list
    id: str
    issueIds: list
    messages: list
    name: str
    policyId: str
    result: dict
    result_info: dict
    service: str
    status: str
    success: bool
    title: str


class IssueRemoveMatchRequired(TypedDict):
    account_id: str


class IssueRemoveMatch(IssueRemoveMatchRequired, total=False):
    group_id: str
    issue_id: str
    automation_id: str


class KeyRequired(TypedDict):
    errors: list
    keyNeedle: dict
    messages: list
    needle: dict
    result: list
    success: bool


class Key(KeyRequired, total=False):
    datasets: list
    filters: list
    limit: float
    to: float


class KeyCreateDataRequired(TypedDict):
    account_id: str
    errors: list
    keyNeedle: dict
    messages: list
    needle: dict
    result: list
    success: bool


class KeyCreateData(KeyCreateDataRequired, total=False):
    datasets: list
    filters: list
    limit: float
    to: float


class LiveTailRequired(TypedDict):
    errors: list
    messages: list
    result: dict
    success: bool


class LiveTail(LiveTailRequired, total=False):
    filterCombination: str
    filters: list
    scriptId: str


class LiveTailCreateDataRequired(TypedDict):
    account_id: str
    errors: list
    messages: list
    result: dict
    success: bool


class LiveTailCreateData(LiveTailCreateDataRequired, total=False):
    filterCombination: str
    filters: list
    scriptId: str


class MetricsExport(TypedDict):
    errors: list
    messages: list
    requester: dict
    resources: list
    result: list
    success: bool


class MetricsExportListMatch(TypedDict):
    account_id: str


class MetricsExportCreateData(TypedDict):
    account_id: str
    errors: list
    messages: list
    requester: dict
    resources: list
    result: list
    success: bool


class Namespace(TypedDict, total=False):
    id: str


class NamespaceRemoveMatch(TypedDict):
    account_id: str
    id: str


class PreviewRequired(TypedDict):
    errors: list
    messages: list
    result: dict
    success: bool


class Preview(PreviewRequired, total=False):
    id: str


class PreviewLoadMatch(TypedDict):
    account_id: str
    id: str
    worker_id: str


class PreviewListMatchRequired(TypedDict):
    account_id: str
    worker_id: str


class PreviewListMatch(PreviewListMatchRequired, total=False):
    name: str
    order: str
    order_by: str
    page: int
    per_page: int
    slug: str


class PreviewCreateDataRequired(TypedDict):
    account_id: str
    worker_id: str
    errors: list
    messages: list
    result: dict
    success: bool


class PreviewCreateData(PreviewCreateDataRequired, total=False):
    ignore_base_config: bool
    ignore_default: bool
    id: str


class PreviewUpdateDataRequired(TypedDict):
    account_id: str
    id: str
    worker_id: str


class PreviewUpdateData(PreviewUpdateDataRequired, total=False):
    ignore_base_config: bool
    ignore_default: bool
    errors: list
    messages: list
    result: dict
    success: bool


class PreviewRemoveMatchRequired(TypedDict):
    account_id: str
    id: str
    worker_id: str


class PreviewRemoveMatch(PreviewRemoveMatchRequired, total=False):
    force: bool


class PreviewDeploymentRequired(TypedDict):
    errors: list
    messages: list
    result: Any
    success: bool


class PreviewDeployment(PreviewDeploymentRequired, total=False):
    id: str


class PreviewDeploymentLoadMatchRequired(TypedDict):
    account_id: str
    id: str
    preview_id: str
    worker_id: str


class PreviewDeploymentLoadMatch(PreviewDeploymentLoadMatchRequired, total=False):
    include: str


class PreviewDeploymentListMatchRequired(TypedDict):
    account_id: str
    id: str
    worker_id: str


class PreviewDeploymentListMatch(PreviewDeploymentListMatchRequired, total=False):
    page: int
    per_page: int


class PreviewDeploymentCreateDataRequired(TypedDict):
    account_id: str
    id: str
    worker_id: str
    errors: list
    messages: list
    result: Any
    success: bool


class PreviewDeploymentCreateData(PreviewDeploymentCreateDataRequired, total=False):
    ignore_default: bool


class PreviewDeploymentUpdateDataRequired(TypedDict):
    account_id: str
    preview_id: str
    worker_id: str


class PreviewDeploymentUpdateData(PreviewDeploymentUpdateDataRequired, total=False):
    ignore_default: bool
    errors: list
    id: str
    messages: list
    result: Any
    success: bool


class QueryRequired(TypedDict):
    errors: list
    messages: list
    queryId: str
    result: dict
    success: bool
    timeframe: dict


class Query(QueryRequired, total=False):
    chart: bool
    chartType: str
    compare: bool
    distributionScale: str
    dry: bool
    granularity: float
    ignoreSeries: bool
    limit: float
    offset: str
    offsetBy: float
    offsetDirection: str
    parameters: dict
    view: str


class QueryCreateDataRequired(TypedDict):
    account_id: str
    errors: list
    messages: list
    queryId: str
    result: dict
    success: bool
    timeframe: dict


class QueryCreateData(QueryCreateDataRequired, total=False):
    chart: bool
    chartType: str
    compare: bool
    distributionScale: str
    dry: bool
    granularity: float
    ignoreSeries: bool
    limit: float
    offset: str
    offsetBy: float
    offsetDirection: str
    parameters: dict
    view: str


class RepositoryConnection(TypedDict):
    provider_account_id: str
    provider_account_name: str
    provider_type: str
    repo_id: str
    repo_name: str


class RepositoryConnectionUpdateDataRequired(TypedDict):
    account_id: str


class RepositoryConnectionUpdateData(RepositoryConnectionUpdateDataRequired, total=False):
    provider_account_id: str
    provider_account_name: str
    provider_type: str
    repo_id: str
    repo_name: str


class RolloutRequired(TypedDict):
    description: str
    strategy: str
    target_configuration: dict


class Rollout(RolloutRequired, total=False):
    kind: str
    percentage: int
    step_percentage: int
    steps: list


class RolloutCreateDataRequired(TypedDict):
    account_id: str
    application_id: str
    description: str
    strategy: str
    target_configuration: dict


class RolloutCreateData(RolloutCreateDataRequired, total=False):
    kind: str
    percentage: int
    step_percentage: int
    steps: list


class SavedQueryRequired(TypedDict):
    description: str
    errors: list
    messages: list
    name: str
    parameters: dict
    result: dict
    success: bool


class SavedQuery(SavedQueryRequired, total=False):
    id: str


class SavedQueryLoadMatch(TypedDict):
    account_id: str
    id: str


class SavedQueryListMatchRequired(TypedDict):
    account_id: str


class SavedQueryListMatch(SavedQueryListMatchRequired, total=False):
    order: str
    order_by: str
    page: float
    per_page: float


class SavedQueryCreateDataRequired(TypedDict):
    account_id: str
    description: str
    errors: list
    messages: list
    name: str
    parameters: dict
    result: dict
    success: bool


class SavedQueryCreateData(SavedQueryCreateDataRequired, total=False):
    id: str


class SavedQueryUpdateDataRequired(TypedDict):
    account_id: str
    id: str


class SavedQueryUpdateData(SavedQueryUpdateDataRequired, total=False):
    description: str
    errors: list
    messages: list
    name: str
    parameters: dict
    result: dict
    success: bool


class SavedQueryRemoveMatch(TypedDict):
    account_id: str
    id: str


class Script(TypedDict, total=False):
    id: str


class ScriptRemoveMatchRequired(TypedDict):
    account_id: str
    id: str


class ScriptRemoveMatch(ScriptRemoveMatchRequired, total=False):
    force: bool


class ScriptSettingRequired(TypedDict):
    errors: list
    messages: list
    result: dict
    success: bool


class ScriptSetting(ScriptSettingRequired, total=False):
    logpush: bool
    observability: Any
    tags: Any
    tail_consumers: list


class ScriptSettingListMatch(TypedDict):
    account_id: str
    script_name: str


class ScriptSettingUpdateDataRequired(TypedDict):
    account_id: str
    script_name: str


class ScriptSettingUpdateData(ScriptSettingUpdateDataRequired, total=False):
    errors: list
    logpush: bool
    messages: list
    observability: Any
    result: dict
    success: bool
    tags: Any
    tail_consumers: list


class SecretRequired(TypedDict):
    result: Any


class Secret(SecretRequired, total=False):
    comment: str
    id: str
    scopes: list
    value: str


class SecretLoadMatch(TypedDict):
    account_id: str
    id: str
    store_id: str


class SecretListMatchRequired(TypedDict):
    account_id: str
    store_id: str


class SecretListMatch(SecretListMatchRequired, total=False):
    direction: str
    order: str
    page: int
    per_page: int
    scope: list
    search: str


class SecretCreateDataRequired(TypedDict):
    account_id: str
    store_id: str
    result: Any


class SecretCreateData(SecretCreateDataRequired, total=False):
    comment: str
    id: str
    scopes: list
    value: str


class SecretUpdateDataRequired(TypedDict):
    account_id: str
    id: str
    store_id: str


class SecretUpdateData(SecretUpdateDataRequired, total=False):
    comment: str
    result: Any
    scopes: list
    value: str


class SecretRemoveMatchRequired(TypedDict):
    account_id: str
    store_id: str


class SecretRemoveMatch(SecretRemoveMatchRequired, total=False):
    id: str


class SecretsStoreDelete(TypedDict):
    pass


class SecretsStoreDeleteRemoveMatchRequired(TypedDict):
    account_id: str
    store_id: str


class SecretsStoreDeleteRemoveMatch(SecretsStoreDeleteRemoveMatchRequired, total=False):
    force: bool


class SecretsStoreQuota(TypedDict):
    result: Any


class SecretsStoreQuotaLoadMatch(TypedDict):
    account_id: str


class SecretsStoreSecretRequired(TypedDict):
    name: str
    scopes: list


class SecretsStoreSecret(SecretsStoreSecretRequired, total=False):
    comment: str


class SecretsStoreSecretCreateDataRequired(TypedDict):
    account_id: str
    secret_id: str
    store_id: str
    name: str
    scopes: list


class SecretsStoreSecretCreateData(SecretsStoreSecretCreateDataRequired, total=False):
    comment: str


class SecretsStoreStoreRequired(TypedDict):
    name: str
    result: Any


class SecretsStoreStore(SecretsStoreStoreRequired, total=False):
    id: str


class SecretsStoreStoreLoadMatch(TypedDict):
    account_id: str
    id: str


class SecretsStoreStoreCreateDataRequired(TypedDict):
    account_id: str
    name: str
    result: Any


class SecretsStoreStoreCreateData(SecretsStoreStoreCreateDataRequired, total=False):
    id: str


class SecretsStoreStoresResponseCollection(TypedDict, total=False):
    result: list


class SecretsStoreStoresResponseCollectionListMatchRequired(TypedDict):
    account_id: str


class SecretsStoreStoresResponseCollectionListMatch(SecretsStoreStoresResponseCollectionListMatchRequired, total=False):
    direction: str
    order: str
    page: int
    per_page: int


class Setting(TypedDict):
    errors: list
    messages: list
    result: dict
    success: bool


class SettingListMatch(TypedDict):
    account_id: str
    environment_name: str
    service_id: str


class SettingUpdateDataRequired(TypedDict):
    account_id: str
    environment_name: str
    service_id: str


class SettingUpdateData(SettingUpdateDataRequired, total=False):
    errors: list
    messages: list
    result: dict
    success: bool


class SharedRequired(TypedDict):
    errors: list
    messages: list
    result: dict
    success: bool


class Shared(SharedRequired, total=False):
    id: str


class SharedLoadMatchRequired(TypedDict):
    account_id: str
    id: str


class SharedLoadMatch(SharedLoadMatchRequired, total=False):
    view: str


class SharedCreateDataRequired(TypedDict):
    account_id: str
    errors: list
    messages: list
    result: dict
    success: bool


class SharedCreateData(SharedCreateDataRequired, total=False):
    id: str


class Tail(TypedDict, total=False):
    id: str


class TailRemoveMatch(TypedDict):
    account_id: str
    id: str
    script_id: str


class Token(TypedDict, total=False):
    id: str


class TokenRemoveMatch(TypedDict):
    account_id: str
    id: str


class TriggerRequired(TypedDict):
    branch_excludes: list
    branch_includes: list
    build_command: str
    build_token_uuid: str
    deploy_command: str
    external_script_id: str
    path_excludes: list
    path_includes: list
    repo_connection_uuid: str
    root_directory: str
    trigger_name: str


class Trigger(TriggerRequired, total=False):
    build_caching_enabled: bool
    id: str


class TriggerCreateDataRequired(TypedDict):
    account_id: str
    branch_excludes: list
    branch_includes: list
    build_command: str
    build_token_uuid: str
    deploy_command: str
    external_script_id: str
    path_excludes: list
    path_includes: list
    repo_connection_uuid: str
    root_directory: str
    trigger_name: str


class TriggerCreateData(TriggerCreateDataRequired, total=False):
    build_caching_enabled: bool
    id: str


class TriggerUpdateDataRequired(TypedDict):
    account_id: str
    id: str


class TriggerUpdateData(TriggerUpdateDataRequired, total=False):
    branch_excludes: list
    branch_includes: list
    build_caching_enabled: bool
    build_command: str
    build_token_uuid: str
    deploy_command: str
    external_script_id: str
    path_excludes: list
    path_includes: list
    repo_connection_uuid: str
    root_directory: str
    trigger_name: str


class TriggerRemoveMatch(TypedDict):
    account_id: str
    id: str


class Usage(TypedDict):
    errors: list
    messages: list
    result: dict
    success: bool


class UsageListMatch(TypedDict):
    account_id: str
    to: str


class ValueRequired(TypedDict):
    datasets: list
    errors: list
    key: str
    messages: list
    needle: dict
    result: list
    success: bool
    timeframe: dict
    type: str


class Value(ValueRequired, total=False):
    filters: list
    limit: float


class ValueCreateDataRequired(TypedDict):
    account_id: str
    datasets: list
    errors: list
    key: str
    messages: list
    needle: dict
    result: list
    success: bool
    timeframe: dict
    type: str


class ValueCreateData(ValueCreateDataRequired, total=False):
    filters: list
    limit: float


class VersionRequired(TypedDict):
    cache_options: dict
    created_on: str
    errors: list
    id: str
    messages: list
    number: int
    result: dict
    success: bool
    urls: list


class Version(VersionRequired, total=False):
    annotations: dict
    assets: dict
    author_email: str
    author_id: str
    bindings: list
    compatibility_date: str
    compatibility_flags: list
    containers: list
    exports: Any
    exports_reconciliation: Any
    limits: dict
    main_module: str
    migration_tag: str
    migrations: Any
    modules: list
    package_dependencies: list
    placement: dict
    source: str
    startup_time_ms: int
    usage_model: str


class VersionLoadMatchRequired(TypedDict):
    account_id: str
    id: str
    worker_id: str


class VersionLoadMatch(VersionLoadMatchRequired, total=False):
    include: str


class VersionListMatchRequired(TypedDict):
    account_id: str
    worker_id: str


class VersionListMatch(VersionListMatchRequired, total=False):
    page: int
    per_page: int


class VersionCreateDataRequired(TypedDict):
    account_id: str
    worker_id: str
    cache_options: dict
    created_on: str
    errors: list
    id: str
    messages: list
    number: int
    result: dict
    success: bool
    urls: list


class VersionCreateData(VersionCreateDataRequired, total=False):
    deploy: bool
    annotations: dict
    assets: dict
    author_email: str
    author_id: str
    bindings: list
    compatibility_date: str
    compatibility_flags: list
    containers: list
    exports: Any
    exports_reconciliation: Any
    limits: dict
    main_module: str
    migration_tag: str
    migrations: Any
    modules: list
    package_dependencies: list
    placement: dict
    source: str
    startup_time_ms: int
    usage_model: str


class VersionUpdateDataRequired(TypedDict):
    account_id: str
    worker_id: str


class VersionUpdateData(VersionUpdateDataRequired, total=False):
    deploy: bool
    annotations: dict
    assets: dict
    author_email: str
    author_id: str
    bindings: list
    cache_options: dict
    compatibility_date: str
    compatibility_flags: list
    containers: list
    created_on: str
    errors: list
    exports: Any
    exports_reconciliation: Any
    id: str
    limits: dict
    main_module: str
    messages: list
    migration_tag: str
    migrations: Any
    modules: list
    number: int
    package_dependencies: list
    placement: dict
    result: dict
    source: str
    startup_time_ms: int
    success: bool
    urls: list
    usage_model: str


class VersionRemoveMatch(TypedDict):
    account_id: str
    id: str
    worker_id: str


class WorkerRequired(TypedDict):
    errors: list
    git_repository: Any
    messages: list
    previews_base_config: dict
    previews_enabled: bool
    production_settings: dict
    result: dict
    script_tag: str
    success: bool


class Worker(WorkerRequired, total=False):
    auto_build: bool
    auto_delete: bool
    branch: Any
    commit_hash: Any
    id: str
    result_info: dict
    seed_repo: Any
    settings: dict


class WorkerLoadMatchRequired(TypedDict):
    account_id: str


class WorkerLoadMatch(WorkerLoadMatchRequired, total=False):
    preview_id: str
    worker_id: str
    id: str


class WorkerListMatchRequired(TypedDict):
    account_id: str


class WorkerListMatch(WorkerListMatchRequired, total=False):
    order: str
    order_by: str
    page: int
    per_page: int
    preview_id: str
    worker_id: str


class WorkerCreateDataRequired(TypedDict):
    account_id: str
    errors: list
    git_repository: Any
    messages: list
    previews_base_config: dict
    previews_enabled: bool
    production_settings: dict
    result: dict
    script_tag: str
    success: bool


class WorkerCreateData(WorkerCreateDataRequired, total=False):
    preview_id: str
    worker_id: str
    auto_build: bool
    auto_delete: bool
    branch: Any
    commit_hash: Any
    id: str
    result_info: dict
    seed_repo: Any
    settings: dict


class WorkerUpdateDataRequired(TypedDict):
    account_id: str
    id: str


class WorkerUpdateData(WorkerUpdateDataRequired, total=False):
    auto_build: bool
    auto_delete: bool
    branch: Any
    commit_hash: Any
    errors: list
    git_repository: Any
    messages: list
    previews_base_config: dict
    previews_enabled: bool
    production_settings: dict
    result: dict
    result_info: dict
    script_tag: str
    seed_repo: Any
    settings: dict
    success: bool


class WorkerRemoveMatchRequired(TypedDict):
    account_id: str
    id: str


class WorkerRemoveMatch(WorkerRemoveMatchRequired, total=False):
    force: bool


class WorkerCronTrigger(TypedDict):
    errors: list
    messages: list
    result: dict
    success: bool


class WorkerCronTriggerListMatch(TypedDict):
    account_id: str
    script_name: str


class WorkerCronTriggerUpdateDataRequired(TypedDict):
    account_id: str
    script_name: str


class WorkerCronTriggerUpdateData(WorkerCronTriggerUpdateDataRequired, total=False):
    errors: list
    messages: list
    result: dict
    success: bool


class WorkerDeploymentRequired(TypedDict):
    created_on: str
    errors: list
    id: str
    messages: list
    result: dict
    source: str
    strategy: str
    success: bool
    versions: list


class WorkerDeployment(WorkerDeploymentRequired, total=False):
    annotations: dict
    author_email: str


class WorkerDeploymentLoadMatchRequired(TypedDict):
    account_id: str


class WorkerDeploymentLoadMatch(WorkerDeploymentLoadMatchRequired, total=False):
    script_name: str
    page: int
    per_page: int
    since: str
    until: str
    id: str
    script_id: str


class WorkerDeploymentCreateDataRequired(TypedDict):
    account_id: str
    script_name: str
    created_on: str
    errors: list
    id: str
    messages: list
    result: dict
    source: str
    strategy: str
    success: bool
    versions: list


class WorkerDeploymentCreateData(WorkerDeploymentCreateDataRequired, total=False):
    force: bool
    annotations: dict
    author_email: str


class WorkerEnvironment(TypedDict):
    pass


class WorkerEnvironmentLoadMatch(TypedDict):
    account_id: str
    environment_name: str
    service_id: str


class WorkerRouteRequired(TypedDict):
    errors: list
    id: str
    messages: list
    pattern: str
    result: dict
    success: bool


class WorkerRoute(WorkerRouteRequired, total=False):
    script: str


class WorkerRouteLoadMatch(TypedDict):
    id: str
    zone_id: str


class WorkerRouteListMatch(TypedDict):
    zone_id: str


class WorkerRouteCreateDataRequired(TypedDict):
    zone_id: str
    errors: list
    id: str
    messages: list
    pattern: str
    result: dict
    success: bool


class WorkerRouteCreateData(WorkerRouteCreateDataRequired, total=False):
    script: str


class WorkerRouteUpdateDataRequired(TypedDict):
    id: str
    zone_id: str


class WorkerRouteUpdateData(WorkerRouteUpdateDataRequired, total=False):
    errors: list
    messages: list
    pattern: str
    result: dict
    script: str
    success: bool


class WorkerRouteRemoveMatch(TypedDict):
    id: str
    zone_id: str


class WorkerScriptRequired(TypedDict):
    errors: list
    messages: list
    success: bool


class WorkerScript(WorkerScriptRequired, total=False):
    id: str
    result: dict


class WorkerScriptLoadMatchRequired(TypedDict):
    account_id: str


class WorkerScriptLoadMatch(WorkerScriptLoadMatchRequired, total=False):
    script_id: str
    secret_name: str
    url_encoded: bool
    id: str


class WorkerScriptListMatchRequired(TypedDict):
    account_id: str


class WorkerScriptListMatch(WorkerScriptListMatchRequired, total=False):
    id: str
    name: str
    order_by: str
    page: int
    per_page: int
    script_name: str


class WorkerScriptCreateDataRequired(TypedDict):
    account_id: str
    script_name: str
    errors: list
    messages: list
    success: bool


class WorkerScriptCreateData(WorkerScriptCreateDataRequired, total=False):
    id: str
    result: dict


class WorkerScriptUpdateDataRequired(TypedDict):
    account_id: str


class WorkerScriptUpdateData(WorkerScriptUpdateDataRequired, total=False):
    id: str
    bindings_inherit: str
    script_name: str
    errors: list
    messages: list
    result: dict
    success: bool


class WorkerScriptRemoveMatch(TypedDict):
    account_id: str
    script_name: str


class WorkerSubdomain(TypedDict):
    errors: list
    messages: list
    result: dict
    subdomain: str
    success: bool


class WorkerSubdomainListMatch(TypedDict):
    account_id: str


class WorkerSubdomainUpdateDataRequired(TypedDict):
    account_id: str


class WorkerSubdomainUpdateData(WorkerSubdomainUpdateDataRequired, total=False):
    errors: list
    messages: list
    result: dict
    subdomain: str
    success: bool


class WorkerSubdomainRemoveMatch(TypedDict):
    account_id: str


class WorkerTailLog(TypedDict):
    errors: list
    messages: list
    result: dict
    success: bool


class WorkerTailLogListMatch(TypedDict):
    account_id: str
    script_name: str


class WorkerTailLogCreateData(TypedDict):
    account_id: str
    script_name: str
    errors: list
    messages: list
    result: dict
    success: bool


class WorkersAccountSettingRequired(TypedDict):
    errors: list
    messages: list
    result: dict
    success: bool


class WorkersAccountSetting(WorkersAccountSettingRequired, total=False):
    default_usage_model: str
    green_compute: bool


class WorkersAccountSettingListMatch(TypedDict):
    account_id: str


class WorkersAccountSettingUpdateDataRequired(TypedDict):
    account_id: str


class WorkersAccountSettingUpdateData(WorkersAccountSettingUpdateDataRequired, total=False):
    default_usage_model: str
    errors: list
    green_compute: bool
    messages: list
    result: dict
    success: bool


class WorkersApiResponseNullResultRequired(TypedDict):
    errors: list
    messages: list
    success: bool


class WorkersApiResponseNullResult(WorkersApiResponseNullResultRequired, total=False):
    result: dict


class WorkersApiResponseNullResultUpdateDataRequired(TypedDict):
    account_id: str
    namespace_id: str
    script_id: str
    tag: str


class WorkersApiResponseNullResultUpdateData(WorkersApiResponseNullResultUpdateDataRequired, total=False):
    errors: list
    messages: list
    result: dict
    success: bool


class WorkersApiResponseNullResultRemoveMatchRequired(TypedDict):
    account_id: str


class WorkersApiResponseNullResultRemoveMatch(WorkersApiResponseNullResultRemoveMatchRequired, total=False):
    namespace_id: str
    script_id: str
    secret_name: str
    url_encoded: bool
    script_name: str
    force: bool
    tag: str


class WorkersCompletedUploadAsset(TypedDict):
    pass


class WorkersCompletedUploadAssetCreateData(TypedDict):
    account_id: str
    base64: bool


class WorkersCreateAssetsUploadSession(TypedDict):
    manifest: dict


class WorkersCreateAssetsUploadSessionCreateDataRequired(TypedDict):
    account_id: str
    script_name: str
    manifest: dict


class WorkersCreateAssetsUploadSessionCreateData(WorkersCreateAssetsUploadSessionCreateDataRequired, total=False):
    namespace_id: str


class WorkersForPlatform(TypedDict):
    errors: list
    messages: list
    result: dict
    success: bool


class WorkersForPlatformLoadMatchRequired(TypedDict):
    account_id: str
    namespace_id: str


class WorkersForPlatformLoadMatch(WorkersForPlatformLoadMatchRequired, total=False):
    script_id: str
    secret_name: str
    url_encoded: bool
    script_name: str


class WorkersForPlatformListMatchRequired(TypedDict):
    account_id: str


class WorkersForPlatformListMatch(WorkersForPlatformListMatchRequired, total=False):
    dispatch_namespace: str
    tag: str
    namespace_id: str
    script_name: str


class WorkersForPlatformUpdateDataRequired(TypedDict):
    account_id: str
    namespace_id: str
    script_name: str


class WorkersForPlatformUpdateData(WorkersForPlatformUpdateDataRequired, total=False):
    bindings_inherit: str
    errors: list
    messages: list
    result: dict
    success: bool


class WorkersKvApiResponseCommonNoResult(TypedDict):
    pass


class WorkersKvApiResponseCommonNoResultUpdateDataRequired(TypedDict):
    account_id: str
    key_name: str
    namespace_id: str


class WorkersKvApiResponseCommonNoResultUpdateData(WorkersKvApiResponseCommonNoResultUpdateDataRequired, total=False):
    expiration: float
    expiration_ttl: float


class WorkersKvApiResponseCommonNoResultRemoveMatchRequired(TypedDict):
    account_id: str
    namespace_id: str


class WorkersKvApiResponseCommonNoResultRemoveMatch(WorkersKvApiResponseCommonNoResultRemoveMatchRequired, total=False):
    key_name: str


class WorkersKvNamespaceRequired(TypedDict):
    errors: list
    keys: list
    messages: list
    success: bool
    title: str


class WorkersKvNamespace(WorkersKvNamespaceRequired, total=False):
    id: str
    jurisdiction: str
    result: Any
    result_info: dict
    type: str
    withMetadata: bool


class WorkersKvNamespaceLoadMatchRequired(TypedDict):
    account_id: str


class WorkersKvNamespaceLoadMatch(WorkersKvNamespaceLoadMatchRequired, total=False):
    key_name: str
    namespace_id: str
    id: str


class WorkersKvNamespaceListMatchRequired(TypedDict):
    account_id: str


class WorkersKvNamespaceListMatch(WorkersKvNamespaceListMatchRequired, total=False):
    namespace_id: str
    cursor: str
    limit: float
    prefix: str
    direction: str
    order: str
    page: float
    per_page: float


class WorkersKvNamespaceCreateDataRequired(TypedDict):
    account_id: str
    errors: list
    keys: list
    messages: list
    success: bool
    title: str


class WorkersKvNamespaceCreateData(WorkersKvNamespaceCreateDataRequired, total=False):
    namespace_id: str
    id: str
    jurisdiction: str
    result: Any
    result_info: dict
    type: str
    withMetadata: bool


class WorkersKvNamespaceUpdateDataRequired(TypedDict):
    account_id: str


class WorkersKvNamespaceUpdateData(WorkersKvNamespaceUpdateDataRequired, total=False):
    id: str
    namespace_id: str
    errors: list
    jurisdiction: str
    keys: list
    messages: list
    result: Any
    result_info: dict
    success: bool
    title: str
    type: str
    withMetadata: bool


class WorkersKvNamespaceRemoveMatch(TypedDict):
    account_id: str
    namespace_id: str


class WorkersNamespaceListRequired(TypedDict):
    errors: list
    messages: list
    success: bool


class WorkersNamespaceList(WorkersNamespaceListRequired, total=False):
    result: list


class WorkersNamespaceListListMatch(TypedDict):
    account_id: str


class WorkersNamespaceScriptDeleteBulk(TypedDict):
    pass


class WorkersNamespaceScriptDeleteBulkRemoveMatchRequired(TypedDict):
    account_id: str
    dispatch_namespace: str
    tag: str


class WorkersNamespaceScriptDeleteBulkRemoveMatch(WorkersNamespaceScriptDeleteBulkRemoveMatchRequired, total=False):
    limit: int


class WorkersNamespaceScriptResponseSingle(TypedDict):
    errors: list
    messages: list
    result: dict
    success: bool


class WorkersNamespaceScriptResponseSingleLoadMatch(TypedDict):
    account_id: str
    namespace_id: str
    script_name: str


class WorkersNamespaceScriptResponseSingleUpdateDataRequired(TypedDict):
    account_id: str
    namespace_id: str
    script_name: str


class WorkersNamespaceScriptResponseSingleUpdateData(WorkersNamespaceScriptResponseSingleUpdateDataRequired, total=False):
    errors: list
    messages: list
    result: dict
    success: bool


class WorkersNamespaceSingleRequired(TypedDict):
    errors: list
    messages: list
    success: bool


class WorkersNamespaceSingle(WorkersNamespaceSingleRequired, total=False):
    name: str
    result: dict
    trusted_workers: bool


class WorkersNamespaceSingleLoadMatch(TypedDict):
    account_id: str
    dispatch_namespace: str


class WorkersNamespaceSingleCreateDataRequired(TypedDict):
    account_id: str
    errors: list
    messages: list
    success: bool


class WorkersNamespaceSingleCreateData(WorkersNamespaceSingleCreateDataRequired, total=False):
    name: str
    result: dict
    trusted_workers: bool


class WorkersNamespaceSingleUpdateDataRequired(TypedDict):
    account_id: str
    dispatch_namespace: str


class WorkersNamespaceSingleUpdateData(WorkersNamespaceSingleUpdateDataRequired, total=False):
    errors: list
    messages: list
    name: str
    result: dict
    success: bool
    trusted_workers: bool


class WorkersPipelinesOtherRequired(TypedDict):
    created_at: str
    destination: dict
    endpoint: str
    graph: dict
    http: dict
    id: str
    modified_at: str
    name: str
    source: list
    sql: str
    status: str
    tables: list
    type: str
    version: float
    worker_binding: dict


class WorkersPipelinesOther(WorkersPipelinesOtherRequired, total=False):
    config: Any
    failure_reason: str
    format: Any
    schema: dict


class WorkersPipelinesOtherLoadMatchRequired(TypedDict):
    account_id: str


class WorkersPipelinesOtherLoadMatch(WorkersPipelinesOtherLoadMatchRequired, total=False):
    pipeline_id: str
    pipeline_name: str
    sink_id: str
    stream_id: str


class WorkersPipelinesOtherListMatchRequired(TypedDict):
    account_id: str


class WorkersPipelinesOtherListMatch(WorkersPipelinesOtherListMatchRequired, total=False):
    name: str
    page: float
    per_page: float
    pipeline_id: str
    search: str


class WorkersPipelinesOtherCreateDataRequired(TypedDict):
    account_id: str
    created_at: str
    destination: dict
    endpoint: str
    graph: dict
    http: dict
    id: str
    modified_at: str
    name: str
    source: list
    sql: str
    status: str
    tables: list
    type: str
    version: float
    worker_binding: dict


class WorkersPipelinesOtherCreateData(WorkersPipelinesOtherCreateDataRequired, total=False):
    config: Any
    failure_reason: str
    format: Any
    schema: dict


class WorkersPipelinesOtherUpdateDataRequired(TypedDict):
    account_id: str
    pipeline_name: str


class WorkersPipelinesOtherUpdateData(WorkersPipelinesOtherUpdateDataRequired, total=False):
    config: Any
    created_at: str
    destination: dict
    endpoint: str
    failure_reason: str
    format: Any
    graph: dict
    http: dict
    id: str
    modified_at: str
    name: str
    schema: dict
    source: list
    sql: str
    status: str
    tables: list
    type: str
    version: float
    worker_binding: dict


class WorkersPipelinesOtherRemoveMatchRequired(TypedDict):
    account_id: str


class WorkersPipelinesOtherRemoveMatch(WorkersPipelinesOtherRemoveMatchRequired, total=False):
    pipeline_id: str
    pipeline_name: str
    sink_id: str
    stream_id: str


class WorkersScriptAndVersionSetting(TypedDict):
    errors: list
    messages: list
    result: dict
    success: bool


class WorkersScriptAndVersionSettingListMatch(TypedDict):
    account_id: str
    script_name: str


class WorkersScriptAndVersionSettingUpdateDataRequired(TypedDict):
    account_id: str
    script_name: str


class WorkersScriptAndVersionSettingUpdateData(WorkersScriptAndVersionSettingUpdateDataRequired, total=False):
    errors: list
    messages: list
    result: dict
    success: bool


class WorkersScriptResponseCollection(TypedDict):
    errors: list
    messages: list
    result: list
    success: bool


class WorkersScriptResponseCollectionListMatchRequired(TypedDict):
    account_id: str


class WorkersScriptResponseCollectionListMatch(WorkersScriptResponseCollectionListMatchRequired, total=False):
    tag: str


class WorkersScriptResponseSingle(TypedDict):
    pass


class WorkersScriptResponseSingleUpdateDataRequired(TypedDict):
    account_id: str


class WorkersScriptResponseSingleUpdateData(WorkersScriptResponseSingleUpdateDataRequired, total=False):
    environment_name: str
    service_id: str
    namespace_id: str
    script_name: str


class WorkersSmartPlacement(TypedDict):
    errors: list
    messages: list
    result: dict
    success: bool


class WorkersSmartPlacementListMatch(TypedDict):
    account_id: str


class WorkersUsageModelRequired(TypedDict):
    errors: list
    messages: list
    result: dict
    success: bool


class WorkersUsageModel(WorkersUsageModelRequired, total=False):
    usage_model: str
    user_limits: dict


class WorkersUsageModelListMatch(TypedDict):
    account_id: str
    script_name: str


class WorkersUsageModelUpdateDataRequired(TypedDict):
    account_id: str
    script_name: str


class WorkersUsageModelUpdateData(WorkersUsageModelUpdateDataRequired, total=False):
    errors: list
    messages: list
    result: dict
    success: bool
    usage_model: str
    user_limits: dict


class WorkersVersionsList(TypedDict):
    errors: list
    messages: list
    result: dict
    success: bool


class WorkersVersionsListListMatchRequired(TypedDict):
    account_id: str
    script_name: str


class WorkersVersionsListListMatch(WorkersVersionsListListMatchRequired, total=False):
    deployable: bool
    page: int
    per_page: int


class WorkersVersionsSingle(TypedDict):
    errors: list
    messages: list
    result: Any
    success: bool


class WorkersVersionsSingleLoadMatch(TypedDict):
    account_id: str
    script_id: str
    version_id: str


class WorkersVersionsUpload(TypedDict):
    pass


class WorkersVersionsUploadCreateDataRequired(TypedDict):
    account_id: str
    script_name: str


class WorkersVersionsUploadCreateData(WorkersVersionsUploadCreateDataRequired, total=False):
    bindings_inherit: str


class WorkflowRequired(TypedDict):
    class_name: str
    errors: list
    instances: list
    messages: list
    result: dict
    result_info: dict
    script_name: str
    success: bool


class Workflow(WorkflowRequired, total=False):
    concurrency: dict
    default_retention: dict
    id: str
    limits: dict
    schedules: list


class WorkflowLoadMatchRequired(TypedDict):
    account_id: str


class WorkflowLoadMatch(WorkflowLoadMatchRequired, total=False):
    instance_id: str
    workflow_id: str
    cursor: int
    filter: list
    order: str
    simple: str
    version_id: str
    id: str
    script_name: str


class WorkflowListMatchRequired(TypedDict):
    account_id: str


class WorkflowListMatch(WorkflowListMatchRequired, total=False):
    instance_id: str
    workflow_id: str
    attempt: int
    name: str
    type: str
    page: float
    per_page: float
    search: str
    version_id: str


class WorkflowCreateDataRequired(TypedDict):
    account_id: str
    workflow_id: str
    class_name: str
    errors: list
    instances: list
    messages: list
    result: dict
    result_info: dict
    script_name: str
    success: bool


class WorkflowCreateData(WorkflowCreateDataRequired, total=False):
    event_type: str
    instance_id: str
    concurrency: dict
    default_retention: dict
    id: str
    limits: dict
    schedules: list


class WorkflowUpdateDataRequired(TypedDict):
    account_id: str


class WorkflowUpdateData(WorkflowUpdateDataRequired, total=False):
    id: str
    script_name: str
    class_name: str
    concurrency: dict
    default_retention: dict
    errors: list
    instances: list
    limits: dict
    messages: list
    result: dict
    result_info: dict
    schedules: list
    success: bool


class WorkflowRemoveMatchRequired(TypedDict):
    account_id: str


class WorkflowRemoveMatch(WorkflowRemoveMatchRequired, total=False):
    instance_id: str
    workflow_id: str
    id: str
    script_name: str
