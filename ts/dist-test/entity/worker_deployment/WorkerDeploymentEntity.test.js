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
(0, node_test_1.describe)('WorkerDeploymentEntity', async () => {
    // Per-test live pacing. Delay is read from sdk-test-control.json's
    // `test.live.delayMs`; only sleeps when CLOUDFLARE_WORKERS_TEST_LIVE=TRUE.
    (0, node_test_1.afterEach)((0, utility_1.liveDelay)('CLOUDFLARE_WORKERS_TEST_LIVE'));
    (0, node_test_1.test)('instance', async () => {
        const testsdk = __1.CloudflareWorkersSDK.test();
        const ent = testsdk.WorkerDeployment();
        (0, node_assert_1.default)(null != ent);
    });
    (0, node_test_1.test)('basic', async (t) => {
        const live = 'TRUE' === process.env.CLOUDFLARE_WORKERS_TEST_LIVE;
        for (const op of ['create', 'load']) {
            if (!live && (0, utility_1.maybeSkipControl)(t, 'entityOp', 'worker_deployment.' + op, live))
                return;
        }
        const setup = basicSetup();
        if (setup.live) {
            return (0, live_entity_1.runLiveEntity)(setup, { "active": true, "alias": { "field": {} }, "fields": { "annotations": { "a": true, "h": "Annotations", "n": "annotations", "r": false, "t": "`$OBJECT`", "key$": "annotations", "index$": 0 }, "author_email": { "a": true, "fo": "email", "h": "Author Email", "n": "author_email", "r": false, "ro": true, "t": "`$STRING`", "key$": "author_email", "index$": 1 }, "created_on": { "a": true, "fo": "date-time", "h": "Created On", "n": "created_on", "r": true, "ro": true, "t": "`$STRING`", "key$": "created_on", "index$": 2 }, "errors": { "a": true, "h": "Errors", "n": "errors", "r": true, "t": "`$ARRAY`", "key$": "errors", "index$": 3 }, "id": { "a": true, "fo": "uuid", "h": "Id", "n": "id", "r": true, "ro": true, "t": "`$STRING`", "key$": "id", "index$": 4 }, "messages": { "a": true, "h": "Messages", "n": "messages", "r": true, "t": "`$ARRAY`", "key$": "messages", "index$": 5 }, "result": { "a": true, "h": "Result", "n": "result", "r": true, "t": "`$OBJECT`", "key$": "result", "index$": 6 }, "source": { "a": true, "h": "Source", "n": "source", "r": true, "ro": true, "t": "`$STRING`", "key$": "source", "index$": 7 }, "strategy": { "a": true, "h": "Strategy", "n": "strategy", "r": true, "t": "`$STRING`", "key$": "strategy", "index$": 8 }, "success": { "a": true, "h": "Success", "n": "success", "r": true, "sh": "Whether the API call was successful.", "t": "`$BOOLEAN`", "key$": "success", "index$": 9 }, "versions": { "a": true, "h": "Versions", "n": "versions", "r": true, "sh": "Worker versions included in this deployment.", "t": "`$ARRAY`", "key$": "versions", "index$": 10 } }, "id": { "field": "id", "name": "id" }, "name": "worker_deployment", "op": { "create": { "input": "data", "name": "create", "points": [{ "a": true, "co": { "id": "POST /accounts/{account_id}/workers/scripts/{script_name}/deployments", "source": "openapi3", "version": 2 }, "g": { "params": [{ "a": true, "ex": "023e105f4ecef8ad9ca31a8372d0c353", "k": "param", "n": "account_id", "or": "account_id", "r": true, "t": "`$STRING`", "index$": 0 }, { "a": true, "ex": "this-is_my_script-01", "k": "param", "n": "script_name", "or": "script_name", "r": true, "t": "`$STRING`", "index$": 1 }], "query": [{ "a": true, "k": "query", "n": "force", "or": "force", "r": false, "t": "`$BOOLEAN`", "index$": 0 }] }, "k": "http", "m": "POST", "o": "/accounts/{account_id}/workers/scripts/{script_name}/deployments", "q": { "exist": ["account_id", "force", "script_name"] }, "r": {}, "s": [{ "lit": "accounts" }, { "var": "account_id" }, { "lit": "workers" }, { "lit": "scripts" }, { "var": "script_name" }, { "lit": "deployments" }], "t": { "req": "`reqdata`", "res": "`body`" }, "index$": 0 }], "key$": "create" }, "load": { "input": "data", "name": "load", "points": [{ "a": true, "co": { "id": "GET /accounts/{account_id}/workers/scripts/{script_name}/deployments", "source": "openapi3", "version": 2 }, "g": { "params": [{ "a": true, "ex": "023e105f4ecef8ad9ca31a8372d0c353", "k": "param", "n": "account_id", "or": "account_id", "r": true, "t": "`$STRING`", "index$": 0 }, { "a": true, "ex": "this-is_my_script-01", "k": "param", "n": "script_name", "or": "script_name", "r": true, "t": "`$STRING`", "index$": 1 }], "query": [{ "a": true, "ex": 1, "k": "query", "n": "page", "or": "page", "r": false, "t": "`$INTEGER`", "index$": 0 }, { "a": true, "ex": 10, "k": "query", "n": "per_page", "or": "per_page", "r": false, "t": "`$INTEGER`", "index$": 1 }, { "a": true, "k": "query", "n": "since", "or": "since", "r": false, "t": "`$STRING`", "index$": 2 }, { "a": true, "k": "query", "n": "until", "or": "until", "r": false, "t": "`$STRING`", "index$": 3 }] }, "k": "http", "m": "GET", "o": "/accounts/{account_id}/workers/scripts/{script_name}/deployments", "q": { "exist": ["account_id", "page", "per_page", "script_name", "since", "until"] }, "r": {}, "s": [{ "lit": "accounts" }, { "var": "account_id" }, { "lit": "workers" }, { "lit": "scripts" }, { "var": "script_name" }, { "lit": "deployments" }], "t": { "req": "`reqdata`", "res": "`body`" }, "index$": 0 }, { "a": true, "co": { "id": "GET /accounts/{account_id}/workers/scripts/{script_name}/deployments/{deployment_id}", "source": "openapi3", "version": 2 }, "g": { "params": [{ "a": true, "ex": "023e105f4ecef8ad9ca31a8372d0c353", "k": "param", "n": "account_id", "or": "account_id", "r": true, "t": "`$STRING`", "index$": 0 }, { "a": true, "k": "param", "n": "id", "or": "deployment_id", "r": true, "t": "`$STRING`", "index$": 1 }, { "a": true, "ex": "this-is_my_script-01", "k": "param", "n": "script_id", "or": "script_name", "r": true, "t": "`$STRING`", "index$": 2 }] }, "k": "http", "m": "GET", "o": "/accounts/{account_id}/workers/scripts/{script_name}/deployments/{deployment_id}", "q": { "exist": ["account_id", "id", "script_id"] }, "r": { "param": { "deployment_id": "id", "script_name": "script_id" } }, "s": [{ "lit": "accounts" }, { "var": "account_id" }, { "lit": "workers" }, { "lit": "scripts" }, { "var": "script_id" }, { "lit": "deployments" }, { "var": "id" }], "t": { "req": "`reqdata`", "res": "`body`" }, "index$": 1 }], "key$": "load" } }, "relations": { "ancestors": [["$.main.kit.entity.account", "$.main.kit.entity.script"]] }, "key$": "worker_deployment", "name__orig": "worker_deployment", "Name": "WorkerDeployment", "name_": "worker_deployment", "name-": "worker-deployment", "NAME": "WORKER_DEPLOYMENT", "index$": 47 }, { "active": true, "entity": "worker_deployment", "key$": "BasicWorkerDeploymentFlow", "kind": "basic", "name": "BasicWorkerDeploymentFlow", "param": {}, "step": [{ "a": true, "d": {}, "i": { "ref": "worker_deployment_ref01" }, "m": { "account_id": "account01", "script_id": "script01", "script_name": "script_name01" }, "o": "create", "s": [], "v": [], "index$": 0 }, { "a": true, "d": {}, "i": { "ref": "worker_deployment_ref01", "srcdatavar": "worker_deployment_ref01_data", "suffix": "_dt0" }, "m": { "account_id": "account01", "id": "worker_deployment01", "script_id": "script01" }, "o": "load", "s": [], "v": [{ "apply": "TextFieldMark", "def": { "mark": "Mark01-worker_deployment_ref01" } }], "index$": 1 }] }, 'WorkerDeployment', { "POST /accounts/{account_id}/workers/scripts/{script_name}/deployments": { "protocol": "http", "requestBody": { "required": true, "content": { "application/json": { "schema": { "type": "object", "properties": { "annotations": { "properties": { "workers/message": { "description": "Human-readable message about the deployment. Truncated to 1000 bytes if longer.", "example": "Deploy bug fix.", "maxLength": 1000, "type": "string", "x-auditable": true }, "workers/triggered_by": { "description": "Operation that triggered the creation of the deployment.", "example": "deployment", "readOnly": true, "type": "string" } }, "type": "object", "key$": "annotations" }, "author_email": { "format": "email", "readOnly": true, "type": "string", "x-auditable": true, "key$": "author_email" }, "created_on": { "format": "date-time", "readOnly": true, "type": "string", "x-auditable": true, "key$": "created_on" }, "id": { "format": "uuid", "readOnly": true, "type": "string", "x-auditable": true, "key$": "id" }, "source": { "example": "api", "readOnly": true, "type": "string", "x-auditable": true, "key$": "source" }, "strategy": { "enum": ["percentage"], "type": "string", "x-auditable": true, "key$": "strategy" }, "versions": { "description": "Worker versions included in this deployment. Each object must contain a `version_id` UUID and a `percentage`; percentages across all objects must total 100. In the `cf` CLI, pass the entire array as one JSON value to `--versions`, either inline, for example `--versions '[{\"version_id\":\"023e105f-2a42-4f8b-a1c1-73f6a2a30c0f\",\"percentage\":100}]'`, or from a JSON file with `--versions @versions.json`.", "example": [{ "percentage": 100, "version_id": "023e105f-2a42-4f8b-a1c1-73f6a2a30c0f" }], "items": { "properties": { "percentage": { "description": "Percentage of traffic served by this version.", "example": 100, "maximum": 100, "minimum": 0.01, "type": "number", "x-auditable": true }, "version_id": { "description": "Identifier of the Worker Version.", "format": "uuid", "type": "string", "x-auditable": true } }, "required": ["version_id", "percentage"], "type": "object" }, "type": "array", "x-auditable": true, "key$": "versions" } }, "required": ["id", "source", "strategy", "versions", "created_on"], "x-ref": "#/components/schemas/workers_deployment", "index$": 1 } } } }, "parameters": [{ "name": "account_id", "in": "path", "required": true, "schema": { "description": "Identifier.", "type": "string", "example": "023e105f4ecef8ad9ca31a8372d0c353", "maxLength": 32, "x-auditable": true, "x-ref": "#/components/schemas/workers_identifier" }, "index$": 0 }, { "name": "script_name", "in": "path", "required": true, "schema": { "description": "Name of the script.", "type": "string", "example": "this-is_my_script-01", "pattern": "^[a-z0-9_][a-z0-9-_]*$", "x-auditable": true, "x-ref": "#/components/schemas/workers_script_name" }, "index$": 1 }, { "name": "force", "in": "query", "description": "If set to true, the deployment will be created even if normally blocked by something such rolling back to an older version when a secret has changed.", "schema": { "type": "boolean" }, "x-fern-parameter-name": "bypass-deployment-checks", "index$": 2 }] }, "GET /accounts/{account_id}/workers/scripts/{script_name}/deployments": { "protocol": "http", "parameters": [{ "name": "account_id", "in": "path", "required": true, "schema": { "description": "Identifier.", "type": "string", "example": "023e105f4ecef8ad9ca31a8372d0c353", "maxLength": 32, "x-auditable": true, "x-ref": "#/components/schemas/workers_identifier" }, "index$": 0 }, { "name": "script_name", "in": "path", "required": true, "schema": { "description": "Name of the script.", "type": "string", "example": "this-is_my_script-01", "pattern": "^[a-z0-9_][a-z0-9-_]*$", "x-auditable": true, "x-ref": "#/components/schemas/workers_script_name" }, "index$": 1 }, { "name": "since", "in": "query", "description": "Start of the deployment creation time range, inclusive.", "schema": { "type": "string", "format": "date-time" }, "index$": 2 }, { "name": "until", "in": "query", "description": "End of the deployment creation time range, inclusive.", "schema": { "type": "string", "format": "date-time" }, "index$": 3 }, { "name": "page", "in": "query", "description": "Current page.", "schema": { "type": "integer", "default": 1, "minimum": 1 }, "index$": 4 }, { "name": "per_page", "in": "query", "description": "Items per page.", "schema": { "type": "integer", "default": 10, "maximum": 100, "minimum": 1 }, "index$": 5 }] }, "GET /accounts/{account_id}/workers/scripts/{script_name}/deployments/{deployment_id}": { "protocol": "http", "parameters": [{ "name": "account_id", "in": "path", "required": true, "schema": { "description": "Identifier.", "type": "string", "example": "023e105f4ecef8ad9ca31a8372d0c353", "maxLength": 32, "x-auditable": true, "x-ref": "#/components/schemas/workers_identifier" }, "index$": 0 }, { "name": "script_name", "in": "path", "required": true, "schema": { "description": "Name of the script.", "type": "string", "example": "this-is_my_script-01", "pattern": "^[a-z0-9_][a-z0-9-_]*$", "x-auditable": true, "x-ref": "#/components/schemas/workers_script_name" }, "index$": 1 }, { "name": "deployment_id", "in": "path", "required": true, "schema": { "type": "string", "format": "uuid" }, "index$": 2 }] } });
        }
        const client = setup.client;
        const struct = setup.struct;
        const isempty = struct.isempty;
        const select = struct.select;
        // CREATE
        const worker_deployment_ref01_ent = client.WorkerDeployment();
        let worker_deployment_ref01_data = setup.data.new.worker_deployment['worker_deployment_ref01'];
        worker_deployment_ref01_data['account_id'] = setup.idmap['account01'];
        worker_deployment_ref01_data['script_id'] = setup.idmap['script01'];
        worker_deployment_ref01_data['script_name'] = setup.idmap['script_name01'];
        worker_deployment_ref01_data = (await worker_deployment_ref01_ent.create(worker_deployment_ref01_data)).data();
        (0, node_assert_1.default)(null != worker_deployment_ref01_data.id);
        // LOAD
        const worker_deployment_ref01_match_dt0 = {};
        worker_deployment_ref01_match_dt0.id = worker_deployment_ref01_data.id;
        const worker_deployment_ref01_data_dt0 = (await worker_deployment_ref01_ent.load(worker_deployment_ref01_match_dt0)).data();
        (0, node_assert_1.default)(worker_deployment_ref01_data_dt0.id === worker_deployment_ref01_data.id);
    });
});
function basicSetup(extra) {
    // TODO: fix test def options
    const options = {}; // null
    // TODO: needs test utility to resolve path
    const entityDataFile = node_path_1.default.resolve(__dirname, '../../../../.sdk/test/entity/worker_deployment/WorkerDeploymentTestData.json');
    // TODO: file ready util needed?
    const entityDataSource = Fs.readFileSync(entityDataFile).toString('utf8');
    // TODO: need a xlang JSON parse utility in voxgig/struct with better error msgs
    const entityData = JSON.parse(entityDataSource);
    options.entity = entityData.existing;
    let client = __1.CloudflareWorkersSDK.test(options, extra);
    const struct = client.utility().struct;
    const merge = struct.merge;
    const transform = struct.transform;
    let idmap = transform(['worker_deployment01', 'worker_deployment02', 'worker_deployment03', 'account01', 'account02', 'account03', 'script01', 'script02', 'script03', 'script_name01'], {
        '`$PACK`': ['', {
                '`$KEY`': '`$COPY`',
                '`$VAL`': ['`$FORMAT`', 'upper', '`$COPY`']
            }]
    });
    const env = (0, utility_1.envOverride)({
        'CLOUDFLARE_WORKERS_TEST_WORKER_DEPLOYMENT_ENTID': idmap,
        'CLOUDFLARE_WORKERS_TEST_LIVE': 'FALSE',
        'CLOUDFLARE_WORKERS_TEST_EXPLAIN': 'FALSE',
        'CLOUDFLARE_WORKERS_APIKEY': '',
    });
    idmap = env['CLOUDFLARE_WORKERS_TEST_WORKER_DEPLOYMENT_ENTID'];
    const live = 'TRUE' === env.CLOUDFLARE_WORKERS_TEST_LIVE;
    const transport = (0, live_runner_1.createLiveTransport)();
    if (live) {
        const rawIds = process.env['CLOUDFLARE_WORKERS_TEST_WORKER_DEPLOYMENT_ENTID'];
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
//# sourceMappingURL=WorkerDeploymentEntity.test.js.map