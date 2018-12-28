import replaceLast from '../../util/replaceLast'

export default {
  verb: 'degollar',
  test: i => i === 'degollar' || i === 'regoldar',
  inflections: {
    indicative: {
      present: {
        singular: {
          first(){ return replaceLast(this.root(), 'go', 'güe') + 'o'},
          second(){ return replaceLast(this.root(), 'go', 'güe') + 'as'},
          third(){ return replaceLast(this.root(), 'go', 'güe') + 'a'}
        },
        plural: {
          third(){ return replaceLast(this.root(), 'go', 'güe') + 'an'}
        }
      }
    },
    subjunctive: {
      present: {
        plural: {
          first(){ return this.root() + 'emos'},
          second(){ return this.root() + 'éis'}
        }
      }
    }
  }
}
