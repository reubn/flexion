import replaceLast from '../../util/replaceLast'

export default {
  verb: 'rogar',
  test: i => ['rogar', 'colgar', 'descolgar', 'holgar'].includes(i),
  inflections: {
    indicative: {
      present: {
        singular: {
          first(){ return replaceLast(this.root(), 'o', 'ue') + 'o'},
          second(){ return replaceLast(this.root(), 'o', 'ue') + 'as'},
          third(){ return replaceLast(this.root(), 'o', 'ue') + 'a'}
        },
        plural: {
          third(){ return replaceLast(this.root(), 'o', 'ue') + 'an'}
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
