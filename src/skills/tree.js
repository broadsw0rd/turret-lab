import SkillNode from './node.js'
import SkillFactory from './factory.js'

class SkillTree {
  constructor ({ width, count }) {
    this.width = width
    this.count = count
    this.nodes = []
    this.map = []

    this._count = this.count
  }

  build () {

  }

  getRow () {
    return Array.apply(null, Array(this.width)).map(() => null)
  }

  directStrategy (row) {

  }

  branchingStrategy (row) {

  }

  selectSkill (position) {

  }

  toJSON () {
    return this.nodes.map(node => node.toJSON())
  }
}

export default SkillTree
