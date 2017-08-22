import RpcClient from '../rpc/client.js'
import TestData from '../serializers/test-data.js'
import { testDataSerializer } from '../serializers/index.js'

var worker = new window.Worker('dist/server.js')

var rpcClient = window.rpcClient = new RpcClient({ worker })

function end (result) {
  console.profileEnd()
  console.timeEnd()
  console.log(result)
}

function deserialize ({ testData }) {
  return testDataSerializer.deserialize(testData)
}

function parse ({ testData }) {
  var result = Array(testData.length)
  for (var i = 0; i < testData.length; i++) {
    result[i] = TestData.create(testData[i])
  }
  return result
}

window.serialized = function serialized () {
  console.time()
  console.profile()
  rpcClient.call('serialized')
    .then(deserialize)
    .then(end)
}

window.copied = function copied () {
  console.time()
  console.profile()
  rpcClient.call('copied')
    .then(parse)
    .then(end)
}
