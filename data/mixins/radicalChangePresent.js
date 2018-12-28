import conjugate from '../../conjugate'
import replaceLast from '../../util/replaceLast'

export default (from, to) => function radicalChangePresentMixin(verb){
  console.log('RC', verb)
  const {inflections: {indicative:{present: endings}}} = conjugate(verb.infinitive.slice(-2))

  return {
    singular: {
      first(){ return replaceLast(verb.inflections.root(), from, to) + endings.singular.first()},
      second(){ return replaceLast(verb.inflections.root(), from, to) + endings.singular.second()},
      third(){ return replaceLast(verb.inflections.root(), from, to) + endings.singular.third()}
    },
    plural: {
      // first(verb){ return verb.inflections.root() + endings.plural.first},
      // second(verb){ return verb.inflections.root() + endings.plural.second},
      third(){ return replaceLast(verb.inflections.root(), from, to) + endings.plural.third()}
    }
  }

}
