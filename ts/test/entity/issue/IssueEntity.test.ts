

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


describe('IssueEntity', async () => {

  // Per-test live pacing. Delay is read from sdk-test-control.json's
  // `test.live.delayMs`; only sleeps when CLOUDFLARE_WORKERS_TEST_LIVE=TRUE.
  afterEach(liveDelay('CLOUDFLARE_WORKERS_TEST_LIVE'))

  test('instance', async () => {
    const testsdk = CloudflareWorkersSDK.test()
    const ent = testsdk.Issue()
    assert(null != ent)
  })


  test('basic', async (t) => {

    const live = 'TRUE' === process.env.CLOUDFLARE_WORKERS_TEST_LIVE
    for (const op of ['create', 'list', 'update', 'load', 'remove']) {
      if (!live && maybeSkipControl(t, 'entityOp', 'issue.' + op, live)) return
    }

    
    const setup = basicSetup()
    if (setup.live) {
      return runLiveEntity(setup, {"active":true,"alias":{"field":{}},"fields":{"afterInactivitySeconds":{"a":true,"h":"After Inactivity Seconds","n":"afterInactivitySeconds","r":false,"t":"`$INTEGER`","key$":"afterInactivitySeconds","index$":0},"afterOccurrences":{"a":true,"h":"After Occurrences","n":"afterOccurrences","r":false,"t":"`$INTEGER`","key$":"afterOccurrences","index$":1},"enabled":{"a":true,"h":"Enabled","n":"enabled","r":false,"t":"`$BOOLEAN`","key$":"enabled","index$":2},"errors":{"a":true,"h":"Errors","n":"errors","r":true,"t":"`$ARRAY`","key$":"errors","index$":3},"id":{"a":true,"h":"Id","n":"id","r":false,"t":"`$STRING`","key$":"id","index$":4},"issueIds":{"a":true,"h":"Issue Ids","n":"issueIds","r":true,"t":"`$ARRAY`","key$":"issueIds","index$":5},"messages":{"a":true,"h":"Messages","n":"messages","r":true,"t":"`$ARRAY`","key$":"messages","index$":6},"name":{"a":true,"h":"Name","n":"name","r":false,"t":"`$STRING`","key$":"name","index$":7},"policyId":{"a":true,"h":"Policy Id","n":"policyId","r":true,"t":"`$STRING`","key$":"policyId","index$":8},"result":{"a":true,"h":"Result","n":"result","r":true,"t":"`$OBJECT`","key$":"result","index$":9},"result_info":{"a":true,"h":"Result Info","n":"result_info","r":true,"t":"`$OBJECT`","key$":"result_info","index$":10},"service":{"a":true,"h":"Service","n":"service","r":false,"t":"`$STRING`","key$":"service","index$":11},"status":{"a":true,"h":"Status","n":"status","r":false,"t":"`$STRING`","key$":"status","index$":12},"success":{"a":true,"h":"Success","n":"success","r":true,"t":"`$BOOLEAN`","key$":"success","index$":13},"title":{"a":true,"h":"Title","n":"title","r":false,"t":"`$STRING`","key$":"title","index$":14}},"id":{"field":"id","name":"id"},"name":"issue","op":{"create":{"input":"data","name":"create","points":[{"a":true,"co":{"id":"POST /accounts/{account_id}/workers/observability/issues/groups/{groupId}/members","source":"openapi3","version":2},"g":{"params":[{"a":true,"k":"param","n":"account_id","or":"account_id","r":true,"t":"`$STRING`","index$":0},{"a":true,"k":"param","n":"group_id","or":"group_id","r":true,"t":"`$STRING`","index$":1}]},"k":"http","m":"POST","o":"/accounts/{account_id}/workers/observability/issues/groups/{groupId}/members","q":{"exist":["account_id","group_id"]},"r":{"param":{"groupId":"group_id"}},"s":[{"lit":"accounts"},{"var":"account_id"},{"lit":"workers"},{"lit":"observability"},{"lit":"issues"},{"lit":"groups"},{"var":"group_id"},{"lit":"members"}],"t":{"req":"`reqdata`","res":"`body`"},"index$":0},{"a":true,"co":{"id":"POST /accounts/{account_id}/workers/observability/issues/{issueId}/notification-runs","source":"openapi3","version":2},"g":{"params":[{"a":true,"k":"param","n":"account_id","or":"account_id","r":true,"t":"`$STRING`","index$":0},{"a":true,"k":"param","n":"id","or":"issue_id","r":true,"t":"`$STRING`","index$":1}]},"k":"http","m":"POST","o":"/accounts/{account_id}/workers/observability/issues/{issueId}/notification-runs","q":{"$action":"notification_run","exist":["account_id","id"]},"r":{"param":{"issueId":"id"}},"s":[{"lit":"accounts"},{"var":"account_id"},{"lit":"workers"},{"lit":"observability"},{"lit":"issues"},{"var":"id"},{"lit":"notification-runs"}],"t":{"req":{"policyId":"`reqdata.policy_id`"},"res":"`body`"},"index$":1},{"a":true,"co":{"id":"POST /accounts/{account_id}/workers/observability/issues/automations","source":"openapi3","version":2},"g":{"params":[{"a":true,"k":"param","n":"account_id","or":"account_id","r":true,"t":"`$STRING`","index$":0}]},"k":"http","m":"POST","o":"/accounts/{account_id}/workers/observability/issues/automations","q":{"$action":"automation","exist":["account_id"]},"r":{},"s":[{"lit":"accounts"},{"var":"account_id"},{"lit":"workers"},{"lit":"observability"},{"lit":"issues"},{"lit":"automations"}],"t":{"req":{"afterInactivitySeconds":"`reqdata.after_inactivity_second`","afterOccurrences":"`reqdata.after_occurrence`","enabled":"`reqdata.enabled`","name":"`reqdata.name`","policyId":"`reqdata.policy_id`","service":"`reqdata.service`"},"res":"`body`"},"index$":2},{"a":true,"co":{"id":"POST /accounts/{account_id}/workers/observability/issues/groups","source":"openapi3","version":2},"g":{"params":[{"a":true,"k":"param","n":"account_id","or":"account_id","r":true,"t":"`$STRING`","index$":0}]},"k":"http","m":"POST","o":"/accounts/{account_id}/workers/observability/issues/groups","q":{"$action":"group","exist":["account_id"]},"r":{},"s":[{"lit":"accounts"},{"var":"account_id"},{"lit":"workers"},{"lit":"observability"},{"lit":"issues"},{"lit":"groups"}],"t":{"req":"`reqdata`","res":"`body`"},"index$":3}],"key$":"create"},"list":{"input":"data","name":"list","points":[{"a":true,"co":{"id":"GET /accounts/{account_id}/workers/observability/issues","source":"openapi3","version":2},"g":{"params":[{"a":true,"k":"param","n":"account_id","or":"account_id","r":true,"t":"`$STRING`","index$":0}],"query":[{"a":true,"k":"query","n":"order","or":"order","r":false,"t":"`$STRING`","index$":0},{"a":true,"k":"query","n":"order_by","or":"order_by","r":false,"t":"`$STRING`","index$":1},{"a":true,"k":"query","n":"page","or":"page","r":false,"t":"`$INTEGER`","index$":2},{"a":true,"k":"query","n":"per_page","or":"per_page","r":false,"t":"`$INTEGER`","index$":3},{"a":true,"k":"query","n":"search","or":"search","r":false,"t":"`$STRING`","index$":4},{"a":true,"k":"query","n":"service","or":"service","r":false,"t":"`$STRING`","index$":5},{"a":true,"k":"query","n":"status","or":"status","r":false,"t":"`$STRING`","index$":6},{"a":true,"k":"query","n":"type","or":"type","r":false,"t":"`$STRING`","index$":7}]},"k":"http","m":"GET","o":"/accounts/{account_id}/workers/observability/issues","q":{"exist":["account_id","order","order_by","page","per_page","search","service","status","type"]},"r":{},"s":[{"lit":"accounts"},{"var":"account_id"},{"lit":"workers"},{"lit":"observability"},{"lit":"issues"}],"t":{"req":"`reqdata`","res":"`body`"},"index$":0},{"a":true,"co":{"id":"GET /accounts/{account_id}/workers/observability/issues/{issueId}/occurrences","source":"openapi3","version":2},"g":{"params":[{"a":true,"k":"param","n":"account_id","or":"account_id","r":true,"t":"`$STRING`","index$":0},{"a":true,"k":"param","n":"id","or":"issue_id","r":true,"t":"`$STRING`","index$":1}],"query":[{"a":true,"k":"query","n":"cursor","or":"cursor","r":false,"t":"`$STRING`","index$":0},{"a":true,"k":"query","n":"per_page","or":"per_page","r":false,"t":"`$INTEGER`","index$":1}]},"k":"http","m":"GET","o":"/accounts/{account_id}/workers/observability/issues/{issueId}/occurrences","q":{"$action":"occurrence","exist":["account_id","cursor","id","per_page"]},"r":{"param":{"issueId":"id"}},"s":[{"lit":"accounts"},{"var":"account_id"},{"lit":"workers"},{"lit":"observability"},{"lit":"issues"},{"var":"id"},{"lit":"occurrences"}],"t":{"req":"`reqdata`","res":"`body`"},"index$":1},{"a":true,"co":{"id":"GET /accounts/{account_id}/workers/observability/issues/automations","source":"openapi3","version":2},"g":{"params":[{"a":true,"k":"param","n":"account_id","or":"account_id","r":true,"t":"`$STRING`","index$":0}],"query":[{"a":true,"k":"query","n":"service","or":"service","r":false,"t":"`$STRING`","index$":0}]},"k":"http","m":"GET","o":"/accounts/{account_id}/workers/observability/issues/automations","q":{"$action":"automation","exist":["account_id","service"]},"r":{},"s":[{"lit":"accounts"},{"var":"account_id"},{"lit":"workers"},{"lit":"observability"},{"lit":"issues"},{"lit":"automations"}],"t":{"req":"`reqdata`","res":"`body`"},"index$":2},{"a":true,"co":{"id":"GET /accounts/{account_id}/workers/observability/issues/summary","source":"openapi3","version":2},"g":{"params":[{"a":true,"k":"param","n":"account_id","or":"account_id","r":true,"t":"`$STRING`","index$":0}],"query":[{"a":true,"k":"query","n":"service","or":"service","r":false,"t":"`$STRING`","index$":0}]},"k":"http","m":"GET","o":"/accounts/{account_id}/workers/observability/issues/summary","q":{"$action":"summary","exist":["account_id","service"]},"r":{},"s":[{"lit":"accounts"},{"var":"account_id"},{"lit":"workers"},{"lit":"observability"},{"lit":"issues"},{"lit":"summary"}],"t":{"req":"`reqdata`","res":"`body`"},"index$":3}],"key$":"list"},"load":{"input":"data","name":"load","points":[{"a":true,"co":{"id":"GET /accounts/{account_id}/workers/observability/issues/automations/{automationId}","source":"openapi3","version":2},"g":{"params":[{"a":true,"k":"param","n":"account_id","or":"account_id","r":true,"t":"`$STRING`","index$":0},{"a":true,"k":"param","n":"automation_id","or":"automation_id","r":true,"t":"`$STRING`","index$":1}]},"k":"http","m":"GET","o":"/accounts/{account_id}/workers/observability/issues/automations/{automationId}","q":{"exist":["account_id","automation_id"]},"r":{"param":{"automationId":"automation_id"}},"s":[{"lit":"accounts"},{"var":"account_id"},{"lit":"workers"},{"lit":"observability"},{"lit":"issues"},{"lit":"automations"},{"var":"automation_id"}],"t":{"req":"`reqdata`","res":"`body`"},"index$":0},{"a":true,"co":{"id":"GET /accounts/{account_id}/workers/observability/issues/{issueId}","source":"openapi3","version":2},"g":{"params":[{"a":true,"k":"param","n":"account_id","or":"account_id","r":true,"t":"`$STRING`","index$":0},{"a":true,"k":"param","n":"id","or":"issue_id","r":true,"t":"`$STRING`","index$":1}]},"k":"http","m":"GET","o":"/accounts/{account_id}/workers/observability/issues/{issueId}","q":{"exist":["account_id","id"]},"r":{"param":{"issueId":"id"}},"s":[{"lit":"accounts"},{"var":"account_id"},{"lit":"workers"},{"lit":"observability"},{"lit":"issues"},{"var":"id"}],"t":{"req":"`reqdata`","res":"`body`"},"index$":1}],"key$":"load"},"patch":{"input":"data","name":"patch","points":[{"a":true,"co":{"id":"PATCH /accounts/{account_id}/workers/observability/issues/{issueId}","source":"openapi3","version":2},"g":{"params":[{"a":true,"k":"param","n":"account_id","or":"account_id","r":true,"t":"`$STRING`","index$":0},{"a":true,"k":"param","n":"id","or":"issue_id","r":true,"t":"`$STRING`","index$":1}]},"k":"http","m":"PATCH","o":"/accounts/{account_id}/workers/observability/issues/{issueId}","q":{"exist":["account_id","id"]},"r":{"param":{"issueId":"id"}},"s":[{"lit":"accounts"},{"var":"account_id"},{"lit":"workers"},{"lit":"observability"},{"lit":"issues"},{"var":"id"}],"t":{"req":"`reqdata`","res":"`body`"},"index$":0}],"key$":"patch"},"remove":{"input":"data","name":"remove","points":[{"a":true,"co":{"id":"DELETE /accounts/{account_id}/workers/observability/issues/groups/{groupId}/members/{issueId}","source":"openapi3","version":2},"g":{"params":[{"a":true,"k":"param","n":"account_id","or":"account_id","r":true,"t":"`$STRING`","index$":0},{"a":true,"k":"param","n":"group_id","or":"group_id","r":true,"t":"`$STRING`","index$":1},{"a":true,"k":"param","n":"issue_id","or":"issue_id","r":true,"t":"`$STRING`","index$":2}]},"k":"http","m":"DELETE","o":"/accounts/{account_id}/workers/observability/issues/groups/{groupId}/members/{issueId}","q":{"exist":["account_id","group_id","issue_id"]},"r":{"param":{"groupId":"group_id","issueId":"issue_id"}},"s":[{"lit":"accounts"},{"var":"account_id"},{"lit":"workers"},{"lit":"observability"},{"lit":"issues"},{"lit":"groups"},{"var":"group_id"},{"lit":"members"},{"var":"issue_id"}],"t":{"req":"`reqdata`","res":"`body`"},"index$":0},{"a":true,"co":{"id":"DELETE /accounts/{account_id}/workers/observability/issues/automations/{automationId}","source":"openapi3","version":2},"g":{"params":[{"a":true,"k":"param","n":"account_id","or":"account_id","r":true,"t":"`$STRING`","index$":0},{"a":true,"k":"param","n":"automation_id","or":"automation_id","r":true,"t":"`$STRING`","index$":1}]},"k":"http","m":"DELETE","o":"/accounts/{account_id}/workers/observability/issues/automations/{automationId}","q":{"exist":["account_id","automation_id"]},"r":{"param":{"automationId":"automation_id"}},"s":[{"lit":"accounts"},{"var":"account_id"},{"lit":"workers"},{"lit":"observability"},{"lit":"issues"},{"lit":"automations"},{"var":"automation_id"}],"t":{"req":"`reqdata`","res":"`body`"},"index$":1},{"a":true,"co":{"id":"DELETE /accounts/{account_id}/workers/observability/issues/groups/{groupId}","source":"openapi3","version":2},"g":{"params":[{"a":true,"k":"param","n":"account_id","or":"account_id","r":true,"t":"`$STRING`","index$":0},{"a":true,"k":"param","n":"group_id","or":"group_id","r":true,"t":"`$STRING`","index$":1}]},"k":"http","m":"DELETE","o":"/accounts/{account_id}/workers/observability/issues/groups/{groupId}","q":{"exist":["account_id","group_id"]},"r":{"param":{"groupId":"group_id"}},"s":[{"lit":"accounts"},{"var":"account_id"},{"lit":"workers"},{"lit":"observability"},{"lit":"issues"},{"lit":"groups"},{"var":"group_id"}],"t":{"req":"`reqdata`","res":"`body`"},"index$":2}],"key$":"remove"},"update":{"input":"data","name":"update","points":[{"a":true,"co":{"id":"PUT /accounts/{account_id}/workers/observability/issues/automations/{automationId}","source":"openapi3","version":2},"g":{"params":[{"a":true,"k":"param","n":"account_id","or":"account_id","r":true,"t":"`$STRING`","index$":0},{"a":true,"k":"param","n":"automation_id","or":"automation_id","r":true,"t":"`$STRING`","index$":1}]},"k":"http","m":"PUT","o":"/accounts/{account_id}/workers/observability/issues/automations/{automationId}","q":{"exist":["account_id","automation_id"]},"r":{"param":{"automationId":"automation_id"}},"s":[{"lit":"accounts"},{"var":"account_id"},{"lit":"workers"},{"lit":"observability"},{"lit":"issues"},{"lit":"automations"},{"var":"automation_id"}],"t":{"req":{"afterInactivitySeconds":"`reqdata.after_inactivity_second`","afterOccurrences":"`reqdata.after_occurrence`","enabled":"`reqdata.enabled`","name":"`reqdata.name`","policyId":"`reqdata.policy_id`","service":"`reqdata.service`"},"res":"`body`"},"index$":0}],"key$":"update"}},"relations":{"ancestors":[["$.main.kit.entity.account"],["$.main.kit.entity.account"],["$.main.kit.entity.account"],["$.main.kit.entity.account"]]},"key$":"issue","name__orig":"issue","Name":"Issue","name_":"issue","name-":"issue","NAME":"ISSUE","index$":18}, {"active":true,"entity":"issue","key$":"BasicIssueFlow","kind":"basic","name":"BasicIssueFlow","param":{},"step":[{"a":true,"d":{},"i":{"ref":"issue_ref01"},"m":{"account_id":"account01","group_id":"group01"},"o":"create","s":[],"v":[],"index$":0},{"a":true,"d":{},"i":{},"m":{"account_id":"account01"},"o":"list","s":[],"v":[{"apply":"ItemExists","def":{"ref":"issue_ref01"}}],"index$":1},{"a":true,"d":{"account_id":"account01"},"i":{"ref":"issue_ref01","srcdatavar":"issue_ref01_data","suffix":"_up0","textfield":"name"},"m":{},"o":"update","s":[{"apply":"TextFieldMark","def":{"mark":"Mark01-issue_ref01"}}],"v":[],"index$":2},{"a":true,"d":{},"i":{"ref":"issue_ref01","srcdatavar":"issue_ref01_data","suffix":"_dt0"},"m":{"account_id":"account01","id":"issue01"},"o":"load","s":[],"v":[{"apply":"TextFieldMark","def":{"mark":"Mark01-issue_ref01"}}],"index$":3},{"a":true,"d":{},"i":{"ref":"issue_ref01","suffix":"_rm0"},"m":{"account_id":"account01","id":"issue01"},"o":"remove","s":[],"v":[],"index$":4},{"a":true,"d":{},"i":{"suffix":"_rt0"},"m":{"account_id":"account01"},"o":"list","s":[],"v":[{"apply":"ItemNotExists","def":{"ref":"issue_ref01"}}],"index$":5}]}, 'Issue', {"POST /accounts/{account_id}/workers/observability/issues/groups/{groupId}/members":{"protocol":"http","requestBody":{"required":true,"content":{"application/json":{"schema":{"type":"object","properties":{"issueIds":{"type":"array","items":{"minLength":1,"type":"string"},"maxItems":100,"minItems":1,"key$":"issueIds"}},"required":["issueIds"],"index$":1}}}},"parameters":[{"name":"account_id","in":"path","description":"Your Cloudflare account ID.","required":true,"schema":{"type":"string"},"index$":0},{"name":"groupId","in":"path","required":true,"schema":{"type":"string","minLength":1},"index$":1}]},"POST /accounts/{account_id}/workers/observability/issues/{issueId}/notification-runs":{"protocol":"http","requestBody":{"required":true,"content":{"application/json":{"schema":{"type":"object","properties":{"policyId":{"type":"string","maxLength":200,"minLength":1}},"additionalProperties":false}}}},"parameters":[{"name":"account_id","in":"path","description":"Your Cloudflare account ID.","required":true,"schema":{"type":"string"},"index$":0},{"name":"issueId","in":"path","required":true,"schema":{"type":"string","minLength":1},"index$":1}]},"POST /accounts/{account_id}/workers/observability/issues/automations":{"protocol":"http","requestBody":{"required":true,"content":{"application/json":{"schema":{"type":"object","properties":{"afterInactivitySeconds":{"type":"integer","maximum":31536000,"minimum":3600},"afterOccurrences":{"type":"integer","maximum":9007199254740991,"minimum":1},"enabled":{"type":"boolean"},"name":{"type":"string","maxLength":200,"minLength":1},"policyId":{"type":"string","maxLength":200,"minLength":1},"service":{"type":"string","maxLength":128,"minLength":1}},"additionalProperties":false,"required":["policyId"]}}}},"parameters":[{"name":"account_id","in":"path","description":"Your Cloudflare account ID.","required":true,"schema":{"type":"string"},"index$":0}]},"POST /accounts/{account_id}/workers/observability/issues/groups":{"protocol":"http","requestBody":{"required":true,"content":{"application/json":{"schema":{"type":"object","properties":{"issueIds":{"type":"array","items":{"minLength":1,"type":"string"},"maxItems":100,"minItems":2},"title":{"type":"string","maxLength":128,"minLength":1}},"required":["title","issueIds"]}}}},"parameters":[{"name":"account_id","in":"path","description":"Your Cloudflare account ID.","required":true,"schema":{"type":"string"},"index$":0}]},"GET /accounts/{account_id}/workers/observability/issues":{"protocol":"http","parameters":[{"name":"account_id","in":"path","description":"Your Cloudflare account ID.","required":true,"schema":{"type":"string"},"index$":0},{"name":"page","in":"query","schema":{"type":"integer","minimum":1},"index$":1},{"name":"perPage","in":"query","schema":{"type":"integer","maximum":100,"minimum":1},"index$":2},{"name":"order","in":"query","schema":{"type":"string","enum":["asc","desc"]},"index$":3},{"name":"orderBy","in":"query","schema":{"type":"string","enum":["id","service","title","type","status","statusUpdated","count","firstObserved","lastObserved","created","updated"]},"index$":4},{"name":"search","in":"query","schema":{"type":"string","maxLength":256},"index$":5},{"name":"service","in":"query","schema":{"type":"string"},"index$":6},{"name":"type","in":"query","schema":{"type":"string","maxLength":32,"minLength":1},"index$":7},{"name":"status","in":"query","schema":{"type":"string","enum":["active","resolved","ignored"]},"index$":8}]},"GET /accounts/{account_id}/workers/observability/issues/{issueId}/occurrences":{"protocol":"http","parameters":[{"name":"account_id","in":"path","description":"Your Cloudflare account ID.","required":true,"schema":{"type":"string"},"index$":0},{"name":"issueId","in":"path","description":"Issue ID returned by the issues API.","required":true,"schema":{"description":"Issue ID returned by the issues API.","type":"string","minLength":1},"index$":1},{"name":"cursor","in":"query","description":"Opaque cursor returned in result_info.cursors.after.","schema":{"description":"Opaque cursor returned in result_info.cursors.after.","type":"string","maxLength":512,"minLength":1},"index$":2},{"name":"per_page","in":"query","schema":{"type":"integer","maximum":100,"minimum":1},"index$":3}]},"GET /accounts/{account_id}/workers/observability/issues/automations":{"protocol":"http","parameters":[{"name":"account_id","in":"path","description":"Your Cloudflare account ID.","required":true,"schema":{"type":"string"},"index$":0},{"name":"service","in":"query","schema":{"type":"string","maxLength":128,"minLength":1},"index$":1}]},"GET /accounts/{account_id}/workers/observability/issues/summary":{"protocol":"http","parameters":[{"name":"account_id","in":"path","description":"Your Cloudflare account ID.","required":true,"schema":{"type":"string"},"index$":0},{"name":"service","in":"query","schema":{"type":"string"},"index$":1}]},"GET /accounts/{account_id}/workers/observability/issues/automations/{automationId}":{"protocol":"http","parameters":[{"name":"account_id","in":"path","description":"Your Cloudflare account ID.","required":true,"schema":{"type":"string"},"index$":0},{"name":"automationId","in":"path","required":true,"schema":{"type":"string","minLength":1},"index$":1}]},"GET /accounts/{account_id}/workers/observability/issues/{issueId}":{"protocol":"http","parameters":[{"name":"account_id","in":"path","description":"Your Cloudflare account ID.","required":true,"schema":{"type":"string"},"index$":0},{"name":"issueId","in":"path","required":true,"schema":{"type":"string","minLength":1},"index$":1}]},"PATCH /accounts/{account_id}/workers/observability/issues/{issueId}":{"protocol":"http","requestBody":{"description":"Modify an issue status or group title.","required":true,"content":{"application/json":{"schema":{"type":"object","properties":{"status":{"type":"string","enum":["active","resolved","ignored"],"key$":"status"},"title":{"type":"string","maxLength":128,"minLength":1,"key$":"title"}},"index$":1}}}},"parameters":[{"name":"account_id","in":"path","description":"Your Cloudflare account ID.","required":true,"schema":{"type":"string"},"index$":0},{"name":"issueId","in":"path","required":true,"schema":{"type":"string","minLength":1},"index$":1}]},"DELETE /accounts/{account_id}/workers/observability/issues/groups/{groupId}/members/{issueId}":{"protocol":"http","parameters":[{"name":"account_id","in":"path","description":"Your Cloudflare account ID.","required":true,"schema":{"type":"string"},"index$":0},{"name":"groupId","in":"path","required":true,"schema":{"type":"string","minLength":1},"index$":1},{"name":"issueId","in":"path","required":true,"schema":{"type":"string","minLength":1},"index$":2}]},"DELETE /accounts/{account_id}/workers/observability/issues/automations/{automationId}":{"protocol":"http","parameters":[{"name":"account_id","in":"path","description":"Your Cloudflare account ID.","required":true,"schema":{"type":"string"},"index$":0},{"name":"automationId","in":"path","required":true,"schema":{"type":"string","minLength":1},"index$":1}]},"DELETE /accounts/{account_id}/workers/observability/issues/groups/{groupId}":{"protocol":"http","parameters":[{"name":"account_id","in":"path","description":"Your Cloudflare account ID.","required":true,"schema":{"type":"string"},"index$":0},{"name":"groupId","in":"path","required":true,"schema":{"type":"string","minLength":1},"index$":1}]},"PUT /accounts/{account_id}/workers/observability/issues/automations/{automationId}":{"protocol":"http","requestBody":{"required":true,"content":{"application/json":{"schema":{"type":"object","properties":{"afterInactivitySeconds":{"type":"integer","maximum":31536000,"minimum":3600,"key$":"afterInactivitySeconds"},"afterOccurrences":{"type":"integer","maximum":9007199254740991,"minimum":1,"key$":"afterOccurrences"},"enabled":{"type":"boolean","key$":"enabled"},"name":{"type":"string","maxLength":200,"minLength":1,"key$":"name"},"policyId":{"type":"string","maxLength":200,"minLength":1,"key$":"policyId"},"service":{"type":"string","maxLength":128,"minLength":1,"key$":"service"}},"additionalProperties":false,"required":["policyId"],"index$":1}}}},"parameters":[{"name":"account_id","in":"path","description":"Your Cloudflare account ID.","required":true,"schema":{"type":"string"},"index$":0},{"name":"automationId","in":"path","required":true,"schema":{"type":"string","minLength":1},"index$":1}]}})
    }
    const client = setup.client
    const struct = setup.struct

    const isempty = struct.isempty
    const select = struct.select


    // CREATE
    const issue_ref01_ent = client.Issue()
    let issue_ref01_data = setup.data.new.issue['issue_ref01']
    issue_ref01_data['account_id'] = setup.idmap['account01']
    issue_ref01_data['group_id'] = setup.idmap['group01']

    issue_ref01_data = (await issue_ref01_ent.create(issue_ref01_data)).data()
    assert(null != issue_ref01_data.id)


    // LIST
    const issue_ref01_match: any = {}
    issue_ref01_match['account_id'] = setup.idmap['account01']

    const issue_ref01_list = (await issue_ref01_ent.list(issue_ref01_match)).map((e: any) => e.data())

    assert(!isempty(select(issue_ref01_list, { id: issue_ref01_data.id })))


    // UPDATE
    const issue_ref01_data_up0: any = {}
    issue_ref01_data_up0.id = issue_ref01_data.id
    issue_ref01_data_up0 ['account_id'] = setup.idmap['account_id']

    const issue_ref01_markdef_up0 = { name: 'name', value: 'Mark01-issue_ref01_' + setup.now }
    ;(issue_ref01_data_up0 as any)[issue_ref01_markdef_up0.name] = issue_ref01_markdef_up0.value

    const issue_ref01_resdata_up0 = (await issue_ref01_ent.update(issue_ref01_data_up0)).data()
    assert(issue_ref01_resdata_up0.id === issue_ref01_data_up0.id)

    assert((issue_ref01_resdata_up0 as any)[issue_ref01_markdef_up0.name] === issue_ref01_markdef_up0.value)


    // LOAD
    const issue_ref01_match_dt0: any = {}
    issue_ref01_match_dt0.id = issue_ref01_data.id
    const issue_ref01_data_dt0 = (await issue_ref01_ent.load(issue_ref01_match_dt0)).data()
    assert(issue_ref01_data_dt0.id === issue_ref01_data.id)


    // REMOVE
    const issue_ref01_match_rm0: any = { id: issue_ref01_data.id }
    await issue_ref01_ent.remove(issue_ref01_match_rm0)
  

    // LIST
    const issue_ref01_match_rt0: any = {}
    issue_ref01_match_rt0['account_id'] = setup.idmap['account01']

    const issue_ref01_list_rt0 = (await issue_ref01_ent.list(issue_ref01_match_rt0)).map((e: any) => e.data())

    assert(isempty(select(issue_ref01_list_rt0, { id: issue_ref01_data.id })))


  })
})



function basicSetup(extra?: any) {
  // TODO: fix test def options
  const options: any = {} // null

  // TODO: needs test utility to resolve path
  const entityDataFile =
    Path.resolve(__dirname, 
      '../../../../.sdk/test/entity/issue/IssueTestData.json')

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
    ['issue01','issue02','issue03','account01','account02','account03','group01'],
    {
      '`$PACK`': ['', {
        '`$KEY`': '`$COPY`',
        '`$VAL`': ['`$FORMAT`', 'upper', '`$COPY`']
      }]
    })

  const env = envOverride({
    'CLOUDFLARE_WORKERS_TEST_ISSUE_ENTID': idmap,
    'CLOUDFLARE_WORKERS_TEST_LIVE': 'FALSE',
    'CLOUDFLARE_WORKERS_TEST_EXPLAIN': 'FALSE',
    'CLOUDFLARE_WORKERS_APIKEY': '',
  })

  idmap = env['CLOUDFLARE_WORKERS_TEST_ISSUE_ENTID']

  const live = 'TRUE' === env.CLOUDFLARE_WORKERS_TEST_LIVE

  const transport = createLiveTransport()
  if (live) {
    const rawIds = process.env['CLOUDFLARE_WORKERS_TEST_ISSUE_ENTID']
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
  
