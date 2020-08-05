import React, { createContext, useState } from 'react';
import PropTypes from 'prop-types';

export const StarWarsContext = createContext();

export const StarWarsProvider = ({ children }) => {
  const [planetsData, setPlanetsData] = useState([]);
  const INITIAL_STATE = { filterByName: { name: '' } };
  const [filterState, setFilterState] = useState(INITIAL_STATE);
  const setFilterByName = (name) =>
    setFilterState({ ...filterState, filterByName: { name } });
  const filters = { ...filterState };
  const functions = { setFilterByName };
  const value = { planetsData, setPlanetsData, filters, functions };
  return (
    <StarWarsContext.Provider value={value}>
      {children}
    </StarWarsContext.Provider>
  );
};

StarWarsProvider.propTypes = {
  children: PropTypes.objectOf(PropTypes.oneOfType([PropTypes.string]))
    .isRequired,
};
