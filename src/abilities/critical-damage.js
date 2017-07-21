import Ability from './ability.js'

class CriticalDamage extends Ability {
  constructor (value) {
    super({
      name: 'Critical Damage',
      description: `Increase critical damage on ${value * 100}%`,
      value
    })
  }

  apply (game) {}
}

export default CriticalDamage
