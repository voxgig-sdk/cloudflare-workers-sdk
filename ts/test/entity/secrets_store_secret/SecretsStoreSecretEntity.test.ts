

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


describe('SecretsStoreSecretEntity', async () => {

  // Per-test live pacing. Delay is read from sdk-test-control.json's
  // `test.live.delayMs`; only sleeps when CLOUDFLARE_WORKERS_TEST_LIVE=TRUE.
  afterEach(liveDelay('CLOUDFLARE_WORKERS_TEST_LIVE'))

  test('instance', async () => {
    const testsdk = CloudflareWorkersSDK.test()
    const ent = testsdk.SecretsStoreSecret()
    assert(null != ent)
  })


  test('basic', async (t) => {

    const live = 'TRUE' === process.env.CLOUDFLARE_WORKERS_TEST_LIVE
    for (const op of ['create']) {
      if (!live && maybeSkipControl(t, 'entityOp', 'secrets_store_secret.' + op, live)) return
    }

    
    const setup = basicSetup()
    if (setup.live) {
      return runLiveEntity(setup, {"active":true,"alias":{"field":{}},"fields":{"comment":{"a":true,"h":"Comment","n":"comment","r":false,"sh":"Freeform text describing the secret.","t":"`$STRING`","key$":"comment","index$":0},"name":{"a":true,"h":"Name","n":"name","r":true,"sh":"The name of the secret.","t":"`$STRING`","key$":"name","index$":1},"scopes":{"a":true,"h":"Scopes","n":"scopes","r":true,"sh":"The list of services that can use this secret.","t":"`$ARRAY`","key$":"scopes","index$":2}},"name":"secrets_store_secret","op":{"create":{"input":"data","name":"create","points":[{"a":true,"co":{"id":"POST /accounts/{account_id}/secrets_store/stores/{store_id}/secrets/{secret_id}/duplicate","source":"openapi3","version":2},"g":{"params":[{"a":true,"ex":"985e105f4ecef8ad9ca31a8372d0c353","k":"param","n":"account_id","or":"account_id","r":true,"t":"`$STRING`","index$":0},{"a":true,"ex":"3fd85f74b32742f1bff64a85009dda07","k":"param","n":"secret_id","or":"secret_id","r":true,"t":"`$STRING`","index$":1},{"a":true,"ex":"023e105f4ecef8ad9ca31a8372d0c353","k":"param","n":"store_id","or":"store_id","r":true,"t":"`$STRING`","index$":2}]},"k":"http","m":"POST","o":"/accounts/{account_id}/secrets_store/stores/{store_id}/secrets/{secret_id}/duplicate","q":{"exist":["account_id","secret_id","store_id"]},"r":{},"s":[{"lit":"accounts"},{"var":"account_id"},{"lit":"secrets_store"},{"lit":"stores"},{"var":"store_id"},{"lit":"secrets"},{"var":"secret_id"},{"lit":"duplicate"}],"t":{"req":"`reqdata`","res":"`body`"},"index$":0}],"key$":"create"}},"relations":{"ancestors":[["$.main.kit.entity.account","$.main.kit.entity.secret"]]},"key$":"secrets_store_secret","name__orig":"secrets_store_secret","Name":"SecretsStoreSecret","name_":"secrets_store_secret","name-":"secrets-store-secret","NAME":"SECRETS_STORE_SECRET","index$":34}, {"active":true,"entity":"secrets_store_secret","key$":"BasicSecretsStoreSecretFlow","kind":"basic","name":"BasicSecretsStoreSecretFlow","param":{},"step":[{"a":true,"d":{},"i":{"ref":"secrets_store_secret_ref01"},"m":{"account_id":"account01","secret_id":"secret01","store_id":"store01"},"o":"create","s":[],"v":[],"index$":0}]}, 'SecretsStoreSecret', {"POST /accounts/{account_id}/secrets_store/stores/{store_id}/secrets/{secret_id}/duplicate":{"protocol":"http","requestBody":{"required":true,"content":{"application/json":{"schema":{"properties":{"comment":{"description":"Freeform text describing the secret.","type":"string","example":"info about my secret","x-auditable":true,"x-ref":"#/components/schemas/secrets-store_comment","key$":"comment"},"name":{"description":"The name of the secret.","type":"string","example":"MY_API_KEY","x-ref":"#/components/schemas/secrets-store_secret_name","key$":"name"},"scopes":{"description":"The list of services that can use this secret.","type":"array","items":{"enum":["workers","ai_gateway","dex","access","containers","websearch"],"type":"string"},"example":["workers","ai_gateway","dex","access","websearch"],"x-ref":"#/components/schemas/secrets-store_scopes","key$":"scopes"}},"required":["name","scopes"],"x-ref":"#/components/schemas/secrets-store_duplicateSecretObject","index$":1}}}},"parameters":[{"description":"Account identifier.","in":"path","name":"account_id","required":true,"schema":{"type":"string","example":"985e105f4ecef8ad9ca31a8372d0c353","maxLength":32},"x-ref":"#/components/parameters/secrets-store_account_id","index$":0},{"description":"Store identifier.","in":"path","name":"store_id","required":true,"schema":{"type":"string","example":"023e105f4ecef8ad9ca31a8372d0c353","maxLength":32},"x-ref":"#/components/parameters/secrets-store_store_id","index$":1},{"description":"Secret identifier.","in":"path","name":"secret_id","required":true,"schema":{"type":"string","example":"3fd85f74b32742f1bff64a85009dda07","maxLength":32},"x-ref":"#/components/parameters/secrets-store_secret_id","index$":2}]}})
    }
    const client = setup.client
    const struct = setup.struct

    const isempty = struct.isempty
    const select = struct.select


    // CREATE
    const secrets_store_secret_ref01_ent = client.SecretsStoreSecret()
    let secrets_store_secret_ref01_data = setup.data.new.secrets_store_secret['secrets_store_secret_ref01']
    secrets_store_secret_ref01_data['account_id'] = setup.idmap['account01']
    secrets_store_secret_ref01_data['secret_id'] = setup.idmap['secret01']
    secrets_store_secret_ref01_data['store_id'] = setup.idmap['store01']

    secrets_store_secret_ref01_data = (await secrets_store_secret_ref01_ent.create(secrets_store_secret_ref01_data)).data()
    assert(null != secrets_store_secret_ref01_data)


  })
})



function basicSetup(extra?: any) {
  // TODO: fix test def options
  const options: any = {} // null

  // TODO: needs test utility to resolve path
  const entityDataFile =
    Path.resolve(__dirname, 
      '../../../../.sdk/test/entity/secrets_store_secret/SecretsStoreSecretTestData.json')

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
    ['secrets_store_secret01','secrets_store_secret02','secrets_store_secret03','account01','account02','account03','secret01','secret02','secret03','store01'],
    {
      '`$PACK`': ['', {
        '`$KEY`': '`$COPY`',
        '`$VAL`': ['`$FORMAT`', 'upper', '`$COPY`']
      }]
    })

  const env = envOverride({
    'CLOUDFLARE_WORKERS_TEST_SECRETS_STORE_SECRET_ENTID': idmap,
    'CLOUDFLARE_WORKERS_TEST_LIVE': 'FALSE',
    'CLOUDFLARE_WORKERS_TEST_EXPLAIN': 'FALSE',
    'CLOUDFLARE_WORKERS_APIKEY': '',
  })

  idmap = env['CLOUDFLARE_WORKERS_TEST_SECRETS_STORE_SECRET_ENTID']

  const live = 'TRUE' === env.CLOUDFLARE_WORKERS_TEST_LIVE

  const transport = createLiveTransport()
  if (live) {
    const rawIds = process.env['CLOUDFLARE_WORKERS_TEST_SECRETS_STORE_SECRET_ENTID']
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
  
