import React, { useContext } from 'react';
import { StarWarsContext } from '../context/StarWarsContext';

const FilterSearch = () => {
  const [store, setStore] = useContext(StarWarsContext);

  const setName = (event) => {
    setStore({
      ...store,
      filters: {
        ...store.filters,
        filterByName: {
          ...store.filters.filterByName,
          name: event.target.value,
        },
      },
    });
  };

  return (
    <div className="filter-search-container">
      <input
        type="text"
        name="search"
        id="search"
        placeholder="Search by name"
        data-testid="name-filter"
        className="filter-search-input"
        onChange={(event) => setName(event)}
      />
    </div>
  );
};

export default FilterSearch;
