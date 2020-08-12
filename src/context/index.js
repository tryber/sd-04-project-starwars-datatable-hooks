import PropTypes from 'prop-types';
import React, { useState, createContext } from 'react';

export const AppContext = createContext();

export default function AppProvider({ children }) {
  const INITIAL_STATE = {
    isFetching: true,
    filterByName: { name: '' },
    filteredPlanets: [],
    planetsData: [],
    filterByNumericValues: [{ column: '', comparison: '', value: '' }],
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
}

AppProvider.propTypes = {
  children: PropTypes.func.isRequired,
};
