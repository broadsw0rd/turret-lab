import Skill from '../skill.js'

class CriticalDamageSkill extends Skill {
  constructor (value) {
    super({
      name: 'Critical Damage',
      description: `Increase critical damage on ${value * 100}%`,
      value
    })
  }

  apply (game) {}
}

export default CriticalDamageSkill
