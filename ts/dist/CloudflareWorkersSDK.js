"use strict";
// CloudflareWorkers Ts SDK
Object.defineProperty(exports, "__esModule", { value: true });
exports.SDK = exports.CloudflareWorkersSDK = exports.CloudflareWorkersEntityBase = exports.BaseFeature = exports.config = exports.stdutil = void 0;
const AccountEntity_1 = require("./entity/AccountEntity");
const ApplicationEntity_1 = require("./entity/ApplicationEntity");
const BrapiEntity_1 = require("./entity/BrapiEntity");
const BuildEntity_1 = require("./entity/BuildEntity");
const BuildTokenEntity_1 = require("./entity/BuildTokenEntity");
const BuildsApiEntity_1 = require("./entity/BuildsApiEntity");
const ConnectionEntity_1 = require("./entity/ConnectionEntity");
const ContainerImageEntity_1 = require("./entity/ContainerImageEntity");
const ContainerInstanceEntity_1 = require("./entity/ContainerInstanceEntity");
const DeployHookEntity_1 = require("./entity/DeployHookEntity");
const DeploymentEntity_1 = require("./entity/DeploymentEntity");
const DestinationEntity_1 = require("./entity/DestinationEntity");
const DomainEntity_1 = require("./entity/DomainEntity");
const DurableObjectsNamespaceEntity_1 = require("./entity/DurableObjectsNamespaceEntity");
const EnvironmentVariableEntity_1 = require("./entity/EnvironmentVariableEntity");
const GitHubIntegrationEntity_1 = require("./entity/GitHubIntegrationEntity");
const HyperdriveEntity_1 = require("./entity/HyperdriveEntity");
const ImageRegistryEntity_1 = require("./entity/ImageRegistryEntity");
const IssueEntity_1 = require("./entity/IssueEntity");
const KeyEntity_1 = require("./entity/KeyEntity");
const LiveTailEntity_1 = require("./entity/LiveTailEntity");
const MetricsExportEntity_1 = require("./entity/MetricsExportEntity");
const NamespaceEntity_1 = require("./entity/NamespaceEntity");
const PreviewEntity_1 = require("./entity/PreviewEntity");
const PreviewDeploymentEntity_1 = require("./entity/PreviewDeploymentEntity");
const QueryEntity_1 = require("./entity/QueryEntity");
const RepositoryConnectionEntity_1 = require("./entity/RepositoryConnectionEntity");
const RolloutEntity_1 = require("./entity/RolloutEntity");
const SavedQueryEntity_1 = require("./entity/SavedQueryEntity");
const ScriptEntity_1 = require("./entity/ScriptEntity");
const ScriptSettingEntity_1 = require("./entity/ScriptSettingEntity");
const SecretEntity_1 = require("./entity/SecretEntity");
const SecretsStoreDeleteEntity_1 = require("./entity/SecretsStoreDeleteEntity");
const SecretsStoreQuotaEntity_1 = require("./entity/SecretsStoreQuotaEntity");
const SecretsStoreSecretEntity_1 = require("./entity/SecretsStoreSecretEntity");
const SecretsStoreStoreEntity_1 = require("./entity/SecretsStoreStoreEntity");
const SecretsStoreStoresResponseCollectionEntity_1 = require("./entity/SecretsStoreStoresResponseCollectionEntity");
const SettingEntity_1 = require("./entity/SettingEntity");
const SharedEntity_1 = require("./entity/SharedEntity");
const TailEntity_1 = require("./entity/TailEntity");
const TokenEntity_1 = require("./entity/TokenEntity");
const TriggerEntity_1 = require("./entity/TriggerEntity");
const UsageEntity_1 = require("./entity/UsageEntity");
const ValueEntity_1 = require("./entity/ValueEntity");
const VersionEntity_1 = require("./entity/VersionEntity");
const WorkerEntity_1 = require("./entity/WorkerEntity");
const WorkerCronTriggerEntity_1 = require("./entity/WorkerCronTriggerEntity");
const WorkerDeploymentEntity_1 = require("./entity/WorkerDeploymentEntity");
const WorkerEnvironmentEntity_1 = require("./entity/WorkerEnvironmentEntity");
const WorkerRouteEntity_1 = require("./entity/WorkerRouteEntity");
const WorkerScriptEntity_1 = require("./entity/WorkerScriptEntity");
const WorkerSubdomainEntity_1 = require("./entity/WorkerSubdomainEntity");
const WorkerTailLogEntity_1 = require("./entity/WorkerTailLogEntity");
const WorkersAccountSettingEntity_1 = require("./entity/WorkersAccountSettingEntity");
const WorkersApiResponseNullResultEntity_1 = require("./entity/WorkersApiResponseNullResultEntity");
const WorkersCompletedUploadAssetEntity_1 = require("./entity/WorkersCompletedUploadAssetEntity");
const WorkersCreateAssetsUploadSessionEntity_1 = require("./entity/WorkersCreateAssetsUploadSessionEntity");
const WorkersForPlatformEntity_1 = require("./entity/WorkersForPlatformEntity");
const WorkersKvApiResponseCommonNoResultEntity_1 = require("./entity/WorkersKvApiResponseCommonNoResultEntity");
const WorkersKvNamespaceEntity_1 = require("./entity/WorkersKvNamespaceEntity");
const WorkersNamespaceListEntity_1 = require("./entity/WorkersNamespaceListEntity");
const WorkersNamespaceScriptDeleteBulkEntity_1 = require("./entity/WorkersNamespaceScriptDeleteBulkEntity");
const WorkersNamespaceScriptResponseSingleEntity_1 = require("./entity/WorkersNamespaceScriptResponseSingleEntity");
const WorkersNamespaceSingleEntity_1 = require("./entity/WorkersNamespaceSingleEntity");
const WorkersPipelinesOtherEntity_1 = require("./entity/WorkersPipelinesOtherEntity");
const WorkersScriptAndVersionSettingEntity_1 = require("./entity/WorkersScriptAndVersionSettingEntity");
const WorkersScriptResponseCollectionEntity_1 = require("./entity/WorkersScriptResponseCollectionEntity");
const WorkersScriptResponseSingleEntity_1 = require("./entity/WorkersScriptResponseSingleEntity");
const WorkersSmartPlacementEntity_1 = require("./entity/WorkersSmartPlacementEntity");
const WorkersUsageModelEntity_1 = require("./entity/WorkersUsageModelEntity");
const WorkersVersionsListEntity_1 = require("./entity/WorkersVersionsListEntity");
const WorkersVersionsSingleEntity_1 = require("./entity/WorkersVersionsSingleEntity");
const WorkersVersionsUploadEntity_1 = require("./entity/WorkersVersionsUploadEntity");
const WorkflowEntity_1 = require("./entity/WorkflowEntity");
const node_util_1 = require("node:util");
const Config_1 = require("./Config");
Object.defineProperty(exports, "config", { enumerable: true, get: function () { return Config_1.config; } });
const CloudflareWorkersEntityBase_1 = require("./CloudflareWorkersEntityBase");
Object.defineProperty(exports, "CloudflareWorkersEntityBase", { enumerable: true, get: function () { return CloudflareWorkersEntityBase_1.CloudflareWorkersEntityBase; } });
const Utility_1 = require("./utility/Utility");
const BaseFeature_1 = require("./feature/base/BaseFeature");
Object.defineProperty(exports, "BaseFeature", { enumerable: true, get: function () { return BaseFeature_1.BaseFeature; } });
const stdutil = new Utility_1.Utility();
exports.stdutil = stdutil;
class CloudflareWorkersSDK {
    _mode = 'live';
    _options;
    _utility = new Utility_1.Utility();
    _features;
    _rootctx;
    constructor(options) {
        this._rootctx = this._utility.makeContext({
            client: this,
            utility: this._utility,
            config: Config_1.config,
            options,
            shared: new WeakMap()
        });
        this._options = this._utility.makeOptions(this._rootctx);
        const struct = this._utility.struct;
        const getpath = struct.getpath;
        if (true === getpath(this._options.feature, 'test.active')) {
            this._mode = 'test';
        }
        this._rootctx.options = this._options;
        this._features = [];
        const featureAdd = this._utility.featureAdd;
        const featureInit = this._utility.featureInit;
        // Add features in the resolved order (makeOptions puts an explicit
        // array order first, else defaults to test-first). Ordering matters:
        // the `test` feature installs the base mock transport and the transport
        // features (retry/cache/netsim/proxy/ratelimit) wrap whatever is current,
        // so `test` must be added before them to sit at the base of the chain.
        const extend = this._options.extend || [];
        const featureorder = getpath(this._options, '__derived__.featureorder') || [];
        for (const fname of featureorder) {
            const fopts = this._options.feature[fname] || {};
            if (fopts.active) {
                // An active name with no generated class is legal when an
                // extend-supplied instance carries that name (station's adopt
                // path): the instance is added below, positioned by its own
                // __after__ entry, so skip it here rather than fail construction.
                if (!this._rootctx.config.hasFeature(fname) &&
                    extend.some((f) => fname === f.name)) {
                    continue;
                }
                featureAdd(this._rootctx, this._rootctx.config.makeFeature(fname));
            }
        }
        for (let f of extend) {
            featureAdd(this._rootctx, f);
        }
        for (let f of this._features) {
            featureInit(this._rootctx, f);
        }
        const featureHook = this._utility.featureHook;
        featureHook(this._rootctx, 'PostConstruct');
    }
    options() {
        return this._utility.struct.clone(this._options);
    }
    utility() {
        return this._utility.struct.clone(this._utility);
    }
    async prepare(fetchargs) {
        const utility = this._utility;
        const struct = utility.struct;
        const clone = struct.clone;
        const { makeContext, makeFetchDef, prepareHeaders, prepareAuth, } = utility;
        fetchargs = fetchargs || {};
        let ctx = makeContext({
            opname: 'prepare',
            ctrl: fetchargs.ctrl || {},
        }, this._rootctx);
        const options = this._options;
        const spec = {
            base: options.base,
            prefix: options.prefix,
            suffix: options.suffix,
            path: fetchargs.path || '',
            method: fetchargs.method || 'GET',
            params: fetchargs.params || {},
            query: fetchargs.query || {},
            headers: prepareHeaders(ctx),
            body: fetchargs.body,
            step: 'start',
        };
        ctx.spec = spec;
        if (fetchargs.headers) {
            const uheaders = fetchargs.headers;
            for (let key in uheaders) {
                spec.headers[key] = uheaders[key];
            }
        }
        const authResult = prepareAuth(ctx);
        if (authResult instanceof Error) {
            return authResult;
        }
        return makeFetchDef(ctx);
    }
    // Raw endpoint access is operator-controllable, like every entity op.
    // Blocking it means denying BOTH the 'direct' and 'graphql' tokens, since
    // either one reaches the same endpoint.
    async direct(fetchargs) {
        if (!this._options.allow.op.includes('direct')) {
            return {
                ok: false,
                err: new Error('CloudflareWorkersSDK: direct: operation not allowed by' +
                    ' SDK option allow.op value: "' + this._options.allow.op + '"'),
            };
        }
        return this._rawRequest(fetchargs);
    }
    // Ungated request path shared by direct() and graphql(), each of which
    // checks its own allow.op token first. Private, rather than a flag on
    // fetchargs: a caller-supplied marker would let anyone opt straight back
    // out of the gate by passing it.
    async _rawRequest(fetchargs) {
        const utility = this._utility;
        const fetcher = utility.fetcher;
        const makeContext = utility.makeContext;
        const fetchdef = await this.prepare(fetchargs);
        if (fetchdef instanceof Error) {
            return fetchdef;
        }
        let ctx = makeContext({
            opname: 'direct',
            ctrl: (fetchargs || {}).ctrl || {},
        }, this._rootctx);
        try {
            const fetched = await fetcher(ctx, fetchdef.url, fetchdef);
            if (null == fetched) {
                return { ok: false, err: ctx.error('direct_no_response', 'response: undefined') };
            }
            else if (fetched instanceof Error) {
                return { ok: false, err: fetched };
            }
            const status = fetched.status;
            // No body responses (204 No Content, 304 Not Modified) and explicit
            // zero content-length must skip JSON parsing — fetched.json() would
            // throw `Unexpected end of JSON input` on an empty body.
            const headers = fetched.headers;
            const contentLength = headers && 'function' === typeof headers.get
                ? headers.get('content-length')
                : (headers || {})['content-length'];
            const noBody = 204 === status || 304 === status || '0' === String(contentLength);
            let json = undefined;
            if (!noBody) {
                try {
                    json = 'function' === typeof fetched.json ? await fetched.json() : fetched.json;
                }
                catch (parseErr) {
                    // Body wasn't valid JSON — surface the raw response rather than
                    // throwing. data stays undefined; callers can inspect status/headers.
                    json = undefined;
                }
            }
            return {
                ok: status >= 200 && status < 300,
                status,
                headers: fetched.headers,
                data: json,
            };
        }
        catch (err) {
            return { ok: false, err };
        }
    }
    async graphql(query, variables, ctrl) {
        const options = this._options;
        if (!options.allow.op.includes('graphql')) {
            return {
                ok: false,
                err: new Error('CloudflareWorkersSDK: graphql: operation not allowed by' +
                    ' SDK option allow.op value: "' + options.allow.op + '"'),
            };
        }
        const res = await this._rawRequest({
            method: 'POST',
            headers: { 'content-type': 'application/json' },
            body: { query, variables: variables || {} },
            ctrl,
        });
        if (res instanceof Error) {
            return res;
        }
        // Errors are read BEFORE any status check: a GraphQL parse or validation
        // failure comes back as HTTP 400 carrying the standard { errors: [...] }
        // body, and the raw path represents a non-2xx as { ok: false } with no
        // err — so returning early on status would discard the server's own
        // diagnostics, which are the only useful part of that response.
        const errors = null == res.data ? undefined : res.data.errors;
        if (null != errors && Array.isArray(errors) && 0 < errors.length) {
            const first = errors[0] || {};
            const err = new Error('CloudflareWorkersSDK: graphql: ' +
                (first.message || 'graphql error'));
            err.graphql = errors;
            return { ok: false, status: res.status, headers: res.headers, err, data: res.data };
        }
        return res;
    }
    // Entity access: `client.Account().list()` / `client.Account().load({ id })`.
    // The argument is the entity OPTIONS object (passed to the entity
    // constructor as entopts), not initial entity data.
    Account(entopts) {
        const self = this;
        return new AccountEntity_1.AccountEntity(self, entopts);
    }
    // Entity access: `client.Application().list()` / `client.Application().load({ id })`.
    // The argument is the entity OPTIONS object (passed to the entity
    // constructor as entopts), not initial entity data.
    Application(entopts) {
        const self = this;
        return new ApplicationEntity_1.ApplicationEntity(self, entopts);
    }
    // Entity access: `client.Brapi().list()` / `client.Brapi().load({ id })`.
    // The argument is the entity OPTIONS object (passed to the entity
    // constructor as entopts), not initial entity data.
    Brapi(entopts) {
        const self = this;
        return new BrapiEntity_1.BrapiEntity(self, entopts);
    }
    // Entity access: `client.Build().list()` / `client.Build().load({ id })`.
    // The argument is the entity OPTIONS object (passed to the entity
    // constructor as entopts), not initial entity data.
    Build(entopts) {
        const self = this;
        return new BuildEntity_1.BuildEntity(self, entopts);
    }
    // Entity access: `client.BuildToken().list()` / `client.BuildToken().load({ id })`.
    // The argument is the entity OPTIONS object (passed to the entity
    // constructor as entopts), not initial entity data.
    BuildToken(entopts) {
        const self = this;
        return new BuildTokenEntity_1.BuildTokenEntity(self, entopts);
    }
    // Entity access: `client.BuildsApi().list()` / `client.BuildsApi().load({ id })`.
    // The argument is the entity OPTIONS object (passed to the entity
    // constructor as entopts), not initial entity data.
    BuildsApi(entopts) {
        const self = this;
        return new BuildsApiEntity_1.BuildsApiEntity(self, entopts);
    }
    // Entity access: `client.Connection().list()` / `client.Connection().load({ id })`.
    // The argument is the entity OPTIONS object (passed to the entity
    // constructor as entopts), not initial entity data.
    Connection(entopts) {
        const self = this;
        return new ConnectionEntity_1.ConnectionEntity(self, entopts);
    }
    // Entity access: `client.ContainerImage().list()` / `client.ContainerImage().load({ id })`.
    // The argument is the entity OPTIONS object (passed to the entity
    // constructor as entopts), not initial entity data.
    ContainerImage(entopts) {
        const self = this;
        return new ContainerImageEntity_1.ContainerImageEntity(self, entopts);
    }
    // Entity access: `client.ContainerInstance().list()` / `client.ContainerInstance().load({ id })`.
    // The argument is the entity OPTIONS object (passed to the entity
    // constructor as entopts), not initial entity data.
    ContainerInstance(entopts) {
        const self = this;
        return new ContainerInstanceEntity_1.ContainerInstanceEntity(self, entopts);
    }
    // Entity access: `client.DeployHook().list()` / `client.DeployHook().load({ id })`.
    // The argument is the entity OPTIONS object (passed to the entity
    // constructor as entopts), not initial entity data.
    DeployHook(entopts) {
        const self = this;
        return new DeployHookEntity_1.DeployHookEntity(self, entopts);
    }
    // Entity access: `client.Deployment().list()` / `client.Deployment().load({ id })`.
    // The argument is the entity OPTIONS object (passed to the entity
    // constructor as entopts), not initial entity data.
    Deployment(entopts) {
        const self = this;
        return new DeploymentEntity_1.DeploymentEntity(self, entopts);
    }
    // Entity access: `client.Destination().list()` / `client.Destination().load({ id })`.
    // The argument is the entity OPTIONS object (passed to the entity
    // constructor as entopts), not initial entity data.
    Destination(entopts) {
        const self = this;
        return new DestinationEntity_1.DestinationEntity(self, entopts);
    }
    // Entity access: `client.Domain().list()` / `client.Domain().load({ id })`.
    // The argument is the entity OPTIONS object (passed to the entity
    // constructor as entopts), not initial entity data.
    Domain(entopts) {
        const self = this;
        return new DomainEntity_1.DomainEntity(self, entopts);
    }
    // Entity access: `client.DurableObjectsNamespace().list()` / `client.DurableObjectsNamespace().load({ id })`.
    // The argument is the entity OPTIONS object (passed to the entity
    // constructor as entopts), not initial entity data.
    DurableObjectsNamespace(entopts) {
        const self = this;
        return new DurableObjectsNamespaceEntity_1.DurableObjectsNamespaceEntity(self, entopts);
    }
    // Entity access: `client.EnvironmentVariable().list()` / `client.EnvironmentVariable().load({ id })`.
    // The argument is the entity OPTIONS object (passed to the entity
    // constructor as entopts), not initial entity data.
    EnvironmentVariable(entopts) {
        const self = this;
        return new EnvironmentVariableEntity_1.EnvironmentVariableEntity(self, entopts);
    }
    // Entity access: `client.GitHubIntegration().list()` / `client.GitHubIntegration().load({ id })`.
    // The argument is the entity OPTIONS object (passed to the entity
    // constructor as entopts), not initial entity data.
    GitHubIntegration(entopts) {
        const self = this;
        return new GitHubIntegrationEntity_1.GitHubIntegrationEntity(self, entopts);
    }
    // Entity access: `client.Hyperdrive().list()` / `client.Hyperdrive().load({ id })`.
    // The argument is the entity OPTIONS object (passed to the entity
    // constructor as entopts), not initial entity data.
    Hyperdrive(entopts) {
        const self = this;
        return new HyperdriveEntity_1.HyperdriveEntity(self, entopts);
    }
    // Entity access: `client.ImageRegistry().list()` / `client.ImageRegistry().load({ id })`.
    // The argument is the entity OPTIONS object (passed to the entity
    // constructor as entopts), not initial entity data.
    ImageRegistry(entopts) {
        const self = this;
        return new ImageRegistryEntity_1.ImageRegistryEntity(self, entopts);
    }
    // Entity access: `client.Issue().list()` / `client.Issue().load({ id })`.
    // The argument is the entity OPTIONS object (passed to the entity
    // constructor as entopts), not initial entity data.
    Issue(entopts) {
        const self = this;
        return new IssueEntity_1.IssueEntity(self, entopts);
    }
    // Entity access: `client.Key().list()` / `client.Key().load({ id })`.
    // The argument is the entity OPTIONS object (passed to the entity
    // constructor as entopts), not initial entity data.
    Key(entopts) {
        const self = this;
        return new KeyEntity_1.KeyEntity(self, entopts);
    }
    // Entity access: `client.LiveTail().list()` / `client.LiveTail().load({ id })`.
    // The argument is the entity OPTIONS object (passed to the entity
    // constructor as entopts), not initial entity data.
    LiveTail(entopts) {
        const self = this;
        return new LiveTailEntity_1.LiveTailEntity(self, entopts);
    }
    // Entity access: `client.MetricsExport().list()` / `client.MetricsExport().load({ id })`.
    // The argument is the entity OPTIONS object (passed to the entity
    // constructor as entopts), not initial entity data.
    MetricsExport(entopts) {
        const self = this;
        return new MetricsExportEntity_1.MetricsExportEntity(self, entopts);
    }
    // Entity access: `client.Namespace().list()` / `client.Namespace().load({ id })`.
    // The argument is the entity OPTIONS object (passed to the entity
    // constructor as entopts), not initial entity data.
    Namespace(entopts) {
        const self = this;
        return new NamespaceEntity_1.NamespaceEntity(self, entopts);
    }
    // Entity access: `client.Preview().list()` / `client.Preview().load({ id })`.
    // The argument is the entity OPTIONS object (passed to the entity
    // constructor as entopts), not initial entity data.
    Preview(entopts) {
        const self = this;
        return new PreviewEntity_1.PreviewEntity(self, entopts);
    }
    // Entity access: `client.PreviewDeployment().list()` / `client.PreviewDeployment().load({ id })`.
    // The argument is the entity OPTIONS object (passed to the entity
    // constructor as entopts), not initial entity data.
    PreviewDeployment(entopts) {
        const self = this;
        return new PreviewDeploymentEntity_1.PreviewDeploymentEntity(self, entopts);
    }
    // Entity access: `client.Query().list()` / `client.Query().load({ id })`.
    // The argument is the entity OPTIONS object (passed to the entity
    // constructor as entopts), not initial entity data.
    Query(entopts) {
        const self = this;
        return new QueryEntity_1.QueryEntity(self, entopts);
    }
    // Entity access: `client.RepositoryConnection().list()` / `client.RepositoryConnection().load({ id })`.
    // The argument is the entity OPTIONS object (passed to the entity
    // constructor as entopts), not initial entity data.
    RepositoryConnection(entopts) {
        const self = this;
        return new RepositoryConnectionEntity_1.RepositoryConnectionEntity(self, entopts);
    }
    // Entity access: `client.Rollout().list()` / `client.Rollout().load({ id })`.
    // The argument is the entity OPTIONS object (passed to the entity
    // constructor as entopts), not initial entity data.
    Rollout(entopts) {
        const self = this;
        return new RolloutEntity_1.RolloutEntity(self, entopts);
    }
    // Entity access: `client.SavedQuery().list()` / `client.SavedQuery().load({ id })`.
    // The argument is the entity OPTIONS object (passed to the entity
    // constructor as entopts), not initial entity data.
    SavedQuery(entopts) {
        const self = this;
        return new SavedQueryEntity_1.SavedQueryEntity(self, entopts);
    }
    // Entity access: `client.Script().list()` / `client.Script().load({ id })`.
    // The argument is the entity OPTIONS object (passed to the entity
    // constructor as entopts), not initial entity data.
    Script(entopts) {
        const self = this;
        return new ScriptEntity_1.ScriptEntity(self, entopts);
    }
    // Entity access: `client.ScriptSetting().list()` / `client.ScriptSetting().load({ id })`.
    // The argument is the entity OPTIONS object (passed to the entity
    // constructor as entopts), not initial entity data.
    ScriptSetting(entopts) {
        const self = this;
        return new ScriptSettingEntity_1.ScriptSettingEntity(self, entopts);
    }
    // Entity access: `client.Secret().list()` / `client.Secret().load({ id })`.
    // The argument is the entity OPTIONS object (passed to the entity
    // constructor as entopts), not initial entity data.
    Secret(entopts) {
        const self = this;
        return new SecretEntity_1.SecretEntity(self, entopts);
    }
    // Entity access: `client.SecretsStoreDelete().list()` / `client.SecretsStoreDelete().load({ id })`.
    // The argument is the entity OPTIONS object (passed to the entity
    // constructor as entopts), not initial entity data.
    SecretsStoreDelete(entopts) {
        const self = this;
        return new SecretsStoreDeleteEntity_1.SecretsStoreDeleteEntity(self, entopts);
    }
    // Entity access: `client.SecretsStoreQuota().list()` / `client.SecretsStoreQuota().load({ id })`.
    // The argument is the entity OPTIONS object (passed to the entity
    // constructor as entopts), not initial entity data.
    SecretsStoreQuota(entopts) {
        const self = this;
        return new SecretsStoreQuotaEntity_1.SecretsStoreQuotaEntity(self, entopts);
    }
    // Entity access: `client.SecretsStoreSecret().list()` / `client.SecretsStoreSecret().load({ id })`.
    // The argument is the entity OPTIONS object (passed to the entity
    // constructor as entopts), not initial entity data.
    SecretsStoreSecret(entopts) {
        const self = this;
        return new SecretsStoreSecretEntity_1.SecretsStoreSecretEntity(self, entopts);
    }
    // Entity access: `client.SecretsStoreStore().list()` / `client.SecretsStoreStore().load({ id })`.
    // The argument is the entity OPTIONS object (passed to the entity
    // constructor as entopts), not initial entity data.
    SecretsStoreStore(entopts) {
        const self = this;
        return new SecretsStoreStoreEntity_1.SecretsStoreStoreEntity(self, entopts);
    }
    // Entity access: `client.SecretsStoreStoresResponseCollection().list()` / `client.SecretsStoreStoresResponseCollection().load({ id })`.
    // The argument is the entity OPTIONS object (passed to the entity
    // constructor as entopts), not initial entity data.
    SecretsStoreStoresResponseCollection(entopts) {
        const self = this;
        return new SecretsStoreStoresResponseCollectionEntity_1.SecretsStoreStoresResponseCollectionEntity(self, entopts);
    }
    // Entity access: `client.Setting().list()` / `client.Setting().load({ id })`.
    // The argument is the entity OPTIONS object (passed to the entity
    // constructor as entopts), not initial entity data.
    Setting(entopts) {
        const self = this;
        return new SettingEntity_1.SettingEntity(self, entopts);
    }
    // Entity access: `client.Shared().list()` / `client.Shared().load({ id })`.
    // The argument is the entity OPTIONS object (passed to the entity
    // constructor as entopts), not initial entity data.
    Shared(entopts) {
        const self = this;
        return new SharedEntity_1.SharedEntity(self, entopts);
    }
    // Entity access: `client.Tail().list()` / `client.Tail().load({ id })`.
    // The argument is the entity OPTIONS object (passed to the entity
    // constructor as entopts), not initial entity data.
    Tail(entopts) {
        const self = this;
        return new TailEntity_1.TailEntity(self, entopts);
    }
    // Entity access: `client.Token().list()` / `client.Token().load({ id })`.
    // The argument is the entity OPTIONS object (passed to the entity
    // constructor as entopts), not initial entity data.
    Token(entopts) {
        const self = this;
        return new TokenEntity_1.TokenEntity(self, entopts);
    }
    // Entity access: `client.Trigger().list()` / `client.Trigger().load({ id })`.
    // The argument is the entity OPTIONS object (passed to the entity
    // constructor as entopts), not initial entity data.
    Trigger(entopts) {
        const self = this;
        return new TriggerEntity_1.TriggerEntity(self, entopts);
    }
    // Entity access: `client.Usage().list()` / `client.Usage().load({ id })`.
    // The argument is the entity OPTIONS object (passed to the entity
    // constructor as entopts), not initial entity data.
    Usage(entopts) {
        const self = this;
        return new UsageEntity_1.UsageEntity(self, entopts);
    }
    // Entity access: `client.Value().list()` / `client.Value().load({ id })`.
    // The argument is the entity OPTIONS object (passed to the entity
    // constructor as entopts), not initial entity data.
    Value(entopts) {
        const self = this;
        return new ValueEntity_1.ValueEntity(self, entopts);
    }
    // Entity access: `client.Version().list()` / `client.Version().load({ id })`.
    // The argument is the entity OPTIONS object (passed to the entity
    // constructor as entopts), not initial entity data.
    Version(entopts) {
        const self = this;
        return new VersionEntity_1.VersionEntity(self, entopts);
    }
    // Entity access: `client.Worker().list()` / `client.Worker().load({ id })`.
    // The argument is the entity OPTIONS object (passed to the entity
    // constructor as entopts), not initial entity data.
    Worker(entopts) {
        const self = this;
        return new WorkerEntity_1.WorkerEntity(self, entopts);
    }
    // Entity access: `client.WorkerCronTrigger().list()` / `client.WorkerCronTrigger().load({ id })`.
    // The argument is the entity OPTIONS object (passed to the entity
    // constructor as entopts), not initial entity data.
    WorkerCronTrigger(entopts) {
        const self = this;
        return new WorkerCronTriggerEntity_1.WorkerCronTriggerEntity(self, entopts);
    }
    // Entity access: `client.WorkerDeployment().list()` / `client.WorkerDeployment().load({ id })`.
    // The argument is the entity OPTIONS object (passed to the entity
    // constructor as entopts), not initial entity data.
    WorkerDeployment(entopts) {
        const self = this;
        return new WorkerDeploymentEntity_1.WorkerDeploymentEntity(self, entopts);
    }
    // Entity access: `client.WorkerEnvironment().list()` / `client.WorkerEnvironment().load({ id })`.
    // The argument is the entity OPTIONS object (passed to the entity
    // constructor as entopts), not initial entity data.
    WorkerEnvironment(entopts) {
        const self = this;
        return new WorkerEnvironmentEntity_1.WorkerEnvironmentEntity(self, entopts);
    }
    // Entity access: `client.WorkerRoute().list()` / `client.WorkerRoute().load({ id })`.
    // The argument is the entity OPTIONS object (passed to the entity
    // constructor as entopts), not initial entity data.
    WorkerRoute(entopts) {
        const self = this;
        return new WorkerRouteEntity_1.WorkerRouteEntity(self, entopts);
    }
    // Entity access: `client.WorkerScript().list()` / `client.WorkerScript().load({ id })`.
    // The argument is the entity OPTIONS object (passed to the entity
    // constructor as entopts), not initial entity data.
    WorkerScript(entopts) {
        const self = this;
        return new WorkerScriptEntity_1.WorkerScriptEntity(self, entopts);
    }
    // Entity access: `client.WorkerSubdomain().list()` / `client.WorkerSubdomain().load({ id })`.
    // The argument is the entity OPTIONS object (passed to the entity
    // constructor as entopts), not initial entity data.
    WorkerSubdomain(entopts) {
        const self = this;
        return new WorkerSubdomainEntity_1.WorkerSubdomainEntity(self, entopts);
    }
    // Entity access: `client.WorkerTailLog().list()` / `client.WorkerTailLog().load({ id })`.
    // The argument is the entity OPTIONS object (passed to the entity
    // constructor as entopts), not initial entity data.
    WorkerTailLog(entopts) {
        const self = this;
        return new WorkerTailLogEntity_1.WorkerTailLogEntity(self, entopts);
    }
    // Entity access: `client.WorkersAccountSetting().list()` / `client.WorkersAccountSetting().load({ id })`.
    // The argument is the entity OPTIONS object (passed to the entity
    // constructor as entopts), not initial entity data.
    WorkersAccountSetting(entopts) {
        const self = this;
        return new WorkersAccountSettingEntity_1.WorkersAccountSettingEntity(self, entopts);
    }
    // Entity access: `client.WorkersApiResponseNullResult().list()` / `client.WorkersApiResponseNullResult().load({ id })`.
    // The argument is the entity OPTIONS object (passed to the entity
    // constructor as entopts), not initial entity data.
    WorkersApiResponseNullResult(entopts) {
        const self = this;
        return new WorkersApiResponseNullResultEntity_1.WorkersApiResponseNullResultEntity(self, entopts);
    }
    // Entity access: `client.WorkersCompletedUploadAsset().list()` / `client.WorkersCompletedUploadAsset().load({ id })`.
    // The argument is the entity OPTIONS object (passed to the entity
    // constructor as entopts), not initial entity data.
    WorkersCompletedUploadAsset(entopts) {
        const self = this;
        return new WorkersCompletedUploadAssetEntity_1.WorkersCompletedUploadAssetEntity(self, entopts);
    }
    // Entity access: `client.WorkersCreateAssetsUploadSession().list()` / `client.WorkersCreateAssetsUploadSession().load({ id })`.
    // The argument is the entity OPTIONS object (passed to the entity
    // constructor as entopts), not initial entity data.
    WorkersCreateAssetsUploadSession(entopts) {
        const self = this;
        return new WorkersCreateAssetsUploadSessionEntity_1.WorkersCreateAssetsUploadSessionEntity(self, entopts);
    }
    // Entity access: `client.WorkersForPlatform().list()` / `client.WorkersForPlatform().load({ id })`.
    // The argument is the entity OPTIONS object (passed to the entity
    // constructor as entopts), not initial entity data.
    WorkersForPlatform(entopts) {
        const self = this;
        return new WorkersForPlatformEntity_1.WorkersForPlatformEntity(self, entopts);
    }
    // Entity access: `client.WorkersKvApiResponseCommonNoResult().list()` / `client.WorkersKvApiResponseCommonNoResult().load({ id })`.
    // The argument is the entity OPTIONS object (passed to the entity
    // constructor as entopts), not initial entity data.
    WorkersKvApiResponseCommonNoResult(entopts) {
        const self = this;
        return new WorkersKvApiResponseCommonNoResultEntity_1.WorkersKvApiResponseCommonNoResultEntity(self, entopts);
    }
    // Entity access: `client.WorkersKvNamespace().list()` / `client.WorkersKvNamespace().load({ id })`.
    // The argument is the entity OPTIONS object (passed to the entity
    // constructor as entopts), not initial entity data.
    WorkersKvNamespace(entopts) {
        const self = this;
        return new WorkersKvNamespaceEntity_1.WorkersKvNamespaceEntity(self, entopts);
    }
    // Entity access: `client.WorkersNamespaceList().list()` / `client.WorkersNamespaceList().load({ id })`.
    // The argument is the entity OPTIONS object (passed to the entity
    // constructor as entopts), not initial entity data.
    WorkersNamespaceList(entopts) {
        const self = this;
        return new WorkersNamespaceListEntity_1.WorkersNamespaceListEntity(self, entopts);
    }
    // Entity access: `client.WorkersNamespaceScriptDeleteBulk().list()` / `client.WorkersNamespaceScriptDeleteBulk().load({ id })`.
    // The argument is the entity OPTIONS object (passed to the entity
    // constructor as entopts), not initial entity data.
    WorkersNamespaceScriptDeleteBulk(entopts) {
        const self = this;
        return new WorkersNamespaceScriptDeleteBulkEntity_1.WorkersNamespaceScriptDeleteBulkEntity(self, entopts);
    }
    // Entity access: `client.WorkersNamespaceScriptResponseSingle().list()` / `client.WorkersNamespaceScriptResponseSingle().load({ id })`.
    // The argument is the entity OPTIONS object (passed to the entity
    // constructor as entopts), not initial entity data.
    WorkersNamespaceScriptResponseSingle(entopts) {
        const self = this;
        return new WorkersNamespaceScriptResponseSingleEntity_1.WorkersNamespaceScriptResponseSingleEntity(self, entopts);
    }
    // Entity access: `client.WorkersNamespaceSingle().list()` / `client.WorkersNamespaceSingle().load({ id })`.
    // The argument is the entity OPTIONS object (passed to the entity
    // constructor as entopts), not initial entity data.
    WorkersNamespaceSingle(entopts) {
        const self = this;
        return new WorkersNamespaceSingleEntity_1.WorkersNamespaceSingleEntity(self, entopts);
    }
    // Entity access: `client.WorkersPipelinesOther().list()` / `client.WorkersPipelinesOther().load({ id })`.
    // The argument is the entity OPTIONS object (passed to the entity
    // constructor as entopts), not initial entity data.
    WorkersPipelinesOther(entopts) {
        const self = this;
        return new WorkersPipelinesOtherEntity_1.WorkersPipelinesOtherEntity(self, entopts);
    }
    // Entity access: `client.WorkersScriptAndVersionSetting().list()` / `client.WorkersScriptAndVersionSetting().load({ id })`.
    // The argument is the entity OPTIONS object (passed to the entity
    // constructor as entopts), not initial entity data.
    WorkersScriptAndVersionSetting(entopts) {
        const self = this;
        return new WorkersScriptAndVersionSettingEntity_1.WorkersScriptAndVersionSettingEntity(self, entopts);
    }
    // Entity access: `client.WorkersScriptResponseCollection().list()` / `client.WorkersScriptResponseCollection().load({ id })`.
    // The argument is the entity OPTIONS object (passed to the entity
    // constructor as entopts), not initial entity data.
    WorkersScriptResponseCollection(entopts) {
        const self = this;
        return new WorkersScriptResponseCollectionEntity_1.WorkersScriptResponseCollectionEntity(self, entopts);
    }
    // Entity access: `client.WorkersScriptResponseSingle().list()` / `client.WorkersScriptResponseSingle().load({ id })`.
    // The argument is the entity OPTIONS object (passed to the entity
    // constructor as entopts), not initial entity data.
    WorkersScriptResponseSingle(entopts) {
        const self = this;
        return new WorkersScriptResponseSingleEntity_1.WorkersScriptResponseSingleEntity(self, entopts);
    }
    // Entity access: `client.WorkersSmartPlacement().list()` / `client.WorkersSmartPlacement().load({ id })`.
    // The argument is the entity OPTIONS object (passed to the entity
    // constructor as entopts), not initial entity data.
    WorkersSmartPlacement(entopts) {
        const self = this;
        return new WorkersSmartPlacementEntity_1.WorkersSmartPlacementEntity(self, entopts);
    }
    // Entity access: `client.WorkersUsageModel().list()` / `client.WorkersUsageModel().load({ id })`.
    // The argument is the entity OPTIONS object (passed to the entity
    // constructor as entopts), not initial entity data.
    WorkersUsageModel(entopts) {
        const self = this;
        return new WorkersUsageModelEntity_1.WorkersUsageModelEntity(self, entopts);
    }
    // Entity access: `client.WorkersVersionsList().list()` / `client.WorkersVersionsList().load({ id })`.
    // The argument is the entity OPTIONS object (passed to the entity
    // constructor as entopts), not initial entity data.
    WorkersVersionsList(entopts) {
        const self = this;
        return new WorkersVersionsListEntity_1.WorkersVersionsListEntity(self, entopts);
    }
    // Entity access: `client.WorkersVersionsSingle().list()` / `client.WorkersVersionsSingle().load({ id })`.
    // The argument is the entity OPTIONS object (passed to the entity
    // constructor as entopts), not initial entity data.
    WorkersVersionsSingle(entopts) {
        const self = this;
        return new WorkersVersionsSingleEntity_1.WorkersVersionsSingleEntity(self, entopts);
    }
    // Entity access: `client.WorkersVersionsUpload().list()` / `client.WorkersVersionsUpload().load({ id })`.
    // The argument is the entity OPTIONS object (passed to the entity
    // constructor as entopts), not initial entity data.
    WorkersVersionsUpload(entopts) {
        const self = this;
        return new WorkersVersionsUploadEntity_1.WorkersVersionsUploadEntity(self, entopts);
    }
    // Entity access: `client.Workflow().list()` / `client.Workflow().load({ id })`.
    // The argument is the entity OPTIONS object (passed to the entity
    // constructor as entopts), not initial entity data.
    Workflow(entopts) {
        const self = this;
        return new WorkflowEntity_1.WorkflowEntity(self, entopts);
    }
    static test(testoptsarg, sdkoptsarg) {
        const struct = stdutil.struct;
        const setpath = struct.setpath;
        const getdef = struct.getdef;
        const clone = struct.clone;
        const setprop = struct.setprop;
        const sdkopts = getdef(clone(sdkoptsarg), {});
        const testopts = getdef(clone(testoptsarg), {});
        setprop(testopts, 'active', true);
        setpath(sdkopts, 'feature.test', testopts);
        const testsdk = new CloudflareWorkersSDK(sdkopts);
        testsdk._mode = 'test';
        return testsdk;
    }
    tester(testopts, sdkopts) {
        return CloudflareWorkersSDK.test(testopts, sdkopts);
    }
    toJSON() {
        return { name: 'CloudflareWorkers' };
    }
    toString() {
        return 'CloudflareWorkers ' + this._utility.struct.jsonify(this.toJSON());
    }
    [node_util_1.inspect.custom]() {
        return this.toString();
    }
}
exports.CloudflareWorkersSDK = CloudflareWorkersSDK;
const SDK = CloudflareWorkersSDK;
exports.SDK = SDK;
//# sourceMappingURL=CloudflareWorkersSDK.js.map