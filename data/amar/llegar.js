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
      present: {
        singular: {
          first(){return this.indicative.present.singular.first().slice(0, -1) + 'ue'},
          second(){return this.indicative.present.singular.first().slice(0, -1) + 'ues'},
          third(){return this.indicative.present.singular.first().slice(0, -1) + 'ue'}
        },
        plural: {
          first(){return this.indicative.present.singular.first().slice(0, -1) + 'uemos'},
          second(){return this.indicative.present.singular.first().slice(0, -1) + 'uéis'},
          third(){return this.indicative.present.singular.first().slice(0, -1) + 'uen'}
        }
      }
    }
  }
}
