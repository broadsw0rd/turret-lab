import Ability from './ability.js'

class Slow extends Ability {
  constructor (value) {
    super({
      name: 'Slow',
      description: `Slow enemies on ${value * 100}%`,
      value
    })
  }

  apply (game) {}
}

export default Slow
