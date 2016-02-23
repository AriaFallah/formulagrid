view FormulaPage {
  prop formulas : Object
  prop actions : Object

  const { id } = Motion.router.params
  if (!formulas[id]) {
    actions.getFormula()
  }

  <formula if={formulas[id]}>
    <h1>{formulas[id].name}</h1>
  </formula>
}
