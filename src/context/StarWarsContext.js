import React, { createContext, useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import getPlanetsAPI from '../services';

const StarWarsContext = createContext();

const StarWarsProvider = ({ children }) => {
  const [data, setData] = useState([]);
  const [backupData, setBackupData] = useState([]);
  const [filters, setFilters] = useState({
    filterByName: {
      name: '',
    },
    filterByNumericValues: [],
    order: {
      column: 'Name',
      sort: 'ASC',
    },
  });
  const context = {
    data,
    setData,
    backupData,
    setBackupData,
    filters,
    setFilters,
  };

  useEffect(() => {
    getPlanetsAPI().then((resp) => {
      setData(resp.results);
      setBackupData(resp.results);
    });
  }, []);

  return <StarWarsContext.Provider value={context}>{children}</StarWarsContext.Provider>;
};

StarWarsProvider.propTypes = {
  children: PropTypes.node.isRequired,
};

export { StarWarsContext, StarWarsProvider as Provider };
