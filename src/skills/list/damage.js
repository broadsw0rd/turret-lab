import Skill from '../skill.js'

class DamageSkill extends Skill {
  constructor (value) {
    super({
      name: 'Damage',
      description: `Increase damage on ${value}`,
      value
    })
  }

  apply (game) {}
}

export default DamageSkill
