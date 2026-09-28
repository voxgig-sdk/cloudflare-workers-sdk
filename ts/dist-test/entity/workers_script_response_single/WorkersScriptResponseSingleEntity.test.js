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
(0, node_test_1.describe)('WorkersScriptResponseSingleEntity', async () => {
    // Per-test live pacing. Delay is read from sdk-test-control.json's
    // `test.live.delayMs`; only sleeps when CLOUDFLARE_WORKERS_TEST_LIVE=TRUE.
    (0, node_test_1.afterEach)((0, utility_1.liveDelay)('CLOUDFLARE_WORKERS_TEST_LIVE'));
    (0, node_test_1.test)('instance', async () => {
        const testsdk = __1.CloudflareWorkersSDK.test();
        const ent = testsdk.WorkersScriptResponseSingle();
        (0, node_assert_1.default)(null != ent);
    });
    (0, node_test_1.test)('basic', async (t) => {
        const live = 'TRUE' === process.env.CLOUDFLARE_WORKERS_TEST_LIVE;
        for (const op of ['update']) {
            if (!live && (0, utility_1.maybeSkipControl)(t, 'entityOp', 'workers_script_response_single.' + op, live))
                return;
        }
        const setup = basicSetup();
        if (setup.live) {
            return (0, live_entity_1.runLiveEntity)(setup, { "active": true, "alias": { "field": {} }, "fields": {}, "name": "workers_script_response_single", "op": { "update": { "input": "data", "name": "update", "points": [{ "a": true, "co": { "id": "PUT /accounts/{account_id}/workers/services/{service_name}/environments/{environment_name}/content", "source": "openapi3", "version": 2 }, "g": { "header": [{ "a": true, "k": "header", "n": "cf_worker_body_part", "or": "cf_worker_body_part", "r": false, "t": "`$STRING`", "index$": 0 }, { "a": true, "k": "header", "n": "cf_worker_main_module_part", "or": "cf_worker_main_module_part", "r": false, "t": "`$STRING`", "index$": 1 }], "params": [{ "a": true, "ex": "023e105f4ecef8ad9ca31a8372d0c353", "k": "param", "n": "account_id", "or": "account_id", "r": true, "t": "`$STRING`", "index$": 0 }, { "a": true, "ex": "production", "k": "param", "n": "environment_name", "or": "environment_name", "r": true, "t": "`$STRING`", "index$": 1 }, { "a": true, "ex": "my-worker", "k": "param", "n": "service_id", "or": "service_name", "r": true, "t": "`$STRING`", "index$": 2 }] }, "k": "http", "m": "PUT", "o": "/accounts/{account_id}/workers/services/{service_name}/environments/{environment_name}/content", "q": { "exist": ["account_id", "cf_worker_body_part", "cf_worker_main_module_part", "environment_name", "service_id"] }, "r": { "param": { "service_name": "service_id" } }, "s": [{ "lit": "accounts" }, { "var": "account_id" }, { "lit": "workers" }, { "lit": "services" }, { "var": "service_id" }, { "lit": "environments" }, { "var": "environment_name" }, { "lit": "content" }], "t": { "req": "`reqdata`", "res": "`body`" }, "index$": 0 }, { "a": true, "co": { "id": "PUT /accounts/{account_id}/workers/dispatch/namespaces/{dispatch_namespace}/scripts/{script_name}/content", "source": "openapi3", "version": 2 }, "g": { "header": [{ "a": true, "k": "header", "n": "cf_worker_body_part", "or": "cf_worker_body_part", "r": false, "t": "`$STRING`", "index$": 0 }, { "a": true, "k": "header", "n": "cf_worker_main_module_part", "or": "cf_worker_main_module_part", "r": false, "t": "`$STRING`", "index$": 1 }], "params": [{ "a": true, "ex": "023e105f4ecef8ad9ca31a8372d0c353", "k": "param", "n": "account_id", "or": "account_id", "r": true, "t": "`$STRING`", "index$": 0 }, { "a": true, "ex": "my-dispatch-namespace", "k": "param", "n": "namespace_id", "or": "dispatch_namespace", "r": true, "t": "`$STRING`", "index$": 1 }, { "a": true, "ex": "this-is_my_script-01", "k": "param", "n": "script_name", "or": "script_name", "r": true, "t": "`$STRING`", "index$": 2 }] }, "k": "http", "m": "PUT", "o": "/accounts/{account_id}/workers/dispatch/namespaces/{dispatch_namespace}/scripts/{script_name}/content", "q": { "exist": ["account_id", "cf_worker_body_part", "cf_worker_main_module_part", "namespace_id", "script_name"] }, "r": { "param": { "dispatch_namespace": "namespace_id" } }, "s": [{ "lit": "accounts" }, { "var": "account_id" }, { "lit": "workers" }, { "lit": "dispatch" }, { "lit": "namespaces" }, { "var": "namespace_id" }, { "lit": "scripts" }, { "var": "script_name" }, { "lit": "content" }], "t": { "req": "`reqdata`", "res": "`body`" }, "index$": 1 }, { "a": true, "co": { "id": "PUT /accounts/{account_id}/workers/scripts/{script_name}/content", "source": "openapi3", "version": 2 }, "g": { "header": [{ "a": true, "k": "header", "n": "cf_worker_body_part", "or": "cf_worker_body_part", "r": false, "t": "`$STRING`", "index$": 0 }, { "a": true, "k": "header", "n": "cf_worker_main_module_part", "or": "cf_worker_main_module_part", "r": false, "t": "`$STRING`", "index$": 1 }], "params": [{ "a": true, "ex": "023e105f4ecef8ad9ca31a8372d0c353", "k": "param", "n": "account_id", "or": "account_id", "r": true, "t": "`$STRING`", "index$": 0 }, { "a": true, "ex": "this-is_my_script-01", "k": "param", "n": "script_name", "or": "script_name", "r": true, "t": "`$STRING`", "index$": 1 }] }, "k": "http", "m": "PUT", "o": "/accounts/{account_id}/workers/scripts/{script_name}/content", "q": { "exist": ["account_id", "cf_worker_body_part", "cf_worker_main_module_part", "script_name"] }, "r": {}, "s": [{ "lit": "accounts" }, { "var": "account_id" }, { "lit": "workers" }, { "lit": "scripts" }, { "var": "script_name" }, { "lit": "content" }], "t": { "req": "`reqdata`", "res": "`body`" }, "index$": 2 }], "key$": "update" } }, "relations": { "ancestors": [["$.main.kit.entity.account", "$.main.kit.entity.script"], ["$.main.kit.entity.account", "$.main.kit.entity.namespace", "$.main.kit.entity.script"], ["$.main.kit.entity.account"]] }, "key$": "workers_script_response_single", "name__orig": "workers_script_response_single", "Name": "WorkersScriptResponseSingle", "name_": "workers_script_response_single", "name-": "workers-script-response-single", "NAME": "WORKERS_SCRIPT_RESPONSE_SINGLE", "index$": 67 }, { "active": true, "entity": "workers_script_response_single", "key$": "BasicWorkersScriptResponseSingleFlow", "kind": "basic", "name": "BasicWorkersScriptResponseSingleFlow", "param": {}, "step": [{ "a": true, "d": { "account_id": "account01" }, "i": { "ref": "workers_script_response_single_ref01", "srcdatavar": "workers_script_response_single_ref01_data", "suffix": "_up0" }, "m": {}, "o": "update", "s": [{ "apply": "TextFieldMark", "def": { "mark": "Mark01-workers_script_response_single_ref01" } }], "v": [], "index$": 0 }] }, 'WorkersScriptResponseSingle', { "PUT /accounts/{account_id}/workers/services/{service_name}/environments/{environment_name}/content": { "protocol": "http", "requestBody": { "required": true, "content": { "multipart/form-data": { "encoding": { "files": { "contentType": "application/javascript+module, text/javascript+module, application/javascript, text/javascript, text/x-python, text/x-python-requirement, application/wasm, text/plain, application/octet-stream, application/source-map" }, "metadata": { "contentType": "application/json" } }, "schema": { "type": "object", "properties": { "files": { "description": "An array of modules (often JavaScript files) comprising a Worker script. At least one module must be present and referenced in the metadata as `main_module` or `body_part` by filename.<br/>Possible Content-Type(s) are: `application/javascript+module`, `text/javascript+module`, `application/javascript`, `text/javascript`, `text/x-python`, `text/x-python-requirement`, `application/wasm`, `text/plain`, `application/octet-stream`, `application/source-map`.", "type": "array", "items": { "format": "binary", "type": "string" }, "x-stainless-collection-type": "set" }, "metadata": { "description": "JSON-encoded metadata about the uploaded parts and Worker configuration.", "type": "object", "properties": { "body_part": { "description": "Name of the part in the multipart request that contains the script (e.g. the file adding a listener to the `fetch` event). Indicates a `service worker syntax` Worker.", "type": "string", "example": "worker.js" }, "main_module": { "description": "Name of the part in the multipart request that contains the main module (e.g. the file exporting a `fetch` handler). Indicates a `module syntax` Worker.", "type": "string", "example": "worker.js" } } } }, "required": ["metadata"] } } } }, "parameters": [{ "name": "account_id", "in": "path", "required": true, "schema": { "description": "Identifier.", "type": "string", "example": "023e105f4ecef8ad9ca31a8372d0c353", "maxLength": 32, "x-auditable": true, "x-ref": "#/components/schemas/workers_identifier" }, "index$": 0 }, { "name": "service_name", "in": "path", "required": true, "schema": { "description": "Name of Worker to bind to.", "type": "string", "example": "my-worker", "x-auditable": true, "x-ref": "#/components/schemas/workers_service" }, "index$": 1 }, { "name": "environment_name", "in": "path", "required": true, "schema": { "description": "Optional environment if the Worker utilizes one.", "type": "string", "example": "production", "x-auditable": true, "x-ref": "#/components/schemas/workers_environment" }, "index$": 2 }, { "name": "CF-WORKER-BODY-PART", "in": "header", "description": "The multipart name of a script upload part containing script content in service worker format. Alternative to including in a metadata part.", "schema": { "type": "string" }, "index$": 3 }, { "name": "CF-WORKER-MAIN-MODULE-PART", "in": "header", "description": "The multipart name of a script upload part containing script content in es module format. Alternative to including in a metadata part.", "schema": { "type": "string" }, "index$": 4 }] }, "PUT /accounts/{account_id}/workers/dispatch/namespaces/{dispatch_namespace}/scripts/{script_name}/content": { "protocol": "http", "requestBody": { "required": true, "content": { "multipart/form-data": { "encoding": { "files": { "contentType": "application/javascript+module, text/javascript+module, application/javascript, text/javascript, text/x-python, text/x-python-requirement, application/wasm, text/plain, application/octet-stream, application/source-map" }, "metadata": { "contentType": "application/json" } }, "schema": { "type": "object", "properties": { "files": { "description": "An array of modules (often JavaScript files) comprising a Worker script. At least one module must be present and referenced in the metadata as `main_module` or `body_part` by filename.<br/>Possible Content-Type(s) are: `application/javascript+module`, `text/javascript+module`, `application/javascript`, `text/javascript`, `text/x-python`, `text/x-python-requirement`, `application/wasm`, `text/plain`, `application/octet-stream`, `application/source-map`.", "type": "array", "items": { "format": "binary", "type": "string" }, "x-stainless-collection-type": "set" }, "metadata": { "description": "JSON-encoded metadata about the uploaded parts and Worker configuration.", "type": "object", "properties": { "body_part": { "description": "Name of the part in the multipart request that contains the script (e.g. the file adding a listener to the `fetch` event). Indicates a `service worker syntax` Worker.", "type": "string", "example": "worker.js" }, "main_module": { "description": "Name of the part in the multipart request that contains the main module (e.g. the file exporting a `fetch` handler). Indicates a `module syntax` Worker.", "type": "string", "example": "worker.js" } } } }, "required": ["metadata"] } } } }, "parameters": [{ "name": "account_id", "in": "path", "required": true, "schema": { "description": "Identifier.", "type": "string", "example": "023e105f4ecef8ad9ca31a8372d0c353", "maxLength": 32, "x-auditable": true, "x-ref": "#/components/schemas/workers_identifier" }, "index$": 0 }, { "name": "dispatch_namespace", "in": "path", "required": true, "schema": { "description": "Name of the Workers for Platforms dispatch namespace.", "type": "string", "example": "my-dispatch-namespace", "pattern": "^.+$", "x-auditable": true, "x-ref": "#/components/schemas/workers_dispatch_namespace_name" }, "index$": 1 }, { "name": "script_name", "in": "path", "required": true, "schema": { "description": "Name of the script.", "type": "string", "example": "this-is_my_script-01", "pattern": "^[a-z0-9_][a-z0-9-_]*$", "x-auditable": true, "x-ref": "#/components/schemas/workers_script_name" }, "index$": 2 }, { "name": "CF-WORKER-BODY-PART", "in": "header", "description": "The multipart name of a script upload part containing script content in service worker format. Alternative to including in a metadata part.", "schema": { "type": "string" }, "index$": 3 }, { "name": "CF-WORKER-MAIN-MODULE-PART", "in": "header", "description": "The multipart name of a script upload part containing script content in es module format. Alternative to including in a metadata part.", "schema": { "type": "string" }, "index$": 4 }] }, "PUT /accounts/{account_id}/workers/scripts/{script_name}/content": { "protocol": "http", "requestBody": { "required": true, "content": { "multipart/form-data": { "encoding": { "files": { "contentType": "application/javascript+module, text/javascript+module, application/javascript, text/javascript, text/x-python, text/x-python-requirement, application/wasm, text/plain, application/octet-stream, application/source-map" }, "metadata": { "contentType": "application/json" } }, "schema": { "type": "object", "properties": { "files": { "description": "An array of modules (often JavaScript files) comprising a Worker script. At least one module must be present and referenced in the metadata as `main_module` or `body_part` by filename.<br/>Possible Content-Type(s) are: `application/javascript+module`, `text/javascript+module`, `application/javascript`, `text/javascript`, `text/x-python`, `text/x-python-requirement`, `application/wasm`, `text/plain`, `application/octet-stream`, `application/source-map`.", "type": "array", "items": { "format": "binary", "type": "string" }, "x-stainless-collection-type": "set" }, "metadata": { "description": "JSON-encoded metadata about the uploaded parts and Worker configuration.", "type": "object", "properties": { "body_part": { "description": "Name of the uploaded file that contains the Worker script (e.g. the file adding a listener to the `fetch` event). Indicates a `service worker syntax` Worker.", "type": "string", "example": "worker.js" }, "main_module": { "description": "Name of the uploaded file that contains the main module (e.g. the file exporting a `fetch` handler). Indicates a `module syntax` Worker.", "type": "string", "example": "worker.js" } } } }, "required": ["metadata"] } } } }, "parameters": [{ "name": "account_id", "in": "path", "required": true, "schema": { "description": "Identifier.", "type": "string", "example": "023e105f4ecef8ad9ca31a8372d0c353", "maxLength": 32, "x-auditable": true, "x-ref": "#/components/schemas/workers_identifier" }, "index$": 0 }, { "name": "script_name", "in": "path", "required": true, "schema": { "description": "Name of the script.", "type": "string", "example": "this-is_my_script-01", "pattern": "^[a-z0-9_][a-z0-9-_]*$", "x-auditable": true, "x-ref": "#/components/schemas/workers_script_name" }, "index$": 1 }, { "name": "CF-WORKER-BODY-PART", "in": "header", "description": "The multipart name of a script upload part containing script content in service worker format. Alternative to including in a metadata part.", "schema": { "type": "string" }, "index$": 2 }, { "name": "CF-WORKER-MAIN-MODULE-PART", "in": "header", "description": "The multipart name of a script upload part containing script content in es module format. Alternative to including in a metadata part.", "schema": { "type": "string" }, "index$": 3 }] } });
        }
        const client = setup.client;
        const struct = setup.struct;
        const isempty = struct.isempty;
        const select = struct.select;
        let workers_script_response_single_ref01_data = Object.values(setup.data.existing.workers_script_response_single)[0];
        // UPDATE
        const workers_script_response_single_ref01_ent = client.WorkersScriptResponseSingle();
        const workers_script_response_single_ref01_data_up0 = {};
        workers_script_response_single_ref01_data_up0['account_id'] = setup.idmap['account_id'];
        const workers_script_response_single_ref01_resdata_up0 = (await workers_script_response_single_ref01_ent.update(workers_script_response_single_ref01_data_up0)).data();
        (0, node_assert_1.default)(null != workers_script_response_single_ref01_resdata_up0);
    });
});
function basicSetup(extra) {
    // TODO: fix test def options
    const options = {}; // null
    // TODO: needs test utility to resolve path
    const entityDataFile = node_path_1.default.resolve(__dirname, '../../../../.sdk/test/entity/workers_script_response_single/WorkersScriptResponseSingleTestData.json');
    // TODO: file ready util needed?
    const entityDataSource = Fs.readFileSync(entityDataFile).toString('utf8');
    // TODO: need a xlang JSON parse utility in voxgig/struct with better error msgs
    const entityData = JSON.parse(entityDataSource);
    options.entity = entityData.existing;
    let client = __1.CloudflareWorkersSDK.test(options, extra);
    const struct = client.utility().struct;
    const merge = struct.merge;
    const transform = struct.transform;
    let idmap = transform(['workers_script_response_single01', 'workers_script_response_single02', 'workers_script_response_single03', 'account01', 'account02', 'account03', 'script01', 'script02', 'script03', 'namespace01', 'namespace02', 'namespace03'], {
        '`$PACK`': ['', {
                '`$KEY`': '`$COPY`',
                '`$VAL`': ['`$FORMAT`', 'upper', '`$COPY`']
            }]
    });
    const env = (0, utility_1.envOverride)({
        'CLOUDFLARE_WORKERS_TEST_WORKERS_SCRIPT_RESPONSE_SINGLE_ENTID': idmap,
        'CLOUDFLARE_WORKERS_TEST_LIVE': 'FALSE',
        'CLOUDFLARE_WORKERS_TEST_EXPLAIN': 'FALSE',
        'CLOUDFLARE_WORKERS_APIKEY': '',
    });
    idmap = env['CLOUDFLARE_WORKERS_TEST_WORKERS_SCRIPT_RESPONSE_SINGLE_ENTID'];
    const live = 'TRUE' === env.CLOUDFLARE_WORKERS_TEST_LIVE;
    const transport = (0, live_runner_1.createLiveTransport)();
    if (live) {
        const rawIds = process.env['CLOUDFLARE_WORKERS_TEST_WORKERS_SCRIPT_RESPONSE_SINGLE_ENTID'];
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
//# sourceMappingURL=WorkersScriptResponseSingleEntity.test.js.map