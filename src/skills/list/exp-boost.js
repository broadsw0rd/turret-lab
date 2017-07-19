import Skill from '../skill.js'

class ExpBoostSkill extends Skill {
  constructor (value) {
    super({
      name: 'Exp. Boost',
      description: `Increase expirience gane on ${value * 100}%`,
      value
    })
  }

  apply (game) {}
}

export default ExpBoostSkill
