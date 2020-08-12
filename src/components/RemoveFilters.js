import React, { useContext } from 'react';
import { PlanetsContext } from '../context';

export default function RemoveFilters() {
  const { filterByNumericValues, setFilterByNumericValues } = useContext(
    PlanetsContext
  );

  const 
  return filterByNumericValues.map((item) => (
    <div key={item.value} data-testid="filter">
      <span>{`${item.column} - ${item.comparison} - ${item.value} `}</span>
      <button type="button" onClick={() => setFilterByNumericValues(item)}>
        X
      </button>
    </div>
  ));
}
