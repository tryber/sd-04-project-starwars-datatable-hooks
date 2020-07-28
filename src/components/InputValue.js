import React, { useContext } from 'react';
import StarWarsContext from '../context/StarWarsContext';

const InputValue = () => {
  const states = useContext(StarWarsContext);
  const { selectedFilters, handleFilter } = states;

  return (
    <div>
      <label htmlFor="number">
        Choose a value for comparison:
        <input
          name="value"
          onChange={selectedFilters}
          type="number"
          id="number"
          data-testid="value-filter"
        />
      </label>
      <div>
        <button onClick={handleFilter} type="button" data-testid="button-filter">
          Filter
        </button>
      </div>
    </div>
  );
};

export default InputValue;
