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
    participle(verb) {return verb.inflections.root() + 'ado'},
    gerund(verb) {return verb.inflections.root() + 'ando'},
    indicative: {
      present: {
        singular: {
          second(verb){ return verb.inflections.root() + 'as'},
          third(verb){ return verb.inflections.root() + 'a'}
        },
        plural: {
          first(verb){ return verb.inflections.root() + 'amos'},
          second(verb){ return verb.inflections.root() + 'áis'},
          third(verb){ return verb.inflections.root() + 'an'}
        }
      },
      imperfect: {
        singular: {
          first(verb){ return verb.inflections.root() + 'aba'},
          second(verb){ return verb.inflections.root() + 'abas'},
          third(verb){ return verb.inflections.root() + 'aba'}
        },
        plural: {
          first(verb){ return verb.inflections.root() + 'ábamos'},
          second(verb){ return verb.inflections.root() + 'abais'},
          third(verb){ return verb.inflections.root() + 'aban'}
        }
      },
      preterite: {
        singular: {
          first(verb){ return verb.inflections.root() + 'é'},
          second(verb){ return verb.inflections.root() + 'aste'},
          third(verb){ return verb.inflections.root() + 'ó'}
        },
        plural: {
          first(verb){ return verb.inflections.root() + 'amos'},
          second(verb){ return verb.inflections.root() + 'asteis'},
          third(verb){ return verb.inflections.root() + 'aron'}
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
      present: {
        singular: {
          first(verb){ return verb.inflections.indicative.present.singular.first().slice(0, verb.inflections.indicative.present.singular.first().endsWith('oy') ? -2 : -1) + 'e'},
          second(verb){ return verb.inflections.indicative.present.singular.first().slice(0, verb.inflections.indicative.present.singular.first().endsWith('oy') ? -2 : -1) + 'es'},
          third(verb){ return verb.inflections.indicative.present.singular.first().slice(0, verb.inflections.indicative.present.singular.first().endsWith('oy') ? -2 : -1) + 'e'}
        },
        plural: {
          first(verb){ return verb.inflections.indicative.present.singular.first().slice(0, verb.inflections.indicative.present.singular.first().endsWith('oy') ? -2 : -1) + 'emos'},
          second(verb){ return verb.inflections.indicative.present.singular.first().slice(0, verb.inflections.indicative.present.singular.first().endsWith('oy') ? -2 : -1) + 'éis'},
          third(verb){ return verb.inflections.indicative.present.singular.first().slice(0, verb.inflections.indicative.present.singular.first().endsWith('oy') ? -2 : -1) + 'en'}
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
