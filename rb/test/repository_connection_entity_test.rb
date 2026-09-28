# RepositoryConnection entity test

require "minitest/autorun"
require "json"
require_relative "../CloudflareWorkers_sdk"
require_relative "runner"

class RepositoryConnectionEntityTest < Minitest::Test
  def test_create_instance
    testsdk = CloudflareWorkersSDK.test(nil, nil)
    ent = testsdk.RepositoryConnection(nil)
    assert !ent.nil?
  end

  def test_basic_flow
    setup = repository_connection_basic_setup(nil)
    # Per-op sdk-test-control.json skip.
    _live = setup[:live] || false
    ["update"].each do |_op|
      _should_skip, _reason = Runner.is_control_skipped("entityOp", "repository_connection." + _op, _live ? "live" : "unit")
      if _should_skip
        skip(_reason || "skipped via sdk-test-control.json")
        return
      end
    end
    # The basic flow consumes synthetic IDs from the fixture. In live mode
    # without an *_ENTID env override, those IDs hit the live API and 4xx.
    if setup[:synthetic_only]
      skip "live entity test uses synthetic IDs from fixture — set CLOUDFLARE_WORKERS_TEST_REPOSITORY_CONNECTION_ENTID JSON to run live"
      return
    end
    client = setup[:client]

    # Bootstrap entity data from existing test data.
    repository_connection_ref01_data_raw = Vs.items(Helpers.to_map(
      Vs.getpath(setup[:data], "existing.repository_connection")))
    repository_connection_ref01_data = nil
    if repository_connection_ref01_data_raw.length > 0
      repository_connection_ref01_data = Helpers.to_map(repository_connection_ref01_data_raw[0][1])
    end

    # UPDATE
    repository_connection_ref01_ent = client.RepositoryConnection(nil)
    repository_connection_ref01_data_up0_up = {
    }

    repository_connection_ref01_markdef_up0_name = "provider_account_id"
    repository_connection_ref01_markdef_up0_value = "Mark01-repository_connection_ref01_#{setup[:now]}"
    repository_connection_ref01_data_up0_up[repository_connection_ref01_markdef_up0_name] = repository_connection_ref01_markdef_up0_value

    repository_connection_ref01_resdata_up0_result = repository_connection_ref01_ent.update(repository_connection_ref01_data_up0_up, nil)
    repository_connection_ref01_resdata_up0 = Helpers.to_map(repository_connection_ref01_resdata_up0_result.respond_to?(:data_get) ? repository_connection_ref01_resdata_up0_result.data_get : repository_connection_ref01_resdata_up0_result)
    assert !repository_connection_ref01_resdata_up0.nil?
    assert_equal repository_connection_ref01_resdata_up0[repository_connection_ref01_markdef_up0_name], repository_connection_ref01_markdef_up0_value

  end
end

def repository_connection_basic_setup(extra)
  Runner.load_env_local

  entity_data_file = File.join(__dir__, "..", "..", ".sdk", "test", "entity", "repository_connection", "RepositoryConnectionTestData.json")
  entity_data_source = File.read(entity_data_file)
  entity_data = JSON.parse(entity_data_source)

  options = {}
  options["entity"] = entity_data["existing"]

  client = CloudflareWorkersSDK.test(options, extra)

  # Generate idmap via transform.
  idmap = Vs.transform(
    ["repository_connection01", "repository_connection02", "repository_connection03", "account01", "account02", "account03"],
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
  entid_env_raw = ENV["CLOUDFLARE_WORKERS_TEST_REPOSITORY_CONNECTION_ENTID"]
  idmap_overridden = !entid_env_raw.nil? && entid_env_raw.strip.start_with?("{")

  env = Runner.env_override({
    "CLOUDFLARE_WORKERS_TEST_REPOSITORY_CONNECTION_ENTID" => idmap,
    "CLOUDFLARE_WORKERS_TEST_LIVE" => "FALSE",
    "CLOUDFLARE_WORKERS_TEST_EXPLAIN" => "FALSE",
    "CLOUDFLARE_WORKERS_APIKEY" => "",
  })

  idmap_resolved = Helpers.to_map(
    env["CLOUDFLARE_WORKERS_TEST_REPOSITORY_CONNECTION_ENTID"])
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
