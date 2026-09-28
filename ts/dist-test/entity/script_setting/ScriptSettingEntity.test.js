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
(0, node_test_1.describe)('ScriptSettingEntity', async () => {
    // Per-test live pacing. Delay is read from sdk-test-control.json's
    // `test.live.delayMs`; only sleeps when CLOUDFLARE_WORKERS_TEST_LIVE=TRUE.
    (0, node_test_1.afterEach)((0, utility_1.liveDelay)('CLOUDFLARE_WORKERS_TEST_LIVE'));
    (0, node_test_1.test)('instance', async () => {
        const testsdk = __1.CloudflareWorkersSDK.test();
        const ent = testsdk.ScriptSetting();
        (0, node_assert_1.default)(null != ent);
    });
    (0, node_test_1.test)('basic', async (t) => {
        const live = 'TRUE' === process.env.CLOUDFLARE_WORKERS_TEST_LIVE;
        for (const op of ['list', 'update']) {
            if (!live && (0, utility_1.maybeSkipControl)(t, 'entityOp', 'script_setting.' + op, live))
                return;
        }
        const setup = basicSetup();
        if (setup.live) {
            return (0, live_entity_1.runLiveEntity)(setup, { "active": true, "alias": { "field": {} }, "fields": { "errors": { "a": true, "h": "Errors", "n": "errors", "r": true, "t": "`$ARRAY`", "key$": "errors", "index$": 0 }, "logpush": { "a": true, "h": "Logpush", "n": "logpush", "r": false, "sh": "Whether Logpush is turned on for the Worker.", "t": "`$BOOLEAN`", "key$": "logpush", "index$": 1 }, "messages": { "a": true, "h": "Messages", "n": "messages", "r": true, "t": "`$ARRAY`", "key$": "messages", "index$": 2 }, "observability": { "a": true, "h": "Observability", "n": "observability", "r": false, "t": "`$ANY`", "key$": "observability", "index$": 3 }, "result": { "a": true, "h": "Result", "n": "result", "r": true, "t": "`$OBJECT`", "key$": "result", "index$": 4 }, "success": { "a": true, "h": "Success", "n": "success", "r": true, "sh": "Whether the API call was successful.", "t": "`$BOOLEAN`", "key$": "success", "index$": 5 }, "tags": { "a": true, "h": "Tags", "n": "tags", "r": false, "t": "`$ANY`", "key$": "tags", "index$": 6 }, "tail_consumers": { "a": true, "h": "Tail Consumers", "n": "tail_consumers", "r": false, "sh": "List of Workers that will consume logs from the attached Worker.", "t": "`$ARRAY`", "key$": "tail_consumers", "index$": 7 } }, "name": "script_setting", "op": { "list": { "input": "data", "name": "list", "points": [{ "a": true, "co": { "id": "GET /accounts/{account_id}/workers/scripts/{script_name}/script-settings", "source": "openapi3", "version": 2 }, "g": { "params": [{ "a": true, "ex": "023e105f4ecef8ad9ca31a8372d0c353", "k": "param", "n": "account_id", "or": "account_id", "r": true, "t": "`$STRING`", "index$": 0 }, { "a": true, "ex": "this-is_my_script-01", "k": "param", "n": "script_name", "or": "script_name", "r": true, "t": "`$STRING`", "index$": 1 }] }, "k": "http", "m": "GET", "o": "/accounts/{account_id}/workers/scripts/{script_name}/script-settings", "q": { "exist": ["account_id", "script_name"] }, "r": {}, "s": [{ "lit": "accounts" }, { "var": "account_id" }, { "lit": "workers" }, { "lit": "scripts" }, { "var": "script_name" }, { "lit": "script-settings" }], "t": { "req": "`reqdata`", "res": "`body`" }, "index$": 0 }], "key$": "list" }, "update": { "input": "data", "name": "update", "points": [{ "a": true, "co": { "id": "PATCH /accounts/{account_id}/workers/scripts/{script_name}/script-settings", "source": "openapi3", "version": 2 }, "g": { "params": [{ "a": true, "ex": "023e105f4ecef8ad9ca31a8372d0c353", "k": "param", "n": "account_id", "or": "account_id", "r": true, "t": "`$STRING`", "index$": 0 }, { "a": true, "ex": "this-is_my_script-01", "k": "param", "n": "script_name", "or": "script_name", "r": true, "t": "`$STRING`", "index$": 1 }] }, "k": "http", "m": "PATCH", "o": "/accounts/{account_id}/workers/scripts/{script_name}/script-settings", "q": { "exist": ["account_id", "script_name"] }, "r": {}, "s": [{ "lit": "accounts" }, { "var": "account_id" }, { "lit": "workers" }, { "lit": "scripts" }, { "var": "script_name" }, { "lit": "script-settings" }], "t": { "req": "`reqdata`", "res": "`body`" }, "index$": 0 }], "key$": "update" } }, "relations": { "ancestors": [["$.main.kit.entity.account", "$.main.kit.entity.script"]] }, "key$": "script_setting", "name__orig": "script_setting", "Name": "ScriptSetting", "name_": "script_setting", "name-": "script-setting", "NAME": "SCRIPT_SETTING", "index$": 30 }, { "active": true, "entity": "script_setting", "key$": "BasicScriptSettingFlow", "kind": "basic", "name": "BasicScriptSettingFlow", "param": {}, "step": [{ "a": true, "d": {}, "i": {}, "m": { "account_id": "account01", "script_name": "script_name01" }, "o": "list", "s": [], "v": [{ "apply": "ItemExists", "def": { "ref": "script_setting_ref01" } }], "index$": 0 }, { "a": true, "d": { "account_id": "account01" }, "i": { "ref": "script_setting_ref01", "srcdatavar": "script_setting_ref01_data", "suffix": "_up0" }, "m": {}, "o": "update", "s": [{ "apply": "TextFieldMark", "def": { "mark": "Mark01-script_setting_ref01" } }], "v": [], "index$": 1 }] }, 'ScriptSetting', { "GET /accounts/{account_id}/workers/scripts/{script_name}/script-settings": { "protocol": "http", "parameters": [{ "name": "account_id", "in": "path", "required": true, "schema": { "description": "Identifier.", "type": "string", "example": "023e105f4ecef8ad9ca31a8372d0c353", "maxLength": 32, "x-auditable": true, "x-ref": "#/components/schemas/workers_identifier" }, "index$": 0 }, { "name": "script_name", "in": "path", "required": true, "schema": { "description": "Name of the script.", "type": "string", "example": "this-is_my_script-01", "pattern": "^[a-z0-9_][a-z0-9-_]*$", "x-auditable": true, "x-ref": "#/components/schemas/workers_script_name" }, "index$": 1 }] }, "PATCH /accounts/{account_id}/workers/scripts/{script_name}/script-settings": { "protocol": "http", "requestBody": { "required": true, "content": { "application/json": { "schema": { "type": "object", "properties": { "logpush": { "default": false, "description": "Whether Logpush is turned on for the Worker.", "example": false, "type": "boolean", "x-auditable": true, "x-ref": "#/components/schemas/workers_logpush", "key$": "logpush" }, "observability": { "allOf": [{ "description": "Observability settings for the Worker.", "properties": { "enabled": {}, "head_sampling_rate": {}, "issues": {}, "logs": {}, "redact_query_string": {}, "traces": {} }, "required": ["enabled"], "type": "object", "x-ref": "#/components/schemas/workers_observability-2" }, { "nullable": true, "type": "object", "x-auditable": true }], "key$": "observability" }, "tags": { "allOf": [{ "description": "Tags associated with the Worker.", "example": ["my-team", "my-public-api"], "items": { "example": "my-tag", "maxLength": 1024, "pattern": "^[^,&]*$", "type": "string", "x-ref": "#/components/schemas/workers_tag" }, "maxItems": 10, "nullable": true, "type": "array", "x-auditable": true, "x-ref": "#/components/schemas/workers_tags", "x-stainless-collection-type": "set" }, { "items": { "example": "my-tag", "maxLength": 1024, "pattern": "^[^,&]*$", "type": "string", "x-ref": "#/components/schemas/workers_tag" }, "nullable": true, "type": "array", "x-auditable": true }], "key$": "tags" }, "tail_consumers": { "description": "List of Workers that will consume logs from the attached Worker.", "items": { "description": "A reference to a script that will consume logs from the attached Worker.", "properties": { "environment": { "description": "Optional environment if the Worker utilizes one.", "example": "production", "type": "string", "x-auditable": true }, "namespace": { "description": "Optional dispatch namespace the script belongs to.", "example": "my-namespace", "type": "string", "x-auditable": true }, "service": { "description": "Name of Worker that is to be the consumer.", "example": "my-log-consumer", "type": "string", "x-auditable": true } }, "required": ["service"], "type": "object", "x-ref": "#/components/schemas/workers_tail_consumers_script" }, "nullable": true, "type": "array", "x-stainless-collection-type": "set", "key$": "tail_consumers" } }, "x-ref": "#/components/schemas/workers_script-settings-item", "index$": 1 } } } }, "parameters": [{ "name": "account_id", "in": "path", "required": true, "schema": { "description": "Identifier.", "type": "string", "example": "023e105f4ecef8ad9ca31a8372d0c353", "maxLength": 32, "x-auditable": true, "x-ref": "#/components/schemas/workers_identifier" }, "index$": 0 }, { "name": "script_name", "in": "path", "required": true, "schema": { "description": "Name of the script.", "type": "string", "example": "this-is_my_script-01", "pattern": "^[a-z0-9_][a-z0-9-_]*$", "x-auditable": true, "x-ref": "#/components/schemas/workers_script_name" }, "index$": 1 }] } });
        }
        const client = setup.client;
        const struct = setup.struct;
        const isempty = struct.isempty;
        const select = struct.select;
        let script_setting_ref01_data = Object.values(setup.data.existing.script_setting)[0];
        // LIST
        const script_setting_ref01_ent = client.ScriptSetting();
        const script_setting_ref01_match = {};
        script_setting_ref01_match['account_id'] = setup.idmap['account01'];
        script_setting_ref01_match['script_name'] = setup.idmap['script_name01'];
        const script_setting_ref01_list = (await script_setting_ref01_ent.list(script_setting_ref01_match)).map((e) => e.data());
        // UPDATE
        const script_setting_ref01_data_up0 = {};
        script_setting_ref01_data_up0['account_id'] = setup.idmap['account_id'];
        const script_setting_ref01_resdata_up0 = (await script_setting_ref01_ent.update(script_setting_ref01_data_up0)).data();
        (0, node_assert_1.default)(null != script_setting_ref01_resdata_up0);
    });
});
function basicSetup(extra) {
    // TODO: fix test def options
    const options = {}; // null
    // TODO: needs test utility to resolve path
    const entityDataFile = node_path_1.default.resolve(__dirname, '../../../../.sdk/test/entity/script_setting/ScriptSettingTestData.json');
    // TODO: file ready util needed?
    const entityDataSource = Fs.readFileSync(entityDataFile).toString('utf8');
    // TODO: need a xlang JSON parse utility in voxgig/struct with better error msgs
    const entityData = JSON.parse(entityDataSource);
    options.entity = entityData.existing;
    let client = __1.CloudflareWorkersSDK.test(options, extra);
    const struct = client.utility().struct;
    const merge = struct.merge;
    const transform = struct.transform;
    let idmap = transform(['script_setting01', 'script_setting02', 'script_setting03', 'account01', 'account02', 'account03', 'script01', 'script02', 'script03', 'script_name01'], {
        '`$PACK`': ['', {
                '`$KEY`': '`$COPY`',
                '`$VAL`': ['`$FORMAT`', 'upper', '`$COPY`']
            }]
    });
    const env = (0, utility_1.envOverride)({
        'CLOUDFLARE_WORKERS_TEST_SCRIPT_SETTING_ENTID': idmap,
        'CLOUDFLARE_WORKERS_TEST_LIVE': 'FALSE',
        'CLOUDFLARE_WORKERS_TEST_EXPLAIN': 'FALSE',
        'CLOUDFLARE_WORKERS_APIKEY': '',
    });
    idmap = env['CLOUDFLARE_WORKERS_TEST_SCRIPT_SETTING_ENTID'];
    const live = 'TRUE' === env.CLOUDFLARE_WORKERS_TEST_LIVE;
    const transport = (0, live_runner_1.createLiveTransport)();
    if (live) {
        const rawIds = process.env['CLOUDFLARE_WORKERS_TEST_SCRIPT_SETTING_ENTID'];
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
//# sourceMappingURL=ScriptSettingEntity.test.js.map