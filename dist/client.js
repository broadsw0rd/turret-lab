(function (global, factory) {
	typeof exports === 'object' && typeof module !== 'undefined' ? factory() :
	typeof define === 'function' && define.amd ? define(factory) :
	(factory());
}(this, (function () { 'use strict';

class RpcClient {
  constructor ({ worker }) {
    this.worker = worker;
    this.events = {};
    this.calls = {};
    this.timeouts = {};
    this.listen();
  }

  listen () {
    this.worker.addEventListener('message', this.handler.bind(this));
  }

  handler (e) {
    var { method, eventName, data, uuid } = e.data;
    if (method) {
      this.resolve(uuid, data);
    }
    if (eventName) {
      this.trigger(eventName, data);
    }
  }

  call (method, data, { timeout = 2000 } = {}) {
    var uuid = this.getUuid();
    this.worker.postMessage({ method, uuid, data });
    return new Promise((resolve, reject) => {
      this.timeouts[uuid] = setTimeout(() => reject(new Error(`Timeout exceeded for '${method}' call`)), timeout);
      this.calls[uuid] = resolve;
    })
  }

  getUuid () {
    return Math.floor((1 + Math.random()) * 1e6).toString(16)
  }

  resolve (uuid, data) {
    if (this.calls[uuid]) {
      clearTimeout(this.timeouts[uuid]);
      this.calls[uuid](data);
    }
  }

  on (eventName, handler) {
    (this.events[eventName] = this.events[eventName] || []).push(handler);
  }

  off (eventName, handler) {
    var idx = (this.events[eventName] || []).indexOf(handler);
    if (idx !== -1) {
      this.events[eventName].splice(idx, 1);
    }
  }

  trigger (eventName, data) {
    var handlers = this.events[eventName];
    for (var i = 0; i < handlers.length; i++) {
      handlers[i](data);
    }
  }
}

var worker = new window.Worker('dist/server.js');

var rpcClient = window.rpcClient = new RpcClient({ worker });

rpcClient.on('event', (data) => {
  console.log('event', data);
});

function add () {
  var x = Math.floor(Math.random() * 100);
  var y = Math.floor(Math.random() * 100);

  rpcClient.call('add', { x, y, time: Date.now() })
    .then(({ result, time }) => {
      console.log(`Response add ${x} + ${y} = ${result}: ${Date.now() - time}`);
    });
}

function sub () {
  var x = Math.floor(Math.random() * 100);
  var y = Math.floor(Math.random() * 100);

  rpcClient.call('sub', { x, y, time: Date.now() })
    .then(({ result, time }) => {
      console.log(`Response sub ${x} - ${y} = ${result}: ${Date.now() - time}`);
    });
}

function mul () {
  var x = Math.floor(Math.random() * 100);
  var y = Math.floor(Math.random() * 100);

  rpcClient.call('mul', { x, y, time: Date.now() })
    .then(({ result, time }) => {
      console.log(`Response mul ${x} * ${y} = ${result}: ${Date.now() - time}`);
    });
}

function div () {
  var x = Math.floor(Math.random() * 100);
  var y = Math.floor(Math.random() * 100);

  rpcClient.call('div', { x, y, time: Date.now() })
    .then(({ result, time }) => {
      console.log(`Response div ${x} / ${y} = ${result}: ${Date.now() - time}`);
    });
}

function call () {
  var method = Math.floor(Math.random() * 4);
  switch (method) {
    case 0: add(); return
    case 1: sub(); return
    case 2: mul(); return
    case 3: div();
  }
}

setInterval(call, 1000);
setInterval(call, 2000);
setInterval(call, 3000);

})));
