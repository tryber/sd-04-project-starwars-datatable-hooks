import React, { useState } from 'react';
import StarWarsContext from './StarWarsContext';
import planetsAPI from '../services/planetsAPI';

const StarWarsProvider = ({ children }) => {
  const [isFetching, setIsFetching] = useState(false);
  const [planets, setPlanets] = useState([]);

  const sucessPlanets = (planets) => {
    setPlanets(planets);
    setIsFetching(false);
  }

  const failurePlanets = (error) => {
    setPlanets(error);
    setIsFetching(false);
  }

  const fetchPlanets = () => {
    if (isFetching) return null;
    setIsFetching(true);
    planetsAPI().then(
      (response) => sucessPlanets(response.results),
      (error) => failurePlanets(error),
    );
  }

  const context = {
    isFetching,
    setIsFetching,
    planets,
    setPlanets,
    fetchPlanets,
  };

  return (
    <StarWarsContext.Provider value={context}>
      {children}
    </StarWarsContext.Provider>
  );
};

export default StarWarsProvider;
