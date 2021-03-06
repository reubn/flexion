import radicalChangeMixin from './radicalChange'

export default (from, to, options) => radicalChangeMixin({
  mask: {
    plural: {
      first: true,
      second: true
    }
  },
  endingsPath: ['conjugation', 'subjunctive', 'present'],
  from,
  to,
  ...options
})
