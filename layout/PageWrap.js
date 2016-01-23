view PageWrap {
  prop actions : Object
  prop formulas : Object
  prop result : Array

  console.log(formulas);

  <SideNav addFormula={actions.addFormula} />
  <HomeView route="/" formulas={formulas} result={result} />
  <FormulaView route="/formulas/:id" />

  $ = {
    display: 'flex',
    height: '100%',
    width: '100%',
    position: 'fixed',
  }
}
