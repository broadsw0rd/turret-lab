import Primitive from './primitive.js'

class Char extends Primitive {
  constructor (length) {
    super(length * 16)
    this.length = length
  }

  serialize (view, offset, value) {
    for (var i = 0; i < this.length; i++) {
      if (i < value.length) {
        view.setUint16(offset += 2, value.charCodeAt(i))
      } else {
        break
      }
    }
  }

  deserialize (view, offset) {
    var chars = []
    for (var i = 0; i < this.length; i++) {
      var value = view.getUint16(offset += 2)
      if (value !== 0) {
        chars.push(value)
      } else {
        break
      }
    }
    return String.fromCharCode(...chars)
  }
}

export default Char
