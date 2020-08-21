import React, { useEffect, useState } from 'react';
import StarWarsContext from './StarWarsContext';

const Provider = ({ children }) => {
  const [data, setData] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    (async () => {
      try {
        const getAPI = await fetch('https://swapi.dev/api/planets/');
        const { results } = await getAPI.json();
        await setData(results);
        await setIsLoading(false);
      } catch (err) {
        console.log(err);
      }
    })();
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

export default Provider