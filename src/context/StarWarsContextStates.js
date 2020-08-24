import { useState } from 'react';
import getPlanetsApi from '../services/getApi';
import StarWarsContextStatesFilters from './StarWarsContextStatesFilters';


const INITIAL_STATE = {
  filterByName: {
    name: '',
  },
  filterByNumericValues: [],
};

const StarWarsContextStates = () => {
  const [data, setData] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [filters, setFilters] = useState(INITIAL_STATE);

  const setStateFilter = (filter, action) => {
    setFilters(StarWarsContextStatesFilters(filters, filter, action));
  };

  const getFilterNumericValues = () => filters.filterByNumericValues;

  const setPlanets = (results) => {
    setData(results);
    setIsLoading(false);
  };

  const removeResidents = (dataPlanets) => {
    const newData = dataPlanets.map((planet) => {
      const filterPlanet = planet;
      delete filterPlanet.residents;
      return filterPlanet;
    });
    return newData;
  };

  const fetchPlanets = () => {
    setIsLoading(true);
    getPlanetsApi().then(
      (results) => setPlanets(removeResidents(results)),
      (error) => setPlanets(error),
    );
  };

  return {
    data,
    isLoading,
    fetchPlanets,
    setData,
    setIsLoading,
    setStateFilter,
    filters,
    getFilterNumericValues,
  };
};

export default StarWarsContextStates;
