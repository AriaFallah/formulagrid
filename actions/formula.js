export const ADD_FORMULA = 'ADD_FORMULA';
export const REMOVE_FORMULA = 'REMOVE_FORMULA';

export function addFormula(formula) {
  return {
    type: ADD_FORMULA,
    formula,
  }
}
