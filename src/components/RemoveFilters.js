import React, { useContext } from 'react';
import { PlanetsContext } from '../context';

export default function RemoveFilters() {
  const { filterByNumericValues, setFilterByNumericValues } = useContext(
    PlanetsContext,
  );
  const onClick = (filterKeys) =>
    setFilterByNumericValues(filterKeys, [
      filterByNumericValues.filter((item) => item !== filterKeys),
    ]);
  return filterByNumericValues.map((item) => (
    <div key={item.value} data-testid="filter">
      <span>{`${item.column} - ${item.comparison} - ${item.value} `}</span>
      <button type="button" onClick={() => onClick(item)}>
        X
      </button>
    </div>
  ));
}
