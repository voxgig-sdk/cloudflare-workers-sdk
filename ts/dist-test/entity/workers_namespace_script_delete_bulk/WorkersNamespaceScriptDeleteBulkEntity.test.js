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
(0, node_test_1.describe)('WorkersNamespaceScriptDeleteBulkEntity', async () => {
    // Per-test live pacing. Delay is read from sdk-test-control.json's
    // `test.live.delayMs`; only sleeps when CLOUDFLARE_WORKERS_TEST_LIVE=TRUE.
    (0, node_test_1.afterEach)((0, utility_1.liveDelay)('CLOUDFLARE_WORKERS_TEST_LIVE'));
    (0, node_test_1.test)('instance', async () => {
        const testsdk = __1.CloudflareWorkersSDK.test();
        const ent = testsdk.WorkersNamespaceScriptDeleteBulk();
        (0, node_assert_1.default)(null != ent);
    });
    (0, node_test_1.test)('basic', async (t) => {
        const live = 'TRUE' === process.env.CLOUDFLARE_WORKERS_TEST_LIVE;
        for (const op of []) {
            if (!live && (0, utility_1.maybeSkipControl)(t, 'entityOp', 'workers_namespace_script_delete_bulk.' + op, live))
                return;
        }
        const setup = basicSetup();
        if (setup.live) {
            return (0, live_entity_1.runLiveEntity)(setup, { "active": true, "alias": { "field": {} }, "fields": {}, "name": "workers_namespace_script_delete_bulk", "op": { "remove": { "input": "data", "name": "remove", "points": [{ "a": true, "co": { "id": "DELETE /accounts/{account_id}/workers/dispatch/namespaces/{dispatch_namespace}/scripts", "source": "openapi3", "version": 2 }, "g": { "params": [{ "a": true, "ex": "023e105f4ecef8ad9ca31a8372d0c353", "k": "param", "n": "account_id", "or": "account_id", "r": true, "t": "`$STRING`", "index$": 0 }, { "a": true, "ex": "my-dispatch-namespace", "k": "param", "n": "dispatch_namespace", "or": "dispatch_namespace", "r": true, "t": "`$STRING`", "index$": 1 }], "query": [{ "a": true, "ex": 1000, "k": "query", "n": "limit", "or": "limit", "r": false, "t": "`$INTEGER`", "index$": 0 }, { "a": true, "ex": "production:yes,staging:no", "k": "query", "n": "tag", "or": "tag", "r": true, "t": "`$STRING`", "index$": 1 }] }, "k": "http", "m": "DELETE", "o": "/accounts/{account_id}/workers/dispatch/namespaces/{dispatch_namespace}/scripts", "q": { "exist": ["account_id", "dispatch_namespace", "limit", "tag"] }, "r": {}, "s": [{ "lit": "accounts" }, { "var": "account_id" }, { "lit": "workers" }, { "lit": "dispatch" }, { "lit": "namespaces" }, { "var": "dispatch_namespace" }, { "lit": "scripts" }], "t": { "req": "`reqdata`", "res": "`body`" }, "index$": 0 }], "key$": "remove" } }, "relations": { "ancestors": [["$.main.kit.entity.account", "$.main.kit.entity.namespace"]] }, "key$": "workers_namespace_script_delete_bulk", "name__orig": "workers_namespace_script_delete_bulk", "Name": "WorkersNamespaceScriptDeleteBulk", "name_": "workers_namespace_script_delete_bulk", "name-": "workers-namespace-script-delete-bulk", "NAME": "WORKERS_NAMESPACE_SCRIPT_DELETE_BULK", "index$": 61 }, { "active": true, "entity": "workers_namespace_script_delete_bulk", "key$": "BasicWorkersNamespaceScriptDeleteBulkFlow", "kind": "basic", "name": "BasicWorkersNamespaceScriptDeleteBulkFlow", "param": {}, "step": [] }, 'WorkersNamespaceScriptDeleteBulk', { "DELETE /accounts/{account_id}/workers/dispatch/namespaces/{dispatch_namespace}/scripts": { "protocol": "http", "parameters": [{ "name": "account_id", "in": "path", "required": true, "schema": { "description": "Identifier.", "type": "string", "example": "023e105f4ecef8ad9ca31a8372d0c353", "maxLength": 32, "x-auditable": true, "x-ref": "#/components/schemas/workers_identifier" }, "index$": 0 }, { "name": "dispatch_namespace", "in": "path", "required": true, "schema": { "description": "Name of the Workers for Platforms dispatch namespace.", "type": "string", "example": "my-dispatch-namespace", "pattern": "^.+$", "x-auditable": true, "x-ref": "#/components/schemas/workers_dispatch_namespace_name" }, "index$": 1 }, { "name": "tags", "in": "query", "description": "Filter scripts by tags before deletion. Format: comma-separated list of tag:allowed pairs where allowed is 'yes' or 'no'.", "required": true, "schema": { "type": "string", "example": "production:yes,staging:no" }, "index$": 2 }, { "name": "limit", "in": "query", "description": "Limit the number of scripts to delete.", "schema": { "type": "integer", "example": 1000 }, "index$": 3 }] } });
        }
        const client = setup.client;
        const struct = setup.struct;
        const isempty = struct.isempty;
        const select = struct.select;
        let workers_namespace_script_delete_bulk_ref01_data = Object.values(setup.data.existing.workers_namespace_script_delete_bulk)[0];
    });
});
function basicSetup(extra) {
    // TODO: fix test def options
    const options = {}; // null
    // TODO: needs test utility to resolve path
    const entityDataFile = node_path_1.default.resolve(__dirname, '../../../../.sdk/test/entity/workers_namespace_script_delete_bulk/WorkersNamespaceScriptDeleteBulkTestData.json');
    // TODO: file ready util needed?
    const entityDataSource = Fs.readFileSync(entityDataFile).toString('utf8');
    // TODO: need a xlang JSON parse utility in voxgig/struct with better error msgs
    const entityData = JSON.parse(entityDataSource);
    options.entity = entityData.existing;
    let client = __1.CloudflareWorkersSDK.test(options, extra);
    const struct = client.utility().struct;
    const merge = struct.merge;
    const transform = struct.transform;
    let idmap = transform(['workers_namespace_script_delete_bulk01', 'workers_namespace_script_delete_bulk02', 'workers_namespace_script_delete_bulk03', 'account01', 'account02', 'account03', 'namespace01', 'namespace02', 'namespace03'], {
        '`$PACK`': ['', {
                '`$KEY`': '`$COPY`',
                '`$VAL`': ['`$FORMAT`', 'upper', '`$COPY`']
            }]
    });
    const env = (0, utility_1.envOverride)({
        'CLOUDFLARE_WORKERS_TEST_WORKERS_NAMESPACE_SCRIPT_DELETE_BULK_ENTID': idmap,
        'CLOUDFLARE_WORKERS_TEST_LIVE': 'FALSE',
        'CLOUDFLARE_WORKERS_TEST_EXPLAIN': 'FALSE',
        'CLOUDFLARE_WORKERS_APIKEY': '',
    });
    idmap = env['CLOUDFLARE_WORKERS_TEST_WORKERS_NAMESPACE_SCRIPT_DELETE_BULK_ENTID'];
    const live = 'TRUE' === env.CLOUDFLARE_WORKERS_TEST_LIVE;
    const transport = (0, live_runner_1.createLiveTransport)();
    if (live) {
        const rawIds = process.env['CLOUDFLARE_WORKERS_TEST_WORKERS_NAMESPACE_SCRIPT_DELETE_BULK_ENTID'];
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
//# sourceMappingURL=WorkersNamespaceScriptDeleteBulkEntity.test.js.map