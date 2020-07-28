import React, { createContext, useState } from 'react';
// import planetsAPI from '../services/starWarsAPI';

const StarWarsContext = createContext();

const StarWarsProvider = ({ children }) => {
  const [planets, setPlanets] = useState({ data: [], loading: false });
  const [filters, setFilters] = useState({
    filterByName: { name: '' },
    filterByNumericValues: [],
  });

  const filterByName = (name) => setFilters({ ...filters, filterByName: { name } });

  const filterByNumericValues = (column, comparison, value) => {
    setFilters({
      ...filters,
      filterByNumericValues: [...filters.filterByNumericValues, { column, comparison, value }],
    });
  };

  const context = {
    planets,
    setPlanets,
    filters,
    filterByName,
    filterByNumericValues,
  };

  return <StarWarsContext.Provider value={context}>{children}</StarWarsContext.Provider>;
};

export { StarWarsContext, StarWarsProvider };
