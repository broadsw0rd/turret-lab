export function rand ({ min = 0, max = 1 }) {
  return Math.random() * (max - min + 1) + min
}

export function pick (array = []) {
  return array[Math.floor(this.rand({ max: array.length - 1 }))]
}

export function spread (value, spread) {
  spread = spread / 2
  return rand({ min: value - spread, max: value + spread})
}

export function chance (luck) {
  return Math.random() * luck < luck
}
