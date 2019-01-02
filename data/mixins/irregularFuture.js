import {internalConjugate} from '../../'
import mapObject from '../../util/mapObject'

export default stemOrFunc => function irregularFutureMixin(verb){
  const stem = typeof stemOrFunc === 'function' ? stemOrFunc.call(this, this) : stemOrFunc
  
  const {conjugation: {indicative: {future}}} = internalConjugate(verb.infinitive.slice(-2))
  return mapObject(future, ({value: ending}) => stem + ending().slice(2))
}
