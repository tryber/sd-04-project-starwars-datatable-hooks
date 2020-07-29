import React from 'react';

function updateColumns(numericValues) {
  const columns = [
    '',
    'population',
    'orbital_period',
    'diameter',
    'rotation_period',
    'surface_water',
  ];
  const stateColumns = numericValues.map(({ column }) => column);
  return columns.filter((option) => !stateColumns.includes(option));
}

export function buildColumns(column, numericValues, setColumns) {
  const select = updateColumns(numericValues);
  return (
    <select
      data-testid="column-filter"
      value={column}
      onChange={(e) => setColumns(e)}
    >
      {select.map((item) => (
        <option key={item} value={item}>
          {item}
        </option>
      ))}
    </select>
  );
}

export function buildComparison(comparison, setComparison) {
  const comparations = ['', 'maior que', 'menor que', 'igual a'];
  return (
    <select
      onChange={(e) => setComparison(e)}
      data-testid="comparison-filter"
      value={comparison}
    >
      {comparations.map((option) => (
        <option key={option} value={option}>
          {option}
        </option>
      ))}
    </select>
  );
};
