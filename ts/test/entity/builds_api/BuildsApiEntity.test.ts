

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


describe('BuildsApiEntity', async () => {

  // Per-test live pacing. Delay is read from sdk-test-control.json's
  // `test.live.delayMs`; only sleeps when CLOUDFLARE_WORKERS_TEST_LIVE=TRUE.
  afterEach(liveDelay('CLOUDFLARE_WORKERS_TEST_LIVE'))

  test('instance', async () => {
    const testsdk = CloudflareWorkersSDK.test()
    const ent = testsdk.BuildsApi()
    assert(null != ent)
  })


  test('basic', async (t) => {

    const live = 'TRUE' === process.env.CLOUDFLARE_WORKERS_TEST_LIVE
    for (const op of ['create', 'remove']) {
      if (!live && maybeSkipControl(t, 'entityOp', 'builds_api.' + op, live)) return
    }

    
    const setup = basicSetup()
    if (setup.live) {
      return runLiveEntity(setup, {"active":true,"alias":{"field":{}},"fields":{"errors":{"a":true,"h":"Errors","n":"errors","r":true,"t":"`$ARRAY`","key$":"errors","index$":0},"messages":{"a":true,"h":"Messages","n":"messages","r":true,"t":"`$ARRAY`","key$":"messages","index$":1},"result":{"a":true,"h":"Result","n":"result","r":true,"t":"`$OBJECT`","union":{"branches":2,"count":1,"depth":4},"key$":"result","index$":2},"result_info":{"a":true,"h":"Result Info","n":"result_info","r":false,"t":"`$OBJECT`","key$":"result_info","index$":3},"success":{"a":true,"h":"Success","n":"success","r":true,"t":"`$BOOLEAN`","key$":"success","index$":4}},"name":"builds_api","op":{"create":{"input":"data","name":"create","points":[{"a":true,"co":{"id":"POST /accounts/{account_id}/builds/triggers/{trigger_uuid}/purge_build_cache","source":"openapi3","version":2},"g":{"params":[{"a":true,"ex":"account-123","k":"param","n":"account_id","or":"account_id","r":true,"t":"`$STRING`","index$":0},{"a":true,"k":"param","n":"trigger_id","or":"trigger_uuid","r":true,"t":"`$STRING`","index$":1}]},"k":"http","m":"POST","o":"/accounts/{account_id}/builds/triggers/{trigger_uuid}/purge_build_cache","q":{"exist":["account_id","trigger_id"]},"r":{"param":{"trigger_uuid":"trigger_id"}},"s":[{"lit":"accounts"},{"var":"account_id"},{"lit":"builds"},{"lit":"triggers"},{"var":"trigger_id"},{"lit":"purge_build_cache"}],"t":{"req":"`reqdata`","res":"`body`"},"index$":0}],"key$":"create"},"remove":{"input":"data","name":"remove","points":[{"a":true,"co":{"id":"DELETE /accounts/{account_id}/builds/triggers/{trigger_uuid}/environment_variables/{environment_variable_key}","source":"openapi3","version":2},"g":{"params":[{"a":true,"ex":"account-123","k":"param","n":"account_id","or":"account_id","r":true,"t":"`$STRING`","index$":0},{"a":true,"ex":"NODE_ENV","k":"param","n":"environment_variable_key","or":"environment_variable_key","r":true,"t":"`$STRING`","index$":1},{"a":true,"k":"param","n":"trigger_id","or":"trigger_uuid","r":true,"t":"`$STRING`","index$":2}]},"k":"http","m":"DELETE","o":"/accounts/{account_id}/builds/triggers/{trigger_uuid}/environment_variables/{environment_variable_key}","q":{"exist":["account_id","environment_variable_key","trigger_id"]},"r":{"param":{"trigger_uuid":"trigger_id"}},"s":[{"lit":"accounts"},{"var":"account_id"},{"lit":"builds"},{"lit":"triggers"},{"var":"trigger_id"},{"lit":"environment_variables"},{"var":"environment_variable_key"}],"t":{"req":"`reqdata`","res":"`body`"},"index$":0}],"key$":"remove"}},"relations":{"ancestors":[["$.main.kit.entity.account","$.main.kit.entity.trigger"],["$.main.kit.entity.account","$.main.kit.entity.trigger","$.main.kit.entity.environment_variable"]]},"key$":"builds_api","name__orig":"builds_api","Name":"BuildsApi","name_":"builds_api","name-":"builds-api","NAME":"BUILDS_API","index$":5}, {"active":true,"entity":"builds_api","key$":"BasicBuildsApiFlow","kind":"basic","name":"BasicBuildsApiFlow","param":{},"step":[{"a":true,"d":{},"i":{"ref":"builds_api_ref01"},"m":{"account_id":"account01","trigger_id":"trigger01"},"o":"create","s":[],"v":[],"index$":0},{"a":true,"d":{},"i":{"ref":"builds_api_ref01","suffix":"_rm0"},"m":{"account_id":"account01","id":"builds_api01","trigger_id":"trigger01"},"o":"remove","s":[],"v":[],"index$":1}]}, 'BuildsApi', {"POST /accounts/{account_id}/builds/triggers/{trigger_uuid}/purge_build_cache":{"protocol":"http","parameters":[{"in":"path","name":"account_id","required":true,"schema":{"description":"Account identifier.","type":"string","example":"account-123","x-ref":"#/components/schemas/builds_account_id"},"x-ref":"#/components/parameters/builds_AccountId","index$":0},{"in":"path","name":"trigger_uuid","required":true,"schema":{"description":"Trigger UUID.","type":"string","format":"uuid","x-ref":"#/components/schemas/builds_trigger_uuid"},"x-ref":"#/components/parameters/builds_TriggerUuid","index$":1}]},"DELETE /accounts/{account_id}/builds/triggers/{trigger_uuid}/environment_variables/{environment_variable_key}":{"protocol":"http","parameters":[{"in":"path","name":"account_id","required":true,"schema":{"description":"Account identifier.","type":"string","example":"account-123","x-ref":"#/components/schemas/builds_account_id"},"x-ref":"#/components/parameters/builds_AccountId","index$":0},{"in":"path","name":"trigger_uuid","required":true,"schema":{"description":"Trigger UUID.","type":"string","format":"uuid","x-ref":"#/components/schemas/builds_trigger_uuid"},"x-ref":"#/components/parameters/builds_TriggerUuid","index$":1},{"name":"environment_variable_key","in":"path","required":true,"schema":{"description":"Environment variable key.","type":"string","example":"NODE_ENV","x-ref":"#/components/schemas/builds_environment_variable_key"},"index$":2}]}})
    }
    const client = setup.client
    const struct = setup.struct

    const isempty = struct.isempty
    const select = struct.select


    // CREATE
    const builds_api_ref01_ent = client.BuildsApi()
    let builds_api_ref01_data = setup.data.new.builds_api['builds_api_ref01']
    builds_api_ref01_data['account_id'] = setup.idmap['account01']
    builds_api_ref01_data['trigger_id'] = setup.idmap['trigger01']

    builds_api_ref01_data = (await builds_api_ref01_ent.create(builds_api_ref01_data)).data()
    assert(null != builds_api_ref01_data)



  })
})



function basicSetup(extra?: any) {
  // TODO: fix test def options
  const options: any = {} // null

  // TODO: needs test utility to resolve path
  const entityDataFile =
    Path.resolve(__dirname, 
      '../../../../.sdk/test/entity/builds_api/BuildsApiTestData.json')

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
    ['builds_api01','builds_api02','builds_api03','account01','account02','account03','trigger01','trigger02','trigger03','environment_variable01','environment_variable02','environment_variable03'],
    {
      '`$PACK`': ['', {
        '`$KEY`': '`$COPY`',
        '`$VAL`': ['`$FORMAT`', 'upper', '`$COPY`']
      }]
    })

  const env = envOverride({
    'CLOUDFLARE_WORKERS_TEST_BUILDS_API_ENTID': idmap,
    'CLOUDFLARE_WORKERS_TEST_LIVE': 'FALSE',
    'CLOUDFLARE_WORKERS_TEST_EXPLAIN': 'FALSE',
    'CLOUDFLARE_WORKERS_APIKEY': '',
  })

  idmap = env['CLOUDFLARE_WORKERS_TEST_BUILDS_API_ENTID']

  const live = 'TRUE' === env.CLOUDFLARE_WORKERS_TEST_LIVE

  const transport = createLiveTransport()
  if (live) {
    const rawIds = process.env['CLOUDFLARE_WORKERS_TEST_BUILDS_API_ENTID']
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
  
