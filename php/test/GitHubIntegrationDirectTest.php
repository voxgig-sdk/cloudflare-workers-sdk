<?php
declare(strict_types=1);

// GitHubIntegration direct test

require_once __DIR__ . '/../cloudflareworkers_sdk.php';
require_once __DIR__ . '/Runner.php';

use PHPUnit\Framework\TestCase;

class GitHubIntegrationDirectTest extends TestCase
{
    public function test_direct_list_git_hub_integration(): void
    {
        $setup = git_hub_integration_direct_setup([
            ["id" => "direct01"],
            ["id" => "direct02"],
        ]);
        [$_shouldSkip, $_reason] = Runner::is_control_skipped("direct", "direct-list-git_hub_integration", $setup["live"] ? "live" : "unit");
        if ($_shouldSkip) {
            $this->markTestSkipped($_reason ?? "skipped via sdk-test-control.json");
            return;
        }
        if ($setup["live"]) {
            foreach (["account01", "provider_account01", "provider_type01", "repo01"] as $_liveKey) {
                if (!isset($setup["idmap"][$_liveKey]) || $setup["idmap"][$_liveKey] === null) {
                    $this->markTestSkipped("live test needs $_liveKey via *_ENTID env var (synthetic IDs only)");
                    return;
                }
            }
        }
        $client = $setup["client"];

        $params = [];
        if ($setup["live"]) {
            $params["account_id"] = $setup["idmap"]["account01"];
        } else {
            $params["account_id"] = "direct01";
        }
        if ($setup["live"]) {
            $params["provider_account_id"] = $setup["idmap"]["provider_account01"];
        } else {
            $params["provider_account_id"] = "direct01";
        }
        if ($setup["live"]) {
            $params["provider_type"] = $setup["idmap"]["provider_type01"];
        } else {
            $params["provider_type"] = "direct01";
        }
        if ($setup["live"]) {
            $params["repo_id"] = $setup["idmap"]["repo01"];
        } else {
            $params["repo_id"] = "direct01";
        }

        $result = $client->direct([
            "path" => "accounts/{account_id}/builds/repos/{provider_type}/{provider_account_id}/{repo_id}/config_autofill",
            "method" => "GET",
            "params" => $params,
        ]);
        if ($setup["live"]) {
            // Live mode is lenient: synthetic IDs frequently 4xx and the
            // list-response shape varies wildly across public APIs. Skip
            // rather than fail when the call doesn't return a usable list.
            if (!empty($result["err"])) {
                $this->markTestSkipped("list call failed (likely synthetic IDs against live API): " . (string)$result["err"]);
                return;
            }
            if (empty($result["ok"])) {
                $this->markTestSkipped("list call not ok (likely synthetic IDs against live API)");
                return;
            }
            $status = Helpers::to_int($result["status"]);
            if ($status < 200 || $status >= 300) {
                $this->markTestSkipped("expected 2xx status, got " . $status);
                return;
            }
        } else {
            $this->assertArrayNotHasKey("err", $result);
            $this->assertTrue($result["ok"]);
            $this->assertEquals(200, Helpers::to_int($result["status"]));
            $this->assertIsArray($result["data"]);
            $this->assertCount(2, $result["data"]);
            $this->assertCount(1, $setup["calls"]);
        }
    }

}


function git_hub_integration_direct_setup($mockres)
{
    Runner::load_env_local();

    $calls = new \ArrayObject();

    $env = Runner::env_override([
        "CLOUDFLARE_WORKERS_TEST_GIT_HUB_INTEGRATION_ENTID" => [],
        "CLOUDFLARE_WORKERS_TEST_LIVE" => "FALSE",
        "CLOUDFLARE_WORKERS_APIKEY" => "",
    ]);

    $live = $env["CLOUDFLARE_WORKERS_TEST_LIVE"] === "TRUE";

    if ($live) {
        // Merged so the generated fields win: sdk-test-control.json's
        // test.client.options adds to the live client, it does not redirect it.
        $merged_opts = array_merge(Runner::live_client_options(), [
            "apikey" => $env["CLOUDFLARE_WORKERS_APIKEY"],
        ]);
        $client = new CloudflareWorkersSDK($merged_opts);
        return [
            "client" => $client,
            "calls" => $calls,
            "live" => true,
            "idmap" => [],
        ];
    }

    $mock_fetch = function ($url, $init) use ($calls, $mockres) {
        $calls[] = ["url" => $url, "init" => $init];
        return [
            [
                "status" => 200,
                "statusText" => "OK",
                "headers" => [],
                "json" => function () use ($mockres) {
                    if ($mockres !== null) {
                        return $mockres;
                    }
                    return ["id" => "direct01"];
                },
                "body" => "mock",
            ],
            null,
        ];
    };

    $client = new CloudflareWorkersSDK([
        "base" => "http://localhost:8080",
        "system" => [
            "fetch" => $mock_fetch,
        ],
    ]);

    return [
        "client" => $client,
        "calls" => $calls,
        "live" => false,
        "idmap" => [],
    ];
}
