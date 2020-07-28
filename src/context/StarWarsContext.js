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
      filterByNumericValues: [...filter.filterByNumericValues, [{ column, comparison, value }]],
    });
  };

  const contextValue = {
    filter,
    changeFilterName,
    data,
    setPlanet,
    setFetching,
    isFetching,
    changeFilterColumn,
  };

  return <StarWarsContext.Provider value={contextValue}>{children}</StarWarsContext.Provider>;
};

ProviderSW.propTypes = {
  children: PropTypes.node.isRequired,
};

export { ProviderSW, StarWarsContext };
