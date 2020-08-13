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
/* 
  async function getPlanetsData() {
    const planets = await getSwapi();
    setData({
      ...data,
      planetsData: planets.results,
      filteredPlanets: planets.results,
      isFetching: false,
    });
  }
 */
  useEffect(() => {
    console.log('useEffect');
    getSwapi().then((res) => setData({ ...data, planetsData: res.results, isFetching: false }));
  }, []);

  return <AppContext.Provider value={context}> {children} </AppContext.Provider>;
}

AppProvider.propTypes = {
  children: PropTypes.func.isRequired,
};
