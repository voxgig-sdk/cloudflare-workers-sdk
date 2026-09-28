-- DeployHook entity test

local json = require("dkjson")
local vs = require("utility.struct.struct")
local sdk = require("cloudflare-workers_sdk")
local helpers = require("core.helpers")
local runner = require("test.runner")

local _test_dir = debug.getinfo(1, "S").source:match("^@(.+/)")  or "./"

describe("DeployHookEntity", function()
  it("should create instance", function()
    local testsdk = sdk.test(nil, nil)
    local ent = testsdk:DeployHook(nil)
    assert.is_not_nil(ent)
  end)

  -- Feature #4: the entity stream(action, ...) method runs the op pipeline and
  -- returns an iterator over result items. With the streaming feature active it
  -- yields the feature's incremental output; otherwise it falls back to the
  -- materialised list so stream always yields.
  it("should stream", function()
    local seed = {
      entity = {
        ["deploy_hook"] = {
          s1 = { id = "s1" },
          s2 = { id = "s2" },
          s3 = { id = "s3" },
        },
      },
    }

    -- Fallback: streaming inactive -> yields the materialised list items.
    local base = sdk.test(seed, nil)
    local seen = {}
    for item in base:DeployHook(nil):stream("list", nil, nil) do
      table.insert(seen, item)
    end
    assert.are.equal(3, #seen)

    -- Inbound: streaming active -> yields each item from the feature.
    local config = require("config_shared")()
    if type(config.feature) == "table" and config.feature.streaming ~= nil then
      local streamsdk = sdk.test(seed, { feature = { streaming = { active = true } } })
      local got = {}
      for item in streamsdk:DeployHook(nil):stream("list", nil, nil) do
        if vs.islist(item) then
          for _, sub in ipairs(item) do
            table.insert(got, sub)
          end
        else
          table.insert(got, item)
        end
      end
      assert.are.equal(3, #got)
    end
  end)

  it("should run basic flow", function()
    local setup = deploy_hook_basic_setup(nil)
    -- Per-op sdk-test-control.json skip.
    local _live = setup.live or false
    for _, _op in ipairs({"create", "list", "update", "load", "remove"}) do
      local _should_skip, _reason = runner.is_control_skipped("entityOp", "deploy_hook." .. _op, _live and "live" or "unit")
      if _should_skip then
        pending(_reason or "skipped via sdk-test-control.json")
        return
      end
    end
    -- The basic flow consumes synthetic IDs from the fixture. In live mode
    -- without an *_ENTID env override, those IDs hit the live API and 4xx.
    if setup.synthetic_only then
      pending("live entity test uses synthetic IDs from fixture — set CLOUDFLARE_WORKERS_TEST_DEPLOY_HOOK_ENTID JSON to run live")
      return
    end
    local client = setup.client

    -- CREATE
    local deploy_hook_ref01_ent = client:DeployHook(nil)
    local deploy_hook_ref01_data = helpers.to_map(vs.getprop(
      vs.getpath(setup.data, "new.deploy_hook"), "deploy_hook_ref01"))
    deploy_hook_ref01_data["account_id"] = setup.idmap["account01"]
    deploy_hook_ref01_data["deploy_hook_uuid"] = setup.idmap["deploy_hook_uuid01"]
    deploy_hook_ref01_data["script_name"] = setup.idmap["script_name01"]
    deploy_hook_ref01_data["worker_id"] = setup.idmap["worker01"]

    local deploy_hook_ref01_data_result, err = deploy_hook_ref01_ent:create(deploy_hook_ref01_data, nil)
    assert.is_nil(err)
    deploy_hook_ref01_data = helpers.to_map(type(deploy_hook_ref01_data_result) == 'table' and deploy_hook_ref01_data_result.data_get and deploy_hook_ref01_data_result:data_get() or deploy_hook_ref01_data_result)
    assert.is_not_nil(deploy_hook_ref01_data)
    assert.is_not_nil(deploy_hook_ref01_data["id"])

    -- LIST
    local deploy_hook_ref01_match = {
      ["account_id"] = setup.idmap["account01"],
      ["script_name"] = setup.idmap["script_name01"],
    }

    local deploy_hook_ref01_list_result, err = deploy_hook_ref01_ent:list(deploy_hook_ref01_match, nil)
    assert.is_nil(err)
    assert.is_table(deploy_hook_ref01_list_result)

    local found_item = vs.select(
      runner.entity_list_to_data(deploy_hook_ref01_list_result),
      { id = deploy_hook_ref01_data["id"] })
    assert.is_false(vs.isempty(found_item))

    -- UPDATE
    local deploy_hook_ref01_data_up0_up = {
      id = deploy_hook_ref01_data["id"],
      ["account_id"] = setup.idmap["account_id"],
      ["worker_id"] = setup.idmap["worker_id"],
    }

    local deploy_hook_ref01_markdef_up0_name = "branch"
    local deploy_hook_ref01_markdef_up0_value = "Mark01-deploy_hook_ref01_" .. tostring(setup.now)
    deploy_hook_ref01_data_up0_up[deploy_hook_ref01_markdef_up0_name] = deploy_hook_ref01_markdef_up0_value

    local deploy_hook_ref01_resdata_up0_result, err = deploy_hook_ref01_ent:update(deploy_hook_ref01_data_up0_up, nil)
    assert.is_nil(err)
    local deploy_hook_ref01_resdata_up0 = helpers.to_map(type(deploy_hook_ref01_resdata_up0_result) == 'table' and deploy_hook_ref01_resdata_up0_result.data_get and deploy_hook_ref01_resdata_up0_result:data_get() or deploy_hook_ref01_resdata_up0_result)
    assert.is_not_nil(deploy_hook_ref01_resdata_up0)
    assert.are.equal(deploy_hook_ref01_resdata_up0["id"], deploy_hook_ref01_data_up0_up["id"])
    assert.are.equal(deploy_hook_ref01_resdata_up0[deploy_hook_ref01_markdef_up0_name], deploy_hook_ref01_markdef_up0_value)

    -- LOAD
    local deploy_hook_ref01_match_dt0 = {
      id = deploy_hook_ref01_data["id"],
    }
    local deploy_hook_ref01_data_dt0_loaded, err = deploy_hook_ref01_ent:load(deploy_hook_ref01_match_dt0, nil)
    assert.is_nil(err)
    local deploy_hook_ref01_data_dt0_load_result = helpers.to_map(type(deploy_hook_ref01_data_dt0_loaded) == 'table' and deploy_hook_ref01_data_dt0_loaded.data_get and deploy_hook_ref01_data_dt0_loaded:data_get() or deploy_hook_ref01_data_dt0_loaded)
    assert.is_not_nil(deploy_hook_ref01_data_dt0_load_result)
    assert.are.equal(deploy_hook_ref01_data_dt0_load_result["id"], deploy_hook_ref01_data["id"])

    -- REMOVE
    local deploy_hook_ref01_match_rm0 = {
      id = deploy_hook_ref01_data["id"],
    }
    local _, err = deploy_hook_ref01_ent:remove(deploy_hook_ref01_match_rm0, nil)
    assert.is_nil(err)

    -- LIST
    local deploy_hook_ref01_match_rt0 = {
      ["account_id"] = setup.idmap["account01"],
      ["script_name"] = setup.idmap["script_name01"],
    }

    local deploy_hook_ref01_list_rt0_result, err = deploy_hook_ref01_ent:list(deploy_hook_ref01_match_rt0, nil)
    assert.is_nil(err)
    assert.is_table(deploy_hook_ref01_list_rt0_result)

    local not_found_item = vs.select(
      runner.entity_list_to_data(deploy_hook_ref01_list_rt0_result),
      { id = deploy_hook_ref01_data["id"] })
    assert.is_true(vs.isempty(not_found_item))

  end)
end)

function deploy_hook_basic_setup(extra)
  runner.load_env_local()

  local entity_data_file = _test_dir .. "../../.sdk/test/entity/deploy_hook/DeployHookTestData.json"
  local f = io.open(entity_data_file, "r")
  if f == nil then
    error("failed to read deploy_hook test data: " .. entity_data_file)
  end
  local entity_data_source = f:read("*a")
  f:close()

  local entity_data = json.decode(entity_data_source)

  local options = {}
  options["entity"] = entity_data["existing"]

  local client = sdk.test(options, extra)

  -- Generate idmap via transform.
  local idmap = vs.transform(
    { "deploy_hook01", "deploy_hook02", "deploy_hook03", "account01", "account02", "account03", "worker01", "worker02", "worker03", "deploy_hook_uuid01", "script_name01" },
    {
      ["`$PACK`"] = { "", {
        ["`$KEY`"] = "`$COPY`",
        ["`$VAL`"] = { "`$FORMAT`", "upper", "`$COPY`" },
      }},
    }
  )

  -- Detect ENTID env override before envOverride consumes it. When live
  -- mode is on without a real override, the basic test runs against synthetic
  -- IDs from the fixture and 4xx's. Surface this so the test can skip.
  local entid_env_raw = os.getenv("CLOUDFLARE_WORKERS_TEST_DEPLOY_HOOK_ENTID")
  local idmap_overridden = entid_env_raw ~= nil and entid_env_raw:match("^%s*{") ~= nil

  local env = runner.env_override({
    ["CLOUDFLARE_WORKERS_TEST_DEPLOY_HOOK_ENTID"] = idmap,
    ["CLOUDFLARE_WORKERS_TEST_LIVE"] = "FALSE",
    ["CLOUDFLARE_WORKERS_TEST_EXPLAIN"] = "FALSE",
    ["CLOUDFLARE_WORKERS_APIKEY"] = "",
  })

  local idmap_resolved = helpers.to_map(
    env["CLOUDFLARE_WORKERS_TEST_DEPLOY_HOOK_ENTID"])
  if idmap_resolved == nil then
    idmap_resolved = helpers.to_map(idmap)
  end
  if idmap_resolved["account_id"] == nil then
    idmap_resolved["account_id"] = idmap_resolved["account01"]
  end
  if idmap_resolved["worker_id"] == nil then
    idmap_resolved["worker_id"] = idmap_resolved["worker01"]
  end

  if env["CLOUDFLARE_WORKERS_TEST_LIVE"] == "TRUE" then
    local merged_opts = vs.merge({
      -- FIRST, so the generated fields below win: sdk-test-control.json's
      -- test.client.options adds to the live client, it does not redirect it.
      runner.live_client_options(),
      {
        apikey = env["CLOUDFLARE_WORKERS_APIKEY"],
      },
      extra or {},
    })
    client = sdk.new(helpers.to_map(merged_opts))
  end

  local live = env["CLOUDFLARE_WORKERS_TEST_LIVE"] == "TRUE"
  return {
    client = client,
    data = entity_data,
    idmap = idmap_resolved,
    env = env,
    explain = env["CLOUDFLARE_WORKERS_TEST_EXPLAIN"] == "TRUE",
    live = live,
    synthetic_only = live and not idmap_overridden,
    now = os.time() * 1000,
  }
end
