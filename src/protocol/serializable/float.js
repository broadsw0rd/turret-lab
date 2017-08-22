import Primitive from './primitive.js'

class Float extends Primitive {
  serialize (view, offset, value) {
    switch (this._size) {
      case 4: view.setFloat32(offset, value); break
      case 8: view.setFloat64(offset, value); break
    }
  }

  deserialize (view, offset) {
    switch (this._size) {
      case 4: return view.getFloat32(offset)
      case 8: return view.getFloat64(offset)
    }
  }
}

export default Float
