import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import StarWarsContext from './StarWarsContext';


const StarWarsProvider = ({ children }) => {
  const [dataApi, setDataApi] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [filterByName, setfilterByName] = useState({ name: '' });
  const [column, setColumn] = useState('');
  const [comparison, setComparison] = useState('');
  const [value, setValue] = useState('');

  useEffect(() => {
    (async () => {
      try {
        const request = await fetch('https://swapi-trybe.herokuapp.com/api/planets/');
        const { results } = await request.json();
        await setDataApi(results);
        await setIsLoading(false);
      } catch (error) { console.log('Deu ruim', error); }
    })();
  }, []);

  const states = {
    dataApi,
    isLoading,
    filters: {
      filterByName,
      filterByNumericValues: {
        column,
        comparison,
        value,
      },
    },
    setfilterByName,
    setColumn,
    setComparison,
    setValue,
  };

  return (
    <StarWarsContext.Provider value={states}>
      {children}
    </StarWarsContext.Provider>
  );
};

export default StarWarsProvider;

StarWarsProvider.propTypes = {
  children: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.element),
    PropTypes.element,
  ]).isRequired,
};
