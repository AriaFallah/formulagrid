view HomeView {
  prop formulas : Object
  prop result : Array
  prop actions : Object

  // Request the formulas from the server
  on.mount(actions.getFormula)
  
  <SearchBar />
  <section class="formulagrid">
    <Formula
      class="hexagon"
      repeat={result}
      name={formulas[_].get('name')}
      formula={formulas[_].get('formula')}
      onClick={Flint.router.link('/formulas/' + _)}
    />
  </section>

  // TODO Add a table as an alternative to the grid

  $ = {
    width: '100%',
    height: '100%',
    paddingBottom: '75px',
    overflowY: 'scroll',
  }

  $formulagrid = {
    width: '90%',
    display: 'flex',
    flexWrap: 'wrap',
    margin: 'auto',
  }

  $Formula = {
    cursor: 'pointer'
  }
}
