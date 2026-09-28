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
(0, node_test_1.describe)('DeployHookEntity', async () => {
    // Per-test live pacing. Delay is read from sdk-test-control.json's
    // `test.live.delayMs`; only sleeps when CLOUDFLARE_WORKERS_TEST_LIVE=TRUE.
    (0, node_test_1.afterEach)((0, utility_1.liveDelay)('CLOUDFLARE_WORKERS_TEST_LIVE'));
    (0, node_test_1.test)('instance', async () => {
        const testsdk = __1.CloudflareWorkersSDK.test();
        const ent = testsdk.DeployHook();
        (0, node_assert_1.default)(null != ent);
    });
    (0, node_test_1.test)('basic', async (t) => {
        const live = 'TRUE' === process.env.CLOUDFLARE_WORKERS_TEST_LIVE;
        for (const op of ['create', 'list', 'update', 'load', 'remove']) {
            if (!live && (0, utility_1.maybeSkipControl)(t, 'entityOp', 'deploy_hook.' + op, live))
                return;
        }
        const setup = basicSetup();
        if (setup.live) {
            return (0, live_entity_1.runLiveEntity)(setup, { "active": true, "alias": { "field": {} }, "fields": { "branch": { "a": true, "h": "Branch", "n": "branch", "r": true, "sh": "Git branch name.", "t": "`$STRING`", "key$": "branch", "index$": 0 }, "deploy_hook_name": { "a": true, "h": "Deploy Hook Name", "n": "deploy_hook_name", "r": true, "sh": "Deploy hook name (1-58 characters).", "t": "`$STRING`", "key$": "deploy_hook_name", "index$": 1 }, "errors": { "a": true, "h": "Errors", "n": "errors", "r": true, "t": "`$ARRAY`", "key$": "errors", "index$": 2 }, "id": { "a": true, "h": "Id", "n": "id", "r": false, "t": "`$STRING`", "key$": "id", "index$": 3 }, "messages": { "a": true, "h": "Messages", "n": "messages", "r": true, "t": "`$ARRAY`", "key$": "messages", "index$": 4 }, "result": { "a": true, "h": "Result", "n": "result", "op": { "create": { "req": false, "type": "`$OBJECT`" }, "list": { "req": false, "type": "`$OBJECT`" }, "load": { "req": false, "type": "`$OBJECT`" } }, "r": true, "t": "`$OBJECT`", "union": { "branches": 2, "count": 1, "depth": 4 }, "key$": "result", "index$": 5 }, "result_info": { "a": true, "h": "Result Info", "n": "result_info", "r": false, "t": "`$OBJECT`", "key$": "result_info", "index$": 6 }, "success": { "a": true, "h": "Success", "n": "success", "r": true, "t": "`$BOOLEAN`", "key$": "success", "index$": 7 } }, "id": { "field": "id", "name": "id" }, "name": "deploy_hook", "op": { "create": { "input": "data", "name": "create", "points": [{ "a": true, "co": { "id": "POST /accounts/{account_id}/builds/workers/{script_name}/deploy_hooks", "source": "openapi3", "version": 2 }, "g": { "params": [{ "a": true, "ex": "account-123", "k": "param", "n": "account_id", "or": "account_id", "r": true, "t": "`$STRING`", "index$": 0 }, { "a": true, "ex": "my-worker", "k": "param", "n": "script_name", "or": "script_name", "r": true, "t": "`$STRING`", "index$": 1 }] }, "k": "http", "m": "POST", "o": "/accounts/{account_id}/builds/workers/{script_name}/deploy_hooks", "q": { "exist": ["account_id", "script_name"] }, "r": {}, "s": [{ "lit": "accounts" }, { "var": "account_id" }, { "lit": "builds" }, { "lit": "workers" }, { "var": "script_name" }, { "lit": "deploy_hooks" }], "t": { "req": "`reqdata`", "res": "`body`" }, "index$": 0 }, { "a": true, "co": { "id": "POST /workers/builds/deploy_hooks/{deploy_hook_uuid}", "source": "openapi3", "version": 2 }, "g": { "params": [{ "a": true, "k": "param", "n": "id", "or": "deploy_hook_uuid", "r": true, "t": "`$STRING`", "index$": 0 }] }, "k": "http", "m": "POST", "o": "/workers/builds/deploy_hooks/{deploy_hook_uuid}", "q": { "exist": ["id"] }, "r": { "param": { "deploy_hook_uuid": "id" } }, "s": [{ "lit": "workers" }, { "lit": "builds" }, { "lit": "deploy_hooks" }, { "var": "id" }], "t": { "req": "`reqdata`", "res": "`body`" }, "index$": 0 }], "key$": "create" }, "list": { "input": "data", "name": "list", "points": [{ "a": true, "co": { "id": "GET /accounts/{account_id}/builds/workers/{script_name}/deploy_hooks", "source": "openapi3", "version": 2 }, "g": { "params": [{ "a": true, "ex": "account-123", "k": "param", "n": "account_id", "or": "account_id", "r": true, "t": "`$STRING`", "index$": 0 }, { "a": true, "ex": "my-worker", "k": "param", "n": "script_name", "or": "script_name", "r": true, "t": "`$STRING`", "index$": 1 }] }, "k": "http", "m": "GET", "o": "/accounts/{account_id}/builds/workers/{script_name}/deploy_hooks", "q": { "exist": ["account_id", "script_name"] }, "r": {}, "s": [{ "lit": "accounts" }, { "var": "account_id" }, { "lit": "builds" }, { "lit": "workers" }, { "var": "script_name" }, { "lit": "deploy_hooks" }], "t": { "req": "`reqdata`", "res": "`body`" }, "index$": 0 }], "key$": "list" }, "load": { "input": "data", "name": "load", "points": [{ "a": true, "co": { "id": "GET /accounts/{account_id}/builds/workers/{script_name}/deploy_hooks/{deploy_hook_uuid}", "source": "openapi3", "version": 2 }, "g": { "params": [{ "a": true, "ex": "account-123", "k": "param", "n": "account_id", "or": "account_id", "r": true, "t": "`$STRING`", "index$": 0 }, { "a": true, "k": "param", "n": "id", "or": "deploy_hook_uuid", "r": true, "t": "`$STRING`", "index$": 1 }, { "a": true, "ex": "my-worker", "k": "param", "n": "worker_id", "or": "script_name", "r": true, "t": "`$STRING`", "index$": 2 }] }, "k": "http", "m": "GET", "o": "/accounts/{account_id}/builds/workers/{script_name}/deploy_hooks/{deploy_hook_uuid}", "q": { "exist": ["account_id", "id", "worker_id"] }, "r": { "param": { "deploy_hook_uuid": "id", "script_name": "worker_id" } }, "s": [{ "lit": "accounts" }, { "var": "account_id" }, { "lit": "builds" }, { "lit": "workers" }, { "var": "worker_id" }, { "lit": "deploy_hooks" }, { "var": "id" }], "t": { "req": "`reqdata`", "res": "`body`" }, "index$": 0 }], "key$": "load" }, "remove": { "input": "data", "name": "remove", "points": [{ "a": true, "co": { "id": "DELETE /accounts/{account_id}/builds/workers/{script_name}/deploy_hooks/{deploy_hook_uuid}", "source": "openapi3", "version": 2 }, "g": { "params": [{ "a": true, "ex": "account-123", "k": "param", "n": "account_id", "or": "account_id", "r": true, "t": "`$STRING`", "index$": 0 }, { "a": true, "k": "param", "n": "id", "or": "deploy_hook_uuid", "r": true, "t": "`$STRING`", "index$": 1 }, { "a": true, "ex": "my-worker", "k": "param", "n": "worker_id", "or": "script_name", "r": true, "t": "`$STRING`", "index$": 2 }] }, "k": "http", "m": "DELETE", "o": "/accounts/{account_id}/builds/workers/{script_name}/deploy_hooks/{deploy_hook_uuid}", "q": { "exist": ["account_id", "id", "worker_id"] }, "r": { "param": { "deploy_hook_uuid": "id", "script_name": "worker_id" } }, "s": [{ "lit": "accounts" }, { "var": "account_id" }, { "lit": "builds" }, { "lit": "workers" }, { "var": "worker_id" }, { "lit": "deploy_hooks" }, { "var": "id" }], "t": { "req": "`reqdata`", "res": "`body`" }, "index$": 0 }], "key$": "remove" }, "update": { "input": "data", "name": "update", "points": [{ "a": true, "co": { "id": "PUT /accounts/{account_id}/builds/workers/{script_name}/deploy_hooks/{deploy_hook_uuid}", "source": "openapi3", "version": 2 }, "g": { "params": [{ "a": true, "ex": "account-123", "k": "param", "n": "account_id", "or": "account_id", "r": true, "t": "`$STRING`", "index$": 0 }, { "a": true, "k": "param", "n": "id", "or": "deploy_hook_uuid", "r": true, "t": "`$STRING`", "index$": 1 }, { "a": true, "ex": "my-worker", "k": "param", "n": "worker_id", "or": "script_name", "r": true, "t": "`$STRING`", "index$": 2 }] }, "k": "http", "m": "PUT", "o": "/accounts/{account_id}/builds/workers/{script_name}/deploy_hooks/{deploy_hook_uuid}", "q": { "exist": ["account_id", "id", "worker_id"] }, "r": { "param": { "deploy_hook_uuid": "id", "script_name": "worker_id" } }, "s": [{ "lit": "accounts" }, { "var": "account_id" }, { "lit": "builds" }, { "lit": "workers" }, { "var": "worker_id" }, { "lit": "deploy_hooks" }, { "var": "id" }], "t": { "req": "`reqdata`", "res": "`body`" }, "index$": 0 }], "key$": "update" } }, "relations": { "ancestors": [["$.main.kit.entity.account", "$.main.kit.entity.worker"]] }, "key$": "deploy_hook", "name__orig": "deploy_hook", "Name": "DeployHook", "name_": "deploy_hook", "name-": "deploy-hook", "NAME": "DEPLOY_HOOK", "index$": 9 }, { "active": true, "entity": "deploy_hook", "key$": "BasicDeployHookFlow", "kind": "basic", "name": "BasicDeployHookFlow", "param": {}, "step": [{ "a": true, "d": {}, "i": { "ref": "deploy_hook_ref01" }, "m": { "account_id": "account01", "deploy_hook_uuid": "deploy_hook_uuid01", "script_name": "script_name01", "worker_id": "worker01" }, "o": "create", "s": [], "v": [], "index$": 0 }, { "a": true, "d": {}, "i": {}, "m": { "account_id": "account01", "script_name": "script_name01" }, "o": "list", "s": [], "v": [{ "apply": "ItemExists", "def": { "ref": "deploy_hook_ref01" } }], "index$": 1 }, { "a": true, "d": { "account_id": "account01", "worker_id": "worker01" }, "i": { "ref": "deploy_hook_ref01", "srcdatavar": "deploy_hook_ref01_data", "suffix": "_up0", "textfield": "branch" }, "m": {}, "o": "update", "s": [{ "apply": "TextFieldMark", "def": { "mark": "Mark01-deploy_hook_ref01" } }], "v": [], "index$": 2 }, { "a": true, "d": {}, "i": { "ref": "deploy_hook_ref01", "srcdatavar": "deploy_hook_ref01_data", "suffix": "_dt0" }, "m": { "account_id": "account01", "id": "deploy_hook01", "worker_id": "worker01" }, "o": "load", "s": [], "v": [{ "apply": "TextFieldMark", "def": { "mark": "Mark01-deploy_hook_ref01" } }], "index$": 3 }, { "a": true, "d": {}, "i": { "ref": "deploy_hook_ref01", "suffix": "_rm0" }, "m": { "account_id": "account01", "id": "deploy_hook01", "worker_id": "worker01" }, "o": "remove", "s": [], "v": [], "index$": 4 }, { "a": true, "d": {}, "i": { "suffix": "_rt0" }, "m": { "account_id": "account01", "script_name": "script_name01" }, "o": "list", "s": [], "v": [{ "apply": "ItemNotExists", "def": { "ref": "deploy_hook_ref01" } }], "index$": 5 }] }, 'DeployHook', { "POST /accounts/{account_id}/builds/workers/{script_name}/deploy_hooks": { "protocol": "http", "requestBody": { "required": true, "content": { "application/json": { "schema": { "type": "object", "properties": { "branch": { "description": "Git branch name.", "type": "string", "example": "main", "x-ref": "#/components/schemas/builds_branch", "key$": "branch" }, "deploy_hook_name": { "description": "Deploy hook name (1-58 characters).", "type": "string", "example": "Production Deploy Hook", "maxLength": 58, "minLength": 1, "x-ref": "#/components/schemas/builds_deploy_hook_name", "key$": "deploy_hook_name" } }, "required": ["deploy_hook_name", "branch"], "x-ref": "#/components/schemas/builds_CreateDeployHookRequest", "index$": 1 } } } }, "parameters": [{ "in": "path", "name": "account_id", "required": true, "schema": { "description": "Account identifier.", "type": "string", "example": "account-123", "x-ref": "#/components/schemas/builds_account_id" }, "x-ref": "#/components/parameters/builds_AccountId", "index$": 0 }, { "description": "Human-readable name of the worker.", "in": "path", "name": "script_name", "required": true, "schema": { "description": "Human-readable name of the Worker.", "type": "string", "example": "my-worker", "x-ref": "#/components/schemas/builds_script_name" }, "x-ref": "#/components/parameters/builds_ScriptName", "index$": 1 }] }, "POST /workers/builds/deploy_hooks/{deploy_hook_uuid}": { "protocol": "http", "parameters": [{ "description": "Deploy hook UUID", "in": "path", "name": "deploy_hook_uuid", "required": true, "schema": { "description": "Deploy hook UUID.", "type": "string", "format": "uuid", "x-ref": "#/components/schemas/builds_deploy_hook_uuid" }, "x-ref": "#/components/parameters/builds_DeployHookUuid", "index$": 0 }] }, "GET /accounts/{account_id}/builds/workers/{script_name}/deploy_hooks": { "protocol": "http", "parameters": [{ "in": "path", "name": "account_id", "required": true, "schema": { "description": "Account identifier.", "type": "string", "example": "account-123", "x-ref": "#/components/schemas/builds_account_id" }, "x-ref": "#/components/parameters/builds_AccountId", "index$": 0 }, { "description": "Human-readable name of the worker.", "in": "path", "name": "script_name", "required": true, "schema": { "description": "Human-readable name of the Worker.", "type": "string", "example": "my-worker", "x-ref": "#/components/schemas/builds_script_name" }, "x-ref": "#/components/parameters/builds_ScriptName", "index$": 1 }] }, "GET /accounts/{account_id}/builds/workers/{script_name}/deploy_hooks/{deploy_hook_uuid}": { "protocol": "http", "parameters": [{ "in": "path", "name": "account_id", "required": true, "schema": { "description": "Account identifier.", "type": "string", "example": "account-123", "x-ref": "#/components/schemas/builds_account_id" }, "x-ref": "#/components/parameters/builds_AccountId", "index$": 0 }, { "description": "Human-readable name of the worker.", "in": "path", "name": "script_name", "required": true, "schema": { "description": "Human-readable name of the Worker.", "type": "string", "example": "my-worker", "x-ref": "#/components/schemas/builds_script_name" }, "x-ref": "#/components/parameters/builds_ScriptName", "index$": 1 }, { "description": "Deploy hook UUID", "in": "path", "name": "deploy_hook_uuid", "required": true, "schema": { "description": "Deploy hook UUID.", "type": "string", "format": "uuid", "x-ref": "#/components/schemas/builds_deploy_hook_uuid" }, "x-ref": "#/components/parameters/builds_DeployHookUuid", "index$": 2 }] }, "DELETE /accounts/{account_id}/builds/workers/{script_name}/deploy_hooks/{deploy_hook_uuid}": { "protocol": "http", "parameters": [{ "in": "path", "name": "account_id", "required": true, "schema": { "description": "Account identifier.", "type": "string", "example": "account-123", "x-ref": "#/components/schemas/builds_account_id" }, "x-ref": "#/components/parameters/builds_AccountId", "index$": 0 }, { "description": "Human-readable name of the worker.", "in": "path", "name": "script_name", "required": true, "schema": { "description": "Human-readable name of the Worker.", "type": "string", "example": "my-worker", "x-ref": "#/components/schemas/builds_script_name" }, "x-ref": "#/components/parameters/builds_ScriptName", "index$": 1 }, { "description": "Deploy hook UUID", "in": "path", "name": "deploy_hook_uuid", "required": true, "schema": { "description": "Deploy hook UUID.", "type": "string", "format": "uuid", "x-ref": "#/components/schemas/builds_deploy_hook_uuid" }, "x-ref": "#/components/parameters/builds_DeployHookUuid", "index$": 2 }] }, "PUT /accounts/{account_id}/builds/workers/{script_name}/deploy_hooks/{deploy_hook_uuid}": { "protocol": "http", "requestBody": { "required": true, "content": { "application/json": { "schema": { "type": "object", "properties": { "branch": { "description": "Git branch name.", "type": "string", "example": "main", "x-ref": "#/components/schemas/builds_branch", "key$": "branch" }, "deploy_hook_name": { "description": "Deploy hook name (1-58 characters).", "type": "string", "example": "Production Deploy Hook", "maxLength": 58, "minLength": 1, "x-ref": "#/components/schemas/builds_deploy_hook_name", "key$": "deploy_hook_name" } }, "required": ["deploy_hook_name", "branch"], "x-ref": "#/components/schemas/builds_CreateDeployHookRequest", "index$": 1 } } } }, "parameters": [{ "in": "path", "name": "account_id", "required": true, "schema": { "description": "Account identifier.", "type": "string", "example": "account-123", "x-ref": "#/components/schemas/builds_account_id" }, "x-ref": "#/components/parameters/builds_AccountId", "index$": 0 }, { "description": "Human-readable name of the worker.", "in": "path", "name": "script_name", "required": true, "schema": { "description": "Human-readable name of the Worker.", "type": "string", "example": "my-worker", "x-ref": "#/components/schemas/builds_script_name" }, "x-ref": "#/components/parameters/builds_ScriptName", "index$": 1 }, { "description": "Deploy hook UUID", "in": "path", "name": "deploy_hook_uuid", "required": true, "schema": { "description": "Deploy hook UUID.", "type": "string", "format": "uuid", "x-ref": "#/components/schemas/builds_deploy_hook_uuid" }, "x-ref": "#/components/parameters/builds_DeployHookUuid", "index$": 2 }] } });
        }
        const client = setup.client;
        const struct = setup.struct;
        const isempty = struct.isempty;
        const select = struct.select;
        // CREATE
        const deploy_hook_ref01_ent = client.DeployHook();
        let deploy_hook_ref01_data = setup.data.new.deploy_hook['deploy_hook_ref01'];
        deploy_hook_ref01_data['account_id'] = setup.idmap['account01'];
        deploy_hook_ref01_data['deploy_hook_uuid'] = setup.idmap['deploy_hook_uuid01'];
        deploy_hook_ref01_data['script_name'] = setup.idmap['script_name01'];
        deploy_hook_ref01_data['worker_id'] = setup.idmap['worker01'];
        deploy_hook_ref01_data = (await deploy_hook_ref01_ent.create(deploy_hook_ref01_data)).data();
        (0, node_assert_1.default)(null != deploy_hook_ref01_data.id);
        // LIST
        const deploy_hook_ref01_match = {};
        deploy_hook_ref01_match['account_id'] = setup.idmap['account01'];
        deploy_hook_ref01_match['script_name'] = setup.idmap['script_name01'];
        const deploy_hook_ref01_list = (await deploy_hook_ref01_ent.list(deploy_hook_ref01_match)).map((e) => e.data());
        (0, node_assert_1.default)(!isempty(select(deploy_hook_ref01_list, { id: deploy_hook_ref01_data.id })));
        // UPDATE
        const deploy_hook_ref01_data_up0 = {};
        deploy_hook_ref01_data_up0.id = deploy_hook_ref01_data.id;
        deploy_hook_ref01_data_up0['account_id'] = setup.idmap['account_id'];
        deploy_hook_ref01_data_up0['worker_id'] = setup.idmap['worker_id'];
        const deploy_hook_ref01_markdef_up0 = { name: 'branch', value: 'Mark01-deploy_hook_ref01_' + setup.now };
        deploy_hook_ref01_data_up0[deploy_hook_ref01_markdef_up0.name] = deploy_hook_ref01_markdef_up0.value;
        const deploy_hook_ref01_resdata_up0 = (await deploy_hook_ref01_ent.update(deploy_hook_ref01_data_up0)).data();
        (0, node_assert_1.default)(deploy_hook_ref01_resdata_up0.id === deploy_hook_ref01_data_up0.id);
        (0, node_assert_1.default)(deploy_hook_ref01_resdata_up0[deploy_hook_ref01_markdef_up0.name] === deploy_hook_ref01_markdef_up0.value);
        // LOAD
        const deploy_hook_ref01_match_dt0 = {};
        deploy_hook_ref01_match_dt0.id = deploy_hook_ref01_data.id;
        const deploy_hook_ref01_data_dt0 = (await deploy_hook_ref01_ent.load(deploy_hook_ref01_match_dt0)).data();
        (0, node_assert_1.default)(deploy_hook_ref01_data_dt0.id === deploy_hook_ref01_data.id);
        // REMOVE
        const deploy_hook_ref01_match_rm0 = { id: deploy_hook_ref01_data.id };
        await deploy_hook_ref01_ent.remove(deploy_hook_ref01_match_rm0);
        // LIST
        const deploy_hook_ref01_match_rt0 = {};
        deploy_hook_ref01_match_rt0['account_id'] = setup.idmap['account01'];
        deploy_hook_ref01_match_rt0['script_name'] = setup.idmap['script_name01'];
        const deploy_hook_ref01_list_rt0 = (await deploy_hook_ref01_ent.list(deploy_hook_ref01_match_rt0)).map((e) => e.data());
        (0, node_assert_1.default)(isempty(select(deploy_hook_ref01_list_rt0, { id: deploy_hook_ref01_data.id })));
    });
});
function basicSetup(extra) {
    // TODO: fix test def options
    const options = {}; // null
    // TODO: needs test utility to resolve path
    const entityDataFile = node_path_1.default.resolve(__dirname, '../../../../.sdk/test/entity/deploy_hook/DeployHookTestData.json');
    // TODO: file ready util needed?
    const entityDataSource = Fs.readFileSync(entityDataFile).toString('utf8');
    // TODO: need a xlang JSON parse utility in voxgig/struct with better error msgs
    const entityData = JSON.parse(entityDataSource);
    options.entity = entityData.existing;
    let client = __1.CloudflareWorkersSDK.test(options, extra);
    const struct = client.utility().struct;
    const merge = struct.merge;
    const transform = struct.transform;
    let idmap = transform(['deploy_hook01', 'deploy_hook02', 'deploy_hook03', 'account01', 'account02', 'account03', 'worker01', 'worker02', 'worker03', 'deploy_hook_uuid01', 'script_name01'], {
        '`$PACK`': ['', {
                '`$KEY`': '`$COPY`',
                '`$VAL`': ['`$FORMAT`', 'upper', '`$COPY`']
            }]
    });
    const env = (0, utility_1.envOverride)({
        'CLOUDFLARE_WORKERS_TEST_DEPLOY_HOOK_ENTID': idmap,
        'CLOUDFLARE_WORKERS_TEST_LIVE': 'FALSE',
        'CLOUDFLARE_WORKERS_TEST_EXPLAIN': 'FALSE',
        'CLOUDFLARE_WORKERS_APIKEY': '',
    });
    idmap = env['CLOUDFLARE_WORKERS_TEST_DEPLOY_HOOK_ENTID'];
    const live = 'TRUE' === env.CLOUDFLARE_WORKERS_TEST_LIVE;
    const transport = (0, live_runner_1.createLiveTransport)();
    if (live) {
        const rawIds = process.env['CLOUDFLARE_WORKERS_TEST_DEPLOY_HOOK_ENTID'];
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
//# sourceMappingURL=DeployHookEntity.test.js.map