import React, { useContext } from 'react';
import OptionSelectFilter from './OptionSelectFilter';
import { StarWarsContext } from '../context/StarWarsContext.js';

const InputFilterByName = () => {
  const { filters, setFilterByName } = useContext(StarWarsContext);

  return (
    <div>
      <input
        data-testid="name-filter"
        defaultValue={filters.filterByName.name}
        onChange={(event) => setFilterByName(event.target.value)}
        placeholder="Search by Name"
      />
      <OptionSelectFilter />
    </div>
  );
};

export default InputFilterByName;
