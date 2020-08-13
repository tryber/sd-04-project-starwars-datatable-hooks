import PropTypes from 'prop-types';
import React, { useState } from 'react';

import StarWarsContext from './StarWarsContext';

const columns = [
  '',
  'population',
  'orbital_period',
  'diameter',
  'rotation_period',
  'surface_water',
];

const StarWarsProvider = ({ children }) => {
  const state = {
    data,
  };
  return <StarWarsContext.Provider value={state}>{children}</StarWarsContext.Provider>;
};
export default StarWarsProvider;
