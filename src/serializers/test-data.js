import { irand, frand, chance } from '../utils/random.js'

class TestData {
  static generate (count) {
    var result = new Array(count)
    for (var i = 0; i < result.length; i++) {
      var value = irand({ max: count })
      result[i] = new TestData({
        id: i,
        value: value,
        description: `Description ${value}`,
        enabled: chance(0.5),
        position: [
          frand(100),
          frand(100)
        ]
      })
    }
    return result
  }

  static create (option) {
    return new TestData(option)
  }

  constructor ({ id, value, description, enabled, position }) {
    this.id = id
    this.value = value
    this.description = description
    this.enabled = enabled
    this.position = position
  }
}

export default TestData
