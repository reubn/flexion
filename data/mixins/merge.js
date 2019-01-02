import mergeAndOverride from '../../util/mergeAndOverride'
import mergeAndOverlapIntoArrays from '../../util/mergeAndOverlapIntoArrays'

export default (a, b, overlap=false) => function mergeMixin(){
 const aEval = typeof a === 'function' ? a.call(this, this) : a
 const bEval = typeof b === 'function' ? b.call(this, this) : b

 const mergeFn = overlap ? mergeAndOverlapIntoArrays : mergeAndOverride

 return mergeFn(aEval, bEval)
}
