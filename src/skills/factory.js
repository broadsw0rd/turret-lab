import AccuracySkill from './list/accuracy.js'
import CriticalChanceSkill from './list/critical-chance.js'
import CriticalDamageSkill from './list/critical-damage.js'
import DamageSkill from './list/damage.js'
import ExpBoostSkill from './list/exp-boost.js'
import FireRateSkill from './list/fire-rate.js'
import PiercingSkill from './list/piercing.js'
import SlowSkill from './list/slow.js'
import TurnSkill from './list/turn.js'
import VelocitySkill from './list/velocity.js'

import { irand } from '../utils/random.js'

var map = {
  'accuracy': AccuracySkill,
  'critical-chance': CriticalChanceSkill,
  'critical-damage': CriticalDamageSkill,
  'damage': DamageSkill,
  'exp-boost': ExpBoostSkill,
  'fire-rate': FireRateSkill,
  'piercing': PiercingSkill,
  'slow': SlowSkill,
  'turn': TurnSkill,
  'velocity': VelocitySkill
}

var keys = Object.keys(map)

var skills = [
  ...keys,
  ...keys,
  ...keys,
  ...keys
]

class SkillFactory {
  static create (level) {
    var idx = irand({ max: skills.length })
    var skill = skills[idx]
    skills.splice(idx, 1)

    var Skill = map[skill]

    return Skill.create(level)
  }
}

export default SkillFactory
