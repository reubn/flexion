import conjugate from '../../conjugate'
import replaceLast from '../../util/replaceLast'

export default (from, to) => function maintainSoundPreteriteAllMixin(verb){
  const changedStem = replaceLast(verb.indicative.preterite.singular.first(), from, to)

  return {
    singular: {
      first(){return changedStem}
    }
  }
}
