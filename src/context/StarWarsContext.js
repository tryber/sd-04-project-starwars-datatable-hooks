import React, { createContext, useState } from 'react';
import PropTypes from 'prop-types';

const StarWarsContext = createContext();

const StarWarsProvider = ({ children }) => {
  const [data, setData] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState('');
  const [filterByName, setFilterByName] = useState({ name: '' });
  const [filterByNumericValues, setFilterByNumericValues] = useState([]);
  const [options] = useState([
    'population',
    'orbital_period',
    'diameter',
    'rotation_period',
    'surface_water',
  ]);

  const handleInput = (value) => {
    setFilterByName({
      name: value,
    });
  };

  const removeFilter = (col) => {
    setFilterByNumericValues([...filterByNumericValues.filter(({ column }) => column !== col)]);
  };

  const submitFilterData = (column, comparison, value) => {
    setFilterByNumericValues([...filterByNumericValues, { column, comparison, value }]);
  };
  const context = {
    data,
    setData,
    isLoading,
    setIsLoading,
    error,
    setError,
    filterByName,
    handleInput,
    filterByNumericValues,
    submitFilterData,
    options,
    removeFilter,
  };

  return <StarWarsContext.Provider value={context}>{children}</StarWarsContext.Provider>;
};

StarWarsProvider.propTypes = {
  children: PropTypes.element.isRequired,
};

export { StarWarsContext, StarWarsProvider };
