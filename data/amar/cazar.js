import maintainSoundSubjunctiveMixin from '../mixins/maintainSoundSubjunctive'
import maintainSoundPreteriteMixin from '../mixins/maintainSoundPreterite'


export default {
  verb: 'cazar',
  test: i => i.slice(-3, -2) === 'z',
  inflections: {
    indicative: {
      preterite: maintainSoundPreteriteMixin('z', 'c')
    },
    subjunctive: {
      present: maintainSoundSubjunctiveMixin('z', 'c')
    }
  }
}
