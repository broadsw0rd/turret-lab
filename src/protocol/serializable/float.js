import Primitive from './primitive.js'

class Float extends Primitive {
  serialize (view, offset, value) {
    switch (this.size) {
      case 32: return view.setFloat32(offset, value)
      case 64: return view.setFloat64(offset, value)
    }
  }

  deserialize (view, offset) {
    switch (this.size) {
      case 32: return view.getFloat32(offset)
      case 64: return view.getFloat64(offset)
    }
  }
}

export default Float
