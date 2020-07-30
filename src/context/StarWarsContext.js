import React, { createContext, useState } from 'react';

// Criação do contexto

export const StarWarsContext = createContext();

export default ({ children }) => {

  // initial states = initial reducers

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
