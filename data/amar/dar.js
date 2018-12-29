export default {
  verb: 'dar',
  test: i => i === 'dar',
  inflections: {
    indicative: {
      present: {
        singular: {
          first(){return 'doy'}
        },
        plural: {
          second(){return 'dais'}
        }
      },
      preterite: {
        singular: {
          first(){return 'di'},
          second(){return 'diste'},
          third(){return 'dio'}
        },
        plural: {
          first(){return 'dimos'},
          second(){return 'disteis'},
          third(){return 'dieron'}
        }
      }
    },
    subjunctive: {
      present: {
        singular: {
          first(){return 'dé'},
          third(){return 'dé'}
        },
        plural: {
          second(){return 'deis'}
        }
      }
    }
  }
}
