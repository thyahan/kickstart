import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import '@babel/polyfill';
import 'whatwg-fetch';
import App from './App';
import configureStore from './store/configureStore';

const initialState = typeof window.initialState === 'object' ? window.initialState : {};
const store = configureStore(initialState);

ReactDOM.render(
  <Provider store={store} key="provider">
    <App />
  </Provider>,
  document.getElementById('root')
);
