import Primitive from './primitive.js'

class Int extends Primitive {
  serialize (view, offset, value) {
    switch (this._size) {
      case 1: view.setInt8(offset, value); break
      case 2: view.setInt16(offset, value); break
      case 4: view.setInt32(offset, value); break
    }
  }

  deserialize (view, offset, target, key) {
    switch (this._size) {
      case 1: return view.getInt8(offset)
      case 2: return view.getInt16(offset)
      case 4: return view.getInt32(offset)
    }
  }
}

export default Int
