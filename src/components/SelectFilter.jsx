import React, { useContext } from 'react';
import { StarWarsContext } from '../context/StarWarsContext.js';

const SelectFilter = () => {
  const { filters, deleteFilter } = useContext(StarWarsContext);
  return (
    filters.filterByNumericValues.length > 0 &&
    filters.filterByNumericValues.map(({ column, comparison, value }) => (
      <div className="btn bg-info" key={column} data-testid="filter">
        {`${column} ${comparison} ${value}`}
        <div className="btn">
          <button className="btn bg-danger" type="button" onClick={() => deleteFilter(column)}>
            X
          </button>
        </div>
      </div>
    ))
  );
};

export default SelectFilter;
