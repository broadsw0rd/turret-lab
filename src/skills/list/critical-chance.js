import Skill from '../skill.js'

class CriticalChanсeSkill extends Skill {
  constructor (value) {
    super({
      name: 'Critical Chance',
      description: `Increase critical chance on ${value * 100}%`,
      value
    })
  }

  apply (game) {}
}

export default CriticalChanсeSkill
