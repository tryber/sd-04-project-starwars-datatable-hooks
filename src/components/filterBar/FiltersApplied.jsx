import React, { useContext } from 'react';

import { StarWarsContext } from '../../context/StarWarsContext';

const FiltersApplied = () => {
  const { filter, removeFilter } = useContext(StarWarsContext);
  const filters = filter.filterByNumericValues;
  return (
    <div>
      {filters.length > 0 ? <h3>Filters Applied: </h3> : null}
      {filters.length > 0
        ? filters.map((filtro, index) => (
            <div data-testid="filter" key={index}>
              <p>Column: {filtro.column}</p>
              <p>Comparison: {filtro.comparison}</p>
              <p>Value: {filtro.value}</p>
              <button onClick={() => removeFilter(filtro.column)} type="button">
                remove filter
              </button>
            </div>
          ))
        : null}
    </div>
  );
};

export default FiltersApplied;
