import {internalConjugate} from '../../'

import mapObject from '../../util/mapObject'
import replaceLast from '../../util/replaceLast'

import passInMixin from '../mixins/passIn'
import irregularFutureMixin from '../mixins/irregularFuture'
import irregularConditionalMixin from '../mixins/irregularConditional'

export default {
  verb: 'valer',
  test: i => i.endsWith('valer'),
  inflections: {
    indicative: {
      present: {
        singular: {
          first(){return replaceLast(this.infinitive, 'valer', 'valgo')}
        }
      },
      future: irregularFutureMixin(verb => replaceLast(verb.infinitive, 'valer', 'valdr')),
      conditional: irregularConditionalMixin(verb => replaceLast(verb.infinitive, 'valer', 'valdr'))
    },
    subjunctive: {
      present: passInMixin(verb => {
        const {conjugation: {subjunctive: {present: {plural: {first, second}}}}} = internalConjugate(verb.infinitive.slice(-2))

        return mapObject({plural: {first, second}}, ({value}) => {
          const ending = value.call(verb, verb)
          return 'valg' + ending
        })
      })
    }
  }
}
