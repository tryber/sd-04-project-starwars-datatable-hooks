import PropTypes from 'prop-types';
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

AppProvider.propTypes = {
  children: PropTypes.func.isRequired,
};

export default AppProvider;
