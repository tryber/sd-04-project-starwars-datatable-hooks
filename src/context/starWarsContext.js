import React, { createContext, useState } from 'react';
import planetsAPI from '../services/starWarsAPI';

const starWarsContext = createContext();

const starWarsProvider = ({ chldren }) => {
  const [planets, setPlanets] = useState({ data: [], loading: false });
  const [filterPlanets, setFilterPlanets] = useState({
    filterByName: { name: '' },
    filterByNumericValues: [],
  });

  //API
  const getDataFromAPI = () => {
    setPlanets({ ...planets, loading: true });
    return planetsAPI().then((data) => setPlanets({ data, loading: false }));
  };

  const filterByName = (name) => setFilterPlanets({ ...filterPlanets, filterbyName: name });

  const filterByNumeric = (column, comparison, value) => {};

  const context = {
    filterByName,
    getDataFromAPI,
  };

  return <starWarsContext.Provider value={context}>{children}</starWarsContext.Provider>;
};

export { starWarsContext, starWarsProvider };