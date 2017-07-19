import Skill from '../skill.js'

class TurnSkill extends Skill {
  constructor (value) {
    super({
      name: 'Turn',
      description: `Increase turret turn speed on ${value * 100}%`,
      value
    })
  }

  apply (game) {}
}

export default TurnSkill
