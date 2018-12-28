import replaceLast from '../../util/replaceLast'

export default {
  verb: 'actuar',
  test: i => ['aullar', 'ahumar', 'ahusar', 'aunar', 'aupar', 'maullar', 'rehusar', 'sahumar', 'actuar', 'acentuar', 'anticuar', 'atenuar', 'conceptuar', 'consensuar', 'continuar', 'desconceptuar', 'deshabituar', 'desvirtuar', 'devaluar', 'efectuar', 'evaluar', 'exceptuar', 'extenuar', 'fluctuar', 'graduar', 'habituar', 'insinuar', 'interactuar', 'menstruar', 'perpetuar', 'puntuar', 'redituar', 'reevaluar', 'revaluar', 'situar', 'tatuar', 'valuar'].includes(i),
  inflections: {
    indicative: {
      present: {
        singular: {
          first(verb){ return replaceLast(verb.inflections.root(), 'u', 'ú') + 'o'},
          second(verb){ return replaceLast(verb.inflections.root(), 'u', 'ú') + 'as'},
          third(verb){ return replaceLast(verb.inflections.root(), 'u', 'ú') + 'a'}
        },
        plural: {
          third(verb){ return replaceLast(verb.inflections.root(), 'u', 'ú') + 'an'}
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
