import pretéritoGraveMixin from '../mixins/pretéritoGrave'
import irregularFutureMixin from '../mixins/irregularFuture'
import irregularConditionalMixin from '../mixins/irregularConditional'
import irregularSubjunctiveMixin from '../mixins/irregularSubjunctive'



export default {
  verb: 'haber',
  test: i => i === 'haber',
  inflections: {
    indicative: {
      present: {
        singular: {
          first(){return 'he'},
          second(){return 'has'},
          third(){return ['ha', 'hay']}
        },
        plural: {
          first(){return 'hemos'},
          third(){return 'han'}
        }
      },
      preterite: pretéritoGraveMixin('hub'),
      future: irregularFutureMixin('habr'),
      conditional: irregularConditionalMixin('habr')
    },
    subjunctive: {
      present: irregularSubjunctiveMixin('hay')
    }
  }
}
