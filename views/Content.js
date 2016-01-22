view Content {
  prop formulas : Array = 'Should be array'

  <FormulaGrid>
    <Formula class="hexagon" repeat={formulas} name={_.name} formula={_.formula} />
  </FormulaGrid>

  // TODO: Add formula table alternative

  $ = {
    height: '100%',
    paddingBottom: '75px',
    overflowY: 'scroll',
  }
}
