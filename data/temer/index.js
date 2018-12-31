import agradecer from './agradecer'
import coger from './coger'
import leer from './leer'
import mecer from './mecer'
import tañer from './tañer'
import entender from './entender'
import mover from './mover'
import oler from './oler'

// import escocer from './escocer'
// import soler from './soler'
// import traer from './traer'

// import caber from './caber'
// import caer from './caer'
// import haber from './haber'
// import hacer from './hacer'
// import placer from './placer'
// import poder from './poder'
// import poner from './poner'
// import prever from './prever'
// import querer from './querer'
// import raer from './raer'
// import rehacer from './rehacer'
// import reponer from './reponer'
// import retener from './retener'
// import roer from './roer'
// import saber from './saber'
// import ser from './ser'
// import tener from './tener'
// import valer from './valer'
// import ver from './ver'
// import yacer from './yacer'

export default {
  verb: 'temer',
  test: i => i.endsWith('er'),
  inflections: {
    participle(){
      const root = this.root()
      return root + (['a', 'e', 'i', 'o', 'u'].includes(root.slice(-1)) ? 'ído' : 'ido')
    },
    gerund(){
      const root = this.root()
      return root + (['a', 'e', 'i', 'o', 'u'].includes(root.slice(-1)) ? 'yendo' : 'iendo')
    },
    indicative: {
      present: {
        singular: {
          second(){return this.root() + 'es'},
          third(){return this.root() + 'e'}
        },
        plural: {
          first(){return this.root() + 'emos'},
          second(){return this.root() + 'éis'},
          third(){return this.root() + 'en'}
        }
      },
      imperfect: {
        singular: {
          first(){return this.root() + 'ía'},
          second(){return this.root() + 'ías'},
          third(){return this.root() + 'ía'}
        },
        plural: {
          first(){return this.root() + 'íamos'},
          second(){return this.root() + 'íais'},
          third(){return this.root() + 'ían'}
        }
      },
      preterite: {
        singular: {
          first(){return this.root() + 'í'},
          second(){return this.root() + 'iste'},
          third(){
            const root = this.root()
            return root + (['ñ', 'j'].includes(root.slice(-1)) ? 'ó' : 'ió')
          }
        },
        plural: {
          first(){return this.root() + 'imos'},
          second(){return this.root() + 'isteis'},
          third(){
            const root = this.root()
            return root + (['ñ', 'j'].includes(root.slice(-1)) ? 'eron' : 'ieron')
          }
        }
      }
    },
    subjunctive: {
      present: {
        singular: {
          first(){
            const yo = Array.isArray(this.indicative.present.singular.first) ? this.indicative.present.singular.first[0]() : this.indicative.present.singular.first()
            return yo.slice(0, yo.endsWith('oy') ? -2 : -1) + 'a'
          },
          second(){
            const yo = Array.isArray(this.indicative.present.singular.first) ? this.indicative.present.singular.first[0]() : this.indicative.present.singular.first()
            return yo.slice(0, yo.endsWith('oy') ? -2 : -1) + 'as'
          },
          third(){
            const yo = Array.isArray(this.indicative.present.singular.first) ? this.indicative.present.singular.first[0]() : this.indicative.present.singular.first()
            return yo.slice(0, yo.endsWith('oy') ? -2 : -1) + 'a'
          }
        },
        plural: {
          first(){
            const yo = Array.isArray(this.indicative.present.singular.first) ? this.indicative.present.singular.first[0]() : this.indicative.present.singular.first()
            const stem = yo.includes(this.root())
            ? yo.slice(0, yo.endsWith('oy') ? -2 : -1)
            : this.root()

            return stem + 'amos'
          },
          second(){
            const yo = Array.isArray(this.indicative.present.singular.first) ? this.indicative.present.singular.first[0]() : this.indicative.present.singular.first()
            const stem = yo.includes(this.root())
            ? yo.slice(0, yo.endsWith('oy') ? -2 : -1)
            : this.root()

            return stem + 'áis'
          },
          third(){
            const yo = Array.isArray(this.indicative.present.singular.first) ? this.indicative.present.singular.first[0]() : this.indicative.present.singular.first()
            return yo.slice(0, yo.endsWith('oy') ? -2 : -1) + 'an'
          }
        }
      }
    }
  },
  subTree: [
    agradecer,
    coger,
    leer,
    mecer,
    tañer,
    entender,
    mover,
    oler,

    // escocer,
    // soler,
    // traer,

    // caber,
    // caer,
    // haber,
    // hacer,
    // placer,
    // poder,
    // poner,
    // prever,
    // querer,
    // raer,
    // rehacer,
    // reponer,
    // retener,
    // roer,
    // saber,
    // ser,
    // tener,
    // valer,
    // ver,
    // yacer
  ]
}
