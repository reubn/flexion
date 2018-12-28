import replaceLast from '../../util/replaceLast'

export default {
  verb: 'forzar',
  test: i => i.endsWith('orzar') && i.length !== 5,
  inflections: {
    indicative: {
      present: {
        singular: {
          first(){ return replaceLast(this.inflections.root(), 'or', 'uer') + 'o'},
          second(){ return replaceLast(this.inflections.root(), 'or', 'uer') + 'as'},
          third(){ return replaceLast(this.inflections.root(), 'or', 'uer') + 'a'}
        },
        plural: {
          third(){ return replaceLast(this.inflections.root(), 'or', 'uer') + 'an'}
        }
      },
      preterite: {
        singular: {
          first(){ return this.inflections.root().slice(0, -1) + 'cé'}
        }
      }
    },
    subjunctive: {
      present: {
        singular: {
          first(){ return this.inflections.indicative.present.singular.first().slice(0, -2) + 'ce'},
          second(){ return this.inflections.indicative.present.singular.first().slice(0, -2) + 'ces'},
          third(){ return this.inflections.indicative.present.singular.first().slice(0, -2) + 'ce'}
        },
        plural: {
          first(){ return this.inflections.root().slice(0, -1) + 'cemos'},
          second(){ return this.inflections.root().slice(0, -1) + 'céis'},
          third(){ return this.inflections.indicative.present.singular.first().slice(0, -2) + 'cen'}
        }
      }
    }
  }
}
