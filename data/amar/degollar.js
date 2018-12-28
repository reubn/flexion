import radicalChangePresentMixin from '../mixins/radicalChangePresent'

export default {
  verb: 'degollar',
  test: i => i === 'degollar' || i === 'regoldar',
  inflections: {
    indicative: {
      present: radicalChangePresentMixin('go', 'güe')
    }
  }
}
