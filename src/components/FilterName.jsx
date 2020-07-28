import React, { useContext } from 'react';
import { StarWarsContext } from '../context/starWarsContext';

const FilterName = () => {
  const { filterByName, filters } = useContext(StarWarsContext);
  return (
    <input
      data-testid="name-filter"
      type="text"
      value={filters.filterByName.name}
      onChange={(e) => filterByName(e.target.value)}
    />
  );
};

export default FilterName;
