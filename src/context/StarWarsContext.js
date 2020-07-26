import React, { createContext, useState } from 'react';
import PropTypes from 'prop-types';

const StarWarsContext = createContext();

const StarWarsProvider = ({ children }) => {
  const [searchInput, setSearchInput] = useState('');

  const context = {
    searchInput,
    setSearchInput,
  };
  return (
    <StarWarsContext.Provider value={context}>
      {children}
    </StarWarsContext.Provider>
  );
};

StarWarsProvider.propTypes = {
  children: PropTypes.string,
};

StarWarsProvider.defaultProps = {
  children: null,
};

export { StarWarsProvider, StarWarsContext };
