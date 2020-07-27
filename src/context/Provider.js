import React, { useState } from 'react';
import PropTypes from 'prop-types';

import StarWarsContext from './StarWarsContext';
import getPlanets from '../services/planetsAPI';

const Provider = (props) => {
  const [isLoading, setIsLoading] = useState(true); // Estado para mensagem de carregamento
  const [data, setData] = useState([]); // Estado para os dados

  const [name, setName] = useState(''); // Estado para atualização do input

  // Chamada da API
  const handleDataSuccess = (response) => {
    setData(response.results);
    setIsLoading(false);
  };
  const handleDataFailure = (error) => {
    setIsLoading(false);
    return error;
  };

  const fetchPlanets = () => {
    if (!isLoading) return null;

    setIsLoading(true);

    getPlanets().then(handleDataSuccess, handleDataFailure);
  };

  // Atualização do valor do input para filtar pelo nome futuramente
  const handleInput = (inputValue) => {
    setName(inputValue);
  };

  const contextValue = {
    isLoading,
    data,
    getPlanets: fetchPlanets,
    handleInput,
    name,
  };
  const { children } = props;

  return <StarWarsContext.Provider value={contextValue}>{children}</StarWarsContext.Provider>;
};

Provider.propTypes = {
  children: PropTypes.node.isRequired,
};

export default Provider;
