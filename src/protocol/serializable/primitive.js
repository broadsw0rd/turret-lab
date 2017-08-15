import Serializable from './serializable.js'

class Primitive extends Serializable {
  constructor (size) {
    super()
    this.size = size
  }

  get SIZE () {
    return this.size / 8
  }
}

export default Primitive
