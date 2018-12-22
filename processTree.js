import data from './data'
import VerbModelFactory from './VerbModelFactory'

const extend = (original, context, key, thisValue) => {
 const detached = {...original}

 for (key in context)
   if (context.hasOwnProperty(key))
     if (Object.prototype.toString.call(context[key]) === '[object Object]')
       detached[key] = extend(detached[key] || {}, context[key], undefined, thisValue)
     else
       // Object.defineProperty(detached, key, {get: context[key].bind(thisValue), enumerable: true})
       detached[key] = context[key]
 return detached
}

export default infinitive => {
 let mostSpecificModel

 const processTree = (tree, parentInflections={}) => {
   if(Array.isArray(tree)) return tree.forEach(tree => processTree(tree, parentInflections))
   if(typeof tree === 'object' && (tree.verb || tree.subTree)){
     if(tree.test && !tree.test(infinitive)) return

     const extendedInflections = extend(parentInflections, tree.inflections)
     mostSpecificModel = {
       verb: tree.verb,
       inflections: extendedInflections
     }

     processTree(tree.subTree, extendedInflections)

     return
   }
 }

 processTree(data)

 return new (VerbModelFactory(mostSpecificModel))(infinitive)
}
