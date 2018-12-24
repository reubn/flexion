import replaceLast from '../../util/replaceLast'

export default {
  verb: 'desosar',
  test: i => i === 'desosar',
  inflections: {
    indicative: {
      present: {
        singular: {
          first(){ return replaceLast(this.inflections.root, 'o', 'hue') + 'o'},
          second(){ return replaceLast(this.inflections.root, 'o', 'hue') + 'as'},
          third(){ return replaceLast(this.inflections.root, 'o', 'hue') + 'a'}
        },
        plural: {
          third(){ return replaceLast(this.inflections.root, 'o', 'hue') + 'an'}
        }
      }
    },
    subjunctive: {
      present: {
        plural: {
          first(){ return this.inflections.root + 'emos'},
          second(){ return this.inflections.root + 'éis'},
        }
      }
    }
  }
}
