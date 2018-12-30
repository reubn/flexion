import maintainSoundSubjunctiveMixin from '../mixins/maintainSoundSubjunctive'
import maintainSoundPreteriteMixin from '../mixins/maintainSoundPreterite'

export default {
  verb: 'menguar',
  test: i => ['menguar', 'achiguar', 'aguar', 'amortiguar', 'apaciguar', 'apaniaguar', 'apaniguar', 'atestiguar', 'averiguar', 'desaguar', 'deslenguar', 'fraguar', 'santiguar'].includes(i),
  inflections: {
    indicative: {
      preterite: maintainSoundPreteriteMixin('u', 'ü')
    },
    subjunctive: {
      present: maintainSoundSubjunctiveMixin('u', 'ü')
    }
  }
}
