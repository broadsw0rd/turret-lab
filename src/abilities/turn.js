import Ability from './ability.js'

class Turn extends Ability {
  constructor (value) {
    super({
      name: 'Turn',
      description: `Increase turret turn speed on ${value * 100}%`,
      value
    })
  }

  apply (game) {}
}

export default Turn
