import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import StarWarsContext from './StarWarsContext';
import getPlanets from '../services/api';

const StarWarsProvider = ({ children }) => {
  const [data, setData] = useState([]);
  const [isFetching, setIsFetching] = useState(false);
  const [error, setError] = useState("");
  const [filters, setFilters] = useState({
    filterByName: { name: "" },
    filterByNumericValues: [],
    order: {
      column: "Name",
      sort: "ASC",
    },
  });
  useEffect(() => {
    requestFetch();
  }, []);

  const resquestPlanets = () => setIsFetching(true);

  const successPlanets = (result) => {
    setData(result);
    setIsFetching(false);
    console.log(result);
  };
  
  const requestFetch = () => {
    resquestPlanets();
    console.log("bla");

    return getPlanets().then((json) => {
      console.log(json);
      successPlanets(json.results);
    }); /* 
    (err) => failurePlanets(err), */
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
