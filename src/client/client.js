import RpcClient from '../rpc/client.js'

var worker = new window.Worker('dist/server.js')

var rpcClient = window.rpcClient = new RpcClient({ worker })

rpcClient.on('event', (data) => {
  console.log('event', data)
})

function add () {
  var x = Math.floor(Math.random() * 100)
  var y = Math.floor(Math.random() * 100)

  rpcClient.call('add', { x, y, time: Date.now() })
    .then(({ result, time }) => {
      console.log(`Response add ${x} + ${y} = ${result}: ${Date.now() - time}`)
    })
}

function sub () {
  var x = Math.floor(Math.random() * 100)
  var y = Math.floor(Math.random() * 100)

  rpcClient.call('sub', { x, y, time: Date.now() })
    .then(({ result, time }) => {
      console.log(`Response sub ${x} - ${y} = ${result}: ${Date.now() - time}`)
    })
}

function mul () {
  var x = Math.floor(Math.random() * 100)
  var y = Math.floor(Math.random() * 100)

  rpcClient.call('mul', { x, y, time: Date.now() })
    .then(({ result, time }) => {
      console.log(`Response mul ${x} * ${y} = ${result}: ${Date.now() - time}`)
    })
}

function div () {
  var x = Math.floor(Math.random() * 100)
  var y = Math.floor(Math.random() * 100)

  rpcClient.call('div', { x, y, time: Date.now() })
    .then(({ result, time }) => {
      console.log(`Response div ${x} / ${y} = ${result}: ${Date.now() - time}`)
    })
}

function call () {
  var method = Math.floor(Math.random() * 4)
  switch (method) {
    case 0: add(); return
    case 1: sub(); return
    case 2: mul(); return
    case 3: div()
  }
}

setInterval(call, 1000)
setInterval(call, 2000)
setInterval(call, 3000)
