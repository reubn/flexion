import replaceLast from '../../util/replaceLast'

export default {
  verb: 'jugar',
  test: i => i === 'jugar',
  inflections: {
    indicative: {
      present: {
        singular: {
          first(){ return replaceLast(this.root(), 'u', 'ue') + 'o'},
          second(){ return replaceLast(this.root(), 'u', 'ue') + 'as'},
          third(){ return replaceLast(this.root(), 'u', 'ue') + 'a'}
        },
        plural: {
          third(){ return replaceLast(this.root(), 'u', 'ue') + 'an'}
        }
      },
      preterite: {
        singular: {
          first(){ return this.root() + 'ué'}
        }
      }
    },
    subjunctive: {
      present: {
        singular: {
          first(){ return this.indicative.present.singular.first().slice(0, -1) + 'ue'},
          second(){ return this.indicative.present.singular.first().slice(0, -1) + 'ues'},
          third(){ return this.indicative.present.singular.first().slice(0, -1) + 'ue'}
        },
        plural: {
          first(){ return this.root() + 'uemos'},
          second(){ return this.root() + 'uéis'},
          third(){ return this.indicative.present.singular.first().slice(0, -1) + 'uen'}
        }
      }
    }
  }
}
