import Ability from './ability.js'

class Piercing extends Ability {
  constructor (value) {
    super({
      name: 'Piercing',
      description: `Increase bullets chance pierce through the enemies on ${value * 100}%`,
      value
    })
  }

  apply (game) {}
}

export default Piercing
