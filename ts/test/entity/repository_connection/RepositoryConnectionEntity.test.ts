

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


describe('RepositoryConnectionEntity', async () => {

  // Per-test live pacing. Delay is read from sdk-test-control.json's
  // `test.live.delayMs`; only sleeps when CLOUDFLARE_WORKERS_TEST_LIVE=TRUE.
  afterEach(liveDelay('CLOUDFLARE_WORKERS_TEST_LIVE'))

  test('instance', async () => {
    const testsdk = CloudflareWorkersSDK.test()
    const ent = testsdk.RepositoryConnection()
    assert(null != ent)
  })


  test('basic', async (t) => {

    const live = 'TRUE' === process.env.CLOUDFLARE_WORKERS_TEST_LIVE
    for (const op of ['update']) {
      if (!live && maybeSkipControl(t, 'entityOp', 'repository_connection.' + op, live)) return
    }

    
    const setup = basicSetup()
    if (setup.live) {
      return runLiveEntity(setup, {"active":true,"alias":{"field":{}},"fields":{"provider_account_id":{"a":true,"h":"Provider Account Id","n":"provider_account_id","r":true,"sh":"Provider-specific identifier of the account or namespace that owns the repository.","t":"`$STRING`","key$":"provider_account_id","index$":0},"provider_account_name":{"a":true,"h":"Provider Account Name","n":"provider_account_name","r":true,"sh":"Human-readable name of the account or namespace that owns the repository.","t":"`$STRING`","key$":"provider_account_name","index$":1},"provider_type":{"a":true,"h":"Provider Type","n":"provider_type","r":true,"sh":"Source control provider.","t":"`$STRING`","key$":"provider_type","index$":2},"repo_id":{"a":true,"h":"Repo Id","n":"repo_id","r":true,"sh":"Provider-specific repository identifier.","t":"`$STRING`","key$":"repo_id","index$":3},"repo_name":{"a":true,"h":"Repo Name","n":"repo_name","r":true,"sh":"Human-readable repository name.","t":"`$STRING`","key$":"repo_name","index$":4}},"name":"repository_connection","op":{"update":{"input":"data","name":"update","points":[{"a":true,"co":{"id":"PUT /accounts/{account_id}/builds/repos/connections","source":"openapi3","version":2},"g":{"params":[{"a":true,"ex":"account-123","k":"param","n":"account_id","or":"account_id","r":true,"t":"`$STRING`","index$":0}]},"k":"http","m":"PUT","o":"/accounts/{account_id}/builds/repos/connections","q":{"exist":["account_id"]},"r":{},"s":[{"lit":"accounts"},{"var":"account_id"},{"lit":"builds"},{"lit":"repos"},{"lit":"connections"}],"t":{"req":"`reqdata`","res":"`body`"},"index$":0}],"key$":"update"}},"relations":{"ancestors":[["$.main.kit.entity.account"]]},"key$":"repository_connection","name__orig":"repository_connection","Name":"RepositoryConnection","name_":"repository_connection","name-":"repository-connection","NAME":"REPOSITORY_CONNECTION","index$":26}, {"active":true,"entity":"repository_connection","key$":"BasicRepositoryConnectionFlow","kind":"basic","name":"BasicRepositoryConnectionFlow","param":{},"step":[{"a":true,"d":{},"i":{"ref":"repository_connection_ref01","srcdatavar":"repository_connection_ref01_data","suffix":"_up0","textfield":"provider_account_id"},"m":{},"o":"update","s":[{"apply":"TextFieldMark","def":{"mark":"Mark01-repository_connection_ref01"}}],"v":[],"index$":0}]}, 'RepositoryConnection', {"PUT /accounts/{account_id}/builds/repos/connections":{"protocol":"http","requestBody":{"required":true,"content":{"application/json":{"schema":{"type":"object","properties":{"provider_account_id":{"description":"Provider-specific identifier of the account or namespace that owns the repository.","type":"string","example":"cloudflare","x-ref":"#/components/schemas/builds_provider_account_id","key$":"provider_account_id"},"provider_account_name":{"description":"Human-readable name of the account or namespace that owns the repository.","type":"string","example":"Cloudflare","x-ref":"#/components/schemas/builds_provider_account_name","key$":"provider_account_name"},"provider_type":{"description":"Source control provider.","type":"string","example":"github","enum":["github","gitlab","gitlab_internal","origin"],"x-ref":"#/components/schemas/builds_SCMProviderType","key$":"provider_type"},"repo_id":{"description":"Provider-specific repository identifier.","type":"string","example":"workers-sdk","x-ref":"#/components/schemas/builds_repo_id","key$":"repo_id"},"repo_name":{"description":"Human-readable repository name.","type":"string","example":"workers-sdk","x-ref":"#/components/schemas/builds_repo_name","key$":"repo_name"}},"required":["repo_id","repo_name","provider_type","provider_account_id","provider_account_name"],"x-ref":"#/components/schemas/builds_UpsertRepoConnectionRequest","index$":1}}}},"parameters":[{"in":"path","name":"account_id","required":true,"schema":{"description":"Account identifier.","type":"string","example":"account-123","x-ref":"#/components/schemas/builds_account_id"},"x-ref":"#/components/parameters/builds_AccountId","index$":0}]}})
    }
    const client = setup.client
    const struct = setup.struct

    const isempty = struct.isempty
    const select = struct.select

    let repository_connection_ref01_data = Object.values(setup.data.existing.repository_connection)[0] as any

    // UPDATE
    const repository_connection_ref01_ent = client.RepositoryConnection()
    const repository_connection_ref01_data_up0: any = {}

    const repository_connection_ref01_markdef_up0 = { name: 'provider_account_id', value: 'Mark01-repository_connection_ref01_' + setup.now }
    ;(repository_connection_ref01_data_up0 as any)[repository_connection_ref01_markdef_up0.name] = repository_connection_ref01_markdef_up0.value

    const repository_connection_ref01_resdata_up0 = (await repository_connection_ref01_ent.update(repository_connection_ref01_data_up0)).data()
    assert(null != repository_connection_ref01_resdata_up0)

    assert((repository_connection_ref01_resdata_up0 as any)[repository_connection_ref01_markdef_up0.name] === repository_connection_ref01_markdef_up0.value)


  })
})



function basicSetup(extra?: any) {
  // TODO: fix test def options
  const options: any = {} // null

  // TODO: needs test utility to resolve path
  const entityDataFile =
    Path.resolve(__dirname, 
      '../../../../.sdk/test/entity/repository_connection/RepositoryConnectionTestData.json')

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
    ['repository_connection01','repository_connection02','repository_connection03','account01','account02','account03'],
    {
      '`$PACK`': ['', {
        '`$KEY`': '`$COPY`',
        '`$VAL`': ['`$FORMAT`', 'upper', '`$COPY`']
      }]
    })

  const env = envOverride({
    'CLOUDFLARE_WORKERS_TEST_REPOSITORY_CONNECTION_ENTID': idmap,
    'CLOUDFLARE_WORKERS_TEST_LIVE': 'FALSE',
    'CLOUDFLARE_WORKERS_TEST_EXPLAIN': 'FALSE',
    'CLOUDFLARE_WORKERS_APIKEY': '',
  })

  idmap = env['CLOUDFLARE_WORKERS_TEST_REPOSITORY_CONNECTION_ENTID']

  const live = 'TRUE' === env.CLOUDFLARE_WORKERS_TEST_LIVE

  const transport = createLiveTransport()
  if (live) {
    const rawIds = process.env['CLOUDFLARE_WORKERS_TEST_REPOSITORY_CONNECTION_ENTID']
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
  
