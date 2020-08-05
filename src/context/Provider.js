import React, { useState } from 'react';
import StarWarsContext from './StarWarsContext';

const INITIAL_STATE_FILTERS = {
  filterByName: { name: '' },
  filterByNumericValues: [],
  order: {
    column: 'Name',
    sort: 'ASC',
  },
};

const Provider = ({ children }) => {
  const [data, setData] = useState([]);
  const [filteredPlanets, setFilteredPlanets] = useState([]);
  const [isFetching, setIsFetching] = useState(false);
  const [first, setFirst] = useState(true);
  const [error, setError] = useState('');
  const [filters, setFilters] = useState(INITIAL_STATE_FILTERS);

  const contextValue = {
    data,
    setData,
    isFetching,
    setIsFetching,
    filters,
    setFilters,
    error,
    setError,
    filteredPlanets,
    setFilteredPlanets,
    first,
    setFirst,
  };

  return (
    <StarWarsContext.Provider value={contextValue}>
      {children}
    </StarWarsContext.Provider>
  );
};

export default Provider;
