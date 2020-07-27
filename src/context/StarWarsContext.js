import React, { createContext, useState } from 'react';

const StarWarsContext = createContext();

const StarWarsProvider = ({ children }) => {
  const [data, setData] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState('');
  const [filterByName, setFilterByName] = useState({ name: '' });
  const [filterByNumericValues, setFilterByNumericValues] = useState([]);
  const [order, setOrder] = useState({ column: 'Name', sort: 'ASC' });
  const [options, setOptions] = useState([
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

  const submitFilters = (column, sort) => {
    setOrder({
      column,
      sort,
    });
  };

  const removeFilter = (col) => {
    setFilterByNumericValues([...filterByNumericValues.filter(({ column }) => column !== col)]);
    console.log('remove filter has been called');
    // setOptions([...options, col]);
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
    order,
    submitFilters,
    options,
    removeFilter,
  };

  return <StarWarsContext.Provider value={context}>{children}</StarWarsContext.Provider>;
};

export { StarWarsContext, StarWarsProvider };
