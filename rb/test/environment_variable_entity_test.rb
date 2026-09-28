# EnvironmentVariable entity test

require "minitest/autorun"
require "json"
require_relative "../CloudflareWorkers_sdk"
require_relative "runner"

class EnvironmentVariableEntityTest < Minitest::Test
  def test_create_instance
    testsdk = CloudflareWorkersSDK.test(nil, nil)
    ent = testsdk.EnvironmentVariable(nil)
    assert !ent.nil?
  end

  # Feature #4: the entity stream(action, ...) method runs the op pipeline and
  # returns an Enumerator over result items. With the streaming feature active
  # it yields the feature's incremental output; otherwise it falls back to the
  # materialised list so stream always yields.
  def test_stream
    seed = {
      "entity" => {
        "environment_variable" => {
          "s1" => { "id" => "s1" },
          "s2" => { "id" => "s2" },
          "s3" => { "id" => "s3" },
        },
      },
    }

    # Fallback: streaming inactive -> yields the materialised list items.
    base = CloudflareWorkersSDK.test(seed, nil)
    seen = base.EnvironmentVariable(nil).stream("list", nil, nil).to_a
    assert_equal 3, seen.length

    # Inbound: streaming active -> yields each item from the feature.
    cfg = CloudflareWorkersConfig.shared_config
    if cfg["feature"].is_a?(Hash) && cfg["feature"].key?("streaming")
      sdk = CloudflareWorkersSDK.test(seed, { "feature" => { "streaming" => { "active" => true } } })
      got = []
      sdk.EnvironmentVariable(nil).stream("list", nil, nil).each do |item|
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
    setup = environment_variable_basic_setup(nil)
    # Per-op sdk-test-control.json skip.
    _live = setup[:live] || false
    ["list", "update"].each do |_op|
      _should_skip, _reason = Runner.is_control_skipped("entityOp", "environment_variable." + _op, _live ? "live" : "unit")
      if _should_skip
        skip(_reason || "skipped via sdk-test-control.json")
        return
      end
    end
    # The basic flow consumes synthetic IDs from the fixture. In live mode
    # without an *_ENTID env override, those IDs hit the live API and 4xx.
    if setup[:synthetic_only]
      skip "live entity test uses synthetic IDs from fixture — set CLOUDFLARE_WORKERS_TEST_ENVIRONMENT_VARIABLE_ENTID JSON to run live"
      return
    end
    client = setup[:client]

    # Bootstrap entity data from existing test data.
    environment_variable_ref01_data_raw = Vs.items(Helpers.to_map(
      Vs.getpath(setup[:data], "existing.environment_variable")))
    environment_variable_ref01_data = nil
    if environment_variable_ref01_data_raw.length > 0
      environment_variable_ref01_data = Helpers.to_map(environment_variable_ref01_data_raw[0][1])
    end

    # LIST
    environment_variable_ref01_ent = client.EnvironmentVariable(nil)
    environment_variable_ref01_match = {
      "account_id" => setup[:idmap]["account01"],
      "trigger_id" => setup[:idmap]["trigger01"],
    }

    environment_variable_ref01_list_result = environment_variable_ref01_ent.list(environment_variable_ref01_match, nil)
    assert environment_variable_ref01_list_result.is_a?(Array)

    # UPDATE
    environment_variable_ref01_data_up0_up = {
      "account_id" => setup[:idmap]["account_id"],
    }

    environment_variable_ref01_resdata_up0_result = environment_variable_ref01_ent.update(environment_variable_ref01_data_up0_up, nil)
    environment_variable_ref01_resdata_up0 = Helpers.to_map(environment_variable_ref01_resdata_up0_result.respond_to?(:data_get) ? environment_variable_ref01_resdata_up0_result.data_get : environment_variable_ref01_resdata_up0_result)
    assert !environment_variable_ref01_resdata_up0.nil?

  end
end

def environment_variable_basic_setup(extra)
  Runner.load_env_local

  entity_data_file = File.join(__dir__, "..", "..", ".sdk", "test", "entity", "environment_variable", "EnvironmentVariableTestData.json")
  entity_data_source = File.read(entity_data_file)
  entity_data = JSON.parse(entity_data_source)

  options = {}
  options["entity"] = entity_data["existing"]

  client = CloudflareWorkersSDK.test(options, extra)

  # Generate idmap via transform.
  idmap = Vs.transform(
    ["environment_variable01", "environment_variable02", "environment_variable03", "account01", "account02", "account03", "trigger01", "trigger02", "trigger03"],
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
  entid_env_raw = ENV["CLOUDFLARE_WORKERS_TEST_ENVIRONMENT_VARIABLE_ENTID"]
  idmap_overridden = !entid_env_raw.nil? && entid_env_raw.strip.start_with?("{")

  env = Runner.env_override({
    "CLOUDFLARE_WORKERS_TEST_ENVIRONMENT_VARIABLE_ENTID" => idmap,
    "CLOUDFLARE_WORKERS_TEST_LIVE" => "FALSE",
    "CLOUDFLARE_WORKERS_TEST_EXPLAIN" => "FALSE",
    "CLOUDFLARE_WORKERS_APIKEY" => "",
  })

  idmap_resolved = Helpers.to_map(
    env["CLOUDFLARE_WORKERS_TEST_ENVIRONMENT_VARIABLE_ENTID"])
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
