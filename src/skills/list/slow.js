import Skill from '../skill.js'

class SlowSkill extends Skill {
  constructor (value) {
    super({
      name: 'Slow',
      description: `Slow enemies on ${value * 100}%`,
      value
    })
  }

  apply (game) {}
}

export default SlowSkill
