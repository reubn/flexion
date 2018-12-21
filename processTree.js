import dataTree from './dataTree'
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

 const processTree = (dataTree, parentInflections={}) => {
   if(Array.isArray(dataTree)) return dataTree.forEach(tree => processTree(tree, parentInflections))
   if(typeof dataTree === 'object' && (dataTree.verb || dataTree.subTree)){
     if(dataTree.test && !dataTree.test(infinitive)) return

     const extendedInflections = extend(parentInflections, dataTree.inflections)
     mostSpecificModel = {
       verb: dataTree.verb,
       inflections: extendedInflections
     }

     processTree(dataTree.subTree, extendedInflections)

     return
   }
 }

 processTree(dataTree)

 return new (VerbModelFactory(mostSpecificModel))(infinitive)
}
