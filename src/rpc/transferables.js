export function isTransferable (object) {
  return object instanceof ArrayBuffer
}

export function peekTransferables (data) {
  var result = []
  for (var i in data) {
    if (isTransferable(data[i])) {
      result.push(data[i])
    }
  }
  return result
}
