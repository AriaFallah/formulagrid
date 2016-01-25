import { PARSE } from '../middleware/parse-middleware';
import { ORDER_BY } from '../middleware/ordering';
import { PROMISE } from '../middleware/promise';
import { ADD_FORMULA, GET_FORMULA,
         GET_FORMULAS, FORMULA_CLASS,
       } from '../constants.js';

export function addFormula(formula) {
  return {
    type: ADD_FORMULA,
    [PARSE]: {
      parseClass: new FORMULA_CLASS(),
      method: 'POST',
      data: formula
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
    [PARSE]: {
      parseClass: new FORMULA_CLASS(),
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
    [PARSE]: {
      parseClass: new FORMULA_CLASS(),
      method: 'GET',
    },
    [PROMISE]: {
      resolvedAction: {
        [ORDER_BY]: {
          key: 'createdAt',
          isDate: true,
        }
      }
    }
  }
}
