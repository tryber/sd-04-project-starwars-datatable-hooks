import React from 'react';

const CreateInputComparison = ({ changeComparison }) => {
  return (
    <select
      onChange={(e) => changeComparison(e.target.value)}
      data-testid="comparison-filter"
      id="comparison"
    >
      <option defaultValue>Comparison</option>
      <option value="maior que">maior que</option>
      <option value="igual a">igual a</option>
      <option value="menor que">menor que</option>
    </select>
  );
};

export default CreateInputComparison;
