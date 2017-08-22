import Serializable from './serializable.js'

class Primitive extends Serializable {
  constructor (size) {
    super()
    this._size = size / 8
  }

  size () {
    return this._size
  }
}

export default Primitive
