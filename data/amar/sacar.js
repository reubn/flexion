import maintainSoundSubjunctiveMixin from '../mixins/maintainSoundSubjunctive'
import maintainSoundPreteriteMixin from '../mixins/maintainSoundPreterite'

export default {
  verb: 'sacar',
  test: i => i.slice(-3, -2) === 'c',
  inflections: {
    indicative: {
      preterite: maintainSoundPreteriteMixin('c', 'qu')
    },
    subjunctive: {
      present: maintainSoundSubjunctiveMixin('c', 'qu', {pluralFirstAndSecondCarry: true})
    }
  }
}
