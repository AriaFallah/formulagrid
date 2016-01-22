import React, { Component } from 'react'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import * as FormulaActions from '../actions/formula'

class App extends Component {
  render() {
    return (
      <Wrap {...this.props}/>
    );
  }
}

function mapStateToProps(state) {
  return {
    formulas: state.formulas
  }
}

function mapDispatchToProps(dispatch) {
  return {
    actions: bindActionCreators(FormulaActions, dispatch)
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(App);
