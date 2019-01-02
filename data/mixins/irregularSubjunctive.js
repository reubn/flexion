import {internalConjugate} from '../../'
import mapObject from '../../util/mapObject'

export default stemOrFunc => function irregularSubjunctiveMixin(verb){
  const stem = typeof stemOrFunc === 'function' ? stemOrFunc.call(this, this) : stemOrFunc

  const {conjugation: {subjunctive: {present}}} = internalConjugate(verb.infinitive.slice(-2))
  return mapObject(present, ({value: ending}) => stem + ending())
}
