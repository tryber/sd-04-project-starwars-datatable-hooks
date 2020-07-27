import React from 'react';

const updateColumns = (numericValues) => {
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
};

export const getColumns = (onColumnChange, numericValues, column) => {
  const select = updateColumns(numericValues);
  return (
    <select
      onChange={(event) => onColumnChange(event)}
      data-testid="column-filter"
      value={column}
    >
      {select.map((option) => (
        <option key={option} value={option}>
          {option}
        </option>
      ))}
    </select>
  );
};

export const getComparation = (onComparationChange, comparation) => {
  const comparations = ['', 'maior que', 'menor que', 'igual a'];
  return (
    <select
      onChange={(event) => onComparationChange(event, 'comparation')}
      data-testid="comparison-filter"
      value={comparation}
    >
      {comparations.map((option) => (
        <option key={option} value={option}>
          {option}
        </option>
      ))}
    </select>
  );
};
