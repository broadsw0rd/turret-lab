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
    var size = this.type.size()
    for (var i = 0; i < list.length; i++) {
      this.type.serialize(view, offset, list[i])
      offset += size
    }
    return buffer
  }

  deserialize (buffer) {
    var factory = this.factory
    var type = this.type
    var size = type.size()
    var length = buffer.byteLength / size
    var view = new DataView(buffer)
    var offset = 0
    var result = Array(length)
    for (var i = 0; i < length; i++) {
      result[i] = factory(type.deserialize(view, offset))
      offset += size
    }
    return result
  }
}

export default Serializer
