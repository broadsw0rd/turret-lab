import Ability from './ability.js'

class ExpBoost extends Ability {
  constructor (value) {
    super({
      name: 'Exp. Boost',
      description: `Increase expirience gane on ${value * 100}%`,
      value
    })
  }

  apply (game) {}
}

export default ExpBoost
