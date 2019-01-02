import radicalChangePresentMixin from '../mixins/radicalChangePresent'

export default {
  verb: 'soler',
  test: i => i === 'soler',
  inflections: {
    indicative: {
      present: radicalChangePresentMixin('o', 'ue')
    }
  }
}
