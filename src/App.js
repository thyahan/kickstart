import React, { useEffect } from 'react';
import PropTypes from 'prop-types';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import Router from './router';
import { initialApp } from './actions/system';
import './styles/index.scss';

const mapStateToProps = ({ system }) => {
  return system;
};

const mapDispatchToProps = dispatch => {
  return {
    actions: bindActionCreators({ initialApp }, dispatch)
  };
};

const App = ({ actions, token }) => {
  useEffect(() => {
    actions.initialApp();
  }, [actions, token]);

  return <Router />;
};

App.propTypes = {
  actions: PropTypes.shape({
    initialApp: PropTypes.func.isRequired
  }).isRequired,
  token: PropTypes.string.isRequired
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(App);
