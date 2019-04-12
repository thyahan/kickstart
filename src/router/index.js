import React from 'react';
import PropType from 'prop-types';
import { BrowserRouter, Route, Switch, HashRouter } from 'react-router-dom';
import map from 'lodash/map';
import config from './config';

const renderRoute = routes => {
  return map(routes, route => (
    <Route
      key={route.path}
      path={route.path}
      component={route.component}
      exact={route.exact} />
  ));
};

const Router = ({ hashRouter }) => {
  if (hashRouter) {
    return (
      <HashRouter>
        <Switch>
          {renderRoute(config)}
        </Switch>
      </HashRouter>);
  }
  return (
    <BrowserRouter>
      <Switch>
        {renderRoute(config)}
      </Switch>
    </BrowserRouter>);
};

Route.propTypes = {
  hashRouter: PropType.bool
};

Route.defaultProps = {
  hashRouter: false
};

export default Router;
