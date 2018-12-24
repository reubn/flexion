import replaceLast from '../../util/replaceLast'

export default {
  verb: 'jugar',
  test: i => i === 'jugar',
  inflections: {
    indicative: {
      present: {
        singular: {
          first(){ return replaceLast(this.inflections.root, 'u', 'ue') + 'o'},
          second(){ return replaceLast(this.inflections.root, 'u', 'ue') + 'as'},
          third(){ return replaceLast(this.inflections.root, 'u', 'ue') + 'a'}
        },
        plural: {
          third(){ return replaceLast(this.inflections.root, 'u', 'ue') + 'an'}
        }
      },
      preterite: {
        singular: {
          first(){ return this.inflections.root + 'ué'}
        }
      }
    },
    subjunctive: {
      present: {
        singular: {
          first(){ return this.inflections.indicative.present.singular.first.slice(0, -1) + 'ue'},
          second(){ return this.inflections.indicative.present.singular.first.slice(0, -1) + 'ues'},
          third(){ return this.inflections.indicative.present.singular.first.slice(0, -1) + 'ue'}
        },
        plural: {
          first(){ return this.inflections.root + 'uemos'},
          second(){ return this.inflections.root + 'uéis'},
          third(){ return this.inflections.indicative.present.singular.first.slice(0, -1) + 'uen'}
        }
      }
    }
  }
}
