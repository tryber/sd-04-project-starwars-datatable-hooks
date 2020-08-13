import React, { useState, useEffect } from 'react';
import StarWarsContext from './StarWarsContext';
import getPlanetsData from '../service/SWAPI';

const StarWarsProvider = ({ children }) => {
  const [loading, setLoading] = useState(true);
  const [data, setData] = useState([]);

  useEffect(() => {
    getPlanetsData().then(
      (resp) => setData(resp.results),
      (error) => setData(console.log(error)),
      setLoading(false),
    );
  }, []);

  const contextValue = { data, loading };
  return <StarWarsContext.Provider value={contextValue}>{children}</StarWarsContext.Provider>;
};

export default StarWarsProvider;
