import { useContext } from 'react';
import SystemContext from '../SystemContext';

const useSystemContext = () => {
  const contextValue = useContext(SystemContext);
  return contextValue;
};

export default useSystemContext;