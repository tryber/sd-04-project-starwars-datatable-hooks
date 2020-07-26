import React, { createContext, useState } from 'react';
import PropTypes from 'prop-types';

export const StarWarsContext = createContext();

const StarWarsContextProvider = ({ children }) => {
  const [searchInput, setSearchInput] = useState('');

  const context = {
    testContext: 'test',
    searchInput,
    setSearchInput,
  };
  return (
    <StarWarsContext.Provider value={context}>
      {children}
    </StarWarsContext.Provider>
  );
};

StarWarsContextProvider.propTypes = {
  children: PropTypes.string,
};

StarWarsContextProvider.defaultProps = {
  children: null,
};

export default StarWarsContextProvider;
