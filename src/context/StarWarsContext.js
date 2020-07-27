import PropTypes from 'prop-types';
import React, { createContext, useState, useEffect } from 'react';
import getPlanets from '../services/apiFetch';

export const StarWarsContext = createContext();

const initialStateFilters = {
  filterByName: {
    neme: '',
  },
  filterByNumericValues: [],
  // order: {
  //   column: 'Name',
  //   sort: 'ASC',
  // },
};

export const StarWarsProvider = ({ children }) => {
  const [data, setData] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState('');
  const [filters, setFilters] = useState(initialStateFilters);

  useEffect(() => {
    getData();
  }, []);

  const getData = async () => {
    try {
      const response = await getPlanets();
      setData(response.results);
    } catch (error) {
      setError(error);
    } finally {
      setIsLoading(false);
    }
  };

  const context = {
    data,
    setData,
    isLoading,
    setIsLoading,
    error,
    setError,
    filters,
    setFilters,
    //fetchData,
  };

  return <StarWarsContext.Provider value={context}>{children}</StarWarsContext.Provider>;
};

StarWarsProvider.propTypes = {
  children: PropTypes.node.isRequired,
};
