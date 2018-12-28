import replaceLast from '../../util/replaceLast'

export default {
  verb: 'errar',
  test: i => i === 'errar',
  inflections: {
    indicative: {
      present: {
        singular: {
          first(){ return [this.root() + 'o', 'yerro']},
          second(){ return [this.root() + 'as', 'yerras']},
          third(){ return [this.root() + 'a', 'yerra']}
        },
        plural: {
          third(){ return [this.root() + 'an', 'yerran']}
        }
      }
    },
    subjunctive: {
      present: {
        singular: {
          first(){ return [this.root() + 'e', 'yerre']},
          second(){ return [this.root() + 'es', 'yerres']},
          third(){ return [this.root() + 'e', 'yerre']}
        },
        plural: {
          first(){ return this.root() + 'emos'},
          second(){ return this.root() + 'éis'},
          third(){ return [this.root() + 'en', 'yerren']}
        }
      }
    }
  }
}
