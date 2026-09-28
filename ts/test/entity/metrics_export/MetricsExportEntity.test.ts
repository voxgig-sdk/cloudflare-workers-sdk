

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


describe('MetricsExportEntity', async () => {

  // Per-test live pacing. Delay is read from sdk-test-control.json's
  // `test.live.delayMs`; only sleeps when CLOUDFLARE_WORKERS_TEST_LIVE=TRUE.
  afterEach(liveDelay('CLOUDFLARE_WORKERS_TEST_LIVE'))

  test('instance', async () => {
    const testsdk = CloudflareWorkersSDK.test()
    const ent = testsdk.MetricsExport()
    assert(null != ent)
  })


  test('basic', async (t) => {

    const live = 'TRUE' === process.env.CLOUDFLARE_WORKERS_TEST_LIVE
    for (const op of ['create', 'list']) {
      if (!live && maybeSkipControl(t, 'entityOp', 'metrics_export.' + op, live)) return
    }

    
    const setup = basicSetup()
    if (setup.live) {
      return runLiveEntity(setup, {"active":true,"alias":{"field":{}},"fields":{"errors":{"a":true,"h":"Errors","n":"errors","r":true,"t":"`$ARRAY`","key$":"errors","index$":0},"messages":{"a":true,"h":"Messages","n":"messages","r":true,"t":"`$ARRAY`","key$":"messages","index$":1},"requester":{"a":true,"h":"Requester","n":"requester","r":true,"t":"`$OBJECT`","key$":"requester","index$":2},"resources":{"a":true,"h":"Resources","n":"resources","r":true,"t":"`$ARRAY`","key$":"resources","index$":3},"result":{"a":true,"h":"Result","n":"result","r":true,"t":"`$ARRAY`","key$":"result","index$":4},"success":{"a":true,"h":"Success","n":"success","r":true,"t":"`$BOOLEAN`","key$":"success","index$":5}},"name":"metrics_export","op":{"create":{"input":"data","name":"create","points":[{"a":true,"co":{"id":"POST /accounts/{account_id}/workers/observability/metricsexport","source":"openapi3","version":2},"g":{"params":[{"a":true,"k":"param","n":"account_id","or":"account_id","r":true,"t":"`$STRING`","index$":0}]},"k":"http","m":"POST","o":"/accounts/{account_id}/workers/observability/metricsexport","q":{"exist":["account_id"]},"r":{},"s":[{"lit":"accounts"},{"var":"account_id"},{"lit":"workers"},{"lit":"observability"},{"lit":"metricsexport"}],"t":{"req":{"requester":"`reqdata.requester`","resources":"`reqdata.resource`"},"res":"`body`"},"index$":0}],"key$":"create"},"list":{"input":"data","name":"list","points":[{"a":true,"co":{"id":"GET /accounts/{account_id}/workers/observability/metricsexport","source":"openapi3","version":2},"g":{"params":[{"a":true,"k":"param","n":"account_id","or":"account_id","r":true,"t":"`$STRING`","index$":0}]},"k":"http","m":"GET","o":"/accounts/{account_id}/workers/observability/metricsexport","q":{"exist":["account_id"]},"r":{},"s":[{"lit":"accounts"},{"var":"account_id"},{"lit":"workers"},{"lit":"observability"},{"lit":"metricsexport"}],"t":{"req":"`reqdata`","res":"`body`"},"index$":0}],"key$":"list"}},"relations":{"ancestors":[["$.main.kit.entity.account"]]},"key$":"metrics_export","name__orig":"metrics_export","Name":"MetricsExport","name_":"metrics_export","name-":"metrics-export","NAME":"METRICS_EXPORT","index$":21}, {"active":true,"entity":"metrics_export","key$":"BasicMetricsExportFlow","kind":"basic","name":"BasicMetricsExportFlow","param":{},"step":[{"a":true,"d":{},"i":{"ref":"metrics_export_ref01"},"m":{"account_id":"account01"},"o":"create","s":[],"v":[],"index$":0},{"a":true,"d":{},"i":{},"m":{"account_id":"account01"},"o":"list","s":[],"v":[{"apply":"ItemExists","def":{"ref":"metrics_export_ref01"}}],"index$":1}]}, 'MetricsExport', {"POST /accounts/{account_id}/workers/observability/metricsexport":{"protocol":"http","requestBody":{"content":{"application/json":{"schema":{"type":"object","properties":{"requester":{"type":"object","additionalProperties":false,"properties":{"requesterId":{"type":"string","minLength":1},"requesterType":{"type":"string","enum":["workers"]}},"required":["requesterType","requesterId"],"key$":"requester"},"resources":{"type":"array","items":{"additionalProperties":false,"properties":{"destinations":{"type":"array","items":{},"minItems":1},"resourceId":{"type":"string","minLength":1},"resourceType":{"type":"string","enum":[]}},"required":["resourceType","resourceId","destinations"],"type":"object"},"key$":"resources"}},"additionalProperties":false,"required":["requester","resources"],"index$":1}}}},"parameters":[{"name":"account_id","in":"path","description":"Your Cloudflare account ID.","required":true,"schema":{"type":"string"},"index$":0}]},"GET /accounts/{account_id}/workers/observability/metricsexport":{"protocol":"http","parameters":[{"name":"account_id","in":"path","description":"Your Cloudflare account ID.","required":true,"schema":{"type":"string"},"index$":0}]}})
    }
    const client = setup.client
    const struct = setup.struct

    const isempty = struct.isempty
    const select = struct.select


    // CREATE
    const metrics_export_ref01_ent = client.MetricsExport()
    let metrics_export_ref01_data = setup.data.new.metrics_export['metrics_export_ref01']
    metrics_export_ref01_data['account_id'] = setup.idmap['account01']

    metrics_export_ref01_data = (await metrics_export_ref01_ent.create(metrics_export_ref01_data)).data()
    assert(null != metrics_export_ref01_data)


    // LIST
    const metrics_export_ref01_match: any = {}
    metrics_export_ref01_match['account_id'] = setup.idmap['account01']

    const metrics_export_ref01_list = (await metrics_export_ref01_ent.list(metrics_export_ref01_match)).map((e: any) => e.data())


  })
})



function basicSetup(extra?: any) {
  // TODO: fix test def options
  const options: any = {} // null

  // TODO: needs test utility to resolve path
  const entityDataFile =
    Path.resolve(__dirname, 
      '../../../../.sdk/test/entity/metrics_export/MetricsExportTestData.json')

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
    ['metrics_export01','metrics_export02','metrics_export03','account01','account02','account03'],
    {
      '`$PACK`': ['', {
        '`$KEY`': '`$COPY`',
        '`$VAL`': ['`$FORMAT`', 'upper', '`$COPY`']
      }]
    })

  const env = envOverride({
    'CLOUDFLARE_WORKERS_TEST_METRICS_EXPORT_ENTID': idmap,
    'CLOUDFLARE_WORKERS_TEST_LIVE': 'FALSE',
    'CLOUDFLARE_WORKERS_TEST_EXPLAIN': 'FALSE',
    'CLOUDFLARE_WORKERS_APIKEY': '',
  })

  idmap = env['CLOUDFLARE_WORKERS_TEST_METRICS_EXPORT_ENTID']

  const live = 'TRUE' === env.CLOUDFLARE_WORKERS_TEST_LIVE

  const transport = createLiveTransport()
  if (live) {
    const rawIds = process.env['CLOUDFLARE_WORKERS_TEST_METRICS_EXPORT_ENTID']
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
  
