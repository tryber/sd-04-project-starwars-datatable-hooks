import React, { createContext, useState } from 'react';

const StarWarsContext = createContext();

const StarWarsProvider = ({ children }) => {
  const [planets, setPlanets] = useState([]);
  const context = {
    planets,
    setPlanets,
  };

  return <StarWarsContext.Provider value={context}>{children}</StarWarsContext.Provider>;
};

export { StarWarsContext, StarWarsProvider };
