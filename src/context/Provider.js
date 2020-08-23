import React, { useState } from 'react';
import PropTypes from 'prop-types';
import StarWarsContext from './StarWarsContext';

const INITIAL_STATE_FILTERS = {
  filterByName: { name: '' },
  filterByNumericValues: [],
  order: {
    column: 'Name',
    sort: 'ASC',
  },
};

export default function Provider({ children }) {
  const [data, setData] = useState([]);
  const [isFetching, setIsFetching] = useState(true);
  const [filters, setFilters] = useState(INITIAL_STATE_FILTERS);

  const contextValue = {
    data,
    setData,
    isFetching,
    setIsFetching,
    filters,
    setFilters,
  };

  return <StarWarsContext.Provider value={contextValue}>{children}</StarWarsContext.Provider>;
}

Provider.propTypes = {
  children: PropTypes.element.isRequired,
};
