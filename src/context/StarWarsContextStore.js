import PropTypes from 'prop-types';
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

  const removeFilter = (col) =>
    setFilterByNumericValues([
      ...filterByNumericValues.filter((elem) => elem.column !== col),
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

  const submitOrder = (event, srt, col) => {
    event.preventDefault();
    setColumn(col);
    setSort(srt);
  };

  const getData = (endpoint) => bzunBzun(endpoint);

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

StarWarsContextStore.defaultProps = {
  children: undefined,
};

StarWarsContextStore.propTypes = {
  children: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.node),
    PropTypes.node,
  ]),
};

export default StarWarsContextStore;
