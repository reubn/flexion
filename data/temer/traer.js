import radicalChangeSubjunctiveAllMixin from '../mixins/radicalChangeSubjunctiveAll'
import pretéritoGraveMixin from '../mixins/pretéritoGrave'

import replaceLast from '../../util/replaceLast'

export default {
  verb: 'traer',
  test: i => i.endsWith('traer'),
  inflections: {
    indicative: {
      present: {
        singular: {
          first(){return replaceLast(this.root(), 'a', 'aig') + 'o'}
        }
      },
      preterite: pretéritoGraveMixin(verb => replaceLast(verb.root(), 'tra', 'traj'))
    },
    subjunctive: {
      present: radicalChangeSubjunctiveAllMixin('a', 'aig')
    }
  }
}
