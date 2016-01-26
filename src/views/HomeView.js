view HomeView {
  prop formulas : Object
  prop order : Array
  prop actions : Object

  on.mount(actions.getFormula)

  <SearchBar />
  {/*<section class="formulagrid">
    <Formula
      class="hexagon"
      repeat={order}
      name={formulas[_].name}
      formula={formulas[_].formula}
      onClick={Flint.router.link('/formulas/' + _)}
    />
  </section>*/}

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
