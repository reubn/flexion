import radicalChangeMixin from '../mixins/radicalChange'

export default {
  verb: 'degollar',
  test: i => i === 'degollar' || i === 'regoldar',
  inflections: {
    indicative: {
      present: radicalChangeMixin('o', 'üe')
    }
  }
}
