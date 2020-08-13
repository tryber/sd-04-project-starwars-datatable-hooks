import PropTypes from "prop-types";
import React, { useState } from 'react';
import StarWarsContext from './StarWarsContext';

const Provider = ({ children }) => {
  const initState = { isFetching: true, planetData: [] };

  const [data, setData] = useState(initState);

  const context = { data, setData };

  return (
    <StarWarsContext.Provider value={context}>
      {children}
    </StarWarsContext.Provider>
  );
};

Provider.propTypes = {
  children: PropTypes.isRequired,
};

export default Provider;
