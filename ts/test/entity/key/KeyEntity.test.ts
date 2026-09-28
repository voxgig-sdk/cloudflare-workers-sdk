

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


describe('KeyEntity', async () => {

  // Per-test live pacing. Delay is read from sdk-test-control.json's
  // `test.live.delayMs`; only sleeps when CLOUDFLARE_WORKERS_TEST_LIVE=TRUE.
  afterEach(liveDelay('CLOUDFLARE_WORKERS_TEST_LIVE'))

  test('instance', async () => {
    const testsdk = CloudflareWorkersSDK.test()
    const ent = testsdk.Key()
    assert(null != ent)
  })


  test('basic', async (t) => {

    const live = 'TRUE' === process.env.CLOUDFLARE_WORKERS_TEST_LIVE
    for (const op of ['create']) {
      if (!live && maybeSkipControl(t, 'entityOp', 'key.' + op, live)) return
    }

    
    const setup = basicSetup()
    if (setup.live) {
      return runLiveEntity(setup, {"active":true,"alias":{"field":{}},"fields":{"datasets":{"a":true,"h":"Datasets","n":"datasets","r":false,"sh":"Leave this empty to use the default datasets","t":"`$ARRAY`","key$":"datasets","index$":0},"errors":{"a":true,"h":"Errors","n":"errors","r":true,"t":"`$ARRAY`","key$":"errors","index$":1},"filters":{"a":true,"h":"Filters","n":"filters","r":false,"sh":"Apply filters to narrow key discovery.","t":"`$ARRAY`","union":{"branches":3,"count":5,"depth":8},"key$":"filters","index$":2},"from":{"a":true,"h":"From","n":"from","r":false,"t":"`$NUMBER`","key$":"from","index$":3},"keyNeedle":{"a":true,"h":"Key Needle","n":"keyNeedle","r":true,"sh":"If the user suggests a key, use this to narrow down the list of keys returned.","t":"`$OBJECT`","union":{"branches":3,"count":1,"depth":4},"key$":"keyNeedle","index$":4},"limit":{"a":true,"h":"Limit","n":"limit","r":false,"sh":"Advanced usage: set limit=1000+ to retrieve comprehensive key options without needing additional filtering.","t":"`$NUMBER`","key$":"limit","index$":5},"messages":{"a":true,"h":"Messages","n":"messages","r":true,"t":"`$ARRAY`","key$":"messages","index$":6},"needle":{"a":true,"h":"Needle","n":"needle","r":true,"sh":"Search for a specific substring in any of the events","t":"`$OBJECT`","union":{"branches":3,"count":1,"depth":4},"key$":"needle","index$":7},"result":{"a":true,"h":"Result","n":"result","r":true,"t":"`$ARRAY`","key$":"result","index$":8},"success":{"a":true,"h":"Success","n":"success","r":true,"t":"`$BOOLEAN`","key$":"success","index$":9},"to":{"a":true,"h":"To","n":"to","r":false,"t":"`$NUMBER`","key$":"to","index$":10}},"name":"key","op":{"create":{"input":"data","name":"create","points":[{"a":true,"co":{"id":"POST /accounts/{account_id}/workers/observability/telemetry/keys","source":"openapi3","version":2},"g":{"params":[{"a":true,"k":"param","n":"account_id","or":"account_id","r":true,"t":"`$STRING`","index$":0}]},"k":"http","m":"POST","o":"/accounts/{account_id}/workers/observability/telemetry/keys","q":{"exist":["account_id"]},"r":{},"s":[{"lit":"accounts"},{"var":"account_id"},{"lit":"workers"},{"lit":"observability"},{"lit":"telemetry"},{"lit":"keys"}],"t":{"req":"`reqdata`","res":"`body`"},"index$":0}],"key$":"create"}},"relations":{"ancestors":[["$.main.kit.entity.account"]]},"key$":"key","name__orig":"key","Name":"Key","name_":"key","name-":"key","NAME":"KEY","index$":19}, {"active":true,"entity":"key","key$":"BasicKeyFlow","kind":"basic","name":"BasicKeyFlow","param":{},"step":[{"a":true,"d":{},"i":{"ref":"key_ref01"},"m":{"account_id":"account01"},"o":"create","s":[],"v":[],"index$":0}]}, 'Key', {"POST /accounts/{account_id}/workers/observability/telemetry/keys":{"protocol":"http","requestBody":{"description":"Find keys in your telemetry events matching a specific filter or needle.","required":true,"content":{"application/json":{"schema":{"type":"object","properties":{"datasets":{"description":"Leave this empty to use the default datasets","type":"array","items":{"type":"string"},"default":[],"key$":"datasets"},"filters":{"description":"Apply filters to narrow key discovery. Supports nested groups via kind: 'group'. Maximum nesting depth is 4.","type":"array","items":{"allOf":[{"description":"Supports nested groups via kind: 'group'.","type":"object","anyOf":[],"x-ref":"#/components/schemas/workers-observability_filter_node"},{"anyOf":[],"description":"Supports nested groups via kind: 'group'. Maximum nesting depth is 4."}]},"default":[],"key$":"filters"},"from":{"type":"number","key$":"from"},"keyNeedle":{"description":"If the user suggests a key, use this to narrow down the list of keys returned. Make sure matchCase is false to avoid case sensitivity issues.","type":"object","properties":{"isRegex":{"description":"When true, treats the value as a regular expression (RE2 syntax).","type":"boolean"},"matchCase":{"description":"When true, performs a case-sensitive search. Defaults to case-insensitive.","type":"boolean"},"value":{"description":"The text or pattern to search for.","allOf":[{},{}]}},"required":["value"],"key$":"keyNeedle"},"limit":{"description":"Advanced usage: set limit=1000+ to retrieve comprehensive key options without needing additional filtering.","type":"number","key$":"limit"},"needle":{"description":"Search for a specific substring in any of the events","type":"object","properties":{"isRegex":{"description":"When true, treats the value as a regular expression (RE2 syntax).","type":"boolean"},"matchCase":{"description":"When true, performs a case-sensitive search. Defaults to case-insensitive.","type":"boolean"},"value":{"description":"The text or pattern to search for.","allOf":[{},{}]}},"required":["value"],"key$":"needle"},"to":{"type":"number","key$":"to"}},"index$":1}}}},"parameters":[{"name":"account_id","in":"path","description":"Your Cloudflare account ID.","required":true,"schema":{"type":"string"},"index$":0}]}})
    }
    const client = setup.client
    const struct = setup.struct

    const isempty = struct.isempty
    const select = struct.select


    // CREATE
    const key_ref01_ent = client.Key()
    let key_ref01_data = setup.data.new.key['key_ref01']
    key_ref01_data['account_id'] = setup.idmap['account01']

    key_ref01_data = (await key_ref01_ent.create(key_ref01_data)).data()
    assert(null != key_ref01_data)


  })
})



function basicSetup(extra?: any) {
  // TODO: fix test def options
  const options: any = {} // null

  // TODO: needs test utility to resolve path
  const entityDataFile =
    Path.resolve(__dirname, 
      '../../../../.sdk/test/entity/key/KeyTestData.json')

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
    ['key01','key02','key03','account01','account02','account03'],
    {
      '`$PACK`': ['', {
        '`$KEY`': '`$COPY`',
        '`$VAL`': ['`$FORMAT`', 'upper', '`$COPY`']
      }]
    })

  const env = envOverride({
    'CLOUDFLARE_WORKERS_TEST_KEY_ENTID': idmap,
    'CLOUDFLARE_WORKERS_TEST_LIVE': 'FALSE',
    'CLOUDFLARE_WORKERS_TEST_EXPLAIN': 'FALSE',
    'CLOUDFLARE_WORKERS_APIKEY': '',
  })

  idmap = env['CLOUDFLARE_WORKERS_TEST_KEY_ENTID']

  const live = 'TRUE' === env.CLOUDFLARE_WORKERS_TEST_LIVE

  const transport = createLiveTransport()
  if (live) {
    const rawIds = process.env['CLOUDFLARE_WORKERS_TEST_KEY_ENTID']
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
  
