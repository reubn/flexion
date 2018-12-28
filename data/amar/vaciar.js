import radicalChangePresentMixin from '../mixins/radicalChangePresent'


export default {
  verb: 'vaciar',
  test: i => ['vaciar', 'aliar', 'amnistiar', 'ampliar', 'ansiar', 'arriar', 'ataviar', 'averiar', 'aviar', 'biografiar', 'cablegrafiar', 'calcografiar', 'caligrafiar', 'cariar', 'chirriar', 'ciar', 'confiar', 'contrariar', 'criar', 'desafiar', 'descarriar', 'desconfiar', 'desliar', 'desvariar', 'desviar', 'enfriar', 'enviar', 'escalofriar', 'esgrafiar', 'espiar', 'esquiar', 'estriar', 'expatriar', 'expiar', 'extasiar', 'extraviar', 'fiar', 'fotografiar', 'guiar', 'hastiar', 'inventariar', 'jipiar', 'liar', 'malcriar', 'mecanografiar', 'piar', 'porfiar', 'radiografiar', 'recriar', 'reenviar', 'resfriar', 'rociar', 'taquigrafiar', 'telegrafiar', 'variar', 'vidriar', 'xerografiar', 'aislar', 'ahijar', 'ahitar', 'airar', 'amohinar', 'desahijar', 'descafeinar', 'prohijar', 'rehilar', 'sobrehilar'].includes(i),
  inflections: {
    indicative: {
      present: radicalChangePresentMixin('i', 'í')
    }
  }
}
