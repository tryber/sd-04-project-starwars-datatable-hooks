import React, { useContext } from 'react';
import StartWarsContext from '../context/StarWarsContext';

function FilterName() {
  const { name, setName } = useContext(StartWarsContext);

  return (
    <div>
      <label htmlFor="filter">Procurar</label>
      <input
        data-testid="name-filter"
        onChange={(e) => setName(e.target.value)}
        value={name}
      />
    </div>
  )
}

export default FilterName;
