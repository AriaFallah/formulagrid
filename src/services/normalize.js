export default function normalize(data, name) {
  const normalized = {
    result: [],
    [name]: {

    }
  }

  for (const x of data) {
    normalized.result.push(x.id)
    normalized[name][x.id] = x
  }

  return normalized
}
