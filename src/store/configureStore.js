import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import { createLogger } from 'redux-logger';
import reducers from '../reducers';

export default initialState => {
  const { NODE_ENV } = process.env;
  const middlewares = [thunk];

  if (NODE_ENV === 'development') middlewares.push(createLogger());
  return createStore(reducers, initialState, applyMiddleware(...middlewares));
};
