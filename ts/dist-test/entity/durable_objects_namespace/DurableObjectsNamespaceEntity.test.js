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
(0, node_test_1.describe)('DurableObjectsNamespaceEntity', async () => {
    // Per-test live pacing. Delay is read from sdk-test-control.json's
    // `test.live.delayMs`; only sleeps when CLOUDFLARE_WORKERS_TEST_LIVE=TRUE.
    (0, node_test_1.afterEach)((0, utility_1.liveDelay)('CLOUDFLARE_WORKERS_TEST_LIVE'));
    (0, node_test_1.test)('instance', async () => {
        const testsdk = __1.CloudflareWorkersSDK.test();
        const ent = testsdk.DurableObjectsNamespace();
        (0, node_assert_1.default)(null != ent);
    });
    (0, node_test_1.test)('basic', async (t) => {
        const live = 'TRUE' === process.env.CLOUDFLARE_WORKERS_TEST_LIVE;
        for (const op of ['create', 'list']) {
            if (!live && (0, utility_1.maybeSkipControl)(t, 'entityOp', 'durable_objects_namespace.' + op, live))
                return;
        }
        const setup = basicSetup();
        if (setup.live) {
            return (0, live_entity_1.runLiveEntity)(setup, { "active": true, "alias": { "field": {} }, "fields": { "result": { "a": true, "h": "Result", "n": "result", "r": false, "t": "`$ARRAY`", "key$": "result", "index$": 0 }, "result_info": { "a": true, "h": "Result Info", "n": "result_info", "r": false, "t": "`$OBJECT`", "key$": "result_info", "index$": 1 } }, "name": "durable_objects_namespace", "op": { "create": { "input": "data", "name": "create", "points": [{ "a": true, "co": { "id": "POST /accounts/{account_id}/workers/durable_objects/namespaces/{id}/query/v2", "source": "openapi3", "version": 2 }, "g": { "params": [{ "a": true, "ex": "023e105f4ecef8ad9ca31a8372d0c353", "k": "param", "n": "account_id", "or": "account_id", "r": true, "t": "`$STRING`", "index$": 0 }, { "a": true, "ex": "5fd1cafff895419c8bcc647fc64ab8f0", "k": "param", "n": "namespace_id", "or": "id", "r": true, "t": "`$STRING`", "index$": 1 }] }, "k": "http", "m": "POST", "o": "/accounts/{account_id}/workers/durable_objects/namespaces/{id}/query/v2", "q": { "exist": ["account_id", "namespace_id"] }, "r": { "param": { "id": "namespace_id" } }, "s": [{ "lit": "accounts" }, { "var": "account_id" }, { "lit": "workers" }, { "lit": "durable_objects" }, { "lit": "namespaces" }, { "var": "namespace_id" }, { "lit": "query" }, { "lit": "v2" }], "t": { "req": "`reqdata`", "res": "`body`" }, "index$": 0 }], "key$": "create" }, "list": { "input": "data", "name": "list", "points": [{ "a": true, "co": { "id": "GET /accounts/{account_id}/workers/durable_objects/namespaces/{id}/objects", "source": "openapi3", "version": 2 }, "g": { "params": [{ "a": true, "ex": "023e105f4ecef8ad9ca31a8372d0c353", "k": "param", "n": "account_id", "or": "account_id", "r": true, "t": "`$STRING`", "index$": 0 }, { "a": true, "ex": "5fd1cafff895419c8bcc647fc64ab8f0", "k": "param", "n": "namespace_id", "or": "id", "r": true, "t": "`$STRING`", "index$": 1 }], "query": [{ "a": true, "ex": "AAAAANuhDN7SjacTnSVsDu3WW1Lvst6dxJGTjRY5BhxPXdf6L6uTcpd_NVtjhn11OUYRsVEykxoUwF-JQU4dn6QylZSKTOJuG0indrdn_MlHpMRtsxgXjs-RPdHYIVm3odE_uvEQ_dTQGFm8oikZMohns34DLBgrQpc", "k": "query", "n": "cursor", "or": "cursor", "r": false, "t": "`$STRING`", "index$": 0 }, { "a": true, "ex": 1000, "k": "query", "n": "limit", "or": "limit", "r": false, "t": "`$NUMBER`", "index$": 1 }] }, "k": "http", "m": "GET", "o": "/accounts/{account_id}/workers/durable_objects/namespaces/{id}/objects", "q": { "exist": ["account_id", "cursor", "limit", "namespace_id"] }, "r": { "param": { "id": "namespace_id" } }, "s": [{ "lit": "accounts" }, { "var": "account_id" }, { "lit": "workers" }, { "lit": "durable_objects" }, { "lit": "namespaces" }, { "var": "namespace_id" }, { "lit": "objects" }], "t": { "req": "`reqdata`", "res": "`body`" }, "index$": 0 }, { "a": true, "co": { "id": "GET /accounts/{account_id}/workers/durable_objects/namespaces", "source": "openapi3", "version": 2 }, "g": { "params": [{ "a": true, "ex": "023e105f4ecef8ad9ca31a8372d0c353", "k": "param", "n": "account_id", "or": "account_id", "r": true, "t": "`$STRING`", "index$": 0 }], "query": [{ "a": true, "ex": 1, "k": "query", "n": "page", "or": "page", "r": false, "t": "`$INTEGER`", "index$": 0 }, { "a": true, "ex": 20, "k": "query", "n": "per_page", "or": "per_page", "r": false, "t": "`$INTEGER`", "index$": 1 }] }, "k": "http", "m": "GET", "o": "/accounts/{account_id}/workers/durable_objects/namespaces", "q": { "exist": ["account_id", "page", "per_page"] }, "r": {}, "s": [{ "lit": "accounts" }, { "var": "account_id" }, { "lit": "workers" }, { "lit": "durable_objects" }, { "lit": "namespaces" }], "t": { "req": "`reqdata`", "res": "`body`" }, "index$": 1 }], "key$": "list" } }, "relations": { "ancestors": [["$.main.kit.entity.account"], ["$.main.kit.entity.account", "$.main.kit.entity.namespace"]] }, "key$": "durable_objects_namespace", "name__orig": "durable_objects_namespace", "Name": "DurableObjectsNamespace", "name_": "durable_objects_namespace", "name-": "durable-objects-namespace", "NAME": "DURABLE_OBJECTS_NAMESPACE", "index$": 13 }, { "active": true, "entity": "durable_objects_namespace", "key$": "BasicDurableObjectsNamespaceFlow", "kind": "basic", "name": "BasicDurableObjectsNamespaceFlow", "param": {}, "step": [{ "a": true, "d": {}, "i": { "ref": "durable_objects_namespace_ref01" }, "m": { "account_id": "account01", "namespace_id": "namespace01" }, "o": "create", "s": [], "v": [], "index$": 0 }, { "a": true, "d": {}, "i": {}, "m": { "account_id": "account01" }, "o": "list", "s": [], "v": [{ "apply": "ItemExists", "def": { "ref": "durable_objects_namespace_ref01" } }], "index$": 1 }] }, 'DurableObjectsNamespace', { "POST /accounts/{account_id}/workers/durable_objects/namespaces/{id}/query/v2": { "protocol": "http", "requestBody": { "required": true, "content": { "application/json": { "schema": { "oneOf": [{ "type": "object", "properties": { "durable_object_id": { "type": "string", "minLength": 1 }, "queries": { "type": "array", "items": { "type": "object", "properties": {}, "required": [], "x-ref": "#/components/schemas/workers_query" } } }, "required": ["durable_object_id", "queries"], "x-ref": "#/components/schemas/workers_query-by-id" }, { "type": "object", "properties": { "durable_object_name": { "type": "string", "minLength": 1 }, "jurisdiction": { "type": "string", "enum": ["fedramp", "eu", "none"] }, "queries": { "type": "array", "items": { "type": "object", "properties": {}, "required": [], "x-ref": "#/components/schemas/workers_query" } } }, "required": ["durable_object_name", "jurisdiction", "queries"], "x-ref": "#/components/schemas/workers_query-by-name" }], "index$": 1 } } } }, "parameters": [{ "name": "account_id", "in": "path", "required": true, "schema": { "description": "Identifier.", "type": "string", "example": "023e105f4ecef8ad9ca31a8372d0c353", "maxLength": 32, "x-auditable": true, "x-ref": "#/components/schemas/workers_identifier" }, "index$": 0 }, { "name": "id", "in": "path", "required": true, "schema": { "description": "ID of the namespace.", "type": "string", "example": "5fd1cafff895419c8bcc647fc64ab8f0", "x-ref": "#/components/schemas/workers_schemas-id" }, "index$": 1 }] }, "GET /accounts/{account_id}/workers/durable_objects/namespaces/{id}/objects": { "protocol": "http", "parameters": [{ "name": "account_id", "in": "path", "required": true, "schema": { "description": "Identifier.", "type": "string", "example": "023e105f4ecef8ad9ca31a8372d0c353", "maxLength": 32, "x-auditable": true, "x-ref": "#/components/schemas/workers_identifier" }, "index$": 0 }, { "name": "id", "in": "path", "required": true, "schema": { "description": "ID of the namespace.", "type": "string", "example": "5fd1cafff895419c8bcc647fc64ab8f0", "x-ref": "#/components/schemas/workers_schemas-id" }, "index$": 1 }, { "name": "limit", "in": "query", "schema": { "description": "The number of objects to return. The cursor attribute may be used to iterate over the next batch of objects if there are more than the limit.", "type": "number", "default": 1000, "maximum": 10000, "minimum": 10 }, "index$": 2 }, { "name": "cursor", "in": "query", "schema": { "description": "Opaque token indicating the position from which to continue when requesting the next set of records. A valid value for the cursor can be obtained from the cursors object in the result_info structure.", "type": "string", "example": "AAAAANuhDN7SjacTnSVsDu3WW1Lvst6dxJGTjRY5BhxPXdf6L6uTcpd_NVtjhn11OUYRsVEykxoUwF-JQU4dn6QylZSKTOJuG0indrdn_MlHpMRtsxgXjs-RPdHYIVm3odE_uvEQ_dTQGFm8oikZMohns34DLBgrQpc" }, "index$": 3 }] }, "GET /accounts/{account_id}/workers/durable_objects/namespaces": { "protocol": "http", "parameters": [{ "name": "account_id", "in": "path", "required": true, "schema": { "description": "Identifier.", "type": "string", "example": "023e105f4ecef8ad9ca31a8372d0c353", "maxLength": 32, "x-auditable": true, "x-ref": "#/components/schemas/workers_identifier" }, "index$": 0 }, { "name": "page", "in": "query", "description": "Current page.", "schema": { "type": "integer", "default": 1, "minimum": 1 }, "index$": 1 }, { "name": "per_page", "in": "query", "description": "Items per-page.", "schema": { "type": "integer", "default": 20, "maximum": 1000, "minimum": 1 }, "index$": 2 }] } });
        }
        const client = setup.client;
        const struct = setup.struct;
        const isempty = struct.isempty;
        const select = struct.select;
        // CREATE
        const durable_objects_namespace_ref01_ent = client.DurableObjectsNamespace();
        let durable_objects_namespace_ref01_data = setup.data.new.durable_objects_namespace['durable_objects_namespace_ref01'];
        durable_objects_namespace_ref01_data['account_id'] = setup.idmap['account01'];
        durable_objects_namespace_ref01_data['namespace_id'] = setup.idmap['namespace01'];
        durable_objects_namespace_ref01_data = (await durable_objects_namespace_ref01_ent.create(durable_objects_namespace_ref01_data)).data();
        (0, node_assert_1.default)(null != durable_objects_namespace_ref01_data);
        // LIST
        const durable_objects_namespace_ref01_match = {};
        durable_objects_namespace_ref01_match['account_id'] = setup.idmap['account01'];
        const durable_objects_namespace_ref01_list = (await durable_objects_namespace_ref01_ent.list(durable_objects_namespace_ref01_match)).map((e) => e.data());
    });
});
function basicSetup(extra) {
    // TODO: fix test def options
    const options = {}; // null
    // TODO: needs test utility to resolve path
    const entityDataFile = node_path_1.default.resolve(__dirname, '../../../../.sdk/test/entity/durable_objects_namespace/DurableObjectsNamespaceTestData.json');
    // TODO: file ready util needed?
    const entityDataSource = Fs.readFileSync(entityDataFile).toString('utf8');
    // TODO: need a xlang JSON parse utility in voxgig/struct with better error msgs
    const entityData = JSON.parse(entityDataSource);
    options.entity = entityData.existing;
    let client = __1.CloudflareWorkersSDK.test(options, extra);
    const struct = client.utility().struct;
    const merge = struct.merge;
    const transform = struct.transform;
    let idmap = transform(['durable_objects_namespace01', 'durable_objects_namespace02', 'durable_objects_namespace03', 'account01', 'account02', 'account03', 'namespace01', 'namespace02', 'namespace03'], {
        '`$PACK`': ['', {
                '`$KEY`': '`$COPY`',
                '`$VAL`': ['`$FORMAT`', 'upper', '`$COPY`']
            }]
    });
    const env = (0, utility_1.envOverride)({
        'CLOUDFLARE_WORKERS_TEST_DURABLE_OBJECTS_NAMESPACE_ENTID': idmap,
        'CLOUDFLARE_WORKERS_TEST_LIVE': 'FALSE',
        'CLOUDFLARE_WORKERS_TEST_EXPLAIN': 'FALSE',
        'CLOUDFLARE_WORKERS_APIKEY': '',
    });
    idmap = env['CLOUDFLARE_WORKERS_TEST_DURABLE_OBJECTS_NAMESPACE_ENTID'];
    const live = 'TRUE' === env.CLOUDFLARE_WORKERS_TEST_LIVE;
    const transport = (0, live_runner_1.createLiveTransport)();
    if (live) {
        const rawIds = process.env['CLOUDFLARE_WORKERS_TEST_DURABLE_OBJECTS_NAMESPACE_ENTID'];
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
//# sourceMappingURL=DurableObjectsNamespaceEntity.test.js.map