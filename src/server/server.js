/* eslint-env serviceworker */

import RpcServer from '../rpc/server.js'

import { vectorSerializer } from '../serializers'
import { frand } from '../utils/random.js'

var vectors = Array(1e2)
for (var i = 0; i < vectors.length; i++) {
  vectors[i] = [frand(), frand()]
}

self.rpcServer = new RpcServer({
  serialized () {
    var result = vectorSerializer.serialize(vectors)
    return {
      vectors: result
    }
  },

  copied () {
    return {
      vectors
    }
  }
})
