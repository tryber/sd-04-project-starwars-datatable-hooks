import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';

import StartWarsContext from './StarWarsContext';
import getPlanet from '../services/api';

const StarWarsProvider = ({ children }) => {
  const [isFetching, setIsFetching] = useState(true);
  const [planets, setPlanets] = useState([]);
  const [filters, setFilter] = useState({
    filterByName: { name: '' },
    filterByNumericValues: [],
  });

  useEffect(() => {
    getPlanet()
      .then((resolve) => {
        setPlanets(resolve.results);
        setIsFetching(false);
      });
  }, []);

  const filterName = (name) => {
    setFilter({...filters, filterByName: { name } })
  };

  const filterByNumericValues = (column, comparison, value) => (
    setFilter((filter) => ({
      ...filter,
      filterByNumericValues: [...filter.filterByNumericValues, {
        column,
        comparison,
        value,
      }],
    }))
);

  const context = {
    isFetching,
    planets,
    filters,
    filterName,
    filterByNumericValues,
  };

  return (
    <StartWarsContext.Provider value={context}>
      { children }
    </StartWarsContext.Provider>
  );
};

StarWarsProvider.propTypes = {
  children: PropTypes.element.isRequired,
};

export default StarWarsProvider;
