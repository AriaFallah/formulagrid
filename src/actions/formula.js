import Firebase from 'firebase';
import { CALL_API } from '../middleware/api';
import { ORDER_BY } from '../middleware/ordering';
import { PROMISE } from '../middleware/promise';
import { ADD_FORMULA, GET_FORMULA, GET_FORMULAS,
         ARTICLES_ENDPOINT, FORMULAS_ENDPOINT, VIDEOS_ENDPOINT
       } from '../constants.js';

export function addFormula(formula) {
  return {
    type: ADD_FORMULA,
    [CALL_API]: {
      endpoint: FORMULAS_ENDPOINT + '.json',
      method: 'POST',
      data: { ...formula, timestamp: Firebase.ServerValue.TIMESTAMP }
    },
    [PROMISE]: {
      resolvedAction: {
        formula
      }
    }
  }
}

export function getFormula(id) {
  return {
    type: GET_FORMULA,
    [CALL_API]: {
      endpoint: FORMULAS_ENDPOINT + '/' + id + '.json',
      method: 'GET',
    },
    [PROMISE]: {
      resolvedAction: {
        id
      },
      rejectedAction: {
        id
      }
    }
  }
}

export function getFormulas() {
  return {
    type: GET_FORMULAS,
    [CALL_API]: {
      endpoint: FORMULAS_ENDPOINT + '.json',
      method: 'GET',
    },
    [PROMISE]: {
      resolvedAction: {
        [ORDER_BY]: {
          key: 'timestamp'
        }
      }
    }
  }
}
