export default {
  verb: 'partir',
  test: i => i.endsWith('ir') || i.endsWith('ír'),
  inflections: {
    participle() {return verb.inflections.root() + 'ido'},
    gerund(verb) {return verb.inflections.root() + 'iendo'},
    indicative: {
      present: {
        singular: {
          second(verb){ return verb.inflections.root() + 'es'},
          third(verb){ return verb.inflections.root() + 'e'}
        },
        plural: {
          first(verb){ return verb.inflections.root() + 'imos'},
          second(verb){ return verb.inflections.root() + 'ís'},
          third(verb){ return verb.inflections.root() + 'en'}
        }
      },
      imperfect: {
        singular: {
          first(verb){ return verb.inflections.root() + 'ía'},
          second(verb){ return verb.inflections.root() + 'ías'},
          third(verb){ return verb.inflections.root() + 'ía'}
        },
        plural: {
          first(verb){ return verb.inflections.root() + 'íamos'},
          second(verb){ return verb.inflections.root() + 'íais'},
          third(verb){ return verb.inflections.root() + 'ían'}
        }
      },
      preterite: {
        singular: {
          first(verb){ return verb.inflections.root() + 'í'},
          second(verb){ return verb.inflections.root() + 'iste'},
          third(verb){ return verb.inflections.root() + 'ió'}
        },
        plural: {
          first(verb){ return verb.inflections.root() + 'imos'},
          second(verb){ return verb.inflections.root() + 'isteis'},
          third(verb){ return verb.inflections.root() + 'ieron'}
        }
      }
    },
    subjunctive: {
      present: {
        singular: {
          first(verb){ return verb.inflections.indicative.present.singular.first().slice(0, verb.inflections.indicative.present.singular.first().endsWith('oy') ? -2 : -1) + 'a'},
          second(verb){ return verb.inflections.indicative.present.singular.first().slice(0, verb.inflections.indicative.present.singular.first().endsWith('oy') ? -2 : -1) + 'as'},
          third(verb){ return verb.inflections.indicative.present.singular.first().slice(0, verb.inflections.indicative.present.singular.first().endsWith('oy') ? -2 : -1) + 'a'}
        },
        plural: {
          first(verb){ return verb.inflections.indicative.present.singular.first().slice(0, verb.inflections.indicative.present.singular.first().endsWith('oy') ? -2 : -1) + 'amos'},
          second(verb){ return verb.inflections.indicative.present.singular.first().slice(0, verb.inflections.indicative.present.singular.first().endsWith('oy') ? -2 : -1) + 'áis'},
          third(verb){ return verb.inflections.indicative.present.singular.first().slice(0, verb.inflections.indicative.present.singular.first().endsWith('oy') ? -2 : -1) + 'an'}
        }
      }
    }
  },
  subTree: []
}
