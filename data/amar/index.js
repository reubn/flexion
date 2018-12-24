import contar from './contar'
import acertar from './acertar'
import degollar from './degollar'
import actuar from './actuar'
import vaciar from './vaciar'
import menguar from './menguar'
import avergonzar from './avergonzar'

import cazar from './cazar'
import llegar from './llegar'
import sacar from './sacar'

export default {
  verb: 'amar',
  test: i => i.endsWith('ar'),
  inflections: {
    participle() {return this.inflections.root + 'ado'},
    gerund() {return this.inflections.root + 'ando'},
    indicative: {
      present: {
        singular: {
          second(){ return this.inflections.root + 'as'},
          third(){ return this.inflections.root + 'a'}
        },
        plural: {
          first(){ return this.inflections.root + 'amos'},
          second(){ return this.inflections.root + 'áis'},
          third(){ return this.inflections.root + 'an'}
        }
      },
      imperfect: {
        singular: {
          first(){ return this.inflections.root + 'aba'},
          second(){ return this.inflections.root + 'abas'},
          third(){ return this.inflections.root + 'aba'}
        },
        plural: {
          first(){ return this.inflections.root + 'ábamos'},
          second(){ return this.inflections.root + 'abais'},
          third(){ return this.inflections.root + 'aban'}
        }
      },
      preterite: {
        singular: {
          first(){ return this.inflections.root + 'é'},
          second(){ return this.inflections.root + 'aste'},
          third(){ return this.inflections.root + 'ó'}
        },
        plural: {
          first(){ return this.inflections.root + 'amos'},
          second(){ return this.inflections.root + 'asteis'},
          third(){ return this.inflections.root + 'aron'}
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
      present: {
        singular: {
          first(){ return this.inflections.indicative.present.singular.first.slice(0, -1) + 'e'},
          second(){ return this.inflections.indicative.present.singular.first.slice(0, -1) + 'es'},
          third(){ return this.inflections.indicative.present.singular.first.slice(0, -1) + 'e'}
        },
        plural: {
          first(){ return this.inflections.indicative.present.singular.first.slice(0, -1) + 'emos'},
          second(){ return this.inflections.indicative.present.singular.first.slice(0, -1) + 'éis'},
          third(){ return this.inflections.indicative.present.singular.first.slice(0, -1) + 'en'}
        }
      }
    }
  },
  subTree: [
    cazar,
    llegar,
    sacar,

    contar,
    acertar,
    degollar,
    actuar,
    vaciar,
    menguar,
    avergonzar
  ]
}
