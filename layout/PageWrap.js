view PageWrap {
  prop actions : Object
  prop formulas : Array
  <SideNav addFormula={actions.addFormula} />
  <HomeView route="/" formulas={formulas}/>
  <FormulaView route="/formulas/:id" />

  $ = {
    display: 'flex',
    height: '100%',
    width: '100%',
    position: 'fixed',
  }
}
