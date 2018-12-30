import maintainSoundSubjunctiveMixin from '../mixins/maintainSoundSubjunctive'

export default {
  verb: 'menguar',
  test: i => ['menguar', 'achiguar', 'aguar', 'amortiguar', 'apaciguar', 'apaniaguar', 'apaniguar', 'atestiguar', 'averiguar', 'desaguar', 'deslenguar', 'fraguar', 'santiguar'].includes(i),
  inflections: {
    indicative: {
      preterite: {
        singular: {
          first(){return this.root().slice(0, -1) + 'üé'}
        }
      }
    },
    subjunctive: {
      present: maintainSoundSubjunctiveMixin('u', 'ü')
    }
  }
}
