import radicalChangePresentMixin from '../mixins/radicalChangePresent'
import radicalChangeSubjunctiveAllMixin from '../mixins/radicalChangeSubjunctiveAll'


export default {
  verb: 'leer',
  test: i => i.slice(-3, -2) === 'e',
  inflections: {
    indicative: {
      present: radicalChangePresentMixin('g', 'j', {mask: {singular: {first: true}}}),
      preterite: {
        singular: {
          second(){return this.root() + 'íste'},
          third(){return this.root() + 'yó'}
        },
        plural: {
          first(){return this.root() + 'ímos'},
          second(){return this.root() + 'ísteis'},
          third(){return this.root() + 'yeron'}
        }
      }
    },
    subjunctive: {
      present: radicalChangeSubjunctiveAllMixin('g', 'j')
    }
  }
}
