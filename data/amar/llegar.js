export default {
  verb: 'llegar',
  test: i => i.slice(-3,-2) === 'g',
  inflections: {
    indicative: {
      preterite: {
        singular: {
          first(verb){ return verb.inflections.root() + 'ué'}
        }
      }
    },
    subjunctive: {
      present: {
        singular: {
          first(verb){ return verb.inflections.indicative.present.singular.first().slice(0, -1) + 'ue'},
          second(verb){ return verb.inflections.indicative.present.singular.first().slice(0, -1) + 'ues'},
          third(verb){ return verb.inflections.indicative.present.singular.first().slice(0, -1) + 'ue'}
        },
        plural: {
          first(verb){ return verb.inflections.indicative.present.singular.first().slice(0, -1) + 'uemos'},
          second(verb){ return verb.inflections.indicative.present.singular.first().slice(0, -1) + 'uéis'},
          third(verb){ return verb.inflections.indicative.present.singular.first().slice(0, -1) + 'uen'}
        }
      }
    }
  }
}
