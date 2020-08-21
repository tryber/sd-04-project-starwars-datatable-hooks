import PropTypes from 'prop-types';
import React, { useState, createContext } from 'react';

export const StarWarsContext = createContext();

/* const columns = [
  '',
  'population',
  'orbital_period',
  'diameter',
  'rotation_period',
  'surface_water',
]; */

const StoreProvider = ({ children }) => {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [filterByName, setfilterByName] = useState('');
  const store = {
    data: [data, setData],
    loading: [loading, setLoading],
    filterByName: [filterByName, setfilterByName],
  };
  return <StarWarsContext.Provider value={store}>{children}</StarWarsContext.Provider>;
};

StoreProvider.propTypes = {
  children: PropTypes.node.isRequired,
};

export default StoreProvider;
