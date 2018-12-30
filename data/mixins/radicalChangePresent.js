import conjugate from '../../conjugate'
import replaceLast from '../../util/replaceLast'

export default (from, to) => function radicalChangePresentMixin(){
  const {conjugation: {indicative: {present: endings}}} = conjugate(this.infinitive.slice(-2))

  return {
    singular: {
      first(){return replaceLast(this.root(), from, to) + endings.singular.first()},
      second(){return replaceLast(this.root(), from, to) + endings.singular.second()},
      third(){return replaceLast(this.root(), from, to) + endings.singular.third()}
    },
    plural: {
      third(){return replaceLast(this.root(), from, to) + endings.plural.third()}
    }
  }

}
