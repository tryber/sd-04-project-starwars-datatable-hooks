import React, { useContext } from 'react';
import Button from './utilityComponents/Button';
import { StarWarsContext } from '../context/StarWarsContext';

const ActiveFilters = () => {
  const { filters, functions } = useContext(StarWarsContext);
  const { filterByNumericValues } = filters;
  const { removeFilterByNumber } = functions;
  return (
    <div>
      {filterByNumericValues.map((filter) => (
        <div data-testid="filter" key={filter.column}>
          <p>{`${filter.column} ${filter.comparison} ${filter.value}`}</p>
          <Button
            onClick={() => removeFilterByNumber(filter.column)}
            desc="X"
          />
        </div>
      ))}
    </div>
  );
};

export default ActiveFilters;
