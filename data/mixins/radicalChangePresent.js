import radicalChangeMixin from './radicalChange'

export default (from, to, options) => radicalChangeMixin({
  mask: {
    singular: {
      first: true,
      second: true,
      third: true
    },
    plural: {
      third: true
    }
  },
  endingsPath: ['conjugation', 'indicative', 'present'],
  from,
  to,
  ...options
})
