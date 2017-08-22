import Primitive from './primitive.js'

class Bool extends Primitive {
  constructor () {
    super(8)
  }

  serialize (view, offset, value) {
    view.setUint8(offset, Number(value))
  }

  deserialize (view, offset) {
    return Boolean(view.getUint8(offset))
  }
}

export default Bool
