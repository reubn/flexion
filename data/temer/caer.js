import radicalChangeSubjunctiveAllMixin from '../mixins/radicalChangeSubjunctiveAll'

import replaceLast from '../../util/replaceLast'

export default {
  verb: 'caer',
  test: i => i.endsWith('caer'),
  inflections: {
    indicative: {
      present: {
        singular: {
          first(){return replaceLast(this.root(), 'a', 'aig') + 'o'}
        }
      },
      preterite: {
        singular: {
          second(){return this.root() + 'íste'},
          third(){return this.root() + 'yó'}
        },
        plural: {
          first(){return this.root() + 'ímos'},
          second(){return this.root() + 'ísteis'},
          third(){return this.root() + 'yeron'}
        }
      }
    },
    subjunctive: {
      present: radicalChangeSubjunctiveAllMixin('a', 'aig')
    }
  }
}
