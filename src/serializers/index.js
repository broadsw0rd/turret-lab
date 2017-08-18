import Vector from 'vectory'

import Serializer from '../protocol/serializer.js'
import List from '../protocol/serializable/list.js'
import Float from '../protocol/serializable/float.js'

export var vectorSerializer = new Serializer({
  factory: Vector.from,
  type: new List(new Float(32), 2)
})
