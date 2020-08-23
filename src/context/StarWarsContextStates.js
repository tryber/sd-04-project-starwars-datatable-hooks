import { useState } from 'react';
import getPlanetsApi from '../services/getApi';

const StarWarsContextStates = () => {
  const [data, setData] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const INITIAL_STATE = {
      filterByName: {
        name: '',
      },
  };
  const [filters, setFilters] = useState(INITIAL_STATE);

  const setStateFilter = (filter, action) => {
    let newFilters = filters; // caso não entre nenhuma condição
    switch (action) {
      case 'NAME': {
        newFilters = {
          ...filters,
          filterByName: { name: filter.name },
        };
      }
    }
    setFilters(newFilters);
  };

  const getFilterName = () => {
    return filters.filterByName.name;
  };

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
      (error) => setPlanets(error)
    );
  };

  return {
    data,
    isLoading,
    fetchPlanets,
    setData,
    setIsLoading,
    setStateFilter,
    getFilterName,
  };
};

export default StarWarsContextStates;
