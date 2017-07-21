import Ability from './ability.js'

class Velocity extends Ability {
  constructor (value) {
    super({
      name: 'Valocity',
      description: `Increase bullets velocity on ${value * 100}%`,
      value
    })
  }

  apply (game) {}
}

export default Velocity
