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

const columnsToSort = () => {
  const allColuns = [
    'Name',
    'Climate',
    'Created',
    'Diameter',
    'Edited',
    'Films',
    'Gravity',
    'Orbital_period',
    'Population',
    'Rotation_period',
    'Surface_water',
    'Terrain',
    'URL',
  ];
  return allColuns;
};

export const getColumnsToSort = (onColumnChange, column) => {
  const select = columnsToSort();
  return (
    <select
      data-testid="column-sort"
      onChange={(event) => onColumnChange(event)}
      value={column}
    >
      {select.map((item) => (
        <option key={item} value={item.toLowerCase()}>
          {item}
        </option>
      ))}
    </select>
  );
};

export const getRadiosAscDesc = (onRadioChange) => (
  <div>
    <label htmlFor="ASC">ASC</label>
    <input
      type="radio"
      data-testid="column-sort-input-asc"
      id="ASC"
      name="order"
      value="ASC"
      onChange={(event) => onRadioChange(event)}
    />
    <label htmlFor="DESC">DESC</label>
    <input
      type="radio"
      data-testid="column-sort-input-desc"
      id="DESC"
      name="order"
      value="DESC"
      onChange={(event) => onRadioChange(event)}
    />
    // comment
  </div>
);
