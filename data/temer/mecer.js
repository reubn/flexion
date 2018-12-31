import radicalChangePresentMixin from '../mixins/radicalChangePresent'
import radicalChangeSubjunctiveAllMixin from '../mixins/radicalChangeSubjunctiveAll'


export default {
  verb: 'mecer',
  test: i => ['mecer', 'coercer', 'convencer', 'ejercer', 'vencer'].includes(i),
  inflections: {
    indicative: {
      present: radicalChangePresentMixin('c', 'z', {mask: {singular: {first: true}}})
    },
    subjunctive: {
      present: radicalChangeSubjunctiveAllMixin('c', 'z')
    }
  }
}
