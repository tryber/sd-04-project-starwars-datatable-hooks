import React, { useContext } from 'react';
import StarWarsContext from '../context/StarWarsContext';

const Comparisons = () => {
  const states = useContext(starWarsContext);

  return (
    <div>
      <select data-testid="comparison-filter">
        <option>Comparisons</option>
      </select>
    </div>
  );
};

export default Comparisons;
