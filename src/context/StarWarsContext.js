import React, { createContext, useState } from 'react';
import PropTypes from 'prop-types';

const StarWarsContext = createContext();

const StarWarsProvider = ({ children }) => {

  const [data, setData] = useState([]);
  const [backupData, setBackupData] = useState([]);

  const context = {
    data,
    setData,
    backupData,
    setBackupData,
  };

  return <StarWarsContext.Provider value={context}>{children}</StarWarsContext.Provider>;
};

export { StarWarsContext, StarWarsProvider as Provider };
