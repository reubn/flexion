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
      present: {
        singular: {
          first(){return this.indicative.present.singular.first().slice(0, -2) + 'ce'},
          second(){return this.indicative.present.singular.first().slice(0, -2) + 'ces'},
          third(){return this.indicative.present.singular.first().slice(0, -2) + 'ce'}
        },
        plural: {
          first(){return this.indicative.present.singular.first().slice(0, -2) + 'cemos'},
          second(){return this.indicative.present.singular.first().slice(0, -2) + 'céis'},
          third(){return this.indicative.present.singular.first().slice(0, -2) + 'cen'}
        }
      }
    }
  }
}
