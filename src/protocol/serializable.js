export class Serializable {
  get SIZE () {
    throw new Error('Serializable#SIZE should be implemented')
  }

  serialize (view, offset, value) {
    throw new Error('Serializable#serialize() should be implemented')
  }

  deserialize (view, offset) {
    throw new Error('Serializable#deserialize() should be implemented')
  }
}

export class Primitive extends Serializable {
  constructor (size) {
    super()
    this.size = size
  }

  get SIZE () {
    return this.size / 8
  }
}

export class Int extends Primitive {
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

export class Uint extends Primitive {
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

export class Float extends Primitive {
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

export class Bool extends Uint {
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

export class Char extends Primitive {
  get SIZE () {
    return this.size
  }

  serialize (view, offset, value) {
    for (var i = 0; i < this.size; i++) {
      if (i < value.length) {
        view.setUint8(offset + i, value.charCodeAt(i))
      } else {
        view.setUint8(offset + i, 0)
      }
    }
  }

  deserialize (view, offset) {
    var str = ''
    for (var i = 0; i < this.size; i++) {
      var value = view.getUint8(offset + i)
      if (value !== 0) {
        str += String.fromCharCode(value)
      } else {
        break
      }
    }
    return str
  }
}

export class Struct extends Serializable {
  constructor (schema) {
    super()
    this.schema = schema
    this.keys = Object.keys(schema)
    this._size = this.size()
  }

  get SIZE () {
    return this._size
  }

  size () {
    var size = 0
    for (var i = 0; i < this.keys.length; i++) {
      size += this.schema[this.keys[i]].SIZE
    }
    return size
  }

  serialize (view, offset, value) {
    for (var i = 0; i < this.keys.length; i++) {
      var key = this.keys[i]
      var type = this.schema[key]
      type.serialize(view, offset, value[key])
      offset += type.SIZE
    }
  }

  deserialize (view, offset) {
    var result = {}
    for (var i = 0; i < this.keys.length; i++) {
      var key = this.keys[i]
      var type = this.schema[key]
      result[key] = type.deserialize(view, offset)
      offset += type.SIZE
    }
    return result
  }
}

export class List extends Serializable {
  constructor (type, length) {
    super()
    this.type = type
    this.length = length
    this._size = length * type.SIZE
  }

  get SIZE () {
    return this._size
  }

  serialize (view, offset, value) {
    for (var i = 0; i < this.length; i++) {
      this.type.serialize(view, offset, value[i])
      offset += this.type.SIZE
    }
  }

  deserialize (view, offset) {
    var result = Array(this.length)
    for (var i = 0; i < this.length; i++) {
      result[i] = this.type.deserialize(view, offset)
      offset += this.type.SIZE
    }
    return result
  }
}
