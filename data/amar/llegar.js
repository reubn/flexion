import maintainSoundSubjunctiveMixin from '../mixins/maintainSoundSubjunctive'

export default {
  verb: 'llegar',
  test: i => i.slice(-3, -2) === 'g',
  inflections: {
    indicative: {
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
