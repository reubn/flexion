import radicalChangeMixin from '../mixins/radicalChange'


export default {
  verb: 'acertar',
  test: i => ['acertar', 'acrecentar', 'alentar', 'apacentar', 'apretar', 'arrendar', 'asentar', 'aserrar', 'aterrar', 'atravesar', 'aventar', 'beldar', 'calentar', 'cerrar', 'concertar', 'confesar', 'dentar', 'desacertar', 'desalentar', 'desaterrar', 'desconcertar', 'desenterrar', 'desgobernar', 'deshelar', 'desherbar', 'desmembrar', 'despertar', 'desterrar', 'emparentar', 'empedrar', 'encerrar', 'encomendar', 'enmelar', 'enmendar', 'ensangrentar', 'enterrar', 'entrecerrar', 'escarmentar', 'gobernar', 'helar', 'herrar', 'incensar', 'manifestar', 'melar', 'mentar', 'merendar', 'nevar', 'pensar', 'quebrar', 'recalentar', 'recomendar', 'remendar', 'repensar', 'requebrar', 'reventar', 'salpimentar', 'sembrar', 'sentar', 'serrar', 'sobrecalentar', 'soterrar', 'subarrendar', 'temblar', 'templar', 'tentar'].includes(i),
  inflections: {
    indicative: {
      present: radicalChangeMixin('e', 'ie')
    }
  }
}
