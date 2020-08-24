import React from 'react';
import RemoveFilters from './RemoveFilters';
import FilterName from './FilterName';
import FilterOrder from './FilterOrder';
import FilterValues from './FilterValues';

function Filters() {
  return (
    <div>
      <FilterOrder />
      <FilterName />
      <FilterValues />
      <RemoveFilters />
    </div>
  );
}

export default Filters;
