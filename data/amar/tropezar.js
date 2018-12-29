import radicalChangePresentMixin from '../mixins/radicalChangePresent'


export default {
  verb: 'tropezar',
  test: i => ['tropezar', 'comenzar', 'empezar', 'recomenzar', 'trompezar'].includes(i),
  inflections: {
    indicative: {
      present: radicalChangePresentMixin('e', 'ie'),
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
