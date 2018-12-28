import replaceLast from '../../util/replaceLast'

export default {
  verb: 'enraizar',
  test: i => ['enraizar', 'arcaizar', 'corporeizar', 'europeizar', 'hebraizar', 'judaizar'].includes(i),
  inflections: {
    indicative: {
      present: {
        singular: {
          first(){ return replaceLast(this.inflections.root(), 'iz', 'íz') + 'o'},
          second(){ return replaceLast(this.inflections.root(), 'iz', 'íz') + 'as'},
          third(){ return replaceLast(this.inflections.root(), 'iz', 'íz') + 'a'}
        },
        plural: {
          third(){ return replaceLast(this.inflections.root(), 'iz', 'íz') + 'an'}
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
