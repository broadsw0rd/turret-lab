function id (el) { return el }

class Serializer {
  constructor ({ factory = id, type }) {
    this.factory = factory
    this.type = type
  }

  serialize (list) {
    var buffer = new ArrayBuffer(this.type.SIZE * list.length)
    var view = new DataView(buffer)
    var offset = 0
    for (var i = 0; i < list.length; i++) {
      this.type.serialize(view, offset, list[i])
      offset += this.type.SIZE
    }
    return buffer
  }

  deserialize (buffer) {
    var length = buffer.byteLength / this.type.SIZE
    var view = new DataView(buffer)
    var offset = 0
    var result = Array(length)
    for (var i = 0; i < length; i++) {
      result[i] = this.factory(this.type.deserialize(view, offset))
      offset += this.type.SIZE
    }
    return result
  }
}

export default Serializer
