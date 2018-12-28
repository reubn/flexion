import conjugate from '../../conjugate'
import replaceLast from '../../util/replaceLast'

export default (from, to) => function radicalChangePresentMixin(verb){
  const {conjugation: {indicative:{present: endings}}} = conjugate(this.infinitive.slice(-2))

  return {
    singular: {
      first(){ return replaceLast(verb.root(), from, to) + endings.singular.first()},
      second(){ return replaceLast(verb.root(), from, to) + endings.singular.second()},
      third(){ return replaceLast(verb.root(), from, to) + endings.singular.third()}
    },
    plural: {
      // first(){ return verb.root() + endings.plural.first()},
      // second(){ return verb.root() + endings.plural.second()},
      third(){ return replaceLast(verb.root(), from, to) + endings.plural.third()}
    }
  }

}
