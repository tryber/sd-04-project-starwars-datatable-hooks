import React, { useState } from 'react';
import PropTypes from 'prop-types';

import StarWarsContext from './StarWarsContext';
import getPlanets from '../services/planetsAPI';

const Provider = (props) => {
  const [isLoading, setIsLoading] = useState(true);
  const [data, setData] = useState([]);

  const handleDataSuccess = (response) => {
    setData(response.results);
    setIsLoading(false);
  };
  const handleDataFailure = (error) => {
    setIsLoading(false);
    return error
    // console.log(error.message)
  };

  const fetchPlanets = () => {
    if (!isLoading) return null;

    setIsLoading(true);

    getPlanets().then(handleDataSuccess, handleDataFailure);
  };

  const contextValue = {
    isLoading,
    data,
    getPlanets: fetchPlanets,
  };
  const { children } = props;

  return <StarWarsContext.Provider value={contextValue}>{children}</StarWarsContext.Provider>;
};

Provider.propTypes = {
  children: PropTypes.node.isRequired,
};

export default Provider;
