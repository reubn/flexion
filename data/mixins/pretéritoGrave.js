export default stemOrFunc => function pretéritoGraveMixin(verb){
  const stem = typeof stemOrFunc === 'function' ? stemOrFunc.call(null, verb) : stemOrFunc

  return {
    singular: {
      first(){ return stem + 'e'},
      second(){ return stem + 'iste'},
      third(){ return stem + 'o'}
    },
    plural: {
      first(){ return stem + 'imos'},
      second(){ return stem + 'isteis'},
      third(){ return stem + (stem.endsWith('j') ? 'eron' : 'ieron')}
    }
  }
}
