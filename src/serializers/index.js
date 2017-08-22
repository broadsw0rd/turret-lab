import Vector from 'vectory'

import Serializer from '../protocol/serializer.js'
import Int from '../protocol/serializable/int.js'
import Uint from '../protocol/serializable/uint.js'
import Float from '../protocol/serializable/float.js'
import Bool from '../protocol/serializable/bool.js'
import Char from '../protocol/serializable/char.js'
import Struct from '../protocol/serializable/struct.js'
import List from '../protocol/serializable/list.js'

import TestData from './test-data.js'

export var vectorSerializer = new Serializer({
  factory: Vector.from,
  type: new List(new Float(32), 2)
})

export var testDataSerializer = new Serializer({
  factory: TestData.create,
  type: new Struct({
    id: new Uint(32),
    value: new Int(32),
    description: new Char(32),
    enabled: new Bool(),
    position: new List(new Float(32), 2)
  })
})
