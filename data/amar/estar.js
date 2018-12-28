import pretéritoGraveMixin from '../mixins/pretéritoGrave'

export default {
  verb: 'estar',
  test: i => i === 'estar',
  inflections: {
    indicative: {
      present: {
        singular: {
          first(verb){ return (console.log(verb.inflections.root), verb.inflections.root()) + 'oy'},
          second(verb){ return verb.inflections.root() + 'ás'},
          third(verb){ return verb.inflections.root() + 'á'},
        },
        plural: {
          third(verb){ return verb.inflections.root() + 'án'},
        }
      },
      preterite: pretéritoGraveMixin('estuv')
    },
    subjunctive: {
      present: {
        singular: {
          first(verb){ return verb.inflections.root() + 'é'},
          second(verb){ return verb.inflections.root() + 'és'},
          third(verb){ return verb.inflections.root() + 'é'},
        },
        plural: {
          third(verb){ return verb.inflections.root() + 'én'},
        }
      }
    }
  }
}
