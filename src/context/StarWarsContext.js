import React, { createContext, useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import getPlanetsAPI from '../services';

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
    getPlanetsAPI().then((resp) => setData(resp.results));
    getPlanetsAPI().then((resp) => setBackupData(resp.results));
  }, []);

  return <StarWarsContext.Provider value={context}>{children}</StarWarsContext.Provider>;
};

StarWarsProvider.propTypes = {
  children: PropTypes.node.isRequired,
};

export { StarWarsContext, StarWarsProvider as Provider };
