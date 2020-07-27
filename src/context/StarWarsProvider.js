import React, { useState, useEffect } from 'react';
import StarWarsContext from './StarWarsContext';

const StarWarsProvider = ({ children }) => {
  // fn prover estados para qq comp.

  // 2 - useStates:
  const [data, setData] = useState([]); // inicialm. array result está vazio.
  const [isLoading, setLoading] = useState(true);

  // 1- fazendo requisição:
  const planets = 'https://swapi-trybe.herokuapp.com/api/planets/';

  /* criar effeitos acontecerá apenas uma vez pq 2º parm é um array vazio
  e por isso tem o comportamento de compdidMount (chamado depois comp é montado) */
  useEffect(() => {
    (async () => {
      try {
        const caller = await fetch(planets); // fazendo requisiçao
        const Json = await caller.json(); // espera fazer requisiçao e esp. retornar obj json
        const { results } = await Json; // pego somente o array results
        await setData(results); // passo para o estado data o valor results
        await setLoading(false);
      } catch (error) {
        console.log('Requisição rejeitada', error)}
    })();
  }, []);

  
  // guardar os estados, métodos, fn, para serem consumidos
  const context = {
    data,
    isLoading,
  };

  return <StarWarsContext.Provider value={context}>{children}</StarWarsContext.Provider>;
};

export default StarWarsProvider;
