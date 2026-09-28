

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


describe('SavedQueryEntity', async () => {

  // Per-test live pacing. Delay is read from sdk-test-control.json's
  // `test.live.delayMs`; only sleeps when CLOUDFLARE_WORKERS_TEST_LIVE=TRUE.
  afterEach(liveDelay('CLOUDFLARE_WORKERS_TEST_LIVE'))

  test('instance', async () => {
    const testsdk = CloudflareWorkersSDK.test()
    const ent = testsdk.SavedQuery()
    assert(null != ent)
  })


  test('basic', async (t) => {

    const live = 'TRUE' === process.env.CLOUDFLARE_WORKERS_TEST_LIVE
    for (const op of ['create', 'list', 'update', 'load', 'remove']) {
      if (!live && maybeSkipControl(t, 'entityOp', 'saved_query.' + op, live)) return
    }

    
    const setup = basicSetup()
    if (setup.live) {
      return runLiveEntity(setup, {"active":true,"alias":{"field":{}},"fields":{"description":{"a":true,"h":"Description","n":"description","r":true,"t":"`$STRING`","key$":"description","index$":0},"errors":{"a":true,"h":"Errors","n":"errors","r":true,"t":"`$ARRAY`","key$":"errors","index$":1},"id":{"a":true,"h":"Id","n":"id","r":false,"t":"`$STRING`","key$":"id","index$":2},"messages":{"a":true,"h":"Messages","n":"messages","r":true,"t":"`$ARRAY`","key$":"messages","index$":3},"name":{"a":true,"h":"Name","n":"name","r":true,"sh":"Query name","t":"`$STRING`","key$":"name","index$":4},"parameters":{"a":true,"h":"Parameters","n":"parameters","r":true,"t":"`$OBJECT`","union":{"branches":3,"count":3,"depth":7},"key$":"parameters","index$":5},"result":{"a":true,"h":"Result","n":"result","r":true,"t":"`$OBJECT`","union":{"branches":3,"count":3,"depth":9},"key$":"result","index$":6},"success":{"a":true,"h":"Success","n":"success","r":true,"t":"`$BOOLEAN`","key$":"success","index$":7}},"id":{"field":"id","name":"id"},"name":"saved_query","op":{"create":{"input":"data","name":"create","points":[{"a":true,"co":{"id":"POST /accounts/{account_id}/workers/observability/queries","source":"openapi3","version":2},"g":{"params":[{"a":true,"k":"param","n":"account_id","or":"account_id","r":true,"t":"`$STRING`","index$":0}]},"k":"http","m":"POST","o":"/accounts/{account_id}/workers/observability/queries","q":{"exist":["account_id"]},"r":{},"s":[{"lit":"accounts"},{"var":"account_id"},{"lit":"workers"},{"lit":"observability"},{"lit":"queries"}],"t":{"req":"`reqdata`","res":"`body`"},"index$":0}],"key$":"create"},"list":{"input":"data","name":"list","points":[{"a":true,"co":{"id":"GET /accounts/{account_id}/workers/observability/queries","source":"openapi3","version":2},"g":{"params":[{"a":true,"k":"param","n":"account_id","or":"account_id","r":true,"t":"`$STRING`","index$":0}],"query":[{"a":true,"ex":"desc","k":"query","n":"order","or":"order","r":false,"t":"`$STRING`","index$":0},{"a":true,"ex":"updated","k":"query","n":"order_by","or":"order_by","r":false,"t":"`$STRING`","index$":1},{"a":true,"ex":1,"k":"query","n":"page","or":"page","r":false,"t":"`$NUMBER`","index$":2},{"a":true,"ex":20,"k":"query","n":"per_page","or":"per_page","r":false,"t":"`$NUMBER`","index$":3}]},"k":"http","m":"GET","o":"/accounts/{account_id}/workers/observability/queries","q":{"exist":["account_id","order","order_by","page","per_page"]},"r":{},"s":[{"lit":"accounts"},{"var":"account_id"},{"lit":"workers"},{"lit":"observability"},{"lit":"queries"}],"t":{"req":"`reqdata`","res":"`body`"},"index$":0}],"key$":"list"},"load":{"input":"data","name":"load","points":[{"a":true,"co":{"id":"GET /accounts/{account_id}/workers/observability/queries/{queryId}","source":"openapi3","version":2},"g":{"params":[{"a":true,"k":"param","n":"account_id","or":"account_id","r":true,"t":"`$STRING`","index$":0},{"a":true,"k":"param","n":"id","or":"query_id","r":true,"t":"`$STRING`","index$":1}]},"k":"http","m":"GET","o":"/accounts/{account_id}/workers/observability/queries/{queryId}","q":{"exist":["account_id","id"]},"r":{"param":{"queryId":"id"}},"s":[{"lit":"accounts"},{"var":"account_id"},{"lit":"workers"},{"lit":"observability"},{"lit":"queries"},{"var":"id"}],"t":{"req":"`reqdata`","res":"`body`"},"index$":0}],"key$":"load"},"remove":{"input":"data","name":"remove","points":[{"a":true,"co":{"id":"DELETE /accounts/{account_id}/workers/observability/queries/{queryId}","source":"openapi3","version":2},"g":{"params":[{"a":true,"k":"param","n":"account_id","or":"account_id","r":true,"t":"`$STRING`","index$":0},{"a":true,"k":"param","n":"id","or":"query_id","r":true,"t":"`$STRING`","index$":1}]},"k":"http","m":"DELETE","o":"/accounts/{account_id}/workers/observability/queries/{queryId}","q":{"exist":["account_id","id"]},"r":{"param":{"queryId":"id"}},"s":[{"lit":"accounts"},{"var":"account_id"},{"lit":"workers"},{"lit":"observability"},{"lit":"queries"},{"var":"id"}],"t":{"req":"`reqdata`","res":"`body`"},"index$":0}],"key$":"remove"},"update":{"input":"data","name":"update","points":[{"a":true,"co":{"id":"PATCH /accounts/{account_id}/workers/observability/queries/{queryId}","source":"openapi3","version":2},"g":{"params":[{"a":true,"k":"param","n":"account_id","or":"account_id","r":true,"t":"`$STRING`","index$":0},{"a":true,"k":"param","n":"id","or":"query_id","r":true,"t":"`$STRING`","index$":1}]},"k":"http","m":"PATCH","o":"/accounts/{account_id}/workers/observability/queries/{queryId}","q":{"exist":["account_id","id"]},"r":{"param":{"queryId":"id"}},"s":[{"lit":"accounts"},{"var":"account_id"},{"lit":"workers"},{"lit":"observability"},{"lit":"queries"},{"var":"id"}],"t":{"req":"`reqdata`","res":"`body`"},"index$":0}],"key$":"update"}},"relations":{"ancestors":[["$.main.kit.entity.account"]]},"key$":"saved_query","name__orig":"saved_query","Name":"SavedQuery","name_":"saved_query","name-":"saved-query","NAME":"SAVED_QUERY","index$":28}, {"active":true,"entity":"saved_query","key$":"BasicSavedQueryFlow","kind":"basic","name":"BasicSavedQueryFlow","param":{},"step":[{"a":true,"d":{},"i":{"ref":"saved_query_ref01"},"m":{"account_id":"account01"},"o":"create","s":[],"v":[],"index$":0},{"a":true,"d":{},"i":{},"m":{"account_id":"account01"},"o":"list","s":[],"v":[{"apply":"ItemExists","def":{"ref":"saved_query_ref01"}}],"index$":1},{"a":true,"d":{"account_id":"account01"},"i":{"ref":"saved_query_ref01","srcdatavar":"saved_query_ref01_data","suffix":"_up0","textfield":"description"},"m":{},"o":"update","s":[{"apply":"TextFieldMark","def":{"mark":"Mark01-saved_query_ref01"}}],"v":[],"index$":2},{"a":true,"d":{},"i":{"ref":"saved_query_ref01","srcdatavar":"saved_query_ref01_data","suffix":"_dt0"},"m":{"account_id":"account01","id":"saved_query01"},"o":"load","s":[],"v":[{"apply":"TextFieldMark","def":{"mark":"Mark01-saved_query_ref01"}}],"index$":3},{"a":true,"d":{},"i":{"ref":"saved_query_ref01","suffix":"_rm0"},"m":{"account_id":"account01","id":"saved_query01"},"o":"remove","s":[],"v":[],"index$":4},{"a":true,"d":{},"i":{"suffix":"_rt0"},"m":{"account_id":"account01"},"o":"list","s":[],"v":[{"apply":"ItemNotExists","def":{"ref":"saved_query_ref01"}}],"index$":5}]}, 'SavedQuery', {"POST /accounts/{account_id}/workers/observability/queries":{"protocol":"http","requestBody":{"description":"Specify the new contents of the query.","required":true,"content":{"application/json":{"schema":{"type":"object","properties":{"description":{"type":"string","example":"Query description","maxLength":1000,"nullable":true,"key$":"description"},"name":{"description":"Query name","type":"string","maxLength":250,"minLength":1,"key$":"name"},"parameters":{"properties":{"calculations":{"description":"Create Calculations to compute as part of the query.","type":"array","items":{"discriminator":{},"oneOf":[]}},"datasets":{"description":"Set the Datasets to query. Leave it empty to query all the datasets.","type":"array","items":{"type":"string"},"example":[]},"filterCombination":{"description":"Set a Flag to describe how to combine the filters on the query.","type":"string","enum":["and","or","AND","OR"]},"filters":{"description":"Configure the Filters to apply to the query. Supports nested groups via kind: 'group'.","type":"array","items":{"description":"Supports nested groups via kind: 'group'.","type":"object","anyOf":[],"x-ref":"#/components/schemas/workers-observability_filter_node"}},"groupBys":{"description":"Define how to group the results of the query.","type":"array","items":{"properties":{},"required":[],"type":"object"}},"havings":{"description":"Configure the Having clauses that filter on calculations in the query result.","type":"array","items":{"properties":{},"required":[],"type":"object"}},"limit":{"description":"Set a limit on the number of results / records returned by the query","type":"integer","maximum":100,"minimum":0},"needle":{"description":"Define an expression to search using full-text search.","type":"object","properties":{"isRegex":{},"matchCase":{},"value":{}},"required":["value"]},"orderBy":{"description":"Configure the order of the results returned by the query.","type":"object","properties":{"order":{},"value":{}},"required":["value"]}},"type":"object","key$":"parameters"}},"required":["description","name","parameters"],"index$":1}}}},"parameters":[{"name":"account_id","in":"path","description":"Your Cloudflare account ID.","required":true,"schema":{"type":"string"},"index$":0}]},"GET /accounts/{account_id}/workers/observability/queries":{"protocol":"http","parameters":[{"name":"account_id","in":"path","description":"Your Cloudflare account ID.","required":true,"schema":{"type":"string"},"index$":0},{"name":"page","in":"query","schema":{"type":"number","default":1,"minimum":1},"index$":1},{"name":"perPage","in":"query","schema":{"type":"number","default":20,"maximum":50,"minimum":5},"index$":2},{"name":"order","in":"query","schema":{"type":"string","default":"desc","enum":["asc","desc"]},"index$":3},{"name":"orderBy","in":"query","schema":{"type":"string","default":"updated","enum":["created","updated"]},"index$":4}]},"GET /accounts/{account_id}/workers/observability/queries/{queryId}":{"protocol":"http","parameters":[{"name":"account_id","in":"path","description":"Your Cloudflare account ID.","required":true,"schema":{"type":"string"},"index$":0},{"name":"queryId","in":"path","required":true,"schema":{"type":"string"},"index$":1}]},"DELETE /accounts/{account_id}/workers/observability/queries/{queryId}":{"protocol":"http","parameters":[{"name":"account_id","in":"path","description":"Your Cloudflare account ID.","required":true,"schema":{"type":"string"},"index$":0},{"name":"queryId","in":"path","required":true,"schema":{"type":"string"},"index$":1}]},"PATCH /accounts/{account_id}/workers/observability/queries/{queryId}":{"protocol":"http","requestBody":{"description":"Specify the new contents of the query.","required":true,"content":{"application/json":{"schema":{"type":"object","properties":{"description":{"type":"string","example":"Query description","maxLength":1000,"nullable":true,"key$":"description"},"name":{"description":"Query name","type":"string","maxLength":250,"minLength":1,"key$":"name"},"parameters":{"properties":{"calculations":{"description":"Create Calculations to compute as part of the query.","type":"array","items":{"discriminator":{},"oneOf":[]}},"datasets":{"description":"Set the Datasets to query. Leave it empty to query all the datasets.","type":"array","items":{"type":"string"},"example":[]},"filterCombination":{"description":"Set a Flag to describe how to combine the filters on the query.","type":"string","enum":["and","or","AND","OR"]},"filters":{"description":"Configure the Filters to apply to the query. Supports nested groups via kind: 'group'.","type":"array","items":{"description":"Supports nested groups via kind: 'group'.","type":"object","anyOf":[],"x-ref":"#/components/schemas/workers-observability_filter_node"}},"groupBys":{"description":"Define how to group the results of the query.","type":"array","items":{"properties":{},"required":[],"type":"object"}},"havings":{"description":"Configure the Having clauses that filter on calculations in the query result.","type":"array","items":{"properties":{},"required":[],"type":"object"}},"limit":{"description":"Set a limit on the number of results / records returned by the query","type":"integer","maximum":100,"minimum":0},"needle":{"description":"Define an expression to search using full-text search.","type":"object","properties":{"isRegex":{},"matchCase":{},"value":{}},"required":["value"]},"orderBy":{"description":"Configure the order of the results returned by the query.","type":"object","properties":{"order":{},"value":{}},"required":["value"]}},"type":"object","key$":"parameters"}},"required":["description","name","parameters"],"index$":1}}}},"parameters":[{"name":"account_id","in":"path","description":"Your Cloudflare account ID.","required":true,"schema":{"type":"string"},"index$":0},{"name":"queryId","in":"path","required":true,"schema":{"type":"string"},"index$":1}]}})
    }
    const client = setup.client
    const struct = setup.struct

    const isempty = struct.isempty
    const select = struct.select


    // CREATE
    const saved_query_ref01_ent = client.SavedQuery()
    let saved_query_ref01_data = setup.data.new.saved_query['saved_query_ref01']
    saved_query_ref01_data['account_id'] = setup.idmap['account01']

    saved_query_ref01_data = (await saved_query_ref01_ent.create(saved_query_ref01_data)).data()
    assert(null != saved_query_ref01_data.id)


    // LIST
    const saved_query_ref01_match: any = {}
    saved_query_ref01_match['account_id'] = setup.idmap['account01']

    const saved_query_ref01_list = (await saved_query_ref01_ent.list(saved_query_ref01_match)).map((e: any) => e.data())

    assert(!isempty(select(saved_query_ref01_list, { id: saved_query_ref01_data.id })))


    // UPDATE
    const saved_query_ref01_data_up0: any = {}
    saved_query_ref01_data_up0.id = saved_query_ref01_data.id
    saved_query_ref01_data_up0 ['account_id'] = setup.idmap['account_id']

    const saved_query_ref01_markdef_up0 = { name: 'description', value: 'Mark01-saved_query_ref01_' + setup.now }
    ;(saved_query_ref01_data_up0 as any)[saved_query_ref01_markdef_up0.name] = saved_query_ref01_markdef_up0.value

    const saved_query_ref01_resdata_up0 = (await saved_query_ref01_ent.update(saved_query_ref01_data_up0)).data()
    assert(saved_query_ref01_resdata_up0.id === saved_query_ref01_data_up0.id)

    assert((saved_query_ref01_resdata_up0 as any)[saved_query_ref01_markdef_up0.name] === saved_query_ref01_markdef_up0.value)


    // LOAD
    const saved_query_ref01_match_dt0: any = {}
    saved_query_ref01_match_dt0.id = saved_query_ref01_data.id
    const saved_query_ref01_data_dt0 = (await saved_query_ref01_ent.load(saved_query_ref01_match_dt0)).data()
    assert(saved_query_ref01_data_dt0.id === saved_query_ref01_data.id)


    // REMOVE
    const saved_query_ref01_match_rm0: any = { id: saved_query_ref01_data.id }
    await saved_query_ref01_ent.remove(saved_query_ref01_match_rm0)
  

    // LIST
    const saved_query_ref01_match_rt0: any = {}
    saved_query_ref01_match_rt0['account_id'] = setup.idmap['account01']

    const saved_query_ref01_list_rt0 = (await saved_query_ref01_ent.list(saved_query_ref01_match_rt0)).map((e: any) => e.data())

    assert(isempty(select(saved_query_ref01_list_rt0, { id: saved_query_ref01_data.id })))


  })
})



function basicSetup(extra?: any) {
  // TODO: fix test def options
  const options: any = {} // null

  // TODO: needs test utility to resolve path
  const entityDataFile =
    Path.resolve(__dirname, 
      '../../../../.sdk/test/entity/saved_query/SavedQueryTestData.json')

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
    ['saved_query01','saved_query02','saved_query03','account01','account02','account03'],
    {
      '`$PACK`': ['', {
        '`$KEY`': '`$COPY`',
        '`$VAL`': ['`$FORMAT`', 'upper', '`$COPY`']
      }]
    })

  const env = envOverride({
    'CLOUDFLARE_WORKERS_TEST_SAVED_QUERY_ENTID': idmap,
    'CLOUDFLARE_WORKERS_TEST_LIVE': 'FALSE',
    'CLOUDFLARE_WORKERS_TEST_EXPLAIN': 'FALSE',
    'CLOUDFLARE_WORKERS_APIKEY': '',
  })

  idmap = env['CLOUDFLARE_WORKERS_TEST_SAVED_QUERY_ENTID']

  const live = 'TRUE' === env.CLOUDFLARE_WORKERS_TEST_LIVE

  const transport = createLiveTransport()
  if (live) {
    const rawIds = process.env['CLOUDFLARE_WORKERS_TEST_SAVED_QUERY_ENTID']
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
  
