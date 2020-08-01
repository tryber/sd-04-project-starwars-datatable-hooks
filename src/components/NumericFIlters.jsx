import React, { useContext } from 'react';
import { StarWarsContext } from '../context/StarWarsContext';
import FilterInput from './FilterInput';
import ColumnFilter from './ColumnFilter';
import ComparisonFilter from './ComparisonFilter';

const NumericFilters = () => {
  const { value, column, comparison, setFilterByNum } = useContext(
    StarWarsContext
  );

  const comparisonFilters = () => {
    setFilterByNum(column, comparison, value);
  };

  return (
    <section>
      <ColumnFilter />
      <ComparisonFilter />
      <FilterInput />
      <button data-testid="button-filter" onClick={() => comparisonFilters()}>
        Filter
      </button>
    </section>
  );
};

export default NumericFilters;
