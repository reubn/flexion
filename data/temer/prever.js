import {internalConjugate} from '../../'

import mapObject from '../../util/mapObject'

import passInMixin from '../mixins/passIn'


export default {
  verb: 'prever',
  test: i => i.endsWith('ever'),
  inflections: {
    participle(){return this.root() + 'isto'},
    indicative: {
      present: {
        singular: {
          first(){return this.root() + 'eo'},
          second(){return this.root() + 'és'},
          third(){return this.root() + 'é'}
        },
        plural: {
          third(){return this.root() + 'én'}
        }
      },
      imperfect: passInMixin(verb => {
        const {conjugation: {indicative: {imperfect: endings}}} = internalConjugate(verb.infinitive.slice(-2))

        return mapObject(endings, ({value}) => {
          const ending = value.call(verb, verb)
          return verb.root() + 'e' + ending
        })
      })
    },
    subjunctive: {
      present: passInMixin(verb => {
        const {conjugation: {subjunctive: {present: {plural: {first, second}}}}} = internalConjugate(verb.infinitive.slice(-2))

        return mapObject({plural: {first, second}}, ({value}) => {
          const ending = value.call(verb, verb)
          return verb.indicative.present.singular.first().slice(0, -1) + ending
        })
      })
    }
  }
}
