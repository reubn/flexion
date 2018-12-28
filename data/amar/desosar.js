import replaceLast from '../../util/replaceLast'

export default {
  verb: 'desosar',
  test: i => i === 'desosar',
  inflections: {
    indicative: {
      present: {
        singular: {
          first(){ return replaceLast(this.root(), 'o', 'hue') + 'o'},
          second(){ return replaceLast(this.root(), 'o', 'hue') + 'as'},
          third(){ return replaceLast(this.root(), 'o', 'hue') + 'a'}
        },
        plural: {
          third(){ return replaceLast(this.root(), 'o', 'hue') + 'an'}
        }
      }
    },
    subjunctive: {
      present: {
        plural: {
          first(){ return this.root() + 'emos'},
          second(){ return this.root() + 'éis'},
        }
      }
    }
  }
}
