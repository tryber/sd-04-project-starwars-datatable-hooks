import React, { useState } from 'react';
import PropTypes from 'prop-types';
import StarWarsContext from './StarWarsContext';

// Provider (estados) das criação/renderização da tabela pela requisição API
function Provider({ children }) {
  const [isFetching, setIsFetching] = useState(true);
  const [data, setData] = useState([]);

  const context = {
    isFetching,
    setIsFetching,
    data,
    setData,
  };

  return <StarWarsContext.Provider value={context}>{children}</StarWarsContext.Provider>;
}

export default Provider;

Provider.propTypes = {
  children: PropTypes.node.isRequired,
};
