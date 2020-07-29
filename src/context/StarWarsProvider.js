import React, { useState } from 'react';
import PropTypes from 'prop-types';
import StarWarsContext from './StarWarsContext';
import getStarsWarsPlanets from '../services/planetsRequisition';

const StarWarsProvider = ({ children }) => {
  const [planets, setPlanets] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [textInput, setTextInput] = useState('');
  const [column, setColumn] = useState('');
  const [comparison, setComparison] = useState('');
  const [value, setValue] = useState('');
  const [comparisonFilter, setComparisonFilter] = useState([]);
  const [button, setButton] = useState(false);

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
    column,
    setColumn,
    comparison,
    setComparison,
    value,
    setValue,
    setComparisonFilter,
    comparisonFilter,
    button,
    setButton,
  };

  return <StarWarsContext.Provider value={contextAPI}>{children}</StarWarsContext.Provider>;
};

StarWarsProvider.propTypes = {
  children: PropTypes.node.isRequired,
};

export default StarWarsProvider;
