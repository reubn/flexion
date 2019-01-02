import {internalConjugate} from '../../'

import mapObject from '../../util/mapObject'

import passInMixin from '../mixins/passIn'

export default {
  verb: 'roer',
  test: i => i.endsWith('roer'),
  inflections: {
    indicative: {
      present: {
        singular: {
          first(){return ['', 'ig', 'y'].map(change => this.root() + change + 'o')}
        }
      },
      preterite: {
        singular: {
          second(){return this.root() + 'íste'},
          third(){return this.root() + 'yó'}
        },
        plural: {
          first(){return this.root() + 'ímos'},
          second(){return this.root() + 'ísteis'},
          third(){return this.root() + 'yeron'}
        }
      }
    },
    subjunctive: {
      present: passInMixin(verb => {
        const {conjugation: {subjunctive: {present}}} = internalConjugate(verb.infinitive.slice(-2))
        const stems = ['', 'ig', 'y']

        return mapObject(present, ({value}) => {
          const ending = value.call(verb, verb)
          return stems.map(stem => verb.root() + stem + ending)
        })
      })
    }
  }
}
