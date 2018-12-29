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

  const protoInflections = {
    infinitive,
    root(){
      return infinitive.slice(0, -2)
    }
  }

  const processTree = (tree, parentInflections=protoInflections) => {
    if(Array.isArray(tree)) return tree.forEach(subTree => processTree(subTree, parentInflections))
    if(typeof tree === 'object' && (tree.verb || tree.subTree)){
      if(tree.test && !tree.test(infinitive)) return

      const extendedInflections = extend(parentInflections, tree.inflections)
      mostSpecificModel = {
        modelVerb: tree.verb,
        conjugation: extendedInflections
      }

      processTree(tree.subTree, extendedInflections)
    }
  }

  processTree(data)

  return mostSpecificModel
}
