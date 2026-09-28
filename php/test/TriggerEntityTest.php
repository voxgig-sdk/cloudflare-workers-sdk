<?php
declare(strict_types=1);

// Trigger entity test

require_once __DIR__ . '/../cloudflareworkers_sdk.php';
require_once __DIR__ . '/Runner.php';

use PHPUnit\Framework\TestCase;
use Voxgig\Struct\Struct as Vs;

class TriggerEntityTest extends TestCase
{
    public function test_create_instance(): void
    {
        $testsdk = CloudflareWorkersSDK::test(null, null);
        $ent = $testsdk->Trigger(null);
        $this->assertNotNull($ent);
    }

    public function test_basic_flow(): void
    {
        $setup = trigger_basic_setup(null);
        // Per-op sdk-test-control.json skip.
        $_live = !empty($setup["live"]);
        foreach (["create", "update", "remove"] as $_op) {
            [$_shouldSkip, $_reason] = Runner::is_control_skipped("entityOp", "trigger." . $_op, $_live ? "live" : "unit");
            if ($_shouldSkip) {
                $this->markTestSkipped($_reason ?? "skipped via sdk-test-control.json");
                return;
            }
        }
        // The basic flow consumes synthetic IDs from the fixture. In live mode
        // without an *_ENTID env override, those IDs hit the live API and 4xx.
        if (!empty($setup["synthetic_only"])) {
            $this->markTestSkipped("live entity test uses synthetic IDs from fixture — set CLOUDFLARE_WORKERS_TEST_TRIGGER_ENTID JSON to run live");
            return;
        }
        $client = $setup["client"];

        // CREATE
        $trigger_ref01_ent = $client->Trigger(null);
        $trigger_ref01_data = Helpers::to_map(Vs::getprop(
            Vs::getpath($setup["data"], "new.trigger"), "trigger_ref01"));
        $trigger_ref01_data["account_id"] = $setup["idmap"]["account01"];

        $trigger_ref01_data_result = $trigger_ref01_ent->create($trigger_ref01_data, null);
        $trigger_ref01_data = Helpers::to_map(is_object($trigger_ref01_data_result) && method_exists($trigger_ref01_data_result, 'data_get') ? $trigger_ref01_data_result->data_get() : $trigger_ref01_data_result);
        $this->assertNotNull($trigger_ref01_data);
        $this->assertNotNull($trigger_ref01_data["id"]);

        // UPDATE
        $trigger_ref01_data_up0_up = [
            "id" => $trigger_ref01_data["id"],
            "account_id" => $setup["idmap"]["account_id"],
        ];

        $trigger_ref01_markdef_up0_name = "build_command";
        $trigger_ref01_markdef_up0_value = "Mark01-trigger_ref01_" . $setup["now"];
        $trigger_ref01_data_up0_up[$trigger_ref01_markdef_up0_name] = $trigger_ref01_markdef_up0_value;

        $trigger_ref01_resdata_up0_result = $trigger_ref01_ent->update($trigger_ref01_data_up0_up, null);
        $trigger_ref01_resdata_up0 = Helpers::to_map(is_object($trigger_ref01_resdata_up0_result) && method_exists($trigger_ref01_resdata_up0_result, 'data_get') ? $trigger_ref01_resdata_up0_result->data_get() : $trigger_ref01_resdata_up0_result);
        $this->assertNotNull($trigger_ref01_resdata_up0);
        $this->assertEquals($trigger_ref01_resdata_up0["id"], $trigger_ref01_data_up0_up["id"]);
        $this->assertEquals($trigger_ref01_resdata_up0[$trigger_ref01_markdef_up0_name], $trigger_ref01_markdef_up0_value);

        // REMOVE
        $trigger_ref01_match_rm0 = [
            "id" => $trigger_ref01_data["id"],
        ];
        $trigger_ref01_ent->remove($trigger_ref01_match_rm0, null);

    }
}

function trigger_basic_setup($extra)
{
    Runner::load_env_local();

    $entity_data_file = __DIR__ . '/../../.sdk/test/entity/trigger/TriggerTestData.json';
    $entity_data_source = file_get_contents($entity_data_file);
    $entity_data = json_decode($entity_data_source, true);

    $options = [];
    $options["entity"] = $entity_data["existing"];

    $client = CloudflareWorkersSDK::test($options, $extra);

    // Generate idmap.
    $idmap = [];
    foreach (["trigger01", "trigger02", "trigger03", "account01", "account02", "account03"] as $k) {
        $idmap[$k] = strtoupper($k);
    }

    // Detect ENTID env override before envOverride consumes it. When live
    // mode is on without a real override, the basic test runs against synthetic
    // IDs from the fixture and 4xx's. Surface this so the test can skip.
    $entid_env_raw = getenv("CLOUDFLARE_WORKERS_TEST_TRIGGER_ENTID");
    $idmap_overridden = $entid_env_raw !== false && str_starts_with(trim($entid_env_raw), "{");

    $env = Runner::env_override([
        "CLOUDFLARE_WORKERS_TEST_TRIGGER_ENTID" => $idmap,
        "CLOUDFLARE_WORKERS_TEST_LIVE" => "FALSE",
        "CLOUDFLARE_WORKERS_TEST_EXPLAIN" => "FALSE",
        "CLOUDFLARE_WORKERS_APIKEY" => "",
    ]);

    $idmap_resolved = Helpers::to_map(
        $env["CLOUDFLARE_WORKERS_TEST_TRIGGER_ENTID"]);
    if ($idmap_resolved === null) {
        $idmap_resolved = Helpers::to_map($idmap);
    }
    if (!isset($idmap_resolved["account_id"])) {
        $idmap_resolved["account_id"] = $idmap_resolved["account01"];
    }

    if ($env["CLOUDFLARE_WORKERS_TEST_LIVE"] === "TRUE") {
        $merged_opts = Vs::merge([
            // FIRST, so the generated fields below win: sdk-test-control.json's
            // test.client.options adds to the live client, it does not redirect it.
            Runner::live_client_options(),
            [
                "apikey" => $env["CLOUDFLARE_WORKERS_APIKEY"],
            ],
            // ismap, not a plain "?? []" default: an empty PHP array is a
            // LIST, and a non-map later entry REPLACES the accumulated map in
            // merge - so the no-extras call discarded live_client_options()
            // and the apikey/server map above it.
            Vs::ismap($extra) ? $extra : new \stdClass(),
        ]);
        // "?? []" because merge legitimately answers with a stdClass when every
        // contributing entry is an EMPTY map - an SDK with no apikey and no
        // server variables generates an empty middle entry, so that is the
        // common case, not the edge one. to_map returns null for a non-array by
        // design, and the constructor takes a non-nullable array, so without the
        // fallback every such SDK died on "must be of type array, null given"
        // the moment live mode was switched on. Offline mode never reaches this
        // branch, which is why the offline suite stayed green.
        $client = new CloudflareWorkersSDK(Helpers::to_map($merged_opts) ?? []);
    }

    $live = $env["CLOUDFLARE_WORKERS_TEST_LIVE"] === "TRUE";
    return [
        "client" => $client,
        "data" => $entity_data,
        "idmap" => $idmap_resolved,
        "env" => $env,
        "explain" => $env["CLOUDFLARE_WORKERS_TEST_EXPLAIN"] === "TRUE",
        "live" => $live,
        "synthetic_only" => $live && !$idmap_overridden,
        "now" => (int)(microtime(true) * 1000),
    ];
}
