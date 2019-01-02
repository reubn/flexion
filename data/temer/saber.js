import {internalConjugate} from '../../'

import mapObject from '../../util/mapObject'

import pretéritoGraveMixin from '../mixins/pretéritoGrave'
import passInMixin from '../mixins/passIn'
import irregularFutureMixin from '../mixins/irregularFuture'
import irregularConditionalMixin from '../mixins/irregularConditional'

export default {
  verb: 'saber',
  test: i => i === 'saber',
  inflections: {
    indicative: {
      present: {
        singular: {
          first(){return 'sé'}
        }
      },
      preterite: pretéritoGraveMixin('sup'),
      future: irregularFutureMixin('sabr'),
      conditional: irregularConditionalMixin('sabr')
    },
    subjunctive: {
      present: passInMixin(verb => {
        const {conjugation: {subjunctive: {present: endings}}} = internalConjugate(verb.infinitive.slice(-2))

        return mapObject(endings, ({value}) => {
          const ending = value.call(verb, verb)
          return 'sep' + ending
        })
      })
    }
  }
}
