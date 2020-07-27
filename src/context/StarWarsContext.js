import React, { createContext, useState } from 'react';

const StarWarsContext = createContext();

const StartWarsProvider = ({ children }) => {
  const [planets, setPLanets] = useState([]);
  const contextValue = { planets, setPLanets };
  return <StarWarsContext.Provider value={contextValue}>{children}</StarWarsContext.Provider>;
};

export { StarWarsContext, StartWarsProvider as Provider };
