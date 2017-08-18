import Serializable from './serializable.js'

class Primitive extends Serializable {
  constructor (size) {
    super()
    this._size = size
  }

  size () {
    return this._size / 8
  }
}

export default Primitive
