import Pitmitive from './primitive.js'

class Float extends Primitive {
  serialize (view, offset, value) {
    switch (this.size) {
      case 32: return view.setFloat32(offset, value)
      case 64: return view.setFloat64(offset, value)
    }
  }

  deserialize (view, offset) {
    switch (this.size) {
      case 32: return this.view.getFloat32(offset)
      case 64: return this.view.getFloat64(offset)
    }
  }
}

export class Float
