import React, { useContext } from 'react';
import { StarWarsContext } from '../../context/StarWarsContext';

const NumericFilters = () => {
  const {
    filters: { filterByNumericValues },
    functions: { resetNumericFilters },
  } = useContext(StarWarsContext);
  if (filterByNumericValues.length === 0) return null;
  return (
    <div className="numeric-filters">
      {filterByNumericValues.map(({ column, comparison, value }) => (
        <div data-testid="filter" key={column}>
          <span>{column}</span>
          <span>{comparison}</span>
          <span>{value}</span>
          <button
            name={column}
            type="button"
            onClick={(e) => {
              const newFilters = filterByNumericValues.filter(
                (numericFilter) => numericFilter.column !== e.target.name,
              );
              return resetNumericFilters(newFilters);
            }}
          >
            X
          </button>
        </div>
      ))}
    </div>
  );
};

export default NumericFilters;
