import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import * as FormulaActions from '../actions/formula'

function mapStateToProps(state) {
  return state;
}

function mapDispatchToProps(dispatch) {
  return {
    actions: bindActionCreators(FormulaActions, dispatch)
  }
}

Flint._decorateView('App', (app) =>
  connect(mapStateToProps, mapDispatchToProps)(app)
);

view App {
  prop actions : Object
  prop formulas : Object
  prop result : Array

  <SideNav addFormula={actions.addFormula} />
  <HomeView route='/' yield />
  <FormulaView route='/formulas/:id' yield />

  $ = {
    display: 'flex',
    height: '100%',
    width: '100%',
    position: 'fixed',
  }
}
