import React, { useContext } from 'react';
import FiltersContext from '../../containers/Filters/FiltersContext';

const FiltersList = () => {
  const { filters, handleFilterRemoval } = useContext(FiltersContext);
  const { filterByNumericValues } = filters;

  if (filterByNumericValues.length > 0) {
    return filterByNumericValues.map((filter) => (
      <div data-testid="filter">
        <span>{filter.column}</span>
        <span>{filter.comparison}</span>
        <span>{filter.value}</span>
        <button type="button" onClick={() => handleFilterRemoval(filter)}>
          X
        </button>
      </div>
    ));
  }

  return null;
};

export default FiltersList;
