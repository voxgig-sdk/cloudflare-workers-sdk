# CloudflareWorkers SDK

require_relative 'utility/struct/voxgig_struct'
require_relative 'core/utility_type'
require_relative 'core/spec'
require_relative 'core/helpers'

# Load utility registration
require_relative 'utility/register'

# Load config and features
require_relative 'config'
require_relative 'feature/base_feature'
require_relative 'features'

# Load typed models (Struct value objects).
require_relative 'CloudflareWorkers_types'


class CloudflareWorkersSDK
  attr_accessor :mode, :features, :options

  def initialize(options = {})
    @mode = "live"
    @features = []
    @options = nil

    utility = CloudflareWorkersUtility.new
    @_utility = utility

    config = CloudflareWorkersConfig.shared_config

    @_rootctx = utility.make_context.call({
      "client" => self,
      "utility" => utility,
      "config" => config,
      "options" => options || {},
      "shared" => {},
    }, nil)

    @options = utility.make_options.call(@_rootctx)

    if VoxgigStruct.getpath(@options, "feature.test.active") == true
      @mode = "test"
    end

    @_rootctx.options = @options

    # Add features in the resolved order (make_options puts an explicit array
    # order first, else defaults to test-first). Ordering matters: the `test`
    # feature installs the base mock transport and the transport features
    # (retry/cache/netsim/proxy/ratelimit) wrap whatever is current, so `test`
    # must be added before them to sit at the base of the chain.
    feature_opts = CloudflareWorkersHelpers.to_map(VoxgigStruct.getprop(@options, "feature"))
    if feature_opts
      featureorder = VoxgigStruct.getpath(@options, "__derived__.featureorder")
      if featureorder.is_a?(Array)
        featureorder.each do |fname|
          fopts = CloudflareWorkersHelpers.to_map(feature_opts[fname])
          if fopts && fopts["active"] == true
            utility.feature_add.call(@_rootctx, CloudflareWorkersFeatures.make_feature(fname))
          end
        end
      end
    end

    # Add extension features.
    extend_val = VoxgigStruct.getprop(@options, "extend")
    if extend_val.is_a?(Array)
      extend_val.each do |f|
        if f.respond_to?(:get_name)
          utility.feature_add.call(@_rootctx, f)
        end
      end
    end

    # Initialize features.
    @features.each do |f|
      utility.feature_init.call(@_rootctx, f)
    end

    utility.feature_hook.call(@_rootctx, "PostConstruct")
  end

  def options_map
    out = VoxgigStruct.clone(@options)
    out.is_a?(Hash) ? out : {}
  end

  def get_utility
    CloudflareWorkersUtility.copy(@_utility)
  end

  def get_root_ctx
    @_rootctx
  end

  def prepare(fetchargs = {})
    utility = @_utility
    fetchargs ||= {}

    ctrl = CloudflareWorkersHelpers.to_map(VoxgigStruct.getprop(fetchargs, "ctrl")) || {}

    ctx = utility.make_context.call({
      "opname" => "prepare",
      "ctrl" => ctrl,
    }, @_rootctx)

    opts = @options
    path = VoxgigStruct.getprop(fetchargs, "path") || ""
    path = "" unless path.is_a?(String)
    method_val = VoxgigStruct.getprop(fetchargs, "method") || "GET"
    method_val = "GET" unless method_val.is_a?(String)
    params = CloudflareWorkersHelpers.to_map(VoxgigStruct.getprop(fetchargs, "params")) || {}
    query = CloudflareWorkersHelpers.to_map(VoxgigStruct.getprop(fetchargs, "query")) || {}
    headers = utility.prepare_headers.call(ctx)

    base = VoxgigStruct.getprop(opts, "base") || ""
    base = "" unless base.is_a?(String)
    prefix = VoxgigStruct.getprop(opts, "prefix") || ""
    prefix = "" unless prefix.is_a?(String)
    suffix = VoxgigStruct.getprop(opts, "suffix") || ""
    suffix = "" unless suffix.is_a?(String)

    ctx.spec = CloudflareWorkersSpec.new({
      "base" => base, "prefix" => prefix, "suffix" => suffix,
      "path" => path, "method" => method_val,
      "params" => params, "query" => query, "headers" => headers,
      "body" => VoxgigStruct.getprop(fetchargs, "body"),
      "step" => "start",
    })

    # Merge user-provided headers.
    uh = VoxgigStruct.getprop(fetchargs, "headers")
    if uh.is_a?(Hash)
      uh.each { |k, v| ctx.spec.headers[k] = v }
    end

    _, err = utility.prepare_auth.call(ctx)
    raise err if err

    # make_fetch_def returns a (fetchdef, err) tuple; destructure it and
    # return just the fetchdef Hash (raising on error) so callers — including
    # direct(), which indexes fetchdef["url"] — receive a Hash, mirroring the
    # ts/py prepare().
    fetchdef, fd_err = utility.make_fetch_def.call(ctx)
    raise fd_err if fd_err

    fetchdef
  end

  # Raw endpoint access is operator-controllable, like every entity op.
  # Blocking it means denying BOTH the 'direct' and 'graphql' tokens, since
  # either one reaches the same endpoint.
  def direct(fetchargs = {})
    return op_denied("direct") unless op_allowed?("direct")

    raw_request(fetchargs)
  end

  # Is this raw-access op permitted by the SDK's allow.op option?
  def op_allowed?(op)
    allow_op = VoxgigStruct.getpath(@options, "allow.op")
    allow_op.is_a?(String) && allow_op.include?(op)
  end

  def op_denied(op)
    allow_op = VoxgigStruct.getpath(@options, "allow.op")
    {
      "ok" => false,
      "err" => CloudflareWorkersError.new(
        "#{op}_allow",
        "CloudflareWorkersSDK: #{op}: operation not allowed by" \
        " SDK option allow.op value: \"#{allow_op}\""),
    }
  end

  # Ungated request path shared by direct and graphql, each of which checks
  # its own allow.op token first. Separate, rather than a flag on fetchargs:
  # a caller-supplied marker would let anyone opt straight back out of the
  # gate by passing it.
  def raw_request(fetchargs = {})
    utility = @_utility

    # direct() is the raw-HTTP escape hatch: it always returns a result hash
    # ({ "ok" => ..., ... }) and never raises. prepare() raises on error, so
    # trap that and surface it in the hash.
    begin
      fetchdef = prepare(fetchargs)
    rescue CloudflareWorkersError => err
      return { "ok" => false, "err" => err }
    end

    fetchargs ||= {}
    ctrl = CloudflareWorkersHelpers.to_map(VoxgigStruct.getprop(fetchargs, "ctrl")) || {}

    ctx = utility.make_context.call({
      "opname" => "direct",
      "ctrl" => ctrl,
    }, @_rootctx)

    url = fetchdef["url"] || ""
    fetched, fetch_err = utility.fetcher.call(ctx, url, fetchdef)

    return { "ok" => false, "err" => fetch_err } if fetch_err

    if fetched.nil?
      return {
        "ok" => false,
        "err" => ctx.make_error("direct_no_response", "response: undefined"),
      }
    end

    if fetched.is_a?(Hash)
      status = CloudflareWorkersHelpers.to_int(VoxgigStruct.getprop(fetched, "status"))
      headers = VoxgigStruct.getprop(fetched, "headers") || {}

      # No-body responses (204, 304) and explicit zero content-length must
      # skip JSON parsing — calling json() on an empty body errors.
      content_length = headers.is_a?(Hash) ? headers["content-length"] : nil
      no_body = status == 204 || status == 304 || content_length.to_s == "0"

      json_data = nil
      unless no_body
        jf = VoxgigStruct.getprop(fetched, "json")
        if jf.is_a?(Proc)
          begin
            json_data = jf.call
          rescue StandardError
            # Non-JSON body — leave data nil, keep status/headers.
            json_data = nil
          end
        end
      end

      return {
        "ok" => status >= 200 && status < 300,
        "status" => status,
        "headers" => headers,
        "data" => json_data,
      }
    end

    return {
      "ok" => false,
      "err" => ctx.make_error("direct_invalid", "invalid response type"),
    }
  end

  # Raw GraphQL access: the pressure valve that makes the generated surface's
  # deliberate omissions (per-call selection sets, typed filter builders,
  # batching, subscriptions) livable — the whole schema stays reachable.
  #
  # Thin wrapper over the same prepare/fetch path direct uses, with the one
  # thing raw direct cannot do for GraphQL: a GraphQL failure rides HTTP 200
  # as a top-level `errors` array, so status alone would report a failed
  # query as ok.
  #
  # NOTE: like direct, this bypasses the feature pipeline — no retry,
  # ratelimit or paging features apply.
  def graphql(query, variables = nil, ctrl = nil)
    return op_denied("graphql") unless op_allowed?("graphql")

    res = raw_request({
      "method" => "POST",
      "headers" => { "content-type" => "application/json" },
      "body" => { "query" => query, "variables" => variables || {} },
      "ctrl" => ctrl || {},
    })

    # Errors are read BEFORE any status check: a GraphQL parse or validation
    # failure comes back as HTTP 400 carrying the standard { errors: [...] }
    # body, and the raw path represents a non-2xx as ok:false with no err —
    # so returning early on status would discard the server's own
    # diagnostics, which are the only useful part of that response.
    errors = VoxgigStruct.getpath(res, "data.errors")

    if errors.is_a?(Array) && !errors.empty?
      first = errors[0].is_a?(Hash) ? errors[0] : {}
      msg = first["message"]
      msg = "graphql error" if msg.nil? || msg.to_s.empty?
      res["ok"] = false
      res["err"] = CloudflareWorkersError.new(
        "graphql_error", "CloudflareWorkersSDK: graphql: #{msg}")
      res["graphql"] = errors
    end

    res
  end


  # Canonical facade: client.Account.list / client.Account.load({ "id" => ... })
  def Account(data = nil)
    require_relative 'entity/account_entity'
    AccountEntity.new(self, data)
  end


  # Canonical facade: client.Application.list / client.Application.load({ "id" => ... })
  def Application(data = nil)
    require_relative 'entity/application_entity'
    ApplicationEntity.new(self, data)
  end


  # Canonical facade: client.Brapi.list / client.Brapi.load({ "id" => ... })
  def Brapi(data = nil)
    require_relative 'entity/brapi_entity'
    BrapiEntity.new(self, data)
  end


  # Canonical facade: client.Build.list / client.Build.load({ "id" => ... })
  def Build(data = nil)
    require_relative 'entity/build_entity'
    BuildEntity.new(self, data)
  end


  # Canonical facade: client.BuildToken.list / client.BuildToken.load({ "id" => ... })
  def BuildToken(data = nil)
    require_relative 'entity/build_token_entity'
    BuildTokenEntity.new(self, data)
  end


  # Canonical facade: client.BuildsApi.list / client.BuildsApi.load({ "id" => ... })
  def BuildsApi(data = nil)
    require_relative 'entity/builds_api_entity'
    BuildsApiEntity.new(self, data)
  end


  # Canonical facade: client.Connection.list / client.Connection.load({ "id" => ... })
  def Connection(data = nil)
    require_relative 'entity/connection_entity'
    ConnectionEntity.new(self, data)
  end


  # Canonical facade: client.ContainerImage.list / client.ContainerImage.load({ "id" => ... })
  def ContainerImage(data = nil)
    require_relative 'entity/container_image_entity'
    ContainerImageEntity.new(self, data)
  end


  # Canonical facade: client.ContainerInstance.list / client.ContainerInstance.load({ "id" => ... })
  def ContainerInstance(data = nil)
    require_relative 'entity/container_instance_entity'
    ContainerInstanceEntity.new(self, data)
  end


  # Canonical facade: client.DeployHook.list / client.DeployHook.load({ "id" => ... })
  def DeployHook(data = nil)
    require_relative 'entity/deploy_hook_entity'
    DeployHookEntity.new(self, data)
  end


  # Canonical facade: client.Deployment.list / client.Deployment.load({ "id" => ... })
  def Deployment(data = nil)
    require_relative 'entity/deployment_entity'
    DeploymentEntity.new(self, data)
  end


  # Canonical facade: client.Destination.list / client.Destination.load({ "id" => ... })
  def Destination(data = nil)
    require_relative 'entity/destination_entity'
    DestinationEntity.new(self, data)
  end


  # Canonical facade: client.Domain.list / client.Domain.load({ "id" => ... })
  def Domain(data = nil)
    require_relative 'entity/domain_entity'
    DomainEntity.new(self, data)
  end


  # Canonical facade: client.DurableObjectsNamespace.list / client.DurableObjectsNamespace.load({ "id" => ... })
  def DurableObjectsNamespace(data = nil)
    require_relative 'entity/durable_objects_namespace_entity'
    DurableObjectsNamespaceEntity.new(self, data)
  end


  # Canonical facade: client.EnvironmentVariable.list / client.EnvironmentVariable.load({ "id" => ... })
  def EnvironmentVariable(data = nil)
    require_relative 'entity/environment_variable_entity'
    EnvironmentVariableEntity.new(self, data)
  end


  # Canonical facade: client.GitHubIntegration.list / client.GitHubIntegration.load({ "id" => ... })
  def GitHubIntegration(data = nil)
    require_relative 'entity/git_hub_integration_entity'
    GitHubIntegrationEntity.new(self, data)
  end


  # Canonical facade: client.Hyperdrive.list / client.Hyperdrive.load({ "id" => ... })
  def Hyperdrive(data = nil)
    require_relative 'entity/hyperdrive_entity'
    HyperdriveEntity.new(self, data)
  end


  # Canonical facade: client.ImageRegistry.list / client.ImageRegistry.load({ "id" => ... })
  def ImageRegistry(data = nil)
    require_relative 'entity/image_registry_entity'
    ImageRegistryEntity.new(self, data)
  end


  # Canonical facade: client.Issue.list / client.Issue.load({ "id" => ... })
  def Issue(data = nil)
    require_relative 'entity/issue_entity'
    IssueEntity.new(self, data)
  end


  # Canonical facade: client.Key.list / client.Key.load({ "id" => ... })
  def Key(data = nil)
    require_relative 'entity/key_entity'
    KeyEntity.new(self, data)
  end


  # Canonical facade: client.LiveTail.list / client.LiveTail.load({ "id" => ... })
  def LiveTail(data = nil)
    require_relative 'entity/live_tail_entity'
    LiveTailEntity.new(self, data)
  end


  # Canonical facade: client.MetricsExport.list / client.MetricsExport.load({ "id" => ... })
  def MetricsExport(data = nil)
    require_relative 'entity/metrics_export_entity'
    MetricsExportEntity.new(self, data)
  end


  # Canonical facade: client.Namespace.list / client.Namespace.load({ "id" => ... })
  def Namespace(data = nil)
    require_relative 'entity/namespace_entity'
    NamespaceEntity.new(self, data)
  end


  # Canonical facade: client.Preview.list / client.Preview.load({ "id" => ... })
  def Preview(data = nil)
    require_relative 'entity/preview_entity'
    PreviewEntity.new(self, data)
  end


  # Canonical facade: client.PreviewDeployment.list / client.PreviewDeployment.load({ "id" => ... })
  def PreviewDeployment(data = nil)
    require_relative 'entity/preview_deployment_entity'
    PreviewDeploymentEntity.new(self, data)
  end


  # Canonical facade: client.Query.list / client.Query.load({ "id" => ... })
  def Query(data = nil)
    require_relative 'entity/query_entity'
    QueryEntity.new(self, data)
  end


  # Canonical facade: client.RepositoryConnection.list / client.RepositoryConnection.load({ "id" => ... })
  def RepositoryConnection(data = nil)
    require_relative 'entity/repository_connection_entity'
    RepositoryConnectionEntity.new(self, data)
  end


  # Canonical facade: client.Rollout.list / client.Rollout.load({ "id" => ... })
  def Rollout(data = nil)
    require_relative 'entity/rollout_entity'
    RolloutEntity.new(self, data)
  end


  # Canonical facade: client.SavedQuery.list / client.SavedQuery.load({ "id" => ... })
  def SavedQuery(data = nil)
    require_relative 'entity/saved_query_entity'
    SavedQueryEntity.new(self, data)
  end


  # Canonical facade: client.Script.list / client.Script.load({ "id" => ... })
  def Script(data = nil)
    require_relative 'entity/script_entity'
    ScriptEntity.new(self, data)
  end


  # Canonical facade: client.ScriptSetting.list / client.ScriptSetting.load({ "id" => ... })
  def ScriptSetting(data = nil)
    require_relative 'entity/script_setting_entity'
    ScriptSettingEntity.new(self, data)
  end


  # Canonical facade: client.Secret.list / client.Secret.load({ "id" => ... })
  def Secret(data = nil)
    require_relative 'entity/secret_entity'
    SecretEntity.new(self, data)
  end


  # Canonical facade: client.SecretsStoreDelete.list / client.SecretsStoreDelete.load({ "id" => ... })
  def SecretsStoreDelete(data = nil)
    require_relative 'entity/secrets_store_delete_entity'
    SecretsStoreDeleteEntity.new(self, data)
  end


  # Canonical facade: client.SecretsStoreQuota.list / client.SecretsStoreQuota.load({ "id" => ... })
  def SecretsStoreQuota(data = nil)
    require_relative 'entity/secrets_store_quota_entity'
    SecretsStoreQuotaEntity.new(self, data)
  end


  # Canonical facade: client.SecretsStoreSecret.list / client.SecretsStoreSecret.load({ "id" => ... })
  def SecretsStoreSecret(data = nil)
    require_relative 'entity/secrets_store_secret_entity'
    SecretsStoreSecretEntity.new(self, data)
  end


  # Canonical facade: client.SecretsStoreStore.list / client.SecretsStoreStore.load({ "id" => ... })
  def SecretsStoreStore(data = nil)
    require_relative 'entity/secrets_store_store_entity'
    SecretsStoreStoreEntity.new(self, data)
  end


  # Canonical facade: client.SecretsStoreStoresResponseCollection.list / client.SecretsStoreStoresResponseCollection.load({ "id" => ... })
  def SecretsStoreStoresResponseCollection(data = nil)
    require_relative 'entity/secrets_store_stores_response_collection_entity'
    SecretsStoreStoresResponseCollectionEntity.new(self, data)
  end


  # Canonical facade: client.Setting.list / client.Setting.load({ "id" => ... })
  def Setting(data = nil)
    require_relative 'entity/setting_entity'
    SettingEntity.new(self, data)
  end


  # Canonical facade: client.Shared.list / client.Shared.load({ "id" => ... })
  def Shared(data = nil)
    require_relative 'entity/shared_entity'
    SharedEntity.new(self, data)
  end


  # Canonical facade: client.Tail.list / client.Tail.load({ "id" => ... })
  def Tail(data = nil)
    require_relative 'entity/tail_entity'
    TailEntity.new(self, data)
  end


  # Canonical facade: client.Token.list / client.Token.load({ "id" => ... })
  def Token(data = nil)
    require_relative 'entity/token_entity'
    TokenEntity.new(self, data)
  end


  # Canonical facade: client.Trigger.list / client.Trigger.load({ "id" => ... })
  def Trigger(data = nil)
    require_relative 'entity/trigger_entity'
    TriggerEntity.new(self, data)
  end


  # Canonical facade: client.Usage.list / client.Usage.load({ "id" => ... })
  def Usage(data = nil)
    require_relative 'entity/usage_entity'
    UsageEntity.new(self, data)
  end


  # Canonical facade: client.Value.list / client.Value.load({ "id" => ... })
  def Value(data = nil)
    require_relative 'entity/value_entity'
    ValueEntity.new(self, data)
  end


  # Canonical facade: client.Version.list / client.Version.load({ "id" => ... })
  def Version(data = nil)
    require_relative 'entity/version_entity'
    VersionEntity.new(self, data)
  end


  # Canonical facade: client.Worker.list / client.Worker.load({ "id" => ... })
  def Worker(data = nil)
    require_relative 'entity/worker_entity'
    WorkerEntity.new(self, data)
  end


  # Canonical facade: client.WorkerCronTrigger.list / client.WorkerCronTrigger.load({ "id" => ... })
  def WorkerCronTrigger(data = nil)
    require_relative 'entity/worker_cron_trigger_entity'
    WorkerCronTriggerEntity.new(self, data)
  end


  # Canonical facade: client.WorkerDeployment.list / client.WorkerDeployment.load({ "id" => ... })
  def WorkerDeployment(data = nil)
    require_relative 'entity/worker_deployment_entity'
    WorkerDeploymentEntity.new(self, data)
  end


  # Canonical facade: client.WorkerEnvironment.list / client.WorkerEnvironment.load({ "id" => ... })
  def WorkerEnvironment(data = nil)
    require_relative 'entity/worker_environment_entity'
    WorkerEnvironmentEntity.new(self, data)
  end


  # Canonical facade: client.WorkerRoute.list / client.WorkerRoute.load({ "id" => ... })
  def WorkerRoute(data = nil)
    require_relative 'entity/worker_route_entity'
    WorkerRouteEntity.new(self, data)
  end


  # Canonical facade: client.WorkerScript.list / client.WorkerScript.load({ "id" => ... })
  def WorkerScript(data = nil)
    require_relative 'entity/worker_script_entity'
    WorkerScriptEntity.new(self, data)
  end


  # Canonical facade: client.WorkerSubdomain.list / client.WorkerSubdomain.load({ "id" => ... })
  def WorkerSubdomain(data = nil)
    require_relative 'entity/worker_subdomain_entity'
    WorkerSubdomainEntity.new(self, data)
  end


  # Canonical facade: client.WorkerTailLog.list / client.WorkerTailLog.load({ "id" => ... })
  def WorkerTailLog(data = nil)
    require_relative 'entity/worker_tail_log_entity'
    WorkerTailLogEntity.new(self, data)
  end


  # Canonical facade: client.WorkersAccountSetting.list / client.WorkersAccountSetting.load({ "id" => ... })
  def WorkersAccountSetting(data = nil)
    require_relative 'entity/workers_account_setting_entity'
    WorkersAccountSettingEntity.new(self, data)
  end


  # Canonical facade: client.WorkersApiResponseNullResult.list / client.WorkersApiResponseNullResult.load({ "id" => ... })
  def WorkersApiResponseNullResult(data = nil)
    require_relative 'entity/workers_api_response_null_result_entity'
    WorkersApiResponseNullResultEntity.new(self, data)
  end


  # Canonical facade: client.WorkersCompletedUploadAsset.list / client.WorkersCompletedUploadAsset.load({ "id" => ... })
  def WorkersCompletedUploadAsset(data = nil)
    require_relative 'entity/workers_completed_upload_asset_entity'
    WorkersCompletedUploadAssetEntity.new(self, data)
  end


  # Canonical facade: client.WorkersCreateAssetsUploadSession.list / client.WorkersCreateAssetsUploadSession.load({ "id" => ... })
  def WorkersCreateAssetsUploadSession(data = nil)
    require_relative 'entity/workers_create_assets_upload_session_entity'
    WorkersCreateAssetsUploadSessionEntity.new(self, data)
  end


  # Canonical facade: client.WorkersForPlatform.list / client.WorkersForPlatform.load({ "id" => ... })
  def WorkersForPlatform(data = nil)
    require_relative 'entity/workers_for_platform_entity'
    WorkersForPlatformEntity.new(self, data)
  end


  # Canonical facade: client.WorkersKvApiResponseCommonNoResult.list / client.WorkersKvApiResponseCommonNoResult.load({ "id" => ... })
  def WorkersKvApiResponseCommonNoResult(data = nil)
    require_relative 'entity/workers_kv_api_response_common_no_result_entity'
    WorkersKvApiResponseCommonNoResultEntity.new(self, data)
  end


  # Canonical facade: client.WorkersKvNamespace.list / client.WorkersKvNamespace.load({ "id" => ... })
  def WorkersKvNamespace(data = nil)
    require_relative 'entity/workers_kv_namespace_entity'
    WorkersKvNamespaceEntity.new(self, data)
  end


  # Canonical facade: client.WorkersNamespaceList.list / client.WorkersNamespaceList.load({ "id" => ... })
  def WorkersNamespaceList(data = nil)
    require_relative 'entity/workers_namespace_list_entity'
    WorkersNamespaceListEntity.new(self, data)
  end


  # Canonical facade: client.WorkersNamespaceScriptDeleteBulk.list / client.WorkersNamespaceScriptDeleteBulk.load({ "id" => ... })
  def WorkersNamespaceScriptDeleteBulk(data = nil)
    require_relative 'entity/workers_namespace_script_delete_bulk_entity'
    WorkersNamespaceScriptDeleteBulkEntity.new(self, data)
  end


  # Canonical facade: client.WorkersNamespaceScriptResponseSingle.list / client.WorkersNamespaceScriptResponseSingle.load({ "id" => ... })
  def WorkersNamespaceScriptResponseSingle(data = nil)
    require_relative 'entity/workers_namespace_script_response_single_entity'
    WorkersNamespaceScriptResponseSingleEntity.new(self, data)
  end


  # Canonical facade: client.WorkersNamespaceSingle.list / client.WorkersNamespaceSingle.load({ "id" => ... })
  def WorkersNamespaceSingle(data = nil)
    require_relative 'entity/workers_namespace_single_entity'
    WorkersNamespaceSingleEntity.new(self, data)
  end


  # Canonical facade: client.WorkersPipelinesOther.list / client.WorkersPipelinesOther.load({ "id" => ... })
  def WorkersPipelinesOther(data = nil)
    require_relative 'entity/workers_pipelines_other_entity'
    WorkersPipelinesOtherEntity.new(self, data)
  end


  # Canonical facade: client.WorkersScriptAndVersionSetting.list / client.WorkersScriptAndVersionSetting.load({ "id" => ... })
  def WorkersScriptAndVersionSetting(data = nil)
    require_relative 'entity/workers_script_and_version_setting_entity'
    WorkersScriptAndVersionSettingEntity.new(self, data)
  end


  # Canonical facade: client.WorkersScriptResponseCollection.list / client.WorkersScriptResponseCollection.load({ "id" => ... })
  def WorkersScriptResponseCollection(data = nil)
    require_relative 'entity/workers_script_response_collection_entity'
    WorkersScriptResponseCollectionEntity.new(self, data)
  end


  # Canonical facade: client.WorkersScriptResponseSingle.list / client.WorkersScriptResponseSingle.load({ "id" => ... })
  def WorkersScriptResponseSingle(data = nil)
    require_relative 'entity/workers_script_response_single_entity'
    WorkersScriptResponseSingleEntity.new(self, data)
  end


  # Canonical facade: client.WorkersSmartPlacement.list / client.WorkersSmartPlacement.load({ "id" => ... })
  def WorkersSmartPlacement(data = nil)
    require_relative 'entity/workers_smart_placement_entity'
    WorkersSmartPlacementEntity.new(self, data)
  end


  # Canonical facade: client.WorkersUsageModel.list / client.WorkersUsageModel.load({ "id" => ... })
  def WorkersUsageModel(data = nil)
    require_relative 'entity/workers_usage_model_entity'
    WorkersUsageModelEntity.new(self, data)
  end


  # Canonical facade: client.WorkersVersionsList.list / client.WorkersVersionsList.load({ "id" => ... })
  def WorkersVersionsList(data = nil)
    require_relative 'entity/workers_versions_list_entity'
    WorkersVersionsListEntity.new(self, data)
  end


  # Canonical facade: client.WorkersVersionsSingle.list / client.WorkersVersionsSingle.load({ "id" => ... })
  def WorkersVersionsSingle(data = nil)
    require_relative 'entity/workers_versions_single_entity'
    WorkersVersionsSingleEntity.new(self, data)
  end


  # Canonical facade: client.WorkersVersionsUpload.list / client.WorkersVersionsUpload.load({ "id" => ... })
  def WorkersVersionsUpload(data = nil)
    require_relative 'entity/workers_versions_upload_entity'
    WorkersVersionsUploadEntity.new(self, data)
  end


  # Canonical facade: client.Workflow.list / client.Workflow.load({ "id" => ... })
  def Workflow(data = nil)
    require_relative 'entity/workflow_entity'
    WorkflowEntity.new(self, data)
  end



  def self.test(testopts = nil, sdkopts = nil)
    sdkopts = sdkopts || {}
    sdkopts = VoxgigStruct.clone(sdkopts)
    sdkopts = {} unless sdkopts.is_a?(Hash)

    testopts = testopts || {}
    testopts = VoxgigStruct.clone(testopts)
    testopts = {} unless testopts.is_a?(Hash)
    testopts["active"] = true

    VoxgigStruct.setpath(sdkopts, "feature.test", testopts)

    sdk = CloudflareWorkersSDK.new(sdkopts)
    sdk.mode = "test"
    sdk
  end
end
