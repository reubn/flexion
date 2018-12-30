import radicalChangeMixin from './radicalChange'

export default (...args) => radicalChangeMixin(...args, {
  mask: {
    plural: {
      first: true,
      second: true
    }
  },
  endingsPath: ['conjugation', 'subjunctive', 'present']
})
