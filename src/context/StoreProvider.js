import React, { useState } from 'react';
import PropTypes from 'prop-types';
import StarWarsContext from './StarWarsContext';

const StoreProvider = ({ children }) => {
  const oFilters = { filterByName: { name: '' }, filterByNumericValues: [] };
  const oData = { loading: false, data: [], error: {} };

  // manipuladores

  const [filters, setFilters] = useState(oFilters);
  const [data, setData] = useState(oData);

  // store global

  const store = {
    getFilters: [filters, setFilters],
    getData: [data, setData],
  };

  // Provedor + store global

  return <StarWarsContext.Provider value={store}>{children}</StarWarsContext.Provider>;
};

export default StoreProvider;

StoreProvider.propTypes = {
  children: PropTypes.arrayOf(PropTypes.object).isRequired,
};
