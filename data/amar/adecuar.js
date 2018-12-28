import replaceLast from '../../util/replaceLast'

export default {
  verb: 'adecuar',
  test: i => ['adecuar', 'apropincuar', 'colicuar', 'evacuar', 'licuar', 'promiscuar'].includes(i),
  inflections: {
    indicative: {
      present: {
        singular: {
          first(){ return [this.root(), replaceLast(this.root(), 'cu', 'cú')].map(root => root + 'o')},
          second(){ return [this.root(), replaceLast(this.root(), 'cu', 'cú')].map(root => root + 'as')},
          third(){ return [this.root(), replaceLast(this.root(), 'cu', 'cú')].map(root => root + 'a')}
        },
        plural: {
          third(){ return [this.root(), replaceLast(this.root(), 'cu', 'cú')].map(root => root + 'an')}
        }
      }
    },
    subjunctive: {
      present: {
        singular: {
          first(){ return [this.root(), replaceLast(this.root(), 'cu', 'cú')].map(root => root + 'e')},
          second(){ return [this.root(), replaceLast(this.root(), 'cu', 'cú')].map(root => root + 'es')},
          third(){ return [this.root(), replaceLast(this.root(), 'cu', 'cú')].map(root => root + 'e')}
        },
        plural: {
          first(){ return this.root() + 'emos'},
          second(){ return this.root() + 'éis'},
          third(){ return [this.root(), replaceLast(this.root(), 'cu', 'cú')].map(root => root + 'en')}
        }
      }
    }
  }
}
