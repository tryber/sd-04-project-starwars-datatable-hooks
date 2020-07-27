import React, { useContext } from 'react';
import StarWarsContext from '../context/StarWarsContext';

function FilterName() {
  const { getAndSetName } = useContext(StarWarsContext);
  return (
    <div>
      <input
        type="text"
        data-testid="name-filter"
        placeholder="Pesquise o Planeta"
        onChange={(e) => getAndSetName(e.target.value.toLowerCase())}
      />
    </div>
  );
}

export default FilterName;
