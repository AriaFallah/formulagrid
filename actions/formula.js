import { CALL_API } from '../middleware/api.js';
import { ADD_FORMULA, GET_FORMULA, GET_FORMULAS,
         ARTICLES_ENDPOINT, FORMULAS_ENDPOINT, VIDEOS_ENDPOINT
       } from '../constants.js';

export function addFormula(formula) {
  return {
    type: ADD_FORMULA,
    [CALL_API]: {
      endpoint: FORMULAS_ENDPOINT,
      method: 'POST',
      data: formula
    },
  }
}

export function getFormulas() {
  return {
    type: GET_FORMULAS,
    [CALL_API]: {
      endpoint: FORMULAS_ENDPOINT,
      method: 'GET',
    },
  }
}
