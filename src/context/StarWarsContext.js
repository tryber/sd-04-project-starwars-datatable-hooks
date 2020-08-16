import React, { createContext, useState, useEffect } from 'react';
import getPlanetsAPI from '../services';
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

  useEffect(() => {
    getPlanetsAPI().then((data) => setData(data.results));
    getPlanetsAPI().then((data) => setBackupData(data.results));
  }, []);

  return <StarWarsContext.Provider value={context}>{children}</StarWarsContext.Provider>;
};

StarWarsProvider.propTypes = {
  children: PropTypes.node.isRequired,
};

export { StarWarsContext, StarWarsProvider as Provider };
