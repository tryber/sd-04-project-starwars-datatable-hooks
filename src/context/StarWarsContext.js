import React, { createContext, useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import getAPI from '../service/StarWarsAPI';

const StarsWarsContext = createContext();

const INITIAL_STATE = {
  filters: {
    filterByName: {
      name: '',
    },
  },
};

const StarsWarsProvider = ({ children }) => {
  // Estado de controle requisição API
  const [isFetching, setIsFetching] = useState(false);
  // const [filters] = useState(INITIAL_STATE);
  const [Input, getInput] = useState('');
  const [data, setData] = useState([]);
  
  // Obtêndo o dados da requisição
  const getSucessApi = (obj) => {
    return setData(obj.results.map((planets) => planets));
  };
  
  // Fazendo a requisição
  const fetchAPI = () => {
    if (isFetching) return null; 
    getAPI().then(getSucessApi);
    setIsFetching(true);
  };

  useEffect(() => {
    fetchAPI();
  });

  function search(rows) {
    return rows.filter((row) => row.name.toLowerCase().includes(Input));
  }

  const context = {
    fetchAPI,
    isFetching,
    data,   
    Input,
    getInput,
    search,
  };

  return (
    <StarsWarsContext.Provider value={context}>
      {children}
    </StarsWarsContext.Provider>
  );
};

StarsWarsProvider.propTypes = {
  children: PropTypes.node.isRequired,
};

export { StarsWarsProvider, StarsWarsContext };
