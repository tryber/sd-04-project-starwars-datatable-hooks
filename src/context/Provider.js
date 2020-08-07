import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import StarWarsContext from './StarWarsContext';
import apiPlanets from '../services/index';

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
  const [isFetching, setIsFetching] = useState(false);
  const [error, setError] = useState('');
  const [filters, setFilters] = useState(INITIAL_STATE_FILTERS);

  const loadData = async () => {
    setIsFetching(true);
    const dataPlanets = await apiPlanets();
    return dataPlanets;
  };

  useEffect(() => {
    loadData()
      .then((dataPlanets) => setData(dataPlanets.results))
      .then(() => setIsFetching(false))
      .catch((err) => setError(err));
  }, []);

  const filterByName = (name) =>
    setFilters((state) => ({
      ...state,
      filterByName: { name },
    }));

  const filterByNumericValues = (column, comparison, value) =>
    setFilters((state) => ({
      ...state,
      filterByNumericValues: [
        ...state.filterByNumericValues,
        {
          column,
          comparison,
          value,
        },
      ],
    }));

  const removeFilterNumeric = (obj) =>
    setFilters((state) => ({
      ...state,
      filterByNumericValues: [
        ...state.filterByNumericValues.filter((filter) => filter !== obj),
      ],
    }));

  const orderColumns = (column, sort) =>
    setFilters((state) => ({
      ...state,
      order: { column, sort },
    }));

  const contextValue = {
    data,
    setData,
    isFetching,
    setIsFetching,
    filters,
    error,
    setError,
    filterByName,
    filterByNumericValues,
    removeFilterNumeric,
    orderColumns,
  };

  return (
    <StarWarsContext.Provider value={contextValue}>
      {children}
    </StarWarsContext.Provider>
  );
};

export default Provider;

Provider.propTypes = {
  children: PropTypes.element.isRequired,
};
