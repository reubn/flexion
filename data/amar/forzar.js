import radicalChangePresentMixin from '../mixins/radicalChangePresent'
import maintainSoundSubjunctiveMixin from '../mixins/maintainSoundSubjunctive'
import maintainSoundPreteriteMixin from '../mixins/maintainSoundPreterite'

export default {
  verb: 'forzar',
  test: i => i.endsWith('orzar') && i.length !== 5,
  inflections: {
    indicative: {
      present: radicalChangePresentMixin('o', 'ue'),
      preterite: maintainSoundPreteriteMixin('z', 'c')
    },
    subjunctive: {
      present: maintainSoundSubjunctiveMixin('z', 'c')
    }
  }
}
