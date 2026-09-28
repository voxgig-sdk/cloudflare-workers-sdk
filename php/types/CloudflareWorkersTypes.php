<?php
declare(strict_types=1);

// Typed models for the CloudflareWorkers SDK.
//
// GENERATED from the API model: main.kit.entity.<e>.fields{} and per-op
// params (op.<name>.points[].g.params[]). Field/param types come from the
// canonical type sentinels via @voxgig/sdkgen canonToType (source of truth:
// @voxgig/apidef VALID_CANON). Do not edit by hand.
//
// These are documentation-grade value objects (PHP 8 typed properties),
// registered on the composer classmap autoload. The SDK boundary exchanges
// assoc-arrays; these classes name the shapes for tooling and typed callers.

/** Account entity data model. */
class Account
{
    public ?string $id = null;
}

/** Request payload for Account#list. */
class AccountListMatch
{
    public string $id;
}

/** Application entity data model. */
class Application
{
    public ?array $configuration = null;
    public ?array $constraints = null;
    public array $errors;
    public ?string $id = null;
    public ?int $max_instances = null;
    public array $messages;
    public mixed $observability = null;
    public mixed $result;
    public array $result_info;
    public ?int $rollout_active_grace_period = null;
    public bool $success;
}

/** Request payload for Application#load. */
class ApplicationLoadMatch
{
    public string $account_id;
    public string $id;
}

/** Request payload for Application#list. */
class ApplicationListMatch
{
    public string $account_id;
    public ?string $image = null;
    public ?string $name = null;
    public ?string $page_token = null;
    public ?int $per_page = null;
}

/** Request payload for Application#create. */
class ApplicationCreateData
{
    public string $account_id;
    public ?array $configuration = null;
    public ?array $constraints = null;
    public array $errors;
    public ?string $id = null;
    public ?int $max_instances = null;
    public array $messages;
    public mixed $observability = null;
    public mixed $result;
    public array $result_info;
    public ?int $rollout_active_grace_period = null;
    public bool $success;
}

/** Request payload for Application#update. */
class ApplicationUpdateData
{
    public string $account_id;
    public string $id;
    public ?array $configuration = null;
    public ?array $constraints = null;
    public ?array $errors = null;
    public ?int $max_instances = null;
    public ?array $messages = null;
    public mixed $observability = null;
    public mixed $result = null;
    public ?array $result_info = null;
    public ?int $rollout_active_grace_period = null;
    public ?bool $success = null;
}

/** Request payload for Application#remove. */
class ApplicationRemoveMatch
{
    public string $account_id;
    public string $id;
}

/** Brapi entity data model. */
class Brapi
{
    public string $Browser;
    public string $ProtocolVersion;
    public string $UserAgent;
    public string $V8Version;
    public string $WebKitVersion;
    public ?float $actionTimeout = null;
    public ?array $addScriptTag = null;
    public ?array $addStyleTag = null;
    public ?array $allowRequestPattern = null;
    public ?array $allowResourceTypes = null;
    public array $authenticate;
    public ?bool $bestAttempt = null;
    public ?float $closeReason = null;
    public ?string $closeReasonText = null;
    public ?array $commands = null;
    public ?float $connectionEndTime = null;
    public ?string $connectionId = null;
    public ?float $connectionStartTime = null;
    public ?array $cookies = null;
    public ?array $custom_ai = null;
    public ?array $dependencies = null;
    public ?string $description = null;
    public ?string $devtoolsFrontendUrl = null;
    public string $domain;
    public array $elements;
    public ?string $emulateMediaType = null;
    public ?float $endTime = null;
    public ?array $errors = null;
    public ?array $events = null;
    public ?bool $excludeExternalLinks = null;
    public ?bool $experimental = null;
    public ?array $formats = null;
    public ?array $gotoOptions = null;
    public ?array $guardrails = null;
    public ?string $html = null;
    public string $id;
    public ?bool $interestingOnly = null;
    public ?float $lastUpdated = null;
    public string $message;
    public array $meta;
    public ?array $pdfOptions = null;
    public ?string $prompt = null;
    public ?array $rejectRequestPattern = null;
    public ?array $rejectResourceTypes = null;
    public array $response_format;
    public array $result;
    public ?string $root = null;
    public ?array $screenshotOptions = null;
    public ?bool $scrollPage = null;
    public ?string $selector = null;
    public string $sessionId;
    public ?array $setExtraHTTPHeaders = null;
    public ?bool $setJavaScriptEnabled = null;
    public ?float $startTime = null;
    public bool $success;
    public ?string $title = null;
    public string $type;
    public ?array $types = null;
    public string $url;
    public ?string $userAgent = null;
    public array $viewport;
    public ?bool $visibleLinksOnly = null;
    public array $waitForSelector;
    public ?float $waitForTimeout = null;
    public ?string $webSocketDebuggerUrl = null;
}

/** Request payload for Brapi#load. */
class BrapiLoadMatch
{
    public string $account_id;
    public ?string $job_id = null;
    public ?float $cache_ttl = null;
    public ?float $cursor = null;
    public ?float $limit = null;
    public ?string $status = null;
    public ?string $session_id = null;
    public ?float $keep_alive = null;
    public ?bool $lab = null;
    public ?bool $recording = null;
    public ?string $browser_id = null;
    public ?string $target_id = null;
    public ?string $recording_id = null;
    public ?string $format = null;
    public ?string $target = null;
}

/** Request payload for Brapi#list. */
class BrapiListMatch
{
    public string $account_id;
    public ?string $browser_id = null;
    public ?float $live_view_url_expires_in_m = null;
    public ?float $limit = null;
    public ?float $offset = null;
}

/** Request payload for Brapi#create. */
class BrapiCreateData
{
    public string $account_id;
    public ?float $keep_alive = null;
    public ?bool $lab = null;
    public ?float $live_view_url_expires_in_m = null;
    public ?bool $recording = null;
    public ?bool $target = null;
    public ?float $cache_ttl = null;
    public string $Browser;
    public string $ProtocolVersion;
    public string $UserAgent;
    public string $V8Version;
    public string $WebKitVersion;
    public ?float $actionTimeout = null;
    public ?array $addScriptTag = null;
    public ?array $addStyleTag = null;
    public ?array $allowRequestPattern = null;
    public ?array $allowResourceTypes = null;
    public array $authenticate;
    public ?bool $bestAttempt = null;
    public ?float $closeReason = null;
    public ?string $closeReasonText = null;
    public ?array $commands = null;
    public ?float $connectionEndTime = null;
    public ?string $connectionId = null;
    public ?float $connectionStartTime = null;
    public ?array $cookies = null;
    public ?array $custom_ai = null;
    public ?array $dependencies = null;
    public ?string $description = null;
    public ?string $devtoolsFrontendUrl = null;
    public string $domain;
    public array $elements;
    public ?string $emulateMediaType = null;
    public ?float $endTime = null;
    public ?array $errors = null;
    public ?array $events = null;
    public ?bool $excludeExternalLinks = null;
    public ?bool $experimental = null;
    public ?array $formats = null;
    public ?array $gotoOptions = null;
    public ?array $guardrails = null;
    public ?string $html = null;
    public string $id;
    public ?bool $interestingOnly = null;
    public ?float $lastUpdated = null;
    public string $message;
    public array $meta;
    public ?array $pdfOptions = null;
    public ?string $prompt = null;
    public ?array $rejectRequestPattern = null;
    public ?array $rejectResourceTypes = null;
    public array $response_format;
    public array $result;
    public ?string $root = null;
    public ?array $screenshotOptions = null;
    public ?bool $scrollPage = null;
    public ?string $selector = null;
    public string $sessionId;
    public ?array $setExtraHTTPHeaders = null;
    public ?bool $setJavaScriptEnabled = null;
    public ?float $startTime = null;
    public bool $success;
    public ?string $title = null;
    public string $type;
    public ?array $types = null;
    public string $url;
    public ?string $userAgent = null;
    public array $viewport;
    public ?bool $visibleLinksOnly = null;
    public array $waitForSelector;
    public ?float $waitForTimeout = null;
    public ?string $webSocketDebuggerUrl = null;
}

/** Request payload for Brapi#update. */
class BrapiUpdateData
{
    public string $account_id;
    public string $browser_id;
    public ?float $live_view_url_expires_in_m = null;
    public ?string $url = null;
    public ?string $Browser = null;
    public ?string $ProtocolVersion = null;
    public ?string $UserAgent = null;
    public ?string $V8Version = null;
    public ?string $WebKitVersion = null;
    public ?float $actionTimeout = null;
    public ?array $addScriptTag = null;
    public ?array $addStyleTag = null;
    public ?array $allowRequestPattern = null;
    public ?array $allowResourceTypes = null;
    public ?array $authenticate = null;
    public ?bool $bestAttempt = null;
    public ?float $closeReason = null;
    public ?string $closeReasonText = null;
    public ?array $commands = null;
    public ?float $connectionEndTime = null;
    public ?string $connectionId = null;
    public ?float $connectionStartTime = null;
    public ?array $cookies = null;
    public ?array $custom_ai = null;
    public ?array $dependencies = null;
    public ?string $description = null;
    public ?string $devtoolsFrontendUrl = null;
    public ?string $domain = null;
    public ?array $elements = null;
    public ?string $emulateMediaType = null;
    public ?float $endTime = null;
    public ?array $errors = null;
    public ?array $events = null;
    public ?bool $excludeExternalLinks = null;
    public ?bool $experimental = null;
    public ?array $formats = null;
    public ?array $gotoOptions = null;
    public ?array $guardrails = null;
    public ?string $html = null;
    public ?string $id = null;
    public ?bool $interestingOnly = null;
    public ?float $lastUpdated = null;
    public ?string $message = null;
    public ?array $meta = null;
    public ?array $pdfOptions = null;
    public ?string $prompt = null;
    public ?array $rejectRequestPattern = null;
    public ?array $rejectResourceTypes = null;
    public ?array $response_format = null;
    public ?array $result = null;
    public ?string $root = null;
    public ?array $screenshotOptions = null;
    public ?bool $scrollPage = null;
    public ?string $selector = null;
    public ?string $sessionId = null;
    public ?array $setExtraHTTPHeaders = null;
    public ?bool $setJavaScriptEnabled = null;
    public ?float $startTime = null;
    public ?bool $success = null;
    public ?string $title = null;
    public ?string $type = null;
    public ?array $types = null;
    public ?string $userAgent = null;
    public ?array $viewport = null;
    public ?bool $visibleLinksOnly = null;
    public ?array $waitForSelector = null;
    public ?float $waitForTimeout = null;
    public ?string $webSocketDebuggerUrl = null;
}

/** Request payload for Brapi#remove. */
class BrapiRemoveMatch
{
    public string $account_id;
    public ?string $job_id = null;
    public ?string $session_id = null;
}

/** Build entity data model. */
class Build
{
    public array $errors;
    public ?string $id = null;
    public array $messages;
    public array $result;
    public ?array $result_info = null;
    public bool $success;
}

/** Request payload for Build#load. */
class BuildLoadMatch
{
    public string $account_id;
    public string $id;
}

/** Request payload for Build#list. */
class BuildListMatch
{
    public string $account_id;
    public string $version_id;
}

/** Request payload for Build#update. */
class BuildUpdateData
{
    public string $account_id;
    public string $id;
    public ?array $errors = null;
    public ?array $messages = null;
    public ?array $result = null;
    public ?array $result_info = null;
    public ?bool $success = null;
}

/** BuildToken entity data model. */
class BuildToken
{
    public string $build_token_name;
    public string $build_token_secret;
    public string $cloudflare_token_id;
    public array $errors;
    public array $messages;
    public array $result;
    public ?array $result_info = null;
    public bool $success;
}

/** Request payload for BuildToken#list. */
class BuildTokenListMatch
{
    public string $account_id;
    public ?int $page = null;
    public ?int $per_page = null;
}

/** Request payload for BuildToken#create. */
class BuildTokenCreateData
{
    public string $account_id;
    public string $build_token_name;
    public string $build_token_secret;
    public string $cloudflare_token_id;
    public array $errors;
    public array $messages;
    public array $result;
    public ?array $result_info = null;
    public bool $success;
}

/** BuildsApi entity data model. */
class BuildsApi
{
    public array $errors;
    public array $messages;
    public array $result;
    public ?array $result_info = null;
    public bool $success;
}

/** Request payload for BuildsApi#create. */
class BuildsApiCreateData
{
    public string $account_id;
    public string $trigger_id;
    public array $errors;
    public array $messages;
    public array $result;
    public ?array $result_info = null;
    public bool $success;
}

/** Request payload for BuildsApi#remove. */
class BuildsApiRemoveMatch
{
    public string $account_id;
    public string $environment_variable_key;
    public string $trigger_id;
}

/** Connection entity data model. */
class Connection
{
    public ?string $id = null;
}

/** Request payload for Connection#remove. */
class ConnectionRemoveMatch
{
    public string $account_id;
    public string $id;
}

/** ContainerImage entity data model. */
class ContainerImage
{
    public string $image;
}

/** Request payload for ContainerImage#create. */
class ContainerImageCreateData
{
    public string $account_id;
    public string $image;
}

/** ContainerInstance entity data model. */
class ContainerInstance
{
    public array $errors;
    public ?string $id = null;
    public array $messages;
    public mixed $result;
    public array $result_info;
    public bool $success;
}

/** Request payload for ContainerInstance#load. */
class ContainerInstanceLoadMatch
{
    public string $account_id;
    public string $application_id;
    public string $id;
}

/** Request payload for ContainerInstance#list. */
class ContainerInstanceListMatch
{
    public string $account_id;
    public string $application_id;
    public ?string $name_prefix = null;
    public ?string $page_token = null;
    public ?int $per_page = null;
    public ?string $state = null;
}

/** DeployHook entity data model. */
class DeployHook
{
    public string $branch;
    public string $deploy_hook_name;
    public array $errors;
    public ?string $id = null;
    public array $messages;
    public array $result;
    public ?array $result_info = null;
    public bool $success;
}

/** Request payload for DeployHook#load. */
class DeployHookLoadMatch
{
    public string $account_id;
    public string $id;
    public string $worker_id;
}

/** Request payload for DeployHook#list. */
class DeployHookListMatch
{
    public string $account_id;
    public string $script_name;
}

/** Request payload for DeployHook#create. */
class DeployHookCreateData
{
    public string $id;
    public string $branch;
    public string $deploy_hook_name;
    public array $errors;
    public array $messages;
    public array $result;
    public ?array $result_info = null;
    public bool $success;
}

/** Request payload for DeployHook#update. */
class DeployHookUpdateData
{
    public string $account_id;
    public string $id;
    public string $worker_id;
    public ?string $branch = null;
    public ?string $deploy_hook_name = null;
    public ?array $errors = null;
    public ?array $messages = null;
    public ?array $result = null;
    public ?array $result_info = null;
    public ?bool $success = null;
}

/** Request payload for DeployHook#remove. */
class DeployHookRemoveMatch
{
    public string $account_id;
    public string $id;
    public string $worker_id;
}

/** Deployment entity data model. */
class Deployment
{
    public ?string $id = null;
}

/** Request payload for Deployment#remove. */
class DeploymentRemoveMatch
{
    public string $account_id;
    public string $id;
    public ?string $preview_id = null;
    public ?string $worker_id = null;
    public ?string $script_id = null;
}

/** Destination entity data model. */
class Destination
{
    public array $configuration;
    public bool $enabled;
    public array $errors;
    public ?string $id = null;
    public array $messages;
    public string $name;
    public array $result;
    public ?bool $skipPreflightCheck = null;
    public bool $success;
}

/** Request payload for Destination#list. */
class DestinationListMatch
{
    public string $account_id;
    public ?string $order = null;
    public ?string $order_by = null;
    public ?float $page = null;
    public ?float $per_page = null;
}

/** Request payload for Destination#create. */
class DestinationCreateData
{
    public string $account_id;
    public array $configuration;
    public bool $enabled;
    public array $errors;
    public ?string $id = null;
    public array $messages;
    public string $name;
    public array $result;
    public ?bool $skipPreflightCheck = null;
    public bool $success;
}

/** Request payload for Destination#update. */
class DestinationUpdateData
{
    public string $account_id;
    public string $id;
    public ?array $configuration = null;
    public ?bool $enabled = null;
    public ?array $errors = null;
    public ?array $messages = null;
    public ?string $name = null;
    public ?array $result = null;
    public ?bool $skipPreflightCheck = null;
    public ?bool $success = null;
}

/** Request payload for Destination#remove. */
class DestinationRemoveMatch
{
    public string $account_id;
    public string $id;
}

/** Domain entity data model. */
class Domain
{
    public array $errors;
    public ?string $id = null;
    public array $messages;
    public array $result;
    public bool $success;
}

/** Request payload for Domain#load. */
class DomainLoadMatch
{
    public string $account_id;
    public string $id;
}

/** Request payload for Domain#list. */
class DomainListMatch
{
    public string $account_id;
    public ?string $environment = null;
    public ?string $hostname = null;
    public ?string $service = null;
    public ?string $zone_id = null;
    public ?string $zone_name = null;
}

/** Request payload for Domain#update. */
class DomainUpdateData
{
    public string $account_id;
    public ?array $errors = null;
    public ?string $id = null;
    public ?array $messages = null;
    public ?array $result = null;
    public ?bool $success = null;
}

/** Request payload for Domain#remove. */
class DomainRemoveMatch
{
    public string $account_id;
    public string $id;
}

/** DurableObjectsNamespace entity data model. */
class DurableObjectsNamespace
{
    public ?array $result = null;
    public ?array $result_info = null;
}

/** Request payload for DurableObjectsNamespace#list. */
class DurableObjectsNamespaceListMatch
{
    public string $account_id;
    public ?string $namespace_id = null;
    public ?string $cursor = null;
    public ?float $limit = null;
    public ?int $page = null;
    public ?int $per_page = null;
}

/** Request payload for DurableObjectsNamespace#create. */
class DurableObjectsNamespaceCreateData
{
    public string $account_id;
    public string $namespace_id;
    public ?array $result = null;
    public ?array $result_info = null;
}

/** EnvironmentVariable entity data model. */
class EnvironmentVariable
{
    public array $errors;
    public array $messages;
    public array $result;
    public ?array $result_info = null;
    public bool $success;
}

/** Request payload for EnvironmentVariable#list. */
class EnvironmentVariableListMatch
{
    public string $account_id;
    public string $trigger_id;
}

/** Request payload for EnvironmentVariable#update. */
class EnvironmentVariableUpdateData
{
    public string $account_id;
    public string $trigger_id;
    public ?array $errors = null;
    public ?array $messages = null;
    public ?array $result = null;
    public ?array $result_info = null;
    public ?bool $success = null;
}

/** GitHubIntegration entity data model. */
class GitHubIntegration
{
    public array $errors;
    public array $messages;
    public array $result;
    public ?array $result_info = null;
    public bool $success;
}

/** Request payload for GitHubIntegration#list. */
class GitHubIntegrationListMatch
{
    public string $account_id;
    public string $provider_account_id;
    public string $provider_type;
    public string $repo_id;
    public string $branch;
    public ?string $root_directory = null;
}

/** Hyperdrive entity data model. */
class Hyperdrive
{
    public ?array $caching = null;
    public ?string $created_on = null;
    public string $id;
    public ?string $modified_on = null;
    public ?array $mtls = null;
    public string $name;
    public array $origin;
    public ?int $origin_connection_limit = null;
    public ?string $restarted_on = null;
    public array $result;
}

/** Request payload for Hyperdrive#load. */
class HyperdriveLoadMatch
{
    public string $account_id;
    public string $hyperdrive_id;
}

/** Request payload for Hyperdrive#list. */
class HyperdriveListMatch
{
    public string $account_id;
    public ?int $page = null;
    public ?int $per_page = null;
}

/** Request payload for Hyperdrive#create. */
class HyperdriveCreateData
{
    public string $account_id;
    public string $integration;
    public ?array $caching = null;
    public ?string $created_on = null;
    public string $id;
    public ?string $modified_on = null;
    public ?array $mtls = null;
    public string $name;
    public array $origin;
    public ?int $origin_connection_limit = null;
    public ?string $restarted_on = null;
    public array $result;
}

/** Request payload for Hyperdrive#update. */
class HyperdriveUpdateData
{
    public string $account_id;
    public string $hyperdrive_id;
    public ?array $caching = null;
    public ?string $created_on = null;
    public ?string $id = null;
    public ?string $modified_on = null;
    public ?array $mtls = null;
    public ?string $name = null;
    public ?array $origin = null;
    public ?int $origin_connection_limit = null;
    public ?string $restarted_on = null;
    public ?array $result = null;
}

/** Request payload for Hyperdrive#remove. */
class HyperdriveRemoveMatch
{
    public string $account_id;
    public string $hyperdrive_id;
}

/** ImageRegistry entity data model. */
class ImageRegistry
{
    public array $auth;
    public string $domain;
    public array $errors;
    public ?int $expiration_minutes = null;
    public ?string $id = null;
    public ?bool $is_public = null;
    public mixed $kind;
    public array $messages;
    public ?array $permissions = null;
    public array $result;
    public bool $success;
}

/** Request payload for ImageRegistry#list. */
class ImageRegistryListMatch
{
    public string $account_id;
}

/** Request payload for ImageRegistry#create. */
class ImageRegistryCreateData
{
    public string $account_id;
    public ?string $domain = null;
    public array $auth;
    public array $errors;
    public ?int $expiration_minutes = null;
    public ?string $id = null;
    public ?bool $is_public = null;
    public mixed $kind;
    public array $messages;
    public ?array $permissions = null;
    public array $result;
    public bool $success;
}

/** Request payload for ImageRegistry#remove. */
class ImageRegistryRemoveMatch
{
    public string $account_id;
    public string $id;
}

/** Issue entity data model. */
class Issue
{
    public ?int $afterInactivitySeconds = null;
    public ?int $afterOccurrences = null;
    public ?bool $enabled = null;
    public array $errors;
    public ?string $id = null;
    public array $issueIds;
    public array $messages;
    public ?string $name = null;
    public string $policyId;
    public array $result;
    public array $result_info;
    public ?string $service = null;
    public ?string $status = null;
    public bool $success;
    public ?string $title = null;
}

/** Request payload for Issue#load. */
class IssueLoadMatch
{
    public string $account_id;
    public ?string $automation_id = null;
    public ?string $id = null;
}

/** Request payload for Issue#list. */
class IssueListMatch
{
    public string $account_id;
    public ?string $order = null;
    public ?string $order_by = null;
    public ?int $page = null;
    public ?int $per_page = null;
    public ?string $search = null;
    public ?string $service = null;
    public ?string $status = null;
    public ?string $type = null;
}

/** Request payload for Issue#create. */
class IssueCreateData
{
    public string $account_id;
    public string $group_id;
    public ?int $afterInactivitySeconds = null;
    public ?int $afterOccurrences = null;
    public ?bool $enabled = null;
    public array $errors;
    public ?string $id = null;
    public array $issueIds;
    public array $messages;
    public ?string $name = null;
    public string $policyId;
    public array $result;
    public array $result_info;
    public ?string $service = null;
    public ?string $status = null;
    public bool $success;
    public ?string $title = null;
}

/** Request payload for Issue#update. */
class IssueUpdateData
{
    public string $account_id;
    public string $automation_id;
    public ?int $afterInactivitySeconds = null;
    public ?int $afterOccurrences = null;
    public ?bool $enabled = null;
    public ?array $errors = null;
    public ?string $id = null;
    public ?array $issueIds = null;
    public ?array $messages = null;
    public ?string $name = null;
    public ?string $policyId = null;
    public ?array $result = null;
    public ?array $result_info = null;
    public ?string $service = null;
    public ?string $status = null;
    public ?bool $success = null;
    public ?string $title = null;
}

/** Request payload for Issue#remove. */
class IssueRemoveMatch
{
    public string $account_id;
    public ?string $group_id = null;
    public ?string $issue_id = null;
    public ?string $automation_id = null;
}

/** Key entity data model. */
class Key
{
    public ?array $datasets = null;
    public array $errors;
    public ?array $filters = null;
    public ?float $from = null;
    public array $keyNeedle;
    public ?float $limit = null;
    public array $messages;
    public array $needle;
    public array $result;
    public bool $success;
    public ?float $to = null;
}

/** Request payload for Key#create. */
class KeyCreateData
{
    public string $account_id;
    public ?array $datasets = null;
    public array $errors;
    public ?array $filters = null;
    public ?float $from = null;
    public array $keyNeedle;
    public ?float $limit = null;
    public array $messages;
    public array $needle;
    public array $result;
    public bool $success;
    public ?float $to = null;
}

/** LiveTail entity data model. */
class LiveTail
{
    public array $errors;
    public ?string $filterCombination = null;
    public ?array $filters = null;
    public array $messages;
    public array $result;
    public ?string $scriptId = null;
    public bool $success;
}

/** Request payload for LiveTail#create. */
class LiveTailCreateData
{
    public string $account_id;
    public array $errors;
    public ?string $filterCombination = null;
    public ?array $filters = null;
    public array $messages;
    public array $result;
    public ?string $scriptId = null;
    public bool $success;
}

/** MetricsExport entity data model. */
class MetricsExport
{
    public array $errors;
    public array $messages;
    public array $requester;
    public array $resources;
    public array $result;
    public bool $success;
}

/** Request payload for MetricsExport#list. */
class MetricsExportListMatch
{
    public string $account_id;
}

/** Request payload for MetricsExport#create. */
class MetricsExportCreateData
{
    public string $account_id;
    public array $errors;
    public array $messages;
    public array $requester;
    public array $resources;
    public array $result;
    public bool $success;
}

/** Namespace entity data model. */
class NamespaceType
{
    public ?string $id = null;
}

/** Request payload for Namespace#remove. */
class NamespaceRemoveMatch
{
    public string $account_id;
    public string $id;
}

/** Preview entity data model. */
class Preview
{
    public array $errors;
    public ?string $id = null;
    public array $messages;
    public array $result;
    public bool $success;
}

/** Request payload for Preview#load. */
class PreviewLoadMatch
{
    public string $account_id;
    public string $id;
    public string $worker_id;
}

/** Request payload for Preview#list. */
class PreviewListMatch
{
    public string $account_id;
    public string $worker_id;
    public ?string $name = null;
    public ?string $order = null;
    public ?string $order_by = null;
    public ?int $page = null;
    public ?int $per_page = null;
    public ?string $slug = null;
}

/** Request payload for Preview#create. */
class PreviewCreateData
{
    public string $account_id;
    public string $worker_id;
    public ?bool $ignore_base_config = null;
    public ?bool $ignore_default = null;
    public array $errors;
    public ?string $id = null;
    public array $messages;
    public array $result;
    public bool $success;
}

/** Request payload for Preview#update. */
class PreviewUpdateData
{
    public string $account_id;
    public string $id;
    public string $worker_id;
    public ?bool $ignore_base_config = null;
    public ?bool $ignore_default = null;
    public ?array $errors = null;
    public ?array $messages = null;
    public ?array $result = null;
    public ?bool $success = null;
}

/** Request payload for Preview#remove. */
class PreviewRemoveMatch
{
    public string $account_id;
    public string $id;
    public string $worker_id;
    public ?bool $force = null;
}

/** PreviewDeployment entity data model. */
class PreviewDeployment
{
    public array $errors;
    public ?string $id = null;
    public array $messages;
    public mixed $result;
    public bool $success;
}

/** Request payload for PreviewDeployment#load. */
class PreviewDeploymentLoadMatch
{
    public string $account_id;
    public string $id;
    public string $preview_id;
    public string $worker_id;
    public ?string $include = null;
}

/** Request payload for PreviewDeployment#list. */
class PreviewDeploymentListMatch
{
    public string $account_id;
    public string $id;
    public string $worker_id;
    public ?int $page = null;
    public ?int $per_page = null;
}

/** Request payload for PreviewDeployment#create. */
class PreviewDeploymentCreateData
{
    public string $account_id;
    public string $id;
    public string $worker_id;
    public ?bool $ignore_default = null;
    public array $errors;
    public array $messages;
    public mixed $result;
    public bool $success;
}

/** Request payload for PreviewDeployment#update. */
class PreviewDeploymentUpdateData
{
    public string $account_id;
    public string $preview_id;
    public string $worker_id;
    public ?bool $ignore_default = null;
    public ?array $errors = null;
    public ?string $id = null;
    public ?array $messages = null;
    public mixed $result = null;
    public ?bool $success = null;
}

/** Query entity data model. */
class Query
{
    public ?bool $chart = null;
    public ?string $chartType = null;
    public ?bool $compare = null;
    public ?string $distributionScale = null;
    public ?bool $dry = null;
    public array $errors;
    public ?float $granularity = null;
    public ?bool $ignoreSeries = null;
    public ?float $limit = null;
    public array $messages;
    public ?string $offset = null;
    public ?float $offsetBy = null;
    public ?string $offsetDirection = null;
    public ?array $parameters = null;
    public string $queryId;
    public array $result;
    public bool $success;
    public array $timeframe;
    public ?string $view = null;
}

/** Request payload for Query#create. */
class QueryCreateData
{
    public string $account_id;
    public ?bool $chart = null;
    public ?string $chartType = null;
    public ?bool $compare = null;
    public ?string $distributionScale = null;
    public ?bool $dry = null;
    public array $errors;
    public ?float $granularity = null;
    public ?bool $ignoreSeries = null;
    public ?float $limit = null;
    public array $messages;
    public ?string $offset = null;
    public ?float $offsetBy = null;
    public ?string $offsetDirection = null;
    public ?array $parameters = null;
    public string $queryId;
    public array $result;
    public bool $success;
    public array $timeframe;
    public ?string $view = null;
}

/** RepositoryConnection entity data model. */
class RepositoryConnection
{
    public string $provider_account_id;
    public string $provider_account_name;
    public string $provider_type;
    public string $repo_id;
    public string $repo_name;
}

/** Request payload for RepositoryConnection#update. */
class RepositoryConnectionUpdateData
{
    public string $account_id;
    public ?string $provider_account_id = null;
    public ?string $provider_account_name = null;
    public ?string $provider_type = null;
    public ?string $repo_id = null;
    public ?string $repo_name = null;
}

/** Rollout entity data model. */
class Rollout
{
    public string $description;
    public ?string $kind = null;
    public ?int $percentage = null;
    public ?int $step_percentage = null;
    public ?array $steps = null;
    public string $strategy;
    public array $target_configuration;
}

/** Request payload for Rollout#create. */
class RolloutCreateData
{
    public string $account_id;
    public string $application_id;
    public string $description;
    public ?string $kind = null;
    public ?int $percentage = null;
    public ?int $step_percentage = null;
    public ?array $steps = null;
    public string $strategy;
    public array $target_configuration;
}

/** SavedQuery entity data model. */
class SavedQuery
{
    public string $description;
    public array $errors;
    public ?string $id = null;
    public array $messages;
    public string $name;
    public array $parameters;
    public array $result;
    public bool $success;
}

/** Request payload for SavedQuery#load. */
class SavedQueryLoadMatch
{
    public string $account_id;
    public string $id;
}

/** Request payload for SavedQuery#list. */
class SavedQueryListMatch
{
    public string $account_id;
    public ?string $order = null;
    public ?string $order_by = null;
    public ?float $page = null;
    public ?float $per_page = null;
}

/** Request payload for SavedQuery#create. */
class SavedQueryCreateData
{
    public string $account_id;
    public string $description;
    public array $errors;
    public ?string $id = null;
    public array $messages;
    public string $name;
    public array $parameters;
    public array $result;
    public bool $success;
}

/** Request payload for SavedQuery#update. */
class SavedQueryUpdateData
{
    public string $account_id;
    public string $id;
    public ?string $description = null;
    public ?array $errors = null;
    public ?array $messages = null;
    public ?string $name = null;
    public ?array $parameters = null;
    public ?array $result = null;
    public ?bool $success = null;
}

/** Request payload for SavedQuery#remove. */
class SavedQueryRemoveMatch
{
    public string $account_id;
    public string $id;
}

/** Script entity data model. */
class Script
{
    public ?string $id = null;
}

/** Request payload for Script#remove. */
class ScriptRemoveMatch
{
    public string $account_id;
    public string $id;
    public ?bool $force = null;
}

/** ScriptSetting entity data model. */
class ScriptSetting
{
    public array $errors;
    public ?bool $logpush = null;
    public array $messages;
    public mixed $observability = null;
    public array $result;
    public bool $success;
    public mixed $tags = null;
    public ?array $tail_consumers = null;
}

/** Request payload for ScriptSetting#list. */
class ScriptSettingListMatch
{
    public string $account_id;
    public string $script_name;
}

/** Request payload for ScriptSetting#update. */
class ScriptSettingUpdateData
{
    public string $account_id;
    public string $script_name;
    public ?array $errors = null;
    public ?bool $logpush = null;
    public ?array $messages = null;
    public mixed $observability = null;
    public ?array $result = null;
    public ?bool $success = null;
    public mixed $tags = null;
    public ?array $tail_consumers = null;
}

/** Secret entity data model. */
class Secret
{
    public ?string $comment = null;
    public ?string $id = null;
    public mixed $result;
    public ?array $scopes = null;
    public ?string $value = null;
}

/** Request payload for Secret#load. */
class SecretLoadMatch
{
    public string $account_id;
    public string $id;
    public string $store_id;
}

/** Request payload for Secret#list. */
class SecretListMatch
{
    public string $account_id;
    public string $store_id;
    public ?string $direction = null;
    public ?string $order = null;
    public ?int $page = null;
    public ?int $per_page = null;
    public ?array $scope = null;
    public ?string $search = null;
}

/** Request payload for Secret#create. */
class SecretCreateData
{
    public string $account_id;
    public string $store_id;
    public ?string $comment = null;
    public ?string $id = null;
    public mixed $result;
    public ?array $scopes = null;
    public ?string $value = null;
}

/** Request payload for Secret#update. */
class SecretUpdateData
{
    public string $account_id;
    public string $id;
    public string $store_id;
    public ?string $comment = null;
    public mixed $result = null;
    public ?array $scopes = null;
    public ?string $value = null;
}

/** Request payload for Secret#remove. */
class SecretRemoveMatch
{
    public string $account_id;
    public ?string $id = null;
    public string $store_id;
}

/** SecretsStoreDelete entity data model. */
class SecretsStoreDelete
{
}

/** Request payload for SecretsStoreDelete#remove. */
class SecretsStoreDeleteRemoveMatch
{
    public string $account_id;
    public string $store_id;
    public ?bool $force = null;
}

/** SecretsStoreQuota entity data model. */
class SecretsStoreQuota
{
    public mixed $result;
}

/** Request payload for SecretsStoreQuota#load. */
class SecretsStoreQuotaLoadMatch
{
    public string $account_id;
}

/** SecretsStoreSecret entity data model. */
class SecretsStoreSecret
{
    public ?string $comment = null;
    public string $name;
    public array $scopes;
}

/** Request payload for SecretsStoreSecret#create. */
class SecretsStoreSecretCreateData
{
    public string $account_id;
    public string $secret_id;
    public string $store_id;
    public ?string $comment = null;
    public string $name;
    public array $scopes;
}

/** SecretsStoreStore entity data model. */
class SecretsStoreStore
{
    public ?string $id = null;
    public string $name;
    public mixed $result;
}

/** Request payload for SecretsStoreStore#load. */
class SecretsStoreStoreLoadMatch
{
    public string $account_id;
    public string $id;
}

/** Request payload for SecretsStoreStore#create. */
class SecretsStoreStoreCreateData
{
    public string $account_id;
    public ?string $id = null;
    public string $name;
    public mixed $result;
}

/** SecretsStoreStoresResponseCollection entity data model. */
class SecretsStoreStoresResponseCollection
{
    public ?array $result = null;
}

/** Request payload for SecretsStoreStoresResponseCollection#list. */
class SecretsStoreStoresResponseCollectionListMatch
{
    public string $account_id;
    public ?string $direction = null;
    public ?string $order = null;
    public ?int $page = null;
    public ?int $per_page = null;
}

/** Setting entity data model. */
class Setting
{
    public array $errors;
    public array $messages;
    public array $result;
    public bool $success;
}

/** Request payload for Setting#list. */
class SettingListMatch
{
    public string $account_id;
    public string $environment_name;
    public string $service_id;
}

/** Request payload for Setting#update. */
class SettingUpdateData
{
    public string $account_id;
    public string $environment_name;
    public string $service_id;
    public ?array $errors = null;
    public ?array $messages = null;
    public ?array $result = null;
    public ?bool $success = null;
}

/** Shared entity data model. */
class Shared
{
    public array $errors;
    public ?string $id = null;
    public array $messages;
    public array $result;
    public bool $success;
}

/** Request payload for Shared#load. */
class SharedLoadMatch
{
    public string $account_id;
    public string $id;
    public ?string $view = null;
}

/** Request payload for Shared#create. */
class SharedCreateData
{
    public string $account_id;
    public array $errors;
    public ?string $id = null;
    public array $messages;
    public array $result;
    public bool $success;
}

/** Tail entity data model. */
class Tail
{
    public ?string $id = null;
}

/** Request payload for Tail#remove. */
class TailRemoveMatch
{
    public string $account_id;
    public string $id;
    public string $script_id;
}

/** Token entity data model. */
class Token
{
    public ?string $id = null;
}

/** Request payload for Token#remove. */
class TokenRemoveMatch
{
    public string $account_id;
    public string $id;
}

/** Trigger entity data model. */
class Trigger
{
    public array $branch_excludes;
    public array $branch_includes;
    public ?bool $build_caching_enabled = null;
    public string $build_command;
    public string $build_token_uuid;
    public string $deploy_command;
    public string $external_script_id;
    public ?string $id = null;
    public array $path_excludes;
    public array $path_includes;
    public string $repo_connection_uuid;
    public string $root_directory;
    public string $trigger_name;
}

/** Request payload for Trigger#create. */
class TriggerCreateData
{
    public string $account_id;
    public array $branch_excludes;
    public array $branch_includes;
    public ?bool $build_caching_enabled = null;
    public string $build_command;
    public string $build_token_uuid;
    public string $deploy_command;
    public string $external_script_id;
    public ?string $id = null;
    public array $path_excludes;
    public array $path_includes;
    public string $repo_connection_uuid;
    public string $root_directory;
    public string $trigger_name;
}

/** Request payload for Trigger#update. */
class TriggerUpdateData
{
    public string $account_id;
    public string $id;
    public ?array $branch_excludes = null;
    public ?array $branch_includes = null;
    public ?bool $build_caching_enabled = null;
    public ?string $build_command = null;
    public ?string $build_token_uuid = null;
    public ?string $deploy_command = null;
    public ?string $external_script_id = null;
    public ?array $path_excludes = null;
    public ?array $path_includes = null;
    public ?string $repo_connection_uuid = null;
    public ?string $root_directory = null;
    public ?string $trigger_name = null;
}

/** Request payload for Trigger#remove. */
class TriggerRemoveMatch
{
    public string $account_id;
    public string $id;
}

/** Usage entity data model. */
class Usage
{
    public array $errors;
    public array $messages;
    public array $result;
    public bool $success;
}

/** Request payload for Usage#list. */
class UsageListMatch
{
    public string $account_id;
    public string $from;
    public string $to;
}

/** Value entity data model. */
class Value
{
    public array $datasets;
    public array $errors;
    public ?array $filters = null;
    public string $key;
    public ?float $limit = null;
    public array $messages;
    public array $needle;
    public array $result;
    public bool $success;
    public array $timeframe;
    public string $type;
}

/** Request payload for Value#create. */
class ValueCreateData
{
    public string $account_id;
    public array $datasets;
    public array $errors;
    public ?array $filters = null;
    public string $key;
    public ?float $limit = null;
    public array $messages;
    public array $needle;
    public array $result;
    public bool $success;
    public array $timeframe;
    public string $type;
}

/** Version entity data model. */
class Version
{
    public ?array $annotations = null;
    public ?array $assets = null;
    public ?string $author_email = null;
    public ?string $author_id = null;
    public ?array $bindings = null;
    public array $cache_options;
    public ?string $compatibility_date = null;
    public ?array $compatibility_flags = null;
    public ?array $containers = null;
    public string $created_on;
    public array $errors;
    public mixed $exports = null;
    public mixed $exports_reconciliation = null;
    public string $id;
    public ?array $limits = null;
    public ?string $main_module = null;
    public array $messages;
    public ?string $migration_tag = null;
    public mixed $migrations = null;
    public ?array $modules = null;
    public int $number;
    public ?array $package_dependencies = null;
    public ?array $placement = null;
    public array $result;
    public ?string $source = null;
    public ?int $startup_time_ms = null;
    public bool $success;
    public array $urls;
    public ?string $usage_model = null;
}

/** Request payload for Version#load. */
class VersionLoadMatch
{
    public string $account_id;
    public string $id;
    public string $worker_id;
    public ?string $include = null;
}

/** Request payload for Version#list. */
class VersionListMatch
{
    public string $account_id;
    public string $worker_id;
    public ?int $page = null;
    public ?int $per_page = null;
}

/** Request payload for Version#create. */
class VersionCreateData
{
    public string $account_id;
    public string $worker_id;
    public ?bool $deploy = null;
    public ?array $annotations = null;
    public ?array $assets = null;
    public ?string $author_email = null;
    public ?string $author_id = null;
    public ?array $bindings = null;
    public array $cache_options;
    public ?string $compatibility_date = null;
    public ?array $compatibility_flags = null;
    public ?array $containers = null;
    public string $created_on;
    public array $errors;
    public mixed $exports = null;
    public mixed $exports_reconciliation = null;
    public string $id;
    public ?array $limits = null;
    public ?string $main_module = null;
    public array $messages;
    public ?string $migration_tag = null;
    public mixed $migrations = null;
    public ?array $modules = null;
    public int $number;
    public ?array $package_dependencies = null;
    public ?array $placement = null;
    public array $result;
    public ?string $source = null;
    public ?int $startup_time_ms = null;
    public bool $success;
    public array $urls;
    public ?string $usage_model = null;
}

/** Request payload for Version#update. */
class VersionUpdateData
{
    public string $account_id;
    public string $worker_id;
    public ?bool $deploy = null;
    public ?array $annotations = null;
    public ?array $assets = null;
    public ?string $author_email = null;
    public ?string $author_id = null;
    public ?array $bindings = null;
    public ?array $cache_options = null;
    public ?string $compatibility_date = null;
    public ?array $compatibility_flags = null;
    public ?array $containers = null;
    public ?string $created_on = null;
    public ?array $errors = null;
    public mixed $exports = null;
    public mixed $exports_reconciliation = null;
    public ?string $id = null;
    public ?array $limits = null;
    public ?string $main_module = null;
    public ?array $messages = null;
    public ?string $migration_tag = null;
    public mixed $migrations = null;
    public ?array $modules = null;
    public ?int $number = null;
    public ?array $package_dependencies = null;
    public ?array $placement = null;
    public ?array $result = null;
    public ?string $source = null;
    public ?int $startup_time_ms = null;
    public ?bool $success = null;
    public ?array $urls = null;
    public ?string $usage_model = null;
}

/** Request payload for Version#remove. */
class VersionRemoveMatch
{
    public string $account_id;
    public string $id;
    public string $worker_id;
}

/** Worker entity data model. */
class Worker
{
    public ?bool $auto_build = null;
    public ?bool $auto_delete = null;
    public mixed $branch = null;
    public mixed $commit_hash = null;
    public array $errors;
    public mixed $git_repository;
    public ?string $id = null;
    public array $messages;
    public array $previews_base_config;
    public bool $previews_enabled;
    public array $production_settings;
    public array $result;
    public ?array $result_info = null;
    public string $script_tag;
    public mixed $seed_repo = null;
    public ?array $settings = null;
    public bool $success;
}

/** Request payload for Worker#load. */
class WorkerLoadMatch
{
    public string $account_id;
    public ?string $preview_id = null;
    public ?string $worker_id = null;
    public ?string $id = null;
}

/** Request payload for Worker#list. */
class WorkerListMatch
{
    public string $account_id;
    public ?string $order = null;
    public ?string $order_by = null;
    public ?int $page = null;
    public ?int $per_page = null;
    public ?string $preview_id = null;
    public ?string $worker_id = null;
}

/** Request payload for Worker#create. */
class WorkerCreateData
{
    public string $account_id;
    public ?string $preview_id = null;
    public ?string $worker_id = null;
    public ?bool $auto_build = null;
    public ?bool $auto_delete = null;
    public mixed $branch = null;
    public mixed $commit_hash = null;
    public array $errors;
    public mixed $git_repository;
    public ?string $id = null;
    public array $messages;
    public array $previews_base_config;
    public bool $previews_enabled;
    public array $production_settings;
    public array $result;
    public ?array $result_info = null;
    public string $script_tag;
    public mixed $seed_repo = null;
    public ?array $settings = null;
    public bool $success;
}

/** Request payload for Worker#update. */
class WorkerUpdateData
{
    public string $account_id;
    public string $id;
    public ?bool $auto_build = null;
    public ?bool $auto_delete = null;
    public mixed $branch = null;
    public mixed $commit_hash = null;
    public ?array $errors = null;
    public mixed $git_repository = null;
    public ?array $messages = null;
    public ?array $previews_base_config = null;
    public ?bool $previews_enabled = null;
    public ?array $production_settings = null;
    public ?array $result = null;
    public ?array $result_info = null;
    public ?string $script_tag = null;
    public mixed $seed_repo = null;
    public ?array $settings = null;
    public ?bool $success = null;
}

/** Request payload for Worker#remove. */
class WorkerRemoveMatch
{
    public string $account_id;
    public string $id;
    public ?bool $force = null;
}

/** WorkerCronTrigger entity data model. */
class WorkerCronTrigger
{
    public array $errors;
    public array $messages;
    public array $result;
    public bool $success;
}

/** Request payload for WorkerCronTrigger#list. */
class WorkerCronTriggerListMatch
{
    public string $account_id;
    public string $script_name;
}

/** Request payload for WorkerCronTrigger#update. */
class WorkerCronTriggerUpdateData
{
    public string $account_id;
    public string $script_name;
    public ?array $errors = null;
    public ?array $messages = null;
    public ?array $result = null;
    public ?bool $success = null;
}

/** WorkerDeployment entity data model. */
class WorkerDeployment
{
    public ?array $annotations = null;
    public ?string $author_email = null;
    public string $created_on;
    public array $errors;
    public string $id;
    public array $messages;
    public array $result;
    public string $source;
    public string $strategy;
    public bool $success;
    public array $versions;
}

/** Request payload for WorkerDeployment#load. */
class WorkerDeploymentLoadMatch
{
    public string $account_id;
    public ?string $script_name = null;
    public ?int $page = null;
    public ?int $per_page = null;
    public ?string $since = null;
    public ?string $until = null;
    public ?string $id = null;
    public ?string $script_id = null;
}

/** Request payload for WorkerDeployment#create. */
class WorkerDeploymentCreateData
{
    public string $account_id;
    public string $script_name;
    public ?bool $force = null;
    public ?array $annotations = null;
    public ?string $author_email = null;
    public string $created_on;
    public array $errors;
    public string $id;
    public array $messages;
    public array $result;
    public string $source;
    public string $strategy;
    public bool $success;
    public array $versions;
}

/** WorkerEnvironment entity data model. */
class WorkerEnvironment
{
}

/** Request payload for WorkerEnvironment#load. */
class WorkerEnvironmentLoadMatch
{
    public string $account_id;
    public string $environment_name;
    public string $service_id;
}

/** WorkerRoute entity data model. */
class WorkerRoute
{
    public array $errors;
    public string $id;
    public array $messages;
    public string $pattern;
    public array $result;
    public ?string $script = null;
    public bool $success;
}

/** Request payload for WorkerRoute#load. */
class WorkerRouteLoadMatch
{
    public string $id;
    public string $zone_id;
}

/** Request payload for WorkerRoute#list. */
class WorkerRouteListMatch
{
    public string $zone_id;
}

/** Request payload for WorkerRoute#create. */
class WorkerRouteCreateData
{
    public string $zone_id;
    public array $errors;
    public string $id;
    public array $messages;
    public string $pattern;
    public array $result;
    public ?string $script = null;
    public bool $success;
}

/** Request payload for WorkerRoute#update. */
class WorkerRouteUpdateData
{
    public string $id;
    public string $zone_id;
    public ?array $errors = null;
    public ?array $messages = null;
    public ?string $pattern = null;
    public ?array $result = null;
    public ?string $script = null;
    public ?bool $success = null;
}

/** Request payload for WorkerRoute#remove. */
class WorkerRouteRemoveMatch
{
    public string $id;
    public string $zone_id;
}

/** WorkerScript entity data model. */
class WorkerScript
{
    public array $errors;
    public ?string $id = null;
    public array $messages;
    public ?array $result = null;
    public bool $success;
}

/** Request payload for WorkerScript#load. */
class WorkerScriptLoadMatch
{
    public string $account_id;
    public ?string $script_id = null;
    public ?string $secret_name = null;
    public ?bool $url_encoded = null;
    public ?string $id = null;
}

/** Request payload for WorkerScript#list. */
class WorkerScriptListMatch
{
    public string $account_id;
    public ?string $id = null;
    public ?string $name = null;
    public ?string $order_by = null;
    public ?int $page = null;
    public ?int $per_page = null;
    public ?string $script_name = null;
}

/** Request payload for WorkerScript#create. */
class WorkerScriptCreateData
{
    public string $account_id;
    public string $script_name;
    public array $errors;
    public ?string $id = null;
    public array $messages;
    public ?array $result = null;
    public bool $success;
}

/** Request payload for WorkerScript#update. */
class WorkerScriptUpdateData
{
    public string $account_id;
    public ?string $id = null;
    public ?string $bindings_inherit = null;
    public ?string $script_name = null;
    public ?array $errors = null;
    public ?array $messages = null;
    public ?array $result = null;
    public ?bool $success = null;
}

/** Request payload for WorkerScript#remove. */
class WorkerScriptRemoveMatch
{
    public string $account_id;
    public string $script_name;
}

/** WorkerSubdomain entity data model. */
class WorkerSubdomain
{
    public array $errors;
    public array $messages;
    public array $result;
    public string $subdomain;
    public bool $success;
}

/** Request payload for WorkerSubdomain#list. */
class WorkerSubdomainListMatch
{
    public string $account_id;
}

/** Request payload for WorkerSubdomain#update. */
class WorkerSubdomainUpdateData
{
    public string $account_id;
    public ?array $errors = null;
    public ?array $messages = null;
    public ?array $result = null;
    public ?string $subdomain = null;
    public ?bool $success = null;
}

/** Request payload for WorkerSubdomain#remove. */
class WorkerSubdomainRemoveMatch
{
    public string $account_id;
}

/** WorkerTailLog entity data model. */
class WorkerTailLog
{
    public array $errors;
    public array $messages;
    public array $result;
    public bool $success;
}

/** Request payload for WorkerTailLog#list. */
class WorkerTailLogListMatch
{
    public string $account_id;
    public string $script_name;
}

/** Request payload for WorkerTailLog#create. */
class WorkerTailLogCreateData
{
    public string $account_id;
    public string $script_name;
    public array $errors;
    public array $messages;
    public array $result;
    public bool $success;
}

/** WorkersAccountSetting entity data model. */
class WorkersAccountSetting
{
    public ?string $default_usage_model = null;
    public array $errors;
    public ?bool $green_compute = null;
    public array $messages;
    public array $result;
    public bool $success;
}

/** Request payload for WorkersAccountSetting#list. */
class WorkersAccountSettingListMatch
{
    public string $account_id;
}

/** Request payload for WorkersAccountSetting#update. */
class WorkersAccountSettingUpdateData
{
    public string $account_id;
    public ?string $default_usage_model = null;
    public ?array $errors = null;
    public ?bool $green_compute = null;
    public ?array $messages = null;
    public ?array $result = null;
    public ?bool $success = null;
}

/** WorkersApiResponseNullResult entity data model. */
class WorkersApiResponseNullResult
{
    public array $errors;
    public array $messages;
    public ?array $result = null;
    public bool $success;
}

/** Request payload for WorkersApiResponseNullResult#update. */
class WorkersApiResponseNullResultUpdateData
{
    public string $account_id;
    public string $namespace_id;
    public string $script_id;
    public string $tag;
    public ?array $errors = null;
    public ?array $messages = null;
    public ?array $result = null;
    public ?bool $success = null;
}

/** Request payload for WorkersApiResponseNullResult#remove. */
class WorkersApiResponseNullResultRemoveMatch
{
    public string $account_id;
    public ?string $namespace_id = null;
    public ?string $script_id = null;
    public ?string $secret_name = null;
    public ?bool $url_encoded = null;
    public ?string $script_name = null;
    public ?bool $force = null;
    public ?string $tag = null;
}

/** WorkersCompletedUploadAsset entity data model. */
class WorkersCompletedUploadAsset
{
}

/** Request payload for WorkersCompletedUploadAsset#create. */
class WorkersCompletedUploadAssetCreateData
{
    public string $account_id;
    public bool $base64;
}

/** WorkersCreateAssetsUploadSession entity data model. */
class WorkersCreateAssetsUploadSession
{
    public array $manifest;
}

/** Request payload for WorkersCreateAssetsUploadSession#create. */
class WorkersCreateAssetsUploadSessionCreateData
{
    public string $account_id;
    public ?string $namespace_id = null;
    public string $script_name;
    public array $manifest;
}

/** WorkersForPlatform entity data model. */
class WorkersForPlatform
{
    public array $errors;
    public array $messages;
    public array $result;
    public bool $success;
}

/** Request payload for WorkersForPlatform#load. */
class WorkersForPlatformLoadMatch
{
    public string $account_id;
    public string $namespace_id;
    public ?string $script_id = null;
    public ?string $secret_name = null;
    public ?bool $url_encoded = null;
    public ?string $script_name = null;
}

/** Request payload for WorkersForPlatform#list. */
class WorkersForPlatformListMatch
{
    public string $account_id;
    public ?string $dispatch_namespace = null;
    public ?string $tag = null;
    public ?string $namespace_id = null;
    public ?string $script_name = null;
}

/** Request payload for WorkersForPlatform#update. */
class WorkersForPlatformUpdateData
{
    public string $account_id;
    public string $namespace_id;
    public string $script_name;
    public ?string $bindings_inherit = null;
    public ?array $errors = null;
    public ?array $messages = null;
    public ?array $result = null;
    public ?bool $success = null;
}

/** WorkersKvApiResponseCommonNoResult entity data model. */
class WorkersKvApiResponseCommonNoResult
{
}

/** Request payload for WorkersKvApiResponseCommonNoResult#update. */
class WorkersKvApiResponseCommonNoResultUpdateData
{
    public string $account_id;
    public string $key_name;
    public string $namespace_id;
    public ?float $expiration = null;
    public ?float $expiration_ttl = null;
}

/** Request payload for WorkersKvApiResponseCommonNoResult#remove. */
class WorkersKvApiResponseCommonNoResultRemoveMatch
{
    public string $account_id;
    public ?string $key_name = null;
    public string $namespace_id;
}

/** WorkersKvNamespace entity data model. */
class WorkersKvNamespace
{
    public array $errors;
    public ?string $id = null;
    public ?string $jurisdiction = null;
    public array $keys;
    public array $messages;
    public mixed $result = null;
    public ?array $result_info = null;
    public bool $success;
    public string $title;
    public ?string $type = null;
    public ?bool $withMetadata = null;
}

/** Request payload for WorkersKvNamespace#load. */
class WorkersKvNamespaceLoadMatch
{
    public string $account_id;
    public ?string $key_name = null;
    public ?string $namespace_id = null;
    public ?string $id = null;
}

/** Request payload for WorkersKvNamespace#list. */
class WorkersKvNamespaceListMatch
{
    public string $account_id;
    public ?string $namespace_id = null;
    public ?string $cursor = null;
    public ?float $limit = null;
    public ?string $prefix = null;
    public ?string $direction = null;
    public ?string $order = null;
    public ?float $page = null;
    public ?float $per_page = null;
}

/** Request payload for WorkersKvNamespace#create. */
class WorkersKvNamespaceCreateData
{
    public string $account_id;
    public ?string $namespace_id = null;
    public array $errors;
    public ?string $id = null;
    public ?string $jurisdiction = null;
    public array $keys;
    public array $messages;
    public mixed $result = null;
    public ?array $result_info = null;
    public bool $success;
    public string $title;
    public ?string $type = null;
    public ?bool $withMetadata = null;
}

/** Request payload for WorkersKvNamespace#update. */
class WorkersKvNamespaceUpdateData
{
    public string $account_id;
    public ?string $id = null;
    public ?string $namespace_id = null;
    public ?array $errors = null;
    public ?string $jurisdiction = null;
    public ?array $keys = null;
    public ?array $messages = null;
    public mixed $result = null;
    public ?array $result_info = null;
    public ?bool $success = null;
    public ?string $title = null;
    public ?string $type = null;
    public ?bool $withMetadata = null;
}

/** Request payload for WorkersKvNamespace#remove. */
class WorkersKvNamespaceRemoveMatch
{
    public string $account_id;
    public string $namespace_id;
}

/** WorkersNamespaceList entity data model. */
class WorkersNamespaceList
{
    public array $errors;
    public array $messages;
    public ?array $result = null;
    public bool $success;
}

/** Request payload for WorkersNamespaceList#list. */
class WorkersNamespaceListListMatch
{
    public string $account_id;
}

/** WorkersNamespaceScriptDeleteBulk entity data model. */
class WorkersNamespaceScriptDeleteBulk
{
}

/** Request payload for WorkersNamespaceScriptDeleteBulk#remove. */
class WorkersNamespaceScriptDeleteBulkRemoveMatch
{
    public string $account_id;
    public string $dispatch_namespace;
    public ?int $limit = null;
    public string $tag;
}

/** WorkersNamespaceScriptResponseSingle entity data model. */
class WorkersNamespaceScriptResponseSingle
{
    public array $errors;
    public array $messages;
    public array $result;
    public bool $success;
}

/** Request payload for WorkersNamespaceScriptResponseSingle#load. */
class WorkersNamespaceScriptResponseSingleLoadMatch
{
    public string $account_id;
    public string $namespace_id;
    public string $script_name;
}

/** Request payload for WorkersNamespaceScriptResponseSingle#update. */
class WorkersNamespaceScriptResponseSingleUpdateData
{
    public string $account_id;
    public string $namespace_id;
    public string $script_name;
    public ?array $errors = null;
    public ?array $messages = null;
    public ?array $result = null;
    public ?bool $success = null;
}

/** WorkersNamespaceSingle entity data model. */
class WorkersNamespaceSingle
{
    public array $errors;
    public array $messages;
    public ?string $name = null;
    public ?array $result = null;
    public bool $success;
    public ?bool $trusted_workers = null;
}

/** Request payload for WorkersNamespaceSingle#load. */
class WorkersNamespaceSingleLoadMatch
{
    public string $account_id;
    public string $dispatch_namespace;
}

/** Request payload for WorkersNamespaceSingle#create. */
class WorkersNamespaceSingleCreateData
{
    public string $account_id;
    public array $errors;
    public array $messages;
    public ?string $name = null;
    public ?array $result = null;
    public bool $success;
    public ?bool $trusted_workers = null;
}

/** Request payload for WorkersNamespaceSingle#update. */
class WorkersNamespaceSingleUpdateData
{
    public string $account_id;
    public string $dispatch_namespace;
    public ?array $errors = null;
    public ?array $messages = null;
    public ?string $name = null;
    public ?array $result = null;
    public ?bool $success = null;
    public ?bool $trusted_workers = null;
}

/** WorkersPipelinesOther entity data model. */
class WorkersPipelinesOther
{
    public mixed $config = null;
    public string $created_at;
    public array $destination;
    public string $endpoint;
    public ?string $failure_reason = null;
    public mixed $format = null;
    public array $graph;
    public array $http;
    public string $id;
    public string $modified_at;
    public string $name;
    public ?array $schema = null;
    public array $source;
    public string $sql;
    public string $status;
    public array $tables;
    public string $type;
    public float $version;
    public array $worker_binding;
}

/** Request payload for WorkersPipelinesOther#load. */
class WorkersPipelinesOtherLoadMatch
{
    public string $account_id;
    public ?string $pipeline_id = null;
    public ?string $pipeline_name = null;
    public ?string $sink_id = null;
    public ?string $stream_id = null;
}

/** Request payload for WorkersPipelinesOther#list. */
class WorkersPipelinesOtherListMatch
{
    public string $account_id;
    public ?string $name = null;
    public ?float $page = null;
    public ?float $per_page = null;
    public ?string $pipeline_id = null;
    public ?string $search = null;
}

/** Request payload for WorkersPipelinesOther#create. */
class WorkersPipelinesOtherCreateData
{
    public string $account_id;
    public mixed $config = null;
    public string $created_at;
    public array $destination;
    public string $endpoint;
    public ?string $failure_reason = null;
    public mixed $format = null;
    public array $graph;
    public array $http;
    public string $id;
    public string $modified_at;
    public string $name;
    public ?array $schema = null;
    public array $source;
    public string $sql;
    public string $status;
    public array $tables;
    public string $type;
    public float $version;
    public array $worker_binding;
}

/** Request payload for WorkersPipelinesOther#update. */
class WorkersPipelinesOtherUpdateData
{
    public string $account_id;
    public string $pipeline_name;
    public mixed $config = null;
    public ?string $created_at = null;
    public ?array $destination = null;
    public ?string $endpoint = null;
    public ?string $failure_reason = null;
    public mixed $format = null;
    public ?array $graph = null;
    public ?array $http = null;
    public ?string $id = null;
    public ?string $modified_at = null;
    public ?string $name = null;
    public ?array $schema = null;
    public ?array $source = null;
    public ?string $sql = null;
    public ?string $status = null;
    public ?array $tables = null;
    public ?string $type = null;
    public ?float $version = null;
    public ?array $worker_binding = null;
}

/** Request payload for WorkersPipelinesOther#remove. */
class WorkersPipelinesOtherRemoveMatch
{
    public string $account_id;
    public ?string $pipeline_id = null;
    public ?string $pipeline_name = null;
    public ?string $sink_id = null;
    public ?string $stream_id = null;
}

/** WorkersScriptAndVersionSetting entity data model. */
class WorkersScriptAndVersionSetting
{
    public array $errors;
    public array $messages;
    public array $result;
    public bool $success;
}

/** Request payload for WorkersScriptAndVersionSetting#list. */
class WorkersScriptAndVersionSettingListMatch
{
    public string $account_id;
    public string $script_name;
}

/** Request payload for WorkersScriptAndVersionSetting#update. */
class WorkersScriptAndVersionSettingUpdateData
{
    public string $account_id;
    public string $script_name;
    public ?array $errors = null;
    public ?array $messages = null;
    public ?array $result = null;
    public ?bool $success = null;
}

/** WorkersScriptResponseCollection entity data model. */
class WorkersScriptResponseCollection
{
    public array $errors;
    public array $messages;
    public array $result;
    public bool $success;
}

/** Request payload for WorkersScriptResponseCollection#list. */
class WorkersScriptResponseCollectionListMatch
{
    public string $account_id;
    public ?string $tag = null;
}

/** WorkersScriptResponseSingle entity data model. */
class WorkersScriptResponseSingle
{
}

/** Request payload for WorkersScriptResponseSingle#update. */
class WorkersScriptResponseSingleUpdateData
{
    public string $account_id;
    public ?string $environment_name = null;
    public ?string $service_id = null;
    public ?string $namespace_id = null;
    public ?string $script_name = null;
}

/** WorkersSmartPlacement entity data model. */
class WorkersSmartPlacement
{
    public array $errors;
    public array $messages;
    public array $result;
    public bool $success;
}

/** Request payload for WorkersSmartPlacement#list. */
class WorkersSmartPlacementListMatch
{
    public string $account_id;
}

/** WorkersUsageModel entity data model. */
class WorkersUsageModel
{
    public array $errors;
    public array $messages;
    public array $result;
    public bool $success;
    public ?string $usage_model = null;
    public ?array $user_limits = null;
}

/** Request payload for WorkersUsageModel#list. */
class WorkersUsageModelListMatch
{
    public string $account_id;
    public string $script_name;
}

/** Request payload for WorkersUsageModel#update. */
class WorkersUsageModelUpdateData
{
    public string $account_id;
    public string $script_name;
    public ?array $errors = null;
    public ?array $messages = null;
    public ?array $result = null;
    public ?bool $success = null;
    public ?string $usage_model = null;
    public ?array $user_limits = null;
}

/** WorkersVersionsList entity data model. */
class WorkersVersionsList
{
    public array $errors;
    public array $messages;
    public array $result;
    public bool $success;
}

/** Request payload for WorkersVersionsList#list. */
class WorkersVersionsListListMatch
{
    public string $account_id;
    public string $script_name;
    public ?bool $deployable = null;
    public ?int $page = null;
    public ?int $per_page = null;
}

/** WorkersVersionsSingle entity data model. */
class WorkersVersionsSingle
{
    public array $errors;
    public array $messages;
    public mixed $result;
    public bool $success;
}

/** Request payload for WorkersVersionsSingle#load. */
class WorkersVersionsSingleLoadMatch
{
    public string $account_id;
    public string $script_id;
    public string $version_id;
}

/** WorkersVersionsUpload entity data model. */
class WorkersVersionsUpload
{
}

/** Request payload for WorkersVersionsUpload#create. */
class WorkersVersionsUploadCreateData
{
    public string $account_id;
    public string $script_name;
    public ?string $bindings_inherit = null;
}

/** Workflow entity data model. */
class Workflow
{
    public string $class_name;
    public ?array $concurrency = null;
    public ?array $default_retention = null;
    public array $errors;
    public ?string $id = null;
    public array $instances;
    public ?array $limits = null;
    public array $messages;
    public array $result;
    public array $result_info;
    public ?array $schedules = null;
    public string $script_name;
    public bool $success;
}

/** Request payload for Workflow#load. */
class WorkflowLoadMatch
{
    public string $account_id;
    public ?string $instance_id = null;
    public ?string $workflow_id = null;
    public ?int $cursor = null;
    public ?array $filter = null;
    public ?string $order = null;
    public ?string $simple = null;
    public ?string $version_id = null;
    public ?string $id = null;
    public ?string $script_name = null;
}

/** Request payload for Workflow#list. */
class WorkflowListMatch
{
    public string $account_id;
    public ?string $instance_id = null;
    public ?string $workflow_id = null;
    public ?int $attempt = null;
    public ?string $name = null;
    public ?string $type = null;
    public ?float $page = null;
    public ?float $per_page = null;
    public ?string $search = null;
    public ?string $version_id = null;
}

/** Request payload for Workflow#create. */
class WorkflowCreateData
{
    public string $account_id;
    public ?string $event_type = null;
    public ?string $instance_id = null;
    public string $workflow_id;
    public string $class_name;
    public ?array $concurrency = null;
    public ?array $default_retention = null;
    public array $errors;
    public ?string $id = null;
    public array $instances;
    public ?array $limits = null;
    public array $messages;
    public array $result;
    public array $result_info;
    public ?array $schedules = null;
    public string $script_name;
    public bool $success;
}

/** Request payload for Workflow#update. */
class WorkflowUpdateData
{
    public string $account_id;
    public ?string $id = null;
    public ?string $script_name = null;
    public ?string $class_name = null;
    public ?array $concurrency = null;
    public ?array $default_retention = null;
    public ?array $errors = null;
    public ?array $instances = null;
    public ?array $limits = null;
    public ?array $messages = null;
    public ?array $result = null;
    public ?array $result_info = null;
    public ?array $schedules = null;
    public ?bool $success = null;
}

/** Request payload for Workflow#remove. */
class WorkflowRemoveMatch
{
    public string $account_id;
    public ?string $instance_id = null;
    public ?string $workflow_id = null;
    public ?string $id = null;
    public ?string $script_name = null;
}

