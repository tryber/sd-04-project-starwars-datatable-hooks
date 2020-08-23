import React from 'react';
import Proptypes from 'prop-types';
import StartWarsContextStates from './StarWarsContextStates';
import StarWarsContext from './StarWarsContext';

const StarWarsProvider = ({ children }) => {
  return(
  <StarWarsContext.Provider value={StartWarsContextStates()}>
    {children}
  </StarWarsContext.Provider>)
};

StarWarsProvider.propTypes = {
  children: Proptypes.node.isRequired,
};

export default StarWarsProvider;
