import Skill from '../skill.js'

class FireRateSkill extends Skill {
  constructor (value) {
    super({
      name: 'Fire Rate',
      description: `Increase fire rate on ${value * 100}%`,
      value
    })
  }

  apply (game) {}
}

export default FireRateSkill
