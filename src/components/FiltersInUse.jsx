import React, { useContext } from 'react';
import SWContext from '../context/StarWarsContext';

const FiltersInUse = () => {
  const { filterByNumericValues, removeFilter } = useContext(SWContext);

  if (typeof filterByNumericValues && filterByNumericValues.length > 0) {
    return (
      <div>
        <ul>
          {filterByNumericValues.map((filter) => (
            <li data-testid="filter" key={`${filter.column}`}>
              {`${filter.column} ${filter.comparison} ${filter.value}`}
              <button type="button" onClick={() => removeFilter(filter.column)}>
                x
              </button>
            </li>
          ))}
        </ul>
      </div>
    );
  }
  return (
    <div>
      <p>Nothing being filtered!</p>
    </div>
  );
};

export default FiltersInUse;
