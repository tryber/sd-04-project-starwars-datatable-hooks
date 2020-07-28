import React from 'react';
import { useStarWars } from '../context/StarWarsContext';

export default function ListFilters() {
  const { filtersNumeric, setFiltersNumeric } = useStarWars();

  return (
    <div>
      {filtersNumeric.map((el) => (
        <li key={el.column} data-testid="filter">
          <span>{el.column}</span>
          <span>{el.comparison}</span>
          <button
            data-testid="filter"
            onClick={() => setFiltersNumeric(filtersNumeric.filter((e) => e.column !== el.column))}
          />
        </li>
      ))}
    </div>
  );
}
