import React, { createContext, useState } from 'react';

const StarWarsContext = createContext();

const Provider = ({ children }) => {
  const [planet, setPlanet] = useState([]);
  const [isFetching, setIsFetching] = useState(true);

  const setFetching = () => {
    setIsFetching(!isFetching);
  };

  const contextValue = {
    planet,
    setPlanet,
    setFetching,
    isFetching,
  };

  return <StarWarsContext.Provider value={contextValue}>{children}</StarWarsContext.Provider>;
};

export { Provider, StarWarsContext };
