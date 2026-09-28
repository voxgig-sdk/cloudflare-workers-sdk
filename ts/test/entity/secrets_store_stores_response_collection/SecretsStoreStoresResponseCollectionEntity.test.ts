

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


describe('SecretsStoreStoresResponseCollectionEntity', async () => {

  // Per-test live pacing. Delay is read from sdk-test-control.json's
  // `test.live.delayMs`; only sleeps when CLOUDFLARE_WORKERS_TEST_LIVE=TRUE.
  afterEach(liveDelay('CLOUDFLARE_WORKERS_TEST_LIVE'))

  test('instance', async () => {
    const testsdk = CloudflareWorkersSDK.test()
    const ent = testsdk.SecretsStoreStoresResponseCollection()
    assert(null != ent)
  })


  test('basic', async (t) => {

    const live = 'TRUE' === process.env.CLOUDFLARE_WORKERS_TEST_LIVE
    for (const op of ['list']) {
      if (!live && maybeSkipControl(t, 'entityOp', 'secrets_store_stores_response_collection.' + op, live)) return
    }

    
    const setup = basicSetup()
    if (setup.live) {
      return runLiveEntity(setup, {"active":true,"alias":{"field":{}},"fields":{"result":{"a":true,"h":"Result","n":"result","r":false,"t":"`$ARRAY`","key$":"result","index$":0}},"name":"secrets_store_stores_response_collection","op":{"list":{"input":"data","name":"list","points":[{"a":true,"co":{"id":"GET /accounts/{account_id}/secrets_store/stores","source":"openapi3","version":2},"g":{"params":[{"a":true,"ex":"985e105f4ecef8ad9ca31a8372d0c353","k":"param","n":"account_id","or":"account_id","r":true,"t":"`$STRING`","index$":0}],"query":[{"a":true,"ex":"desc","k":"query","n":"direction","or":"direction","r":false,"t":"`$STRING`","index$":0},{"a":true,"ex":"created","k":"query","n":"order","or":"order","r":false,"t":"`$STRING`","index$":1},{"a":true,"ex":2,"k":"query","n":"page","or":"page","r":false,"t":"`$INTEGER`","index$":2},{"a":true,"ex":20,"k":"query","n":"per_page","or":"per_page","r":false,"t":"`$INTEGER`","index$":3}]},"k":"http","m":"GET","o":"/accounts/{account_id}/secrets_store/stores","q":{"exist":["account_id","direction","order","page","per_page"]},"r":{},"s":[{"lit":"accounts"},{"var":"account_id"},{"lit":"secrets_store"},{"lit":"stores"}],"t":{"req":"`reqdata`","res":"`body`"},"index$":0}],"key$":"list"}},"relations":{"ancestors":[["$.main.kit.entity.account"]]},"key$":"secrets_store_stores_response_collection","name__orig":"secrets_store_stores_response_collection","Name":"SecretsStoreStoresResponseCollection","name_":"secrets_store_stores_response_collection","name-":"secrets-store-stores-response-collection","NAME":"SECRETS_STORE_STORES_RESPONSE_COLLECTION","index$":36}, {"active":true,"entity":"secrets_store_stores_response_collection","key$":"BasicSecretsStoreStoresResponseCollectionFlow","kind":"basic","name":"BasicSecretsStoreStoresResponseCollectionFlow","param":{},"step":[{"a":true,"d":{},"i":{},"m":{"account_id":"account01"},"o":"list","s":[],"v":[{"apply":"ItemExists","def":{"ref":"secrets_store_stores_response_collection_ref01"}}],"index$":0}]}, 'SecretsStoreStoresResponseCollection', {"GET /accounts/{account_id}/secrets_store/stores":{"protocol":"http","parameters":[{"description":"Account identifier.","in":"path","name":"account_id","required":true,"schema":{"type":"string","example":"985e105f4ecef8ad9ca31a8372d0c353","maxLength":32},"x-ref":"#/components/parameters/secrets-store_account_id","index$":0},{"description":"Direction to sort objects.","in":"query","name":"direction","schema":{"type":"string","default":"desc","enum":["asc","desc"]},"x-ref":"#/components/parameters/secrets-store_direction","index$":1},{"description":"Page number.","in":"query","name":"page","schema":{"type":"integer","example":2,"minimum":0,"multipleOf":1},"x-ref":"#/components/parameters/secrets-store_page","index$":2},{"description":"Number of objects to return per page.","in":"query","name":"per_page","schema":{"type":"integer","example":20,"maximum":100,"minimum":0,"multipleOf":1},"x-ref":"#/components/parameters/secrets-store_per_page","index$":3},{"description":"Order stores by values in the given field.","in":"query","name":"order","schema":{"type":"string","default":"created","enum":["name","created","modified"]},"x-ref":"#/components/parameters/secrets-store_store_order","index$":4}]}})
    }
    const client = setup.client
    const struct = setup.struct

    const isempty = struct.isempty
    const select = struct.select

    let secrets_store_stores_response_collection_ref01_data = Object.values(setup.data.existing.secrets_store_stores_response_collection)[0] as any

    // LIST
    const secrets_store_stores_response_collection_ref01_ent = client.SecretsStoreStoresResponseCollection()
    const secrets_store_stores_response_collection_ref01_match: any = {}
    secrets_store_stores_response_collection_ref01_match['account_id'] = setup.idmap['account01']

    const secrets_store_stores_response_collection_ref01_list = (await secrets_store_stores_response_collection_ref01_ent.list(secrets_store_stores_response_collection_ref01_match)).map((e: any) => e.data())


  })
})



function basicSetup(extra?: any) {
  // TODO: fix test def options
  const options: any = {} // null

  // TODO: needs test utility to resolve path
  const entityDataFile =
    Path.resolve(__dirname, 
      '../../../../.sdk/test/entity/secrets_store_stores_response_collection/SecretsStoreStoresResponseCollectionTestData.json')

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
    ['secrets_store_stores_response_collection01','secrets_store_stores_response_collection02','secrets_store_stores_response_collection03','account01','account02','account03'],
    {
      '`$PACK`': ['', {
        '`$KEY`': '`$COPY`',
        '`$VAL`': ['`$FORMAT`', 'upper', '`$COPY`']
      }]
    })

  const env = envOverride({
    'CLOUDFLARE_WORKERS_TEST_SECRETS_STORE_STORES_RESPONSE_COLLECTION_ENTID': idmap,
    'CLOUDFLARE_WORKERS_TEST_LIVE': 'FALSE',
    'CLOUDFLARE_WORKERS_TEST_EXPLAIN': 'FALSE',
    'CLOUDFLARE_WORKERS_APIKEY': '',
  })

  idmap = env['CLOUDFLARE_WORKERS_TEST_SECRETS_STORE_STORES_RESPONSE_COLLECTION_ENTID']

  const live = 'TRUE' === env.CLOUDFLARE_WORKERS_TEST_LIVE

  const transport = createLiveTransport()
  if (live) {
    const rawIds = process.env['CLOUDFLARE_WORKERS_TEST_SECRETS_STORE_STORES_RESPONSE_COLLECTION_ENTID']
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
  
