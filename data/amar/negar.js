import replaceLast from '../../util/replaceLast'

export default {
  verb: 'negar',
  test: i => ['negar', 'anegar', 'cegar', 'denegar', 'desasosegar', 'desplegar', 'estregar', 'fregar', 'plegar', 'refregar', 'regar', 'renegar', 'replegar', 'restregar', 'segar', 'sosegar', 'trasegar'].includes(i),
  inflections: {
    indicative: {
      present: {
        singular: {
          first(){return replaceLast(this.root(), 'e', 'ie') + 'o'},
          second(){return replaceLast(this.root(), 'e', 'ie') + 'as'},
          third(){return replaceLast(this.root(), 'e', 'ie') + 'a'}
        },
        plural: {
          third(){return replaceLast(this.root(), 'e', 'ie') + 'an'}
        }
      },
      preterite: {
        singular: {
          first(){return this.root() + 'ué'}
        }
      }
    },
    subjunctive: {
      present: {
        singular: {
          first(){return this.indicative.present.singular.first().slice(0, -1) + 'ue'},
          second(){return this.indicative.present.singular.first().slice(0, -1) + 'ues'},
          third(){return this.indicative.present.singular.first().slice(0, -1) + 'ue'}
        },
        plural: {
          first(){return this.root() + 'uemos'},
          second(){return this.root() + 'uéis'},
          third(){return this.indicative.present.singular.first().slice(0, -1) + 'uen'}
        }
      }
    }
  }
}
