import React, { createContext, useState } from 'react';

export const StarWarsContext = createContext();

export default function StarWarsProvider({ children }) {
  const [planets, setPlanets] = useState([]);
  const [filters, setFilters] = useState({
    filterByName: { name: '' },
    filterByNumericValues: [],
    order: {},
  });

  const value = { planets, filters, setPlanets, setFilters };

  return <StarWarsContext.Provider value={value}>{children}</StarWarsContext.Provider>;
}
