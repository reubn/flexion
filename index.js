import processTree from './processTree'

const flexion = (internal, request) => {
  const trimmed = request.trim()
  const infinitive = trimmed.endsWith('se') ? trimmed.slice(0, -2) : trimmed

  const result = processTree(infinitive, !internal)

  if(!result) return null
  return internal ? result : JSON.parse(JSON.stringify(result, (key, value) => typeof value === 'function' ? value() : value))
}

export default flexion.bind(null, false)
export const internalConjugate = flexion.bind(null, true)
