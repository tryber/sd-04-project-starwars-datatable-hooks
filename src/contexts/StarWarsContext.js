import React, { createContext, useState } from 'react';
import PropTypes from 'prop-types';

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

StarWarsProvider.propTypes = {
  children: PropTypes.node.isRequired,
};
