

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


describe('BuildEntity', async () => {

  // Per-test live pacing. Delay is read from sdk-test-control.json's
  // `test.live.delayMs`; only sleeps when CLOUDFLARE_WORKERS_TEST_LIVE=TRUE.
  afterEach(liveDelay('CLOUDFLARE_WORKERS_TEST_LIVE'))

  test('instance', async () => {
    const testsdk = CloudflareWorkersSDK.test()
    const ent = testsdk.Build()
    assert(null != ent)
  })


  test('basic', async (t) => {

    const live = 'TRUE' === process.env.CLOUDFLARE_WORKERS_TEST_LIVE
    for (const op of ['list', 'update', 'load']) {
      if (!live && maybeSkipControl(t, 'entityOp', 'build.' + op, live)) return
    }

    
    const setup = basicSetup()
    if (setup.live) {
      return runLiveEntity(setup, {"active":true,"alias":{"field":{}},"fields":{"errors":{"a":true,"h":"Errors","n":"errors","r":true,"t":"`$ARRAY`","key$":"errors","index$":0},"id":{"a":true,"h":"Id","n":"id","r":false,"t":"`$STRING`","key$":"id","index$":1},"messages":{"a":true,"h":"Messages","n":"messages","r":true,"t":"`$ARRAY`","key$":"messages","index$":2},"result":{"a":true,"h":"Result","n":"result","op":{"list":{"req":false,"type":"`$OBJECT`"},"load":{"req":false,"type":"`$OBJECT`"}},"r":true,"t":"`$OBJECT`","union":{"branches":2,"count":1,"depth":4},"key$":"result","index$":3},"result_info":{"a":true,"h":"Result Info","n":"result_info","r":false,"t":"`$OBJECT`","key$":"result_info","index$":4},"success":{"a":true,"h":"Success","n":"success","r":true,"t":"`$BOOLEAN`","key$":"success","index$":5}},"id":{"field":"id","name":"id"},"name":"build","op":{"list":{"input":"data","name":"list","points":[{"a":true,"co":{"id":"GET /accounts/{account_id}/builds/builds/{build_uuid}/logs","source":"openapi3","version":2},"g":{"params":[{"a":true,"ex":"account-123","k":"param","n":"account_id","or":"account_id","r":true,"t":"`$STRING`","index$":0},{"a":true,"k":"param","n":"id","or":"build_uuid","r":true,"t":"`$STRING`","index$":1}],"query":[{"a":true,"ex":"eyJsaW5lIjoxMDAsInRpbWVzdGFtcCI6MTYzNjQ3MjQwMH0","k":"query","n":"cursor","or":"cursor","r":false,"t":"`$STRING`","index$":0}]},"k":"http","m":"GET","o":"/accounts/{account_id}/builds/builds/{build_uuid}/logs","q":{"$action":"log","exist":["account_id","cursor","id"]},"r":{"param":{"build_uuid":"id"}},"s":[{"lit":"accounts"},{"var":"account_id"},{"lit":"builds"},{"lit":"builds"},{"var":"id"},{"lit":"logs"}],"t":{"req":"`reqdata`","res":"`body`"},"index$":0},{"a":true,"co":{"id":"GET /accounts/{account_id}/builds/builds/latest","source":"openapi3","version":2},"g":{"params":[{"a":true,"ex":"account-123","k":"param","n":"account_id","or":"account_id","r":true,"t":"`$STRING`","index$":0}],"query":[{"a":true,"ex":"dd7160bb9cef458093557736f4b9e75b,42fb14fe81df47139d3be684e4c637a6,ff7cf9a7582f4c0d90a4b95cb17d659e","k":"query","n":"external_script_id","or":"external_script_id","r":true,"t":"`$STRING`","index$":0}]},"k":"http","m":"GET","o":"/accounts/{account_id}/builds/builds/latest","q":{"$action":"latest","exist":["account_id","external_script_id"]},"r":{},"s":[{"lit":"accounts"},{"var":"account_id"},{"lit":"builds"},{"lit":"builds"},{"lit":"latest"}],"t":{"req":"`reqdata`","res":"`body`"},"index$":1},{"a":true,"co":{"id":"GET /accounts/{account_id}/builds/builds","source":"openapi3","version":2},"g":{"params":[{"a":true,"ex":"account-123","k":"param","n":"account_id","or":"account_id","r":true,"t":"`$STRING`","index$":0}],"query":[{"a":true,"ex":"123e4567-e89b-12d3-a456-426614174000,223e4567-e89b-12d3-a456-426614174001","k":"query","n":"version_id","or":"version_id","r":true,"t":"`$STRING`","index$":0}]},"k":"http","m":"GET","o":"/accounts/{account_id}/builds/builds","q":{"exist":["account_id","version_id"]},"r":{},"s":[{"lit":"accounts"},{"var":"account_id"},{"lit":"builds"},{"lit":"builds"}],"t":{"req":"`reqdata`","res":"`body`"},"index$":2}],"key$":"list"},"load":{"input":"data","name":"load","points":[{"a":true,"co":{"id":"GET /accounts/{account_id}/builds/builds/{build_uuid}","source":"openapi3","version":2},"g":{"params":[{"a":true,"ex":"account-123","k":"param","n":"account_id","or":"account_id","r":true,"t":"`$STRING`","index$":0},{"a":true,"k":"param","n":"id","or":"build_uuid","r":true,"t":"`$STRING`","index$":1}]},"k":"http","m":"GET","o":"/accounts/{account_id}/builds/builds/{build_uuid}","q":{"exist":["account_id","id"]},"r":{"param":{"build_uuid":"id"}},"s":[{"lit":"accounts"},{"var":"account_id"},{"lit":"builds"},{"lit":"builds"},{"var":"id"}],"t":{"req":"`reqdata`","res":"`body`"},"index$":0}],"key$":"load"},"update":{"input":"data","name":"update","points":[{"a":true,"co":{"id":"PUT /accounts/{account_id}/builds/builds/{build_uuid}/cancel","source":"openapi3","version":2},"g":{"params":[{"a":true,"ex":"account-123","k":"param","n":"account_id","or":"account_id","r":true,"t":"`$STRING`","index$":0},{"a":true,"k":"param","n":"id","or":"build_uuid","r":true,"t":"`$STRING`","index$":1}]},"k":"http","m":"PUT","o":"/accounts/{account_id}/builds/builds/{build_uuid}/cancel","q":{"$action":"cancel","exist":["account_id","id"]},"r":{"param":{"build_uuid":"id"}},"s":[{"lit":"accounts"},{"var":"account_id"},{"lit":"builds"},{"lit":"builds"},{"var":"id"},{"lit":"cancel"}],"t":{"req":"`reqdata`","res":"`body`"},"index$":0}],"key$":"update"}},"relations":{"ancestors":[["$.main.kit.entity.account"]]},"key$":"build","name__orig":"build","Name":"Build","name_":"build","name-":"build","NAME":"BUILD","index$":3}, {"active":true,"entity":"build","key$":"BasicBuildFlow","kind":"basic","name":"BasicBuildFlow","param":{},"step":[{"a":true,"d":{},"i":{},"m":{"account_id":"account01"},"o":"list","s":[],"v":[{"apply":"ItemExists","def":{"ref":"build_ref01"}}],"index$":0},{"a":true,"d":{"account_id":"account01"},"i":{"ref":"build_ref01","srcdatavar":"build_ref01_data","suffix":"_up0"},"m":{},"o":"update","s":[{"apply":"TextFieldMark","def":{"mark":"Mark01-build_ref01"}}],"v":[],"index$":1},{"a":true,"d":{},"i":{"ref":"build_ref01","srcdatavar":"build_ref01_data","suffix":"_dt0"},"m":{"account_id":"account01","id":"build01"},"o":"load","s":[],"v":[{"apply":"TextFieldMark","def":{"mark":"Mark01-build_ref01"}}],"index$":2}]}, 'Build', {"GET /accounts/{account_id}/builds/builds/{build_uuid}/logs":{"protocol":"http","parameters":[{"in":"path","name":"account_id","required":true,"schema":{"description":"Account identifier.","type":"string","example":"account-123","x-ref":"#/components/schemas/builds_account_id"},"x-ref":"#/components/parameters/builds_AccountId","index$":0},{"in":"path","name":"build_uuid","required":true,"schema":{"description":"Build UUID.","type":"string","format":"uuid","x-ref":"#/components/schemas/builds_build_uuid"},"x-ref":"#/components/parameters/builds_BuildUuid","index$":1},{"name":"cursor","in":"query","schema":{"description":"Pagination cursor for log retrieval.","type":"string","example":"eyJsaW5lIjoxMDAsInRpbWVzdGFtcCI6MTYzNjQ3MjQwMH0","x-ref":"#/components/schemas/builds_cursor"},"index$":2}]},"GET /accounts/{account_id}/builds/builds/latest":{"protocol":"http","parameters":[{"in":"path","name":"account_id","required":true,"schema":{"description":"Account identifier.","type":"string","example":"account-123","x-ref":"#/components/schemas/builds_account_id"},"x-ref":"#/components/parameters/builds_AccountId","index$":0},{"name":"external_script_ids","in":"query","required":true,"schema":{"description":"Comma-separated list of system-generated worker script tags (max 20).","type":"string","example":"dd7160bb9cef458093557736f4b9e75b,42fb14fe81df47139d3be684e4c637a6,ff7cf9a7582f4c0d90a4b95cb17d659e","x-ref":"#/components/schemas/builds_external_script_ids"},"index$":1}]},"GET /accounts/{account_id}/builds/builds":{"protocol":"http","parameters":[{"in":"path","name":"account_id","required":true,"schema":{"description":"Account identifier.","type":"string","example":"account-123","x-ref":"#/components/schemas/builds_account_id"},"x-ref":"#/components/parameters/builds_AccountId","index$":0},{"name":"version_ids","in":"query","required":true,"schema":{"description":"Comma-separated list of version UUIDs (max 20).","type":"string","example":"123e4567-e89b-12d3-a456-426614174000,223e4567-e89b-12d3-a456-426614174001","x-ref":"#/components/schemas/builds_version_ids"},"index$":1}]},"GET /accounts/{account_id}/builds/builds/{build_uuid}":{"protocol":"http","parameters":[{"in":"path","name":"account_id","required":true,"schema":{"description":"Account identifier.","type":"string","example":"account-123","x-ref":"#/components/schemas/builds_account_id"},"x-ref":"#/components/parameters/builds_AccountId","index$":0},{"in":"path","name":"build_uuid","required":true,"schema":{"description":"Build UUID.","type":"string","format":"uuid","x-ref":"#/components/schemas/builds_build_uuid"},"x-ref":"#/components/parameters/builds_BuildUuid","index$":1}]},"PUT /accounts/{account_id}/builds/builds/{build_uuid}/cancel":{"protocol":"http","parameters":[{"in":"path","name":"account_id","required":true,"schema":{"description":"Account identifier.","type":"string","example":"account-123","x-ref":"#/components/schemas/builds_account_id"},"x-ref":"#/components/parameters/builds_AccountId","index$":0},{"in":"path","name":"build_uuid","required":true,"schema":{"description":"Build UUID.","type":"string","format":"uuid","x-ref":"#/components/schemas/builds_build_uuid"},"x-ref":"#/components/parameters/builds_BuildUuid","index$":1}]}})
    }
    const client = setup.client
    const struct = setup.struct

    const isempty = struct.isempty
    const select = struct.select

    let build_ref01_data = Object.values(setup.data.existing.build)[0] as any

    // LIST
    const build_ref01_ent = client.Build()
    const build_ref01_match: any = {}
    build_ref01_match['account_id'] = setup.idmap['account01']

    const build_ref01_list = (await build_ref01_ent.list(build_ref01_match)).map((e: any) => e.data())


    // UPDATE
    const build_ref01_data_up0: any = {}
    build_ref01_data_up0.id = build_ref01_data.id
    build_ref01_data_up0 ['account_id'] = setup.idmap['account_id']

    const build_ref01_resdata_up0 = (await build_ref01_ent.update(build_ref01_data_up0)).data()
    assert(build_ref01_resdata_up0.id === build_ref01_data_up0.id)


    // LOAD
    const build_ref01_match_dt0: any = {}
    build_ref01_match_dt0.id = build_ref01_data.id
    const build_ref01_data_dt0 = (await build_ref01_ent.load(build_ref01_match_dt0)).data()
    assert(build_ref01_data_dt0.id === build_ref01_data.id)


  })
})



function basicSetup(extra?: any) {
  // TODO: fix test def options
  const options: any = {} // null

  // TODO: needs test utility to resolve path
  const entityDataFile =
    Path.resolve(__dirname, 
      '../../../../.sdk/test/entity/build/BuildTestData.json')

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
    ['build01','build02','build03','account01','account02','account03'],
    {
      '`$PACK`': ['', {
        '`$KEY`': '`$COPY`',
        '`$VAL`': ['`$FORMAT`', 'upper', '`$COPY`']
      }]
    })

  const env = envOverride({
    'CLOUDFLARE_WORKERS_TEST_BUILD_ENTID': idmap,
    'CLOUDFLARE_WORKERS_TEST_LIVE': 'FALSE',
    'CLOUDFLARE_WORKERS_TEST_EXPLAIN': 'FALSE',
    'CLOUDFLARE_WORKERS_APIKEY': '',
  })

  idmap = env['CLOUDFLARE_WORKERS_TEST_BUILD_ENTID']

  const live = 'TRUE' === env.CLOUDFLARE_WORKERS_TEST_LIVE

  const transport = createLiveTransport()
  if (live) {
    const rawIds = process.env['CLOUDFLARE_WORKERS_TEST_BUILD_ENTID']
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
  
