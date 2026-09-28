-- CloudflareWorkers SDK

local vs = require("utility.struct.struct")
local Utility = require("core.utility_type")
local Spec = require("core.spec")
local helpers = require("core.helpers")

-- Load utility registration (populates Utility._registrar)
require("utility.register")

-- Typed-model annotations (LuaLS ---@class); empty at runtime.
require("cloudflare-workers_types")

-- Load features
local BaseFeature = require("feature.base_feature")
local features_factory = require("features")


local CloudflareWorkersSDK = {}
CloudflareWorkersSDK.__index = CloudflareWorkersSDK


local function _make_feature(name)
  local factory = features_factory[name]
  if factory ~= nil then
    return factory()
  end
  return features_factory.base()
end

CloudflareWorkersSDK._make_feature = _make_feature


function CloudflareWorkersSDK.new(options)
  local self = setmetatable({}, CloudflareWorkersSDK)
  self.mode = "live"
  self.features = {}
  self.options = nil

  local utility = Utility.new()
  self._utility = utility

  local config = require("config_shared")()

  self._rootctx = utility.make_context({
    client = self,
    utility = utility,
    config = config,
    options = options or {},
    shared = {},
  }, nil)

  self.options = utility.make_options(self._rootctx)

  if vs.getpath(self.options, "feature.test.active") == true then
    self.mode = "test"
  end

  self._rootctx.options = self.options

  -- Add features in the resolved order (make_options puts an explicit list
  -- order first, else defaults to test-first). Ordering matters: the `test`
  -- feature installs the base mock transport and the transport features
  -- (retry/cache/netsim/proxy/ratelimit) wrap whatever is current, so `test`
  -- must be added before them to sit at the base of the chain.
  local feature_opts = helpers.to_map(vs.getprop(self.options, "feature"))
  if feature_opts ~= nil then
    local featureorder = vs.getpath(self.options, "__derived__.featureorder")
    if type(featureorder) == "table" then
      for _, fname in ipairs(featureorder) do
        local fopts = helpers.to_map(feature_opts[fname])
        if fopts ~= nil and fopts["active"] == true then
          utility.feature_add(self._rootctx, _make_feature(fname))
        end
      end
    end
  end

  -- Add extension features.
  local extend = vs.getprop(self.options, "extend")
  if type(extend) == "table" then
    for _, f in ipairs(extend) do
      if type(f) == "table" and type(f.get_name) == "function" then
        utility.feature_add(self._rootctx, f)
      end
    end
  end

  -- CONSUMED, not kept. `extend` holds feature INSTANCES, and every shipped
  -- feature's init stores `self.client = ctx.client` - so leaving the list
  -- in self.options makes the options map CYCLIC (client.options.extend[1]
  -- .client == client), and options_map()'s vs.clone, which has no cycle
  -- guard, blew the stack on the first prepare_auth of any client built with
  -- an extend feature. The instances live on self.features from here on,
  -- which is the only place anything reads them; the SAME table is
  -- self._rootctx.options, so the root context loses the key too.
  self.options["extend"] = nil

  -- Initialize features.
  for _, f in ipairs(self.features) do
    utility.feature_init(self._rootctx, f)
  end

  utility.feature_hook(self._rootctx, "PostConstruct")

    -- feature: test


  return self
end


function CloudflareWorkersSDK:options_map()
  local out = vs.clone(self.options)
  if type(out) == "table" then
    return out
  end
  return {}
end


function CloudflareWorkersSDK:get_utility()
  return Utility.copy(self._utility)
end


function CloudflareWorkersSDK:get_root_ctx()
  return self._rootctx
end


function CloudflareWorkersSDK:prepare(fetchargs)
  local utility = self._utility

  fetchargs = fetchargs or {}

  local ctrl = helpers.to_map(vs.getprop(fetchargs, "ctrl")) or {}

  local ctx = utility.make_context({
    opname = "prepare",
    ctrl = ctrl,
  }, self._rootctx)

  local options = self.options

  local path = vs.getprop(fetchargs, "path") or ""
  if type(path) ~= "string" then path = "" end

  local method = vs.getprop(fetchargs, "method") or "GET"
  if type(method) ~= "string" then method = "GET" end

  local params = helpers.to_map(vs.getprop(fetchargs, "params")) or {}
  local query = helpers.to_map(vs.getprop(fetchargs, "query")) or {}

  local headers = utility.prepare_headers(ctx)

  local base = vs.getprop(options, "base") or ""
  if type(base) ~= "string" then base = "" end
  local prefix = vs.getprop(options, "prefix") or ""
  if type(prefix) ~= "string" then prefix = "" end
  local suffix = vs.getprop(options, "suffix") or ""
  if type(suffix) ~= "string" then suffix = "" end

  ctx.spec = Spec.new({
    base = base,
    prefix = prefix,
    suffix = suffix,
    path = path,
    method = method,
    params = params,
    query = query,
    headers = headers,
    body = vs.getprop(fetchargs, "body"),
    step = "start",
  })

  -- Merge user-provided headers.
  local uh = vs.getprop(fetchargs, "headers")
  if type(uh) == "table" then
    for k, v in pairs(uh) do
      ctx.spec.headers[k] = v
    end
  end

  local _, err = utility.prepare_auth(ctx)
  if err ~= nil then
    return nil, err
  end

  return utility.make_fetch_def(ctx)
end


-- Raw endpoint access is operator-controllable, like every entity op.
-- Blocking it means denying BOTH the 'direct' and 'graphql' tokens, since
-- either one reaches the same endpoint.
function CloudflareWorkersSDK:direct(fetchargs)
  if not self:_op_allowed("direct") then
    return self:_op_denied("direct"), nil
  end

  return self:_raw_request(fetchargs)
end


-- Is this raw-access op permitted by the SDK's allow.op option?
function CloudflareWorkersSDK:_op_allowed(op)
  local allow = vs.getpath(self.options, "allow.op")
  return type(allow) == "string" and allow:find(op, 1, true) ~= nil
end


function CloudflareWorkersSDK:_op_denied(op)
  local allow = vs.getpath(self.options, "allow.op")
  if type(allow) ~= "string" then allow = "" end
  return {
    ok = false,
    err = "CloudflareWorkersSDK: " .. op .. ": operation not allowed by" ..
      " SDK option allow.op value: \"" .. allow .. "\"",
  }
end


-- Ungated request path shared by direct and graphql, each of which checks its
-- own allow.op token first. Private, rather than a flag on fetchargs: a
-- caller-supplied marker would let anyone opt straight back out of the gate
-- by passing it.
function CloudflareWorkersSDK:_raw_request(fetchargs)
  local utility = self._utility

  local fetchdef, err = self:prepare(fetchargs)
  if err ~= nil then
    return { ok = false, err = err }, nil
  end

  fetchargs = fetchargs or {}
  local ctrl = helpers.to_map(vs.getprop(fetchargs, "ctrl")) or {}

  local ctx = utility.make_context({
    opname = "direct",
    ctrl = ctrl,
  }, self._rootctx)

  local url = fetchdef["url"] or ""
  local fetched, fetch_err = utility.fetcher(ctx, url, fetchdef)

  if fetch_err ~= nil then
    return { ok = false, err = fetch_err }, nil
  end

  if fetched == nil then
    return {
      ok = false,
      err = ctx:make_error("direct_no_response", "response: undefined"),
    }, nil
  end

  if type(fetched) == "table" then
    local status = helpers.to_int(vs.getprop(fetched, "status"))
    local headers = vs.getprop(fetched, "headers") or {}

    -- No-body responses (204, 304) and explicit zero content-length
    -- must skip JSON parsing — calling json() on an empty body errors.
    local content_length = nil
    if type(headers) == "table" then
      content_length = headers["content-length"]
    end
    local no_body = status == 204 or status == 304 or tostring(content_length) == "0"

    local json_data = nil
    if not no_body then
      local jf = vs.getprop(fetched, "json")
      if type(jf) == "function" then
        local ok, result = pcall(jf)
        if ok then
          json_data = result
        end
        -- Non-JSON body: json_data stays nil, status/headers preserved.
      end
    end

    return {
      ok = status >= 200 and status < 300,
      status = status,
      headers = headers,
      data = json_data,
    }, nil
  end

  return {
    ok = false,
    err = ctx:make_error("direct_invalid", "invalid response type"),
  }, nil
end


-- Raw GraphQL access: the pressure valve that makes the generated surface's
-- deliberate omissions (per-call selection sets, typed filter builders,
-- batching, subscriptions) livable — the whole schema stays reachable.
--
-- Thin wrapper over the same prepare/fetch path direct uses, with the one
-- thing raw direct cannot do for GraphQL: a GraphQL failure rides HTTP 200 as
-- a top-level `errors` array, so status alone would report a failed query as
-- ok.
--
-- NOTE: like direct, this bypasses the feature pipeline — no retry, ratelimit
-- or paging features apply.
function CloudflareWorkersSDK:graphql(query, variables, ctrl)
  if not self:_op_allowed("graphql") then
    return self:_op_denied("graphql"), nil
  end

  local res, err = self:_raw_request({
    method = "POST",
    headers = { ["content-type"] = "application/json" },
    body = {
      query = query,
      variables = type(variables) == "table" and variables or {},
    },
    ctrl = type(ctrl) == "table" and ctrl or {},
  })

  if err ~= nil or type(res) ~= "table" then
    return res, err
  end

  -- Errors are read BEFORE any status check: a GraphQL parse or validation
  -- failure comes back as HTTP 400 carrying the standard { errors = {...} }
  -- body, and the raw path represents a non-2xx as ok=false with no err — so
  -- returning early on status would discard the server's own diagnostics,
  -- which are the only useful part of that response.
  local errors = vs.getpath(res, "data.errors")

  if type(errors) == "table" and 0 < #errors then
    local msg = vs.getprop(errors[1], "message")
    if type(msg) ~= "string" or msg == "" then
      msg = "graphql error"
    end
    res.ok = false
    res.err = "CloudflareWorkersSDK: graphql: " .. msg
    res.graphql = errors
  end

  return res, nil
end



-- Idiomatic facade: client:Account():list() / client:Account():load({ id = ... })
-- Entity access is capitalised (PascalCase) for parity with the other SDKs.
function CloudflareWorkersSDK:Account(data)
  local EntityMod = require("entity.account_entity")
  if data == nil then
    if self._account == nil then
      self._account = EntityMod.new(self, nil)
    end
    return self._account
  end
  return EntityMod.new(self, data)
end


-- Idiomatic facade: client:Application():list() / client:Application():load({ id = ... })
-- Entity access is capitalised (PascalCase) for parity with the other SDKs.
function CloudflareWorkersSDK:Application(data)
  local EntityMod = require("entity.application_entity")
  if data == nil then
    if self._application == nil then
      self._application = EntityMod.new(self, nil)
    end
    return self._application
  end
  return EntityMod.new(self, data)
end


-- Idiomatic facade: client:Brapi():list() / client:Brapi():load({ id = ... })
-- Entity access is capitalised (PascalCase) for parity with the other SDKs.
function CloudflareWorkersSDK:Brapi(data)
  local EntityMod = require("entity.brapi_entity")
  if data == nil then
    if self._brapi == nil then
      self._brapi = EntityMod.new(self, nil)
    end
    return self._brapi
  end
  return EntityMod.new(self, data)
end


-- Idiomatic facade: client:Build():list() / client:Build():load({ id = ... })
-- Entity access is capitalised (PascalCase) for parity with the other SDKs.
function CloudflareWorkersSDK:Build(data)
  local EntityMod = require("entity.build_entity")
  if data == nil then
    if self._build == nil then
      self._build = EntityMod.new(self, nil)
    end
    return self._build
  end
  return EntityMod.new(self, data)
end


-- Idiomatic facade: client:BuildToken():list() / client:BuildToken():load({ id = ... })
-- Entity access is capitalised (PascalCase) for parity with the other SDKs.
function CloudflareWorkersSDK:BuildToken(data)
  local EntityMod = require("entity.build_token_entity")
  if data == nil then
    if self._build_token == nil then
      self._build_token = EntityMod.new(self, nil)
    end
    return self._build_token
  end
  return EntityMod.new(self, data)
end


-- Idiomatic facade: client:BuildsApi():list() / client:BuildsApi():load({ id = ... })
-- Entity access is capitalised (PascalCase) for parity with the other SDKs.
function CloudflareWorkersSDK:BuildsApi(data)
  local EntityMod = require("entity.builds_api_entity")
  if data == nil then
    if self._builds_api == nil then
      self._builds_api = EntityMod.new(self, nil)
    end
    return self._builds_api
  end
  return EntityMod.new(self, data)
end


-- Idiomatic facade: client:Connection():list() / client:Connection():load({ id = ... })
-- Entity access is capitalised (PascalCase) for parity with the other SDKs.
function CloudflareWorkersSDK:Connection(data)
  local EntityMod = require("entity.connection_entity")
  if data == nil then
    if self._connection == nil then
      self._connection = EntityMod.new(self, nil)
    end
    return self._connection
  end
  return EntityMod.new(self, data)
end


-- Idiomatic facade: client:ContainerImage():list() / client:ContainerImage():load({ id = ... })
-- Entity access is capitalised (PascalCase) for parity with the other SDKs.
function CloudflareWorkersSDK:ContainerImage(data)
  local EntityMod = require("entity.container_image_entity")
  if data == nil then
    if self._container_image == nil then
      self._container_image = EntityMod.new(self, nil)
    end
    return self._container_image
  end
  return EntityMod.new(self, data)
end


-- Idiomatic facade: client:ContainerInstance():list() / client:ContainerInstance():load({ id = ... })
-- Entity access is capitalised (PascalCase) for parity with the other SDKs.
function CloudflareWorkersSDK:ContainerInstance(data)
  local EntityMod = require("entity.container_instance_entity")
  if data == nil then
    if self._container_instance == nil then
      self._container_instance = EntityMod.new(self, nil)
    end
    return self._container_instance
  end
  return EntityMod.new(self, data)
end


-- Idiomatic facade: client:DeployHook():list() / client:DeployHook():load({ id = ... })
-- Entity access is capitalised (PascalCase) for parity with the other SDKs.
function CloudflareWorkersSDK:DeployHook(data)
  local EntityMod = require("entity.deploy_hook_entity")
  if data == nil then
    if self._deploy_hook == nil then
      self._deploy_hook = EntityMod.new(self, nil)
    end
    return self._deploy_hook
  end
  return EntityMod.new(self, data)
end


-- Idiomatic facade: client:Deployment():list() / client:Deployment():load({ id = ... })
-- Entity access is capitalised (PascalCase) for parity with the other SDKs.
function CloudflareWorkersSDK:Deployment(data)
  local EntityMod = require("entity.deployment_entity")
  if data == nil then
    if self._deployment == nil then
      self._deployment = EntityMod.new(self, nil)
    end
    return self._deployment
  end
  return EntityMod.new(self, data)
end


-- Idiomatic facade: client:Destination():list() / client:Destination():load({ id = ... })
-- Entity access is capitalised (PascalCase) for parity with the other SDKs.
function CloudflareWorkersSDK:Destination(data)
  local EntityMod = require("entity.destination_entity")
  if data == nil then
    if self._destination == nil then
      self._destination = EntityMod.new(self, nil)
    end
    return self._destination
  end
  return EntityMod.new(self, data)
end


-- Idiomatic facade: client:Domain():list() / client:Domain():load({ id = ... })
-- Entity access is capitalised (PascalCase) for parity with the other SDKs.
function CloudflareWorkersSDK:Domain(data)
  local EntityMod = require("entity.domain_entity")
  if data == nil then
    if self._domain == nil then
      self._domain = EntityMod.new(self, nil)
    end
    return self._domain
  end
  return EntityMod.new(self, data)
end


-- Idiomatic facade: client:DurableObjectsNamespace():list() / client:DurableObjectsNamespace():load({ id = ... })
-- Entity access is capitalised (PascalCase) for parity with the other SDKs.
function CloudflareWorkersSDK:DurableObjectsNamespace(data)
  local EntityMod = require("entity.durable_objects_namespace_entity")
  if data == nil then
    if self._durable_objects_namespace == nil then
      self._durable_objects_namespace = EntityMod.new(self, nil)
    end
    return self._durable_objects_namespace
  end
  return EntityMod.new(self, data)
end


-- Idiomatic facade: client:EnvironmentVariable():list() / client:EnvironmentVariable():load({ id = ... })
-- Entity access is capitalised (PascalCase) for parity with the other SDKs.
function CloudflareWorkersSDK:EnvironmentVariable(data)
  local EntityMod = require("entity.environment_variable_entity")
  if data == nil then
    if self._environment_variable == nil then
      self._environment_variable = EntityMod.new(self, nil)
    end
    return self._environment_variable
  end
  return EntityMod.new(self, data)
end


-- Idiomatic facade: client:GitHubIntegration():list() / client:GitHubIntegration():load({ id = ... })
-- Entity access is capitalised (PascalCase) for parity with the other SDKs.
function CloudflareWorkersSDK:GitHubIntegration(data)
  local EntityMod = require("entity.git_hub_integration_entity")
  if data == nil then
    if self._git_hub_integration == nil then
      self._git_hub_integration = EntityMod.new(self, nil)
    end
    return self._git_hub_integration
  end
  return EntityMod.new(self, data)
end


-- Idiomatic facade: client:Hyperdrive():list() / client:Hyperdrive():load({ id = ... })
-- Entity access is capitalised (PascalCase) for parity with the other SDKs.
function CloudflareWorkersSDK:Hyperdrive(data)
  local EntityMod = require("entity.hyperdrive_entity")
  if data == nil then
    if self._hyperdrive == nil then
      self._hyperdrive = EntityMod.new(self, nil)
    end
    return self._hyperdrive
  end
  return EntityMod.new(self, data)
end


-- Idiomatic facade: client:ImageRegistry():list() / client:ImageRegistry():load({ id = ... })
-- Entity access is capitalised (PascalCase) for parity with the other SDKs.
function CloudflareWorkersSDK:ImageRegistry(data)
  local EntityMod = require("entity.image_registry_entity")
  if data == nil then
    if self._image_registry == nil then
      self._image_registry = EntityMod.new(self, nil)
    end
    return self._image_registry
  end
  return EntityMod.new(self, data)
end


-- Idiomatic facade: client:Issue():list() / client:Issue():load({ id = ... })
-- Entity access is capitalised (PascalCase) for parity with the other SDKs.
function CloudflareWorkersSDK:Issue(data)
  local EntityMod = require("entity.issue_entity")
  if data == nil then
    if self._issue == nil then
      self._issue = EntityMod.new(self, nil)
    end
    return self._issue
  end
  return EntityMod.new(self, data)
end


-- Idiomatic facade: client:Key():list() / client:Key():load({ id = ... })
-- Entity access is capitalised (PascalCase) for parity with the other SDKs.
function CloudflareWorkersSDK:Key(data)
  local EntityMod = require("entity.key_entity")
  if data == nil then
    if self._key == nil then
      self._key = EntityMod.new(self, nil)
    end
    return self._key
  end
  return EntityMod.new(self, data)
end


-- Idiomatic facade: client:LiveTail():list() / client:LiveTail():load({ id = ... })
-- Entity access is capitalised (PascalCase) for parity with the other SDKs.
function CloudflareWorkersSDK:LiveTail(data)
  local EntityMod = require("entity.live_tail_entity")
  if data == nil then
    if self._live_tail == nil then
      self._live_tail = EntityMod.new(self, nil)
    end
    return self._live_tail
  end
  return EntityMod.new(self, data)
end


-- Idiomatic facade: client:MetricsExport():list() / client:MetricsExport():load({ id = ... })
-- Entity access is capitalised (PascalCase) for parity with the other SDKs.
function CloudflareWorkersSDK:MetricsExport(data)
  local EntityMod = require("entity.metrics_export_entity")
  if data == nil then
    if self._metrics_export == nil then
      self._metrics_export = EntityMod.new(self, nil)
    end
    return self._metrics_export
  end
  return EntityMod.new(self, data)
end


-- Idiomatic facade: client:Namespace():list() / client:Namespace():load({ id = ... })
-- Entity access is capitalised (PascalCase) for parity with the other SDKs.
function CloudflareWorkersSDK:Namespace(data)
  local EntityMod = require("entity.namespace_entity")
  if data == nil then
    if self._namespace == nil then
      self._namespace = EntityMod.new(self, nil)
    end
    return self._namespace
  end
  return EntityMod.new(self, data)
end


-- Idiomatic facade: client:Preview():list() / client:Preview():load({ id = ... })
-- Entity access is capitalised (PascalCase) for parity with the other SDKs.
function CloudflareWorkersSDK:Preview(data)
  local EntityMod = require("entity.preview_entity")
  if data == nil then
    if self._preview == nil then
      self._preview = EntityMod.new(self, nil)
    end
    return self._preview
  end
  return EntityMod.new(self, data)
end


-- Idiomatic facade: client:PreviewDeployment():list() / client:PreviewDeployment():load({ id = ... })
-- Entity access is capitalised (PascalCase) for parity with the other SDKs.
function CloudflareWorkersSDK:PreviewDeployment(data)
  local EntityMod = require("entity.preview_deployment_entity")
  if data == nil then
    if self._preview_deployment == nil then
      self._preview_deployment = EntityMod.new(self, nil)
    end
    return self._preview_deployment
  end
  return EntityMod.new(self, data)
end


-- Idiomatic facade: client:Query():list() / client:Query():load({ id = ... })
-- Entity access is capitalised (PascalCase) for parity with the other SDKs.
function CloudflareWorkersSDK:Query(data)
  local EntityMod = require("entity.query_entity")
  if data == nil then
    if self._query == nil then
      self._query = EntityMod.new(self, nil)
    end
    return self._query
  end
  return EntityMod.new(self, data)
end


-- Idiomatic facade: client:RepositoryConnection():list() / client:RepositoryConnection():load({ id = ... })
-- Entity access is capitalised (PascalCase) for parity with the other SDKs.
function CloudflareWorkersSDK:RepositoryConnection(data)
  local EntityMod = require("entity.repository_connection_entity")
  if data == nil then
    if self._repository_connection == nil then
      self._repository_connection = EntityMod.new(self, nil)
    end
    return self._repository_connection
  end
  return EntityMod.new(self, data)
end


-- Idiomatic facade: client:Rollout():list() / client:Rollout():load({ id = ... })
-- Entity access is capitalised (PascalCase) for parity with the other SDKs.
function CloudflareWorkersSDK:Rollout(data)
  local EntityMod = require("entity.rollout_entity")
  if data == nil then
    if self._rollout == nil then
      self._rollout = EntityMod.new(self, nil)
    end
    return self._rollout
  end
  return EntityMod.new(self, data)
end


-- Idiomatic facade: client:SavedQuery():list() / client:SavedQuery():load({ id = ... })
-- Entity access is capitalised (PascalCase) for parity with the other SDKs.
function CloudflareWorkersSDK:SavedQuery(data)
  local EntityMod = require("entity.saved_query_entity")
  if data == nil then
    if self._saved_query == nil then
      self._saved_query = EntityMod.new(self, nil)
    end
    return self._saved_query
  end
  return EntityMod.new(self, data)
end


-- Idiomatic facade: client:Script():list() / client:Script():load({ id = ... })
-- Entity access is capitalised (PascalCase) for parity with the other SDKs.
function CloudflareWorkersSDK:Script(data)
  local EntityMod = require("entity.script_entity")
  if data == nil then
    if self._script == nil then
      self._script = EntityMod.new(self, nil)
    end
    return self._script
  end
  return EntityMod.new(self, data)
end


-- Idiomatic facade: client:ScriptSetting():list() / client:ScriptSetting():load({ id = ... })
-- Entity access is capitalised (PascalCase) for parity with the other SDKs.
function CloudflareWorkersSDK:ScriptSetting(data)
  local EntityMod = require("entity.script_setting_entity")
  if data == nil then
    if self._script_setting == nil then
      self._script_setting = EntityMod.new(self, nil)
    end
    return self._script_setting
  end
  return EntityMod.new(self, data)
end


-- Idiomatic facade: client:Secret():list() / client:Secret():load({ id = ... })
-- Entity access is capitalised (PascalCase) for parity with the other SDKs.
function CloudflareWorkersSDK:Secret(data)
  local EntityMod = require("entity.secret_entity")
  if data == nil then
    if self._secret == nil then
      self._secret = EntityMod.new(self, nil)
    end
    return self._secret
  end
  return EntityMod.new(self, data)
end


-- Idiomatic facade: client:SecretsStoreDelete():list() / client:SecretsStoreDelete():load({ id = ... })
-- Entity access is capitalised (PascalCase) for parity with the other SDKs.
function CloudflareWorkersSDK:SecretsStoreDelete(data)
  local EntityMod = require("entity.secrets_store_delete_entity")
  if data == nil then
    if self._secrets_store_delete == nil then
      self._secrets_store_delete = EntityMod.new(self, nil)
    end
    return self._secrets_store_delete
  end
  return EntityMod.new(self, data)
end


-- Idiomatic facade: client:SecretsStoreQuota():list() / client:SecretsStoreQuota():load({ id = ... })
-- Entity access is capitalised (PascalCase) for parity with the other SDKs.
function CloudflareWorkersSDK:SecretsStoreQuota(data)
  local EntityMod = require("entity.secrets_store_quota_entity")
  if data == nil then
    if self._secrets_store_quota == nil then
      self._secrets_store_quota = EntityMod.new(self, nil)
    end
    return self._secrets_store_quota
  end
  return EntityMod.new(self, data)
end


-- Idiomatic facade: client:SecretsStoreSecret():list() / client:SecretsStoreSecret():load({ id = ... })
-- Entity access is capitalised (PascalCase) for parity with the other SDKs.
function CloudflareWorkersSDK:SecretsStoreSecret(data)
  local EntityMod = require("entity.secrets_store_secret_entity")
  if data == nil then
    if self._secrets_store_secret == nil then
      self._secrets_store_secret = EntityMod.new(self, nil)
    end
    return self._secrets_store_secret
  end
  return EntityMod.new(self, data)
end


-- Idiomatic facade: client:SecretsStoreStore():list() / client:SecretsStoreStore():load({ id = ... })
-- Entity access is capitalised (PascalCase) for parity with the other SDKs.
function CloudflareWorkersSDK:SecretsStoreStore(data)
  local EntityMod = require("entity.secrets_store_store_entity")
  if data == nil then
    if self._secrets_store_store == nil then
      self._secrets_store_store = EntityMod.new(self, nil)
    end
    return self._secrets_store_store
  end
  return EntityMod.new(self, data)
end


-- Idiomatic facade: client:SecretsStoreStoresResponseCollection():list() / client:SecretsStoreStoresResponseCollection():load({ id = ... })
-- Entity access is capitalised (PascalCase) for parity with the other SDKs.
function CloudflareWorkersSDK:SecretsStoreStoresResponseCollection(data)
  local EntityMod = require("entity.secrets_store_stores_response_collection_entity")
  if data == nil then
    if self._secrets_store_stores_response_collection == nil then
      self._secrets_store_stores_response_collection = EntityMod.new(self, nil)
    end
    return self._secrets_store_stores_response_collection
  end
  return EntityMod.new(self, data)
end


-- Idiomatic facade: client:Setting():list() / client:Setting():load({ id = ... })
-- Entity access is capitalised (PascalCase) for parity with the other SDKs.
function CloudflareWorkersSDK:Setting(data)
  local EntityMod = require("entity.setting_entity")
  if data == nil then
    if self._setting == nil then
      self._setting = EntityMod.new(self, nil)
    end
    return self._setting
  end
  return EntityMod.new(self, data)
end


-- Idiomatic facade: client:Shared():list() / client:Shared():load({ id = ... })
-- Entity access is capitalised (PascalCase) for parity with the other SDKs.
function CloudflareWorkersSDK:Shared(data)
  local EntityMod = require("entity.shared_entity")
  if data == nil then
    if self._shared == nil then
      self._shared = EntityMod.new(self, nil)
    end
    return self._shared
  end
  return EntityMod.new(self, data)
end


-- Idiomatic facade: client:Tail():list() / client:Tail():load({ id = ... })
-- Entity access is capitalised (PascalCase) for parity with the other SDKs.
function CloudflareWorkersSDK:Tail(data)
  local EntityMod = require("entity.tail_entity")
  if data == nil then
    if self._tail == nil then
      self._tail = EntityMod.new(self, nil)
    end
    return self._tail
  end
  return EntityMod.new(self, data)
end


-- Idiomatic facade: client:Token():list() / client:Token():load({ id = ... })
-- Entity access is capitalised (PascalCase) for parity with the other SDKs.
function CloudflareWorkersSDK:Token(data)
  local EntityMod = require("entity.token_entity")
  if data == nil then
    if self._token == nil then
      self._token = EntityMod.new(self, nil)
    end
    return self._token
  end
  return EntityMod.new(self, data)
end


-- Idiomatic facade: client:Trigger():list() / client:Trigger():load({ id = ... })
-- Entity access is capitalised (PascalCase) for parity with the other SDKs.
function CloudflareWorkersSDK:Trigger(data)
  local EntityMod = require("entity.trigger_entity")
  if data == nil then
    if self._trigger == nil then
      self._trigger = EntityMod.new(self, nil)
    end
    return self._trigger
  end
  return EntityMod.new(self, data)
end


-- Idiomatic facade: client:Usage():list() / client:Usage():load({ id = ... })
-- Entity access is capitalised (PascalCase) for parity with the other SDKs.
function CloudflareWorkersSDK:Usage(data)
  local EntityMod = require("entity.usage_entity")
  if data == nil then
    if self._usage == nil then
      self._usage = EntityMod.new(self, nil)
    end
    return self._usage
  end
  return EntityMod.new(self, data)
end


-- Idiomatic facade: client:Value():list() / client:Value():load({ id = ... })
-- Entity access is capitalised (PascalCase) for parity with the other SDKs.
function CloudflareWorkersSDK:Value(data)
  local EntityMod = require("entity.value_entity")
  if data == nil then
    if self._value == nil then
      self._value = EntityMod.new(self, nil)
    end
    return self._value
  end
  return EntityMod.new(self, data)
end


-- Idiomatic facade: client:Version():list() / client:Version():load({ id = ... })
-- Entity access is capitalised (PascalCase) for parity with the other SDKs.
function CloudflareWorkersSDK:Version(data)
  local EntityMod = require("entity.version_entity")
  if data == nil then
    if self._version == nil then
      self._version = EntityMod.new(self, nil)
    end
    return self._version
  end
  return EntityMod.new(self, data)
end


-- Idiomatic facade: client:Worker():list() / client:Worker():load({ id = ... })
-- Entity access is capitalised (PascalCase) for parity with the other SDKs.
function CloudflareWorkersSDK:Worker(data)
  local EntityMod = require("entity.worker_entity")
  if data == nil then
    if self._worker == nil then
      self._worker = EntityMod.new(self, nil)
    end
    return self._worker
  end
  return EntityMod.new(self, data)
end


-- Idiomatic facade: client:WorkerCronTrigger():list() / client:WorkerCronTrigger():load({ id = ... })
-- Entity access is capitalised (PascalCase) for parity with the other SDKs.
function CloudflareWorkersSDK:WorkerCronTrigger(data)
  local EntityMod = require("entity.worker_cron_trigger_entity")
  if data == nil then
    if self._worker_cron_trigger == nil then
      self._worker_cron_trigger = EntityMod.new(self, nil)
    end
    return self._worker_cron_trigger
  end
  return EntityMod.new(self, data)
end


-- Idiomatic facade: client:WorkerDeployment():list() / client:WorkerDeployment():load({ id = ... })
-- Entity access is capitalised (PascalCase) for parity with the other SDKs.
function CloudflareWorkersSDK:WorkerDeployment(data)
  local EntityMod = require("entity.worker_deployment_entity")
  if data == nil then
    if self._worker_deployment == nil then
      self._worker_deployment = EntityMod.new(self, nil)
    end
    return self._worker_deployment
  end
  return EntityMod.new(self, data)
end


-- Idiomatic facade: client:WorkerEnvironment():list() / client:WorkerEnvironment():load({ id = ... })
-- Entity access is capitalised (PascalCase) for parity with the other SDKs.
function CloudflareWorkersSDK:WorkerEnvironment(data)
  local EntityMod = require("entity.worker_environment_entity")
  if data == nil then
    if self._worker_environment == nil then
      self._worker_environment = EntityMod.new(self, nil)
    end
    return self._worker_environment
  end
  return EntityMod.new(self, data)
end


-- Idiomatic facade: client:WorkerRoute():list() / client:WorkerRoute():load({ id = ... })
-- Entity access is capitalised (PascalCase) for parity with the other SDKs.
function CloudflareWorkersSDK:WorkerRoute(data)
  local EntityMod = require("entity.worker_route_entity")
  if data == nil then
    if self._worker_route == nil then
      self._worker_route = EntityMod.new(self, nil)
    end
    return self._worker_route
  end
  return EntityMod.new(self, data)
end


-- Idiomatic facade: client:WorkerScript():list() / client:WorkerScript():load({ id = ... })
-- Entity access is capitalised (PascalCase) for parity with the other SDKs.
function CloudflareWorkersSDK:WorkerScript(data)
  local EntityMod = require("entity.worker_script_entity")
  if data == nil then
    if self._worker_script == nil then
      self._worker_script = EntityMod.new(self, nil)
    end
    return self._worker_script
  end
  return EntityMod.new(self, data)
end


-- Idiomatic facade: client:WorkerSubdomain():list() / client:WorkerSubdomain():load({ id = ... })
-- Entity access is capitalised (PascalCase) for parity with the other SDKs.
function CloudflareWorkersSDK:WorkerSubdomain(data)
  local EntityMod = require("entity.worker_subdomain_entity")
  if data == nil then
    if self._worker_subdomain == nil then
      self._worker_subdomain = EntityMod.new(self, nil)
    end
    return self._worker_subdomain
  end
  return EntityMod.new(self, data)
end


-- Idiomatic facade: client:WorkerTailLog():list() / client:WorkerTailLog():load({ id = ... })
-- Entity access is capitalised (PascalCase) for parity with the other SDKs.
function CloudflareWorkersSDK:WorkerTailLog(data)
  local EntityMod = require("entity.worker_tail_log_entity")
  if data == nil then
    if self._worker_tail_log == nil then
      self._worker_tail_log = EntityMod.new(self, nil)
    end
    return self._worker_tail_log
  end
  return EntityMod.new(self, data)
end


-- Idiomatic facade: client:WorkersAccountSetting():list() / client:WorkersAccountSetting():load({ id = ... })
-- Entity access is capitalised (PascalCase) for parity with the other SDKs.
function CloudflareWorkersSDK:WorkersAccountSetting(data)
  local EntityMod = require("entity.workers_account_setting_entity")
  if data == nil then
    if self._workers_account_setting == nil then
      self._workers_account_setting = EntityMod.new(self, nil)
    end
    return self._workers_account_setting
  end
  return EntityMod.new(self, data)
end


-- Idiomatic facade: client:WorkersApiResponseNullResult():list() / client:WorkersApiResponseNullResult():load({ id = ... })
-- Entity access is capitalised (PascalCase) for parity with the other SDKs.
function CloudflareWorkersSDK:WorkersApiResponseNullResult(data)
  local EntityMod = require("entity.workers_api_response_null_result_entity")
  if data == nil then
    if self._workers_api_response_null_result == nil then
      self._workers_api_response_null_result = EntityMod.new(self, nil)
    end
    return self._workers_api_response_null_result
  end
  return EntityMod.new(self, data)
end


-- Idiomatic facade: client:WorkersCompletedUploadAsset():list() / client:WorkersCompletedUploadAsset():load({ id = ... })
-- Entity access is capitalised (PascalCase) for parity with the other SDKs.
function CloudflareWorkersSDK:WorkersCompletedUploadAsset(data)
  local EntityMod = require("entity.workers_completed_upload_asset_entity")
  if data == nil then
    if self._workers_completed_upload_asset == nil then
      self._workers_completed_upload_asset = EntityMod.new(self, nil)
    end
    return self._workers_completed_upload_asset
  end
  return EntityMod.new(self, data)
end


-- Idiomatic facade: client:WorkersCreateAssetsUploadSession():list() / client:WorkersCreateAssetsUploadSession():load({ id = ... })
-- Entity access is capitalised (PascalCase) for parity with the other SDKs.
function CloudflareWorkersSDK:WorkersCreateAssetsUploadSession(data)
  local EntityMod = require("entity.workers_create_assets_upload_session_entity")
  if data == nil then
    if self._workers_create_assets_upload_session == nil then
      self._workers_create_assets_upload_session = EntityMod.new(self, nil)
    end
    return self._workers_create_assets_upload_session
  end
  return EntityMod.new(self, data)
end


-- Idiomatic facade: client:WorkersForPlatform():list() / client:WorkersForPlatform():load({ id = ... })
-- Entity access is capitalised (PascalCase) for parity with the other SDKs.
function CloudflareWorkersSDK:WorkersForPlatform(data)
  local EntityMod = require("entity.workers_for_platform_entity")
  if data == nil then
    if self._workers_for_platform == nil then
      self._workers_for_platform = EntityMod.new(self, nil)
    end
    return self._workers_for_platform
  end
  return EntityMod.new(self, data)
end


-- Idiomatic facade: client:WorkersKvApiResponseCommonNoResult():list() / client:WorkersKvApiResponseCommonNoResult():load({ id = ... })
-- Entity access is capitalised (PascalCase) for parity with the other SDKs.
function CloudflareWorkersSDK:WorkersKvApiResponseCommonNoResult(data)
  local EntityMod = require("entity.workers_kv_api_response_common_no_result_entity")
  if data == nil then
    if self._workers_kv_api_response_common_no_result == nil then
      self._workers_kv_api_response_common_no_result = EntityMod.new(self, nil)
    end
    return self._workers_kv_api_response_common_no_result
  end
  return EntityMod.new(self, data)
end


-- Idiomatic facade: client:WorkersKvNamespace():list() / client:WorkersKvNamespace():load({ id = ... })
-- Entity access is capitalised (PascalCase) for parity with the other SDKs.
function CloudflareWorkersSDK:WorkersKvNamespace(data)
  local EntityMod = require("entity.workers_kv_namespace_entity")
  if data == nil then
    if self._workers_kv_namespace == nil then
      self._workers_kv_namespace = EntityMod.new(self, nil)
    end
    return self._workers_kv_namespace
  end
  return EntityMod.new(self, data)
end


-- Idiomatic facade: client:WorkersNamespaceList():list() / client:WorkersNamespaceList():load({ id = ... })
-- Entity access is capitalised (PascalCase) for parity with the other SDKs.
function CloudflareWorkersSDK:WorkersNamespaceList(data)
  local EntityMod = require("entity.workers_namespace_list_entity")
  if data == nil then
    if self._workers_namespace_list == nil then
      self._workers_namespace_list = EntityMod.new(self, nil)
    end
    return self._workers_namespace_list
  end
  return EntityMod.new(self, data)
end


-- Idiomatic facade: client:WorkersNamespaceScriptDeleteBulk():list() / client:WorkersNamespaceScriptDeleteBulk():load({ id = ... })
-- Entity access is capitalised (PascalCase) for parity with the other SDKs.
function CloudflareWorkersSDK:WorkersNamespaceScriptDeleteBulk(data)
  local EntityMod = require("entity.workers_namespace_script_delete_bulk_entity")
  if data == nil then
    if self._workers_namespace_script_delete_bulk == nil then
      self._workers_namespace_script_delete_bulk = EntityMod.new(self, nil)
    end
    return self._workers_namespace_script_delete_bulk
  end
  return EntityMod.new(self, data)
end


-- Idiomatic facade: client:WorkersNamespaceScriptResponseSingle():list() / client:WorkersNamespaceScriptResponseSingle():load({ id = ... })
-- Entity access is capitalised (PascalCase) for parity with the other SDKs.
function CloudflareWorkersSDK:WorkersNamespaceScriptResponseSingle(data)
  local EntityMod = require("entity.workers_namespace_script_response_single_entity")
  if data == nil then
    if self._workers_namespace_script_response_single == nil then
      self._workers_namespace_script_response_single = EntityMod.new(self, nil)
    end
    return self._workers_namespace_script_response_single
  end
  return EntityMod.new(self, data)
end


-- Idiomatic facade: client:WorkersNamespaceSingle():list() / client:WorkersNamespaceSingle():load({ id = ... })
-- Entity access is capitalised (PascalCase) for parity with the other SDKs.
function CloudflareWorkersSDK:WorkersNamespaceSingle(data)
  local EntityMod = require("entity.workers_namespace_single_entity")
  if data == nil then
    if self._workers_namespace_single == nil then
      self._workers_namespace_single = EntityMod.new(self, nil)
    end
    return self._workers_namespace_single
  end
  return EntityMod.new(self, data)
end


-- Idiomatic facade: client:WorkersPipelinesOther():list() / client:WorkersPipelinesOther():load({ id = ... })
-- Entity access is capitalised (PascalCase) for parity with the other SDKs.
function CloudflareWorkersSDK:WorkersPipelinesOther(data)
  local EntityMod = require("entity.workers_pipelines_other_entity")
  if data == nil then
    if self._workers_pipelines_other == nil then
      self._workers_pipelines_other = EntityMod.new(self, nil)
    end
    return self._workers_pipelines_other
  end
  return EntityMod.new(self, data)
end


-- Idiomatic facade: client:WorkersScriptAndVersionSetting():list() / client:WorkersScriptAndVersionSetting():load({ id = ... })
-- Entity access is capitalised (PascalCase) for parity with the other SDKs.
function CloudflareWorkersSDK:WorkersScriptAndVersionSetting(data)
  local EntityMod = require("entity.workers_script_and_version_setting_entity")
  if data == nil then
    if self._workers_script_and_version_setting == nil then
      self._workers_script_and_version_setting = EntityMod.new(self, nil)
    end
    return self._workers_script_and_version_setting
  end
  return EntityMod.new(self, data)
end


-- Idiomatic facade: client:WorkersScriptResponseCollection():list() / client:WorkersScriptResponseCollection():load({ id = ... })
-- Entity access is capitalised (PascalCase) for parity with the other SDKs.
function CloudflareWorkersSDK:WorkersScriptResponseCollection(data)
  local EntityMod = require("entity.workers_script_response_collection_entity")
  if data == nil then
    if self._workers_script_response_collection == nil then
      self._workers_script_response_collection = EntityMod.new(self, nil)
    end
    return self._workers_script_response_collection
  end
  return EntityMod.new(self, data)
end


-- Idiomatic facade: client:WorkersScriptResponseSingle():list() / client:WorkersScriptResponseSingle():load({ id = ... })
-- Entity access is capitalised (PascalCase) for parity with the other SDKs.
function CloudflareWorkersSDK:WorkersScriptResponseSingle(data)
  local EntityMod = require("entity.workers_script_response_single_entity")
  if data == nil then
    if self._workers_script_response_single == nil then
      self._workers_script_response_single = EntityMod.new(self, nil)
    end
    return self._workers_script_response_single
  end
  return EntityMod.new(self, data)
end


-- Idiomatic facade: client:WorkersSmartPlacement():list() / client:WorkersSmartPlacement():load({ id = ... })
-- Entity access is capitalised (PascalCase) for parity with the other SDKs.
function CloudflareWorkersSDK:WorkersSmartPlacement(data)
  local EntityMod = require("entity.workers_smart_placement_entity")
  if data == nil then
    if self._workers_smart_placement == nil then
      self._workers_smart_placement = EntityMod.new(self, nil)
    end
    return self._workers_smart_placement
  end
  return EntityMod.new(self, data)
end


-- Idiomatic facade: client:WorkersUsageModel():list() / client:WorkersUsageModel():load({ id = ... })
-- Entity access is capitalised (PascalCase) for parity with the other SDKs.
function CloudflareWorkersSDK:WorkersUsageModel(data)
  local EntityMod = require("entity.workers_usage_model_entity")
  if data == nil then
    if self._workers_usage_model == nil then
      self._workers_usage_model = EntityMod.new(self, nil)
    end
    return self._workers_usage_model
  end
  return EntityMod.new(self, data)
end


-- Idiomatic facade: client:WorkersVersionsList():list() / client:WorkersVersionsList():load({ id = ... })
-- Entity access is capitalised (PascalCase) for parity with the other SDKs.
function CloudflareWorkersSDK:WorkersVersionsList(data)
  local EntityMod = require("entity.workers_versions_list_entity")
  if data == nil then
    if self._workers_versions_list == nil then
      self._workers_versions_list = EntityMod.new(self, nil)
    end
    return self._workers_versions_list
  end
  return EntityMod.new(self, data)
end


-- Idiomatic facade: client:WorkersVersionsSingle():list() / client:WorkersVersionsSingle():load({ id = ... })
-- Entity access is capitalised (PascalCase) for parity with the other SDKs.
function CloudflareWorkersSDK:WorkersVersionsSingle(data)
  local EntityMod = require("entity.workers_versions_single_entity")
  if data == nil then
    if self._workers_versions_single == nil then
      self._workers_versions_single = EntityMod.new(self, nil)
    end
    return self._workers_versions_single
  end
  return EntityMod.new(self, data)
end


-- Idiomatic facade: client:WorkersVersionsUpload():list() / client:WorkersVersionsUpload():load({ id = ... })
-- Entity access is capitalised (PascalCase) for parity with the other SDKs.
function CloudflareWorkersSDK:WorkersVersionsUpload(data)
  local EntityMod = require("entity.workers_versions_upload_entity")
  if data == nil then
    if self._workers_versions_upload == nil then
      self._workers_versions_upload = EntityMod.new(self, nil)
    end
    return self._workers_versions_upload
  end
  return EntityMod.new(self, data)
end


-- Idiomatic facade: client:Workflow():list() / client:Workflow():load({ id = ... })
-- Entity access is capitalised (PascalCase) for parity with the other SDKs.
function CloudflareWorkersSDK:Workflow(data)
  local EntityMod = require("entity.workflow_entity")
  if data == nil then
    if self._workflow == nil then
      self._workflow = EntityMod.new(self, nil)
    end
    return self._workflow
  end
  return EntityMod.new(self, data)
end




function CloudflareWorkersSDK.test(testopts, sdkopts)
  sdkopts = sdkopts or {}
  sdkopts = vs.clone(sdkopts)
  if type(sdkopts) ~= "table" then
    sdkopts = {}
  end

  testopts = testopts or {}
  testopts = vs.clone(testopts)
  if type(testopts) ~= "table" then
    testopts = {}
  end
  testopts["active"] = true

  vs.setpath(sdkopts, "feature.test", testopts)

  local sdk = CloudflareWorkersSDK.new(sdkopts)
  sdk.mode = "test"

  return sdk
end


return CloudflareWorkersSDK
