import radicalChangePresentMixin from '../mixins/radicalChangePresent'
import radicalChangeSubjunctiveAllMixin from '../mixins/radicalChangeSubjunctiveAll'


export default {
  verb: 'agradecer',
  test: i => i.slice(-3, -2) === 'c',
  inflections: {
    indicative: {
      present: radicalChangePresentMixin('c', 'zc', {mask: {singular: {first: true}}})
    },
    subjunctive: {
      present: radicalChangeSubjunctiveAllMixin('c', 'zc')
    }
  }
}
