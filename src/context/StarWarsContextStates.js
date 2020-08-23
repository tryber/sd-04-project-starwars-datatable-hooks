import { useState } from 'react';
import getPlanetsApi from '../services/getApi';

const StarWarsContextStates = () => {
  const [data, setData] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

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
  };
};

export default StarWarsContextStates;
