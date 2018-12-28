import replaceLast from '../../util/replaceLast'

export default {
  verb: 'actuar',
  test: i => ['aullar', 'ahumar', 'ahusar', 'aunar', 'aupar', 'maullar', 'rehusar', 'sahumar', 'actuar', 'acentuar', 'anticuar', 'atenuar', 'conceptuar', 'consensuar', 'continuar', 'desconceptuar', 'deshabituar', 'desvirtuar', 'devaluar', 'efectuar', 'evaluar', 'exceptuar', 'extenuar', 'fluctuar', 'graduar', 'habituar', 'insinuar', 'interactuar', 'menstruar', 'perpetuar', 'puntuar', 'redituar', 'reevaluar', 'revaluar', 'situar', 'tatuar', 'valuar'].includes(i),
  inflections: {
    indicative: {
      present: {
        singular: {
          first(){ return replaceLast(this.root(), 'u', 'ú') + 'o'},
          second(){ return replaceLast(this.root(), 'u', 'ú') + 'as'},
          third(){ return replaceLast(this.root(), 'u', 'ú') + 'a'}
        },
        plural: {
          third(){ return replaceLast(this.root(), 'u', 'ú') + 'an'}
        }
      }
    },
    subjunctive: {
      present: {
        plural: {
          first(){ return this.root() + 'emos'},
          second(){ return this.root() + 'éis'}
        }
      }
    }
  }
}
