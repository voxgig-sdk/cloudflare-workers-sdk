

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


describe('WorkersCreateAssetsUploadSessionEntity', async () => {

  // Per-test live pacing. Delay is read from sdk-test-control.json's
  // `test.live.delayMs`; only sleeps when CLOUDFLARE_WORKERS_TEST_LIVE=TRUE.
  afterEach(liveDelay('CLOUDFLARE_WORKERS_TEST_LIVE'))

  test('instance', async () => {
    const testsdk = CloudflareWorkersSDK.test()
    const ent = testsdk.WorkersCreateAssetsUploadSession()
    assert(null != ent)
  })


  test('basic', async (t) => {

    const live = 'TRUE' === process.env.CLOUDFLARE_WORKERS_TEST_LIVE
    for (const op of ['create']) {
      if (!live && maybeSkipControl(t, 'entityOp', 'workers_create_assets_upload_session.' + op, live)) return
    }

    
    const setup = basicSetup()
    if (setup.live) {
      return runLiveEntity(setup, {"active":true,"alias":{"field":{}},"fields":{"manifest":{"a":true,"h":"Manifest","n":"manifest","r":true,"sh":"A manifest ([path]: {hash, size}) map of files to upload.","t":"`$OBJECT`","key$":"manifest","index$":0}},"name":"workers_create_assets_upload_session","op":{"create":{"input":"data","name":"create","points":[{"a":true,"co":{"id":"POST /accounts/{account_id}/workers/dispatch/namespaces/{dispatch_namespace}/scripts/{script_name}/assets-upload-session","source":"openapi3","version":2},"g":{"params":[{"a":true,"ex":"023e105f4ecef8ad9ca31a8372d0c353","k":"param","n":"account_id","or":"account_id","r":true,"t":"`$STRING`","index$":0},{"a":true,"ex":"my-dispatch-namespace","k":"param","n":"namespace_id","or":"dispatch_namespace","r":true,"t":"`$STRING`","index$":1},{"a":true,"ex":"this-is_my_script-01","k":"param","n":"script_name","or":"script_name","r":true,"t":"`$STRING`","index$":2}]},"k":"http","m":"POST","o":"/accounts/{account_id}/workers/dispatch/namespaces/{dispatch_namespace}/scripts/{script_name}/assets-upload-session","q":{"exist":["account_id","namespace_id","script_name"]},"r":{"param":{"dispatch_namespace":"namespace_id"}},"s":[{"lit":"accounts"},{"var":"account_id"},{"lit":"workers"},{"lit":"dispatch"},{"lit":"namespaces"},{"var":"namespace_id"},{"lit":"scripts"},{"var":"script_name"},{"lit":"assets-upload-session"}],"t":{"req":"`reqdata`","res":"`body`"},"index$":0},{"a":true,"co":{"id":"POST /accounts/{account_id}/workers/scripts/{script_name}/assets-upload-session","source":"openapi3","version":2},"g":{"params":[{"a":true,"ex":"023e105f4ecef8ad9ca31a8372d0c353","k":"param","n":"account_id","or":"account_id","r":true,"t":"`$STRING`","index$":0},{"a":true,"ex":"this-is_my_script-01","k":"param","n":"script_name","or":"script_name","r":true,"t":"`$STRING`","index$":1}]},"k":"http","m":"POST","o":"/accounts/{account_id}/workers/scripts/{script_name}/assets-upload-session","q":{"exist":["account_id","script_name"]},"r":{},"s":[{"lit":"accounts"},{"var":"account_id"},{"lit":"workers"},{"lit":"scripts"},{"var":"script_name"},{"lit":"assets-upload-session"}],"t":{"req":"`reqdata`","res":"`body`"},"index$":1}],"key$":"create"}},"relations":{"ancestors":[["$.main.kit.entity.account","$.main.kit.entity.script"],["$.main.kit.entity.account","$.main.kit.entity.namespace","$.main.kit.entity.script"]]},"key$":"workers_create_assets_upload_session","name__orig":"workers_create_assets_upload_session","Name":"WorkersCreateAssetsUploadSession","name_":"workers_create_assets_upload_session","name-":"workers-create-assets-upload-session","NAME":"WORKERS_CREATE_ASSETS_UPLOAD_SESSION","index$":56}, {"active":true,"entity":"workers_create_assets_upload_session","key$":"BasicWorkersCreateAssetsUploadSessionFlow","kind":"basic","name":"BasicWorkersCreateAssetsUploadSessionFlow","param":{},"step":[{"a":true,"d":{},"i":{"ref":"workers_create_assets_upload_session_ref01"},"m":{"account_id":"account01","script_name":"script_name01"},"o":"create","s":[],"v":[],"index$":0}]}, 'WorkersCreateAssetsUploadSession', {"POST /accounts/{account_id}/workers/dispatch/namespaces/{dispatch_namespace}/scripts/{script_name}/assets-upload-session":{"protocol":"http","requestBody":{"required":true,"content":{"application/json":{"schema":{"type":"object","properties":{"manifest":{"description":"A manifest ([path]: {hash, size}) map of files to upload. As an example, `/blog/hello-world.html` would be a valid path key.","type":"object","additionalProperties":{"type":"object","properties":{"hash":{"description":"The hash of the file.","type":"string"},"size":{"description":"The size of the file in bytes.","type":"integer"}},"required":["hash","size"],"x-ref":"#/components/schemas/workers_manifest-value"},"key$":"manifest"}},"required":["manifest"],"x-ref":"#/components/schemas/workers_create-assets-upload-session-object","index$":1}}}},"parameters":[{"name":"account_id","in":"path","required":true,"schema":{"description":"Identifier.","type":"string","example":"023e105f4ecef8ad9ca31a8372d0c353","maxLength":32,"x-auditable":true,"x-ref":"#/components/schemas/workers_identifier"},"index$":0},{"name":"dispatch_namespace","in":"path","required":true,"schema":{"description":"Name of the Workers for Platforms dispatch namespace.","type":"string","example":"my-dispatch-namespace","pattern":"^.+$","x-auditable":true,"x-ref":"#/components/schemas/workers_dispatch_namespace_name"},"index$":1},{"name":"script_name","in":"path","required":true,"schema":{"description":"Name of the script.","type":"string","example":"this-is_my_script-01","pattern":"^[a-z0-9_][a-z0-9-_]*$","x-auditable":true,"x-ref":"#/components/schemas/workers_script_name"},"index$":2}]},"POST /accounts/{account_id}/workers/scripts/{script_name}/assets-upload-session":{"protocol":"http","requestBody":{"required":true,"content":{"application/json":{"schema":{"type":"object","properties":{"manifest":{"description":"A manifest ([path]: {hash, size}) map of files to upload. As an example, `/blog/hello-world.html` would be a valid path key.","type":"object","additionalProperties":{"type":"object","properties":{"hash":{"description":"The hash of the file.","type":"string"},"size":{"description":"The size of the file in bytes.","type":"integer"}},"required":["hash","size"],"x-ref":"#/components/schemas/workers_manifest-value"},"key$":"manifest"}},"required":["manifest"],"x-ref":"#/components/schemas/workers_create-assets-upload-session-object","index$":1}}}},"parameters":[{"name":"account_id","in":"path","required":true,"schema":{"description":"Identifier.","type":"string","example":"023e105f4ecef8ad9ca31a8372d0c353","maxLength":32,"x-auditable":true,"x-ref":"#/components/schemas/workers_identifier"},"index$":0},{"name":"script_name","in":"path","required":true,"schema":{"description":"Name of the script.","type":"string","example":"this-is_my_script-01","pattern":"^[a-z0-9_][a-z0-9-_]*$","x-auditable":true,"x-ref":"#/components/schemas/workers_script_name"},"index$":1}]}})
    }
    const client = setup.client
    const struct = setup.struct

    const isempty = struct.isempty
    const select = struct.select


    // CREATE
    const workers_create_assets_upload_session_ref01_ent = client.WorkersCreateAssetsUploadSession()
    let workers_create_assets_upload_session_ref01_data = setup.data.new.workers_create_assets_upload_session['workers_create_assets_upload_session_ref01']
    workers_create_assets_upload_session_ref01_data['account_id'] = setup.idmap['account01']
    workers_create_assets_upload_session_ref01_data['script_name'] = setup.idmap['script_name01']

    workers_create_assets_upload_session_ref01_data = (await workers_create_assets_upload_session_ref01_ent.create(workers_create_assets_upload_session_ref01_data)).data()
    assert(null != workers_create_assets_upload_session_ref01_data)


  })
})



function basicSetup(extra?: any) {
  // TODO: fix test def options
  const options: any = {} // null

  // TODO: needs test utility to resolve path
  const entityDataFile =
    Path.resolve(__dirname, 
      '../../../../.sdk/test/entity/workers_create_assets_upload_session/WorkersCreateAssetsUploadSessionTestData.json')

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
    ['workers_create_assets_upload_session01','workers_create_assets_upload_session02','workers_create_assets_upload_session03','account01','account02','account03','script01','script02','script03','namespace01','namespace02','namespace03','script_name01'],
    {
      '`$PACK`': ['', {
        '`$KEY`': '`$COPY`',
        '`$VAL`': ['`$FORMAT`', 'upper', '`$COPY`']
      }]
    })

  const env = envOverride({
    'CLOUDFLARE_WORKERS_TEST_WORKERS_CREATE_ASSETS_UPLOAD_SESSION_ENTID': idmap,
    'CLOUDFLARE_WORKERS_TEST_LIVE': 'FALSE',
    'CLOUDFLARE_WORKERS_TEST_EXPLAIN': 'FALSE',
    'CLOUDFLARE_WORKERS_APIKEY': '',
  })

  idmap = env['CLOUDFLARE_WORKERS_TEST_WORKERS_CREATE_ASSETS_UPLOAD_SESSION_ENTID']

  const live = 'TRUE' === env.CLOUDFLARE_WORKERS_TEST_LIVE

  const transport = createLiveTransport()
  if (live) {
    const rawIds = process.env['CLOUDFLARE_WORKERS_TEST_WORKERS_CREATE_ASSETS_UPLOAD_SESSION_ENTID']
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
  
