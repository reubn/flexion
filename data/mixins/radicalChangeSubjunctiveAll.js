import conjugate from '../../conjugate'
import replaceLast from '../../util/replaceLast'

export default (from, to) => function radicalChangeSubjunctiveAllMixin(verb){
  const {conjugation: {subjunctive:{present: endings}}} = conjugate(this.infinitive.slice(-2))

  return {
    plural: {
      second(){ return this.indicative.present.singular.first().slice(0, this.indicative.present.singular.first().endsWith('oy') ? -2 : -1) + endings.plural.second()}
      third(){ return this.indicative.present.singular.first().slice(0, this.indicative.present.singular.first().endsWith('oy') ? -2 : -1) + endings.plural.third()}
    }
  }

}
