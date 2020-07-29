import PropTypes from 'prop-types';
import React, { useState } from 'react';

import SWContext from './StarWarsContext';

const SWProvider = ({ children }) => {
  const [data, setData] = useState([]);
  const [fetching, setFetching] = useState(false);
  const [columns] = useState([
    'Column',
    'population',
    'orbital_period',
    'diameter',
    'rotation_period',
    'surface_water',
  ]);
  const context = { data, setData, fetching, setFetching, columns };
  return <SWContext.Provider value={context}>{children}</SWContext.Provider>;
};

SWProvider.propTypes = {
  children: PropTypes.element.isRequired,
};

export default SWProvider;
