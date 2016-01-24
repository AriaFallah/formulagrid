view PageWrap {
  prop actions : Object
  prop formulas : Object
  prop result : Array

  on.mount(actions.getFormulas);

  <SideNav addFormula={actions.addFormula} />
  <HomeView route='/' {...view.props} />
  <FormulaView route='/formulas/:id' formulas={formulas} />

  $ = {
    display: 'flex',
    height: '100%',
    width: '100%',
    position: 'fixed',
  }
}
