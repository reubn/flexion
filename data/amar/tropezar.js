import radicalChangePresentMixin from '../mixins/radicalChangePresent'
import maintainSoundSubjunctiveMixin from '../mixins/maintainSoundSubjunctive'

export default {
  verb: 'tropezar',
  test: i => ['tropezar', 'comenzar', 'empezar', 'recomenzar', 'trompezar'].includes(i),
  inflections: {
    indicative: {
      present: radicalChangePresentMixin('e', 'ie'),
      preterite: {
        singular: {
          first(){return this.root().slice(0, -1) + 'cé'}
        }
      }
    },
    subjunctive: {
      present: maintainSoundSubjunctiveMixin('z', 'c')
    }
  }
}
