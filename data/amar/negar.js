import replaceLast from '../../util/replaceLast'

export default {
  verb: 'negar',
  test: i => ['negar', 'anegar', 'cegar', 'denegar', 'desasosegar', 'desplegar', 'estregar', 'fregar', 'plegar', 'refregar', 'regar', 'renegar', 'replegar', 'restregar', 'segar', 'sosegar', 'trasegar'].includes(i),
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
