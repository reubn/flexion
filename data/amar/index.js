import contar from './contar'
import acertar from './acertar'
import degollar from './degollar'
import actuar from './actuar'
import vaciar from './vaciar'
import adecuar from './adecuar'
import menguar from './menguar'
import avergonzar from './avergonzar'
import enraizar from './enraizar'
import forzar from './forzar'
import jugar from './jugar'
import negar from './negar'
import rogar from './rogar'
import tropezar from './tropezar'
import volcar from './volcar'

import cazar from './cazar'
import llegar from './llegar'
import sacar from './sacar'

import andar from './andar'
import dar from './dar'
import desosar from './desosar'
import errar from './errar'
import estar from './estar'

export default {
  verb: 'amar',
  test: i => i.endsWith('ar'),
  inflections: {
    participle() {return this.inflections.root() + 'ado'},
    gerund() {return this.inflections.root() + 'ando'},
    indicative: {
      present: {
        singular: {
          second(){ return this.inflections.root() + 'as'},
          third(){ return this.inflections.root() + 'a'}
        },
        plural: {
          first(){ return this.inflections.root() + 'amos'},
          second(){ return this.inflections.root() + 'áis'},
          third(){ return this.inflections.root() + 'an'}
        }
      },
      imperfect: {
        singular: {
          first(){ return this.inflections.root() + 'aba'},
          second(){ return this.inflections.root() + 'abas'},
          third(){ return this.inflections.root() + 'aba'}
        },
        plural: {
          first(){ return this.inflections.root() + 'ábamos'},
          second(){ return this.inflections.root() + 'abais'},
          third(){ return this.inflections.root() + 'aban'}
        }
      },
      preterite: {
        singular: {
          first(){ return this.inflections.root() + 'é'},
          second(){ return this.inflections.root() + 'aste'},
          third(){ return this.inflections.root() + 'ó'}
        },
        plural: {
          first(){ return this.inflections.root() + 'amos'},
          second(){ return this.inflections.root() + 'asteis'},
          third(){ return this.inflections.root() + 'aron'}
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
          first(){ return this.inflections.indicative.present.singular.first().slice(0, this.inflections.indicative.present.singular.first().endsWith('oy') ? -2 : -1) + 'e'},
          second(){ return this.inflections.indicative.present.singular.first().slice(0, this.inflections.indicative.present.singular.first().endsWith('oy') ? -2 : -1) + 'es'},
          third(){ return this.inflections.indicative.present.singular.first().slice(0, this.inflections.indicative.present.singular.first().endsWith('oy') ? -2 : -1) + 'e'}
        },
        plural: {
          first(){ return this.inflections.indicative.present.singular.first().slice(0, this.inflections.indicative.present.singular.first().endsWith('oy') ? -2 : -1) + 'emos'},
          second(){ return this.inflections.indicative.present.singular.first().slice(0, this.inflections.indicative.present.singular.first().endsWith('oy') ? -2 : -1) + 'éis'},
          third(){ return this.inflections.indicative.present.singular.first().slice(0, this.inflections.indicative.present.singular.first().endsWith('oy') ? -2 : -1) + 'en'}
        }
      }
    }
  },
  subTree: [
    andar,
    dar,
    desosar,
    errar,
    estar,

    cazar,
    llegar,
    sacar,

    contar,
    acertar,
    degollar,
    actuar,
    vaciar,
    menguar,
    adecuar,
    avergonzar,
    enraizar,
    forzar,
    jugar,
    negar,
    rogar,
    tropezar,
    volcar
  ]
}
