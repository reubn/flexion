import replaceLast from '../../util/replaceLast'

export default {
  verb: 'adecuar',
  test: i => ['adecuar', 'apropincuar', 'colicuar', 'evacuar', 'licuar', 'promiscuar'].includes(i),
  inflections: {
    indicative: {
      present: {
        singular: {
          first(verb){ return [verb.inflections.root(), replaceLast(verb.inflections.root(), 'cu', 'cú')].map(root => root + 'o')},
          second(verb){ return [verb.inflections.root(), replaceLast(verb.inflections.root(), 'cu', 'cú')].map(root => root + 'as')},
          third(verb){ return [verb.inflections.root(), replaceLast(verb.inflections.root(), 'cu', 'cú')].map(root => root + 'a')}
        },
        plural: {
          third(verb){ return [verb.inflections.root(), replaceLast(verb.inflections.root(), 'cu', 'cú')].map(root => root + 'an')}
        }
      }
    },
    subjunctive: {
      present: {
        singular: {
          first(verb){ return [verb.inflections.root(), replaceLast(verb.inflections.root(), 'cu', 'cú')].map(root => root + 'e')},
          second(verb){ return [verb.inflections.root(), replaceLast(verb.inflections.root(), 'cu', 'cú')].map(root => root + 'es')},
          third(verb){ return [verb.inflections.root(), replaceLast(verb.inflections.root(), 'cu', 'cú')].map(root => root + 'e')}
        },
        plural: {
          first(verb){ return verb.inflections.root() + 'emos'},
          second(verb){ return verb.inflections.root() + 'éis'},
          third(verb){ return [verb.inflections.root(), replaceLast(verb.inflections.root(), 'cu', 'cú')].map(root => root + 'en')}
        }
      }
    }
  }
}
