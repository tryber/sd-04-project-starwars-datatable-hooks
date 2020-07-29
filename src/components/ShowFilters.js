import React, { useContext } from 'react';
import { StarWarsContext } from '../context/StarWarsContext';

const ShowFilters = () => {
  const { filterByNumericValues, removeFilter } = useContext(StarWarsContext);
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
