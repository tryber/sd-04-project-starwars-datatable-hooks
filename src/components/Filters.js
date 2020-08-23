import React, { useContext } from 'react';
import { StarWarsContext } from '../context/StarWarsContext';

const Filters = () => {
  const { filterByNumericValues, setFilterByNumericValues } = useContext(
    StarWarsContext,
  );
  return (
    <div>
      <h1>Filters</h1>
      <ul>
        {filterByNumericValues.map(({ column, comparison, value }) => (
          <li key={column} data-testid="filter">
            {`${column} ${comparison} ${value}`}
            <button
              type="button"
              onClick={(event) =>
                setFilterByNumericValues(
                  filterByNumericValues.filter((c) => c.column !== column),
                )
              }
            >
              X
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Filters;
