import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import StarWarsContext from './StarWarsContext';
import getPlanetsData from '../service/SWAPI';

const StarWarsProvider = ({ children }) => {
  const [loading, setLoading] = useState(true);
  const [data, setData] = useState([]);
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

  useEffect(() => {
    getPlanetsData().then(
      (resp) => {
        setData(resp.results);
        setLoading(false);
      },
      (error) => {
        setData(console.log(error));
        setLoading(false);
      },
    );
  }, []);

  const contextValue = { data, loading, filters, setFilters };
  return <StarWarsContext.Provider value={contextValue}>{children}</StarWarsContext.Provider>;
};

StarWarsProvider.propTypes = {
  children: PropTypes.node.isRequired,
};

export default StarWarsProvider;
