import PropTypes from 'prop-types';
import React, { createContext, useState } from 'react';

const StarWarsContext = createContext();

const StarWarsProvider = ({ children }) => {
  const [loading, setLoading] = useState(false);
  const context = {
    loading,
    setLoading,
  };
  return <StarWarsContext.Provider value={context}>{children}</StarWarsContext.Provider>;
};
StarWarsProvider.propTypes = {
  children: PropTypes.element.isRequired,
};

export { StarWarsContext, StarWarsProvider };
