import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import StarWarsContext from './StarWarsContext';

const Provider = ({ children }) => {
  const INITIAL_STATE = {
    filterByName: { name: '' },
    filteredPlanets: [],
    planetsData: [],
    filterByNumericValues: [],
    order: {
      column: 'Name',
      sort: 'ASC',
    },
  };

  const [data, setData] = useState(INITIAL_STATE);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    (async () => {
      try {
        const getAPI = await fetch('https://swapi.dev/api/planets/');
        const { results } = await getAPI.json();
        await setData({ ...data, planetsData: results });
        await setIsLoading(false);
      } catch (err) {
        console.log(err);
      }
    })();
  }, []);

  const stateValue = {
    data,
    setData,
    isLoading,
    setIsLoading,
  };

  return (
    <StarWarsContext.Provider value={stateValue}>
      {children}
    </StarWarsContext.Provider>
  );
};

export default Provider;

Provider.propTypes = {
  children: PropTypes.objectOf(PropTypes.any).isRequired,
};
