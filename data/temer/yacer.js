import {internalConjugate} from '../../'

import replaceLast from '../../util/replaceLast'
import mapObject from '../../util/mapObject'

import passInMixin from '../mixins/passIn'

export default {
  verb: 'yacer',
  test: i => i.endsWith('yacer'),
  inflections: {
    indicative: {
      present: {
        singular: {
          first(){return ['zc', 'zg', 'g'].map(change => replaceLast(this.root(), 'c', change) + 'o')}
        }
      }
    },
    subjunctive: {
      present: passInMixin(verb => {
        const {conjugation: {subjunctive: {present}}} = internalConjugate(verb.infinitive.slice(-2))
        const stems = ['yazc', 'yazg', 'yag']

        return mapObject(present, ({value}) => {
          const ending = value.call(verb, verb)
          return stems.map(stem => replaceLast(verb.root(), 'yac', stem)+ ending)
        })
      })
    }
  }
}
