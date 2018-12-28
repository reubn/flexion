export default {
  verb: 'cazar',
  test: i => i.slice(-3,-2) === 'z',
  inflections: {
    indicative: {
      preterite: {
        singular: {
          first(){ return this.inflections.root().slice(0, -1) + 'cé'}
        }
      }
    },
    subjunctive: {
      present: {
        singular: {
          first(){ return this.inflections.indicative.present.singular.first().slice(0, -2) + 'ce'},
          second(){ return this.inflections.indicative.present.singular.first().slice(0, -2) + 'ces'},
          third(){ return this.inflections.indicative.present.singular.first().slice(0, -2) + 'ce'}
        },
        plural: {
          first(){ return this.inflections.indicative.present.singular.first().slice(0, -2) + 'cemos'},
          second(){ return this.inflections.indicative.present.singular.first().slice(0, -2) + 'céis'},
          third(){ return this.inflections.indicative.present.singular.first().slice(0, -2) + 'cen'}
        }
      }
    }
  }
}
