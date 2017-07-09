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
      Promise.all([method, uid, this.handlers[method](data)]).then(this.reply);
    }
  }

  reply ([method, uid, data]) {
    self.postMessage({ method, uid, data });
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
  fib (n) {
    var a = 1;
    var b = 0;

    for (var i = n; i--;) {
      b = [a, a += b][0];
    }

    return b
  },

  fac (n) {
    var f = 1;

    for (var i = 2; i <= n; i++) {
      f *= i;
    }

    return f
  }
});

}());
