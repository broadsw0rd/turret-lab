import Ability from './ability.js'

class FireRate extends Ability {
  constructor (value) {
    super({
      name: 'Fire Rate',
      description: `Increase fire rate on ${value * 100}%`,
      value
    })
  }

  apply (game) {}
}

export default FireRate
