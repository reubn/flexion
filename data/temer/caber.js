import radicalChangeSubjunctiveAllMixin from '../mixins/radicalChangeSubjunctiveAll'
import pretéritoGraveMixin from '../mixins/pretéritoGrave'
import irregularFutureMixin from '../mixins/irregularFuture'
import irregularConditionalMixin from '../mixins/irregularConditional'

export default {
  verb: 'caber',
  test: i => i === 'caber',
  inflections: {
    indicative: {
      present: {
        singular: {
          first(){return 'quepo'}
        }
      },
      preterite: pretéritoGraveMixin('cup'),
      future: irregularFutureMixin('cabr'),
      conditional: irregularConditionalMixin('cabr')
    },
    subjunctive: {
      present: radicalChangeSubjunctiveAllMixin('cab', 'quep')
    }
  }
}
