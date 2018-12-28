import replaceLast from '../../util/replaceLast'

export default {
  verb: 'enraizar',
  test: i => ['enraizar', 'arcaizar', 'corporeizar', 'europeizar', 'hebraizar', 'judaizar'].includes(i),
  inflections: {
    indicative: {
      present: {
        singular: {
          first(verb){ return replaceLast(verb.inflections.root(), 'iz', 'íz') + 'o'},
          second(verb){ return replaceLast(verb.inflections.root(), 'iz', 'íz') + 'as'},
          third(verb){ return replaceLast(verb.inflections.root(), 'iz', 'íz') + 'a'}
        },
        plural: {
          third(verb){ return replaceLast(verb.inflections.root(), 'iz', 'íz') + 'an'}
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
