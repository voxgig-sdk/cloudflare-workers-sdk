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
(0, node_test_1.describe)('GitHubIntegrationEntity', async () => {
    // Per-test live pacing. Delay is read from sdk-test-control.json's
    // `test.live.delayMs`; only sleeps when CLOUDFLARE_WORKERS_TEST_LIVE=TRUE.
    (0, node_test_1.afterEach)((0, utility_1.liveDelay)('CLOUDFLARE_WORKERS_TEST_LIVE'));
    (0, node_test_1.test)('instance', async () => {
        const testsdk = __1.CloudflareWorkersSDK.test();
        const ent = testsdk.GitHubIntegration();
        (0, node_assert_1.default)(null != ent);
    });
    (0, node_test_1.test)('basic', async (t) => {
        const live = 'TRUE' === process.env.CLOUDFLARE_WORKERS_TEST_LIVE;
        for (const op of ['list']) {
            if (!live && (0, utility_1.maybeSkipControl)(t, 'entityOp', 'git_hub_integration.' + op, live))
                return;
        }
        const setup = basicSetup();
        if (setup.live) {
            return (0, live_entity_1.runLiveEntity)(setup, { "active": true, "alias": { "field": {} }, "fields": { "errors": { "a": true, "h": "Errors", "n": "errors", "r": true, "t": "`$ARRAY`", "key$": "errors", "index$": 0 }, "messages": { "a": true, "h": "Messages", "n": "messages", "r": true, "t": "`$ARRAY`", "key$": "messages", "index$": 1 }, "result": { "a": true, "h": "Result", "n": "result", "op": { "list": { "req": false, "type": "`$OBJECT`" } }, "r": true, "t": "`$OBJECT`", "union": { "branches": 2, "count": 1, "depth": 4 }, "key$": "result", "index$": 2 }, "result_info": { "a": true, "h": "Result Info", "n": "result_info", "r": false, "t": "`$OBJECT`", "key$": "result_info", "index$": 3 }, "success": { "a": true, "h": "Success", "n": "success", "r": true, "t": "`$BOOLEAN`", "key$": "success", "index$": 4 } }, "name": "git_hub_integration", "op": { "list": { "input": "data", "name": "list", "points": [{ "a": true, "co": { "id": "GET /accounts/{account_id}/builds/repos/{provider_type}/{provider_account_id}/{repo_id}/config_autofill", "source": "openapi3", "version": 2 }, "g": { "params": [{ "a": true, "ex": "account-123", "k": "param", "n": "account_id", "or": "account_id", "r": true, "t": "`$STRING`", "index$": 0 }, { "a": true, "ex": "cloudflare", "k": "param", "n": "provider_account_id", "or": "provider_account_id", "r": true, "t": "`$STRING`", "index$": 1 }, { "a": true, "ex": "github", "k": "param", "n": "provider_type", "or": "provider_type", "r": true, "t": "`$STRING`", "index$": 2 }, { "a": true, "ex": "workers-sdk", "k": "param", "n": "repo_id", "or": "repo_id", "r": true, "t": "`$STRING`", "index$": 3 }], "query": [{ "a": true, "ex": "main", "k": "query", "n": "branch", "or": "branch", "r": true, "t": "`$STRING`", "index$": 0 }, { "a": true, "ex": "/", "k": "query", "n": "root_directory", "or": "root_directory", "r": false, "t": "`$STRING`", "index$": 1 }] }, "k": "http", "m": "GET", "o": "/accounts/{account_id}/builds/repos/{provider_type}/{provider_account_id}/{repo_id}/config_autofill", "q": { "exist": ["account_id", "branch", "provider_account_id", "provider_type", "repo_id", "root_directory"] }, "r": {}, "s": [{ "lit": "accounts" }, { "var": "account_id" }, { "lit": "builds" }, { "lit": "repos" }, { "var": "provider_type" }, { "var": "provider_account_id" }, { "var": "repo_id" }, { "lit": "config_autofill" }], "t": { "req": "`reqdata`", "res": "`body`" }, "index$": 0 }], "key$": "list" } }, "relations": { "ancestors": [["$.main.kit.entity.account"]] }, "key$": "git_hub_integration", "name__orig": "git_hub_integration", "Name": "GitHubIntegration", "name_": "git_hub_integration", "name-": "git-hub-integration", "NAME": "GIT_HUB_INTEGRATION", "index$": 15 }, { "active": true, "entity": "git_hub_integration", "key$": "BasicGitHubIntegrationFlow", "kind": "basic", "name": "BasicGitHubIntegrationFlow", "param": {}, "step": [{ "a": true, "d": {}, "i": {}, "m": { "account_id": "account01", "provider_account_id": "provider_account01", "provider_type": "provider_type01", "repo_id": "repo01" }, "o": "list", "s": [], "v": [{ "apply": "ItemExists", "def": { "ref": "git_hub_integration_ref01" } }], "index$": 0 }] }, 'GitHubIntegration', { "GET /accounts/{account_id}/builds/repos/{provider_type}/{provider_account_id}/{repo_id}/config_autofill": { "protocol": "http", "parameters": [{ "in": "path", "name": "account_id", "required": true, "schema": { "description": "Account identifier.", "type": "string", "example": "account-123", "x-ref": "#/components/schemas/builds_account_id" }, "x-ref": "#/components/parameters/builds_AccountId", "index$": 0 }, { "name": "provider_type", "in": "path", "description": "SCM provider type", "required": true, "schema": { "description": "Source control provider.", "type": "string", "example": "github", "enum": ["github", "gitlab", "gitlab_internal", "origin"], "x-ref": "#/components/schemas/builds_SCMProviderType" }, "index$": 1 }, { "name": "provider_account_id", "in": "path", "required": true, "schema": { "description": "Provider-specific identifier of the account or namespace that owns the repository.", "type": "string", "example": "cloudflare", "x-ref": "#/components/schemas/builds_provider_account_id" }, "index$": 2 }, { "name": "repo_id", "in": "path", "required": true, "schema": { "description": "Provider-specific repository identifier.", "type": "string", "example": "workers-sdk", "x-ref": "#/components/schemas/builds_repo_id" }, "index$": 3 }, { "name": "branch", "in": "query", "required": true, "schema": { "description": "Git branch name.", "type": "string", "example": "main", "x-ref": "#/components/schemas/builds_branch" }, "index$": 4 }, { "name": "root_directory", "in": "query", "schema": { "description": "Repository directory in which build and deploy commands run.", "type": "string", "example": "/", "x-ref": "#/components/schemas/builds_root_directory" }, "index$": 5 }] } });
        }
        const client = setup.client;
        const struct = setup.struct;
        const isempty = struct.isempty;
        const select = struct.select;
        let git_hub_integration_ref01_data = Object.values(setup.data.existing.git_hub_integration)[0];
        // LIST
        const git_hub_integration_ref01_ent = client.GitHubIntegration();
        const git_hub_integration_ref01_match = {};
        git_hub_integration_ref01_match['account_id'] = setup.idmap['account01'];
        git_hub_integration_ref01_match['provider_account_id'] = setup.idmap['provider_account01'];
        git_hub_integration_ref01_match['provider_type'] = setup.idmap['provider_type01'];
        git_hub_integration_ref01_match['repo_id'] = setup.idmap['repo01'];
        const git_hub_integration_ref01_list = (await git_hub_integration_ref01_ent.list(git_hub_integration_ref01_match)).map((e) => e.data());
    });
});
function basicSetup(extra) {
    // TODO: fix test def options
    const options = {}; // null
    // TODO: needs test utility to resolve path
    const entityDataFile = node_path_1.default.resolve(__dirname, '../../../../.sdk/test/entity/git_hub_integration/GitHubIntegrationTestData.json');
    // TODO: file ready util needed?
    const entityDataSource = Fs.readFileSync(entityDataFile).toString('utf8');
    // TODO: need a xlang JSON parse utility in voxgig/struct with better error msgs
    const entityData = JSON.parse(entityDataSource);
    options.entity = entityData.existing;
    let client = __1.CloudflareWorkersSDK.test(options, extra);
    const struct = client.utility().struct;
    const merge = struct.merge;
    const transform = struct.transform;
    let idmap = transform(['git_hub_integration01', 'git_hub_integration02', 'git_hub_integration03', 'account01', 'account02', 'account03', 'provider_account01', 'provider_type01', 'repo01'], {
        '`$PACK`': ['', {
                '`$KEY`': '`$COPY`',
                '`$VAL`': ['`$FORMAT`', 'upper', '`$COPY`']
            }]
    });
    const env = (0, utility_1.envOverride)({
        'CLOUDFLARE_WORKERS_TEST_GIT_HUB_INTEGRATION_ENTID': idmap,
        'CLOUDFLARE_WORKERS_TEST_LIVE': 'FALSE',
        'CLOUDFLARE_WORKERS_TEST_EXPLAIN': 'FALSE',
        'CLOUDFLARE_WORKERS_APIKEY': '',
    });
    idmap = env['CLOUDFLARE_WORKERS_TEST_GIT_HUB_INTEGRATION_ENTID'];
    const live = 'TRUE' === env.CLOUDFLARE_WORKERS_TEST_LIVE;
    const transport = (0, live_runner_1.createLiveTransport)();
    if (live) {
        const rawIds = process.env['CLOUDFLARE_WORKERS_TEST_GIT_HUB_INTEGRATION_ENTID'];
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
//# sourceMappingURL=GitHubIntegrationEntity.test.js.map