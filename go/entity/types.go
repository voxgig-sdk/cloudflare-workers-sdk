// Typed models for the CloudflareWorkers SDK.
//
// GENERATED from the API model: main.kit.entity.<e>.fields{} and per-op
// params (op.<name>.points[].g.params[]). Field/param types come from the
// canonical type sentinels via @voxgig/sdkgen canonToType (source of truth:
// @voxgig/apidef VALID_CANON). Do not edit by hand.
package entity

import (
	"encoding/json"

	"github.com/voxgig-sdk/cloudflare-workers-sdk/go/core"
)

// Account is the typed data model for the account entity.
type Account struct {
}

// AccountListMatch is the typed request payload for Account.ListTyped.
type AccountListMatch struct {
	Id string `json:"id"`
}

// Application is the typed data model for the application entity.
type Application struct {
}

// ApplicationLoadMatch is the typed request payload for Application.LoadTyped.
type ApplicationLoadMatch struct {
	AccountId string `json:"account_id"`
	Id string `json:"id"`
}

// ApplicationListMatch is the typed request payload for Application.ListTyped.
type ApplicationListMatch struct {
	AccountId string `json:"account_id"`
	Image *string `json:"image,omitempty"`
	Name *string `json:"name,omitempty"`
	PageToken *string `json:"page_token,omitempty"`
	PerPage *int `json:"per_page,omitempty"`
}

// ApplicationCreateData is the typed request payload for Application.CreateTyped.
type ApplicationCreateData struct {
	AccountId string `json:"account_id"`
	Configuration *map[string]any `json:"configuration,omitempty"`
	Constraints *map[string]any `json:"constraints,omitempty"`
	Errors []any `json:"errors"`
	Id *string `json:"id,omitempty"`
	MaxInstances *int `json:"max_instances,omitempty"`
	Messages []any `json:"messages"`
	Observability *any `json:"observability,omitempty"`
	Result any `json:"result"`
	ResultInfo map[string]any `json:"result_info"`
	RolloutActiveGracePeriod *int `json:"rollout_active_grace_period,omitempty"`
	Success bool `json:"success"`
}

// ApplicationUpdateData is the typed request payload for Application.UpdateTyped.
type ApplicationUpdateData struct {
	AccountId string `json:"account_id"`
	Id string `json:"id"`
	Configuration *map[string]any `json:"configuration,omitempty"`
	Constraints *map[string]any `json:"constraints,omitempty"`
	Errors *[]any `json:"errors,omitempty"`
	MaxInstances *int `json:"max_instances,omitempty"`
	Messages *[]any `json:"messages,omitempty"`
	Observability *any `json:"observability,omitempty"`
	Result *any `json:"result,omitempty"`
	ResultInfo *map[string]any `json:"result_info,omitempty"`
	RolloutActiveGracePeriod *int `json:"rollout_active_grace_period,omitempty"`
	Success *bool `json:"success,omitempty"`
}

// ApplicationRemoveMatch is the typed request payload for Application.RemoveTyped.
type ApplicationRemoveMatch struct {
	AccountId string `json:"account_id"`
	Id string `json:"id"`
}

// Brapi is the typed data model for the brapi entity.
type Brapi struct {
}

// BrapiLoadMatch is the typed request payload for Brapi.LoadTyped.
type BrapiLoadMatch struct {
	AccountId string `json:"account_id"`
	JobId *string `json:"job_id,omitempty"`
	CacheTtl *float64 `json:"cache_ttl,omitempty"`
	Cursor *float64 `json:"cursor,omitempty"`
	Limit *float64 `json:"limit,omitempty"`
	Status *string `json:"status,omitempty"`
	SessionId *string `json:"session_id,omitempty"`
	KeepAlive *float64 `json:"keep_alive,omitempty"`
	Lab *bool `json:"lab,omitempty"`
	Recording *bool `json:"recording,omitempty"`
	BrowserId *string `json:"browser_id,omitempty"`
	TargetId *string `json:"target_id,omitempty"`
	RecordingId *string `json:"recording_id,omitempty"`
	Format *string `json:"format,omitempty"`
	Target *string `json:"target,omitempty"`
}

// BrapiListMatch is the typed request payload for Brapi.ListTyped.
type BrapiListMatch struct {
	AccountId string `json:"account_id"`
	BrowserId *string `json:"browser_id,omitempty"`
	LiveViewUrlExpiresInM *float64 `json:"live_view_url_expires_in_m,omitempty"`
	Limit *float64 `json:"limit,omitempty"`
	Offset *float64 `json:"offset,omitempty"`
}

// BrapiCreateData is the typed request payload for Brapi.CreateTyped.
type BrapiCreateData struct {
	AccountId string `json:"account_id"`
	KeepAlive *float64 `json:"keep_alive,omitempty"`
	Lab *bool `json:"lab,omitempty"`
	LiveViewUrlExpiresInM *float64 `json:"live_view_url_expires_in_m,omitempty"`
	Recording *bool `json:"recording,omitempty"`
	Target *bool `json:"target,omitempty"`
	CacheTtl *float64 `json:"cache_ttl,omitempty"`
	Browser string `json:"Browser"`
	ProtocolVersion string `json:"ProtocolVersion"`
	UserAgent string `json:"UserAgent"`
	V8Version string `json:"V8Version"`
	WebKitVersion string `json:"WebKitVersion"`
	ActionTimeout *float64 `json:"actionTimeout,omitempty"`
	AddScriptTag *[]any `json:"addScriptTag,omitempty"`
	AddStyleTag *[]any `json:"addStyleTag,omitempty"`
	AllowRequestPattern *[]any `json:"allowRequestPattern,omitempty"`
	AllowResourceTypes *[]any `json:"allowResourceTypes,omitempty"`
	Authenticate map[string]any `json:"authenticate"`
	BestAttempt *bool `json:"bestAttempt,omitempty"`
	CloseReason *float64 `json:"closeReason,omitempty"`
	CloseReasonText *string `json:"closeReasonText,omitempty"`
	Commands *[]any `json:"commands,omitempty"`
	ConnectionEndTime *float64 `json:"connectionEndTime,omitempty"`
	ConnectionId *string `json:"connectionId,omitempty"`
	ConnectionStartTime *float64 `json:"connectionStartTime,omitempty"`
	Cookies *[]any `json:"cookies,omitempty"`
	CustomAi *[]any `json:"custom_ai,omitempty"`
	Dependencies *[]any `json:"dependencies,omitempty"`
	Description *string `json:"description,omitempty"`
	DevtoolsFrontendUrl *string `json:"devtoolsFrontendUrl,omitempty"`
	Domain string `json:"domain"`
	Elements []any `json:"elements"`
	EmulateMediaType *string `json:"emulateMediaType,omitempty"`
	EndTime *float64 `json:"endTime,omitempty"`
	Errors *[]any `json:"errors,omitempty"`
	Events *[]any `json:"events,omitempty"`
	ExcludeExternalLinks *bool `json:"excludeExternalLinks,omitempty"`
	Experimental *bool `json:"experimental,omitempty"`
	Formats *[]any `json:"formats,omitempty"`
	GotoOptions *map[string]any `json:"gotoOptions,omitempty"`
	Guardrails *map[string]any `json:"guardrails,omitempty"`
	Html *string `json:"html,omitempty"`
	Id string `json:"id"`
	InterestingOnly *bool `json:"interestingOnly,omitempty"`
	LastUpdated *float64 `json:"lastUpdated,omitempty"`
	Message string `json:"message"`
	Meta map[string]any `json:"meta"`
	PdfOptions *map[string]any `json:"pdfOptions,omitempty"`
	Prompt *string `json:"prompt,omitempty"`
	RejectRequestPattern *[]any `json:"rejectRequestPattern,omitempty"`
	RejectResourceTypes *[]any `json:"rejectResourceTypes,omitempty"`
	ResponseFormat map[string]any `json:"response_format"`
	Result map[string]any `json:"result"`
	Root *string `json:"root,omitempty"`
	ScreenshotOptions *map[string]any `json:"screenshotOptions,omitempty"`
	ScrollPage *bool `json:"scrollPage,omitempty"`
	Selector *string `json:"selector,omitempty"`
	SessionId string `json:"sessionId"`
	SetExtraHTTPHeaders *map[string]any `json:"setExtraHTTPHeaders,omitempty"`
	SetJavaScriptEnabled *bool `json:"setJavaScriptEnabled,omitempty"`
	StartTime *float64 `json:"startTime,omitempty"`
	Success bool `json:"success"`
	Title *string `json:"title,omitempty"`
	Type string `json:"type"`
	Types *[]any `json:"types,omitempty"`
	Url string `json:"url"`
	UserAgent2 *string `json:"userAgent,omitempty"`
	Viewport map[string]any `json:"viewport"`
	VisibleLinksOnly *bool `json:"visibleLinksOnly,omitempty"`
	WaitForSelector map[string]any `json:"waitForSelector"`
	WaitForTimeout *float64 `json:"waitForTimeout,omitempty"`
	WebSocketDebuggerUrl *string `json:"webSocketDebuggerUrl,omitempty"`
}

// BrapiUpdateData is the typed request payload for Brapi.UpdateTyped.
type BrapiUpdateData struct {
	AccountId string `json:"account_id"`
	BrowserId string `json:"browser_id"`
	LiveViewUrlExpiresInM *float64 `json:"live_view_url_expires_in_m,omitempty"`
	Url *string `json:"url,omitempty"`
	Browser *string `json:"Browser,omitempty"`
	ProtocolVersion *string `json:"ProtocolVersion,omitempty"`
	UserAgent *string `json:"UserAgent,omitempty"`
	V8Version *string `json:"V8Version,omitempty"`
	WebKitVersion *string `json:"WebKitVersion,omitempty"`
	ActionTimeout *float64 `json:"actionTimeout,omitempty"`
	AddScriptTag *[]any `json:"addScriptTag,omitempty"`
	AddStyleTag *[]any `json:"addStyleTag,omitempty"`
	AllowRequestPattern *[]any `json:"allowRequestPattern,omitempty"`
	AllowResourceTypes *[]any `json:"allowResourceTypes,omitempty"`
	Authenticate *map[string]any `json:"authenticate,omitempty"`
	BestAttempt *bool `json:"bestAttempt,omitempty"`
	CloseReason *float64 `json:"closeReason,omitempty"`
	CloseReasonText *string `json:"closeReasonText,omitempty"`
	Commands *[]any `json:"commands,omitempty"`
	ConnectionEndTime *float64 `json:"connectionEndTime,omitempty"`
	ConnectionId *string `json:"connectionId,omitempty"`
	ConnectionStartTime *float64 `json:"connectionStartTime,omitempty"`
	Cookies *[]any `json:"cookies,omitempty"`
	CustomAi *[]any `json:"custom_ai,omitempty"`
	Dependencies *[]any `json:"dependencies,omitempty"`
	Description *string `json:"description,omitempty"`
	DevtoolsFrontendUrl *string `json:"devtoolsFrontendUrl,omitempty"`
	Domain *string `json:"domain,omitempty"`
	Elements *[]any `json:"elements,omitempty"`
	EmulateMediaType *string `json:"emulateMediaType,omitempty"`
	EndTime *float64 `json:"endTime,omitempty"`
	Errors *[]any `json:"errors,omitempty"`
	Events *[]any `json:"events,omitempty"`
	ExcludeExternalLinks *bool `json:"excludeExternalLinks,omitempty"`
	Experimental *bool `json:"experimental,omitempty"`
	Formats *[]any `json:"formats,omitempty"`
	GotoOptions *map[string]any `json:"gotoOptions,omitempty"`
	Guardrails *map[string]any `json:"guardrails,omitempty"`
	Html *string `json:"html,omitempty"`
	Id *string `json:"id,omitempty"`
	InterestingOnly *bool `json:"interestingOnly,omitempty"`
	LastUpdated *float64 `json:"lastUpdated,omitempty"`
	Message *string `json:"message,omitempty"`
	Meta *map[string]any `json:"meta,omitempty"`
	PdfOptions *map[string]any `json:"pdfOptions,omitempty"`
	Prompt *string `json:"prompt,omitempty"`
	RejectRequestPattern *[]any `json:"rejectRequestPattern,omitempty"`
	RejectResourceTypes *[]any `json:"rejectResourceTypes,omitempty"`
	ResponseFormat *map[string]any `json:"response_format,omitempty"`
	Result *map[string]any `json:"result,omitempty"`
	Root *string `json:"root,omitempty"`
	ScreenshotOptions *map[string]any `json:"screenshotOptions,omitempty"`
	ScrollPage *bool `json:"scrollPage,omitempty"`
	Selector *string `json:"selector,omitempty"`
	SessionId *string `json:"sessionId,omitempty"`
	SetExtraHTTPHeaders *map[string]any `json:"setExtraHTTPHeaders,omitempty"`
	SetJavaScriptEnabled *bool `json:"setJavaScriptEnabled,omitempty"`
	StartTime *float64 `json:"startTime,omitempty"`
	Success *bool `json:"success,omitempty"`
	Title *string `json:"title,omitempty"`
	Type *string `json:"type,omitempty"`
	Types *[]any `json:"types,omitempty"`
	UserAgent2 *string `json:"userAgent,omitempty"`
	Viewport *map[string]any `json:"viewport,omitempty"`
	VisibleLinksOnly *bool `json:"visibleLinksOnly,omitempty"`
	WaitForSelector *map[string]any `json:"waitForSelector,omitempty"`
	WaitForTimeout *float64 `json:"waitForTimeout,omitempty"`
	WebSocketDebuggerUrl *string `json:"webSocketDebuggerUrl,omitempty"`
}

// BrapiRemoveMatch is the typed request payload for Brapi.RemoveTyped.
type BrapiRemoveMatch struct {
	AccountId string `json:"account_id"`
	JobId *string `json:"job_id,omitempty"`
	SessionId *string `json:"session_id,omitempty"`
}

// Build is the typed data model for the build entity.
type Build struct {
}

// BuildLoadMatch is the typed request payload for Build.LoadTyped.
type BuildLoadMatch struct {
	AccountId string `json:"account_id"`
	Id string `json:"id"`
}

// BuildListMatch is the typed request payload for Build.ListTyped.
type BuildListMatch struct {
	AccountId string `json:"account_id"`
	VersionId string `json:"version_id"`
}

// BuildUpdateData is the typed request payload for Build.UpdateTyped.
type BuildUpdateData struct {
	AccountId string `json:"account_id"`
	Id string `json:"id"`
	Errors *[]any `json:"errors,omitempty"`
	Messages *[]any `json:"messages,omitempty"`
	Result *map[string]any `json:"result,omitempty"`
	ResultInfo *map[string]any `json:"result_info,omitempty"`
	Success *bool `json:"success,omitempty"`
}

// BuildToken is the typed data model for the build_token entity.
type BuildToken struct {
}

// BuildTokenListMatch is the typed request payload for BuildToken.ListTyped.
type BuildTokenListMatch struct {
	AccountId string `json:"account_id"`
	Page *int `json:"page,omitempty"`
	PerPage *int `json:"per_page,omitempty"`
}

// BuildTokenCreateData is the typed request payload for BuildToken.CreateTyped.
type BuildTokenCreateData struct {
	AccountId string `json:"account_id"`
	BuildTokenName string `json:"build_token_name"`
	BuildTokenSecret string `json:"build_token_secret"`
	CloudflareTokenId string `json:"cloudflare_token_id"`
	Errors []any `json:"errors"`
	Messages []any `json:"messages"`
	Result map[string]any `json:"result"`
	ResultInfo *map[string]any `json:"result_info,omitempty"`
	Success bool `json:"success"`
}

// BuildsApi is the typed data model for the builds_api entity.
type BuildsApi struct {
}

// BuildsApiCreateData is the typed request payload for BuildsApi.CreateTyped.
type BuildsApiCreateData struct {
	AccountId string `json:"account_id"`
	TriggerId string `json:"trigger_id"`
	Errors []any `json:"errors"`
	Messages []any `json:"messages"`
	Result map[string]any `json:"result"`
	ResultInfo *map[string]any `json:"result_info,omitempty"`
	Success bool `json:"success"`
}

// BuildsApiRemoveMatch is the typed request payload for BuildsApi.RemoveTyped.
type BuildsApiRemoveMatch struct {
	AccountId string `json:"account_id"`
	EnvironmentVariableKey string `json:"environment_variable_key"`
	TriggerId string `json:"trigger_id"`
}

// Connection is the typed data model for the connection entity.
type Connection struct {
}

// ConnectionRemoveMatch is the typed request payload for Connection.RemoveTyped.
type ConnectionRemoveMatch struct {
	AccountId string `json:"account_id"`
	Id string `json:"id"`
}

// ContainerImage is the typed data model for the container_image entity.
type ContainerImage struct {
}

// ContainerImageCreateData is the typed request payload for ContainerImage.CreateTyped.
type ContainerImageCreateData struct {
	AccountId string `json:"account_id"`
	Image string `json:"image"`
}

// ContainerInstance is the typed data model for the container_instance entity.
type ContainerInstance struct {
}

// ContainerInstanceLoadMatch is the typed request payload for ContainerInstance.LoadTyped.
type ContainerInstanceLoadMatch struct {
	AccountId string `json:"account_id"`
	ApplicationId string `json:"application_id"`
	Id string `json:"id"`
}

// ContainerInstanceListMatch is the typed request payload for ContainerInstance.ListTyped.
type ContainerInstanceListMatch struct {
	AccountId string `json:"account_id"`
	ApplicationId string `json:"application_id"`
	NamePrefix *string `json:"name_prefix,omitempty"`
	PageToken *string `json:"page_token,omitempty"`
	PerPage *int `json:"per_page,omitempty"`
	State *string `json:"state,omitempty"`
}

// DeployHook is the typed data model for the deploy_hook entity.
type DeployHook struct {
}

// DeployHookLoadMatch is the typed request payload for DeployHook.LoadTyped.
type DeployHookLoadMatch struct {
	AccountId string `json:"account_id"`
	Id string `json:"id"`
	WorkerId string `json:"worker_id"`
}

// DeployHookListMatch is the typed request payload for DeployHook.ListTyped.
type DeployHookListMatch struct {
	AccountId string `json:"account_id"`
	ScriptName string `json:"script_name"`
}

// DeployHookCreateData is the typed request payload for DeployHook.CreateTyped.
type DeployHookCreateData struct {
	Id string `json:"id"`
	Branch string `json:"branch"`
	DeployHookName string `json:"deploy_hook_name"`
	Errors []any `json:"errors"`
	Messages []any `json:"messages"`
	Result map[string]any `json:"result"`
	ResultInfo *map[string]any `json:"result_info,omitempty"`
	Success bool `json:"success"`
}

// DeployHookUpdateData is the typed request payload for DeployHook.UpdateTyped.
type DeployHookUpdateData struct {
	AccountId string `json:"account_id"`
	Id string `json:"id"`
	WorkerId string `json:"worker_id"`
	Branch *string `json:"branch,omitempty"`
	DeployHookName *string `json:"deploy_hook_name,omitempty"`
	Errors *[]any `json:"errors,omitempty"`
	Messages *[]any `json:"messages,omitempty"`
	Result *map[string]any `json:"result,omitempty"`
	ResultInfo *map[string]any `json:"result_info,omitempty"`
	Success *bool `json:"success,omitempty"`
}

// DeployHookRemoveMatch is the typed request payload for DeployHook.RemoveTyped.
type DeployHookRemoveMatch struct {
	AccountId string `json:"account_id"`
	Id string `json:"id"`
	WorkerId string `json:"worker_id"`
}

// Deployment is the typed data model for the deployment entity.
type Deployment struct {
}

// DeploymentRemoveMatch is the typed request payload for Deployment.RemoveTyped.
type DeploymentRemoveMatch struct {
	AccountId string `json:"account_id"`
	Id string `json:"id"`
	PreviewId *string `json:"preview_id,omitempty"`
	WorkerId *string `json:"worker_id,omitempty"`
	ScriptId *string `json:"script_id,omitempty"`
}

// Destination is the typed data model for the destination entity.
type Destination struct {
}

// DestinationListMatch is the typed request payload for Destination.ListTyped.
type DestinationListMatch struct {
	AccountId string `json:"account_id"`
	Order *string `json:"order,omitempty"`
	OrderBy *string `json:"order_by,omitempty"`
	Page *float64 `json:"page,omitempty"`
	PerPage *float64 `json:"per_page,omitempty"`
}

// DestinationCreateData is the typed request payload for Destination.CreateTyped.
type DestinationCreateData struct {
	AccountId string `json:"account_id"`
	Configuration map[string]any `json:"configuration"`
	Enabled bool `json:"enabled"`
	Errors []any `json:"errors"`
	Id *string `json:"id,omitempty"`
	Messages []any `json:"messages"`
	Name string `json:"name"`
	Result map[string]any `json:"result"`
	SkipPreflightCheck *bool `json:"skipPreflightCheck,omitempty"`
	Success bool `json:"success"`
}

// DestinationUpdateData is the typed request payload for Destination.UpdateTyped.
type DestinationUpdateData struct {
	AccountId string `json:"account_id"`
	Id string `json:"id"`
	Configuration *map[string]any `json:"configuration,omitempty"`
	Enabled *bool `json:"enabled,omitempty"`
	Errors *[]any `json:"errors,omitempty"`
	Messages *[]any `json:"messages,omitempty"`
	Name *string `json:"name,omitempty"`
	Result *map[string]any `json:"result,omitempty"`
	SkipPreflightCheck *bool `json:"skipPreflightCheck,omitempty"`
	Success *bool `json:"success,omitempty"`
}

// DestinationRemoveMatch is the typed request payload for Destination.RemoveTyped.
type DestinationRemoveMatch struct {
	AccountId string `json:"account_id"`
	Id string `json:"id"`
}

// Domain is the typed data model for the domain entity.
type Domain struct {
}

// DomainLoadMatch is the typed request payload for Domain.LoadTyped.
type DomainLoadMatch struct {
	AccountId string `json:"account_id"`
	Id string `json:"id"`
}

// DomainListMatch is the typed request payload for Domain.ListTyped.
type DomainListMatch struct {
	AccountId string `json:"account_id"`
	Environment *string `json:"environment,omitempty"`
	Hostname *string `json:"hostname,omitempty"`
	Service *string `json:"service,omitempty"`
	ZoneId *string `json:"zone_id,omitempty"`
	ZoneName *string `json:"zone_name,omitempty"`
}

// DomainUpdateData is the typed request payload for Domain.UpdateTyped.
type DomainUpdateData struct {
	AccountId string `json:"account_id"`
	Errors *[]any `json:"errors,omitempty"`
	Id *string `json:"id,omitempty"`
	Messages *[]any `json:"messages,omitempty"`
	Result *map[string]any `json:"result,omitempty"`
	Success *bool `json:"success,omitempty"`
}

// DomainRemoveMatch is the typed request payload for Domain.RemoveTyped.
type DomainRemoveMatch struct {
	AccountId string `json:"account_id"`
	Id string `json:"id"`
}

// DurableObjectsNamespace is the typed data model for the durable_objects_namespace entity.
type DurableObjectsNamespace struct {
}

// DurableObjectsNamespaceListMatch is the typed request payload for DurableObjectsNamespace.ListTyped.
type DurableObjectsNamespaceListMatch struct {
	AccountId string `json:"account_id"`
	NamespaceId *string `json:"namespace_id,omitempty"`
	Cursor *string `json:"cursor,omitempty"`
	Limit *float64 `json:"limit,omitempty"`
	Page *int `json:"page,omitempty"`
	PerPage *int `json:"per_page,omitempty"`
}

// DurableObjectsNamespaceCreateData is the typed request payload for DurableObjectsNamespace.CreateTyped.
type DurableObjectsNamespaceCreateData struct {
	AccountId string `json:"account_id"`
	NamespaceId string `json:"namespace_id"`
	Result *[]any `json:"result,omitempty"`
	ResultInfo *map[string]any `json:"result_info,omitempty"`
}

// EnvironmentVariable is the typed data model for the environment_variable entity.
type EnvironmentVariable struct {
}

// EnvironmentVariableListMatch is the typed request payload for EnvironmentVariable.ListTyped.
type EnvironmentVariableListMatch struct {
	AccountId string `json:"account_id"`
	TriggerId string `json:"trigger_id"`
}

// EnvironmentVariableUpdateData is the typed request payload for EnvironmentVariable.UpdateTyped.
type EnvironmentVariableUpdateData struct {
	AccountId string `json:"account_id"`
	TriggerId string `json:"trigger_id"`
	Errors *[]any `json:"errors,omitempty"`
	Messages *[]any `json:"messages,omitempty"`
	Result *map[string]any `json:"result,omitempty"`
	ResultInfo *map[string]any `json:"result_info,omitempty"`
	Success *bool `json:"success,omitempty"`
}

// GitHubIntegration is the typed data model for the git_hub_integration entity.
type GitHubIntegration struct {
}

// GitHubIntegrationListMatch is the typed request payload for GitHubIntegration.ListTyped.
type GitHubIntegrationListMatch struct {
	AccountId string `json:"account_id"`
	ProviderAccountId string `json:"provider_account_id"`
	ProviderType string `json:"provider_type"`
	RepoId string `json:"repo_id"`
	Branch string `json:"branch"`
	RootDirectory *string `json:"root_directory,omitempty"`
}

// Hyperdrive is the typed data model for the hyperdrive entity.
type Hyperdrive struct {
}

// HyperdriveLoadMatch is the typed request payload for Hyperdrive.LoadTyped.
type HyperdriveLoadMatch struct {
	AccountId string `json:"account_id"`
	HyperdriveId string `json:"hyperdrive_id"`
}

// HyperdriveListMatch is the typed request payload for Hyperdrive.ListTyped.
type HyperdriveListMatch struct {
	AccountId string `json:"account_id"`
	Page *int `json:"page,omitempty"`
	PerPage *int `json:"per_page,omitempty"`
}

// HyperdriveCreateData is the typed request payload for Hyperdrive.CreateTyped.
type HyperdriveCreateData struct {
	AccountId string `json:"account_id"`
	Integration string `json:"integration"`
	Caching *map[string]any `json:"caching,omitempty"`
	CreatedOn *string `json:"created_on,omitempty"`
	Id string `json:"id"`
	ModifiedOn *string `json:"modified_on,omitempty"`
	Mtls *map[string]any `json:"mtls,omitempty"`
	Name string `json:"name"`
	Origin map[string]any `json:"origin"`
	OriginConnectionLimit *int `json:"origin_connection_limit,omitempty"`
	RestartedOn *string `json:"restarted_on,omitempty"`
	Result map[string]any `json:"result"`
}

// HyperdriveUpdateData is the typed request payload for Hyperdrive.UpdateTyped.
type HyperdriveUpdateData struct {
	AccountId string `json:"account_id"`
	HyperdriveId string `json:"hyperdrive_id"`
	Caching *map[string]any `json:"caching,omitempty"`
	CreatedOn *string `json:"created_on,omitempty"`
	Id *string `json:"id,omitempty"`
	ModifiedOn *string `json:"modified_on,omitempty"`
	Mtls *map[string]any `json:"mtls,omitempty"`
	Name *string `json:"name,omitempty"`
	Origin *map[string]any `json:"origin,omitempty"`
	OriginConnectionLimit *int `json:"origin_connection_limit,omitempty"`
	RestartedOn *string `json:"restarted_on,omitempty"`
	Result *map[string]any `json:"result,omitempty"`
}

// HyperdriveRemoveMatch is the typed request payload for Hyperdrive.RemoveTyped.
type HyperdriveRemoveMatch struct {
	AccountId string `json:"account_id"`
	HyperdriveId string `json:"hyperdrive_id"`
}

// ImageRegistry is the typed data model for the image_registry entity.
type ImageRegistry struct {
}

// ImageRegistryListMatch is the typed request payload for ImageRegistry.ListTyped.
type ImageRegistryListMatch struct {
	AccountId string `json:"account_id"`
}

// ImageRegistryCreateData is the typed request payload for ImageRegistry.CreateTyped.
type ImageRegistryCreateData struct {
	AccountId string `json:"account_id"`
	Domain *string `json:"domain,omitempty"`
	Auth map[string]any `json:"auth"`
	Errors []any `json:"errors"`
	ExpirationMinutes *int `json:"expiration_minutes,omitempty"`
	Id *string `json:"id,omitempty"`
	IsPublic *bool `json:"is_public,omitempty"`
	Kind any `json:"kind"`
	Messages []any `json:"messages"`
	Permissions *[]any `json:"permissions,omitempty"`
	Result []any `json:"result"`
	Success bool `json:"success"`
}

// ImageRegistryRemoveMatch is the typed request payload for ImageRegistry.RemoveTyped.
type ImageRegistryRemoveMatch struct {
	AccountId string `json:"account_id"`
	Id string `json:"id"`
}

// Issue is the typed data model for the issue entity.
type Issue struct {
}

// IssueLoadMatch is the typed request payload for Issue.LoadTyped.
type IssueLoadMatch struct {
	AccountId string `json:"account_id"`
	AutomationId *string `json:"automation_id,omitempty"`
	Id *string `json:"id,omitempty"`
}

// IssueListMatch is the typed request payload for Issue.ListTyped.
type IssueListMatch struct {
	AccountId string `json:"account_id"`
	Order *string `json:"order,omitempty"`
	OrderBy *string `json:"order_by,omitempty"`
	Page *int `json:"page,omitempty"`
	PerPage *int `json:"per_page,omitempty"`
	Search *string `json:"search,omitempty"`
	Service *string `json:"service,omitempty"`
	Status *string `json:"status,omitempty"`
	Type *string `json:"type,omitempty"`
}

// IssueCreateData is the typed request payload for Issue.CreateTyped.
type IssueCreateData struct {
	AccountId string `json:"account_id"`
	GroupId string `json:"group_id"`
	AfterInactivitySeconds *int `json:"afterInactivitySeconds,omitempty"`
	AfterOccurrences *int `json:"afterOccurrences,omitempty"`
	Enabled *bool `json:"enabled,omitempty"`
	Errors []any `json:"errors"`
	Id *string `json:"id,omitempty"`
	IssueIds []any `json:"issueIds"`
	Messages []any `json:"messages"`
	Name *string `json:"name,omitempty"`
	PolicyId string `json:"policyId"`
	Result map[string]any `json:"result"`
	ResultInfo map[string]any `json:"result_info"`
	Service *string `json:"service,omitempty"`
	Status *string `json:"status,omitempty"`
	Success bool `json:"success"`
	Title *string `json:"title,omitempty"`
}

// IssueUpdateData is the typed request payload for Issue.UpdateTyped.
type IssueUpdateData struct {
	AccountId string `json:"account_id"`
	AutomationId string `json:"automation_id"`
	AfterInactivitySeconds *int `json:"afterInactivitySeconds,omitempty"`
	AfterOccurrences *int `json:"afterOccurrences,omitempty"`
	Enabled *bool `json:"enabled,omitempty"`
	Errors *[]any `json:"errors,omitempty"`
	Id *string `json:"id,omitempty"`
	IssueIds *[]any `json:"issueIds,omitempty"`
	Messages *[]any `json:"messages,omitempty"`
	Name *string `json:"name,omitempty"`
	PolicyId *string `json:"policyId,omitempty"`
	Result *map[string]any `json:"result,omitempty"`
	ResultInfo *map[string]any `json:"result_info,omitempty"`
	Service *string `json:"service,omitempty"`
	Status *string `json:"status,omitempty"`
	Success *bool `json:"success,omitempty"`
	Title *string `json:"title,omitempty"`
}

// IssueRemoveMatch is the typed request payload for Issue.RemoveTyped.
type IssueRemoveMatch struct {
	AccountId string `json:"account_id"`
	GroupId *string `json:"group_id,omitempty"`
	IssueId *string `json:"issue_id,omitempty"`
	AutomationId *string `json:"automation_id,omitempty"`
}

// Key is the typed data model for the key entity.
type Key struct {
}

// KeyCreateData is the typed request payload for Key.CreateTyped.
type KeyCreateData struct {
	AccountId string `json:"account_id"`
	Datasets *[]any `json:"datasets,omitempty"`
	Errors []any `json:"errors"`
	Filters *[]any `json:"filters,omitempty"`
	From *float64 `json:"from,omitempty"`
	KeyNeedle map[string]any `json:"keyNeedle"`
	Limit *float64 `json:"limit,omitempty"`
	Messages []any `json:"messages"`
	Needle map[string]any `json:"needle"`
	Result []any `json:"result"`
	Success bool `json:"success"`
	To *float64 `json:"to,omitempty"`
}

// LiveTail is the typed data model for the live_tail entity.
type LiveTail struct {
}

// LiveTailCreateData is the typed request payload for LiveTail.CreateTyped.
type LiveTailCreateData struct {
	AccountId string `json:"account_id"`
	Errors []any `json:"errors"`
	FilterCombination *string `json:"filterCombination,omitempty"`
	Filters *[]any `json:"filters,omitempty"`
	Messages []any `json:"messages"`
	Result map[string]any `json:"result"`
	ScriptId *string `json:"scriptId,omitempty"`
	Success bool `json:"success"`
}

// MetricsExport is the typed data model for the metrics_export entity.
type MetricsExport struct {
}

// MetricsExportListMatch is the typed request payload for MetricsExport.ListTyped.
type MetricsExportListMatch struct {
	AccountId string `json:"account_id"`
}

// MetricsExportCreateData is the typed request payload for MetricsExport.CreateTyped.
type MetricsExportCreateData struct {
	AccountId string `json:"account_id"`
	Errors []any `json:"errors"`
	Messages []any `json:"messages"`
	Requester map[string]any `json:"requester"`
	Resources []any `json:"resources"`
	Result []any `json:"result"`
	Success bool `json:"success"`
}

// Namespace is the typed data model for the namespace entity.
type Namespace struct {
}

// NamespaceRemoveMatch is the typed request payload for Namespace.RemoveTyped.
type NamespaceRemoveMatch struct {
	AccountId string `json:"account_id"`
	Id string `json:"id"`
}

// Preview is the typed data model for the preview entity.
type Preview struct {
}

// PreviewLoadMatch is the typed request payload for Preview.LoadTyped.
type PreviewLoadMatch struct {
	AccountId string `json:"account_id"`
	Id string `json:"id"`
	WorkerId string `json:"worker_id"`
}

// PreviewListMatch is the typed request payload for Preview.ListTyped.
type PreviewListMatch struct {
	AccountId string `json:"account_id"`
	WorkerId string `json:"worker_id"`
	Name *string `json:"name,omitempty"`
	Order *string `json:"order,omitempty"`
	OrderBy *string `json:"order_by,omitempty"`
	Page *int `json:"page,omitempty"`
	PerPage *int `json:"per_page,omitempty"`
	Slug *string `json:"slug,omitempty"`
}

// PreviewCreateData is the typed request payload for Preview.CreateTyped.
type PreviewCreateData struct {
	AccountId string `json:"account_id"`
	WorkerId string `json:"worker_id"`
	IgnoreBaseConfig *bool `json:"ignore_base_config,omitempty"`
	IgnoreDefault *bool `json:"ignore_default,omitempty"`
	Errors []any `json:"errors"`
	Id *string `json:"id,omitempty"`
	Messages []any `json:"messages"`
	Result map[string]any `json:"result"`
	Success bool `json:"success"`
}

// PreviewUpdateData is the typed request payload for Preview.UpdateTyped.
type PreviewUpdateData struct {
	AccountId string `json:"account_id"`
	Id string `json:"id"`
	WorkerId string `json:"worker_id"`
	IgnoreBaseConfig *bool `json:"ignore_base_config,omitempty"`
	IgnoreDefault *bool `json:"ignore_default,omitempty"`
	Errors *[]any `json:"errors,omitempty"`
	Messages *[]any `json:"messages,omitempty"`
	Result *map[string]any `json:"result,omitempty"`
	Success *bool `json:"success,omitempty"`
}

// PreviewRemoveMatch is the typed request payload for Preview.RemoveTyped.
type PreviewRemoveMatch struct {
	AccountId string `json:"account_id"`
	Id string `json:"id"`
	WorkerId string `json:"worker_id"`
	Force *bool `json:"force,omitempty"`
}

// PreviewDeployment is the typed data model for the preview_deployment entity.
type PreviewDeployment struct {
}

// PreviewDeploymentLoadMatch is the typed request payload for PreviewDeployment.LoadTyped.
type PreviewDeploymentLoadMatch struct {
	AccountId string `json:"account_id"`
	Id string `json:"id"`
	PreviewId string `json:"preview_id"`
	WorkerId string `json:"worker_id"`
	Include *string `json:"include,omitempty"`
}

// PreviewDeploymentListMatch is the typed request payload for PreviewDeployment.ListTyped.
type PreviewDeploymentListMatch struct {
	AccountId string `json:"account_id"`
	Id string `json:"id"`
	WorkerId string `json:"worker_id"`
	Page *int `json:"page,omitempty"`
	PerPage *int `json:"per_page,omitempty"`
}

// PreviewDeploymentCreateData is the typed request payload for PreviewDeployment.CreateTyped.
type PreviewDeploymentCreateData struct {
	AccountId string `json:"account_id"`
	Id string `json:"id"`
	WorkerId string `json:"worker_id"`
	IgnoreDefault *bool `json:"ignore_default,omitempty"`
	Errors []any `json:"errors"`
	Messages []any `json:"messages"`
	Result any `json:"result"`
	Success bool `json:"success"`
}

// PreviewDeploymentUpdateData is the typed request payload for PreviewDeployment.UpdateTyped.
type PreviewDeploymentUpdateData struct {
	AccountId string `json:"account_id"`
	PreviewId string `json:"preview_id"`
	WorkerId string `json:"worker_id"`
	IgnoreDefault *bool `json:"ignore_default,omitempty"`
	Errors *[]any `json:"errors,omitempty"`
	Id *string `json:"id,omitempty"`
	Messages *[]any `json:"messages,omitempty"`
	Result *any `json:"result,omitempty"`
	Success *bool `json:"success,omitempty"`
}

// Query is the typed data model for the query entity.
type Query struct {
}

// QueryCreateData is the typed request payload for Query.CreateTyped.
type QueryCreateData struct {
	AccountId string `json:"account_id"`
	Chart *bool `json:"chart,omitempty"`
	ChartType *string `json:"chartType,omitempty"`
	Compare *bool `json:"compare,omitempty"`
	DistributionScale *string `json:"distributionScale,omitempty"`
	Dry *bool `json:"dry,omitempty"`
	Errors []any `json:"errors"`
	Granularity *float64 `json:"granularity,omitempty"`
	IgnoreSeries *bool `json:"ignoreSeries,omitempty"`
	Limit *float64 `json:"limit,omitempty"`
	Messages []any `json:"messages"`
	Offset *string `json:"offset,omitempty"`
	OffsetBy *float64 `json:"offsetBy,omitempty"`
	OffsetDirection *string `json:"offsetDirection,omitempty"`
	Parameters *map[string]any `json:"parameters,omitempty"`
	QueryId string `json:"queryId"`
	Result map[string]any `json:"result"`
	Success bool `json:"success"`
	Timeframe map[string]any `json:"timeframe"`
	View *string `json:"view,omitempty"`
}

// RepositoryConnection is the typed data model for the repository_connection entity.
type RepositoryConnection struct {
}

// RepositoryConnectionUpdateData is the typed request payload for RepositoryConnection.UpdateTyped.
type RepositoryConnectionUpdateData struct {
	AccountId string `json:"account_id"`
	ProviderAccountId *string `json:"provider_account_id,omitempty"`
	ProviderAccountName *string `json:"provider_account_name,omitempty"`
	ProviderType *string `json:"provider_type,omitempty"`
	RepoId *string `json:"repo_id,omitempty"`
	RepoName *string `json:"repo_name,omitempty"`
}

// Rollout is the typed data model for the rollout entity.
type Rollout struct {
}

// RolloutCreateData is the typed request payload for Rollout.CreateTyped.
type RolloutCreateData struct {
	AccountId string `json:"account_id"`
	ApplicationId string `json:"application_id"`
	Description string `json:"description"`
	Kind *string `json:"kind,omitempty"`
	Percentage *int `json:"percentage,omitempty"`
	StepPercentage *int `json:"step_percentage,omitempty"`
	Steps *[]any `json:"steps,omitempty"`
	Strategy string `json:"strategy"`
	TargetConfiguration map[string]any `json:"target_configuration"`
}

// SavedQuery is the typed data model for the saved_query entity.
type SavedQuery struct {
}

// SavedQueryLoadMatch is the typed request payload for SavedQuery.LoadTyped.
type SavedQueryLoadMatch struct {
	AccountId string `json:"account_id"`
	Id string `json:"id"`
}

// SavedQueryListMatch is the typed request payload for SavedQuery.ListTyped.
type SavedQueryListMatch struct {
	AccountId string `json:"account_id"`
	Order *string `json:"order,omitempty"`
	OrderBy *string `json:"order_by,omitempty"`
	Page *float64 `json:"page,omitempty"`
	PerPage *float64 `json:"per_page,omitempty"`
}

// SavedQueryCreateData is the typed request payload for SavedQuery.CreateTyped.
type SavedQueryCreateData struct {
	AccountId string `json:"account_id"`
	Description string `json:"description"`
	Errors []any `json:"errors"`
	Id *string `json:"id,omitempty"`
	Messages []any `json:"messages"`
	Name string `json:"name"`
	Parameters map[string]any `json:"parameters"`
	Result map[string]any `json:"result"`
	Success bool `json:"success"`
}

// SavedQueryUpdateData is the typed request payload for SavedQuery.UpdateTyped.
type SavedQueryUpdateData struct {
	AccountId string `json:"account_id"`
	Id string `json:"id"`
	Description *string `json:"description,omitempty"`
	Errors *[]any `json:"errors,omitempty"`
	Messages *[]any `json:"messages,omitempty"`
	Name *string `json:"name,omitempty"`
	Parameters *map[string]any `json:"parameters,omitempty"`
	Result *map[string]any `json:"result,omitempty"`
	Success *bool `json:"success,omitempty"`
}

// SavedQueryRemoveMatch is the typed request payload for SavedQuery.RemoveTyped.
type SavedQueryRemoveMatch struct {
	AccountId string `json:"account_id"`
	Id string `json:"id"`
}

// Script is the typed data model for the script entity.
type Script struct {
}

// ScriptRemoveMatch is the typed request payload for Script.RemoveTyped.
type ScriptRemoveMatch struct {
	AccountId string `json:"account_id"`
	Id string `json:"id"`
	Force *bool `json:"force,omitempty"`
}

// ScriptSetting is the typed data model for the script_setting entity.
type ScriptSetting struct {
}

// ScriptSettingListMatch is the typed request payload for ScriptSetting.ListTyped.
type ScriptSettingListMatch struct {
	AccountId string `json:"account_id"`
	ScriptName string `json:"script_name"`
}

// ScriptSettingUpdateData is the typed request payload for ScriptSetting.UpdateTyped.
type ScriptSettingUpdateData struct {
	AccountId string `json:"account_id"`
	ScriptName string `json:"script_name"`
	Errors *[]any `json:"errors,omitempty"`
	Logpush *bool `json:"logpush,omitempty"`
	Messages *[]any `json:"messages,omitempty"`
	Observability *any `json:"observability,omitempty"`
	Result *map[string]any `json:"result,omitempty"`
	Success *bool `json:"success,omitempty"`
	Tags *any `json:"tags,omitempty"`
	TailConsumers *[]any `json:"tail_consumers,omitempty"`
}

// Secret is the typed data model for the secret entity.
type Secret struct {
}

// SecretLoadMatch is the typed request payload for Secret.LoadTyped.
type SecretLoadMatch struct {
	AccountId string `json:"account_id"`
	Id string `json:"id"`
	StoreId string `json:"store_id"`
}

// SecretListMatch is the typed request payload for Secret.ListTyped.
type SecretListMatch struct {
	AccountId string `json:"account_id"`
	StoreId string `json:"store_id"`
	Direction *string `json:"direction,omitempty"`
	Order *string `json:"order,omitempty"`
	Page *int `json:"page,omitempty"`
	PerPage *int `json:"per_page,omitempty"`
	Scope *[]any `json:"scope,omitempty"`
	Search *string `json:"search,omitempty"`
}

// SecretCreateData is the typed request payload for Secret.CreateTyped.
type SecretCreateData struct {
	AccountId string `json:"account_id"`
	StoreId string `json:"store_id"`
	Comment *string `json:"comment,omitempty"`
	Id *string `json:"id,omitempty"`
	Result any `json:"result"`
	Scopes *[]any `json:"scopes,omitempty"`
	Value *string `json:"value,omitempty"`
}

// SecretUpdateData is the typed request payload for Secret.UpdateTyped.
type SecretUpdateData struct {
	AccountId string `json:"account_id"`
	Id string `json:"id"`
	StoreId string `json:"store_id"`
	Comment *string `json:"comment,omitempty"`
	Result *any `json:"result,omitempty"`
	Scopes *[]any `json:"scopes,omitempty"`
	Value *string `json:"value,omitempty"`
}

// SecretRemoveMatch is the typed request payload for Secret.RemoveTyped.
type SecretRemoveMatch struct {
	AccountId string `json:"account_id"`
	Id *string `json:"id,omitempty"`
	StoreId string `json:"store_id"`
}

// SecretsStoreDelete is the typed data model for the secrets_store_delete entity.
type SecretsStoreDelete struct {
}

// SecretsStoreDeleteRemoveMatch is the typed request payload for SecretsStoreDelete.RemoveTyped.
type SecretsStoreDeleteRemoveMatch struct {
	AccountId string `json:"account_id"`
	StoreId string `json:"store_id"`
	Force *bool `json:"force,omitempty"`
}

// SecretsStoreQuota is the typed data model for the secrets_store_quota entity.
type SecretsStoreQuota struct {
}

// SecretsStoreQuotaLoadMatch is the typed request payload for SecretsStoreQuota.LoadTyped.
type SecretsStoreQuotaLoadMatch struct {
	AccountId string `json:"account_id"`
}

// SecretsStoreSecret is the typed data model for the secrets_store_secret entity.
type SecretsStoreSecret struct {
}

// SecretsStoreSecretCreateData is the typed request payload for SecretsStoreSecret.CreateTyped.
type SecretsStoreSecretCreateData struct {
	AccountId string `json:"account_id"`
	SecretId string `json:"secret_id"`
	StoreId string `json:"store_id"`
	Comment *string `json:"comment,omitempty"`
	Name string `json:"name"`
	Scopes []any `json:"scopes"`
}

// SecretsStoreStore is the typed data model for the secrets_store_store entity.
type SecretsStoreStore struct {
}

// SecretsStoreStoreLoadMatch is the typed request payload for SecretsStoreStore.LoadTyped.
type SecretsStoreStoreLoadMatch struct {
	AccountId string `json:"account_id"`
	Id string `json:"id"`
}

// SecretsStoreStoreCreateData is the typed request payload for SecretsStoreStore.CreateTyped.
type SecretsStoreStoreCreateData struct {
	AccountId string `json:"account_id"`
	Id *string `json:"id,omitempty"`
	Name string `json:"name"`
	Result any `json:"result"`
}

// SecretsStoreStoresResponseCollection is the typed data model for the secrets_store_stores_response_collection entity.
type SecretsStoreStoresResponseCollection struct {
}

// SecretsStoreStoresResponseCollectionListMatch is the typed request payload for SecretsStoreStoresResponseCollection.ListTyped.
type SecretsStoreStoresResponseCollectionListMatch struct {
	AccountId string `json:"account_id"`
	Direction *string `json:"direction,omitempty"`
	Order *string `json:"order,omitempty"`
	Page *int `json:"page,omitempty"`
	PerPage *int `json:"per_page,omitempty"`
}

// Setting is the typed data model for the setting entity.
type Setting struct {
}

// SettingListMatch is the typed request payload for Setting.ListTyped.
type SettingListMatch struct {
	AccountId string `json:"account_id"`
	EnvironmentName string `json:"environment_name"`
	ServiceId string `json:"service_id"`
}

// SettingUpdateData is the typed request payload for Setting.UpdateTyped.
type SettingUpdateData struct {
	AccountId string `json:"account_id"`
	EnvironmentName string `json:"environment_name"`
	ServiceId string `json:"service_id"`
	Errors *[]any `json:"errors,omitempty"`
	Messages *[]any `json:"messages,omitempty"`
	Result *map[string]any `json:"result,omitempty"`
	Success *bool `json:"success,omitempty"`
}

// Shared is the typed data model for the shared entity.
type Shared struct {
}

// SharedLoadMatch is the typed request payload for Shared.LoadTyped.
type SharedLoadMatch struct {
	AccountId string `json:"account_id"`
	Id string `json:"id"`
	View *string `json:"view,omitempty"`
}

// SharedCreateData is the typed request payload for Shared.CreateTyped.
type SharedCreateData struct {
	AccountId string `json:"account_id"`
	Errors []any `json:"errors"`
	Id *string `json:"id,omitempty"`
	Messages []any `json:"messages"`
	Result map[string]any `json:"result"`
	Success bool `json:"success"`
}

// Tail is the typed data model for the tail entity.
type Tail struct {
}

// TailRemoveMatch is the typed request payload for Tail.RemoveTyped.
type TailRemoveMatch struct {
	AccountId string `json:"account_id"`
	Id string `json:"id"`
	ScriptId string `json:"script_id"`
}

// Token is the typed data model for the token entity.
type Token struct {
}

// TokenRemoveMatch is the typed request payload for Token.RemoveTyped.
type TokenRemoveMatch struct {
	AccountId string `json:"account_id"`
	Id string `json:"id"`
}

// Trigger is the typed data model for the trigger entity.
type Trigger struct {
}

// TriggerCreateData is the typed request payload for Trigger.CreateTyped.
type TriggerCreateData struct {
	AccountId string `json:"account_id"`
	BranchExcludes []any `json:"branch_excludes"`
	BranchIncludes []any `json:"branch_includes"`
	BuildCachingEnabled *bool `json:"build_caching_enabled,omitempty"`
	BuildCommand string `json:"build_command"`
	BuildTokenUuid string `json:"build_token_uuid"`
	DeployCommand string `json:"deploy_command"`
	ExternalScriptId string `json:"external_script_id"`
	Id *string `json:"id,omitempty"`
	PathExcludes []any `json:"path_excludes"`
	PathIncludes []any `json:"path_includes"`
	RepoConnectionUuid string `json:"repo_connection_uuid"`
	RootDirectory string `json:"root_directory"`
	TriggerName string `json:"trigger_name"`
}

// TriggerUpdateData is the typed request payload for Trigger.UpdateTyped.
type TriggerUpdateData struct {
	AccountId string `json:"account_id"`
	Id string `json:"id"`
	BranchExcludes *[]any `json:"branch_excludes,omitempty"`
	BranchIncludes *[]any `json:"branch_includes,omitempty"`
	BuildCachingEnabled *bool `json:"build_caching_enabled,omitempty"`
	BuildCommand *string `json:"build_command,omitempty"`
	BuildTokenUuid *string `json:"build_token_uuid,omitempty"`
	DeployCommand *string `json:"deploy_command,omitempty"`
	ExternalScriptId *string `json:"external_script_id,omitempty"`
	PathExcludes *[]any `json:"path_excludes,omitempty"`
	PathIncludes *[]any `json:"path_includes,omitempty"`
	RepoConnectionUuid *string `json:"repo_connection_uuid,omitempty"`
	RootDirectory *string `json:"root_directory,omitempty"`
	TriggerName *string `json:"trigger_name,omitempty"`
}

// TriggerRemoveMatch is the typed request payload for Trigger.RemoveTyped.
type TriggerRemoveMatch struct {
	AccountId string `json:"account_id"`
	Id string `json:"id"`
}

// Usage is the typed data model for the usage entity.
type Usage struct {
}

// UsageListMatch is the typed request payload for Usage.ListTyped.
type UsageListMatch struct {
	AccountId string `json:"account_id"`
	From string `json:"from"`
	To string `json:"to"`
}

// Value is the typed data model for the value entity.
type Value struct {
}

// ValueCreateData is the typed request payload for Value.CreateTyped.
type ValueCreateData struct {
	AccountId string `json:"account_id"`
	Datasets []any `json:"datasets"`
	Errors []any `json:"errors"`
	Filters *[]any `json:"filters,omitempty"`
	Key string `json:"key"`
	Limit *float64 `json:"limit,omitempty"`
	Messages []any `json:"messages"`
	Needle map[string]any `json:"needle"`
	Result []any `json:"result"`
	Success bool `json:"success"`
	Timeframe map[string]any `json:"timeframe"`
	Type string `json:"type"`
}

// Version is the typed data model for the version entity.
type Version struct {
}

// VersionLoadMatch is the typed request payload for Version.LoadTyped.
type VersionLoadMatch struct {
	AccountId string `json:"account_id"`
	Id string `json:"id"`
	WorkerId string `json:"worker_id"`
	Include *string `json:"include,omitempty"`
}

// VersionListMatch is the typed request payload for Version.ListTyped.
type VersionListMatch struct {
	AccountId string `json:"account_id"`
	WorkerId string `json:"worker_id"`
	Page *int `json:"page,omitempty"`
	PerPage *int `json:"per_page,omitempty"`
}

// VersionCreateData is the typed request payload for Version.CreateTyped.
type VersionCreateData struct {
	AccountId string `json:"account_id"`
	WorkerId string `json:"worker_id"`
	Deploy *bool `json:"deploy,omitempty"`
	Annotations *map[string]any `json:"annotations,omitempty"`
	Assets *map[string]any `json:"assets,omitempty"`
	AuthorEmail *string `json:"author_email,omitempty"`
	AuthorId *string `json:"author_id,omitempty"`
	Bindings *[]any `json:"bindings,omitempty"`
	CacheOptions map[string]any `json:"cache_options"`
	CompatibilityDate *string `json:"compatibility_date,omitempty"`
	CompatibilityFlags *[]any `json:"compatibility_flags,omitempty"`
	Containers *[]any `json:"containers,omitempty"`
	CreatedOn string `json:"created_on"`
	Errors []any `json:"errors"`
	Exports *any `json:"exports,omitempty"`
	ExportsReconciliation *any `json:"exports_reconciliation,omitempty"`
	Id string `json:"id"`
	Limits *map[string]any `json:"limits,omitempty"`
	MainModule *string `json:"main_module,omitempty"`
	Messages []any `json:"messages"`
	MigrationTag *string `json:"migration_tag,omitempty"`
	Migrations *any `json:"migrations,omitempty"`
	Modules *[]any `json:"modules,omitempty"`
	Number int `json:"number"`
	PackageDependencies *[]any `json:"package_dependencies,omitempty"`
	Placement *map[string]any `json:"placement,omitempty"`
	Result map[string]any `json:"result"`
	Source *string `json:"source,omitempty"`
	StartupTimeMs *int `json:"startup_time_ms,omitempty"`
	Success bool `json:"success"`
	Urls []any `json:"urls"`
	UsageModel *string `json:"usage_model,omitempty"`
}

// VersionUpdateData is the typed request payload for Version.UpdateTyped.
type VersionUpdateData struct {
	AccountId string `json:"account_id"`
	WorkerId string `json:"worker_id"`
	Deploy *bool `json:"deploy,omitempty"`
	Annotations *map[string]any `json:"annotations,omitempty"`
	Assets *map[string]any `json:"assets,omitempty"`
	AuthorEmail *string `json:"author_email,omitempty"`
	AuthorId *string `json:"author_id,omitempty"`
	Bindings *[]any `json:"bindings,omitempty"`
	CacheOptions *map[string]any `json:"cache_options,omitempty"`
	CompatibilityDate *string `json:"compatibility_date,omitempty"`
	CompatibilityFlags *[]any `json:"compatibility_flags,omitempty"`
	Containers *[]any `json:"containers,omitempty"`
	CreatedOn *string `json:"created_on,omitempty"`
	Errors *[]any `json:"errors,omitempty"`
	Exports *any `json:"exports,omitempty"`
	ExportsReconciliation *any `json:"exports_reconciliation,omitempty"`
	Id *string `json:"id,omitempty"`
	Limits *map[string]any `json:"limits,omitempty"`
	MainModule *string `json:"main_module,omitempty"`
	Messages *[]any `json:"messages,omitempty"`
	MigrationTag *string `json:"migration_tag,omitempty"`
	Migrations *any `json:"migrations,omitempty"`
	Modules *[]any `json:"modules,omitempty"`
	Number *int `json:"number,omitempty"`
	PackageDependencies *[]any `json:"package_dependencies,omitempty"`
	Placement *map[string]any `json:"placement,omitempty"`
	Result *map[string]any `json:"result,omitempty"`
	Source *string `json:"source,omitempty"`
	StartupTimeMs *int `json:"startup_time_ms,omitempty"`
	Success *bool `json:"success,omitempty"`
	Urls *[]any `json:"urls,omitempty"`
	UsageModel *string `json:"usage_model,omitempty"`
}

// VersionRemoveMatch is the typed request payload for Version.RemoveTyped.
type VersionRemoveMatch struct {
	AccountId string `json:"account_id"`
	Id string `json:"id"`
	WorkerId string `json:"worker_id"`
}

// Worker is the typed data model for the worker entity.
type Worker struct {
}

// WorkerLoadMatch is the typed request payload for Worker.LoadTyped.
type WorkerLoadMatch struct {
	AccountId string `json:"account_id"`
	PreviewId *string `json:"preview_id,omitempty"`
	WorkerId *string `json:"worker_id,omitempty"`
	Id *string `json:"id,omitempty"`
}

// WorkerListMatch is the typed request payload for Worker.ListTyped.
type WorkerListMatch struct {
	AccountId string `json:"account_id"`
	Order *string `json:"order,omitempty"`
	OrderBy *string `json:"order_by,omitempty"`
	Page *int `json:"page,omitempty"`
	PerPage *int `json:"per_page,omitempty"`
	PreviewId *string `json:"preview_id,omitempty"`
	WorkerId *string `json:"worker_id,omitempty"`
}

// WorkerCreateData is the typed request payload for Worker.CreateTyped.
type WorkerCreateData struct {
	AccountId string `json:"account_id"`
	PreviewId *string `json:"preview_id,omitempty"`
	WorkerId *string `json:"worker_id,omitempty"`
	AutoBuild *bool `json:"auto_build,omitempty"`
	AutoDelete *bool `json:"auto_delete,omitempty"`
	Branch *any `json:"branch,omitempty"`
	CommitHash *any `json:"commit_hash,omitempty"`
	Errors []any `json:"errors"`
	GitRepository any `json:"git_repository"`
	Id *string `json:"id,omitempty"`
	Messages []any `json:"messages"`
	PreviewsBaseConfig map[string]any `json:"previews_base_config"`
	PreviewsEnabled bool `json:"previews_enabled"`
	ProductionSettings map[string]any `json:"production_settings"`
	Result map[string]any `json:"result"`
	ResultInfo *map[string]any `json:"result_info,omitempty"`
	ScriptTag string `json:"script_tag"`
	SeedRepo *any `json:"seed_repo,omitempty"`
	Settings *map[string]any `json:"settings,omitempty"`
	Success bool `json:"success"`
}

// WorkerUpdateData is the typed request payload for Worker.UpdateTyped.
type WorkerUpdateData struct {
	AccountId string `json:"account_id"`
	Id string `json:"id"`
	AutoBuild *bool `json:"auto_build,omitempty"`
	AutoDelete *bool `json:"auto_delete,omitempty"`
	Branch *any `json:"branch,omitempty"`
	CommitHash *any `json:"commit_hash,omitempty"`
	Errors *[]any `json:"errors,omitempty"`
	GitRepository *any `json:"git_repository,omitempty"`
	Messages *[]any `json:"messages,omitempty"`
	PreviewsBaseConfig *map[string]any `json:"previews_base_config,omitempty"`
	PreviewsEnabled *bool `json:"previews_enabled,omitempty"`
	ProductionSettings *map[string]any `json:"production_settings,omitempty"`
	Result *map[string]any `json:"result,omitempty"`
	ResultInfo *map[string]any `json:"result_info,omitempty"`
	ScriptTag *string `json:"script_tag,omitempty"`
	SeedRepo *any `json:"seed_repo,omitempty"`
	Settings *map[string]any `json:"settings,omitempty"`
	Success *bool `json:"success,omitempty"`
}

// WorkerRemoveMatch is the typed request payload for Worker.RemoveTyped.
type WorkerRemoveMatch struct {
	AccountId string `json:"account_id"`
	Id string `json:"id"`
	Force *bool `json:"force,omitempty"`
}

// WorkerCronTrigger is the typed data model for the worker_cron_trigger entity.
type WorkerCronTrigger struct {
}

// WorkerCronTriggerListMatch is the typed request payload for WorkerCronTrigger.ListTyped.
type WorkerCronTriggerListMatch struct {
	AccountId string `json:"account_id"`
	ScriptName string `json:"script_name"`
}

// WorkerCronTriggerUpdateData is the typed request payload for WorkerCronTrigger.UpdateTyped.
type WorkerCronTriggerUpdateData struct {
	AccountId string `json:"account_id"`
	ScriptName string `json:"script_name"`
	Errors *[]any `json:"errors,omitempty"`
	Messages *[]any `json:"messages,omitempty"`
	Result *map[string]any `json:"result,omitempty"`
	Success *bool `json:"success,omitempty"`
}

// WorkerDeployment is the typed data model for the worker_deployment entity.
type WorkerDeployment struct {
}

// WorkerDeploymentLoadMatch is the typed request payload for WorkerDeployment.LoadTyped.
type WorkerDeploymentLoadMatch struct {
	AccountId string `json:"account_id"`
	ScriptName *string `json:"script_name,omitempty"`
	Page *int `json:"page,omitempty"`
	PerPage *int `json:"per_page,omitempty"`
	Since *string `json:"since,omitempty"`
	Until *string `json:"until,omitempty"`
	Id *string `json:"id,omitempty"`
	ScriptId *string `json:"script_id,omitempty"`
}

// WorkerDeploymentCreateData is the typed request payload for WorkerDeployment.CreateTyped.
type WorkerDeploymentCreateData struct {
	AccountId string `json:"account_id"`
	ScriptName string `json:"script_name"`
	Force *bool `json:"force,omitempty"`
	Annotations *map[string]any `json:"annotations,omitempty"`
	AuthorEmail *string `json:"author_email,omitempty"`
	CreatedOn string `json:"created_on"`
	Errors []any `json:"errors"`
	Id string `json:"id"`
	Messages []any `json:"messages"`
	Result map[string]any `json:"result"`
	Source string `json:"source"`
	Strategy string `json:"strategy"`
	Success bool `json:"success"`
	Versions []any `json:"versions"`
}

// WorkerEnvironment is the typed data model for the worker_environment entity.
type WorkerEnvironment struct {
}

// WorkerEnvironmentLoadMatch is the typed request payload for WorkerEnvironment.LoadTyped.
type WorkerEnvironmentLoadMatch struct {
	AccountId string `json:"account_id"`
	EnvironmentName string `json:"environment_name"`
	ServiceId string `json:"service_id"`
}

// WorkerRoute is the typed data model for the worker_route entity.
type WorkerRoute struct {
}

// WorkerRouteLoadMatch is the typed request payload for WorkerRoute.LoadTyped.
type WorkerRouteLoadMatch struct {
	Id string `json:"id"`
	ZoneId string `json:"zone_id"`
}

// WorkerRouteListMatch is the typed request payload for WorkerRoute.ListTyped.
type WorkerRouteListMatch struct {
	ZoneId string `json:"zone_id"`
}

// WorkerRouteCreateData is the typed request payload for WorkerRoute.CreateTyped.
type WorkerRouteCreateData struct {
	ZoneId string `json:"zone_id"`
	Errors []any `json:"errors"`
	Id string `json:"id"`
	Messages []any `json:"messages"`
	Pattern string `json:"pattern"`
	Result map[string]any `json:"result"`
	Script *string `json:"script,omitempty"`
	Success bool `json:"success"`
}

// WorkerRouteUpdateData is the typed request payload for WorkerRoute.UpdateTyped.
type WorkerRouteUpdateData struct {
	Id string `json:"id"`
	ZoneId string `json:"zone_id"`
	Errors *[]any `json:"errors,omitempty"`
	Messages *[]any `json:"messages,omitempty"`
	Pattern *string `json:"pattern,omitempty"`
	Result *map[string]any `json:"result,omitempty"`
	Script *string `json:"script,omitempty"`
	Success *bool `json:"success,omitempty"`
}

// WorkerRouteRemoveMatch is the typed request payload for WorkerRoute.RemoveTyped.
type WorkerRouteRemoveMatch struct {
	Id string `json:"id"`
	ZoneId string `json:"zone_id"`
}

// WorkerScript is the typed data model for the worker_script entity.
type WorkerScript struct {
}

// WorkerScriptLoadMatch is the typed request payload for WorkerScript.LoadTyped.
type WorkerScriptLoadMatch struct {
	AccountId string `json:"account_id"`
	ScriptId *string `json:"script_id,omitempty"`
	SecretName *string `json:"secret_name,omitempty"`
	UrlEncoded *bool `json:"url_encoded,omitempty"`
	Id *string `json:"id,omitempty"`
}

// WorkerScriptListMatch is the typed request payload for WorkerScript.ListTyped.
type WorkerScriptListMatch struct {
	AccountId string `json:"account_id"`
	Id *string `json:"id,omitempty"`
	Name *string `json:"name,omitempty"`
	OrderBy *string `json:"order_by,omitempty"`
	Page *int `json:"page,omitempty"`
	PerPage *int `json:"per_page,omitempty"`
	ScriptName *string `json:"script_name,omitempty"`
}

// WorkerScriptCreateData is the typed request payload for WorkerScript.CreateTyped.
type WorkerScriptCreateData struct {
	AccountId string `json:"account_id"`
	ScriptName string `json:"script_name"`
	Errors []any `json:"errors"`
	Id *string `json:"id,omitempty"`
	Messages []any `json:"messages"`
	Result *map[string]any `json:"result,omitempty"`
	Success bool `json:"success"`
}

// WorkerScriptUpdateData is the typed request payload for WorkerScript.UpdateTyped.
type WorkerScriptUpdateData struct {
	AccountId string `json:"account_id"`
	Id *string `json:"id,omitempty"`
	BindingsInherit *string `json:"bindings_inherit,omitempty"`
	ScriptName *string `json:"script_name,omitempty"`
	Errors *[]any `json:"errors,omitempty"`
	Messages *[]any `json:"messages,omitempty"`
	Result *map[string]any `json:"result,omitempty"`
	Success *bool `json:"success,omitempty"`
}

// WorkerScriptRemoveMatch is the typed request payload for WorkerScript.RemoveTyped.
type WorkerScriptRemoveMatch struct {
	AccountId string `json:"account_id"`
	ScriptName string `json:"script_name"`
}

// WorkerSubdomain is the typed data model for the worker_subdomain entity.
type WorkerSubdomain struct {
}

// WorkerSubdomainListMatch is the typed request payload for WorkerSubdomain.ListTyped.
type WorkerSubdomainListMatch struct {
	AccountId string `json:"account_id"`
}

// WorkerSubdomainUpdateData is the typed request payload for WorkerSubdomain.UpdateTyped.
type WorkerSubdomainUpdateData struct {
	AccountId string `json:"account_id"`
	Errors *[]any `json:"errors,omitempty"`
	Messages *[]any `json:"messages,omitempty"`
	Result *map[string]any `json:"result,omitempty"`
	Subdomain *string `json:"subdomain,omitempty"`
	Success *bool `json:"success,omitempty"`
}

// WorkerSubdomainRemoveMatch is the typed request payload for WorkerSubdomain.RemoveTyped.
type WorkerSubdomainRemoveMatch struct {
	AccountId string `json:"account_id"`
}

// WorkerTailLog is the typed data model for the worker_tail_log entity.
type WorkerTailLog struct {
}

// WorkerTailLogListMatch is the typed request payload for WorkerTailLog.ListTyped.
type WorkerTailLogListMatch struct {
	AccountId string `json:"account_id"`
	ScriptName string `json:"script_name"`
}

// WorkerTailLogCreateData is the typed request payload for WorkerTailLog.CreateTyped.
type WorkerTailLogCreateData struct {
	AccountId string `json:"account_id"`
	ScriptName string `json:"script_name"`
	Errors []any `json:"errors"`
	Messages []any `json:"messages"`
	Result map[string]any `json:"result"`
	Success bool `json:"success"`
}

// WorkersAccountSetting is the typed data model for the workers_account_setting entity.
type WorkersAccountSetting struct {
}

// WorkersAccountSettingListMatch is the typed request payload for WorkersAccountSetting.ListTyped.
type WorkersAccountSettingListMatch struct {
	AccountId string `json:"account_id"`
}

// WorkersAccountSettingUpdateData is the typed request payload for WorkersAccountSetting.UpdateTyped.
type WorkersAccountSettingUpdateData struct {
	AccountId string `json:"account_id"`
	DefaultUsageModel *string `json:"default_usage_model,omitempty"`
	Errors *[]any `json:"errors,omitempty"`
	GreenCompute *bool `json:"green_compute,omitempty"`
	Messages *[]any `json:"messages,omitempty"`
	Result *map[string]any `json:"result,omitempty"`
	Success *bool `json:"success,omitempty"`
}

// WorkersApiResponseNullResult is the typed data model for the workers_api_response_null_result entity.
type WorkersApiResponseNullResult struct {
}

// WorkersApiResponseNullResultUpdateData is the typed request payload for WorkersApiResponseNullResult.UpdateTyped.
type WorkersApiResponseNullResultUpdateData struct {
	AccountId string `json:"account_id"`
	NamespaceId string `json:"namespace_id"`
	ScriptId string `json:"script_id"`
	Tag string `json:"tag"`
	Errors *[]any `json:"errors,omitempty"`
	Messages *[]any `json:"messages,omitempty"`
	Result *map[string]any `json:"result,omitempty"`
	Success *bool `json:"success,omitempty"`
}

// WorkersApiResponseNullResultRemoveMatch is the typed request payload for WorkersApiResponseNullResult.RemoveTyped.
type WorkersApiResponseNullResultRemoveMatch struct {
	AccountId string `json:"account_id"`
	NamespaceId *string `json:"namespace_id,omitempty"`
	ScriptId *string `json:"script_id,omitempty"`
	SecretName *string `json:"secret_name,omitempty"`
	UrlEncoded *bool `json:"url_encoded,omitempty"`
	ScriptName *string `json:"script_name,omitempty"`
	Force *bool `json:"force,omitempty"`
	Tag *string `json:"tag,omitempty"`
}

// WorkersCompletedUploadAsset is the typed data model for the workers_completed_upload_asset entity.
type WorkersCompletedUploadAsset struct {
}

// WorkersCompletedUploadAssetCreateData is the typed request payload for WorkersCompletedUploadAsset.CreateTyped.
type WorkersCompletedUploadAssetCreateData struct {
	AccountId string `json:"account_id"`
	Base64 bool `json:"base64"`
}

// WorkersCreateAssetsUploadSession is the typed data model for the workers_create_assets_upload_session entity.
type WorkersCreateAssetsUploadSession struct {
}

// WorkersCreateAssetsUploadSessionCreateData is the typed request payload for WorkersCreateAssetsUploadSession.CreateTyped.
type WorkersCreateAssetsUploadSessionCreateData struct {
	AccountId string `json:"account_id"`
	NamespaceId *string `json:"namespace_id,omitempty"`
	ScriptName string `json:"script_name"`
	Manifest map[string]any `json:"manifest"`
}

// WorkersForPlatform is the typed data model for the workers_for_platform entity.
type WorkersForPlatform struct {
}

// WorkersForPlatformLoadMatch is the typed request payload for WorkersForPlatform.LoadTyped.
type WorkersForPlatformLoadMatch struct {
	AccountId string `json:"account_id"`
	NamespaceId string `json:"namespace_id"`
	ScriptId *string `json:"script_id,omitempty"`
	SecretName *string `json:"secret_name,omitempty"`
	UrlEncoded *bool `json:"url_encoded,omitempty"`
	ScriptName *string `json:"script_name,omitempty"`
}

// WorkersForPlatformListMatch is the typed request payload for WorkersForPlatform.ListTyped.
type WorkersForPlatformListMatch struct {
	AccountId string `json:"account_id"`
	DispatchNamespace *string `json:"dispatch_namespace,omitempty"`
	Tag *string `json:"tag,omitempty"`
	NamespaceId *string `json:"namespace_id,omitempty"`
	ScriptName *string `json:"script_name,omitempty"`
}

// WorkersForPlatformUpdateData is the typed request payload for WorkersForPlatform.UpdateTyped.
type WorkersForPlatformUpdateData struct {
	AccountId string `json:"account_id"`
	NamespaceId string `json:"namespace_id"`
	ScriptName string `json:"script_name"`
	BindingsInherit *string `json:"bindings_inherit,omitempty"`
	Errors *[]any `json:"errors,omitempty"`
	Messages *[]any `json:"messages,omitempty"`
	Result *map[string]any `json:"result,omitempty"`
	Success *bool `json:"success,omitempty"`
}

// WorkersKvApiResponseCommonNoResult is the typed data model for the workers_kv_api_response_common_no_result entity.
type WorkersKvApiResponseCommonNoResult struct {
}

// WorkersKvApiResponseCommonNoResultUpdateData is the typed request payload for WorkersKvApiResponseCommonNoResult.UpdateTyped.
type WorkersKvApiResponseCommonNoResultUpdateData struct {
	AccountId string `json:"account_id"`
	KeyName string `json:"key_name"`
	NamespaceId string `json:"namespace_id"`
	Expiration *float64 `json:"expiration,omitempty"`
	ExpirationTtl *float64 `json:"expiration_ttl,omitempty"`
}

// WorkersKvApiResponseCommonNoResultRemoveMatch is the typed request payload for WorkersKvApiResponseCommonNoResult.RemoveTyped.
type WorkersKvApiResponseCommonNoResultRemoveMatch struct {
	AccountId string `json:"account_id"`
	KeyName *string `json:"key_name,omitempty"`
	NamespaceId string `json:"namespace_id"`
}

// WorkersKvNamespace is the typed data model for the workers_kv_namespace entity.
type WorkersKvNamespace struct {
}

// WorkersKvNamespaceLoadMatch is the typed request payload for WorkersKvNamespace.LoadTyped.
type WorkersKvNamespaceLoadMatch struct {
	AccountId string `json:"account_id"`
	KeyName *string `json:"key_name,omitempty"`
	NamespaceId *string `json:"namespace_id,omitempty"`
	Id *string `json:"id,omitempty"`
}

// WorkersKvNamespaceListMatch is the typed request payload for WorkersKvNamespace.ListTyped.
type WorkersKvNamespaceListMatch struct {
	AccountId string `json:"account_id"`
	NamespaceId *string `json:"namespace_id,omitempty"`
	Cursor *string `json:"cursor,omitempty"`
	Limit *float64 `json:"limit,omitempty"`
	Prefix *string `json:"prefix,omitempty"`
	Direction *string `json:"direction,omitempty"`
	Order *string `json:"order,omitempty"`
	Page *float64 `json:"page,omitempty"`
	PerPage *float64 `json:"per_page,omitempty"`
}

// WorkersKvNamespaceCreateData is the typed request payload for WorkersKvNamespace.CreateTyped.
type WorkersKvNamespaceCreateData struct {
	AccountId string `json:"account_id"`
	NamespaceId *string `json:"namespace_id,omitempty"`
	Errors []any `json:"errors"`
	Id *string `json:"id,omitempty"`
	Jurisdiction *string `json:"jurisdiction,omitempty"`
	Keys []any `json:"keys"`
	Messages []any `json:"messages"`
	Result *any `json:"result,omitempty"`
	ResultInfo *map[string]any `json:"result_info,omitempty"`
	Success bool `json:"success"`
	Title string `json:"title"`
	Type *string `json:"type,omitempty"`
	WithMetadata *bool `json:"withMetadata,omitempty"`
}

// WorkersKvNamespaceUpdateData is the typed request payload for WorkersKvNamespace.UpdateTyped.
type WorkersKvNamespaceUpdateData struct {
	AccountId string `json:"account_id"`
	Id *string `json:"id,omitempty"`
	NamespaceId *string `json:"namespace_id,omitempty"`
	Errors *[]any `json:"errors,omitempty"`
	Jurisdiction *string `json:"jurisdiction,omitempty"`
	Keys *[]any `json:"keys,omitempty"`
	Messages *[]any `json:"messages,omitempty"`
	Result *any `json:"result,omitempty"`
	ResultInfo *map[string]any `json:"result_info,omitempty"`
	Success *bool `json:"success,omitempty"`
	Title *string `json:"title,omitempty"`
	Type *string `json:"type,omitempty"`
	WithMetadata *bool `json:"withMetadata,omitempty"`
}

// WorkersKvNamespaceRemoveMatch is the typed request payload for WorkersKvNamespace.RemoveTyped.
type WorkersKvNamespaceRemoveMatch struct {
	AccountId string `json:"account_id"`
	NamespaceId string `json:"namespace_id"`
}

// WorkersNamespaceList is the typed data model for the workers_namespace_list entity.
type WorkersNamespaceList struct {
}

// WorkersNamespaceListListMatch is the typed request payload for WorkersNamespaceList.ListTyped.
type WorkersNamespaceListListMatch struct {
	AccountId string `json:"account_id"`
}

// WorkersNamespaceScriptDeleteBulk is the typed data model for the workers_namespace_script_delete_bulk entity.
type WorkersNamespaceScriptDeleteBulk struct {
}

// WorkersNamespaceScriptDeleteBulkRemoveMatch is the typed request payload for WorkersNamespaceScriptDeleteBulk.RemoveTyped.
type WorkersNamespaceScriptDeleteBulkRemoveMatch struct {
	AccountId string `json:"account_id"`
	DispatchNamespace string `json:"dispatch_namespace"`
	Limit *int `json:"limit,omitempty"`
	Tag string `json:"tag"`
}

// WorkersNamespaceScriptResponseSingle is the typed data model for the workers_namespace_script_response_single entity.
type WorkersNamespaceScriptResponseSingle struct {
}

// WorkersNamespaceScriptResponseSingleLoadMatch is the typed request payload for WorkersNamespaceScriptResponseSingle.LoadTyped.
type WorkersNamespaceScriptResponseSingleLoadMatch struct {
	AccountId string `json:"account_id"`
	NamespaceId string `json:"namespace_id"`
	ScriptName string `json:"script_name"`
}

// WorkersNamespaceScriptResponseSingleUpdateData is the typed request payload for WorkersNamespaceScriptResponseSingle.UpdateTyped.
type WorkersNamespaceScriptResponseSingleUpdateData struct {
	AccountId string `json:"account_id"`
	NamespaceId string `json:"namespace_id"`
	ScriptName string `json:"script_name"`
	Errors *[]any `json:"errors,omitempty"`
	Messages *[]any `json:"messages,omitempty"`
	Result *map[string]any `json:"result,omitempty"`
	Success *bool `json:"success,omitempty"`
}

// WorkersNamespaceSingle is the typed data model for the workers_namespace_single entity.
type WorkersNamespaceSingle struct {
}

// WorkersNamespaceSingleLoadMatch is the typed request payload for WorkersNamespaceSingle.LoadTyped.
type WorkersNamespaceSingleLoadMatch struct {
	AccountId string `json:"account_id"`
	DispatchNamespace string `json:"dispatch_namespace"`
}

// WorkersNamespaceSingleCreateData is the typed request payload for WorkersNamespaceSingle.CreateTyped.
type WorkersNamespaceSingleCreateData struct {
	AccountId string `json:"account_id"`
	Errors []any `json:"errors"`
	Messages []any `json:"messages"`
	Name *string `json:"name,omitempty"`
	Result *map[string]any `json:"result,omitempty"`
	Success bool `json:"success"`
	TrustedWorkers *bool `json:"trusted_workers,omitempty"`
}

// WorkersNamespaceSingleUpdateData is the typed request payload for WorkersNamespaceSingle.UpdateTyped.
type WorkersNamespaceSingleUpdateData struct {
	AccountId string `json:"account_id"`
	DispatchNamespace string `json:"dispatch_namespace"`
	Errors *[]any `json:"errors,omitempty"`
	Messages *[]any `json:"messages,omitempty"`
	Name *string `json:"name,omitempty"`
	Result *map[string]any `json:"result,omitempty"`
	Success *bool `json:"success,omitempty"`
	TrustedWorkers *bool `json:"trusted_workers,omitempty"`
}

// WorkersPipelinesOther is the typed data model for the workers_pipelines_other entity.
type WorkersPipelinesOther struct {
}

// WorkersPipelinesOtherLoadMatch is the typed request payload for WorkersPipelinesOther.LoadTyped.
type WorkersPipelinesOtherLoadMatch struct {
	AccountId string `json:"account_id"`
	PipelineId *string `json:"pipeline_id,omitempty"`
	PipelineName *string `json:"pipeline_name,omitempty"`
	SinkId *string `json:"sink_id,omitempty"`
	StreamId *string `json:"stream_id,omitempty"`
}

// WorkersPipelinesOtherListMatch is the typed request payload for WorkersPipelinesOther.ListTyped.
type WorkersPipelinesOtherListMatch struct {
	AccountId string `json:"account_id"`
	Name *string `json:"name,omitempty"`
	Page *float64 `json:"page,omitempty"`
	PerPage *float64 `json:"per_page,omitempty"`
	PipelineId *string `json:"pipeline_id,omitempty"`
	Search *string `json:"search,omitempty"`
}

// WorkersPipelinesOtherCreateData is the typed request payload for WorkersPipelinesOther.CreateTyped.
type WorkersPipelinesOtherCreateData struct {
	AccountId string `json:"account_id"`
	Config *any `json:"config,omitempty"`
	CreatedAt string `json:"created_at"`
	Destination map[string]any `json:"destination"`
	Endpoint string `json:"endpoint"`
	FailureReason *string `json:"failure_reason,omitempty"`
	Format *any `json:"format,omitempty"`
	Graph map[string]any `json:"graph"`
	Http map[string]any `json:"http"`
	Id string `json:"id"`
	ModifiedAt string `json:"modified_at"`
	Name string `json:"name"`
	Schema *map[string]any `json:"schema,omitempty"`
	Source []any `json:"source"`
	Sql string `json:"sql"`
	Status string `json:"status"`
	Tables []any `json:"tables"`
	Type string `json:"type"`
	Version float64 `json:"version"`
	WorkerBinding map[string]any `json:"worker_binding"`
}

// WorkersPipelinesOtherUpdateData is the typed request payload for WorkersPipelinesOther.UpdateTyped.
type WorkersPipelinesOtherUpdateData struct {
	AccountId string `json:"account_id"`
	PipelineName string `json:"pipeline_name"`
	Config *any `json:"config,omitempty"`
	CreatedAt *string `json:"created_at,omitempty"`
	Destination *map[string]any `json:"destination,omitempty"`
	Endpoint *string `json:"endpoint,omitempty"`
	FailureReason *string `json:"failure_reason,omitempty"`
	Format *any `json:"format,omitempty"`
	Graph *map[string]any `json:"graph,omitempty"`
	Http *map[string]any `json:"http,omitempty"`
	Id *string `json:"id,omitempty"`
	ModifiedAt *string `json:"modified_at,omitempty"`
	Name *string `json:"name,omitempty"`
	Schema *map[string]any `json:"schema,omitempty"`
	Source *[]any `json:"source,omitempty"`
	Sql *string `json:"sql,omitempty"`
	Status *string `json:"status,omitempty"`
	Tables *[]any `json:"tables,omitempty"`
	Type *string `json:"type,omitempty"`
	Version *float64 `json:"version,omitempty"`
	WorkerBinding *map[string]any `json:"worker_binding,omitempty"`
}

// WorkersPipelinesOtherRemoveMatch is the typed request payload for WorkersPipelinesOther.RemoveTyped.
type WorkersPipelinesOtherRemoveMatch struct {
	AccountId string `json:"account_id"`
	PipelineId *string `json:"pipeline_id,omitempty"`
	PipelineName *string `json:"pipeline_name,omitempty"`
	SinkId *string `json:"sink_id,omitempty"`
	StreamId *string `json:"stream_id,omitempty"`
}

// WorkersScriptAndVersionSetting is the typed data model for the workers_script_and_version_setting entity.
type WorkersScriptAndVersionSetting struct {
}

// WorkersScriptAndVersionSettingListMatch is the typed request payload for WorkersScriptAndVersionSetting.ListTyped.
type WorkersScriptAndVersionSettingListMatch struct {
	AccountId string `json:"account_id"`
	ScriptName string `json:"script_name"`
}

// WorkersScriptAndVersionSettingUpdateData is the typed request payload for WorkersScriptAndVersionSetting.UpdateTyped.
type WorkersScriptAndVersionSettingUpdateData struct {
	AccountId string `json:"account_id"`
	ScriptName string `json:"script_name"`
	Errors *[]any `json:"errors,omitempty"`
	Messages *[]any `json:"messages,omitempty"`
	Result *map[string]any `json:"result,omitempty"`
	Success *bool `json:"success,omitempty"`
}

// WorkersScriptResponseCollection is the typed data model for the workers_script_response_collection entity.
type WorkersScriptResponseCollection struct {
}

// WorkersScriptResponseCollectionListMatch is the typed request payload for WorkersScriptResponseCollection.ListTyped.
type WorkersScriptResponseCollectionListMatch struct {
	AccountId string `json:"account_id"`
	Tag *string `json:"tag,omitempty"`
}

// WorkersScriptResponseSingle is the typed data model for the workers_script_response_single entity.
type WorkersScriptResponseSingle struct {
}

// WorkersScriptResponseSingleUpdateData is the typed request payload for WorkersScriptResponseSingle.UpdateTyped.
type WorkersScriptResponseSingleUpdateData struct {
	AccountId string `json:"account_id"`
	EnvironmentName *string `json:"environment_name,omitempty"`
	ServiceId *string `json:"service_id,omitempty"`
	NamespaceId *string `json:"namespace_id,omitempty"`
	ScriptName *string `json:"script_name,omitempty"`
}

// WorkersSmartPlacement is the typed data model for the workers_smart_placement entity.
type WorkersSmartPlacement struct {
}

// WorkersSmartPlacementListMatch is the typed request payload for WorkersSmartPlacement.ListTyped.
type WorkersSmartPlacementListMatch struct {
	AccountId string `json:"account_id"`
}

// WorkersUsageModel is the typed data model for the workers_usage_model entity.
type WorkersUsageModel struct {
}

// WorkersUsageModelListMatch is the typed request payload for WorkersUsageModel.ListTyped.
type WorkersUsageModelListMatch struct {
	AccountId string `json:"account_id"`
	ScriptName string `json:"script_name"`
}

// WorkersUsageModelUpdateData is the typed request payload for WorkersUsageModel.UpdateTyped.
type WorkersUsageModelUpdateData struct {
	AccountId string `json:"account_id"`
	ScriptName string `json:"script_name"`
	Errors *[]any `json:"errors,omitempty"`
	Messages *[]any `json:"messages,omitempty"`
	Result *map[string]any `json:"result,omitempty"`
	Success *bool `json:"success,omitempty"`
	UsageModel *string `json:"usage_model,omitempty"`
	UserLimits *map[string]any `json:"user_limits,omitempty"`
}

// WorkersVersionsList is the typed data model for the workers_versions_list entity.
type WorkersVersionsList struct {
}

// WorkersVersionsListListMatch is the typed request payload for WorkersVersionsList.ListTyped.
type WorkersVersionsListListMatch struct {
	AccountId string `json:"account_id"`
	ScriptName string `json:"script_name"`
	Deployable *bool `json:"deployable,omitempty"`
	Page *int `json:"page,omitempty"`
	PerPage *int `json:"per_page,omitempty"`
}

// WorkersVersionsSingle is the typed data model for the workers_versions_single entity.
type WorkersVersionsSingle struct {
}

// WorkersVersionsSingleLoadMatch is the typed request payload for WorkersVersionsSingle.LoadTyped.
type WorkersVersionsSingleLoadMatch struct {
	AccountId string `json:"account_id"`
	ScriptId string `json:"script_id"`
	VersionId string `json:"version_id"`
}

// WorkersVersionsUpload is the typed data model for the workers_versions_upload entity.
type WorkersVersionsUpload struct {
}

// WorkersVersionsUploadCreateData is the typed request payload for WorkersVersionsUpload.CreateTyped.
type WorkersVersionsUploadCreateData struct {
	AccountId string `json:"account_id"`
	ScriptName string `json:"script_name"`
	BindingsInherit *string `json:"bindings_inherit,omitempty"`
}

// Workflow is the typed data model for the workflow entity.
type Workflow struct {
}

// WorkflowLoadMatch is the typed request payload for Workflow.LoadTyped.
type WorkflowLoadMatch struct {
	AccountId string `json:"account_id"`
	InstanceId *string `json:"instance_id,omitempty"`
	WorkflowId *string `json:"workflow_id,omitempty"`
	Cursor *int `json:"cursor,omitempty"`
	Filter *[]any `json:"filter,omitempty"`
	Order *string `json:"order,omitempty"`
	Simple *string `json:"simple,omitempty"`
	VersionId *string `json:"version_id,omitempty"`
	Id *string `json:"id,omitempty"`
	ScriptName *string `json:"script_name,omitempty"`
}

// WorkflowListMatch is the typed request payload for Workflow.ListTyped.
type WorkflowListMatch struct {
	AccountId string `json:"account_id"`
	InstanceId *string `json:"instance_id,omitempty"`
	WorkflowId *string `json:"workflow_id,omitempty"`
	Attempt *int `json:"attempt,omitempty"`
	Name *string `json:"name,omitempty"`
	Type *string `json:"type,omitempty"`
	Page *float64 `json:"page,omitempty"`
	PerPage *float64 `json:"per_page,omitempty"`
	Search *string `json:"search,omitempty"`
	VersionId *string `json:"version_id,omitempty"`
}

// WorkflowCreateData is the typed request payload for Workflow.CreateTyped.
type WorkflowCreateData struct {
	AccountId string `json:"account_id"`
	EventType *string `json:"event_type,omitempty"`
	InstanceId *string `json:"instance_id,omitempty"`
	WorkflowId string `json:"workflow_id"`
	ClassName string `json:"class_name"`
	Concurrency *map[string]any `json:"concurrency,omitempty"`
	DefaultRetention *map[string]any `json:"default_retention,omitempty"`
	Errors []any `json:"errors"`
	Id *string `json:"id,omitempty"`
	Instances []any `json:"instances"`
	Limits *map[string]any `json:"limits,omitempty"`
	Messages []any `json:"messages"`
	Result map[string]any `json:"result"`
	ResultInfo map[string]any `json:"result_info"`
	Schedules *[]any `json:"schedules,omitempty"`
	ScriptName string `json:"script_name"`
	Success bool `json:"success"`
}

// WorkflowUpdateData is the typed request payload for Workflow.UpdateTyped.
type WorkflowUpdateData struct {
	AccountId string `json:"account_id"`
	Id *string `json:"id,omitempty"`
	ScriptName *string `json:"script_name,omitempty"`
	ClassName *string `json:"class_name,omitempty"`
	Concurrency *map[string]any `json:"concurrency,omitempty"`
	DefaultRetention *map[string]any `json:"default_retention,omitempty"`
	Errors *[]any `json:"errors,omitempty"`
	Instances *[]any `json:"instances,omitempty"`
	Limits *map[string]any `json:"limits,omitempty"`
	Messages *[]any `json:"messages,omitempty"`
	Result *map[string]any `json:"result,omitempty"`
	ResultInfo *map[string]any `json:"result_info,omitempty"`
	Schedules *[]any `json:"schedules,omitempty"`
	Success *bool `json:"success,omitempty"`
}

// WorkflowRemoveMatch is the typed request payload for Workflow.RemoveTyped.
type WorkflowRemoveMatch struct {
	AccountId string `json:"account_id"`
	InstanceId *string `json:"instance_id,omitempty"`
	WorkflowId *string `json:"workflow_id,omitempty"`
	Id *string `json:"id,omitempty"`
	ScriptName *string `json:"script_name,omitempty"`
}

// asMap turns a typed request/data struct into the map[string]any the
// runtime op pipeline consumes, honouring the json tags above.
func asMap(v any) map[string]any {
	out := map[string]any{}
	b, err := json.Marshal(v)
	if err != nil {
		return out
	}
	_ = json.Unmarshal(b, &out)
	return out
}

// entityData unwraps an entity to its data map.
//
// Operations resolve to the ENTITY, not the raw data (see AGENTS.md), and an
// entity's fields are UNEXPORTED — marshalling one directly yields `{}`, so
// every typed accessor would silently hand back a zero-valued struct. The
// typed boundary therefore takes the data hop first.
func entityData(v any) any {
	if ent, ok := v.(core.Entity); ok {
		return ent.Data()
	}
	return v
}

// typedFrom decodes a runtime value (an entity, or the map[string]any the op
// pipeline produced) into a typed model T via a JSON round-trip. On any error
// it returns the zero value of T; the op's own (value, error) tuple carries
// the real error.
func typedFrom[T any](v any) T {
	var out T
	v = entityData(v)
	if v == nil {
		return out
	}
	b, err := json.Marshal(v)
	if err != nil {
		return out
	}
	_ = json.Unmarshal(b, &out)
	return out
}

// typedSliceFrom decodes a runtime list value into a typed slice []T via a
// JSON round-trip, for list ops. `list` resolves to a slice of ENTITY
// instances, so each element takes the data hop.
func typedSliceFrom[T any](v any) []T {
	var out []T
	if v == nil {
		return out
	}
	if list, ok := v.([]any); ok {
		unwrapped := make([]any, 0, len(list))
		for _, item := range list {
			unwrapped = append(unwrapped, entityData(item))
		}
		v = unwrapped
	}
	b, err := json.Marshal(v)
	if err != nil {
		return out
	}
	_ = json.Unmarshal(b, &out)
	return out
}
