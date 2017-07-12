import Skill from './skill.js'

export class AccuracySkill extends Skill {
  constructor (value) {
    super({
      name: 'Accuracy',
      description: `Increase accuracy on ${value * 100}%`,
      value
    })
  }

  apply (game) {}
}

export class DamageSkill extends Skill {
  constructor (value) {
    super({
      name: 'Damage',
      description: `Increase damage on ${value}`,
      value
    })
  }

  apply (game) {}
}

export class FireRateSkill extends Skill {
  constructor (value) {
    super({
      name: 'Fire Rate',
      description: `Increase fire rate on ${value * 100}%`,
      value
    })
  }

  apply (game) {}
}

export class CriticalDamageSkill extends Skill {
  constructor (value) {
    super({
      name: 'Critical Damage',
      description: `Increase critical damage on ${value * 100}%`,
      value
    })
  }

  apply (game) {}
}

export class CriticalChanсeSkill extends Skill {
  constructor (value) {
    super({
      name: 'Critical Chance',
      description: `Increase critical chance on ${value * 100}%`,
      value
    })
  }

  apply (game) {}
}

export class SlowSkill extends Skill {
  constructor (value) {
    super({
      name: 'Slow',
      description: `Slow enemies on ${value * 100}%`,
      value
    })
  }

  apply (game) {}
}

export class PiercingSkill extends Skill {
  constructor (value) {
    super({
      name: 'Piercing',
      description: `Increase bullets chance pierce through the enemies on ${value * 100}%`,
      value
    })
  }

  apply (game) {}
}

export class ValocitySkill extends Skill {
  constructor (value) {
    super({
      name: 'Valocity',
      description: `Increase bullets velocity on ${value * 100}%`,
      value
    })
  }

  apply (game) {}
}

export class TurnSkill extends Skill {
  constructor (value) {
    super({
      name: 'Turn',
      description: `Increase turret turn speed on ${value * 100}%`,
      value
    })
  }

  apply (game) {}
}

export class ExpBoostSkill extends Skill {
  constructor (value) {
    super({
      name: 'Exp. Boost',
      description: `Increase expirience gane on ${value * 100}%`,
      value
    })
  }

  apply (game) {}
}
