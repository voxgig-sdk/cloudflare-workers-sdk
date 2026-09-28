# Secret entity test

require "minitest/autorun"
require "json"
require_relative "../CloudflareWorkers_sdk"
require_relative "runner"

class SecretEntityTest < Minitest::Test
  def test_create_instance
    testsdk = CloudflareWorkersSDK.test(nil, nil)
    ent = testsdk.Secret(nil)
    assert !ent.nil?
  end

  # Feature #4: the entity stream(action, ...) method runs the op pipeline and
  # returns an Enumerator over result items. With the streaming feature active
  # it yields the feature's incremental output; otherwise it falls back to the
  # materialised list so stream always yields.
  def test_stream
    seed = {
      "entity" => {
        "secret" => {
          "s1" => { "id" => "s1" },
          "s2" => { "id" => "s2" },
          "s3" => { "id" => "s3" },
        },
      },
    }

    # Fallback: streaming inactive -> yields the materialised list items.
    base = CloudflareWorkersSDK.test(seed, nil)
    seen = base.Secret(nil).stream("list", nil, nil).to_a
    assert_equal 3, seen.length

    # Inbound: streaming active -> yields each item from the feature.
    cfg = CloudflareWorkersConfig.shared_config
    if cfg["feature"].is_a?(Hash) && cfg["feature"].key?("streaming")
      sdk = CloudflareWorkersSDK.test(seed, { "feature" => { "streaming" => { "active" => true } } })
      got = []
      sdk.Secret(nil).stream("list", nil, nil).each do |item|
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
    setup = secret_basic_setup(nil)
    # Per-op sdk-test-control.json skip.
    _live = setup[:live] || false
    ["create", "list", "update", "load", "remove"].each do |_op|
      _should_skip, _reason = Runner.is_control_skipped("entityOp", "secret." + _op, _live ? "live" : "unit")
      if _should_skip
        skip(_reason || "skipped via sdk-test-control.json")
        return
      end
    end
    # The basic flow consumes synthetic IDs from the fixture. In live mode
    # without an *_ENTID env override, those IDs hit the live API and 4xx.
    if setup[:synthetic_only]
      skip "live entity test uses synthetic IDs from fixture — set CLOUDFLARE_WORKERS_TEST_SECRET_ENTID JSON to run live"
      return
    end
    client = setup[:client]

    # CREATE
    secret_ref01_ent = client.Secret(nil)
    secret_ref01_data = Helpers.to_map(Vs.getprop(
      Vs.getpath(setup[:data], "new.secret"), "secret_ref01"))
    secret_ref01_data["account_id"] = setup[:idmap]["account01"]
    secret_ref01_data["store_id"] = setup[:idmap]["store01"]

    secret_ref01_data_result = secret_ref01_ent.create(secret_ref01_data, nil)
    secret_ref01_data = Helpers.to_map(secret_ref01_data_result.respond_to?(:data_get) ? secret_ref01_data_result.data_get : secret_ref01_data_result)
    assert !secret_ref01_data.nil?
    assert !secret_ref01_data["id"].nil?

    # LIST
    secret_ref01_match = {
      "account_id" => setup[:idmap]["account01"],
      "store_id" => setup[:idmap]["store01"],
    }

    secret_ref01_list_result = secret_ref01_ent.list(secret_ref01_match, nil)
    assert secret_ref01_list_result.is_a?(Array)

    found_item = Vs.select(
      Runner.entity_list_to_data(secret_ref01_list_result),
      { "id" => secret_ref01_data["id"] })
    assert !Vs.isempty(found_item)

    # UPDATE
    secret_ref01_data_up0_up = {
      "id" => secret_ref01_data["id"],
      "account_id" => setup[:idmap]["account_id"],
      "store_id" => setup[:idmap]["store_id"],
    }

    secret_ref01_markdef_up0_name = "comment"
    secret_ref01_markdef_up0_value = "Mark01-secret_ref01_#{setup[:now]}"
    secret_ref01_data_up0_up[secret_ref01_markdef_up0_name] = secret_ref01_markdef_up0_value

    secret_ref01_resdata_up0_result = secret_ref01_ent.update(secret_ref01_data_up0_up, nil)
    secret_ref01_resdata_up0 = Helpers.to_map(secret_ref01_resdata_up0_result.respond_to?(:data_get) ? secret_ref01_resdata_up0_result.data_get : secret_ref01_resdata_up0_result)
    assert !secret_ref01_resdata_up0.nil?
    assert_equal secret_ref01_resdata_up0["id"], secret_ref01_data_up0_up["id"]
    assert_equal secret_ref01_resdata_up0[secret_ref01_markdef_up0_name], secret_ref01_markdef_up0_value

    # LOAD
    secret_ref01_match_dt0 = {
      "id" => secret_ref01_data["id"],
    }
    secret_ref01_data_dt0_loaded = secret_ref01_ent.load(secret_ref01_match_dt0, nil)
    secret_ref01_data_dt0_load_result = Helpers.to_map(secret_ref01_data_dt0_loaded.respond_to?(:data_get) ? secret_ref01_data_dt0_loaded.data_get : secret_ref01_data_dt0_loaded)
    assert !secret_ref01_data_dt0_load_result.nil?
    assert_equal secret_ref01_data_dt0_load_result["id"], secret_ref01_data["id"]

    # REMOVE
    secret_ref01_match_rm0 = {
      "id" => secret_ref01_data["id"],
    }
    secret_ref01_ent.remove(secret_ref01_match_rm0, nil)

    # LIST
    secret_ref01_match_rt0 = {
      "account_id" => setup[:idmap]["account01"],
      "store_id" => setup[:idmap]["store01"],
    }

    secret_ref01_list_rt0_result = secret_ref01_ent.list(secret_ref01_match_rt0, nil)
    assert secret_ref01_list_rt0_result.is_a?(Array)

    not_found_item = Vs.select(
      Runner.entity_list_to_data(secret_ref01_list_rt0_result),
      { "id" => secret_ref01_data["id"] })
    assert Vs.isempty(not_found_item)

  end
end

def secret_basic_setup(extra)
  Runner.load_env_local

  entity_data_file = File.join(__dir__, "..", "..", ".sdk", "test", "entity", "secret", "SecretTestData.json")
  entity_data_source = File.read(entity_data_file)
  entity_data = JSON.parse(entity_data_source)

  options = {}
  options["entity"] = entity_data["existing"]

  client = CloudflareWorkersSDK.test(options, extra)

  # Generate idmap via transform.
  idmap = Vs.transform(
    ["secret01", "secret02", "secret03", "account01", "account02", "account03", "store01"],
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
  entid_env_raw = ENV["CLOUDFLARE_WORKERS_TEST_SECRET_ENTID"]
  idmap_overridden = !entid_env_raw.nil? && entid_env_raw.strip.start_with?("{")

  env = Runner.env_override({
    "CLOUDFLARE_WORKERS_TEST_SECRET_ENTID" => idmap,
    "CLOUDFLARE_WORKERS_TEST_LIVE" => "FALSE",
    "CLOUDFLARE_WORKERS_TEST_EXPLAIN" => "FALSE",
    "CLOUDFLARE_WORKERS_APIKEY" => "",
  })

  idmap_resolved = Helpers.to_map(
    env["CLOUDFLARE_WORKERS_TEST_SECRET_ENTID"])
  if idmap_resolved.nil?
    idmap_resolved = Helpers.to_map(idmap)
  end
  if idmap_resolved["account_id"].nil?
    idmap_resolved["account_id"] = idmap_resolved["account01"]
  end
  if idmap_resolved["store_id"].nil?
    idmap_resolved["store_id"] = idmap_resolved["store01"]
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
