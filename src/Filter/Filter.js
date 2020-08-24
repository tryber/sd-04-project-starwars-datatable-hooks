import React from 'react';
import RemoveFilter from './RemoveFilter';
import FilterOrder from './Order';
import SearchComponent from './searchComponent';
import NumericFilter from './numericFilter';

function Filters() {
  return (
    <div>
      <SearchComponent />
      <FilterOrder />
      <NumericFilter />
      <RemoveFilter />
    </div>
  );
}

export default Filters;
