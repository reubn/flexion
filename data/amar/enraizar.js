import radicalChangePresentMixin from '../mixins/radicalChangePresent'
import maintainSoundSubjunctiveMixin from '../mixins/maintainSoundSubjunctive'

export default {
  verb: 'enraizar',
  test: i => ['enraizar', 'arcaizar', 'corporeizar', 'europeizar', 'hebraizar', 'judaizar'].includes(i),
  inflections: {
    indicative: {
      present: radicalChangePresentMixin('iz', 'íz'),
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
