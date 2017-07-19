import Skill from '../skill.js'

class PiercingSkill extends Skill {
  constructor (value) {
    super({
      name: 'Piercing',
      description: `Increase bullets chance pierce through the enemies on ${value * 100}%`,
      value
    })
  }

  apply (game) {}
}

export default PiercingSkill
