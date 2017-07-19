export function frand ({ min = 0, max = 1 } = {}) {
  min *= 100
  max *= 100
  return Math.floor(Math.random() * (max - min) + min) / 100
}

export function irand ({ min = 0, max = 1 } = {}) {
  return Math.floor(frand({ min, max }))
}

export function pick (array = []) {
  return array[irand({ max: array.length })]
}

export function spread (value, spread) {
  spread = spread / 2
  return frand({ min: value - spread, max: value + spread })
}

export function chance (luck) {
  return frand() < luck
}
