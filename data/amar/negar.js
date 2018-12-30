import radicalChangePresentMixin from '../mixins/radicalChangePresent'
import maintainSoundSubjunctiveMixin from '../mixins/maintainSoundSubjunctive'

export default {
  verb: 'negar',
  test: i => ['negar', 'anegar', 'cegar', 'denegar', 'desasosegar', 'desplegar', 'estregar', 'fregar', 'plegar', 'refregar', 'regar', 'renegar', 'replegar', 'restregar', 'segar', 'sosegar', 'trasegar'].includes(i),
  inflections: {
    indicative: {
      present: radicalChangePresentMixin('e', 'ie'),
      preterite: {
        singular: {
          first(){return this.root() + 'ué'}
        }
      }
    },
    subjunctive: {
      present: maintainSoundSubjunctiveMixin('g', 'gu')
    }
  }
}
