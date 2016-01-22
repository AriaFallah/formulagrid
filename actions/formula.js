export const ADD_FORMULA = 'ADD_FORMULA';

export function addFormula(formula) {
  return {
    type: ADD_FORMULA,
    name: formula.name,
    formula: formula.formula
  }
}
