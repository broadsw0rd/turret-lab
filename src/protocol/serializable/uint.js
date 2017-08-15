import Primitive from './primitive.js'

class Uint extends Primitive {
  serialize (view, offset, value) {
    switch (this.size) {
      case 8: return view.setUint8(offset, value)
      case 16: return view.setUint16(offset, value)
      case 32: return view.setUint32(offset, value)
    }
  }

  deserialize (view, offset) {
    switch (this.size) {
      case 8: return view.getUint8(offset)
      case 16: return view.getUint16(offset)
      case 32: return view.getUint32(offset)
    }
  }
}

export default Uint
