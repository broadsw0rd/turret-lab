import Skill from './skill.js'

export class AccuracySkill extends Skill {
  constructor (value) {
    super({
      name: 'Accuracy'
      value: value,
      description: this.format(value)
    })
  }

  format (value) {
    return `Increase accuracy on ${value * 100}%`
  }

  apply (game) {}
}