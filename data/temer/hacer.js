import replaceLast from '../../util/replaceLast'

import pretéritoGraveMixin from '../mixins/pretéritoGrave'
import irregularFutureMixin from '../mixins/irregularFuture'
import irregularConditionalMixin from '../mixins/irregularConditional'
import radicalChangeSubjunctiveAllMixin from '../mixins/radicalChangeSubjunctiveAll'
import mergeMixin from '../mixins/merge'




export default {
  verb: 'hacer',
  test: i => i.endsWith('hacer'),
  inflections: {
    participle(){return replaceLast(this.root(), 'hac', 'hecho')},
    indicative: {
      present: {
        singular: {
          first(){return replaceLast(this.root(), 'hac', 'hago')}
        }
      },
      preterite: mergeMixin(pretéritoGraveMixin(verb => replaceLast(verb.root(), 'hac', 'hic')), verb => {
        const {singular: {first}} = verb.infinitive === 'rehacer' ? pretéritoGraveMixin(verb => replaceLast(verb.root(), 'hac', 'híc')).call(verb, verb) : {singular:{}}
        const {singular: {third}} = pretéritoGraveMixin(verb => replaceLast(verb.root(), 'hac', verb.infinitive === 'rehacer' ? 'híz' : 'hiz')).call(verb, verb)
        return {
          singular: {
            first,
            third
          }
        }
    }),
      future: irregularFutureMixin(verb => replaceLast(verb.root(), 'hac', 'har')),
      conditional: irregularConditionalMixin(verb => replaceLast(verb.root(), 'hac', 'har'))
    },
    subjunctive: {
      present: radicalChangeSubjunctiveAllMixin('hac', 'hag')
    }
  }
}
