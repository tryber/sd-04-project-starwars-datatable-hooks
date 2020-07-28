import React from 'react';

const FilterName = () => (
  <div>
    <label htmlFor="name">Filter by name</label>
    <input data-testid="name-filter" id="name" type="text" />
  </div>
);

export default FilterName;
