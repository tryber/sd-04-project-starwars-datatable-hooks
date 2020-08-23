import React from 'react';
import useFilters from '../context/useFilters';

export default function FilterByName() {
  const { filterByName } = useFilters();

  return (
    <div>
      <label htmlFor="name">Name </label>
      <input
        type="text"
        id="name"
        data-testid="name-filter"
        onChange={(event) => filterByName(event.target.value)}
        placeholder="search planets by name"
      />
    </div>
  );
}
