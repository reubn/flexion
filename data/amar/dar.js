export default {
  verb: 'dar',
  test: i => i === 'dar',
  inflections: {
    indicative: {
      present: {
        singular: {
          first(verb){ return 'doy'},
        },
        plural: {
          second(verb){ return 'dais'},
        }
      },
      preterite: {
        singular: {
          first(verb){ return 'di'},
          second(verb){ return 'diste'},
          third(verb){ return 'dio'}
        },
        plural: {
          first(verb){ return 'dimos'},
          second(verb){ return 'disteis'},
          third(verb){ return 'dieron'}
        }
      }
    },
    subjunctive: {
      present: {
        singular: {
          first(verb){ return 'dé'},
          third(verb){ return 'dé'},
        },
        plural: {
          second(verb){ return 'deis'},
        }
      }
    }
  }
}
