import React from 'react';
import FilterName from './FilterName';
import FilterByNumericValues from './FilterByNumericValues';
import FiltersApplied from './FiltersApplied';
import FilterOrder from './FilterOrder';

const FilterBar = () => (
  <div className="d-flex align-items-center justify-content-around">
    <FilterName />
    <FilterByNumericValues />
    <FilterOrder />
    <FiltersApplied />
  </div>
);

export default FilterBar;
