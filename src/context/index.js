import React, { createContext, useState, useEffect } from 'react';

export const StarWarsContext = createContext();

export default function StarWarsProvider({ children }) {
  const INITIAL_STATE = {
    isFetching: true,
    planetsData: [],
    filteredPlanets: [],
    filterByName: {
      name: '',
    },
    filterByNumericValues: [],
    order: {
      column: 'Name',
      sort: 'ASC',
    },
  };

  const [data, setData] = useState(INITIAL_STATE);
  const context = { data, setData };
  return <StarWarsContext.Provider value={context}>{children}</StarWarsContext.Provider>;
}
