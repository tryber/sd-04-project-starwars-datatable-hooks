import React, { createContext, useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import getPlanets from '../services/apis';

const PlanetsContext = createContext();

const PlanetsProvider = ({ children }) => {
  const [planets, setPlanets] = useState([]);

  const context = {
    planets,
    setPlanets,
  };

  useEffect(() => {
    getPlanets().then((data) => setPlanets(data.results));
  }, []);

  return <PlanetsContext.Provider value={context}>{children}</PlanetsContext.Provider>;
};

PlanetsContext.propTypes = {
  chidren: PropTypes.element.isRequired,
}

export { PlanetsContext, PlanetsProvider as Provider }
