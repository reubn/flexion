export default {
  verb: 'sacar',
  test: i => i.slice(-3,-2) === 'c',
  inflections: {
    indicative: {
      preterite: {
        singular: {
          first(verb){ return verb.inflections.root().slice(0, -1) + 'qué'}
        }
      }
    },
    subjunctive: {
      present: {
        singular: {
          first(verb){ return verb.inflections.indicative.present.singular.first().slice(0, -2) + 'que'},
          second(verb){ return verb.inflections.indicative.present.singular.first().slice(0, -2) + 'ques'},
          third(verb){ return verb.inflections.indicative.present.singular.first().slice(0, -2) + 'que'}
        },
        plural: {
          first(verb){ return verb.inflections.indicative.present.singular.first().slice(0, -2) + 'quemos'},
          second(verb){ return verb.inflections.indicative.present.singular.first().slice(0, -2) + 'quéis'},
          third(verb){ return verb.inflections.indicative.present.singular.first().slice(0, -2) + 'quen'}
        }
      }
    }
  }
}
