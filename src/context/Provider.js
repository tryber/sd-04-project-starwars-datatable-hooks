import StarWarsContext from './StarWarsContext';
import React, { useState } from 'react';
import PropTypes from 'prop-types';

export default function Provider({ children }) {
  const [planets, setPlanets] = useState([]);

  const contextValue = {
    planets,
    getPlanets
  };

  return <StarWarsContext.Provider value={contextValue}>{children}</StarWarsContext.Provider>
}

Provider.propTypes = {
  children: PropTypes.element.isRequired,
};
