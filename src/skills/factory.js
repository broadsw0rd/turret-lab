import {
  AccuracySkill
} from './skills.js'

class SkillFactory {
  static create () {
    return new AccuracySkill(0.5)
  }
}

export default SkillFactory
