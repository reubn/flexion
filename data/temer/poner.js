import replaceLast from '../../util/replaceLast'

import radicalChangePresentMixin from '../mixins/radicalChangePresent'
import radicalChangeSubjunctiveAllMixin from '../mixins/radicalChangeSubjunctiveAll'
import pretéritoGraveMixin from '../mixins/pretéritoGrave'
import irregularFutureMixin from '../mixins/irregularFuture'
import irregularConditionalMixin from '../mixins/irregularConditional'

export default {
  verb: 'poner',
  test: i => i.endsWith('poner'),
  inflections: {
    participle(){return replaceLast(this.infinitive, 'poner', 'puesto')},
    indicative: {
      present: radicalChangePresentMixin('n', 'ng', {mask: {singular: {first: true}}}),
      preterite: pretéritoGraveMixin(verb => replaceLast(verb.root(), 'pon', 'pus')),
      future: irregularFutureMixin(verb => replaceLast(verb.root(), 'pon', 'pondr')),
      conditional: irregularConditionalMixin(verb => replaceLast(verb.root(), 'pon', 'pondr'))
    },
    subjunctive: {
      present: radicalChangeSubjunctiveAllMixin('n', 'ng')
    }
  }
}
