import conjugate from '../../conjugate'
import replaceLast from '../../util/replaceLast'

export default (from, to, {pluralFirstAndSecondCarry=false}={}) => function maintainSoundSubjunctiveAllMixin(){
  const {conjugation: {subjunctive: {present: endings}}} = conjugate(this.infinitive.slice(-2))

  const yo = this.indicative.present.singular.first()
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
      first(){return (pluralFirstAndSecondCarry ? stem : stemPluralFirstAndSecondNormalised) + endings.plural.first()},
      second(){return (pluralFirstAndSecondCarry ? stem : stemPluralFirstAndSecondNormalised) + endings.plural.second()},
      third(){return stem + endings.plural.third()}
    }
  }

}
