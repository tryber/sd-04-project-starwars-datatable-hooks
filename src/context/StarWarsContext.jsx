import React, { createContext, useState } from 'react';
import PropTypes from 'prop-types';
import swApi from '../services/swApi';

const StarWarsContext = createContext();

const SWProvider = ({ children }) => {
  const [data, setData] = useState([]);
  const [fetching, setFetching] = useState(true);
  const [nameFilter, setNameFilter] = useState('');

  //  Função caso a api retorne sucesso:
  const requestSucess = (res) => {
    setData(res.results);
    setFetching(false);
  };
  const requestFailure = (error) => {
    setFetching(false);
    return error;
  };
  const requestPlanets = () => {
    if (!fetching) return null;
    setFetching(true);
    swApi().then(requestSucess, requestFailure);
  };
  /////////////////////////////////////////

  const filterByName = (name) => {
    setNameFilter(name);
  };

  const context = {
    data,
    setData,
    fetching,
    setFetching,
    swApi: requestPlanets,
    filterByName,
    nameFilter,
  };

  return (
    <StarWarsContext.Provider value={context}>
      {children}
    </StarWarsContext.Provider>
  );
};

SWProvider.propTypes = {
  children: PropTypes.node.isRequired,
};

export { StarWarsContext, SWProvider };
