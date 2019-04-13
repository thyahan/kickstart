import React, { useEffect } from 'react';
import Router from './router';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { initialApp } from './actions/system';
import './style/index.scss';

const mapDispatchToProps = dispatch => {
  return {
    actions: bindActionCreators({ initialApp }, dispatch)
  };
};

const mapStateToProps = ({ system }) => {
  return system;
};

const App = ({ actions, token }) => {
  useEffect(() => {
    actions.initialApp();
  }, [token]);

  return <Router />;
};

export default connect(
  () => ({}),
  mapDispatchToProps
)(App);
