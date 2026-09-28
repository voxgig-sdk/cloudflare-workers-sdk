

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


describe('SharedEntity', async () => {

  // Per-test live pacing. Delay is read from sdk-test-control.json's
  // `test.live.delayMs`; only sleeps when CLOUDFLARE_WORKERS_TEST_LIVE=TRUE.
  afterEach(liveDelay('CLOUDFLARE_WORKERS_TEST_LIVE'))

  test('instance', async () => {
    const testsdk = CloudflareWorkersSDK.test()
    const ent = testsdk.Shared()
    assert(null != ent)
  })


  test('basic', async (t) => {

    const live = 'TRUE' === process.env.CLOUDFLARE_WORKERS_TEST_LIVE
    for (const op of ['create', 'load']) {
      if (!live && maybeSkipControl(t, 'entityOp', 'shared.' + op, live)) return
    }

    
    const setup = basicSetup()
    if (setup.live) {
      return runLiveEntity(setup, {"active":true,"alias":{"field":{}},"fields":{"errors":{"a":true,"h":"Errors","n":"errors","r":true,"t":"`$ARRAY`","key$":"errors","index$":0},"id":{"a":true,"h":"Id","n":"id","r":false,"t":"`$STRING`","key$":"id","index$":1},"messages":{"a":true,"h":"Messages","n":"messages","r":true,"t":"`$ARRAY`","key$":"messages","index$":2},"result":{"a":true,"h":"Result","n":"result","r":true,"sh":"Complete results of a query run.","t":"`$OBJECT`","union":{"branches":3,"count":12,"depth":15},"key$":"result","index$":3},"success":{"a":true,"h":"Success","n":"success","r":true,"t":"`$BOOLEAN`","key$":"success","index$":4}},"id":{"field":"id","name":"id"},"name":"shared","op":{"create":{"input":"data","name":"create","points":[{"a":true,"co":{"id":"POST /accounts/{account_id}/workers/observability/shared/query","source":"openapi3","version":2},"g":{"params":[{"a":true,"k":"param","n":"account_id","or":"account_id","r":true,"t":"`$STRING`","index$":0}]},"k":"http","m":"POST","o":"/accounts/{account_id}/workers/observability/shared/query","q":{"$action":"query","exist":["account_id"]},"r":{},"s":[{"lit":"accounts"},{"var":"account_id"},{"lit":"workers"},{"lit":"observability"},{"lit":"shared"},{"lit":"query"}],"t":{"req":"`reqdata`","res":"`body`"},"index$":0}],"key$":"create"},"load":{"input":"data","name":"load","points":[{"a":true,"co":{"id":"GET /accounts/{account_id}/workers/observability/shared/query/{id}","source":"openapi3","version":2},"g":{"params":[{"a":true,"k":"param","n":"account_id","or":"account_id","r":true,"t":"`$STRING`","index$":0},{"a":true,"k":"param","n":"id","or":"id","r":true,"t":"`$STRING`","index$":1}],"query":[{"a":true,"k":"query","n":"view","or":"view","r":false,"t":"`$STRING`","index$":0}]},"k":"http","m":"GET","o":"/accounts/{account_id}/workers/observability/shared/query/{id}","q":{"exist":["account_id","id","view"]},"r":{},"s":[{"lit":"accounts"},{"var":"account_id"},{"lit":"workers"},{"lit":"observability"},{"lit":"shared"},{"lit":"query"},{"var":"id"}],"t":{"req":"`reqdata`","res":"`body`"},"index$":0}],"key$":"load"}},"relations":{"ancestors":[["$.main.kit.entity.account"]]},"key$":"shared","name__orig":"shared","Name":"Shared","name_":"shared","name-":"shared","NAME":"SHARED","index$":38}, {"active":true,"entity":"shared","key$":"BasicSharedFlow","kind":"basic","name":"BasicSharedFlow","param":{},"step":[{"a":true,"d":{},"i":{"ref":"shared_ref01"},"m":{"account_id":"account01"},"o":"create","s":[],"v":[],"index$":0},{"a":true,"d":{},"i":{"ref":"shared_ref01","srcdatavar":"shared_ref01_data","suffix":"_dt0"},"m":{"account_id":"account01","id":"shared01"},"o":"load","s":[],"v":[{"apply":"TextFieldMark","def":{"mark":"Mark01-shared_ref01"}}],"index$":1}]}, 'Shared', {"POST /accounts/{account_id}/workers/observability/shared/query":{"protocol":"http","requestBody":{"description":"Create a sharable link to a query result.","required":true,"content":{"application/json":{"schema":{"type":"object","properties":{"chart":{"description":"When true, includes time-series data in the response.","type":"boolean"},"chartType":{"description":"Controls the SQL shape and response payload for the 'calculations' view. Omitted or 'timeseries_and_aggregate': current behaviour — both the time-series and aggregate queries. 'timeseries': time-series only. 'aggregate': aggregate only. 'distribution': a bucketed 2D histogram (time × value buckets) returned in 'distribution' instead of 'calculations'. 'distribution' is not compatible with 'compare' — combining them returns a 400.","type":"string","enum":["timeseries_and_aggregate","timeseries","aggregate","distribution"]},"compare":{"description":"When true, includes a comparison dataset from the previous time period of equal length.","type":"boolean"},"distributionScale":{"description":"Value-axis bucketing for chartType 'distribution'. Omitted or 'log': geometric buckets, best for heavy-tailed latency. 'linear': fixed-width buckets, clearer for narrow or additive ranges. Ignored for other chartTypes. The response echoes the scheme used in distribution.bucketMode.","type":"string","enum":["log","linear"]},"dry":{"description":"When true, executes the query without persisting the results. Useful for validation or previewing.","type":"boolean","default":false},"granularity":{"description":"Number of time-series buckets. Only used when view is 'calculations'. Omit to let the system auto-detect an appropriate granularity.","type":"number"},"ignoreSeries":{"description":"When true, omits time-series data from the response and returns only aggregated values. Reduces response size when series are not needed.","type":"boolean","default":false},"limit":{"description":"Maximum number of events to return when view is 'events'. Also controls the number of group-by rows when view is 'calculations'.","type":"number","default":50,"maximum":2000},"offset":{"description":"Cursor for pagination in event, trace, invocation, and agent views. Pass the $metadata.id of the last event, the trace cursor, or AgentRun.id to fetch the next page.","type":"string"},"offsetBy":{"description":"Numeric offset for paginating grouped/pattern results (top-N lists). Use together with limit. Not used by cursor-based pagination.","type":"number"},"offsetDirection":{"description":"Pagination direction: 'next' for forward, 'prev' for backward.","type":"string"},"parameters":{"description":"Query parameters defining what data to retrieve — filters, calculations, group-bys, and ordering. In practice this should always be provided for ad-hoc queries. Only omit when executing a previously saved query by queryId. Use the keys and values endpoints to discover available fields before building filters.","properties":{"calculations":{"description":"Aggregation calculations to compute (e.g. count, avg, p99). Each calculation produces aggregate values and optional time-series data.","type":"array","items":{"discriminator":{},"oneOf":[]}},"datasets":{"description":"Datasets to query. Leave empty to query all available datasets.","type":"array","items":{"type":"string"},"example":[]},"filterCombination":{"description":"Logical operator for combining top-level filters: 'and' (all must match) or 'or' (any must match). Defaults to 'and'.","type":"string","enum":["and","or","AND","OR"]},"filters":{"description":"Filters to narrow query results. Use the keys and values endpoints to discover available fields before building filters. Supports nested groups via kind: 'group'. Maximum nesting depth is 4.","type":"array","items":{"allOf":[]}},"groupBys":{"description":"Fields to group calculation results by. Only applicable when the query view is 'calculations'. Produces per-group aggregate values.","type":"array","items":{"properties":{},"required":[],"type":"object"}},"havings":{"description":"Post-aggregation filters applied to calculation results. Use to filter groups after aggregation (e.g. only groups where count > 100).","type":"array","items":{"properties":{},"required":[],"type":"object"}},"limit":{"description":"Maximum number of group-by rows to return in calculation results. A value of 10 is a sensible default for most use cases.","type":"integer","maximum":2000,"minimum":0},"needle":{"description":"Full-text search expression applied across all event fields. Matches events containing the specified text.","type":"object","properties":{"isRegex":{},"matchCase":{},"value":{}},"required":["value"]},"orderBy":{"description":"Ordering for grouped calculation results. Only effective when a group-by is present.","type":"object","properties":{"order":{},"value":{}},"required":["value"]}},"type":"object"},"queryId":{"description":"Identifier for the query. When parameters are omitted, this ID is used to load a previously saved query's parameters. When providing parameters inline, pass any identifier (e.g. an ad-hoc ID).","type":"string"},"timeframe":{"description":"Timeframe for the query using Unix timestamps in milliseconds. 'from' must be earlier than 'to'. Narrower timeframes produce faster responses and more specific results.","type":"object","properties":{"from":{"description":"Start timestamp for the query timeframe. Unix timestamp in milliseconds","type":"integer","maximum":253402300799999,"minimum":0},"to":{"description":"End timestamp for the query timeframe. Unix timestamp in milliseconds","type":"integer","maximum":253402300799999,"minimum":0}},"required":["to","from"]},"view":{"description":"Controls the shape of the response. 'events': individual log lines matching the query. 'calculations': aggregated metrics (count, avg, p99, etc.) with optional group-by breakdowns and time-series. 'invocations': events grouped by request ID. 'traces': distributed trace summaries. 'agents': agent-specific trace summaries.","type":"string","default":"calculations","enum":["traces","events","calculations","invocations","requests","agents"]}},"required":["queryId","timeframe"]}}}},"parameters":[{"name":"account_id","in":"path","description":"Your Cloudflare account ID.","required":true,"schema":{"type":"string"},"index$":0}]},"GET /accounts/{account_id}/workers/observability/shared/query/{id}":{"protocol":"http","parameters":[{"name":"account_id","in":"path","description":"Your Cloudflare account ID.","required":true,"schema":{"type":"string"},"index$":0},{"name":"id","in":"path","description":"Specify the ID of the shared query.","required":true,"schema":{"description":"Specify the ID of the shared query.","type":"string"},"index$":1},{"name":"view","in":"query","description":"Select the view of the query result to return, defaults to events.","schema":{"description":"Select the view of the query result to return, defaults to events.","type":"string","enum":["events","invocations","calculations"]},"index$":2}]}})
    }
    const client = setup.client
    const struct = setup.struct

    const isempty = struct.isempty
    const select = struct.select


    // CREATE
    const shared_ref01_ent = client.Shared()
    let shared_ref01_data = setup.data.new.shared['shared_ref01']
    shared_ref01_data['account_id'] = setup.idmap['account01']

    shared_ref01_data = (await shared_ref01_ent.create(shared_ref01_data)).data()
    assert(null != shared_ref01_data.id)


    // LOAD
    const shared_ref01_match_dt0: any = {}
    shared_ref01_match_dt0.id = shared_ref01_data.id
    const shared_ref01_data_dt0 = (await shared_ref01_ent.load(shared_ref01_match_dt0)).data()
    assert(shared_ref01_data_dt0.id === shared_ref01_data.id)


  })
})



function basicSetup(extra?: any) {
  // TODO: fix test def options
  const options: any = {} // null

  // TODO: needs test utility to resolve path
  const entityDataFile =
    Path.resolve(__dirname, 
      '../../../../.sdk/test/entity/shared/SharedTestData.json')

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
    ['shared01','shared02','shared03','account01','account02','account03'],
    {
      '`$PACK`': ['', {
        '`$KEY`': '`$COPY`',
        '`$VAL`': ['`$FORMAT`', 'upper', '`$COPY`']
      }]
    })

  const env = envOverride({
    'CLOUDFLARE_WORKERS_TEST_SHARED_ENTID': idmap,
    'CLOUDFLARE_WORKERS_TEST_LIVE': 'FALSE',
    'CLOUDFLARE_WORKERS_TEST_EXPLAIN': 'FALSE',
    'CLOUDFLARE_WORKERS_APIKEY': '',
  })

  idmap = env['CLOUDFLARE_WORKERS_TEST_SHARED_ENTID']

  const live = 'TRUE' === env.CLOUDFLARE_WORKERS_TEST_LIVE

  const transport = createLiveTransport()
  if (live) {
    const rawIds = process.env['CLOUDFLARE_WORKERS_TEST_SHARED_ENTID']
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
  
