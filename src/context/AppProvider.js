import PropTypes from 'prop-types';
import React, { useState } from 'react';
import AppContext from './AppContext';

const AppProvider = ({ children }) => {
  const INITIAL_STATE = {
    isFetching: true,
    filterByName: { name: '' },
    filteredPlanets: [],
    planetsData: [],
    filterByNumericValues: [],
    order: {
      column: 'Name',
      sort: 'ASC',
    },
  };

  const [data, setData] = useState(INITIAL_STATE);

  const context = {
    data,
    setData,
  };

  return <AppContext.Provider value={context}> {children} </AppContext.Provider>;
};

AppProvider.propTypes = {
  children: PropTypes.func.isRequired,
};

export default AppProvider;
