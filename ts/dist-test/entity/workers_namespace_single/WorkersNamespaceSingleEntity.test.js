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
(0, node_test_1.describe)('WorkersNamespaceSingleEntity', async () => {
    // Per-test live pacing. Delay is read from sdk-test-control.json's
    // `test.live.delayMs`; only sleeps when CLOUDFLARE_WORKERS_TEST_LIVE=TRUE.
    (0, node_test_1.afterEach)((0, utility_1.liveDelay)('CLOUDFLARE_WORKERS_TEST_LIVE'));
    (0, node_test_1.test)('instance', async () => {
        const testsdk = __1.CloudflareWorkersSDK.test();
        const ent = testsdk.WorkersNamespaceSingle();
        (0, node_assert_1.default)(null != ent);
    });
    (0, node_test_1.test)('basic', async (t) => {
        const live = 'TRUE' === process.env.CLOUDFLARE_WORKERS_TEST_LIVE;
        for (const op of ['create', 'update', 'load']) {
            if (!live && (0, utility_1.maybeSkipControl)(t, 'entityOp', 'workers_namespace_single.' + op, live))
                return;
        }
        const setup = basicSetup();
        if (setup.live) {
            return (0, live_entity_1.runLiveEntity)(setup, { "active": true, "alias": { "field": {} }, "fields": { "errors": { "a": true, "h": "Errors", "n": "errors", "r": true, "t": "`$ARRAY`", "key$": "errors", "index$": 0 }, "messages": { "a": true, "h": "Messages", "n": "messages", "r": true, "t": "`$ARRAY`", "key$": "messages", "index$": 1 }, "name": { "a": true, "h": "Name", "n": "name", "r": false, "sh": "The name of the dispatch namespace.", "t": "`$STRING`", "key$": "name", "index$": 2 }, "result": { "a": true, "h": "Result", "n": "result", "r": false, "t": "`$OBJECT`", "key$": "result", "index$": 3 }, "success": { "a": true, "h": "Success", "n": "success", "r": true, "sh": "Whether the API call was successful.", "t": "`$BOOLEAN`", "key$": "success", "index$": 4 }, "trusted_workers": { "a": true, "h": "Trusted Workers", "n": "trusted_workers", "r": false, "sh": "Whether the Workers in the namespace are executed in a \"trusted\" manner.", "t": "`$BOOLEAN`", "key$": "trusted_workers", "index$": 5 } }, "name": "workers_namespace_single", "op": { "create": { "input": "data", "name": "create", "points": [{ "a": true, "co": { "id": "POST /accounts/{account_id}/workers/dispatch/namespaces", "source": "openapi3", "version": 2 }, "g": { "params": [{ "a": true, "ex": "023e105f4ecef8ad9ca31a8372d0c353", "k": "param", "n": "account_id", "or": "account_id", "r": true, "t": "`$STRING`", "index$": 0 }] }, "k": "http", "m": "POST", "o": "/accounts/{account_id}/workers/dispatch/namespaces", "q": { "exist": ["account_id"] }, "r": {}, "s": [{ "lit": "accounts" }, { "var": "account_id" }, { "lit": "workers" }, { "lit": "dispatch" }, { "lit": "namespaces" }], "t": { "req": "`reqdata`", "res": "`body`" }, "index$": 0 }], "key$": "create" }, "load": { "input": "data", "name": "load", "points": [{ "a": true, "co": { "id": "GET /accounts/{account_id}/workers/dispatch/namespaces/{dispatch_namespace}", "source": "openapi3", "version": 2 }, "g": { "params": [{ "a": true, "ex": "023e105f4ecef8ad9ca31a8372d0c353", "k": "param", "n": "account_id", "or": "account_id", "r": true, "t": "`$STRING`", "index$": 0 }, { "a": true, "ex": "my-dispatch-namespace", "k": "param", "n": "dispatch_namespace", "or": "dispatch_namespace", "r": true, "t": "`$STRING`", "index$": 1 }] }, "k": "http", "m": "GET", "o": "/accounts/{account_id}/workers/dispatch/namespaces/{dispatch_namespace}", "q": { "exist": ["account_id", "dispatch_namespace"] }, "r": {}, "s": [{ "lit": "accounts" }, { "var": "account_id" }, { "lit": "workers" }, { "lit": "dispatch" }, { "lit": "namespaces" }, { "var": "dispatch_namespace" }], "t": { "req": "`reqdata`", "res": "`body`" }, "index$": 0 }], "key$": "load" }, "patch": { "input": "data", "name": "patch", "points": [{ "a": true, "co": { "id": "PATCH /accounts/{account_id}/workers/dispatch/namespaces/{dispatch_namespace}", "source": "openapi3", "version": 2 }, "g": { "params": [{ "a": true, "ex": "023e105f4ecef8ad9ca31a8372d0c353", "k": "param", "n": "account_id", "or": "account_id", "r": true, "t": "`$STRING`", "index$": 0 }, { "a": true, "ex": "my-dispatch-namespace", "k": "param", "n": "dispatch_namespace", "or": "dispatch_namespace", "r": true, "t": "`$STRING`", "index$": 1 }] }, "k": "http", "m": "PATCH", "o": "/accounts/{account_id}/workers/dispatch/namespaces/{dispatch_namespace}", "q": { "exist": ["account_id", "dispatch_namespace"] }, "r": {}, "s": [{ "lit": "accounts" }, { "var": "account_id" }, { "lit": "workers" }, { "lit": "dispatch" }, { "lit": "namespaces" }, { "var": "dispatch_namespace" }], "t": { "req": "`reqdata`", "res": "`body`" }, "index$": 0 }], "key$": "patch" }, "update": { "input": "data", "name": "update", "points": [{ "a": true, "co": { "id": "PUT /accounts/{account_id}/workers/dispatch/namespaces/{dispatch_namespace}", "source": "openapi3", "version": 2 }, "g": { "params": [{ "a": true, "ex": "023e105f4ecef8ad9ca31a8372d0c353", "k": "param", "n": "account_id", "or": "account_id", "r": true, "t": "`$STRING`", "index$": 0 }, { "a": true, "ex": "my-dispatch-namespace", "k": "param", "n": "dispatch_namespace", "or": "dispatch_namespace", "r": true, "t": "`$STRING`", "index$": 1 }] }, "k": "http", "m": "PUT", "o": "/accounts/{account_id}/workers/dispatch/namespaces/{dispatch_namespace}", "q": { "exist": ["account_id", "dispatch_namespace"] }, "r": {}, "s": [{ "lit": "accounts" }, { "var": "account_id" }, { "lit": "workers" }, { "lit": "dispatch" }, { "lit": "namespaces" }, { "var": "dispatch_namespace" }], "t": { "req": "`reqdata`", "res": "`body`" }, "index$": 0 }], "key$": "update" } }, "relations": { "ancestors": [["$.main.kit.entity.account"], ["$.main.kit.entity.account", "$.main.kit.entity.namespace"]] }, "key$": "workers_namespace_single", "name__orig": "workers_namespace_single", "Name": "WorkersNamespaceSingle", "name_": "workers_namespace_single", "name-": "workers-namespace-single", "NAME": "WORKERS_NAMESPACE_SINGLE", "index$": 63 }, { "active": true, "entity": "workers_namespace_single", "key$": "BasicWorkersNamespaceSingleFlow", "kind": "basic", "name": "BasicWorkersNamespaceSingleFlow", "param": {}, "step": [{ "a": true, "d": {}, "i": { "ref": "workers_namespace_single_ref01" }, "m": { "account_id": "account01" }, "o": "create", "s": [], "v": [], "index$": 0 }, { "a": true, "d": { "account_id": "account01" }, "i": { "ref": "workers_namespace_single_ref01", "srcdatavar": "workers_namespace_single_ref01_data", "suffix": "_up0", "textfield": "name" }, "m": {}, "o": "update", "s": [{ "apply": "TextFieldMark", "def": { "mark": "Mark01-workers_namespace_single_ref01" } }], "v": [], "index$": 1 }, { "a": true, "d": {}, "i": { "ref": "workers_namespace_single_ref01", "srcdatavar": "workers_namespace_single_ref01_data", "suffix": "_dt0" }, "m": { "account_id": "account01", "id": "workers_namespace_single01" }, "o": "load", "s": [], "v": [{ "apply": "TextFieldMark", "def": { "mark": "Mark01-workers_namespace_single_ref01" } }], "index$": 2 }] }, 'WorkersNamespaceSingle', { "POST /accounts/{account_id}/workers/dispatch/namespaces": { "protocol": "http", "requestBody": { "required": true, "content": { "application/json": { "schema": { "type": "object", "properties": { "name": { "description": "The name of the dispatch namespace.", "type": "string", "example": "my-dispatch-namespace", "x-auditable": true, "key$": "name" } }, "index$": 1 } } } }, "parameters": [{ "name": "account_id", "in": "path", "required": true, "schema": { "description": "Identifier.", "type": "string", "example": "023e105f4ecef8ad9ca31a8372d0c353", "maxLength": 32, "x-auditable": true, "x-ref": "#/components/schemas/workers_identifier" }, "index$": 0 }] }, "GET /accounts/{account_id}/workers/dispatch/namespaces/{dispatch_namespace}": { "protocol": "http", "parameters": [{ "name": "account_id", "in": "path", "required": true, "schema": { "description": "Identifier.", "type": "string", "example": "023e105f4ecef8ad9ca31a8372d0c353", "maxLength": 32, "x-auditable": true, "x-ref": "#/components/schemas/workers_identifier" }, "index$": 0 }, { "name": "dispatch_namespace", "in": "path", "required": true, "schema": { "description": "Name of the Workers for Platforms dispatch namespace.", "type": "string", "example": "my-dispatch-namespace", "pattern": "^.+$", "x-auditable": true, "x-ref": "#/components/schemas/workers_dispatch_namespace_name" }, "index$": 1 }] }, "PATCH /accounts/{account_id}/workers/dispatch/namespaces/{dispatch_namespace}": { "protocol": "http", "requestBody": { "required": true, "content": { "application/json": { "schema": { "type": "object", "properties": { "name": { "description": "The name of the dispatch namespace.", "type": "string", "example": "my-dispatch-namespace", "x-auditable": true, "key$": "name" }, "trusted_workers": { "description": "Whether the Workers in the namespace are executed in a \"trusted\" manner. When a Worker is trusted, it has access to the shared caches for the zone in the Cache API, and has access to the `request.cf` object on incoming Requests. When a Worker is untrusted, caches are not shared across the zone, and `request.cf` is undefined. By default, Workers in a namespace are \"untrusted\".", "type": "boolean", "example": false, "default": false, "x-auditable": true, "x-ref": "#/components/schemas/workers_trusted_workers", "key$": "trusted_workers" } }, "index$": 1 } } } }, "parameters": [{ "name": "account_id", "in": "path", "required": true, "schema": { "description": "Identifier.", "type": "string", "example": "023e105f4ecef8ad9ca31a8372d0c353", "maxLength": 32, "x-auditable": true, "x-ref": "#/components/schemas/workers_identifier" }, "index$": 0 }, { "name": "dispatch_namespace", "in": "path", "required": true, "schema": { "description": "Name of the Workers for Platforms dispatch namespace.", "type": "string", "example": "my-dispatch-namespace", "pattern": "^.+$", "x-auditable": true, "x-ref": "#/components/schemas/workers_dispatch_namespace_name" }, "index$": 1 }] }, "PUT /accounts/{account_id}/workers/dispatch/namespaces/{dispatch_namespace}": { "protocol": "http", "requestBody": { "required": true, "content": { "application/json": { "schema": { "type": "object", "properties": { "name": { "description": "The name of the dispatch namespace.", "type": "string", "example": "my-dispatch-namespace", "x-auditable": true, "key$": "name" }, "trusted_workers": { "description": "Whether the Workers in the namespace are executed in a \"trusted\" manner. When a Worker is trusted, it has access to the shared caches for the zone in the Cache API, and has access to the `request.cf` object on incoming Requests. When a Worker is untrusted, caches are not shared across the zone, and `request.cf` is undefined. By default, Workers in a namespace are \"untrusted\".", "type": "boolean", "example": false, "default": false, "x-auditable": true, "x-ref": "#/components/schemas/workers_trusted_workers", "key$": "trusted_workers" } }, "index$": 1 } } } }, "parameters": [{ "name": "account_id", "in": "path", "required": true, "schema": { "description": "Identifier.", "type": "string", "example": "023e105f4ecef8ad9ca31a8372d0c353", "maxLength": 32, "x-auditable": true, "x-ref": "#/components/schemas/workers_identifier" }, "index$": 0 }, { "name": "dispatch_namespace", "in": "path", "required": true, "schema": { "description": "Name of the Workers for Platforms dispatch namespace.", "type": "string", "example": "my-dispatch-namespace", "pattern": "^.+$", "x-auditable": true, "x-ref": "#/components/schemas/workers_dispatch_namespace_name" }, "index$": 1 }] } });
        }
        const client = setup.client;
        const struct = setup.struct;
        const isempty = struct.isempty;
        const select = struct.select;
        // CREATE
        const workers_namespace_single_ref01_ent = client.WorkersNamespaceSingle();
        let workers_namespace_single_ref01_data = setup.data.new.workers_namespace_single['workers_namespace_single_ref01'];
        workers_namespace_single_ref01_data['account_id'] = setup.idmap['account01'];
        workers_namespace_single_ref01_data = (await workers_namespace_single_ref01_ent.create(workers_namespace_single_ref01_data)).data();
        (0, node_assert_1.default)(null != workers_namespace_single_ref01_data);
        // UPDATE
        const workers_namespace_single_ref01_data_up0 = {};
        workers_namespace_single_ref01_data_up0['account_id'] = setup.idmap['account_id'];
        const workers_namespace_single_ref01_markdef_up0 = { name: 'name', value: 'Mark01-workers_namespace_single_ref01_' + setup.now };
        workers_namespace_single_ref01_data_up0[workers_namespace_single_ref01_markdef_up0.name] = workers_namespace_single_ref01_markdef_up0.value;
        const workers_namespace_single_ref01_resdata_up0 = (await workers_namespace_single_ref01_ent.update(workers_namespace_single_ref01_data_up0)).data();
        (0, node_assert_1.default)(null != workers_namespace_single_ref01_resdata_up0);
        (0, node_assert_1.default)(workers_namespace_single_ref01_resdata_up0[workers_namespace_single_ref01_markdef_up0.name] === workers_namespace_single_ref01_markdef_up0.value);
    });
});
function basicSetup(extra) {
    // TODO: fix test def options
    const options = {}; // null
    // TODO: needs test utility to resolve path
    const entityDataFile = node_path_1.default.resolve(__dirname, '../../../../.sdk/test/entity/workers_namespace_single/WorkersNamespaceSingleTestData.json');
    // TODO: file ready util needed?
    const entityDataSource = Fs.readFileSync(entityDataFile).toString('utf8');
    // TODO: need a xlang JSON parse utility in voxgig/struct with better error msgs
    const entityData = JSON.parse(entityDataSource);
    options.entity = entityData.existing;
    let client = __1.CloudflareWorkersSDK.test(options, extra);
    const struct = client.utility().struct;
    const merge = struct.merge;
    const transform = struct.transform;
    let idmap = transform(['workers_namespace_single01', 'workers_namespace_single02', 'workers_namespace_single03', 'account01', 'account02', 'account03', 'namespace01', 'namespace02', 'namespace03'], {
        '`$PACK`': ['', {
                '`$KEY`': '`$COPY`',
                '`$VAL`': ['`$FORMAT`', 'upper', '`$COPY`']
            }]
    });
    const env = (0, utility_1.envOverride)({
        'CLOUDFLARE_WORKERS_TEST_WORKERS_NAMESPACE_SINGLE_ENTID': idmap,
        'CLOUDFLARE_WORKERS_TEST_LIVE': 'FALSE',
        'CLOUDFLARE_WORKERS_TEST_EXPLAIN': 'FALSE',
        'CLOUDFLARE_WORKERS_APIKEY': '',
    });
    idmap = env['CLOUDFLARE_WORKERS_TEST_WORKERS_NAMESPACE_SINGLE_ENTID'];
    const live = 'TRUE' === env.CLOUDFLARE_WORKERS_TEST_LIVE;
    const transport = (0, live_runner_1.createLiveTransport)();
    if (live) {
        const rawIds = process.env['CLOUDFLARE_WORKERS_TEST_WORKERS_NAMESPACE_SINGLE_ENTID'];
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
//# sourceMappingURL=WorkersNamespaceSingleEntity.test.js.map