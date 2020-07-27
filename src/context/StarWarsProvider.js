import React, { useState, useEffect } from 'react';
import StartWarsContext from './StarWarsContext';
import getPlanet from '../services/api';

const StarWarsProvider = ({ children }) => {
  const [isFetching, setIsFetching] = useState(true);
  const [planets, setPlanets] = useState([]);

  const context = {
    isFetching,
    planets,
  }

  useEffect(() => {
    getPlanet()
      .then((resolve) => { 
        setPlanets(resolve.results);
        setIsFetching(false);
      });
  }, []);

  return (
    <StartWarsContext.Provider value={ context }>
      { children }
    </StartWarsContext.Provider>
  )
}

export { StarWarsProvider };
