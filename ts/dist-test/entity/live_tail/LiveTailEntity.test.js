"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || (function () {
    var ownKeys = function(o) {
        ownKeys = Object.getOwnPropertyNames || function (o) {
            var ar = [];
            for (var k in o) if (Object.prototype.hasOwnProperty.call(o, k)) ar[ar.length] = k;
            return ar;
        };
        return ownKeys(o);
    };
    return function (mod) {
        if (mod && mod.__esModule) return mod;
        var result = {};
        if (mod != null) for (var k = ownKeys(mod), i = 0; i < k.length; i++) if (k[i] !== "default") __createBinding(result, mod, k[i]);
        __setModuleDefault(result, mod);
        return result;
    };
})();
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const node_path_1 = __importDefault(require("node:path"));
const Fs = __importStar(require("node:fs"));
const node_test_1 = require("node:test");
const node_assert_1 = __importDefault(require("node:assert"));
const live_runner_1 = require("../../live-runner");
const live_entity_1 = require("../../live-entity");
const __1 = require("../../..");
const utility_1 = require("../../utility");
(0, utility_1.loadEnvLocal)(__dirname + '/../../../.env.local');
(0, node_test_1.describe)('LiveTailEntity', async () => {
    // Per-test live pacing. Delay is read from sdk-test-control.json's
    // `test.live.delayMs`; only sleeps when CLOUDFLARE_WORKERS_TEST_LIVE=TRUE.
    (0, node_test_1.afterEach)((0, utility_1.liveDelay)('CLOUDFLARE_WORKERS_TEST_LIVE'));
    (0, node_test_1.test)('instance', async () => {
        const testsdk = __1.CloudflareWorkersSDK.test();
        const ent = testsdk.LiveTail();
        (0, node_assert_1.default)(null != ent);
    });
    (0, node_test_1.test)('basic', async (t) => {
        const live = 'TRUE' === process.env.CLOUDFLARE_WORKERS_TEST_LIVE;
        for (const op of ['create']) {
            if (!live && (0, utility_1.maybeSkipControl)(t, 'entityOp', 'live_tail.' + op, live))
                return;
        }
        const setup = basicSetup();
        if (setup.live) {
            return (0, live_entity_1.runLiveEntity)(setup, { "active": true, "alias": { "field": {} }, "fields": { "errors": { "a": true, "h": "Errors", "n": "errors", "r": true, "t": "`$ARRAY`", "key$": "errors", "index$": 0 }, "filterCombination": { "a": true, "h": "Filter Combination", "n": "filterCombination", "r": false, "sh": "Set a flag to describe how to combine the filters on the query.", "t": "`$STRING`", "key$": "filterCombination", "index$": 1 }, "filters": { "a": true, "h": "Filters", "n": "filters", "r": false, "sh": "Apply filters to the query.", "t": "`$ARRAY`", "union": { "branches": 3, "count": 5, "depth": 8 }, "key$": "filters", "index$": 2 }, "messages": { "a": true, "h": "Messages", "n": "messages", "r": true, "t": "`$ARRAY`", "key$": "messages", "index$": 3 }, "result": { "a": true, "h": "Result", "n": "result", "r": true, "t": "`$OBJECT`", "key$": "result", "index$": 4 }, "scriptId": { "a": true, "h": "Script Id", "n": "scriptId", "r": false, "t": "`$STRING`", "key$": "scriptId", "index$": 5 }, "success": { "a": true, "h": "Success", "n": "success", "r": true, "t": "`$BOOLEAN`", "key$": "success", "index$": 6 } }, "name": "live_tail", "op": { "create": { "input": "data", "name": "create", "points": [{ "a": true, "co": { "id": "POST /accounts/{account_id}/workers/observability/telemetry/live-tail", "source": "openapi3", "version": 2 }, "g": { "params": [{ "a": true, "k": "param", "n": "account_id", "or": "account_id", "r": true, "t": "`$STRING`", "index$": 0 }] }, "k": "http", "m": "POST", "o": "/accounts/{account_id}/workers/observability/telemetry/live-tail", "q": { "exist": ["account_id"] }, "r": {}, "s": [{ "lit": "accounts" }, { "var": "account_id" }, { "lit": "workers" }, { "lit": "observability" }, { "lit": "telemetry" }, { "lit": "live-tail" }], "t": { "req": "`reqdata`", "res": "`body`" }, "index$": 0 }, { "a": true, "co": { "id": "POST /accounts/{account_id}/workers/observability/telemetry/live-tail/heartbeat", "source": "openapi3", "version": 2 }, "g": { "params": [{ "a": true, "k": "param", "n": "account_id", "or": "account_id", "r": true, "t": "`$STRING`", "index$": 0 }] }, "k": "http", "m": "POST", "o": "/accounts/{account_id}/workers/observability/telemetry/live-tail/heartbeat", "q": { "$action": "heartbeat", "exist": ["account_id"] }, "r": {}, "s": [{ "lit": "accounts" }, { "var": "account_id" }, { "lit": "workers" }, { "lit": "observability" }, { "lit": "telemetry" }, { "lit": "live-tail" }, { "lit": "heartbeat" }], "t": { "req": "`reqdata`", "res": "`body`" }, "index$": 1 }], "key$": "create" } }, "relations": { "ancestors": [["$.main.kit.entity.account"]] }, "key$": "live_tail", "name__orig": "live_tail", "Name": "LiveTail", "name_": "live_tail", "name-": "live-tail", "NAME": "LIVE_TAIL", "index$": 20 }, { "active": true, "entity": "live_tail", "key$": "BasicLiveTailFlow", "kind": "basic", "name": "BasicLiveTailFlow", "param": {}, "step": [{ "a": true, "d": {}, "i": { "ref": "live_tail_ref01" }, "m": { "account_id": "account01" }, "o": "create", "s": [], "v": [], "index$": 0 }] }, 'LiveTail', { "POST /accounts/{account_id}/workers/observability/telemetry/live-tail": { "protocol": "http", "requestBody": { "description": "Create websocket server for live tail.", "required": true, "content": { "application/json": { "schema": { "type": "object", "properties": { "filterCombination": { "description": "Set a flag to describe how to combine the filters on the query.", "type": "string", "default": "and", "enum": ["and", "or", "AND", "OR"], "key$": "filterCombination" }, "filters": { "description": "Apply filters to the query. Supports nested groups via kind: 'group'.", "type": "array", "items": { "allOf": [{ "description": "Supports nested groups via kind: 'group'.", "type": "object", "anyOf": [], "x-ref": "#/components/schemas/workers-observability_filter_node" }, { "anyOf": [], "description": "Supports nested groups via kind: 'group'. Maximum nesting depth is 4." }] }, "default": [], "key$": "filters" }, "scriptId": { "type": "string", "key$": "scriptId" } }, "index$": 1 } } } }, "parameters": [{ "name": "account_id", "in": "path", "description": "Your Cloudflare account ID.", "required": true, "schema": { "type": "string" }, "index$": 0 }] }, "POST /accounts/{account_id}/workers/observability/telemetry/live-tail/heartbeat": { "protocol": "http", "requestBody": { "description": "Keep your live tail connection alive.", "required": true, "content": { "application/json": { "schema": { "type": "object", "properties": { "scriptId": { "type": "string" } } } } } }, "parameters": [{ "name": "account_id", "in": "path", "description": "Your Cloudflare account ID.", "required": true, "schema": { "type": "string" }, "index$": 0 }] } });
        }
        const client = setup.client;
        const struct = setup.struct;
        const isempty = struct.isempty;
        const select = struct.select;
        // CREATE
        const live_tail_ref01_ent = client.LiveTail();
        let live_tail_ref01_data = setup.data.new.live_tail['live_tail_ref01'];
        live_tail_ref01_data['account_id'] = setup.idmap['account01'];
        live_tail_ref01_data = (await live_tail_ref01_ent.create(live_tail_ref01_data)).data();
        (0, node_assert_1.default)(null != live_tail_ref01_data);
    });
});
function basicSetup(extra) {
    // TODO: fix test def options
    const options = {}; // null
    // TODO: needs test utility to resolve path
    const entityDataFile = node_path_1.default.resolve(__dirname, '../../../../.sdk/test/entity/live_tail/LiveTailTestData.json');
    // TODO: file ready util needed?
    const entityDataSource = Fs.readFileSync(entityDataFile).toString('utf8');
    // TODO: need a xlang JSON parse utility in voxgig/struct with better error msgs
    const entityData = JSON.parse(entityDataSource);
    options.entity = entityData.existing;
    let client = __1.CloudflareWorkersSDK.test(options, extra);
    const struct = client.utility().struct;
    const merge = struct.merge;
    const transform = struct.transform;
    let idmap = transform(['live_tail01', 'live_tail02', 'live_tail03', 'account01', 'account02', 'account03'], {
        '`$PACK`': ['', {
                '`$KEY`': '`$COPY`',
                '`$VAL`': ['`$FORMAT`', 'upper', '`$COPY`']
            }]
    });
    const env = (0, utility_1.envOverride)({
        'CLOUDFLARE_WORKERS_TEST_LIVE_TAIL_ENTID': idmap,
        'CLOUDFLARE_WORKERS_TEST_LIVE': 'FALSE',
        'CLOUDFLARE_WORKERS_TEST_EXPLAIN': 'FALSE',
        'CLOUDFLARE_WORKERS_APIKEY': '',
    });
    idmap = env['CLOUDFLARE_WORKERS_TEST_LIVE_TAIL_ENTID'];
    const live = 'TRUE' === env.CLOUDFLARE_WORKERS_TEST_LIVE;
    const transport = (0, live_runner_1.createLiveTransport)();
    if (live) {
        const rawIds = process.env['CLOUDFLARE_WORKERS_TEST_LIVE_TAIL_ENTID'];
        idmap = rawIds && rawIds.trim() ? JSON.parse(rawIds) : {};
        if (!idmap || Array.isArray(idmap) || typeof idmap !== 'object') {
            throw new Error('Live ENTID must be a JSON object');
        }
        client = new __1.CloudflareWorkersSDK(merge([
            // FIRST, so the generated fields below win: sdk-test-control.json's
            // test.client.options adds to the live client, it does not redirect it.
            (0, utility_1.liveClientOptions)(),
            {
                apikey: env.CLOUDFLARE_WORKERS_APIKEY,
            },
            // 'extra || {}', not a bare 'extra': struct.merge returns UNDEFINED when the
            // last entry is undefined, and basicSetup is normally called with no
            // argument at all - so a bare 'extra' silently discarded the apikey
            // and server values above and handed the SDK undefined. Harmless
            // while there was nothing in that object; not harmless now.
            extra || {},
            { system: { fetch: transport.fetch } }
        ]));
    }
    const setup = {
        idmap,
        env,
        options,
        client,
        struct,
        data: entityData,
        explain: 'TRUE' === env.CLOUDFLARE_WORKERS_TEST_EXPLAIN,
        live,
        transport,
        now: Date.now(),
    };
    return setup;
}
//# sourceMappingURL=LiveTailEntity.test.js.map