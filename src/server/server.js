/* eslint-env serviceworker */

import RpcServer from '../rpc/server.js'

self.rpcServer = new RpcServer({
  fib (n) {
    var a = 1
    var b = 0

    for (var i = n; i--;) {
      b = [a, a += b][0]
    }

    return b
  },

  fac (n) {
    var f = 1

    for (var i = 2; i <= n; i++) {
      f *= i
    }

    return f
  }
})
