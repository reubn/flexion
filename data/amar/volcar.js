import radicalChangePresentMixin from '../mixins/radicalChangePresent'
import maintainSoundSubjunctiveMixin from '../mixins/maintainSoundSubjunctive'
import maintainSoundPreteriteMixin from '../mixins/maintainSoundPreterite'

export default {
  verb: 'volcar',
  test: i => ['volcar', 'emporcar', 'revolcar', 'trastrocar', 'trocar'].includes(i),
  inflections: {
    indicative: {
      present: radicalChangePresentMixin('o', 'ue'),
      preterite: maintainSoundPreteriteMixin('c', 'qu')
    },
    subjunctive: {
      present: maintainSoundSubjunctiveMixin('c', 'qu')
    }
  }
}
