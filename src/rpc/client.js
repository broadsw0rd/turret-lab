class RpcClient {
  constructor ({ worker }) {
    this.worker = worker
    this.events = {}
    this.calls = {}
    this.timeouts = {}
    this.listen()
  }

  listen () {
    this.worker.addEventListener('message', this.handler.bind(this))
  }

  handler (e) {
    var { method, eventName, data, uuid } = e.data
    if (method) {
      this.resolve(uuid, data)
    }
    if (eventName) {
      this.trigger(eventName, data)
    }
  }

  call (method, data, { timeout = 2000 } = {}) {
    var uuid = this.getUuid()
    this.worker.postMessage({ method, uuid, data })
    return new Promise((resolve, reject) => {
      this.timeouts[uuid] = setTimeout(() => reject(new Error(`Timeout exceeded for '${method}' call`)), timeout)
      this.calls[uuid] = resolve
    })
  }

  getUuid () {
    return Math.floor((1 + Math.random()) * 1e6).toString(16)
  }

  resolve (uuid, data) {
    if (this.calls[uuid]) {
      clearTimeout(this.timeouts[uuid])
      this.calls[uuid](data)
    }
  }

  on (eventName, handler) {
    var handlers = this.events[eventName] || []
    ;(this.events[eventName] = handlers).push(handler)
  }

  off (eventName, handler) {
    var handlers = this.events[eventName] || []
    var idx = handlers.indexOf(handler)
    if (idx !== -1) {
      this.events[eventName].splice(idx, 1)
    }
  }

  trigger (eventName, data) {
    var handlers = this.events[eventName] || []
    for (var i = 0; i < handlers.length; i++) {
      handlers[i](data)
    }
  }
}

export default RpcClient
