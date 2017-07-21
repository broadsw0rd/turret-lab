import Ability from './ability.js'
import { spread } from '../../utils/random.js'

class Accuracy extends Skill {
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
