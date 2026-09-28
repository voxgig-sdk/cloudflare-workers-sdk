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
(0, node_test_1.describe)('SecretEntity', async () => {
    // Per-test live pacing. Delay is read from sdk-test-control.json's
    // `test.live.delayMs`; only sleeps when CLOUDFLARE_WORKERS_TEST_LIVE=TRUE.
    (0, node_test_1.afterEach)((0, utility_1.liveDelay)('CLOUDFLARE_WORKERS_TEST_LIVE'));
    (0, node_test_1.test)('instance', async () => {
        const testsdk = __1.CloudflareWorkersSDK.test();
        const ent = testsdk.Secret();
        (0, node_assert_1.default)(null != ent);
    });
    (0, node_test_1.test)('basic', async (t) => {
        const live = 'TRUE' === process.env.CLOUDFLARE_WORKERS_TEST_LIVE;
        for (const op of ['create', 'list', 'update', 'load', 'remove']) {
            if (!live && (0, utility_1.maybeSkipControl)(t, 'entityOp', 'secret.' + op, live))
                return;
        }
        const setup = basicSetup();
        if (setup.live) {
            return (0, live_entity_1.runLiveEntity)(setup, { "active": true, "alias": { "field": {} }, "fields": { "comment": { "a": true, "h": "Comment", "n": "comment", "r": false, "sh": "Freeform text describing the secret.", "t": "`$STRING`", "key$": "comment", "index$": 0 }, "id": { "a": true, "h": "Id", "n": "id", "r": false, "t": "`$STRING`", "key$": "id", "index$": 1 }, "result": { "a": true, "h": "Result", "n": "result", "op": { "list": { "req": false, "type": "`$ARRAY`" } }, "r": true, "t": "`$ANY`", "key$": "result", "index$": 2 }, "scopes": { "a": true, "h": "Scopes", "n": "scopes", "r": false, "sh": "The list of services that can use this secret.", "t": "`$ARRAY`", "key$": "scopes", "index$": 3 }, "value": { "a": true, "h": "Value", "n": "value", "r": false, "sh": "The value of the secret.", "t": "`$STRING`", "wo": true, "key$": "value", "index$": 4 } }, "id": { "field": "id", "name": "id" }, "name": "secret", "op": { "create": { "input": "data", "name": "create", "points": [{ "a": true, "co": { "id": "POST /accounts/{account_id}/secrets_store/stores/{store_id}/secrets", "source": "openapi3", "version": 2 }, "g": { "params": [{ "a": true, "ex": "985e105f4ecef8ad9ca31a8372d0c353", "k": "param", "n": "account_id", "or": "account_id", "r": true, "t": "`$STRING`", "index$": 0 }, { "a": true, "ex": "023e105f4ecef8ad9ca31a8372d0c353", "k": "param", "n": "store_id", "or": "store_id", "r": true, "t": "`$STRING`", "index$": 1 }] }, "k": "http", "m": "POST", "o": "/accounts/{account_id}/secrets_store/stores/{store_id}/secrets", "q": { "exist": ["account_id", "store_id"] }, "r": {}, "s": [{ "lit": "accounts" }, { "var": "account_id" }, { "lit": "secrets_store" }, { "lit": "stores" }, { "var": "store_id" }, { "lit": "secrets" }], "t": { "req": "`reqdata`", "res": "`body`" }, "index$": 0 }], "key$": "create" }, "list": { "input": "data", "name": "list", "points": [{ "a": true, "co": { "id": "GET /accounts/{account_id}/secrets_store/stores/{store_id}/secrets", "source": "openapi3", "version": 2 }, "g": { "params": [{ "a": true, "ex": "985e105f4ecef8ad9ca31a8372d0c353", "k": "param", "n": "account_id", "or": "account_id", "r": true, "t": "`$STRING`", "index$": 0 }, { "a": true, "ex": "023e105f4ecef8ad9ca31a8372d0c353", "k": "param", "n": "store_id", "or": "store_id", "r": true, "t": "`$STRING`", "index$": 1 }], "query": [{ "a": true, "ex": "desc", "k": "query", "n": "direction", "or": "direction", "r": false, "t": "`$STRING`", "index$": 0 }, { "a": true, "ex": "created", "k": "query", "n": "order", "or": "order", "r": false, "t": "`$STRING`", "index$": 1 }, { "a": true, "ex": 2, "k": "query", "n": "page", "or": "page", "r": false, "t": "`$INTEGER`", "index$": 2 }, { "a": true, "ex": 20, "k": "query", "n": "per_page", "or": "per_page", "r": false, "t": "`$INTEGER`", "index$": 3 }, { "a": true, "k": "query", "n": "scope", "or": "scope", "r": false, "t": "`$ARRAY`", "index$": 4 }, { "a": true, "k": "query", "n": "search", "or": "search", "r": false, "t": "`$STRING`", "index$": 5 }] }, "k": "http", "m": "GET", "o": "/accounts/{account_id}/secrets_store/stores/{store_id}/secrets", "q": { "exist": ["account_id", "direction", "order", "page", "per_page", "scope", "search", "store_id"] }, "r": {}, "s": [{ "lit": "accounts" }, { "var": "account_id" }, { "lit": "secrets_store" }, { "lit": "stores" }, { "var": "store_id" }, { "lit": "secrets" }], "t": { "req": "`reqdata`", "res": "`body`" }, "index$": 0 }], "key$": "list" }, "load": { "input": "data", "name": "load", "points": [{ "a": true, "co": { "id": "GET /accounts/{account_id}/secrets_store/stores/{store_id}/secrets/{secret_id}", "source": "openapi3", "version": 2 }, "g": { "params": [{ "a": true, "ex": "985e105f4ecef8ad9ca31a8372d0c353", "k": "param", "n": "account_id", "or": "account_id", "r": true, "t": "`$STRING`", "index$": 0 }, { "a": true, "ex": "3fd85f74b32742f1bff64a85009dda07", "k": "param", "n": "id", "or": "secret_id", "r": true, "t": "`$STRING`", "index$": 1 }, { "a": true, "ex": "023e105f4ecef8ad9ca31a8372d0c353", "k": "param", "n": "store_id", "or": "store_id", "r": true, "t": "`$STRING`", "index$": 2 }] }, "k": "http", "m": "GET", "o": "/accounts/{account_id}/secrets_store/stores/{store_id}/secrets/{secret_id}", "q": { "exist": ["account_id", "id", "store_id"] }, "r": { "param": { "secret_id": "id" } }, "s": [{ "lit": "accounts" }, { "var": "account_id" }, { "lit": "secrets_store" }, { "lit": "stores" }, { "var": "store_id" }, { "lit": "secrets" }, { "var": "id" }], "t": { "req": "`reqdata`", "res": "`body`" }, "index$": 0 }], "key$": "load" }, "remove": { "input": "data", "name": "remove", "points": [{ "a": true, "co": { "id": "DELETE /accounts/{account_id}/secrets_store/stores/{store_id}/secrets/{secret_id}", "source": "openapi3", "version": 2 }, "g": { "params": [{ "a": true, "ex": "985e105f4ecef8ad9ca31a8372d0c353", "k": "param", "n": "account_id", "or": "account_id", "r": true, "t": "`$STRING`", "index$": 0 }, { "a": true, "ex": "3fd85f74b32742f1bff64a85009dda07", "k": "param", "n": "id", "or": "secret_id", "r": true, "t": "`$STRING`", "index$": 1 }, { "a": true, "ex": "023e105f4ecef8ad9ca31a8372d0c353", "k": "param", "n": "store_id", "or": "store_id", "r": true, "t": "`$STRING`", "index$": 2 }] }, "k": "http", "m": "DELETE", "o": "/accounts/{account_id}/secrets_store/stores/{store_id}/secrets/{secret_id}", "q": { "exist": ["account_id", "id", "store_id"] }, "r": { "param": { "secret_id": "id" } }, "s": [{ "lit": "accounts" }, { "var": "account_id" }, { "lit": "secrets_store" }, { "lit": "stores" }, { "var": "store_id" }, { "lit": "secrets" }, { "var": "id" }], "t": { "req": "`reqdata`", "res": "`body`" }, "index$": 0 }, { "a": true, "co": { "id": "DELETE /accounts/{account_id}/secrets_store/stores/{store_id}/secrets", "source": "openapi3", "version": 2 }, "g": { "params": [{ "a": true, "ex": "985e105f4ecef8ad9ca31a8372d0c353", "k": "param", "n": "account_id", "or": "account_id", "r": true, "t": "`$STRING`", "index$": 0 }, { "a": true, "ex": "023e105f4ecef8ad9ca31a8372d0c353", "k": "param", "n": "store_id", "or": "store_id", "r": true, "t": "`$STRING`", "index$": 1 }] }, "k": "http", "m": "DELETE", "o": "/accounts/{account_id}/secrets_store/stores/{store_id}/secrets", "q": { "exist": ["account_id", "store_id"] }, "r": {}, "s": [{ "lit": "accounts" }, { "var": "account_id" }, { "lit": "secrets_store" }, { "lit": "stores" }, { "var": "store_id" }, { "lit": "secrets" }], "t": { "req": "`reqdata`", "res": "`body`" }, "index$": 1 }], "key$": "remove" }, "update": { "input": "data", "name": "update", "points": [{ "a": true, "co": { "id": "PATCH /accounts/{account_id}/secrets_store/stores/{store_id}/secrets/{secret_id}", "source": "openapi3", "version": 2 }, "g": { "params": [{ "a": true, "ex": "985e105f4ecef8ad9ca31a8372d0c353", "k": "param", "n": "account_id", "or": "account_id", "r": true, "t": "`$STRING`", "index$": 0 }, { "a": true, "ex": "3fd85f74b32742f1bff64a85009dda07", "k": "param", "n": "id", "or": "secret_id", "r": true, "t": "`$STRING`", "index$": 1 }, { "a": true, "ex": "023e105f4ecef8ad9ca31a8372d0c353", "k": "param", "n": "store_id", "or": "store_id", "r": true, "t": "`$STRING`", "index$": 2 }] }, "k": "http", "m": "PATCH", "o": "/accounts/{account_id}/secrets_store/stores/{store_id}/secrets/{secret_id}", "q": { "exist": ["account_id", "id", "store_id"] }, "r": { "param": { "secret_id": "id" } }, "s": [{ "lit": "accounts" }, { "var": "account_id" }, { "lit": "secrets_store" }, { "lit": "stores" }, { "var": "store_id" }, { "lit": "secrets" }, { "var": "id" }], "t": { "req": "`reqdata`", "res": "`body`" }, "index$": 0 }], "key$": "update" } }, "relations": { "ancestors": [["$.main.kit.entity.account"]] }, "key$": "secret", "name__orig": "secret", "Name": "Secret", "name_": "secret", "name-": "secret", "NAME": "SECRET", "index$": 31 }, { "active": true, "entity": "secret", "key$": "BasicSecretFlow", "kind": "basic", "name": "BasicSecretFlow", "param": {}, "step": [{ "a": true, "d": {}, "i": { "ref": "secret_ref01" }, "m": { "account_id": "account01", "store_id": "store01" }, "o": "create", "s": [], "v": [], "index$": 0 }, { "a": true, "d": {}, "i": {}, "m": { "account_id": "account01", "store_id": "store01" }, "o": "list", "s": [], "v": [{ "apply": "ItemExists", "def": { "ref": "secret_ref01" } }], "index$": 1 }, { "a": true, "d": { "account_id": "account01", "store_id": "store01" }, "i": { "ref": "secret_ref01", "srcdatavar": "secret_ref01_data", "suffix": "_up0", "textfield": "comment" }, "m": {}, "o": "update", "s": [{ "apply": "TextFieldMark", "def": { "mark": "Mark01-secret_ref01" } }], "v": [], "index$": 2 }, { "a": true, "d": {}, "i": { "ref": "secret_ref01", "srcdatavar": "secret_ref01_data", "suffix": "_dt0" }, "m": { "account_id": "account01", "id": "secret01", "store_id": "store01" }, "o": "load", "s": [], "v": [{ "apply": "TextFieldMark", "def": { "mark": "Mark01-secret_ref01" } }], "index$": 3 }, { "a": true, "d": {}, "i": { "ref": "secret_ref01", "suffix": "_rm0" }, "m": { "account_id": "account01", "id": "secret01" }, "o": "remove", "s": [], "v": [], "index$": 4 }, { "a": true, "d": {}, "i": { "suffix": "_rt0" }, "m": { "account_id": "account01", "store_id": "store01" }, "o": "list", "s": [], "v": [{ "apply": "ItemNotExists", "def": { "ref": "secret_ref01" } }], "index$": 5 }] }, 'Secret', { "POST /accounts/{account_id}/secrets_store/stores/{store_id}/secrets": { "protocol": "http", "requestBody": { "required": true, "content": { "application/json": { "schema": { "type": "array", "items": { "properties": { "comment": { "description": "Freeform text describing the secret.", "type": "string", "example": "info about my secret", "x-auditable": true, "x-ref": "#/components/schemas/secrets-store_comment" }, "name": { "description": "The name of the secret.", "type": "string", "example": "MY_API_KEY", "x-ref": "#/components/schemas/secrets-store_secret_name" }, "scopes": { "description": "The list of services that can use this secret.", "type": "array", "items": { "enum": ["workers", "ai_gateway", "dex", "access", "containers", "websearch"], "type": "string" }, "example": ["workers", "ai_gateway", "dex", "access", "websearch"], "x-ref": "#/components/schemas/secrets-store_scopes" }, "value": { "description": "The value of the secret. Maximum 64 KiB (65,536 bytes). Note that this is 'write only' - the API never returns this value; it exists only to create or modify secrets.", "type": "string", "example": "api-token-secret-123", "maxLength": 65536, "writeOnly": true, "x-sensitive": true, "x-ref": "#/components/schemas/secrets-store_value" } }, "required": ["name", "value", "scopes"], "x-ref": "#/components/schemas/secrets-store_createSecretObject" }, "x-stainless-skip": ["terraform"], "index$": 1 } } } }, "parameters": [{ "description": "Account identifier.", "in": "path", "name": "account_id", "required": true, "schema": { "type": "string", "example": "985e105f4ecef8ad9ca31a8372d0c353", "maxLength": 32 }, "x-ref": "#/components/parameters/secrets-store_account_id", "index$": 0 }, { "description": "Store identifier.", "in": "path", "name": "store_id", "required": true, "schema": { "type": "string", "example": "023e105f4ecef8ad9ca31a8372d0c353", "maxLength": 32 }, "x-ref": "#/components/parameters/secrets-store_store_id", "index$": 1 }] }, "GET /accounts/{account_id}/secrets_store/stores/{store_id}/secrets": { "protocol": "http", "parameters": [{ "description": "Account identifier.", "in": "path", "name": "account_id", "required": true, "schema": { "type": "string", "example": "985e105f4ecef8ad9ca31a8372d0c353", "maxLength": 32 }, "x-ref": "#/components/parameters/secrets-store_account_id", "index$": 0 }, { "description": "Store identifier.", "in": "path", "name": "store_id", "required": true, "schema": { "type": "string", "example": "023e105f4ecef8ad9ca31a8372d0c353", "maxLength": 32 }, "x-ref": "#/components/parameters/secrets-store_store_id", "index$": 1 }, { "description": "Direction to sort objects.", "in": "query", "name": "direction", "schema": { "type": "string", "default": "desc", "enum": ["asc", "desc"] }, "x-ref": "#/components/parameters/secrets-store_direction", "index$": 2 }, { "description": "Page number.", "in": "query", "name": "page", "schema": { "type": "integer", "example": 2, "minimum": 0, "multipleOf": 1 }, "x-ref": "#/components/parameters/secrets-store_page", "index$": 3 }, { "description": "Number of objects to return per page.", "in": "query", "name": "per_page", "schema": { "type": "integer", "example": 20, "maximum": 100, "minimum": 0, "multipleOf": 1 }, "x-ref": "#/components/parameters/secrets-store_per_page", "index$": 4 }, { "description": "Search secrets using a filter string, filtering across name and comment.", "in": "query", "name": "search", "schema": { "type": "string" }, "x-ref": "#/components/parameters/secrets-store_search", "index$": 5 }, { "description": "Order secrets by values in the given field.", "in": "query", "name": "order", "schema": { "type": "string", "default": "created", "enum": ["name", "comment", "created", "modified", "status"] }, "x-ref": "#/components/parameters/secrets-store_order", "index$": 6 }, { "description": "Only secrets with the given scopes will be returned.", "explode": false, "in": "query", "name": "scopes", "schema": { "type": "array", "items": { "enum": ["workers", "ai_gateway", "dex", "access", "containers", "websearch"], "type": "string" } }, "style": "form", "x-ref": "#/components/parameters/secrets-store_scopes_query", "index$": 7 }] }, "GET /accounts/{account_id}/secrets_store/stores/{store_id}/secrets/{secret_id}": { "protocol": "http", "parameters": [{ "description": "Account identifier.", "in": "path", "name": "account_id", "required": true, "schema": { "type": "string", "example": "985e105f4ecef8ad9ca31a8372d0c353", "maxLength": 32 }, "x-ref": "#/components/parameters/secrets-store_account_id", "index$": 0 }, { "description": "Store identifier.", "in": "path", "name": "store_id", "required": true, "schema": { "type": "string", "example": "023e105f4ecef8ad9ca31a8372d0c353", "maxLength": 32 }, "x-ref": "#/components/parameters/secrets-store_store_id", "index$": 1 }, { "description": "Secret identifier.", "in": "path", "name": "secret_id", "required": true, "schema": { "type": "string", "example": "3fd85f74b32742f1bff64a85009dda07", "maxLength": 32 }, "x-ref": "#/components/parameters/secrets-store_secret_id", "index$": 2 }] }, "DELETE /accounts/{account_id}/secrets_store/stores/{store_id}/secrets/{secret_id}": { "protocol": "http", "parameters": [{ "description": "Account identifier.", "in": "path", "name": "account_id", "required": true, "schema": { "type": "string", "example": "985e105f4ecef8ad9ca31a8372d0c353", "maxLength": 32 }, "x-ref": "#/components/parameters/secrets-store_account_id", "index$": 0 }, { "description": "Store identifier.", "in": "path", "name": "store_id", "required": true, "schema": { "type": "string", "example": "023e105f4ecef8ad9ca31a8372d0c353", "maxLength": 32 }, "x-ref": "#/components/parameters/secrets-store_store_id", "index$": 1 }, { "description": "Secret identifier.", "in": "path", "name": "secret_id", "required": true, "schema": { "type": "string", "example": "3fd85f74b32742f1bff64a85009dda07", "maxLength": 32 }, "x-ref": "#/components/parameters/secrets-store_secret_id", "index$": 2 }] }, "DELETE /accounts/{account_id}/secrets_store/stores/{store_id}/secrets": { "protocol": "http", "requestBody": { "required": true, "content": { "application/json": { "schema": { "description": "Request body for bulk deleting secrets.", "type": "object", "properties": { "ids": { "description": "List of secret identifier tags to delete.", "type": "array", "items": { "description": "Secret identifier tag.", "type": "string", "example": "3fd85f74b32742f1bff64a85009dda07", "maxLength": 32, "readOnly": true, "x-auditable": true, "x-ref": "#/components/schemas/secrets-store_identifier" }, "example": ["3fd85f74b32742f1bff64a85009dda07"] } }, "required": ["ids"], "x-ref": "#/components/schemas/secrets-store_deleteSecretsRequest" } } } }, "parameters": [{ "description": "Account identifier.", "in": "path", "name": "account_id", "required": true, "schema": { "type": "string", "example": "985e105f4ecef8ad9ca31a8372d0c353", "maxLength": 32 }, "x-ref": "#/components/parameters/secrets-store_account_id", "index$": 0 }, { "description": "Store identifier.", "in": "path", "name": "store_id", "required": true, "schema": { "type": "string", "example": "023e105f4ecef8ad9ca31a8372d0c353", "maxLength": 32 }, "x-ref": "#/components/parameters/secrets-store_store_id", "index$": 1 }] }, "PATCH /accounts/{account_id}/secrets_store/stores/{store_id}/secrets/{secret_id}": { "protocol": "http", "requestBody": { "required": true, "content": { "application/json": { "schema": { "properties": { "comment": { "description": "Freeform text describing the secret.", "type": "string", "example": "info about my secret", "x-auditable": true, "x-ref": "#/components/schemas/secrets-store_comment", "key$": "comment" }, "scopes": { "description": "The list of services that can use this secret.", "type": "array", "items": { "enum": ["workers", "ai_gateway", "dex", "access", "containers", "websearch"], "type": "string" }, "example": ["workers", "ai_gateway", "dex", "access", "websearch"], "x-ref": "#/components/schemas/secrets-store_scopes", "key$": "scopes" }, "value": { "description": "The value of the secret. Maximum 64 KiB (65,536 bytes). Note that this is 'write only' - the API never returns this value; it exists only to create or modify secrets.", "type": "string", "example": "api-token-secret-123", "maxLength": 65536, "writeOnly": true, "x-sensitive": true, "x-ref": "#/components/schemas/secrets-store_value", "key$": "value" } }, "x-ref": "#/components/schemas/secrets-store_patchSecretObject", "index$": 1 } } } }, "parameters": [{ "description": "Account identifier.", "in": "path", "name": "account_id", "required": true, "schema": { "type": "string", "example": "985e105f4ecef8ad9ca31a8372d0c353", "maxLength": 32 }, "x-ref": "#/components/parameters/secrets-store_account_id", "index$": 0 }, { "description": "Store identifier.", "in": "path", "name": "store_id", "required": true, "schema": { "type": "string", "example": "023e105f4ecef8ad9ca31a8372d0c353", "maxLength": 32 }, "x-ref": "#/components/parameters/secrets-store_store_id", "index$": 1 }, { "description": "Secret identifier.", "in": "path", "name": "secret_id", "required": true, "schema": { "type": "string", "example": "3fd85f74b32742f1bff64a85009dda07", "maxLength": 32 }, "x-ref": "#/components/parameters/secrets-store_secret_id", "index$": 2 }] } });
        }
        const client = setup.client;
        const struct = setup.struct;
        const isempty = struct.isempty;
        const select = struct.select;
        // CREATE
        const secret_ref01_ent = client.Secret();
        let secret_ref01_data = setup.data.new.secret['secret_ref01'];
        secret_ref01_data['account_id'] = setup.idmap['account01'];
        secret_ref01_data['store_id'] = setup.idmap['store01'];
        secret_ref01_data = (await secret_ref01_ent.create(secret_ref01_data)).data();
        (0, node_assert_1.default)(null != secret_ref01_data.id);
        // LIST
        const secret_ref01_match = {};
        secret_ref01_match['account_id'] = setup.idmap['account01'];
        secret_ref01_match['store_id'] = setup.idmap['store01'];
        const secret_ref01_list = (await secret_ref01_ent.list(secret_ref01_match)).map((e) => e.data());
        (0, node_assert_1.default)(!isempty(select(secret_ref01_list, { id: secret_ref01_data.id })));
        // UPDATE
        const secret_ref01_data_up0 = {};
        secret_ref01_data_up0.id = secret_ref01_data.id;
        secret_ref01_data_up0['account_id'] = setup.idmap['account_id'];
        secret_ref01_data_up0['store_id'] = setup.idmap['store_id'];
        const secret_ref01_markdef_up0 = { name: 'comment', value: 'Mark01-secret_ref01_' + setup.now };
        secret_ref01_data_up0[secret_ref01_markdef_up0.name] = secret_ref01_markdef_up0.value;
        const secret_ref01_resdata_up0 = (await secret_ref01_ent.update(secret_ref01_data_up0)).data();
        (0, node_assert_1.default)(secret_ref01_resdata_up0.id === secret_ref01_data_up0.id);
        (0, node_assert_1.default)(secret_ref01_resdata_up0[secret_ref01_markdef_up0.name] === secret_ref01_markdef_up0.value);
        // LOAD
        const secret_ref01_match_dt0 = {};
        secret_ref01_match_dt0.id = secret_ref01_data.id;
        const secret_ref01_data_dt0 = (await secret_ref01_ent.load(secret_ref01_match_dt0)).data();
        (0, node_assert_1.default)(secret_ref01_data_dt0.id === secret_ref01_data.id);
        // REMOVE
        const secret_ref01_match_rm0 = { id: secret_ref01_data.id };
        await secret_ref01_ent.remove(secret_ref01_match_rm0);
        // LIST
        const secret_ref01_match_rt0 = {};
        secret_ref01_match_rt0['account_id'] = setup.idmap['account01'];
        secret_ref01_match_rt0['store_id'] = setup.idmap['store01'];
        const secret_ref01_list_rt0 = (await secret_ref01_ent.list(secret_ref01_match_rt0)).map((e) => e.data());
        (0, node_assert_1.default)(isempty(select(secret_ref01_list_rt0, { id: secret_ref01_data.id })));
    });
});
function basicSetup(extra) {
    // TODO: fix test def options
    const options = {}; // null
    // TODO: needs test utility to resolve path
    const entityDataFile = node_path_1.default.resolve(__dirname, '../../../../.sdk/test/entity/secret/SecretTestData.json');
    // TODO: file ready util needed?
    const entityDataSource = Fs.readFileSync(entityDataFile).toString('utf8');
    // TODO: need a xlang JSON parse utility in voxgig/struct with better error msgs
    const entityData = JSON.parse(entityDataSource);
    options.entity = entityData.existing;
    let client = __1.CloudflareWorkersSDK.test(options, extra);
    const struct = client.utility().struct;
    const merge = struct.merge;
    const transform = struct.transform;
    let idmap = transform(['secret01', 'secret02', 'secret03', 'account01', 'account02', 'account03', 'store01'], {
        '`$PACK`': ['', {
                '`$KEY`': '`$COPY`',
                '`$VAL`': ['`$FORMAT`', 'upper', '`$COPY`']
            }]
    });
    const env = (0, utility_1.envOverride)({
        'CLOUDFLARE_WORKERS_TEST_SECRET_ENTID': idmap,
        'CLOUDFLARE_WORKERS_TEST_LIVE': 'FALSE',
        'CLOUDFLARE_WORKERS_TEST_EXPLAIN': 'FALSE',
        'CLOUDFLARE_WORKERS_APIKEY': '',
    });
    idmap = env['CLOUDFLARE_WORKERS_TEST_SECRET_ENTID'];
    const live = 'TRUE' === env.CLOUDFLARE_WORKERS_TEST_LIVE;
    const transport = (0, live_runner_1.createLiveTransport)();
    if (live) {
        const rawIds = process.env['CLOUDFLARE_WORKERS_TEST_SECRET_ENTID'];
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
//# sourceMappingURL=SecretEntity.test.js.map