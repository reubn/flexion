import {internalConjugate} from '../../'

import mapObject from '../../util/mapObject'
import passInMixin from '../mixins/passIn'


export default {
  verb: 'ser',
  test: i => i === 'ser',
  inflections: {
    indicative: {
      present: {
        singular: {
          first(){return 'soy'},
          second(){return 'eres'},
          third(){return 'es'}
        },
        plural: {
          first(){return 'somos'},
          second(){return 'sois'},
          third(){return 'son'}
        }
      },
      imperfect: {
        singular: {
          first(){return 'era'},
          second(){return 'eras'},
          third(){return 'era'}
        },
        plural: {
          first(){return 'éramos'},
          second(){return 'erais'},
          third(){return 'eran'}
        }
      },
      preterite: {
        singular: {
          first(){return 'fui'},
          second(){return 'fuiste'},
          third(){return 'fue'}
        },
        plural: {
          first(){return 'fuimos'},
          second(){return 'fuisteis'},
          third(){return 'fueron'}
        }
      }
    },
    subjunctive: {
      present: passInMixin(verb => {
        const {conjugation: {subjunctive: {present: endings}}} = internalConjugate(verb.infinitive.slice(-2))

        return mapObject(endings, ({value}) => {
          const ending = value.call(verb, verb)
          return 'se' + ending
        })
      })
    }
  }
}
