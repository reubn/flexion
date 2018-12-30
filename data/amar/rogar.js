import radicalChangePresentMixin from '../mixins/radicalChangePresent'
import maintainSoundSubjunctiveMixin from '../mixins/maintainSoundSubjunctive'

export default {
  verb: 'rogar',
  test: i => ['rogar', 'colgar', 'descolgar', 'holgar'].includes(i),
  inflections: {
    indicative: {
      present: radicalChangePresentMixin('o', 'ue'),
      preterite: {
        singular: {
          first(){return this.root() + 'ué'}
        }
      }
    },
    subjunctive: {
      present: maintainSoundSubjunctiveMixin('g', 'gu')
    }
  }
}
