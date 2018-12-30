import {internalConjugate} from '../../'
import replaceLast from '../../util/replaceLast'

export default (from, to) => function radicalChangePresentMixin(verb){

  return {
    singular: {
      first(){return replaceLast(verb.root(), from, to) + endings.singular.first()},
      second(){return replaceLast(verb.root(), from, to) + endings.singular.second()},
      third(){return replaceLast(verb.root(), from, to) + endings.singular.third()}
    },
    plural: {
      third(){return replaceLast(verb.root(), from, to) + endings.plural.third()}
    }
  }
  const {conjugation: {indicative: {present: endings}}} = internalConjugate(verb.infinitive.slice(-2))

}
