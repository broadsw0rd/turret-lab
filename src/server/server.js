/* eslint-env serviceworker */

import RpcServer from '../rpc/server.js'

function delay (time) {
  return new Promise((resolve) => setTimeout(resolve, time))
}

self.rpcServer = new RpcServer({
  add ({ x, y, time }) {
    console.log(`Request add ${x} + ${y}: ${Date.now() - time}`)
    return delay(Math.floor(Math.random() * 4000))
      .then(() => {
        return {
          result: x + y,
          time: Date.now()
        }
      })
  },

  sub ({ x, y, time }) {
    console.log(`Request sub ${x} - ${y}: ${Date.now() - time}`)
    return delay(Math.floor(Math.random() * 4000))
      .then(() => {
        return {
          result: x - y,
          time: Date.now()
        }
      })
  },

  mul ({ x, y, time }) {
    console.log(`Request mull ${x} * ${y}: ${Date.now() - time}`)
    return delay(Math.floor(Math.random() * 4000))
      .then(() => {
        return {
          result: x * y,
          time: Date.now()
        }
      })
  },

  div ({ x, y, time }) {
    console.log(`Request div ${x} / ${y}: ${Date.now() - time}`)
    return delay(Math.floor(Math.random() * 4000))
      .then(() => {
        return {
          result: x / y,
          time: Date.now()
        }
      })
  }
})

setInterval(() => {
  self.rpcServer.emit('event', Math.random())
}, 4000)
