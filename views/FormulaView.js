view FormulaView {
  prop formulas : Object
  prop actions : Object

  const { id } = Flint.router.params;
  if (!formulas[id]) actions.getFormula(id);

  <div if={formulas[id]}>
    <h1>{formulas[id].name}</h1>
    <h1>{formulas[id].formula}</h1>
  </div>

  <h1 if={formulas[id] === null}>Not Found!</h1>
}
