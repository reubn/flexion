import {internalConjugate} from '../../'

import mapObject from '../../util/mapObject'

import passInMixin from '../mixins/passIn'


export default {
  verb: 'ver',
  test: i => i === 'ver',
  inflections: {
    participle(){'visto'},
    indicative: {
      present: {
        singular: {
          first(){return 'veo'},
          second(){return 'ves'},
          third(){return 've'}
        },
        plural: {
          second(){return 'veis'},
          third(){return 'ven'}
        }
      },
      preterite: {
        singular: {
          first(){return 'vi'},
          third(){return 'vio'}
        }
      },
      imperfect: {
        singular: {
          first(){return 'veía'},
          second(){return 'veías'},
          third(){return 'veía'}
        },
        plural: {
          first(){return 'veíamos'},
          second(){return 'veíais'},
          third(){return 'veían'}
        }
      }
    },
    subjunctive: {
      present: passInMixin(verb => {
        const {conjugation: {subjunctive: {present: {plural: {first, second}}}}} = internalConjugate(verb.infinitive.slice(-2))

        return mapObject({plural: {first, second}}, ({value}) => {
          const ending = value.call(verb, verb)
          return 've' + ending
        })
      })
    }
  }
}
