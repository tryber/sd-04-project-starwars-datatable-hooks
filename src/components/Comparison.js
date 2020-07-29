import React, { useContext } from 'react';
import StartWarsContext from '../context/StarWarsContext';

function Comparison() {
  const { comparison, setComparison } = useContext(StartWarsContext);
  const comparation = ['', 'maior que', 'menor que', 'igual a'];
  return (
    <select
        data-testid="comparison-filter"
        value={comparison}
        onChange={(e) => setComparison(e.target.value)}
      >
        {comparation.map((item) => (
          <option key={item} value={item}>
            {item}
          </option>
        ))}
      </select>
  );
}

export default Comparison;
