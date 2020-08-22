import PropTypes from 'prop-types';
import React, { useState, useEffect, createContext } from 'react';
import getSwapi from '../services/getSwapi';

export const AppContext = createContext();

export default function AppProvider({ children }) {
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

  useEffect(() => {
    console.log(data)
  }, [data]);

  useEffect(() => {
    console.log('useEffect');
    getSwapi().then((res) => setData({ ...data, planetsData: res.results, isFetching: false }));
  }, []);

  return <AppContext.Provider value={context}> {children} </AppContext.Provider>;
}

AppProvider.propTypes = {
  children: PropTypes.func.isRequired,
};
