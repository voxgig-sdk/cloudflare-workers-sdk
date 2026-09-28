# SecretsStoreStore entity test

require "minitest/autorun"
require "json"
require_relative "../CloudflareWorkers_sdk"
require_relative "runner"

class SecretsStoreStoreEntityTest < Minitest::Test
  def test_create_instance
    testsdk = CloudflareWorkersSDK.test(nil, nil)
    ent = testsdk.SecretsStoreStore(nil)
    assert !ent.nil?
  end

  def test_basic_flow
    setup = secrets_store_store_basic_setup(nil)
    # Per-op sdk-test-control.json skip.
    _live = setup[:live] || false
    ["create", "load"].each do |_op|
      _should_skip, _reason = Runner.is_control_skipped("entityOp", "secrets_store_store." + _op, _live ? "live" : "unit")
      if _should_skip
        skip(_reason || "skipped via sdk-test-control.json")
        return
      end
    end
    # The basic flow consumes synthetic IDs from the fixture. In live mode
    # without an *_ENTID env override, those IDs hit the live API and 4xx.
    if setup[:synthetic_only]
      skip "live entity test uses synthetic IDs from fixture — set CLOUDFLARE_WORKERS_TEST_SECRETS_STORE_STORE_ENTID JSON to run live"
      return
    end
    client = setup[:client]

    # CREATE
    secrets_store_store_ref01_ent = client.SecretsStoreStore(nil)
    secrets_store_store_ref01_data = Helpers.to_map(Vs.getprop(
      Vs.getpath(setup[:data], "new.secrets_store_store"), "secrets_store_store_ref01"))
    secrets_store_store_ref01_data["account_id"] = setup[:idmap]["account01"]

    secrets_store_store_ref01_data_result = secrets_store_store_ref01_ent.create(secrets_store_store_ref01_data, nil)
    secrets_store_store_ref01_data = Helpers.to_map(secrets_store_store_ref01_data_result.respond_to?(:data_get) ? secrets_store_store_ref01_data_result.data_get : secrets_store_store_ref01_data_result)
    assert !secrets_store_store_ref01_data.nil?
    assert !secrets_store_store_ref01_data["id"].nil?

    # LOAD
    secrets_store_store_ref01_match_dt0 = {
      "id" => secrets_store_store_ref01_data["id"],
    }
    secrets_store_store_ref01_data_dt0_loaded = secrets_store_store_ref01_ent.load(secrets_store_store_ref01_match_dt0, nil)
    secrets_store_store_ref01_data_dt0_load_result = Helpers.to_map(secrets_store_store_ref01_data_dt0_loaded.respond_to?(:data_get) ? secrets_store_store_ref01_data_dt0_loaded.data_get : secrets_store_store_ref01_data_dt0_loaded)
    assert !secrets_store_store_ref01_data_dt0_load_result.nil?
    assert_equal secrets_store_store_ref01_data_dt0_load_result["id"], secrets_store_store_ref01_data["id"]

  end
end

def secrets_store_store_basic_setup(extra)
  Runner.load_env_local

  entity_data_file = File.join(__dir__, "..", "..", ".sdk", "test", "entity", "secrets_store_store", "SecretsStoreStoreTestData.json")
  entity_data_source = File.read(entity_data_file)
  entity_data = JSON.parse(entity_data_source)

  options = {}
  options["entity"] = entity_data["existing"]

  client = CloudflareWorkersSDK.test(options, extra)

  # Generate idmap via transform.
  idmap = Vs.transform(
    ["secrets_store_store01", "secrets_store_store02", "secrets_store_store03", "account01", "account02", "account03"],
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
  entid_env_raw = ENV["CLOUDFLARE_WORKERS_TEST_SECRETS_STORE_STORE_ENTID"]
  idmap_overridden = !entid_env_raw.nil? && entid_env_raw.strip.start_with?("{")

  env = Runner.env_override({
    "CLOUDFLARE_WORKERS_TEST_SECRETS_STORE_STORE_ENTID" => idmap,
    "CLOUDFLARE_WORKERS_TEST_LIVE" => "FALSE",
    "CLOUDFLARE_WORKERS_TEST_EXPLAIN" => "FALSE",
    "CLOUDFLARE_WORKERS_APIKEY" => "",
  })

  idmap_resolved = Helpers.to_map(
    env["CLOUDFLARE_WORKERS_TEST_SECRETS_STORE_STORE_ENTID"])
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
