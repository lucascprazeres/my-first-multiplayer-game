export function getIntervalFrom(timestamp) {
  return getTimestamp() - timestamp
}


export function getTimestamp() {
  return performance.now()
}