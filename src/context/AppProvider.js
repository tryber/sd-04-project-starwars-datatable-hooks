import React, { useState } from 'react';
import AppContext from './AppContext';

const AppProvider = ({ children }) => {
  const [isFetching, setIsFetching] = useState(true);
  const [data, setdata] = useState('');

  const context = {
    isFetching,
    setIsFetching,
    data,
    setdata,
  };

  return <AppContext.Provider value={context}> {children} </AppContext.Provider>;
};

export default AppProvider;
