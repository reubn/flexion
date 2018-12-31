import radicalChangePresentMixin from '../mixins/radicalChangePresent'


export default {
  verb: 'oler',
  test: i => i === 'oler',
  inflections: {
    indicative: {
      present: radicalChangePresentMixin('o', 'hue')
    }
  }
}
