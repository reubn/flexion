import replaceLast from '../../util/replaceLast'

import pretéritoGraveMixin from '../mixins/pretéritoGrave'

export default {
  verb: 'andar',
  test: i => i === 'andar' || i === 'desandar',
  inflections: {
    indicative: {
      preterite: pretéritoGraveMixin(thisValue => replaceLast(thisValue.inflections.root, 'and', 'anduv'))
    }
  }
}
