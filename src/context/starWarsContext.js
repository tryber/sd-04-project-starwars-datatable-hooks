import React, { createContext, useState } from 'react';
import PropTypes from 'prop-types';
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

  const removeFilter = (value) => {
    setFilters({ ...filters, filterByNumericValues: value });
  };

  const context = {
    planets,
    setPlanets,
    filters,
    filterByName,
    filterByNumericValues,
    removeFilter,
  };

  return <StarWarsContext.Provider value={context}>{children}</StarWarsContext.Provider>;
};

StarWarsProvider.propTypes = {
  children: PropTypes.element.isRequired,
};

export { StarWarsContext, StarWarsProvider };
