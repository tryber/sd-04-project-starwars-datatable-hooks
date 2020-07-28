import React, { useContext } from 'react';
import StarWarsContext from '../context/StarWarsContext';

const Comparative = () => {
  const states = useContext(StarWarsContext);
  const { selectedFilters } = states;
  const comparison = ['maior que', 'igual a', 'menor que'];

  return (
    <div>
      <select
        onChange={selectedFilters}
        name="comparison"
        data-testid="comparison-filter"
        defaultValue="default"
      >
        <option value="default" disabled>Choose a Comparative</option>
        {comparison.map((op) => <option key={op} value={op}>{op}</option>)}
      </select>
    </div>
  );
};

export default Comparative;
