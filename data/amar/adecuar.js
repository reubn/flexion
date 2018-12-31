import mergeAndOverlapIntoArrays from '../../util/mergeAndOverlapIntoArrays'

import radicalChangePresentMixin from '../mixins/radicalChangePresent'
import maintainSoundSubjunctiveMixin from '../mixins/maintainSoundSubjunctive'
import passInMixin from '../mixins/passIn'

export default {
  verb: 'adecuar',
  test: i => ['adecuar', 'apropincuar', 'colicuar', 'evacuar', 'licuar', 'promiscuar'].includes(i),
  inflections: {
    indicative: {
      present: passInMixin(verb => mergeAndOverlapIntoArrays(verb.indicative.present, radicalChangePresentMixin('u', 'ú').call(verb, verb)))
    },
    subjunctive: {
      present: passInMixin(
        verb => mergeAndOverlapIntoArrays(
          verb.subjunctive.present,
          maintainSoundSubjunctiveMixin('u', 'ú', {
            pluralFirstAndSecondSkip: true
          }).call(verb, verb)
        )
      )
    }
  }
}
