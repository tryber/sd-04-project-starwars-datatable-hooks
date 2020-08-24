import React from 'react';
import RemoveFilters from './RemoveFilters';
import FilterName from './FilterName';
import FilterOrder from './FilterOrder';

function Filters() {
  return (
    <div>
      <FilterName />
      <FilterOrder />
      <RemoveFilters />
    </div>
  );
}

export default Filters;
