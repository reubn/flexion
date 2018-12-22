export default {
  verb: 'temer',
  test: i => i.endsWith('er'),
  inflections: {
    participle() {return this.inflections.root + 'ido'},
    gerund() {return this.inflections.root + 'iendo'},
    indicative: {
      present: {
        singular: {
          second(){ return this.inflections.root + 'es'},
          third(){ return this.inflections.root + 'e'}
        },
        plural: {
          first(){ return this.inflections.root + 'emos'},
          second(){ return this.inflections.root + 'éis'},
          third(){ return this.inflections.root + 'en'}
        }
      },
      imperfect: {
        singular: {
          first(){ return this.inflections.root + 'ía'},
          second(){ return this.inflections.root + 'ías'},
          third(){ return this.inflections.root + 'ía'}
        },
        plural: {
          first(){ return this.inflections.root + 'íamos'},
          second(){ return this.inflections.root + 'íais'},
          third(){ return this.inflections.root + 'ían'}
        }
      },
      preterite: {
        singular: {
          first(){ return this.inflections.root + 'í'},
          second(){ return this.inflections.root + 'iste'},
          third(){ return this.inflections.root + 'ió'}
        },
        plural: {
          first(){ return this.inflections.root + 'imos'},
          second(){ return this.inflections.root + 'isteis'},
          third(){ return this.inflections.root + 'ieron'}
        }
      }
    },
    subjunctive: {
      present: {
        singular: {
          first(){ return this.inflections.indicative.present.singular.first.slice(0, -1) + 'a'},
          second(){ return this.inflections.indicative.present.singular.first.slice(0, -1) + 'as'},
          third(){ return this.inflections.indicative.present.singular.first.slice(0, -1) + 'a'}
        },
        plural: {
          first(){ return this.inflections.indicative.present.singular.first.slice(0, -1) + 'amos'},
          second(){ return this.inflections.indicative.present.singular.first.slice(0, -1) + 'áis'},
          third(){ return this.inflections.indicative.present.singular.first.slice(0, -1) + 'an'}
        }
      }
    }
  },
  subTree: []
}
