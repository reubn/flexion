import replaceLast from 'replace-last'

import accent from '../util/accent'

export default {
  inflections: {
    indicative: {
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
      imperfect: {
        singular: {
          first(){ return ['ra', 'se'].map(end => this.inflections.indicative.preterite.plural.third.slice(0, -3) + end)},
          second(){ return ['ras', 'ses'].map(end => this.inflections.indicative.preterite.plural.third.slice(0, -3) + end)},
          third(){ return ['ra', 'se'].map(end => this.inflections.indicative.preterite.plural.third.slice(0, -3) + end)}
        },
        plural: {
          first(){ return ['ramos', 'semos'].map(end => this.inflections.indicative.preterite.plural.third.slice(0, -4) + accent(this.inflections.indicative.preterite.plural.third.slice(-4, -3)) + end)},
          second(){ return ['rais', 'seis'].map(end => this.inflections.indicative.preterite.plural.third.slice(0, -3) + end)},
          third(){ return ['ran', 'sen'].map(end => this.inflections.indicative.preterite.plural.third.slice(0, -3) + end)}
        }
      },
      future: {
        singular: {
          first(){ return this.inflections.indicative.preterite.plural.third.slice(0, -2) + 'e'},
          second(){ return this.inflections.indicative.preterite.plural.third.slice(0, -2) + 'es'},
          third(){ return this.inflections.indicative.preterite.plural.third.slice(0, -2) + 'e'}
        },
        plural: {
          first(){ return this.inflections.indicative.preterite.plural.third.slice(0, -4) + accent(this.inflections.indicative.preterite.plural.third.slice(-4, -3)) +  'remos'},
          second(){ return this.inflections.indicative.preterite.plural.third.slice(0, -2) + 'eis'},
          third(){ return this.inflections.indicative.preterite.plural.third.slice(0, -2) + 'en'}
        }
      }
    }
  },
  subTree: [
    {
      verb: 'amar',
      test: i => i.endsWith('ar'),
      inflections: {
        participle() {return this.inflections.root + 'ado'},
        gerund() {return this.inflections.root + 'ando'},
        indicative: {
          present: {
            singular: {
              first(){ return this.inflections.root + 'o'},
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
          },
          imperfect: {
            singular: {
              first(){ return ['ra', 'se'].map(end => this.inflections.indicative.preterite.plural.third.slice(0, -3) + end)},
              second(){ return ['ras', 'ses'].map(end => this.inflections.indicative.preterite.plural.third.slice(0, -3) + end)},
              third(){ return ['ra', 'se'].map(end => this.inflections.indicative.preterite.plural.third.slice(0, -3) + end)}
            },
            plural: {
              first(){ return ['ramos', 'semos'].map(end => this.inflections.indicative.preterite.plural.third.slice(0, -4) + accent(this.inflections.indicative.preterite.plural.third.slice(-4, -3)) + end)},
              second(){ return ['rais', 'seis'].map(end => this.inflections.indicative.preterite.plural.third.slice(0, -3) + end)},
              third(){ return ['ran', 'sen'].map(end => this.inflections.indicative.preterite.plural.third.slice(0, -3) + end)}
            }
          },
          future: {
            singular: {
              first(){ return this.inflections.indicative.preterite.plural.third.slice(0, -2) + 'e'},
              second(){ return this.inflections.indicative.preterite.plural.third.slice(0, -2) + 'es'},
              third(){ return this.inflections.indicative.preterite.plural.third.slice(0, -2) + 'e'}
            },
            plural: {
              first(){ return this.inflections.indicative.preterite.plural.third.slice(0, -4) + accent(this.inflections.indicative.preterite.plural.third.slice(-4, -3)) +  'remos'},
              second(){ return this.inflections.indicative.preterite.plural.third.slice(0, -2) + 'eis'},
              third(){ return this.inflections.indicative.preterite.plural.third.slice(0, -2) + 'en'}
            }
          }
        }
      },
      subTree: [
        {
          verb: 'contar',
          test: i => ['contar', 'acordar', 'acostar', 'afollar', 'aforar', 'amoblar', 'amolar', 'apostar', 'aprobar', 'asolar', 'asonar', 'atronar', 'colar', 'comprobar', 'concordar', 'consolar', 'costar', 'demostrar', 'denostar', 'desacordar', 'desaforar', 'desaprobar', 'descollar', 'desconsolar', 'descontar', 'descornar', 'desencontrarse', 'desolar', 'desollar', 'despoblar', 'discordar', 'disonar', 'encontrar', 'encordar', 'engrosar', 'escornar', 'hollar', 'mancornar', 'mostrar', 'poblar', 'probar', 'recontar', 'recordar', 'recostar', 'reencontrar', 'renovar', 'repoblar', 'reprobar', 'resollar', ' resonar', 'rodar', 'sobrevolar', 'solar', 'soldar', 'soltar', 'sonar', 'soñar', 'sonarse', 'superpoblar', 'tostar', 'tronar', 'volar'].includes(i),
          inflections: {
            indicative: {
              present: {
                singular: {
                  first(){ return replaceLast(this.inflections.root, 'o', 'ue') + 'o'},
                  second(){ return replaceLast(this.inflections.root, 'o', 'ue') + 'as'},
                  third(){ return replaceLast(this.inflections.root, 'o', 'ue') + 'a'}
                },
                plural: {
                  third(){ return replaceLast(this.inflections.root, 'o', 'ue') + 'an'}
                }
              }
            }
          }
        }
      ]
    },
    {
      verb: 'temer',
      test: i => i.endsWith('er'),
      inflections: {
        participle() {return this.inflections.root + 'ido'},
        gerund() {return this.inflections.root + 'iendo'},
        indicative: {
          present: {
            singular: {
              first(){ return this.inflections.root + 'o'},
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
    },
    {
      verb: 'partir',
      test: i => i.endsWith('ir') || i.endsWith('ír'),
      inflections: {
        participle() {return this.inflections.root + 'ido'},
        gerund() {return this.inflections.root + 'iendo'},
        indicative: {
          present: {
            singular: {
              first(){ return this.inflections.root + 'o'},
              second(){ return this.inflections.root + 'es'},
              third(){ return this.inflections.root + 'e'}
            },
            plural: {
              first(){ return this.inflections.root + 'imos'},
              second(){ return this.inflections.root + 'ís'},
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
  ]
}
