// import yacer from './yacer'
// import ver from './ver'
// import valer from './valer'
// import tener from './tener'
// import ser from './ser'
// import saber from './saber'
// import roer from './roer'
// import retener from './retener'
// import reponer from './reponer'
// import rehacer from './rehacer'
// import raer from './raer'
// import querer from './querer'
// import prever from './prever'
// import poner from './poner'
// import poder from './poder'
// import placer from './placer'
// import hacer from './hacer'
// import haber from './haber'
// import caer from './caer'
// import caber from './caber'

// import traer from './traer'
// import soler from './soler'
// import escocer from './escocer'

// import oler from './oler'
// import mover from './mover'
// import entender from './entender'
// import tañer from './tañer'
// import mecer from './mecer'
// import leer from './leer'
import coger from './coger'
import agradecer from './agradecer'

export default {
  verb: 'temer',
  test: i => i.endsWith('er'),
  inflections: {
    participle(){return this.root() + 'ido'},
    gerund(){return this.root() + 'iendo'},
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
          third(){return this.root() + 'ió'}
        },
        plural: {
          first(){return this.root() + 'imos'},
          second(){return this.root() + 'isteis'},
          third(){return this.root() + 'ieron'}
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
    // yacer,
    // ver,
    // valer,
    // tener,
    // ser,
    // saber,
    // roer,
    // retener,
    // reponer,
    // rehacer,
    // raer,
    // querer,
    // prever,
    // poner,
    // poder,
    // placer,
    // hacer,
    // haber,
    // caer,
    // caber,
    //
    // traer,
    // soler,
    // escocer,
    //
    // oler,
    // mover,
    // entender,
    // tañer,
    // mecer,
    // leer,
    coger,
    agradecer
  ]
}
