-- Worker entity test

local json = require("dkjson")
local vs = require("utility.struct.struct")
local sdk = require("cloudflare-workers_sdk")
local helpers = require("core.helpers")
local runner = require("test.runner")

local _test_dir = debug.getinfo(1, "S").source:match("^@(.+/)")  or "./"

describe("WorkerEntity", function()
  it("should create instance", function()
    local testsdk = sdk.test(nil, nil)
    local ent = testsdk:Worker(nil)
    assert.is_not_nil(ent)
  end)

  -- Feature #4: the entity stream(action, ...) method runs the op pipeline and
  -- returns an iterator over result items. With the streaming feature active it
  -- yields the feature's incremental output; otherwise it falls back to the
  -- materialised list so stream always yields.
  it("should stream", function()
    local seed = {
      entity = {
        ["worker"] = {
          s1 = { id = "s1" },
          s2 = { id = "s2" },
          s3 = { id = "s3" },
        },
      },
    }

    -- Fallback: streaming inactive -> yields the materialised list items.
    local base = sdk.test(seed, nil)
    local seen = {}
    for item in base:Worker(nil):stream("list", nil, nil) do
      table.insert(seen, item)
    end
    assert.are.equal(3, #seen)

    -- Inbound: streaming active -> yields each item from the feature.
    local config = require("config_shared")()
    if type(config.feature) == "table" and config.feature.streaming ~= nil then
      local streamsdk = sdk.test(seed, { feature = { streaming = { active = true } } })
      local got = {}
      for item in streamsdk:Worker(nil):stream("list", nil, nil) do
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
    local setup = worker_basic_setup(nil)
    -- Per-op sdk-test-control.json skip.
    local _live = setup.live or false
    for _, _op in ipairs({"create", "list", "update", "load", "remove"}) do
      local _should_skip, _reason = runner.is_control_skipped("entityOp", "worker." .. _op, _live and "live" or "unit")
      if _should_skip then
        pending(_reason or "skipped via sdk-test-control.json")
        return
      end
    end
    -- The basic flow consumes synthetic IDs from the fixture. In live mode
    -- without an *_ENTID env override, those IDs hit the live API and 4xx.
    if setup.synthetic_only then
      pending("live entity test uses synthetic IDs from fixture — set CLOUDFLARE_WORKERS_TEST_WORKER_ENTID JSON to run live")
      return
    end
    local client = setup.client

    -- CREATE
    local worker_ref01_ent = client:Worker(nil)
    local worker_ref01_data = helpers.to_map(vs.getprop(
      vs.getpath(setup.data, "new.worker"), "worker_ref01"))
    worker_ref01_data["account_id"] = setup.idmap["account01"]
    worker_ref01_data["preview_id"] = setup.idmap["preview01"]
    worker_ref01_data["script_tag"] = setup.idmap["script_tag01"]
    worker_ref01_data["worker_id"] = setup.idmap["worker01"]

    local worker_ref01_data_result, err = worker_ref01_ent:create(worker_ref01_data, nil)
    assert.is_nil(err)
    worker_ref01_data = helpers.to_map(type(worker_ref01_data_result) == 'table' and worker_ref01_data_result.data_get and worker_ref01_data_result:data_get() or worker_ref01_data_result)
    assert.is_not_nil(worker_ref01_data)
    assert.is_not_nil(worker_ref01_data["id"])

    -- LIST
    local worker_ref01_match = {
      ["account_id"] = setup.idmap["account01"],
      ["external_script_id"] = setup.idmap["external_script01"],
    }

    local worker_ref01_list_result, err = worker_ref01_ent:list(worker_ref01_match, nil)
    assert.is_nil(err)
    assert.is_table(worker_ref01_list_result)

    local found_item = vs.select(
      runner.entity_list_to_data(worker_ref01_list_result),
      { id = worker_ref01_data["id"] })
    assert.is_false(vs.isempty(found_item))

    -- UPDATE
    local worker_ref01_data_up0_up = {
      id = worker_ref01_data["id"],
      ["account_id"] = setup.idmap["account_id"],
    }

    local worker_ref01_markdef_up0_name = "script_tag"
    local worker_ref01_markdef_up0_value = "Mark01-worker_ref01_" .. tostring(setup.now)
    worker_ref01_data_up0_up[worker_ref01_markdef_up0_name] = worker_ref01_markdef_up0_value

    local worker_ref01_resdata_up0_result, err = worker_ref01_ent:update(worker_ref01_data_up0_up, nil)
    assert.is_nil(err)
    local worker_ref01_resdata_up0 = helpers.to_map(type(worker_ref01_resdata_up0_result) == 'table' and worker_ref01_resdata_up0_result.data_get and worker_ref01_resdata_up0_result:data_get() or worker_ref01_resdata_up0_result)
    assert.is_not_nil(worker_ref01_resdata_up0)
    assert.are.equal(worker_ref01_resdata_up0["id"], worker_ref01_data_up0_up["id"])
    assert.are.equal(worker_ref01_resdata_up0[worker_ref01_markdef_up0_name], worker_ref01_markdef_up0_value)

    -- LOAD
    local worker_ref01_match_dt0 = {
      id = worker_ref01_data["id"],
    }
    local worker_ref01_data_dt0_loaded, err = worker_ref01_ent:load(worker_ref01_match_dt0, nil)
    assert.is_nil(err)
    local worker_ref01_data_dt0_load_result = helpers.to_map(type(worker_ref01_data_dt0_loaded) == 'table' and worker_ref01_data_dt0_loaded.data_get and worker_ref01_data_dt0_loaded:data_get() or worker_ref01_data_dt0_loaded)
    assert.is_not_nil(worker_ref01_data_dt0_load_result)
    assert.are.equal(worker_ref01_data_dt0_load_result["id"], worker_ref01_data["id"])

    -- REMOVE
    local worker_ref01_match_rm0 = {
      id = worker_ref01_data["id"],
    }
    local _, err = worker_ref01_ent:remove(worker_ref01_match_rm0, nil)
    assert.is_nil(err)

    -- LIST
    local worker_ref01_match_rt0 = {
      ["account_id"] = setup.idmap["account01"],
      ["external_script_id"] = setup.idmap["external_script01"],
    }

    local worker_ref01_list_rt0_result, err = worker_ref01_ent:list(worker_ref01_match_rt0, nil)
    assert.is_nil(err)
    assert.is_table(worker_ref01_list_rt0_result)

    local not_found_item = vs.select(
      runner.entity_list_to_data(worker_ref01_list_rt0_result),
      { id = worker_ref01_data["id"] })
    assert.is_true(vs.isempty(not_found_item))

  end)
end)

function worker_basic_setup(extra)
  runner.load_env_local()

  local entity_data_file = _test_dir .. "../../.sdk/test/entity/worker/WorkerTestData.json"
  local f = io.open(entity_data_file, "r")
  if f == nil then
    error("failed to read worker test data: " .. entity_data_file)
  end
  local entity_data_source = f:read("*a")
  f:close()

  local entity_data = json.decode(entity_data_source)

  local options = {}
  options["entity"] = entity_data["existing"]

  local client = sdk.test(options, extra)

  -- Generate idmap via transform.
  local idmap = vs.transform(
    { "worker01", "worker02", "worker03", "account01", "account02", "account03", "preview01", "preview02", "preview03", "script_tag01", "external_script01" },
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
  local entid_env_raw = os.getenv("CLOUDFLARE_WORKERS_TEST_WORKER_ENTID")
  local idmap_overridden = entid_env_raw ~= nil and entid_env_raw:match("^%s*{") ~= nil

  local env = runner.env_override({
    ["CLOUDFLARE_WORKERS_TEST_WORKER_ENTID"] = idmap,
    ["CLOUDFLARE_WORKERS_TEST_LIVE"] = "FALSE",
    ["CLOUDFLARE_WORKERS_TEST_EXPLAIN"] = "FALSE",
    ["CLOUDFLARE_WORKERS_APIKEY"] = "",
  })

  local idmap_resolved = helpers.to_map(
    env["CLOUDFLARE_WORKERS_TEST_WORKER_ENTID"])
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
