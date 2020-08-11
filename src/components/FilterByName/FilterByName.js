import React, { useContext } from 'react';
import { StarWarsContext } from '../../context/StarWarsContext';

const FilterByName = () => {
  const context = useContext(StarWarsContext);

  return (
    <input
      type="text"
      data-testid="name-filter"
      onChange={(e) => context.functions.filterByName(e.target.value)}
    />
  );
};

export default FilterByName;
