import React, { useContext } from 'react';

import { StarWarsContext } from '../../context/StarWarsContext';

const FiltersApplied = () => {
  const { filter, removeFilter } = useContext(StarWarsContext);
  const filters = filter.filterByNumericValues;
  return (
    <div>
      {filters.length > 0 ? <h3>Filters Applied: </h3> : null}
      {filters.map(({ column, comparison, value }) => (
        <div data-testid="filter" key={column}>
          <p>Column: {column}</p>
          <p>Comparison: {comparison}</p>
          <p>Value: {value}</p>
          <button onClick={() => removeFilter(column)} type="button">
            remove filter
          </button>
        </div>
      ))}
    </div>
  );
};

export default FiltersApplied;
