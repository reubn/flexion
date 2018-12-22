import replaceLast from 'replace-last'

export default {
  verb: 'degollar',
  test: i => i === 'degollar' || i === 'regoldar',
  inflections: {
    indicative: {
      present: {
        singular: {
          first(){ return replaceLast(this.inflections.root, 'go', 'güe') + 'o'},
          second(){ return replaceLast(this.inflections.root, 'go', 'güe') + 'as'},
          third(){ return replaceLast(this.inflections.root, 'go', 'güe') + 'a'}
        },
        plural: {
          third(){ return replaceLast(this.inflections.root, 'go', 'güe') + 'an'}
        }
      }
    },
    subjunctive: {
      present: {
        plural: {
          first(){ return this.inflections.root + 'emos'},
          second(){ return this.inflections.root + 'éis'}
        }
      }
    }
  }
}
