import React, { useContext } from 'react';
import starWarsContext from '../context/StarWarsContext';

function FilterName() {
  const { setStateFilter } = useContext(starWarsContext);
  return (
    <div>
      <input
        type="text"
        placeholder="Nome do planeta"
        onChange={(event) =>
          setStateFilter({ name: event.target.value }, 'NAME')
        }
        data-testid="name-filter"
      />
    </div>
  );
}

export default FilterName;
