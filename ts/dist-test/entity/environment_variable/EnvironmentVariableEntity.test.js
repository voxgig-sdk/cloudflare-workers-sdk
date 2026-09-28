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
(0, node_test_1.describe)('EnvironmentVariableEntity', async () => {
    // Per-test live pacing. Delay is read from sdk-test-control.json's
    // `test.live.delayMs`; only sleeps when CLOUDFLARE_WORKERS_TEST_LIVE=TRUE.
    (0, node_test_1.afterEach)((0, utility_1.liveDelay)('CLOUDFLARE_WORKERS_TEST_LIVE'));
    (0, node_test_1.test)('instance', async () => {
        const testsdk = __1.CloudflareWorkersSDK.test();
        const ent = testsdk.EnvironmentVariable();
        (0, node_assert_1.default)(null != ent);
    });
    (0, node_test_1.test)('basic', async (t) => {
        const live = 'TRUE' === process.env.CLOUDFLARE_WORKERS_TEST_LIVE;
        for (const op of ['list', 'update']) {
            if (!live && (0, utility_1.maybeSkipControl)(t, 'entityOp', 'environment_variable.' + op, live))
                return;
        }
        const setup = basicSetup();
        if (setup.live) {
            return (0, live_entity_1.runLiveEntity)(setup, { "active": true, "alias": { "field": {} }, "fields": { "errors": { "a": true, "h": "Errors", "n": "errors", "r": true, "t": "`$ARRAY`", "key$": "errors", "index$": 0 }, "messages": { "a": true, "h": "Messages", "n": "messages", "r": true, "t": "`$ARRAY`", "key$": "messages", "index$": 1 }, "result": { "a": true, "h": "Result", "n": "result", "op": { "list": { "req": false, "type": "`$OBJECT`" } }, "r": true, "t": "`$OBJECT`", "union": { "branches": 2, "count": 1, "depth": 4 }, "key$": "result", "index$": 2 }, "result_info": { "a": true, "h": "Result Info", "n": "result_info", "r": false, "t": "`$OBJECT`", "key$": "result_info", "index$": 3 }, "success": { "a": true, "h": "Success", "n": "success", "r": true, "t": "`$BOOLEAN`", "key$": "success", "index$": 4 } }, "name": "environment_variable", "op": { "list": { "input": "data", "name": "list", "points": [{ "a": true, "co": { "id": "GET /accounts/{account_id}/builds/triggers/{trigger_uuid}/environment_variables", "source": "openapi3", "version": 2 }, "g": { "params": [{ "a": true, "ex": "account-123", "k": "param", "n": "account_id", "or": "account_id", "r": true, "t": "`$STRING`", "index$": 0 }, { "a": true, "k": "param", "n": "trigger_id", "or": "trigger_uuid", "r": true, "t": "`$STRING`", "index$": 1 }] }, "k": "http", "m": "GET", "o": "/accounts/{account_id}/builds/triggers/{trigger_uuid}/environment_variables", "q": { "exist": ["account_id", "trigger_id"] }, "r": { "param": { "trigger_uuid": "trigger_id" } }, "s": [{ "lit": "accounts" }, { "var": "account_id" }, { "lit": "builds" }, { "lit": "triggers" }, { "var": "trigger_id" }, { "lit": "environment_variables" }], "t": { "req": "`reqdata`", "res": "`body`" }, "index$": 0 }], "key$": "list" }, "update": { "input": "data", "name": "update", "points": [{ "a": true, "co": { "id": "PATCH /accounts/{account_id}/builds/triggers/{trigger_uuid}/environment_variables", "source": "openapi3", "version": 2 }, "g": { "params": [{ "a": true, "ex": "account-123", "k": "param", "n": "account_id", "or": "account_id", "r": true, "t": "`$STRING`", "index$": 0 }, { "a": true, "k": "param", "n": "trigger_id", "or": "trigger_uuid", "r": true, "t": "`$STRING`", "index$": 1 }] }, "k": "http", "m": "PATCH", "o": "/accounts/{account_id}/builds/triggers/{trigger_uuid}/environment_variables", "q": { "exist": ["account_id", "trigger_id"] }, "r": { "param": { "trigger_uuid": "trigger_id" } }, "s": [{ "lit": "accounts" }, { "var": "account_id" }, { "lit": "builds" }, { "lit": "triggers" }, { "var": "trigger_id" }, { "lit": "environment_variables" }], "t": { "req": "`reqdata`", "res": "`body`" }, "index$": 0 }], "key$": "update" } }, "relations": { "ancestors": [["$.main.kit.entity.account", "$.main.kit.entity.trigger"]] }, "key$": "environment_variable", "name__orig": "environment_variable", "Name": "EnvironmentVariable", "name_": "environment_variable", "name-": "environment-variable", "NAME": "ENVIRONMENT_VARIABLE", "index$": 14 }, { "active": true, "entity": "environment_variable", "key$": "BasicEnvironmentVariableFlow", "kind": "basic", "name": "BasicEnvironmentVariableFlow", "param": {}, "step": [{ "a": true, "d": {}, "i": {}, "m": { "account_id": "account01", "trigger_id": "trigger01" }, "o": "list", "s": [], "v": [{ "apply": "ItemExists", "def": { "ref": "environment_variable_ref01" } }], "index$": 0 }, { "a": true, "d": { "account_id": "account01" }, "i": { "ref": "environment_variable_ref01", "srcdatavar": "environment_variable_ref01_data", "suffix": "_up0" }, "m": {}, "o": "update", "s": [{ "apply": "TextFieldMark", "def": { "mark": "Mark01-environment_variable_ref01" } }], "v": [], "index$": 1 }] }, 'EnvironmentVariable', { "GET /accounts/{account_id}/builds/triggers/{trigger_uuid}/environment_variables": { "protocol": "http", "parameters": [{ "in": "path", "name": "account_id", "required": true, "schema": { "description": "Account identifier.", "type": "string", "example": "account-123", "x-ref": "#/components/schemas/builds_account_id" }, "x-ref": "#/components/parameters/builds_AccountId", "index$": 0 }, { "in": "path", "name": "trigger_uuid", "required": true, "schema": { "description": "Trigger UUID.", "type": "string", "format": "uuid", "x-ref": "#/components/schemas/builds_trigger_uuid" }, "x-ref": "#/components/parameters/builds_TriggerUuid", "index$": 1 }] }, "PATCH /accounts/{account_id}/builds/triggers/{trigger_uuid}/environment_variables": { "protocol": "http", "requestBody": { "required": true, "content": { "application/json": { "schema": { "description": "Map of environment-variable names to build-time values. Names must begin with a letter or underscore and contain only letters, numbers, and underscores.", "type": "object", "example": { "API_KEY": { "is_secret": true, "value": "secret-key" }, "NODE_ENV": { "is_secret": false, "value": "production" } }, "additionalProperties": { "properties": { "is_secret": { "description": "Whether to hide the value after it is saved. Secret values remain available to builds but appear as `null` when you list variables; non-secret values remain visible.", "type": "boolean", "example": false, "x-ref": "#/components/schemas/builds_is_secret" }, "value": { "description": "Value made available to the build. Maximum length is 5000 characters.", "type": "string", "example": "production", "maxLength": 5000 } }, "required": ["is_secret", "value"], "type": "object" }, "x-ref": "#/components/schemas/builds_EnvironmentVariablesRequest", "index$": 1 } } } }, "parameters": [{ "in": "path", "name": "account_id", "required": true, "schema": { "description": "Account identifier.", "type": "string", "example": "account-123", "x-ref": "#/components/schemas/builds_account_id" }, "x-ref": "#/components/parameters/builds_AccountId", "index$": 0 }, { "in": "path", "name": "trigger_uuid", "required": true, "schema": { "description": "Trigger UUID.", "type": "string", "format": "uuid", "x-ref": "#/components/schemas/builds_trigger_uuid" }, "x-ref": "#/components/parameters/builds_TriggerUuid", "index$": 1 }] } });
        }
        const client = setup.client;
        const struct = setup.struct;
        const isempty = struct.isempty;
        const select = struct.select;
        let environment_variable_ref01_data = Object.values(setup.data.existing.environment_variable)[0];
        // LIST
        const environment_variable_ref01_ent = client.EnvironmentVariable();
        const environment_variable_ref01_match = {};
        environment_variable_ref01_match['account_id'] = setup.idmap['account01'];
        environment_variable_ref01_match['trigger_id'] = setup.idmap['trigger01'];
        const environment_variable_ref01_list = (await environment_variable_ref01_ent.list(environment_variable_ref01_match)).map((e) => e.data());
        // UPDATE
        const environment_variable_ref01_data_up0 = {};
        environment_variable_ref01_data_up0['account_id'] = setup.idmap['account_id'];
        const environment_variable_ref01_resdata_up0 = (await environment_variable_ref01_ent.update(environment_variable_ref01_data_up0)).data();
        (0, node_assert_1.default)(null != environment_variable_ref01_resdata_up0);
    });
});
function basicSetup(extra) {
    // TODO: fix test def options
    const options = {}; // null
    // TODO: needs test utility to resolve path
    const entityDataFile = node_path_1.default.resolve(__dirname, '../../../../.sdk/test/entity/environment_variable/EnvironmentVariableTestData.json');
    // TODO: file ready util needed?
    const entityDataSource = Fs.readFileSync(entityDataFile).toString('utf8');
    // TODO: need a xlang JSON parse utility in voxgig/struct with better error msgs
    const entityData = JSON.parse(entityDataSource);
    options.entity = entityData.existing;
    let client = __1.CloudflareWorkersSDK.test(options, extra);
    const struct = client.utility().struct;
    const merge = struct.merge;
    const transform = struct.transform;
    let idmap = transform(['environment_variable01', 'environment_variable02', 'environment_variable03', 'account01', 'account02', 'account03', 'trigger01', 'trigger02', 'trigger03'], {
        '`$PACK`': ['', {
                '`$KEY`': '`$COPY`',
                '`$VAL`': ['`$FORMAT`', 'upper', '`$COPY`']
            }]
    });
    const env = (0, utility_1.envOverride)({
        'CLOUDFLARE_WORKERS_TEST_ENVIRONMENT_VARIABLE_ENTID': idmap,
        'CLOUDFLARE_WORKERS_TEST_LIVE': 'FALSE',
        'CLOUDFLARE_WORKERS_TEST_EXPLAIN': 'FALSE',
        'CLOUDFLARE_WORKERS_APIKEY': '',
    });
    idmap = env['CLOUDFLARE_WORKERS_TEST_ENVIRONMENT_VARIABLE_ENTID'];
    const live = 'TRUE' === env.CLOUDFLARE_WORKERS_TEST_LIVE;
    const transport = (0, live_runner_1.createLiveTransport)();
    if (live) {
        const rawIds = process.env['CLOUDFLARE_WORKERS_TEST_ENVIRONMENT_VARIABLE_ENTID'];
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
//# sourceMappingURL=EnvironmentVariableEntity.test.js.map