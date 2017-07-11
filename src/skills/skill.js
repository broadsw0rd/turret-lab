class Skill {
  static parse ({ name, value, description }) {
    return new Skill({ name, value, description })
  }

  constructor ({ name, value, description }) {
    this.name = name
    this.value = value
    this.description = description
  }

  toJSON () {
    return {
      name: this.name,
      value: this.value,
      description: this.description
    }
  }
}

export default Skill
