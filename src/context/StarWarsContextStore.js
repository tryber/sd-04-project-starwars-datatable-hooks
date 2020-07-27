import React from 'react';
import StarWarsContext from './StarWarsContext';
import bzunBzun from '../service/api';

const StarWarsContextStore = ({ children }) => {
  const [count, setCount] = React.useState();
  const [next, setNext] = React.useState();
  const [previous, setPrevious] = React.useState();
  const [results, setResults] = React.useState();
  const [filterByName, setFilterByName] = React.useState('');
  const [filterByNumericValues, setFilterByNumericValues] = React.useState([]);
  const [column, setColumn] = React.useState('Name');
  const [sort, setSort] = React.useState('ASC');

  const removeFilter = (column) =>
    setFilterByNumericValues([
      ...filterByNumericValues.filter((elem) => elem.column !== column),
    ]);

  const submitFilter = (event, filters) => {
    event.preventDefault();
    setFilterByNumericValues([
      ...filterByNumericValues,
      {
        column: filters.column,
        comparison: filters.comparison,
        value: filters.value,
      },
    ]);
  };

  const submitOrder = (event, sort, column) => {
    event.preventDefault();
    setColumn(column);
    setSort(sort);
  };

  const getData = (endpoint) => {
    return bzunBzun(endpoint);
  };

  const store = {
    data: {
      count: { count, setCount },
      next: { next, setNext },
      previous: { previous, setPrevious },
      results: { results, setResults },
      getData,
    },
    filters: {
      filterByName: { filterByName, setFilterByName },
      filterByNumericValues: {
        filterByNumericValues,
        setFilterByNumericValues,
        removeFilter,
        submitFilter,
      },
      order: {
        column: { column, setColumn },
        sort: { sort, setSort },
        submitOrder,
      },
    },
  };

  return (
    <StarWarsContext.Provider value={store}>
      {children}
    </StarWarsContext.Provider>
  );
};

export default StarWarsContextStore;
