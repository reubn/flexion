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
          first(verb){ return verb.inflections.root() + 'emos'},
          second(verb){ return verb.inflections.root() + 'éis'}
        }
      }
    }
  }
}


// {
//   singular: {
//     first(verb){ return replaceLast(verb.inflections.root(), 'o', 'ue') + 'o'},
//     second(verb){ return replaceLast(verb.inflections.root(), 'o', 'ue') + 'as'},
//     third(verb){ return replaceLast(verb.inflections.root(), 'o', 'ue') + 'a'}
//   },
//   plural: {
//     third(verb){ return replaceLast(verb.inflections.root(), 'o', 'ue') + 'an'}
//   }
// }
