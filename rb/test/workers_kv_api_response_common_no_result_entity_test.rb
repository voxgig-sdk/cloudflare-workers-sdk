# WorkersKvApiResponseCommonNoResult entity test

require "minitest/autorun"
require "json"
require_relative "../CloudflareWorkers_sdk"
require_relative "runner"

class WorkersKvApiResponseCommonNoResultEntityTest < Minitest::Test
  def test_create_instance
    testsdk = CloudflareWorkersSDK.test(nil, nil)
    ent = testsdk.WorkersKvApiResponseCommonNoResult(nil)
    assert !ent.nil?
  end

  def test_basic_flow
    setup = workers_kv_api_response_common_no_result_basic_setup(nil)
    # Per-op sdk-test-control.json skip.
    _live = setup[:live] || false
    ["update"].each do |_op|
      _should_skip, _reason = Runner.is_control_skipped("entityOp", "workers_kv_api_response_common_no_result." + _op, _live ? "live" : "unit")
      if _should_skip
        skip(_reason || "skipped via sdk-test-control.json")
        return
      end
    end
    # The basic flow consumes synthetic IDs from the fixture. In live mode
    # without an *_ENTID env override, those IDs hit the live API and 4xx.
    if setup[:synthetic_only]
      skip "live entity test uses synthetic IDs from fixture — set CLOUDFLARE_WORKERS_TEST_WORKERS_KV_API_RESPONSE_COMMON_NO_RESULT_ENTID JSON to run live"
      return
    end
    client = setup[:client]

    # Bootstrap entity data from existing test data.
    workers_kv_api_response_common_no_result_ref01_data_raw = Vs.items(Helpers.to_map(
      Vs.getpath(setup[:data], "existing.workers_kv_api_response_common_no_result")))
    workers_kv_api_response_common_no_result_ref01_data = nil
    if workers_kv_api_response_common_no_result_ref01_data_raw.length > 0
      workers_kv_api_response_common_no_result_ref01_data = Helpers.to_map(workers_kv_api_response_common_no_result_ref01_data_raw[0][1])
    end

    # UPDATE
    workers_kv_api_response_common_no_result_ref01_ent = client.WorkersKvApiResponseCommonNoResult(nil)
    workers_kv_api_response_common_no_result_ref01_data_up0_up = {
      "account_id" => setup[:idmap]["account_id"],
      "namespace_id" => setup[:idmap]["namespace_id"],
    }

    workers_kv_api_response_common_no_result_ref01_resdata_up0_result = workers_kv_api_response_common_no_result_ref01_ent.update(workers_kv_api_response_common_no_result_ref01_data_up0_up, nil)
    workers_kv_api_response_common_no_result_ref01_resdata_up0 = Helpers.to_map(workers_kv_api_response_common_no_result_ref01_resdata_up0_result.respond_to?(:data_get) ? workers_kv_api_response_common_no_result_ref01_resdata_up0_result.data_get : workers_kv_api_response_common_no_result_ref01_resdata_up0_result)
    assert !workers_kv_api_response_common_no_result_ref01_resdata_up0.nil?

  end
end

def workers_kv_api_response_common_no_result_basic_setup(extra)
  Runner.load_env_local

  entity_data_file = File.join(__dir__, "..", "..", ".sdk", "test", "entity", "workers_kv_api_response_common_no_result", "WorkersKvApiResponseCommonNoResultTestData.json")
  entity_data_source = File.read(entity_data_file)
  entity_data = JSON.parse(entity_data_source)

  options = {}
  options["entity"] = entity_data["existing"]

  client = CloudflareWorkersSDK.test(options, extra)

  # Generate idmap via transform.
  idmap = Vs.transform(
    ["workers_kv_api_response_common_no_result01", "workers_kv_api_response_common_no_result02", "workers_kv_api_response_common_no_result03", "account01", "account02", "account03", "namespace01", "namespace02", "namespace03", "value01", "value02", "value03"],
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
  entid_env_raw = ENV["CLOUDFLARE_WORKERS_TEST_WORKERS_KV_API_RESPONSE_COMMON_NO_RESULT_ENTID"]
  idmap_overridden = !entid_env_raw.nil? && entid_env_raw.strip.start_with?("{")

  env = Runner.env_override({
    "CLOUDFLARE_WORKERS_TEST_WORKERS_KV_API_RESPONSE_COMMON_NO_RESULT_ENTID" => idmap,
    "CLOUDFLARE_WORKERS_TEST_LIVE" => "FALSE",
    "CLOUDFLARE_WORKERS_TEST_EXPLAIN" => "FALSE",
    "CLOUDFLARE_WORKERS_APIKEY" => "",
  })

  idmap_resolved = Helpers.to_map(
    env["CLOUDFLARE_WORKERS_TEST_WORKERS_KV_API_RESPONSE_COMMON_NO_RESULT_ENTID"])
  if idmap_resolved.nil?
    idmap_resolved = Helpers.to_map(idmap)
  end
  if idmap_resolved["account_id"].nil?
    idmap_resolved["account_id"] = idmap_resolved["account01"]
  end
  if idmap_resolved["namespace_id"].nil?
    idmap_resolved["namespace_id"] = idmap_resolved["namespace01"]
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
