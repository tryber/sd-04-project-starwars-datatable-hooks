import PropTypes from 'prop-types';
import React, { useState, createContext } from 'react';

export const StarWarsContext = createContext();

export const columns = [
  '',
  'population',
  'orbital_period',
  'diameter',
  'rotation_period',
  'surface_water',
];

const StoreProvider = ({ children }) => {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [filterByName, setfilterByName] = useState('');
  const [filterByNumericValues, setfilterByNumericValues] = useState([]);
  const [columnSort, setColumnSort] = useState('Name');
  const [sort, setSort] = useState('ASC');
  const store = {
    data: [data, setData],
    loading: [loading, setLoading],
    filterByName: [filterByName, setfilterByName],
    filterByNumericValues: [filterByNumericValues, setfilterByNumericValues],
    order: {
      columnSort: [columnSort, setColumnSort],
      sort: [sort, setSort],
    },
  };
  return <StarWarsContext.Provider value={store}>{children}</StarWarsContext.Provider>;
};

StoreProvider.propTypes = {
  children: PropTypes.node.isRequired,
};

export default StoreProvider;
