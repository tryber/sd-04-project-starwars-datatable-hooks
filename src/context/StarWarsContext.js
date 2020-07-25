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

  const SWAPI = { ...SWAPIState };
  const filters = { ...filtersState };
  const functions = { getSWAPI, filterByName };

  const Context = { SWAPI, filters, functions };

  return <StarWarsContext.Provider value={Context}>{children}</StarWarsContext.Provider>;
};

export default StarWarsContextProvider;

StarWarsContextProvider.propTypes = {
  children: PropTypes.element.isRequired,
};
