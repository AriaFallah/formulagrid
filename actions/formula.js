import { Schema } from 'normalizr';
import Firebase from 'firebase';
import pwrap from 'pwrap';

const formulaSchema = new Schema('formulas');
const firebase = new Firebase('https://sizzling-heat-5193.firebaseio.com/formulas');

const getData = pwrap()(function(db, resolve, reject) {
  db.on('value', (data) => {
    const test = [];
    data.forEach((d) => {
      const obj = { ...d.val(), id: d.key() };
      test.push(obj);
    });
    resolve(test);
  });
});

export const ADD_FORMULA = 'ADD_FORMULA';
export const GET_FORMULAS = 'GET_FORMULAS';

export function addFormula(formula) {
  return {
    type: ADD_FORMULA,
    formula,
    id: formula.id,
  }
}

export function getFormulas() {
  return {
    type: GET_FORMULAS,
    payload: {
      promise: getData(firebase)
    },
    meta: {
      schema: formulaSchema
    },
  }
}
