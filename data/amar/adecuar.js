import replaceLast from '../../util/replaceLast'

export default {
  verb: 'adecuar',
  test: i => ['adecuar', 'apropincuarse', 'colicuar', 'evacuar', 'licuar', 'promiscuar'].includes(i),
  inflections: {
    indicative: {
      present: {
        singular: {
          first(){ return [this.inflections.root, replaceLast(this.inflections.root, 'cu', 'cú')].map(root => root + 'o')},
          second(){ return [this.inflections.root, replaceLast(this.inflections.root, 'cu', 'cú')].map(root => root + 'as')},
          third(){ return [this.inflections.root, replaceLast(this.inflections.root, 'cu', 'cú')].map(root => root + 'a')}
        },
        plural: {
          third(){ return [this.inflections.root, replaceLast(this.inflections.root, 'cu', 'cú')].map(root => root + 'an')}
        }
      }
    },
    subjunctive: {
      present: {
        singular: {
          first(){ return [this.inflections.root, replaceLast(this.inflections.root, 'cu', 'cú')].map(root => root + 'e')},
          second(){ return [this.inflections.root, replaceLast(this.inflections.root, 'cu', 'cú')].map(root => root + 'es')},
          third(){ return [this.inflections.root, replaceLast(this.inflections.root, 'cu', 'cú')].map(root => root + 'e')}
        },
        plural: {
          first(){ return this.inflections.root + 'emos'},
          second(){ return this.inflections.root + 'éis'},
          third(){ return [this.inflections.root, replaceLast(this.inflections.root, 'cu', 'cú')].map(root => root + 'en')}
        }
      }
    }
  }
}
