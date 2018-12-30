import maintainSoundSubjunctiveMixin from '../mixins/maintainSoundSubjunctive'

export default {
  verb: 'cazar',
  test: i => i.slice(-3, -2) === 'z',
  inflections: {
    indicative: {
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
