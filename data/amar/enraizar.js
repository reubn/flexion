import radicalChangePresentMixin from '../mixins/radicalChangePresent'
import maintainSoundSubjunctiveMixin from '../mixins/maintainSoundSubjunctive'
import maintainSoundPreteriteMixin from '../mixins/maintainSoundPreterite'


export default {
  verb: 'enraizar',
  test: i => ['enraizar', 'arcaizar', 'corporeizar', 'europeizar', 'hebraizar', 'judaizar'].includes(i),
  inflections: {
    indicative: {
      present: radicalChangePresentMixin('iz', 'íz'),
      preterite: maintainSoundPreteriteMixin('z', 'c')
    },
    subjunctive: {
      present: maintainSoundSubjunctiveMixin('z', 'c')
    }
  }
}
