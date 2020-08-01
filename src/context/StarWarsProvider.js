import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import StarWarsContext from './StarWarsContext';
import fetchAPI from '../utils/fetchAPI';

const StarWarsProvider = ({ children }) => {
  const [data, setData] = useState([]);
  const [isFetching, setIsFetching] = useState(true);
  const [error, setError] = useState('');

  const getPlanets = async () => {
    try {
      const response = await fetchAPI();
      setData(response.results);
    } catch (e) {
      setError(e);
    } finally {
      setIsFetching(false);
    }
  };

  useEffect(() => {
    getPlanets();
  }, []);

  const store = {
    data,
    setData,
    isFetching,
    setIsFetching,
    error,
    setError,
  };

  return <StarWarsContext.Provider value={store}>{children}</StarWarsContext.Provider>;
};

StarWarsProvider.propTypes = {
  children: PropTypes.element.isRequired,
};

export default StarWarsProvider;
