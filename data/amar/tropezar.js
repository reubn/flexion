import replaceLast from '../../util/replaceLast'

export default {
  verb: 'tropezar',
  test: i => ['tropezar', 'comenzar', 'empezar', 'recomenzar', 'trompezar'].includes(i),
  inflections: {
    indicative: {
      present: {
        singular: {
          first(){ return replaceLast(this.inflections.root(), 'e', 'ie') + 'o'},
          second(){ return replaceLast(this.inflections.root(), 'e', 'ie') + 'as'},
          third(){ return replaceLast(this.inflections.root(), 'e', 'ie') + 'a'}
        },
        plural: {
          third(){ return replaceLast(this.inflections.root(), 'e', 'ie') + 'an'}
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
