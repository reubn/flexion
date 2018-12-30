import {internalConjugate} from '../../'
import replaceLast from '../../util/replaceLast'

export default (from, to, {pluralFirstAndSecondCarry=false, pluralFirstAndSecondSkip=false}={}) => function maintainSoundSubjunctiveMixin(){
  const {conjugation: {subjunctive: {present: endings}}} = internalConjugate(this.infinitive.slice(-2))

  const yo = Array.isArray(this.indicative.present.singular.first) ? this.indicative.present.singular.first[0]() : this.indicative.present.singular.first()
  const stem = replaceLast(yo.slice(0, yo.endsWith('oy') ? -2 : -1), from, to)

  const stemPluralFirstAndSecondNormalised = replaceLast(yo.includes(this.root())
  ? yo.slice(0, yo.endsWith('oy') ? -2 : -1)
  : this.root(), from, to)

  return {
    singular: {
      first(){return stem + endings.singular.first()},
      second(){return stem + endings.singular.second()},
      third(){return stem + endings.singular.third()}
    },
    plural: {
      first: pluralFirstAndSecondSkip ? undefined : function first(){return (pluralFirstAndSecondCarry ? stem : stemPluralFirstAndSecondNormalised) + endings.plural.first()},
      second: pluralFirstAndSecondSkip ? undefined : function second(){return (pluralFirstAndSecondCarry ? stem : stemPluralFirstAndSecondNormalised) + endings.plural.second()},
      third(){return stem + endings.plural.third()}
    }
  }
}
