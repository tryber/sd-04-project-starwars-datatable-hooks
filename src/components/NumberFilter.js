import React, { useContext } from 'react';
import StarWarsContext from '../context/StarWarsContext';

const NumberFilter = () => {
  const { setValue } = useContext(StarWarsContext);
  return (
    <input
      type="number"
      data-testid="value-filter"
      onChange={(e) => setValue(e.target.value)}
      name="value"
    />
  );
};

export default NumberFilter;
