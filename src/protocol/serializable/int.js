import Primitive from './primitive.js'

class Int extends Primitive {
  serialize (view, offset, value) {
    switch (this.size) {
      case 8: return view.setInt8(offset, value)
      case 16: return view.setInt16(offset, value)
      case 32: return view.setInt32(offset, value)
    }
  }

  deserialize (view, offset) {
    switch (this.size) {
      case 8: return view.getInt8(offset)
      case 16: return view.getInt16(offset)
      case 32: return view.getInt32(offset)
    }
  }
}

export default Int
