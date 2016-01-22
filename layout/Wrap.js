view Wrap {
  prop formulas : Array
  prop actions : Object
  <SideNav addFormula={actions.addFormula} />
  <main>
    <SearchBar />
    <Content formulas={formulas} />
  </main>

  $ = {
    display: 'flex',
    height: '100%',
    width: '100%',
    position: 'fixed',
  }

  $main = {
    width: '100%',
    height: '100%',
  }

  $Content = {
    overflowY: 'scroll',
    height: '100%',
    paddingBottom: '75px',
  }
}
