import radicalChangeMixin from '../mixins/radicalChange'
import maintainSoundSubjunctiveMixin from '../mixins/maintainSoundSubjunctive'
import maintainSoundPreteriteMixin from '../mixins/maintainSoundPreterite'

export default {
  verb: 'negar',
  test: i => ['negar', 'anegar', 'cegar', 'denegar', 'desasosegar', 'desplegar', 'estregar', 'fregar', 'plegar', 'refregar', 'regar', 'renegar', 'replegar', 'restregar', 'segar', 'sosegar', 'trasegar'].includes(i),
  inflections: {
    indicative: {
      present: radicalChangeMixin('e', 'ie'),
      preterite: maintainSoundPreteriteMixin('g', 'gu')
    },
    subjunctive: {
      present: maintainSoundSubjunctiveMixin('g', 'gu')
    }
  }
}
