import React, { createContext, useState } from 'react';

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

export default StarWarsContextProvider;
