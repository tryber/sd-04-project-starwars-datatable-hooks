import React, { createContext, useState } from 'react';
import PropTypes from 'prop-types';

const StarWarsContext = createContext();

const generalFilter = {
  filterByName: {
    name: '',
  },
  filterByNumericValues: [],
  order: {
    column: 'Name',
    sort: 'ASC',
  },

  options: [
    'Column',
    'population',
    'orbital_period',
    'diameter',
    'rotation_period',
    'surface_water',
  ],
};

const ProviderSW = ({ children }) => {

  const [data, setPlanet] = useState([]);

  const [isFetching, setIsFetching] = useState(true);

  const [filter, setFilter] = useState(generalFilter);

  const setFetching = () => {
    setIsFetching();
  };

  const changeFilterName = (name) => {
    setFilter({ ...filter, filterByName: { name } });
  };

  const changeFilterColumn = (column, comparison, value) => {
    setFilter({
      ...filter,
      filterByNumericValues: [...filter.filterByNumericValues, { column, comparison, value }],
    });
  };

  const changeOrder = (column, sort) => {
    setFilter({
      ...filter,
      order: { column, sort },
    });
  };

  const removeFilter = (key) => {
    setFilter({
      ...filter,
      filterByNumericValues: filter.filterByNumericValues.filter((filtro) => filtro.column !== key),
    });
  };

  const contextValue = {
    data,
    isFetching,
    filter,
    setPlanet,
    setFetching,
    changeFilterName,
    changeFilterColumn,
    removeFilter,
    changeOrder,
  };

  return <StarWarsContext.Provider value={contextValue}>{children}</StarWarsContext.Provider>;
};

ProviderSW.propTypes = {
  children: PropTypes.node.isRequired,
};

export { ProviderSW, StarWarsContext };
