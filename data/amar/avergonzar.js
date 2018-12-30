import radicalChangePresentMixin from '../mixins/radicalChangePresent'
import maintainSoundSubjunctiveMixin from '../mixins/maintainSoundSubjunctive'

export default {
  verb: 'avergonzar',
  test: i => i === 'avergonzar',
  inflections: {
    indicative: {
      present: radicalChangePresentMixin('o', 'üe'),
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
