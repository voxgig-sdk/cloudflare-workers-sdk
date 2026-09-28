

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


describe('WorkersScriptAndVersionSettingEntity', async () => {

  // Per-test live pacing. Delay is read from sdk-test-control.json's
  // `test.live.delayMs`; only sleeps when CLOUDFLARE_WORKERS_TEST_LIVE=TRUE.
  afterEach(liveDelay('CLOUDFLARE_WORKERS_TEST_LIVE'))

  test('instance', async () => {
    const testsdk = CloudflareWorkersSDK.test()
    const ent = testsdk.WorkersScriptAndVersionSetting()
    assert(null != ent)
  })


  test('basic', async (t) => {

    const live = 'TRUE' === process.env.CLOUDFLARE_WORKERS_TEST_LIVE
    for (const op of ['list', 'update']) {
      if (!live && maybeSkipControl(t, 'entityOp', 'workers_script_and_version_setting.' + op, live)) return
    }

    
    const setup = basicSetup()
    if (setup.live) {
      return runLiveEntity(setup, {"active":true,"alias":{"field":{}},"fields":{"errors":{"a":true,"h":"Errors","n":"errors","r":true,"t":"`$ARRAY`","key$":"errors","index$":0},"messages":{"a":true,"h":"Messages","n":"messages","r":true,"t":"`$ARRAY`","key$":"messages","index$":1},"result":{"a":true,"h":"Result","n":"result","r":true,"t":"`$OBJECT`","union":{"branches":8,"count":4,"depth":9},"key$":"result","index$":2},"success":{"a":true,"h":"Success","n":"success","r":true,"sh":"Whether the API call was successful.","t":"`$BOOLEAN`","key$":"success","index$":3}},"name":"workers_script_and_version_setting","op":{"list":{"input":"data","name":"list","points":[{"a":true,"co":{"id":"GET /accounts/{account_id}/workers/scripts/{script_name}/settings","source":"openapi3","version":2},"g":{"params":[{"a":true,"ex":"023e105f4ecef8ad9ca31a8372d0c353","k":"param","n":"account_id","or":"account_id","r":true,"t":"`$STRING`","index$":0},{"a":true,"ex":"this-is_my_script-01","k":"param","n":"script_name","or":"script_name","r":true,"t":"`$STRING`","index$":1}]},"k":"http","m":"GET","o":"/accounts/{account_id}/workers/scripts/{script_name}/settings","q":{"exist":["account_id","script_name"]},"r":{},"s":[{"lit":"accounts"},{"var":"account_id"},{"lit":"workers"},{"lit":"scripts"},{"var":"script_name"},{"lit":"settings"}],"t":{"req":"`reqdata`","res":"`body`"},"index$":0}],"key$":"list"},"update":{"input":"data","name":"update","points":[{"a":true,"co":{"id":"PATCH /accounts/{account_id}/workers/scripts/{script_name}/settings","source":"openapi3","version":2},"g":{"params":[{"a":true,"ex":"023e105f4ecef8ad9ca31a8372d0c353","k":"param","n":"account_id","or":"account_id","r":true,"t":"`$STRING`","index$":0},{"a":true,"ex":"this-is_my_script-01","k":"param","n":"script_name","or":"script_name","r":true,"t":"`$STRING`","index$":1}]},"k":"http","m":"PATCH","o":"/accounts/{account_id}/workers/scripts/{script_name}/settings","q":{"exist":["account_id","script_name"]},"r":{},"s":[{"lit":"accounts"},{"var":"account_id"},{"lit":"workers"},{"lit":"scripts"},{"var":"script_name"},{"lit":"settings"}],"t":{"req":"`reqdata`","res":"`body`"},"index$":0}],"key$":"update"}},"relations":{"ancestors":[["$.main.kit.entity.account","$.main.kit.entity.script"]]},"key$":"workers_script_and_version_setting","name__orig":"workers_script_and_version_setting","Name":"WorkersScriptAndVersionSetting","name_":"workers_script_and_version_setting","name-":"workers-script-and-version-setting","NAME":"WORKERS_SCRIPT_AND_VERSION_SETTING","index$":65}, {"active":true,"entity":"workers_script_and_version_setting","key$":"BasicWorkersScriptAndVersionSettingFlow","kind":"basic","name":"BasicWorkersScriptAndVersionSettingFlow","param":{},"step":[{"a":true,"d":{},"i":{},"m":{"account_id":"account01","script_name":"script_name01"},"o":"list","s":[],"v":[{"apply":"ItemExists","def":{"ref":"workers_script_and_version_setting_ref01"}}],"index$":0},{"a":true,"d":{"account_id":"account01"},"i":{"ref":"workers_script_and_version_setting_ref01","srcdatavar":"workers_script_and_version_setting_ref01_data","suffix":"_up0"},"m":{},"o":"update","s":[{"apply":"TextFieldMark","def":{"mark":"Mark01-workers_script_and_version_setting_ref01"}}],"v":[],"index$":1}]}, 'WorkersScriptAndVersionSetting', {"GET /accounts/{account_id}/workers/scripts/{script_name}/settings":{"protocol":"http","parameters":[{"name":"account_id","in":"path","required":true,"schema":{"description":"Identifier.","type":"string","example":"023e105f4ecef8ad9ca31a8372d0c353","maxLength":32,"x-auditable":true,"x-ref":"#/components/schemas/workers_identifier"},"index$":0},{"name":"script_name","in":"path","required":true,"schema":{"description":"Name of the script.","type":"string","example":"this-is_my_script-01","pattern":"^[a-z0-9_][a-z0-9-_]*$","x-auditable":true,"x-ref":"#/components/schemas/workers_script_name"},"index$":1}]},"PATCH /accounts/{account_id}/workers/scripts/{script_name}/settings":{"protocol":"http","requestBody":{"required":true,"content":{"multipart/form-data":{"encoding":{"settings":{"contentType":"application/json"}},"schema":{"type":"object","properties":{"settings":{"type":"object","properties":{"annotations":{"description":"Annotations for the Worker version. Annotations are not inherited across settings updates; omitting this field means the new version will have no annotations.","properties":{"workers/message":{},"workers/tag":{},"workers/triggered_by":{}},"type":"object"},"bindings":{"allOf":[{},{}]},"cache_options":{"additionalProperties":false,"description":"Global CacheW configuration for the Worker. When caching is on,\nthe platform provisions a `cloudflare.app` zone for the Worker.\nA `type: worker` entry in the `exports` map can override this\nvalue for a single entrypoint.\n","properties":{"cross_version_cache":{},"enabled":{}},"required":["enabled"],"type":"object","x-ref":"#/components/schemas/workers_cache_options"},"compatibility_date":{"allOf":[{},{}]},"compatibility_flags":{"allOf":[{},{}]},"exports":{"allOf":[{}],"description":"Declarative exports for the Worker. Worker entrypoint entries\n(`type: worker`) carry cache configuration for that entrypoint.\n","writeOnly":true},"exports_reconciliation":{"allOf":[{}],"description":"Summary of the declarative exports reconciliation that ran on\nthis upload. Populated only when the uploaded metadata included\nan `exports` block. Durable Object entries drive reconciliation;\n`type: worker` entries do not contribute to this summary.\n"},"limits":{"description":"Limits to apply for this Worker.","properties":{"cpu_ms":{},"subrequests":{}},"type":"object","x-ref":"#/components/schemas/workers_limits"},"logpush":{"default":false,"description":"Whether Logpush is turned on for the Worker.","example":false,"type":"boolean","x-auditable":true,"x-ref":"#/components/schemas/workers_logpush"},"migrations":{"description":"Migrations to apply for Durable Objects associated with this Worker.\n","oneOf":[{},{}],"writeOnly":true},"observability":{"description":"Observability settings for the Worker.","properties":{"enabled":{},"head_sampling_rate":{},"issues":{},"logs":{},"redact_query_string":{},"traces":{}},"required":["enabled"],"type":"object","x-ref":"#/components/schemas/workers_observability-2"},"placement":{"allOf":[{},{}]},"tags":{"allOf":[{},{}]},"tail_consumers":{"allOf":[{},{}]},"usage_model":{"default":"standard","description":"Usage model for the Worker invocations.","enum":["standard","bundled","unbound"],"example":"standard","type":"string","x-auditable":true,"x-ref":"#/components/schemas/workers_usage_model"}},"x-ref":"#/components/schemas/workers_script-and-version-settings-item"}}}}}},"parameters":[{"name":"account_id","in":"path","required":true,"schema":{"description":"Identifier.","type":"string","example":"023e105f4ecef8ad9ca31a8372d0c353","maxLength":32,"x-auditable":true,"x-ref":"#/components/schemas/workers_identifier"},"index$":0},{"name":"script_name","in":"path","required":true,"schema":{"description":"Name of the script.","type":"string","example":"this-is_my_script-01","pattern":"^[a-z0-9_][a-z0-9-_]*$","x-auditable":true,"x-ref":"#/components/schemas/workers_script_name"},"index$":1}]}})
    }
    const client = setup.client
    const struct = setup.struct

    const isempty = struct.isempty
    const select = struct.select

    let workers_script_and_version_setting_ref01_data = Object.values(setup.data.existing.workers_script_and_version_setting)[0] as any

    // LIST
    const workers_script_and_version_setting_ref01_ent = client.WorkersScriptAndVersionSetting()
    const workers_script_and_version_setting_ref01_match: any = {}
    workers_script_and_version_setting_ref01_match['account_id'] = setup.idmap['account01']
    workers_script_and_version_setting_ref01_match['script_name'] = setup.idmap['script_name01']

    const workers_script_and_version_setting_ref01_list = (await workers_script_and_version_setting_ref01_ent.list(workers_script_and_version_setting_ref01_match)).map((e: any) => e.data())


    // UPDATE
    const workers_script_and_version_setting_ref01_data_up0: any = {}
    workers_script_and_version_setting_ref01_data_up0 ['account_id'] = setup.idmap['account_id']

    const workers_script_and_version_setting_ref01_resdata_up0 = (await workers_script_and_version_setting_ref01_ent.update(workers_script_and_version_setting_ref01_data_up0)).data()
    assert(null != workers_script_and_version_setting_ref01_resdata_up0)


  })
})



function basicSetup(extra?: any) {
  // TODO: fix test def options
  const options: any = {} // null

  // TODO: needs test utility to resolve path
  const entityDataFile =
    Path.resolve(__dirname, 
      '../../../../.sdk/test/entity/workers_script_and_version_setting/WorkersScriptAndVersionSettingTestData.json')

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
    ['workers_script_and_version_setting01','workers_script_and_version_setting02','workers_script_and_version_setting03','account01','account02','account03','script01','script02','script03','script_name01'],
    {
      '`$PACK`': ['', {
        '`$KEY`': '`$COPY`',
        '`$VAL`': ['`$FORMAT`', 'upper', '`$COPY`']
      }]
    })

  const env = envOverride({
    'CLOUDFLARE_WORKERS_TEST_WORKERS_SCRIPT_AND_VERSION_SETTING_ENTID': idmap,
    'CLOUDFLARE_WORKERS_TEST_LIVE': 'FALSE',
    'CLOUDFLARE_WORKERS_TEST_EXPLAIN': 'FALSE',
    'CLOUDFLARE_WORKERS_APIKEY': '',
  })

  idmap = env['CLOUDFLARE_WORKERS_TEST_WORKERS_SCRIPT_AND_VERSION_SETTING_ENTID']

  const live = 'TRUE' === env.CLOUDFLARE_WORKERS_TEST_LIVE

  const transport = createLiveTransport()
  if (live) {
    const rawIds = process.env['CLOUDFLARE_WORKERS_TEST_WORKERS_SCRIPT_AND_VERSION_SETTING_ENTID']
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
  
