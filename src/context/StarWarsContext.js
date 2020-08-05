import React, { createContext, useState } from 'react';
import PropTypes from 'prop-types';

export const StarWarsContext = createContext();

export const StarWarsProvider = ({ children }) => {
  const [planetsData, setPlanetsData] = useState([]);
  const INITIAL_STATE = {
    filterByName: { name: '' },
    filterByNumericValues: [],
    categories: [
      'population',
      'orbital_period',
      'diameter',
      'rotation_period',
      'surface_water',
    ],
    order: { column: 'Name', sort: 'ASC' },
  };
  const [filterState, setFilterState] = useState(INITIAL_STATE);

  const setFilterByName = (name) => setFilterState(
    { ...filterState, filterByName: { name } },
  );

  const setFilterByNumber = (filterObj) => setFilterState(
    {
      ...filterState,
      filterByNumericValues: [...filterState.filterByNumericValues, filterObj],
    },
  );

  const setFilterByOrder = (orderObj) => setFilterState(
    { ...filterState, order: orderObj },
  );

  const removeFilterByNumber = (filterColumn) => setFilterState(
    {
      ...filterState,
      filterByNumericValues: filterState.filterByNumericValues.filter(
        (filterObj) => filterObj.column !== filterColumn,
      ),
    },
  );

  const filters = { ...filterState };
  const functions = {
    setFilterByName,
    setFilterByNumber,
    removeFilterByNumber,
    setFilterByOrder,
  };
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
