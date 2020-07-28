import React, { useContext } from 'react';
import { StarWarsContext } from '../context/StarWarsContext.js';

const InputFilterByName = () => {
  const { filters, setFilterByName, dataFiltered } = useContext(StarWarsContext);

  return (
    dataFiltered.length > 0 && (
      <div>
        <input
          data-testid="name-filter"
          defaultValue={filters.filterByName.name}
          onChange={(event) => setFilterByName(event.target.value)}
          placeholder="Search by Name"
        />
      </div>
    )
  );
};

export default InputFilterByName;
