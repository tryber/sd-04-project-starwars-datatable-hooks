import React, { useContext, useState } from 'react';
import StartWarsContext from '../context/StarWarsContext';

function FilterName() {
  const [name, setName] = useState('');
  const { filterName } = useContext(StartWarsContext);

  const onChange = (e) => {
    setName(e.target.value);
    filterName(e.target.value);
  }

  return (
    <div>
      <label htmlFor="filter">Procurar</label>
      <input
        data-testid="name-filter"
        onChange={(e) => onChange(e)}
        value={name}
      />
    </div>
  );
}

export default FilterName;
