import radicalChangePresentMixin from '../mixins/radicalChangePresent'


export default {
  verb: 'adecuar',
  test: i => ['adecuar', 'apropincuar', 'colicuar', 'evacuar', 'licuar', 'promiscuar'].includes(i),
  inflections: {
    indicative: {
      present: radicalChangePresentMixin('u', 'ú')
    }
  }
}
