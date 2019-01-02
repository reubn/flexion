import replaceLast from '../../util/replaceLast'

import radicalChangePresentMixin from '../mixins/radicalChangePresent'
import radicalChangeSubjunctiveAllMixin from '../mixins/radicalChangeSubjunctiveAll'
import pretéritoGraveMixin from '../mixins/pretéritoGrave'
import mergeMixin from '../mixins/merge'
import irregularFutureMixin from '../mixins/irregularFuture'
import irregularConditionalMixin from '../mixins/irregularConditional'

export default {
  verb: 'tener',
  test: i => i.endsWith('tener'),
  inflections: {
    indicative: {
      present: mergeMixin(
        radicalChangePresentMixin('n', 'ng', {mask: {singular: {first: true}}}),
        radicalChangePresentMixin('e', 'ie', {mask: {singular: {second: true, third: true}, plural: {third: true}}})
      ),
      preterite: pretéritoGraveMixin(verb => replaceLast(verb.root(), 'ten', 'tuv')),
      future: irregularFutureMixin(verb => replaceLast(verb.root(), 'ten', 'tendr')),
      conditional: irregularConditionalMixin(verb => replaceLast(verb.root(), 'ten', 'tendr'))
    },
    subjunctive: {
      present: radicalChangeSubjunctiveAllMixin('n', 'ng')
    }
  }
}
