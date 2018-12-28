import replaceLast from '../../util/replaceLast'

export default {
  verb: 'degollar',
  test: i => i === 'degollar' || i === 'regoldar',
  inflections: {
    indicative: {
      present: {
        singular: {
          first(verb){ return replaceLast(verb.inflections.root(), 'go', 'güe') + 'o'},
          second(verb){ return replaceLast(verb.inflections.root(), 'go', 'güe') + 'as'},
          third(verb){ return replaceLast(verb.inflections.root(), 'go', 'güe') + 'a'}
        },
        plural: {
          third(verb){ return replaceLast(verb.inflections.root(), 'go', 'güe') + 'an'}
        }
      }
    },
    subjunctive: {
      present: {
        plural: {
          first(verb){ return verb.inflections.root() + 'emos'},
          second(verb){ return verb.inflections.root() + 'éis'}
        }
      }
    }
  }
}
