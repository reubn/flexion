export default {
  verb: 'menguar',
  test: i => ['menguar', 'achiguar', 'aguar', 'amortiguar', 'apaciguar', 'apaniaguar', 'apaniguar', 'atestiguar', 'averiguar', 'desaguar', 'deslenguar', 'fraguar', 'santiguar'].includes(i),
  inflections: {
    indicative: {
      preterite: {
        singular: {
          first(verb){ return verb.inflections.root().slice(0, -1) + 'üé'}
        }
      }
    },
    subjunctive: {
      present: {
        singular: {
          first(verb){ return verb.inflections.indicative.present.singular.first().slice(0, -2) + 'üe'},
          second(verb){ return verb.inflections.indicative.present.singular.first().slice(0, -2) + 'ües'},
          third(verb){ return verb.inflections.indicative.present.singular.first().slice(0, -2) + 'üe'}
        },
        plural: {
          first(verb){ return verb.inflections.indicative.present.singular.first().slice(0, -2) + 'üemos'},
          second(verb){ return verb.inflections.indicative.present.singular.first().slice(0, -2) + 'üéis'},
          third(verb){ return verb.inflections.indicative.present.singular.first().slice(0, -2) + 'üen'}
        }
      }
    }
  }
}
