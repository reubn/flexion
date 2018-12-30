import radicalChangePresentMixin from '../mixins/radicalChangePresent'
import maintainSoundSubjunctiveMixin from '../mixins/maintainSoundSubjunctive'

export default {
  verb: 'forzar',
  test: i => i.endsWith('orzar') && i.length !== 5,
  inflections: {
    indicative: {
      present: radicalChangePresentMixin('o', 'ue'),
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
