import React, { useContext } from 'react';
import StarWarsContext from '../../context/StarWarsContext';

function NumericFilterCard() {
  const { filters, deleteFilter } = useContext(StarWarsContext);
  const NumericFilters = filters.filterByNumericValues;

  return (
    <div>
      <div><h1>Filtros:</h1></div>
      <div>
        {NumericFilters.map((filter) => (
          <div data-testid="filter" className="filters">
            <p key={filter.value}>
              {filter.column} {filter.comparison} {filter.value}
            </p>
            <button
              type="button"
              onClick={() => deleteFilter(filter.column)}
            >
              X
            </button>
          </div>
        ))}
      </div>
    </div>
  )
}

export default NumericFilterCard;
