# LiveTail entity test

import json
import os
import time

import pytest

from cloudflareworkers_sdk.utility.voxgig_struct import voxgig_struct as vs
from cloudflareworkers_sdk import CloudflareWorkersSDK
from cloudflareworkers_sdk.core import helpers

_TEST_DIR = os.path.dirname(os.path.abspath(__file__))
from test import runner


class TestLiveTailEntity:

    def test_should_create_instance(self):
        testsdk = CloudflareWorkersSDK.test(None, None)
        ent = testsdk.LiveTail(None)
        assert ent is not None

    def test_should_run_basic_flow(self):
        setup = _live_tail_basic_setup(None)
        # Per-op sdk-test-control.json skip — basic test exercises a flow with
        # multiple ops; skipping any one skips the whole flow (steps depend
        # on each other).
        _live = setup.get("live", False)
        for _op in ["create"]:
            _skip, _reason = runner.is_control_skipped("entityOp", "live_tail." + _op, "live" if _live else "unit")
            if _skip:
                pytest.skip(_reason or "skipped via sdk-test-control.json")
                return
        # The basic flow consumes synthetic IDs from the fixture. In live mode
        # without an *_ENTID env override, those IDs hit the live API and 4xx.
        if setup.get("synthetic_only"):
            pytest.skip("live entity test uses synthetic IDs from fixture — "
                        "set CLOUDFLARE_WORKERS_TEST_LIVE_TAIL_ENTID JSON to run live")
        client = setup["client"]

        # CREATE
        live_tail_ref01_ent = client.LiveTail(None)
        live_tail_ref01_data = helpers.to_map(vs.getprop(
            vs.getpath(setup["data"], "new.live_tail"), "live_tail_ref01"))
        live_tail_ref01_data["account_id"] = setup["idmap"]["account01"]

        live_tail_ref01_data = helpers.to_map(runner.entity_data(live_tail_ref01_ent.create(live_tail_ref01_data, None)))
        assert live_tail_ref01_data is not None



def _live_tail_basic_setup(extra):
    runner.load_env_local()

    entity_data_file = os.path.join(_TEST_DIR, "../../.sdk/test/entity/live_tail/LiveTailTestData.json")
    with open(entity_data_file, "r") as f:
        entity_data_source = f.read()

    entity_data = json.loads(entity_data_source)

    options = {}
    options["entity"] = entity_data.get("existing")

    client = CloudflareWorkersSDK.test(options, extra)

    # Generate idmap via transform.
    idmap = vs.transform(
        ["live_tail01", "live_tail02", "live_tail03", "account01", "account02", "account03"],
        {
            "`$PACK`": ["", {
                "`$KEY`": "`$COPY`",
                "`$VAL`": ["`$FORMAT`", "upper", "`$COPY`"],
            }],
        }
    )

    # Detect ENTID env override before envOverride consumes it. When live
    # mode is on without a real override, the basic test runs against synthetic
    # IDs from the fixture and 4xx's. We surface this so the test can skip.
    _entid_env_raw = os.environ.get(
        "CLOUDFLARE_WORKERS_TEST_LIVE_TAIL_ENTID")
    _idmap_overridden = _entid_env_raw is not None and _entid_env_raw.strip().startswith("{")

    env = runner.env_override({
        "CLOUDFLARE_WORKERS_TEST_LIVE_TAIL_ENTID": idmap,
        "CLOUDFLARE_WORKERS_TEST_LIVE": "FALSE",
        "CLOUDFLARE_WORKERS_TEST_EXPLAIN": "FALSE",
        "CLOUDFLARE_WORKERS_APIKEY": "",
    })

    idmap_resolved = helpers.to_map(
        env.get("CLOUDFLARE_WORKERS_TEST_LIVE_TAIL_ENTID"))
    if idmap_resolved is None:
        idmap_resolved = helpers.to_map(idmap)

    if env.get("CLOUDFLARE_WORKERS_TEST_LIVE") == "TRUE":
        merged_opts = vs.merge([
            # FIRST, so the generated fields below win: sdk-test-control.json's
            # test.client.options adds to the live client, it does not
            # redirect it.
            runner.live_client_options(),
            {
                "apikey": env.get("CLOUDFLARE_WORKERS_APIKEY"),
            },
            extra or {},
        ])
        client = CloudflareWorkersSDK(helpers.to_map(merged_opts))

    _live = env.get("CLOUDFLARE_WORKERS_TEST_LIVE") == "TRUE"
    return {
        "client": client,
        "data": entity_data,
        "idmap": idmap_resolved,
        "env": env,
        "explain": env.get("CLOUDFLARE_WORKERS_TEST_EXPLAIN") == "TRUE",
        "live": _live,
        "synthetic_only": _live and not _idmap_overridden,
        "now": int(time.time() * 1000),
    }
