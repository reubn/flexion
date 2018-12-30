import radicalChangeMixin from '../mixins/radicalChange'
import maintainSoundSubjunctiveMixin from '../mixins/maintainSoundSubjunctive'
import maintainSoundPreteriteMixin from '../mixins/maintainSoundPreterite'

export default {
  verb: 'rogar',
  test: i => ['rogar', 'colgar', 'descolgar', 'holgar'].includes(i),
  inflections: {
    indicative: {
      present: radicalChangeMixin('o', 'ue'),
      preterite: maintainSoundPreteriteMixin('g', 'gu')
    },
    subjunctive: {
      present: maintainSoundSubjunctiveMixin('g', 'gu')
    }
  }
}
