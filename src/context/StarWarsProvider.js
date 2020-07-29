import React, { useState } from 'react';
import PropTypes from 'prop-types';
import StarWarsContext from './StarWarsContext';
import getStarsWarsPlanets from '../services/planetsRequisition';

const StarWarsProvider = ({ children }) => {
  const [planets, setPlanets] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [textInput, setTextInput] = useState('');

  const fetchPlanets = () => {
    getStarsWarsPlanets().then(({ results }) => {
      setPlanets(results);
      setIsLoading(false);
    });
  };

  const contextAPI = {
    isLoading,
    planets,
    fetchPlanets,
    textInput,
    setTextInput,
  };

  return <StarWarsContext.Provider value={contextAPI}>{children}</StarWarsContext.Provider>;
};

StarWarsProvider.propTypes = {
  children: PropTypes.node.isRequired,
};

export default StarWarsProvider;
