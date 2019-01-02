import replaceLast from '../../util/replaceLast'

import radicalChangePresentMixin from '../mixins/radicalChangePresent'
import pretéritoGraveMixin from '../mixins/pretéritoGrave'
import irregularFutureMixin from '../mixins/irregularFuture'
import irregularConditionalMixin from '../mixins/irregularConditional'

export default {
  verb: 'querer',
  test: i => i.endsWith('querer'),
  inflections: {
    indicative: {
      present: radicalChangePresentMixin('e', 'ie'),
      preterite: pretéritoGraveMixin(verb => replaceLast(verb.root(), 'quer', 'quis')),
      future: irregularFutureMixin(verb => verb.root() + 'r'),
      conditional: irregularConditionalMixin(verb => verb.root() + 'r')
    }
  }
}
