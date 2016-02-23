export default function normalize(data, name) {
  const normalized = {
    result: [],
    [name]: {

    }
  }

  for (let i = 0; i < data.length; ++i) {
    normalized.result.push(i)
    normalized[name][i] = data[i]
  }

  return normalized
}
