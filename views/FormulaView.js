view FormulaView {
  prop formulas : Object

  const { id } = Flint.router.params;
  const formula = formulas[id];

  <h1>{formula.name}</h1>
  <h1>{formula.formula}</h1>
}
