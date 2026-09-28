# WorkerSubdomain entity test

import json
import os
import time

import pytest

from cloudflareworkers_sdk.utility.voxgig_struct import voxgig_struct as vs
from cloudflareworkers_sdk import CloudflareWorkersSDK
from cloudflareworkers_sdk.core import helpers

_TEST_DIR = os.path.dirname(os.path.abspath(__file__))
from test import runner


class TestWorkerSubdomainEntity:

    def test_should_create_instance(self):
        testsdk = CloudflareWorkersSDK.test(None, None)
        ent = testsdk.WorkerSubdomain(None)
        assert ent is not None

    def test_should_stream(self):
        # Feature #4: the entity stream(action, ...) method runs the op
        # pipeline and yields result items. With the streaming feature active
        # it yields the feature's incremental output; otherwise it falls back
        # to the materialised list so stream always yields.
        seed = {
            "entity": {
                "worker_subdomain": {
                    "s1": {"id": "s1"},
                    "s2": {"id": "s2"},
                    "s3": {"id": "s3"},
                }
            }
        }

        # Fallback: streaming inactive -> yields the materialised list items.
        base = CloudflareWorkersSDK.test(seed, None)
        seen = list(base.WorkerSubdomain(None).stream("list", None, None))
        assert len(seen) == 3

        # Inbound: streaming active -> yields each item from the feature.
        from cloudflareworkers_sdk.config import shared_config
        cfg = shared_config()
        if isinstance(cfg.get("feature"), dict) and "streaming" in cfg["feature"]:
            sdk = CloudflareWorkersSDK.test(
                seed, {"feature": {"streaming": {"active": True}}})
            got = []
            for item in sdk.WorkerSubdomain(None).stream("list", None, None):
                if isinstance(item, list):
                    got.extend(item)
                else:
                    got.append(item)
            assert len(got) == 3

    def test_should_run_basic_flow(self):
        setup = _worker_subdomain_basic_setup(None)
        # Per-op sdk-test-control.json skip — basic test exercises a flow with
        # multiple ops; skipping any one skips the whole flow (steps depend
        # on each other).
        _live = setup.get("live", False)
        for _op in ["list", "update"]:
            _skip, _reason = runner.is_control_skipped("entityOp", "worker_subdomain." + _op, "live" if _live else "unit")
            if _skip:
                pytest.skip(_reason or "skipped via sdk-test-control.json")
                return
        # The basic flow consumes synthetic IDs from the fixture. In live mode
        # without an *_ENTID env override, those IDs hit the live API and 4xx.
        if setup.get("synthetic_only"):
            pytest.skip("live entity test uses synthetic IDs from fixture — "
                        "set CLOUDFLARE_WORKERS_TEST_WORKER_SUBDOMAIN_ENTID JSON to run live")
        client = setup["client"]

        # Bootstrap entity data from existing test data.
        worker_subdomain_ref01_data_raw = vs.items(helpers.to_map(
            vs.getpath(setup["data"], "existing.worker_subdomain")))
        worker_subdomain_ref01_data = None
        if len(worker_subdomain_ref01_data_raw) > 0:
            worker_subdomain_ref01_data = helpers.to_map(worker_subdomain_ref01_data_raw[0][1])

        # LIST
        worker_subdomain_ref01_ent = client.WorkerSubdomain(None)
        worker_subdomain_ref01_match = {
            "account_id": setup["idmap"]["account01"],
        }

        worker_subdomain_ref01_list_result = worker_subdomain_ref01_ent.list(worker_subdomain_ref01_match, None)
        assert isinstance(worker_subdomain_ref01_list_result, list)

        # UPDATE
        worker_subdomain_ref01_data_up0_up = {
        }

        worker_subdomain_ref01_markdef_up0_name = "subdomain"
        worker_subdomain_ref01_markdef_up0_value = "Mark01-worker_subdomain_ref01_" + str(setup["now"])
        worker_subdomain_ref01_data_up0_up[worker_subdomain_ref01_markdef_up0_name] = worker_subdomain_ref01_markdef_up0_value

        worker_subdomain_ref01_resdata_up0 = helpers.to_map(runner.entity_data(worker_subdomain_ref01_ent.update(worker_subdomain_ref01_data_up0_up, None)))
        assert worker_subdomain_ref01_resdata_up0 is not None
        assert worker_subdomain_ref01_resdata_up0[worker_subdomain_ref01_markdef_up0_name] == worker_subdomain_ref01_markdef_up0_value



def _worker_subdomain_basic_setup(extra):
    runner.load_env_local()

    entity_data_file = os.path.join(_TEST_DIR, "../../.sdk/test/entity/worker_subdomain/WorkerSubdomainTestData.json")
    with open(entity_data_file, "r") as f:
        entity_data_source = f.read()

    entity_data = json.loads(entity_data_source)

    options = {}
    options["entity"] = entity_data.get("existing")

    client = CloudflareWorkersSDK.test(options, extra)

    # Generate idmap via transform.
    idmap = vs.transform(
        ["worker_subdomain01", "worker_subdomain02", "worker_subdomain03", "account01", "account02", "account03"],
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
        "CLOUDFLARE_WORKERS_TEST_WORKER_SUBDOMAIN_ENTID")
    _idmap_overridden = _entid_env_raw is not None and _entid_env_raw.strip().startswith("{")

    env = runner.env_override({
        "CLOUDFLARE_WORKERS_TEST_WORKER_SUBDOMAIN_ENTID": idmap,
        "CLOUDFLARE_WORKERS_TEST_LIVE": "FALSE",
        "CLOUDFLARE_WORKERS_TEST_EXPLAIN": "FALSE",
        "CLOUDFLARE_WORKERS_APIKEY": "",
    })

    idmap_resolved = helpers.to_map(
        env.get("CLOUDFLARE_WORKERS_TEST_WORKER_SUBDOMAIN_ENTID"))
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
