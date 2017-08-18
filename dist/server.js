(function () {
'use strict';

function isTransferable (object) {
  return object instanceof ArrayBuffer
}

function peekTransferables (data) {
  var result = [];
  for (var i in data) {
    if (isTransferable(data[i])) {
      result.push(data[i]);
    }
  }
  return result
}

/* eslint-env serviceworker */
class RpcServer {
  constructor (handlers) {
    this.handlers = handlers;
    this.listen();
  }

  listen () {
    self.addEventListener('message', this.handler.bind(this));
  }

  handler (e) {
    var { method, uid, data } = e.data;
    if (this.handlers[method]) {
      Promise.all([method, uid, this.handlers[method](data)]).then(this.reply);
    }
  }

  reply ([method, uid, data]) {
    var transferables = peekTransferables(data);
    self.postMessage({ method, uid, data }, transferables);
  }

  emit (eventName, data) {
    self.postMessage({
      eventName,
      data
    });
  }
}

var commonjsGlobal = typeof window !== 'undefined' ? window : typeof global !== 'undefined' ? global : typeof self !== 'undefined' ? self : {};





function createCommonjsModule(fn, module) {
	return module = { exports: {} }, fn(module, module.exports), module.exports;
}

var vectory = createCommonjsModule(function (module, exports) {
(function (global, factory) {
  module.exports = factory();
}(commonjsGlobal, function () { 'use strict';

  function Vector (x, y) {
    this.x = x || 0;
    this.y = y || 0;
  }

  Vector.displayName = 'Vector';

  Vector.from = function (data) {
    return new Vector(data[0], data[1])
  };

  Vector.fromAngle = function (angle, magnitude) {
    return new Vector(magnitude * Math.cos(angle), magnitude * Math.sin(angle))
  };

  Vector.parse = function (string) {
    return Vector.from(string.trim().replace(',', ' ').split(/\s+/).map(parseFloat))
  };

  Vector.add = function (one, another) {
    return another.add(one)
  };

  Vector.prototype.add = function (vector) {
    return new Vector(this.x + vector.x, this.y + vector.y)
  };

  Vector.iadd = function (one, another) {
    return another.iadd(one)
  };

  Vector.prototype.iadd = function (vector) {
    this.x += vector.x;
    this.y += vector.y;
    return this
  };

  Vector.sub = function (one, another) {
    return another.sub(one)
  };

  Vector.prototype.sub = function (vector) {
    return new Vector(this.x - vector.x, this.y - vector.y)
  };

  Vector.isub = function (one, another) {
    return another.isub(one)
  };

  Vector.prototype.isub = function (vector) {
    this.x -= vector.x;
    this.y -= vector.y;
    return this
  };

  Vector.mul = function (scalar, vector) {
    return vector.mul(scalar)
  };

  Vector.prototype.mul = function (scalar) {
    return new Vector(this.x * scalar, this.y * scalar)
  };

  Vector.imul = function (scalar, vector) {
    return vector.imul(scalar)
  };

  Vector.prototype.imul = function (scalar) {
    this.x *= scalar;
    this.y *= scalar;
    return this
  };

  Vector.div = function (scalar, vector) {
    return vector.div(scalar)
  };

  Vector.prototype.div = function (scalar) {
    return new Vector(this.x / scalar, this.y / scalar)
  };

  Vector.idiv = function (scalar, vector) {
    return vector.idiv(scalar)
  };

  Vector.prototype.idiv = function (scalar) {
    this.x /= scalar;
    this.y /= scalar;
    return this
  };

  Vector.lerp = function (one, another, t) {
    return one.lerp(another, t)
  };

  Vector.prototype.lerp = function (vector, t) {
    var x = (1 - t) * this.x + t * vector.x;
    var y = (1 - t) * this.y + t * vector.y;
    return new Vector(x, y)
  };

  Vector.normalized = function (vector) {
    return vector.normalized()
  };

  Vector.prototype.normalized = function () {
    var x = this.x;
    var y = this.y;
    var length = Math.sqrt(x * x + y * y);
    if (length > 0) {
      return new Vector(x / length, y / length)
    } else {
      return new Vector(0, 0)
    }
  };

  Vector.normalize = function (vector) {
    return vector.normalize()
  };

  Vector.prototype.normalize = function () {
    var x = this.x;
    var y = this.y;
    var length = Math.sqrt(x * x + y * y);
    if (length > 0) {
      this.x = x / length;
      this.y = y / length;
    }
    return this
  };

  Vector.magnitude = function (vector) {
    return vector.magnitude()
  };

  Vector.prototype.magnitude = function () {
    return Math.sqrt(this.x * this.x + this.y * this.y)
  };

  Vector.dot = function (one, another) {
    return another.dot(one)
  };

  Vector.prototype.dot = function (vector) {
    return this.x * vector.x + this.y * vector.y
  };

  Vector.distance = function (one, another) {
    return another.distance(one)
  };

  Vector.prototype.distance = function (vector) {
    var x = this.x - vector.x;
    var y = this.y - vector.y;
    return Math.sqrt(x * x + y * y)
  };

  Vector.angleOf = function (vector) {
    return vector.angleOf()
  };

  Vector.prototype.angleOf = function () {
    return Math.atan2(this.y, this.x)
  };

  Vector.angleTo = function (one, another) {
    return another.angleTo(one)
  };

  Vector.prototype.angleTo = function (vector) {
    return Math.acos(this.dot(vector) / this.magnitude() * vector.magnitude())
  };

  Vector.reset = function (one, another) {
    return another.reset(one)
  };

  Vector.prototype.reset = function (vector) {
    this.x = vector.x;
    this.y = vector.y;
    return this
  };

  Vector.zero = function (vector) {
    return vector.zero()
  };

  Vector.prototype.zero = function () {
    this.x = 0;
    this.y = 0;
    return this
  };

  Vector.set = function (x, y, vector) {
    return vector.set(x, y)
  };

  Vector.prototype.set = function (x, y) {
    this.x = x || 0;
    this.y = y || 0;
    return this
  };

  Vector.copy = function (vector) {
    return vector.copy()
  };

  Vector.prototype.copy = function () {
    return new Vector(this.x, this.y)
  };

  Vector.toJSON = function (vector) {
    return vector.toJSON()
  };

  Vector.prototype.toJSON = function () {
    return [this.x, this.y]
  };

  Vector.toString = function (vector) {
    return vector ? vector.toString() : Function.prototype.toString.call(this)
  };

  Vector.prototype.toString = function () {
    return this.x.toFixed(3) + ' ' + this.y.toFixed(3)
  };

  /* istanbul ignore else */
  if (typeof Symbol !== 'undefined' && Symbol.toStringTag) {
    Vector.prototype[Symbol.toStringTag] = 'Vector';
  }

  Vector.toArray = function (vector) {
    return vector.toArray()
  };

  Vector.prototype.toArray = function () {
    return [this.x, this.y]
  };

  Vector.equals = function (one, another) {
    return one.equals(another)
  };

  Vector.prototype.equals = function (vector) {
    return this.x === vector.x && this.y === vector.y
  };

  Vector.compare = function (one, another) {
    return one.compare(another)
  };

  Vector.prototype.compare = function (vector) {
    var thisMagnitude = this.magnitude();
    var vectorMagnitude = vector.magnitude();
    return (thisMagnitude > vectorMagnitude) - (vectorMagnitude > thisMagnitude)
  };

  Object.defineProperties(Vector.prototype, {
    xx: {
      configurable: true,
      get: function () {
        return new Vector(this.x, this.x)
      },
      set: function (vector) {
        this.x = vector.x;
        this.y = vector.x;
      }
    },
    xy: {
      configurable: true,
      get: function () {
        return new Vector(this.x, this.y)
      },
      set: function (vector) {
        this.x = vector.x;
        this.y = vector.y;
      }
    },
    yx: {
      configurable: true,
      get: function () {
        return new Vector(this.y, this.x)
      },
      set: function (vector) {
        this.x = vector.y;
        this.y = vector.x;
      }
    },
    yy: {
      configurable: true,
      get: function () {
        return new Vector(this.y, this.y)
      },
      set: function (vector) {
        this.x = vector.y;
        this.y = vector.y;
      }
    }
  });

  function VectorIterator (vector) {
    this.vector = vector;
    this.__idx = 0;
  }

  VectorIterator.prototype.next = function () {
    if (this.__idx === 0) {
      this.__idx++;
      return {
        done: false,
        value: this.vector.x
      }
    } else if (this.__idx === 1) {
      this.__idx++;
      return {
        done: false,
        value: this.vector.y
      }
    } else {
      return {
        done: true,
        value: void 0
      }
    }
  };

  /* istanbul ignore else */
  if (typeof Symbol !== 'undefined' && Symbol.iterator) {
    Vector.prototype[Symbol.iterator] = function iterator () {
      return new VectorIterator(this)
    };
  }

  return Vector;

}));
});

function id (el) { return el }

class Serializer {
  constructor ({ factory = id, type }) {
    this.factory = factory;
    this.type = type;
  }

  serialize (list) {
    var buffer = new ArrayBuffer(this.type.size() * list.length);
    var view = new DataView(buffer);
    var offset = 0;
    for (var i = 0; i < list.length; i++) {
      this.type.serialize(view, offset, list[i]);
      offset += this.type.size();
    }
    return buffer
  }

  deserialize (buffer) {
    var length = buffer.byteLength / this.type.size();
    var view = new DataView(buffer);
    var offset = 0;
    var result = Array(length);
    for (var i = 0; i < length; i++) {
      result[i] = this.factory(this.type.deserialize(view, offset));
      offset += this.type.size();
    }
    return result
  }
}

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

class List extends Serializable {
  constructor (type, length) {
    super();
    this.type = type;
    this.length = length;
    this._size = length * type.size();
  }

  size () {
    return this._size
  }

  serialize (view, offset, value) {
    for (var i = 0; i < this.length; i++) {
      this.type.serialize(view, offset, value[i]);
      offset += this.type.size();
    }
  }

  deserialize (view, offset) {
    var result = Array(this.length);
    for (var i = 0; i < this.length; i++) {
      result[i] = this.type.deserialize(view, offset);
      offset += this.type.size();
    }
    return result
  }
}

class Primitive extends Serializable {
  constructor (size) {
    super();
    this._size = size;
  }

  size () {
    return this._size / 8
  }
}

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

var vectorSerializer = new Serializer({
  factory: vectory.from,
  type: new List(new Float(32), 2)
});

function irand ({ min = 0, max = 1 } = {}) {
  return Math.floor(Math.random() * (max - min + 1) + min)
}

function frand ({ min = 0, max = 1 } = {}) {
  min *= 100;
  max *= 100;
  return irand({ min, max }) / 100
}

/* eslint-env serviceworker */

var vectors = Array(1e6);
for (var i = 0; i < vectors.length; i++) {
  vectors[i] = [frand(), frand()];
}

self.rpcServer = new RpcServer({
  serialized () {
    console.profile();
    var result = vectorSerializer.serialize(vectors);
    console.profileEnd();
    return {
      vectors: result
    }
  },

  copied () {
    return {
      vectors
    }
  }
});

}());
