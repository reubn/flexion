import replaceLast from '../../util/replaceLast'

import radicalChangePresentMixin from '../mixins/radicalChangePresent'

export default {
  verb: 'contar',
  test: i => ['contar', 'acordar', 'acostar', 'afollar', 'aforar', 'amoblar', 'amolar', 'apostar', 'aprobar', 'asolar', 'asonar', 'atronar', 'colar', 'comprobar', 'concordar', 'consolar', 'costar', 'demostrar', 'denostar', 'desacordar', 'desaforar', 'desaprobar', 'descollar', 'desconsolar', 'descontar', 'descornar', 'desencontrarse', 'desolar', 'desollar', 'despoblar', 'discordar', 'disonar', 'encontrar', 'encordar', 'engrosar', 'escornar', 'hollar', 'mancornar', 'mostrar', 'poblar', 'probar', 'recontar', 'recordar', 'recostar', 'reencontrar', 'renovar', 'repoblar', 'reprobar', 'resollar', ' resonar', 'rodar', 'sobrevolar', 'solar', 'soldar', 'soltar', 'sonar', 'soñar', 'sonarse', 'superpoblar', 'tostar', 'tronar', 'volar'].includes(i),
  inflections: {
    indicative: {
      present: radicalChangePresentMixin('o', 'ue')
    },
    subjunctive: {
      present: {
        plural: {
          first(){ return this.root() + 'emos'},
          second(){ return this.root() + 'éis'}
        }
      }
    }
  }
}


// {
//   singular: {
//     first(){ return replaceLast(this.root(), 'o', 'ue') + 'o'},
//     second(){ return replaceLast(this.root(), 'o', 'ue') + 'as'},
//     third(){ return replaceLast(this.root(), 'o', 'ue') + 'a'}
//   },
//   plural: {
//     third(){ return replaceLast(this.root(), 'o', 'ue') + 'an'}
//   }
// }
