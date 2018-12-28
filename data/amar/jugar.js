import replaceLast from '../../util/replaceLast'

export default {
  verb: 'jugar',
  test: i => i === 'jugar',
  inflections: {
    indicative: {
      present: {
        singular: {
          first(verb){ return replaceLast(verb.inflections.root(), 'u', 'ue') + 'o'},
          second(verb){ return replaceLast(verb.inflections.root(), 'u', 'ue') + 'as'},
          third(verb){ return replaceLast(verb.inflections.root(), 'u', 'ue') + 'a'}
        },
        plural: {
          third(verb){ return replaceLast(verb.inflections.root(), 'u', 'ue') + 'an'}
        }
      },
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
          first(verb){ return verb.inflections.root() + 'uemos'},
          second(verb){ return verb.inflections.root() + 'uéis'},
          third(verb){ return verb.inflections.indicative.present.singular.first().slice(0, -1) + 'uen'}
        }
      }
    }
  }
}
