export function irand ({ min = 0, max = 1 } = {}) {
  return Math.floor(Math.random() * (max - min + 1) + min)
}

export function frand ({ min = 0, max = 1 } = {}) {
  min *= 100
  max *= 100
  return irand({ min, max }) / 100
}

export function pick (array = []) {
  return array[irand({ max: array.length - 1 })]
}

export function take (array) {
  var idx = irand({ max: array.length - 1 })
  var item = array[idx]
  array.splice(idx, 1)
  return item
}

export function spread (value, spread) {
  spread = spread / 2
  return frand({ min: value - spread, max: value + spread })
}

export function chance (likelihood) {
  return Math.random() < likelihood
}
