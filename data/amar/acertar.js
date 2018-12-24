import replaceLast from '../../util/replaceLast'

export default {
  verb: 'acertar',
  test: i => ['acertar', 'acrecentar', 'alentar', 'apacentar', 'apretar', 'arrendar', 'asentar', 'aserrar', 'aterrar', 'atravesar', 'aventar', 'beldar', 'calentar', 'cerrar', 'concertar', 'confesar', 'dentar', 'desacertar', 'desalentar', 'desaterrar', 'desconcertar', 'desenterrar', 'desgobernar', 'deshelar', 'desherbar', 'desmembrar', 'despertar', 'desterrar', 'emparentar', 'empedrar', 'encerrar', 'encomendar', 'enmelar', 'enmendar', 'ensangrentar', 'enterrar', 'entrecerrar', 'escarmentar', 'gobernar', 'helar', 'herrar', 'incensar', 'manifestar', 'melar', 'mentar', 'merendar', 'nevar', 'pensar', 'quebrar', 'recalentar', 'recomendar', 'remendar', 'repensar', 'requebrar', 'reventar', 'salpimentar', 'sembrar', 'sentar', 'serrar', 'sobrecalentar', 'soterrar', 'subarrendar', 'temblar', 'templar', 'tentar'].includes(i),
  inflections: {
    indicative: {
      present: {
        singular: {
          first(){ return replaceLast(this.inflections.root, 'e', 'ie') + 'o'},
          second(){ return replaceLast(this.inflections.root, 'e', 'ie') + 'as'},
          third(){ return replaceLast(this.inflections.root, 'e', 'ie') + 'a'}
        },
        plural: {
          third(){ return replaceLast(this.inflections.root, 'e', 'ie') + 'an'}
        }
      }
    },
    subjunctive: {
      present: {
        plural: {
          first(){ return this.inflections.root + 'emos'},
          second(){ return this.inflections.root + 'éis'}
        }
      }
    }
  }
}
