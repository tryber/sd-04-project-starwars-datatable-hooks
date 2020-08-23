import React, { useState } from 'react';
import useFilters from '../hooks/useFilters';

const getSelect = (name, options, state, setState) => (
  <select
    data-testid="column-filter"
    value={state}
    onChange={(event) => setState(event.target.value)}
  >
    <option disabled selected>{name}</option>
    {options.map((option) => (<option value={option}>{option}</option>))}
  </select>
);

export default function FilterByNumericValues() {
  const [column, setColumn] = useState('');
  const [comparison, setComparison] = useState('');
  const [number, setNumber] = useState(0);
  const { filterByNumericValues } = useFilters();

  const columns = [
    '',
    'population',
    'orbital_period',
    'diameter',
    'rotation_period',
    'surface_water',
  ];

  const comparisons = [
    '',
    'maior que',
    'menor que',
    'igual a',
  ];

  return (
    <div>
      <span>Number </span>
      {getSelect('column', columns, column, setColumn)}
      {getSelect('comparison', comparisons, comparison, setComparison)}
      <input
        type="number"
        data-testid="value-filter"
        value={number}
        onChange={(event) => setNumber(event.target.value)}
      />
      <button
        data-testid="button-filter"
        onClick={() => filterByNumericValues(column, comparison, number)}
      >
        Filtrar
      </button>
    </div>
  );
}
