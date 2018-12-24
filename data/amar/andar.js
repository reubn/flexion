import replaceLast from '../../util/replaceLast'

export default {
  verb: 'andar',
  test: i => i === 'andar' || i === 'desandar',
  inflections: {
    indicative: {
      preterite: {
        singular: {
          first(){ return replaceLast(this.inflections.root, 'and', 'anduv') + 'e'},
          second(){ return replaceLast(this.inflections.root, 'and', 'anduv') + 'iste'},
          third(){ return replaceLast(this.inflections.root, 'and', 'anduv') + 'o'}
        },
        plural: {
          first(){ return replaceLast(this.inflections.root, 'and', 'anduv') + 'imos'},
          second(){ return replaceLast(this.inflections.root, 'and', 'anduv') + 'isteis'},
          third(){ return replaceLast(this.inflections.root, 'and', 'anduv') + 'ieron'}
        }
      }
    }
  }
}
