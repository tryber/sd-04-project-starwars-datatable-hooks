import React, { useContext } from 'react';
import { StarWarsContext } from '../../context/StarWarsProvider';

const FiltersApplied = () => {
  const { filter, removeFilter } = useContext(StarWarsContext);
  const filters = filter.filterByNumericValues;
  return (
    <div className="d-flex align-items-center">
      {filters.length > 0 ? <h5>Filters Applied: </h5> : null}
      {filters.map(({ column, comparison, value }) => (
        <div className="filters-div" data-testid="filter" key={column}>
          <p>Column: {column}</p>
          <p>Comparison: {comparison}</p>
          <p>Value: {value}</p>
          <button className="btn btn-dark" onClick={() => removeFilter(column)} type="button">
            remove
          </button>
        </div>
      ))}
    </div>
  );
};

export default FiltersApplied;
