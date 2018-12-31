import radicalChangePresentMixin from '../mixins/radicalChangePresent'


export default {
  verb: 'desosar',
  test: i => i === 'desosar',
  inflections: {
    indicative: {
      present: radicalChangePresentMixin('o', 'hue')
    }
  }
}
