import React, { useContext } from 'react';
import { StarWarsContext } from '../../context/StarWarsContext';

const removeFilter = (
  filterNow,
  filtersCompare,
  setFilters,
  index,
  setColumn,
  filtersFather,
  columnCompare,
) => {
  filtersCompare.splice(index, 1);
  columnCompare.push(filterNow.column);
  setFilters({
    ...filtersFather,
    filterByNumericValues: filtersCompare,
  });
  setColumn([...columnCompare]);
};

const renderCards = (filters, setFilters, setColumn, filtersFather, columnCompare) => (
  <div className="filters-container">
    {filters.map((filter, index) => {
      return (
        <div key={`filter ${filter.column}`} data-testid="filter">
          <p>column: {filter.column}</p>
          <p>comparison: {filter.comparison}</p>
          <p>value: {filter.value}</p>
          <button
            onClick={() =>
              removeFilter(
                filter,
                filters,
                setFilters,
                index,
                setColumn,
                filtersFather,
                columnCompare,
              )
            }
          >
            X
          </button>
        </div>
      );
    })}
  </div>
);

const PutFilters = () => {
  const { setFilters, filters, setColumn, columnCompare } = useContext(StarWarsContext);
  const { filterByNumericValues } = filters;
  return !filterByNumericValues.length ? (
    <div />
  ) : (
    renderCards(filterByNumericValues, setFilters, setColumn, filters, columnCompare)
  );
};

export default PutFilters;
