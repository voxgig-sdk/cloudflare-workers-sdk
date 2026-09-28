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
(0, node_test_1.describe)('WorkersApiResponseNullResultEntity', async () => {
    // Per-test live pacing. Delay is read from sdk-test-control.json's
    // `test.live.delayMs`; only sleeps when CLOUDFLARE_WORKERS_TEST_LIVE=TRUE.
    (0, node_test_1.afterEach)((0, utility_1.liveDelay)('CLOUDFLARE_WORKERS_TEST_LIVE'));
    (0, node_test_1.test)('instance', async () => {
        const testsdk = __1.CloudflareWorkersSDK.test();
        const ent = testsdk.WorkersApiResponseNullResult();
        (0, node_assert_1.default)(null != ent);
    });
    (0, node_test_1.test)('basic', async (t) => {
        const live = 'TRUE' === process.env.CLOUDFLARE_WORKERS_TEST_LIVE;
        for (const op of ['update']) {
            if (!live && (0, utility_1.maybeSkipControl)(t, 'entityOp', 'workers_api_response_null_result.' + op, live))
                return;
        }
        const setup = basicSetup();
        if (setup.live) {
            return (0, live_entity_1.runLiveEntity)(setup, { "active": true, "alias": { "field": {} }, "fields": { "errors": { "a": true, "h": "Errors", "n": "errors", "r": true, "t": "`$ARRAY`", "key$": "errors", "index$": 0 }, "messages": { "a": true, "h": "Messages", "n": "messages", "r": true, "t": "`$ARRAY`", "key$": "messages", "index$": 1 }, "result": { "a": true, "h": "Result", "n": "result", "r": false, "t": "`$OBJECT`", "key$": "result", "index$": 2 }, "success": { "a": true, "h": "Success", "n": "success", "r": true, "sh": "Whether the API call was successful.", "t": "`$BOOLEAN`", "key$": "success", "index$": 3 } }, "name": "workers_api_response_null_result", "op": { "remove": { "input": "data", "name": "remove", "points": [{ "a": true, "co": { "id": "DELETE /accounts/{account_id}/workers/dispatch/namespaces/{dispatch_namespace}/scripts/{script_name}/secrets/{secret_name}", "source": "openapi3", "version": 2 }, "g": { "params": [{ "a": true, "ex": "023e105f4ecef8ad9ca31a8372d0c353", "k": "param", "n": "account_id", "or": "account_id", "r": true, "t": "`$STRING`", "index$": 0 }, { "a": true, "ex": "my-dispatch-namespace", "k": "param", "n": "namespace_id", "or": "dispatch_namespace", "r": true, "t": "`$STRING`", "index$": 1 }, { "a": true, "ex": "this-is_my_script-01", "k": "param", "n": "script_id", "or": "script_name", "r": true, "t": "`$STRING`", "index$": 2 }, { "a": true, "ex": "mySecret", "k": "param", "n": "secret_name", "or": "secret_name", "r": true, "t": "`$STRING`", "index$": 3 }], "query": [{ "a": true, "ex": true, "k": "query", "n": "url_encoded", "or": "url_encoded", "r": false, "t": "`$BOOLEAN`", "index$": 0 }] }, "k": "http", "m": "DELETE", "o": "/accounts/{account_id}/workers/dispatch/namespaces/{dispatch_namespace}/scripts/{script_name}/secrets/{secret_name}", "q": { "exist": ["account_id", "namespace_id", "script_id", "secret_name", "url_encoded"] }, "r": { "param": { "dispatch_namespace": "namespace_id", "script_name": "script_id" } }, "s": [{ "lit": "accounts" }, { "var": "account_id" }, { "lit": "workers" }, { "lit": "dispatch" }, { "lit": "namespaces" }, { "var": "namespace_id" }, { "lit": "scripts" }, { "var": "script_id" }, { "lit": "secrets" }, { "var": "secret_name" }], "t": { "req": "`reqdata`", "res": "`body`" }, "index$": 0 }, { "a": true, "co": { "id": "DELETE /accounts/{account_id}/workers/dispatch/namespaces/{dispatch_namespace}/scripts/{script_name}", "source": "openapi3", "version": 2 }, "g": { "params": [{ "a": true, "ex": "023e105f4ecef8ad9ca31a8372d0c353", "k": "param", "n": "account_id", "or": "account_id", "r": true, "t": "`$STRING`", "index$": 0 }, { "a": true, "ex": "my-dispatch-namespace", "k": "param", "n": "namespace_id", "or": "dispatch_namespace", "r": true, "t": "`$STRING`", "index$": 1 }, { "a": true, "ex": "this-is_my_script-01", "k": "param", "n": "script_name", "or": "script_name", "r": true, "t": "`$STRING`", "index$": 2 }], "query": [{ "a": true, "k": "query", "n": "force", "or": "force", "r": false, "t": "`$BOOLEAN`", "index$": 0 }] }, "k": "http", "m": "DELETE", "o": "/accounts/{account_id}/workers/dispatch/namespaces/{dispatch_namespace}/scripts/{script_name}", "q": { "exist": ["account_id", "force", "namespace_id", "script_name"] }, "r": { "param": { "dispatch_namespace": "namespace_id" } }, "s": [{ "lit": "accounts" }, { "var": "account_id" }, { "lit": "workers" }, { "lit": "dispatch" }, { "lit": "namespaces" }, { "var": "namespace_id" }, { "lit": "scripts" }, { "var": "script_name" }], "t": { "req": "`reqdata`", "res": "`body`" }, "index$": 1 }, { "a": true, "co": { "id": "DELETE /accounts/{account_id}/workers/dispatch/namespaces/{dispatch_namespace}/scripts/{script_name}/tags/{tag}", "source": "openapi3", "version": 2 }, "g": { "params": [{ "a": true, "ex": "023e105f4ecef8ad9ca31a8372d0c353", "k": "param", "n": "account_id", "or": "account_id", "r": true, "t": "`$STRING`", "index$": 0 }, { "a": true, "ex": "my-dispatch-namespace", "k": "param", "n": "namespace_id", "or": "dispatch_namespace", "r": true, "t": "`$STRING`", "index$": 1 }, { "a": true, "ex": "this-is_my_script-01", "k": "param", "n": "script_id", "or": "script_name", "r": true, "t": "`$STRING`", "index$": 2 }, { "a": true, "ex": "my-tag", "k": "param", "n": "tag", "or": "tag", "r": true, "t": "`$STRING`", "index$": 3 }] }, "k": "http", "m": "DELETE", "o": "/accounts/{account_id}/workers/dispatch/namespaces/{dispatch_namespace}/scripts/{script_name}/tags/{tag}", "q": { "exist": ["account_id", "namespace_id", "script_id", "tag"] }, "r": { "param": { "dispatch_namespace": "namespace_id", "script_name": "script_id" } }, "s": [{ "lit": "accounts" }, { "var": "account_id" }, { "lit": "workers" }, { "lit": "dispatch" }, { "lit": "namespaces" }, { "var": "namespace_id" }, { "lit": "scripts" }, { "var": "script_id" }, { "lit": "tags" }, { "var": "tag" }], "t": { "req": "`reqdata`", "res": "`body`" }, "index$": 2 }, { "a": true, "co": { "id": "DELETE /accounts/{account_id}/workers/scripts/{script_name}/secrets/{secret_name}", "source": "openapi3", "version": 2 }, "g": { "params": [{ "a": true, "ex": "023e105f4ecef8ad9ca31a8372d0c353", "k": "param", "n": "account_id", "or": "account_id", "r": true, "t": "`$STRING`", "index$": 0 }, { "a": true, "ex": "this-is_my_script-01", "k": "param", "n": "script_id", "or": "script_name", "r": true, "t": "`$STRING`", "index$": 1 }, { "a": true, "ex": "mySecret", "k": "param", "n": "secret_name", "or": "secret_name", "r": true, "t": "`$STRING`", "index$": 2 }], "query": [{ "a": true, "ex": true, "k": "query", "n": "url_encoded", "or": "url_encoded", "r": false, "t": "`$BOOLEAN`", "index$": 0 }] }, "k": "http", "m": "DELETE", "o": "/accounts/{account_id}/workers/scripts/{script_name}/secrets/{secret_name}", "q": { "exist": ["account_id", "script_id", "secret_name", "url_encoded"] }, "r": { "param": { "script_name": "script_id" } }, "s": [{ "lit": "accounts" }, { "var": "account_id" }, { "lit": "workers" }, { "lit": "scripts" }, { "var": "script_id" }, { "lit": "secrets" }, { "var": "secret_name" }], "t": { "req": "`reqdata`", "res": "`body`" }, "index$": 3 }], "key$": "remove" }, "update": { "input": "data", "name": "update", "points": [{ "a": true, "co": { "id": "PUT /accounts/{account_id}/workers/dispatch/namespaces/{dispatch_namespace}/scripts/{script_name}/tags/{tag}", "source": "openapi3", "version": 2 }, "g": { "params": [{ "a": true, "ex": "023e105f4ecef8ad9ca31a8372d0c353", "k": "param", "n": "account_id", "or": "account_id", "r": true, "t": "`$STRING`", "index$": 0 }, { "a": true, "ex": "my-dispatch-namespace", "k": "param", "n": "namespace_id", "or": "dispatch_namespace", "r": true, "t": "`$STRING`", "index$": 1 }, { "a": true, "ex": "this-is_my_script-01", "k": "param", "n": "script_id", "or": "script_name", "r": true, "t": "`$STRING`", "index$": 2 }, { "a": true, "ex": "my-tag", "k": "param", "n": "tag", "or": "tag", "r": true, "t": "`$STRING`", "index$": 3 }] }, "k": "http", "m": "PUT", "o": "/accounts/{account_id}/workers/dispatch/namespaces/{dispatch_namespace}/scripts/{script_name}/tags/{tag}", "q": { "exist": ["account_id", "namespace_id", "script_id", "tag"] }, "r": { "param": { "dispatch_namespace": "namespace_id", "script_name": "script_id" } }, "s": [{ "lit": "accounts" }, { "var": "account_id" }, { "lit": "workers" }, { "lit": "dispatch" }, { "lit": "namespaces" }, { "var": "namespace_id" }, { "lit": "scripts" }, { "var": "script_id" }, { "lit": "tags" }, { "var": "tag" }], "t": { "req": "`reqdata`", "res": "`body`" }, "index$": 0 }], "key$": "update" } }, "relations": { "ancestors": [["$.main.kit.entity.account", "$.main.kit.entity.namespace", "$.main.kit.entity.script"], ["$.main.kit.entity.account", "$.main.kit.entity.script", "$.main.kit.entity.secret"], ["$.main.kit.entity.account", "$.main.kit.entity.namespace", "$.main.kit.entity.script", "$.main.kit.entity.secret"], ["$.main.kit.entity.account", "$.main.kit.entity.namespace", "$.main.kit.entity.script"]] }, "key$": "workers_api_response_null_result", "name__orig": "workers_api_response_null_result", "Name": "WorkersApiResponseNullResult", "name_": "workers_api_response_null_result", "name-": "workers-api-response-null-result", "NAME": "WORKERS_API_RESPONSE_NULL_RESULT", "index$": 54 }, { "active": true, "entity": "workers_api_response_null_result", "key$": "BasicWorkersApiResponseNullResultFlow", "kind": "basic", "name": "BasicWorkersApiResponseNullResultFlow", "param": {}, "step": [{ "a": true, "d": { "account_id": "account01", "namespace_id": "namespace01", "script_id": "script01" }, "i": { "ref": "workers_api_response_null_result_ref01", "srcdatavar": "workers_api_response_null_result_ref01_data", "suffix": "_up0" }, "m": {}, "o": "update", "s": [{ "apply": "TextFieldMark", "def": { "mark": "Mark01-workers_api_response_null_result_ref01" } }], "v": [], "index$": 0 }] }, 'WorkersApiResponseNullResult', { "DELETE /accounts/{account_id}/workers/dispatch/namespaces/{dispatch_namespace}/scripts/{script_name}/secrets/{secret_name}": { "protocol": "http", "parameters": [{ "name": "account_id", "in": "path", "required": true, "schema": { "description": "Identifier.", "type": "string", "example": "023e105f4ecef8ad9ca31a8372d0c353", "maxLength": 32, "x-auditable": true, "x-ref": "#/components/schemas/workers_identifier" }, "index$": 0 }, { "name": "dispatch_namespace", "in": "path", "required": true, "schema": { "description": "Name of the Workers for Platforms dispatch namespace.", "type": "string", "example": "my-dispatch-namespace", "pattern": "^.+$", "x-auditable": true, "x-ref": "#/components/schemas/workers_dispatch_namespace_name" }, "index$": 1 }, { "name": "script_name", "in": "path", "required": true, "schema": { "description": "Name of the script.", "type": "string", "example": "this-is_my_script-01", "pattern": "^[a-z0-9_][a-z0-9-_]*$", "x-auditable": true, "x-ref": "#/components/schemas/workers_script_name" }, "index$": 2 }, { "name": "secret_name", "in": "path", "required": true, "schema": { "description": "A JavaScript variable name for the secret binding.", "type": "string", "example": "mySecret", "readOnly": true, "x-auditable": true, "x-ref": "#/components/schemas/workers_secret_name" }, "index$": 3 }, { "name": "url_encoded", "in": "query", "schema": { "description": "Flag that indicates whether the secret name is URL encoded.", "type": "boolean", "example": true, "readOnly": true, "x-auditable": true, "x-ref": "#/components/schemas/workers_secret_name_url_encoded" }, "index$": 4 }] }, "DELETE /accounts/{account_id}/workers/dispatch/namespaces/{dispatch_namespace}/scripts/{script_name}": { "protocol": "http", "parameters": [{ "name": "account_id", "in": "path", "required": true, "schema": { "description": "Identifier.", "type": "string", "example": "023e105f4ecef8ad9ca31a8372d0c353", "maxLength": 32, "x-auditable": true, "x-ref": "#/components/schemas/workers_identifier" }, "index$": 0 }, { "name": "dispatch_namespace", "in": "path", "required": true, "schema": { "description": "Name of the Workers for Platforms dispatch namespace.", "type": "string", "example": "my-dispatch-namespace", "pattern": "^.+$", "x-auditable": true, "x-ref": "#/components/schemas/workers_dispatch_namespace_name" }, "index$": 1 }, { "name": "script_name", "in": "path", "required": true, "schema": { "description": "Name of the script.", "type": "string", "example": "this-is_my_script-01", "pattern": "^[a-z0-9_][a-z0-9-_]*$", "x-auditable": true, "x-ref": "#/components/schemas/workers_script_name" }, "index$": 2 }, { "name": "force", "in": "query", "description": "If true, delete the script even when other Workers still reference it. Service bindings in those Workers may be left broken. Durable Object namespaces implemented by the deleted script are deleted even if other Workers reference them.", "schema": { "type": "boolean" }, "x-fern-parameter-name": "delete-with-references", "index$": 3 }] }, "DELETE /accounts/{account_id}/workers/dispatch/namespaces/{dispatch_namespace}/scripts/{script_name}/tags/{tag}": { "protocol": "http", "parameters": [{ "name": "account_id", "in": "path", "required": true, "schema": { "description": "Identifier.", "type": "string", "example": "023e105f4ecef8ad9ca31a8372d0c353", "maxLength": 32, "x-auditable": true, "x-ref": "#/components/schemas/workers_identifier" }, "index$": 0 }, { "name": "dispatch_namespace", "in": "path", "required": true, "schema": { "description": "Name of the Workers for Platforms dispatch namespace.", "type": "string", "example": "my-dispatch-namespace", "pattern": "^.+$", "x-auditable": true, "x-ref": "#/components/schemas/workers_dispatch_namespace_name" }, "index$": 1 }, { "name": "script_name", "in": "path", "required": true, "schema": { "description": "Name of the script.", "type": "string", "example": "this-is_my_script-01", "pattern": "^[a-z0-9_][a-z0-9-_]*$", "x-auditable": true, "x-ref": "#/components/schemas/workers_script_name" }, "index$": 2 }, { "name": "tag", "in": "path", "required": true, "schema": { "type": "string", "example": "my-tag", "maxLength": 1024, "pattern": "^[^,&]*$", "x-ref": "#/components/schemas/workers_tag" }, "index$": 3 }] }, "DELETE /accounts/{account_id}/workers/scripts/{script_name}/secrets/{secret_name}": { "protocol": "http", "parameters": [{ "name": "account_id", "in": "path", "required": true, "schema": { "description": "Identifier.", "type": "string", "example": "023e105f4ecef8ad9ca31a8372d0c353", "maxLength": 32, "x-auditable": true, "x-ref": "#/components/schemas/workers_identifier" }, "index$": 0 }, { "name": "script_name", "in": "path", "required": true, "schema": { "description": "Name of the script.", "type": "string", "example": "this-is_my_script-01", "pattern": "^[a-z0-9_][a-z0-9-_]*$", "x-auditable": true, "x-ref": "#/components/schemas/workers_script_name" }, "index$": 1 }, { "name": "secret_name", "in": "path", "required": true, "schema": { "description": "A JavaScript variable name for the secret binding.", "type": "string", "example": "mySecret", "readOnly": true, "x-auditable": true, "x-ref": "#/components/schemas/workers_secret_name" }, "index$": 2 }, { "name": "url_encoded", "in": "query", "schema": { "description": "Flag that indicates whether the secret name is URL encoded.", "type": "boolean", "example": true, "readOnly": true, "x-auditable": true, "x-ref": "#/components/schemas/workers_secret_name_url_encoded" }, "index$": 3 }] }, "PUT /accounts/{account_id}/workers/dispatch/namespaces/{dispatch_namespace}/scripts/{script_name}/tags/{tag}": { "protocol": "http", "parameters": [{ "name": "account_id", "in": "path", "required": true, "schema": { "description": "Identifier.", "type": "string", "example": "023e105f4ecef8ad9ca31a8372d0c353", "maxLength": 32, "x-auditable": true, "x-ref": "#/components/schemas/workers_identifier" }, "index$": 0 }, { "name": "dispatch_namespace", "in": "path", "required": true, "schema": { "description": "Name of the Workers for Platforms dispatch namespace.", "type": "string", "example": "my-dispatch-namespace", "pattern": "^.+$", "x-auditable": true, "x-ref": "#/components/schemas/workers_dispatch_namespace_name" }, "index$": 1 }, { "name": "script_name", "in": "path", "required": true, "schema": { "description": "Name of the script.", "type": "string", "example": "this-is_my_script-01", "pattern": "^[a-z0-9_][a-z0-9-_]*$", "x-auditable": true, "x-ref": "#/components/schemas/workers_script_name" }, "index$": 2 }, { "name": "tag", "in": "path", "required": true, "schema": { "type": "string", "example": "my-tag", "maxLength": 1024, "pattern": "^[^,&]*$", "x-ref": "#/components/schemas/workers_tag" }, "index$": 3 }] } });
        }
        const client = setup.client;
        const struct = setup.struct;
        const isempty = struct.isempty;
        const select = struct.select;
        let workers_api_response_null_result_ref01_data = Object.values(setup.data.existing.workers_api_response_null_result)[0];
        // UPDATE
        const workers_api_response_null_result_ref01_ent = client.WorkersApiResponseNullResult();
        const workers_api_response_null_result_ref01_data_up0 = {};
        workers_api_response_null_result_ref01_data_up0['account_id'] = setup.idmap['account_id'];
        workers_api_response_null_result_ref01_data_up0['namespace_id'] = setup.idmap['namespace_id'];
        workers_api_response_null_result_ref01_data_up0['script_id'] = setup.idmap['script_id'];
        const workers_api_response_null_result_ref01_resdata_up0 = (await workers_api_response_null_result_ref01_ent.update(workers_api_response_null_result_ref01_data_up0)).data();
        (0, node_assert_1.default)(null != workers_api_response_null_result_ref01_resdata_up0);
    });
});
function basicSetup(extra) {
    // TODO: fix test def options
    const options = {}; // null
    // TODO: needs test utility to resolve path
    const entityDataFile = node_path_1.default.resolve(__dirname, '../../../../.sdk/test/entity/workers_api_response_null_result/WorkersApiResponseNullResultTestData.json');
    // TODO: file ready util needed?
    const entityDataSource = Fs.readFileSync(entityDataFile).toString('utf8');
    // TODO: need a xlang JSON parse utility in voxgig/struct with better error msgs
    const entityData = JSON.parse(entityDataSource);
    options.entity = entityData.existing;
    let client = __1.CloudflareWorkersSDK.test(options, extra);
    const struct = client.utility().struct;
    const merge = struct.merge;
    const transform = struct.transform;
    let idmap = transform(['workers_api_response_null_result01', 'workers_api_response_null_result02', 'workers_api_response_null_result03', 'account01', 'account02', 'account03', 'namespace01', 'namespace02', 'namespace03', 'script01', 'script02', 'script03', 'secret01', 'secret02', 'secret03'], {
        '`$PACK`': ['', {
                '`$KEY`': '`$COPY`',
                '`$VAL`': ['`$FORMAT`', 'upper', '`$COPY`']
            }]
    });
    const env = (0, utility_1.envOverride)({
        'CLOUDFLARE_WORKERS_TEST_WORKERS_API_RESPONSE_NULL_RESULT_ENTID': idmap,
        'CLOUDFLARE_WORKERS_TEST_LIVE': 'FALSE',
        'CLOUDFLARE_WORKERS_TEST_EXPLAIN': 'FALSE',
        'CLOUDFLARE_WORKERS_APIKEY': '',
    });
    idmap = env['CLOUDFLARE_WORKERS_TEST_WORKERS_API_RESPONSE_NULL_RESULT_ENTID'];
    const live = 'TRUE' === env.CLOUDFLARE_WORKERS_TEST_LIVE;
    const transport = (0, live_runner_1.createLiveTransport)();
    if (live) {
        const rawIds = process.env['CLOUDFLARE_WORKERS_TEST_WORKERS_API_RESPONSE_NULL_RESULT_ENTID'];
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
//# sourceMappingURL=WorkersApiResponseNullResultEntity.test.js.map