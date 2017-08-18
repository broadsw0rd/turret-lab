function id (el) { return el }

class Serializer {
  constructor ({ factory = id, type }) {
    this.factory = factory
    this.type = type
  }

  serialize (list) {
    var buffer = new ArrayBuffer(this.type.size() * list.length)
    var view = new DataView(buffer)
    var offset = 0
    for (var i = 0; i < list.length; i++) {
      this.type.serialize(view, offset, list[i])
      offset += this.type.size()
    }
    return buffer
  }

  deserialize (buffer) {
    var length = buffer.byteLength / this.type.size()
    var view = new DataView(buffer)
    var offset = 0
    var result = Array(length)
    for (var i = 0; i < length; i++) {
      result[i] = this.factory(this.type.deserialize(view, offset))
      offset += this.type.size()
    }
    return result
  }
}

export default Serializer
