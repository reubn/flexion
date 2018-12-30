import flexion from '../../'
import replaceLast from '../../util/replaceLast'

export default (from, to) => function maintainSoundPreteriteAllMixin(verb){
  const {conjugation: {indicative: {preterite: {singular: {first}}}}} = flexion(this.infinitive.slice(-2))

  return {
    singular: {
      first(){return replaceLast(verb.root(), from, to) + first()}
    }
  }
}
