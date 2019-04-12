import React, { Component } from 'react';
import Router from './router';
import './style/index.scss';

class App extends Component {
  render () {
    return (
      <div className='App'>
        <Router />
      </div>
    );
  }
}

export default App;
