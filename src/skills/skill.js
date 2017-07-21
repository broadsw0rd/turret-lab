class Skill {
  constructor ({ name, abilities }) {
    this.name = name
    this.abilities = abilities
  }

  apply (game) {
    this.abilities.forEach(ability => ability.apply(game))
  }

  toJSON () {
    return this.abilities.map(ability => ability.toJSON())
  }
}

export default Skill
