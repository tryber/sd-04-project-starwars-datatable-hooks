import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import StarWarsContext from './StarWarsContext';
import getData from '../services/apiPlanets';

const INITIAL_STATE_FILTERS = {
  filterByName: { name: '' },
  filterByNumericValues: [],
  order: {
    column: 'Name',
    sort: 'ASC',
  },
};

export default function Provider({ children }) {
  const [data, setData] = useState([]);
  const [planets, setPlanets] = useState([]);
  const [isFetching, setIsFetching] = useState(true);
  const [filters, setFilters] = useState(INITIAL_STATE_FILTERS);

  useEffect(() => {
    getData().then((data) => {
      setData(data.results);
      setPlanets(data.results);
      setIsFetching(false);
    });
  }, []);

  const contextValue = {
    data,
    setData,
    planets,
    setPlanets,
    isFetching,
    setIsFetching,
    filters,
    setFilters,
  };

  return <StarWarsContext.Provider value={contextValue}>{children}</StarWarsContext.Provider>;
}

Provider.propTypes = {
  children: PropTypes.element.isRequired,
};
