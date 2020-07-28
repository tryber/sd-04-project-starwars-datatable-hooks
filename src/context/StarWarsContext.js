import PropTypes from 'prop-types';
import React, { createContext, useState, useEffect } from 'react';
import getPlanets from '../services/apiFetch';

export const StarWarsContext = createContext();

const initialStateFilters = {
  filterByName: {
    neme: '',
  },
  filterByNumericValues: [],
  order: {
    column: 'Name',
    sort: 'ASC',
  },
};

export const StarWarsProvider = ({ children }) => {
  const [data, setData] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState('');
  const [filters, setFilters] = useState(initialStateFilters);
  const [dataFiltered, setDataFiltered] = useState(data);

  const getData = async () => {
    try {
      const response = await getPlanets();
      setData(response.results);
      setDataFiltered(response.results);
    } catch (e) {
      setError(e);
    } finally {
      setIsLoading(false);
    }
  };

  const filterByName = (planets, text) => {
    return planets.filter((planet) => text === '' || planet.name.includes(text));
  };

  // const resultsFilters = () => {
  //   if(dataFiltered.length) {
  //     let planetsFiltered = filterByName(data, filters.filterByName.name);
  //     setDataFiltered(planetsFiltered);
  //   }
  // }

  useEffect(() => {
    getData();
    // resultsFilters()
  }, []);

  useEffect(() => {
    if (dataFiltered) {
      let planetsFiltered = filterByName(data, filters.filterByName.name);
      setDataFiltered(planetsFiltered);
    }
  }, [filters]);

  const setFilterByName = (text) => {
    setFilters((stateFilter) => ({
      ...stateFilter,
      filterByName: { name: text },
    }));
  };

  const context = {
    data,
    setData,
    isLoading,
    setIsLoading,
    error,
    setError,
    filters,
    setFilters,
    setFilterByName,
    dataFiltered,
    setDataFiltered,
  };

  return <StarWarsContext.Provider value={context}>{children}</StarWarsContext.Provider>;
};

StarWarsProvider.propTypes = {
  children: PropTypes.node.isRequired,
};
