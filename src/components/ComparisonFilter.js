import React, { useContext } from 'react';
import { StarWarsContext } from '../context/StarWarsContext';

const ComparisonFilter = () => {
  const { comparison, setComparison } = useContext(StarWarsContext);

  const numericOptions = ['maior que', 'menor que', 'igual a'];

  return (
    <select
      data-testid="comparison-filter"
      value={comparison}
      onChange={(e) => setComparison(e.target.value)}
    >
      <option value="" />
      {numericOptions.map((option) => (
        <option key={option} value={option}>
          {option}
        </option>
      ))}
    </select>
  );
};

export default ComparisonFilter;
