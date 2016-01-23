import DevTools from '../containers/DevTools';

view PageWrap {
  prop actions : Object
  prop formulas : Object
  prop result : Array

  <SideNav addFormula={actions.addFormula} />
  <HomeView route='/' {...view.props} />
  <FormulaView route='/formulas/:id' formulas={formulas} />
  <DevTools/>

  $ = {
    display: 'flex',
    height: '100%',
    width: '100%',
    position: 'fixed',
  }
}
