import Serializable from './serializable.js'

class List extends Serializable {
  constructor (type, length) {
    super()
    this.type = type
    this.length = length
    this._size = length * type.size()
  }

  size () {
    return this._size
  }

  serialize (view, offset, value) {
    var size = this.type.size()
    for (var i = 0; i < this.length; i++) {
      this.type.serialize(view, offset, value[i])
      offset += size
    }
  }

  deserialize (view, offset) {
    var size = this.type.size()
    var result = Array(this.length)
    for (var i = 0; i < this.length; i++) {
      result[i] = this.type.deserialize(view, offset)
      offset += size
    }
    return result
  }
}

export default List
