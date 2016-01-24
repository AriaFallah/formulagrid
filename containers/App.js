import React, { Component } from 'react'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import * as FormulaActions from '../actions/formula'

class App extends Component {
  componentDidMount() {
    // Hack to make the route change
    Flint.router.onChange(function() {
      this.forceUpdate();
    }.bind(this));
  }

  render() {
    return (
      <PageWrap {...this.props}/>
    );
  }
}

function mapStateToProps(state) {
  return state;
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
