

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


describe('LiveTailEntity', async () => {

  // Per-test live pacing. Delay is read from sdk-test-control.json's
  // `test.live.delayMs`; only sleeps when CLOUDFLARE_WORKERS_TEST_LIVE=TRUE.
  afterEach(liveDelay('CLOUDFLARE_WORKERS_TEST_LIVE'))

  test('instance', async () => {
    const testsdk = CloudflareWorkersSDK.test()
    const ent = testsdk.LiveTail()
    assert(null != ent)
  })


  test('basic', async (t) => {

    const live = 'TRUE' === process.env.CLOUDFLARE_WORKERS_TEST_LIVE
    for (const op of ['create']) {
      if (!live && maybeSkipControl(t, 'entityOp', 'live_tail.' + op, live)) return
    }

    
    const setup = basicSetup()
    if (setup.live) {
      return runLiveEntity(setup, {"active":true,"alias":{"field":{}},"fields":{"errors":{"a":true,"h":"Errors","n":"errors","r":true,"t":"`$ARRAY`","key$":"errors","index$":0},"filterCombination":{"a":true,"h":"Filter Combination","n":"filterCombination","r":false,"sh":"Set a flag to describe how to combine the filters on the query.","t":"`$STRING`","key$":"filterCombination","index$":1},"filters":{"a":true,"h":"Filters","n":"filters","r":false,"sh":"Apply filters to the query.","t":"`$ARRAY`","union":{"branches":3,"count":5,"depth":8},"key$":"filters","index$":2},"messages":{"a":true,"h":"Messages","n":"messages","r":true,"t":"`$ARRAY`","key$":"messages","index$":3},"result":{"a":true,"h":"Result","n":"result","r":true,"t":"`$OBJECT`","key$":"result","index$":4},"scriptId":{"a":true,"h":"Script Id","n":"scriptId","r":false,"t":"`$STRING`","key$":"scriptId","index$":5},"success":{"a":true,"h":"Success","n":"success","r":true,"t":"`$BOOLEAN`","key$":"success","index$":6}},"name":"live_tail","op":{"create":{"input":"data","name":"create","points":[{"a":true,"co":{"id":"POST /accounts/{account_id}/workers/observability/telemetry/live-tail","source":"openapi3","version":2},"g":{"params":[{"a":true,"k":"param","n":"account_id","or":"account_id","r":true,"t":"`$STRING`","index$":0}]},"k":"http","m":"POST","o":"/accounts/{account_id}/workers/observability/telemetry/live-tail","q":{"exist":["account_id"]},"r":{},"s":[{"lit":"accounts"},{"var":"account_id"},{"lit":"workers"},{"lit":"observability"},{"lit":"telemetry"},{"lit":"live-tail"}],"t":{"req":"`reqdata`","res":"`body`"},"index$":0},{"a":true,"co":{"id":"POST /accounts/{account_id}/workers/observability/telemetry/live-tail/heartbeat","source":"openapi3","version":2},"g":{"params":[{"a":true,"k":"param","n":"account_id","or":"account_id","r":true,"t":"`$STRING`","index$":0}]},"k":"http","m":"POST","o":"/accounts/{account_id}/workers/observability/telemetry/live-tail/heartbeat","q":{"$action":"heartbeat","exist":["account_id"]},"r":{},"s":[{"lit":"accounts"},{"var":"account_id"},{"lit":"workers"},{"lit":"observability"},{"lit":"telemetry"},{"lit":"live-tail"},{"lit":"heartbeat"}],"t":{"req":"`reqdata`","res":"`body`"},"index$":1}],"key$":"create"}},"relations":{"ancestors":[["$.main.kit.entity.account"]]},"key$":"live_tail","name__orig":"live_tail","Name":"LiveTail","name_":"live_tail","name-":"live-tail","NAME":"LIVE_TAIL","index$":20}, {"active":true,"entity":"live_tail","key$":"BasicLiveTailFlow","kind":"basic","name":"BasicLiveTailFlow","param":{},"step":[{"a":true,"d":{},"i":{"ref":"live_tail_ref01"},"m":{"account_id":"account01"},"o":"create","s":[],"v":[],"index$":0}]}, 'LiveTail', {"POST /accounts/{account_id}/workers/observability/telemetry/live-tail":{"protocol":"http","requestBody":{"description":"Create websocket server for live tail.","required":true,"content":{"application/json":{"schema":{"type":"object","properties":{"filterCombination":{"description":"Set a flag to describe how to combine the filters on the query.","type":"string","default":"and","enum":["and","or","AND","OR"],"key$":"filterCombination"},"filters":{"description":"Apply filters to the query. Supports nested groups via kind: 'group'.","type":"array","items":{"allOf":[{"description":"Supports nested groups via kind: 'group'.","type":"object","anyOf":[],"x-ref":"#/components/schemas/workers-observability_filter_node"},{"anyOf":[],"description":"Supports nested groups via kind: 'group'. Maximum nesting depth is 4."}]},"default":[],"key$":"filters"},"scriptId":{"type":"string","key$":"scriptId"}},"index$":1}}}},"parameters":[{"name":"account_id","in":"path","description":"Your Cloudflare account ID.","required":true,"schema":{"type":"string"},"index$":0}]},"POST /accounts/{account_id}/workers/observability/telemetry/live-tail/heartbeat":{"protocol":"http","requestBody":{"description":"Keep your live tail connection alive.","required":true,"content":{"application/json":{"schema":{"type":"object","properties":{"scriptId":{"type":"string"}}}}}},"parameters":[{"name":"account_id","in":"path","description":"Your Cloudflare account ID.","required":true,"schema":{"type":"string"},"index$":0}]}})
    }
    const client = setup.client
    const struct = setup.struct

    const isempty = struct.isempty
    const select = struct.select


    // CREATE
    const live_tail_ref01_ent = client.LiveTail()
    let live_tail_ref01_data = setup.data.new.live_tail['live_tail_ref01']
    live_tail_ref01_data['account_id'] = setup.idmap['account01']

    live_tail_ref01_data = (await live_tail_ref01_ent.create(live_tail_ref01_data)).data()
    assert(null != live_tail_ref01_data)


  })
})



function basicSetup(extra?: any) {
  // TODO: fix test def options
  const options: any = {} // null

  // TODO: needs test utility to resolve path
  const entityDataFile =
    Path.resolve(__dirname, 
      '../../../../.sdk/test/entity/live_tail/LiveTailTestData.json')

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
    ['live_tail01','live_tail02','live_tail03','account01','account02','account03'],
    {
      '`$PACK`': ['', {
        '`$KEY`': '`$COPY`',
        '`$VAL`': ['`$FORMAT`', 'upper', '`$COPY`']
      }]
    })

  const env = envOverride({
    'CLOUDFLARE_WORKERS_TEST_LIVE_TAIL_ENTID': idmap,
    'CLOUDFLARE_WORKERS_TEST_LIVE': 'FALSE',
    'CLOUDFLARE_WORKERS_TEST_EXPLAIN': 'FALSE',
    'CLOUDFLARE_WORKERS_APIKEY': '',
  })

  idmap = env['CLOUDFLARE_WORKERS_TEST_LIVE_TAIL_ENTID']

  const live = 'TRUE' === env.CLOUDFLARE_WORKERS_TEST_LIVE

  const transport = createLiveTransport()
  if (live) {
    const rawIds = process.env['CLOUDFLARE_WORKERS_TEST_LIVE_TAIL_ENTID']
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
  
