import React, { createContext, useState } from 'react';
import PropTypes from 'prop-types';

import fetchSWAPI from '../services/fetchSWAPI';

export const StarWarsContext = createContext();

const StarWarsContextProvider = ({ children }) => {
  const [SWAPIState, setSWAPIState] = useState({ loading: false, data: [] });
  const [filtersState, setFiltersState] = useState({
    filterByName: { name: '' },
    filterByNumericValues: [],
    order: { column: 'Name', sort: 'ASC' },
  });

  const getSWAPI = async (endpoint) => {
    setSWAPIState({ ...SWAPIState, loading: true });
    return fetchSWAPI(endpoint).then((data) => {
      setSWAPIState({ data, loading: false });
    });
  };

  const filterByName = (name) => setFiltersState({ ...filtersState, filterByName: { name } });

  const filterByNumericValues = (column, comparison, value) =>
    setFiltersState({
      ...filtersState,
      filterByNumericValues: [...filtersState.filterByNumericValues, { column, comparison, value }],
    });

  const resetNumericFilters = (numericValues) =>
    setFiltersState({ ...filtersState, filterByNumericValues: numericValues });

  const sortColumn = (column, sort) =>
    setFiltersState({ ...filtersState, order: { column, sort } });

  const SWAPI = { ...SWAPIState };
  const filters = { ...filtersState };
  const functions = {
    getSWAPI,
    filterByName,
    filterByNumericValues,
    resetNumericFilters,
    sortColumn,
  };

  const Context = { SWAPI, filters, functions };

  return <StarWarsContext.Provider value={Context}>{children}</StarWarsContext.Provider>;
};

export default StarWarsContextProvider;

StarWarsContextProvider.propTypes = {
  children: PropTypes.element.isRequired,
};
