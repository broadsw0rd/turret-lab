import Ability from './ability.js'

class Accuracy extends Ability {
  constructor (value) {
    super({
      name: 'Accuracy',
      description: `Increase accuracy on ${value * 100}%`,
      value
    })
  }

  apply (game) {}
}

export default Accuracy
