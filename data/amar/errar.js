import replaceLast from '../../util/replaceLast'

export default {
  verb: 'errar',
  test: i => i === 'errar',
  inflections: {
    indicative: {
      present: {
        singular: {
          first(){ return [this.inflections.root() + 'o', 'yerro']},
          second(){ return [this.inflections.root() + 'as', 'yerras']},
          third(){ return [this.inflections.root() + 'a', 'yerra']}
        },
        plural: {
          third(){ return [this.inflections.root() + 'an', 'yerran']}
        }
      }
    },
    subjunctive: {
      present: {
        singular: {
          first(){ return [this.inflections.root() + 'e', 'yerre']},
          second(){ return [this.inflections.root() + 'es', 'yerres']},
          third(){ return [this.inflections.root() + 'e', 'yerre']}
        },
        plural: {
          first(){ return this.inflections.root() + 'emos'},
          second(){ return this.inflections.root() + 'éis'},
          third(){ return [this.inflections.root() + 'en', 'yerren']}
        }
      }
    }
  }
}
