class Vector {
  constructor (radius, theta) {
    this.radius = radius
    this.theta = theta

    this.ctheta = Math.cos(this.theta)
    this.stheta = Math.sin(this.theta)
  }

  move (radius) {
    this.radius += radius
  }

  rotate (theta) {
    this.theta += theta

    this.ctheta = Math.cos(this.theta)
    this.stheta = Math.sin(this.theta)
  }

  toCartesian () {
    return [
      this.radius * this.ctheta,
      this.radius * this.stheta
    ]
  }
}

export default Vector
