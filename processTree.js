import data from './data'

const extend = (into, from, thisValue=into) => {
  for(const key of Object.keys(from)){
    if(Object.prototype.toString.call(from[key]) === '[object Object]') into[key] = extend(into[key] || {}, from[key], thisValue)
    // else if(Array.isArray(from[key])) into[key] = extend(into[key] || {}, from[key].reduce((prev, curr) => extend(prev, curr, thisValue), {}), thisValue)
    else if(typeof from[key] === 'function' && from[key].name.endsWith('Mixin')) into[key] = extend(into[key] || {}, from[key].call(thisValue, thisValue), thisValue)
    else if(typeof from[key] === 'function') into[key] = from[key].bind(thisValue, thisValue)
    else into[key] = from[key]
  }
  return into
}

export default (infinitive, shouldLog=false) => {
  const log = shouldLog ? (level, ...args) => console.log(Array(level).fill('    ').join(''), ...args) : () => 0

  let mostSpecificModel

  const processTree = (tree, parentInflections={infinitive}, level=0) => {
        if(Array.isArray(tree)){
            log(level, 'found array so iterating')
            return tree.reduce((found, subTree) => {
                if(found){
                    log(level + 1, 'skipping', subTree.verb, 'as a match has already found')
                    return found
                } else {
                    const result = processTree(subTree, parentInflections, level + 1)
                    if(result) log(level + 1, subTree.verb, 'matches')
                    return result
                }
            }, false)
        }
        if(typeof tree === 'object' && (tree.verb || tree.subTree)){
            const result = tree.test && tree.test(infinitive)
            if(!result) log(level, tree.verb || 'special', 'does not match')
            if(!result) return false
            const extendedInflections = extend(parentInflections, tree.inflections)
            mostSpecificModel = {
                  modelVerb: tree.verb,
                  conjugation: extendedInflections
                }

            return processTree(tree.subTree, extendedInflections, level + 1) || tree
        }
    }


  processTree(data)
  return mostSpecificModel
}
