import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import StarWarsContext from './StarWarsContext';
import getPlanets from '../services/api';

const StarWarsProvider = ({ children }) => {
  const [data, setData] = useState([]);
  const [isFetching, setIsFetching] = useState(false);
  const [error] = useState('');
  const [filters, setFilters] = useState({
    filterByName: { name: '' },
    filterByNumericValues: [],
    order: {
      column: 'Name',
      sort: 'ASC',
    },
  });

  const resquestPlanets = () => setIsFetching(true);

  const successPlanets = (result) => {
    setData(result);
    setIsFetching(false);
    console.log(result);
  };

  const requestFetch = () => {
    resquestPlanets();

    useEffect(() => {
      requestFetch();
    }, []);

    return getPlanets().then((json) => {
      console.log(json);
      successPlanets(json.results);
    })
  };

  const filterByName = (name) =>
    setFilters((state) => ({
      ...state,
      filterByName: { name },
    }));

  const filterByNumericValues = (column, comparison, value) =>
    setFilters((state) => ({
      ...state,
      filterByNumericValues: [
        ...state.filterByNumericValues,
        {
          column,
          comparison,
          value,
        },
      ],
    }));

  const removeFilterNumeric = (obj) =>
    setFilters((state) => ({
      ...state,
      filterByNumericValues: [
        ...state.filterByNumericValues.filter((filter) => filter !== obj),
      ],
    }));

  const orderColumns = (column, sort) =>
    setFilters((state) => ({
      ...state,
      order: { column, sort },
    }));

  const context = {
    data,
    isFetching,
    error,
    filters,
    requestFetch,
    filterByName,
    filterByNumericValues,
    removeFilterNumeric,
    orderColumns,
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
