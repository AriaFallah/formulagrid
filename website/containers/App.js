import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import * as actions from '../actions'

function mapStateToProps(state) {
  return state
}

function mapDispatchToProps(dispatch) {
  return {
    actions: bindActionCreators(actions, dispatch)
  }
}

Motion.decorateView('App', (app) =>
  connect(mapStateToProps, mapDispatchToProps)(app)
)

view App {
  prop actions  : Object
  prop formulas : Object
  prop result   : Array

  <SideNav actions={actions} />
  <HomeView route='/' yield />
  <FormulaView route='/formulas/:id' yield />

  $ = {
    display: 'flex',
    height: '100%',
    width: '100%',
    position: 'fixed',
  }
}
