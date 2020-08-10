import React, { useContext } from 'react';
import StarWarsContext from '../context/StarWarsContext';

const FiltersPanel = () => {
  const { filterByNumericValues, rmFilter } = useContext(StarWarsContext);
  if (filterByNumericValues.length > 0) {
    return (
      <div>
        <h4>Filters</h4>
        <div>
          <ul>
            {filterByNumericValues.map(({ column, comparison, value }, index) => (
              <li key={column} data-testid="filter">
                {`${column} ${comparison} ${value}`}
                <button
                  type="button"
                  onClick={() => rmFilter(filterByNumericValues[index])}
                >
                  X
                </button>
              </li>
            ))}
          </ul>
        </div>
      </div>
    );
  }
  return <p>Add a filter</p>;
};

export default FiltersPanel;
