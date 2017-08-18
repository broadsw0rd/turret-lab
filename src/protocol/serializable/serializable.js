class Serializable {
  size () {
    throw new Error('Serializable#size() should be implemented')
  }

  serialize (view, offset, value) {
    throw new Error('Serializable#serialize() should be implemented')
  }

  deserialize (view, offset) {
    throw new Error('Serializable#deserialize() should be implemented')
  }
}

export default Serializable
