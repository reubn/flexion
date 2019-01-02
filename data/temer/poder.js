import replaceLast from '../../util/replaceLast'

import radicalChangePresentMixin from '../mixins/radicalChangePresent'
import pretéritoGraveMixin from '../mixins/pretéritoGrave'
import irregularFutureMixin from '../mixins/irregularFuture'
import irregularConditionalMixin from '../mixins/irregularConditional'

export default {
  verb: 'poder',
  test: i => i === 'poder',
  inflections: {
    gerund(){return replaceLast(this.root(), 'od', 'ud') + 'iendo'},
    indicative: {
      present: radicalChangePresentMixin('o', 'ue'),
      preterite: pretéritoGraveMixin('pud'),
      future: irregularFutureMixin('podr'),
      conditional: irregularConditionalMixin('podr')
    }
  }
}
