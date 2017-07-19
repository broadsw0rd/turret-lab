import Skill from '../skill.js'

class AccuracySkill extends Skill {
  constructor (value) {
    super({
      name: 'Accuracy',
      description: `Increase accuracy on ${value * 100}%`,
      value
    })
  }

  apply (game) {}
}

export default AccuracySkill
