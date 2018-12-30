import maintainSoundSubjunctiveMixin from '../mixins/maintainSoundSubjunctive'
import maintainSoundPreteriteMixin from '../mixins/maintainSoundPreterite'

export default {
  verb: 'llegar',
  test: i => i.slice(-3, -2) === 'g',
  inflections: {
    indicative: {
      preterite: maintainSoundPreteriteMixin('g', 'gu')
    },
    subjunctive: {
      present: maintainSoundSubjunctiveMixin('g', 'gu')
    }
  }
}
