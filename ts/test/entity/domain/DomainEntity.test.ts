

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


describe('DomainEntity', async () => {

  // Per-test live pacing. Delay is read from sdk-test-control.json's
  // `test.live.delayMs`; only sleeps when CLOUDFLARE_WORKERS_TEST_LIVE=TRUE.
  afterEach(liveDelay('CLOUDFLARE_WORKERS_TEST_LIVE'))

  test('instance', async () => {
    const testsdk = CloudflareWorkersSDK.test()
    const ent = testsdk.Domain()
    assert(null != ent)
  })


  test('basic', async (t) => {

    const live = 'TRUE' === process.env.CLOUDFLARE_WORKERS_TEST_LIVE
    for (const op of ['list', 'update', 'load']) {
      if (!live && maybeSkipControl(t, 'entityOp', 'domain.' + op, live)) return
    }

    
    const setup = basicSetup()
    if (setup.live) {
      return runLiveEntity(setup, {"active":true,"alias":{"field":{}},"fields":{"errors":{"a":true,"h":"Errors","n":"errors","r":true,"t":"`$ARRAY`","key$":"errors","index$":0},"id":{"a":true,"h":"Id","n":"id","r":false,"t":"`$STRING`","key$":"id","index$":1},"messages":{"a":true,"h":"Messages","n":"messages","r":true,"t":"`$ARRAY`","key$":"messages","index$":2},"result":{"a":true,"h":"Result","n":"result","r":true,"t":"`$OBJECT`","key$":"result","index$":3},"success":{"a":true,"h":"Success","n":"success","r":true,"sh":"Whether the API call was successful.","t":"`$BOOLEAN`","key$":"success","index$":4}},"id":{"field":"id","name":"id"},"name":"domain","op":{"list":{"input":"data","name":"list","points":[{"a":true,"co":{"id":"GET /accounts/{account_id}/workers/domains","source":"openapi3","version":2},"g":{"params":[{"a":true,"ex":"023e105f4ecef8ad9ca31a8372d0c353","k":"param","n":"account_id","or":"account_id","r":true,"t":"`$STRING`","index$":0}],"query":[{"a":true,"ex":"production","k":"query","n":"environment","or":"environment","r":false,"t":"`$STRING`","index$":0},{"a":true,"ex":"app.example.com","k":"query","n":"hostname","or":"hostname","r":false,"t":"`$STRING`","index$":1},{"a":true,"ex":"my-worker","k":"query","n":"service","or":"service","r":false,"t":"`$STRING`","index$":2},{"a":true,"ex":"593c9c94de529bbbfaac7c53ced0447d","k":"query","n":"zone_id","or":"zone_id","r":false,"t":"`$STRING`","index$":3},{"a":true,"ex":"example.com","k":"query","n":"zone_name","or":"zone_name","r":false,"t":"`$STRING`","index$":4}]},"k":"http","m":"GET","o":"/accounts/{account_id}/workers/domains","q":{"exist":["account_id","environment","hostname","service","zone_id","zone_name"]},"r":{},"s":[{"lit":"accounts"},{"var":"account_id"},{"lit":"workers"},{"lit":"domains"}],"t":{"req":"`reqdata`","res":"`body`"},"index$":0}],"key$":"list"},"load":{"input":"data","name":"load","points":[{"a":true,"co":{"id":"GET /accounts/{account_id}/workers/domains/{domain_id}","source":"openapi3","version":2},"g":{"params":[{"a":true,"ex":"023e105f4ecef8ad9ca31a8372d0c353","k":"param","n":"account_id","or":"account_id","r":true,"t":"`$STRING`","index$":0},{"a":true,"ex":"dbe10b4bc17c295377eabd600e1787fd","k":"param","n":"id","or":"domain_id","r":true,"t":"`$STRING`","index$":1}]},"k":"http","m":"GET","o":"/accounts/{account_id}/workers/domains/{domain_id}","q":{"exist":["account_id","id"]},"r":{"param":{"domain_id":"id"}},"s":[{"lit":"accounts"},{"var":"account_id"},{"lit":"workers"},{"lit":"domains"},{"var":"id"}],"t":{"req":"`reqdata`","res":"`body`"},"index$":0}],"key$":"load"},"remove":{"input":"data","name":"remove","points":[{"a":true,"co":{"id":"DELETE /accounts/{account_id}/workers/domains/{domain_id}","source":"openapi3","version":2},"g":{"params":[{"a":true,"ex":"023e105f4ecef8ad9ca31a8372d0c353","k":"param","n":"account_id","or":"account_id","r":true,"t":"`$STRING`","index$":0},{"a":true,"ex":"dbe10b4bc17c295377eabd600e1787fd","k":"param","n":"id","or":"domain_id","r":true,"t":"`$STRING`","index$":1}]},"k":"http","m":"DELETE","o":"/accounts/{account_id}/workers/domains/{domain_id}","q":{"exist":["account_id","id"]},"r":{"param":{"domain_id":"id"}},"s":[{"lit":"accounts"},{"var":"account_id"},{"lit":"workers"},{"lit":"domains"},{"var":"id"}],"t":{"req":"`reqdata`","res":"`body`"},"index$":0}],"key$":"remove"},"update":{"input":"data","name":"update","points":[{"a":true,"co":{"id":"PUT /accounts/{account_id}/workers/domains","source":"openapi3","version":2},"g":{"params":[{"a":true,"ex":"023e105f4ecef8ad9ca31a8372d0c353","k":"param","n":"account_id","or":"account_id","r":true,"t":"`$STRING`","index$":0}]},"k":"http","m":"PUT","o":"/accounts/{account_id}/workers/domains","q":{"exist":["account_id"]},"r":{},"s":[{"lit":"accounts"},{"var":"account_id"},{"lit":"workers"},{"lit":"domains"}],"t":{"req":"`reqdata`","res":"`body`"},"index$":0}],"key$":"update"}},"relations":{"ancestors":[["$.main.kit.entity.account"]]},"key$":"domain","name__orig":"domain","Name":"Domain","name_":"domain","name-":"domain","NAME":"DOMAIN","index$":12}, {"active":true,"entity":"domain","key$":"BasicDomainFlow","kind":"basic","name":"BasicDomainFlow","param":{},"step":[{"a":true,"d":{},"i":{},"m":{"account_id":"account01"},"o":"list","s":[],"v":[{"apply":"ItemExists","def":{"ref":"domain_ref01"}}],"index$":0},{"a":true,"d":{},"i":{"ref":"domain_ref01","srcdatavar":"domain_ref01_data","suffix":"_up0"},"m":{},"o":"update","s":[{"apply":"TextFieldMark","def":{"mark":"Mark01-domain_ref01"}}],"v":[],"index$":1},{"a":true,"d":{},"i":{"ref":"domain_ref01","srcdatavar":"domain_ref01_data","suffix":"_dt0"},"m":{"account_id":"account01","id":"domain01"},"o":"load","s":[],"v":[{"apply":"TextFieldMark","def":{"mark":"Mark01-domain_ref01"}}],"index$":2}]}, 'Domain', {"GET /accounts/{account_id}/workers/domains":{"protocol":"http","parameters":[{"name":"account_id","in":"path","required":true,"schema":{"description":"Identifier.","type":"string","example":"023e105f4ecef8ad9ca31a8372d0c353","maxLength":32,"x-auditable":true,"x-ref":"#/components/schemas/workers_identifier"},"index$":0},{"name":"zone_id","in":"query","schema":{"description":"ID of the zone containing the domain hostname.","type":"string","example":"593c9c94de529bbbfaac7c53ced0447d"},"index$":1},{"name":"zone_name","in":"query","schema":{"description":"Name of the zone containing the domain hostname.","type":"string","example":"example.com"},"index$":2},{"name":"service","in":"query","schema":{"description":"Name of the Worker associated with the domain.","type":"string","example":"my-worker"},"index$":3},{"name":"hostname","in":"query","schema":{"description":"Hostname of the domain.","type":"string","example":"app.example.com"},"index$":4},{"name":"environment","in":"query","schema":{"description":"Worker environment associated with the domain.","type":"string","example":"production"},"deprecated":true,"index$":5}]},"GET /accounts/{account_id}/workers/domains/{domain_id}":{"protocol":"http","parameters":[{"name":"account_id","in":"path","required":true,"schema":{"description":"Identifier.","type":"string","example":"023e105f4ecef8ad9ca31a8372d0c353","maxLength":32,"x-auditable":true,"x-ref":"#/components/schemas/workers_identifier"},"index$":0},{"name":"domain_id","in":"path","required":true,"schema":{"description":"ID of the domain.","type":"string","example":"dbe10b4bc17c295377eabd600e1787fd"},"index$":1}]},"DELETE /accounts/{account_id}/workers/domains/{domain_id}":{"protocol":"http","parameters":[{"name":"account_id","in":"path","required":true,"schema":{"description":"Identifier.","type":"string","example":"023e105f4ecef8ad9ca31a8372d0c353","maxLength":32,"x-auditable":true,"x-ref":"#/components/schemas/workers_identifier"},"index$":0},{"name":"domain_id","in":"path","required":true,"schema":{"description":"ID of the domain.","type":"string","example":"dbe10b4bc17c295377eabd600e1787fd"},"index$":1}]},"PUT /accounts/{account_id}/workers/domains":{"protocol":"http","requestBody":{"required":true,"content":{"application/json":{"schema":{"allOf":[{"type":"object","properties":{"cert_id":{"description":"ID of the TLS certificate issued for the domain.","example":"9fdf92c8-64c2-4a3d-b1af-e15304961145","format":"uuid","readOnly":true,"type":"string","x-auditable":true},"environment":{"deprecated":true,"description":"Worker environment associated with the domain.","example":"production","readOnly":true,"type":"string","x-auditable":true},"hostname":{"description":"Hostname of the domain. Can be either the zone apex or a subdomain of the zone. Requests to this hostname will be routed to the configured Worker.","example":"app.example.com","type":"string","x-auditable":true},"id":{"description":"Immutable ID of the domain.","example":"dbe10b4bc17c295377eabd600e1787fd","readOnly":true,"type":"string","x-auditable":true},"service":{"description":"Name of the Worker associated with the domain. Requests to the configured hostname will be routed to this Worker.","example":"my-worker","type":"string","x-auditable":true},"zone_id":{"description":"ID of the zone containing the domain hostname.","example":"593c9c94de529bbbfaac7c53ced0447d","type":"string","x-auditable":true,"x-stainless-terraform-configurability":"computed_optional"},"zone_name":{"description":"Name of the zone containing the domain hostname.","example":"example.com","type":"string","x-auditable":true,"x-stainless-terraform-configurability":"computed_optional"}},"required":["id","cert_id","environment","zone_id","zone_name","hostname","service"],"x-ref":"#/components/schemas/workers_Domain"},{"required":["hostname","service"],"type":"object"}],"index$":1}}}},"parameters":[{"name":"account_id","in":"path","required":true,"schema":{"description":"Identifier.","type":"string","example":"023e105f4ecef8ad9ca31a8372d0c353","maxLength":32,"x-auditable":true,"x-ref":"#/components/schemas/workers_identifier"},"index$":0}]}})
    }
    const client = setup.client
    const struct = setup.struct

    const isempty = struct.isempty
    const select = struct.select

    let domain_ref01_data = Object.values(setup.data.existing.domain)[0] as any

    // LIST
    const domain_ref01_ent = client.Domain()
    const domain_ref01_match: any = {}
    domain_ref01_match['account_id'] = setup.idmap['account01']

    const domain_ref01_list = (await domain_ref01_ent.list(domain_ref01_match)).map((e: any) => e.data())


    // UPDATE
    const domain_ref01_data_up0: any = {}
    domain_ref01_data_up0.id = domain_ref01_data.id

    const domain_ref01_resdata_up0 = (await domain_ref01_ent.update(domain_ref01_data_up0)).data()
    assert(domain_ref01_resdata_up0.id === domain_ref01_data_up0.id)


    // LOAD
    const domain_ref01_match_dt0: any = {}
    domain_ref01_match_dt0.id = domain_ref01_data.id
    const domain_ref01_data_dt0 = (await domain_ref01_ent.load(domain_ref01_match_dt0)).data()
    assert(domain_ref01_data_dt0.id === domain_ref01_data.id)


  })
})



function basicSetup(extra?: any) {
  // TODO: fix test def options
  const options: any = {} // null

  // TODO: needs test utility to resolve path
  const entityDataFile =
    Path.resolve(__dirname, 
      '../../../../.sdk/test/entity/domain/DomainTestData.json')

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
    ['domain01','domain02','domain03','account01','account02','account03'],
    {
      '`$PACK`': ['', {
        '`$KEY`': '`$COPY`',
        '`$VAL`': ['`$FORMAT`', 'upper', '`$COPY`']
      }]
    })

  const env = envOverride({
    'CLOUDFLARE_WORKERS_TEST_DOMAIN_ENTID': idmap,
    'CLOUDFLARE_WORKERS_TEST_LIVE': 'FALSE',
    'CLOUDFLARE_WORKERS_TEST_EXPLAIN': 'FALSE',
    'CLOUDFLARE_WORKERS_APIKEY': '',
  })

  idmap = env['CLOUDFLARE_WORKERS_TEST_DOMAIN_ENTID']

  const live = 'TRUE' === env.CLOUDFLARE_WORKERS_TEST_LIVE

  const transport = createLiveTransport()
  if (live) {
    const rawIds = process.env['CLOUDFLARE_WORKERS_TEST_DOMAIN_ENTID']
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
  
