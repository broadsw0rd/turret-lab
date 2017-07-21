import Ability from '../abilities/ability.js'

class Skill {
  static parse ({ name, abilities }) {
    return new Skill({
      name,
      abilities: abilities.map(Ability.parse)
    })
  }

  constructor ({ name, abilities }) {
    this.name = name
    this.abilities = abilities
  }

  apply (game) {
    this.abilities.forEach(ability => ability.apply(game))
  }

  toJSON () {
    return {
      name: this.name,
      abilities: this.abilities.map(ability => ability.toJSON())
    }
  }
}

export default Skill
