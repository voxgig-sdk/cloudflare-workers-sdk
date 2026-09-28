# WorkerTailLog entity test

require "minitest/autorun"
require "json"
require_relative "../CloudflareWorkers_sdk"
require_relative "runner"

class WorkerTailLogEntityTest < Minitest::Test
  def test_create_instance
    testsdk = CloudflareWorkersSDK.test(nil, nil)
    ent = testsdk.WorkerTailLog(nil)
    assert !ent.nil?
  end

  # Feature #4: the entity stream(action, ...) method runs the op pipeline and
  # returns an Enumerator over result items. With the streaming feature active
  # it yields the feature's incremental output; otherwise it falls back to the
  # materialised list so stream always yields.
  def test_stream
    seed = {
      "entity" => {
        "worker_tail_log" => {
          "s1" => { "id" => "s1" },
          "s2" => { "id" => "s2" },
          "s3" => { "id" => "s3" },
        },
      },
    }

    # Fallback: streaming inactive -> yields the materialised list items.
    base = CloudflareWorkersSDK.test(seed, nil)
    seen = base.WorkerTailLog(nil).stream("list", nil, nil).to_a
    assert_equal 3, seen.length

    # Inbound: streaming active -> yields each item from the feature.
    cfg = CloudflareWorkersConfig.shared_config
    if cfg["feature"].is_a?(Hash) && cfg["feature"].key?("streaming")
      sdk = CloudflareWorkersSDK.test(seed, { "feature" => { "streaming" => { "active" => true } } })
      got = []
      sdk.WorkerTailLog(nil).stream("list", nil, nil).each do |item|
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
    setup = worker_tail_log_basic_setup(nil)
    # Per-op sdk-test-control.json skip.
    _live = setup[:live] || false
    ["create", "list"].each do |_op|
      _should_skip, _reason = Runner.is_control_skipped("entityOp", "worker_tail_log." + _op, _live ? "live" : "unit")
      if _should_skip
        skip(_reason || "skipped via sdk-test-control.json")
        return
      end
    end
    # The basic flow consumes synthetic IDs from the fixture. In live mode
    # without an *_ENTID env override, those IDs hit the live API and 4xx.
    if setup[:synthetic_only]
      skip "live entity test uses synthetic IDs from fixture — set CLOUDFLARE_WORKERS_TEST_WORKER_TAIL_LOG_ENTID JSON to run live"
      return
    end
    client = setup[:client]

    # CREATE
    worker_tail_log_ref01_ent = client.WorkerTailLog(nil)
    worker_tail_log_ref01_data = Helpers.to_map(Vs.getprop(
      Vs.getpath(setup[:data], "new.worker_tail_log"), "worker_tail_log_ref01"))
    worker_tail_log_ref01_data["account_id"] = setup[:idmap]["account01"]
    worker_tail_log_ref01_data["script_name"] = setup[:idmap]["script_name01"]

    worker_tail_log_ref01_data_result = worker_tail_log_ref01_ent.create(worker_tail_log_ref01_data, nil)
    worker_tail_log_ref01_data = Helpers.to_map(worker_tail_log_ref01_data_result.respond_to?(:data_get) ? worker_tail_log_ref01_data_result.data_get : worker_tail_log_ref01_data_result)
    assert !worker_tail_log_ref01_data.nil?

    # LIST
    worker_tail_log_ref01_match = {
      "account_id" => setup[:idmap]["account01"],
      "script_name" => setup[:idmap]["script_name01"],
    }

    worker_tail_log_ref01_list_result = worker_tail_log_ref01_ent.list(worker_tail_log_ref01_match, nil)
    assert worker_tail_log_ref01_list_result.is_a?(Array)

  end
end

def worker_tail_log_basic_setup(extra)
  Runner.load_env_local

  entity_data_file = File.join(__dir__, "..", "..", ".sdk", "test", "entity", "worker_tail_log", "WorkerTailLogTestData.json")
  entity_data_source = File.read(entity_data_file)
  entity_data = JSON.parse(entity_data_source)

  options = {}
  options["entity"] = entity_data["existing"]

  client = CloudflareWorkersSDK.test(options, extra)

  # Generate idmap via transform.
  idmap = Vs.transform(
    ["worker_tail_log01", "worker_tail_log02", "worker_tail_log03", "account01", "account02", "account03", "script01", "script02", "script03", "script_name01"],
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
  entid_env_raw = ENV["CLOUDFLARE_WORKERS_TEST_WORKER_TAIL_LOG_ENTID"]
  idmap_overridden = !entid_env_raw.nil? && entid_env_raw.strip.start_with?("{")

  env = Runner.env_override({
    "CLOUDFLARE_WORKERS_TEST_WORKER_TAIL_LOG_ENTID" => idmap,
    "CLOUDFLARE_WORKERS_TEST_LIVE" => "FALSE",
    "CLOUDFLARE_WORKERS_TEST_EXPLAIN" => "FALSE",
    "CLOUDFLARE_WORKERS_APIKEY" => "",
  })

  idmap_resolved = Helpers.to_map(
    env["CLOUDFLARE_WORKERS_TEST_WORKER_TAIL_LOG_ENTID"])
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
