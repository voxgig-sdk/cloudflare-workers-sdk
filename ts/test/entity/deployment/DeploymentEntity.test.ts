

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


describe('DeploymentEntity', async () => {

  // Per-test live pacing. Delay is read from sdk-test-control.json's
  // `test.live.delayMs`; only sleeps when CLOUDFLARE_WORKERS_TEST_LIVE=TRUE.
  afterEach(liveDelay('CLOUDFLARE_WORKERS_TEST_LIVE'))

  test('instance', async () => {
    const testsdk = CloudflareWorkersSDK.test()
    const ent = testsdk.Deployment()
    assert(null != ent)
  })


  test('basic', async (t) => {

    const live = 'TRUE' === process.env.CLOUDFLARE_WORKERS_TEST_LIVE
    for (const op of []) {
      if (!live && maybeSkipControl(t, 'entityOp', 'deployment.' + op, live)) return
    }

    
    const setup = basicSetup()
    if (setup.live) {
      return runLiveEntity(setup, {"active":true,"alias":{"field":{}},"fields":{"id":{"a":true,"h":"Id","n":"id","r":false,"t":"`$STRING`","key$":"id","index$":0}},"id":{"field":"id","name":"id"},"name":"deployment","op":{"remove":{"input":"data","name":"remove","points":[{"a":true,"co":{"id":"DELETE /accounts/{account_id}/workers/workers/{worker_id}/previews/{preview_id}/deployments/{deployment_id}","source":"openapi3","version":2},"g":{"params":[{"a":true,"ex":"023e105f4ecef8ad9ca31a8372d0c353","k":"param","n":"account_id","or":"account_id","r":true,"t":"`$STRING`","index$":0},{"a":true,"k":"param","n":"id","or":"deployment_id","r":true,"t":"`$STRING`","index$":1},{"a":true,"k":"param","n":"preview_id","or":"preview_id","r":true,"t":"`$STRING`","index$":2},{"a":true,"k":"param","n":"worker_id","or":"worker_id","r":true,"t":"`$STRING`","index$":3}]},"k":"http","m":"DELETE","o":"/accounts/{account_id}/workers/workers/{worker_id}/previews/{preview_id}/deployments/{deployment_id}","q":{"exist":["account_id","id","preview_id","worker_id"]},"r":{"param":{"deployment_id":"id"}},"s":[{"lit":"accounts"},{"var":"account_id"},{"lit":"workers"},{"lit":"workers"},{"var":"worker_id"},{"lit":"previews"},{"var":"preview_id"},{"lit":"deployments"},{"var":"id"}],"t":{"req":"`reqdata`","res":"`body`"},"index$":0},{"a":true,"co":{"id":"DELETE /accounts/{account_id}/workers/scripts/{script_name}/deployments/{deployment_id}","source":"openapi3","version":2},"g":{"params":[{"a":true,"ex":"023e105f4ecef8ad9ca31a8372d0c353","k":"param","n":"account_id","or":"account_id","r":true,"t":"`$STRING`","index$":0},{"a":true,"k":"param","n":"id","or":"deployment_id","r":true,"t":"`$STRING`","index$":1},{"a":true,"ex":"this-is_my_script-01","k":"param","n":"script_id","or":"script_name","r":true,"t":"`$STRING`","index$":2}]},"k":"http","m":"DELETE","o":"/accounts/{account_id}/workers/scripts/{script_name}/deployments/{deployment_id}","q":{"exist":["account_id","id","script_id"]},"r":{"param":{"deployment_id":"id","script_name":"script_id"}},"s":[{"lit":"accounts"},{"var":"account_id"},{"lit":"workers"},{"lit":"scripts"},{"var":"script_id"},{"lit":"deployments"},{"var":"id"}],"t":{"req":"`reqdata`","res":"`body`"},"index$":1}],"key$":"remove"}},"relations":{"ancestors":[["$.main.kit.entity.account","$.main.kit.entity.script"],["$.main.kit.entity.account","$.main.kit.entity.worker","$.main.kit.entity.preview"]]},"key$":"deployment","name__orig":"deployment","Name":"Deployment","name_":"deployment","name-":"deployment","NAME":"DEPLOYMENT","index$":10}, {"active":true,"entity":"deployment","key$":"BasicDeploymentFlow","kind":"basic","name":"BasicDeploymentFlow","param":{},"step":[]}, 'Deployment', {"DELETE /accounts/{account_id}/workers/workers/{worker_id}/previews/{preview_id}/deployments/{deployment_id}":{"protocol":"http","parameters":[{"name":"account_id","in":"path","required":true,"schema":{"description":"Identifier.","type":"string","example":"023e105f4ecef8ad9ca31a8372d0c353","maxLength":32,"x-auditable":true,"x-ref":"#/components/schemas/workers_identifier"},"index$":0},{"name":"worker_id","in":"path","required":true,"schema":{"description":"Identifier for the Worker, which can be ID or name.","type":"string"},"index$":1},{"name":"preview_id","in":"path","required":true,"schema":{"description":"Identifier for the Preview, which can be ID, slug, or URL-encoded name.","type":"string"},"index$":2},{"name":"deployment_id","in":"path","required":true,"schema":{"description":"Identifier for the deployment, which can be a UUID, a UUID prefix (minimum length 8), or the literal \"latest\" to operate on the most recently created deployment.","type":"string"},"index$":3}]},"DELETE /accounts/{account_id}/workers/scripts/{script_name}/deployments/{deployment_id}":{"protocol":"http","parameters":[{"name":"account_id","in":"path","required":true,"schema":{"description":"Identifier.","type":"string","example":"023e105f4ecef8ad9ca31a8372d0c353","maxLength":32,"x-auditable":true,"x-ref":"#/components/schemas/workers_identifier"},"index$":0},{"name":"script_name","in":"path","required":true,"schema":{"description":"Name of the script.","type":"string","example":"this-is_my_script-01","pattern":"^[a-z0-9_][a-z0-9-_]*$","x-auditable":true,"x-ref":"#/components/schemas/workers_script_name"},"index$":1},{"name":"deployment_id","in":"path","required":true,"schema":{"type":"string","format":"uuid"},"index$":2}]}})
    }
    const client = setup.client
    const struct = setup.struct

    const isempty = struct.isempty
    const select = struct.select

    let deployment_ref01_data = Object.values(setup.data.existing.deployment)[0] as any

  })
})



function basicSetup(extra?: any) {
  // TODO: fix test def options
  const options: any = {} // null

  // TODO: needs test utility to resolve path
  const entityDataFile =
    Path.resolve(__dirname, 
      '../../../../.sdk/test/entity/deployment/DeploymentTestData.json')

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
    ['deployment01','deployment02','deployment03','account01','account02','account03','script01','script02','script03','worker01','worker02','worker03','preview01','preview02','preview03'],
    {
      '`$PACK`': ['', {
        '`$KEY`': '`$COPY`',
        '`$VAL`': ['`$FORMAT`', 'upper', '`$COPY`']
      }]
    })

  const env = envOverride({
    'CLOUDFLARE_WORKERS_TEST_DEPLOYMENT_ENTID': idmap,
    'CLOUDFLARE_WORKERS_TEST_LIVE': 'FALSE',
    'CLOUDFLARE_WORKERS_TEST_EXPLAIN': 'FALSE',
    'CLOUDFLARE_WORKERS_APIKEY': '',
  })

  idmap = env['CLOUDFLARE_WORKERS_TEST_DEPLOYMENT_ENTID']

  const live = 'TRUE' === env.CLOUDFLARE_WORKERS_TEST_LIVE

  const transport = createLiveTransport()
  if (live) {
    const rawIds = process.env['CLOUDFLARE_WORKERS_TEST_DEPLOYMENT_ENTID']
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
  
