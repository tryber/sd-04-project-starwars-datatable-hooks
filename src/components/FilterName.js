import React, { useContext } from 'react';
import StarWarsContext from '../context/StarWarsContext';

const FilterName = () => {
  const { filters, setFilters } = useContext(StarWarsContext);
  function changeName(event) {
    setFilters({ ...filters, filterByName: { name: event.target.value } });
  }

  return (
    <div>
      <input
        data-testid="name-filter"
        type="text"
        placeholder="Search"
        onChange={(event) => changeName(event)}
      />
    </div>
  );
};

export default FilterName;
