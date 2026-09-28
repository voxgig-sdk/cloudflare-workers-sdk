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
(0, node_test_1.describe)('TriggerEntity', async () => {
    // Per-test live pacing. Delay is read from sdk-test-control.json's
    // `test.live.delayMs`; only sleeps when CLOUDFLARE_WORKERS_TEST_LIVE=TRUE.
    (0, node_test_1.afterEach)((0, utility_1.liveDelay)('CLOUDFLARE_WORKERS_TEST_LIVE'));
    (0, node_test_1.test)('instance', async () => {
        const testsdk = __1.CloudflareWorkersSDK.test();
        const ent = testsdk.Trigger();
        (0, node_assert_1.default)(null != ent);
    });
    (0, node_test_1.test)('basic', async (t) => {
        const live = 'TRUE' === process.env.CLOUDFLARE_WORKERS_TEST_LIVE;
        for (const op of ['create', 'update', 'remove']) {
            if (!live && (0, utility_1.maybeSkipControl)(t, 'entityOp', 'trigger.' + op, live))
                return;
        }
        const setup = basicSetup();
        if (setup.live) {
            return (0, live_entity_1.runLiveEntity)(setup, { "active": true, "alias": { "field": {} }, "fields": { "branch_excludes": { "a": true, "h": "Branch Excludes", "n": "branch_excludes", "op": { "update": { "req": false, "type": "`$ARRAY`" } }, "r": true, "sh": "Branch patterns that must not start builds.", "t": "`$ARRAY`", "key$": "branch_excludes", "index$": 0 }, "branch_includes": { "a": true, "h": "Branch Includes", "n": "branch_includes", "op": { "update": { "req": false, "type": "`$ARRAY`" } }, "r": true, "sh": "Branch patterns that can start builds.", "t": "`$ARRAY`", "key$": "branch_includes", "index$": 1 }, "build_caching_enabled": { "a": true, "h": "Build Caching Enabled", "n": "build_caching_enabled", "r": false, "sh": "Whether builds reuse cached dependencies and build artifacts.", "t": "`$BOOLEAN`", "key$": "build_caching_enabled", "index$": 2 }, "build_command": { "a": true, "h": "Build Command", "n": "build_command", "op": { "update": { "req": false, "type": "`$STRING`" } }, "r": true, "sh": "Command to build the Worker.", "t": "`$STRING`", "key$": "build_command", "index$": 3 }, "build_token_uuid": { "a": true, "fo": "uuid", "h": "Build Token Uuid", "n": "build_token_uuid", "op": { "update": { "req": false, "type": "`$STRING`" } }, "r": true, "sh": "UUID of the build token used when deploying the Worker.", "t": "`$STRING`", "key$": "build_token_uuid", "index$": 4 }, "deploy_command": { "a": true, "h": "Deploy Command", "n": "deploy_command", "op": { "update": { "req": false, "type": "`$STRING`" } }, "r": true, "sh": "Command to deploy the Worker.", "t": "`$STRING`", "key$": "deploy_command", "index$": 5 }, "external_script_id": { "a": true, "h": "External Script Id", "n": "external_script_id", "r": true, "sh": "System-generated tag of the Worker.", "t": "`$STRING`", "key$": "external_script_id", "index$": 6 }, "id": { "a": true, "h": "Id", "n": "id", "r": false, "t": "`$STRING`", "key$": "id", "index$": 7 }, "path_excludes": { "a": true, "h": "Path Excludes", "n": "path_excludes", "op": { "update": { "req": false, "type": "`$ARRAY`" } }, "r": true, "sh": "Path patterns that must not start builds.", "t": "`$ARRAY`", "key$": "path_excludes", "index$": 8 }, "path_includes": { "a": true, "h": "Path Includes", "n": "path_includes", "op": { "update": { "req": false, "type": "`$ARRAY`" } }, "r": true, "sh": "Path patterns that can start builds.", "t": "`$ARRAY`", "key$": "path_includes", "index$": 9 }, "repo_connection_uuid": { "a": true, "fo": "uuid", "h": "Repo Connection Uuid", "n": "repo_connection_uuid", "r": true, "sh": "Repository connection UUID.", "t": "`$STRING`", "key$": "repo_connection_uuid", "index$": 10 }, "root_directory": { "a": true, "h": "Root Directory", "n": "root_directory", "op": { "update": { "req": false, "type": "`$STRING`" } }, "r": true, "sh": "Repository directory in which build and deploy commands run.", "t": "`$STRING`", "key$": "root_directory", "index$": 11 }, "trigger_name": { "a": true, "h": "Trigger Name", "n": "trigger_name", "op": { "update": { "req": false, "type": "`$STRING`" } }, "r": true, "sh": "Human-readable name of the build trigger.", "t": "`$STRING`", "key$": "trigger_name", "index$": 12 } }, "id": { "field": "id", "name": "id" }, "name": "trigger", "op": { "create": { "input": "data", "name": "create", "points": [{ "a": true, "co": { "id": "POST /accounts/{account_id}/builds/triggers/{trigger_uuid}/builds", "source": "openapi3", "version": 2 }, "g": { "params": [{ "a": true, "ex": "account-123", "k": "param", "n": "account_id", "or": "account_id", "r": true, "t": "`$STRING`", "index$": 0 }, { "a": true, "k": "param", "n": "id", "or": "trigger_uuid", "r": true, "t": "`$STRING`", "index$": 1 }] }, "k": "http", "m": "POST", "o": "/accounts/{account_id}/builds/triggers/{trigger_uuid}/builds", "q": { "$action": "build", "exist": ["account_id", "id"] }, "r": { "param": { "trigger_uuid": "id" } }, "s": [{ "lit": "accounts" }, { "var": "account_id" }, { "lit": "builds" }, { "lit": "triggers" }, { "var": "id" }, { "lit": "builds" }], "t": { "req": "`reqdata`", "res": "`body`" }, "index$": 0 }, { "a": true, "co": { "id": "POST /accounts/{account_id}/builds/triggers", "source": "openapi3", "version": 2 }, "g": { "params": [{ "a": true, "ex": "account-123", "k": "param", "n": "account_id", "or": "account_id", "r": true, "t": "`$STRING`", "index$": 0 }] }, "k": "http", "m": "POST", "o": "/accounts/{account_id}/builds/triggers", "q": { "exist": ["account_id"] }, "r": {}, "s": [{ "lit": "accounts" }, { "var": "account_id" }, { "lit": "builds" }, { "lit": "triggers" }], "t": { "req": "`reqdata`", "res": "`body`" }, "index$": 1 }], "key$": "create" }, "remove": { "input": "data", "name": "remove", "points": [{ "a": true, "co": { "id": "DELETE /accounts/{account_id}/builds/triggers/{trigger_uuid}", "source": "openapi3", "version": 2 }, "g": { "params": [{ "a": true, "ex": "account-123", "k": "param", "n": "account_id", "or": "account_id", "r": true, "t": "`$STRING`", "index$": 0 }, { "a": true, "k": "param", "n": "id", "or": "trigger_uuid", "r": true, "t": "`$STRING`", "index$": 1 }] }, "k": "http", "m": "DELETE", "o": "/accounts/{account_id}/builds/triggers/{trigger_uuid}", "q": { "exist": ["account_id", "id"] }, "r": { "param": { "trigger_uuid": "id" } }, "s": [{ "lit": "accounts" }, { "var": "account_id" }, { "lit": "builds" }, { "lit": "triggers" }, { "var": "id" }], "t": { "req": "`reqdata`", "res": "`body`" }, "index$": 0 }], "key$": "remove" }, "update": { "input": "data", "name": "update", "points": [{ "a": true, "co": { "id": "PATCH /accounts/{account_id}/builds/triggers/{trigger_uuid}", "source": "openapi3", "version": 2 }, "g": { "params": [{ "a": true, "ex": "account-123", "k": "param", "n": "account_id", "or": "account_id", "r": true, "t": "`$STRING`", "index$": 0 }, { "a": true, "k": "param", "n": "id", "or": "trigger_uuid", "r": true, "t": "`$STRING`", "index$": 1 }] }, "k": "http", "m": "PATCH", "o": "/accounts/{account_id}/builds/triggers/{trigger_uuid}", "q": { "exist": ["account_id", "id"] }, "r": { "param": { "trigger_uuid": "id" } }, "s": [{ "lit": "accounts" }, { "var": "account_id" }, { "lit": "builds" }, { "lit": "triggers" }, { "var": "id" }], "t": { "req": "`reqdata`", "res": "`body`" }, "index$": 0 }], "key$": "update" } }, "relations": { "ancestors": [["$.main.kit.entity.account"]] }, "key$": "trigger", "name__orig": "trigger", "Name": "Trigger", "name_": "trigger", "name-": "trigger", "NAME": "TRIGGER", "index$": 41 }, { "active": true, "entity": "trigger", "key$": "BasicTriggerFlow", "kind": "basic", "name": "BasicTriggerFlow", "param": {}, "step": [{ "a": true, "d": {}, "i": { "ref": "trigger_ref01" }, "m": { "account_id": "account01" }, "o": "create", "s": [], "v": [], "index$": 0 }, { "a": true, "d": { "account_id": "account01" }, "i": { "ref": "trigger_ref01", "srcdatavar": "trigger_ref01_data", "suffix": "_up0", "textfield": "build_command" }, "m": {}, "o": "update", "s": [{ "apply": "TextFieldMark", "def": { "mark": "Mark01-trigger_ref01" } }], "v": [], "index$": 1 }, { "a": true, "d": {}, "i": { "ref": "trigger_ref01", "suffix": "_rm0" }, "m": { "account_id": "account01", "id": "trigger01" }, "o": "remove", "s": [], "v": [], "index$": 2 }] }, 'Trigger', { "POST /accounts/{account_id}/builds/triggers/{trigger_uuid}/builds": { "protocol": "http", "requestBody": { "required": true, "content": { "application/json": { "schema": { "type": "object", "properties": { "branch": { "description": "Git branch name (required if commit_hash not provided)", "allOf": [{ "description": "Git branch name.", "type": "string", "example": "main", "x-ref": "#/components/schemas/builds_branch" }], "key$": "branch" }, "commit_hash": { "description": "Git commit hash (required if branch not provided)", "allOf": [{ "description": "Git commit hash", "type": "string", "example": "abc123def456", "x-ref": "#/components/schemas/builds_commit_hash" }], "key$": "commit_hash" }, "seed_repo": { "description": "Optional repository and file overrides used to seed this build.", "allOf": [{ "type": "object", "properties": { "branch": {}, "files": {}, "owner": {}, "path": {}, "provider": {}, "repository": {} }, "required": ["provider", "owner", "repository"], "x-ref": "#/components/schemas/builds_BuildSeedRepoInput" }], "key$": "seed_repo" } }, "anyOf": [{ "required": ["commit_hash"] }, { "required": ["branch"] }], "x-ref": "#/components/schemas/builds_CreateBuildRequest" } } } }, "parameters": [{ "in": "path", "name": "account_id", "required": true, "schema": { "description": "Account identifier.", "type": "string", "example": "account-123", "x-ref": "#/components/schemas/builds_account_id" }, "x-ref": "#/components/parameters/builds_AccountId", "index$": 0 }, { "in": "path", "name": "trigger_uuid", "required": true, "schema": { "description": "Trigger UUID.", "type": "string", "format": "uuid", "x-ref": "#/components/schemas/builds_trigger_uuid" }, "x-ref": "#/components/parameters/builds_TriggerUuid", "index$": 1 }] }, "POST /accounts/{account_id}/builds/triggers": { "protocol": "http", "requestBody": { "required": true, "content": { "application/json": { "schema": { "type": "object", "properties": { "branch_excludes": { "description": "Branch patterns that must not start builds.", "type": "array", "items": { "type": "string" }, "example": [], "x-ref": "#/components/schemas/builds_branch_excludes", "key$": "branch_excludes" }, "branch_includes": { "description": "Branch patterns that can start builds.", "type": "array", "items": { "type": "string" }, "example": ["main"], "x-ref": "#/components/schemas/builds_branch_includes", "key$": "branch_includes" }, "build_caching_enabled": { "description": "Whether builds reuse cached dependencies and build artifacts.", "type": "boolean", "example": false, "default": false, "x-ref": "#/components/schemas/builds_build_caching_enabled", "key$": "build_caching_enabled" }, "build_command": { "description": "Command to build the Worker.", "type": "string", "example": "npm run build", "x-ref": "#/components/schemas/builds_build_command", "key$": "build_command" }, "build_token_uuid": { "description": "UUID of the build token used when deploying the Worker.", "type": "string", "format": "uuid", "x-ref": "#/components/schemas/builds_build_token_uuid", "key$": "build_token_uuid" }, "deploy_command": { "description": "Command to deploy the Worker.", "type": "string", "example": "npx wrangler deploy", "x-ref": "#/components/schemas/builds_deploy_command", "key$": "deploy_command" }, "external_script_id": { "description": "System-generated tag of the Worker. This is not the Worker name.", "type": "string", "example": "dd7160bb9cef458093557736f4b9e75b", "x-ref": "#/components/schemas/builds_external_script_id", "key$": "external_script_id" }, "path_excludes": { "description": "Path patterns that must not start builds.", "type": "array", "items": { "type": "string" }, "example": ["*.md"], "x-ref": "#/components/schemas/builds_path_excludes", "key$": "path_excludes" }, "path_includes": { "description": "Path patterns that can start builds.", "type": "array", "items": { "type": "string" }, "example": ["*"], "default": ["*"], "x-ref": "#/components/schemas/builds_path_includes", "key$": "path_includes" }, "repo_connection_uuid": { "description": "Repository connection UUID.", "type": "string", "format": "uuid", "x-ref": "#/components/schemas/builds_repo_connection_uuid", "key$": "repo_connection_uuid" }, "root_directory": { "description": "Repository directory in which build and deploy commands run.", "type": "string", "example": "/", "x-ref": "#/components/schemas/builds_root_directory", "key$": "root_directory" }, "trigger_name": { "description": "Human-readable name of the build trigger.", "type": "string", "example": "Production Deploy", "x-ref": "#/components/schemas/builds_trigger_name", "key$": "trigger_name" } }, "required": ["external_script_id", "build_token_uuid", "trigger_name", "build_command", "deploy_command", "root_directory", "branch_includes", "branch_excludes", "path_includes", "path_excludes", "repo_connection_uuid"], "x-ref": "#/components/schemas/builds_CreateTriggerRequest", "index$": 1 } } } }, "parameters": [{ "in": "path", "name": "account_id", "required": true, "schema": { "description": "Account identifier.", "type": "string", "example": "account-123", "x-ref": "#/components/schemas/builds_account_id" }, "x-ref": "#/components/parameters/builds_AccountId", "index$": 0 }] }, "DELETE /accounts/{account_id}/builds/triggers/{trigger_uuid}": { "protocol": "http", "parameters": [{ "in": "path", "name": "account_id", "required": true, "schema": { "description": "Account identifier.", "type": "string", "example": "account-123", "x-ref": "#/components/schemas/builds_account_id" }, "x-ref": "#/components/parameters/builds_AccountId", "index$": 0 }, { "in": "path", "name": "trigger_uuid", "required": true, "schema": { "description": "Trigger UUID.", "type": "string", "format": "uuid", "x-ref": "#/components/schemas/builds_trigger_uuid" }, "x-ref": "#/components/parameters/builds_TriggerUuid", "index$": 1 }] }, "PATCH /accounts/{account_id}/builds/triggers/{trigger_uuid}": { "protocol": "http", "requestBody": { "required": true, "content": { "application/json": { "schema": { "type": "object", "properties": { "branch_excludes": { "description": "Branch patterns that must not start builds.", "type": "array", "items": { "type": "string" }, "example": [], "x-ref": "#/components/schemas/builds_branch_excludes", "key$": "branch_excludes" }, "branch_includes": { "description": "Branch patterns that can start builds.", "type": "array", "items": { "type": "string" }, "example": ["main"], "x-ref": "#/components/schemas/builds_branch_includes", "key$": "branch_includes" }, "build_caching_enabled": { "description": "Whether builds reuse cached dependencies and build artifacts.", "type": "boolean", "example": false, "default": false, "x-ref": "#/components/schemas/builds_build_caching_enabled", "key$": "build_caching_enabled" }, "build_command": { "description": "Command to build the Worker.", "type": "string", "example": "npm run build", "x-ref": "#/components/schemas/builds_build_command", "key$": "build_command" }, "build_token_uuid": { "description": "UUID of the build token used when deploying the Worker.", "type": "string", "format": "uuid", "x-ref": "#/components/schemas/builds_build_token_uuid", "key$": "build_token_uuid" }, "deploy_command": { "description": "Command to deploy the Worker.", "type": "string", "example": "npx wrangler deploy", "x-ref": "#/components/schemas/builds_deploy_command", "key$": "deploy_command" }, "path_excludes": { "description": "Path patterns that must not start builds.", "type": "array", "items": { "type": "string" }, "example": ["*.md"], "x-ref": "#/components/schemas/builds_path_excludes", "key$": "path_excludes" }, "path_includes": { "description": "Path patterns that can start builds.", "type": "array", "items": { "type": "string" }, "example": ["*"], "default": ["*"], "x-ref": "#/components/schemas/builds_path_includes", "key$": "path_includes" }, "root_directory": { "description": "Repository directory in which build and deploy commands run.", "type": "string", "example": "/", "x-ref": "#/components/schemas/builds_root_directory", "key$": "root_directory" }, "trigger_name": { "description": "Human-readable name of the build trigger.", "type": "string", "example": "Production Deploy", "x-ref": "#/components/schemas/builds_trigger_name", "key$": "trigger_name" } }, "x-ref": "#/components/schemas/builds_UpdateTriggerRequest", "index$": 1 } } } }, "parameters": [{ "in": "path", "name": "account_id", "required": true, "schema": { "description": "Account identifier.", "type": "string", "example": "account-123", "x-ref": "#/components/schemas/builds_account_id" }, "x-ref": "#/components/parameters/builds_AccountId", "index$": 0 }, { "in": "path", "name": "trigger_uuid", "required": true, "schema": { "description": "Trigger UUID.", "type": "string", "format": "uuid", "x-ref": "#/components/schemas/builds_trigger_uuid" }, "x-ref": "#/components/parameters/builds_TriggerUuid", "index$": 1 }] } });
        }
        const client = setup.client;
        const struct = setup.struct;
        const isempty = struct.isempty;
        const select = struct.select;
        // CREATE
        const trigger_ref01_ent = client.Trigger();
        let trigger_ref01_data = setup.data.new.trigger['trigger_ref01'];
        trigger_ref01_data['account_id'] = setup.idmap['account01'];
        trigger_ref01_data = (await trigger_ref01_ent.create(trigger_ref01_data)).data();
        (0, node_assert_1.default)(null != trigger_ref01_data.id);
        // UPDATE
        const trigger_ref01_data_up0 = {};
        trigger_ref01_data_up0.id = trigger_ref01_data.id;
        trigger_ref01_data_up0['account_id'] = setup.idmap['account_id'];
        const trigger_ref01_markdef_up0 = { name: 'build_command', value: 'Mark01-trigger_ref01_' + setup.now };
        trigger_ref01_data_up0[trigger_ref01_markdef_up0.name] = trigger_ref01_markdef_up0.value;
        const trigger_ref01_resdata_up0 = (await trigger_ref01_ent.update(trigger_ref01_data_up0)).data();
        (0, node_assert_1.default)(trigger_ref01_resdata_up0.id === trigger_ref01_data_up0.id);
        (0, node_assert_1.default)(trigger_ref01_resdata_up0[trigger_ref01_markdef_up0.name] === trigger_ref01_markdef_up0.value);
        // REMOVE
        const trigger_ref01_match_rm0 = { id: trigger_ref01_data.id };
        await trigger_ref01_ent.remove(trigger_ref01_match_rm0);
    });
});
function basicSetup(extra) {
    // TODO: fix test def options
    const options = {}; // null
    // TODO: needs test utility to resolve path
    const entityDataFile = node_path_1.default.resolve(__dirname, '../../../../.sdk/test/entity/trigger/TriggerTestData.json');
    // TODO: file ready util needed?
    const entityDataSource = Fs.readFileSync(entityDataFile).toString('utf8');
    // TODO: need a xlang JSON parse utility in voxgig/struct with better error msgs
    const entityData = JSON.parse(entityDataSource);
    options.entity = entityData.existing;
    let client = __1.CloudflareWorkersSDK.test(options, extra);
    const struct = client.utility().struct;
    const merge = struct.merge;
    const transform = struct.transform;
    let idmap = transform(['trigger01', 'trigger02', 'trigger03', 'account01', 'account02', 'account03'], {
        '`$PACK`': ['', {
                '`$KEY`': '`$COPY`',
                '`$VAL`': ['`$FORMAT`', 'upper', '`$COPY`']
            }]
    });
    const env = (0, utility_1.envOverride)({
        'CLOUDFLARE_WORKERS_TEST_TRIGGER_ENTID': idmap,
        'CLOUDFLARE_WORKERS_TEST_LIVE': 'FALSE',
        'CLOUDFLARE_WORKERS_TEST_EXPLAIN': 'FALSE',
        'CLOUDFLARE_WORKERS_APIKEY': '',
    });
    idmap = env['CLOUDFLARE_WORKERS_TEST_TRIGGER_ENTID'];
    const live = 'TRUE' === env.CLOUDFLARE_WORKERS_TEST_LIVE;
    const transport = (0, live_runner_1.createLiveTransport)();
    if (live) {
        const rawIds = process.env['CLOUDFLARE_WORKERS_TEST_TRIGGER_ENTID'];
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
//# sourceMappingURL=TriggerEntity.test.js.map