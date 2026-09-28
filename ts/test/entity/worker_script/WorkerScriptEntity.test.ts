

import Path from 'node:path'
import * as Fs from 'node:fs'

import { test, describe, afterEach } from 'node:test'
import assert from 'node:assert'
import { createLiveTransport } from '../../live-runner'
import { runLiveEntity } from '../../live-entity'


import { CloudflareWorkersSDK, BaseFeature, stdutil } from '../../..'

import {
  envOverride,
  liveClientOptions,
  liveDelay,
  loadEnvLocal,
  makeCtrl,
  makeMatch,
  makeReqdata,
  makeStepData,
  makeValid,
  maybeSkipControl,
} from '../../utility'


loadEnvLocal(__dirname + '/../../../.env.local')


describe('WorkerScriptEntity', async () => {

  // Per-test live pacing. Delay is read from sdk-test-control.json's
  // `test.live.delayMs`; only sleeps when CLOUDFLARE_WORKERS_TEST_LIVE=TRUE.
  afterEach(liveDelay('CLOUDFLARE_WORKERS_TEST_LIVE'))

  test('instance', async () => {
    const testsdk = CloudflareWorkersSDK.test()
    const ent = testsdk.WorkerScript()
    assert(null != ent)
  })


  test('basic', async (t) => {

    const live = 'TRUE' === process.env.CLOUDFLARE_WORKERS_TEST_LIVE
    for (const op of ['create', 'list', 'update', 'load', 'remove']) {
      if (!live && maybeSkipControl(t, 'entityOp', 'worker_script.' + op, live)) return
    }

    
    const setup = basicSetup()
    if (setup.live) {
      return runLiveEntity(setup, {"active":true,"alias":{"field":{}},"fields":{"errors":{"a":true,"h":"Errors","n":"errors","r":true,"t":"`$ARRAY`","key$":"errors","index$":0},"id":{"a":true,"h":"Id","n":"id","r":false,"t":"`$STRING`","key$":"id","index$":1},"messages":{"a":true,"h":"Messages","n":"messages","r":true,"t":"`$ARRAY`","key$":"messages","index$":2},"result":{"a":true,"h":"Result","n":"result","op":{"list":{"req":true,"type":"`$ARRAY`"}},"r":false,"sh":"A secret value accessible through a binding.","t":"`$OBJECT`","key$":"result","index$":3},"success":{"a":true,"h":"Success","n":"success","r":true,"sh":"Whether the API call was successful.","t":"`$BOOLEAN`","key$":"success","index$":4}},"id":{"field":"id","name":"id"},"name":"worker_script","op":{"create":{"input":"data","name":"create","points":[{"a":true,"co":{"id":"POST /accounts/{account_id}/workers/scripts/{script_name}/subdomain","source":"openapi3","version":2},"g":{"params":[{"a":true,"ex":"023e105f4ecef8ad9ca31a8372d0c353","k":"param","n":"account_id","or":"account_id","r":true,"t":"`$STRING`","index$":0},{"a":true,"ex":"this-is_my_script-01","k":"param","n":"script_name","or":"script_name","r":true,"t":"`$STRING`","index$":1}]},"k":"http","m":"POST","o":"/accounts/{account_id}/workers/scripts/{script_name}/subdomain","q":{"$action":"subdomain","exist":["account_id","script_name"]},"r":{},"s":[{"lit":"accounts"},{"var":"account_id"},{"lit":"workers"},{"lit":"scripts"},{"var":"script_name"},{"lit":"subdomain"}],"t":{"req":"`reqdata`","res":"`body`"},"index$":0}],"key$":"create"},"list":{"input":"data","name":"list","points":[{"a":true,"co":{"id":"GET /accounts/{account_id}/workers/scripts-search","source":"openapi3","version":2},"g":{"params":[{"a":true,"ex":"023e105f4ecef8ad9ca31a8372d0c353","k":"param","n":"account_id","or":"account_id","r":true,"t":"`$STRING`","index$":0}],"query":[{"a":true,"ex":"bdf3567828824b74aadd550004cf4913","k":"query","n":"id","or":"id","r":false,"t":"`$STRING`","index$":0},{"a":true,"ex":"my-worker","k":"query","n":"name","or":"name","r":false,"t":"`$STRING`","index$":1},{"a":true,"ex":"created_on","k":"query","n":"order_by","or":"order_by","r":false,"t":"`$STRING`","index$":2},{"a":true,"ex":1,"k":"query","n":"page","or":"page","r":false,"t":"`$INTEGER`","index$":3},{"a":true,"ex":10,"k":"query","n":"per_page","or":"per_page","r":false,"t":"`$INTEGER`","index$":4}]},"k":"http","m":"GET","o":"/accounts/{account_id}/workers/scripts-search","q":{"exist":["account_id","id","name","order_by","page","per_page"]},"r":{},"s":[{"lit":"accounts"},{"var":"account_id"},{"lit":"workers"},{"lit":"scripts-search"}],"t":{"req":"`reqdata`","res":"`body`"},"index$":0},{"a":true,"co":{"id":"GET /accounts/{account_id}/workers/scripts/{script_name}/secrets","source":"openapi3","version":2},"g":{"params":[{"a":true,"ex":"023e105f4ecef8ad9ca31a8372d0c353","k":"param","n":"account_id","or":"account_id","r":true,"t":"`$STRING`","index$":0},{"a":true,"ex":"this-is_my_script-01","k":"param","n":"script_name","or":"script_name","r":true,"t":"`$STRING`","index$":1}]},"k":"http","m":"GET","o":"/accounts/{account_id}/workers/scripts/{script_name}/secrets","q":{"exist":["account_id","script_name"]},"r":{},"s":[{"lit":"accounts"},{"var":"account_id"},{"lit":"workers"},{"lit":"scripts"},{"var":"script_name"},{"lit":"secrets"}],"t":{"req":"`reqdata`","res":"`body`"},"index$":1},{"a":true,"co":{"id":"GET /accounts/{account_id}/workers/scripts/{script_name}/subdomain","source":"openapi3","version":2},"g":{"params":[{"a":true,"ex":"023e105f4ecef8ad9ca31a8372d0c353","k":"param","n":"account_id","or":"account_id","r":true,"t":"`$STRING`","index$":0},{"a":true,"ex":"this-is_my_script-01","k":"param","n":"script_name","or":"script_name","r":true,"t":"`$STRING`","index$":1}]},"k":"http","m":"GET","o":"/accounts/{account_id}/workers/scripts/{script_name}/subdomain","q":{"$action":"subdomain","exist":["account_id","script_name"]},"r":{},"s":[{"lit":"accounts"},{"var":"account_id"},{"lit":"workers"},{"lit":"scripts"},{"var":"script_name"},{"lit":"subdomain"}],"t":{"req":"`reqdata`","res":"`body`"},"index$":2}],"key$":"list"},"load":{"input":"data","name":"load","points":[{"a":true,"co":{"id":"GET /accounts/{account_id}/workers/scripts/{script_name}/secrets/{secret_name}","source":"openapi3","version":2},"g":{"params":[{"a":true,"ex":"023e105f4ecef8ad9ca31a8372d0c353","k":"param","n":"account_id","or":"account_id","r":true,"t":"`$STRING`","index$":0},{"a":true,"ex":"this-is_my_script-01","k":"param","n":"script_id","or":"script_name","r":true,"t":"`$STRING`","index$":1},{"a":true,"ex":"mySecret","k":"param","n":"secret_name","or":"secret_name","r":true,"t":"`$STRING`","index$":2}],"query":[{"a":true,"ex":true,"k":"query","n":"url_encoded","or":"url_encoded","r":false,"t":"`$BOOLEAN`","index$":0}]},"k":"http","m":"GET","o":"/accounts/{account_id}/workers/scripts/{script_name}/secrets/{secret_name}","q":{"exist":["account_id","script_id","secret_name","url_encoded"]},"r":{"param":{"script_name":"script_id"}},"s":[{"lit":"accounts"},{"var":"account_id"},{"lit":"workers"},{"lit":"scripts"},{"var":"script_id"},{"lit":"secrets"},{"var":"secret_name"}],"t":{"req":"`reqdata`","res":"`body`"},"index$":0},{"a":true,"co":{"id":"GET /accounts/{account_id}/workers/scripts/{script_name}","source":"openapi3","version":2},"g":{"params":[{"a":true,"ex":"023e105f4ecef8ad9ca31a8372d0c353","k":"param","n":"account_id","or":"account_id","r":true,"t":"`$STRING`","index$":0},{"a":true,"ex":"this-is_my_script-01","k":"param","n":"id","or":"script_name","r":true,"t":"`$STRING`","index$":1}]},"k":"http","m":"GET","o":"/accounts/{account_id}/workers/scripts/{script_name}","q":{"exist":["account_id","id"]},"r":{"param":{"script_name":"id"}},"s":[{"lit":"accounts"},{"var":"account_id"},{"lit":"workers"},{"lit":"scripts"},{"var":"id"}],"t":{"req":"`reqdata`","res":"`body`"},"index$":1},{"a":true,"co":{"id":"GET /accounts/{account_id}/workers/scripts/{script_name}/content/v2","source":"openapi3","version":2},"g":{"params":[{"a":true,"ex":"023e105f4ecef8ad9ca31a8372d0c353","k":"param","n":"account_id","or":"account_id","r":true,"t":"`$STRING`","index$":0},{"a":true,"ex":"this-is_my_script-01","k":"param","n":"script_id","or":"script_name","r":true,"t":"`$STRING`","index$":1}]},"k":"http","m":"GET","o":"/accounts/{account_id}/workers/scripts/{script_name}/content/v2","q":{"exist":["account_id","script_id"]},"r":{"param":{"script_name":"script_id"}},"s":[{"lit":"accounts"},{"var":"account_id"},{"lit":"workers"},{"lit":"scripts"},{"var":"script_id"},{"lit":"content"},{"lit":"v2"}],"t":{"req":"`reqdata`","res":"`body`"},"index$":2}],"key$":"load"},"patch":{"input":"data","name":"patch","points":[{"a":true,"co":{"id":"PATCH /accounts/{account_id}/workers/scripts/{script_name}/secrets-bulk","source":"openapi3","version":2},"g":{"params":[{"a":true,"ex":"023e105f4ecef8ad9ca31a8372d0c353","k":"param","n":"account_id","or":"account_id","r":true,"t":"`$STRING`","index$":0},{"a":true,"ex":"this-is_my_script-01","k":"param","n":"script_name","or":"script_name","r":true,"t":"`$STRING`","index$":1}]},"k":"http","m":"PATCH","o":"/accounts/{account_id}/workers/scripts/{script_name}/secrets-bulk","q":{"$action":"secrets_bulk","exist":["account_id","script_name"]},"r":{},"s":[{"lit":"accounts"},{"var":"account_id"},{"lit":"workers"},{"lit":"scripts"},{"var":"script_name"},{"lit":"secrets-bulk"}],"t":{"req":"`reqdata`","res":"`body`"},"index$":0}],"key$":"patch"},"remove":{"input":"data","name":"remove","points":[{"a":true,"co":{"id":"DELETE /accounts/{account_id}/workers/scripts/{script_name}/subdomain","source":"openapi3","version":2},"g":{"params":[{"a":true,"ex":"023e105f4ecef8ad9ca31a8372d0c353","k":"param","n":"account_id","or":"account_id","r":true,"t":"`$STRING`","index$":0},{"a":true,"ex":"this-is_my_script-01","k":"param","n":"script_name","or":"script_name","r":true,"t":"`$STRING`","index$":1}]},"k":"http","m":"DELETE","o":"/accounts/{account_id}/workers/scripts/{script_name}/subdomain","q":{"$action":"subdomain","exist":["account_id","script_name"]},"r":{},"s":[{"lit":"accounts"},{"var":"account_id"},{"lit":"workers"},{"lit":"scripts"},{"var":"script_name"},{"lit":"subdomain"}],"t":{"req":"`reqdata`","res":"`body`"},"index$":0}],"key$":"remove"},"update":{"input":"data","name":"update","points":[{"a":true,"co":{"id":"PUT /accounts/{account_id}/workers/scripts/{script_name}","source":"openapi3","version":2},"g":{"params":[{"a":true,"ex":"023e105f4ecef8ad9ca31a8372d0c353","k":"param","n":"account_id","or":"account_id","r":true,"t":"`$STRING`","index$":0},{"a":true,"ex":"this-is_my_script-01","k":"param","n":"id","or":"script_name","r":true,"t":"`$STRING`","index$":1}],"query":[{"a":true,"k":"query","n":"bindings_inherit","or":"bindings_inherit","r":false,"t":"`$STRING`","index$":0}]},"k":"http","m":"PUT","o":"/accounts/{account_id}/workers/scripts/{script_name}","q":{"exist":["account_id","bindings_inherit","id"]},"r":{"param":{"script_name":"id"}},"s":[{"lit":"accounts"},{"var":"account_id"},{"lit":"workers"},{"lit":"scripts"},{"var":"id"}],"t":{"req":"`reqdata`","res":"`body`"},"index$":0},{"a":true,"co":{"id":"PUT /accounts/{account_id}/workers/scripts/{script_name}/secrets","source":"openapi3","version":2},"g":{"params":[{"a":true,"ex":"023e105f4ecef8ad9ca31a8372d0c353","k":"param","n":"account_id","or":"account_id","r":true,"t":"`$STRING`","index$":0},{"a":true,"ex":"this-is_my_script-01","k":"param","n":"script_name","or":"script_name","r":true,"t":"`$STRING`","index$":1}]},"k":"http","m":"PUT","o":"/accounts/{account_id}/workers/scripts/{script_name}/secrets","q":{"exist":["account_id","script_name"]},"r":{},"s":[{"lit":"accounts"},{"var":"account_id"},{"lit":"workers"},{"lit":"scripts"},{"var":"script_name"},{"lit":"secrets"}],"t":{"req":"`reqdata`","res":"`body`"},"index$":1}],"key$":"update"}},"relations":{"ancestors":[["$.main.kit.entity.account"],["$.main.kit.entity.account","$.main.kit.entity.script"],["$.main.kit.entity.account","$.main.kit.entity.script","$.main.kit.entity.secret"]]},"key$":"worker_script","name__orig":"worker_script","Name":"WorkerScript","name_":"worker_script","name-":"worker-script","NAME":"WORKER_SCRIPT","index$":50}, {"active":true,"entity":"worker_script","key$":"BasicWorkerScriptFlow","kind":"basic","name":"BasicWorkerScriptFlow","param":{},"step":[{"a":true,"d":{},"i":{"ref":"worker_script_ref01"},"m":{"account_id":"account01","script_id":"script01","script_name":"script_name01"},"o":"create","s":[],"v":[],"index$":0},{"a":true,"d":{},"i":{},"m":{"account_id":"account01","script_name":"script_name01"},"o":"list","s":[],"v":[{"apply":"ItemExists","def":{"ref":"worker_script_ref01"}}],"index$":1},{"a":true,"d":{"account_id":"account01"},"i":{"ref":"worker_script_ref01","srcdatavar":"worker_script_ref01_data","suffix":"_up0"},"m":{},"o":"update","s":[{"apply":"TextFieldMark","def":{"mark":"Mark01-worker_script_ref01"}}],"v":[],"index$":2},{"a":true,"d":{},"i":{"ref":"worker_script_ref01","srcdatavar":"worker_script_ref01_data","suffix":"_dt0"},"m":{"account_id":"account01","id":"worker_script01"},"o":"load","s":[],"v":[{"apply":"TextFieldMark","def":{"mark":"Mark01-worker_script_ref01"}}],"index$":3},{"a":true,"d":{},"i":{"ref":"worker_script_ref01","suffix":"_rm0"},"m":{"account_id":"account01","id":"worker_script01"},"o":"remove","s":[],"v":[],"index$":4},{"a":true,"d":{},"i":{"suffix":"_rt0"},"m":{"account_id":"account01","script_name":"script_name01"},"o":"list","s":[],"v":[{"apply":"ItemNotExists","def":{"ref":"worker_script_ref01"}}],"index$":5}]}, 'WorkerScript', {"POST /accounts/{account_id}/workers/scripts/{script_name}/subdomain":{"protocol":"http","requestBody":{"required":true,"content":{"application/json":{"schema":{"type":"object","properties":{"enabled":{"description":"Whether the Worker should be available on the workers.dev subdomain.","type":"boolean","example":true,"x-auditable":true},"previews_enabled":{"description":"Whether the Worker's Preview URLs should be available on the workers.dev subdomain.","type":"boolean","example":false,"x-auditable":true,"x-stainless-terraform-configurability":"computed_optional"}},"required":["enabled"]}}}},"parameters":[{"name":"account_id","in":"path","required":true,"schema":{"description":"Identifier.","type":"string","example":"023e105f4ecef8ad9ca31a8372d0c353","maxLength":32,"x-auditable":true,"x-ref":"#/components/schemas/workers_identifier"},"index$":0},{"name":"script_name","in":"path","required":true,"schema":{"description":"Name of the script.","type":"string","example":"this-is_my_script-01","pattern":"^[a-z0-9_][a-z0-9-_]*$","x-auditable":true,"x-ref":"#/components/schemas/workers_script_name"},"index$":1}]},"GET /accounts/{account_id}/workers/scripts-search":{"protocol":"http","parameters":[{"name":"account_id","in":"path","required":true,"schema":{"description":"Identifier.","type":"string","example":"023e105f4ecef8ad9ca31a8372d0c353","maxLength":32,"x-auditable":true,"x-ref":"#/components/schemas/workers_identifier"},"index$":0},{"name":"name","in":"query","schema":{"description":"Worker name to search for. Both exact and partial matches are returned.","type":"string","example":"my-worker"},"index$":1},{"name":"id","in":"query","schema":{"description":"Worker ID (also called tag) to search for. Only exact matches are returned.","type":"string","example":"bdf3567828824b74aadd550004cf4913"},"index$":2},{"name":"order_by","in":"query","schema":{"description":"Property to sort results by. Results are sorted in ascending order.","type":"string","example":"created_on","default":"name","enum":["created_on","modified_on","name"]},"index$":3},{"name":"page","in":"query","description":"Current page.","schema":{"type":"integer","default":1,"minimum":1},"index$":4},{"name":"per_page","in":"query","description":"Items per page.","schema":{"type":"integer","default":10,"maximum":100,"minimum":1},"index$":5}]},"GET /accounts/{account_id}/workers/scripts/{script_name}/secrets":{"protocol":"http","parameters":[{"name":"account_id","in":"path","required":true,"schema":{"description":"Identifier.","type":"string","example":"023e105f4ecef8ad9ca31a8372d0c353","maxLength":32,"x-auditable":true,"x-ref":"#/components/schemas/workers_identifier"},"index$":0},{"name":"script_name","in":"path","required":true,"schema":{"description":"Name of the script.","type":"string","example":"this-is_my_script-01","pattern":"^[a-z0-9_][a-z0-9-_]*$","x-auditable":true,"x-ref":"#/components/schemas/workers_script_name"},"index$":1}]},"GET /accounts/{account_id}/workers/scripts/{script_name}/subdomain":{"protocol":"http","parameters":[{"name":"account_id","in":"path","required":true,"schema":{"description":"Identifier.","type":"string","example":"023e105f4ecef8ad9ca31a8372d0c353","maxLength":32,"x-auditable":true,"x-ref":"#/components/schemas/workers_identifier"},"index$":0},{"name":"script_name","in":"path","required":true,"schema":{"description":"Name of the script.","type":"string","example":"this-is_my_script-01","pattern":"^[a-z0-9_][a-z0-9-_]*$","x-auditable":true,"x-ref":"#/components/schemas/workers_script_name"},"index$":1}]},"GET /accounts/{account_id}/workers/scripts/{script_name}/secrets/{secret_name}":{"protocol":"http","parameters":[{"name":"account_id","in":"path","required":true,"schema":{"description":"Identifier.","type":"string","example":"023e105f4ecef8ad9ca31a8372d0c353","maxLength":32,"x-auditable":true,"x-ref":"#/components/schemas/workers_identifier"},"index$":0},{"name":"script_name","in":"path","required":true,"schema":{"description":"Name of the script.","type":"string","example":"this-is_my_script-01","pattern":"^[a-z0-9_][a-z0-9-_]*$","x-auditable":true,"x-ref":"#/components/schemas/workers_script_name"},"index$":1},{"name":"secret_name","in":"path","required":true,"schema":{"description":"A JavaScript variable name for the secret binding.","type":"string","example":"mySecret","readOnly":true,"x-auditable":true,"x-ref":"#/components/schemas/workers_secret_name"},"index$":2},{"name":"url_encoded","in":"query","schema":{"description":"Flag that indicates whether the secret name is URL encoded.","type":"boolean","example":true,"readOnly":true,"x-auditable":true,"x-ref":"#/components/schemas/workers_secret_name_url_encoded"},"index$":3}]},"GET /accounts/{account_id}/workers/scripts/{script_name}":{"protocol":"http","parameters":[{"name":"account_id","in":"path","required":true,"schema":{"description":"Identifier.","type":"string","example":"023e105f4ecef8ad9ca31a8372d0c353","maxLength":32,"x-auditable":true,"x-ref":"#/components/schemas/workers_identifier"},"index$":0},{"name":"script_name","in":"path","required":true,"schema":{"description":"Name of the script.","type":"string","example":"this-is_my_script-01","pattern":"^[a-z0-9_][a-z0-9-_]*$","x-auditable":true,"x-ref":"#/components/schemas/workers_script_name"},"index$":1}]},"GET /accounts/{account_id}/workers/scripts/{script_name}/content/v2":{"protocol":"http","parameters":[{"name":"account_id","in":"path","required":true,"schema":{"description":"Identifier.","type":"string","example":"023e105f4ecef8ad9ca31a8372d0c353","maxLength":32,"x-auditable":true,"x-ref":"#/components/schemas/workers_identifier"},"index$":0},{"name":"script_name","in":"path","required":true,"schema":{"description":"Name of the script.","type":"string","example":"this-is_my_script-01","pattern":"^[a-z0-9_][a-z0-9-_]*$","x-auditable":true,"x-ref":"#/components/schemas/workers_script_name"},"index$":1}]},"PATCH /accounts/{account_id}/workers/scripts/{script_name}/secrets-bulk":{"protocol":"http","requestBody":{"required":true,"content":{"application/json":{"schema":{"description":"JSON Merge Patch (RFC 7396) request body for bulk secret changes.\n","type":"object","properties":{"secrets":{"description":"Map of secret names to secret values:\n- Set to a secret object to create or update.\n- Set to `null` to delete.\n- Omit to leave unchanged.\n","type":"object","additionalProperties":{"allOf":[{"description":"A secret value accessible through a binding.","type":"object","discriminator":{},"oneOf":[],"x-ref":"#/components/schemas/workers_secret"}],"nullable":true,"type":"object"}},"version_tags":{"description":"Optional version tags to apply to the new script version.","type":"object","additionalProperties":true}},"x-ref":"#/components/schemas/workers_secret-patch-request"}},"application/merge-patch+json":{"schema":{"description":"JSON Merge Patch (RFC 7396) request body for bulk secret changes.\n","type":"object","properties":{"secrets":{"description":"Map of secret names to secret values:\n- Set to a secret object to create or update.\n- Set to `null` to delete.\n- Omit to leave unchanged.\n","type":"object","additionalProperties":{"allOf":[{"description":"A secret value accessible through a binding.","type":"object","discriminator":{},"oneOf":[],"x-ref":"#/components/schemas/workers_secret"}],"nullable":true,"type":"object"}},"version_tags":{"description":"Optional version tags to apply to the new script version.","type":"object","additionalProperties":true}},"x-ref":"#/components/schemas/workers_secret-patch-request"}}}},"parameters":[{"name":"account_id","in":"path","required":true,"schema":{"description":"Identifier.","type":"string","example":"023e105f4ecef8ad9ca31a8372d0c353","maxLength":32,"x-auditable":true,"x-ref":"#/components/schemas/workers_identifier"},"index$":0},{"name":"script_name","in":"path","required":true,"schema":{"description":"Name of the script.","type":"string","example":"this-is_my_script-01","pattern":"^[a-z0-9_][a-z0-9-_]*$","x-auditable":true,"x-ref":"#/components/schemas/workers_script_name"},"index$":1}]},"DELETE /accounts/{account_id}/workers/scripts/{script_name}/subdomain":{"protocol":"http","parameters":[{"name":"account_id","in":"path","required":true,"schema":{"description":"Identifier.","type":"string","example":"023e105f4ecef8ad9ca31a8372d0c353","maxLength":32,"x-auditable":true,"x-ref":"#/components/schemas/workers_identifier"},"index$":0},{"name":"script_name","in":"path","required":true,"schema":{"description":"Name of the script.","type":"string","example":"this-is_my_script-01","pattern":"^[a-z0-9_][a-z0-9-_]*$","x-auditable":true,"x-ref":"#/components/schemas/workers_script_name"},"index$":1}]},"PUT /accounts/{account_id}/workers/scripts/{script_name}":{"protocol":"http","requestBody":{"content":{"application/javascript":{"schema":{"description":"Raw javascript content comprising a Worker. Must be in service worker syntax.","type":"string","example":"addEventListener('fetch', (event) => event.respondWith(new Response('OK')))"}},"multipart/form-data":{"encoding":{"files":{"contentType":"application/javascript+module, text/javascript+module, application/javascript, text/javascript, text/x-python, text/x-python-requirement, application/wasm, text/plain, application/octet-stream, application/source-map"},"metadata":{"contentType":"application/json"}},"schema":{"allOf":[{"type":"object","properties":{"files":{"description":"An array of modules (often JavaScript files) comprising a Worker script. At least one module must be present and referenced in the metadata as `main_module` or `body_part` by filename.<br/>Possible Content-Type(s) are: `application/javascript+module`, `text/javascript+module`, `application/javascript`, `text/javascript`, `text/x-python`, `text/x-python-requirement`, `application/wasm`, `text/plain`, `application/octet-stream`, `application/source-map`.","type":"array","items":{"format":"binary","type":"string"},"x-stainless-collection-type":"set"},"metadata":{"description":"JSON-encoded metadata about the uploaded parts and Worker configuration.","type":"object","properties":{"assets":{},"bindings":{},"body_part":{},"cache_options":{},"compatibility_date":{},"compatibility_flags":{},"exports":{},"exports_reconciliation":{},"keep_assets":{},"keep_bindings":{},"limits":{},"logpush":{},"main_module":{},"migrations":{},"observability":{},"package_dependencies":{},"placement":{},"tags":{},"tail_consumers":{},"usage_model":{}}}},"example":{"files":["export default {\n  async fetch(request, env, ctx) {\n    return new Response(\"Hello, world!\");\n  }\n};"],"metadata":{"compatibility_date":{},"compatibility_flags":["nodejs_compat"],"main_module":"worker.js"}},"required":["metadata"],"x-ref":"#/components/schemas/workers_multipart-script"},{"properties":{"metadata":{"type":"object","properties":{"annotations":{}}}},"type":"object"}]}},"text/javascript":{"schema":{"description":"Raw javascript content comprising a Worker. Must be in service worker syntax.","type":"string","example":"addEventListener('fetch', (event) => event.respondWith(new Response('OK')))"}}},"required":true,"x-ref":"#/components/requestBodies/workers_script_upload"},"parameters":[{"name":"account_id","in":"path","required":true,"schema":{"description":"Identifier.","type":"string","example":"023e105f4ecef8ad9ca31a8372d0c353","maxLength":32,"x-auditable":true,"x-ref":"#/components/schemas/workers_identifier"},"index$":0},{"name":"script_name","in":"path","required":true,"schema":{"description":"Name of the script.","type":"string","example":"this-is_my_script-01","pattern":"^[a-z0-9_][a-z0-9-_]*$","x-auditable":true,"x-ref":"#/components/schemas/workers_script_name"},"index$":1},{"name":"bindings_inherit","in":"query","description":"When set to \"strict\", the upload will fail if any `inherit` type bindings cannot be resolved against the previous version of the Worker. Without this, unresolvable inherit bindings are silently dropped.","schema":{"type":"string","enum":["strict"]},"index$":2}]},"PUT /accounts/{account_id}/workers/scripts/{script_name}/secrets":{"protocol":"http","requestBody":{"required":true,"content":{"application/json":{"schema":{"description":"A secret value accessible through a binding.","type":"object","discriminator":{"mapping":{"secret_key":"#/components/schemas/workers_binding_kind_secret_key","secret_text":"#/components/schemas/workers_binding_kind_secret_text"},"propertyName":"type"},"oneOf":[{"properties":{"name":{"description":"A JavaScript variable name for the binding.","example":"myBinding","type":"string","x-auditable":true,"x-ref":"#/components/schemas/workers_binding_name"},"text":{"description":"The secret value to use.","example":"My secret.","type":"string","writeOnly":true,"x-sensitive":true},"type":{"description":"The kind of resource that the binding provides.","enum":["secret_text"],"type":"string","x-auditable":true}},"required":["name","type","text"],"type":"object","x-ref":"#/components/schemas/workers_binding_kind_secret_text"},{"properties":{"algorithm":{"description":"Algorithm-specific key parameters. [Learn more](https://developer.mozilla.org/en-US/docs/Web/API/SubtleCrypto/importKey#algorithm).","type":"object","x-auditable":true},"format":{"description":"Data format of the key. [Learn more](https://developer.mozilla.org/en-US/docs/Web/API/SubtleCrypto/importKey#format).","enum":["raw","pkcs8","spki","jwk"],"example":"raw","type":"string","x-auditable":true},"key_base64":{"description":"Base64-encoded key data. Required if `format` is \"raw\", \"pkcs8\", or \"spki\".","type":"string","writeOnly":true,"x-sensitive":true},"key_jwk":{"description":"Key data in [JSON Web Key](https://developer.mozilla.org/en-US/docs/Web/API/SubtleCrypto/importKey#json_web_key) format. Required if `format` is \"jwk\".","type":"object","writeOnly":true,"x-sensitive":true},"name":{"description":"A JavaScript variable name for the binding.","example":"myBinding","type":"string","x-auditable":true,"x-ref":"#/components/schemas/workers_binding_name"},"type":{"description":"The kind of resource that the binding provides.","enum":["secret_key"],"type":"string","x-auditable":true},"usages":{"description":"Allowed operations with the key. [Learn more](https://developer.mozilla.org/en-US/docs/Web/API/SubtleCrypto/importKey#keyUsages).","example":["encrypt","decrypt"],"items":{"enum":[],"type":"string"},"type":"array","x-auditable":true,"x-stainless-collection-type":"set"}},"required":["name","type","format","algorithm","usages"],"type":"object","x-ref":"#/components/schemas/workers_binding_kind_secret_key"}],"x-ref":"#/components/schemas/workers_secret","index$":1}}}},"parameters":[{"name":"account_id","in":"path","required":true,"schema":{"description":"Identifier.","type":"string","example":"023e105f4ecef8ad9ca31a8372d0c353","maxLength":32,"x-auditable":true,"x-ref":"#/components/schemas/workers_identifier"},"index$":0},{"name":"script_name","in":"path","required":true,"schema":{"description":"Name of the script.","type":"string","example":"this-is_my_script-01","pattern":"^[a-z0-9_][a-z0-9-_]*$","x-auditable":true,"x-ref":"#/components/schemas/workers_script_name"},"index$":1}]}})
    }
    const client = setup.client
    const struct = setup.struct

    const isempty = struct.isempty
    const select = struct.select


    // CREATE
    const worker_script_ref01_ent = client.WorkerScript()
    let worker_script_ref01_data = setup.data.new.worker_script['worker_script_ref01']
    worker_script_ref01_data['account_id'] = setup.idmap['account01']
    worker_script_ref01_data['script_id'] = setup.idmap['script01']
    worker_script_ref01_data['script_name'] = setup.idmap['script_name01']

    worker_script_ref01_data = (await worker_script_ref01_ent.create(worker_script_ref01_data)).data()
    assert(null != worker_script_ref01_data.id)


    // LIST
    const worker_script_ref01_match: any = {}
    worker_script_ref01_match['account_id'] = setup.idmap['account01']
    worker_script_ref01_match['script_name'] = setup.idmap['script_name01']

    const worker_script_ref01_list = (await worker_script_ref01_ent.list(worker_script_ref01_match)).map((e: any) => e.data())

    assert(!isempty(select(worker_script_ref01_list, { id: worker_script_ref01_data.id })))


    // UPDATE
    const worker_script_ref01_data_up0: any = {}
    worker_script_ref01_data_up0.id = worker_script_ref01_data.id
    worker_script_ref01_data_up0 ['account_id'] = setup.idmap['account_id']

    const worker_script_ref01_resdata_up0 = (await worker_script_ref01_ent.update(worker_script_ref01_data_up0)).data()
    assert(worker_script_ref01_resdata_up0.id === worker_script_ref01_data_up0.id)


    // LOAD
    const worker_script_ref01_match_dt0: any = {}
    worker_script_ref01_match_dt0.id = worker_script_ref01_data.id
    const worker_script_ref01_data_dt0 = (await worker_script_ref01_ent.load(worker_script_ref01_match_dt0)).data()
    assert(worker_script_ref01_data_dt0.id === worker_script_ref01_data.id)


    // REMOVE
    const worker_script_ref01_match_rm0: any = { id: worker_script_ref01_data.id }
    await worker_script_ref01_ent.remove(worker_script_ref01_match_rm0)
  

    // LIST
    const worker_script_ref01_match_rt0: any = {}
    worker_script_ref01_match_rt0['account_id'] = setup.idmap['account01']
    worker_script_ref01_match_rt0['script_name'] = setup.idmap['script_name01']

    const worker_script_ref01_list_rt0 = (await worker_script_ref01_ent.list(worker_script_ref01_match_rt0)).map((e: any) => e.data())

    assert(isempty(select(worker_script_ref01_list_rt0, { id: worker_script_ref01_data.id })))


  })
})



function basicSetup(extra?: any) {
  // TODO: fix test def options
  const options: any = {} // null

  // TODO: needs test utility to resolve path
  const entityDataFile =
    Path.resolve(__dirname, 
      '../../../../.sdk/test/entity/worker_script/WorkerScriptTestData.json')

  // TODO: file ready util needed?
  const entityDataSource = Fs.readFileSync(entityDataFile).toString('utf8')

  // TODO: need a xlang JSON parse utility in voxgig/struct with better error msgs
  const entityData = JSON.parse(entityDataSource)

  options.entity = entityData.existing

  let client = CloudflareWorkersSDK.test(options, extra)
  const struct = client.utility().struct
  const merge = struct.merge
  const transform = struct.transform

  let idmap = transform(
    ['worker_script01','worker_script02','worker_script03','account01','account02','account03','script01','script02','script03','secret01','secret02','secret03','script_name01'],
    {
      '`$PACK`': ['', {
        '`$KEY`': '`$COPY`',
        '`$VAL`': ['`$FORMAT`', 'upper', '`$COPY`']
      }]
    })

  const env = envOverride({
    'CLOUDFLARE_WORKERS_TEST_WORKER_SCRIPT_ENTID': idmap,
    'CLOUDFLARE_WORKERS_TEST_LIVE': 'FALSE',
    'CLOUDFLARE_WORKERS_TEST_EXPLAIN': 'FALSE',
    'CLOUDFLARE_WORKERS_APIKEY': '',
  })

  idmap = env['CLOUDFLARE_WORKERS_TEST_WORKER_SCRIPT_ENTID']

  const live = 'TRUE' === env.CLOUDFLARE_WORKERS_TEST_LIVE

  const transport = createLiveTransport()
  if (live) {
    const rawIds = process.env['CLOUDFLARE_WORKERS_TEST_WORKER_SCRIPT_ENTID']
    idmap = rawIds && rawIds.trim() ? JSON.parse(rawIds) : {}
    if (!idmap || Array.isArray(idmap) || typeof idmap !== 'object') {
      throw new Error('Live ENTID must be a JSON object')
    }
    client = new CloudflareWorkersSDK(merge([
      // FIRST, so the generated fields below win: sdk-test-control.json's
      // test.client.options adds to the live client, it does not redirect it.
      liveClientOptions(),
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
    ]))
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
  }

  return setup
}
  
