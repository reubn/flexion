export default {
  verb: 'cazar',
  test: i => i.slice(-3,-2) === 'z',
  inflections: {
    indicative: {
      preterite: {
        singular: {
          first(verb){ return verb.inflections.root().slice(0, -1) + 'cé'}
        }
      }
    },
    subjunctive: {
      present: {
        singular: {
          first(verb){ return verb.inflections.indicative.present.singular.first().slice(0, -2) + 'ce'},
          second(verb){ return verb.inflections.indicative.present.singular.first().slice(0, -2) + 'ces'},
          third(verb){ return verb.inflections.indicative.present.singular.first().slice(0, -2) + 'ce'}
        },
        plural: {
          first(verb){ return verb.inflections.indicative.present.singular.first().slice(0, -2) + 'cemos'},
          second(verb){ return verb.inflections.indicative.present.singular.first().slice(0, -2) + 'céis'},
          third(verb){ return verb.inflections.indicative.present.singular.first().slice(0, -2) + 'cen'}
        }
      }
    }
  }
}
