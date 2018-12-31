import radicalChangePresentMixin from '../mixins/radicalChangePresent'


export default {
  verb: 'actuar',
  test: i => ['aullar', 'ahumar', 'ahusar', 'aunar', 'aupar', 'maullar', 'rehusar', 'sahumar', 'actuar', 'acentuar', 'anticuar', 'atenuar', 'conceptuar', 'consensuar', 'continuar', 'desconceptuar', 'deshabituar', 'desvirtuar', 'devaluar', 'efectuar', 'evaluar', 'exceptuar', 'extenuar', 'fluctuar', 'graduar', 'habituar', 'insinuar', 'interactuar', 'menstruar', 'perpetuar', 'puntuar', 'redituar', 'reevaluar', 'revaluar', 'situar', 'tatuar', 'valuar'].includes(i),
  inflections: {
    indicative: {
      present: radicalChangePresentMixin('u', 'ú')
    }
  }
}
