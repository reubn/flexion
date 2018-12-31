import radicalChangePresentMixin from '../mixins/radicalChangePresent'


export default {
  verb: 'entender',
  test: i => ['entender', 'ascender', 'atender', 'cerner', 'condescender', 'contender', 'defender', 'desatender', 'descender', 'desentenderse', 'distender', 'encender', 'extender', 'heder', 'hender', 'malentender', 'perder', 'reverter', 'sobreentender', 'sobrentender', 'subtender', 'tender', 'transcender', 'trascender', 'verter'].includes(i),
  inflections: {
    indicative: {
      present: radicalChangePresentMixin('e', 'ie')
    }
  }
}
