export default {
  verb: 'sacar',
  test: i => i.slice(-3,-2) === 'c',
  inflections: {
    indicative: {
      preterite: {
        singular: {
          first(){ return this.inflections.root.slice(0, -1) + 'qué'}
        }
      }
    },
    subjunctive: {
      present: {
        singular: {
          first(){ return this.inflections.indicative.present.singular.first.slice(0, -2) + 'que'},
          second(){ return this.inflections.indicative.present.singular.first.slice(0, -2) + 'ques'},
          third(){ return this.inflections.indicative.present.singular.first.slice(0, -2) + 'que'}
        },
        plural: {
          first(){ return this.inflections.indicative.present.singular.first.slice(0, -2) + 'quemos'},
          second(){ return this.inflections.indicative.present.singular.first.slice(0, -2) + 'quéis'},
          third(){ return this.inflections.indicative.present.singular.first.slice(0, -2) + 'quen'}
        }
      }
    }
  }
}
