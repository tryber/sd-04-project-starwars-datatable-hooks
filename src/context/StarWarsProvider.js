import React, { useState } from 'react';
import PropTypes from 'prop-types';
import StarWarsContext from './StarWarsContext';
import planetsAPI from '../services/planetsAPI';

const StarWarsProvider = ({ children }) => {
  const [isFetching, setIsFetching] = useState(false);
  const [planets, setPlanets] = useState([]);
  const [filters, setFilters] = useState({
    filterByName: { name: '' },
    filterByNumericValues: [],
  });

  const sucessPlanets = (data) => {
    setPlanets(data);
    setIsFetching(false);
  };

  const failurePlanets = (error) => {
    setPlanets(error);
    setIsFetching(false);
  };

  const fetchPlanets = () => {
    setIsFetching(true);
    planetsAPI().then(
      (response) => sucessPlanets(response.results),
      (error) => failurePlanets(error),
    );
  };

  const filterByName = (name) => (
    setFilters({ ...filters, filterByName: { name } })
  );

  const filterByNumericValues = (column, comparison, value) => (
    setFilters((filter) => ({
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
    setIsFetching,
    planets,
    setPlanets,
    fetchPlanets,
    filters,
    filterByName,
    filterByNumericValues,
  };

  return (
    <StarWarsContext.Provider value={context}>
      {children}
    </StarWarsContext.Provider>
  );
};

StarWarsProvider.propTypes = {
  children: PropTypes.node.isRequired,
};

export default StarWarsProvider;
