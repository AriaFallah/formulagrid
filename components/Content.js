view Content {
  prop formulas : Array = 'Should be array'

  <FormulaGrid>
    <Formula class="hexagon" repeat={formulas} name={_.name} formula={_.formula} />
  </FormulaGrid>
}
