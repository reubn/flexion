import {internalConjugate} from '../../'
import mapObject from '../../util/mapObject'

export default stemOrFunc => function irregularConditionalMixin(verb){
  const stem = typeof stemOrFunc === 'function' ? stemOrFunc.call(this, this) : stemOrFunc

  const {conjugation: {indicative: {conditional}}} = internalConjugate(verb.infinitive.slice(-2))
  return mapObject(conditional, ({value: ending}) => stem + ending().slice(2))
}
