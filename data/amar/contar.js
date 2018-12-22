import replaceLast from 'replace-last'

export default {
  verb: 'contar',
  test: i => ['contar', 'acordar', 'acostar', 'afollar', 'aforar', 'amoblar', 'amolar', 'apostar', 'aprobar', 'asolar', 'asonar', 'atronar', 'colar', 'comprobar', 'concordar', 'consolar', 'costar', 'demostrar', 'denostar', 'desacordar', 'desaforar', 'desaprobar', 'descollar', 'desconsolar', 'descontar', 'descornar', 'desencontrarse', 'desolar', 'desollar', 'despoblar', 'discordar', 'disonar', 'encontrar', 'encordar', 'engrosar', 'escornar', 'hollar', 'mancornar', 'mostrar', 'poblar', 'probar', 'recontar', 'recordar', 'recostar', 'reencontrar', 'renovar', 'repoblar', 'reprobar', 'resollar', ' resonar', 'rodar', 'sobrevolar', 'solar', 'soldar', 'soltar', 'sonar', 'soñar', 'sonarse', 'superpoblar', 'tostar', 'tronar', 'volar'].includes(i),
  inflections: {
    indicative: {
      present: {
        singular: {
          first(){ return replaceLast(this.inflections.root, 'o', 'ue') + 'o'},
          second(){ return replaceLast(this.inflections.root, 'o', 'ue') + 'as'},
          third(){ return replaceLast(this.inflections.root, 'o', 'ue') + 'a'}
        },
        plural: {
          third(){ return replaceLast(this.inflections.root, 'o', 'ue') + 'an'}
        }
      }
    },
    subjunctive: {
      present: {
        plural: {
          first(){ return this.inflections.root + 'emos'},
          second(){ return this.inflections.root + 'éis'}
        }
      }
    }
  }
}
