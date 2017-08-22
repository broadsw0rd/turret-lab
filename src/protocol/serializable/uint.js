import Primitive from './primitive.js'

class Uint extends Primitive {
  serialize (view, offset, value) {
    switch (this._size) {
      case 1: view.setUint8(offset, value); break
      case 2: view.setUint16(offset, value); break
      case 4: view.setUint32(offset, value); break
    }
  }

  deserialize (view, offset) {
    switch (this._size) {
      case 1: return view.getUint8(offset)
      case 2: return view.getUint16(offset)
      case 4: return view.getUint32(offset)
    }
  }
}

export default Uint
