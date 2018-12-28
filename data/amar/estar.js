import pretéritoGraveMixin from '../mixins/pretéritoGrave'

export default {
  verb: 'estar',
  test: i => i === 'estar',
  inflections: {
    indicative: {
      present: {
        singular: {
          first(){ return this.inflections.root + 'oy'},
          second(){ return this.inflections.root + 'ás'},
          third(){ return this.inflections.root + 'á'},
        },
        plural: {
          third(){ return this.inflections.root + 'án'},
        }
      },
      preterite: pretéritoGraveMixin('estuv')
    },
    subjunctive: {
      present: {
        singular: {
          first(){ return this.inflections.root + 'é'},
          second(){ return this.inflections.root + 'és'},
          third(){ return this.inflections.root + 'é'},
        },
        plural: {
          third(){ return this.inflections.root + 'én'},
        }
      }
    }
  }
}
