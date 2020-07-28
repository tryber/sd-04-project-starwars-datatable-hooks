import React from 'react';
import FilterBar from './FilterBar';

const FilterName = () => (
  <div>
    <label htmlFor="name">Filter by name</label>
    <input data-testid="name-filter" id="name" type="text" />
  </div>
);

export default FilterName;
