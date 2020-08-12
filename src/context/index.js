import React, { createContext, useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import getPlanets from '../services/apis';

const PlanetsContext = createContext();

const PlanetsProvider = ({ children }) => {
  const [planets, setPlanets] = useState([]);
  const [column, setColumn] = useState('');
  const [comparison, setComparison] = useState('');
  const [number, setNumber] = useState('');
  const [filterByNumericValues, setFilterByNumericValues] = useState('');
  const [isLoad, setIsLoad] = useState(false);
  const [filterByName, setFilterByName] = useState({ name: '' })

  const context = {
    planets,
    setPlanets,
    column,
    setColumn,
    comparison,
    setComparison,
    number,
    setNumber,
    filterByNumericValues,
    setFilterByNumericValues,
    isLoad,
    setIsLoad,
    filterByName,
    setFilterByName,
  };

  useEffect(() => {
    getPlanets().then((data) => setPlanets(data.results));
  }, []);

  return <PlanetsContext.Provider value={context}>{children}</PlanetsContext.Provider>;
};

PlanetsContext.propTypes = {
  children: PropTypes.element.isRequired,
};

PlanetsProvider.propTypes = {
  children: PropTypes.element.isRequired,
};

export { PlanetsContext, PlanetsProvider as Provider };
