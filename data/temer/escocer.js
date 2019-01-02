import radicalChangePresentMixin from '../mixins/radicalChangePresent'
import radicalChangeSubjunctiveAllMixin from '../mixins/radicalChangeSubjunctiveAll'
import passInMixin from '../mixins/passIn'

import mergeAndOverride from '../../util/mergeAndOverride'
import replaceLast from '../../util/replaceLast'


export default {
  verb: 'escocer',
  test: i => ['escocer', 'cocer', 'recocer', 'retorcer', 'torcer'].includes(i),
  inflections: {
    indicative: {
      present: passInMixin(verb => {
        const major = radicalChangePresentMixin('o', 'ue').call(verb, verb)
        const first = major.singular.first()
        return mergeAndOverride(major, {singular: {first: () => replaceLast(first, 'c', 'z')}})
      })
    },
    subjunctive: {
      present: radicalChangeSubjunctiveAllMixin('c', 'z')
    }
  }
}
