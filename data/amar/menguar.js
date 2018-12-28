export default {
  verb: 'menguar',
  test: i => ['menguar', 'achiguar', 'aguar', 'amortiguar', 'apaciguar', 'apaniaguar', 'apaniguar', 'atestiguar', 'averiguar', 'desaguar', 'deslenguar', 'fraguar', 'santiguar'].includes(i),
  inflections: {
    indicative: {
      preterite: {
        singular: {
          first(){ return this.root().slice(0, -1) + 'üé'}
        }
      }
    },
    subjunctive: {
      present: {
        singular: {
          first(){ return this.indicative.present.singular.first().slice(0, -2) + 'üe'},
          second(){ return this.indicative.present.singular.first().slice(0, -2) + 'ües'},
          third(){ return this.indicative.present.singular.first().slice(0, -2) + 'üe'}
        },
        plural: {
          first(){ return this.indicative.present.singular.first().slice(0, -2) + 'üemos'},
          second(){ return this.indicative.present.singular.first().slice(0, -2) + 'üéis'},
          third(){ return this.indicative.present.singular.first().slice(0, -2) + 'üen'}
        }
      }
    }
  }
}
