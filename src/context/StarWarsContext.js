import React, { createContext, useState } from 'react';
import PropTypes from 'prop-types';

const StarWarsContext = createContext();

const generalFilter = {
  filterByName: {
    name: '',
  },
  filterByNumericValues: [
    {
      column: 'population',
      comparison: 'maior que',
      value: '100000',
    },
  ],
  order: {
    column: 'Name',
    sort: 'ASC',
  },
};

const ProviderSW = ({ children }) => {
  const [data, setPlanet] = useState([]);
  const [isFetching, setIsFetching] = useState(true);
  const [filter, setFilter] = useState(generalFilter);

  const setFetching = () => {
    setIsFetching();
  };

  const changeFilterName = (name) => {
    name.toLowerCase();
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
