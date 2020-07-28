import React, { createContext, useState } from 'react';
import PropTypes from 'prop-types';

export const StarWarsContext = createContext();

const initialState = {
  apiRequest: {
    loading: true,
    error: '',
    headers: [],
    data: [],
  },
  filters: {
    filterByName: { name: '' },
    filterByNumericValues: [],
    order: { column: 'Name', sort: 'ASC' },
  },
};

export const Store = ({ children }) => {
  const [store, setStore] = useState(initialState);

  return (
    <StarWarsContext.Provider value={[store, setStore]}>
      {children}
    </StarWarsContext.Provider>
  );
};

Store.propTypes = {
  children: PropTypes.object.isRequired,
};
