export default {
  verb: 'tañer',
  test: i => i.slice(-3, -2) === 'ñ',
  inflections: {
    gerund(){return this.root() + 'endo'}
  }
}
