-- Brapi entity test

local json = require("dkjson")
local vs = require("utility.struct.struct")
local sdk = require("cloudflare-workers_sdk")
local helpers = require("core.helpers")
local runner = require("test.runner")

local _test_dir = debug.getinfo(1, "S").source:match("^@(.+/)")  or "./"

describe("BrapiEntity", function()
  it("should create instance", function()
    local testsdk = sdk.test(nil, nil)
    local ent = testsdk:Brapi(nil)
    assert.is_not_nil(ent)
  end)

  -- Feature #4: the entity stream(action, ...) method runs the op pipeline and
  -- returns an iterator over result items. With the streaming feature active it
  -- yields the feature's incremental output; otherwise it falls back to the
  -- materialised list so stream always yields.
  it("should stream", function()
    local seed = {
      entity = {
        ["brapi"] = {
          s1 = { id = "s1" },
          s2 = { id = "s2" },
          s3 = { id = "s3" },
        },
      },
    }

    -- Fallback: streaming inactive -> yields the materialised list items.
    local base = sdk.test(seed, nil)
    local seen = {}
    for item in base:Brapi(nil):stream("list", nil, nil) do
      table.insert(seen, item)
    end
    assert.are.equal(3, #seen)

    -- Inbound: streaming active -> yields each item from the feature.
    local config = require("config_shared")()
    if type(config.feature) == "table" and config.feature.streaming ~= nil then
      local streamsdk = sdk.test(seed, { feature = { streaming = { active = true } } })
      local got = {}
      for item in streamsdk:Brapi(nil):stream("list", nil, nil) do
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
    local setup = brapi_basic_setup(nil)
    -- Per-op sdk-test-control.json skip.
    local _live = setup.live or false
    for _, _op in ipairs({"create", "list", "update", "load", "remove"}) do
      local _should_skip, _reason = runner.is_control_skipped("entityOp", "brapi." .. _op, _live and "live" or "unit")
      if _should_skip then
        pending(_reason or "skipped via sdk-test-control.json")
        return
      end
    end
    -- The basic flow consumes synthetic IDs from the fixture. In live mode
    -- without an *_ENTID env override, those IDs hit the live API and 4xx.
    if setup.synthetic_only then
      pending("live entity test uses synthetic IDs from fixture — set CLOUDFLARE_WORKERS_TEST_BRAPI_ENTID JSON to run live")
      return
    end
    local client = setup.client

    -- CREATE
    local brapi_ref01_ent = client:Brapi(nil)
    local brapi_ref01_data = helpers.to_map(vs.getprop(
      vs.getpath(setup.data, "new.brapi"), "brapi_ref01"))
    brapi_ref01_data["account_id"] = setup.idmap["account01"]
    brapi_ref01_data["browser_id"] = setup.idmap["browser01"]

    local brapi_ref01_data_result, err = brapi_ref01_ent:create(brapi_ref01_data, nil)
    assert.is_nil(err)
    brapi_ref01_data = helpers.to_map(type(brapi_ref01_data_result) == 'table' and brapi_ref01_data_result.data_get and brapi_ref01_data_result:data_get() or brapi_ref01_data_result)
    assert.is_not_nil(brapi_ref01_data)
    assert.is_not_nil(brapi_ref01_data["id"])

    -- LIST
    local brapi_ref01_match = {
      ["account_id"] = setup.idmap["account01"],
      ["browser_id"] = setup.idmap["browser01"],
    }

    local brapi_ref01_list_result, err = brapi_ref01_ent:list(brapi_ref01_match, nil)
    assert.is_nil(err)
    assert.is_table(brapi_ref01_list_result)

    local found_item = vs.select(
      runner.entity_list_to_data(brapi_ref01_list_result),
      { id = brapi_ref01_data["id"] })
    assert.is_false(vs.isempty(found_item))

    -- UPDATE
    local brapi_ref01_data_up0_up = {
      id = brapi_ref01_data["id"],
      ["account_id"] = setup.idmap["account_id"],
    }

    local brapi_ref01_markdef_up0_name = "Browser"
    local brapi_ref01_markdef_up0_value = "Mark01-brapi_ref01_" .. tostring(setup.now)
    brapi_ref01_data_up0_up[brapi_ref01_markdef_up0_name] = brapi_ref01_markdef_up0_value

    local brapi_ref01_resdata_up0_result, err = brapi_ref01_ent:update(brapi_ref01_data_up0_up, nil)
    assert.is_nil(err)
    local brapi_ref01_resdata_up0 = helpers.to_map(type(brapi_ref01_resdata_up0_result) == 'table' and brapi_ref01_resdata_up0_result.data_get and brapi_ref01_resdata_up0_result:data_get() or brapi_ref01_resdata_up0_result)
    assert.is_not_nil(brapi_ref01_resdata_up0)
    assert.are.equal(brapi_ref01_resdata_up0["id"], brapi_ref01_data_up0_up["id"])
    assert.are.equal(brapi_ref01_resdata_up0[brapi_ref01_markdef_up0_name], brapi_ref01_markdef_up0_value)

    -- LOAD
    local brapi_ref01_match_dt0 = {
      id = brapi_ref01_data["id"],
    }
    local brapi_ref01_data_dt0_loaded, err = brapi_ref01_ent:load(brapi_ref01_match_dt0, nil)
    assert.is_nil(err)
    local brapi_ref01_data_dt0_load_result = helpers.to_map(type(brapi_ref01_data_dt0_loaded) == 'table' and brapi_ref01_data_dt0_loaded.data_get and brapi_ref01_data_dt0_loaded:data_get() or brapi_ref01_data_dt0_loaded)
    assert.is_not_nil(brapi_ref01_data_dt0_load_result)
    assert.are.equal(brapi_ref01_data_dt0_load_result["id"], brapi_ref01_data["id"])

    -- REMOVE
    local brapi_ref01_match_rm0 = {
      id = brapi_ref01_data["id"],
    }
    local _, err = brapi_ref01_ent:remove(brapi_ref01_match_rm0, nil)
    assert.is_nil(err)

    -- LIST
    local brapi_ref01_match_rt0 = {
      ["account_id"] = setup.idmap["account01"],
      ["browser_id"] = setup.idmap["browser01"],
    }

    local brapi_ref01_list_rt0_result, err = brapi_ref01_ent:list(brapi_ref01_match_rt0, nil)
    assert.is_nil(err)
    assert.is_table(brapi_ref01_list_rt0_result)

    local not_found_item = vs.select(
      runner.entity_list_to_data(brapi_ref01_list_rt0_result),
      { id = brapi_ref01_data["id"] })
    assert.is_true(vs.isempty(not_found_item))

  end)
end)

function brapi_basic_setup(extra)
  runner.load_env_local()

  local entity_data_file = _test_dir .. "../../.sdk/test/entity/brapi/BrapiTestData.json"
  local f = io.open(entity_data_file, "r")
  if f == nil then
    error("failed to read brapi test data: " .. entity_data_file)
  end
  local entity_data_source = f:read("*a")
  f:close()

  local entity_data = json.decode(entity_data_source)

  local options = {}
  options["entity"] = entity_data["existing"]

  local client = sdk.test(options, extra)

  -- Generate idmap via transform.
  local idmap = vs.transform(
    { "brapi01", "brapi02", "brapi03", "account01", "account02", "account03", "browser01" },
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
  local entid_env_raw = os.getenv("CLOUDFLARE_WORKERS_TEST_BRAPI_ENTID")
  local idmap_overridden = entid_env_raw ~= nil and entid_env_raw:match("^%s*{") ~= nil

  local env = runner.env_override({
    ["CLOUDFLARE_WORKERS_TEST_BRAPI_ENTID"] = idmap,
    ["CLOUDFLARE_WORKERS_TEST_LIVE"] = "FALSE",
    ["CLOUDFLARE_WORKERS_TEST_EXPLAIN"] = "FALSE",
    ["CLOUDFLARE_WORKERS_APIKEY"] = "",
  })

  local idmap_resolved = helpers.to_map(
    env["CLOUDFLARE_WORKERS_TEST_BRAPI_ENTID"])
  if idmap_resolved == nil then
    idmap_resolved = helpers.to_map(idmap)
  end
  if idmap_resolved["account_id"] == nil then
    idmap_resolved["account_id"] = idmap_resolved["account01"]
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
