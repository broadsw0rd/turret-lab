import Skill from '../skill.js'

class VelocitySkill extends Skill {
  constructor (value) {
    super({
      name: 'Valocity',
      description: `Increase bullets velocity on ${value * 100}%`,
      value
    })
  }

  apply (game) {}
}

export default VelocitySkill
