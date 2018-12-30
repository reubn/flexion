import {internalConjugate} from '../../'
import replaceLast from '../../util/replaceLast'
import maskObjectAndMap from '../../util/maskObjectAndMap'

const defaultMask = {
  singular: {
    first: true,
    second: true,
    third: true
  },
  plural: {
    third: true
  }
}

export default (from, to, mask=defaultMask) => function radicalChangePresentMixin(verb){
  const {conjugation: {indicative: {present: endings}}} = internalConjugate(verb.infinitive.slice(-2))

  return maskObjectAndMap(mask, path => () => replaceLast(verb.root(), from, to) + path.reduce((current, key) => current[key], endings)())
}
