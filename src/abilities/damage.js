import Ability from './ability.js'

class Damage extends Ability {
  constructor (value) {
    super({
      name: 'Damage',
      description: `Increase damage on ${value}`,
      value
    })
  }

  apply (game) {}
}

export default Damage
