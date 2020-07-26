import React, { useState, useEffect } from 'react';
import StarWarsContext from './StarWarsContext';

const StarWarsProvider = ({ children }) => {
  const [data, setData] = useState([]);
  const [isLoading, setLoading] = useState(true);

  const URL_BASE = 'https://swapi-trybe.herokuapp.com/api';
  const ENDPOINT = '/planets';

  const fetchApi = async () => {
    try {
      const request = await fetch(`${URL_BASE}${ENDPOINT}`);
      const { results } = await request.json();
      await setData(results);
      await setLoading(false);
    } catch (error) { console.log('Algo deu errado', error); }
  };

  useEffect(() => {
    fetchApi();
  }, []);

  const stateValue = {
    data,
    isLoading,
  };

  return (
    <StarWarsContext.Provider value={stateValue}>
      {children}
    </StarWarsContext.Provider>
  );
};

export default StarWarsProvider;
