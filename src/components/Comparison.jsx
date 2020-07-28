import React, { useContext } from 'react';
import StarWarsContext from '../context/StarWarsContext';

function Comparison() {
  const { handleChange } = useContext(StarWarsContext);
  const comparison = ['', 'maior que', 'igual a', 'menor que'];
  return (
    <div>
      <select name="comparison" data-testid="comparison-filter" onChange={handleChange}>
        {comparison.map((option) => (
          <option key={option} value={option}>
            {option}
          </option>
        ))}
      </select>
    </div>
  );
}

export default Comparison;
