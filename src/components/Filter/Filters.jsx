import React from 'react';
import FilterName from './FilterName';
import FilterOrder from './FilterOrder';
import FilterValues from './FilterValues';

function Filter() {
  return (
    <div>
      <FilterName />
      <FilterValues />
      <FilterOrder />
    </div>
  );
}

export default Filter;
