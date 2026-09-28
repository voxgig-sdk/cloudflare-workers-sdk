

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


describe('WorkersVersionsUploadEntity', async () => {

  // Per-test live pacing. Delay is read from sdk-test-control.json's
  // `test.live.delayMs`; only sleeps when CLOUDFLARE_WORKERS_TEST_LIVE=TRUE.
  afterEach(liveDelay('CLOUDFLARE_WORKERS_TEST_LIVE'))

  test('instance', async () => {
    const testsdk = CloudflareWorkersSDK.test()
    const ent = testsdk.WorkersVersionsUpload()
    assert(null != ent)
  })


  test('basic', async (t) => {

    const live = 'TRUE' === process.env.CLOUDFLARE_WORKERS_TEST_LIVE
    for (const op of ['create']) {
      if (!live && maybeSkipControl(t, 'entityOp', 'workers_versions_upload.' + op, live)) return
    }

    
    const setup = basicSetup()
    if (setup.live) {
      return runLiveEntity(setup, {"active":true,"alias":{"field":{}},"fields":{},"name":"workers_versions_upload","op":{"create":{"input":"data","name":"create","points":[{"a":true,"co":{"id":"POST /accounts/{account_id}/workers/scripts/{script_name}/versions","source":"openapi3","version":2},"g":{"params":[{"a":true,"ex":"023e105f4ecef8ad9ca31a8372d0c353","k":"param","n":"account_id","or":"account_id","r":true,"t":"`$STRING`","index$":0},{"a":true,"ex":"this-is_my_script-01","k":"param","n":"script_name","or":"script_name","r":true,"t":"`$STRING`","index$":1}],"query":[{"a":true,"k":"query","n":"bindings_inherit","or":"bindings_inherit","r":false,"t":"`$STRING`","index$":0}]},"k":"http","m":"POST","o":"/accounts/{account_id}/workers/scripts/{script_name}/versions","q":{"exist":["account_id","bindings_inherit","script_name"]},"r":{},"s":[{"lit":"accounts"},{"var":"account_id"},{"lit":"workers"},{"lit":"scripts"},{"var":"script_name"},{"lit":"versions"}],"t":{"req":"`reqdata`","res":"`body`"},"index$":0}],"key$":"create"}},"relations":{"ancestors":[["$.main.kit.entity.account","$.main.kit.entity.script"]]},"key$":"workers_versions_upload","name__orig":"workers_versions_upload","Name":"WorkersVersionsUpload","name_":"workers_versions_upload","name-":"workers-versions-upload","NAME":"WORKERS_VERSIONS_UPLOAD","index$":72}, {"active":true,"entity":"workers_versions_upload","key$":"BasicWorkersVersionsUploadFlow","kind":"basic","name":"BasicWorkersVersionsUploadFlow","param":{},"step":[{"a":true,"d":{},"i":{"ref":"workers_versions_upload_ref01"},"m":{"account_id":"account01","script_name":"script_name01"},"o":"create","s":[],"v":[],"index$":0}]}, 'WorkersVersionsUpload', {"POST /accounts/{account_id}/workers/scripts/{script_name}/versions":{"protocol":"http","requestBody":{"content":{"multipart/form-data":{"encoding":{"files":{"contentType":"application/javascript+module, text/javascript+module, application/javascript, text/javascript, `text/x-python`, text/x-python-requirement, application/wasm, text/plain, application/octet-stream, application/source-map"},"metadata":{"contentType":"application/json"}},"schema":{"type":"object","properties":{"files":{"description":"An array of modules (often JavaScript files) comprising a Worker script. At least one module must be present and referenced in the metadata as `main_module` or `body_part` by filename.<br/>Possible Content-Type(s) are: `application/javascript+module`, `text/javascript+module`, `application/javascript`, `text/javascript`, `text/x-python`, `text/x-python-requirement`, `application/wasm`, `text/plain`, `application/octet-stream`, `application/source-map`.","type":"array","items":{"format":"binary","type":"string"},"x-stainless-collection-type":"set"},"metadata":{"description":"JSON-encoded metadata about the uploaded parts and Worker configuration.","type":"object","properties":{"annotations":{"type":"object","properties":{"workers/alias":{},"workers/commit_sha":{},"workers/message":{},"workers/pull_request_number":{},"workers/pull_request_title":{},"workers/pull_request_url":{},"workers/repository_url":{},"workers/tag":{}}},"bindings":{"description":"List of bindings attached to a Worker. You can find more about bindings on our docs: https://developers.cloudflare.com/workers/configuration/multipart-upload-metadata/#bindings.","type":"array","items":{"description":"A binding to allow the Worker to communicate with resources.","type":"object","discriminator":{},"oneOf":[],"x-ref":"#/components/schemas/workers_binding_item"},"example":[{}],"x-ref":"#/components/schemas/workers_bindings"},"cache_options":{"description":"Global CacheW configuration for the Worker. When caching is on,\nthe platform provisions a `cloudflare.app` zone for the Worker.\nA `type: worker` entry in the `exports` map can override this\nvalue for a single entrypoint.\n","type":"object","properties":{"cross_version_cache":{},"enabled":{}},"additionalProperties":false,"required":["enabled"],"x-ref":"#/components/schemas/workers_cache_options"},"compatibility_date":{"description":"Date indicating targeted support in the Workers runtime. Backwards incompatible fixes to the runtime following this date will not affect this Worker.","type":"string","example":"2021-01-01T00:00:00Z","x-auditable":true,"x-ref":"#/components/schemas/workers_compatibility_date"},"compatibility_flags":{"description":"Flags that enable or disable certain features in the Workers runtime. Used to enable upcoming features or opt in or out of specific changes not included in a `compatibility_date`.","type":"array","items":{"description":"Flag that enables or disables a specific feature in the Workers runtime.","type":"string","example":"nodejs_compat","x-auditable":true,"x-ref":"#/components/schemas/workers_compatibility_flag"},"example":["nodejs_compat"],"default":[],"x-stainless-collection-type":"set","x-ref":"#/components/schemas/workers_compatibility_flags"},"exports":{"description":"Declarative exports for this version. Worker\nentrypoint entries (`type: worker`) carry cache\nconfiguration for that entrypoint.\n","allOf":[{}],"writeOnly":true},"keep_bindings":{"description":"List of binding types to keep from previous_upload.","type":"array","items":{"type":"string"},"x-stainless-collection-type":"set"},"main_module":{"description":"Name of the uploaded file that contains the main module (e.g. the file exporting a `fetch` handler). Indicates a `module syntax` Worker, which is required for Version Upload.","type":"string","example":"worker.js"},"package_dependencies":{"description":"The list of npm packages that were installed and used when this Worker\nversion was built.\n","type":"array","items":{"properties":{},"required":[],"type":"object"},"x-auditable":true},"usage_model":{"description":"Usage model for the Worker invocations.","type":"string","example":"standard","default":"standard","enum":["standard","bundled","unbound"],"x-auditable":true,"x-ref":"#/components/schemas/workers_usage_model"}},"required":["main_module"]}},"required":["metadata"]}}},"required":true,"x-ref":"#/components/requestBodies/workers_version-post"},"parameters":[{"name":"account_id","in":"path","required":true,"schema":{"description":"Identifier.","type":"string","example":"023e105f4ecef8ad9ca31a8372d0c353","maxLength":32,"x-auditable":true,"x-ref":"#/components/schemas/workers_identifier"},"index$":0},{"name":"script_name","in":"path","required":true,"schema":{"description":"Name of the script.","type":"string","example":"this-is_my_script-01","pattern":"^[a-z0-9_][a-z0-9-_]*$","x-ref":"#/components/schemas/workers_script_name-2"},"index$":1},{"name":"bindings_inherit","in":"query","description":"When set to \"strict\", the upload will fail if any `inherit` type bindings cannot be resolved against the previous version of the Worker. Without this, unresolvable inherit bindings are silently dropped.","schema":{"type":"string","enum":["strict"]},"index$":2}]}})
    }
    const client = setup.client
    const struct = setup.struct

    const isempty = struct.isempty
    const select = struct.select


    // CREATE
    const workers_versions_upload_ref01_ent = client.WorkersVersionsUpload()
    let workers_versions_upload_ref01_data = setup.data.new.workers_versions_upload['workers_versions_upload_ref01']
    workers_versions_upload_ref01_data['account_id'] = setup.idmap['account01']
    workers_versions_upload_ref01_data['script_name'] = setup.idmap['script_name01']

    workers_versions_upload_ref01_data = (await workers_versions_upload_ref01_ent.create(workers_versions_upload_ref01_data)).data()
    assert(null != workers_versions_upload_ref01_data)


  })
})



function basicSetup(extra?: any) {
  // TODO: fix test def options
  const options: any = {} // null

  // TODO: needs test utility to resolve path
  const entityDataFile =
    Path.resolve(__dirname, 
      '../../../../.sdk/test/entity/workers_versions_upload/WorkersVersionsUploadTestData.json')

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
    ['workers_versions_upload01','workers_versions_upload02','workers_versions_upload03','account01','account02','account03','script01','script02','script03','script_name01'],
    {
      '`$PACK`': ['', {
        '`$KEY`': '`$COPY`',
        '`$VAL`': ['`$FORMAT`', 'upper', '`$COPY`']
      }]
    })

  const env = envOverride({
    'CLOUDFLARE_WORKERS_TEST_WORKERS_VERSIONS_UPLOAD_ENTID': idmap,
    'CLOUDFLARE_WORKERS_TEST_LIVE': 'FALSE',
    'CLOUDFLARE_WORKERS_TEST_EXPLAIN': 'FALSE',
    'CLOUDFLARE_WORKERS_APIKEY': '',
  })

  idmap = env['CLOUDFLARE_WORKERS_TEST_WORKERS_VERSIONS_UPLOAD_ENTID']

  const live = 'TRUE' === env.CLOUDFLARE_WORKERS_TEST_LIVE

  const transport = createLiveTransport()
  if (live) {
    const rawIds = process.env['CLOUDFLARE_WORKERS_TEST_WORKERS_VERSIONS_UPLOAD_ENTID']
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
  
