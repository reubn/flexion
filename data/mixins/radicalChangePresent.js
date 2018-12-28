import conjugate from '../../conjugate'
import replaceLast from '../../util/replaceLast'

export default (from, to) => function radicalChangePresentMixin(verb){
  const {inflections: {indicative:{present: endings}}} = conjugate(this.infinitive.slice(-2))

  return {
    singular: {
      first(){ return replaceLast(verb.inflections.root(), from, to) + endings.singular.first()},
      second(){ return replaceLast(verb.inflections.root(), from, to) + endings.singular.second()},
      third(){ return replaceLast(verb.inflections.root(), from, to) + endings.singular.third()}
    },
    plural: {
      // first(){ return this.inflections.root() + endings.plural.first},
      // second(){ return this.inflections.root() + endings.plural.second},
      third(){ return replaceLast(verb.inflections.root(), from, to) + endings.plural.third()}
    }
  }

}
