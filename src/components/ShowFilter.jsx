import React, { useContext } from 'react';
import { StarWarsContext } from '../context/starWarsContext';

const ShowFilter = () => {
  const { filters, removeFilter } = useContext(StarWarsContext);
  const filter = filters.filterByNumericValues;
  if (filter.length === 0) return null;
  return (
    <div className="numeric-filters">
      {filter.map(({ column, comparison, value }) => (
        <div key={column} data-testid='filter'>
          <span>{column}</span>
          <span> - {comparison}</span>
          <span> - {value}</span>
          <button
            type="button"
            name={column}
            onClick={(e) => {
              const remove = filter.filter((filtro) => filtro.column !== e.target.name);
              return removeFilter(remove);
            }}
          >
            X
          </button>
        </div>
      ))}
    </div>
  );
};

export default ShowFilter;
