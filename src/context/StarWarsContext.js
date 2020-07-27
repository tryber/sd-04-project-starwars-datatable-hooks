import React, { createContext, useState, useEffect } from 'react';
import starWarsAPI from '../services/starWarsAPI';

const StarWarsContext = createContext();

const StartWarsProvider = ({ children }) => {
  const [planets, setPLanets] = useState([]);

  useEffect(() => {
    starWarsAPI().then((resp) => setPLanets(resp.results));
  }, []);

  const contextValue = { planets, setPLanets };
  return <StarWarsContext.Provider value={contextValue}>{children}</StarWarsContext.Provider>;
};

export { StarWarsContext, StartWarsProvider as Provider };
