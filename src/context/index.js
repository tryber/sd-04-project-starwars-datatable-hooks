import React, { createContext, useState } from 'react';
import PropTypes from 'prop-types';

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

StarWarsProvider.propTypes = {
  children: PropTypes.element.isRequired,
};
