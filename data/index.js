import accent from '../util/accent'

import amar from './amar'
import temer from './temer'
import partir from './partir'

export default {
  inflections: {
    indicative: {
      present: {
        singular: {
          first(verb){ return verb.inflections.root() + 'o'},
        }
      },
      conditional: {
        singular: {
          first(verb){ return verb.infinitive + 'ía'},
          second(verb){ return verb.infinitive + 'ías'},
          third(verb){ return verb.infinitive + 'ía'}
        },
        plural: {
          first(verb){ return verb.infinitive + 'íamos'},
          second(verb){ return verb.infinitive + 'íais'},
          third(verb){ return verb.infinitive + 'ían'}
        }
      },
      future: {
        singular: {
          first(verb){ return verb.infinitive + 'é'},
          second(verb){ return verb.infinitive + 'ás'},
          third(verb){ return verb.infinitive + 'á'}
        },
        plural: {
          first(verb){ return verb.infinitive + 'emos'},
          second(verb){ return verb.infinitive + 'éis'},
          third(verb){ return verb.infinitive + 'án'}
        }
      }
    },
    subjunctive: {
      imperfect: {
        singular: {
          first(verb){ return ['ra', 'se'].map(end => verb.inflections.indicative.preterite.plural.third().slice(0, -3) + end)},
          second(verb){ return ['ras', 'ses'].map(end => verb.inflections.indicative.preterite.plural.third().slice(0, -3) + end)},
          third(verb){ return ['ra', 'se'].map(end => verb.inflections.indicative.preterite.plural.third().slice(0, -3) + end)}
        },
        plural: {
          first(verb){ return ['ramos', 'semos'].map(end => verb.inflections.indicative.preterite.plural.third().slice(0, -4) + accent(verb.inflections.indicative.preterite.plural.third().slice(-4, -3)) + end)},
          second(verb){ return ['rais', 'seis'].map(end => verb.inflections.indicative.preterite.plural.third().slice(0, -3) + end)},
          third(verb){ return ['ran', 'sen'].map(end => verb.inflections.indicative.preterite.plural.third().slice(0, -3) + end)}
        }
      },
      future: {
        singular: {
          first(verb){ return verb.inflections.indicative.preterite.plural.third().slice(0, -2) + 'e'},
          second(verb){ return verb.inflections.indicative.preterite.plural.third().slice(0, -2) + 'es'},
          third(verb){ return verb.inflections.indicative.preterite.plural.third().slice(0, -2) + 'e'}
        },
        plural: {
          first(verb){ return verb.inflections.indicative.preterite.plural.third().slice(0, -4) + accent(verb.inflections.indicative.preterite.plural.third().slice(-4, -3)) +  'remos'},
          second(verb){ return verb.inflections.indicative.preterite.plural.third().slice(0, -2) + 'eis'},
          third(verb){ return verb.inflections.indicative.preterite.plural.third().slice(0, -2) + 'en'}
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
