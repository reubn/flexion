import replaceLast from '../../util/replaceLast'

export default {
  verb: 'avergonzar',
  test: i => i === 'avergonzar',
  inflections: {
    indicative: {
      present: {
        singular: {
          first(){return replaceLast(this.root(), 'go', 'güe') + 'o'},
          second(){return replaceLast(this.root(), 'go', 'güe') + 'as'},
          third(){return replaceLast(this.root(), 'go', 'güe') + 'a'}
        },
        plural: {
          third(){return replaceLast(this.root(), 'go', 'güe') + 'an'}
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
