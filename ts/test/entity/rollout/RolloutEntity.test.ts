

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


describe('RolloutEntity', async () => {

  // Per-test live pacing. Delay is read from sdk-test-control.json's
  // `test.live.delayMs`; only sleeps when CLOUDFLARE_WORKERS_TEST_LIVE=TRUE.
  afterEach(liveDelay('CLOUDFLARE_WORKERS_TEST_LIVE'))

  test('instance', async () => {
    const testsdk = CloudflareWorkersSDK.test()
    const ent = testsdk.Rollout()
    assert(null != ent)
  })


  test('basic', async (t) => {

    const live = 'TRUE' === process.env.CLOUDFLARE_WORKERS_TEST_LIVE
    for (const op of ['create']) {
      if (!live && maybeSkipControl(t, 'entityOp', 'rollout.' + op, live)) return
    }

    
    const setup = basicSetup()
    if (setup.live) {
      return runLiveEntity(setup, {"active":true,"alias":{"field":{}},"fields":{"description":{"a":true,"h":"Description","n":"description","r":true,"sh":"Description of the rollout process.","t":"`$STRING`","key$":"description","index$":0},"kind":{"a":true,"h":"Kind","n":"kind","r":false,"sh":"Kind of the rollout process.","t":"`$STRING`","key$":"kind","index$":1},"percentage":{"a":true,"h":"Percentage","n":"percentage","r":false,"sh":"Initial target version percentage (0-100).","t":"`$INTEGER`","key$":"percentage","index$":2},"step_percentage":{"a":true,"h":"Step Percentage","n":"step_percentage","r":false,"sh":"Percentage of rollout to increase in each step when \"steps\" is absent.","t":"`$INTEGER`","key$":"step_percentage","index$":3},"steps":{"a":true,"h":"Steps","n":"steps","r":false,"sh":"Steps defining the rollout process, used when \"step_percentage\" is absent.","t":"`$ARRAY`","key$":"steps","index$":4},"strategy":{"a":true,"h":"Strategy","n":"strategy","r":true,"sh":"Strategy used for the rollout.","t":"`$STRING`","key$":"strategy","index$":5},"target_configuration":{"a":true,"h":"Target Configuration","n":"target_configuration","r":true,"sh":"User-specified container configuration changes.","t":"`$OBJECT`","key$":"target_configuration","index$":6}},"name":"rollout","op":{"create":{"input":"data","name":"create","points":[{"a":true,"co":{"id":"POST /accounts/{account_id}/containers/applications/{application_id}/rollouts","source":"openapi3","version":2},"g":{"params":[{"a":true,"ex":"account-123","k":"param","n":"account_id","or":"account_id","r":true,"t":"`$STRING`","index$":0},{"a":true,"k":"param","n":"application_id","or":"application_id","r":true,"t":"`$STRING`","index$":1}]},"k":"http","m":"POST","o":"/accounts/{account_id}/containers/applications/{application_id}/rollouts","q":{"exist":["account_id","application_id"]},"r":{},"s":[{"lit":"accounts"},{"var":"account_id"},{"lit":"containers"},{"lit":"applications"},{"var":"application_id"},{"lit":"rollouts"}],"t":{"req":"`reqdata`","res":"`body`"},"index$":0}],"key$":"create"}},"relations":{"ancestors":[["$.main.kit.entity.account","$.main.kit.entity.application"]]},"key$":"rollout","name__orig":"rollout","Name":"Rollout","name_":"rollout","name-":"rollout","NAME":"ROLLOUT","index$":27}, {"active":true,"entity":"rollout","key$":"BasicRolloutFlow","kind":"basic","name":"BasicRolloutFlow","param":{},"step":[{"a":true,"d":{},"i":{"ref":"rollout_ref01"},"m":{"account_id":"account01","application_id":"application01"},"o":"create","s":[],"v":[],"index$":0}]}, 'Rollout', {"POST /accounts/{account_id}/containers/applications/{application_id}/rollouts":{"protocol":"http","requestBody":{"required":true,"content":{"application/json":{"schema":{"description":"Request body to create a new rollout for a scheduler-backed application.","type":"object","properties":{"description":{"description":"Description of the rollout process.","type":"string","key$":"description"},"kind":{"description":"Kind of the rollout process. Defaults to \"full_auto\".\n - \"full_auto\": For rolling rollouts, starts progressing steps upon rollout creation. For new_instances rollouts, advances percentage targets automatically after target-version health is observed.\n - \"full_manual\": Requires manually progressing each step in the rollout using the UpdateRollout's action parameter.\n","type":"string","default":"full_auto","enum":["full_auto","full_manual"],"key$":"kind"},"percentage":{"description":"Initial target version percentage (0-100). Version sync actively replaces instances to match.\nRequired when strategy is \"new_instances\" and kind is \"full_manual\". When strategy is \"new_instances\" and kind is \"full_auto\", omitted percentage starts at 10% or the smallest percentage that targets at least one instance. Unused for \"rolling\".\n","type":"integer","maximum":100,"minimum":0,"key$":"percentage"},"step_percentage":{"description":"Percentage of rollout to increase in each step when \"steps\" is absent. Applicable values: 5, 10, 20, 25, 50, 100.\nThese create rollouts with 20, 10, 5, 4, 2, 1 steps respectively.\nOnly valid for \"rolling\" strategy.\n","type":"integer","enum":[5,10,20,25,50,100],"key$":"step_percentage"},"steps":{"description":"Steps defining the rollout process, used when \"step_percentage\" is absent.\nSpecify only one of \"step_percentage\" or \"steps\" when creating a rollout.\n\"steps\" allow granular control over each step.\nOnly valid for \"rolling\" strategy.\n","type":"array","items":{"description":"Steps defining the rollout process.","type":"object","properties":{"description":{"description":"Description of the rollout step.","type":"string"},"step_size":{"type":"object","properties":{},"required":[]}},"required":["step_size","description"],"x-ref":"#/components/schemas/cc_RolloutStepRequest"},"key$":"steps"},"strategy":{"description":"Strategy used for the rollout.\n- \"rolling\": Step-based rollout with health gates. Actively replaces instances to reach each step's target percentage.\n- \"new_instances\": Percentage control over version distribution. Version sync actively replaces instances to match the configured percentage. The \"full_auto\" kind advances through fixed percentage targets after target-version health is observed.\n","type":"string","enum":["rolling","new_instances"],"key$":"strategy"},"target_configuration":{"description":"User-specified container configuration changes.","type":"object","properties":{"authorized_keys":{"items":{"description":"User-provided SSH public key.","properties":{},"required":[],"type":"object","x-ref":"#/components/schemas/cc_UserSSHPublicKey"},"type":"array"},"command":{"description":"The command that runs when the container starts, passed to the entrypoint.\nYou can override this at run-time. If you override only the command,\nit gets passed to the default entrypoint specified in the image.\n","example":["myapp","--default-option"],"items":{"type":"string","x-ref":"#/components/schemas/cc_ExecFormParam"},"type":"array","x-ref":"#/components/schemas/cc_Command"},"entrypoint":{"description":"The entry point for the container, specifying the executable to run when the container starts.\nYou can override this at run-time. If you do, the default command from the image is ignored.\nSpecify both entrypoint and command at run-time to completely replace the image defaults.\n","example":["/bin/bash"],"items":{"type":"string","x-ref":"#/components/schemas/cc_ExecFormParam"},"type":"array","x-ref":"#/components/schemas/cc_Entrypoint"},"environment_variables":{"description":"Container environment variables.","items":{"description":"An environment variable with a value set.","properties":{},"required":[],"type":"object","x-ref":"#/components/schemas/cc_EnvironmentVariable"},"type":"array"},"image":{"description":"Image url.","type":"string","x-ref":"#/components/schemas/cc_Image"},"instance_type":{"anyOf":[{}],"default":"lite","description":"The instance type configures vCPU, memory, and disk.\n\n- \"lite\": 1/16 vCPU, 256 MiB memory, 2 GB disk\n- \"basic\": 1/4 vCPU, 1 GiB memory, 4 GB disk\n- \"standard-1\": 1/2 vCPU, 4 GiB memory, 8 GB disk\n- \"standard-2\": 1 vCPU, 6 GiB memory, 12 GB disk\n- \"standard-3\": 2 vCPU, 8 GiB memory, 16 GB disk\n- \"standard-4\": 4 vCPU, 12 GiB memory, 20 GB disk\n","example":"lite","type":"string","x-ref":"#/components/schemas/cc_InstanceType"},"observability":{"description":"Settings for deployment observability such as logging.","properties":{"logs":{}},"type":"object","x-ref":"#/components/schemas/cc_DeploymentObservability"}},"x-ref":"#/components/schemas/cc_ModifyUserDeploymentConfiguration","key$":"target_configuration"}},"required":["target_configuration","strategy","description"],"x-ref":"#/components/schemas/cc_ContainersCreateApplicationRolloutRequest","index$":1}}}},"parameters":[{"description":"Account identifier.","in":"path","name":"account_id","required":true,"schema":{"type":"string","example":"account-123"},"x-ref":"#/components/parameters/cc_AccountId","index$":0},{"name":"application_id","in":"path","required":true,"schema":{"description":"An Application ID represents an identifier of an application.","type":"string","x-ref":"#/components/schemas/cc_ApplicationID"},"index$":1}]}})
    }
    const client = setup.client
    const struct = setup.struct

    const isempty = struct.isempty
    const select = struct.select


    // CREATE
    const rollout_ref01_ent = client.Rollout()
    let rollout_ref01_data = setup.data.new.rollout['rollout_ref01']
    rollout_ref01_data['account_id'] = setup.idmap['account01']
    rollout_ref01_data['application_id'] = setup.idmap['application01']

    rollout_ref01_data = (await rollout_ref01_ent.create(rollout_ref01_data)).data()
    assert(null != rollout_ref01_data)


  })
})



function basicSetup(extra?: any) {
  // TODO: fix test def options
  const options: any = {} // null

  // TODO: needs test utility to resolve path
  const entityDataFile =
    Path.resolve(__dirname, 
      '../../../../.sdk/test/entity/rollout/RolloutTestData.json')

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
    ['rollout01','rollout02','rollout03','account01','account02','account03','application01','application02','application03'],
    {
      '`$PACK`': ['', {
        '`$KEY`': '`$COPY`',
        '`$VAL`': ['`$FORMAT`', 'upper', '`$COPY`']
      }]
    })

  const env = envOverride({
    'CLOUDFLARE_WORKERS_TEST_ROLLOUT_ENTID': idmap,
    'CLOUDFLARE_WORKERS_TEST_LIVE': 'FALSE',
    'CLOUDFLARE_WORKERS_TEST_EXPLAIN': 'FALSE',
    'CLOUDFLARE_WORKERS_APIKEY': '',
  })

  idmap = env['CLOUDFLARE_WORKERS_TEST_ROLLOUT_ENTID']

  const live = 'TRUE' === env.CLOUDFLARE_WORKERS_TEST_LIVE

  const transport = createLiveTransport()
  if (live) {
    const rawIds = process.env['CLOUDFLARE_WORKERS_TEST_ROLLOUT_ENTID']
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
  
