import replaceLast from '../../util/replaceLast'

export default {
  verb: 'forzar',
  test: i => i.endsWith('orzar') && i.length !== 5,
  inflections: {
    indicative: {
      present: {
        singular: {
          first(){return replaceLast(this.root(), 'or', 'uer') + 'o'},
          second(){return replaceLast(this.root(), 'or', 'uer') + 'as'},
          third(){return replaceLast(this.root(), 'or', 'uer') + 'a'}
        },
        plural: {
          third(){return replaceLast(this.root(), 'or', 'uer') + 'an'}
        }
      },
      preterite: {
        singular: {
          first(){return this.root().slice(0, -1) + 'cé'}
        }
      }
    },
    subjunctive: {
      present: {
        singular: {
          first(){return this.indicative.present.singular.first().slice(0, -2) + 'ce'},
          second(){return this.indicative.present.singular.first().slice(0, -2) + 'ces'},
          third(){return this.indicative.present.singular.first().slice(0, -2) + 'ce'}
        },
        plural: {
          first(){return this.root().slice(0, -1) + 'cemos'},
          second(){return this.root().slice(0, -1) + 'céis'},
          third(){return this.indicative.present.singular.first().slice(0, -2) + 'cen'}
        }
      }
    }
  }
}
