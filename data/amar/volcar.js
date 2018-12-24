import replaceLast from '../../util/replaceLast'

export default {
  verb: 'volcar',
  test: i => ['volcar', 'emporcar', 'revolcar', 'trastrocar', 'trocar'].includes(i),
  inflections: {
    indicative: {
      present: {
        singular: {
          first(){ return replaceLast(this.inflections.root, 'o', 'ue') + 'o'},
          second(){ return replaceLast(this.inflections.root, 'o', 'ue') + 'as'},
          third(){ return replaceLast(this.inflections.root, 'o', 'ue') + 'a'}
        },
        plural: {
          third(){ return replaceLast(this.inflections.root, 'o', 'ue') + 'an'}
        }
      },
      preterite: {
        singular: {
          first(){ return this.inflections.root.slice(0, -1) + 'qué'}
        }
      }
    },
    subjunctive: {
      present: {
        singular: {
          first(){ return this.inflections.indicative.present.singular.first.slice(0, -2) + 'que'},
          second(){ return this.inflections.indicative.present.singular.first.slice(0, -2) + 'ques'},
          third(){ return this.inflections.indicative.present.singular.first.slice(0, -2) + 'que'}
        },
        plural: {
          first(){ return this.inflections.root.slice(0, -1) + 'quemos'},
          second(){ return this.inflections.root.slice(0, -1) + 'quéis'},
          third(){ return this.inflections.indicative.present.singular.first.slice(0, -2) + 'quen'}
        }
      }
    }
  }
}
