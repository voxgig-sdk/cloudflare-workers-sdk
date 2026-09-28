# DeployHook entity test

require "minitest/autorun"
require "json"
require_relative "../CloudflareWorkers_sdk"
require_relative "runner"

class DeployHookEntityTest < Minitest::Test
  def test_create_instance
    testsdk = CloudflareWorkersSDK.test(nil, nil)
    ent = testsdk.DeployHook(nil)
    assert !ent.nil?
  end

  # Feature #4: the entity stream(action, ...) method runs the op pipeline and
  # returns an Enumerator over result items. With the streaming feature active
  # it yields the feature's incremental output; otherwise it falls back to the
  # materialised list so stream always yields.
  def test_stream
    seed = {
      "entity" => {
        "deploy_hook" => {
          "s1" => { "id" => "s1" },
          "s2" => { "id" => "s2" },
          "s3" => { "id" => "s3" },
        },
      },
    }

    # Fallback: streaming inactive -> yields the materialised list items.
    base = CloudflareWorkersSDK.test(seed, nil)
    seen = base.DeployHook(nil).stream("list", nil, nil).to_a
    assert_equal 3, seen.length

    # Inbound: streaming active -> yields each item from the feature.
    cfg = CloudflareWorkersConfig.shared_config
    if cfg["feature"].is_a?(Hash) && cfg["feature"].key?("streaming")
      sdk = CloudflareWorkersSDK.test(seed, { "feature" => { "streaming" => { "active" => true } } })
      got = []
      sdk.DeployHook(nil).stream("list", nil, nil).each do |item|
        if item.is_a?(Array)
          got.concat(item)
        else
          got << item
        end
      end
      assert_equal 3, got.length
    end
  end

  def test_basic_flow
    setup = deploy_hook_basic_setup(nil)
    # Per-op sdk-test-control.json skip.
    _live = setup[:live] || false
    ["create", "list", "update", "load", "remove"].each do |_op|
      _should_skip, _reason = Runner.is_control_skipped("entityOp", "deploy_hook." + _op, _live ? "live" : "unit")
      if _should_skip
        skip(_reason || "skipped via sdk-test-control.json")
        return
      end
    end
    # The basic flow consumes synthetic IDs from the fixture. In live mode
    # without an *_ENTID env override, those IDs hit the live API and 4xx.
    if setup[:synthetic_only]
      skip "live entity test uses synthetic IDs from fixture — set CLOUDFLARE_WORKERS_TEST_DEPLOY_HOOK_ENTID JSON to run live"
      return
    end
    client = setup[:client]

    # CREATE
    deploy_hook_ref01_ent = client.DeployHook(nil)
    deploy_hook_ref01_data = Helpers.to_map(Vs.getprop(
      Vs.getpath(setup[:data], "new.deploy_hook"), "deploy_hook_ref01"))
    deploy_hook_ref01_data["account_id"] = setup[:idmap]["account01"]
    deploy_hook_ref01_data["deploy_hook_uuid"] = setup[:idmap]["deploy_hook_uuid01"]
    deploy_hook_ref01_data["script_name"] = setup[:idmap]["script_name01"]
    deploy_hook_ref01_data["worker_id"] = setup[:idmap]["worker01"]

    deploy_hook_ref01_data_result = deploy_hook_ref01_ent.create(deploy_hook_ref01_data, nil)
    deploy_hook_ref01_data = Helpers.to_map(deploy_hook_ref01_data_result.respond_to?(:data_get) ? deploy_hook_ref01_data_result.data_get : deploy_hook_ref01_data_result)
    assert !deploy_hook_ref01_data.nil?
    assert !deploy_hook_ref01_data["id"].nil?

    # LIST
    deploy_hook_ref01_match = {
      "account_id" => setup[:idmap]["account01"],
      "script_name" => setup[:idmap]["script_name01"],
    }

    deploy_hook_ref01_list_result = deploy_hook_ref01_ent.list(deploy_hook_ref01_match, nil)
    assert deploy_hook_ref01_list_result.is_a?(Array)

    found_item = Vs.select(
      Runner.entity_list_to_data(deploy_hook_ref01_list_result),
      { "id" => deploy_hook_ref01_data["id"] })
    assert !Vs.isempty(found_item)

    # UPDATE
    deploy_hook_ref01_data_up0_up = {
      "id" => deploy_hook_ref01_data["id"],
      "account_id" => setup[:idmap]["account_id"],
      "worker_id" => setup[:idmap]["worker_id"],
    }

    deploy_hook_ref01_markdef_up0_name = "branch"
    deploy_hook_ref01_markdef_up0_value = "Mark01-deploy_hook_ref01_#{setup[:now]}"
    deploy_hook_ref01_data_up0_up[deploy_hook_ref01_markdef_up0_name] = deploy_hook_ref01_markdef_up0_value

    deploy_hook_ref01_resdata_up0_result = deploy_hook_ref01_ent.update(deploy_hook_ref01_data_up0_up, nil)
    deploy_hook_ref01_resdata_up0 = Helpers.to_map(deploy_hook_ref01_resdata_up0_result.respond_to?(:data_get) ? deploy_hook_ref01_resdata_up0_result.data_get : deploy_hook_ref01_resdata_up0_result)
    assert !deploy_hook_ref01_resdata_up0.nil?
    assert_equal deploy_hook_ref01_resdata_up0["id"], deploy_hook_ref01_data_up0_up["id"]
    assert_equal deploy_hook_ref01_resdata_up0[deploy_hook_ref01_markdef_up0_name], deploy_hook_ref01_markdef_up0_value

    # LOAD
    deploy_hook_ref01_match_dt0 = {
      "id" => deploy_hook_ref01_data["id"],
    }
    deploy_hook_ref01_data_dt0_loaded = deploy_hook_ref01_ent.load(deploy_hook_ref01_match_dt0, nil)
    deploy_hook_ref01_data_dt0_load_result = Helpers.to_map(deploy_hook_ref01_data_dt0_loaded.respond_to?(:data_get) ? deploy_hook_ref01_data_dt0_loaded.data_get : deploy_hook_ref01_data_dt0_loaded)
    assert !deploy_hook_ref01_data_dt0_load_result.nil?
    assert_equal deploy_hook_ref01_data_dt0_load_result["id"], deploy_hook_ref01_data["id"]

    # REMOVE
    deploy_hook_ref01_match_rm0 = {
      "id" => deploy_hook_ref01_data["id"],
    }
    deploy_hook_ref01_ent.remove(deploy_hook_ref01_match_rm0, nil)

    # LIST
    deploy_hook_ref01_match_rt0 = {
      "account_id" => setup[:idmap]["account01"],
      "script_name" => setup[:idmap]["script_name01"],
    }

    deploy_hook_ref01_list_rt0_result = deploy_hook_ref01_ent.list(deploy_hook_ref01_match_rt0, nil)
    assert deploy_hook_ref01_list_rt0_result.is_a?(Array)

    not_found_item = Vs.select(
      Runner.entity_list_to_data(deploy_hook_ref01_list_rt0_result),
      { "id" => deploy_hook_ref01_data["id"] })
    assert Vs.isempty(not_found_item)

  end
end

def deploy_hook_basic_setup(extra)
  Runner.load_env_local

  entity_data_file = File.join(__dir__, "..", "..", ".sdk", "test", "entity", "deploy_hook", "DeployHookTestData.json")
  entity_data_source = File.read(entity_data_file)
  entity_data = JSON.parse(entity_data_source)

  options = {}
  options["entity"] = entity_data["existing"]

  client = CloudflareWorkersSDK.test(options, extra)

  # Generate idmap via transform.
  idmap = Vs.transform(
    ["deploy_hook01", "deploy_hook02", "deploy_hook03", "account01", "account02", "account03", "worker01", "worker02", "worker03", "deploy_hook_uuid01", "script_name01"],
    {
      "`$PACK`" => ["", {
        "`$KEY`" => "`$COPY`",
        "`$VAL`" => ["`$FORMAT`", "upper", "`$COPY`"],
      }],
    }
  )

  # Detect ENTID env override before envOverride consumes it. When live
  # mode is on without a real override, the basic test runs against synthetic
  # IDs from the fixture and 4xx's. Surface this so the test can skip.
  entid_env_raw = ENV["CLOUDFLARE_WORKERS_TEST_DEPLOY_HOOK_ENTID"]
  idmap_overridden = !entid_env_raw.nil? && entid_env_raw.strip.start_with?("{")

  env = Runner.env_override({
    "CLOUDFLARE_WORKERS_TEST_DEPLOY_HOOK_ENTID" => idmap,
    "CLOUDFLARE_WORKERS_TEST_LIVE" => "FALSE",
    "CLOUDFLARE_WORKERS_TEST_EXPLAIN" => "FALSE",
    "CLOUDFLARE_WORKERS_APIKEY" => "",
  })

  idmap_resolved = Helpers.to_map(
    env["CLOUDFLARE_WORKERS_TEST_DEPLOY_HOOK_ENTID"])
  if idmap_resolved.nil?
    idmap_resolved = Helpers.to_map(idmap)
  end
  if idmap_resolved["account_id"].nil?
    idmap_resolved["account_id"] = idmap_resolved["account01"]
  end
  if idmap_resolved["worker_id"].nil?
    idmap_resolved["worker_id"] = idmap_resolved["worker01"]
  end

  if env["CLOUDFLARE_WORKERS_TEST_LIVE"] == "TRUE"
    merged_opts = Vs.merge([
      # FIRST, so the generated fields below win: sdk-test-control.json's
      # test.client.options adds to the live client, it does not redirect it.
      Runner.live_client_options,
      {
        "apikey" => env["CLOUDFLARE_WORKERS_APIKEY"],
      },
      extra || {},
    ])
    client = CloudflareWorkersSDK.new(Helpers.to_map(merged_opts))
  end

  live = env["CLOUDFLARE_WORKERS_TEST_LIVE"] == "TRUE"
  {
    client: client,
    data: entity_data,
    idmap: idmap_resolved,
    env: env,
    explain: env["CLOUDFLARE_WORKERS_TEST_EXPLAIN"] == "TRUE",
    live: live,
    synthetic_only: live && !idmap_overridden,
    now: (Time.now.to_f * 1000).to_i,
  }
end
