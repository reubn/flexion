import replaceLast from '../../util/replaceLast'

import pretéritoGraveMixin from '../mixins/pretéritoGrave'
import irregularFutureMixin from '../mixins/irregularFuture'
import irregularConditionalMixin from '../mixins/irregularConditional'
import radicalChangeSubjunctiveAllMixin from '../mixins/radicalChangeSubjunctiveAll'
import mergeMixin from '../mixins/merge'




export default {
  verb: 'hacer',
  test: i => i.endsWith('hacer') || i === 'satisfacer',
  inflections: {
    participle(){return replaceLast(this.root(), 'ac', 'echo')},
    indicative: {
      present: {
        singular: {
          first(){return replaceLast(this.root(), 'ac', 'ago')}
        }
      },
      preterite: mergeMixin(pretéritoGraveMixin(verb => replaceLast(verb.root(), 'ac', 'ic')), verb => {
        const {singular: {first}} = verb.infinitive === 'rehacer' ? pretéritoGraveMixin(verb => replaceLast(verb.root(), 'ac', 'íc')).call(verb, verb) : {singular:{}}
        const {singular: {third}} = pretéritoGraveMixin(verb => replaceLast(verb.root(), 'ac', verb.infinitive === 'rehacer' ? 'íz' : 'iz')).call(verb, verb)
        return {
          singular: {
            first,
            third
          }
        }
    }),
      future: irregularFutureMixin(verb => replaceLast(verb.root(), 'ac', 'ar')),
      conditional: irregularConditionalMixin(verb => replaceLast(verb.root(), 'ac', 'ar'))
    },
    subjunctive: {
      present: radicalChangeSubjunctiveAllMixin('ac', 'ag')
    }
  }
}
