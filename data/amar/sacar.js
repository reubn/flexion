import maintainSoundSubjunctiveMixin from '../mixins/maintainSoundSubjunctive'

export default {
  verb: 'sacar',
  test: i => i.slice(-3, -2) === 'c',
  inflections: {
    indicative: {
      preterite: {
        singular: {
          first(){return this.root().slice(0, -1) + 'qué'}
        }
      }
    },
    subjunctive: {
      present: maintainSoundSubjunctiveMixin('c', 'qu', {pluralFirstAndSecondCarry: true})
    }
  }
}
