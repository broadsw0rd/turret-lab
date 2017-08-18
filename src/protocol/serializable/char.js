import Primitive from './primitive.js'

class Char extends Primitive {
  size () {
    return this._size
  }

  serialize (view, offset, value) {
    for (var i = 0; i < this.size; i++) {
      if (i < value.length) {
        view.setUint8(offset + i, value.charCodeAt(i))
      } else {
        view.setUint8(offset + i, 0)
      }
    }
  }

  deserialize (view, offset) {
    var str = ''
    for (var i = 0; i < this.size; i++) {
      var value = view.getUint8(offset + i)
      if (value !== 0) {
        str += String.fromCharCode(value)
      } else {
        break
      }
    }
    return str
  }
}

export default Char
