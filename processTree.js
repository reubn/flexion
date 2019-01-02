import data from './data'

const extend = (into, from, thisValue=into) => {
  for(const key of Object.keys(from)){
    if(Object.prototype.toString.call(from[key]) === '[object Object]') into[key] = extend(into[key] || {}, from[key], thisValue)
    else if(typeof from[key] === 'function' && from[key].name.endsWith('Mixin')) into[key] = extend(into[key] || {}, from[key].call(thisValue, thisValue), thisValue)
    else if(typeof from[key] === 'function') into[key] = from[key].bind(thisValue, thisValue)
    else into[key] = from[key]
  }
  return into
}

export default infinitive => {
  let mostSpecificModel

  const processTree = (tree, parentInflections={infinitive}) => {
    if(Array.isArray(tree)) return tree.reduce((found, subTree) => found || processTree(subTree, parentInflections), false)
    if(typeof tree === 'object' && tree.test && tree.test(infinitive)){
      const extendedInflections = extend(parentInflections, tree.inflections)
      mostSpecificModel = {
        modelVerb: tree.verb,
        conjugation: extendedInflections
      }

      return processTree(tree.subTree, extendedInflections) || tree
    }
  }

  processTree(data)
  return mostSpecificModel
}
