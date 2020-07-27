import React, { useContext } from 'react';
import StarWarsContext from '../context/StarWarsContext';

const InputValue = () => {
  const states = useContext(StarWarsContext);

  return (
    <div>
      <label htmlFor="number">
        <input type="number" id="number" data-testid="value-filter" />
      </label>
      <div>
        <button type='button' data-testid="button-filter">
          Filter
        </button>
      </div>
    </div>
  );
};

export default InputValue;
