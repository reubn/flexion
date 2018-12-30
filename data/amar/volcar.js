import radicalChangePresentMixin from '../mixins/radicalChangePresent'
import maintainSoundSubjunctiveMixin from '../mixins/maintainSoundSubjunctive'

export default {
  verb: 'volcar',
  test: i => ['volcar', 'emporcar', 'revolcar', 'trastrocar', 'trocar'].includes(i),
  inflections: {
    indicative: {
      present: radicalChangePresentMixin('o', 'ue'),
      preterite: {
        singular: {
          first(){return this.root().slice(0, -1) + 'qué'}
        }
      }
    },
    subjunctive: {
      present: maintainSoundSubjunctiveMixin('c', 'qu')
    }
  }
}
