import React, { useContext } from 'react';
import { SWcontext } from '../context/SWcontext.js';

const ShowFilters = () => {
  const { filterByNumericValues, removeFilter } = useContext(SWcontext);
  if (filterByNumericValues.length >= 1) {
    return (
      <div>
        Filters
        <ul>
          {filterByNumericValues.map(({ column, comparison, value }) => (
            <li key={column} data-testid="filter">
              {`${column} ${comparison} ${value} `}
              <button type="button" onClick={() => removeFilter(column)}>
                X
              </button>
            </li>
          ))}
        </ul>
      </div>
    );
  }
  return <div />;
};

export default ShowFilters;