# GitHubIntegration direct test

import json
import pytest

from cloudflareworkers_sdk.utility.voxgig_struct import voxgig_struct as vs
from cloudflareworkers_sdk import CloudflareWorkersSDK
from cloudflareworkers_sdk.core import helpers
from test import runner


class TestGitHubIntegrationDirect:

    def test_should_direct_list_git_hub_integration(self):
        setup = _git_hub_integration_direct_setup([
            {"id": "direct01"},
            {"id": "direct02"},
        ])
        _skip, _reason = runner.is_control_skipped("direct", "direct-list-git_hub_integration", "live" if setup["live"] else "unit")
        if _skip:
            # pytest already imported at module scope
            pytest.skip(_reason or "skipped via sdk-test-control.json")
            return
        if setup["live"]:
            for _live_key in ["account01", "provider_account01", "provider_type01", "repo01"]:
                if setup["idmap"].get(_live_key) is None:
                    # pytest already imported at module scope
                    pytest.skip(f"live test needs {_live_key} via *_ENTID env var (synthetic IDs only)")
                    return

        client = setup["client"]

        params = {}
        if setup["live"]:
            params["account_id"] = setup["idmap"]["account01"]
        else:
            params["account_id"] = "direct01"
        if setup["live"]:
            params["provider_account_id"] = setup["idmap"]["provider_account01"]
        else:
            params["provider_account_id"] = "direct01"
        if setup["live"]:
            params["provider_type"] = setup["idmap"]["provider_type01"]
        else:
            params["provider_type"] = "direct01"
        if setup["live"]:
            params["repo_id"] = setup["idmap"]["repo01"]
        else:
            params["repo_id"] = "direct01"

        result = client.direct({
            "path": "accounts/{account_id}/builds/repos/{provider_type}/{provider_account_id}/{repo_id}/config_autofill",
            "method": "GET",
            "params": params,
        })
        if setup["live"]:
            # Live mode is lenient: synthetic IDs frequently 4xx and the
            # list-response shape varies wildly across public APIs. Skip
            # rather than fail when the call doesn't return a usable list.
            if result.get("err") is not None:
                pytest.skip(f"list call failed (likely synthetic IDs against live API): {result.get('err')}")
                return
            if not result.get("ok"):
                pytest.skip("list call not ok (likely synthetic IDs against live API)")
                return
            status = helpers.to_int(result["status"])
            if status < 200 or status >= 300:
                pytest.skip(f"expected 2xx status, got {status}")
                return
        else:
            assert result["ok"] is True
            assert helpers.to_int(result["status"]) == 200
            assert isinstance(result["data"], list)
            assert len(result["data"]) == 2
            assert len(setup["calls"]) == 1



def _git_hub_integration_direct_setup(mockres):
    runner.load_env_local()

    calls = []

    env = runner.env_override({
        "CLOUDFLARE_WORKERS_TEST_GIT_HUB_INTEGRATION_ENTID": {},
        "CLOUDFLARE_WORKERS_TEST_LIVE": "FALSE",
        "CLOUDFLARE_WORKERS_APIKEY": "",
    })

    live = env.get("CLOUDFLARE_WORKERS_TEST_LIVE") == "TRUE"

    if live:
        # sdk-test-control.json's test.client.options seeds the live
        # client; the generated fields below overwrite anything they name.
        merged_opts = dict(runner.live_client_options())
        merged_opts.update({
            "apikey": env.get("CLOUDFLARE_WORKERS_APIKEY"),
        })
        client = CloudflareWorkersSDK(merged_opts)
        return {
            "client": client,
            "calls": calls,
            "live": True,
            "idmap": {},
        }

    def mock_fetch(url, init):
        calls.append({"url": url, "init": init})
        return {
            "status": 200,
            "statusText": "OK",
            "headers": {},
            "json": lambda: mockres if mockres is not None else {"id": "direct01"},
            "body": "mock",
        }, None

    client = CloudflareWorkersSDK({
        "base": "http://localhost:8080",
        "system": {
            "fetch": mock_fetch,
        },
    })

    return {
        "client": client,
        "calls": calls,
        "live": False,
        "idmap": {},
    }
