import Ability from './ability.js'

class CriticalChanсe extends Ability {
  constructor (value) {
    super({
      name: 'Critical Chance',
      description: `Increase critical chance on ${value * 100}%`,
      value
    })
  }

  apply (game) {}
}

export default CriticalChanсe
