import React, { useContext } from 'react';
import { StarWarsContext } from '../../context/StarWarsContext';

const changeNameFilter = (newName, filters, setFilters) => {
  setFilters({
    ...filters,
    filterByName: {
      ...filters.filterByName,
      name: newName,
    },
  });
};

const NameFilter = ({ filters }) => {
  const { setFilters } = useContext(StarWarsContext);
  return (
    <div>
      <label htmlFor="nameFilter">
        Buscar Nome:
        <input
          data-testid="name-filter"
          type="text"
          id="nameFilter"
          onChange={({ target: {value} }) =>
            changeNameFilter(value, filters, setFilters)
          }
        />
      </label>
    </div>
  );
};

export default NameFilter;
