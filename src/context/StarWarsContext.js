import React, { createContext, useState } from 'react';

export const StarWarsContext = createContext();

export default ({ children }) => {
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
