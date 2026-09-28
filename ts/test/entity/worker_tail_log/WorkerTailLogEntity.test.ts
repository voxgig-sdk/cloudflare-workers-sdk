

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


describe('WorkerTailLogEntity', async () => {

  // Per-test live pacing. Delay is read from sdk-test-control.json's
  // `test.live.delayMs`; only sleeps when CLOUDFLARE_WORKERS_TEST_LIVE=TRUE.
  afterEach(liveDelay('CLOUDFLARE_WORKERS_TEST_LIVE'))

  test('instance', async () => {
    const testsdk = CloudflareWorkersSDK.test()
    const ent = testsdk.WorkerTailLog()
    assert(null != ent)
  })


  test('basic', async (t) => {

    const live = 'TRUE' === process.env.CLOUDFLARE_WORKERS_TEST_LIVE
    for (const op of ['create', 'list']) {
      if (!live && maybeSkipControl(t, 'entityOp', 'worker_tail_log.' + op, live)) return
    }

    
    const setup = basicSetup()
    if (setup.live) {
      return runLiveEntity(setup, {"active":true,"alias":{"field":{}},"fields":{"errors":{"a":true,"h":"Errors","n":"errors","r":true,"t":"`$ARRAY`","key$":"errors","index$":0},"messages":{"a":true,"h":"Messages","n":"messages","r":true,"t":"`$ARRAY`","key$":"messages","index$":1},"result":{"a":true,"h":"Result","n":"result","r":true,"t":"`$OBJECT`","key$":"result","index$":2},"success":{"a":true,"h":"Success","n":"success","r":true,"sh":"Whether the API call was successful.","t":"`$BOOLEAN`","key$":"success","index$":3}},"name":"worker_tail_log","op":{"create":{"input":"data","name":"create","points":[{"a":true,"co":{"id":"POST /accounts/{account_id}/workers/scripts/{script_name}/tails","source":"openapi3","version":2},"g":{"params":[{"a":true,"ex":"023e105f4ecef8ad9ca31a8372d0c353","k":"param","n":"account_id","or":"account_id","r":true,"t":"`$STRING`","index$":0},{"a":true,"ex":"this-is_my_script-01","k":"param","n":"script_name","or":"script_name","r":true,"t":"`$STRING`","index$":1}]},"k":"http","m":"POST","o":"/accounts/{account_id}/workers/scripts/{script_name}/tails","q":{"exist":["account_id","script_name"]},"r":{},"s":[{"lit":"accounts"},{"var":"account_id"},{"lit":"workers"},{"lit":"scripts"},{"var":"script_name"},{"lit":"tails"}],"t":{"req":"`reqdata`","res":"`body`"},"index$":0}],"key$":"create"},"list":{"input":"data","name":"list","points":[{"a":true,"co":{"id":"GET /accounts/{account_id}/workers/scripts/{script_name}/tails","source":"openapi3","version":2},"g":{"params":[{"a":true,"ex":"023e105f4ecef8ad9ca31a8372d0c353","k":"param","n":"account_id","or":"account_id","r":true,"t":"`$STRING`","index$":0},{"a":true,"ex":"this-is_my_script-01","k":"param","n":"script_name","or":"script_name","r":true,"t":"`$STRING`","index$":1}]},"k":"http","m":"GET","o":"/accounts/{account_id}/workers/scripts/{script_name}/tails","q":{"exist":["account_id","script_name"]},"r":{},"s":[{"lit":"accounts"},{"var":"account_id"},{"lit":"workers"},{"lit":"scripts"},{"var":"script_name"},{"lit":"tails"}],"t":{"req":"`reqdata`","res":"`body`"},"index$":0}],"key$":"list"}},"relations":{"ancestors":[["$.main.kit.entity.account","$.main.kit.entity.script"]]},"key$":"worker_tail_log","name__orig":"worker_tail_log","Name":"WorkerTailLog","name_":"worker_tail_log","name-":"worker-tail-log","NAME":"WORKER_TAIL_LOG","index$":52}, {"active":true,"entity":"worker_tail_log","key$":"BasicWorkerTailLogFlow","kind":"basic","name":"BasicWorkerTailLogFlow","param":{},"step":[{"a":true,"d":{},"i":{"ref":"worker_tail_log_ref01"},"m":{"account_id":"account01","script_name":"script_name01"},"o":"create","s":[],"v":[],"index$":0},{"a":true,"d":{},"i":{},"m":{"account_id":"account01","script_name":"script_name01"},"o":"list","s":[],"v":[{"apply":"ItemExists","def":{"ref":"worker_tail_log_ref01"}}],"index$":1}]}, 'WorkerTailLog', {"POST /accounts/{account_id}/workers/scripts/{script_name}/tails":{"protocol":"http","parameters":[{"name":"account_id","in":"path","required":true,"schema":{"description":"Identifier.","type":"string","example":"023e105f4ecef8ad9ca31a8372d0c353","maxLength":32,"x-auditable":true,"x-ref":"#/components/schemas/workers_identifier"},"index$":0},{"name":"script_name","in":"path","required":true,"schema":{"description":"Name of the script.","type":"string","example":"this-is_my_script-01","pattern":"^[a-z0-9_][a-z0-9-_]*$","x-auditable":true,"x-ref":"#/components/schemas/workers_script_name"},"index$":1}]},"GET /accounts/{account_id}/workers/scripts/{script_name}/tails":{"protocol":"http","parameters":[{"name":"account_id","in":"path","required":true,"schema":{"description":"Identifier.","type":"string","example":"023e105f4ecef8ad9ca31a8372d0c353","maxLength":32,"x-auditable":true,"x-ref":"#/components/schemas/workers_identifier"},"index$":0},{"name":"script_name","in":"path","required":true,"schema":{"description":"Name of the script.","type":"string","example":"this-is_my_script-01","pattern":"^[a-z0-9_][a-z0-9-_]*$","x-auditable":true,"x-ref":"#/components/schemas/workers_script_name"},"index$":1}]}})
    }
    const client = setup.client
    const struct = setup.struct

    const isempty = struct.isempty
    const select = struct.select


    // CREATE
    const worker_tail_log_ref01_ent = client.WorkerTailLog()
    let worker_tail_log_ref01_data = setup.data.new.worker_tail_log['worker_tail_log_ref01']
    worker_tail_log_ref01_data['account_id'] = setup.idmap['account01']
    worker_tail_log_ref01_data['script_name'] = setup.idmap['script_name01']

    worker_tail_log_ref01_data = (await worker_tail_log_ref01_ent.create(worker_tail_log_ref01_data)).data()
    assert(null != worker_tail_log_ref01_data)


    // LIST
    const worker_tail_log_ref01_match: any = {}
    worker_tail_log_ref01_match['account_id'] = setup.idmap['account01']
    worker_tail_log_ref01_match['script_name'] = setup.idmap['script_name01']

    const worker_tail_log_ref01_list = (await worker_tail_log_ref01_ent.list(worker_tail_log_ref01_match)).map((e: any) => e.data())


  })
})



function basicSetup(extra?: any) {
  // TODO: fix test def options
  const options: any = {} // null

  // TODO: needs test utility to resolve path
  const entityDataFile =
    Path.resolve(__dirname, 
      '../../../../.sdk/test/entity/worker_tail_log/WorkerTailLogTestData.json')

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
    ['worker_tail_log01','worker_tail_log02','worker_tail_log03','account01','account02','account03','script01','script02','script03','script_name01'],
    {
      '`$PACK`': ['', {
        '`$KEY`': '`$COPY`',
        '`$VAL`': ['`$FORMAT`', 'upper', '`$COPY`']
      }]
    })

  const env = envOverride({
    'CLOUDFLARE_WORKERS_TEST_WORKER_TAIL_LOG_ENTID': idmap,
    'CLOUDFLARE_WORKERS_TEST_LIVE': 'FALSE',
    'CLOUDFLARE_WORKERS_TEST_EXPLAIN': 'FALSE',
    'CLOUDFLARE_WORKERS_APIKEY': '',
  })

  idmap = env['CLOUDFLARE_WORKERS_TEST_WORKER_TAIL_LOG_ENTID']

  const live = 'TRUE' === env.CLOUDFLARE_WORKERS_TEST_LIVE

  const transport = createLiveTransport()
  if (live) {
    const rawIds = process.env['CLOUDFLARE_WORKERS_TEST_WORKER_TAIL_LOG_ENTID']
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
  
