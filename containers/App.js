import React, { Component } from 'react'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import * as FormulaActions from '../actions/formula'

class App extends Component {
  render() {
    return (
      <PageWrap {...this.props}/>
    );
  }
}

function mapStateToProps(state) {
  console.log(state);
  return {
    formulas: state.entities.formulas
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
