export default {
  verb: 'partir',
  test: i => i.endsWith('ir') || i.endsWith('ír'),
  inflections: {
    participle() {return this.root() + 'ido'},
    gerund() {return this.root() + 'iendo'},
    indicative: {
      present: {
        singular: {
          second(){ return this.root() + 'es'},
          third(){ return this.root() + 'e'}
        },
        plural: {
          first(){ return this.root() + 'imos'},
          second(){ return this.root() + 'ís'},
          third(){ return this.root() + 'en'}
        }
      },
      imperfect: {
        singular: {
          first(){ return this.root() + 'ía'},
          second(){ return this.root() + 'ías'},
          third(){ return this.root() + 'ía'}
        },
        plural: {
          first(){ return this.root() + 'íamos'},
          second(){ return this.root() + 'íais'},
          third(){ return this.root() + 'ían'}
        }
      },
      preterite: {
        singular: {
          first(){ return this.root() + 'í'},
          second(){ return this.root() + 'iste'},
          third(){ return this.root() + 'ió'}
        },
        plural: {
          first(){ return this.root() + 'imos'},
          second(){ return this.root() + 'isteis'},
          third(){ return this.root() + 'ieron'}
        }
      }
    },
    subjunctive: {
      present: {
        singular: {
          first(){ return this.indicative.present.singular.first().slice(0, this.indicative.present.singular.first().endsWith('oy') ? -2 : -1) + 'a'},
          second(){ return this.indicative.present.singular.first().slice(0, this.indicative.present.singular.first().endsWith('oy') ? -2 : -1) + 'as'},
          third(){ return this.indicative.present.singular.first().slice(0, this.indicative.present.singular.first().endsWith('oy') ? -2 : -1) + 'a'}
        },
        plural: {
          first(){ return this.indicative.present.singular.first().slice(0, this.indicative.present.singular.first().endsWith('oy') ? -2 : -1) + 'amos'},
          second(){ return this.indicative.present.singular.first().slice(0, this.indicative.present.singular.first().endsWith('oy') ? -2 : -1) + 'áis'},
          third(){ return this.indicative.present.singular.first().slice(0, this.indicative.present.singular.first().endsWith('oy') ? -2 : -1) + 'an'}
        }
      }
    }
  },
  subTree: []
}
