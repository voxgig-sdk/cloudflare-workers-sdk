# WorkerDeployment entity test

require "minitest/autorun"
require "json"
require_relative "../CloudflareWorkers_sdk"
require_relative "runner"

class WorkerDeploymentEntityTest < Minitest::Test
  def test_create_instance
    testsdk = CloudflareWorkersSDK.test(nil, nil)
    ent = testsdk.WorkerDeployment(nil)
    assert !ent.nil?
  end

  def test_basic_flow
    setup = worker_deployment_basic_setup(nil)
    # Per-op sdk-test-control.json skip.
    _live = setup[:live] || false
    ["create", "load"].each do |_op|
      _should_skip, _reason = Runner.is_control_skipped("entityOp", "worker_deployment." + _op, _live ? "live" : "unit")
      if _should_skip
        skip(_reason || "skipped via sdk-test-control.json")
        return
      end
    end
    # The basic flow consumes synthetic IDs from the fixture. In live mode
    # without an *_ENTID env override, those IDs hit the live API and 4xx.
    if setup[:synthetic_only]
      skip "live entity test uses synthetic IDs from fixture — set CLOUDFLARE_WORKERS_TEST_WORKER_DEPLOYMENT_ENTID JSON to run live"
      return
    end
    client = setup[:client]

    # CREATE
    worker_deployment_ref01_ent = client.WorkerDeployment(nil)
    worker_deployment_ref01_data = Helpers.to_map(Vs.getprop(
      Vs.getpath(setup[:data], "new.worker_deployment"), "worker_deployment_ref01"))
    worker_deployment_ref01_data["account_id"] = setup[:idmap]["account01"]
    worker_deployment_ref01_data["script_id"] = setup[:idmap]["script01"]
    worker_deployment_ref01_data["script_name"] = setup[:idmap]["script_name01"]

    worker_deployment_ref01_data_result = worker_deployment_ref01_ent.create(worker_deployment_ref01_data, nil)
    worker_deployment_ref01_data = Helpers.to_map(worker_deployment_ref01_data_result.respond_to?(:data_get) ? worker_deployment_ref01_data_result.data_get : worker_deployment_ref01_data_result)
    assert !worker_deployment_ref01_data.nil?
    assert !worker_deployment_ref01_data["id"].nil?

    # LOAD
    worker_deployment_ref01_match_dt0 = {
      "id" => worker_deployment_ref01_data["id"],
    }
    worker_deployment_ref01_data_dt0_loaded = worker_deployment_ref01_ent.load(worker_deployment_ref01_match_dt0, nil)
    worker_deployment_ref01_data_dt0_load_result = Helpers.to_map(worker_deployment_ref01_data_dt0_loaded.respond_to?(:data_get) ? worker_deployment_ref01_data_dt0_loaded.data_get : worker_deployment_ref01_data_dt0_loaded)
    assert !worker_deployment_ref01_data_dt0_load_result.nil?
    assert_equal worker_deployment_ref01_data_dt0_load_result["id"], worker_deployment_ref01_data["id"]

  end
end

def worker_deployment_basic_setup(extra)
  Runner.load_env_local

  entity_data_file = File.join(__dir__, "..", "..", ".sdk", "test", "entity", "worker_deployment", "WorkerDeploymentTestData.json")
  entity_data_source = File.read(entity_data_file)
  entity_data = JSON.parse(entity_data_source)

  options = {}
  options["entity"] = entity_data["existing"]

  client = CloudflareWorkersSDK.test(options, extra)

  # Generate idmap via transform.
  idmap = Vs.transform(
    ["worker_deployment01", "worker_deployment02", "worker_deployment03", "account01", "account02", "account03", "script01", "script02", "script03", "script_name01"],
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
  entid_env_raw = ENV["CLOUDFLARE_WORKERS_TEST_WORKER_DEPLOYMENT_ENTID"]
  idmap_overridden = !entid_env_raw.nil? && entid_env_raw.strip.start_with?("{")

  env = Runner.env_override({
    "CLOUDFLARE_WORKERS_TEST_WORKER_DEPLOYMENT_ENTID" => idmap,
    "CLOUDFLARE_WORKERS_TEST_LIVE" => "FALSE",
    "CLOUDFLARE_WORKERS_TEST_EXPLAIN" => "FALSE",
    "CLOUDFLARE_WORKERS_APIKEY" => "",
  })

  idmap_resolved = Helpers.to_map(
    env["CLOUDFLARE_WORKERS_TEST_WORKER_DEPLOYMENT_ENTID"])
  if idmap_resolved.nil?
    idmap_resolved = Helpers.to_map(idmap)
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
