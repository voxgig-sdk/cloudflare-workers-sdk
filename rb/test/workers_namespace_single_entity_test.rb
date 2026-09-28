# WorkersNamespaceSingle entity test

require "minitest/autorun"
require "json"
require_relative "../CloudflareWorkers_sdk"
require_relative "runner"

class WorkersNamespaceSingleEntityTest < Minitest::Test
  def test_create_instance
    testsdk = CloudflareWorkersSDK.test(nil, nil)
    ent = testsdk.WorkersNamespaceSingle(nil)
    assert !ent.nil?
  end

  def test_basic_flow
    setup = workers_namespace_single_basic_setup(nil)
    # Per-op sdk-test-control.json skip.
    _live = setup[:live] || false
    ["create", "update", "load"].each do |_op|
      _should_skip, _reason = Runner.is_control_skipped("entityOp", "workers_namespace_single." + _op, _live ? "live" : "unit")
      if _should_skip
        skip(_reason || "skipped via sdk-test-control.json")
        return
      end
    end
    # The basic flow consumes synthetic IDs from the fixture. In live mode
    # without an *_ENTID env override, those IDs hit the live API and 4xx.
    if setup[:synthetic_only]
      skip "live entity test uses synthetic IDs from fixture — set CLOUDFLARE_WORKERS_TEST_WORKERS_NAMESPACE_SINGLE_ENTID JSON to run live"
      return
    end
    client = setup[:client]

    # CREATE
    workers_namespace_single_ref01_ent = client.WorkersNamespaceSingle(nil)
    workers_namespace_single_ref01_data = Helpers.to_map(Vs.getprop(
      Vs.getpath(setup[:data], "new.workers_namespace_single"), "workers_namespace_single_ref01"))
    workers_namespace_single_ref01_data["account_id"] = setup[:idmap]["account01"]

    workers_namespace_single_ref01_data_result = workers_namespace_single_ref01_ent.create(workers_namespace_single_ref01_data, nil)
    workers_namespace_single_ref01_data = Helpers.to_map(workers_namespace_single_ref01_data_result.respond_to?(:data_get) ? workers_namespace_single_ref01_data_result.data_get : workers_namespace_single_ref01_data_result)
    assert !workers_namespace_single_ref01_data.nil?

    # UPDATE
    workers_namespace_single_ref01_data_up0_up = {
      "account_id" => setup[:idmap]["account_id"],
    }

    workers_namespace_single_ref01_markdef_up0_name = "name"
    workers_namespace_single_ref01_markdef_up0_value = "Mark01-workers_namespace_single_ref01_#{setup[:now]}"
    workers_namespace_single_ref01_data_up0_up[workers_namespace_single_ref01_markdef_up0_name] = workers_namespace_single_ref01_markdef_up0_value

    workers_namespace_single_ref01_resdata_up0_result = workers_namespace_single_ref01_ent.update(workers_namespace_single_ref01_data_up0_up, nil)
    workers_namespace_single_ref01_resdata_up0 = Helpers.to_map(workers_namespace_single_ref01_resdata_up0_result.respond_to?(:data_get) ? workers_namespace_single_ref01_resdata_up0_result.data_get : workers_namespace_single_ref01_resdata_up0_result)
    assert !workers_namespace_single_ref01_resdata_up0.nil?
    assert_equal workers_namespace_single_ref01_resdata_up0[workers_namespace_single_ref01_markdef_up0_name], workers_namespace_single_ref01_markdef_up0_value

    # LOAD
    workers_namespace_single_ref01_match_dt0 = {}
    workers_namespace_single_ref01_data_dt0_loaded = workers_namespace_single_ref01_ent.load(workers_namespace_single_ref01_match_dt0, nil)
    assert !workers_namespace_single_ref01_data_dt0_loaded.nil?

  end
end

def workers_namespace_single_basic_setup(extra)
  Runner.load_env_local

  entity_data_file = File.join(__dir__, "..", "..", ".sdk", "test", "entity", "workers_namespace_single", "WorkersNamespaceSingleTestData.json")
  entity_data_source = File.read(entity_data_file)
  entity_data = JSON.parse(entity_data_source)

  options = {}
  options["entity"] = entity_data["existing"]

  client = CloudflareWorkersSDK.test(options, extra)

  # Generate idmap via transform.
  idmap = Vs.transform(
    ["workers_namespace_single01", "workers_namespace_single02", "workers_namespace_single03", "account01", "account02", "account03", "namespace01", "namespace02", "namespace03"],
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
  entid_env_raw = ENV["CLOUDFLARE_WORKERS_TEST_WORKERS_NAMESPACE_SINGLE_ENTID"]
  idmap_overridden = !entid_env_raw.nil? && entid_env_raw.strip.start_with?("{")

  env = Runner.env_override({
    "CLOUDFLARE_WORKERS_TEST_WORKERS_NAMESPACE_SINGLE_ENTID" => idmap,
    "CLOUDFLARE_WORKERS_TEST_LIVE" => "FALSE",
    "CLOUDFLARE_WORKERS_TEST_EXPLAIN" => "FALSE",
    "CLOUDFLARE_WORKERS_APIKEY" => "",
  })

  idmap_resolved = Helpers.to_map(
    env["CLOUDFLARE_WORKERS_TEST_WORKERS_NAMESPACE_SINGLE_ENTID"])
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
