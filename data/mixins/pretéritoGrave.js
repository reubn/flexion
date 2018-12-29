export default stemOrFunc => function pretéritoGraveMixin(){
  const stem = typeof stemOrFunc === 'function' ? stemOrFunc(this) : stemOrFunc

  return {
    singular: {
      first(){return stem + 'e'},
      second(){return stem + 'iste'},
      third(){return stem + 'o'}
    },
    plural: {
      first(){return stem + 'imos'},
      second(){return stem + 'isteis'},
      third(){return stem + (stem.endsWith('j') ? 'eron' : 'ieron')}
    }
  }
}
