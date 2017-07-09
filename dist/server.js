(function () {
'use strict';

/* eslint-env serviceworker */

class RpcServer {
  constructor (handlers) {
    this.handlers = handlers;
    this.listen();
  }

  listen () {
    self.addEventListener('message', this.handler.bind(this));
  }

  handler (e) {
    var { method, uid, data } = e.data;
    if (this.handlers[method]) {
      self.postMessage({
        method,
        uid,
        data: this.handlers[method](data)
      });
    }
  }

  emit (eventName, data) {
    self.postMessage({
      eventName,
      data
    });
  }
}

/* eslint-env serviceworker */

self.rpcServer = new RpcServer({
  add ({ x, y, time }) {
    console.log(`Request add ${x} + ${y}: ${Date.now() - time}`);
    return {
      result: x + y,
      time: Date.now()
    }
  },

  sub ({ x, y, time }) {
    console.log(`Request sub ${x} - ${y}: ${Date.now() - time}`);
    return {
      result: x - y,
      time: Date.now()
    }
  },

  mul ({ x, y, time }) {
    console.log(`Request mull ${x} * ${y}: ${Date.now() - time}`);
    return {
      result: x * y,
      time: Date.now()
    }
  },

  div ({ x, y, time }) {
    console.log(`Request div ${x} / ${y}: ${Date.now() - time}`);
    return {
      result: x / y,
      time: Date.now()
    }
  }
});

setInterval(() => {
  self.rpcServer.emit('event', Math.random());
}, 2000);

}());
