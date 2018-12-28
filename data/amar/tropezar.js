import replaceLast from '../../util/replaceLast'

export default {
  verb: 'tropezar',
  test: i => ['tropezar', 'comenzar', 'empezar', 'recomenzar', 'trompezar'].includes(i),
  inflections: {
    indicative: {
      present: {
        singular: {
          first(verb){ return replaceLast(verb.inflections.root(), 'e', 'ie') + 'o'},
          second(verb){ return replaceLast(verb.inflections.root(), 'e', 'ie') + 'as'},
          third(verb){ return replaceLast(verb.inflections.root(), 'e', 'ie') + 'a'}
        },
        plural: {
          third(verb){ return replaceLast(verb.inflections.root(), 'e', 'ie') + 'an'}
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
