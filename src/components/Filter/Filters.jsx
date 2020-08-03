import React from 'react';
import FilterName from './FilterName';
import FilterOrder from './FilterOrder';
import FilterValues from './FilterValues';
import RemoveFilter from './RemoveFilter';

function Filter() {
  return (
    <div>
      <FilterName />
      <FilterValues />
      <FilterOrder />
      <RemoveFilter />
    </div>
  );
}

export default Filter;
