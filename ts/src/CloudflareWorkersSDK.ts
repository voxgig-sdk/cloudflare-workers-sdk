// CloudflareWorkers Ts SDK

import { AccountEntity } from './entity/AccountEntity'
import { ApplicationEntity } from './entity/ApplicationEntity'
import { BrapiEntity } from './entity/BrapiEntity'
import { BuildEntity } from './entity/BuildEntity'
import { BuildTokenEntity } from './entity/BuildTokenEntity'
import { BuildsApiEntity } from './entity/BuildsApiEntity'
import { ConnectionEntity } from './entity/ConnectionEntity'
import { ContainerImageEntity } from './entity/ContainerImageEntity'
import { ContainerInstanceEntity } from './entity/ContainerInstanceEntity'
import { DeployHookEntity } from './entity/DeployHookEntity'
import { DeploymentEntity } from './entity/DeploymentEntity'
import { DestinationEntity } from './entity/DestinationEntity'
import { DomainEntity } from './entity/DomainEntity'
import { DurableObjectsNamespaceEntity } from './entity/DurableObjectsNamespaceEntity'
import { EnvironmentVariableEntity } from './entity/EnvironmentVariableEntity'
import { GitHubIntegrationEntity } from './entity/GitHubIntegrationEntity'
import { HyperdriveEntity } from './entity/HyperdriveEntity'
import { ImageRegistryEntity } from './entity/ImageRegistryEntity'
import { IssueEntity } from './entity/IssueEntity'
import { KeyEntity } from './entity/KeyEntity'
import { LiveTailEntity } from './entity/LiveTailEntity'
import { MetricsExportEntity } from './entity/MetricsExportEntity'
import { NamespaceEntity } from './entity/NamespaceEntity'
import { PreviewEntity } from './entity/PreviewEntity'
import { PreviewDeploymentEntity } from './entity/PreviewDeploymentEntity'
import { QueryEntity } from './entity/QueryEntity'
import { RepositoryConnectionEntity } from './entity/RepositoryConnectionEntity'
import { RolloutEntity } from './entity/RolloutEntity'
import { SavedQueryEntity } from './entity/SavedQueryEntity'
import { ScriptEntity } from './entity/ScriptEntity'
import { ScriptSettingEntity } from './entity/ScriptSettingEntity'
import { SecretEntity } from './entity/SecretEntity'
import { SecretsStoreDeleteEntity } from './entity/SecretsStoreDeleteEntity'
import { SecretsStoreQuotaEntity } from './entity/SecretsStoreQuotaEntity'
import { SecretsStoreSecretEntity } from './entity/SecretsStoreSecretEntity'
import { SecretsStoreStoreEntity } from './entity/SecretsStoreStoreEntity'
import { SecretsStoreStoresResponseCollectionEntity } from './entity/SecretsStoreStoresResponseCollectionEntity'
import { SettingEntity } from './entity/SettingEntity'
import { SharedEntity } from './entity/SharedEntity'
import { TailEntity } from './entity/TailEntity'
import { TokenEntity } from './entity/TokenEntity'
import { TriggerEntity } from './entity/TriggerEntity'
import { UsageEntity } from './entity/UsageEntity'
import { ValueEntity } from './entity/ValueEntity'
import { VersionEntity } from './entity/VersionEntity'
import { WorkerEntity } from './entity/WorkerEntity'
import { WorkerCronTriggerEntity } from './entity/WorkerCronTriggerEntity'
import { WorkerDeploymentEntity } from './entity/WorkerDeploymentEntity'
import { WorkerEnvironmentEntity } from './entity/WorkerEnvironmentEntity'
import { WorkerRouteEntity } from './entity/WorkerRouteEntity'
import { WorkerScriptEntity } from './entity/WorkerScriptEntity'
import { WorkerSubdomainEntity } from './entity/WorkerSubdomainEntity'
import { WorkerTailLogEntity } from './entity/WorkerTailLogEntity'
import { WorkersAccountSettingEntity } from './entity/WorkersAccountSettingEntity'
import { WorkersApiResponseNullResultEntity } from './entity/WorkersApiResponseNullResultEntity'
import { WorkersCompletedUploadAssetEntity } from './entity/WorkersCompletedUploadAssetEntity'
import { WorkersCreateAssetsUploadSessionEntity } from './entity/WorkersCreateAssetsUploadSessionEntity'
import { WorkersForPlatformEntity } from './entity/WorkersForPlatformEntity'
import { WorkersKvApiResponseCommonNoResultEntity } from './entity/WorkersKvApiResponseCommonNoResultEntity'
import { WorkersKvNamespaceEntity } from './entity/WorkersKvNamespaceEntity'
import { WorkersNamespaceListEntity } from './entity/WorkersNamespaceListEntity'
import { WorkersNamespaceScriptDeleteBulkEntity } from './entity/WorkersNamespaceScriptDeleteBulkEntity'
import { WorkersNamespaceScriptResponseSingleEntity } from './entity/WorkersNamespaceScriptResponseSingleEntity'
import { WorkersNamespaceSingleEntity } from './entity/WorkersNamespaceSingleEntity'
import { WorkersPipelinesOtherEntity } from './entity/WorkersPipelinesOtherEntity'
import { WorkersScriptAndVersionSettingEntity } from './entity/WorkersScriptAndVersionSettingEntity'
import { WorkersScriptResponseCollectionEntity } from './entity/WorkersScriptResponseCollectionEntity'
import { WorkersScriptResponseSingleEntity } from './entity/WorkersScriptResponseSingleEntity'
import { WorkersSmartPlacementEntity } from './entity/WorkersSmartPlacementEntity'
import { WorkersUsageModelEntity } from './entity/WorkersUsageModelEntity'
import { WorkersVersionsListEntity } from './entity/WorkersVersionsListEntity'
import { WorkersVersionsSingleEntity } from './entity/WorkersVersionsSingleEntity'
import { WorkersVersionsUploadEntity } from './entity/WorkersVersionsUploadEntity'
import { WorkflowEntity } from './entity/WorkflowEntity'

export type * from './CloudflareWorkersTypes'


import { inspect } from 'node:util'

import type { Context, Feature } from './types'

import { config } from './Config'
import { CloudflareWorkersEntityBase } from './CloudflareWorkersEntityBase'
import { Utility } from './utility/Utility'


import { BaseFeature } from './feature/base/BaseFeature'



const stdutil = new Utility()


class CloudflareWorkersSDK {
  _mode: string = 'live'
  _options: any
  _utility = new Utility()
  _features: Feature[]
  _rootctx: Context
  

  constructor(options?: any) {

    this._rootctx = this._utility.makeContext({
      client: this,
      utility: this._utility,
      config,
      options,
      shared: new WeakMap()
    })

    this._options = this._utility.makeOptions(this._rootctx)

    const struct = this._utility.struct
    const getpath = struct.getpath

    if (true === getpath(this._options.feature, 'test.active')) {
      this._mode = 'test'
    }

    this._rootctx.options = this._options

    this._features = []

    const featureAdd = this._utility.featureAdd
    const featureInit = this._utility.featureInit

    // Add features in the resolved order (makeOptions puts an explicit
    // array order first, else defaults to test-first). Ordering matters:
    // the `test` feature installs the base mock transport and the transport
    // features (retry/cache/netsim/proxy/ratelimit) wrap whatever is current,
    // so `test` must be added before them to sit at the base of the chain.
    const extend = this._options.extend || []

    const featureorder = getpath(this._options, '__derived__.featureorder') || []
    for (const fname of featureorder) {
      const fopts = this._options.feature[fname] || {}
      if (fopts.active) {
        // An active name with no generated class is legal when an
        // extend-supplied instance carries that name (station's adopt
        // path): the instance is added below, positioned by its own
        // __after__ entry, so skip it here rather than fail construction.
        if (!this._rootctx.config.hasFeature(fname) &&
          extend.some((f: any) => fname === f.name)) {
          continue
        }
        featureAdd(this._rootctx, this._rootctx.config.makeFeature(fname))
      }
    }

    for (let f of extend) {
      featureAdd(this._rootctx, f)
    }

    for (let f of this._features) {
      featureInit(this._rootctx, f)
    }

    const featureHook = this._utility.featureHook
    featureHook(this._rootctx, 'PostConstruct')
  }


  options() {
    return this._utility.struct.clone(this._options)
  }


  utility() {
    return this._utility.struct.clone(this._utility)
  }

  


  async prepare(fetchargs?: any) {
    const utility = this._utility
    const struct = utility.struct
    const clone = struct.clone

    const {
      makeContext,
      makeFetchDef,
      prepareHeaders,
      prepareAuth,
    } = utility

    fetchargs = fetchargs || {}

    let ctx: Context = makeContext({
      opname: 'prepare',
      ctrl: fetchargs.ctrl || {},
    }, this._rootctx)

    const options = this._options

    const spec: any = {
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
    }

    ctx.spec = spec

    if (fetchargs.headers) {
      const uheaders = fetchargs.headers
      for (let key in uheaders) {
        spec.headers[key] = uheaders[key]
      }
    }

    

    const authResult = prepareAuth(ctx)
    if (authResult instanceof Error) {
      return authResult
    }

    return makeFetchDef(ctx)
  }


  // Raw endpoint access is operator-controllable, like every entity op.
  // Blocking it means denying BOTH the 'direct' and 'graphql' tokens, since
  // either one reaches the same endpoint.
  async direct(fetchargs?: any) {
    if (!this._options.allow.op.includes('direct')) {
      return {
        ok: false,
        err: new Error('CloudflareWorkersSDK: direct: operation not allowed by' +
          ' SDK option allow.op value: "' + this._options.allow.op + '"'),
      }
    }

    return this._rawRequest(fetchargs)
  }


  // Ungated request path shared by direct() and graphql(), each of which
  // checks its own allow.op token first. Private, rather than a flag on
  // fetchargs: a caller-supplied marker would let anyone opt straight back
  // out of the gate by passing it.
  async _rawRequest(fetchargs?: any) {
    const utility = this._utility

    const fetcher = utility.fetcher
    const makeContext = utility.makeContext

    const fetchdef = await this.prepare(fetchargs)
    if (fetchdef instanceof Error) {
      return fetchdef
    }

    let ctx: Context = makeContext({
      opname: 'direct',
      ctrl: (fetchargs || {}).ctrl || {},
    }, this._rootctx)

    try {
      const fetched = await fetcher(ctx, fetchdef.url, fetchdef)

      if (null == fetched) {
        return { ok: false, err: ctx.error('direct_no_response', 'response: undefined') }
      }
      else if (fetched instanceof Error) {
        return { ok: false, err: fetched }
      }

      const status = fetched.status

      // No body responses (204 No Content, 304 Not Modified) and explicit
      // zero content-length must skip JSON parsing — fetched.json() would
      // throw `Unexpected end of JSON input` on an empty body.
      const headers = fetched.headers
      const contentLength = headers && 'function' === typeof headers.get
        ? headers.get('content-length')
        : (headers || {})['content-length']
      const noBody = 204 === status || 304 === status || '0' === String(contentLength)

      let json: any = undefined
      if (!noBody) {
        try {
          json = 'function' === typeof fetched.json ? await fetched.json() : fetched.json
        }
        catch (parseErr) {
          // Body wasn't valid JSON — surface the raw response rather than
          // throwing. data stays undefined; callers can inspect status/headers.
          json = undefined
        }
      }

      return {
        ok: status >= 200 && status < 300,
        status,
        headers: fetched.headers,
        data: json,
      }
    }
    catch (err: any) {
      return { ok: false, err }
    }
  }



  async graphql(query: string, variables?: any, ctrl?: any) {
    const options = this._options

    if (!options.allow.op.includes('graphql')) {
      return {
        ok: false,
        err: new Error('CloudflareWorkersSDK: graphql: operation not allowed by' +
          ' SDK option allow.op value: "' + options.allow.op + '"'),
      }
    }

    const res: any = await this._rawRequest({
      method: 'POST',
      headers: { 'content-type': 'application/json' },
      body: { query, variables: variables || {} },
      ctrl,
    })

    if (res instanceof Error) {
      return res
    }

    // Errors are read BEFORE any status check: a GraphQL parse or validation
    // failure comes back as HTTP 400 carrying the standard { errors: [...] }
    // body, and the raw path represents a non-2xx as { ok: false } with no
    // err — so returning early on status would discard the server's own
    // diagnostics, which are the only useful part of that response.
    const errors = null == res.data ? undefined : res.data.errors

    if (null != errors && Array.isArray(errors) && 0 < errors.length) {
      const first = errors[0] || {}
      const err: any = new Error('CloudflareWorkersSDK: graphql: ' +
        (first.message || 'graphql error'))
      err.graphql = errors
      return { ok: false, status: res.status, headers: res.headers, err, data: res.data }
    }

    return res
  }



  // Entity access: `client.Account().list()` / `client.Account().load({ id })`.
  // The argument is the entity OPTIONS object (passed to the entity
  // constructor as entopts), not initial entity data.
  Account(entopts?: Record<string, any>) {
    const self = this
    return new AccountEntity(self, entopts)
  }


  // Entity access: `client.Application().list()` / `client.Application().load({ id })`.
  // The argument is the entity OPTIONS object (passed to the entity
  // constructor as entopts), not initial entity data.
  Application(entopts?: Record<string, any>) {
    const self = this
    return new ApplicationEntity(self, entopts)
  }


  // Entity access: `client.Brapi().list()` / `client.Brapi().load({ id })`.
  // The argument is the entity OPTIONS object (passed to the entity
  // constructor as entopts), not initial entity data.
  Brapi(entopts?: Record<string, any>) {
    const self = this
    return new BrapiEntity(self, entopts)
  }


  // Entity access: `client.Build().list()` / `client.Build().load({ id })`.
  // The argument is the entity OPTIONS object (passed to the entity
  // constructor as entopts), not initial entity data.
  Build(entopts?: Record<string, any>) {
    const self = this
    return new BuildEntity(self, entopts)
  }


  // Entity access: `client.BuildToken().list()` / `client.BuildToken().load({ id })`.
  // The argument is the entity OPTIONS object (passed to the entity
  // constructor as entopts), not initial entity data.
  BuildToken(entopts?: Record<string, any>) {
    const self = this
    return new BuildTokenEntity(self, entopts)
  }


  // Entity access: `client.BuildsApi().list()` / `client.BuildsApi().load({ id })`.
  // The argument is the entity OPTIONS object (passed to the entity
  // constructor as entopts), not initial entity data.
  BuildsApi(entopts?: Record<string, any>) {
    const self = this
    return new BuildsApiEntity(self, entopts)
  }


  // Entity access: `client.Connection().list()` / `client.Connection().load({ id })`.
  // The argument is the entity OPTIONS object (passed to the entity
  // constructor as entopts), not initial entity data.
  Connection(entopts?: Record<string, any>) {
    const self = this
    return new ConnectionEntity(self, entopts)
  }


  // Entity access: `client.ContainerImage().list()` / `client.ContainerImage().load({ id })`.
  // The argument is the entity OPTIONS object (passed to the entity
  // constructor as entopts), not initial entity data.
  ContainerImage(entopts?: Record<string, any>) {
    const self = this
    return new ContainerImageEntity(self, entopts)
  }


  // Entity access: `client.ContainerInstance().list()` / `client.ContainerInstance().load({ id })`.
  // The argument is the entity OPTIONS object (passed to the entity
  // constructor as entopts), not initial entity data.
  ContainerInstance(entopts?: Record<string, any>) {
    const self = this
    return new ContainerInstanceEntity(self, entopts)
  }


  // Entity access: `client.DeployHook().list()` / `client.DeployHook().load({ id })`.
  // The argument is the entity OPTIONS object (passed to the entity
  // constructor as entopts), not initial entity data.
  DeployHook(entopts?: Record<string, any>) {
    const self = this
    return new DeployHookEntity(self, entopts)
  }


  // Entity access: `client.Deployment().list()` / `client.Deployment().load({ id })`.
  // The argument is the entity OPTIONS object (passed to the entity
  // constructor as entopts), not initial entity data.
  Deployment(entopts?: Record<string, any>) {
    const self = this
    return new DeploymentEntity(self, entopts)
  }


  // Entity access: `client.Destination().list()` / `client.Destination().load({ id })`.
  // The argument is the entity OPTIONS object (passed to the entity
  // constructor as entopts), not initial entity data.
  Destination(entopts?: Record<string, any>) {
    const self = this
    return new DestinationEntity(self, entopts)
  }


  // Entity access: `client.Domain().list()` / `client.Domain().load({ id })`.
  // The argument is the entity OPTIONS object (passed to the entity
  // constructor as entopts), not initial entity data.
  Domain(entopts?: Record<string, any>) {
    const self = this
    return new DomainEntity(self, entopts)
  }


  // Entity access: `client.DurableObjectsNamespace().list()` / `client.DurableObjectsNamespace().load({ id })`.
  // The argument is the entity OPTIONS object (passed to the entity
  // constructor as entopts), not initial entity data.
  DurableObjectsNamespace(entopts?: Record<string, any>) {
    const self = this
    return new DurableObjectsNamespaceEntity(self, entopts)
  }


  // Entity access: `client.EnvironmentVariable().list()` / `client.EnvironmentVariable().load({ id })`.
  // The argument is the entity OPTIONS object (passed to the entity
  // constructor as entopts), not initial entity data.
  EnvironmentVariable(entopts?: Record<string, any>) {
    const self = this
    return new EnvironmentVariableEntity(self, entopts)
  }


  // Entity access: `client.GitHubIntegration().list()` / `client.GitHubIntegration().load({ id })`.
  // The argument is the entity OPTIONS object (passed to the entity
  // constructor as entopts), not initial entity data.
  GitHubIntegration(entopts?: Record<string, any>) {
    const self = this
    return new GitHubIntegrationEntity(self, entopts)
  }


  // Entity access: `client.Hyperdrive().list()` / `client.Hyperdrive().load({ id })`.
  // The argument is the entity OPTIONS object (passed to the entity
  // constructor as entopts), not initial entity data.
  Hyperdrive(entopts?: Record<string, any>) {
    const self = this
    return new HyperdriveEntity(self, entopts)
  }


  // Entity access: `client.ImageRegistry().list()` / `client.ImageRegistry().load({ id })`.
  // The argument is the entity OPTIONS object (passed to the entity
  // constructor as entopts), not initial entity data.
  ImageRegistry(entopts?: Record<string, any>) {
    const self = this
    return new ImageRegistryEntity(self, entopts)
  }


  // Entity access: `client.Issue().list()` / `client.Issue().load({ id })`.
  // The argument is the entity OPTIONS object (passed to the entity
  // constructor as entopts), not initial entity data.
  Issue(entopts?: Record<string, any>) {
    const self = this
    return new IssueEntity(self, entopts)
  }


  // Entity access: `client.Key().list()` / `client.Key().load({ id })`.
  // The argument is the entity OPTIONS object (passed to the entity
  // constructor as entopts), not initial entity data.
  Key(entopts?: Record<string, any>) {
    const self = this
    return new KeyEntity(self, entopts)
  }


  // Entity access: `client.LiveTail().list()` / `client.LiveTail().load({ id })`.
  // The argument is the entity OPTIONS object (passed to the entity
  // constructor as entopts), not initial entity data.
  LiveTail(entopts?: Record<string, any>) {
    const self = this
    return new LiveTailEntity(self, entopts)
  }


  // Entity access: `client.MetricsExport().list()` / `client.MetricsExport().load({ id })`.
  // The argument is the entity OPTIONS object (passed to the entity
  // constructor as entopts), not initial entity data.
  MetricsExport(entopts?: Record<string, any>) {
    const self = this
    return new MetricsExportEntity(self, entopts)
  }


  // Entity access: `client.Namespace().list()` / `client.Namespace().load({ id })`.
  // The argument is the entity OPTIONS object (passed to the entity
  // constructor as entopts), not initial entity data.
  Namespace(entopts?: Record<string, any>) {
    const self = this
    return new NamespaceEntity(self, entopts)
  }


  // Entity access: `client.Preview().list()` / `client.Preview().load({ id })`.
  // The argument is the entity OPTIONS object (passed to the entity
  // constructor as entopts), not initial entity data.
  Preview(entopts?: Record<string, any>) {
    const self = this
    return new PreviewEntity(self, entopts)
  }


  // Entity access: `client.PreviewDeployment().list()` / `client.PreviewDeployment().load({ id })`.
  // The argument is the entity OPTIONS object (passed to the entity
  // constructor as entopts), not initial entity data.
  PreviewDeployment(entopts?: Record<string, any>) {
    const self = this
    return new PreviewDeploymentEntity(self, entopts)
  }


  // Entity access: `client.Query().list()` / `client.Query().load({ id })`.
  // The argument is the entity OPTIONS object (passed to the entity
  // constructor as entopts), not initial entity data.
  Query(entopts?: Record<string, any>) {
    const self = this
    return new QueryEntity(self, entopts)
  }


  // Entity access: `client.RepositoryConnection().list()` / `client.RepositoryConnection().load({ id })`.
  // The argument is the entity OPTIONS object (passed to the entity
  // constructor as entopts), not initial entity data.
  RepositoryConnection(entopts?: Record<string, any>) {
    const self = this
    return new RepositoryConnectionEntity(self, entopts)
  }


  // Entity access: `client.Rollout().list()` / `client.Rollout().load({ id })`.
  // The argument is the entity OPTIONS object (passed to the entity
  // constructor as entopts), not initial entity data.
  Rollout(entopts?: Record<string, any>) {
    const self = this
    return new RolloutEntity(self, entopts)
  }


  // Entity access: `client.SavedQuery().list()` / `client.SavedQuery().load({ id })`.
  // The argument is the entity OPTIONS object (passed to the entity
  // constructor as entopts), not initial entity data.
  SavedQuery(entopts?: Record<string, any>) {
    const self = this
    return new SavedQueryEntity(self, entopts)
  }


  // Entity access: `client.Script().list()` / `client.Script().load({ id })`.
  // The argument is the entity OPTIONS object (passed to the entity
  // constructor as entopts), not initial entity data.
  Script(entopts?: Record<string, any>) {
    const self = this
    return new ScriptEntity(self, entopts)
  }


  // Entity access: `client.ScriptSetting().list()` / `client.ScriptSetting().load({ id })`.
  // The argument is the entity OPTIONS object (passed to the entity
  // constructor as entopts), not initial entity data.
  ScriptSetting(entopts?: Record<string, any>) {
    const self = this
    return new ScriptSettingEntity(self, entopts)
  }


  // Entity access: `client.Secret().list()` / `client.Secret().load({ id })`.
  // The argument is the entity OPTIONS object (passed to the entity
  // constructor as entopts), not initial entity data.
  Secret(entopts?: Record<string, any>) {
    const self = this
    return new SecretEntity(self, entopts)
  }


  // Entity access: `client.SecretsStoreDelete().list()` / `client.SecretsStoreDelete().load({ id })`.
  // The argument is the entity OPTIONS object (passed to the entity
  // constructor as entopts), not initial entity data.
  SecretsStoreDelete(entopts?: Record<string, any>) {
    const self = this
    return new SecretsStoreDeleteEntity(self, entopts)
  }


  // Entity access: `client.SecretsStoreQuota().list()` / `client.SecretsStoreQuota().load({ id })`.
  // The argument is the entity OPTIONS object (passed to the entity
  // constructor as entopts), not initial entity data.
  SecretsStoreQuota(entopts?: Record<string, any>) {
    const self = this
    return new SecretsStoreQuotaEntity(self, entopts)
  }


  // Entity access: `client.SecretsStoreSecret().list()` / `client.SecretsStoreSecret().load({ id })`.
  // The argument is the entity OPTIONS object (passed to the entity
  // constructor as entopts), not initial entity data.
  SecretsStoreSecret(entopts?: Record<string, any>) {
    const self = this
    return new SecretsStoreSecretEntity(self, entopts)
  }


  // Entity access: `client.SecretsStoreStore().list()` / `client.SecretsStoreStore().load({ id })`.
  // The argument is the entity OPTIONS object (passed to the entity
  // constructor as entopts), not initial entity data.
  SecretsStoreStore(entopts?: Record<string, any>) {
    const self = this
    return new SecretsStoreStoreEntity(self, entopts)
  }


  // Entity access: `client.SecretsStoreStoresResponseCollection().list()` / `client.SecretsStoreStoresResponseCollection().load({ id })`.
  // The argument is the entity OPTIONS object (passed to the entity
  // constructor as entopts), not initial entity data.
  SecretsStoreStoresResponseCollection(entopts?: Record<string, any>) {
    const self = this
    return new SecretsStoreStoresResponseCollectionEntity(self, entopts)
  }


  // Entity access: `client.Setting().list()` / `client.Setting().load({ id })`.
  // The argument is the entity OPTIONS object (passed to the entity
  // constructor as entopts), not initial entity data.
  Setting(entopts?: Record<string, any>) {
    const self = this
    return new SettingEntity(self, entopts)
  }


  // Entity access: `client.Shared().list()` / `client.Shared().load({ id })`.
  // The argument is the entity OPTIONS object (passed to the entity
  // constructor as entopts), not initial entity data.
  Shared(entopts?: Record<string, any>) {
    const self = this
    return new SharedEntity(self, entopts)
  }


  // Entity access: `client.Tail().list()` / `client.Tail().load({ id })`.
  // The argument is the entity OPTIONS object (passed to the entity
  // constructor as entopts), not initial entity data.
  Tail(entopts?: Record<string, any>) {
    const self = this
    return new TailEntity(self, entopts)
  }


  // Entity access: `client.Token().list()` / `client.Token().load({ id })`.
  // The argument is the entity OPTIONS object (passed to the entity
  // constructor as entopts), not initial entity data.
  Token(entopts?: Record<string, any>) {
    const self = this
    return new TokenEntity(self, entopts)
  }


  // Entity access: `client.Trigger().list()` / `client.Trigger().load({ id })`.
  // The argument is the entity OPTIONS object (passed to the entity
  // constructor as entopts), not initial entity data.
  Trigger(entopts?: Record<string, any>) {
    const self = this
    return new TriggerEntity(self, entopts)
  }


  // Entity access: `client.Usage().list()` / `client.Usage().load({ id })`.
  // The argument is the entity OPTIONS object (passed to the entity
  // constructor as entopts), not initial entity data.
  Usage(entopts?: Record<string, any>) {
    const self = this
    return new UsageEntity(self, entopts)
  }


  // Entity access: `client.Value().list()` / `client.Value().load({ id })`.
  // The argument is the entity OPTIONS object (passed to the entity
  // constructor as entopts), not initial entity data.
  Value(entopts?: Record<string, any>) {
    const self = this
    return new ValueEntity(self, entopts)
  }


  // Entity access: `client.Version().list()` / `client.Version().load({ id })`.
  // The argument is the entity OPTIONS object (passed to the entity
  // constructor as entopts), not initial entity data.
  Version(entopts?: Record<string, any>) {
    const self = this
    return new VersionEntity(self, entopts)
  }


  // Entity access: `client.Worker().list()` / `client.Worker().load({ id })`.
  // The argument is the entity OPTIONS object (passed to the entity
  // constructor as entopts), not initial entity data.
  Worker(entopts?: Record<string, any>) {
    const self = this
    return new WorkerEntity(self, entopts)
  }


  // Entity access: `client.WorkerCronTrigger().list()` / `client.WorkerCronTrigger().load({ id })`.
  // The argument is the entity OPTIONS object (passed to the entity
  // constructor as entopts), not initial entity data.
  WorkerCronTrigger(entopts?: Record<string, any>) {
    const self = this
    return new WorkerCronTriggerEntity(self, entopts)
  }


  // Entity access: `client.WorkerDeployment().list()` / `client.WorkerDeployment().load({ id })`.
  // The argument is the entity OPTIONS object (passed to the entity
  // constructor as entopts), not initial entity data.
  WorkerDeployment(entopts?: Record<string, any>) {
    const self = this
    return new WorkerDeploymentEntity(self, entopts)
  }


  // Entity access: `client.WorkerEnvironment().list()` / `client.WorkerEnvironment().load({ id })`.
  // The argument is the entity OPTIONS object (passed to the entity
  // constructor as entopts), not initial entity data.
  WorkerEnvironment(entopts?: Record<string, any>) {
    const self = this
    return new WorkerEnvironmentEntity(self, entopts)
  }


  // Entity access: `client.WorkerRoute().list()` / `client.WorkerRoute().load({ id })`.
  // The argument is the entity OPTIONS object (passed to the entity
  // constructor as entopts), not initial entity data.
  WorkerRoute(entopts?: Record<string, any>) {
    const self = this
    return new WorkerRouteEntity(self, entopts)
  }


  // Entity access: `client.WorkerScript().list()` / `client.WorkerScript().load({ id })`.
  // The argument is the entity OPTIONS object (passed to the entity
  // constructor as entopts), not initial entity data.
  WorkerScript(entopts?: Record<string, any>) {
    const self = this
    return new WorkerScriptEntity(self, entopts)
  }


  // Entity access: `client.WorkerSubdomain().list()` / `client.WorkerSubdomain().load({ id })`.
  // The argument is the entity OPTIONS object (passed to the entity
  // constructor as entopts), not initial entity data.
  WorkerSubdomain(entopts?: Record<string, any>) {
    const self = this
    return new WorkerSubdomainEntity(self, entopts)
  }


  // Entity access: `client.WorkerTailLog().list()` / `client.WorkerTailLog().load({ id })`.
  // The argument is the entity OPTIONS object (passed to the entity
  // constructor as entopts), not initial entity data.
  WorkerTailLog(entopts?: Record<string, any>) {
    const self = this
    return new WorkerTailLogEntity(self, entopts)
  }


  // Entity access: `client.WorkersAccountSetting().list()` / `client.WorkersAccountSetting().load({ id })`.
  // The argument is the entity OPTIONS object (passed to the entity
  // constructor as entopts), not initial entity data.
  WorkersAccountSetting(entopts?: Record<string, any>) {
    const self = this
    return new WorkersAccountSettingEntity(self, entopts)
  }


  // Entity access: `client.WorkersApiResponseNullResult().list()` / `client.WorkersApiResponseNullResult().load({ id })`.
  // The argument is the entity OPTIONS object (passed to the entity
  // constructor as entopts), not initial entity data.
  WorkersApiResponseNullResult(entopts?: Record<string, any>) {
    const self = this
    return new WorkersApiResponseNullResultEntity(self, entopts)
  }


  // Entity access: `client.WorkersCompletedUploadAsset().list()` / `client.WorkersCompletedUploadAsset().load({ id })`.
  // The argument is the entity OPTIONS object (passed to the entity
  // constructor as entopts), not initial entity data.
  WorkersCompletedUploadAsset(entopts?: Record<string, any>) {
    const self = this
    return new WorkersCompletedUploadAssetEntity(self, entopts)
  }


  // Entity access: `client.WorkersCreateAssetsUploadSession().list()` / `client.WorkersCreateAssetsUploadSession().load({ id })`.
  // The argument is the entity OPTIONS object (passed to the entity
  // constructor as entopts), not initial entity data.
  WorkersCreateAssetsUploadSession(entopts?: Record<string, any>) {
    const self = this
    return new WorkersCreateAssetsUploadSessionEntity(self, entopts)
  }


  // Entity access: `client.WorkersForPlatform().list()` / `client.WorkersForPlatform().load({ id })`.
  // The argument is the entity OPTIONS object (passed to the entity
  // constructor as entopts), not initial entity data.
  WorkersForPlatform(entopts?: Record<string, any>) {
    const self = this
    return new WorkersForPlatformEntity(self, entopts)
  }


  // Entity access: `client.WorkersKvApiResponseCommonNoResult().list()` / `client.WorkersKvApiResponseCommonNoResult().load({ id })`.
  // The argument is the entity OPTIONS object (passed to the entity
  // constructor as entopts), not initial entity data.
  WorkersKvApiResponseCommonNoResult(entopts?: Record<string, any>) {
    const self = this
    return new WorkersKvApiResponseCommonNoResultEntity(self, entopts)
  }


  // Entity access: `client.WorkersKvNamespace().list()` / `client.WorkersKvNamespace().load({ id })`.
  // The argument is the entity OPTIONS object (passed to the entity
  // constructor as entopts), not initial entity data.
  WorkersKvNamespace(entopts?: Record<string, any>) {
    const self = this
    return new WorkersKvNamespaceEntity(self, entopts)
  }


  // Entity access: `client.WorkersNamespaceList().list()` / `client.WorkersNamespaceList().load({ id })`.
  // The argument is the entity OPTIONS object (passed to the entity
  // constructor as entopts), not initial entity data.
  WorkersNamespaceList(entopts?: Record<string, any>) {
    const self = this
    return new WorkersNamespaceListEntity(self, entopts)
  }


  // Entity access: `client.WorkersNamespaceScriptDeleteBulk().list()` / `client.WorkersNamespaceScriptDeleteBulk().load({ id })`.
  // The argument is the entity OPTIONS object (passed to the entity
  // constructor as entopts), not initial entity data.
  WorkersNamespaceScriptDeleteBulk(entopts?: Record<string, any>) {
    const self = this
    return new WorkersNamespaceScriptDeleteBulkEntity(self, entopts)
  }


  // Entity access: `client.WorkersNamespaceScriptResponseSingle().list()` / `client.WorkersNamespaceScriptResponseSingle().load({ id })`.
  // The argument is the entity OPTIONS object (passed to the entity
  // constructor as entopts), not initial entity data.
  WorkersNamespaceScriptResponseSingle(entopts?: Record<string, any>) {
    const self = this
    return new WorkersNamespaceScriptResponseSingleEntity(self, entopts)
  }


  // Entity access: `client.WorkersNamespaceSingle().list()` / `client.WorkersNamespaceSingle().load({ id })`.
  // The argument is the entity OPTIONS object (passed to the entity
  // constructor as entopts), not initial entity data.
  WorkersNamespaceSingle(entopts?: Record<string, any>) {
    const self = this
    return new WorkersNamespaceSingleEntity(self, entopts)
  }


  // Entity access: `client.WorkersPipelinesOther().list()` / `client.WorkersPipelinesOther().load({ id })`.
  // The argument is the entity OPTIONS object (passed to the entity
  // constructor as entopts), not initial entity data.
  WorkersPipelinesOther(entopts?: Record<string, any>) {
    const self = this
    return new WorkersPipelinesOtherEntity(self, entopts)
  }


  // Entity access: `client.WorkersScriptAndVersionSetting().list()` / `client.WorkersScriptAndVersionSetting().load({ id })`.
  // The argument is the entity OPTIONS object (passed to the entity
  // constructor as entopts), not initial entity data.
  WorkersScriptAndVersionSetting(entopts?: Record<string, any>) {
    const self = this
    return new WorkersScriptAndVersionSettingEntity(self, entopts)
  }


  // Entity access: `client.WorkersScriptResponseCollection().list()` / `client.WorkersScriptResponseCollection().load({ id })`.
  // The argument is the entity OPTIONS object (passed to the entity
  // constructor as entopts), not initial entity data.
  WorkersScriptResponseCollection(entopts?: Record<string, any>) {
    const self = this
    return new WorkersScriptResponseCollectionEntity(self, entopts)
  }


  // Entity access: `client.WorkersScriptResponseSingle().list()` / `client.WorkersScriptResponseSingle().load({ id })`.
  // The argument is the entity OPTIONS object (passed to the entity
  // constructor as entopts), not initial entity data.
  WorkersScriptResponseSingle(entopts?: Record<string, any>) {
    const self = this
    return new WorkersScriptResponseSingleEntity(self, entopts)
  }


  // Entity access: `client.WorkersSmartPlacement().list()` / `client.WorkersSmartPlacement().load({ id })`.
  // The argument is the entity OPTIONS object (passed to the entity
  // constructor as entopts), not initial entity data.
  WorkersSmartPlacement(entopts?: Record<string, any>) {
    const self = this
    return new WorkersSmartPlacementEntity(self, entopts)
  }


  // Entity access: `client.WorkersUsageModel().list()` / `client.WorkersUsageModel().load({ id })`.
  // The argument is the entity OPTIONS object (passed to the entity
  // constructor as entopts), not initial entity data.
  WorkersUsageModel(entopts?: Record<string, any>) {
    const self = this
    return new WorkersUsageModelEntity(self, entopts)
  }


  // Entity access: `client.WorkersVersionsList().list()` / `client.WorkersVersionsList().load({ id })`.
  // The argument is the entity OPTIONS object (passed to the entity
  // constructor as entopts), not initial entity data.
  WorkersVersionsList(entopts?: Record<string, any>) {
    const self = this
    return new WorkersVersionsListEntity(self, entopts)
  }


  // Entity access: `client.WorkersVersionsSingle().list()` / `client.WorkersVersionsSingle().load({ id })`.
  // The argument is the entity OPTIONS object (passed to the entity
  // constructor as entopts), not initial entity data.
  WorkersVersionsSingle(entopts?: Record<string, any>) {
    const self = this
    return new WorkersVersionsSingleEntity(self, entopts)
  }


  // Entity access: `client.WorkersVersionsUpload().list()` / `client.WorkersVersionsUpload().load({ id })`.
  // The argument is the entity OPTIONS object (passed to the entity
  // constructor as entopts), not initial entity data.
  WorkersVersionsUpload(entopts?: Record<string, any>) {
    const self = this
    return new WorkersVersionsUploadEntity(self, entopts)
  }


  // Entity access: `client.Workflow().list()` / `client.Workflow().load({ id })`.
  // The argument is the entity OPTIONS object (passed to the entity
  // constructor as entopts), not initial entity data.
  Workflow(entopts?: Record<string, any>) {
    const self = this
    return new WorkflowEntity(self, entopts)
  }




  static test(testoptsarg?: any, sdkoptsarg?: any) {
    const struct = stdutil.struct
    const setpath = struct.setpath
    const getdef = struct.getdef
    const clone = struct.clone
    const setprop = struct.setprop

    const sdkopts = getdef(clone(sdkoptsarg), {})
    const testopts = getdef(clone(testoptsarg), {})
    setprop(testopts, 'active', true)
    setpath(sdkopts, 'feature.test', testopts)

    const testsdk = new CloudflareWorkersSDK(sdkopts)
    testsdk._mode = 'test'

    return testsdk
  }


  tester(testopts?: any, sdkopts?: any) {
    return CloudflareWorkersSDK.test(testopts, sdkopts)
  }


  toJSON() {
    return { name: 'CloudflareWorkers' }
  }

  toString() {
    return 'CloudflareWorkers ' + this._utility.struct.jsonify(this.toJSON())
  }

  [inspect.custom]() {
    return this.toString()
  }

}




const SDK = CloudflareWorkersSDK


export {
  stdutil,
  config,
  

  BaseFeature,
  CloudflareWorkersEntityBase,

  CloudflareWorkersSDK,
  SDK,
}


