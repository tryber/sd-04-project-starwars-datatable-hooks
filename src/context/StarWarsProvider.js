import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';

import StartWarsContext from './StarWarsContext';
import getPlanet from '../services/api';

const StarWarsProvider = ({ children }) => {
  const [isFetching, setIsFetching] = useState(true);
  const [planets, setPlanets] = useState([]);
  const [name, setName] = useState('');
  const [numericValues, setNumericValues] = useState([]);
  const [column, setColumn] = useState('');
  const [comparison, setComparison] = useState('');
  const [value, setValue] = useState('');

  const context = {
    isFetching,
    planets,
    name,
    setName,
    numericValues,
    setNumericValues,
    column,
    setColumn,
    comparison,
    setComparison,
    value,
    setValue,
  };

  useEffect(() => {
    getPlanet()
      .then((resolve) => {
        setPlanets(resolve.results);
        setIsFetching(false);
      });
  }, []);

  return (
    <StartWarsContext.Provider value={context}>
      { children }
    </StartWarsContext.Provider>
  );
};

StarWarsProvider.propTypes = {
  children: PropTypes.element.isRequired,
};

export default StarWarsProvider;
