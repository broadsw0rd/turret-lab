import RpcClient from '../rpc/client.js'

var worker = new window.Worker('dist/server.js')

var rpcClient = window.rpcClient = new RpcClient({ worker })

function fib () {
  var n = Math.floor(Math.random() * 1000)

  rpcClient.call('fib', n)
    .then((result) => {
      console.log(`Response fib(${n}) = ${result}`)
    })
}

function fac () {
  var n = Math.floor(Math.random() * 1000)

  rpcClient.call('fac', n)
    .then((result) => {
      console.log(`Response fac(${n}) = ${result}`)
    })
}

function call () {
  var method = Math.floor(Math.random() * 2)
  switch (method) {
    case 0: fib(); return
    case 1: fac()
  }
}

setInterval(call, 1000)
setInterval(call, 2000)
setInterval(call, 3000)
