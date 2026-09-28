package core

var UtilityRegistrar func(u *Utility)

var NewBaseFeatureFunc func() Feature

var NewTestFeatureFunc func() Feature

var NewAccountEntityFunc func(client *CloudflareWorkersSDK, entopts map[string]any) CloudflareWorkersEntity

var NewApplicationEntityFunc func(client *CloudflareWorkersSDK, entopts map[string]any) CloudflareWorkersEntity

var NewBrapiEntityFunc func(client *CloudflareWorkersSDK, entopts map[string]any) CloudflareWorkersEntity

var NewBuildEntityFunc func(client *CloudflareWorkersSDK, entopts map[string]any) CloudflareWorkersEntity

var NewBuildTokenEntityFunc func(client *CloudflareWorkersSDK, entopts map[string]any) CloudflareWorkersEntity

var NewBuildsApiEntityFunc func(client *CloudflareWorkersSDK, entopts map[string]any) CloudflareWorkersEntity

var NewConnectionEntityFunc func(client *CloudflareWorkersSDK, entopts map[string]any) CloudflareWorkersEntity

var NewContainerImageEntityFunc func(client *CloudflareWorkersSDK, entopts map[string]any) CloudflareWorkersEntity

var NewContainerInstanceEntityFunc func(client *CloudflareWorkersSDK, entopts map[string]any) CloudflareWorkersEntity

var NewDeployHookEntityFunc func(client *CloudflareWorkersSDK, entopts map[string]any) CloudflareWorkersEntity

var NewDeploymentEntityFunc func(client *CloudflareWorkersSDK, entopts map[string]any) CloudflareWorkersEntity

var NewDestinationEntityFunc func(client *CloudflareWorkersSDK, entopts map[string]any) CloudflareWorkersEntity

var NewDomainEntityFunc func(client *CloudflareWorkersSDK, entopts map[string]any) CloudflareWorkersEntity

var NewDurableObjectsNamespaceEntityFunc func(client *CloudflareWorkersSDK, entopts map[string]any) CloudflareWorkersEntity

var NewEnvironmentVariableEntityFunc func(client *CloudflareWorkersSDK, entopts map[string]any) CloudflareWorkersEntity

var NewGitHubIntegrationEntityFunc func(client *CloudflareWorkersSDK, entopts map[string]any) CloudflareWorkersEntity

var NewHyperdriveEntityFunc func(client *CloudflareWorkersSDK, entopts map[string]any) CloudflareWorkersEntity

var NewImageRegistryEntityFunc func(client *CloudflareWorkersSDK, entopts map[string]any) CloudflareWorkersEntity

var NewIssueEntityFunc func(client *CloudflareWorkersSDK, entopts map[string]any) CloudflareWorkersEntity

var NewKeyEntityFunc func(client *CloudflareWorkersSDK, entopts map[string]any) CloudflareWorkersEntity

var NewLiveTailEntityFunc func(client *CloudflareWorkersSDK, entopts map[string]any) CloudflareWorkersEntity

var NewMetricsExportEntityFunc func(client *CloudflareWorkersSDK, entopts map[string]any) CloudflareWorkersEntity

var NewNamespaceEntityFunc func(client *CloudflareWorkersSDK, entopts map[string]any) CloudflareWorkersEntity

var NewPreviewEntityFunc func(client *CloudflareWorkersSDK, entopts map[string]any) CloudflareWorkersEntity

var NewPreviewDeploymentEntityFunc func(client *CloudflareWorkersSDK, entopts map[string]any) CloudflareWorkersEntity

var NewQueryEntityFunc func(client *CloudflareWorkersSDK, entopts map[string]any) CloudflareWorkersEntity

var NewRepositoryConnectionEntityFunc func(client *CloudflareWorkersSDK, entopts map[string]any) CloudflareWorkersEntity

var NewRolloutEntityFunc func(client *CloudflareWorkersSDK, entopts map[string]any) CloudflareWorkersEntity

var NewSavedQueryEntityFunc func(client *CloudflareWorkersSDK, entopts map[string]any) CloudflareWorkersEntity

var NewScriptEntityFunc func(client *CloudflareWorkersSDK, entopts map[string]any) CloudflareWorkersEntity

var NewScriptSettingEntityFunc func(client *CloudflareWorkersSDK, entopts map[string]any) CloudflareWorkersEntity

var NewSecretEntityFunc func(client *CloudflareWorkersSDK, entopts map[string]any) CloudflareWorkersEntity

var NewSecretsStoreDeleteEntityFunc func(client *CloudflareWorkersSDK, entopts map[string]any) CloudflareWorkersEntity

var NewSecretsStoreQuotaEntityFunc func(client *CloudflareWorkersSDK, entopts map[string]any) CloudflareWorkersEntity

var NewSecretsStoreSecretEntityFunc func(client *CloudflareWorkersSDK, entopts map[string]any) CloudflareWorkersEntity

var NewSecretsStoreStoreEntityFunc func(client *CloudflareWorkersSDK, entopts map[string]any) CloudflareWorkersEntity

var NewSecretsStoreStoresResponseCollectionEntityFunc func(client *CloudflareWorkersSDK, entopts map[string]any) CloudflareWorkersEntity

var NewSettingEntityFunc func(client *CloudflareWorkersSDK, entopts map[string]any) CloudflareWorkersEntity

var NewSharedEntityFunc func(client *CloudflareWorkersSDK, entopts map[string]any) CloudflareWorkersEntity

var NewTailEntityFunc func(client *CloudflareWorkersSDK, entopts map[string]any) CloudflareWorkersEntity

var NewTokenEntityFunc func(client *CloudflareWorkersSDK, entopts map[string]any) CloudflareWorkersEntity

var NewTriggerEntityFunc func(client *CloudflareWorkersSDK, entopts map[string]any) CloudflareWorkersEntity

var NewUsageEntityFunc func(client *CloudflareWorkersSDK, entopts map[string]any) CloudflareWorkersEntity

var NewValueEntityFunc func(client *CloudflareWorkersSDK, entopts map[string]any) CloudflareWorkersEntity

var NewVersionEntityFunc func(client *CloudflareWorkersSDK, entopts map[string]any) CloudflareWorkersEntity

var NewWorkerEntityFunc func(client *CloudflareWorkersSDK, entopts map[string]any) CloudflareWorkersEntity

var NewWorkerCronTriggerEntityFunc func(client *CloudflareWorkersSDK, entopts map[string]any) CloudflareWorkersEntity

var NewWorkerDeploymentEntityFunc func(client *CloudflareWorkersSDK, entopts map[string]any) CloudflareWorkersEntity

var NewWorkerEnvironmentEntityFunc func(client *CloudflareWorkersSDK, entopts map[string]any) CloudflareWorkersEntity

var NewWorkerRouteEntityFunc func(client *CloudflareWorkersSDK, entopts map[string]any) CloudflareWorkersEntity

var NewWorkerScriptEntityFunc func(client *CloudflareWorkersSDK, entopts map[string]any) CloudflareWorkersEntity

var NewWorkerSubdomainEntityFunc func(client *CloudflareWorkersSDK, entopts map[string]any) CloudflareWorkersEntity

var NewWorkerTailLogEntityFunc func(client *CloudflareWorkersSDK, entopts map[string]any) CloudflareWorkersEntity

var NewWorkersAccountSettingEntityFunc func(client *CloudflareWorkersSDK, entopts map[string]any) CloudflareWorkersEntity

var NewWorkersApiResponseNullResultEntityFunc func(client *CloudflareWorkersSDK, entopts map[string]any) CloudflareWorkersEntity

var NewWorkersCompletedUploadAssetEntityFunc func(client *CloudflareWorkersSDK, entopts map[string]any) CloudflareWorkersEntity

var NewWorkersCreateAssetsUploadSessionEntityFunc func(client *CloudflareWorkersSDK, entopts map[string]any) CloudflareWorkersEntity

var NewWorkersForPlatformEntityFunc func(client *CloudflareWorkersSDK, entopts map[string]any) CloudflareWorkersEntity

var NewWorkersKvApiResponseCommonNoResultEntityFunc func(client *CloudflareWorkersSDK, entopts map[string]any) CloudflareWorkersEntity

var NewWorkersKvNamespaceEntityFunc func(client *CloudflareWorkersSDK, entopts map[string]any) CloudflareWorkersEntity

var NewWorkersNamespaceListEntityFunc func(client *CloudflareWorkersSDK, entopts map[string]any) CloudflareWorkersEntity

var NewWorkersNamespaceScriptDeleteBulkEntityFunc func(client *CloudflareWorkersSDK, entopts map[string]any) CloudflareWorkersEntity

var NewWorkersNamespaceScriptResponseSingleEntityFunc func(client *CloudflareWorkersSDK, entopts map[string]any) CloudflareWorkersEntity

var NewWorkersNamespaceSingleEntityFunc func(client *CloudflareWorkersSDK, entopts map[string]any) CloudflareWorkersEntity

var NewWorkersPipelinesOtherEntityFunc func(client *CloudflareWorkersSDK, entopts map[string]any) CloudflareWorkersEntity

var NewWorkersScriptAndVersionSettingEntityFunc func(client *CloudflareWorkersSDK, entopts map[string]any) CloudflareWorkersEntity

var NewWorkersScriptResponseCollectionEntityFunc func(client *CloudflareWorkersSDK, entopts map[string]any) CloudflareWorkersEntity

var NewWorkersScriptResponseSingleEntityFunc func(client *CloudflareWorkersSDK, entopts map[string]any) CloudflareWorkersEntity

var NewWorkersSmartPlacementEntityFunc func(client *CloudflareWorkersSDK, entopts map[string]any) CloudflareWorkersEntity

var NewWorkersUsageModelEntityFunc func(client *CloudflareWorkersSDK, entopts map[string]any) CloudflareWorkersEntity

var NewWorkersVersionsListEntityFunc func(client *CloudflareWorkersSDK, entopts map[string]any) CloudflareWorkersEntity

var NewWorkersVersionsSingleEntityFunc func(client *CloudflareWorkersSDK, entopts map[string]any) CloudflareWorkersEntity

var NewWorkersVersionsUploadEntityFunc func(client *CloudflareWorkersSDK, entopts map[string]any) CloudflareWorkersEntity

var NewWorkflowEntityFunc func(client *CloudflareWorkersSDK, entopts map[string]any) CloudflareWorkersEntity

