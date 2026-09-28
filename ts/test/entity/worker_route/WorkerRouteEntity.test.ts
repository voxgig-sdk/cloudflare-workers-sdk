

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


describe('WorkerRouteEntity', async () => {

  // Per-test live pacing. Delay is read from sdk-test-control.json's
  // `test.live.delayMs`; only sleeps when CLOUDFLARE_WORKERS_TEST_LIVE=TRUE.
  afterEach(liveDelay('CLOUDFLARE_WORKERS_TEST_LIVE'))

  test('instance', async () => {
    const testsdk = CloudflareWorkersSDK.test()
    const ent = testsdk.WorkerRoute()
    assert(null != ent)
  })


  test('basic', async (t) => {

    const live = 'TRUE' === process.env.CLOUDFLARE_WORKERS_TEST_LIVE
    for (const op of ['create', 'list', 'update', 'load', 'remove']) {
      if (!live && maybeSkipControl(t, 'entityOp', 'worker_route.' + op, live)) return
    }

    
    const setup = basicSetup()
    if (setup.live) {
      return runLiveEntity(setup, {"active":true,"alias":{"field":{}},"fields":{"errors":{"a":true,"h":"Errors","n":"errors","r":true,"t":"`$ARRAY`","key$":"errors","index$":0},"id":{"a":true,"h":"Id","n":"id","r":true,"ro":true,"t":"`$STRING`","key$":"id","index$":1},"messages":{"a":true,"h":"Messages","n":"messages","r":true,"t":"`$ARRAY`","key$":"messages","index$":2},"pattern":{"a":true,"h":"Pattern","n":"pattern","r":true,"sh":"Pattern to match incoming requests against.","t":"`$STRING`","key$":"pattern","index$":3},"result":{"a":true,"h":"Result","n":"result","r":true,"t":"`$OBJECT`","key$":"result","index$":4},"script":{"a":true,"h":"Script","n":"script","r":false,"sh":"Name of the script to run if the route matches.","t":"`$STRING`","key$":"script","index$":5},"success":{"a":true,"h":"Success","n":"success","r":true,"sh":"Whether the API call was successful.","t":"`$BOOLEAN`","key$":"success","index$":6}},"id":{"field":"id","name":"id"},"name":"worker_route","op":{"create":{"input":"data","name":"create","points":[{"a":true,"co":{"id":"POST /zones/{zone_id}/workers/routes","source":"openapi3","version":2},"g":{"params":[{"a":true,"ex":"023e105f4ecef8ad9ca31a8372d0c353","k":"param","n":"zone_id","or":"zone_id","r":true,"t":"`$STRING`","index$":0}]},"k":"http","m":"POST","o":"/zones/{zone_id}/workers/routes","q":{"exist":["zone_id"]},"r":{},"s":[{"lit":"zones"},{"var":"zone_id"},{"lit":"workers"},{"lit":"routes"}],"t":{"req":"`reqdata`","res":"`body`"},"index$":0}],"key$":"create"},"list":{"input":"data","name":"list","points":[{"a":true,"co":{"id":"GET /zones/{zone_id}/workers/routes","source":"openapi3","version":2},"g":{"params":[{"a":true,"ex":"023e105f4ecef8ad9ca31a8372d0c353","k":"param","n":"zone_id","or":"zone_id","r":true,"t":"`$STRING`","index$":0}]},"k":"http","m":"GET","o":"/zones/{zone_id}/workers/routes","q":{"exist":["zone_id"]},"r":{},"s":[{"lit":"zones"},{"var":"zone_id"},{"lit":"workers"},{"lit":"routes"}],"t":{"req":"`reqdata`","res":"`body`"},"index$":0}],"key$":"list"},"load":{"input":"data","name":"load","points":[{"a":true,"co":{"id":"GET /zones/{zone_id}/workers/routes/{route_id}","source":"openapi3","version":2},"g":{"params":[{"a":true,"ex":"023e105f4ecef8ad9ca31a8372d0c353","k":"param","n":"id","or":"route_id","r":true,"t":"`$STRING`","index$":0},{"a":true,"ex":"023e105f4ecef8ad9ca31a8372d0c353","k":"param","n":"zone_id","or":"zone_id","r":true,"t":"`$STRING`","index$":1}]},"k":"http","m":"GET","o":"/zones/{zone_id}/workers/routes/{route_id}","q":{"exist":["id","zone_id"]},"r":{"param":{"route_id":"id"}},"s":[{"lit":"zones"},{"var":"zone_id"},{"lit":"workers"},{"lit":"routes"},{"var":"id"}],"t":{"req":"`reqdata`","res":"`body`"},"index$":0}],"key$":"load"},"remove":{"input":"data","name":"remove","points":[{"a":true,"co":{"id":"DELETE /zones/{zone_id}/workers/routes/{route_id}","source":"openapi3","version":2},"g":{"params":[{"a":true,"ex":"023e105f4ecef8ad9ca31a8372d0c353","k":"param","n":"id","or":"route_id","r":true,"t":"`$STRING`","index$":0},{"a":true,"ex":"023e105f4ecef8ad9ca31a8372d0c353","k":"param","n":"zone_id","or":"zone_id","r":true,"t":"`$STRING`","index$":1}]},"k":"http","m":"DELETE","o":"/zones/{zone_id}/workers/routes/{route_id}","q":{"exist":["id","zone_id"]},"r":{"param":{"route_id":"id"}},"s":[{"lit":"zones"},{"var":"zone_id"},{"lit":"workers"},{"lit":"routes"},{"var":"id"}],"t":{"req":"`reqdata`","res":"`body`"},"index$":0}],"key$":"remove"},"update":{"input":"data","name":"update","points":[{"a":true,"co":{"id":"PUT /zones/{zone_id}/workers/routes/{route_id}","source":"openapi3","version":2},"g":{"params":[{"a":true,"ex":"023e105f4ecef8ad9ca31a8372d0c353","k":"param","n":"id","or":"route_id","r":true,"t":"`$STRING`","index$":0},{"a":true,"ex":"023e105f4ecef8ad9ca31a8372d0c353","k":"param","n":"zone_id","or":"zone_id","r":true,"t":"`$STRING`","index$":1}]},"k":"http","m":"PUT","o":"/zones/{zone_id}/workers/routes/{route_id}","q":{"exist":["id","zone_id"]},"r":{"param":{"route_id":"id"}},"s":[{"lit":"zones"},{"var":"zone_id"},{"lit":"workers"},{"lit":"routes"},{"var":"id"}],"t":{"req":"`reqdata`","res":"`body`"},"index$":0}],"key$":"update"}},"relations":{"ancestors":[]},"key$":"worker_route","name__orig":"worker_route","Name":"WorkerRoute","name_":"worker_route","name-":"worker-route","NAME":"WORKER_ROUTE","index$":49}, {"active":true,"entity":"worker_route","key$":"BasicWorkerRouteFlow","kind":"basic","name":"BasicWorkerRouteFlow","param":{},"step":[{"a":true,"d":{},"i":{"ref":"worker_route_ref01"},"m":{"zone_id":"zone01"},"o":"create","s":[],"v":[],"index$":0},{"a":true,"d":{},"i":{},"m":{"zone_id":"zone01"},"o":"list","s":[],"v":[{"apply":"ItemExists","def":{"ref":"worker_route_ref01"}}],"index$":1},{"a":true,"d":{"zone_id":"zone01"},"i":{"ref":"worker_route_ref01","srcdatavar":"worker_route_ref01_data","suffix":"_up0","textfield":"pattern"},"m":{},"o":"update","s":[{"apply":"TextFieldMark","def":{"mark":"Mark01-worker_route_ref01"}}],"v":[],"index$":2},{"a":true,"d":{},"i":{"ref":"worker_route_ref01","srcdatavar":"worker_route_ref01_data","suffix":"_dt0"},"m":{"id":"worker_route01","zone_id":"zone01"},"o":"load","s":[],"v":[{"apply":"TextFieldMark","def":{"mark":"Mark01-worker_route_ref01"}}],"index$":3},{"a":true,"d":{},"i":{"ref":"worker_route_ref01","suffix":"_rm0"},"m":{"id":"worker_route01","zone_id":"zone01"},"o":"remove","s":[],"v":[],"index$":4},{"a":true,"d":{},"i":{"suffix":"_rt0"},"m":{"zone_id":"zone01"},"o":"list","s":[],"v":[{"apply":"ItemNotExists","def":{"ref":"worker_route_ref01"}}],"index$":5}]}, 'WorkerRoute', {"POST /zones/{zone_id}/workers/routes":{"protocol":"http","requestBody":{"required":true,"content":{"application/json":{"schema":{"type":"object","properties":{"id":{"allOf":[{"description":"Identifier.","example":"023e105f4ecef8ad9ca31a8372d0c353","maxLength":32,"type":"string","x-auditable":true,"x-ref":"#/components/schemas/workers_identifier"}],"readOnly":true,"key$":"id"},"pattern":{"description":"Pattern to match incoming requests against. [Learn more](https://developers.cloudflare.com/workers/configuration/routing/routes/#matching-behavior).","example":"example.com/*","type":"string","x-auditable":true,"key$":"pattern"},"script":{"description":"Name of the script to run if the route matches.","example":"my-workers-script","type":"string","x-auditable":true,"key$":"script"}},"required":["id","pattern"],"x-ref":"#/components/schemas/workers_route","index$":1}}}},"parameters":[{"name":"zone_id","in":"path","required":true,"schema":{"description":"Identifier.","type":"string","example":"023e105f4ecef8ad9ca31a8372d0c353","maxLength":32,"x-auditable":true,"x-ref":"#/components/schemas/workers_identifier"},"index$":0}]},"GET /zones/{zone_id}/workers/routes":{"protocol":"http","parameters":[{"name":"zone_id","in":"path","required":true,"schema":{"description":"Identifier.","type":"string","example":"023e105f4ecef8ad9ca31a8372d0c353","maxLength":32,"x-auditable":true,"x-ref":"#/components/schemas/workers_identifier"},"index$":0}]},"GET /zones/{zone_id}/workers/routes/{route_id}":{"protocol":"http","parameters":[{"name":"route_id","in":"path","required":true,"schema":{"description":"Identifier.","type":"string","example":"023e105f4ecef8ad9ca31a8372d0c353","maxLength":32,"x-auditable":true,"x-ref":"#/components/schemas/workers_identifier"},"index$":0},{"name":"zone_id","in":"path","required":true,"schema":{"description":"Identifier.","type":"string","example":"023e105f4ecef8ad9ca31a8372d0c353","maxLength":32,"x-auditable":true,"x-ref":"#/components/schemas/workers_identifier"},"index$":1}]},"DELETE /zones/{zone_id}/workers/routes/{route_id}":{"protocol":"http","parameters":[{"name":"route_id","in":"path","required":true,"schema":{"description":"Identifier.","type":"string","example":"023e105f4ecef8ad9ca31a8372d0c353","maxLength":32,"x-auditable":true,"x-ref":"#/components/schemas/workers_identifier"},"index$":0},{"name":"zone_id","in":"path","required":true,"schema":{"description":"Identifier.","type":"string","example":"023e105f4ecef8ad9ca31a8372d0c353","maxLength":32,"x-auditable":true,"x-ref":"#/components/schemas/workers_identifier"},"index$":1}]},"PUT /zones/{zone_id}/workers/routes/{route_id}":{"protocol":"http","requestBody":{"required":true,"content":{"application/json":{"schema":{"type":"object","properties":{"id":{"allOf":[{"description":"Identifier.","example":"023e105f4ecef8ad9ca31a8372d0c353","maxLength":32,"type":"string","x-auditable":true,"x-ref":"#/components/schemas/workers_identifier"}],"readOnly":true,"key$":"id"},"pattern":{"description":"Pattern to match incoming requests against. [Learn more](https://developers.cloudflare.com/workers/configuration/routing/routes/#matching-behavior).","example":"example.com/*","type":"string","x-auditable":true,"key$":"pattern"},"script":{"description":"Name of the script to run if the route matches.","example":"my-workers-script","type":"string","x-auditable":true,"key$":"script"}},"required":["id","pattern"],"x-ref":"#/components/schemas/workers_route","index$":1}}}},"parameters":[{"name":"route_id","in":"path","required":true,"schema":{"description":"Identifier.","type":"string","example":"023e105f4ecef8ad9ca31a8372d0c353","maxLength":32,"x-auditable":true,"x-ref":"#/components/schemas/workers_identifier"},"index$":0},{"name":"zone_id","in":"path","required":true,"schema":{"description":"Identifier.","type":"string","example":"023e105f4ecef8ad9ca31a8372d0c353","maxLength":32,"x-auditable":true,"x-ref":"#/components/schemas/workers_identifier"},"index$":1}]}})
    }
    const client = setup.client
    const struct = setup.struct

    const isempty = struct.isempty
    const select = struct.select


    // CREATE
    const worker_route_ref01_ent = client.WorkerRoute()
    let worker_route_ref01_data = setup.data.new.worker_route['worker_route_ref01']
    worker_route_ref01_data['zone_id'] = setup.idmap['zone01']

    worker_route_ref01_data = (await worker_route_ref01_ent.create(worker_route_ref01_data)).data()
    assert(null != worker_route_ref01_data.id)


    // LIST
    const worker_route_ref01_match: any = {}
    worker_route_ref01_match['zone_id'] = setup.idmap['zone01']

    const worker_route_ref01_list = (await worker_route_ref01_ent.list(worker_route_ref01_match)).map((e: any) => e.data())

    assert(!isempty(select(worker_route_ref01_list, { id: worker_route_ref01_data.id })))


    // UPDATE
    const worker_route_ref01_data_up0: any = {}
    worker_route_ref01_data_up0.id = worker_route_ref01_data.id
    worker_route_ref01_data_up0 ['zone_id'] = setup.idmap['zone_id']

    const worker_route_ref01_markdef_up0 = { name: 'pattern', value: 'Mark01-worker_route_ref01_' + setup.now }
    ;(worker_route_ref01_data_up0 as any)[worker_route_ref01_markdef_up0.name] = worker_route_ref01_markdef_up0.value

    const worker_route_ref01_resdata_up0 = (await worker_route_ref01_ent.update(worker_route_ref01_data_up0)).data()
    assert(worker_route_ref01_resdata_up0.id === worker_route_ref01_data_up0.id)

    assert((worker_route_ref01_resdata_up0 as any)[worker_route_ref01_markdef_up0.name] === worker_route_ref01_markdef_up0.value)


    // LOAD
    const worker_route_ref01_match_dt0: any = {}
    worker_route_ref01_match_dt0.id = worker_route_ref01_data.id
    const worker_route_ref01_data_dt0 = (await worker_route_ref01_ent.load(worker_route_ref01_match_dt0)).data()
    assert(worker_route_ref01_data_dt0.id === worker_route_ref01_data.id)


    // REMOVE
    const worker_route_ref01_match_rm0: any = { id: worker_route_ref01_data.id }
    await worker_route_ref01_ent.remove(worker_route_ref01_match_rm0)
  

    // LIST
    const worker_route_ref01_match_rt0: any = {}
    worker_route_ref01_match_rt0['zone_id'] = setup.idmap['zone01']

    const worker_route_ref01_list_rt0 = (await worker_route_ref01_ent.list(worker_route_ref01_match_rt0)).map((e: any) => e.data())

    assert(isempty(select(worker_route_ref01_list_rt0, { id: worker_route_ref01_data.id })))


  })
})



function basicSetup(extra?: any) {
  // TODO: fix test def options
  const options: any = {} // null

  // TODO: needs test utility to resolve path
  const entityDataFile =
    Path.resolve(__dirname, 
      '../../../../.sdk/test/entity/worker_route/WorkerRouteTestData.json')

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
    ['worker_route01','worker_route02','worker_route03','zone01'],
    {
      '`$PACK`': ['', {
        '`$KEY`': '`$COPY`',
        '`$VAL`': ['`$FORMAT`', 'upper', '`$COPY`']
      }]
    })

  const env = envOverride({
    'CLOUDFLARE_WORKERS_TEST_WORKER_ROUTE_ENTID': idmap,
    'CLOUDFLARE_WORKERS_TEST_LIVE': 'FALSE',
    'CLOUDFLARE_WORKERS_TEST_EXPLAIN': 'FALSE',
    'CLOUDFLARE_WORKERS_APIKEY': '',
  })

  idmap = env['CLOUDFLARE_WORKERS_TEST_WORKER_ROUTE_ENTID']

  const live = 'TRUE' === env.CLOUDFLARE_WORKERS_TEST_LIVE

  const transport = createLiveTransport()
  if (live) {
    const rawIds = process.env['CLOUDFLARE_WORKERS_TEST_WORKER_ROUTE_ENTID']
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
  
