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

const defaultEndingsPath = ['conjugation', 'indicative', 'present']
const defaultEndingsAccessor = (endingsPath, verb) => {
  return endingsPath.reduce((current, key) => current[key], internalConjugate(verb.infinitive.slice(-2)))
}

export default (from, to, {mask=defaultMask, endingsPath=defaultEndingsPath, endingsAccessor=defaultEndingsAccessor.bind(null, endingsPath)}={}) => function radicalChangeMixin(verb){
  const endings = endingsAccessor.call(verb, verb)

  return maskObjectAndMap(mask, path => () => replaceLast(verb.root(), from, to) + path.reduce((current, key) => current[key], endings)())
}
