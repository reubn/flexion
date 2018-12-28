import replaceLast from '../../util/replaceLast'

export default {
  verb: 'volcar',
  test: i => ['volcar', 'emporcar', 'revolcar', 'trastrocar', 'trocar'].includes(i),
  inflections: {
    indicative: {
      present: {
        singular: {
          first(verb){ return replaceLast(verb.inflections.root(), 'o', 'ue') + 'o'},
          second(verb){ return replaceLast(verb.inflections.root(), 'o', 'ue') + 'as'},
          third(verb){ return replaceLast(verb.inflections.root(), 'o', 'ue') + 'a'}
        },
        plural: {
          third(verb){ return replaceLast(verb.inflections.root(), 'o', 'ue') + 'an'}
        }
      },
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
          first(verb){ return verb.inflections.root().slice(0, -1) + 'quemos'},
          second(verb){ return verb.inflections.root().slice(0, -1) + 'quéis'},
          third(verb){ return verb.inflections.indicative.present.singular.first().slice(0, -2) + 'quen'}
        }
      }
    }
  }
}
