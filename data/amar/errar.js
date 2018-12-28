import replaceLast from '../../util/replaceLast'

export default {
  verb: 'errar',
  test: i => i === 'errar',
  inflections: {
    indicative: {
      present: {
        singular: {
          first(verb){ return [verb.inflections.root() + 'o', 'yerro']},
          second(verb){ return [verb.inflections.root() + 'as', 'yerras']},
          third(verb){ return [verb.inflections.root() + 'a', 'yerra']}
        },
        plural: {
          third(verb){ return [verb.inflections.root() + 'an', 'yerran']}
        }
      }
    },
    subjunctive: {
      present: {
        singular: {
          first(verb){ return [verb.inflections.root() + 'e', 'yerre']},
          second(verb){ return [verb.inflections.root() + 'es', 'yerres']},
          third(verb){ return [verb.inflections.root() + 'e', 'yerre']}
        },
        plural: {
          first(verb){ return verb.inflections.root() + 'emos'},
          second(verb){ return verb.inflections.root() + 'éis'},
          third(verb){ return [verb.inflections.root() + 'en', 'yerren']}
        }
      }
    }
  }
}
