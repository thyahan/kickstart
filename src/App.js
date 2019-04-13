import React, { useReducer} from 'react';
import Router from './router';
import SystemContext from './SystemContext';
import { reducer, initialState } from './reducers/system';
import './style/index.scss';

const SystemContextProvider = ({ children }) => {
  const contextValue = useReducer(reducer, initialState);
  return (
    <SystemContext.Provider value={contextValue}>
      {children}
    </SystemContext.Provider>
  );
};

const App = () => {
  return (
    <SystemContextProvider>
      <Router />
    </SystemContextProvider>
  );
};

export default App;
