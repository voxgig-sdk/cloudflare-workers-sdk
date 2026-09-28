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
(0, node_test_1.describe)('ContainerInstanceEntity', async () => {
    // Per-test live pacing. Delay is read from sdk-test-control.json's
    // `test.live.delayMs`; only sleeps when CLOUDFLARE_WORKERS_TEST_LIVE=TRUE.
    (0, node_test_1.afterEach)((0, utility_1.liveDelay)('CLOUDFLARE_WORKERS_TEST_LIVE'));
    (0, node_test_1.test)('instance', async () => {
        const testsdk = __1.CloudflareWorkersSDK.test();
        const ent = testsdk.ContainerInstance();
        (0, node_assert_1.default)(null != ent);
    });
    (0, node_test_1.test)('basic', async (t) => {
        const live = 'TRUE' === process.env.CLOUDFLARE_WORKERS_TEST_LIVE;
        for (const op of ['list', 'load']) {
            if (!live && (0, utility_1.maybeSkipControl)(t, 'entityOp', 'container_instance.' + op, live))
                return;
        }
        const setup = basicSetup();
        if (setup.live) {
            return (0, live_entity_1.runLiveEntity)(setup, { "active": true, "alias": { "field": {} }, "fields": { "errors": { "a": true, "h": "Errors", "n": "errors", "r": true, "t": "`$ARRAY`", "key$": "errors", "index$": 0 }, "id": { "a": true, "h": "Id", "n": "id", "r": false, "t": "`$STRING`", "key$": "id", "index$": 1 }, "messages": { "a": true, "h": "Messages", "n": "messages", "r": true, "t": "`$ARRAY`", "key$": "messages", "index$": 2 }, "result": { "a": true, "h": "Result", "n": "result", "r": true, "sh": "A container instance belonging to an application.", "t": "`$ANY`", "key$": "result", "index$": 3 }, "result_info": { "a": true, "h": "Result Info", "n": "result_info", "r": true, "sh": "Cursor pagination details for a v4 API list response.", "t": "`$OBJECT`", "key$": "result_info", "index$": 4 }, "success": { "a": true, "h": "Success", "n": "success", "r": true, "sh": "Whether the API call was successful.", "t": "`$BOOLEAN`", "key$": "success", "index$": 5 } }, "id": { "field": "id", "name": "id" }, "name": "container_instance", "op": { "list": { "input": "data", "name": "list", "points": [{ "a": true, "co": { "id": "GET /accounts/{account_id}/containers/applications/{application_id}/instances", "source": "openapi3", "version": 2 }, "g": { "params": [{ "a": true, "ex": "account-123", "k": "param", "n": "account_id", "or": "account_id", "r": true, "t": "`$STRING`", "index$": 0 }, { "a": true, "k": "param", "n": "application_id", "or": "application_id", "r": true, "t": "`$STRING`", "index$": 1 }], "query": [{ "a": true, "k": "query", "n": "name_prefix", "or": "name_prefix", "r": false, "t": "`$STRING`", "index$": 0 }, { "a": true, "k": "query", "n": "page_token", "or": "page_token", "r": false, "t": "`$STRING`", "index$": 1 }, { "a": true, "k": "query", "n": "per_page", "or": "per_page", "r": false, "t": "`$INTEGER`", "index$": 2 }, { "a": true, "k": "query", "n": "state", "or": "state", "r": false, "t": "`$STRING`", "index$": 3 }] }, "k": "http", "m": "GET", "o": "/accounts/{account_id}/containers/applications/{application_id}/instances", "q": { "exist": ["account_id", "application_id", "name_prefix", "page_token", "per_page", "state"] }, "r": {}, "s": [{ "lit": "accounts" }, { "var": "account_id" }, { "lit": "containers" }, { "lit": "applications" }, { "var": "application_id" }, { "lit": "instances" }], "t": { "req": "`reqdata`", "res": "`body`" }, "index$": 0 }, { "a": true, "co": { "id": "GET /accounts/{account_id}/containers/applications/{application_id}/instances-v2", "source": "openapi3", "version": 2 }, "g": { "params": [{ "a": true, "ex": "account-123", "k": "param", "n": "account_id", "or": "account_id", "r": true, "t": "`$STRING`", "index$": 0 }, { "a": true, "k": "param", "n": "application_id", "or": "application_id", "r": true, "t": "`$STRING`", "index$": 1 }], "query": [{ "a": true, "k": "query", "n": "name_prefix", "or": "name_prefix", "r": false, "t": "`$STRING`", "index$": 0 }, { "a": true, "k": "query", "n": "page_token", "or": "page_token", "r": false, "t": "`$STRING`", "index$": 1 }, { "a": true, "k": "query", "n": "per_page", "or": "per_page", "r": false, "t": "`$INTEGER`", "index$": 2 }, { "a": true, "k": "query", "n": "state", "or": "state", "r": false, "t": "`$STRING`", "index$": 3 }] }, "k": "http", "m": "GET", "o": "/accounts/{account_id}/containers/applications/{application_id}/instances-v2", "q": { "exist": ["account_id", "application_id", "name_prefix", "page_token", "per_page", "state"] }, "r": {}, "s": [{ "lit": "accounts" }, { "var": "account_id" }, { "lit": "containers" }, { "lit": "applications" }, { "var": "application_id" }, { "lit": "instances-v2" }], "t": { "req": "`reqdata`", "res": "`body`" }, "index$": 1 }], "key$": "list" }, "load": { "input": "data", "name": "load", "points": [{ "a": true, "co": { "id": "GET /accounts/{account_id}/containers/applications/{application_id}/instances/{instance_id}", "source": "openapi3", "version": 2 }, "g": { "params": [{ "a": true, "ex": "account-123", "k": "param", "n": "account_id", "or": "account_id", "r": true, "t": "`$STRING`", "index$": 0 }, { "a": true, "k": "param", "n": "application_id", "or": "application_id", "r": true, "t": "`$STRING`", "index$": 1 }, { "a": true, "k": "param", "n": "id", "or": "instance_id", "r": true, "t": "`$STRING`", "index$": 2 }] }, "k": "http", "m": "GET", "o": "/accounts/{account_id}/containers/applications/{application_id}/instances/{instance_id}", "q": { "exist": ["account_id", "application_id", "id"] }, "r": { "param": { "instance_id": "id" } }, "s": [{ "lit": "accounts" }, { "var": "account_id" }, { "lit": "containers" }, { "lit": "applications" }, { "var": "application_id" }, { "lit": "instances" }, { "var": "id" }], "t": { "req": "`reqdata`", "res": "`body`" }, "index$": 0 }], "key$": "load" } }, "relations": { "ancestors": [["$.main.kit.entity.account", "$.main.kit.entity.application"]] }, "key$": "container_instance", "name__orig": "container_instance", "Name": "ContainerInstance", "name_": "container_instance", "name-": "container-instance", "NAME": "CONTAINER_INSTANCE", "index$": 8 }, { "active": true, "entity": "container_instance", "key$": "BasicContainerInstanceFlow", "kind": "basic", "name": "BasicContainerInstanceFlow", "param": {}, "step": [{ "a": true, "d": {}, "i": {}, "m": { "account_id": "account01", "application_id": "application01" }, "o": "list", "s": [], "v": [{ "apply": "ItemExists", "def": { "ref": "container_instance_ref01" } }], "index$": 0 }, { "a": true, "d": {}, "i": { "ref": "container_instance_ref01", "srcdatavar": "container_instance_ref01_data", "suffix": "_dt0" }, "m": { "account_id": "account01", "application_id": "application01", "id": "container_instance01" }, "o": "load", "s": [], "v": [{ "apply": "TextFieldMark", "def": { "mark": "Mark01-container_instance_ref01" } }], "index$": 1 }] }, 'ContainerInstance', { "GET /accounts/{account_id}/containers/applications/{application_id}/instances": { "protocol": "http", "parameters": [{ "description": "Account identifier.", "in": "path", "name": "account_id", "required": true, "schema": { "type": "string", "example": "account-123" }, "x-ref": "#/components/parameters/cc_AccountId", "index$": 0 }, { "name": "application_id", "in": "path", "required": true, "schema": { "description": "An Application ID represents an identifier of an application.", "type": "string", "x-ref": "#/components/schemas/cc_ApplicationID" }, "index$": 1 }, { "name": "per_page", "in": "query", "description": "Maximum number of instances to return per page. Defaults to all.", "schema": { "type": "integer", "maximum": 1000, "minimum": 1 }, "index$": 2 }, { "name": "page_token", "in": "query", "description": "Opaque token from a previous response to retrieve the next page.", "schema": { "type": "string" }, "index$": 3 }, { "name": "state", "in": "query", "description": "Filters instances by lifecycle state. `active` includes provisioning, running, and stopping instances; `not-active` includes stopped and failed instances. When omitted, all instances are returned.\n", "schema": { "type": "string", "enum": ["active", "not-active"] }, "index$": 4 }, { "name": "name_prefix", "in": "query", "description": "Filter instances by a case-sensitive name prefix, falling back to the actor ID when no name is known. Keep the same prefix when using a page token.\n", "schema": { "type": "string" }, "index$": 5 }] }, "GET /accounts/{account_id}/containers/applications/{application_id}/instances-v2": { "protocol": "http", "parameters": [{ "description": "Account identifier.", "in": "path", "name": "account_id", "required": true, "schema": { "type": "string", "example": "account-123" }, "x-ref": "#/components/parameters/cc_AccountId", "index$": 0 }, { "name": "application_id", "in": "path", "required": true, "schema": { "description": "An Application ID represents an identifier of an application.", "type": "string", "x-ref": "#/components/schemas/cc_ApplicationID" }, "index$": 1 }, { "name": "per_page", "in": "query", "description": "Maximum number of instances to return per page. Defaults to 100.", "schema": { "type": "integer", "maximum": 1000, "minimum": 1 }, "index$": 2 }, { "name": "page_token", "in": "query", "description": "Opaque token from a previous response to retrieve the next page.", "schema": { "type": "string" }, "index$": 3 }, { "name": "state", "in": "query", "description": "Filters instances by lifecycle state. `active` includes provisioning, running, and stopping instances; `not-active` includes stopped and failed instances. When omitted, all instances are returned.\n", "schema": { "type": "string", "enum": ["active", "not-active"] }, "index$": 4 }, { "name": "name_prefix", "in": "query", "description": "Filter instances by a case-sensitive name prefix, falling back to the actor ID when no name is known. Keep the same prefix when using a page token.\n", "schema": { "type": "string" }, "index$": 5 }] }, "GET /accounts/{account_id}/containers/applications/{application_id}/instances/{instance_id}": { "protocol": "http", "parameters": [{ "description": "Account identifier.", "in": "path", "name": "account_id", "required": true, "schema": { "type": "string", "example": "account-123" }, "x-ref": "#/components/parameters/cc_AccountId", "index$": 0 }, { "name": "application_id", "in": "path", "required": true, "schema": { "description": "An Application ID represents an identifier of an application.", "type": "string", "x-ref": "#/components/schemas/cc_ApplicationID" }, "index$": 1 }, { "name": "instance_id", "in": "path", "required": true, "schema": { "description": "A container instance ID (64-character hex Durable Object actor ID).", "type": "string", "maxLength": 64, "minLength": 64, "pattern": "^[a-f0-9]{64}$", "x-ref": "#/components/schemas/cc_ContainerInstanceID" }, "index$": 2 }] } });
        }
        const client = setup.client;
        const struct = setup.struct;
        const isempty = struct.isempty;
        const select = struct.select;
        let container_instance_ref01_data = Object.values(setup.data.existing.container_instance)[0];
        // LIST
        const container_instance_ref01_ent = client.ContainerInstance();
        const container_instance_ref01_match = {};
        container_instance_ref01_match['account_id'] = setup.idmap['account01'];
        container_instance_ref01_match['application_id'] = setup.idmap['application01'];
        const container_instance_ref01_list = (await container_instance_ref01_ent.list(container_instance_ref01_match)).map((e) => e.data());
        // LOAD
        const container_instance_ref01_match_dt0 = {};
        container_instance_ref01_match_dt0.id = container_instance_ref01_data.id;
        const container_instance_ref01_data_dt0 = (await container_instance_ref01_ent.load(container_instance_ref01_match_dt0)).data();
        (0, node_assert_1.default)(container_instance_ref01_data_dt0.id === container_instance_ref01_data.id);
    });
});
function basicSetup(extra) {
    // TODO: fix test def options
    const options = {}; // null
    // TODO: needs test utility to resolve path
    const entityDataFile = node_path_1.default.resolve(__dirname, '../../../../.sdk/test/entity/container_instance/ContainerInstanceTestData.json');
    // TODO: file ready util needed?
    const entityDataSource = Fs.readFileSync(entityDataFile).toString('utf8');
    // TODO: need a xlang JSON parse utility in voxgig/struct with better error msgs
    const entityData = JSON.parse(entityDataSource);
    options.entity = entityData.existing;
    let client = __1.CloudflareWorkersSDK.test(options, extra);
    const struct = client.utility().struct;
    const merge = struct.merge;
    const transform = struct.transform;
    let idmap = transform(['container_instance01', 'container_instance02', 'container_instance03', 'account01', 'account02', 'account03', 'application01', 'application02', 'application03'], {
        '`$PACK`': ['', {
                '`$KEY`': '`$COPY`',
                '`$VAL`': ['`$FORMAT`', 'upper', '`$COPY`']
            }]
    });
    const env = (0, utility_1.envOverride)({
        'CLOUDFLARE_WORKERS_TEST_CONTAINER_INSTANCE_ENTID': idmap,
        'CLOUDFLARE_WORKERS_TEST_LIVE': 'FALSE',
        'CLOUDFLARE_WORKERS_TEST_EXPLAIN': 'FALSE',
        'CLOUDFLARE_WORKERS_APIKEY': '',
    });
    idmap = env['CLOUDFLARE_WORKERS_TEST_CONTAINER_INSTANCE_ENTID'];
    const live = 'TRUE' === env.CLOUDFLARE_WORKERS_TEST_LIVE;
    const transport = (0, live_runner_1.createLiveTransport)();
    if (live) {
        const rawIds = process.env['CLOUDFLARE_WORKERS_TEST_CONTAINER_INSTANCE_ENTID'];
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
//# sourceMappingURL=ContainerInstanceEntity.test.js.map