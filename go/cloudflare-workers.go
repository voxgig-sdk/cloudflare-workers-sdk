package voxgigcloudflareworkerssdk

import (
	"github.com/voxgig-sdk/cloudflare-workers-sdk/go/core"
	"github.com/voxgig-sdk/cloudflare-workers-sdk/go/entity"
	"github.com/voxgig-sdk/cloudflare-workers-sdk/go/feature"
	_ "github.com/voxgig-sdk/cloudflare-workers-sdk/go/utility"
)

// Type aliases preserve external API.
type CloudflareWorkersSDK = core.CloudflareWorkersSDK
type Context = core.Context
type Utility = core.Utility
type Feature = core.Feature
type Entity = core.Entity
type CloudflareWorkersEntity = core.CloudflareWorkersEntity
type FetcherFunc = core.FetcherFunc
type Spec = core.Spec
type Result = core.Result
type Response = core.Response
type Operation = core.Operation
type Control = core.Control
type CloudflareWorkersError = core.CloudflareWorkersError

// BaseFeature from feature package.
type BaseFeature = feature.BaseFeature

func init() {
	core.NewBaseFeatureFunc = func() core.Feature {
		return feature.NewBaseFeature()
	}
	core.NewTestFeatureFunc = func() core.Feature {
		return feature.NewTestFeature()
	}
	core.NewAccountEntityFunc = func(client *core.CloudflareWorkersSDK, entopts map[string]any) core.CloudflareWorkersEntity {
		return entity.NewAccountEntity(client, entopts)
	}
	core.NewApplicationEntityFunc = func(client *core.CloudflareWorkersSDK, entopts map[string]any) core.CloudflareWorkersEntity {
		return entity.NewApplicationEntity(client, entopts)
	}
	core.NewBrapiEntityFunc = func(client *core.CloudflareWorkersSDK, entopts map[string]any) core.CloudflareWorkersEntity {
		return entity.NewBrapiEntity(client, entopts)
	}
	core.NewBuildEntityFunc = func(client *core.CloudflareWorkersSDK, entopts map[string]any) core.CloudflareWorkersEntity {
		return entity.NewBuildEntity(client, entopts)
	}
	core.NewBuildTokenEntityFunc = func(client *core.CloudflareWorkersSDK, entopts map[string]any) core.CloudflareWorkersEntity {
		return entity.NewBuildTokenEntity(client, entopts)
	}
	core.NewBuildsApiEntityFunc = func(client *core.CloudflareWorkersSDK, entopts map[string]any) core.CloudflareWorkersEntity {
		return entity.NewBuildsApiEntity(client, entopts)
	}
	core.NewConnectionEntityFunc = func(client *core.CloudflareWorkersSDK, entopts map[string]any) core.CloudflareWorkersEntity {
		return entity.NewConnectionEntity(client, entopts)
	}
	core.NewContainerImageEntityFunc = func(client *core.CloudflareWorkersSDK, entopts map[string]any) core.CloudflareWorkersEntity {
		return entity.NewContainerImageEntity(client, entopts)
	}
	core.NewContainerInstanceEntityFunc = func(client *core.CloudflareWorkersSDK, entopts map[string]any) core.CloudflareWorkersEntity {
		return entity.NewContainerInstanceEntity(client, entopts)
	}
	core.NewDeployHookEntityFunc = func(client *core.CloudflareWorkersSDK, entopts map[string]any) core.CloudflareWorkersEntity {
		return entity.NewDeployHookEntity(client, entopts)
	}
	core.NewDeploymentEntityFunc = func(client *core.CloudflareWorkersSDK, entopts map[string]any) core.CloudflareWorkersEntity {
		return entity.NewDeploymentEntity(client, entopts)
	}
	core.NewDestinationEntityFunc = func(client *core.CloudflareWorkersSDK, entopts map[string]any) core.CloudflareWorkersEntity {
		return entity.NewDestinationEntity(client, entopts)
	}
	core.NewDomainEntityFunc = func(client *core.CloudflareWorkersSDK, entopts map[string]any) core.CloudflareWorkersEntity {
		return entity.NewDomainEntity(client, entopts)
	}
	core.NewDurableObjectsNamespaceEntityFunc = func(client *core.CloudflareWorkersSDK, entopts map[string]any) core.CloudflareWorkersEntity {
		return entity.NewDurableObjectsNamespaceEntity(client, entopts)
	}
	core.NewEnvironmentVariableEntityFunc = func(client *core.CloudflareWorkersSDK, entopts map[string]any) core.CloudflareWorkersEntity {
		return entity.NewEnvironmentVariableEntity(client, entopts)
	}
	core.NewGitHubIntegrationEntityFunc = func(client *core.CloudflareWorkersSDK, entopts map[string]any) core.CloudflareWorkersEntity {
		return entity.NewGitHubIntegrationEntity(client, entopts)
	}
	core.NewHyperdriveEntityFunc = func(client *core.CloudflareWorkersSDK, entopts map[string]any) core.CloudflareWorkersEntity {
		return entity.NewHyperdriveEntity(client, entopts)
	}
	core.NewImageRegistryEntityFunc = func(client *core.CloudflareWorkersSDK, entopts map[string]any) core.CloudflareWorkersEntity {
		return entity.NewImageRegistryEntity(client, entopts)
	}
	core.NewIssueEntityFunc = func(client *core.CloudflareWorkersSDK, entopts map[string]any) core.CloudflareWorkersEntity {
		return entity.NewIssueEntity(client, entopts)
	}
	core.NewKeyEntityFunc = func(client *core.CloudflareWorkersSDK, entopts map[string]any) core.CloudflareWorkersEntity {
		return entity.NewKeyEntity(client, entopts)
	}
	core.NewLiveTailEntityFunc = func(client *core.CloudflareWorkersSDK, entopts map[string]any) core.CloudflareWorkersEntity {
		return entity.NewLiveTailEntity(client, entopts)
	}
	core.NewMetricsExportEntityFunc = func(client *core.CloudflareWorkersSDK, entopts map[string]any) core.CloudflareWorkersEntity {
		return entity.NewMetricsExportEntity(client, entopts)
	}
	core.NewNamespaceEntityFunc = func(client *core.CloudflareWorkersSDK, entopts map[string]any) core.CloudflareWorkersEntity {
		return entity.NewNamespaceEntity(client, entopts)
	}
	core.NewPreviewEntityFunc = func(client *core.CloudflareWorkersSDK, entopts map[string]any) core.CloudflareWorkersEntity {
		return entity.NewPreviewEntity(client, entopts)
	}
	core.NewPreviewDeploymentEntityFunc = func(client *core.CloudflareWorkersSDK, entopts map[string]any) core.CloudflareWorkersEntity {
		return entity.NewPreviewDeploymentEntity(client, entopts)
	}
	core.NewQueryEntityFunc = func(client *core.CloudflareWorkersSDK, entopts map[string]any) core.CloudflareWorkersEntity {
		return entity.NewQueryEntity(client, entopts)
	}
	core.NewRepositoryConnectionEntityFunc = func(client *core.CloudflareWorkersSDK, entopts map[string]any) core.CloudflareWorkersEntity {
		return entity.NewRepositoryConnectionEntity(client, entopts)
	}
	core.NewRolloutEntityFunc = func(client *core.CloudflareWorkersSDK, entopts map[string]any) core.CloudflareWorkersEntity {
		return entity.NewRolloutEntity(client, entopts)
	}
	core.NewSavedQueryEntityFunc = func(client *core.CloudflareWorkersSDK, entopts map[string]any) core.CloudflareWorkersEntity {
		return entity.NewSavedQueryEntity(client, entopts)
	}
	core.NewScriptEntityFunc = func(client *core.CloudflareWorkersSDK, entopts map[string]any) core.CloudflareWorkersEntity {
		return entity.NewScriptEntity(client, entopts)
	}
	core.NewScriptSettingEntityFunc = func(client *core.CloudflareWorkersSDK, entopts map[string]any) core.CloudflareWorkersEntity {
		return entity.NewScriptSettingEntity(client, entopts)
	}
	core.NewSecretEntityFunc = func(client *core.CloudflareWorkersSDK, entopts map[string]any) core.CloudflareWorkersEntity {
		return entity.NewSecretEntity(client, entopts)
	}
	core.NewSecretsStoreDeleteEntityFunc = func(client *core.CloudflareWorkersSDK, entopts map[string]any) core.CloudflareWorkersEntity {
		return entity.NewSecretsStoreDeleteEntity(client, entopts)
	}
	core.NewSecretsStoreQuotaEntityFunc = func(client *core.CloudflareWorkersSDK, entopts map[string]any) core.CloudflareWorkersEntity {
		return entity.NewSecretsStoreQuotaEntity(client, entopts)
	}
	core.NewSecretsStoreSecretEntityFunc = func(client *core.CloudflareWorkersSDK, entopts map[string]any) core.CloudflareWorkersEntity {
		return entity.NewSecretsStoreSecretEntity(client, entopts)
	}
	core.NewSecretsStoreStoreEntityFunc = func(client *core.CloudflareWorkersSDK, entopts map[string]any) core.CloudflareWorkersEntity {
		return entity.NewSecretsStoreStoreEntity(client, entopts)
	}
	core.NewSecretsStoreStoresResponseCollectionEntityFunc = func(client *core.CloudflareWorkersSDK, entopts map[string]any) core.CloudflareWorkersEntity {
		return entity.NewSecretsStoreStoresResponseCollectionEntity(client, entopts)
	}
	core.NewSettingEntityFunc = func(client *core.CloudflareWorkersSDK, entopts map[string]any) core.CloudflareWorkersEntity {
		return entity.NewSettingEntity(client, entopts)
	}
	core.NewSharedEntityFunc = func(client *core.CloudflareWorkersSDK, entopts map[string]any) core.CloudflareWorkersEntity {
		return entity.NewSharedEntity(client, entopts)
	}
	core.NewTailEntityFunc = func(client *core.CloudflareWorkersSDK, entopts map[string]any) core.CloudflareWorkersEntity {
		return entity.NewTailEntity(client, entopts)
	}
	core.NewTokenEntityFunc = func(client *core.CloudflareWorkersSDK, entopts map[string]any) core.CloudflareWorkersEntity {
		return entity.NewTokenEntity(client, entopts)
	}
	core.NewTriggerEntityFunc = func(client *core.CloudflareWorkersSDK, entopts map[string]any) core.CloudflareWorkersEntity {
		return entity.NewTriggerEntity(client, entopts)
	}
	core.NewUsageEntityFunc = func(client *core.CloudflareWorkersSDK, entopts map[string]any) core.CloudflareWorkersEntity {
		return entity.NewUsageEntity(client, entopts)
	}
	core.NewValueEntityFunc = func(client *core.CloudflareWorkersSDK, entopts map[string]any) core.CloudflareWorkersEntity {
		return entity.NewValueEntity(client, entopts)
	}
	core.NewVersionEntityFunc = func(client *core.CloudflareWorkersSDK, entopts map[string]any) core.CloudflareWorkersEntity {
		return entity.NewVersionEntity(client, entopts)
	}
	core.NewWorkerEntityFunc = func(client *core.CloudflareWorkersSDK, entopts map[string]any) core.CloudflareWorkersEntity {
		return entity.NewWorkerEntity(client, entopts)
	}
	core.NewWorkerCronTriggerEntityFunc = func(client *core.CloudflareWorkersSDK, entopts map[string]any) core.CloudflareWorkersEntity {
		return entity.NewWorkerCronTriggerEntity(client, entopts)
	}
	core.NewWorkerDeploymentEntityFunc = func(client *core.CloudflareWorkersSDK, entopts map[string]any) core.CloudflareWorkersEntity {
		return entity.NewWorkerDeploymentEntity(client, entopts)
	}
	core.NewWorkerEnvironmentEntityFunc = func(client *core.CloudflareWorkersSDK, entopts map[string]any) core.CloudflareWorkersEntity {
		return entity.NewWorkerEnvironmentEntity(client, entopts)
	}
	core.NewWorkerRouteEntityFunc = func(client *core.CloudflareWorkersSDK, entopts map[string]any) core.CloudflareWorkersEntity {
		return entity.NewWorkerRouteEntity(client, entopts)
	}
	core.NewWorkerScriptEntityFunc = func(client *core.CloudflareWorkersSDK, entopts map[string]any) core.CloudflareWorkersEntity {
		return entity.NewWorkerScriptEntity(client, entopts)
	}
	core.NewWorkerSubdomainEntityFunc = func(client *core.CloudflareWorkersSDK, entopts map[string]any) core.CloudflareWorkersEntity {
		return entity.NewWorkerSubdomainEntity(client, entopts)
	}
	core.NewWorkerTailLogEntityFunc = func(client *core.CloudflareWorkersSDK, entopts map[string]any) core.CloudflareWorkersEntity {
		return entity.NewWorkerTailLogEntity(client, entopts)
	}
	core.NewWorkersAccountSettingEntityFunc = func(client *core.CloudflareWorkersSDK, entopts map[string]any) core.CloudflareWorkersEntity {
		return entity.NewWorkersAccountSettingEntity(client, entopts)
	}
	core.NewWorkersApiResponseNullResultEntityFunc = func(client *core.CloudflareWorkersSDK, entopts map[string]any) core.CloudflareWorkersEntity {
		return entity.NewWorkersApiResponseNullResultEntity(client, entopts)
	}
	core.NewWorkersCompletedUploadAssetEntityFunc = func(client *core.CloudflareWorkersSDK, entopts map[string]any) core.CloudflareWorkersEntity {
		return entity.NewWorkersCompletedUploadAssetEntity(client, entopts)
	}
	core.NewWorkersCreateAssetsUploadSessionEntityFunc = func(client *core.CloudflareWorkersSDK, entopts map[string]any) core.CloudflareWorkersEntity {
		return entity.NewWorkersCreateAssetsUploadSessionEntity(client, entopts)
	}
	core.NewWorkersForPlatformEntityFunc = func(client *core.CloudflareWorkersSDK, entopts map[string]any) core.CloudflareWorkersEntity {
		return entity.NewWorkersForPlatformEntity(client, entopts)
	}
	core.NewWorkersKvApiResponseCommonNoResultEntityFunc = func(client *core.CloudflareWorkersSDK, entopts map[string]any) core.CloudflareWorkersEntity {
		return entity.NewWorkersKvApiResponseCommonNoResultEntity(client, entopts)
	}
	core.NewWorkersKvNamespaceEntityFunc = func(client *core.CloudflareWorkersSDK, entopts map[string]any) core.CloudflareWorkersEntity {
		return entity.NewWorkersKvNamespaceEntity(client, entopts)
	}
	core.NewWorkersNamespaceListEntityFunc = func(client *core.CloudflareWorkersSDK, entopts map[string]any) core.CloudflareWorkersEntity {
		return entity.NewWorkersNamespaceListEntity(client, entopts)
	}
	core.NewWorkersNamespaceScriptDeleteBulkEntityFunc = func(client *core.CloudflareWorkersSDK, entopts map[string]any) core.CloudflareWorkersEntity {
		return entity.NewWorkersNamespaceScriptDeleteBulkEntity(client, entopts)
	}
	core.NewWorkersNamespaceScriptResponseSingleEntityFunc = func(client *core.CloudflareWorkersSDK, entopts map[string]any) core.CloudflareWorkersEntity {
		return entity.NewWorkersNamespaceScriptResponseSingleEntity(client, entopts)
	}
	core.NewWorkersNamespaceSingleEntityFunc = func(client *core.CloudflareWorkersSDK, entopts map[string]any) core.CloudflareWorkersEntity {
		return entity.NewWorkersNamespaceSingleEntity(client, entopts)
	}
	core.NewWorkersPipelinesOtherEntityFunc = func(client *core.CloudflareWorkersSDK, entopts map[string]any) core.CloudflareWorkersEntity {
		return entity.NewWorkersPipelinesOtherEntity(client, entopts)
	}
	core.NewWorkersScriptAndVersionSettingEntityFunc = func(client *core.CloudflareWorkersSDK, entopts map[string]any) core.CloudflareWorkersEntity {
		return entity.NewWorkersScriptAndVersionSettingEntity(client, entopts)
	}
	core.NewWorkersScriptResponseCollectionEntityFunc = func(client *core.CloudflareWorkersSDK, entopts map[string]any) core.CloudflareWorkersEntity {
		return entity.NewWorkersScriptResponseCollectionEntity(client, entopts)
	}
	core.NewWorkersScriptResponseSingleEntityFunc = func(client *core.CloudflareWorkersSDK, entopts map[string]any) core.CloudflareWorkersEntity {
		return entity.NewWorkersScriptResponseSingleEntity(client, entopts)
	}
	core.NewWorkersSmartPlacementEntityFunc = func(client *core.CloudflareWorkersSDK, entopts map[string]any) core.CloudflareWorkersEntity {
		return entity.NewWorkersSmartPlacementEntity(client, entopts)
	}
	core.NewWorkersUsageModelEntityFunc = func(client *core.CloudflareWorkersSDK, entopts map[string]any) core.CloudflareWorkersEntity {
		return entity.NewWorkersUsageModelEntity(client, entopts)
	}
	core.NewWorkersVersionsListEntityFunc = func(client *core.CloudflareWorkersSDK, entopts map[string]any) core.CloudflareWorkersEntity {
		return entity.NewWorkersVersionsListEntity(client, entopts)
	}
	core.NewWorkersVersionsSingleEntityFunc = func(client *core.CloudflareWorkersSDK, entopts map[string]any) core.CloudflareWorkersEntity {
		return entity.NewWorkersVersionsSingleEntity(client, entopts)
	}
	core.NewWorkersVersionsUploadEntityFunc = func(client *core.CloudflareWorkersSDK, entopts map[string]any) core.CloudflareWorkersEntity {
		return entity.NewWorkersVersionsUploadEntity(client, entopts)
	}
	core.NewWorkflowEntityFunc = func(client *core.CloudflareWorkersSDK, entopts map[string]any) core.CloudflareWorkersEntity {
		return entity.NewWorkflowEntity(client, entopts)
	}
}

// Constructor re-exports.
var NewCloudflareWorkersSDK = core.NewCloudflareWorkersSDK
var TestSDK = core.TestSDK
var NewContext = core.NewContext
var NewSpec = core.NewSpec
var NewResult = core.NewResult
var NewResponse = core.NewResponse
var NewOperation = core.NewOperation
var MakeConfig = core.MakeConfig
var SharedConfig = core.SharedConfig

// No-arg convenience constructors. Go has no default-argument syntax,
// so these aliases let callers write `sdk.New()` / `sdk.Test()`
// instead of `sdk.NewCloudflareWorkersSDK(nil)` / `sdk.TestSDK(nil, nil)`
// for the common no-options case.
func New() *CloudflareWorkersSDK  { return NewCloudflareWorkersSDK(nil) }
func Test() *CloudflareWorkersSDK { return TestSDK(nil, nil) }
var NewBaseFeature = feature.NewBaseFeature
var NewTestFeature = feature.NewTestFeature
