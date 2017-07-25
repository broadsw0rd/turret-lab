import Accuracy from '../abilities/accuracy.js'
import CriticalChance from '../abilities/critical-chance.js'
import CriticalDamage from '../abilities/critical-damage.js'
import Damage from '../abilities/damage.js'
import ExpBoost from '../abilities/exp-boost.js'
import FireRate from '../abilities/fire-rate.js'
import Piercing from '../abilities/piercing.js'
import Slow from '../abilities/slow.js'
import Turn from '../abilities/turn.js'
import Velocity from '../abilities/velocity.js'

import { irand } from '../utils/random.js'

var map = {
  'accuracy': Accuracy,
  'critical-chance': CriticalChance,
  'critical-damage': CriticalDamage,
  'damage': Damage,
  'exp-boost': ExpBoost,
  'fire-rate': FireRate,
  'piercing': Piercing,
  'slow': Slow,
  'turn': Turn,
  'velocity': Velocity
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

  }
}

export default SkillFactory
