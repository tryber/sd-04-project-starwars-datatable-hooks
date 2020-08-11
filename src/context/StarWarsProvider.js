import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import StarWarsContext from './StarWarsContext';
import fetchAPI from '../utils/fetchAPI';

const StarWarsProvider = ({ children }) => {
  const [data, setData] = useState([]);
  const [isFetching, setIsFetching] = useState(true);
  const [error, setError] = useState('');
  const [filterByName, setfilterByName] = useState({ name: '' });
  const [filterByNumericValues, setFilterByNumericValues] = useState([]);
  const [order, setOrder] = useState({ column: 'name', sort: 'ASC' });
  const [columns] = useState(['population', 'orbital_period', 'diameter', 'rotation_period', 'surface_water']);
  const [comparisons] = useState(['maior que', 'igual a', 'menor que']);

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

  const handleSearch = (name) => {
    setfilterByName({
      name,
    });
  };

  const addFilter = ({ column, comparison, value }) => {
    setFilterByNumericValues([...filterByNumericValues, { column, comparison, value }]);
  };

  const rmFilter = (filter) => {
    setFilterByNumericValues([
      ...filterByNumericValues.filter(({ column }) => column !== filter.column),
    ]);
  };

  const sortFilters = (column, sort) => {
    setOrder({
      column,
      sort,
    });
  };

  const store = {
    data,
    setData,
    isFetching,
    setIsFetching,
    error,
    setError,
    filterByName,
    handleSearch,
    filterByNumericValues,
    addFilter,
    rmFilter,
    order,
    sortFilters,
    columns,
    comparisons,
  };

  return <StarWarsContext.Provider value={store}>{children}</StarWarsContext.Provider>;
};

StarWarsProvider.propTypes = {
  children: PropTypes.element.isRequired,
};

export default StarWarsProvider;
