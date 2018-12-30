import radicalChangeMixin from '../mixins/radicalChange'


export default {
  verb: 'desosar',
  test: i => i === 'desosar',
  inflections: {
    indicative: {
      present: radicalChangeMixin('o', 'hue')
    }
  }
}
