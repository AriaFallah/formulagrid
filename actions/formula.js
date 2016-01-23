import { normalize, Schema, arrayOf } from 'normalizr';
import Firebase from 'firebase';
import pwrap from 'pwrap';

const formulas = new Schema('formulas');
const firebase = new Firebase('https://sizzling-heat-5193.firebaseio.com');

const getData = pwrap(function(db, resolve, reject) {
  db.on('value', (data) => resolve(data));
});

export const ADD_FORMULA = 'ADD_FORMULA';
export const GET_FORMULAS = 'GET_FORMULAS';
export const REMOVE_FORMULA = 'REMOVE_FORMULA';

export function addFormula(formula) {
  return {
    type: ADD_FORMULA,
    formula,
    id: formula.id,
  }
}

export function getFormulas() {
  return {

  }
}
