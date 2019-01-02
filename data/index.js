import accent from '../util/accent'

import amar from './amar'
import temer from './temer'
import partir from './partir'

export default {
  test: i => ['ar', 'er', 'ir', 'ír'].includes(i.slice(-2)),
  inflections: {
    root(){
      return this.infinitive.slice(0, -2)
    },
    indicative: {
      present: {
        singular: {
          first(){return this.root() + 'o'}
        }
      },
      conditional: {
        singular: {
          first(){return this.infinitive + 'ía'},
          second(){return this.infinitive + 'ías'},
          third(){return this.infinitive + 'ía'}
        },
        plural: {
          first(){return this.infinitive + 'íamos'},
          second(){return this.infinitive + 'íais'},
          third(){return this.infinitive + 'ían'}
        }
      },
      future: {
        singular: {
          first(){return this.infinitive + 'é'},
          second(){return this.infinitive + 'ás'},
          third(){return this.infinitive + 'á'}
        },
        plural: {
          first(){return this.infinitive + 'emos'},
          second(){return this.infinitive + 'éis'},
          third(){return this.infinitive + 'án'}
        }
      }
    },
    subjunctive: {
      imperfect: {
        singular: {
          first(){return ['ra', 'se'].map(end => {
            const third = Array.isArray(this.indicative.preterite.plural.third) ? this.indicative.preterite.plural.third[0]() : this.indicative.preterite.plural.third()
            return third.slice(0, -3) + end
          })},
          second(){return ['ras', 'ses'].map(end => {
            const third = Array.isArray(this.indicative.preterite.plural.third) ? this.indicative.preterite.plural.third[0]() : this.indicative.preterite.plural.third()
            return third.slice(0, -3) + end
          })},
          third(){return ['ra', 'se'].map(end => {
            const third = Array.isArray(this.indicative.preterite.plural.third) ? this.indicative.preterite.plural.third[0]() : this.indicative.preterite.plural.third()
            return third.slice(0, -3) + end
          })}
        },
        plural: {
          first(){
            const third = Array.isArray(this.indicative.preterite.plural.third) ? this.indicative.preterite.plural.third[0]() : this.indicative.preterite.plural.third()
            return ['ramos', 'semos'].map(end => third.slice(0, -4) + accent(third.slice(-4, -3)) + end)
          },
          second(){return ['rais', 'seis'].map(end => {
            const third = Array.isArray(this.indicative.preterite.plural.third) ? this.indicative.preterite.plural.third[0]() : this.indicative.preterite.plural.third()
            return third.slice(0, -3) + end
          })},
          third(){return ['ran', 'sen'].map(end => {
            const third = Array.isArray(this.indicative.preterite.plural.third) ? this.indicative.preterite.plural.third[0]() : this.indicative.preterite.plural.third()
            return third.slice(0, -3) + end
          })}
        }
      },
      future: {
        singular: {
          first(){
            const third = Array.isArray(this.indicative.preterite.plural.third) ? this.indicative.preterite.plural.third[0]() : this.indicative.preterite.plural.third()
            return third.slice(0, -2) + 'e'
          },
          second(){
            const third = Array.isArray(this.indicative.preterite.plural.third) ? this.indicative.preterite.plural.third[0]() : this.indicative.preterite.plural.third()
            return third.slice(0, -2) + 'es'
          },
          third(){
            const third = Array.isArray(this.indicative.preterite.plural.third) ? this.indicative.preterite.plural.third[0]() : this.indicative.preterite.plural.third()
            return third.slice(0, -2) + 'e'
          }
        },
        plural: {
          first(){
            const third = Array.isArray(this.indicative.preterite.plural.third) ? this.indicative.preterite.plural.third[0]() : this.indicative.preterite.plural.third()
            return third.slice(0, -4) + accent(third.slice(-4, -3)) + 'remos'
          },
          second(){
            const third = Array.isArray(this.indicative.preterite.plural.third) ? this.indicative.preterite.plural.third[0]() : this.indicative.preterite.plural.third()
            return third.slice(0, -2) + 'eis'
          },
          third(){
            const third = Array.isArray(this.indicative.preterite.plural.third) ? this.indicative.preterite.plural.third[0]() : this.indicative.preterite.plural.third()
            return third.slice(0, -2) + 'en'
          }
        }
      }
    }
  },
  subTree: [
    amar,
    temer,
    partir
  ]
}
