import React, { createContext, useState } from 'react';

export const StarWarsContext = createContext();

const Provider = ({ children }) => {
  const [planet, setPlanet] = useState([]);
  const [e, setE] = useState(true);

  const mudaVouF = () => {
    setE(!e);
  };

  const contextValue = {
    planet,
    e,
    mudaVouF,
  };

  return <StarWarsContext.Provider value={contextValue}>{children}</StarWarsContext.Provider>;
};

export default Provider;
