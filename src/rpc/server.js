/* eslint-env serviceworker */

class RpcServer {
  constructor (handlers) {
    this.handlers = handlers
    this.listen()
  }

  listen () {
    self.addEventListener('message', this.handler.bind(this))
  }

  handler (e) {
    var { method, uid, data } = e.data
    if (this.handlers[method]) {
      self.postMessage({
        method,
        uid,
        data: this.handlers[method](data)
      })
    }
  }

  emit (eventName, data) {
    self.postMessage({
      eventName,
      data
    })
  }
}

export default RpcServer
