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
(0, node_test_1.describe)('DestinationEntity', async () => {
    // Per-test live pacing. Delay is read from sdk-test-control.json's
    // `test.live.delayMs`; only sleeps when CLOUDFLARE_WORKERS_TEST_LIVE=TRUE.
    (0, node_test_1.afterEach)((0, utility_1.liveDelay)('CLOUDFLARE_WORKERS_TEST_LIVE'));
    (0, node_test_1.test)('instance', async () => {
        const testsdk = __1.CloudflareWorkersSDK.test();
        const ent = testsdk.Destination();
        (0, node_assert_1.default)(null != ent);
    });
    (0, node_test_1.test)('basic', async (t) => {
        const live = 'TRUE' === process.env.CLOUDFLARE_WORKERS_TEST_LIVE;
        for (const op of ['create', 'list', 'update', 'remove']) {
            if (!live && (0, utility_1.maybeSkipControl)(t, 'entityOp', 'destination.' + op, live))
                return;
        }
        const setup = basicSetup();
        if (setup.live) {
            return (0, live_entity_1.runLiveEntity)(setup, { "active": true, "alias": { "field": {} }, "fields": { "configuration": { "a": true, "h": "Configuration", "n": "configuration", "r": true, "t": "`$OBJECT`", "union": { "branches": 3, "count": 1, "depth": 2 }, "key$": "configuration", "index$": 0 }, "enabled": { "a": true, "h": "Enabled", "n": "enabled", "r": true, "t": "`$BOOLEAN`", "key$": "enabled", "index$": 1 }, "errors": { "a": true, "h": "Errors", "n": "errors", "r": true, "t": "`$ARRAY`", "key$": "errors", "index$": 2 }, "id": { "a": true, "h": "Id", "n": "id", "r": false, "t": "`$STRING`", "key$": "id", "index$": 3 }, "messages": { "a": true, "h": "Messages", "n": "messages", "r": true, "t": "`$ARRAY`", "key$": "messages", "index$": 4 }, "name": { "a": true, "h": "Name", "n": "name", "r": true, "t": "`$STRING`", "key$": "name", "index$": 5 }, "result": { "a": true, "h": "Result", "n": "result", "r": true, "t": "`$OBJECT`", "union": { "branches": 3, "count": 1, "depth": 4 }, "key$": "result", "index$": 6 }, "skipPreflightCheck": { "a": true, "h": "Skip Preflight Check", "n": "skipPreflightCheck", "r": false, "t": "`$BOOLEAN`", "key$": "skipPreflightCheck", "index$": 7 }, "success": { "a": true, "h": "Success", "n": "success", "r": true, "t": "`$BOOLEAN`", "key$": "success", "index$": 8 } }, "id": { "field": "id", "name": "id" }, "name": "destination", "op": { "create": { "input": "data", "name": "create", "points": [{ "a": true, "co": { "id": "POST /accounts/{account_id}/workers/observability/destinations", "source": "openapi3", "version": 2 }, "g": { "params": [{ "a": true, "k": "param", "n": "account_id", "or": "account_id", "r": true, "t": "`$STRING`", "index$": 0 }] }, "k": "http", "m": "POST", "o": "/accounts/{account_id}/workers/observability/destinations", "q": { "exist": ["account_id"] }, "r": {}, "s": [{ "lit": "accounts" }, { "var": "account_id" }, { "lit": "workers" }, { "lit": "observability" }, { "lit": "destinations" }], "t": { "req": "`reqdata`", "res": "`body`" }, "index$": 0 }], "key$": "create" }, "list": { "input": "data", "name": "list", "points": [{ "a": true, "co": { "id": "GET /accounts/{account_id}/workers/observability/destinations", "source": "openapi3", "version": 2 }, "g": { "params": [{ "a": true, "k": "param", "n": "account_id", "or": "account_id", "r": true, "t": "`$STRING`", "index$": 0 }], "query": [{ "a": true, "ex": "desc", "k": "query", "n": "order", "or": "order", "r": false, "t": "`$STRING`", "index$": 0 }, { "a": true, "ex": "updated", "k": "query", "n": "order_by", "or": "order_by", "r": false, "t": "`$STRING`", "index$": 1 }, { "a": true, "ex": 1, "k": "query", "n": "page", "or": "page", "r": false, "t": "`$NUMBER`", "index$": 2 }, { "a": true, "ex": 20, "k": "query", "n": "per_page", "or": "per_page", "r": false, "t": "`$NUMBER`", "index$": 3 }] }, "k": "http", "m": "GET", "o": "/accounts/{account_id}/workers/observability/destinations", "q": { "exist": ["account_id", "order", "order_by", "page", "per_page"] }, "r": {}, "s": [{ "lit": "accounts" }, { "var": "account_id" }, { "lit": "workers" }, { "lit": "observability" }, { "lit": "destinations" }], "t": { "req": "`reqdata`", "res": "`body`" }, "index$": 0 }], "key$": "list" }, "remove": { "input": "data", "name": "remove", "points": [{ "a": true, "co": { "id": "DELETE /accounts/{account_id}/workers/observability/destinations/{slug}", "source": "openapi3", "version": 2 }, "g": { "params": [{ "a": true, "k": "param", "n": "account_id", "or": "account_id", "r": true, "t": "`$STRING`", "index$": 0 }, { "a": true, "k": "param", "n": "id", "or": "slug", "r": true, "t": "`$STRING`", "index$": 1 }] }, "k": "http", "m": "DELETE", "o": "/accounts/{account_id}/workers/observability/destinations/{slug}", "q": { "exist": ["account_id", "id"] }, "r": { "param": { "slug": "id" } }, "s": [{ "lit": "accounts" }, { "var": "account_id" }, { "lit": "workers" }, { "lit": "observability" }, { "lit": "destinations" }, { "var": "id" }], "t": { "req": "`reqdata`", "res": "`body`" }, "index$": 0 }], "key$": "remove" }, "update": { "input": "data", "name": "update", "points": [{ "a": true, "co": { "id": "PATCH /accounts/{account_id}/workers/observability/destinations/{slug}", "source": "openapi3", "version": 2 }, "g": { "params": [{ "a": true, "k": "param", "n": "account_id", "or": "account_id", "r": true, "t": "`$STRING`", "index$": 0 }, { "a": true, "k": "param", "n": "id", "or": "slug", "r": true, "t": "`$STRING`", "index$": 1 }] }, "k": "http", "m": "PATCH", "o": "/accounts/{account_id}/workers/observability/destinations/{slug}", "q": { "exist": ["account_id", "id"] }, "r": { "param": { "slug": "id" } }, "s": [{ "lit": "accounts" }, { "var": "account_id" }, { "lit": "workers" }, { "lit": "observability" }, { "lit": "destinations" }, { "var": "id" }], "t": { "req": "`reqdata`", "res": "`body`" }, "index$": 0 }], "key$": "update" } }, "relations": { "ancestors": [["$.main.kit.entity.account"]] }, "key$": "destination", "name__orig": "destination", "Name": "Destination", "name_": "destination", "name-": "destination", "NAME": "DESTINATION", "index$": 11 }, { "active": true, "entity": "destination", "key$": "BasicDestinationFlow", "kind": "basic", "name": "BasicDestinationFlow", "param": {}, "step": [{ "a": true, "d": {}, "i": { "ref": "destination_ref01" }, "m": { "account_id": "account01" }, "o": "create", "s": [], "v": [], "index$": 0 }, { "a": true, "d": {}, "i": {}, "m": { "account_id": "account01" }, "o": "list", "s": [], "v": [{ "apply": "ItemExists", "def": { "ref": "destination_ref01" } }], "index$": 1 }, { "a": true, "d": { "account_id": "account01" }, "i": { "ref": "destination_ref01", "srcdatavar": "destination_ref01_data", "suffix": "_up0", "textfield": "name" }, "m": {}, "o": "update", "s": [{ "apply": "TextFieldMark", "def": { "mark": "Mark01-destination_ref01" } }], "v": [], "index$": 2 }, { "a": true, "d": {}, "i": { "ref": "destination_ref01", "suffix": "_rm0" }, "m": { "account_id": "account01", "id": "destination01" }, "o": "remove", "s": [], "v": [], "index$": 3 }, { "a": true, "d": {}, "i": { "suffix": "_rt0" }, "m": { "account_id": "account01" }, "o": "list", "s": [], "v": [{ "apply": "ItemNotExists", "def": { "ref": "destination_ref01" } }], "index$": 4 }] }, 'Destination', { "POST /accounts/{account_id}/workers/observability/destinations": { "protocol": "http", "requestBody": { "content": { "application/json": { "schema": { "type": "object", "properties": { "configuration": { "type": "object", "properties": { "headers": { "type": "object", "additionalProperties": { "type": "string" } }, "logpushDataset": { "anyOf": [{}, {}, {}] }, "type": { "type": "string", "enum": ["logpush"] }, "url": { "type": "string" } }, "required": ["type", "logpushDataset", "url", "headers"], "key$": "configuration" }, "enabled": { "type": "boolean", "key$": "enabled" }, "name": { "type": "string", "pattern": "^[a-z0-9][a-z0-9-]*[a-z0-9]$", "key$": "name" }, "skipPreflightCheck": { "type": "boolean", "key$": "skipPreflightCheck" } }, "required": ["name", "enabled", "configuration"], "index$": 1 } } } }, "parameters": [{ "name": "account_id", "in": "path", "description": "Your Cloudflare account ID.", "required": true, "schema": { "type": "string" }, "index$": 0 }] }, "GET /accounts/{account_id}/workers/observability/destinations": { "protocol": "http", "parameters": [{ "name": "account_id", "in": "path", "description": "Your Cloudflare account ID.", "required": true, "schema": { "type": "string" }, "index$": 0 }, { "name": "page", "in": "query", "schema": { "type": "number", "default": 1, "minimum": 1 }, "index$": 1 }, { "name": "perPage", "in": "query", "schema": { "type": "number", "default": 20, "maximum": 50, "minimum": 5 }, "index$": 2 }, { "name": "order", "in": "query", "schema": { "type": "string", "default": "desc", "enum": ["asc", "desc"] }, "index$": 3 }, { "name": "orderBy", "in": "query", "schema": { "type": "string", "default": "updated", "enum": ["created", "updated"] }, "index$": 4 }] }, "DELETE /accounts/{account_id}/workers/observability/destinations/{slug}": { "protocol": "http", "parameters": [{ "name": "account_id", "in": "path", "description": "Your Cloudflare account ID.", "required": true, "schema": { "type": "string" }, "index$": 0 }, { "name": "slug", "in": "path", "required": true, "schema": { "type": "string" }, "index$": 1 }] }, "PATCH /accounts/{account_id}/workers/observability/destinations/{slug}": { "protocol": "http", "requestBody": { "content": { "application/json": { "schema": { "type": "object", "properties": { "configuration": { "type": "object", "properties": { "headers": { "type": "object", "additionalProperties": { "type": "string" } }, "type": { "type": "string", "enum": ["logpush"] }, "url": { "type": "string" } }, "required": ["type", "url", "headers"], "key$": "configuration" }, "enabled": { "type": "boolean", "key$": "enabled" } }, "required": ["enabled", "configuration"], "index$": 1 } } } }, "parameters": [{ "name": "account_id", "in": "path", "description": "Your Cloudflare account ID.", "required": true, "schema": { "type": "string" }, "index$": 0 }, { "name": "slug", "in": "path", "required": true, "schema": { "type": "string" }, "index$": 1 }] } });
        }
        const client = setup.client;
        const struct = setup.struct;
        const isempty = struct.isempty;
        const select = struct.select;
        // CREATE
        const destination_ref01_ent = client.Destination();
        let destination_ref01_data = setup.data.new.destination['destination_ref01'];
        destination_ref01_data['account_id'] = setup.idmap['account01'];
        destination_ref01_data = (await destination_ref01_ent.create(destination_ref01_data)).data();
        (0, node_assert_1.default)(null != destination_ref01_data.id);
        // LIST
        const destination_ref01_match = {};
        destination_ref01_match['account_id'] = setup.idmap['account01'];
        const destination_ref01_list = (await destination_ref01_ent.list(destination_ref01_match)).map((e) => e.data());
        (0, node_assert_1.default)(!isempty(select(destination_ref01_list, { id: destination_ref01_data.id })));
        // UPDATE
        const destination_ref01_data_up0 = {};
        destination_ref01_data_up0.id = destination_ref01_data.id;
        destination_ref01_data_up0['account_id'] = setup.idmap['account_id'];
        const destination_ref01_markdef_up0 = { name: 'name', value: 'Mark01-destination_ref01_' + setup.now };
        destination_ref01_data_up0[destination_ref01_markdef_up0.name] = destination_ref01_markdef_up0.value;
        const destination_ref01_resdata_up0 = (await destination_ref01_ent.update(destination_ref01_data_up0)).data();
        (0, node_assert_1.default)(destination_ref01_resdata_up0.id === destination_ref01_data_up0.id);
        (0, node_assert_1.default)(destination_ref01_resdata_up0[destination_ref01_markdef_up0.name] === destination_ref01_markdef_up0.value);
        // REMOVE
        const destination_ref01_match_rm0 = { id: destination_ref01_data.id };
        await destination_ref01_ent.remove(destination_ref01_match_rm0);
        // LIST
        const destination_ref01_match_rt0 = {};
        destination_ref01_match_rt0['account_id'] = setup.idmap['account01'];
        const destination_ref01_list_rt0 = (await destination_ref01_ent.list(destination_ref01_match_rt0)).map((e) => e.data());
        (0, node_assert_1.default)(isempty(select(destination_ref01_list_rt0, { id: destination_ref01_data.id })));
    });
});
function basicSetup(extra) {
    // TODO: fix test def options
    const options = {}; // null
    // TODO: needs test utility to resolve path
    const entityDataFile = node_path_1.default.resolve(__dirname, '../../../../.sdk/test/entity/destination/DestinationTestData.json');
    // TODO: file ready util needed?
    const entityDataSource = Fs.readFileSync(entityDataFile).toString('utf8');
    // TODO: need a xlang JSON parse utility in voxgig/struct with better error msgs
    const entityData = JSON.parse(entityDataSource);
    options.entity = entityData.existing;
    let client = __1.CloudflareWorkersSDK.test(options, extra);
    const struct = client.utility().struct;
    const merge = struct.merge;
    const transform = struct.transform;
    let idmap = transform(['destination01', 'destination02', 'destination03', 'account01', 'account02', 'account03'], {
        '`$PACK`': ['', {
                '`$KEY`': '`$COPY`',
                '`$VAL`': ['`$FORMAT`', 'upper', '`$COPY`']
            }]
    });
    const env = (0, utility_1.envOverride)({
        'CLOUDFLARE_WORKERS_TEST_DESTINATION_ENTID': idmap,
        'CLOUDFLARE_WORKERS_TEST_LIVE': 'FALSE',
        'CLOUDFLARE_WORKERS_TEST_EXPLAIN': 'FALSE',
        'CLOUDFLARE_WORKERS_APIKEY': '',
    });
    idmap = env['CLOUDFLARE_WORKERS_TEST_DESTINATION_ENTID'];
    const live = 'TRUE' === env.CLOUDFLARE_WORKERS_TEST_LIVE;
    const transport = (0, live_runner_1.createLiveTransport)();
    if (live) {
        const rawIds = process.env['CLOUDFLARE_WORKERS_TEST_DESTINATION_ENTID'];
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
//# sourceMappingURL=DestinationEntity.test.js.map