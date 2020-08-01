import React, { useContext } from 'react';
import { StarWarsContext } from '../context/StarWarsContext';

const FilterInput = () => {
  const { value, setValue } = useContext(StarWarsContext);

  return (
    <input
      data-testid="value-filter"
      type="number"
      value={value}
      onChange={(e) => setValue(e.target.value)}
    />
  );
};

export default FilterInput;
