import React, { createContext, useState, useEffect } from 'react';
import starWarsAPI from '../services/starWarsAPI';

const StarWarsContext = createContext();

const StartWarsProvider = ({ children }) => {
  const [planets, setPLanets] = useState([]); // Estado dos planetas.
  const [filters, setFilters] = useState({
    filterByName: { name: '' },
    filterByNumericValues: [],
  }); // Estado dos filtros.

  useEffect(() => {
    starWarsAPI().then((resp) => setPLanets(resp.results)); // Requisição da API.
  }, []);

  const contextValue = { planets, setPLanets, filters, setFilters }; // Valores do contexto.

  return <StarWarsContext.Provider value={contextValue}>{children}</StarWarsContext.Provider>;
};

export { StarWarsContext, StartWarsProvider as Provider };
