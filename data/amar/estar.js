import pretéritoGraveMixin from '../mixins/pretéritoGrave'

export default {
  verb: 'estar',
  test: i => i === 'estar',
  inflections: {
    indicative: {
      present: {
        singular: {
          first(){ return this.root() + 'oy'},
          second(){ return this.root() + 'ás'},
          third(){ return this.root() + 'á'},
        },
        plural: {
          third(){ return this.root() + 'án'},
        }
      },
      preterite: pretéritoGraveMixin('estuv')
    },
    subjunctive: {
      present: {
        singular: {
          first(){ return this.root() + 'é'},
          second(){ return this.root() + 'és'},
          third(){ return this.root() + 'é'},
        },
        plural: {
          third(){ return this.root() + 'én'},
        }
      }
    }
  }
}
