import React from 'react';
import FilterName from './FilterName';
import FilterByNumericValues from './FilterByNumericValues';
import FiltersApplied from './FiltersApplied';

const FilterBar = () => (
  <div>
    <FilterName />
    <FilterByNumericValues />
    <FiltersApplied />
  </div>
);

export default FilterBar;
