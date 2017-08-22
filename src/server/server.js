/* eslint-env serviceworker */

import RpcServer from '../rpc/server.js'

import TestData from '../serializers/test-data.js'

import { testDataSerializer } from '../serializers'

var testData = TestData.generate(10000)

self.rpcServer = new RpcServer({
  serialized () {
    var result = testDataSerializer.serialize(testData)
    return {
      testData: result
    }
  },

  copied () {
    return {
      testData
    }
  },

  emit () {
    self.rpcServer.emit('testData', testData)
  }
})
