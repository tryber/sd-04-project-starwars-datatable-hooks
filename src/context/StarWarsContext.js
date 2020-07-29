import PropTypes from 'prop-types';
import React, { createContext, useState, useEffect } from 'react';
import getPlanets from '../services/apiFetch';

export const StarWarsContext = createContext();

const initialStateFilters = {
  filterByName: {
    name: '',
  },
  filterByNumericValues: [],
  order: {
    column: 'Name',
    sort: 'ASC',
  },
};

const filterForComparison = (planet, column, comparison, value) => {
  switch (comparison) {
    case 'maior que':
      return Number(planet[column]) > Number(value);
    case 'menor que':
      return Number(planet[column]) < Number(value);
    case 'igual a':
      return Number(planet[column]) === Number(value);
    default:
      return [];
  }
};

const filterNumeric = (filteredData, filters) =>
  filters.reduce(
    (acc, { column, comparison, value }) =>
      acc.filter((planet) => filterForComparison(planet, column, comparison, value)),
    filteredData,
  );

function sortByPlanet(planetX, planetY, column) {
  let planet1 = planetX[column];
  let planet2 = planetY[column];
  if (Number(planet1) && Number(planet2)) {
    planet1 = Number(planet1);
    planet2 = Number(planet2);
    switch (true) {
      case planet1 > planet2:
        return 1;
      case planet1 < planet2:
        return -1;
      default:
        return 0;
    }
  }
  return planet1.localeCompare(planet2.toLowerCase());
}

const sortByAscOurDesc = (dataToSort, sort, column) => {
  switch (sort) {
    case 'ASC':
      return dataToSort.sort((planetX, planetY) =>
        sortByPlanet(planetX, planetY, column.toLowerCase()),
      );
    case 'DESC':
      return dataToSort
        .sort((planetX, planetY) => sortByPlanet(planetX, planetY, column.toLowerCase()))
        .reverse();
    default:
      return dataToSort;
  }
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

  const filterByName = (planets, text) =>
    planets.filter((planet) => text === '' || planet.name.includes(text));

  const setFilterByName = (text) => {
    setFilters((stateFilter) => ({
      ...stateFilter,
      filterByName: { name: text },
    }));
  };

  const deleteFilter = (column) => {
    const newFilterNumeric = filters.filterByNumericValues.filter(
      (element) => element.column !== column,
    );
    setFilters((stateFilter) => ({
      ...stateFilter,
      filterByNumericValues: newFilterNumeric,
    }));
  };

  const setNumericFilter = ({ column, comparison, value }) => {
    setFilters((stateFilter) => ({
      ...stateFilter,
      filterByNumericValues: [...stateFilter.filterByNumericValues, { column, comparison, value }],
    }));
  };

  const setSort = (column, sort) =>
    setFilters((filterState) => ({
      ...filterState,
      order: {
        column,
        sort,
      },
    }));

  useEffect(() => {
    getData();
  }, []);

  useEffect(() => {
    if (dataFiltered.length) {
      let planetsFiltered = filterByName(data, filters.filterByName.name);
      planetsFiltered = filterNumeric(planetsFiltered, filters.filterByNumericValues);
      planetsFiltered = sortByAscOurDesc(planetsFiltered, filters.order.sort, filters.order.column);
      setDataFiltered(planetsFiltered);
      // console.log('planetsFiltered', planetsFiltered)
      // console.log('data', data)
    }
  }, [filters, data, dataFiltered.length]);

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
    selectFilter: filters.filterByNumericValues,
    deleteFilter,
    setNumericFilter,
    setSort,
  };

  return <StarWarsContext.Provider value={context}>{children}</StarWarsContext.Provider>;
};

StarWarsProvider.propTypes = {
  children: PropTypes.node.isRequired,
};
