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
(0, node_test_1.describe)('ApplicationEntity', async () => {
    // Per-test live pacing. Delay is read from sdk-test-control.json's
    // `test.live.delayMs`; only sleeps when CLOUDFLARE_WORKERS_TEST_LIVE=TRUE.
    (0, node_test_1.afterEach)((0, utility_1.liveDelay)('CLOUDFLARE_WORKERS_TEST_LIVE'));
    (0, node_test_1.test)('instance', async () => {
        const testsdk = __1.CloudflareWorkersSDK.test();
        const ent = testsdk.Application();
        (0, node_assert_1.default)(null != ent);
    });
    (0, node_test_1.test)('basic', async (t) => {
        const live = 'TRUE' === process.env.CLOUDFLARE_WORKERS_TEST_LIVE;
        for (const op of ['create', 'list', 'update', 'load', 'remove']) {
            if (!live && (0, utility_1.maybeSkipControl)(t, 'entityOp', 'application.' + op, live))
                return;
        }
        const setup = basicSetup();
        if (setup.live) {
            return (0, live_entity_1.runLiveEntity)(setup, { "active": true, "alias": { "field": {} }, "fields": { "configuration": { "a": true, "h": "Configuration", "n": "configuration", "r": false, "sh": "Application configuration fields you can change without creating a rollout.", "t": "`$OBJECT`", "key$": "configuration", "index$": 0 }, "constraints": { "a": true, "h": "Constraints", "n": "constraints", "r": false, "t": "`$OBJECT`", "key$": "constraints", "index$": 1 }, "errors": { "a": true, "h": "Errors", "n": "errors", "r": true, "t": "`$ARRAY`", "key$": "errors", "index$": 2 }, "id": { "a": true, "h": "Id", "n": "id", "r": false, "t": "`$STRING`", "key$": "id", "index$": 3 }, "max_instances": { "a": true, "h": "Max Instances", "n": "max_instances", "r": false, "sh": "Maximum number of instances that an autoscaling application can run.", "t": "`$INTEGER`", "key$": "max_instances", "index$": 4 }, "messages": { "a": true, "h": "Messages", "n": "messages", "r": true, "t": "`$ARRAY`", "key$": "messages", "index$": 5 }, "observability": { "a": true, "h": "Observability", "n": "observability", "r": false, "sh": "Top-level application observability settings.", "t": "`$ANY`", "key$": "observability", "index$": 6 }, "result": { "a": true, "h": "Result", "n": "result", "r": true, "sh": "The public Containers API returns an application.", "t": "`$ANY`", "union": { "branches": 2, "count": 1, "depth": 0 }, "key$": "result", "index$": 7 }, "result_info": { "a": true, "h": "Result Info", "n": "result_info", "r": true, "sh": "Cursor pagination details for a v4 API list response.", "t": "`$OBJECT`", "key$": "result_info", "index$": 8 }, "rollout_active_grace_period": { "a": true, "h": "Rollout Active Grace Period", "n": "rollout_active_grace_period", "r": false, "sh": "Grace period for active instances to stay alive before becoming eligible for shutdown signal due to a rollout, in seconds.", "t": "`$INTEGER`", "key$": "rollout_active_grace_period", "index$": 9 }, "success": { "a": true, "h": "Success", "n": "success", "r": true, "sh": "Whether the API call was successful.", "t": "`$BOOLEAN`", "key$": "success", "index$": 10 } }, "id": { "field": "id", "name": "id" }, "name": "application", "op": { "create": { "input": "data", "name": "create", "points": [{ "a": true, "co": { "id": "POST /accounts/{account_id}/containers/applications", "source": "openapi3", "version": 2 }, "g": { "params": [{ "a": true, "ex": "account-123", "k": "param", "n": "account_id", "or": "account_id", "r": true, "t": "`$STRING`", "index$": 0 }] }, "k": "http", "m": "POST", "o": "/accounts/{account_id}/containers/applications", "q": { "exist": ["account_id"] }, "r": {}, "s": [{ "lit": "accounts" }, { "var": "account_id" }, { "lit": "containers" }, { "lit": "applications" }], "t": { "req": "`reqdata`", "res": "`body`" }, "index$": 0 }], "key$": "create" }, "list": { "input": "data", "name": "list", "points": [{ "a": true, "co": { "id": "GET /accounts/{account_id}/containers/applications", "source": "openapi3", "version": 2 }, "g": { "params": [{ "a": true, "ex": "account-123", "k": "param", "n": "account_id", "or": "account_id", "r": true, "t": "`$STRING`", "index$": 0 }], "query": [{ "a": true, "k": "query", "n": "image", "or": "image", "r": false, "t": "`$STRING`", "index$": 0 }, { "a": true, "k": "query", "n": "name", "or": "name", "r": false, "t": "`$STRING`", "index$": 1 }, { "a": true, "k": "query", "n": "page_token", "or": "page_token", "r": false, "t": "`$STRING`", "index$": 2 }, { "a": true, "k": "query", "n": "per_page", "or": "per_page", "r": false, "t": "`$INTEGER`", "index$": 3 }] }, "k": "http", "m": "GET", "o": "/accounts/{account_id}/containers/applications", "q": { "exist": ["account_id", "image", "name", "page_token", "per_page"] }, "r": {}, "s": [{ "lit": "accounts" }, { "var": "account_id" }, { "lit": "containers" }, { "lit": "applications" }], "t": { "req": "`reqdata`", "res": "`body`" }, "index$": 0 }, { "a": true, "co": { "id": "GET /accounts/{account_id}/containers/applications/{application_id}/versions", "source": "openapi3", "version": 2 }, "g": { "params": [{ "a": true, "ex": "account-123", "k": "param", "n": "account_id", "or": "account_id", "r": true, "t": "`$STRING`", "index$": 0 }, { "a": true, "k": "param", "n": "id", "or": "application_id", "r": true, "t": "`$STRING`", "index$": 1 }] }, "k": "http", "m": "GET", "o": "/accounts/{account_id}/containers/applications/{application_id}/versions", "q": { "$action": "version", "exist": ["account_id", "id"] }, "r": { "param": { "application_id": "id" } }, "s": [{ "lit": "accounts" }, { "var": "account_id" }, { "lit": "containers" }, { "lit": "applications" }, { "var": "id" }, { "lit": "versions" }], "t": { "req": "`reqdata`", "res": "`body`" }, "index$": 1 }], "key$": "list" }, "load": { "input": "data", "name": "load", "points": [{ "a": true, "co": { "id": "GET /accounts/{account_id}/containers/applications/{application_id}", "source": "openapi3", "version": 2 }, "g": { "params": [{ "a": true, "ex": "account-123", "k": "param", "n": "account_id", "or": "account_id", "r": true, "t": "`$STRING`", "index$": 0 }, { "a": true, "k": "param", "n": "id", "or": "application_id", "r": true, "t": "`$STRING`", "index$": 1 }] }, "k": "http", "m": "GET", "o": "/accounts/{account_id}/containers/applications/{application_id}", "q": { "exist": ["account_id", "id"] }, "r": { "param": { "application_id": "id" } }, "s": [{ "lit": "accounts" }, { "var": "account_id" }, { "lit": "containers" }, { "lit": "applications" }, { "var": "id" }], "t": { "req": "`reqdata`", "res": "`body`" }, "index$": 0 }], "key$": "load" }, "remove": { "input": "data", "name": "remove", "points": [{ "a": true, "co": { "id": "DELETE /accounts/{account_id}/containers/applications/{application_id}", "source": "openapi3", "version": 2 }, "g": { "params": [{ "a": true, "ex": "account-123", "k": "param", "n": "account_id", "or": "account_id", "r": true, "t": "`$STRING`", "index$": 0 }, { "a": true, "k": "param", "n": "id", "or": "application_id", "r": true, "t": "`$STRING`", "index$": 1 }] }, "k": "http", "m": "DELETE", "o": "/accounts/{account_id}/containers/applications/{application_id}", "q": { "exist": ["account_id", "id"] }, "r": { "param": { "application_id": "id" } }, "s": [{ "lit": "accounts" }, { "var": "account_id" }, { "lit": "containers" }, { "lit": "applications" }, { "var": "id" }], "t": { "req": "`reqdata`", "res": "`body`" }, "index$": 0 }], "key$": "remove" }, "update": { "input": "data", "name": "update", "points": [{ "a": true, "co": { "id": "PATCH /accounts/{account_id}/containers/applications/{application_id}", "source": "openapi3", "version": 2 }, "g": { "params": [{ "a": true, "ex": "account-123", "k": "param", "n": "account_id", "or": "account_id", "r": true, "t": "`$STRING`", "index$": 0 }, { "a": true, "k": "param", "n": "id", "or": "application_id", "r": true, "t": "`$STRING`", "index$": 1 }] }, "k": "http", "m": "PATCH", "o": "/accounts/{account_id}/containers/applications/{application_id}", "q": { "exist": ["account_id", "id"] }, "r": { "param": { "application_id": "id" } }, "s": [{ "lit": "accounts" }, { "var": "account_id" }, { "lit": "containers" }, { "lit": "applications" }, { "var": "id" }], "t": { "req": "`reqdata`", "res": "`body`" }, "index$": 0 }], "key$": "update" } }, "relations": { "ancestors": [["$.main.kit.entity.account"]] }, "key$": "application", "name__orig": "application", "Name": "Application", "name_": "application", "name-": "application", "NAME": "APPLICATION", "index$": 1 }, { "active": true, "entity": "application", "key$": "BasicApplicationFlow", "kind": "basic", "name": "BasicApplicationFlow", "param": {}, "step": [{ "a": true, "d": {}, "i": { "ref": "application_ref01" }, "m": { "account_id": "account01" }, "o": "create", "s": [], "v": [], "index$": 0 }, { "a": true, "d": {}, "i": {}, "m": { "account_id": "account01", "application_id": "application01" }, "o": "list", "s": [], "v": [{ "apply": "ItemExists", "def": { "ref": "application_ref01" } }], "index$": 1 }, { "a": true, "d": { "account_id": "account01" }, "i": { "ref": "application_ref01", "srcdatavar": "application_ref01_data", "suffix": "_up0" }, "m": {}, "o": "update", "s": [{ "apply": "TextFieldMark", "def": { "mark": "Mark01-application_ref01" } }], "v": [], "index$": 2 }, { "a": true, "d": {}, "i": { "ref": "application_ref01", "srcdatavar": "application_ref01_data", "suffix": "_dt0" }, "m": { "account_id": "account01", "id": "application01" }, "o": "load", "s": [], "v": [{ "apply": "TextFieldMark", "def": { "mark": "Mark01-application_ref01" } }], "index$": 3 }, { "a": true, "d": {}, "i": { "ref": "application_ref01", "suffix": "_rm0" }, "m": { "account_id": "account01", "id": "application01" }, "o": "remove", "s": [], "v": [], "index$": 4 }, { "a": true, "d": {}, "i": { "suffix": "_rt0" }, "m": { "account_id": "account01", "application_id": "application01" }, "o": "list", "s": [], "v": [{ "apply": "ItemNotExists", "def": { "ref": "application_ref01" } }], "index$": 5 }] }, 'Application', { "POST /accounts/{account_id}/containers/applications": { "protocol": "http", "requestBody": { "required": true, "content": { "application/json": { "schema": { "description": "Create a Containers application.\nSet `scheduling_policy` to `default` for a\nscheduler-backed application with deployment configuration, instance counts,\nconstraints, versions, and rollouts. Set it to `durable_object` for a\nDurable Object-managed application where each Durable Object creates and manages\nthe lifecycle of its container instance. For `durable_object` requests, supply\n`name`, `scheduling_policy`, and `durable_objects`, with optional `configuration`\nand top-level `observability` settings.\n", "oneOf": [{ "description": "Create a scheduler-backed Containers application. The Containers scheduler\nmaintains the requested instance count and applies deployment configuration,\nplacement, scaling, versions, and rollouts.\n", "type": "object", "properties": { "configuration": { "description": "Defines the deployment configuration for every deployment in this application.\n", "allOf": [{}] }, "constraints": { "type": "object", "properties": { "jurisdiction": {}, "regions": {} }, "x-ref": "#/components/schemas/cc_ApplicationConstraints" }, "durable_objects": { "description": "Optionally associates this scheduler-backed application with a Durable Object namespace.", "allOf": [{}] }, "instances": { "description": "The initial number of deployments to create.", "type": "integer", "minimum": 0 }, "max_instances": { "description": "Sets the maximum number of instances that the application can run.", "type": "integer", "minimum": 0 }, "name": { "description": "The name for this application.", "type": "string" }, "observability": { "description": "Top-level observability settings for the application.\nThis field is mutually exclusive with configuration.observability.\n", "allOf": [{}] }, "rollout_active_grace_period": { "description": "Grace period for active instances to stay alive before becoming eligible for shutdown signal due to a rollout, in seconds.\nDefaults to 0.\n", "type": "integer", "default": 0, "maximum": 604800, "minimum": 0, "x-ref": "#/components/schemas/cc_ApplicationRolloutActiveGracePeriod" }, "scheduling_policy": { "description": "Selects a scheduler-backed application. Use `default` when the Containers\nscheduler should maintain the requested number of instances and manage deployment\nconfiguration, placement, scaling, versions, and rollouts.\n", "type": "string", "enum": ["default"], "x-ref": "#/components/schemas/cc_ScheduledApplicationSchedulingPolicy" } }, "additionalProperties": false, "required": ["name", "scheduling_policy", "instances", "max_instances", "configuration"], "x-ref": "#/components/schemas/cc_ContainersCreateScheduledApplicationRequest" }, { "description": "Create a Durable Object-managed Containers application. Each Durable Object\ncreates and manages the lifecycle of its container instance. Supply `name`,\n`scheduling_policy`, and `durable_objects`, with optional `configuration` and\ntop-level `observability` settings. Deployment configuration, instance counts,\nscaling, constraints, versions, and rollouts do not apply.\n", "type": "object", "properties": { "configuration": { "description": "Configuration for a Durable Object-managed application.", "allOf": [{}] }, "durable_objects": { "description": "The customer-owned Durable Object namespace that owns this application and its instances.", "allOf": [{}] }, "name": { "description": "The name for this application.", "type": "string" }, "observability": { "description": "Application-wide logging settings for a Durable Object-managed application.\nThe application publishes these settings to its runtime metadata. Updating\nthem does not create a deployment or rollout.\n", "type": "object", "properties": { "logs": {} }, "additionalProperties": false, "x-ref": "#/components/schemas/cc_DurableObjectApplicationObservability" }, "scheduling_policy": { "description": "Selects a Durable Object-managed application. Each Durable Object creates and\nmanages the lifecycle of its container instance. Configure application-wide\nobservability settings here. Deployment configuration, scaling, placement\nconstraints, versions, and rollouts do not apply.\n", "type": "string", "enum": ["durable_object"], "x-ref": "#/components/schemas/cc_DurableObjectApplicationSchedulingPolicy" } }, "additionalProperties": false, "required": ["name", "scheduling_policy", "durable_objects"], "x-ref": "#/components/schemas/cc_ContainersCreateDurableObjectApplicationRequest" }], "x-ref": "#/components/schemas/cc_ContainersCreateApplicationRequest", "index$": 1 } } } }, "parameters": [{ "description": "Account identifier.", "in": "path", "name": "account_id", "required": true, "schema": { "type": "string", "example": "account-123" }, "x-ref": "#/components/parameters/cc_AccountId", "index$": 0 }] }, "GET /accounts/{account_id}/containers/applications": { "protocol": "http", "parameters": [{ "description": "Account identifier.", "in": "path", "name": "account_id", "required": true, "schema": { "type": "string", "example": "account-123" }, "x-ref": "#/components/parameters/cc_AccountId", "index$": 0 }, { "name": "per_page", "in": "query", "description": "Maximum number of applications to return per page. Defaults to all, or 100 when `page_token` is set.", "schema": { "type": "integer", "maximum": 500, "minimum": 1 }, "index$": 1 }, { "name": "page_token", "in": "query", "description": "Opaque token from a previous response to retrieve the next page.", "schema": { "type": "string" }, "index$": 2 }, { "name": "name", "in": "query", "description": "Filter applications by name.", "schema": { "description": "The application name.", "type": "string", "x-ref": "#/components/schemas/cc_ApplicationName" }, "index$": 3 }, { "name": "image", "in": "query", "description": "Filter applications by image.", "schema": { "description": "Image url.", "type": "string", "x-ref": "#/components/schemas/cc_Image" }, "index$": 4 }] }, "GET /accounts/{account_id}/containers/applications/{application_id}/versions": { "protocol": "http", "parameters": [{ "description": "Account identifier.", "in": "path", "name": "account_id", "required": true, "schema": { "type": "string", "example": "account-123" }, "x-ref": "#/components/parameters/cc_AccountId", "index$": 0 }, { "name": "application_id", "in": "path", "required": true, "schema": { "description": "An Application ID represents an identifier of an application.", "type": "string", "x-ref": "#/components/schemas/cc_ApplicationID" }, "index$": 1 }] }, "GET /accounts/{account_id}/containers/applications/{application_id}": { "protocol": "http", "parameters": [{ "description": "Account identifier.", "in": "path", "name": "account_id", "required": true, "schema": { "type": "string", "example": "account-123" }, "x-ref": "#/components/parameters/cc_AccountId", "index$": 0 }, { "name": "application_id", "in": "path", "required": true, "schema": { "description": "An Application ID represents an identifier of an application.", "type": "string", "x-ref": "#/components/schemas/cc_ApplicationID" }, "index$": 1 }] }, "DELETE /accounts/{account_id}/containers/applications/{application_id}": { "protocol": "http", "parameters": [{ "description": "Account identifier.", "in": "path", "name": "account_id", "required": true, "schema": { "type": "string", "example": "account-123" }, "x-ref": "#/components/parameters/cc_AccountId", "index$": 0 }, { "name": "application_id", "in": "path", "required": true, "schema": { "description": "An Application ID represents an identifier of an application.", "type": "string", "x-ref": "#/components/schemas/cc_ApplicationID" }, "index$": 1 }] }, "PATCH /accounts/{account_id}/containers/applications/{application_id}": { "protocol": "http", "requestBody": { "required": true, "content": { "application/json": { "schema": { "description": "Request body for modifying a Containers application without replacing its instances.\nDurable Object-managed applications support only top-level observability.logs.enabled.\nThe other fields apply to scheduler-backed applications, where deployment configuration\nchanges such as image, resource allocation, command, and environment variables require\nan application rollout.\n", "type": "object", "properties": { "configuration": { "description": "Application configuration fields you can change without creating a rollout.", "type": "object", "properties": { "authorized_keys": { "type": "array", "items": { "description": "User-provided SSH public key.", "type": "object", "properties": {}, "required": [], "x-ref": "#/components/schemas/cc_UserSSHPublicKey" } }, "wrangler_ssh": { "description": "Configuration properties for connecting with SSH to a container using Wrangler.", "type": "object", "properties": { "enabled": {}, "port": {} }, "x-ref": "#/components/schemas/cc_WranglerSSHConfig" } }, "x-ref": "#/components/schemas/cc_ContainersModifyApplicationConfiguration", "key$": "configuration" }, "constraints": { "type": "object", "properties": { "jurisdiction": { "description": "Restricts placement to datacenters in the selected jurisdiction. Choose \"eu\", \"fedramp\", or \"us\". When combined with regions, EU supports EEUR and WEUR while FedRAMP and US support ENAM and WNAM.", "type": "string", "x-ref": "#/components/schemas/cc_ApplicationJurisdiction" }, "regions": { "items": { "description": "Represents a group of datacenters. Choose one of \"AFR\", \"APAC\", \"EEUR\", \"ENAM\", \"WNAM\", \"ME\", \"OC\", \"SAM\", or \"WEUR\".\n", "example": "WNAM", "type": "string", "x-ref": "#/components/schemas/cc_Region" }, "type": "array" } }, "x-ref": "#/components/schemas/cc_ApplicationConstraints", "key$": "constraints" }, "max_instances": { "description": "Maximum number of instances that an autoscaling application can run.", "type": "integer", "minimum": 0, "key$": "max_instances" }, "observability": { "description": "Top-level application observability settings. Scheduler-backed applications\nhot-reload these settings across existing instances. An existing Durable\nObject-managed application accepts only `logs.enabled` and publishes these settings\nto runtime metadata without creating deployments or rollouts.\n", "allOf": [{ "description": "Settings for application observability such as logging. Supported fields depend\non the application's scheduling policy. Durable Object-managed applications\naccept only `logs.enabled`.\n", "type": "object", "properties": { "logs": {} }, "x-ref": "#/components/schemas/cc_ApplicationObservability" }], "key$": "observability" }, "rollout_active_grace_period": { "description": "Grace period for active instances to stay alive before becoming eligible for shutdown signal due to a rollout, in seconds.\nDefaults to 0.\n", "type": "integer", "default": 0, "maximum": 604800, "minimum": 0, "x-ref": "#/components/schemas/cc_ApplicationRolloutActiveGracePeriod", "key$": "rollout_active_grace_period" } }, "x-ref": "#/components/schemas/cc_ContainersModifyApplicationRequestBody", "index$": 1 } } } }, "parameters": [{ "description": "Account identifier.", "in": "path", "name": "account_id", "required": true, "schema": { "type": "string", "example": "account-123" }, "x-ref": "#/components/parameters/cc_AccountId", "index$": 0 }, { "name": "application_id", "in": "path", "required": true, "schema": { "description": "An Application ID represents an identifier of an application.", "type": "string", "x-ref": "#/components/schemas/cc_ApplicationID" }, "index$": 1 }] } });
        }
        const client = setup.client;
        const struct = setup.struct;
        const isempty = struct.isempty;
        const select = struct.select;
        // CREATE
        const application_ref01_ent = client.Application();
        let application_ref01_data = setup.data.new.application['application_ref01'];
        application_ref01_data['account_id'] = setup.idmap['account01'];
        application_ref01_data = (await application_ref01_ent.create(application_ref01_data)).data();
        (0, node_assert_1.default)(null != application_ref01_data.id);
        // LIST
        const application_ref01_match = {};
        application_ref01_match['account_id'] = setup.idmap['account01'];
        application_ref01_match['application_id'] = setup.idmap['application01'];
        const application_ref01_list = (await application_ref01_ent.list(application_ref01_match)).map((e) => e.data());
        (0, node_assert_1.default)(!isempty(select(application_ref01_list, { id: application_ref01_data.id })));
        // UPDATE
        const application_ref01_data_up0 = {};
        application_ref01_data_up0.id = application_ref01_data.id;
        application_ref01_data_up0['account_id'] = setup.idmap['account_id'];
        const application_ref01_resdata_up0 = (await application_ref01_ent.update(application_ref01_data_up0)).data();
        (0, node_assert_1.default)(application_ref01_resdata_up0.id === application_ref01_data_up0.id);
        // LOAD
        const application_ref01_match_dt0 = {};
        application_ref01_match_dt0.id = application_ref01_data.id;
        const application_ref01_data_dt0 = (await application_ref01_ent.load(application_ref01_match_dt0)).data();
        (0, node_assert_1.default)(application_ref01_data_dt0.id === application_ref01_data.id);
        // REMOVE
        const application_ref01_match_rm0 = { id: application_ref01_data.id };
        await application_ref01_ent.remove(application_ref01_match_rm0);
        // LIST
        const application_ref01_match_rt0 = {};
        application_ref01_match_rt0['account_id'] = setup.idmap['account01'];
        application_ref01_match_rt0['application_id'] = setup.idmap['application01'];
        const application_ref01_list_rt0 = (await application_ref01_ent.list(application_ref01_match_rt0)).map((e) => e.data());
        (0, node_assert_1.default)(isempty(select(application_ref01_list_rt0, { id: application_ref01_data.id })));
    });
});
function basicSetup(extra) {
    // TODO: fix test def options
    const options = {}; // null
    // TODO: needs test utility to resolve path
    const entityDataFile = node_path_1.default.resolve(__dirname, '../../../../.sdk/test/entity/application/ApplicationTestData.json');
    // TODO: file ready util needed?
    const entityDataSource = Fs.readFileSync(entityDataFile).toString('utf8');
    // TODO: need a xlang JSON parse utility in voxgig/struct with better error msgs
    const entityData = JSON.parse(entityDataSource);
    options.entity = entityData.existing;
    let client = __1.CloudflareWorkersSDK.test(options, extra);
    const struct = client.utility().struct;
    const merge = struct.merge;
    const transform = struct.transform;
    let idmap = transform(['application01', 'application02', 'application03', 'account01', 'account02', 'account03'], {
        '`$PACK`': ['', {
                '`$KEY`': '`$COPY`',
                '`$VAL`': ['`$FORMAT`', 'upper', '`$COPY`']
            }]
    });
    const env = (0, utility_1.envOverride)({
        'CLOUDFLARE_WORKERS_TEST_APPLICATION_ENTID': idmap,
        'CLOUDFLARE_WORKERS_TEST_LIVE': 'FALSE',
        'CLOUDFLARE_WORKERS_TEST_EXPLAIN': 'FALSE',
        'CLOUDFLARE_WORKERS_APIKEY': '',
    });
    idmap = env['CLOUDFLARE_WORKERS_TEST_APPLICATION_ENTID'];
    const live = 'TRUE' === env.CLOUDFLARE_WORKERS_TEST_LIVE;
    const transport = (0, live_runner_1.createLiveTransport)();
    if (live) {
        const rawIds = process.env['CLOUDFLARE_WORKERS_TEST_APPLICATION_ENTID'];
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
//# sourceMappingURL=ApplicationEntity.test.js.map