import Serializable from './serializable.js'

class List extends Serializable {
  constructor (type, length) {
    super()
    this.type = type
    this.length = length
    this._size = length * type.SIZE
  }

  get SIZE () {
    return this._size
  }

  serialize (view, offset, value) {
    for (var i = 0; i < this.length; i++) {
      this.type.serialize(view, offset, value[i])
      offset += this.type.SIZE
    }
  }

  deserialize (view, offset) {
    var result = Array(this.length)
    for (var i = 0; i < this.length; i++) {
      result[i] = this.type.deserialize(view, offset)
      offset += this.type.SIZE
    }
    return result
  }
}

export default List
