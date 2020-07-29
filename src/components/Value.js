import React, { useContext } from 'react';
import StartWarsContext from '../context/StarWarsContext';

function Value() {
  const { value, setValue } = useContext(StartWarsContext) 
  return (
    <input
      data-testid="value-filter"
      type="number"
      value={value}
      onChange={(e) => setValue(e.target.value)}
    />
  );
}

export default Value;
