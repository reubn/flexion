import processTree from './processTree'

export default request => {
  const infinitive = request.endsWith('se') ? request.substring(0, request.length - 2) : request
  if(!['ar', 'er', 'ir', 'ír'].includes(infinitive.substring(infinitive.length - 2))) return null
  
  return processTree(infinitive)
}
