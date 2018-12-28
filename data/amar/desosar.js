import replaceLast from '../../util/replaceLast'

export default {
  verb: 'desosar',
  test: i => i === 'desosar',
  inflections: {
    indicative: {
      present: {
        singular: {
          first(verb){ return replaceLast(verb.inflections.root(), 'o', 'hue') + 'o'},
          second(verb){ return replaceLast(verb.inflections.root(), 'o', 'hue') + 'as'},
          third(verb){ return replaceLast(verb.inflections.root(), 'o', 'hue') + 'a'}
        },
        plural: {
          third(verb){ return replaceLast(verb.inflections.root(), 'o', 'hue') + 'an'}
        }
      }
    },
    subjunctive: {
      present: {
        plural: {
          first(verb){ return verb.inflections.root() + 'emos'},
          second(verb){ return verb.inflections.root() + 'éis'},
        }
      }
    }
  }
}
