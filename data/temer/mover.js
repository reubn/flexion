import radicalChangePresentMixin from '../mixins/radicalChangePresent'


export default {
  verb: 'mover',
  test: i => ['mover', 'absolver', 'condolerse', 'conmover', 'demoler', 'desenvolver', 'devolver', 'disolver', 'doler', 'envolver', 'llover', 'moler', 'morder', 'promover', 'remorder', 'remover', 'resolver', 'revolver', 'volver'].includes(i),
  inflections: {
    indicative: {
      present: radicalChangePresentMixin('o', 'ue')
    }
  }
}
