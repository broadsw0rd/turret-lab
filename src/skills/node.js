import Skill from './skill.js'

class SkillNode {
  static parse ({ position, skill, selected, enabled }) {
    return new SkillNode({
      position,
      selected,
      enabled,
      skill: Skill.parse(skill)
    })
  }

  constructor ({ position, selected, enabled, skill, ancestors = [], descendants = [] }) {
    this.position = position
    this.selected = selected
    this.enabled = enabled
    this.skill = skill
    this.ancestors = ancestors
    this.descendants = descendants
  }

  toJSON () {
    return {
      position: this.position,
      selected: this.selected,
      enabled: this.enabled,
      skill: this.skill.toJSON()
    }
  }
}

export default SkillNode
