import radicalChangePresentMixin from '../mixins/radicalChangePresent'
import radicalChangeSubjunctiveAllMixin from '../mixins/radicalChangeSubjunctiveAll'


export default {
  verb: 'coger',
  test: i => i.slice(-3, -2) === 'g',
  inflections: {
    indicative: {
      present: radicalChangePresentMixin('g', 'j', {mask: {singular: {first: true}}})
    },
    subjunctive: {
      present: radicalChangeSubjunctiveAllMixin('g', 'j')
    }
  }
}
