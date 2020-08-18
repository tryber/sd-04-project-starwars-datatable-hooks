import React, { useState } from 'react';
import useFilters from '../hooks/useFilters';

const updateColumns = (filterByNumericValues) => {
  const columns = [
    '',
    'population',
    'orbital_period',
    'diameter',
    'rotation_period',
    'surface_water',
  ];
  const chooseColumns = filterByNumericValues.map(({ column }) => column);
  return columns.filter((el) => !chooseColumns.includes(el));
}

const getComparison = (setComparison) => {
  const comparison = ['', 'maior que', 'menor que', 'igual a'];
  return (
    <select
      data-testid="comparison-filter"
      value={comparison}
      onChange={(event) => setComparison(event)}
    >
      {comparison.map((el) => (
        <option key={el} value={el}>
          {el}
        </option>
      ))}
    </select>
  );
}

const getColumns = (column, setColumn, filterByNumericValues) => {
  const select = updateColumns(filterByNumericValues);
  return (
    <select
      data-testid="column-filter"
      value={column}
      onChange={(event) => setColumn(event)}
    >
      {select.map((item) => (
        <option key={item} value={item}>
          {item}
        </option>
      ))}
    </select>
  );
}

export default function FilterValues() {
  const [column, setColumn] = useState('a');
  const [comparison, setComparison] = useState('');
  const [number, setNumber] = useState('');
  const { filterByNumericValues, setFilterByNumericValues } = useFilters();

  return (
    <div>
      {getColumns(column, setColumn, filterByNumericValues)}
      {getComparison(comparison, setComparison)}
      <input
        type="number"
        value={number}
        data-testid="value-filter"
        onChange={(event) => setNumber(event)}
      />
      <button
        onClick={() => setFilterByNumericValues({ column, comparison, number })}
        data-testid="button-filter"
      >
        Filtrar
        </button>
    </div>
  );
}
