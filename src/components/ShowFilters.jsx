import React, { useContext } from 'react';
import StoreProvider from '../utils/store';

const deletFilter = (numberFilters, updateFilter, column) => {
  console.log(numberFilters, updateFilter, column);
  numberFilters.forEach((filter, index) => {
    if (filter.column === column) {
      numberFilters.splice(index, 1);
    }
  });
  updateFilter([...numberFilters]);
};
const ShowFilters = () => {
  const { filters } = useContext(StoreProvider);
  return (
    <ul>
      {filters.filterByNumericValues.map((option) => (
        <li id={option.column} data-testid="filter" key={option.column}>
          {option.column}
            :
          {option.value}
          <button
            type="button"
            onClick={(e) => {
              deletFilter(filters.filterByNumericValues,
                filters.setFilterByNumeric,
                option.column,
                e);
            }}
          >
            X
        </button>
        </li>
      ))}
    </ul>
  );
};

export default (ShowFilters);

