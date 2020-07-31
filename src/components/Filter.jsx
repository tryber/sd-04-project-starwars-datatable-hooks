import React, { useContext } from 'react';
import StarWarsContext from '../context/StarWarsContext';

export default function () {
  const { filters, setNameFilter, filteredData } = useContext(StarWarsContext);
  return (
    filteredData.length > 0 && (
      <div>
        <input
          data-testis="name-filter"
          value={filters.filterByName.name}
          onChange={(e) => setNameFilter(e.target.value)}
        />
      </div>
    )
  );
}
