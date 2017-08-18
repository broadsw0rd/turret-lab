import Vector from 'vectory'

import RpcClient from '../rpc/client.js'
import { vectorSerializer } from '../serializers/index.js'

var worker = new window.Worker('dist/server.js')

var rpcClient = window.rpcClient = new RpcClient({ worker })

function end (result) {
  console.profileEnd()
  console.timeEnd()
  console.log(result)
}

function deserialize ({ vectors }) {
  return vectorSerializer.deserialize(vectors)
}

function parse ({ vectors }) {
  var result = Array(vectors.length)
  for (var i = 0; i < vectors.length; i++) {
    result[i] = Vector.from(vectors[i])
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
