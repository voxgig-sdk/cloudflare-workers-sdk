
import { test, describe } from 'node:test'
import { equal } from 'node:assert'


import { CloudflareWorkersSDK } from '..'


describe('exists', async () => {

  test('test-mode', () => {
    const testsdk = CloudflareWorkersSDK.test()
    equal(testsdk instanceof CloudflareWorkersSDK, true,
      'CloudflareWorkersSDK.test() must return a client synchronously')
  })

})
