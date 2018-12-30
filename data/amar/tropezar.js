import radicalChangePresentMixin from '../mixins/radicalChangePresent'
import maintainSoundSubjunctiveMixin from '../mixins/maintainSoundSubjunctive'
import maintainSoundPreteriteMixin from '../mixins/maintainSoundPreterite'

export default {
  verb: 'tropezar',
  test: i => ['tropezar', 'comenzar', 'empezar', 'recomenzar', 'trompezar'].includes(i),
  inflections: {
    indicative: {
      present: radicalChangePresentMixin('e', 'ie'),
      preterite: maintainSoundPreteriteMixin('z', 'c')
    },
    subjunctive: {
      present: maintainSoundSubjunctiveMixin('z', 'c')
    }
  }
}
