view HomeView {
  prop formulas : Object
  prop order : Array
  prop actions : Object

  <SearchBar />
  <FormulaGrid>
    <Formula
      class="hexagon"
      repeat={order}
      name={formulas[_].name}
      formula={formulas[_].formula}
      onClick={Flint.router.link('/formulas/' + _)}
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
