import replaceLast from '../../util/replaceLast'

export default {
  verb: 'forzar',
  test: i => i.endsWith('orzar') && i.length !== 5,
  inflections: {
    indicative: {
      present: {
        singular: {
          first(verb){ return replaceLast(verb.inflections.root(), 'or', 'uer') + 'o'},
          second(verb){ return replaceLast(verb.inflections.root(), 'or', 'uer') + 'as'},
          third(verb){ return replaceLast(verb.inflections.root(), 'or', 'uer') + 'a'}
        },
        plural: {
          third(verb){ return replaceLast(verb.inflections.root(), 'or', 'uer') + 'an'}
        }
      },
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
          first(verb){ return verb.inflections.root().slice(0, -1) + 'cemos'},
          second(verb){ return verb.inflections.root().slice(0, -1) + 'céis'},
          third(verb){ return verb.inflections.indicative.present.singular.first().slice(0, -2) + 'cen'}
        }
      }
    }
  }
}
