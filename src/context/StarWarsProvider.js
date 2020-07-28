import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import StarWarsContext from './StarWarsContext';


const StarWarsProvider = ({ children }) => {
  const [dataApi, setDataApi] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [filterByName, setfilterByName] = useState({ name: '' });
  const [valueSelect, setvalueSelect] = useState({});
  const [filterByNumericValues, setfilterByNumericValues] = useState([])

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

  const handleChange = (event) => {
    event.preventDefault();
    const { name, value } = event.target;
    setvalueSelect((prevState) => (
      {
        ...prevState,
        [name]: value,
      }
    ));
  }

  const NumericOnClick = (event) => {
    event.preventDefault();
    setfilterByNumericValues((prevState) => ([
    ...prevState,
    valueSelect,
    ]));
  }

  const states = {
    dataApi,
    isLoading,
    filters: {
      filterByName,
      filterByNumericValues,
    },
    setfilterByName,
    handleChange,
    NumericOnClick,
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
