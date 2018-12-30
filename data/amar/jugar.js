import radicalChangeMixin from '../mixins/radicalChange'
import maintainSoundSubjunctiveMixin from '../mixins/maintainSoundSubjunctive'
import maintainSoundPreteriteMixin from '../mixins/maintainSoundPreterite'

export default {
  verb: 'jugar',
  test: i => i === 'jugar',
  inflections: {
    indicative: {
      present: radicalChangeMixin('u', 'ue'),
      preterite: maintainSoundPreteriteMixin('g', 'gu')
    },
    subjunctive: {
      present: maintainSoundSubjunctiveMixin('g', 'gu')
    }
  }
}
