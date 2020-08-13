import React, { useState, useContext } from 'react';
import { PlanetsContext } from '../context';

const onChange = (event, field, col, com, num) => {
  switch (field) {
    case 'column':
      col(event.target.value);
      break;
    case 'comparison':
      com(event.target.value);
      break;
    case 'number':
      num(event.target.value);
      break;
    default:
      return null;
  }
  return null;
};

const updateColumns = (filter) => {
  const columns = [
    ' ',
    'population',
    'orbital_period',
    'diameter',
    'rotation_period',
    'surface_water',
  ];
  const chosenColumns = filter.map((it) => it.column);
  return columns.filter((item) => !chosenColumns.includes(item));
};

const getColumns = (
  filterByNumericValues,
  colum,
  setColumn,
  setComparison,
  setNumber,
) => {
  const select = updateColumns(filterByNumericValues);
  return (
    <select
      data-testid="column-filter"
      value={colum}
      onChange={(event) =>
        onChange(event, 'column', setColumn, setComparison, setNumber)
      }
    >
      {select.map((item) => (
        <option key={item} value={item}>
          {item}
        </option>
      ))}
    </select>
  );
};

const getComparison = (compariso, setColumn, setComparison, setNumber) => {
  const comparison2 = ['', 'maior que', 'menor que', 'igual a'];
  return (
    <select
      data-testid="comparison-filter"
      value={compariso}
      onChange={(event) =>
        onChange(event, 'comparison', setColumn, setComparison, setNumber)
      }
    >
      {comparison2.map((item) => (
        <option key={item} value={item}>
          {item}
        </option>
      ))}
    </select>
  );
};

export default function FilterValues() {
  const { filterByNumericValues, setFilterByNumericValues } = useContext(
    PlanetsContext,
  );
  const [colum, setColumn] = useState('');
  const [compariso, setComparison] = useState('');
  const [number, setNumber] = useState('');

  const onClick = () => {
    setFilterByNumericValues([
      ...filterByNumericValues,
      {
        column: colum,
        comparison: compariso,
        value: number,
      },
    ]);
    setColumn('');
    setComparison('');
    setNumber('');
  };

  return (
    <div>
      {getColumns(
        filterByNumericValues,
        colum,
        setColumn,
        setComparison,
        setNumber,
      )}
      {getComparison(compariso, setColumn, setComparison, setNumber)}
      <input
        data-testid="value-filter"
        type="number"
        value={number}
        onChange={(event) =>
          onChange(event, 'number', setColumn, setComparison, setNumber)
        }
      />
      <button data-testid="button-filter" type="submit" onClick={onClick}>
        Filtrar
      </button>
    </div>
  );
}
