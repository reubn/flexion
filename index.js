import processTree from './processTree'

export default request => {
  const trimmed = request.trim()
  const infinitive = trimmed.endsWith('se') ? trimmed.slice(0, -2) : trimmed
  if(!['ar', 'er', 'ir', 'ír'].includes(infinitive.slice(-2))) return null

  const result = processTree(infinitive)

  return JSON.parse(JSON.stringify(result, (key, value) => typeof value === 'function' ? value() : value))
}
