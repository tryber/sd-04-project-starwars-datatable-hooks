import React, { createContext, useState, useMemo } from 'react';
import PropTypes from 'prop-types';

export const StarWarsContext = createContext();

export default function StarWarsProvider({ children }) {
  const allColumns = useMemo(
    () => [
      'name',
      'climate',
      'created',
      'diameter',
      'edited',
      'films',
      'gravity',
      'orbital_period',
      'population',
      'rotation_period',
      'surface_water',
      'terrain',
      'url',
    ],
    [],
  );

  const filterableColumns = useMemo(
    () => ['population', 'orbital_period', 'diameter', 'rotation_period', 'surface_water'],
    [],
  );

  const [planets, setPlanets] = useState([]);
  const [filters, setFilters] = useState({
    filterByName: { name: '' },
    filterableColumns,
    filterByNumericValues: [],
    order: {
      column: 'name',
      sort: 'ASC',
    },
  });

  const value = { planets, filters, setPlanets, setFilters, filterableColumns, allColumns };

  return <StarWarsContext.Provider value={value}>{children}</StarWarsContext.Provider>;
}

StarWarsProvider.propTypes = {
  children: PropTypes.node.isRequired,
};
