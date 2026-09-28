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
(0, node_test_1.describe)('ImageRegistryEntity', async () => {
    // Per-test live pacing. Delay is read from sdk-test-control.json's
    // `test.live.delayMs`; only sleeps when CLOUDFLARE_WORKERS_TEST_LIVE=TRUE.
    (0, node_test_1.afterEach)((0, utility_1.liveDelay)('CLOUDFLARE_WORKERS_TEST_LIVE'));
    (0, node_test_1.test)('instance', async () => {
        const testsdk = __1.CloudflareWorkersSDK.test();
        const ent = testsdk.ImageRegistry();
        (0, node_assert_1.default)(null != ent);
    });
    (0, node_test_1.test)('basic', async (t) => {
        const live = 'TRUE' === process.env.CLOUDFLARE_WORKERS_TEST_LIVE;
        for (const op of ['create', 'list', 'remove']) {
            if (!live && (0, utility_1.maybeSkipControl)(t, 'entityOp', 'image_registry.' + op, live))
                return;
        }
        const setup = basicSetup();
        if (setup.live) {
            return (0, live_entity_1.runLiveEntity)(setup, { "active": true, "alias": { "field": {} }, "fields": { "auth": { "a": true, "h": "Auth", "n": "auth", "r": true, "sh": "Credentials for authenticating to a private external image registry.", "t": "`$OBJECT`", "key$": "auth", "index$": 0 }, "domain": { "a": true, "h": "Domain", "n": "domain", "r": true, "sh": "Hostname of the private registry, without a scheme or image path.", "t": "`$STRING`", "key$": "domain", "index$": 1 }, "errors": { "a": true, "h": "Errors", "n": "errors", "r": true, "t": "`$ARRAY`", "key$": "errors", "index$": 2 }, "expiration_minutes": { "a": true, "h": "Expiration Minutes", "n": "expiration_minutes", "r": false, "sh": "The number of minutes Cloudflare managed registry credentials stay valid.", "t": "`$INTEGER`", "key$": "expiration_minutes", "index$": 3 }, "id": { "a": true, "h": "Id", "n": "id", "r": false, "t": "`$STRING`", "key$": "id", "index$": 4 }, "is_public": { "a": true, "h": "Is Public", "n": "is_public", "r": false, "sh": "Omit this field or set it to `false`.", "t": "`$BOOLEAN`", "key$": "is_public", "index$": 5 }, "kind": { "a": true, "h": "Kind", "n": "kind", "r": true, "sh": "Registry provider.", "t": "`$ANY`", "key$": "kind", "index$": 6 }, "messages": { "a": true, "h": "Messages", "n": "messages", "r": true, "t": "`$ARRAY`", "key$": "messages", "index$": 7 }, "permissions": { "a": true, "h": "Permissions", "n": "permissions", "r": false, "sh": "The permissions for Cloudflare managed registry credentials.", "t": "`$ARRAY`", "key$": "permissions", "index$": 8 }, "result": { "a": true, "h": "Result", "n": "result", "r": true, "t": "`$ARRAY`", "union": { "branches": 2, "count": 1, "depth": 3 }, "key$": "result", "index$": 9 }, "success": { "a": true, "h": "Success", "n": "success", "r": true, "sh": "Whether the API call was successful.", "t": "`$BOOLEAN`", "key$": "success", "index$": 10 } }, "id": { "field": "id", "name": "id" }, "name": "image_registry", "op": { "create": { "input": "data", "name": "create", "points": [{ "a": true, "co": { "id": "POST /accounts/{account_id}/containers/registries/{domain}/credentials", "source": "openapi3", "version": 2 }, "g": { "params": [{ "a": true, "ex": "account-123", "k": "param", "n": "account_id", "or": "account_id", "r": true, "t": "`$STRING`", "index$": 0 }, { "a": true, "ex": "registry.cloudflare.com", "k": "param", "n": "domain", "or": "domain", "r": true, "t": "`$STRING`", "index$": 1 }] }, "k": "http", "m": "POST", "o": "/accounts/{account_id}/containers/registries/{domain}/credentials", "q": { "exist": ["account_id", "domain"] }, "r": {}, "s": [{ "lit": "accounts" }, { "var": "account_id" }, { "lit": "containers" }, { "lit": "registries" }, { "var": "domain" }, { "lit": "credentials" }], "t": { "req": "`reqdata`", "res": "`body`" }, "index$": 0 }, { "a": true, "co": { "id": "POST /accounts/{account_id}/containers/registries", "source": "openapi3", "version": 2 }, "g": { "params": [{ "a": true, "ex": "account-123", "k": "param", "n": "account_id", "or": "account_id", "r": true, "t": "`$STRING`", "index$": 0 }] }, "k": "http", "m": "POST", "o": "/accounts/{account_id}/containers/registries", "q": { "exist": ["account_id"] }, "r": {}, "s": [{ "lit": "accounts" }, { "var": "account_id" }, { "lit": "containers" }, { "lit": "registries" }], "t": { "req": "`reqdata`", "res": "`body`" }, "index$": 1 }], "key$": "create" }, "list": { "input": "data", "name": "list", "points": [{ "a": true, "co": { "id": "GET /accounts/{account_id}/containers/registries", "source": "openapi3", "version": 2 }, "g": { "params": [{ "a": true, "ex": "account-123", "k": "param", "n": "account_id", "or": "account_id", "r": true, "t": "`$STRING`", "index$": 0 }] }, "k": "http", "m": "GET", "o": "/accounts/{account_id}/containers/registries", "q": { "exist": ["account_id"] }, "r": {}, "s": [{ "lit": "accounts" }, { "var": "account_id" }, { "lit": "containers" }, { "lit": "registries" }], "t": { "req": "`reqdata`", "res": "`body`" }, "index$": 0 }], "key$": "list" }, "remove": { "input": "data", "name": "remove", "points": [{ "a": true, "co": { "id": "DELETE /accounts/{account_id}/containers/registries/{domain}", "source": "openapi3", "version": 2 }, "g": { "params": [{ "a": true, "ex": "account-123", "k": "param", "n": "account_id", "or": "account_id", "r": true, "t": "`$STRING`", "index$": 0 }, { "a": true, "k": "param", "n": "id", "or": "domain", "r": true, "t": "`$STRING`", "index$": 1 }] }, "k": "http", "m": "DELETE", "o": "/accounts/{account_id}/containers/registries/{domain}", "q": { "exist": ["account_id", "id"] }, "r": { "param": { "domain": "id" } }, "s": [{ "lit": "accounts" }, { "var": "account_id" }, { "lit": "containers" }, { "lit": "registries" }, { "var": "id" }], "t": { "req": "`reqdata`", "res": "`body`" }, "index$": 0 }], "key$": "remove" } }, "relations": { "ancestors": [["$.main.kit.entity.account"], ["$.main.kit.entity.account"]] }, "key$": "image_registry", "name__orig": "image_registry", "Name": "ImageRegistry", "name_": "image_registry", "name-": "image-registry", "NAME": "IMAGE_REGISTRY", "index$": 17 }, { "active": true, "entity": "image_registry", "key$": "BasicImageRegistryFlow", "kind": "basic", "name": "BasicImageRegistryFlow", "param": {}, "step": [{ "a": true, "d": {}, "i": { "ref": "image_registry_ref01" }, "m": { "account_id": "account01" }, "o": "create", "s": [], "v": [], "index$": 0 }, { "a": true, "d": {}, "i": {}, "m": { "account_id": "account01" }, "o": "list", "s": [], "v": [{ "apply": "ItemExists", "def": { "ref": "image_registry_ref01" } }], "index$": 1 }, { "a": true, "d": {}, "i": { "ref": "image_registry_ref01", "suffix": "_rm0" }, "m": { "account_id": "account01", "id": "image_registry01" }, "o": "remove", "s": [], "v": [], "index$": 2 }, { "a": true, "d": {}, "i": { "suffix": "_rt0" }, "m": { "account_id": "account01" }, "o": "list", "s": [], "v": [{ "apply": "ItemNotExists", "def": { "ref": "image_registry_ref01" } }], "index$": 3 }] }, 'ImageRegistry', { "POST /accounts/{account_id}/containers/registries/{domain}/credentials": { "protocol": "http", "requestBody": { "required": true, "content": { "application/json": { "schema": { "description": "Specifies the configuration for the image registry credential to create. Cloudflare requires both fields for managed registries. For external registries, Cloudflare ignores both fields, and the registry provider determines the returned credentials' permissions and lifetime.", "type": "object", "properties": { "expiration_minutes": { "description": "The number of minutes Cloudflare managed registry credentials stay valid. Required for managed registries and must remain positive. Cloudflare ignores this value for external registries.", "type": "integer", "minimum": 1, "key$": "expiration_minutes" }, "permissions": { "description": "The permissions for Cloudflare managed registry credentials. Required for managed registries. Cloudflare ignores this value for external registries.", "type": "array", "items": { "description": "Specifies what permissions the credentials carry.", "type": "string", "enum": ["pull", "push", "list"], "x-ref": "#/components/schemas/cc_ImageRegistryPermissions" }, "key$": "permissions" } }, "x-ref": "#/components/schemas/cc_ImageRegistryCredentialsConfiguration", "index$": 1 } } } }, "parameters": [{ "description": "Account identifier.", "in": "path", "name": "account_id", "required": true, "schema": { "type": "string", "example": "account-123" }, "x-ref": "#/components/parameters/cc_AccountId", "index$": 0 }, { "name": "domain", "in": "path", "required": true, "schema": { "description": "The domain to get credentials for.", "type": "string", "example": "registry.cloudflare.com" }, "index$": 1 }] }, "POST /accounts/{account_id}/containers/registries": { "protocol": "http", "requestBody": { "required": true, "content": { "application/json": { "schema": { "description": "Configuration for connecting Containers to a supported private external image\nregistry. See [Image management](https://developers.cloudflare.com/containers/platform-details/image-management/)\nfor supported providers and credential setup instructions.\n", "type": "object", "properties": { "auth": { "description": "Credentials for authenticating to a private external image registry. Store the\nprivate credential in [Secrets Store](https://developers.cloudflare.com/secrets-store/)\nbefore calling the API. Refer to [Image management](https://developers.cloudflare.com/containers/platform-details/image-management/)\nfor the credential required by each supported registry provider.\n", "type": "object", "properties": { "private_credential": { "description": "A reference to the private registry credential in Secrets Store. The referenced\nsecret must have the `containers` scope. Raw secret values are not accepted.\n", "allOf": [{}] }, "public_credential": { "description": "The non-secret part of the registry credential: an AWS access key ID for ECR,\na username for Docker Hub, or a service account email for Google Artifact Registry.\n", "type": "string", "example": "example-user" } }, "required": ["public_credential", "private_credential"], "x-ref": "#/components/schemas/cc_ContainersImageRegistryAuth", "key$": "auth" }, "domain": { "description": "Hostname of the private registry, without a scheme or image path. Supported\nhostnames are `docker.io`, AWS ECR hostnames, and Google Artifact Registry\n`*-docker.pkg.dev` hostnames.\n", "type": "string", "example": "docker.io", "key$": "domain" }, "is_public": { "description": "Omit this field or set it to `false`. Public Docker Hub images do not require\nregistry configuration and cannot be added with this endpoint.\n", "type": "boolean", "enum": [false], "key$": "is_public" }, "kind": { "description": "Registry provider. This must match `domain`: `DockerHub` for `docker.io`,\n`ECR` for AWS ECR, or `GAR` for Google Artifact Registry.\n", "allOf": [{ "description": "The type of external registry that is being configured.", "type": "string", "example": "ECR", "enum": ["ECR", "DockerHub", "GAR"], "x-ref": "#/components/schemas/cc_ExternalRegistryKind" }], "key$": "kind" } }, "required": ["domain", "auth", "kind"], "x-ref": "#/components/schemas/cc_ContainersCreateImageRegistryRequestBody", "index$": 1 } } } }, "parameters": [{ "description": "Account identifier.", "in": "path", "name": "account_id", "required": true, "schema": { "type": "string", "example": "account-123" }, "x-ref": "#/components/parameters/cc_AccountId", "index$": 0 }] }, "GET /accounts/{account_id}/containers/registries": { "protocol": "http", "parameters": [{ "description": "Account identifier.", "in": "path", "name": "account_id", "required": true, "schema": { "type": "string", "example": "account-123" }, "x-ref": "#/components/parameters/cc_AccountId", "index$": 0 }] }, "DELETE /accounts/{account_id}/containers/registries/{domain}": { "protocol": "http", "parameters": [{ "description": "Account identifier.", "in": "path", "name": "account_id", "required": true, "schema": { "type": "string", "example": "account-123" }, "x-ref": "#/components/parameters/cc_AccountId", "index$": 0 }, { "name": "domain", "in": "path", "required": true, "schema": { "description": "The domain to delete.", "type": "string" }, "index$": 1 }] } });
        }
        const client = setup.client;
        const struct = setup.struct;
        const isempty = struct.isempty;
        const select = struct.select;
        // CREATE
        const image_registry_ref01_ent = client.ImageRegistry();
        let image_registry_ref01_data = setup.data.new.image_registry['image_registry_ref01'];
        image_registry_ref01_data['account_id'] = setup.idmap['account01'];
        image_registry_ref01_data = (await image_registry_ref01_ent.create(image_registry_ref01_data)).data();
        (0, node_assert_1.default)(null != image_registry_ref01_data.id);
        // LIST
        const image_registry_ref01_match = {};
        image_registry_ref01_match['account_id'] = setup.idmap['account01'];
        const image_registry_ref01_list = (await image_registry_ref01_ent.list(image_registry_ref01_match)).map((e) => e.data());
        (0, node_assert_1.default)(!isempty(select(image_registry_ref01_list, { id: image_registry_ref01_data.id })));
        // REMOVE
        const image_registry_ref01_match_rm0 = { id: image_registry_ref01_data.id };
        await image_registry_ref01_ent.remove(image_registry_ref01_match_rm0);
        // LIST
        const image_registry_ref01_match_rt0 = {};
        image_registry_ref01_match_rt0['account_id'] = setup.idmap['account01'];
        const image_registry_ref01_list_rt0 = (await image_registry_ref01_ent.list(image_registry_ref01_match_rt0)).map((e) => e.data());
        (0, node_assert_1.default)(isempty(select(image_registry_ref01_list_rt0, { id: image_registry_ref01_data.id })));
    });
});
function basicSetup(extra) {
    // TODO: fix test def options
    const options = {}; // null
    // TODO: needs test utility to resolve path
    const entityDataFile = node_path_1.default.resolve(__dirname, '../../../../.sdk/test/entity/image_registry/ImageRegistryTestData.json');
    // TODO: file ready util needed?
    const entityDataSource = Fs.readFileSync(entityDataFile).toString('utf8');
    // TODO: need a xlang JSON parse utility in voxgig/struct with better error msgs
    const entityData = JSON.parse(entityDataSource);
    options.entity = entityData.existing;
    let client = __1.CloudflareWorkersSDK.test(options, extra);
    const struct = client.utility().struct;
    const merge = struct.merge;
    const transform = struct.transform;
    let idmap = transform(['image_registry01', 'image_registry02', 'image_registry03', 'account01', 'account02', 'account03'], {
        '`$PACK`': ['', {
                '`$KEY`': '`$COPY`',
                '`$VAL`': ['`$FORMAT`', 'upper', '`$COPY`']
            }]
    });
    const env = (0, utility_1.envOverride)({
        'CLOUDFLARE_WORKERS_TEST_IMAGE_REGISTRY_ENTID': idmap,
        'CLOUDFLARE_WORKERS_TEST_LIVE': 'FALSE',
        'CLOUDFLARE_WORKERS_TEST_EXPLAIN': 'FALSE',
        'CLOUDFLARE_WORKERS_APIKEY': '',
    });
    idmap = env['CLOUDFLARE_WORKERS_TEST_IMAGE_REGISTRY_ENTID'];
    const live = 'TRUE' === env.CLOUDFLARE_WORKERS_TEST_LIVE;
    const transport = (0, live_runner_1.createLiveTransport)();
    if (live) {
        const rawIds = process.env['CLOUDFLARE_WORKERS_TEST_IMAGE_REGISTRY_ENTID'];
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
//# sourceMappingURL=ImageRegistryEntity.test.js.map