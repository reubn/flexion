import accent from '../util/accent'

import amar from './amar'
import temer from './temer'
import partir from './partir'

export default {
  inflections: {
    indicative: {
      present: {
        singular: {
          first(){ return this.root() + 'o'},
        }
      },
      conditional: {
        singular: {
          first(){ return this.infinitive + 'ía'},
          second(){ return this.infinitive + 'ías'},
          third(){ return this.infinitive + 'ía'}
        },
        plural: {
          first(){ return this.infinitive + 'íamos'},
          second(){ return this.infinitive + 'íais'},
          third(){ return this.infinitive + 'ían'}
        }
      },
      future: {
        singular: {
          first(){ return this.infinitive + 'é'},
          second(){ return this.infinitive + 'ás'},
          third(){ return this.infinitive + 'á'}
        },
        plural: {
          first(){ return this.infinitive + 'emos'},
          second(){ return this.infinitive + 'éis'},
          third(){ return this.infinitive + 'án'}
        }
      }
    },
    subjunctive: {
      imperfect: {
        singular: {
          first(){ return ['ra', 'se'].map(end => this.indicative.preterite.plural.third().slice(0, -3) + end)},
          second(){ return ['ras', 'ses'].map(end => this.indicative.preterite.plural.third().slice(0, -3) + end)},
          third(){ return ['ra', 'se'].map(end => this.indicative.preterite.plural.third().slice(0, -3) + end)}
        },
        plural: {
          first(){ return ['ramos', 'semos'].map(end => this.indicative.preterite.plural.third().slice(0, -4) + accent(this.indicative.preterite.plural.third().slice(-4, -3)) + end)},
          second(){ return ['rais', 'seis'].map(end => this.indicative.preterite.plural.third().slice(0, -3) + end)},
          third(){ return ['ran', 'sen'].map(end => this.indicative.preterite.plural.third().slice(0, -3) + end)}
        }
      },
      future: {
        singular: {
          first(){ return this.indicative.preterite.plural.third().slice(0, -2) + 'e'},
          second(){ return this.indicative.preterite.plural.third().slice(0, -2) + 'es'},
          third(){ return this.indicative.preterite.plural.third().slice(0, -2) + 'e'}
        },
        plural: {
          first(){ return this.indicative.preterite.plural.third().slice(0, -4) + accent(this.indicative.preterite.plural.third().slice(-4, -3)) +  'remos'},
          second(){ return this.indicative.preterite.plural.third().slice(0, -2) + 'eis'},
          third(){ return this.indicative.preterite.plural.third().slice(0, -2) + 'en'}
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
