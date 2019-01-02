import replaceLast from '../../util/replaceLast'
import mapObject from '../../util/mapObject'

import radicalChangePresentMixin from '../mixins/radicalChangePresent'
import radicalChangeSubjunctiveAllMixin from '../mixins/radicalChangeSubjunctiveAll'
import passInMixin from '../mixins/passIn'
import mergeMixin from '../mixins/merge'

const specialExtraMixin = (path, extrasOrFunc) => {
  return function specialExtraMixin(verb){
    const extras = typeof extrasOrFunc === 'function' ? extrasOrFunc.call(verb, verb) : extrasOrFunc
    const pathResolved = path.reduce((path, key) => path[key], verb)

    return mapObject(pathResolved, ({keys, value}) => {
      const extra = keys.reduce((path, key) => path[key], extras)
      const vCalled = value.call(verb, verb)
      return Array.isArray(vCalled) && Array.isArray(extra) ? [...vCalled, ...extra] : value
    })
  }
}

export default {
  verb: 'placer',
  test: i => i.endsWith('placer'),
  inflections: {
    indicative: {
      present: radicalChangePresentMixin('c', 'zc', {mask: {singular: {first: true}}}),
      preterite: mergeMixin(passInMixin(verb => verb.indicative.preterite), verb => ({
        singular: {
          third(){return replaceLast(verb.root(), 'plac', 'plugo')}
        },
        plural: {
          third(){return replaceLast(verb.root(), 'plac', 'pluguieron')}
        }
      }), true)
    },
    subjunctive: {
      present: mergeMixin(radicalChangeSubjunctiveAllMixin('c', 'zc'), verb => ({
        singular: {
          third(){return ['plazca', 'plegue', 'plega'].map(change => replaceLast(verb.root(), 'plac', change))}
        }
      })),
      imperfect: specialExtraMixin(['subjunctive', 'imperfect'], verb => ({
        singular: {
          third: ['pluguiera', 'pluguiese'].map(change => replaceLast(verb.root(), 'plac', change))
        },
        plural: {
          third: ['pluguieran', 'pluguiesen'].map(change => replaceLast(verb.root(), 'plac', change))
        }
      })),
      future: specialExtraMixin(['subjunctive', 'future'], verb => ({
        singular: {
          third: ['pluguiera', 'pluguiese'].map(change => replaceLast(verb.root(), 'plac', change))
        },
        plural: {
          third: ['pluguieran', 'pluguiesen'].map(change => replaceLast(verb.root(), 'plac', change))
        }
      }))
    }
  }
}
