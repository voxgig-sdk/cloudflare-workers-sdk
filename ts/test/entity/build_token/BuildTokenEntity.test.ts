

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


describe('BuildTokenEntity', async () => {

  // Per-test live pacing. Delay is read from sdk-test-control.json's
  // `test.live.delayMs`; only sleeps when CLOUDFLARE_WORKERS_TEST_LIVE=TRUE.
  afterEach(liveDelay('CLOUDFLARE_WORKERS_TEST_LIVE'))

  test('instance', async () => {
    const testsdk = CloudflareWorkersSDK.test()
    const ent = testsdk.BuildToken()
    assert(null != ent)
  })


  test('basic', async (t) => {

    const live = 'TRUE' === process.env.CLOUDFLARE_WORKERS_TEST_LIVE
    for (const op of ['create', 'list']) {
      if (!live && maybeSkipControl(t, 'entityOp', 'build_token.' + op, live)) return
    }

    
    const setup = basicSetup()
    if (setup.live) {
      return runLiveEntity(setup, {"active":true,"alias":{"field":{}},"fields":{"build_token_name":{"a":true,"h":"Build Token Name","n":"build_token_name","r":true,"t":"`$STRING`","key$":"build_token_name","index$":0},"build_token_secret":{"a":true,"h":"Build Token Secret","n":"build_token_secret","r":true,"t":"`$STRING`","key$":"build_token_secret","index$":1},"cloudflare_token_id":{"a":true,"h":"Cloudflare Token Id","n":"cloudflare_token_id","r":true,"t":"`$STRING`","key$":"cloudflare_token_id","index$":2},"errors":{"a":true,"h":"Errors","n":"errors","r":true,"t":"`$ARRAY`","key$":"errors","index$":3},"messages":{"a":true,"h":"Messages","n":"messages","r":true,"t":"`$ARRAY`","key$":"messages","index$":4},"result":{"a":true,"h":"Result","n":"result","op":{"list":{"req":false,"type":"`$OBJECT`"}},"r":true,"t":"`$OBJECT`","union":{"branches":2,"count":1,"depth":4},"key$":"result","index$":5},"result_info":{"a":true,"h":"Result Info","n":"result_info","r":false,"t":"`$OBJECT`","key$":"result_info","index$":6},"success":{"a":true,"h":"Success","n":"success","r":true,"t":"`$BOOLEAN`","key$":"success","index$":7}},"name":"build_token","op":{"create":{"input":"data","name":"create","points":[{"a":true,"co":{"id":"POST /accounts/{account_id}/builds/tokens","source":"openapi3","version":2},"g":{"params":[{"a":true,"ex":"account-123","k":"param","n":"account_id","or":"account_id","r":true,"t":"`$STRING`","index$":0}]},"k":"http","m":"POST","o":"/accounts/{account_id}/builds/tokens","q":{"exist":["account_id"]},"r":{},"s":[{"lit":"accounts"},{"var":"account_id"},{"lit":"builds"},{"lit":"tokens"}],"t":{"req":"`reqdata`","res":"`body`"},"index$":0}],"key$":"create"},"list":{"input":"data","name":"list","points":[{"a":true,"co":{"id":"GET /accounts/{account_id}/builds/tokens","source":"openapi3","version":2},"g":{"params":[{"a":true,"ex":"account-123","k":"param","n":"account_id","or":"account_id","r":true,"t":"`$STRING`","index$":0}],"query":[{"a":true,"ex":1,"k":"query","n":"page","or":"page","r":false,"t":"`$INTEGER`","index$":0},{"a":true,"ex":50,"k":"query","n":"per_page","or":"per_page","r":false,"t":"`$INTEGER`","index$":1}]},"k":"http","m":"GET","o":"/accounts/{account_id}/builds/tokens","q":{"exist":["account_id","page","per_page"]},"r":{},"s":[{"lit":"accounts"},{"var":"account_id"},{"lit":"builds"},{"lit":"tokens"}],"t":{"req":"`reqdata`","res":"`body`"},"index$":0}],"key$":"list"}},"relations":{"ancestors":[["$.main.kit.entity.account"]]},"key$":"build_token","name__orig":"build_token","Name":"BuildToken","name_":"build_token","name-":"build-token","NAME":"BUILD_TOKEN","index$":4}, {"active":true,"entity":"build_token","key$":"BasicBuildTokenFlow","kind":"basic","name":"BasicBuildTokenFlow","param":{},"step":[{"a":true,"d":{},"i":{"ref":"build_token_ref01"},"m":{"account_id":"account01"},"o":"create","s":[],"v":[],"index$":0},{"a":true,"d":{},"i":{},"m":{"account_id":"account01"},"o":"list","s":[],"v":[{"apply":"ItemExists","def":{"ref":"build_token_ref01"}}],"index$":1}]}, 'BuildToken', {"POST /accounts/{account_id}/builds/tokens":{"protocol":"http","requestBody":{"required":true,"content":{"application/json":{"schema":{"type":"object","properties":{"build_token_name":{"type":"string","example":"My Build Token","x-ref":"#/components/schemas/builds_build_token_name","key$":"build_token_name"},"build_token_secret":{"type":"string","example":"super-secret-token","key$":"build_token_secret"},"cloudflare_token_id":{"type":"string","example":"cf-token-123","x-ref":"#/components/schemas/builds_cloudflare_token_id","key$":"cloudflare_token_id"}},"required":["build_token_name","build_token_secret","cloudflare_token_id"],"x-ref":"#/components/schemas/builds_CreateBuildTokenRequest","index$":1}}}},"parameters":[{"in":"path","name":"account_id","required":true,"schema":{"description":"Account identifier.","type":"string","example":"account-123","x-ref":"#/components/schemas/builds_account_id"},"x-ref":"#/components/parameters/builds_AccountId","index$":0}]},"GET /accounts/{account_id}/builds/tokens":{"protocol":"http","parameters":[{"in":"path","name":"account_id","required":true,"schema":{"description":"Account identifier.","type":"string","example":"account-123","x-ref":"#/components/schemas/builds_account_id"},"x-ref":"#/components/parameters/builds_AccountId","index$":0},{"description":"Page number for pagination","in":"query","name":"page","schema":{"type":"integer","default":1,"minimum":1},"x-ref":"#/components/parameters/builds_Page","index$":1},{"description":"Number of items per page","in":"query","name":"per_page","schema":{"type":"integer","default":50,"maximum":200,"minimum":1},"x-ref":"#/components/parameters/builds_PerPage","index$":2}]}})
    }
    const client = setup.client
    const struct = setup.struct

    const isempty = struct.isempty
    const select = struct.select


    // CREATE
    const build_token_ref01_ent = client.BuildToken()
    let build_token_ref01_data = setup.data.new.build_token['build_token_ref01']
    build_token_ref01_data['account_id'] = setup.idmap['account01']

    build_token_ref01_data = (await build_token_ref01_ent.create(build_token_ref01_data)).data()
    assert(null != build_token_ref01_data)


    // LIST
    const build_token_ref01_match: any = {}
    build_token_ref01_match['account_id'] = setup.idmap['account01']

    const build_token_ref01_list = (await build_token_ref01_ent.list(build_token_ref01_match)).map((e: any) => e.data())


  })
})



function basicSetup(extra?: any) {
  // TODO: fix test def options
  const options: any = {} // null

  // TODO: needs test utility to resolve path
  const entityDataFile =
    Path.resolve(__dirname, 
      '../../../../.sdk/test/entity/build_token/BuildTokenTestData.json')

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
    ['build_token01','build_token02','build_token03','account01','account02','account03'],
    {
      '`$PACK`': ['', {
        '`$KEY`': '`$COPY`',
        '`$VAL`': ['`$FORMAT`', 'upper', '`$COPY`']
      }]
    })

  const env = envOverride({
    'CLOUDFLARE_WORKERS_TEST_BUILD_TOKEN_ENTID': idmap,
    'CLOUDFLARE_WORKERS_TEST_LIVE': 'FALSE',
    'CLOUDFLARE_WORKERS_TEST_EXPLAIN': 'FALSE',
    'CLOUDFLARE_WORKERS_APIKEY': '',
  })

  idmap = env['CLOUDFLARE_WORKERS_TEST_BUILD_TOKEN_ENTID']

  const live = 'TRUE' === env.CLOUDFLARE_WORKERS_TEST_LIVE

  const transport = createLiveTransport()
  if (live) {
    const rawIds = process.env['CLOUDFLARE_WORKERS_TEST_BUILD_TOKEN_ENTID']
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
  
