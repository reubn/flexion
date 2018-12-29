import replaceLast from '../../util/replaceLast'

export default {
  verb: 'volcar',
  test: i => ['volcar', 'emporcar', 'revolcar', 'trastrocar', 'trocar'].includes(i),
  inflections: {
    indicative: {
      present: {
        singular: {
          first(){return replaceLast(this.root(), 'o', 'ue') + 'o'},
          second(){return replaceLast(this.root(), 'o', 'ue') + 'as'},
          third(){return replaceLast(this.root(), 'o', 'ue') + 'a'}
        },
        plural: {
          third(){return replaceLast(this.root(), 'o', 'ue') + 'an'}
        }
      },
      preterite: {
        singular: {
          first(){return this.root().slice(0, -1) + 'qué'}
        }
      }
    },
    subjunctive: {
      present: {
        singular: {
          first(){return this.indicative.present.singular.first().slice(0, -2) + 'que'},
          second(){return this.indicative.present.singular.first().slice(0, -2) + 'ques'},
          third(){return this.indicative.present.singular.first().slice(0, -2) + 'que'}
        },
        plural: {
          first(){return this.root().slice(0, -1) + 'quemos'},
          second(){return this.root().slice(0, -1) + 'quéis'},
          third(){return this.indicative.present.singular.first().slice(0, -2) + 'quen'}
        }
      }
    }
  }
}
