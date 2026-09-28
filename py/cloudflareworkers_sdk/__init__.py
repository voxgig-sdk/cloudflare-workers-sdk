# CloudflareWorkers SDK

from cloudflareworkers_sdk.utility.voxgig_struct import voxgig_struct as vs
from cloudflareworkers_sdk.core.utility_type import CloudflareWorkersUtility
from cloudflareworkers_sdk.core.spec import CloudflareWorkersSpec
from cloudflareworkers_sdk.core import helpers

# Load utility registration (populates Utility._registrar)
from cloudflareworkers_sdk.utility import register

# Load features
from cloudflareworkers_sdk.feature.base_feature import CloudflareWorkersBaseFeature
from cloudflareworkers_sdk.features import _has_feature, _make_feature


class CloudflareWorkersSDK:

    def __init__(self, options=None):
        self.mode = "live"
        self.features = []
        self.options = None

        utility = CloudflareWorkersUtility()
        self._utility = utility

        from cloudflareworkers_sdk.config import shared_config
        config = shared_config()

        self._rootctx = utility.make_context({
            "client": self,
            "utility": utility,
            "config": config,
            "options": options if options is not None else {},
            "shared": {},
        }, None)

        self.options = utility.make_options(self._rootctx)

        if vs.getpath(self.options, "feature.test.active") is True:
            self.mode = "test"

        self._rootctx.options = self.options

        # Add features in the resolved order (make_options puts an explicit
        # list order first, else defaults to test-first). Ordering matters: the
        # `test` feature installs the base mock transport and the transport
        # features (retry/cache/netsim/proxy/ratelimit) wrap whatever is
        # current, so `test` must be added before them to sit at the base.
        # Extension feature INSTANCES come from the RAW construction
        # options - extend is consumed exactly once, here. make_options
        # strips the key before cloning (vs.clone flattens arbitrary
        # objects), so self.options never carries the instances.
        feature_opts = helpers.to_map(vs.getprop(self.options, "feature"))
        extend = options.get("extend") if isinstance(options, dict) else None
        if not isinstance(extend, list):
            extend = []
        if feature_opts is not None:
            featureorder = vs.getpath(self.options, "__derived__.featureorder")
            if isinstance(featureorder, list):
                for fname in featureorder:
                    fopts = helpers.to_map(feature_opts.get(fname))
                    if fopts is not None and fopts.get("active") is True:
                        # An active name with no generated feature class is
                        # legal when an extend-supplied instance carries that
                        # name (station's adopt path): the instance is added
                        # below, positioned by its own __after__ entry, so
                        # skip it here rather than add a BaseFeature stray
                        # that would silently shift feature positions.
                        if not _has_feature(fname) and any(
                            fname == (f.get("name") if isinstance(f, dict)
                                      else getattr(f, "name", None))
                            for f in extend
                        ):
                            continue
                        utility.feature_add(self._rootctx, _make_feature(fname))

        # Add extension features.
        for f in extend:
            if isinstance(f, dict) or (hasattr(f, "get_name") and callable(f.get_name)):
                utility.feature_add(self._rootctx, f)

        # Initialize features.
        for f in self.features:
            utility.feature_init(self._rootctx, f)

        utility.feature_hook(self._rootctx, "PostConstruct")

        # #BuildFeatures

    def options_map(self):
        out = vs.clone(self.options)
        if isinstance(out, dict):
            return out
        return {}

    def get_utility(self):
        return CloudflareWorkersUtility.copy(self._utility)

    def get_root_ctx(self):
        return self._rootctx

    def prepare(self, fetchargs=None):
        utility = self._utility

        if fetchargs is None:
            fetchargs = {}

        ctrl = helpers.to_map(vs.getprop(fetchargs, "ctrl"))
        if ctrl is None:
            ctrl = {}

        ctx = utility.make_context({
            "opname": "prepare",
            "ctrl": ctrl,
        }, self._rootctx)

        options = self.options

        path = vs.getprop(fetchargs, "path") or ""
        if not isinstance(path, str):
            path = ""

        method = vs.getprop(fetchargs, "method") or "GET"
        if not isinstance(method, str):
            method = "GET"

        params = helpers.to_map(vs.getprop(fetchargs, "params"))
        if params is None:
            params = {}
        query = helpers.to_map(vs.getprop(fetchargs, "query"))
        if query is None:
            query = {}

        headers = utility.prepare_headers(ctx)

        base = vs.getprop(options, "base") or ""
        if not isinstance(base, str):
            base = ""
        prefix = vs.getprop(options, "prefix") or ""
        if not isinstance(prefix, str):
            prefix = ""
        suffix = vs.getprop(options, "suffix") or ""
        if not isinstance(suffix, str):
            suffix = ""

        ctx.spec = CloudflareWorkersSpec({
            "base": base,
            "prefix": prefix,
            "suffix": suffix,
            "path": path,
            "method": method,
            "params": params,
            "query": query,
            "headers": headers,
            "body": vs.getprop(fetchargs, "body"),
            "step": "start",
        })

        # Merge user-provided headers.
        uh = vs.getprop(fetchargs, "headers")
        if isinstance(uh, dict):
            for k, v in uh.items():
                ctx.spec.headers[k] = v

        _, err = utility.prepare_auth(ctx)
        if err is not None:
            raise err

        fetchdef, err = utility.make_fetch_def(ctx)
        if err is not None:
            raise err

        return fetchdef

    # Raw endpoint access is operator-controllable, like every entity op.
    # Blocking it means denying BOTH the 'direct' and 'graphql' tokens, since
    # either one reaches the same endpoint.
    def direct(self, fetchargs=None):
        if not self._op_allowed("direct"):
            return self._op_denied("direct")

        return self._raw_request(fetchargs)

    # Is this raw-access op permitted by the SDK's allow.op option?
    def _op_allowed(self, op):
        allow_op = vs.getpath(self.options, "allow.op")
        return isinstance(allow_op, str) and op in allow_op

    def _op_denied(self, op):
        allow_op = vs.getpath(self.options, "allow.op")
        return {
            "ok": False,
            "err": Exception(
                "CloudflareWorkersSDK: " + op + ": operation not allowed by"
                ' SDK option allow.op value: "' + str(allow_op) + '"'),
        }

    # Ungated request path shared by direct and graphql, each of which checks
    # its own allow.op token first. Private, rather than a flag on fetchargs:
    # a caller-supplied marker would let anyone opt straight back out of the
    # gate by passing it.
    def _raw_request(self, fetchargs=None):
        utility = self._utility

        try:
            fetchdef = self.prepare(fetchargs)
        except Exception as err:
            # direct() is the raw-HTTP escape hatch: it never raises, it
            # returns a result object callers branch on via result["ok"].
            return {"ok": False, "err": err}

        if fetchargs is None:
            fetchargs = {}
        ctrl = helpers.to_map(vs.getprop(fetchargs, "ctrl"))
        if ctrl is None:
            ctrl = {}

        ctx = utility.make_context({
            "opname": "direct",
            "ctrl": ctrl,
        }, self._rootctx)

        url = fetchdef.get("url", "")
        fetched, fetch_err = utility.fetcher(ctx, url, fetchdef)

        if fetch_err is not None:
            return {"ok": False, "err": fetch_err}

        if fetched is None:
            return {
                "ok": False,
                "err": ctx.make_error("direct_no_response", "response: undefined"),
            }

        if isinstance(fetched, dict):
            status = helpers.to_int(vs.getprop(fetched, "status"))
            headers = vs.getprop(fetched, "headers") or {}

            # No-body responses (204, 304) and explicit zero content-length
            # must skip JSON parsing — calling json() on an empty body raises.
            content_length = None
            if isinstance(headers, dict):
                content_length = headers.get("content-length")
            no_body = status in (204, 304) or str(content_length) == "0"

            json_data = None
            if not no_body:
                jf = vs.getprop(fetched, "json")
                if callable(jf):
                    try:
                        json_data = jf()
                    except Exception:
                        # Non-JSON body (e.g. text/plain, text/html). Surface
                        # status + headers but leave data as None.
                        json_data = None

            return {
                "ok": status >= 200 and status < 300,
                "status": status,
                "headers": headers,
                "data": json_data,
            }

        return {
            "ok": False,
            "err": ctx.make_error("direct_invalid", "invalid response type"),
        }

    # Raw GraphQL access: the pressure valve that makes the generated
    # surface's deliberate omissions (per-call selection sets, typed filter
    # builders, batching, subscriptions) livable — the whole schema stays
    # reachable.
    #
    # Thin wrapper over the same prepare/fetch path direct uses, with the one
    # thing raw direct cannot do for GraphQL: a GraphQL failure rides HTTP 200
    # as a top-level `errors` array, so status alone would report a failed
    # query as ok.
    #
    # NOTE: like direct, this bypasses the feature pipeline — no retry,
    # ratelimit or paging features apply.
    def graphql(self, query, variables=None, ctrl=None):
        if not self._op_allowed("graphql"):
            return self._op_denied("graphql")

        res = self._raw_request({
            "method": "POST",
            "headers": {"content-type": "application/json"},
            "body": {"query": query, "variables": variables or {}},
            "ctrl": ctrl or {},
        })

        # Errors are read BEFORE any status check: a GraphQL parse or
        # validation failure comes back as HTTP 400 carrying the standard
        # { errors: [...] } body, and the raw path represents a non-2xx as
        # ok:False with no err — so returning early on status would discard
        # the server's own diagnostics, which are the only useful part of
        # that response.
        errors = vs.getpath(res, "data.errors")

        if isinstance(errors, list) and 0 < len(errors):
            first = errors[0] if isinstance(errors[0], dict) else {}
            msg = first.get("message") or "graphql error"
            res["ok"] = False
            res["err"] = Exception("CloudflareWorkersSDK: graphql: " + str(msg))
            res["graphql"] = errors

        return res


    def Account(self, data=None) -> "AccountEntity":
        """Entity factory: client.Account().list() / client.Account().load({"id": ...})."""
        from cloudflareworkers_sdk.entity.account_entity import AccountEntity
        return AccountEntity(self, data)


    def Application(self, data=None) -> "ApplicationEntity":
        """Entity factory: client.Application().list() / client.Application().load({"id": ...})."""
        from cloudflareworkers_sdk.entity.application_entity import ApplicationEntity
        return ApplicationEntity(self, data)


    def Brapi(self, data=None) -> "BrapiEntity":
        """Entity factory: client.Brapi().list() / client.Brapi().load({"id": ...})."""
        from cloudflareworkers_sdk.entity.brapi_entity import BrapiEntity
        return BrapiEntity(self, data)


    def Build(self, data=None) -> "BuildEntity":
        """Entity factory: client.Build().list() / client.Build().load({"id": ...})."""
        from cloudflareworkers_sdk.entity.build_entity import BuildEntity
        return BuildEntity(self, data)


    def BuildToken(self, data=None) -> "BuildTokenEntity":
        """Entity factory: client.BuildToken().list() / client.BuildToken().load({"id": ...})."""
        from cloudflareworkers_sdk.entity.build_token_entity import BuildTokenEntity
        return BuildTokenEntity(self, data)


    def BuildsApi(self, data=None) -> "BuildsApiEntity":
        """Entity factory: client.BuildsApi().list() / client.BuildsApi().load({"id": ...})."""
        from cloudflareworkers_sdk.entity.builds_api_entity import BuildsApiEntity
        return BuildsApiEntity(self, data)


    def Connection(self, data=None) -> "ConnectionEntity":
        """Entity factory: client.Connection().list() / client.Connection().load({"id": ...})."""
        from cloudflareworkers_sdk.entity.connection_entity import ConnectionEntity
        return ConnectionEntity(self, data)


    def ContainerImage(self, data=None) -> "ContainerImageEntity":
        """Entity factory: client.ContainerImage().list() / client.ContainerImage().load({"id": ...})."""
        from cloudflareworkers_sdk.entity.container_image_entity import ContainerImageEntity
        return ContainerImageEntity(self, data)


    def ContainerInstance(self, data=None) -> "ContainerInstanceEntity":
        """Entity factory: client.ContainerInstance().list() / client.ContainerInstance().load({"id": ...})."""
        from cloudflareworkers_sdk.entity.container_instance_entity import ContainerInstanceEntity
        return ContainerInstanceEntity(self, data)


    def DeployHook(self, data=None) -> "DeployHookEntity":
        """Entity factory: client.DeployHook().list() / client.DeployHook().load({"id": ...})."""
        from cloudflareworkers_sdk.entity.deploy_hook_entity import DeployHookEntity
        return DeployHookEntity(self, data)


    def Deployment(self, data=None) -> "DeploymentEntity":
        """Entity factory: client.Deployment().list() / client.Deployment().load({"id": ...})."""
        from cloudflareworkers_sdk.entity.deployment_entity import DeploymentEntity
        return DeploymentEntity(self, data)


    def Destination(self, data=None) -> "DestinationEntity":
        """Entity factory: client.Destination().list() / client.Destination().load({"id": ...})."""
        from cloudflareworkers_sdk.entity.destination_entity import DestinationEntity
        return DestinationEntity(self, data)


    def Domain(self, data=None) -> "DomainEntity":
        """Entity factory: client.Domain().list() / client.Domain().load({"id": ...})."""
        from cloudflareworkers_sdk.entity.domain_entity import DomainEntity
        return DomainEntity(self, data)


    def DurableObjectsNamespace(self, data=None) -> "DurableObjectsNamespaceEntity":
        """Entity factory: client.DurableObjectsNamespace().list() / client.DurableObjectsNamespace().load({"id": ...})."""
        from cloudflareworkers_sdk.entity.durable_objects_namespace_entity import DurableObjectsNamespaceEntity
        return DurableObjectsNamespaceEntity(self, data)


    def EnvironmentVariable(self, data=None) -> "EnvironmentVariableEntity":
        """Entity factory: client.EnvironmentVariable().list() / client.EnvironmentVariable().load({"id": ...})."""
        from cloudflareworkers_sdk.entity.environment_variable_entity import EnvironmentVariableEntity
        return EnvironmentVariableEntity(self, data)


    def GitHubIntegration(self, data=None) -> "GitHubIntegrationEntity":
        """Entity factory: client.GitHubIntegration().list() / client.GitHubIntegration().load({"id": ...})."""
        from cloudflareworkers_sdk.entity.git_hub_integration_entity import GitHubIntegrationEntity
        return GitHubIntegrationEntity(self, data)


    def Hyperdrive(self, data=None) -> "HyperdriveEntity":
        """Entity factory: client.Hyperdrive().list() / client.Hyperdrive().load({"id": ...})."""
        from cloudflareworkers_sdk.entity.hyperdrive_entity import HyperdriveEntity
        return HyperdriveEntity(self, data)


    def ImageRegistry(self, data=None) -> "ImageRegistryEntity":
        """Entity factory: client.ImageRegistry().list() / client.ImageRegistry().load({"id": ...})."""
        from cloudflareworkers_sdk.entity.image_registry_entity import ImageRegistryEntity
        return ImageRegistryEntity(self, data)


    def Issue(self, data=None) -> "IssueEntity":
        """Entity factory: client.Issue().list() / client.Issue().load({"id": ...})."""
        from cloudflareworkers_sdk.entity.issue_entity import IssueEntity
        return IssueEntity(self, data)


    def Key(self, data=None) -> "KeyEntity":
        """Entity factory: client.Key().list() / client.Key().load({"id": ...})."""
        from cloudflareworkers_sdk.entity.key_entity import KeyEntity
        return KeyEntity(self, data)


    def LiveTail(self, data=None) -> "LiveTailEntity":
        """Entity factory: client.LiveTail().list() / client.LiveTail().load({"id": ...})."""
        from cloudflareworkers_sdk.entity.live_tail_entity import LiveTailEntity
        return LiveTailEntity(self, data)


    def MetricsExport(self, data=None) -> "MetricsExportEntity":
        """Entity factory: client.MetricsExport().list() / client.MetricsExport().load({"id": ...})."""
        from cloudflareworkers_sdk.entity.metrics_export_entity import MetricsExportEntity
        return MetricsExportEntity(self, data)


    def Namespace(self, data=None) -> "NamespaceEntity":
        """Entity factory: client.Namespace().list() / client.Namespace().load({"id": ...})."""
        from cloudflareworkers_sdk.entity.namespace_entity import NamespaceEntity
        return NamespaceEntity(self, data)


    def Preview(self, data=None) -> "PreviewEntity":
        """Entity factory: client.Preview().list() / client.Preview().load({"id": ...})."""
        from cloudflareworkers_sdk.entity.preview_entity import PreviewEntity
        return PreviewEntity(self, data)


    def PreviewDeployment(self, data=None) -> "PreviewDeploymentEntity":
        """Entity factory: client.PreviewDeployment().list() / client.PreviewDeployment().load({"id": ...})."""
        from cloudflareworkers_sdk.entity.preview_deployment_entity import PreviewDeploymentEntity
        return PreviewDeploymentEntity(self, data)


    def Query(self, data=None) -> "QueryEntity":
        """Entity factory: client.Query().list() / client.Query().load({"id": ...})."""
        from cloudflareworkers_sdk.entity.query_entity import QueryEntity
        return QueryEntity(self, data)


    def RepositoryConnection(self, data=None) -> "RepositoryConnectionEntity":
        """Entity factory: client.RepositoryConnection().list() / client.RepositoryConnection().load({"id": ...})."""
        from cloudflareworkers_sdk.entity.repository_connection_entity import RepositoryConnectionEntity
        return RepositoryConnectionEntity(self, data)


    def Rollout(self, data=None) -> "RolloutEntity":
        """Entity factory: client.Rollout().list() / client.Rollout().load({"id": ...})."""
        from cloudflareworkers_sdk.entity.rollout_entity import RolloutEntity
        return RolloutEntity(self, data)


    def SavedQuery(self, data=None) -> "SavedQueryEntity":
        """Entity factory: client.SavedQuery().list() / client.SavedQuery().load({"id": ...})."""
        from cloudflareworkers_sdk.entity.saved_query_entity import SavedQueryEntity
        return SavedQueryEntity(self, data)


    def Script(self, data=None) -> "ScriptEntity":
        """Entity factory: client.Script().list() / client.Script().load({"id": ...})."""
        from cloudflareworkers_sdk.entity.script_entity import ScriptEntity
        return ScriptEntity(self, data)


    def ScriptSetting(self, data=None) -> "ScriptSettingEntity":
        """Entity factory: client.ScriptSetting().list() / client.ScriptSetting().load({"id": ...})."""
        from cloudflareworkers_sdk.entity.script_setting_entity import ScriptSettingEntity
        return ScriptSettingEntity(self, data)


    def Secret(self, data=None) -> "SecretEntity":
        """Entity factory: client.Secret().list() / client.Secret().load({"id": ...})."""
        from cloudflareworkers_sdk.entity.secret_entity import SecretEntity
        return SecretEntity(self, data)


    def SecretsStoreDelete(self, data=None) -> "SecretsStoreDeleteEntity":
        """Entity factory: client.SecretsStoreDelete().list() / client.SecretsStoreDelete().load({"id": ...})."""
        from cloudflareworkers_sdk.entity.secrets_store_delete_entity import SecretsStoreDeleteEntity
        return SecretsStoreDeleteEntity(self, data)


    def SecretsStoreQuota(self, data=None) -> "SecretsStoreQuotaEntity":
        """Entity factory: client.SecretsStoreQuota().list() / client.SecretsStoreQuota().load({"id": ...})."""
        from cloudflareworkers_sdk.entity.secrets_store_quota_entity import SecretsStoreQuotaEntity
        return SecretsStoreQuotaEntity(self, data)


    def SecretsStoreSecret(self, data=None) -> "SecretsStoreSecretEntity":
        """Entity factory: client.SecretsStoreSecret().list() / client.SecretsStoreSecret().load({"id": ...})."""
        from cloudflareworkers_sdk.entity.secrets_store_secret_entity import SecretsStoreSecretEntity
        return SecretsStoreSecretEntity(self, data)


    def SecretsStoreStore(self, data=None) -> "SecretsStoreStoreEntity":
        """Entity factory: client.SecretsStoreStore().list() / client.SecretsStoreStore().load({"id": ...})."""
        from cloudflareworkers_sdk.entity.secrets_store_store_entity import SecretsStoreStoreEntity
        return SecretsStoreStoreEntity(self, data)


    def SecretsStoreStoresResponseCollection(self, data=None) -> "SecretsStoreStoresResponseCollectionEntity":
        """Entity factory: client.SecretsStoreStoresResponseCollection().list() / client.SecretsStoreStoresResponseCollection().load({"id": ...})."""
        from cloudflareworkers_sdk.entity.secrets_store_stores_response_collection_entity import SecretsStoreStoresResponseCollectionEntity
        return SecretsStoreStoresResponseCollectionEntity(self, data)


    def Setting(self, data=None) -> "SettingEntity":
        """Entity factory: client.Setting().list() / client.Setting().load({"id": ...})."""
        from cloudflareworkers_sdk.entity.setting_entity import SettingEntity
        return SettingEntity(self, data)


    def Shared(self, data=None) -> "SharedEntity":
        """Entity factory: client.Shared().list() / client.Shared().load({"id": ...})."""
        from cloudflareworkers_sdk.entity.shared_entity import SharedEntity
        return SharedEntity(self, data)


    def Tail(self, data=None) -> "TailEntity":
        """Entity factory: client.Tail().list() / client.Tail().load({"id": ...})."""
        from cloudflareworkers_sdk.entity.tail_entity import TailEntity
        return TailEntity(self, data)


    def Token(self, data=None) -> "TokenEntity":
        """Entity factory: client.Token().list() / client.Token().load({"id": ...})."""
        from cloudflareworkers_sdk.entity.token_entity import TokenEntity
        return TokenEntity(self, data)


    def Trigger(self, data=None) -> "TriggerEntity":
        """Entity factory: client.Trigger().list() / client.Trigger().load({"id": ...})."""
        from cloudflareworkers_sdk.entity.trigger_entity import TriggerEntity
        return TriggerEntity(self, data)


    def Usage(self, data=None) -> "UsageEntity":
        """Entity factory: client.Usage().list() / client.Usage().load({"id": ...})."""
        from cloudflareworkers_sdk.entity.usage_entity import UsageEntity
        return UsageEntity(self, data)


    def Value(self, data=None) -> "ValueEntity":
        """Entity factory: client.Value().list() / client.Value().load({"id": ...})."""
        from cloudflareworkers_sdk.entity.value_entity import ValueEntity
        return ValueEntity(self, data)


    def Version(self, data=None) -> "VersionEntity":
        """Entity factory: client.Version().list() / client.Version().load({"id": ...})."""
        from cloudflareworkers_sdk.entity.version_entity import VersionEntity
        return VersionEntity(self, data)


    def Worker(self, data=None) -> "WorkerEntity":
        """Entity factory: client.Worker().list() / client.Worker().load({"id": ...})."""
        from cloudflareworkers_sdk.entity.worker_entity import WorkerEntity
        return WorkerEntity(self, data)


    def WorkerCronTrigger(self, data=None) -> "WorkerCronTriggerEntity":
        """Entity factory: client.WorkerCronTrigger().list() / client.WorkerCronTrigger().load({"id": ...})."""
        from cloudflareworkers_sdk.entity.worker_cron_trigger_entity import WorkerCronTriggerEntity
        return WorkerCronTriggerEntity(self, data)


    def WorkerDeployment(self, data=None) -> "WorkerDeploymentEntity":
        """Entity factory: client.WorkerDeployment().list() / client.WorkerDeployment().load({"id": ...})."""
        from cloudflareworkers_sdk.entity.worker_deployment_entity import WorkerDeploymentEntity
        return WorkerDeploymentEntity(self, data)


    def WorkerEnvironment(self, data=None) -> "WorkerEnvironmentEntity":
        """Entity factory: client.WorkerEnvironment().list() / client.WorkerEnvironment().load({"id": ...})."""
        from cloudflareworkers_sdk.entity.worker_environment_entity import WorkerEnvironmentEntity
        return WorkerEnvironmentEntity(self, data)


    def WorkerRoute(self, data=None) -> "WorkerRouteEntity":
        """Entity factory: client.WorkerRoute().list() / client.WorkerRoute().load({"id": ...})."""
        from cloudflareworkers_sdk.entity.worker_route_entity import WorkerRouteEntity
        return WorkerRouteEntity(self, data)


    def WorkerScript(self, data=None) -> "WorkerScriptEntity":
        """Entity factory: client.WorkerScript().list() / client.WorkerScript().load({"id": ...})."""
        from cloudflareworkers_sdk.entity.worker_script_entity import WorkerScriptEntity
        return WorkerScriptEntity(self, data)


    def WorkerSubdomain(self, data=None) -> "WorkerSubdomainEntity":
        """Entity factory: client.WorkerSubdomain().list() / client.WorkerSubdomain().load({"id": ...})."""
        from cloudflareworkers_sdk.entity.worker_subdomain_entity import WorkerSubdomainEntity
        return WorkerSubdomainEntity(self, data)


    def WorkerTailLog(self, data=None) -> "WorkerTailLogEntity":
        """Entity factory: client.WorkerTailLog().list() / client.WorkerTailLog().load({"id": ...})."""
        from cloudflareworkers_sdk.entity.worker_tail_log_entity import WorkerTailLogEntity
        return WorkerTailLogEntity(self, data)


    def WorkersAccountSetting(self, data=None) -> "WorkersAccountSettingEntity":
        """Entity factory: client.WorkersAccountSetting().list() / client.WorkersAccountSetting().load({"id": ...})."""
        from cloudflareworkers_sdk.entity.workers_account_setting_entity import WorkersAccountSettingEntity
        return WorkersAccountSettingEntity(self, data)


    def WorkersApiResponseNullResult(self, data=None) -> "WorkersApiResponseNullResultEntity":
        """Entity factory: client.WorkersApiResponseNullResult().list() / client.WorkersApiResponseNullResult().load({"id": ...})."""
        from cloudflareworkers_sdk.entity.workers_api_response_null_result_entity import WorkersApiResponseNullResultEntity
        return WorkersApiResponseNullResultEntity(self, data)


    def WorkersCompletedUploadAsset(self, data=None) -> "WorkersCompletedUploadAssetEntity":
        """Entity factory: client.WorkersCompletedUploadAsset().list() / client.WorkersCompletedUploadAsset().load({"id": ...})."""
        from cloudflareworkers_sdk.entity.workers_completed_upload_asset_entity import WorkersCompletedUploadAssetEntity
        return WorkersCompletedUploadAssetEntity(self, data)


    def WorkersCreateAssetsUploadSession(self, data=None) -> "WorkersCreateAssetsUploadSessionEntity":
        """Entity factory: client.WorkersCreateAssetsUploadSession().list() / client.WorkersCreateAssetsUploadSession().load({"id": ...})."""
        from cloudflareworkers_sdk.entity.workers_create_assets_upload_session_entity import WorkersCreateAssetsUploadSessionEntity
        return WorkersCreateAssetsUploadSessionEntity(self, data)


    def WorkersForPlatform(self, data=None) -> "WorkersForPlatformEntity":
        """Entity factory: client.WorkersForPlatform().list() / client.WorkersForPlatform().load({"id": ...})."""
        from cloudflareworkers_sdk.entity.workers_for_platform_entity import WorkersForPlatformEntity
        return WorkersForPlatformEntity(self, data)


    def WorkersKvApiResponseCommonNoResult(self, data=None) -> "WorkersKvApiResponseCommonNoResultEntity":
        """Entity factory: client.WorkersKvApiResponseCommonNoResult().list() / client.WorkersKvApiResponseCommonNoResult().load({"id": ...})."""
        from cloudflareworkers_sdk.entity.workers_kv_api_response_common_no_result_entity import WorkersKvApiResponseCommonNoResultEntity
        return WorkersKvApiResponseCommonNoResultEntity(self, data)


    def WorkersKvNamespace(self, data=None) -> "WorkersKvNamespaceEntity":
        """Entity factory: client.WorkersKvNamespace().list() / client.WorkersKvNamespace().load({"id": ...})."""
        from cloudflareworkers_sdk.entity.workers_kv_namespace_entity import WorkersKvNamespaceEntity
        return WorkersKvNamespaceEntity(self, data)


    def WorkersNamespaceList(self, data=None) -> "WorkersNamespaceListEntity":
        """Entity factory: client.WorkersNamespaceList().list() / client.WorkersNamespaceList().load({"id": ...})."""
        from cloudflareworkers_sdk.entity.workers_namespace_list_entity import WorkersNamespaceListEntity
        return WorkersNamespaceListEntity(self, data)


    def WorkersNamespaceScriptDeleteBulk(self, data=None) -> "WorkersNamespaceScriptDeleteBulkEntity":
        """Entity factory: client.WorkersNamespaceScriptDeleteBulk().list() / client.WorkersNamespaceScriptDeleteBulk().load({"id": ...})."""
        from cloudflareworkers_sdk.entity.workers_namespace_script_delete_bulk_entity import WorkersNamespaceScriptDeleteBulkEntity
        return WorkersNamespaceScriptDeleteBulkEntity(self, data)


    def WorkersNamespaceScriptResponseSingle(self, data=None) -> "WorkersNamespaceScriptResponseSingleEntity":
        """Entity factory: client.WorkersNamespaceScriptResponseSingle().list() / client.WorkersNamespaceScriptResponseSingle().load({"id": ...})."""
        from cloudflareworkers_sdk.entity.workers_namespace_script_response_single_entity import WorkersNamespaceScriptResponseSingleEntity
        return WorkersNamespaceScriptResponseSingleEntity(self, data)


    def WorkersNamespaceSingle(self, data=None) -> "WorkersNamespaceSingleEntity":
        """Entity factory: client.WorkersNamespaceSingle().list() / client.WorkersNamespaceSingle().load({"id": ...})."""
        from cloudflareworkers_sdk.entity.workers_namespace_single_entity import WorkersNamespaceSingleEntity
        return WorkersNamespaceSingleEntity(self, data)


    def WorkersPipelinesOther(self, data=None) -> "WorkersPipelinesOtherEntity":
        """Entity factory: client.WorkersPipelinesOther().list() / client.WorkersPipelinesOther().load({"id": ...})."""
        from cloudflareworkers_sdk.entity.workers_pipelines_other_entity import WorkersPipelinesOtherEntity
        return WorkersPipelinesOtherEntity(self, data)


    def WorkersScriptAndVersionSetting(self, data=None) -> "WorkersScriptAndVersionSettingEntity":
        """Entity factory: client.WorkersScriptAndVersionSetting().list() / client.WorkersScriptAndVersionSetting().load({"id": ...})."""
        from cloudflareworkers_sdk.entity.workers_script_and_version_setting_entity import WorkersScriptAndVersionSettingEntity
        return WorkersScriptAndVersionSettingEntity(self, data)


    def WorkersScriptResponseCollection(self, data=None) -> "WorkersScriptResponseCollectionEntity":
        """Entity factory: client.WorkersScriptResponseCollection().list() / client.WorkersScriptResponseCollection().load({"id": ...})."""
        from cloudflareworkers_sdk.entity.workers_script_response_collection_entity import WorkersScriptResponseCollectionEntity
        return WorkersScriptResponseCollectionEntity(self, data)


    def WorkersScriptResponseSingle(self, data=None) -> "WorkersScriptResponseSingleEntity":
        """Entity factory: client.WorkersScriptResponseSingle().list() / client.WorkersScriptResponseSingle().load({"id": ...})."""
        from cloudflareworkers_sdk.entity.workers_script_response_single_entity import WorkersScriptResponseSingleEntity
        return WorkersScriptResponseSingleEntity(self, data)


    def WorkersSmartPlacement(self, data=None) -> "WorkersSmartPlacementEntity":
        """Entity factory: client.WorkersSmartPlacement().list() / client.WorkersSmartPlacement().load({"id": ...})."""
        from cloudflareworkers_sdk.entity.workers_smart_placement_entity import WorkersSmartPlacementEntity
        return WorkersSmartPlacementEntity(self, data)


    def WorkersUsageModel(self, data=None) -> "WorkersUsageModelEntity":
        """Entity factory: client.WorkersUsageModel().list() / client.WorkersUsageModel().load({"id": ...})."""
        from cloudflareworkers_sdk.entity.workers_usage_model_entity import WorkersUsageModelEntity
        return WorkersUsageModelEntity(self, data)


    def WorkersVersionsList(self, data=None) -> "WorkersVersionsListEntity":
        """Entity factory: client.WorkersVersionsList().list() / client.WorkersVersionsList().load({"id": ...})."""
        from cloudflareworkers_sdk.entity.workers_versions_list_entity import WorkersVersionsListEntity
        return WorkersVersionsListEntity(self, data)


    def WorkersVersionsSingle(self, data=None) -> "WorkersVersionsSingleEntity":
        """Entity factory: client.WorkersVersionsSingle().list() / client.WorkersVersionsSingle().load({"id": ...})."""
        from cloudflareworkers_sdk.entity.workers_versions_single_entity import WorkersVersionsSingleEntity
        return WorkersVersionsSingleEntity(self, data)


    def WorkersVersionsUpload(self, data=None) -> "WorkersVersionsUploadEntity":
        """Entity factory: client.WorkersVersionsUpload().list() / client.WorkersVersionsUpload().load({"id": ...})."""
        from cloudflareworkers_sdk.entity.workers_versions_upload_entity import WorkersVersionsUploadEntity
        return WorkersVersionsUploadEntity(self, data)


    def Workflow(self, data=None) -> "WorkflowEntity":
        """Entity factory: client.Workflow().list() / client.Workflow().load({"id": ...})."""
        from cloudflareworkers_sdk.entity.workflow_entity import WorkflowEntity
        return WorkflowEntity(self, data)



    @classmethod
    def test(cls, testopts=None, sdkopts=None) -> "CloudflareWorkersSDK":
        if sdkopts is None:
            sdkopts = {}
        sdkopts = vs.clone(sdkopts)
        if not isinstance(sdkopts, dict):
            sdkopts = {}

        if testopts is None:
            testopts = {}
        testopts = vs.clone(testopts)
        if not isinstance(testopts, dict):
            testopts = {}
        testopts["active"] = True

        vs.setpath(sdkopts, "feature.test", testopts)

        sdk = cls(sdkopts)
        sdk.mode = "test"

        return sdk


from typing import TYPE_CHECKING

if TYPE_CHECKING:
    from cloudflareworkers_sdk.entity.account_entity import AccountEntity
    from cloudflareworkers_sdk.entity.application_entity import ApplicationEntity
    from cloudflareworkers_sdk.entity.brapi_entity import BrapiEntity
    from cloudflareworkers_sdk.entity.build_entity import BuildEntity
    from cloudflareworkers_sdk.entity.build_token_entity import BuildTokenEntity
    from cloudflareworkers_sdk.entity.builds_api_entity import BuildsApiEntity
    from cloudflareworkers_sdk.entity.connection_entity import ConnectionEntity
    from cloudflareworkers_sdk.entity.container_image_entity import ContainerImageEntity
    from cloudflareworkers_sdk.entity.container_instance_entity import ContainerInstanceEntity
    from cloudflareworkers_sdk.entity.deploy_hook_entity import DeployHookEntity
    from cloudflareworkers_sdk.entity.deployment_entity import DeploymentEntity
    from cloudflareworkers_sdk.entity.destination_entity import DestinationEntity
    from cloudflareworkers_sdk.entity.domain_entity import DomainEntity
    from cloudflareworkers_sdk.entity.durable_objects_namespace_entity import DurableObjectsNamespaceEntity
    from cloudflareworkers_sdk.entity.environment_variable_entity import EnvironmentVariableEntity
    from cloudflareworkers_sdk.entity.git_hub_integration_entity import GitHubIntegrationEntity
    from cloudflareworkers_sdk.entity.hyperdrive_entity import HyperdriveEntity
    from cloudflareworkers_sdk.entity.image_registry_entity import ImageRegistryEntity
    from cloudflareworkers_sdk.entity.issue_entity import IssueEntity
    from cloudflareworkers_sdk.entity.key_entity import KeyEntity
    from cloudflareworkers_sdk.entity.live_tail_entity import LiveTailEntity
    from cloudflareworkers_sdk.entity.metrics_export_entity import MetricsExportEntity
    from cloudflareworkers_sdk.entity.namespace_entity import NamespaceEntity
    from cloudflareworkers_sdk.entity.preview_entity import PreviewEntity
    from cloudflareworkers_sdk.entity.preview_deployment_entity import PreviewDeploymentEntity
    from cloudflareworkers_sdk.entity.query_entity import QueryEntity
    from cloudflareworkers_sdk.entity.repository_connection_entity import RepositoryConnectionEntity
    from cloudflareworkers_sdk.entity.rollout_entity import RolloutEntity
    from cloudflareworkers_sdk.entity.saved_query_entity import SavedQueryEntity
    from cloudflareworkers_sdk.entity.script_entity import ScriptEntity
    from cloudflareworkers_sdk.entity.script_setting_entity import ScriptSettingEntity
    from cloudflareworkers_sdk.entity.secret_entity import SecretEntity
    from cloudflareworkers_sdk.entity.secrets_store_delete_entity import SecretsStoreDeleteEntity
    from cloudflareworkers_sdk.entity.secrets_store_quota_entity import SecretsStoreQuotaEntity
    from cloudflareworkers_sdk.entity.secrets_store_secret_entity import SecretsStoreSecretEntity
    from cloudflareworkers_sdk.entity.secrets_store_store_entity import SecretsStoreStoreEntity
    from cloudflareworkers_sdk.entity.secrets_store_stores_response_collection_entity import SecretsStoreStoresResponseCollectionEntity
    from cloudflareworkers_sdk.entity.setting_entity import SettingEntity
    from cloudflareworkers_sdk.entity.shared_entity import SharedEntity
    from cloudflareworkers_sdk.entity.tail_entity import TailEntity
    from cloudflareworkers_sdk.entity.token_entity import TokenEntity
    from cloudflareworkers_sdk.entity.trigger_entity import TriggerEntity
    from cloudflareworkers_sdk.entity.usage_entity import UsageEntity
    from cloudflareworkers_sdk.entity.value_entity import ValueEntity
    from cloudflareworkers_sdk.entity.version_entity import VersionEntity
    from cloudflareworkers_sdk.entity.worker_entity import WorkerEntity
    from cloudflareworkers_sdk.entity.worker_cron_trigger_entity import WorkerCronTriggerEntity
    from cloudflareworkers_sdk.entity.worker_deployment_entity import WorkerDeploymentEntity
    from cloudflareworkers_sdk.entity.worker_environment_entity import WorkerEnvironmentEntity
    from cloudflareworkers_sdk.entity.worker_route_entity import WorkerRouteEntity
    from cloudflareworkers_sdk.entity.worker_script_entity import WorkerScriptEntity
    from cloudflareworkers_sdk.entity.worker_subdomain_entity import WorkerSubdomainEntity
    from cloudflareworkers_sdk.entity.worker_tail_log_entity import WorkerTailLogEntity
    from cloudflareworkers_sdk.entity.workers_account_setting_entity import WorkersAccountSettingEntity
    from cloudflareworkers_sdk.entity.workers_api_response_null_result_entity import WorkersApiResponseNullResultEntity
    from cloudflareworkers_sdk.entity.workers_completed_upload_asset_entity import WorkersCompletedUploadAssetEntity
    from cloudflareworkers_sdk.entity.workers_create_assets_upload_session_entity import WorkersCreateAssetsUploadSessionEntity
    from cloudflareworkers_sdk.entity.workers_for_platform_entity import WorkersForPlatformEntity
    from cloudflareworkers_sdk.entity.workers_kv_api_response_common_no_result_entity import WorkersKvApiResponseCommonNoResultEntity
    from cloudflareworkers_sdk.entity.workers_kv_namespace_entity import WorkersKvNamespaceEntity
    from cloudflareworkers_sdk.entity.workers_namespace_list_entity import WorkersNamespaceListEntity
    from cloudflareworkers_sdk.entity.workers_namespace_script_delete_bulk_entity import WorkersNamespaceScriptDeleteBulkEntity
    from cloudflareworkers_sdk.entity.workers_namespace_script_response_single_entity import WorkersNamespaceScriptResponseSingleEntity
    from cloudflareworkers_sdk.entity.workers_namespace_single_entity import WorkersNamespaceSingleEntity
    from cloudflareworkers_sdk.entity.workers_pipelines_other_entity import WorkersPipelinesOtherEntity
    from cloudflareworkers_sdk.entity.workers_script_and_version_setting_entity import WorkersScriptAndVersionSettingEntity
    from cloudflareworkers_sdk.entity.workers_script_response_collection_entity import WorkersScriptResponseCollectionEntity
    from cloudflareworkers_sdk.entity.workers_script_response_single_entity import WorkersScriptResponseSingleEntity
    from cloudflareworkers_sdk.entity.workers_smart_placement_entity import WorkersSmartPlacementEntity
    from cloudflareworkers_sdk.entity.workers_usage_model_entity import WorkersUsageModelEntity
    from cloudflareworkers_sdk.entity.workers_versions_list_entity import WorkersVersionsListEntity
    from cloudflareworkers_sdk.entity.workers_versions_single_entity import WorkersVersionsSingleEntity
    from cloudflareworkers_sdk.entity.workers_versions_upload_entity import WorkersVersionsUploadEntity
    from cloudflareworkers_sdk.entity.workflow_entity import WorkflowEntity
