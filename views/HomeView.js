view HomeView {
  prop formulas : Object
  prop result : Array

  <SearchBar />
  <FormulaGrid>
    <Formula
      class="hexagon"
      repeat={result}
      name={formulas[_].name}
      formula={formulas[_].formula}
      onClick={() => console.log(_)}
    />
  </FormulaGrid>

  // TODO: Add a table as an alternative to the grid

  $ = {
    width: '100%',
    height: '100%',
    paddingBottom: '75px',
    overflowY: 'scroll',
  }

  $Formula = {
    cursor: 'pointer'
  }
}
