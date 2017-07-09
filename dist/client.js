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
    var { method, eventName, data, uid } = e.data;
    if (method) {
      this.resolve(uid, data);
    }
    if (eventName) {
      this.trigger(eventName, data);
    }
  }

  call (method, data, { timeout = 2000 } = {}) {
    var uid = this.guid();
    this.worker.postMessage({ method, uid, data });
    return new Promise((resolve, reject) => {
      this.timeouts[uid] = setTimeout(() => reject(new Error(`RPC timeout exceeded for '${method}' call`)), timeout);
      this.calls[uid] = resolve;
    })
  }

  guid () {
    return Math.floor((1 + Math.random()) * 1e6).toString(16)
  }

  resolve (uid, data) {
    if (this.calls[uid]) {
      clearTimeout(this.timeouts[uid]);
      this.calls[uid](data);
      delete this.timeouts[uid];
      delete this.calls[uid];
    }
  }

  on (eventName, handler) {
    var handlers = this.events[eventName] || [];(this.events[eventName] = handlers).push(handler);
  }

  off (eventName, handler) {
    var handlers = this.events[eventName] || [];
    var idx = handlers.indexOf(handler);
    if (idx !== -1) {
      this.events[eventName].splice(idx, 1);
    }
  }

  trigger (eventName, data) {
    var handlers = this.events[eventName] || [];
    for (var i = 0; i < handlers.length; i++) {
      handlers[i](data);
    }
  }
}

var worker = new window.Worker('dist/server.js');

var rpcClient = window.rpcClient = new RpcClient({ worker });

function fib () {
  var n = Math.floor(Math.random() * 1000);

  rpcClient.call('fib', n)
    .then((result) => {
      console.log(`Response fib(${n}) = ${result}`);
    });
}

function fac () {
  var n = Math.floor(Math.random() * 1000);

  rpcClient.call('fac', n)
    .then((result) => {
      console.log(`Response fac(${n}) = ${result}`);
    });
}

function call () {
  var method = Math.floor(Math.random() * 2);
  switch (method) {
    case 0: fib(); return
    case 1: fac();
  }
}

setInterval(call, 1000);
setInterval(call, 2000);
setInterval(call, 3000);

})));
