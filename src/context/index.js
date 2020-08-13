import React, { createContext, useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import getPlanets from '../services/apis';

const PlanetsContext = createContext();

const PlanetsProvider = ({ children }) => {
  const [planets, setPlanets] = useState([]);
  const [filterByName, setFilterByName] = useState({ name: '' });
  const [filterByNumericValues, setFilterByNumericValues] = useState([
    {
      column: '',
      comparison: '',
      value: '',
    },
  ]);
  const [isLoad, setIsLoad] = useState(false);

  const context = {
    planets,
    setPlanets,
    filterByName,
    setFilterByName,
    filterByNumericValues,
    setFilterByNumericValues,
    isLoad,
    setIsLoad,
  };

  useEffect(() => {
    getPlanets().then((data) => setPlanets(data.results));
  }, []);

  return (
    <PlanetsContext.Provider value={context}>
      {children}
    </PlanetsContext.Provider>
  );
};

PlanetsContext.propTypes = {
  children: PropTypes.element.isRequired,
};

PlanetsProvider.propTypes = {
  children: PropTypes.element.isRequired,
};

export { PlanetsContext, PlanetsProvider as Provider };
