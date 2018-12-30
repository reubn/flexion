import radicalChangePresentMixin from '../mixins/radicalChangePresent'
import maintainSoundSubjunctiveMixin from '../mixins/maintainSoundSubjunctive'
import maintainSoundPreteriteMixin from '../mixins/maintainSoundPreterite'

export default {
  verb: 'avergonzar',
  test: i => i === 'avergonzar',
  inflections: {
    indicative: {
      present: radicalChangePresentMixin('o', 'üe'),
      preterite: maintainSoundPreteriteMixin('z', 'c')
    },
    subjunctive: {
      present: maintainSoundSubjunctiveMixin('z', 'c')
    }
  }
}
