import replaceLast from '../../util/replaceLast'

import pretéritoGraveMixin from '../mixins/pretéritoGrave'

export default {
  verb: 'andar',
  test: i => i === 'andar' || i === 'desandar',
  inflections: {
    indicative: {
      preterite: pretéritoGraveMixin(verb => replaceLast(verb.inflections.root.call(verb), 'and', 'anduv'))
    }
  }
}
