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

const Provider = ({ children }) => {
  const [data, setPlanet] = useState([]);
  const [isFetching, setIsFetching] = useState(true);
  const [filter, setGeneralFilter] = useState(generalFilter);

  const setFetching = () => {
    setIsFetching(!isFetching);
  };

  const changeFilterName = (name) => {
    setGeneralFilter({ ...filter, filterByName: { name } });
  };

  const contextValue = {
    filter,
    changeFilterName,
    data,
    setPlanet,
    setFetching,
    isFetching,
  };

  return <StarWarsContext.Provider value={contextValue}>{children}</StarWarsContext.Provider>;
};

Provider.propTypes = {
  children: PropTypes.node.isRequired,
};

export { Provider, StarWarsContext };
