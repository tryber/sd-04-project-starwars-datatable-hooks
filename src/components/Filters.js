import React from 'react';
import FilterName from './FilterName';
import FilterNumValues from './FilterNumValues';
import RemoveFilter from './RemoveFilter';
import ColumnOrder from './ColumnOrder';

const Filters = () => (
  <div>
    Filtros
    <FilterName />
    <FilterNumValues />
    <RemoveFilter />
    <ColumnOrder />
  </div>
);

export default Filters;
