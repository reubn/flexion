import mergeAndOverlapIntoArrays from '../../util/mergeAndOverlapIntoArrays'

import radicalChangeMixin from '../mixins/radicalChange'
import maintainSoundSubjunctiveMixin from '../mixins/maintainSoundSubjunctive'
import passInMixin from '../mixins/passIn'

export default {
  verb: 'adecuar',
  test: i => ['adecuar', 'apropincuar', 'colicuar', 'evacuar', 'licuar', 'promiscuar'].includes(i),
  inflections: {
    indicative: {
      present: passInMixin(verb => mergeAndOverlapIntoArrays(verb.indicative.present, radicalChangeMixin('u', 'ú').call(verb, verb)))
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
