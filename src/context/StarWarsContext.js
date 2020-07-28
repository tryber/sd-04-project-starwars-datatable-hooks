import React, { createContext, useState, useEffect } from 'react';
import starWarsAPI from '../services/starWarsAPI';

const StarWarsContext = createContext();

const StartWarsProvider = ({ children }) => {
  const [planets, setPLanets] = useState([]); // Estado dos planetas.
  const [filters, setFilters] = useState({
    filterByName: { name: '' },
    filterByColumn: '',
    filterByNumericValues: [],
  }); // Estado dos filtros.
  const [filterKeys, setFilterKeys] = useState([
    'population',
    'orbital_period',
    'diameter',
    'rotation_period',
    'surface_water',
  ]);
  // const [comparison, setComparisons] = useState(['']);

  useEffect(() => {
    starWarsAPI().then((resp) => setPLanets(resp.results)); // Requisição da API.
  }, []);

  const contextValue = { planets, setPLanets, filters, setFilters, filterKeys, setFilterKeys }; // Valores do contexto.

  return <StarWarsContext.Provider value={contextValue}>{children}</StarWarsContext.Provider>;
};

export { StarWarsContext, StartWarsProvider as Provider };
