

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


describe('WorkersKvApiResponseCommonNoResultEntity', async () => {

  // Per-test live pacing. Delay is read from sdk-test-control.json's
  // `test.live.delayMs`; only sleeps when CLOUDFLARE_WORKERS_TEST_LIVE=TRUE.
  afterEach(liveDelay('CLOUDFLARE_WORKERS_TEST_LIVE'))

  test('instance', async () => {
    const testsdk = CloudflareWorkersSDK.test()
    const ent = testsdk.WorkersKvApiResponseCommonNoResult()
    assert(null != ent)
  })


  test('basic', async (t) => {

    const live = 'TRUE' === process.env.CLOUDFLARE_WORKERS_TEST_LIVE
    for (const op of ['update']) {
      if (!live && maybeSkipControl(t, 'entityOp', 'workers_kv_api_response_common_no_result.' + op, live)) return
    }

    
    const setup = basicSetup()
    if (setup.live) {
      return runLiveEntity(setup, {"active":true,"alias":{"field":{}},"fields":{},"name":"workers_kv_api_response_common_no_result","op":{"remove":{"input":"data","name":"remove","points":[{"a":true,"co":{"id":"DELETE /accounts/{account_id}/storage/kv/namespaces/{namespace_id}/values/{key_name}","source":"openapi3","version":2},"g":{"params":[{"a":true,"ex":"023e105f4ecef8ad9ca31a8372d0c353","k":"param","n":"account_id","or":"account_id","r":true,"t":"`$STRING`","index$":0},{"a":true,"ex":"My-Key","k":"param","n":"key_name","or":"key_name","r":true,"t":"`$STRING`","index$":1},{"a":true,"ex":"0f2ac74b498b48028cb68387c421e279","k":"param","n":"namespace_id","or":"namespace_id","r":true,"t":"`$STRING`","index$":2}]},"k":"http","m":"DELETE","o":"/accounts/{account_id}/storage/kv/namespaces/{namespace_id}/values/{key_name}","q":{"exist":["account_id","key_name","namespace_id"]},"r":{},"s":[{"lit":"accounts"},{"var":"account_id"},{"lit":"storage"},{"lit":"kv"},{"lit":"namespaces"},{"var":"namespace_id"},{"lit":"values"},{"var":"key_name"}],"t":{"req":"`reqdata`","res":"`body`"},"index$":0},{"a":true,"co":{"id":"DELETE /accounts/{account_id}/storage/kv/namespaces/{namespace_id}","source":"openapi3","version":2},"g":{"params":[{"a":true,"ex":"023e105f4ecef8ad9ca31a8372d0c353","k":"param","n":"account_id","or":"account_id","r":true,"t":"`$STRING`","index$":0},{"a":true,"ex":"0f2ac74b498b48028cb68387c421e279","k":"param","n":"namespace_id","or":"namespace_id","r":true,"t":"`$STRING`","index$":1}]},"k":"http","m":"DELETE","o":"/accounts/{account_id}/storage/kv/namespaces/{namespace_id}","q":{"exist":["account_id","namespace_id"]},"r":{},"s":[{"lit":"accounts"},{"var":"account_id"},{"lit":"storage"},{"lit":"kv"},{"lit":"namespaces"},{"var":"namespace_id"}],"t":{"req":"`reqdata`","res":"`body`"},"index$":1}],"key$":"remove"},"update":{"input":"data","name":"update","points":[{"a":true,"co":{"id":"PUT /accounts/{account_id}/storage/kv/namespaces/{namespace_id}/values/{key_name}","source":"openapi3","version":2},"g":{"params":[{"a":true,"ex":"023e105f4ecef8ad9ca31a8372d0c353","k":"param","n":"account_id","or":"account_id","r":true,"t":"`$STRING`","index$":0},{"a":true,"ex":"My-Key","k":"param","n":"key_name","or":"key_name","r":true,"t":"`$STRING`","index$":1},{"a":true,"ex":"0f2ac74b498b48028cb68387c421e279","k":"param","n":"namespace_id","or":"namespace_id","r":true,"t":"`$STRING`","index$":2}],"query":[{"a":true,"ex":1578435000,"k":"query","n":"expiration","or":"expiration","r":false,"t":"`$NUMBER`","index$":0},{"a":true,"ex":300,"k":"query","n":"expiration_ttl","or":"expiration_ttl","r":false,"t":"`$NUMBER`","index$":1}]},"k":"http","m":"PUT","o":"/accounts/{account_id}/storage/kv/namespaces/{namespace_id}/values/{key_name}","q":{"exist":["account_id","expiration","expiration_ttl","key_name","namespace_id"]},"r":{},"s":[{"lit":"accounts"},{"var":"account_id"},{"lit":"storage"},{"lit":"kv"},{"lit":"namespaces"},{"var":"namespace_id"},{"lit":"values"},{"var":"key_name"}],"t":{"req":"`reqdata`","res":"`body`"},"index$":0}],"key$":"update"}},"relations":{"ancestors":[["$.main.kit.entity.account","$.main.kit.entity.namespace"],["$.main.kit.entity.account","$.main.kit.entity.namespace","$.main.kit.entity.value"]]},"key$":"workers_kv_api_response_common_no_result","name__orig":"workers_kv_api_response_common_no_result","Name":"WorkersKvApiResponseCommonNoResult","name_":"workers_kv_api_response_common_no_result","name-":"workers-kv-api-response-common-no-result","NAME":"WORKERS_KV_API_RESPONSE_COMMON_NO_RESULT","index$":58}, {"active":true,"entity":"workers_kv_api_response_common_no_result","key$":"BasicWorkersKvApiResponseCommonNoResultFlow","kind":"basic","name":"BasicWorkersKvApiResponseCommonNoResultFlow","param":{},"step":[{"a":true,"d":{"account_id":"account01","namespace_id":"namespace01"},"i":{"ref":"workers_kv_api_response_common_no_result_ref01","srcdatavar":"workers_kv_api_response_common_no_result_ref01_data","suffix":"_up0"},"m":{},"o":"update","s":[{"apply":"TextFieldMark","def":{"mark":"Mark01-workers_kv_api_response_common_no_result_ref01"}}],"v":[],"index$":0}]}, 'WorkersKvApiResponseCommonNoResult', {"DELETE /accounts/{account_id}/storage/kv/namespaces/{namespace_id}/values/{key_name}":{"protocol":"http","requestBody":{"required":true,"content":{"application/json":{}}},"parameters":[{"name":"key_name","in":"path","required":true,"schema":{"description":"A key's name. The name may be at most 512 bytes. All printable, non-whitespace characters are valid. Use percent-encoding to define key names as part of a URL.","type":"string","example":"My-Key","maxLength":512,"x-ref":"#/components/schemas/workers-kv_key_name"},"index$":0},{"name":"namespace_id","in":"path","required":true,"schema":{"description":"ID of the Workers KV namespace.","type":"string","example":"0f2ac74b498b48028cb68387c421e279","maxLength":32,"readOnly":true,"x-auditable":true,"x-ref":"#/components/schemas/workers-kv_namespace_identifier"},"index$":1},{"name":"account_id","in":"path","required":true,"schema":{"description":"ID of the Cloudflare account that owns the Workers KV namespaces.","type":"string","example":"023e105f4ecef8ad9ca31a8372d0c353","maxLength":32,"readOnly":true,"x-auditable":true,"x-ref":"#/components/schemas/workers-kv_identifier"},"index$":2}]},"DELETE /accounts/{account_id}/storage/kv/namespaces/{namespace_id}":{"protocol":"http","requestBody":{"required":true,"content":{"application/json":{}}},"parameters":[{"name":"namespace_id","in":"path","required":true,"schema":{"description":"ID of the Workers KV namespace.","type":"string","example":"0f2ac74b498b48028cb68387c421e279","maxLength":32,"readOnly":true,"x-auditable":true,"x-ref":"#/components/schemas/workers-kv_namespace_identifier"},"index$":0},{"name":"account_id","in":"path","required":true,"schema":{"description":"ID of the Cloudflare account that owns the Workers KV namespaces.","type":"string","example":"023e105f4ecef8ad9ca31a8372d0c353","maxLength":32,"readOnly":true,"x-auditable":true,"x-ref":"#/components/schemas/workers-kv_identifier"},"index$":1}]},"PUT /accounts/{account_id}/storage/kv/namespaces/{namespace_id}/values/{key_name}":{"protocol":"http","requestBody":{"required":true,"content":{"application/octet-stream":{"schema":{"description":"A byte sequence to be stored, up to 25 MiB in length.","example":"Some Value","anyOf":[{"type":"string"},{"format":"binary","type":"string"}],"x-ref":"#/components/schemas/workers-kv_value"},"x-stainless-only":["http"]},"multipart/form-data":{"encoding":{"metadata":{"contentType":"application/json"}},"schema":{"type":"object","properties":{"metadata":{"allOf":[{"anyOf":[{},{},{},{},{},{}],"x-stainless-override-schema":{"type":"unknown"},"x-ref":"#/components/schemas/workers-kv_any"},{"description":"Associates arbitrary JSON data with a key/value pair.","example":{"someMetadataKey":"someMetadataValue"}}],"x-ref":"#/components/schemas/workers-kv_metadata"},"value":{"description":"A byte sequence to be stored, up to 25 MiB in length.","example":"Some Value","anyOf":[{"type":"string"},{"format":"binary","type":"string"}],"x-ref":"#/components/schemas/workers-kv_value"}},"required":["value"]}}}},"parameters":[{"name":"key_name","in":"path","required":true,"schema":{"description":"A key's name. The name may be at most 512 bytes. All printable, non-whitespace characters are valid. Use percent-encoding to define key names as part of a URL.","type":"string","example":"My-Key","maxLength":512,"x-ref":"#/components/schemas/workers-kv_key_name"},"index$":0},{"name":"namespace_id","in":"path","required":true,"schema":{"description":"ID of the Workers KV namespace.","type":"string","example":"0f2ac74b498b48028cb68387c421e279","maxLength":32,"readOnly":true,"x-auditable":true,"x-ref":"#/components/schemas/workers-kv_namespace_identifier"},"index$":1},{"name":"account_id","in":"path","required":true,"schema":{"description":"ID of the Cloudflare account that owns the Workers KV namespaces.","type":"string","example":"023e105f4ecef8ad9ca31a8372d0c353","maxLength":32,"readOnly":true,"x-auditable":true,"x-ref":"#/components/schemas/workers-kv_identifier"},"index$":2},{"name":"expiration","in":"query","schema":{"description":"Expires the key at a certain time, measured in number of seconds since the UNIX epoch.","type":"number","example":1578435000,"x-ref":"#/components/schemas/workers-kv_expiration"},"index$":3},{"name":"expiration_ttl","in":"query","schema":{"description":"Number of seconds until the key expires. Must be at least 60. Takes precedence over `expiration` when both are specified.","type":"number","example":300,"minimum":60,"x-ref":"#/components/schemas/workers-kv_expiration_ttl"},"index$":4}]}})
    }
    const client = setup.client
    const struct = setup.struct

    const isempty = struct.isempty
    const select = struct.select

    let workers_kv_api_response_common_no_result_ref01_data = Object.values(setup.data.existing.workers_kv_api_response_common_no_result)[0] as any

    // UPDATE
    const workers_kv_api_response_common_no_result_ref01_ent = client.WorkersKvApiResponseCommonNoResult()
    const workers_kv_api_response_common_no_result_ref01_data_up0: any = {}
    workers_kv_api_response_common_no_result_ref01_data_up0 ['account_id'] = setup.idmap['account_id']
    workers_kv_api_response_common_no_result_ref01_data_up0 ['namespace_id'] = setup.idmap['namespace_id']

    const workers_kv_api_response_common_no_result_ref01_resdata_up0 = (await workers_kv_api_response_common_no_result_ref01_ent.update(workers_kv_api_response_common_no_result_ref01_data_up0)).data()
    assert(null != workers_kv_api_response_common_no_result_ref01_resdata_up0)


  })
})



function basicSetup(extra?: any) {
  // TODO: fix test def options
  const options: any = {} // null

  // TODO: needs test utility to resolve path
  const entityDataFile =
    Path.resolve(__dirname, 
      '../../../../.sdk/test/entity/workers_kv_api_response_common_no_result/WorkersKvApiResponseCommonNoResultTestData.json')

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
    ['workers_kv_api_response_common_no_result01','workers_kv_api_response_common_no_result02','workers_kv_api_response_common_no_result03','account01','account02','account03','namespace01','namespace02','namespace03','value01','value02','value03'],
    {
      '`$PACK`': ['', {
        '`$KEY`': '`$COPY`',
        '`$VAL`': ['`$FORMAT`', 'upper', '`$COPY`']
      }]
    })

  const env = envOverride({
    'CLOUDFLARE_WORKERS_TEST_WORKERS_KV_API_RESPONSE_COMMON_NO_RESULT_ENTID': idmap,
    'CLOUDFLARE_WORKERS_TEST_LIVE': 'FALSE',
    'CLOUDFLARE_WORKERS_TEST_EXPLAIN': 'FALSE',
    'CLOUDFLARE_WORKERS_APIKEY': '',
  })

  idmap = env['CLOUDFLARE_WORKERS_TEST_WORKERS_KV_API_RESPONSE_COMMON_NO_RESULT_ENTID']

  const live = 'TRUE' === env.CLOUDFLARE_WORKERS_TEST_LIVE

  const transport = createLiveTransport()
  if (live) {
    const rawIds = process.env['CLOUDFLARE_WORKERS_TEST_WORKERS_KV_API_RESPONSE_COMMON_NO_RESULT_ENTID']
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
  
