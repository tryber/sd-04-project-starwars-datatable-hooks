import PropTypes from 'prop-types';
import React, { useState, useEffect } from 'react';
import StarWarsContext from './StarWarsContext';
import getApi from '../sercives/ApiPlanets';

const Provider = ({ children }) => {
  const initState = {
    isFetching: true,
    planetData: [],
    filterByName: { name: '' },
    filterByNumericValues: [],
    order: {
      column: 'Name',
      sort: 'ASC',
      }, 
  };

  const [data, setData] = useState(initState);

  useEffect(() => {
    getApi().then((array) =>
      setData({ ...data, planetData: array.results, isFetching: false }));
  }, []);

  const context = { data, setData };

  return (
    <StarWarsContext.Provider value={context}>
      {children}
    </StarWarsContext.Provider>
  );
};

Provider.propTypes = {
  children: PropTypes.isRequired,
};

export default Provider;
