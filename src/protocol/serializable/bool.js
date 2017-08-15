import Uint from './uint.js'

class Bool extends Uint {
  constructor () {
    super(8)
  }

  serialize (view, offset, value) {
    return super.serialize(view, offset, Number(value))
  }

  deserialize (view, offset) {
    return Boolean(super.deserialize(view, offset))
  }
}

export default Bool
