import Serializable from './serializable.js'

class Struct extends Serializable {
  constructor (schema) {
    super()
    this.schema = schema
    this.keys = Object.keys(schema)
    this._size = this.size()
  }

  get SIZE () {
    return this._size
  }

  size () {
    var size = 0
    for (var i = 0; i < this.keys.length; i++) {
      size += this.schema[this.keys[i]].SIZE
    }
    return size
  }

  serialize (view, offset, value) {
    for (var i = 0; i < this.keys.length; i++) {
      var key = this.keys[i]
      var type = this.schema[key]
      type.serialize(view, offset, value[key])
      offset += type.SIZE
    }
  }

  deserialize (view, offset) {
    var result = {}
    for (var i = 0; i < this.keys.length; i++) {
      var key = this.keys[i]
      var type = this.schema[key]
      result[key] = type.deserialize(view, offset)
      offset += type.SIZE
    }
    return result
  }
}

export default Struct
