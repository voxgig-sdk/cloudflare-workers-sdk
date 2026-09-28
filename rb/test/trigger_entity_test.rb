# Trigger entity test

require "minitest/autorun"
require "json"
require_relative "../CloudflareWorkers_sdk"
require_relative "runner"

class TriggerEntityTest < Minitest::Test
  def test_create_instance
    testsdk = CloudflareWorkersSDK.test(nil, nil)
    ent = testsdk.Trigger(nil)
    assert !ent.nil?
  end

  def test_basic_flow
    setup = trigger_basic_setup(nil)
    # Per-op sdk-test-control.json skip.
    _live = setup[:live] || false
    ["create", "update", "remove"].each do |_op|
      _should_skip, _reason = Runner.is_control_skipped("entityOp", "trigger." + _op, _live ? "live" : "unit")
      if _should_skip
        skip(_reason || "skipped via sdk-test-control.json")
        return
      end
    end
    # The basic flow consumes synthetic IDs from the fixture. In live mode
    # without an *_ENTID env override, those IDs hit the live API and 4xx.
    if setup[:synthetic_only]
      skip "live entity test uses synthetic IDs from fixture — set CLOUDFLARE_WORKERS_TEST_TRIGGER_ENTID JSON to run live"
      return
    end
    client = setup[:client]

    # CREATE
    trigger_ref01_ent = client.Trigger(nil)
    trigger_ref01_data = Helpers.to_map(Vs.getprop(
      Vs.getpath(setup[:data], "new.trigger"), "trigger_ref01"))
    trigger_ref01_data["account_id"] = setup[:idmap]["account01"]

    trigger_ref01_data_result = trigger_ref01_ent.create(trigger_ref01_data, nil)
    trigger_ref01_data = Helpers.to_map(trigger_ref01_data_result.respond_to?(:data_get) ? trigger_ref01_data_result.data_get : trigger_ref01_data_result)
    assert !trigger_ref01_data.nil?
    assert !trigger_ref01_data["id"].nil?

    # UPDATE
    trigger_ref01_data_up0_up = {
      "id" => trigger_ref01_data["id"],
      "account_id" => setup[:idmap]["account_id"],
    }

    trigger_ref01_markdef_up0_name = "build_command"
    trigger_ref01_markdef_up0_value = "Mark01-trigger_ref01_#{setup[:now]}"
    trigger_ref01_data_up0_up[trigger_ref01_markdef_up0_name] = trigger_ref01_markdef_up0_value

    trigger_ref01_resdata_up0_result = trigger_ref01_ent.update(trigger_ref01_data_up0_up, nil)
    trigger_ref01_resdata_up0 = Helpers.to_map(trigger_ref01_resdata_up0_result.respond_to?(:data_get) ? trigger_ref01_resdata_up0_result.data_get : trigger_ref01_resdata_up0_result)
    assert !trigger_ref01_resdata_up0.nil?
    assert_equal trigger_ref01_resdata_up0["id"], trigger_ref01_data_up0_up["id"]
    assert_equal trigger_ref01_resdata_up0[trigger_ref01_markdef_up0_name], trigger_ref01_markdef_up0_value

    # REMOVE
    trigger_ref01_match_rm0 = {
      "id" => trigger_ref01_data["id"],
    }
    trigger_ref01_ent.remove(trigger_ref01_match_rm0, nil)

  end
end

def trigger_basic_setup(extra)
  Runner.load_env_local

  entity_data_file = File.join(__dir__, "..", "..", ".sdk", "test", "entity", "trigger", "TriggerTestData.json")
  entity_data_source = File.read(entity_data_file)
  entity_data = JSON.parse(entity_data_source)

  options = {}
  options["entity"] = entity_data["existing"]

  client = CloudflareWorkersSDK.test(options, extra)

  # Generate idmap via transform.
  idmap = Vs.transform(
    ["trigger01", "trigger02", "trigger03", "account01", "account02", "account03"],
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
  entid_env_raw = ENV["CLOUDFLARE_WORKERS_TEST_TRIGGER_ENTID"]
  idmap_overridden = !entid_env_raw.nil? && entid_env_raw.strip.start_with?("{")

  env = Runner.env_override({
    "CLOUDFLARE_WORKERS_TEST_TRIGGER_ENTID" => idmap,
    "CLOUDFLARE_WORKERS_TEST_LIVE" => "FALSE",
    "CLOUDFLARE_WORKERS_TEST_EXPLAIN" => "FALSE",
    "CLOUDFLARE_WORKERS_APIKEY" => "",
  })

  idmap_resolved = Helpers.to_map(
    env["CLOUDFLARE_WORKERS_TEST_TRIGGER_ENTID"])
  if idmap_resolved.nil?
    idmap_resolved = Helpers.to_map(idmap)
  end
  if idmap_resolved["account_id"].nil?
    idmap_resolved["account_id"] = idmap_resolved["account01"]
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
