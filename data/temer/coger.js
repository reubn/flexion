import radicalChangeMixin from '../mixins/radicalChange'
import radicalChangeSubjunctiveAllMixin from '../mixins/radicalChangeSubjunctiveAll'


export default {
  verb: 'coger',
  test: i => i.slice(-3, -2) === 'g',
  inflections: {
    indicative: {
      present: radicalChangeMixin('g', 'j', {mask: {singular: {first: true}}})
    },
    subjunctive: {
      present: radicalChangeSubjunctiveAllMixin('g', 'j')
    }
  }
}
