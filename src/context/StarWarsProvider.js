import React, { useState, useEffect } from 'react';
import StarWarsContext from  './StarWarsContext';


const StarWarsProvider = ({children}) => {
  const [dataApi, setDataApi] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    (async () => {
      try {
        const request= await fetch('https://swapi-trybe.herokuapp.com/api/planets/');
        const { results } = await request.json();
        await setDataApi(results);
        await setIsLoading(false)
      }
      catch (error) { console.log('Deu ruim',error)}
    })()
  }, []);

  const states = {
    dataApi,
    isLoading,
  }

  return (
    <StarWarsContext.Provider value={states}>
      {children}
    </StarWarsContext.Provider>
  );
}

export default StarWarsProvider;