import replaceLast from '../../util/replaceLast'

export default {
  verb: 'acertar',
  test: i => ['acertar', 'acrecentar', 'alentar', 'apacentar', 'apretar', 'arrendar', 'asentar', 'aserrar', 'aterrar', 'atravesar', 'aventar', 'beldar', 'calentar', 'cerrar', 'concertar', 'confesar', 'dentar', 'desacertar', 'desalentar', 'desaterrar', 'desconcertar', 'desenterrar', 'desgobernar', 'deshelar', 'desherbar', 'desmembrar', 'despertar', 'desterrar', 'emparentar', 'empedrar', 'encerrar', 'encomendar', 'enmelar', 'enmendar', 'ensangrentar', 'enterrar', 'entrecerrar', 'escarmentar', 'gobernar', 'helar', 'herrar', 'incensar', 'manifestar', 'melar', 'mentar', 'merendar', 'nevar', 'pensar', 'quebrar', 'recalentar', 'recomendar', 'remendar', 'repensar', 'requebrar', 'reventar', 'salpimentar', 'sembrar', 'sentar', 'serrar', 'sobrecalentar', 'soterrar', 'subarrendar', 'temblar', 'templar', 'tentar'].includes(i),
  inflections: {
    indicative: {
      present: {
        singular: {
          first(verb){ return replaceLast(verb.inflections.root(), 'e', 'ie') + 'o'},
          second(verb){ return replaceLast(verb.inflections.root(), 'e', 'ie') + 'as'},
          third(verb){ return replaceLast(verb.inflections.root(), 'e', 'ie') + 'a'}
        },
        plural: {
          third(verb){ return replaceLast(verb.inflections.root(), 'e', 'ie') + 'an'}
        }
      }
    },
    subjunctive: {
      present: {
        plural: {
          first(verb){ return verb.inflections.root() + 'emos'},
          second(verb){ return verb.inflections.root() + 'éis'}
        }
      }
    }
  }
}
